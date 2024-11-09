const { pool } = require('../../Config/db');

const createProduct = async (product_name, product_description, product_price, subcategory_id, category_id) => {
    try {
        const response = await pool.query(
            `INSERT INTO products( product_name, product_description, product_price, subcategory_id, category_id) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [product_name, product_description, product_price, subcategory_id, category_id] // Passing values for placeholders
        );
        return response.rows[0]; // Return the inserted product
    } catch (error) {
        console.error('Error creating product:', error); // Fixed variable name here
        throw error; // Rethrow the error to be caught by the controller
    }
};
const getProduct = async () => {
    try {
        const response = await pool.query(
            `SELECT 
        p.product_id,
		p.product_name,
		p.product_description,
		p.product_price,
		s.id AS subcategory_id,
		s.name AS subcategory_name,
		c.id AS category_id,
		c.name AS category_id
  from products p
LEFT JOIN
     subcategory s
	    ON s.id = p.subcategory_id
LEFT JOIN
     category c
	    ON c.id = p.category_id`
        )
        return response
    } catch (error) {
        console.error('Error creating product:', error); // Fixed variable name here
        throw error; // Rethrow the error to be caught by the controller
    }
}
module.exports = { createProduct,getProduct }; // Export the function directly
