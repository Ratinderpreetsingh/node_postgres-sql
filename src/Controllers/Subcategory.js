const { createSubCategory } = require('../Models/SubCategory'); // Import your subcategory model

// Controller to create a new subcategory
const createSubCategoryController = async (req, res) => {
    const { name, description, category_id } = req.body;

    // Basic input validation
    if (!name || !description || !category_id) {
        return res.status(400).json({ message: "Name, description, and category_id are required." });
    }

    try {
       

        // Proceed to create the subcategory if category exists
        const result = await createSubCategory( name, description, category_id );

         res.status(201).json({
            message: 'Subcategory created successfully!',
            subcategory: result
        });
    } catch (error) {
        console.error('Error creating subcategory:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createSubCategoryController };
