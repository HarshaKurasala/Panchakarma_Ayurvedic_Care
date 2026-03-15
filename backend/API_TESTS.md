# Panchakarma API Test Collection

## Base URL
```
http://localhost:5000
```

## 1. Health Check

### GET /health
```bash
curl http://localhost:5000/health
```

### GET /test-db
```bash
curl http://localhost:5000/test-db
```

## 2. Authentication

### POST /api/auth/login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@panchakarma.com",
    "password": "admin123"
  }'
```

### POST /api/auth/register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New User",
    "email": "newuser@example.com",
    "password": "password123",
    "role": "staff"
  }'
```

## 3. Dashboard

### GET /api/dashboard/stats
```bash
curl http://localhost:5000/api/dashboard/stats
```

### GET /api/dashboard/treatments
```bash
curl http://localhost:5000/api/dashboard/treatments
```

### GET /api/dashboard/payments
```bash
curl http://localhost:5000/api/dashboard/payments
```

### GET /api/dashboard/analytics
```bash
curl http://localhost:5000/api/dashboard/analytics
```

## 4. Patients

### GET /api/patients
```bash
curl http://localhost:5000/api/patients
```

### GET /api/patients/:id
```bash
curl http://localhost:5000/api/patients/1
```

### POST /api/patients
```bash
curl -X POST http://localhost:5000/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "condition": "Back Pain",
    "treatment_start_date": "2024-01-15",
    "treatment_duration": 14
  }'
```

### PUT /api/patients/:id
```bash
curl -X PUT http://localhost:5000/api/patients/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe Updated",
    "email": "john@example.com",
    "phone": "9876543210",
    "condition": "Back Pain",
    "status": "active",
    "treatment_start_date": "2024-01-15",
    "treatment_duration": 14
  }'
```

### DELETE /api/patients/:id
```bash
curl -X DELETE http://localhost:5000/api/patients/1
```

## 5. Appointments

### GET /api/appointments
```bash
curl http://localhost:5000/api/appointments
```

### POST /api/appointments
```bash
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": 1,
    "therapy_id": 1,
    "appointment_date": "2024-01-20",
    "appointment_time": "10:00:00",
    "room_number": "Room 101",
    "notes": "First session"
  }'
```

## 6. Therapies

### GET /api/therapies
```bash
curl http://localhost:5000/api/therapies
```

### POST /api/therapies
```bash
curl -X POST http://localhost:5000/api/therapies \
  -H "Content-Type: application/json" \
  -d '{
    "therapy_name": "Abhyangam",
    "description": "Full body oil massage",
    "duration": 60
  }'
```

## 7. Lab Reports

### GET /api/lab-reports
```bash
curl http://localhost:5000/api/lab-reports
```

### POST /api/lab-reports
```bash
curl -X POST http://localhost:5000/api/lab-reports \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": 1,
    "report_type": "Blood Test",
    "report_date": "2024-01-15"
  }'
```

## 8. Payments

### GET /api/payments
```bash
curl http://localhost:5000/api/payments
```

### GET /api/payments/today-total
```bash
curl http://localhost:5000/api/payments/today-total
```

### POST /api/payments
```bash
curl -X POST http://localhost:5000/api/payments \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": 1,
    "invoice_number": "#1001",
    "amount": 1500.00,
    "payment_date": "2024-01-15"
  }'
```
