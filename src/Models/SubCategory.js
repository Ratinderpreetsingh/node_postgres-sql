const {pool} = require('../../Config/db')

const createSubCategory = async(subcategory_name, subcategory_description,category_id)=>{
    debugger
    console.log(subcategory_name, subcategory_description,category_id)
    try {
        const result = await pool.query(
            `INSERT INTO subcategory(subcategory_name, subcategory_description,category_id) VALUES($1,$2,$3) RETURNING *`,
            [subcategory_name, subcategory_description,category_id]
        )
        return result.rows[0]
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;  // Rethrow the error to be caught by the controller
    }
}


const getAllSubCategory = async () => {
    
    try {
      const response = await pool.query(
        ` SELECT * FROM subcategory `
      )
      return response.rows
    } catch (error) {
  
    }
  }
module.exports ={createSubCategory,getAllSubCategory}