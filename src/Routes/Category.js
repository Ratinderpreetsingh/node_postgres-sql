// routes/categoryRoutes.js
const express = require('express');
const { createCategoryController } = require('../Controllers/Category'); // Ensure correct path

const router = express.Router();

// POST route to create a new category
router.post('/createCategory', createCategoryController);

module.exports = router;  // Export the router correctly
