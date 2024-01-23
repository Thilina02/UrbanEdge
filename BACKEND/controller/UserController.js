const UserModel = require('../models/UserModel');
const {hashPassword} = require('../userEncrypt');


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
        if (!password || password.length < 8) {
            return res.json({
                error: 'Password must contain at least 8 characters'
            });
        }
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
        const user = await UserModel.create({
            Fname,
            Lname,
            Email,
            Mnumber,
            password: hashedPassword,
            Checkbox,
        });
        
        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                _id: user._id,
                Fname: user.Fname,
                Lname: user.Lname,
                Email: user.Email,
                Mnumber: user.Mnumber,
                password: user.password,
                Checkbox: user.Checkbox,
                // ... any other non-sensitive user details
            },
        });
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Registration failed!! Please try again.'})
    }
}

const CreateUser = async (req,res) => {
    try{
        const newRenting = new UserModel(req.body);
        await newRenting.save();
        res.json({success: true, message:'Your rent property linsiting success!!'})

    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message:'Internal server error'});
    }
}

module.exports={
    registerUser,
    CreateUser,
}