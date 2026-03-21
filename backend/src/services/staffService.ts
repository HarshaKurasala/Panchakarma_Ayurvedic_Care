/**
 * STAFF SERVICE LAYER
 * 
 * Handles all business logic for staff operations including:
 * - Dashboard metrics and overview
 * - Patient management and filtering
 * - Appointment scheduling and management
 * - Therapy session tracking and updates
 * - Therapy plan management
 * - Doctor availability computation
 * - Notification management
 * - Alert generation
 */

import { pool } from "../config/db.js";

export class StaffService {
  
  // ==================== DASHBOARD ====================

  /**
   * Get dashboard overview with today's metrics
   */
  static async getDashboardOverview() {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const appointmentsResult = await pool.query(
        `SELECT COUNT(*) as count FROM appointments 
         WHERE appointment_date = $1::date AND status IN ('scheduled', 'in_progress', 'confirmed')`,
        [today]
      );
      
      const sessionsResult = await pool.query(
        `SELECT COUNT(*) as count FROM therapy_sessions 
         WHERE session_date = $1::date AND status IN ('scheduled', 'in_progress')`,
        [today]
      );
      
      const completedResult = await pool.query(
        `SELECT COUNT(*) as count FROM therapy_sessions 
         WHERE session_date = $1::date AND status = 'completed'`,
        [today]
      );

      const alertsResult = await pool.query(
        `SELECT COUNT(*) as count FROM notifications 
         WHERE type IN ('missed_session', 'delayed_session', 'doctor_unavailable') 
         AND is_read = FALSE`
      );

      return {
        success: true,
        data: {
          totalAppointmentsToday: parseInt(appointmentsResult.rows[0].count),
          activeTherapySessions: parseInt(sessionsResult.rows[0].count),
          completedSessionsToday: parseInt(completedResult.rows[0].count),
          pendingAlerts: parseInt(alertsResult.rows[0].count),
        },
        message: "Dashboard overview fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get today's full schedule grouped by time slot
   */
  static async getDailySchedule() {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const result = await pool.query(
        `SELECT 
          ts.id,
          ts.session_date,
          ts.session_time,
          ts.therapy_type,
          ts.panchakarma_stage,
          ts.status,
          ts.duration_minutes,
          ts.room_number,
          p.name as patient_name,
          p.id as patient_id,
          d.name as doctor_name,
          d.id as doctor_id,
          tp.id as therapy_plan_id
        FROM therapy_sessions ts
        JOIN patients p ON ts.patient_id = p.id
        LEFT JOIN doctors d ON ts.doctor_id = d.id
        JOIN therapy_plans tp ON ts.therapy_plan_id = tp.id
        WHERE ts.session_date = $1::date
        ORDER BY ts.session_time ASC`,
        [today]
      );

      // Group by time slot
      const grouped: any = {};
      result.rows.forEach(row => {
        const timeSlot = row.session_time || 'Not Specified';
        if (!grouped[timeSlot]) {
          grouped[timeSlot] = [];
        }
        grouped[timeSlot].push(row);
      });

      return {
        success: true,
        data: grouped,
        message: "Daily schedule fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== PATIENTS ====================

  /**
   * Get all patients with pagination and filtering
   */
  static async getPatients(page = 1, limit = 10, search = '') {
    try {
      const offset = (page - 1) * limit;
      const searchQuery = `%${search}%`;

      const countResult = await pool.query(
        `SELECT COUNT(*) as total FROM patients 
         WHERE name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1`,
        [searchQuery]
      );

      const result = await pool.query(
        `SELECT 
          id,
          name,
          email,
          phone,
          age,
          gender,
          dosha,
          condition,
          status,
          treatment_start_date,
          treatment_duration
        FROM patients
        WHERE name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1
        ORDER BY created_at DESC
        LIMIT $2 OFFSET $3`,
        [searchQuery, limit, offset]
      );

      return {
        success: true,
        data: result.rows,
        total: parseInt(countResult.rows[0].total),
        page,
        limit,
        message: "Patients fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get single patient details with history
   */
  static async getPatientById(patientId: number) {
    try {
      const patientResult = await pool.query(
        `SELECT * FROM patients WHERE id = $1`,
        [patientId]
      );

      if (patientResult.rows.length === 0) {
        throw new Error('Patient not found');
      }

      const patient = patientResult.rows[0];

      // Get therapy plans
      const plansResult = await pool.query(
        `SELECT * FROM therapy_plans WHERE patient_id = $1 ORDER BY start_date DESC`,
        [patientId]
      );

      // Get recent therapy sessions
      const sessionsResult = await pool.query(
        `SELECT ts.*, d.name as doctor_name FROM therapy_sessions ts
         LEFT JOIN doctors d ON ts.doctor_id = d.id
         WHERE ts.patient_id = $1
         ORDER BY ts.session_date DESC
         LIMIT 10`,
        [patientId]
      );

      // Get appointments
      const appointmentsResult = await pool.query(
        `SELECT a.*, t.therapy_name, d.name as doctor_name
         FROM appointments a
         JOIN therapies t ON a.therapy_id = t.id
         LEFT JOIN doctors d ON a.doctor_id = d.id
         WHERE a.patient_id = $1
         ORDER BY a.appointment_date DESC`,
        [patientId]
      );

      // Get feedback
      const feedbackResult = await pool.query(
        `SELECT * FROM feedback WHERE patient_id = $1 ORDER BY created_at DESC LIMIT 5`,
        [patientId]
      );

      return {
        success: true,
        data: {
          patient,
          therapyPlans: plansResult.rows,
          therapy_sessions: sessionsResult.rows,
          appointments: appointmentsResult.rows,
          feedback: feedbackResult.rows
        },
        message: "Patient details fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create new patient
   */
  static async createPatient(patientData: any) {
    try {
      const { name, email, phone, age, gender, dosha, condition, treatment_duration } = patientData;

      const result = await pool.query(
        `INSERT INTO patients (name, email, phone, age, gender, dosha, condition, status, treatment_start_date, treatment_duration)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'active', CURRENT_DATE, $8)
         RETURNING *`,
        [name, email, phone, age, gender, dosha, condition, treatment_duration]
      );

      return {
        success: true,
        data: result.rows[0],
        message: "Patient created successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update patient details
   */
  static async updatePatient(patientId: number, patientData: any) {
    try {
      const { name, email, phone, age, gender, dosha, condition, status } = patientData;

      const result = await pool.query(
        `UPDATE patients 
         SET name = $1, email = $2, phone = $3, age = $4, gender = $5, dosha = $6, condition = $7, status = $8
         WHERE id = $9
         RETURNING *`,
        [name, email, phone, age, gender, dosha, condition, status, patientId]
      );

      if (result.rows.length === 0) {
        throw new Error('Patient not found');
      }

      return {
        success: true,
        data: result.rows[0],
        message: "Patient updated successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== APPOINTMENTS ====================

  /**
   * Get all appointments with filtering
   */
  static async getAppointments(status?: string, date?: string) {
    try {
      let query = `
        SELECT 
          a.id,
          a.patient_id,
          a.doctor_id,
          a.therapy_id,
          a.appointment_date,
          a.appointment_time,
          a.room_number,
          a.status,
          a.notes,
          a.created_at,
          p.name as patient_name,
          p.dosha,
          d.name as doctor_name,
          d.specialization,
          t.therapy_name
        FROM appointments a
        JOIN patients p ON a.patient_id = p.id
        LEFT JOIN doctors d ON a.doctor_id = d.id
        LEFT JOIN therapies t ON a.therapy_id = t.id
        WHERE 1=1
      `;

      const params: any[] = [];

      if (status) {
        params.push(status);
        query += ` AND a.status = $${params.length}`;
      }

      if (date) {
        params.push(date);
        query += ` AND a.appointment_date = $${params.length}::date`;
      }

      query += ` ORDER BY a.appointment_date DESC, a.appointment_time ASC`;

      const result = await pool.query(query, params);

      return {
        success: true,
        data: result.rows,
        message: "Appointments fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update appointment status and details
   */
  static async updateAppointment(appointmentId: number, updateData: any) {
    try {
      const { status, notes, room_number } = updateData;

      const result = await pool.query(
        `UPDATE appointments 
         SET status = COALESCE($1, status), 
             notes = COALESCE($2, notes),
             room_number = COALESCE($3, room_number)
         WHERE id = $4
         RETURNING *`,
        [status || null, notes || null, room_number || null, appointmentId]
      );

      if (result.rows.length === 0) {
        throw new Error('Appointment not found');
      }

      return {
        success: true,
        data: result.rows[0],
        message: "Appointment updated successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Check doctor availability before booking
   */
  static async checkDoctorAvailability(doctorId: number, appointmentDate: string, appointmentTime: string) {
    try {
      const result = await pool.query(
        `SELECT COUNT(*) as count FROM appointments
         WHERE doctor_id = $1 AND appointment_date = $2::date AND appointment_time = $3
         AND status IN ('scheduled', 'confirmed', 'in_progress')`,
        [doctorId, appointmentDate, appointmentTime]
      );

      const isAvailable = parseInt(result.rows[0].count) === 0;

      return {
        success: true,
        data: { isAvailable, bookedCount: parseInt(result.rows[0].count) },
        message: "Doctor availability checked"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== THERAPY SESSIONS ====================

  /**
   * Get all therapy sessions with details
   */
  static async getTherapySessions(status?: string, date?: string) {
    try {
      let query = `
        SELECT 
          ts.id,
          ts.patient_id,
          ts.therapy_plan_id,
          ts.doctor_id,
          ts.session_date,
          ts.session_time,
          ts.therapy_type,
          ts.panchakarma_stage,
          ts.session_number,
          ts.status,
          ts.duration_minutes,
          ts.room_number,
          ts.notes,
          ts.created_at,
          p.name as patient_name,
          p.dosha,
          d.name as doctor_name,
          tp.therapy_type as plan_type
        FROM therapy_sessions ts
        JOIN patients p ON ts.patient_id = p.id
        LEFT JOIN doctors d ON ts.doctor_id = d.id
        JOIN therapy_plans tp ON ts.therapy_plan_id = tp.id
        WHERE 1=1
      `;

      const params: any[] = [];

      if (status) {
        params.push(status);
        query += ` AND ts.status = $${params.length}`;
      }

      if (date) {
        params.push(date);
        query += ` AND ts.session_date = $${params.length}::date`;
      }

      query += ` ORDER BY ts.session_date DESC, ts.session_time ASC`;

      const result = await pool.query(query, params);

      return {
        success: true,
        data: result.rows,
        message: "Therapy sessions fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update therapy session status and notes
   */
  static async updateTherapySession(sessionId: number, updateData: any) {
    try {
      const { status, notes, therapist_id } = updateData;
      const completionTime = status === 'completed' ? new Date().toISOString() : null;

      const result = await pool.query(
        `UPDATE therapy_sessions 
         SET status = COALESCE($1, status),
             notes = COALESCE($2, notes),
             doctor_id = COALESCE($3, doctor_id)
         WHERE id = $4
         RETURNING *`,
        [status || null, notes || null, therapist_id || null, sessionId]
      );

      if (result.rows.length === 0) {
        throw new Error('Therapy session not found');
      }

      return {
        success: true,
        data: result.rows[0],
        message: "Therapy session updated successfully",
        completionTime
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get therapy session sequence validation
   */
  static async validateSessionSequence(therapyPlanId: number, sessionNumber: number) {
    try {
      const result = await pool.query(
        `SELECT COUNT(*) as count FROM therapy_sessions
         WHERE therapy_plan_id = $1 AND session_number < $2
         AND status != 'completed'`,
        [therapyPlanId, sessionNumber]
      );

      const hasIncompleteEarlierSessions = parseInt(result.rows[0].count) > 0;

      return {
        success: true,
        data: { canProceed: !hasIncompleteEarlierSessions },
        message: "Session sequence validated"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== THERAPY PLANS ====================

  /**
   * Get therapy plans with sessions
   */
  static async getTherapyPlans(patientId?: number) {
    try {
      let query = `
        SELECT 
          tp.id,
          tp.patient_id,
          tp.doctor_id,
          tp.therapy_type,
          tp.start_date,
          tp.end_date,
          tp.duration_days,
          tp.status,
          tp.notes,
          tp.created_at,
          p.name as patient_name,
          d.name as doctor_name,
          COUNT(ts.id) as total_sessions,
          SUM(CASE WHEN ts.status = 'completed' THEN 1 ELSE 0 END) as completed_sessions
        FROM therapy_plans tp
        JOIN patients p ON tp.patient_id = p.id
        LEFT JOIN doctors d ON tp.doctor_id = d.id
        LEFT JOIN therapy_sessions ts ON tp.id = ts.therapy_plan_id
        WHERE 1=1
      `;

      const params: any[] = [];

      if (patientId) {
        params.push(patientId);
        query += ` AND tp.patient_id = $${params.length}`;
      }

      query += ` GROUP BY tp.id, p.name, d.name ORDER BY tp.start_date DESC`;

      const result = await pool.query(query, params);

      // Get sessions for each plan
      const plansWithSessions = await Promise.all(
        result.rows.map(async (plan) => {
          const sessionsResult = await pool.query(
            `SELECT * FROM therapy_sessions WHERE therapy_plan_id = $1 ORDER BY session_number ASC`,
            [plan.id]
          );
          return {
            ...plan,
            sessions: sessionsResult.rows
          };
        })
      );

      return {
        success: true,
        data: plansWithSessions,
        message: "Therapy plans fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== DOCTORS ====================

  /**
   * Get doctors with availability info
   */
  static async getDoctors() {
    try {
      const result = await pool.query(
        `SELECT 
          d.id,
          d.name,
          d.email,
          d.phone,
          d.specialization,
          d.experience_years,
          d.status,
          COUNT(a.id) FILTER (WHERE a.status IN ('scheduled', 'confirmed')) as scheduled_appointments
        FROM doctors d
        LEFT JOIN appointments a ON d.id = a.doctor_id
        GROUP BY d.id
        ORDER BY d.status DESC, d.name ASC`
      );

      // Compute availability for each doctor
      const doctorsWithAvailability = result.rows.map(doctor => ({
        ...doctor,
        availabilityStatus: doctor.status === 'active' && doctor.scheduled_appointments < 8 ? 'available' : doctor.status === 'active' ? 'busy' : 'off_duty',
        nextAvailableSlot: doctor.status === 'active' ? '10:30 AM' : 'Off Duty'
      }));

      return {
        success: true,
        data: doctorsWithAvailability,
        message: "Doctors fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get single doctor with detailed availability
   */
  static async getDoctorById(doctorId: number) {
    try {
      const result = await pool.query(
        `SELECT * FROM doctors WHERE id = $1`,
        [doctorId]
      );

      if (result.rows.length === 0) {
        throw new Error('Doctor not found');
      }

      const doctor = result.rows[0];

      // Get today's appointments
      const todayResult = await pool.query(
        `SELECT COUNT(*) as count FROM appointments
         WHERE doctor_id = $1 AND appointment_date = CURRENT_DATE`,
        [doctorId]
      );

      return {
        success: true,
        data: {
          ...doctor,
          todayAppointments: parseInt(todayResult.rows[0].count)
        },
        message: "Doctor details fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== NOTIFICATIONS & ALERTS ====================

  /**
   * Get notifications for staff
   */
  static async getNotifications(userId?: number, limit = 20) {
    try {
      const result = await pool.query(
        `SELECT 
          n.id,
          n.type,
          n.title,
          n.message,
          n.related_entity_type,
          n.related_entity_id,
          n.is_read,
          n.created_at,
          p.name as patient_name
        FROM notifications n
        LEFT JOIN patients p ON n.patient_id = p.id
        WHERE n.type IN ('missed_session', 'delayed_session', 'doctor_unavailable', 'system_alert')
        ORDER BY n.created_at DESC
        LIMIT $1`,
        [limit]
      );

      return {
        success: true,
        data: result.rows,
        message: "Notifications fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get alerts for the day
   */
  static async getAlerts() {
    try {
      const today = new Date().toISOString().split('T')[0];

      // Missed sessions
      const missedSessions = await pool.query(
        `SELECT ts.*, p.name FROM therapy_sessions ts
         JOIN patients p ON ts.patient_id = p.id
         WHERE ts.session_date = $1::date AND ts.status = 'scheduled'
         AND ts.session_time < CURRENT_TIME`,
        [today]
      );

      // Overlapping appointments
      const overlappingAppointments = await pool.query(
        `SELECT a.*, p.name, d.name as doctor_name FROM appointments a
         JOIN patients p ON a.patient_id = p.id
         LEFT JOIN doctors d ON a.doctor_id = d.id
         WHERE a.appointment_date = $1::date
         AND a.doctor_id IS NOT NULL
         AND (SELECT COUNT(*) FROM appointments a2 
              WHERE a2.doctor_id = a.doctor_id 
              AND a2.appointment_date = a.appointment_date
              AND a2.id != a.id
              AND a2.status IN ('scheduled', 'confirmed')) > 0`,
        [today]
      );

      // Doctor unavailable alerts
      const doctorUnavailable = await pool.query(
        `SELECT 
          d.id,
          d.name,
          COUNT(a.id) as appointment_count
        FROM doctors d
        LEFT JOIN appointments a ON d.id = a.doctor_id
          AND a.appointment_date = $1::date
          AND a.status IN ('scheduled', 'confirmed')
        WHERE d.status != 'active'
        GROUP BY d.id`,
        [today]
      );

      return {
        success: true,
        data: {
          missedSessions: missedSessions.rows,
          overlappingAppointments: overlappingAppointments.rows,
          doctorUnavailable: doctorUnavailable.rows
        },
        message: "Alerts fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark notification as read
   */
  static async markNotificationRead(notificationId: number) {
    try {
      const result = await pool.query(
        `UPDATE notifications SET is_read = TRUE WHERE id = $1 RETURNING *`,
        [notificationId]
      );

      if (result.rows.length === 0) {
        throw new Error('Notification not found');
      }

      return {
        success: true,
        data: result.rows[0],
        message: "Notification marked as read"
      };
    } catch (error) {
      throw error;
    }
  }

  // ==================== UTILITY METHODS ====================

  /**
   * Get session statistics for a day or date range
   */
  static async getSessionStatistics(startDate?: string, endDate?: string) {
    try {
      let query = `
        SELECT 
          COUNT(*) as total_sessions,
          SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
          SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress,
          SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled,
          AVG(duration_minutes) as avg_duration
        FROM therapy_sessions
        WHERE 1=1
      `;

      const params: any[] = [];

      if (startDate) {
        params.push(startDate);
        query += ` AND session_date >= $${params.length}::date`;
      }

      if (endDate) {
        params.push(endDate);
        query += ` AND session_date <= $${params.length}::date`;
      }

      const result = await pool.query(query, params);

      return {
        success: true,
        data: result.rows[0],
        message: "Session statistics fetched successfully"
      };
    } catch (error) {
      throw error;
    }
  }
}
