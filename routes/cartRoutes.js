// Import required modules
const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartItem');
const auth = require('../middleware/auth');

// Route to get all cart items for the authenticated user
router.get('/', auth, async (req, res) => {
    const cartItems = await CartItem.find({ userId: req.user._id }).populate('productId');
    res.json(cartItems);
});

// Route to add a new cart item for the authenticated user
router.post('/', auth, async (req, res) => {
    const cartItem = new CartItem({ ...req.body, userId: req.user._id });
    await cartItem.save();
    res.json(cartItem);
});

// Route to update an existing cart item by ID for the authenticated user
router.put('/:id', auth, async (req, res) => {
    const cartItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cartItem);
});

// Route to delete a cart item by ID for the authenticated user
router.delete('/:id', auth, async (req, res) => {
    await CartItem.findByIdAndDelete(req.params.id);
    res.send('Cart item deleted.');
});

// Export the router to be used in other parts of the application
module.exports = router;
