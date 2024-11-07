// routes/categoryRoutes.js
const express = require('express');
const { createSubCategoryController } = require('../Controllers/Subcategory'); // Ensure correct path

const router = express.Router();

// POST route to create a new category
router.post('/createSubCategory', createSubCategoryController);

module.exports = router;  // Export the router correctly
