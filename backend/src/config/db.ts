/**
 * DATABASE CONFIGURATION
 * 
 * PostgreSQL connection pool setup
 * 
 * This file is compiled to: dist/config/db.js
 * 
 * Connection Details:
 * - Database: panchakarma_db
 * - Host: localhost
 * - Port: 5432
 * - User: postgres
 * - Password: (from .env file)
 * 
 * The pool manages multiple database connections efficiently
 * Reuses connections instead of creating new ones for each query
 */

import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * Create PostgreSQL connection pool
 * 
 * Configuration from environment variables:
 * - DB_USER: PostgreSQL username
 * - DB_HOST: PostgreSQL server host
 * - DB_NAME: Database name
 * - DB_PASSWORD: PostgreSQL password
 * - DB_PORT: PostgreSQL port number
 * 
 * Pool benefits:
 * - Reuses connections
 * - Improves performance
 * - Handles concurrent requests
 * - Automatic connection management
 */
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

/**
 * Optional: Add error handling for pool
 * Uncomment to enable logging of pool errors
 */
// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
// });
