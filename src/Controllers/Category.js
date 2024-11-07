const {createCategory} = require('../Models/Category')

 const createCategoryController = async (req, res) => {

    const { name, description } = req.body
    if (!name || !description) {
        return res.status(400).json({ message: 'name and description are reauired' })
    }
    try {
        const newCategory = await createCategory(name, description)
        res.status(201).json({
            message:'Category Created sccessfully',
            category:newCategory
        })

    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports ={createCategoryController}