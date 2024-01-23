const express = require('express');
const router = express.Router();


const{ registerUser, CreateUser } = require('../controller/UserController');

router.post('/registerUser', registerUser)
router.post('/CreateUser', CreateUser)
module.exports = router