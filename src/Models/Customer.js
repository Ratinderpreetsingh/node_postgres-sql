const {pool} = require('../../Config/db')
const bcrypt = require('bcryptjs');

const createCustomer =async(customer_name,customer_email,customer_password)=>{
    const hashedPassword = bcrypt.hashSync(customer_password,10)
    try {
        
        const response = await pool.query(
            `INSERT INTO customers(customer_name,customer_email,customer_password) VALUES($1,$2,$3) RETURNING *`,[customer_name,customer_email,hashedPassword]
        )
        return response.rows[0]

    } catch (error) {
        console.error('Error creating category:', error);
        throw error;  // Rethrow the error to be caught by the controller
    }
}

const getCustomerByEmail =async(customer_email)=>{
    try {
        const response = await pool.query(
             `SELECT * FROM customers WHERE customer_email=$1`,[customer_email]
        )
        return response.rows[0]
    } catch (error) {
        console.error('Error fetching customer by email:', error);
        throw error;  // Rethrow error to be handled by controller
    }
}


const verifyPassword = async(customer_password,hash)=>{
    try {
        const res = bcrypt.compareSync(customer_password,hash)
        return res
    } catch (error) {
        
    }
}

const getCustomers = async () => {
    try {
        const response = await pool.query(
            `SELECT * FROM customers`
        )
        return response.rows
        3  
        
    } catch (error) {
        console.error('Error creating getCustomers:', error); // Fixed variable name here
        throw error; // Rethrow the error to be caught by the controller
    }
}



module.exports ={createCustomer,getCustomerByEmail,verifyPassword,getCustomers}