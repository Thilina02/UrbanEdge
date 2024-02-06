const express = require('express');
const router = express.Router();


const{ CreateUser, loginUser,getUserProfileById } = require('../controller/UserController');


router.post('/CreateUser', CreateUser)
router.post('/login', loginUser)
router.get('/Profile/:id', getUserProfileById);
module.exports = router