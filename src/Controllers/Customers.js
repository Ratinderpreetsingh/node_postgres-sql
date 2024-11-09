const { createCustomer } = require('../Models/Customer'); // Import your subcategory model

// Controller to create a new subcategory
const createCustomer_Controller = async (req, res) => {
    const {customer_name} = req.body;

    // Basic input validation
    if (!customer_name) {
        return res.status(400).json({ message: "customer_name" });
    }

    try {
       

        // Proceed to create the subcategory if category exists
        const result = await createCustomer(customer_name);

         res.status(201).json({
            message: 'Customer created successfully!',
            customer: result
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createCustomer_Controller };
