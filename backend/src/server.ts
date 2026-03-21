/**
 * PANCHAKARMA MANAGEMENT SYSTEM - BACKEND SERVER
 * 
 * Main Express server that handles all API routes for the Panchakarma management system.
 * Provides endpoints for dashboard, patients, appointments, therapies, lab reports, payments, and authentication.
 * Includes database connection testing and health check endpoints.
 * 
 * This file is compiled to: dist/server.js
 * Build command: npm run build
 * Dev command: npm run dev (with hot reload)
 * 
 * Environment Variables Required:
 * - PORT: Server port (default: 5000)
 * - DB_USER: PostgreSQL username
 * - DB_HOST: PostgreSQL host
 * - DB_NAME: Database name
 * - DB_PASSWORD: PostgreSQL password
 * - DB_PORT: PostgreSQL port
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./config/db.js";
import dashboardRoutes from "./routes/dashboard.js";
import patientsRoutes from "./routes/patients.js";
import appointmentsRoutes from "./routes/appointments.js";
import therapiesRoutes from "./routes/therapies.js";
import labReportsRoutes from "./routes/lab-reports.js";
import paymentsRoutes from "./routes/payments.js";
import authRoutes from "./routes/auth.js";
import doctorsRoutes from "./routes/doctors.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import staffRoutes from "./routes/staff.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Middleware: Parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/therapies", therapiesRoutes);
app.use("/api/lab-reports", labReportsRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/admin", adminRoutes);

/**
 * ENDPOINT: GET /
 * Root endpoint - API status check
 * 
 * Response: Simple status message
 * Usage: curl http://localhost:5000/
 */
app.get("/", (req, res) => {
  res.send("Panchakarma API running");
});

/**
 * ENDPOINT: GET /health
 * Health check endpoint for monitoring and load balancers
 * 
 * Response: JSON with server status and port
 * Usage: curl http://localhost:5000/health
 */
app.get("/health", (req, res) => {
  res.json({ status: "✓ Backend running", port: 5000 });
});

/**
 * ENDPOINT: GET /test-db
 * Tests database connection to PostgreSQL
 * 
 * Response: 
 * - Success: Current timestamp from database
 * - Error: Error message with details
 * 
 * Usage: curl http://localhost:5000/test-db
 * 
 * This endpoint verifies:
 * 1. Database credentials are correct
 * 2. PostgreSQL server is running
 * 3. Database exists and is accessible
 */
app.get("/test-db", async (req, res) => {
  try {
    // Execute simple query to test connection
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "✓ Database connected",
      time: result.rows[0]
    });
  } catch (error) {
    // Return error details for debugging
    res.status(500).json({
      status: "✗ Database connection failed",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

/**
 * SERVER STARTUP
 * 
 * Initializes Express server on configured PORT
 * Logs startup information and available endpoints
 * 
 * The server will:
 * 1. Listen on the specified PORT
 * 2. Accept HTTP requests
 * 3. Route requests to appropriate endpoints
 * 4. Connect to PostgreSQL database
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Test database: http://localhost:${PORT}/test-db`);
  console.log(`✓ Health check: http://localhost:${PORT}/health`);
  console.log(`✓ API root: http://localhost:${PORT}/`);
});
