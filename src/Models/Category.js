const { pool } = require('../../Config/db');

const createCategory = async (category_name, category_description) => {
  try {
    const result = await pool.query(
      'INSERT INTO category(category_name,category_description) VALUES($1, $2) RETURNING *',
      [category_name, category_description]
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
    ` 
SELECT 
c.category_id,
c.category_name,
c.category_description,
json_agg(
json_build_object(
'subcategory_id', s.subcategory_id,
 'subcategory_name', s.subcategory_name,
    'subcategory_description', s.subcategory_description
)
) as subcategories
FROM category c
  LEFT JOIN  subcategory s ON s.category_id = c.category_id
     GROUP BY 
        c.category_id; `
    )
    return response.rows
  } catch (error) {

  }
}
module.exports = { createCategory, getAllCategory };  // Ensure you export the function correctly