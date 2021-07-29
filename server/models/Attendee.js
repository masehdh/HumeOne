const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  event: {},
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  attendeeInfo: {
    type: String,
    required: false,
  },
}, { timestamps: true }
);

module.exports = mongoose.model("Attendees", attendeeSchema);
