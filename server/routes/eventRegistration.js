// MODULES
const express = require("express");
// SCRIPTS
const mailer = require("../scripts/mailer");
// MODELS
const Attendee = require("../models/Attendee.js");
const eventList = require("../../resources/events.json");
// INITIALIZING VARIABLES
const STRIPE_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = require("stripe")(STRIPE_KEY);

const { emailValidation, registrationValidation } = require("../../resources/validation.js");

const endpointSecret =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_REGISTRATION_CONFIRMATION_EPS
    : process.env.STRIPE_TEST_REGISTRATION_CONFIRMATION_EPS;

// ROUTING
const router = express.Router();


router.post("/check-spots", express.json(), async (req, res) => {
  try {
    let registeredAttendees = await Attendee.find({
      eventIds: req.body.eventId,
    })

    registeredAttendees = registeredAttendees.map(({ firstName, lastName }) => {
      return { firstName: `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}`, lastName: `${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}` }
    })

    res
      .status(200)
      .json({ code: 200, output: { spotsReserved: registeredAttendees.length, registeredAttendees: registeredAttendees } });
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
});

router.post("/register-user", express.json(), async (req, res) => {
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExists = await Attendee.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).json({ message: "This email has already been registered" })

  const attendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    subscribed: false,
  });

  try {
    const savedAttendee = await attendee.save();
    res
      .status(201)
      .json({
        code: 201,
        message: "attendee saved successfully",
        output: savedAttendee,
      });
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
})

router.post("/create-checkout-session", express.json(), async (req, res) => {
  // Get event details
  const event = eventList.find((event) => event.id === req.body.eventId);

  // Validate email
  const { error } = emailValidation({ email: req.body.email });
  if (error)
    return res
      .status(400)
      .json({ code: 400, message: error.details[0].message, stack: null });

  // Check if user is not signed up
  const signedUp = await Attendee.findOne({ email: req.body.email })

  if (!signedUp) return res.status(200).json({ code: 200, message: "", output: { notSignedUp: true } });

  // Make sure user has not already registered
  let registeredAttendees = await Attendee.find({
    eventIds: req.body.eventId,
  })

  const alreadyRegistered = registeredAttendees.map(({ email }) => email).includes(req.body.email);

  if (alreadyRegistered) return res.status(200).json({ code: 200, message: "It appears you have already registered for this event", output: { email: req.body.email, alreadyRegistered: alreadyRegistered } });

  // Check that spots are available
  const spotsReserved = registeredAttendees.length;

  if (spotsReserved >= event.maxSpots) {
    return res
      .status(200)
      .json({
        code: 200,
        message:
          "Unfortunately there are no spots remaining, please stay tuned for more events",
        output: { registrationClosed: true },
      });
  }

  // Check that the payment deadline has not passed
  if (Date.now() > new Date(event.paymentDeadline)) {
    return res
      .status(200)
      .json({
        code: 200,
        message:
          "Unfortunately the payment deadline has passed, please stay tuned for more events",
        output: { registrationClosed: true },
      });
  }

  // Check if event is free
  if (Number(event.reservationFee) === 0) {
    try {
      // Track that the attendee has registered
      await Attendee.updateOne(
        { email: req.body.email },
        { $push: { eventIds: req.body.eventId } }
      );

      // Send confirmation email
      await mailer.sendEventConfirmation(req.body.email, req.body.eventId)
    } catch (error) {
      return res
        .status(400)
        .json({ code: error.code, message: error.message, stack: error.stack });
    }

    // Send response to redirect to confirmation page
    return res
      .status(200)
      .json({
        code: 200,
        output: { freeEvent: true },
      });
  }

  // Create stripe session
  const priceId = process.env.NODE_ENV === "production"
    ? event.priceId :
    event.testPriceId

  const taxRate = process.env.NODE_ENV === "production"
    ? "txr_1JL7CIGvJIobDPYadVD6Zvts" :
    "txr_1JL7KtGvJIobDPYalPLiHIRM"

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: req.body.email,
    line_items: [
      {
        price: priceId,
        quantity: 1,
        tax_rates: [taxRate],
      },
    ],
    mode: "payment",
    success_url: `http://${process.env.DOMAIN}/event-registration-confirmation?eventId=${req.body.eventId}`,
    cancel_url: `http://${process.env.DOMAIN}/event-registration?eventId=${req.body.eventId}`,
  });
  res.status(200).json({ url: session.url, output: {} });
});

// Stripe webhook after successful payment
router.post(
  "/confirm-registration",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    // Confirm that the request is coming from stripe
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutObject = event.data.object;

        // retrieve checkout session data based on response object
        const session = await stripe.checkout.sessions.retrieve(
          checkoutObject.id,
          {
            expand: ["line_items", "line_items.data.price"],
          }
        );

        const productId = session.line_items.data[0].price.product;

        const customerEmail = checkoutObject.customer_details.email;

        // Updated the attendee model to track that a user has signed up for the event
        try {
          // Update DB to track that they have attended this event
          await Attendee.updateOne(
            { email: customerEmail },
            { $push: { eventIds: productId } }
          );

          // Send email confirmation
          await mailer.sendEventConfirmation(customerEmail, productId);
        } catch (error) {
          return res
            .status(400)
            .json({
              code: error.code,
              message: error.message,
              stack: error.stack,
            });
        }
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    // Return a 200 res to acknowledge receipt of the event
    res.send();
  }
);

module.exports = router;
