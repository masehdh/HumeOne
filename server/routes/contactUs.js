const express = require("express");
const mailer = require("../scripts/mailer.js");

const { contactUsValidation } = require("../../resources/validation");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = contactUsValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    await mailer.contactUs(req.body.name, req.body.email, req.body.subject, req.body.messageBody)
    res
      .status(201)
      .json({
        code: 200,
        message: "Message sent successfully",
      });
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
});

module.exports = router;