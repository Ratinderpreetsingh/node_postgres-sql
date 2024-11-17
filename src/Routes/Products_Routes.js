// routes/categoryRoutes.js
const express = require('express');
const { createProduct_Controller, getProduct_Controller, getProduct_By_SubCategoryId__Controller, get_Product_by_Id_Controller } = require('../Controllers/Products');

const router = express.Router();

// POST route to create a new category
router.post('/createProduct', createProduct_Controller);
router.get('/getAllProduct', getProduct_Controller);
router.get('/getAllProduct_By_subcategoryId/:id', getProduct_By_SubCategoryId__Controller);
router.get('/getProduct_By_Id/:id', get_Product_by_Id_Controller);




module.exports = router;  // Export the router correctly
