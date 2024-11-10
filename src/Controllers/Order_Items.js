const { createOrder_Items, Order_details } = require('../Models/Order_Items');

const createOrder_item_Controller = async (req, res) => {
    const {  quantity, price, order_id, product_id } = req.body;

    if ( !quantity || !price || !order_id || !product_id) {
        return res.status(400).json({ message: " quantity, price, order_id, and product_id are required." });
    }

    try {
        const result = await createOrder_Items( quantity, price, order_id, product_id);
        res.status(201).json({
            message: 'Order item created successfully!',
            Order_Items: result
        });
    } catch (error) {
        console.error('Error creating order item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const order_items_Controler =async(req,res)=>{
    try {
        
        const response = await Order_details()
        res.status(200).json({
            message:"orderIdetisla ",
            orderdetils:response
        })
    } catch (error) {
        console.error('Error creating order item:', error);
        res.status(500).json({ message: 'Internal server error' });   
    }
}
module.exports = { createOrder_item_Controller,order_items_Controler };
