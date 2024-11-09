const { createOrder_Items } = require('../Models/Order_Items'); // Import your subcategory model

// Controller to create a new subcategory
const createOrder_item_Controller = async (req, res) => {
    const {total_price,quantity,order_id,product_id} = req.body;

    // Basic input validation
    if (!total_price|| !quantity || !order_id || !product_id) {
        return res.status(400).json({ message: "total_price,quantity,order_id,product_id" });
    }

    try {
       

        // Proceed to create the subcategory if category exists
        const result = await createOrder_Items(total_price,quantity,order_id,product_id);

         res.status(201).json({
            message: 'createOrder_Items created successfully!',
            Order_Items: result
        });
    } catch (error) {
        console.error('Error creating createOrder_Items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createOrder_item_Controller };
