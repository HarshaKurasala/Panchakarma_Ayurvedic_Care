// User/Patient Routes - All endpoints for patient dashboard
// BASE ROUTE: /api/user

import { Router } from "express";
import { authenticatePatient } from "../middleware/patient.js";
import * as userController from "../controllers/userController.js";

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticatePatient);

// ====== 1. DASHBOARD OVERVIEW ======
/**
 * GET /api/user/dashboard
 * Returns: upcoming appointments, active therapy plans, next session, completed count, recovery progress, notifications
 */
router.get("/dashboard", userController.getDashboardOverview);

// ====== 2. USER PROFILE MANAGEMENT ======
/**
 * GET /api/user/profile
 * Returns: patient profile with demographic and medical info
 */
router.get("/profile", userController.getProfile);

/**
 * PUT /api/user/profile
 * Updates: name, age, gender, dosha, medical_history
 */
router.put("/profile", userController.updateProfile);

// ====== 3. APPOINTMENT BOOKING SYSTEM ======
/**
 * GET /api/user/appointments
 * Query params: status (optional - pending, confirmed, completed, cancelled)
 * Returns: list of patient's appointments
 */
router.get("/appointments", userController.getAppointments);

/**
 * POST /api/user/appointments
 * Body: { therapy_id, doctor_id, appointment_date, appointment_time, notes }
 * Features: auto-assign if doctor unavailable
 */
router.post("/appointments", userController.bookAppointment);

// ====== 4. THERAPY PLAN TRACKING ======
/**
 * GET /api/user/therapy-plans
 * Returns: therapy plans with type, duration, doctor, dates, notes
 */
router.get("/therapy-plans", userController.getTherapyPlans);

// ====== 5. THERAPY SESSION TRACKING (CORE FEATURE) ======
/**
 * GET /api/user/therapy-sessions
 * Query params: status (optional - scheduled, in_progress, completed)
 * Returns: day-wise therapy schedule with session details and precautions
 */
router.get("/therapy-sessions", userController.getTherapySessions);

// ====== 6. RECOVERY & PROGRESS ANALYTICS ======
/**
 * GET /api/user/progress
 * Returns: total sessions, ratings, recovery percentage, symptom changes
 */
router.get("/progress", userController.getProgress);

// ====== 7. FEEDBACK SYSTEM ======
/**
 * POST /api/user/feedback
 * Body: { therapy_session_id, rating (1-5), comments }
 */
router.post("/feedback", userController.submitFeedback);

/**
 * GET /api/user/feedback
 * Returns: all feedback submitted by patient
 */
router.get("/feedback", userController.getFeedback);

// ====== 8. NOTIFICATION SYSTEM ======
/**
 * GET /api/user/notifications
 * Query params: limit (default: 20)
 * Returns: appointment reminders, session reminders, precautions, instructions
 */
router.get("/notifications", userController.getNotifications);

/**
 * PUT /api/user/notifications/:notificationId
 * Marks a notification as read
 */
router.put("/notifications/:notificationId", userController.markNotificationRead);

// ====== 9. PRE & POST THERAPY GUIDELINES ======
/**
 * GET /api/user/precautions/:sessionId
 * Returns: before therapy instructions and after therapy care guidelines
 */
router.get("/precautions/:sessionId", userController.getPrecautions);

// ====== 10. BILLING & PAYMENTS ======
/**
 * GET /api/user/payments
 * Returns: all invoices and payment history
 */
router.get("/payments", userController.getPayments);

/**
 * GET /api/user/payments/summary
 * Returns: paid amount, pending amount, total invoices
 */
router.get("/payments/summary", userController.getPaymentSummary);

export default router;
