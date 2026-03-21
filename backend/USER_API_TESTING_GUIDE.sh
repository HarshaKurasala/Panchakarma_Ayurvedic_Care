#!/usr/bin/env bash
# USER DASHBOARD API - TESTING GUIDE
# Complete backend module for Panchakarma Ayurvedic Care Patient Dashboard
# Base URL: http://localhost:5000

# ========================================
# AUTHENTICATION - Get JWT Token
# ========================================

# 1. Patient Login (Get Bearer Token)
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "rajesh.kumar@example.com",
    "password": "your_password"
  }'

# Expected Response:
# {
#   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "user": {
#     "id": 4,
#     "name": "Rajesh Kumar",
#     "email": "rajesh.kumar@example.com",
#     "role": "patient"
#   }
# }

# Store the token:
export TOKEN="your_token_here"

# ========================================
# 1. DASHBOARD OVERVIEW
# ========================================
# GET /api/user/dashboard
# Returns: upcoming appointments, therapy plans, next session, progress, notifications

curl -X GET http://localhost:5000/api/user/dashboard \
  -H "Authorization: Bearer $TOKEN"

# Response Structure:
#{
#  "success": true,
#  "data": {
#    "upcomingAppointments": [...],
#    "activeTherapyPlans": [...],
#    "nextTherapySession": {...},
#    "completedSessionsCount": 2,
#    "recoveryProgress": 50,
#    "recentNotifications": [...]
#  },
#  "message": "Dashboard overview retrieved successfully"
#}

# ========================================
# 2. USER PROFILE MANAGEMENT
# ========================================

# 2a. GET Profile
curl -X GET http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer $TOKEN"

# 2b. UPDATE Profile
curl -X PUT http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rajesh Kumar Updated",
    "age": 42,
    "gender": "Male",
    "dosha": "Vata-Pitta",
    "medical_history": "Chronic lower back pain, Updated notes..."
  }'

# ========================================
# 3. APPOINTMENT BOOKING SYSTEM
# ========================================

# 3a. GET All Appointments
curl -X GET http://localhost:5000/api/user/appointments \
  -H "Authorization: Bearer $TOKEN"

# 3a. GET Appointments by Status
curl -X GET "http://localhost:5000/api/user/appointments?status=pending" \
  -H "Authorization: Bearer $TOKEN"

# 3b. BOOK New Appointment
curl -X POST http://localhost:5000/api/user/appointments \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "therapy_id": 1,
    "doctor_id": 1,
    "appointment_date": "2026-03-25",
    "appointment_time": "10:00:00",
    "notes": "Follow-up consultation for ongoing sinusitis treatment"
  }'

# Features:
# - Doctor availability check
# - Auto-assign to next available doctor if selected doctor unavailable
# - Status: pending → confirmed → completed/cancelled

# ========================================
# 4. THERAPY PLAN TRACKING
# ========================================

# GET Active Therapy Plans
curl -X GET http://localhost:5000/api/user/therapy-plans \
  -H "Authorization: Bearer $TOKEN"

# Response:
#{
#  "success": true,
#  "data": [
#    {
#      "id": 1,
#      "patient_id": 1,
#      "doctor_id": 1,
#      "therapy_type": "Panchakarma - 7 Day Intensive",
#      "start_date": "2026-03-17",
#      "end_date": "2026-03-24",
#      "duration_days": 7,
#      "status": "active",
#      "doctor_name": "Dr. Rajesh Varma",
#      "notes": "Full Panchakarma protocol..."
#    }
#  ]
#}

# ========================================
# 5. THERAPY SESSION TRACKING (CORE)
# ========================================

# 5a. GET All Sessions (Day-wise Schedule)
curl -X GET http://localhost:5000/api/user/therapy-sessions \
  -H "Authorization: Bearer $TOKEN"

# 5b. GET Sessions by Status
curl -X GET "http://localhost:5000/api/user/therapy-sessions?status=scheduled" \
  -H "Authorization: Bearer $TOKEN"

# Response includes:
#{
#  "id": 1,
#  "patient_id": 1,
#  "session_date": "2026-03-17",
#  "session_time": "08:30",
#  "therapy_type": "Abhyangam",
#  "panchakarma_stage": "Purva Karma",
#  "session_number": 1,
#  "status": "completed",
#  "duration_minutes": 60,
#  "doctor_name": "Dr. Rajesh Varma",
#  "before_instructions": "Avoid heavy food...",
#  "after_instructions": "Rest for 2 hours...",
#  "precautions": "Do not exercise..."
#}

# Panchakarma Stages:
# - Purva Karma: Preparation phase (Abhyangam, Snehanam)
# - Pradhana Karma: Main procedure (Vamana, Basti, Virechana, Nasya, Shirodhara, Swedanam)
# - Paschat Karma: Recovery phase

# ========================================
# 6. RECOVERY & PROGRESS ANALYTICS
# ========================================

# GET Progress Metrics
curl -X GET http://localhost:5000/api/user/progress \
  -H "Authorization: Bearer $TOKEN"

# Response:
#{
#  "success": true,
#  "data": {
#    "totalSessionsCompleted": 3,
#    "averageRating": "4.67",
#    "feedbackCount": 3,
#    "recoveryPercentage": 60,
#    "therapyProgress": [
#      {
#        "therapy_type": "Panchakarma - 7 Day Intensive",
#        "completed_sessions": 3,
#        "total_sessions": 5
#      }
#    ]
#  }
#}

# ========================================
# 7. FEEDBACK SYSTEM
# ========================================

# 7a. SUBMIT Feedback for Session
curl -X POST http://localhost:5000/api/user/feedback \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "therapy_session_id": 1,
    "rating": 5,
    "comments": "Excellent massage therapy. Very soothing and professional."
  }'

# 7b. GET All Feedback
curl -X GET http://localhost:5000/api/user/feedback \
  -H "Authorization: Bearer $TOKEN"

# ========================================
# 8. NOTIFICATION SYSTEM
# ========================================

# 8a. GET Notifications
curl -X GET "http://localhost:5000/api/user/notifications?limit=20" \
  -H "Authorization: Bearer $TOKEN"

# Types:
# - appointment_reminder
# - therapy_session
# - precautions
# - general

# 8b. MARK Notification as Read
curl -X PUT http://localhost:5000/api/user/notifications/1 \
  -H "Authorization: Bearer $TOKEN"

# ========================================
# 9. PRE & POST THERAPY GUIDELINES
# ========================================

# GET Precautions for Specific Session
curl -X GET http://localhost:5000/api/user/precautions/3 \
  -H "Authorization: Bearer $TOKEN"

# Response:
#{
#  "success": true,
#  "data": {
#    "id": 1,
#    "therapy_session_id": 3,
#    "before_instructions": "Avoid heavy food. Do not eat 2 hours before therapy...",
#    "after_instructions": "Rest for 2 hours after therapy. Avoid cold water...",
#    "precautions": "Do not exercise. Avoid loud noise. Stay in warm environment...",
#    "therapy_type": "Vamana",
#    "session_date": "2026-03-19",
#    "session_time": "08:30"
#  }
#}

# ========================================
# 10. BILLING & PAYMENTS
# ========================================

# 10a. GET All Payments/Invoices
curl -X GET http://localhost:5000/api/user/payments \
  -H "Authorization: Bearer $TOKEN"

# 10b. GET Payment Summary
curl -X GET http://localhost:5000/api/user/payments/summary \
  -H "Authorization: Bearer $TOKEN"

# Response:
#{
#  "success": true,
#  "data": {
#    "paid_amount": "1170.00",
#    "pending_amount": "2340.00",
#    "total_invoices": 4,
#    "pending_count": 2
#  }
#}

# ========================================
# ERROR HANDLING
# ========================================

# 401 - Unauthorized (missing/invalid token)
#{
#  "success": false,
#  "message": "No token provided"
#}

# 403 - Forbidden (not a patient)
#{
#  "success": false,
#  "message": "Access denied. Patient role required."
#}

# 500 - Server Error
#{
#  "success": false,
#  "message": "Error message details"
#}

# ========================================
# TESTING WORKFLOW
# ========================================

# 1. Login to get token
# 2. View dashboard overview
# 3. Check profile
# 4. View upcoming appointments
# 5. Book new appointment
# 6. View therapy plans
# 7. Check therapy sessions schedule
# 8. View progress analytics
# 9. Submit feedback for completed session
# 10. Check notifications
# 11. View payment history
# 12. Check precautions for next session

# ========================================
# FEATURES & BUSINESS LOGIC
# ========================================

# ✓ JWT-based authentication (24h expiry)
# ✓ Patient role-based access control
# ✓ Auto-schedule therapy sessions when plan created
# ✓ Patient can only access own data (isolation)
# ✓ Appointment conflict management
# ✓ Auto-assign to next available doctor if first choice unavailable
# ✓ Session sequence integrity (Purva → Pradhana → Paschat Karma)
# ✓ Recovery progress tracked as percentage
# ✓ Pre/post therapy guidelines (precautions)
# ✓ Appointment reminders via notifications
# ✓ Payment tracking and billing summary
# ✓ Feedback system linked to sessions
# ✓ Panchakarma-specific therapy types support

# ========================================
# DATABASE RELATIONSHIPS
# ========================================

# users (1) → (many) patients → (many) therapy_plans → (many) therapy_sessions
# therapy_sessions → precautions, feedback, notifications
# therapy_sessions → doctors
# appointments → patients, therapies, doctors
# payments → patients
# lab_reports → patients

# ========================================
# SUCCESS METRICS
# ========================================

# Response format: { success: true/false, data: {...}, message: "..." }
# All endpoints return consistent JSON format
# Error messages are descriptive
# Recovery percentage calculates based on completed sessions
# Notifications sorted by read status (unread first)
# Payments summarized by status (paid vs pending)
