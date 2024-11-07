const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables
const db = require('./Config/db');  // Import DB connection
const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies

// Routes
const categoryRoutes = require('./src/Routes/Category');  // Make sure the path is correct
app.use('/api/category', categoryRoutes);  // Mount category routes under /api

// Connect to the database and then start the server
db().then(() => {
    console.log("Dasvabase connected")
  app.listen(process.env.SERVER_PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT || 4000}`);
  });
}).catch((err) => {
  console.error('Failed to start server due to DB connection failure:', err);
  process.exit(1);
});
