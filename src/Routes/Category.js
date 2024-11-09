// routes/categoryRoutes.js
const express = require('express');
const { createCategoryController, getCategoryController } = require('../Controllers/Category'); // Ensure correct path

const router = express.Router();

// POST route to create a new category
router.post('/createCategory', createCategoryController);
router.get('/getAllCategory', getCategoryController);


module.exports = router;  // Export the router correctly
