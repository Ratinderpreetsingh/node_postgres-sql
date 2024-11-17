// routes/categoryRoutes.js
const express = require('express');
const { createSubCategoryController, get_SubCategory_Controller } = require('../Controllers/Subcategory'); // Ensure correct path

const router = express.Router();

// POST route to create a new category
router.post('/createSubCategory', createSubCategoryController);
router.get('/getSubCategory', get_SubCategory_Controller);


module.exports = router;  // Export the router correctly
