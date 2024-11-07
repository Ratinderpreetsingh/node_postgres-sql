const {pool} = require('../../Config/db')

const createSubCategory = async(name,description,category_id)=>{
    try {
        const result = await pool.query(
            `INSERT INTO subcategory(name,description,category_id) VALUES($1,$2,$3) RETURNING *`,
            [name,description,category_id]
        )
        return result.rows[0]
    } catch (error) {
        console.error('Error creating category:', err);
        throw err;  // Rethrow the error to be caught by the controller
    }
}
module.exports ={createSubCategory}