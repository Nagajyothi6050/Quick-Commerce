// Import the mongoose and bcryptjs modules
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for a user
const userSchema = new mongoose.Schema({
    
    username: { type: String, unique: true },
    password: String,
    isAdmin: { type: Boolean, default: false }
});

// Pre-save middleware to hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) 
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Export the User model based on the userSchema
module.exports = mongoose.model('User', userSchema);
