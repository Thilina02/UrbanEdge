const express = require('express');
const router = express.Router();
const {submitListing,getData} = require('../controller/ListingController');


router.post('/submit-listing', submitListing);
router.get('/fetchData', getData);

module.exports = router;
