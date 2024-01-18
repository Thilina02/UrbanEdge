const UserModel = require('../models/UserModel');
const {hashPassword} = require('../userEncrypt');
const jwt = require('jsonwebtoken');

const registerUser = async( req, res) => {
    try{
        const{Fname, Lname, Email,Mnumber, password, Checkbox} = req.body;
        if(!Fname){
            return res.json({
                error:'First name is required'
            })
        };
        if(!Lname){
            return res.json({
                error: 'Last name is reequired'
            })
        };
        if(!Email){
            return res.json({
                error: 'Email is required'
            })
        };
        if(!Mnumber || Mnumber.length <10){
            return res.json({
                error: 'Phone number must contain 10 characters!'
            })
        };
        if(!password || 10 > password.length > 5){
            return res.json({
                error: 'Password must contain 8 characters'
            })

        };
        if(!Checkbox){
            return res.json({
                error: 'Press the checkbox'
            })
        };
        const exist = await UserModel.findOne({Email})
        if(exist){
            return res.json({
                error: 'Email is already taken, Try another email!'
            })
        }
        const hashedPassword = await hashPassword(password)
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Registration failed!! Please try again.'})
    }
}