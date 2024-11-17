const jwt = require('jsonwebtoken');
const { createCustomer, getCustomerByEmail, verifyPassword, getCustomers } = require('../Models/Customer'); // Import your subcategory model

// Controller to create a new subcategory
const createCustomer_Controller = async (req, res) => {
    const {customer_name,customer_email,customer_password} = req.body;

    // Basic input validation
    if (!customer_name || !customer_email || !customer_password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }

    try {
        // Proceed to create the subcategory if category exists
        const result = await createCustomer(customer_name,customer_email,customer_password);

         res.status(201).json({
            message: 'Customer created successfully!',
            customer: result
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const customer_login_controller =async(req,res)=>{

    const {customer_email,customer_password}=req.body
    if ( !customer_email || !customer_password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }
    try {
        const customer = await getCustomerByEmail(customer_email)

        if (!customer) {
            return res.status(404).json({ message: 'User not found' });
          }


          const isPasswordValid = await verifyPassword(customer_password,customer?.customer_password)

          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
            
          const token = jwt.sign(
            { id: customer.id, customer_name: customer.customer_name, customer_email: customer.customer_email },
            'dsfksjdflsjd', // Secret key for signing the token
            { expiresIn: '1h' } // Set expiration time for token
          );
        res.status(201).json({
            message: 'Customer created successfully!',
            token: token
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



const getCustomer_Controller = async(req,res)=>{
  try {
      const respone = await getCustomers()
      res.status(200).json({
          message:"GET Customer sUCCESFULLY",
          Customer:respone
      })
  } catch (error) {
      console.error('Error creating Customer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = { createCustomer_Controller,customer_login_controller ,getCustomer_Controller};
