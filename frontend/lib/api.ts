/**
 * API Client for Panchakarma Management System
 * Handles all HTTP requests to the backend API with JWT authentication
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Store JWT token in localStorage
 */
export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token);
  }
};

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
 * Remove JWT token from localStorage
 */
export const clearAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
  }
};

/**
 * API request wrapper with JWT authentication and retry logic
 */
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {},
  retries = 3
) => {
  const token = getAuthToken();
  const headersObj: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headersObj['Authorization'] = `Bearer ${token}`;
  }

  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      console.log(`[API] ${attempt > 0 ? `Retry ${attempt}/${retries - 1}` : 'Request'}: ${API_BASE_URL}${endpoint}`);
      
      const response = await Promise.race([
        fetch(`${API_BASE_URL}${endpoint}`, {
          ...options,
          headers: {
            ...headersObj,
            ...(typeof options.headers === 'object' && options.headers !== null ? options.headers : {}),
          },
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout after 30 seconds')), 30000)
        ),
      ]) as Response;

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid - don't retry
          clearAuthToken();
          window.location.href = '/user/login';
          throw new Error('Unauthorized - redirecting to login');
        }
        
        let errorMessage = `API error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          // Response is not JSON
        }
        
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      lastError = error as Error;
      console.error(`[API] Error on attempt ${attempt + 1}:`, lastError.message);

      // Don't retry on certain errors
      if (lastError.message.includes('Unauthorized') || lastError.message.includes('redirecting')) {
        throw lastError;
      }

      // Wait before retrying (exponential backoff)
      if (attempt < retries - 1) {
        const delayMs = Math.min(1000 * Math.pow(2, attempt), 5000);
        console.log(`[API] Waiting ${delayMs}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  }

  // All retries exhausted
  if (lastError?.message.includes('Failed to fetch') || lastError?.message.includes('Network')) {
    const errorMsg = `Network Error: Cannot connect to backend server at ${API_BASE_URL}. 
    
Please ensure:
1. Backend server is running (npm run dev from backend folder)
2. Backend is on http://localhost:5000
3. Check your internet connection
4. Firewall isn't blocking the connection

Original error: ${lastError.message}`;
    throw new Error(errorMsg);
  }

  throw lastError || new Error(`Failed to fetch ${endpoint} after ${retries} attempts`);
}

/**
 * User Authentication APIs
 */
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (response.token) {
      setAuthToken(response.token);
    }
    return response;
  },

  register: async (name: string, email: string, age: number, password: string) => {
    const response = await apiRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, age, password }),
    });
    if (response.token) {
      setAuthToken(response.token);
    }
    return response;
  },

  logout: () => {
    clearAuthToken();
  },
};

/**
 * User Dashboard APIs
 */
export const dashboardAPI = {
  // Get complete dashboard overview
  getOverview: async () => {
    return apiRequest('/api/user/dashboard');
  },

  // Get patient profile information
  getProfile: async () => {
    return apiRequest('/api/user/profile');
  },

  // Update patient profile
  updateProfile: async (data: Record<string, any>) => {
    return apiRequest('/api/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Get all appointments (with status filter)
  getAppointments: async (status?: string) => {
    const query = status ? `?status=${status}` : '';
    return apiRequest(`/api/user/appointments${query}`);
  },

  // Book a new appointment
  bookAppointment: async (therapyId: string, preferredDate: string, preferredTime: string) => {
    return apiRequest('/api/user/appointments', {
      method: 'POST',
      body: JSON.stringify({ therapyId, preferredDate, preferredTime }),
    });
  },

  // Get all therapy plans
  getTherapyPlans: async () => {
    return apiRequest('/api/user/therapy-plans');
  },

  // Get therapy sessions (day-wise schedule)
  getTherapySessions: async () => {
    return apiRequest('/api/user/therapy-sessions');
  },

  // Get progress analytics
  getProgressAnalytics: async () => {
    return apiRequest('/api/user/progress-analytics');
  },

  // Submit feedback for a session
  submitFeedback: async (sessionId: string, rating: number, comments: string) => {
    return apiRequest('/api/user/feedback', {
      method: 'POST',
      body: JSON.stringify({ sessionId, rating, comments }),
    });
  },

  // Get all feedback
  getFeedback: async () => {
    return apiRequest('/api/user/feedback');
  },

  // Get notifications
  getNotifications: async () => {
    return apiRequest('/api/user/notifications');
  },

  // Mark notification as read
  markNotificationRead: async (notificationId: string) => {
    return apiRequest(`/api/user/notifications/${notificationId}`, {
      method: 'PUT',
    });
  },

  // Get precautions/guidelines
  getPrecautions: async () => {
    return apiRequest('/api/user/precautions');
  },

  // Get payment history
  getPayments: async () => {
    return apiRequest('/api/user/payments');
  },

  // Get payment summary
  getPaymentSummary: async () => {
    return apiRequest('/api/user/payments/summary');
  },
};

/**
 * Type definitions for API responses
 */
export interface DashboardOverview {
  upcomingSessions: number;
  activeTreatment: string;
  treatmentHistory: number;
  dueAmount: number;
  harmonyScore: number;
  dosha: string;
  appointments: Appointment[];
  therapyPlans: TherapyPlan[];
}

export interface Appointment {
  id: string;
  therapyName: string;
  dateTime: string;
  doctorName: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  sessionNumber?: number;
  totalSessions?: number;
}

export interface TherapyPlan {
  id: string;
  name: string;
  status: 'active' | 'completed';
  startDate: string;
  endDate: string;
  progress: number;
}

export interface Payment {
  id: string;
  invoiceNumber: string;
  amount: number;
  date: string;
  status: 'paid' | 'unpaid';
}

export interface Notification {
  id: string;
  type: string;
  message: string;
  timestamp: string;
  read: boolean;
}
