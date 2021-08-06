const express = require("express");

const STRIPE_KEY = process.env.NODE_ENV === "production" ? process.env.STRIPE_LIVE_SECRET_KEY : process.env.STRIPE_TEST_SECRET_KEY

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
  res.status(200).json({ url: session.url })
});

module.exports = router;
