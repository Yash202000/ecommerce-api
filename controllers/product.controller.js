const Product = require('../models/product.model');

// Function to show all the products
module.exports.list = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to create a new product
module.exports.create = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const newProduct = new Product({ name, quantity });
        await newProduct.save();
        res.status(201).json({ product: newProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to delete a product using its ID
module.exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to update a product's quantity
module.exports.updateQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { number } = req.query;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.quantity += parseInt(number, 10);
        await product.save();
        res.json({ product, message: 'Updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
