// Lab Reports Routes - Handles patient lab reports including creation, status updates, and retrieval with patient details

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all lab reports with patient information
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        lr.*,
        p.name as patient_name
      FROM lab_reports lr
      JOIN patients p ON lr.patient_id = p.id
      ORDER BY lr.report_date DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get a single lab report by ID with patient information
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        lr.*,
        p.name as patient_name
      FROM lab_reports lr
      JOIN patients p ON lr.patient_id = p.id
      WHERE lr.id = $1
    `, [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Lab report not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new lab report
router.post("/", async (req, res) => {
  const { patient_id, report_type, report_date } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO lab_reports (patient_id, report_type, report_date) VALUES ($1, $2, $3) RETURNING *",
      [patient_id, report_type, report_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing lab report by ID
router.put("/:id", async (req, res) => {
  const { status, report_date } = req.body;
  try {
    const result = await pool.query(
      "UPDATE lab_reports SET status = $1, report_date = $2 WHERE id = $3 RETURNING *",
      [status, report_date, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Lab report not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete a lab report by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM lab_reports WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Lab report not found" });
    res.json({ message: "Lab report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
