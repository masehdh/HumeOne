const express = require("express");
const Attendee = require("../models/Attendee.js");

const { eventRegistrationValidation } = require("../scripts/validation");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = eventRegistrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const attendee = new Attendee({
    eventId: req.body.eventId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    attendeeInfo: req.body.attendeeInfo,
  });

  try {
    const savedAttendee = await attendee.save();
    res.status(201).json({ code: 201, message: "attendee saved successfully", output: savedAttendee });
  } catch (error) {
    return res.status(400).json({ code: error.code, message: error.message, stack: error.stack });
  }
})


module.exports = router;