import { pool } from "./src/config/db";

async function testConnection() {
  try {
    console.log("Testing database connection...");
    const result = await pool.query("SELECT NOW()");
    console.log("✓ Database connected successfully!");
    console.log("Current time from DB:", result.rows[0]);
    process.exit(0);
  } catch (error) {
    console.error("✗ Database connection failed:", error);
    process.exit(1);
  }
}

testConnection();
