const express = require("express");
const Attendee = require("../models/Attendee.js");
const mailer = require("../scripts/mailer.js")

const { emailValidation } = require("../scripts/validation");

const router = express.Router();

router.post("/check-email", async (req, res) => {
  const { error } = emailValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const attendeeExists = await Attendee.findOne({ email: req.body.email })
    if (attendeeExists !== null) {
      return res.status(200).json({ code: 200, message: "Attendee with this email exists", output: attendeeExists.email })
    } else {
      return res.status(200).json({ code: 200, message: "Attendee with this email does not exist" })
    }
  } catch (error) {
    return res.status(400).json({ code: error.code, message: error.message, stack: error.stack });
  }
})

router.post("/", async (req, res) => {
  try {
    await mailer.send()
    res.status(201).json({ code: 200, message: "email sent", output: "" });
  } catch (error) {
    return res.status(400).json({ code: error.code, message: error.message, stack: error.stack });
  }
})


module.exports = router;