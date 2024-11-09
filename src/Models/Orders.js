const {pool} = require('../../Config/db')

const createOrder =async(customer_id,total_price)=>{
    try {
        const response = await pool.query(
            `INSERT INTO orders(customer_id,total_price) VALUES($1,$2) RETURNING *`,[customer_id,total_price]
        )
        return response.rows[0]

    } catch (error) {
        console.error('Error creating category:', error);
        throw error;  // Rethrow the error to be caught by the controller
    }
}

module.exports ={createOrder}