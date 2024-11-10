const { createOrder } = require('../Models/Orders'); // Import your subcategory model

// Controller to create a new subcategory
const createOrder_Controller = async (req, res) => {
    const {customer_id,total_amount} = req.body;

    // Basic input validation
    if (!customer_id|| !total_amount) {
        return res.status(400).json({ message: "customer_name" });
    }

    try {
       

        // Proceed to create the subcategory if category exists
        const result = await createOrder(customer_id,total_amount);

         res.status(201).json({
            message: 'Order created successfully!',
            order: result
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createOrder_Controller };
