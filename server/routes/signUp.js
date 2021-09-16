const express = require("express");
const Attendee = require("../models/Attendee.js");
const mailer = require("../scripts/mailer.js");

const { signUpValidation } = require("../../resources/validation");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = signUpValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExists = await Attendee.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).json({ message: "This email has already been registered" })

  const attendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    attendeeInfo: req.body.attendeeInfo,
    preferences: {
      maxTravelDistance: req.body.maxTravelDistance,
      interests: req.body.interests,
      availability: req.body.availability,
    },
    selectedEventTags: req.body.selectedEventTags
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
});

router.post("/send", async (req, res) => {
  try {
    await mailer.send();
    res.status(201).json({ code: 200, message: "email sent", output: "" });
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
});

module.exports = router;
