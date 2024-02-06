const UserProfile = require('../models/UserModel'); // Assuming the model file is in the correct directory
const bcrypt = require('bcryptjs');
const {comparePassword} =require('../userEncrypt')
const jwt = require('jsonwebtoken'); 
const CreateUser = async (req, res) => {
    try {
        const { Fname, Lname, Email, Mnumber,address,password, Checkbox } = req.body;

        if(!Fname){
            return res.status(400).json({success: false, message: 'First name is required!'})
        }
        if(!Lname){
            return res.status(400).json({success: false, message: 'Last name is required!'})
        }
        if(!Email){
            return res.status(400).json({success: false, message: 'Email is required!'})
        }
        
        if(!Mnumber || Mnumber.Lname < 10){
            return res.status(400).json({success: false, message: 'Mobile number should be less than 10 digits!'})
        }
        
        if(!password || password.Lname < 8){
            return res.status(400).json({success: false, message: 'Password should contain 8 characters!'})
        }
        
        
        // Ensure Checkbox is a valid Boolean value
        const validCheckbox = typeof Checkbox === 'boolean' ? Checkbox : false; // Set default value if Checkbox is not a boolean
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10); //Generate a salted hash with a cost factor of 10
        const newUserProfile = new UserProfile({
            Fname,
            Lname,
            Email,
            Mnumber,
            address,
            password: hashedPassword,
            Checkbox: validCheckbox // Assign validCheckbox value to Checkbox field
        });
        
        await newUserProfile.save();
        
        res.json({ success: true, message: 'User profile created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Function to check if email and password match during user login
const loginUser = async (req, res) => {
    try {
        const { Email, password } = req.body;

        // Find the user by email in the database
        const user = await UserProfile.findOne({ Email });

        // If user is not found, return error
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Check if the provided password matches the hashed password stored in the database
        const isPasswordValid = await comparePassword(password, user.password);
        
        const userType = user.userType; // Assuming userType field exists in your database

        // If password is invalid, return error
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Sign a JWT token
        jwt.sign({ Email: user.Email, id: user._id, Email: user.Email, userType }, process.env.JWT_SECRET || 'fallback_secret', {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({ success: true, token, userType });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
// Controller function to fetch a user profile by ID
const getUserProfileById = async (req, res) => {
    try {
      // Extract the ID from the request parameters
      const { id } = req.params;
  
      // Fetch the user profile by ID from the database
      const userProfile = await UserProfile.findById(id);
  
      // Check if the user profile exists
      if (!userProfile) {
        return res.status(404).json({ message: 'User profile not found' });
      }
  
      // Return the user profile if found
      res.json(userProfile);
    } catch (error) {
      // Handle errors
      console.error('Error fetching user profile by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
module.exports = {
    CreateUser,
    loginUser,
    getUserProfileById,
};
