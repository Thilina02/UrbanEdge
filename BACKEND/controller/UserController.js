const UserProfile = require('../models/UserModel'); // Assuming the model file is in the correct directory
const bcrypt = require('bcryptjs');

const CreateUser = async (req, res) => {
    try {
        const { Fname, Lname, Email, Mnumber, password, Checkbox } = req.body;
        
        // Ensure Checkbox is a valid Boolean value
        const validCheckbox = typeof Checkbox === 'boolean' ? Checkbox : false; // Set default value if Checkbox is not a boolean
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10); //Generate a salted hash with a cost factor of 10
        const newUserProfile = new UserProfile({
            Fname,
            Lname,
            Email,
            Mnumber,
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

module.exports = {
    CreateUser,
};
