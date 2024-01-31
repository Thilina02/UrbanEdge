const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    Email: String,
    Mnumber: String,
    password: String,
    Checkbox: {
        type: Boolean,
        default: true // or true, depending on your requirements
      },
})
const UserProfile = mongoose.model('UserProfiles',UserProfileSchema);

module.exports = UserProfile;