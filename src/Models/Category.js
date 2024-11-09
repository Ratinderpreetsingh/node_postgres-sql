const { pool } = require('../../Config/db');

const createCategory = async (name, description) => {
  try {
    const result = await pool.query(
      'INSERT INTO category(name, description) VALUES($1, $2) RETURNING *',
      [name, description]
    );
    console.log(result)
    return result.rows[0];  // Return the created category
  } catch (err) {
    console.error('Error creating category:', err);
    throw err;  // Rethrow the error to be caught by the controller
  }
};

const getAllCategory = async () => {
  debugger
  try {
    const response = await pool.query(
      `  SELECT 
        c.id AS category_id,
        c.name AS category_name,
        c.description AS category_description,
        COALESCE(json_agg(
          json_build_object(
            'subcategory_id', s.id,
            'subcategory_name', s.name,
            'subcategory_description', s.description
          )
        ) FILTER (WHERE s.id IS NOT NULL), '[]') AS subcategories
      FROM 
        category c
      LEFT JOIN 
        subcategory s ON c.id = s.category_id
      GROUP BY 
        c.id;
    
  `
    )
    console.log(response)
    return response.rows
  } catch (error) {

  }
}
module.exports = { createCategory, getAllCategory };  // Ensure you export the function correctly