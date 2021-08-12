const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
  preferredAgeGroup: [
    {
      type: String,
    }
  ],
  interests: [
    {
      type: String,
    }
  ],
  availability: [
    {
      type: String,
    }
  ],
})

const attendeeSchema = new mongoose.Schema({
  eventIds: [{
    type: String,
    required: false
  }],
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  attendeeInfo: {
    type: String,
    required: false,
    trim: true
  },
  preferences: {
    type: preferenceSchema,
  }
}, { timestamps: true }
);


module.exports = mongoose.model("Attendees", attendeeSchema);
