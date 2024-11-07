const { pool } = require('../../Config/db');

const createCategory = async (name, description) => {
    try {
      const result = await pool.query(
        'INSERT INTO category(name, description) VALUES($1, $2) RETURNING *',
        [name, description]
      );
      return result.rows[0];  // Return the created category
    } catch (err) {
      console.error('Error creating category:', err);
      throw err;  // Rethrow the error to be caught by the controller
    }
  };
  
  module.exports = { createCategory };  // Ensure you export the function correctly