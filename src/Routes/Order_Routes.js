// routes/categoryRoutes.js
const express = require('express');
const { createOrder_Controller } = require('../Controllers/Order');

const router = express.Router();

// POST route to create a new category
router.post('/createOrder', createOrder_Controller);
// router.get('/getAllProduct', getProduct_Controller);


module.exports = router;  // Export the router correctly
