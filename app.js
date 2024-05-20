const express = require('express');
const connectDB = require('./config/db.config');
const productRoutes = require('./routes/product.routes');

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Product routes
app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
