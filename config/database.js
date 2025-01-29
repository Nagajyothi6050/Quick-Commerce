const mongoose = require('mongoose');
const config = require('./config');

// Connect to the MongoDB database using the connection string from the config file
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB connected')) // Log a message if the connection is successful
    .catch(err => console.log(err)); // Log an error message if the connection fails


module.exports = mongoose;
