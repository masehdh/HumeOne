const express = require("express");
const Attendee = require("../models/Attendee.js");
const mailer = require("../scripts/mailer.js");

const { signUpValidation } = require("../../resources/validation");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = signUpValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExists = await Attendee.findOne({ email: req.body.email })

  if (emailExists && emailExists.subscribed) {
    // Existing attendee who is already subscribed
    return res.status(400).json({ message: "This email has already been registered" })
  } else if (emailExists && !emailExists.subscribed) {
    // Existing attendee who is not subscribed
    const attendee = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      area: req.body.area,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      preferences: {
        maxTravelDistance: req.body.maxTravelDistance,
        interests: req.body.interests,
        availability: req.body.availability,
      },
      selectedEventTags: req.body.selectedEventTags,
      subscribed: true
    }

    try {
      const updatedAttendee = await Attendee.findOneAndUpdate({ email: req.body.email }, attendee)
      res
        .status(201)
        .json({
          code: 201,
          message: "Existing attendee has been subscribed",
          output: updatedAttendee,
        });
    } catch (error) {
      return res
        .status(400)
        .json({ code: error.code, message: error.message, stack: error.stack });
    }

  } else {
    // New attendee
    const attendee = new Attendee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      area: req.body.area,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      preferences: {
        maxTravelDistance: req.body.maxTravelDistance,
        interests: req.body.interests,
        availability: req.body.availability,
      },
      selectedEventTags: req.body.selectedEventTags,
      subscribed: true
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
  }
});

module.exports = router;
