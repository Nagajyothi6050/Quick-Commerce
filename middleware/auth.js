// Import the required modules
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware function for authentication
const auth = async (req, res, next) => {
    // Get the token from the Authorization header and remove the 'Bearer ' prefix
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, 'secretkey');
        
        const user = await User.findOne({ _id: decoded._id });
        
        if (!user) throw new Error();
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

// Export the auth middleware to be used in other parts of the application
module.exports = auth;
