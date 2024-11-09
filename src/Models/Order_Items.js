const {pool} = require('../../Config/db')

const createOrder_Items =async(total_price,quantity,order_id,product_id)=>{
    try {
        const response = await pool.query(
            `INSERT INTO orders(total_price,quantity,order_id,product_id) VALUES($1,$2,$3,$4) RETURNING *`,[total_price,quantity,order_id,product_id]
        )
        return response.rows[0]

    } catch (error) {
        console.error('Error creating category:', error);
        throw error;  // Rethrow the error to be caught by the controller
    }
}

module.exports ={createOrder_Items}