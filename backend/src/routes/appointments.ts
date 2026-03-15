// Appointments Routes - Manages appointment scheduling, updates, and retrieval with patient and therapy information

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all appointments with patient and therapy details
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        a.*,
        p.name as patient_name,
        t.therapy_name
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN therapies t ON a.therapy_id = t.id
      ORDER BY a.appointment_date DESC, a.appointment_time DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get a single appointment by ID with patient and therapy details
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        a.*,
        p.name as patient_name,
        t.therapy_name
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN therapies t ON a.therapy_id = t.id
      WHERE a.id = $1
    `, [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Appointment not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new appointment
router.post("/", async (req, res) => {
  const { patient_id, therapy_id, appointment_date, appointment_time, room_number, notes } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO appointments (patient_id, therapy_id, appointment_date, appointment_time, room_number, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [patient_id, therapy_id, appointment_date, appointment_time, room_number, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing appointment by ID
router.put("/:id", async (req, res) => {
  const { appointment_date, appointment_time, room_number, status, notes } = req.body;
  try {
    const result = await pool.query(
      "UPDATE appointments SET appointment_date = $1, appointment_time = $2, room_number = $3, status = $4, notes = $5 WHERE id = $6 RETURNING *",
      [appointment_date, appointment_time, room_number, status, notes, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Appointment not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete an appointment by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM appointments WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Appointment not found" });
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
