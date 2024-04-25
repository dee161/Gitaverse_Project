// refer docs  mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim:true,
    required:true
  },
  age: {
    type: Number, 
    required: true    
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
    min: 1000000000,
    max: 9999999999
  },
  gender: {
    type: String, 
    required: true    
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
  designation: {
    type: String,
    required: true,
    trim: true
  },
  referralSource: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    // required: true,
    trim: true
  },
  date: { type: String, default: Date.now },
})

const Register = mongoose.model('Register', RegisterSchema);

module.exports = { Register };