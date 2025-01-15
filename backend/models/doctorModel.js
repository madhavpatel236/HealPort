const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  fees:{
    type: Number,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  date:{
    type: Number,
    default: Date.now,
  },
  slots_booked:{
    type: Object,
    default: {},
  }
  },
  { minimize: false }
); // here {minimize:false} was enable or use the slots_booked field to be empty object if it's not available or true then we can not able to use empty object in this schema

// Checks if a model named "doctor" already exists in mongoose.models Prevents re-compilation of models if they're already defined Helps avoid the "Cannot overwrite model once compiled" error
const doctorModels = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

module.exports = doctorModels;