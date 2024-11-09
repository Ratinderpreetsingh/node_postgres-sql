const {createCategory, getAllCategory} = require('../Models/Category')

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


const getCategoryController = async(req,res)=>{
    console.log("df")
    try {
        const respone = await getAllCategory()
        res.status(200).json({
            message:"GET CATEGORY sUCCESFULLY",
            category:respone
        })
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports ={createCategoryController,getCategoryController}