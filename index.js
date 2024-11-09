// index.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables
const db = require('./Config/db');  // Import DB connection
const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies

// Routes
const categoryRoutes = require('./src/Routes/Category');  
const subCategoryRoutes = require('./src/Routes/subCategoryRoutes');  
const products_Routes = require('./src/Routes/Products_Routes');  
const Customer_Routes = require('./src/Routes/Customer_Routes');  
const Order_Routes = require('./src/Routes/Order_Routes');  
const Order_Items_Routes = require('./src/Routes/Order_items_Routes');  





app.use('/api/category', categoryRoutes);  
app.use('/api/subcategory', subCategoryRoutes);  
app.use('/api/product', products_Routes);  
app.use('/api/customer', Customer_Routes);  
app.use('/api/order', Order_Routes);  
app.use('/api/order_items', Order_Items_Routes);  






// Connect to the database and start the server
db.pool.connect()
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.SERVER_PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.SERVER_PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1);  // Exit the process if the DB connection fails
  });
