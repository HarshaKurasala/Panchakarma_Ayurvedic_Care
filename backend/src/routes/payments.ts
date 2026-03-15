// Payments Routes - Manages financial transactions including payment records, status updates, and revenue calculations

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all payments with patient information
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        pay.*,
        p.name as patient_name
      FROM payments pay
      JOIN patients p ON pay.patient_id = p.id
      ORDER BY pay.payment_date DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get today's total paid amount
router.get("/today-total", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT COALESCE(SUM(amount), 0) as total
      FROM payments
      WHERE payment_date = CURRENT_DATE AND status = 'paid'
    `);
    res.json({ total: result.rows[0].total });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Get a single payment by ID with patient information
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        pay.*,
        p.name as patient_name
      FROM payments pay
      JOIN patients p ON pay.patient_id = p.id
      WHERE pay.id = $1
    `, [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Payment not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new payment record
router.post("/", async (req, res) => {
  const { patient_id, invoice_number, amount, payment_date } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO payments (patient_id, invoice_number, amount, payment_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [patient_id, invoice_number, amount, payment_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing payment by ID
router.put("/:id", async (req, res) => {
  const { amount, status, payment_date } = req.body;
  try {
    const result = await pool.query(
      "UPDATE payments SET amount = $1, status = $2, payment_date = $3 WHERE id = $4 RETURNING *",
      [amount, status, payment_date, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Payment not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete a payment by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM payments WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Payment not found" });
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
