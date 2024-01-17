const Listing = require('../models/Listing');

const submitListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.json({ success: true, message: 'Listing submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


const getData = async (req, res) => {
  try {
    const data = await Listing.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  submitListing,
  getData,
};
