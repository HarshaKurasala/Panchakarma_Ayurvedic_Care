// Database Setup Script - Reads and executes the SQL schema file to create all tables and insert sample data into the database

import { pool } from "./config/db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and execute SQL schema file to create tables and insert sample data
async function setupDatabase() {
  try {
    console.log("🔄 Setting up database...");
    
    const schemaPath = path.join(__dirname, "..", "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf-8");
    
    await pool.query(schema);
    
    console.log("✓ Database setup completed successfully!");
    console.log("✓ Tables created");
    console.log("✓ Sample data inserted");
    
    process.exit(0);
  } catch (error) {
    console.error("✗ Database setup failed:", error);
    process.exit(1);
  }
}

setupDatabase();
