// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for a product
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

// Export the Product model based on the productSchema
module.exports = mongoose.model('Product', productSchema);
