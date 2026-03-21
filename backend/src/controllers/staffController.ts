/**
 * STAFF CONTROLLER LAYER
 * 
 * Handles HTTP requests and responses for staff operations
 * Acts as middleware between routes and services
 */

import type { Request, Response } from "express";
import { StaffService } from "../services/staffService.js";

export interface AuthRequest extends Request {
  user?: any;
}

export class StaffController {
  
  // ==================== DASHBOARD ====================

  /**
   * GET /api/staff/dashboard
   * Get dashboard overview with today's metrics
   */
  static async getDashboardOverview(req: AuthRequest, res: Response) {
    try {
      const result = await StaffService.getDashboardOverview();
      res.json(result);
    } catch (error) {
      console.error('Dashboard error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch dashboard overview'
      });
    }
  }

  /**
   * GET /api/staff/daily-schedule
   * Get today's full schedule grouped by time slot
   */
  static async getDailySchedule(req: AuthRequest, res: Response) {
    try {
      const result = await StaffService.getDailySchedule();
      res.json(result);
    } catch (error) {
      console.error('Schedule error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch daily schedule'
      });
    }
  }

  // ==================== PATIENTS ====================

  /**
   * GET /api/staff/patients
   * Get all patients with pagination and search
   */
  static async getPatients(req: AuthRequest, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || '';

      const result = await StaffService.getPatients(page, limit, search);
      res.json(result);
    } catch (error) {
      console.error('Get patients error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch patients'
      });
    }
  }

  /**
   * GET /api/staff/patients/:id
   * Get single patient details with history
   */
  static async getPatientById(req: AuthRequest, res: Response) {
    try {
      const patientId = parseInt(req.params.id as string);
      if (isNaN(patientId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid patient ID'
        });
      }

      const result = await StaffService.getPatientById(patientId);
      res.json(result);
    } catch (error) {
      console.error('Get patient by ID error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch patient'
      });
    }
  }

  /**
   * POST /api/staff/patients
   * Create new patient
   */
  static async createPatient(req: AuthRequest, res: Response) {
    try {
      const { name, email, phone, age, gender, dosha, condition, treatment_duration } = req.body;

      // Validate required fields
      if (!name || !email || !age || !gender) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields: name, email, age, gender'
        });
      }

      const result = await StaffService.createPatient(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error('Create patient error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create patient'
      });
    }
  }

  /**
   * PUT /api/staff/patients/:id
   * Update patient details
   */
  static async updatePatient(req: AuthRequest, res: Response) {
    try {
      const patientId = parseInt(req.params.id as string);
      if (isNaN(patientId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid patient ID'
        });
      }

      const result = await StaffService.updatePatient(patientId, req.body);
      res.json(result);
    } catch (error) {
      console.error('Update patient error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update patient'
      });
    }
  }

  // ==================== APPOINTMENTS ====================

  /**
   * GET /api/staff/appointments
   * Get all appointments with optional filtering
   */
  static async getAppointments(req: AuthRequest, res: Response) {
    try {
      const status = req.query.status as string | undefined;
      const date = req.query.date as string | undefined;

      const result = await StaffService.getAppointments(status, date);
      res.json(result);
    } catch (error) {
      console.error('Get appointments error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch appointments'
      });
    }
  }

  /**
   * PUT /api/staff/appointments/:id
   * Update appointment status and details
   */
  static async updateAppointment(req: AuthRequest, res: Response) {
    try {
      const appointmentId = parseInt(req.params.id as string);
      if (isNaN(appointmentId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid appointment ID'
        });
      }

      const result = await StaffService.updateAppointment(appointmentId, req.body);
      res.json(result);
    } catch (error) {
      console.error('Update appointment error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update appointment'
      });
    }
  }

  /**
   * GET /api/staff/appointments/check-availability/:doctorId
   * Check doctor availability
   */
  static async checkDoctorAvailability(req: AuthRequest, res: Response) {
    try {
      const doctorId = parseInt(req.params.doctorId as string);
      const { appointmentDate, appointmentTime } = req.query;

      if (isNaN(doctorId) || !appointmentDate || !appointmentTime) {
        return res.status(400).json({
          success: false,
          error: 'Missing required parameters: doctorId, appointmentDate, appointmentTime'
        });
      }

      const result = await StaffService.checkDoctorAvailability(
        doctorId,
        appointmentDate as string,
        appointmentTime as string
      );
      res.json(result);
    } catch (error) {
      console.error('Check availability error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to check availability'
      });
    }
  }

  // ==================== THERAPY SESSIONS ====================

  /**
   * GET /api/staff/therapy-sessions
   * Get all therapy sessions with optional filtering
   */
  static async getTherapySessions(req: AuthRequest, res: Response) {
    try {
      const status = req.query.status as string | undefined;
      const date = req.query.date as string | undefined;

      const result = await StaffService.getTherapySessions(status, date);
      res.json(result);
    } catch (error) {
      console.error('Get therapy sessions error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch therapy sessions'
      });
    }
  }

  /**
   * PUT /api/staff/therapy-sessions/:id
   * Update therapy session status and notes
   */
  static async updateTherapySession(req: AuthRequest, res: Response) {
    try {
      const sessionId = parseInt(req.params.id as string);
      if (isNaN(sessionId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid session ID'
        });
      }

      const result = await StaffService.updateTherapySession(sessionId, req.body);
      res.json(result);
    } catch (error) {
      console.error('Update therapy session error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update therapy session'
      });
    }
  }

  /**
   * GET /api/staff/therapy-sessions/:id/validate-sequence
   * Validate if session can be executed in order
   */
  static async validateSessionSequence(req: AuthRequest, res: Response) {
    try {
      const sessionId = parseInt(req.params.id as string);
      if (isNaN(sessionId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid session ID'
        });
      }

      // Get session details first
      const result = await StaffService.validateSessionSequence(
        parseInt(req.query.therapyPlanId as string),
        parseInt(req.query.sessionNumber as string)
      );
      res.json(result);
    } catch (error) {
      console.error('Validate sequence error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to validate session sequence'
      });
    }
  }

  // ==================== THERAPY PLANS ====================

  /**
   * GET /api/staff/therapy-plans
   * Get therapy plans with sessions
   */
  static async getTherapyPlans(req: AuthRequest, res: Response) {
    try {
      const patientId = req.query.patientId ? parseInt(req.query.patientId as string) : undefined;

      const result = await StaffService.getTherapyPlans(patientId);
      res.json(result);
    } catch (error) {
      console.error('Get therapy plans error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch therapy plans'
      });
    }
  }

  // ==================== DOCTORS ====================

  /**
   * GET /api/staff/doctors
   * Get all doctors with availability
   */
  static async getDoctors(req: AuthRequest, res: Response) {
    try {
      const result = await StaffService.getDoctors();
      res.json(result);
    } catch (error) {
      console.error('Get doctors error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch doctors'
      });
    }
  }

  /**
   * GET /api/staff/doctors/:id
   * Get single doctor with detailed availability
   */
  static async getDoctorById(req: AuthRequest, res: Response) {
    try {
      const doctorId = parseInt(req.params.id as string);
      if (isNaN(doctorId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid doctor ID'
        });
      }

      const result = await StaffService.getDoctorById(doctorId);
      res.json(result);
    } catch (error) {
      console.error('Get doctor by ID error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch doctor'
      });
    }
  }

  // ==================== NOTIFICATIONS & ALERTS ====================

  /**
   * GET /api/staff/notifications
   * Get notifications for staff
   */
  static async getNotifications(req: AuthRequest, res: Response) {
    try {
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await StaffService.getNotifications(undefined, limit);
      res.json(result);
    } catch (error) {
      console.error('Get notifications error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch notifications'
      });
    }
  }

  /**
   * PUT /api/staff/notifications/:id/read
   * Mark notification as read
   */
  static async markNotificationRead(req: AuthRequest, res: Response) {
    try {
      const notificationId = parseInt(req.params.id as string);
      if (isNaN(notificationId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid notification ID'
        });
      }

      const result = await StaffService.markNotificationRead(notificationId);
      res.json(result);
    } catch (error) {
      console.error('Mark notification error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to mark notification as read'
      });
    }
  }

  /**
   * GET /api/staff/alerts
   * Get alerts for the day
   */
  static async getAlerts(req: AuthRequest, res: Response) {
    try {
      const result = await StaffService.getAlerts();
      res.json(result);
    } catch (error) {
      console.error('Get alerts error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch alerts'
      });
    }
  }

  // ==================== STATISTICS ====================

  /**
   * GET /api/staff/statistics
   * Get session statistics
   */
  static async getSessionStatistics(req: AuthRequest, res: Response) {
    try {
      const startDate = req.query.startDate as string | undefined;
      const endDate = req.query.endDate as string | undefined;

      const result = await StaffService.getSessionStatistics(startDate, endDate);
      res.json(result);
    } catch (error) {
      console.error('Get statistics error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch statistics'
      });
    }
  }
}
