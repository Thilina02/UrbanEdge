const express = require('express');
const router = express.Router();


const{ CreateUser, loginUser } = require('../controller/UserController');


router.post('/CreateUser', CreateUser)
router.post('/login', loginUser)
module.exports = router