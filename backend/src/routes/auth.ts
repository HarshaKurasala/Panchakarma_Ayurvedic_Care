// Authentication Routes - Handles user login and registration with JWT token generation and password hashing

import { Router } from "express";
import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

// Authenticate user and return JWT token
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "panchakarma_secret_key",
      { expiresIn: "24h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Register a new user with hashed password
router.post("/register", async (req, res) => {
  const { name, email, password, role, age } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const userResult = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
      [name, email, hashedPassword, role || "patient"]
    );

    const userId = userResult.rows[0].id;

    // If role is patient, automatically create patient profile
    if ((role || "patient") === "patient") {
      await pool.query(
        "INSERT INTO patients (user_id, name, email, age, status) VALUES ($1, $2, $3, $4, $5)",
        [userId, name, email, age || null, "active"]
      );
    }

    res.status(201).json({
      token: jwt.sign(
        { id: userId, email, role: role || "patient" },
        process.env.JWT_SECRET || "panchakarma_secret_key",
        { expiresIn: "24h" }
      ),
      user: userResult.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Login endpoint with role-based response for frontend routing
router.post("/login-with-role", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ 
        success: false,
        error: "Invalid credentials" 
      });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ 
        success: false,
        error: "Invalid credentials" 
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "panchakarma_secret_key",
      { expiresIn: "24h" }
    );

    // Determine redirect URL based on role
    let redirectUrl = "/user/dashboard";
    switch (user.role) {
      case "admin":
        redirectUrl = "/admin/dashboard";
        break;
      case "doctor":
        redirectUrl = "/doctor/dashboard";
        break;
      case "staff":
        redirectUrl = "/staff/dashboard";
        break;
      case "therapist":
        redirectUrl = "/staff/dashboard";
        break;
      default:
        redirectUrl = "/user/dashboard";
    }

    res.json({
      success: true,
      token,
      redirectUrl,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error instanceof Error ? error.message : String(error) 
    });
  }
});

export default router;
