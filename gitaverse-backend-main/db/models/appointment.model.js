// refer docs  mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
    min: 1000000000,
    max: 9999999999
  },
  pinCode: {
    type: Number,
    required: true,
    trim: true,
    min: 1,
    max: 999999
  },
  city: {
    type: String, 
    // required: true  
  },
  state: {
    type: String, 
    // required: true    
  },
  countryCode: {
    type: String, 
    // required: true    
  },

  date: { type: String, default: Date.now},
  
})

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = { Appointment };