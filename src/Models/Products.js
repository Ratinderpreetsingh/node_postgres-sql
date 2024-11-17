const { pool } = require("../../Config/db");

const createProduct = async (
  product_name,
  product_description,
  product_price,
  product_subcategory
) => {
  try {
    const response = await pool.query(
      `INSERT INTO products( product_name, product_description, product_price,  product_subcategory) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
      [product_name, product_description, product_price, product_subcategory] // Passing values for placeholders
    );
    return response.rows[0]; // Return the inserted product
  } catch (error) {
    console.error("Error creating product:", error); // Fixed variable name here
    throw error; // Rethrow the error to be caught by the controller
  }
};
const getProduct = async () => {
  try {
    const response = await pool.query(`SELECT * FROM products`);
    return response.rows;
  } catch (error) {
    console.error("Error creating product:", error); // Fixed variable name here
    throw error; // Rethrow the error to be caught by the controller
  }
};

const getProduct_By_SubCategory_id = async (id) => {
    try {
        const response = await pool.query(
            `SELECT 
                p.product_id,
                p.product_name,
                p.product_description,
                p.product_price
             FROM products p
             WHERE p.product_subcategory = $1;`, // Use parameterized query
            [id] // Pass id as a parameter
        );
        return response.rows;
    } catch (error) {
        console.error("Error fetching products by subcategory:", error); // Improved message
        throw error; // Rethrow the error to be handled by the controller
    }
};

const get_Product_by_Id =async(id)=>{
  try {
    const response = await pool.query(
      `SELECT 
           p.product_id,
           p.product_name,
           p.product_description,
           p.product_price
             FROM products  p
               WHERE p.product_id =$1`,[id]
    )
    return response.rows[0];

  } catch (error) {
    console.error("Error fetching products by subcategory:", error); // Improved message
    throw error; // Rethrow the error to be handled by the controller
  }
}
module.exports = { createProduct, getProduct, getProduct_By_SubCategory_id,get_Product_by_Id }; // Export the function directly
