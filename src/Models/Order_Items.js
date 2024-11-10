const { pool } = require('../../Config/db');

const createOrder_Items = async ( quantity, price, order_id, product_id) => {
    try {
        const response = await pool.query(
            `INSERT INTO order_items( quantity, price, order_id, product_id) VALUES($1, $2, $3, $4) RETURNING *`,
            [ quantity, price, order_id, product_id]
        );
        return response.rows[0];
    } catch (error) {
        console.error('Error creating order item:', error);
        throw error;
    }
};

const Order_details =async()=>{
    try {
        const response  = await pool.query(
            `SELECT 
   c.customer_name,
   oi.order_item_id,
   o.order_id,
   p.product_name,
   oi.quantity,
   oi.price,
   (oi.quantity * oi.price)  AS total_price
  FROM order_items oi
   JOIN
       products p  ON oi.product_id = p.product_id
   JOIN 
       orders o  ON oi.order_id = o.order_id
   JOIN 
       customers c ON c.customer_id = o.customer_id;
 `
        )
        return response?.rows
    } catch (error) {
        console.error('Error creating order item:', error);
        throw error;
    }
}

module.exports = { createOrder_Items,Order_details };
