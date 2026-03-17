# Admin API Endpoints Documentation

Complete API reference for the Panchakarma Admin Dashboard backend.

## Base URL
```
http://localhost:5000/api
```

---

## 🔐 Authentication

### POST /auth/login
Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "admin@panchakarma.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@panchakarma.com",
    "role": "admin"
  }
}
```

---

## 📊 Dashboard

### GET /dashboard/stats
Get dashboard statistics.

**Response:**
```json
{
  "totalPatients": { "value": 1284, "change": "+12%" },
  "activeDoctors": { "value": 24 },
  "appointments": { "value": 158, "badge": "High Priority" },
  "ongoingTherapy": { "value": 82 },
  "totalRevenue": { "value": 42800, "change": "+8.5%" }
}
```

### GET /dashboard/treatments
Get active treatments list.

**Response:**
```json
[
  {
    "patient_name": "Rajesh Kumar",
    "patient_id": 1,
    "treatment": "Abhyangam",
    "status": "active",
    "appointment_date": "2024-01-15",
    "notes": "7-Day Course"
  }
]
```

### GET /dashboard/payments
Get recent payments.

**Response:**
```json
[
  {
    "name": "M. Gupta",
    "invoice_number": "#0921",
    "amount": 850.00,
    "status": "paid",
    "payment_date": "2024-01-15"
  }
]
```

### GET /dashboard/analytics
Get registration analytics by month.

**Response:**
```json
[
  { "month": "Jan", "registrations": 45 },
  { "month": "Feb", "registrations": 52 }
]
```

### GET /dashboard/revenue-mix
Get revenue breakdown by category.

**Response:**
```json
{
  "revenueMix": [
    {
      "category": "Panchakarma",
      "total": 24500,
      "count": 15,
      "percentage": "61.5"
    },
    {
      "category": "Products",
      "total": 8200,
      "count": 8,
      "percentage": "20.6"
    }
  ],
  "totalRevenue": 39800
}
```

---

## 👥 Patients

### GET /patients
Get all patients with filtering and pagination.

**Query Parameters:**
- `search` - Search by name or ID
- `dosha` - Filter by dosha type (Vata, Pitta, Kapha)
- `gender` - Filter by gender (Male, Female)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Example:**
```
GET /patients?search=rajesh&dosha=vata&page=1&limit=10
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Rajesh Kumar",
      "email": "rajesh.kumar@example.com",
      "phone": "9876543210",
      "age": 42,
      "gender": "Male",
      "dosha": "Vata-Pitta",
      "medical_history": "Chronic lower back pain, Insomnia, Migraine issues",
      "condition": "Chronic Sinusitis",
      "status": "active",
      "treatment_start_date": "2024-01-11",
      "treatment_duration": 7,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 48,
    "totalPages": 5
  }
}
```

### GET /patients/:id
Get single patient by ID.

### POST /patients
Create new patient.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "age": 35,
  "gender": "Male",
  "dosha": "Pitta",
  "medical_history": "Digestive issues",
  "condition": "Acidity",
  "treatment_start_date": "2024-01-20",
  "treatment_duration": 14
}
```

### PUT /patients/:id
Update patient.

### DELETE /patients/:id
Delete patient.

---

## 👨‍⚕️ Doctors/Specialists

### GET /doctors
Get all doctors with filtering.

**Query Parameters:**
- `search` - Search by name or email
- `specialization` - Filter by specialization
- `status` - Filter by status (default: active)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Dr. Rajesh Varma",
      "email": "rajesh.varma@panchakarma.com",
      "phone": "9876501234",
      "specialization": "Panchakarma Specialist",
      "experience_years": 15,
      "status": "active",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 24,
    "totalPages": 3
  }
}
```

### GET /doctors/:id
Get single doctor by ID.

### POST /doctors
Create new doctor.

**Request Body:**
```json
{
  "name": "Dr. John Smith",
  "email": "john.smith@panchakarma.com",
  "phone": "9876501238",
  "specialization": "Ayurvedic Physician",
  "experience_years": 10
}
```

### PUT /doctors/:id
Update doctor.

### DELETE /doctors/:id
Delete doctor.

---

## 📅 Appointments

### GET /appointments
Get all appointments with filtering.

**Query Parameters:**
- `status` - Filter by status (scheduled, in_progress, completed)
- `date` - Filter by date (YYYY-MM-DD)
- `doctor_id` - Filter by doctor
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "patient_id": 1,
      "therapy_id": 1,
      "doctor_id": 1,
      "appointment_date": "2024-01-15",
      "appointment_time": "08:30:00",
      "room_number": "Room 102",
      "status": "scheduled",
      "notes": "First session",
      "patient_name": "Rajesh Kumar",
      "patient_age": 42,
      "patient_gender": "Male",
      "therapy_name": "Abhyangam",
      "doctor_name": "Dr. Rajesh Varma"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 158,
    "totalPages": 16
  }
}
```

### GET /appointments/:id
Get single appointment by ID.

### POST /appointments
Create new appointment.

**Request Body:**
```json
{
  "patient_id": 1,
  "therapy_id": 1,
  "doctor_id": 1,
  "appointment_date": "2024-01-20",
  "appointment_time": "10:00:00",
  "room_number": "Room 101",
  "notes": "Initial consultation"
}
```

### PUT /appointments/:id
Update appointment.

### DELETE /appointments/:id
Delete appointment.

---

## 💊 Therapies

### GET /therapies
Get all therapies.

### GET /therapies/:id
Get single therapy by ID.

### POST /therapies
Create new therapy.

**Request Body:**
```json
{
  "therapy_name": "Udvartanam",
  "description": "Powder massage for weight management",
  "duration": 45
}
```

### PUT /therapies/:id
Update therapy.

### DELETE /therapies/:id
Delete therapy.

---

## 🧪 Lab Reports

### GET /lab-reports
Get all lab reports.

### GET /lab-reports/:id
Get single lab report by ID.

### POST /lab-reports
Create new lab report.

**Request Body:**
```json
{
  "patient_id": 1,
  "report_type": "Blood Test",
  "report_date": "2024-01-15"
}
```

### PUT /lab-reports/:id
Update lab report status.

### DELETE /lab-reports/:id
Delete lab report.

---

## 💰 Payments

### GET /payments
Get all payments.

**Response:**
```json
[
  {
    "id": 1,
    "patient_id": 1,
    "invoice_number": "#0921",
    "amount": 850.00,
    "category": "Panchakarma",
    "status": "paid",
    "payment_date": "2024-01-15",
    "patient_name": "Rajesh Kumar"
  }
]
```

### GET /payments/today-total
Get today's total revenue.

**Response:**
```json
{
  "total": 4520.00
}
```

### GET /payments/:id
Get single payment by ID.

### POST /payments
Create new payment.

**Request Body:**
```json
{
  "patient_id": 1,
  "invoice_number": "#1001",
  "amount": 1500.00,
  "category": "Panchakarma",
  "payment_date": "2024-01-15"
}
```

### PUT /payments/:id
Update payment.

### DELETE /payments/:id
Delete payment.

---

## 🔒 Authentication Headers

For protected routes, include JWT token in headers:

```
Authorization: Bearer <your_jwt_token>
```

---

## ⚠️ Error Responses

All endpoints return errors in this format:

```json
{
  "error": "Error message description"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## 📝 Notes

- All dates are in `YYYY-MM-DD` format
- All times are in `HH:MM:SS` format
- Pagination defaults: page=1, limit=10
- Search is case-insensitive
- Filters can be combined
