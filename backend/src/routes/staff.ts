/**
 * STAFF ROUTES
 * 
 * Comprehensive API routes for staff dashboard and operations
 * Base route: /api/staff
 * All routes require JWT authentication
 */

import { Router } from "express";
import { StaffController } from "../controllers/staffController.js";
import { authenticate } from "../middleware/auth.js";
import { isStaff, isAdminOrStaff } from "../middleware/staff.js";

const router = Router();

// Apply authentication middleware to all staff routes
router.use(authenticate, isStaff);

// ==================== DASHBOARD ====================

/**
 * GET /api/staff/dashboard
 * Get dashboard overview with today's metrics
 */
router.get("/dashboard", StaffController.getDashboardOverview);

/**
 * GET /api/staff/daily-schedule
 * Get today's full schedule grouped by time slot
 */
router.get("/daily-schedule", StaffController.getDailySchedule);

/**
 * GET /api/staff/statistics
 * Get session statistics for date range
 */
router.get("/statistics", StaffController.getSessionStatistics);

// ==================== PATIENTS ====================

/**
 * GET /api/staff/patients
 * Get all patients with pagination and search
 * Query parameters:
 *   - page: Page number (default: 1)
 *   - limit: Items per page (default: 10)
 *   - search: Search term for name/email/phone
 */
router.get("/patients", StaffController.getPatients);

/**
 * GET /api/staff/patients/:id
 * Get single patient details with history
 */
router.get("/patients/:id", StaffController.getPatientById);

/**
 * POST /api/staff/patients
 * Create new patient
 * Body: { name, email, phone, age, gender, dosha, condition, treatment_duration }
 */
router.post("/patients", StaffController.createPatient);

/**
 * PUT /api/staff/patients/:id
 * Update patient details
 */
router.put("/patients/:id", StaffController.updatePatient);

// ==================== APPOINTMENTS ====================

/**
 * GET /api/staff/appointments
 * Get all appointments with optional filtering
 * Query parameters:
 *   - status: Filter by status (pending, confirmed, cancelled, completed, in_progress)
 *   - date: Filter by appointment date (YYYY-MM-DD)
 */
router.get("/appointments", StaffController.getAppointments);

/**
 * PUT /api/staff/appointments/:id
 * Update appointment status and details
 * Body: { status, notes, room_number }
 * Possible statuses: pending, confirmed, in_progress, completed, cancelled
 */
router.put("/appointments/:id", StaffController.updateAppointment);

/**
 * GET /api/staff/appointments/check-availability/:doctorId
 * Check doctor availability before booking
 * Query parameters:
 *   - appointmentDate: Date (YYYY-MM-DD)
 *   - appointmentTime: Time (HH:MM:SS)
 */
router.get("/appointments/check-availability/:doctorId", StaffController.checkDoctorAvailability);

// ==================== THERAPY SESSIONS ====================

/**
 * GET /api/staff/therapy-sessions
 * Get all therapy sessions with optional filtering
 * Query parameters:
 *   - status: Filter by status (scheduled, in_progress, completed, cancelled)
 *   - date: Filter by session date (YYYY-MM-DD)
 */
router.get("/therapy-sessions", StaffController.getTherapySessions);

/**
 * PUT /api/staff/therapy-sessions/:id
 * Update therapy session status and notes
 * Body: { status, notes, therapist_id }
 * Validation: Session must follow therapy plan sequence
 */
router.put("/therapy-sessions/:id", StaffController.updateTherapySession);

/**
 * GET /api/staff/therapy-sessions/:id/validate-sequence
 * Validate if session can be executed in order
 * Query parameters:
 *   - therapyPlanId: ID of therapy plan
 *   - sessionNumber: Session number in sequence
 */
router.get("/therapy-sessions/:id/validate-sequence", StaffController.validateSessionSequence);

// ==================== THERAPY PLANS ====================

/**
 * GET /api/staff/therapy-plans
 * Get therapy plans with sessions
 * Query parameters:
 *   - patientId: Optional filter by patient ID
 */
router.get("/therapy-plans", StaffController.getTherapyPlans);

// ==================== DOCTORS ====================

/**
 * GET /api/staff/doctors
 * Get all doctors with availability information
 * Returns: Doctor list with availability status and next available slot
 */
router.get("/doctors", StaffController.getDoctors);

/**
 * GET /api/staff/doctors/:id
 * Get single doctor with detailed availability
 */
router.get("/doctors/:id", StaffController.getDoctorById);

// ==================== NOTIFICATIONS ====================

/**
 * GET /api/staff/notifications
 * Get notifications for staff
 * Query parameters:
 *   - limit: Number of notifications to return (default: 20)
 * Returns: Array of notifications (missed sessions, delays, alerts)
 */
router.get("/notifications", StaffController.getNotifications);

/**
 * PUT /api/staff/notifications/:id/read
 * Mark notification as read
 */
router.put("/notifications/:id/read", StaffController.markNotificationRead);

/**
 * GET /api/staff/alerts
 * Get alerts for the day
 * Returns:
 *   - missedSessions: Sessions that were scheduled but not started
 *   - overlappingAppointments: Appointments at same time for same doctor
 *   - doctorUnavailable: Doctor unavailability alerts
 */
router.get("/alerts", StaffController.getAlerts);

// ==================== ERROR HANDLERS ====================

// 404 handler for undefined staff routes
router.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Staff route not found"
  });
});

export default router;
