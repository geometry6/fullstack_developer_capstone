const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  id: Number,
  name: String,
  dealership: Number,
  review: String,
  purchase: Boolean,
  purchase_date: String,
  car_make: String,
  car_model: String,
  car_year: String,
});

module.exports = mongoose.model('Review', reviewSchema);