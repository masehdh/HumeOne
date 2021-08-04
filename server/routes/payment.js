const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  console.log("test1");
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
    success_url: `http://${process.env.DOMAIN}:3000/event-registration-confirmation`,
    cancel_url: `http://${process.env.DOMAIN}:3000/event-registration`,
  });
  console.log(session.url);
  res.status(200).json({ url: session.url })
});

module.exports = router;
