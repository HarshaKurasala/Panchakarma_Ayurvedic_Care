// Doctors Routes - Manages specialist/doctor records including CRUD operations and filtering

import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

// Get all doctors with optional filtering and pagination
router.get("/", async (req, res) => {
  try {
    const { search, specialization, status = 'active', page = 1, limit = 10 } = req.query;
    
    let query = "SELECT * FROM doctors WHERE 1=1";
    const params: any[] = [];
    let paramCount = 1;

    // Status filter
    if (status) {
      query += ` AND status = $${paramCount}`;
      params.push(status);
      paramCount++;
    }

    // Search filter
    if (search) {
      query += ` AND (name ILIKE $${paramCount} OR email ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Specialization filter
    if (specialization) {
      query += ` AND specialization ILIKE $${paramCount}`;
      params.push(`%${specialization}%`);
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

// Get a single doctor by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM doctors WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Doctor not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Create a new doctor record
router.post("/", async (req, res) => {
  const { name, email, phone, specialization, experience_years } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO doctors (name, email, phone, specialization, experience_years) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, phone, specialization, experience_years]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Update an existing doctor by ID
router.put("/:id", async (req, res) => {
  const { name, email, phone, specialization, experience_years, status } = req.body;
  try {
    const result = await pool.query(
      "UPDATE doctors SET name = $1, email = $2, phone = $3, specialization = $4, experience_years = $5, status = $6 WHERE id = $7 RETURNING *",
      [name, email, phone, specialization, experience_years, status, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Doctor not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// Delete a doctor by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM doctors WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Doctor not found" });
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
