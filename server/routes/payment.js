const express = require("express");
const mailer = require("../scripts/mailer");

const STRIPE_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = require("stripe")(STRIPE_KEY);

const router = express.Router();

const endpointSecret = process.env.NODE_ENV === "production"
  ? process.env.STRIPE_REGISTRATION_CONFIRMATION_EPS
  : process.env.STRIPE_TEST_REGISTRATION_CONFIRMATION_EPS

router.post("/create-checkout-session", express.json(), async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
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

router.post("/registration-confirmation-email", express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

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
      const session = await stripe.checkout.sessions.retrieve(checkoutObject.id, {
        expand: ["line_items", "line_items.data.price"],
      });
      mailer.sendEventConfirmation(checkoutObject.customer_details.email, session.line_items.data[0].price.product);
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
