/**
 * STAFF API SERVICE
 * 
 * Client-side functions for calling staff dashboard backend endpoints
 * Handles all API requests with authentication
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Get JWT token from localStorage
 */
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
};

/**
 * Make API request with JWT authentication
 */
const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers as Record<string, string>,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API request failed');
  }

  return response.json();
};

// ==================== DASHBOARD ====================

/**
 * Get dashboard overview with today's metrics
 */
export const getDashboardOverview = async () => {
  return apiRequest('/api/staff/dashboard');
};

/**
 * Get today's schedule grouped by time slot
 */
export const getDailySchedule = async () => {
  return apiRequest('/api/staff/daily-schedule');
};

/**
 * Get session statistics for date range
 */
export const getSessionStatistics = async (startDate?: string, endDate?: string) => {
  const params = new URLSearchParams();
  if (startDate) params.append('startDate', startDate);
  if (endDate) params.append('endDate', endDate);
  
  return apiRequest(`/api/staff/statistics?${params.toString()}`);
};

// ==================== PATIENTS ====================

/**
 * Get all patients with pagination and search
 */
export const getPatients = async (page = 1, limit = 10, search = '') => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('limit', limit.toString());
  if (search) params.append('search', search);
  
  return apiRequest(`/api/staff/patients?${params.toString()}`);
};

/**
 * Get single patient details with history
 */
export const getPatientById = async (patientId: number) => {
  return apiRequest(`/api/staff/patients/${patientId}`);
};

/**
 * Create new patient
 */
export const createPatient = async (patientData: {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  dosha: string;
  condition: string;
  treatment_duration: number;
}) => {
  return apiRequest('/api/staff/patients', {
    method: 'POST',
    body: JSON.stringify(patientData),
  });
};

/**
 * Update patient details
 */
export const updatePatient = async (patientId: number, patientData: any) => {
  return apiRequest(`/api/staff/patients/${patientId}`, {
    method: 'PUT',
    body: JSON.stringify(patientData),
  });
};

// ==================== APPOINTMENTS ====================

/**
 * Get all appointments with optional filtering
 */
export const getAppointments = async (status?: string, date?: string) => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  if (date) params.append('date', date);
  
  return apiRequest(`/api/staff/appointments?${params.toString()}`);
};

/**
 * Update appointment status and details
 */
export const updateAppointment = async (appointmentId: number, updateData: any) => {
  return apiRequest(`/api/staff/appointments/${appointmentId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

/**
 * Check doctor availability before booking
 */
export const checkDoctorAvailability = async (
  doctorId: number,
  appointmentDate: string,
  appointmentTime: string
) => {
  const params = new URLSearchParams();
  params.append('appointmentDate', appointmentDate);
  params.append('appointmentTime', appointmentTime);
  
  return apiRequest(
    `/api/staff/appointments/check-availability/${doctorId}?${params.toString()}`
  );
};

// ==================== THERAPY SESSIONS ====================

/**
 * Get all therapy sessions with optional filtering
 */
export const getTherapySessions = async (status?: string, date?: string) => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  if (date) params.append('date', date);
  
  return apiRequest(`/api/staff/therapy-sessions?${params.toString()}`);
};

/**
 * Update therapy session status and notes
 */
export const updateTherapySession = async (sessionId: number, updateData: any) => {
  return apiRequest(`/api/staff/therapy-sessions/${sessionId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

/**
 * Validate if session can be executed in order
 */
export const validateSessionSequence = async (
  therapyPlanId: number,
  sessionNumber: number
) => {
  const params = new URLSearchParams();
  params.append('therapyPlanId', therapyPlanId.toString());
  params.append('sessionNumber', sessionNumber.toString());
  
  return apiRequest(`/api/staff/therapy-sessions/1/validate-sequence?${params.toString()}`);
};

// ==================== THERAPY PLANS ====================

/**
 * Get therapy plans with sessions
 */
export const getTherapyPlans = async (patientId?: number) => {
  const params = new URLSearchParams();
  if (patientId) params.append('patientId', patientId.toString());
  
  return apiRequest(`/api/staff/therapy-plans?${params.toString()}`);
};

// ==================== DOCTORS ====================

/**
 * Get all doctors with availability
 */
export const getDoctors = async () => {
  return apiRequest('/api/staff/doctors');
};

/**
 * Get single doctor with detailed availability
 */
export const getDoctorById = async (doctorId: number) => {
  return apiRequest(`/api/staff/doctors/${doctorId}`);
};

// ==================== NOTIFICATIONS ====================

/**
 * Get notifications for staff
 */
export const getNotifications = async (limit = 20) => {
  const params = new URLSearchParams();
  params.append('limit', limit.toString());
  
  return apiRequest(`/api/staff/notifications?${params.toString()}`);
};

/**
 * Mark notification as read
 */
export const markNotificationRead = async (notificationId: number) => {
  return apiRequest(`/api/staff/notifications/${notificationId}/read`, {
    method: 'PUT',
  });
};

/**
 * Get alerts for the day
 */
export const getAlerts = async () => {
  return apiRequest('/api/staff/alerts');
};

// ==================== ERROR HANDLING ====================

/**
 * Handle API errors with user-friendly messages
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};
