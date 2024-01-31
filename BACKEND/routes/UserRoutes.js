const express = require('express');
const router = express.Router();


const{ CreateUser } = require('../controller/UserController');


router.post('/CreateUser', CreateUser)
module.exports = router