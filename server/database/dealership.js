const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dealershipSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model('Dealership', dealershipSchema);