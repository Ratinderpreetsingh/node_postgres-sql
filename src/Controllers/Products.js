const { createProduct,getProduct } = require('../Models/Products'); // Correct the path to the file where createProduct is defined

const createProduct_Controller = async (req, res) => {
    const { product_name, product_description, product_price, subcategory_id, category_id } = req.body;

    // Validate if all required fields are provided
    if ( !product_name || !product_description || !product_price || !subcategory_id || !category_id) {
        return res.status(400).json({ 
            message: "product_id, product_name, product_description, product_price, subcategory_id, category_id are required."
        });
    }

    try {
        // Call the createProduct function
        const response = await createProduct( product_name, product_description, product_price, subcategory_id, category_id);
        
        // Send success response
        res.status(201).json({
            message: 'Product created successfully!',
            Product: response
        });

    } catch (error) {
        // Log the error and send a 500 server error response
        console.error('Error creating product:', error); // Fixed error message
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getProduct_Controller = async(req,res)=>{
    console.log("df")
    try {
        const respone = await getProduct()
        res.status(200).json({
            message:"GET getProduct sUCCESFULLY",
            category:respone
        })
    } catch (error) {
        console.error('Error creating getProduct:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { createProduct_Controller,getProduct_Controller }; // Corrected the export
