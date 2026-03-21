import { pool } from "./src/config/db.js";

async function resetDatabase() {
  try {
    console.log("🔄 Resetting database...");

    // Drop all tables
    await pool.query(`
      DROP TABLE IF EXISTS notifications CASCADE;
      DROP TABLE IF EXISTS precautions CASCADE;
      DROP TABLE IF EXISTS feedback CASCADE;
      DROP TABLE IF EXISTS lab_reports CASCADE;
      DROP TABLE IF EXISTS payments CASCADE;
      DROP TABLE IF EXISTS therapy_sessions CASCADE;
      DROP TABLE IF EXISTS therapy_plans CASCADE;
      DROP TABLE IF EXISTS appointments CASCADE;
      DROP TABLE IF EXISTS doctors CASCADE;
      DROP TABLE IF EXISTS therapies CASCADE;
      DROP TABLE IF EXISTS patients CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
    `);

    console.log("✓ All tables dropped");

    // Read and execute schema
    const fs = await import("fs");
    const path = await import("path");
    const { fileURLToPath } = await import("url");

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const schemaPath = path.join(__dirname, "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(schema);

    console.log("✓ Database reset and schema recreated");
    console.log("✓ Sample data inserted");

    process.exit(0);
  } catch (error) {
    console.error("✗ Database reset failed:", error);
    process.exit(1);
  }
}

resetDatabase();
