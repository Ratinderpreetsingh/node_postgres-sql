// index.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables
const db = require('./Config/db');  // Import DB connection
const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies

// Routes
const categoryRoutes = require('./src/Routes/Category');  // Import category routes
const subCategoryRoutes = require('./src/Routes/subCategoryRoutes');  // Import category routes

app.use('/api/category', categoryRoutes);  // Mount category routes under /api
app.use('/api/subcategory', subCategoryRoutes);  // Mount category routes under /api


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
