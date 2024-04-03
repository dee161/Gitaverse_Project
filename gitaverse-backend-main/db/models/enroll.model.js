// refer docs  mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose');

const EnrollSchema = new mongoose.Schema({
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
  course: {
    type: String,
    required: true,
    trim: true,
  },
})

const Enroll = mongoose.model('Contact', EnrollSchema);

module.exports = { Enroll };