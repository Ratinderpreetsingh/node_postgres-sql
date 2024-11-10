// routes/categoryRoutes.js
const express = require('express');
const { createOrder_item_Controller, order_items_Controler } = require('../Controllers/Order_Items');

const router = express.Router();

// POST route to create a new category
router.post('/createOrder_item', createOrder_item_Controller);
router.get('/getAllOrderIdetails', order_items_Controler);


module.exports = router;  // Export the router correctly
