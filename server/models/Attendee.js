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
}, { _id: false });

const preferenceSchema = new mongoose.Schema({
  maxTravelDistance: { type: Number },
  interests: [{ type: String }],
  availability: [{ type: String }],
}, { _id: false })

const attendeeSchema = new mongoose.Schema({
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
  area: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
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
  birthdate: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    trim: true
  },
  preferences: {
    type: preferenceSchema,
    required: true
  },
  selectedEventTags: [{ type: String }],
  eventIds: [{
    type: String,
    required: false
  }]
}, { timestamps: true }
);


module.exports = mongoose.model("Attendees", attendeeSchema);