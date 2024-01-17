const mongoose = require('mongoose');

const RentpropSchema = new mongoose.Schema({
    title: String,
    Keymoney: String,
    rooms: Number,
    bedrooms: Number,
    bathrooms: Number,
    address: String,
    price: String,
    furtherEnq: String,
    negotiable: Boolean,
    city: String,
    photos: [String],
    
})

const RentListing = mongoose.model('RentListing', RentpropSchema);

module.exports = RentListing;