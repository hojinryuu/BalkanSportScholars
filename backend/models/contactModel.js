const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  // date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);