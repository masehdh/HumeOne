// MODULES
const express = require("express");
// SCRIPTS
const mailer = require("../scripts/mailer");
// MODELS
const Attendee = require("../models/Attendee.js");
// INITIALIZING VARIABLES
const STRIPE_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = require("stripe")(STRIPE_KEY);

const { emailValidation } = require("../../resources/validation.js");

const endpointSecret = process.env.NODE_ENV === "production"
  ? process.env.STRIPE_REGISTRATION_CONFIRMATION_EPS
  : process.env.STRIPE_TEST_REGISTRATION_CONFIRMATION_EPS


// ROUTING
const router = express.Router();

// Route to check if the user has signed up, and whether they have already registered for this event
router.post("/check-email", express.json(), async (req, res) => {
  const { error } = emailValidation({ email: req.body.email });
  if (error) return res.status(400).json({ code: 400, message: error.details[0].message, stack: null });

  try {
    const attendeeExists = await Attendee.findOne({ email: req.body.email })
    if (attendeeExists !== null) {
      alreadyRegistered = attendeeExists.eventIds.includes(req.body.eventId)

      // User is signed up and already registered
      if (alreadyRegistered) return res.status(200).json({ code: 200, message: "It appears you have already registered for this event", output: { email: attendeeExists.email, alreadyRegistered: true } })
      // User is signed up but has not yet registered
      return res.status(200).json({ code: 200, message: "Attendee with this email exists", output: { email: attendeeExists.email, alreadyRegistered: false } })
    } else {
      // User has not signed up, and needs to do so before registering
      return res.status(200).json({ code: 200, message: "Attendee with this email does not exist", output: { alreadyRegistered: null } })
    }
  } catch (error) {
    return res.status(400).json({ code: error.code, message: error.message, stack: error.stack });
  }
})


router.post("/create-checkout-session", express.json(), async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: req.body.email,
    line_items: [
      {
        price: req.body.priceId,
        quantity: 1,
        tax_rates: ['txr_1JL7CIGvJIobDPYadVD6Zvts'],
      },
    ],
    mode: "payment",
    success_url: `http://${process.env.DOMAIN}/event-registration-confirmation?eventId=${req.body.eventId}`,
    cancel_url: `http://${process.env.DOMAIN}/event-registration?eventId=${req.body.eventId}`,
  });
  res.status(200).json({ url: session.url });
});


router.post("/confirm-registration", express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  // Confirm that the request is coming from stripe
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  }
  catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutObject = event.data.object;

      // retrieve checkout session data based on response object
      const session = await stripe.checkout.sessions.retrieve(checkoutObject.id, {
        expand: ["line_items", "line_items.data.price"],
      });

      const productId = session.line_items.data[0].price.product

      const customerEmail = checkoutObject.customer_details.email

      // Updated the attendee model to track that a user has signed up for the event
      try {
        await Attendee.updateOne({ email: customerEmail }, { $push: { eventIds: productId } })
        await mailer.sendEventConfirmation(customerEmail, productId);
      } catch (error) {
        return res.status(400).json({ code: error.code, message: error.message, stack: error.stack });
      }

      // send a confirmation email
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
  // Return a 200 res to acknowledge receipt of the event
  res.send();
});

module.exports = router;
