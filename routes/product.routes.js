const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product.controller');

// API to list products
router.get('/', productsController.list);

// API to add products to the database
router.post('/create', productsController.create);

// API to delete products
router.delete('/:id', productsController.delete);

// API to update quantity of a product
router.post('/:id/update_quantity', productsController.updateQuantity);

module.exports = router;
