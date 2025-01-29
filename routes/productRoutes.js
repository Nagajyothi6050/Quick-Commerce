// Import required modules
const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const auth = require('../middleware/auth');

// Route to get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Route to get a specific product by ID
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// Route to create a new product (admin-only)
router.post('/', auth, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// Route to update an existing product by ID (admin-only)
router.put('/:id', auth, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
});

// Route to delete a product by ID (admin-only)
router.delete('/:id', auth, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');
    await Product.findByIdAndDelete(req.params.id);
    res.send('Product deleted.');
});

// Export the router to be used in other parts of the application
module.exports = router;
