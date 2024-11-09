// routes/categoryRoutes.js
const express = require('express');
const { createOrder_item_Controller } = require('../Controllers/Order_Items');

const router = express.Router();

// POST route to create a new category
router.post('/createOrder_item', createOrder_item_Controller);
// router.get('/getAllProduct', getProduct_Controller);


module.exports = router;  // Export the router correctly
