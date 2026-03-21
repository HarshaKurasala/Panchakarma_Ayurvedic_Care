// User/Patient Controller - Handles HTTP requests for patient dashboard routes

import type { Response } from "express";
import type { AuthRequest } from "../middleware/patient.js";
import * as userService from "../services/userService.js";
import { pool } from "../config/db.js";

// Utility function to get patient ID from user ID
async function getPatientIdFromUserId(userId: number) {
  const result = await pool.query("SELECT id FROM patients WHERE user_id = $1", [userId]);
  if (result.rows.length === 0) {
    throw new Error("Patient profile not found");
  }
  return result.rows[0].id;
}

// 1. GET DASHBOARD OVERVIEW
export async function getDashboardOverview(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const data = await userService.getDashboardOverview(patientId);
    
    res.status(200).json({
      success: true,
      data,
      message: "Dashboard overview retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve dashboard overview"
    });
  }
}

// 2. GET PATIENT PROFILE
export async function getProfile(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const profile = await userService.getPatientProfile(patientId);
    
    res.status(200).json({
      success: true,
      data: profile,
      message: "Profile retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve profile"
    });
  }
}

// 3. UPDATE PATIENT PROFILE
export async function updateProfile(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const updated = await userService.updatePatientProfile(patientId, req.body);
    
    res.status(200).json({
      success: true,
      data: updated,
      message: "Profile updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to update profile"
    });
  }
}

// 4. GET APPOINTMENTS
export async function getAppointments(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const { status } = req.query;
    const appointments = await userService.getAppointments(patientId, status as string);
    
    res.status(200).json({
      success: true,
      data: appointments,
      message: "Appointments retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve appointments"
    });
  }
}

// 5. BOOK APPOINTMENT
export async function bookAppointment(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const appointment = await userService.bookAppointment(patientId, req.body);
    
    res.status(201).json({
      success: true,
      data: appointment,
      message: "Appointment booked successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to book appointment"
    });
  }
}

// 6. GET THERAPY PLANS
export async function getTherapyPlans(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const plans = await userService.getTherapyPlans(patientId);
    
    res.status(200).json({
      success: true,
      data: plans,
      message: "Therapy plans retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve therapy plans"
    });
  }
}

// 7. GET THERAPY SESSIONS
export async function getTherapySessions(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const { status } = req.query;
    const sessions = await userService.getTherapySessions(patientId, status as string);
    
    res.status(200).json({
      success: true,
      data: sessions,
      message: "Therapy sessions retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve therapy sessions"
    });
  }
}

// 8. GET PROGRESS ANALYTICS
export async function getProgress(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const progress = await userService.getProgressAnalytics(patientId);
    
    res.status(200).json({
      success: true,
      data: progress,
      message: "Progress analytics retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve progress"
    });
  }
}

// 9. SUBMIT FEEDBACK
export async function submitFeedback(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const feedback = await userService.submitFeedback(patientId, req.body);
    
    res.status(201).json({
      success: true,
      data: feedback,
      message: "Feedback submitted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to submit feedback"
    });
  }
}

// 10. GET FEEDBACK
export async function getFeedback(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const feedback = await userService.getFeedback(patientId);
    
    res.status(200).json({
      success: true,
      data: feedback,
      message: "Feedback retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve feedback"
    });
  }
}

// 11. GET NOTIFICATIONS
export async function getNotifications(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const { limit = 20 } = req.query;
    const notifications = await userService.getNotifications(patientId, parseInt(limit as string));
    
    res.status(200).json({
      success: true,
      data: notifications,
      message: "Notifications retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve notifications"
    });
  }
}

// 12. MARK NOTIFICATION AS READ
export async function markNotificationRead(req: AuthRequest, res: Response) {
  try {
    const { notificationId } = req.params;
    if (!notificationId) {
      return res.status(400).json({
        success: false,
        message: "Notification ID is required"
      });
    }
    const notification = await userService.markNotificationAsRead(parseInt(notificationId as string));
    
    res.status(200).json({
      success: true,
      data: notification,
      message: "Notification marked as read"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to mark notification"
    });
  }
}

// 13. GET PRECAUTIONS FOR SESSION
export async function getPrecautions(req: AuthRequest, res: Response) {
  try {
    const { sessionId } = req.params;
    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: "Session ID is required"
      });
    }
    const precautions = await userService.getPrecautions(parseInt(sessionId as string));
    
    res.status(200).json({
      success: true,
      data: precautions,
      message: "Precautions retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve precautions"
    });
  }
}

// 14. GET BILLING/PAYMENTS
export async function getPayments(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const payments = await userService.getPayments(patientId);
    
    res.status(200).json({
      success: true,
      data: payments,
      message: "Payments retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve payments"
    });
  }
}

// 15. GET PAYMENT SUMMARY
export async function getPaymentSummary(req: AuthRequest, res: Response) {
  try {
    const patientId = await getPatientIdFromUserId(req.user.id);
    const summary = await userService.getPaymentSummary(patientId);
    
    res.status(200).json({
      success: true,
      data: summary,
      message: "Payment summary retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to retrieve payment summary"
    });
  }
}
