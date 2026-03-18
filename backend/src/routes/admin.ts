// Admin Routes - Full admin dashboard API protected by JWT + admin role middleware

import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../config/db.js";
import { authenticate } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/admin.js";

const router = Router();

// Apply auth + admin guard to all routes
router.use(authenticate, requireAdmin);

// ─── 1. DASHBOARD OVERVIEW ────────────────────────────────────────────────────

router.get("/dashboard", async (req, res) => {
  try {
    const [
      patients,
      doctors,
      staff,
      appointments,
      activePlans,
      completedSessions,
      revenue,
    ] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM patients"),
      pool.query("SELECT COUNT(*) FROM doctors WHERE status = 'active'"),
      pool.query("SELECT COUNT(*) FROM users WHERE role = 'staff'"),
      pool.query("SELECT COUNT(*) FROM appointments"),
      pool.query("SELECT COUNT(*) FROM therapies WHERE status IN ('active', 'in_progress', 'pending')"),
      pool.query("SELECT COUNT(*) FROM appointments WHERE status = 'completed'"),
      pool.query("SELECT COALESCE(SUM(amount), 0) AS total FROM payments WHERE status = 'paid'"),
    ]);

    res.json({
      totalPatients: parseInt(patients.rows[0].count),
      totalDoctors: parseInt(doctors.rows[0].count),
      totalStaff: parseInt(staff.rows[0].count),
      totalAppointments: parseInt(appointments.rows[0].count),
      activeTherapyPlans: parseInt(activePlans.rows[0].count),
      completedSessions: parseInt(completedSessions.rows[0].count),
      totalRevenue: parseFloat(revenue.rows[0].total),
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 2. USER & ROLE MANAGEMENT ────────────────────────────────────────────────

router.get("/users", async (req, res) => {
  try {
    const { role, status, page = 1, limit = 10 } = req.query;
    let query = "SELECT id, name, email, role, is_active, created_at FROM users WHERE 1=1";
    const params: any[] = [];
    let p = 1;

    if (role) { query += ` AND role = $${p++}`; params.push(role); }
    if (status !== undefined) { query += ` AND is_active = $${p++}`; params.push(status === "active"); }

    const countResult = await pool.query(query.replace("SELECT id, name, email, role, is_active, created_at", "SELECT COUNT(*)"), params);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY created_at DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.post("/users", async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "name, email, password, and role are required" });
  }
  const validRoles = ["admin", "doctor", "staff", "patient"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: `role must be one of: ${validRoles.join(", ")}` });
  }
  try {
    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at",
      [name, email, hashed, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error: any) {
    if (error.code === "23505") return res.status(409).json({ error: "Email already exists" });
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.put("/users/:id", async (req, res) => {
  const { name, email, role, is_active } = req.body;
  const validRoles = ["admin", "doctor", "staff", "patient"];
  if (role && !validRoles.includes(role)) {
    return res.status(400).json({ error: `role must be one of: ${validRoles.join(", ")}` });
  }
  try {
    const existing = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
    if (existing.rows.length === 0) return res.status(404).json({ error: "User not found" });

    const current = existing.rows[0];
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, role = $3, is_active = $4 WHERE id = $5 RETURNING id, name, email, role, is_active",
      [name ?? current.name, email ?? current.email, role ?? current.role, is_active ?? current.is_active, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error: any) {
    if (error.code === "23505") return res.status(409).json({ error: "Email already exists" });
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING id, name, email, role", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully", user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 3. DOCTOR & STAFF MANAGEMENT ────────────────────────────────────────────

router.get("/doctors", async (req, res) => {
  try {
    const { search, specialization, status, page = 1, limit = 10 } = req.query;
    let query = "SELECT * FROM doctors WHERE 1=1";
    const params: any[] = [];
    let p = 1;

    if (status) { query += ` AND status = $${p++}`; params.push(status); }
    if (search) { query += ` AND (name ILIKE $${p} OR email ILIKE $${p})`; params.push(`%${search}%`); p++; }
    if (specialization) { query += ` AND specialization ILIKE $${p++}`; params.push(`%${specialization}%`); }

    const countResult = await pool.query(query.replace("SELECT *", "SELECT COUNT(*)"), params);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY created_at DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.get("/staff", async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    let query = "SELECT id, name, email, role, is_active, created_at FROM users WHERE role = 'staff'";
    const params: any[] = [];
    let p = 1;

    if (search) { query += ` AND (name ILIKE $${p} OR email ILIKE $${p})`; params.push(`%${search}%`); p++; }

    const countResult = await pool.query(query.replace("SELECT id, name, email, role, is_active, created_at", "SELECT COUNT(*)"), params);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY created_at DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.put("/doctors/:id", async (req, res) => {
  const { name, email, phone, specialization, experience_years, status } = req.body;
  try {
    const existing = await pool.query("SELECT * FROM doctors WHERE id = $1", [req.params.id]);
    if (existing.rows.length === 0) return res.status(404).json({ error: "Doctor not found" });

    const d = existing.rows[0];
    const result = await pool.query(
      "UPDATE doctors SET name=$1, email=$2, phone=$3, specialization=$4, experience_years=$5, status=$6 WHERE id=$7 RETURNING *",
      [name ?? d.name, email ?? d.email, phone ?? d.phone, specialization ?? d.specialization, experience_years ?? d.experience_years, status ?? d.status, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 4. APPOINTMENT MONITORING ────────────────────────────────────────────────

router.get("/appointments", async (req, res) => {
  try {
    const { status, doctor_id, date, page = 1, limit = 10 } = req.query;
    let query = `
      SELECT a.*, p.name AS patient_name, d.name AS doctor_name, t.therapy_name
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN doctors d ON a.doctor_id = d.id
      JOIN therapies t ON a.therapy_id = t.id
      WHERE 1=1`;
    const params: any[] = [];
    let p = 1;

    if (status) { query += ` AND a.status = $${p++}`; params.push(status); }
    if (doctor_id) { query += ` AND a.doctor_id = $${p++}`; params.push(doctor_id); }
    if (date) { query += ` AND a.appointment_date = $${p++}`; params.push(date); }

    const countResult = await pool.query(
      `SELECT COUNT(*) FROM appointments a WHERE 1=1${status ? ` AND a.status = '${status}'` : ""}${doctor_id ? ` AND a.doctor_id = ${doctor_id}` : ""}${date ? ` AND a.appointment_date = '${date}'` : ""}`,
      []
    );
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY a.appointment_date DESC, a.appointment_time DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.put("/appointments/:id", async (req, res) => {
  const { status, doctor_id, appointment_date, appointment_time, notes } = req.body;
  try {
    const existing = await pool.query("SELECT * FROM appointments WHERE id = $1", [req.params.id]);
    if (existing.rows.length === 0) return res.status(404).json({ error: "Appointment not found" });
    const a = existing.rows[0];

    const newDate = appointment_date ?? a.appointment_date;
    const newTime = appointment_time ?? a.appointment_time;
    const newDoctor = doctor_id ?? a.doctor_id;

    // Conflict detection: same doctor, same date+time, different appointment
    if (doctor_id || appointment_date || appointment_time) {
      const conflict = await pool.query(
        "SELECT id FROM appointments WHERE doctor_id = $1 AND appointment_date = $2 AND appointment_time = $3 AND id != $4 AND status NOT IN ('cancelled', 'completed')",
        [newDoctor, newDate, newTime, req.params.id]
      );
      if (conflict.rows.length > 0) {
        return res.status(409).json({ error: "Scheduling conflict: doctor already has an appointment at this date and time", conflictingAppointmentId: conflict.rows[0].id });
      }
    }

    const result = await pool.query(
      "UPDATE appointments SET status=$1, doctor_id=$2, appointment_date=$3, appointment_time=$4, notes=$5 WHERE id=$6 RETURNING *",
      [status ?? a.status, newDoctor, newDate, newTime, notes ?? a.notes, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 5. THERAPY OVERSIGHT ─────────────────────────────────────────────────────

router.get("/therapy-plans", async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    let query = "SELECT * FROM therapies WHERE 1=1";
    const params: any[] = [];
    let p = 1;

    if (status) { query += ` AND status = $${p++}`; params.push(status); }

    const countResult = await pool.query(query.replace("SELECT *", "SELECT COUNT(*)"), params);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY created_at DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.get("/therapy-sessions", async (req, res) => {
  try {
    const { status, patient_id, doctor_id, page = 1, limit = 10 } = req.query;
    let query = `
      SELECT a.id, a.appointment_date, a.appointment_time, a.status, a.notes, a.room_number,
             p.name AS patient_name, d.name AS doctor_name, t.therapy_name, t.duration
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN doctors d ON a.doctor_id = d.id
      JOIN therapies t ON a.therapy_id = t.id
      WHERE 1=1`;
    const params: any[] = [];
    let p = 1;

    if (status) { query += ` AND a.status = $${p++}`; params.push(status); }
    if (patient_id) { query += ` AND a.patient_id = $${p++}`; params.push(patient_id); }
    if (doctor_id) { query += ` AND a.doctor_id = $${p++}`; params.push(doctor_id); }

    const baseCount = `SELECT COUNT(*) FROM appointments a WHERE 1=1${status ? ` AND a.status = '${status}'` : ""}${patient_id ? ` AND a.patient_id = ${patient_id}` : ""}${doctor_id ? ` AND a.doctor_id = ${doctor_id}` : ""}`;
    const countResult = await pool.query(baseCount, []);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY a.appointment_date DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 6. FINANCIAL ANALYTICS ───────────────────────────────────────────────────

router.get("/payments", async (req, res) => {
  try {
    const { status, category, from, to, page = 1, limit = 10 } = req.query;
    let query = `
      SELECT pay.*, p.name AS patient_name
      FROM payments pay
      JOIN patients p ON pay.patient_id = p.id
      WHERE 1=1`;
    const params: any[] = [];
    let p = 1;

    if (status) { query += ` AND pay.status = $${p++}`; params.push(status); }
    if (category) { query += ` AND pay.category = $${p++}`; params.push(category); }
    if (from) { query += ` AND pay.payment_date >= $${p++}`; params.push(from); }
    if (to) { query += ` AND pay.payment_date <= $${p++}`; params.push(to); }

    const countQuery = query.replace("SELECT pay.*, p.name AS patient_name", "SELECT COUNT(*)");
    const countResult = await pool.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    const offset = (Number(page) - 1) * Number(limit);
    query += ` ORDER BY pay.payment_date DESC LIMIT $${p++} OFFSET $${p++}`;
    params.push(Number(limit), offset);

    const result = await pool.query(query, params);
    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

router.get("/revenue", async (req, res) => {
  try {
    const { from, to } = req.query;
    const dateFilter = from && to ? "AND payment_date BETWEEN $1 AND $2" : "";
    const params = from && to ? [from, to] : [];

    const [summary, byCategory, byMonth] = await Promise.all([
      pool.query(`SELECT COALESCE(SUM(amount),0) AS total_revenue, COUNT(*) AS total_transactions, COALESCE(SUM(CASE WHEN status='paid' THEN amount ELSE 0 END),0) AS collected, COALESCE(SUM(CASE WHEN status='pending' THEN amount ELSE 0 END),0) AS pending FROM payments WHERE 1=1 ${dateFilter}`, params),
      pool.query(`SELECT category, COALESCE(SUM(amount),0) AS total, COUNT(*) AS count FROM payments WHERE status='paid' ${dateFilter} GROUP BY category ORDER BY total DESC`, params),
      pool.query(`SELECT TO_CHAR(payment_date,'YYYY-MM') AS month, COALESCE(SUM(amount),0) AS revenue, COUNT(*) AS transactions FROM payments WHERE status='paid' ${dateFilter} GROUP BY TO_CHAR(payment_date,'YYYY-MM') ORDER BY month DESC LIMIT 12`, params),
    ]);

    res.json({
      summary: summary.rows[0],
      byCategory: byCategory.rows,
      byMonth: byMonth.rows,
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

// ─── 7. FEEDBACK MONITORING ───────────────────────────────────────────────────

router.get("/feedback", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    // feedback table may not exist yet — gracefully return empty if so
    const tableCheck = await pool.query(
      "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'feedback') AS exists"
    );

    if (!tableCheck.rows[0].exists) {
      return res.json({ data: [], pagination: { page: Number(page), limit: Number(limit), total: 0, totalPages: 0 }, message: "Feedback table not yet created" });
    }

    const countResult = await pool.query("SELECT COUNT(*) FROM feedback");
    const total = parseInt(countResult.rows[0].count);

    const result = await pool.query(
      `SELECT f.*, p.name AS patient_name
       FROM feedback f
       LEFT JOIN patients p ON f.patient_id = p.id
       ORDER BY f.created_at DESC
       LIMIT $1 OFFSET $2`,
      [Number(limit), offset]
    );

    res.json({ data: result.rows, pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
