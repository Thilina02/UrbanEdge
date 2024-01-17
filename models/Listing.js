const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  perches: String,
  rooms: String,
  bedrooms: Number,
  bathrooms: Number,
  address: String,
  price: Number,
  negotiable: Boolean,
  furtherEnquiries: String,
  photos: [String],
  city: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
