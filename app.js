// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');
require('./config/database'); // Connect to the database

// Initialize the Express application
const app = express();
const PORT = 9000; 

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define routes for products, cart, and users
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/users', userRoutes);

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
