const {pool} = require('../../Config/db')

const createCustomer =async(customer_name)=>{
    try {
        const response = await pool.query(
            `INSERT INTO customers(customer_name) VALUES($1) RETURNING *`,[customer_name]
        )
        return response.rows[0]

    } catch (error) {
        console.error('Error creating category:', error);
        throw error;  // Rethrow the error to be caught by the controller
    }
}

module.exports ={createCustomer}