const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
});

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
  address: {
    address: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: pointSchema,
      index: '2dsphere',
      required: true,
    },
  },
  gender: {
    type: String,
    trim: true
  },
  birthdate: {
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