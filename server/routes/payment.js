const express = require("express");
const mailer = require("../scripts/mailer");

const STRIPE_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_LIVE_SECRET_KEY
    : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = require("stripe")(STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: "price_1JKpdnGvJIobDPYag3d0LgJF",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://${process.env.DOMAIN}/event-registration-confirmation?eventId=${req.body.eventId}&email=${req.body.email}`,
    cancel_url: `http://${process.env.DOMAIN}/event-registration`,
  });
  res.status(200).json({ url: session.url });
});

router.post("/webhook", express.json({ type: "application/json" }), async (request, response) => {
    const event = request.body;
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutObject = event.data.object;
        const session = await stripe.checkout.sessions.retrieve(checkoutObject.id, {
          expand: ["line_items", "line_items.data.price"],
        });
        mailer.sendEventConfirmation(checkoutObject.customer_details.email, session.line_items.data.price.product);
        // mailer.sendEventConfirmation("maseh46@gmail.com", "prod_JynEqhz2NOTQqk");
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

module.exports = router;
