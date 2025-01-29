// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Route to register a new user
router.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    res.json({ user, token });
});

// Route to login a user
router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).send('Invalid credentials.');
    }
    // Generate a JWT token for the user
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    res.json({ user, token });
});

// Export the router to be used in other parts of the application
module.exports = router;
