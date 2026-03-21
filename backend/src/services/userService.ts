// User/Patient Service - Core business logic for patient dashboard operations

import { pool } from "../config/db.js";

// 1. GET DASHBOARD OVERVIEW
export async function getDashboardOverview(patientId: number) {
  try {
    // Get upcoming appointments (next 7 days)
    const appointmentsResult = await pool.query(
      `SELECT a.*, t.therapy_name, d.name as doctor_name FROM appointments a
       JOIN therapies t ON a.therapy_id = t.id
       JOIN doctors d ON a.doctor_id = d.id
       WHERE a.patient_id = $1 AND a.appointment_date >= CURRENT_DATE AND a.appointment_date < CURRENT_DATE + INTERVAL '7 days'
       ORDER BY a.appointment_date ASC LIMIT 5`,
      [patientId]
    );

    // Get active therapy plans
    const plansResult = await pool.query(
      `SELECT tp.*, d.name as doctor_name FROM therapy_plans tp
       JOIN doctors d ON tp.doctor_id = d.id
       WHERE tp.patient_id = $1 AND tp.status = 'active'
       ORDER BY tp.start_date DESC`,
      [patientId]
    );

    // Get next therapy session
    const nextSessionResult = await pool.query(
      `SELECT ts.*, tp.therapy_type, d.name as doctor_name FROM therapy_sessions ts
       JOIN therapy_plans tp ON ts.therapy_plan_id = tp.id
       JOIN doctors d ON ts.doctor_id = d.id
       WHERE ts.patient_id = $1 AND ts.session_date >= CURRENT_DATE
       ORDER BY ts.session_date ASC, ts.session_time ASC LIMIT 1`,
      [patientId]
    );

    // Get completed sessions count
    const completedCountResult = await pool.query(
      `SELECT COUNT(*) as count FROM therapy_sessions WHERE patient_id = $1 AND status = 'completed'`,
      [patientId]
    );

    // Get recovery progress (percentage based on completed sessions vs total planned)
    const progressResult = await pool.query(
      `SELECT 
        COUNT(CASE WHEN status = 'completed' THEN 1 END)::float / 
        NULLIF(COUNT(*), 0)::float * 100 as progress_percentage
       FROM therapy_sessions WHERE patient_id = $1`,
      [patientId]
    );

    // Get recent notifications
    const notificationsResult = await pool.query(
      `SELECT * FROM notifications WHERE patient_id = $1 ORDER BY created_at DESC LIMIT 10`,
      [patientId]
    );

    return {
      upcomingAppointments: appointmentsResult.rows,
      activeTherapyPlans: plansResult.rows,
      nextTherapySession: nextSessionResult.rows[0] || null,
      completedSessionsCount: parseInt(completedCountResult.rows[0].count),
      recoveryProgress: Math.round(parseFloat(progressResult.rows[0]?.progress_percentage || 0)),
      recentNotifications: notificationsResult.rows
    };
  } catch (error) {
    throw error;
  }
}

// 2. GET PATIENT PROFILE
export async function getPatientProfile(patientId: number) {
  try {
    const result = await pool.query(
      `SELECT p.*, u.email FROM patients p
       JOIN users u ON p.user_id = u.id
       WHERE p.id = $1`,
      [patientId]
    );
    
    if (result.rows.length === 0) {
      throw new Error("Patient not found");
    }
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 3. UPDATE PATIENT PROFILE
export async function updatePatientProfile(patientId: number, data: any) {
  try {
    const { name, age, gender, dosha, medical_history } = data;
    
    const result = await pool.query(
      `UPDATE patients SET name = $1, age = $2, gender = $3, dosha = $4, medical_history = $5
       WHERE id = $6 RETURNING *`,
      [name, age, gender, dosha, medical_history, patientId]
    );
    
    if (result.rows.length === 0) {
      throw new Error("Patient not found");
    }
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 4. GET APPOINTMENTS
export async function getAppointments(patientId: number, status?: string) {
  try {
    let query = `SELECT a.*, t.therapy_name, d.name as doctor_name, d.specialization
                 FROM appointments a
                 JOIN therapies t ON a.therapy_id = t.id
                 JOIN doctors d ON a.doctor_id = d.id
                 WHERE a.patient_id = $1`;
    const params: any[] = [patientId];
    
    if (status) {
      query += ` AND a.status = $2`;
      params.push(status);
    }
    
    query += ` ORDER BY a.appointment_date DESC`;
    
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 5. BOOK NEW APPOINTMENT
export async function bookAppointment(patientId: number, data: any) {
  try {
    const { therapy_id, doctor_id, appointment_date, appointment_time, notes } = data;
    
    // Check doctor availability
    const availabilityResult = await pool.query(
      `SELECT COUNT(*) FROM appointments 
       WHERE doctor_id = $1 AND appointment_date = $2 AND appointment_time = $3 AND status NOT IN ('cancelled')`,
      [doctor_id, appointment_date, appointment_time]
    );
    
    let finalDoctorId = doctor_id;
    let finalTime = appointment_time;
    
    if (parseInt(availabilityResult.rows[0].count) > 0) {
      // Doctor not available, find next available slot
      const nextAvailableResult = await pool.query(
        `SELECT DISTINCT d.id, a.appointment_time FROM doctors d
         LEFT JOIN appointments a ON d.id = a.doctor_id AND a.appointment_date = $1 AND a.status NOT IN ('cancelled')
         WHERE d.status = 'active' AND d.id != $2
         ORDER BY a.appointment_time ASC LIMIT 1`,
        [appointment_date, doctor_id]
      );
      
      if (nextAvailableResult.rows.length > 0) {
        finalDoctorId = nextAvailableResult.rows[0].id;
        finalTime = nextAvailableResult.rows[0].appointment_time || appointment_time;
      }
    }
    
    const result = await pool.query(
      `INSERT INTO appointments (patient_id, therapy_id, doctor_id, appointment_date, appointment_time, status, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [patientId, therapy_id, finalDoctorId, appointment_date, finalTime, 'pending', notes]
    );
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 6. GET THERAPY PLANS
export async function getTherapyPlans(patientId: number) {
  try {
    const result = await pool.query(
      `SELECT tp.*, d.name as doctor_name, d.specialization FROM therapy_plans tp
       JOIN doctors d ON tp.doctor_id = d.id
       WHERE tp.patient_id = $1
       ORDER BY tp.start_date DESC`,
      [patientId]
    );
    
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 7. GET THERAPY SESSIONS (Day-wise schedule)
export async function getTherapySessions(patientId: number, status?: string) {
  try {
    let query = `SELECT ts.*, tp.therapy_type, d.name as doctor_name, p.before_instructions, p.after_instructions, p.precautions
                 FROM therapy_sessions ts
                 JOIN therapy_plans tp ON ts.therapy_plan_id = tp.id
                 LEFT JOIN doctors d ON ts.doctor_id = d.id
                 LEFT JOIN precautions p ON ts.id = p.therapy_session_id
                 WHERE ts.patient_id = $1`;
    const params: any[] = [patientId];
    
    if (status) {
      query += ` AND ts.status = $2`;
      params.push(status);
    }
    
    query += ` ORDER BY ts.session_date ASC, ts.session_time ASC, ts.session_number ASC`;
    
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 8. GET PROGRESS ANALYTICS
export async function getProgressAnalytics(patientId: number) {
  try {
    // Total sessions completed
    const completedResult = await pool.query(
      `SELECT COUNT(*) as count FROM therapy_sessions WHERE patient_id = $1 AND status = 'completed'`,
      [patientId]
    );

    // Average rating from feedback
    const ratingResult = await pool.query(
      `SELECT AVG(rating) as avg_rating, COUNT(*) as feedback_count FROM feedback WHERE patient_id = $1`,
      [patientId]
    );

    // Recovery percentage
    const recoveryResult = await pool.query(
      `SELECT 
        COUNT(CASE WHEN status = 'completed' THEN 1 END)::float / 
        NULLIF(COUNT(*), 0)::float * 100 as recovery_percentage
       FROM therapy_sessions WHERE patient_id = $1`,
      [patientId]
    );

    // Symptom tracking (based on therapy sessions completed per plan)
    const symptomResult = await pool.query(
      `SELECT tp.therapy_type, 
        COUNT(CASE WHEN ts.status = 'completed' THEN 1 END) as completed_sessions,
        COUNT(*) as total_sessions
       FROM therapy_plans tp
       LEFT JOIN therapy_sessions ts ON tp.id = ts.therapy_plan_id
       WHERE tp.patient_id = $1
       GROUP BY tp.therapy_type`,
      [patientId]
    );

    return {
      totalSessionsCompleted: parseInt(completedResult.rows[0].count),
      averageRating: parseFloat(ratingResult.rows[0]?.avg_rating || 0).toFixed(2),
      feedbackCount: parseInt(ratingResult.rows[0]?.feedback_count || 0),
      recoveryPercentage: Math.round(parseFloat(recoveryResult.rows[0]?.recovery_percentage || 0)),
      therapyProgress: symptomResult.rows
    };
  } catch (error) {
    throw error;
  }
}

// 9. POST FEEDBACK
export async function submitFeedback(patientId: number, data: any) {
  try {
    const { therapy_session_id, rating, comments } = data;
    
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    
    const result = await pool.query(
      `INSERT INTO feedback (patient_id, therapy_session_id, rating, comments)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [patientId, therapy_session_id, rating, comments]
    );
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 10. GET FEEDBACK
export async function getFeedback(patientId: number) {
  try {
    const result = await pool.query(
      `SELECT f.*, ts.session_date, ts.therapy_type FROM feedback f
       JOIN therapy_sessions ts ON f.therapy_session_id = ts.id
       WHERE f.patient_id = $1
       ORDER BY f.created_at DESC`,
      [patientId]
    );
    
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 11. GET NOTIFICATIONS
export async function getNotifications(patientId: number, limit: number = 20) {
  try {
    const result = await pool.query(
      `SELECT * FROM notifications WHERE patient_id = $1
       ORDER BY is_read ASC, created_at DESC
       LIMIT $2`,
      [patientId, limit]
    );
    
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 12. MARK NOTIFICATION AS READ
export async function markNotificationAsRead(notificationId: number) {
  try {
    const result = await pool.query(
      `UPDATE notifications SET is_read = true WHERE id = $1 RETURNING *`,
      [notificationId]
    );
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 13. GET PRECAUTIONS FOR SESSION
export async function getPrecautions(sessionId: number) {
  try {
    const result = await pool.query(
      `SELECT p.*, ts.therapy_type, ts.session_date, ts.session_time FROM precautions p
       JOIN therapy_sessions ts ON p.therapy_session_id = ts.id
       WHERE p.therapy_session_id = $1`,
      [sessionId]
    );
    
    if (result.rows.length === 0) {
      throw new Error("Precautions not found for this session");
    }
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// 14. GET BILLING/PAYMENTS
export async function getPayments(patientId: number) {
  try {
    const result = await pool.query(
      `SELECT * FROM payments WHERE patient_id = $1 ORDER BY payment_date DESC`,
      [patientId]
    );
    
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// 15. GET PAYMENT SUMMARY
export async function getPaymentSummary(patientId: number) {
  try {
    const result = await pool.query(
      `SELECT 
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) as paid_amount,
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) as pending_amount,
        COUNT(*) as total_invoices,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_count
       FROM payments WHERE patient_id = $1`,
      [patientId]
    );
    
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}
