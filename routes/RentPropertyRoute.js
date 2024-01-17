const express = require('express');
const router = express.Router();
const { SubmitRenting, getRent } = require('../controller/RentPropertyController');


router.post('/submit-renting', SubmitRenting)
router.get('/fetch-renting',getRent)

module.exports = router