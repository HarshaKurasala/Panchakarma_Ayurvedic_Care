// Therapies Routes - Manages Ayurvedic therapy types including creation, updates, and status tracking

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all therapies ordered by creation date
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM therapies ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get a single therapy by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM therapies WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Therapy not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new therapy
router.post("/", async (req, res) => {
  const { therapy_name, description, duration } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO therapies (therapy_name, description, duration) VALUES ($1, $2, $3) RETURNING *",
      [therapy_name, description, duration]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing therapy by ID
router.put("/:id", async (req, res) => {
  const { therapy_name, description, duration, status } = req.body;
  try {
    const result = await pool.query(
      "UPDATE therapies SET therapy_name = $1, description = $2, duration = $3, status = $4 WHERE id = $5 RETURNING *",
      [therapy_name, description, duration, status, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Therapy not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete a therapy by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM therapies WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Therapy not found" });
    res.json({ message: "Therapy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
