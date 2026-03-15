// Patients Routes - Handles CRUD operations for patient records including registration, updates, and deletion

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all patients ordered by creation date
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM patients ORDER BY created_at DESC");
    res.json(result.rows);
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
  const { name, email, phone, condition, treatment_start_date, treatment_duration } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO patients (name, email, phone, condition, treatment_start_date, treatment_duration) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, phone, condition, treatment_start_date, treatment_duration]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing patient by ID
router.put("/:id", async (req, res) => {
  const { name, email, phone, condition, status, treatment_start_date, treatment_duration } = req.body;
  try {
    const result = await pool.query(
      "UPDATE patients SET name = $1, email = $2, phone = $3, condition = $4, status = $5, treatment_start_date = $6, treatment_duration = $7 WHERE id = $8 RETURNING *",
      [name, email, phone, condition, status, treatment_start_date, treatment_duration, req.params.id]
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
