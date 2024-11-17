const { createSubCategory, getAllSubCategory } = require('../Models/SubCategory'); // Import your subcategory model

// Controller to create a new subcategory
const createSubCategoryController = async (req, res) => {
    const { subcategory_name, subcategory_description, category_id } = req.body;

    // Basic input validation
    if (!subcategory_name|| !subcategory_description || !category_id) {
        return res.status(400).json({ message: "Name, description, and category_id are required." });
    }

    try {
       

        // Proceed to create the subcategory if category exists
        const result = await createSubCategory( subcategory_name, subcategory_description, category_id );

         res.status(201).json({
            message: 'Subcategory created successfully!',
            subcategory: result
        });
    } catch (error) {
        console.error('Error creating subcategory:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const get_SubCategory_Controller = async(req,res)=>{
    try {
        const respone = await getAllSubCategory()
        res.status(200).json({
            message:"GET SUBCATEGORY SUCCESFULLY",
            subcategory:respone
        })
    } catch (error) {
        console.error('Error creating SUBCATEGORY:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = { createSubCategoryController,get_SubCategory_Controller };
