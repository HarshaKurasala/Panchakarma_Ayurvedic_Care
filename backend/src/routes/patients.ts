// Patients Routes - Handles CRUD operations for patient records including registration, updates, and deletion with filtering by dosha, gender, and search

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all patients ordered by creation date with optional filtering
router.get("/", async (req, res) => {
  try {
    const { search, dosha, gender, page = 1, limit = 10 } = req.query;
    
    let query = "SELECT * FROM patients WHERE 1=1";
    const params: any[] = [];
    let paramCount = 1;

    // Search filter
    if (search) {
      query += ` AND (name ILIKE $${paramCount} OR id::text ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Dosha filter
    if (dosha) {
      query += ` AND dosha ILIKE $${paramCount}`;
      params.push(`%${dosha}%`);
      paramCount++;
    }

    // Gender filter
    if (gender) {
      query += ` AND gender = $${paramCount}`;
      params.push(gender);
      paramCount++;
    }

    // Count total records
    const countResult = await pool.query(query.replace("SELECT *", "SELECT COUNT(*)"), params);
    const total = parseInt(countResult.rows[0].count);

    // Add pagination
    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    
    res.json({
      data: result.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get a single patient by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM patients WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Patient not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new patient record
router.post("/", async (req, res) => {
  const { name, email, phone, age, gender, dosha, medical_history, condition, treatment_start_date, treatment_duration } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO patients (name, email, phone, age, gender, dosha, medical_history, condition, treatment_start_date, treatment_duration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [name, email, phone, age, gender, dosha, medical_history, condition, treatment_start_date, treatment_duration]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing patient by ID
router.put("/:id", async (req, res) => {
  const { name, email, phone, age, gender, dosha, medical_history, condition, status, treatment_start_date, treatment_duration } = req.body;
  try {
    const result = await pool.query(
      "UPDATE patients SET name = $1, email = $2, phone = $3, age = $4, gender = $5, dosha = $6, medical_history = $7, condition = $8, status = $9, treatment_start_date = $10, treatment_duration = $11 WHERE id = $12 RETURNING *",
      [name, email, phone, age, gender, dosha, medical_history, condition, status, treatment_start_date, treatment_duration, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Patient not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete a patient by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM patients WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Patient not found" });
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
