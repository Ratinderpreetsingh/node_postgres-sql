// routes/categoryRoutes.js
const express = require('express');
const { createProduct_Controller, getProduct_Controller } = require('../Controllers/Products');

const router = express.Router();

// POST route to create a new category
router.post('/createProduct', createProduct_Controller);
router.get('/getAllProduct', getProduct_Controller);


module.exports = router;  // Export the router correctly
