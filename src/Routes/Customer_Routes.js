// routes/categoryRoutes.js
const express = require('express');
const { createCustomer_Controller } = require('../Controllers/Customers');

const router = express.Router();

// POST route to create a new category
router.post('/createCustomer', createCustomer_Controller);
// router.get('/getAllProduct', getProduct_Controller);


module.exports = router;  // Export the router correctly
