const { Pool } = require('pg');

// Create a pool instance to manage PostgreSQL connections
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432  // Default to port 5432 if not set
});

// Export the pool instance so it can be used in other modules
module.exports = { pool };
