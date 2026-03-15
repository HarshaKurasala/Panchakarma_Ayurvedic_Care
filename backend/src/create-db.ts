// Database Creation Script - Connects to PostgreSQL and creates the panchakarma_db database if it doesn't already exist

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

// Create the panchakarma_db database if it doesn't exist
async function createDatabase() {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: "postgres"
  });

  try {
    await client.connect();
    console.log("🔄 Checking if database exists...");
    
    const result = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [process.env.DB_NAME]
    );

    if (result.rows.length === 0) {
      console.log(`🔄 Creating database ${process.env.DB_NAME}...`);
      await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
      console.log(`✓ Database ${process.env.DB_NAME} created successfully!`);
    } else {
      console.log(`✓ Database ${process.env.DB_NAME} already exists`);
    }

    await client.end();
    process.exit(0);
  } catch (error) {
    console.error("✗ Database creation failed:", error);
    await client.end();
    process.exit(1);
  }
}

createDatabase();
