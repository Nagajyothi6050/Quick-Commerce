// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for a cart item
const cartItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
});


module.exports = mongoose.model('CartItem', cartItemSchema);
