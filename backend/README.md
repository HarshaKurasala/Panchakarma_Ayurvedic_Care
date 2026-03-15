# Panchakarma Management System - Backend

Backend API for the Panchakarma Ayurvedic Care Management System built with Node.js, Express, TypeScript, and PostgreSQL.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Workflow](#workflow)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)

## 🎯 Overview

This backend system provides a comprehensive RESTful API for managing an Ayurvedic Panchakarma treatment center. It handles patient records, appointment scheduling, therapy management, lab reports, payment processing, and user authentication.

## 🛠️ Tech Stack

### **Runtime & Framework**
- **Node.js** (v18+) - JavaScript runtime environment
- **Express.js** (v5.2.1) - Fast, minimalist web framework for Node.js
- **TypeScript** (v5.9.3) - Typed superset of JavaScript for better code quality

### **Database**
- **PostgreSQL** (v14+) - Powerful, open-source relational database
- **pg** (v8.20.0) - PostgreSQL client for Node.js with connection pooling

### **Authentication & Security**
- **jsonwebtoken** (v9.0.3) - JWT token generation and verification
- **bcrypt** (v6.0.0) - Password hashing and encryption
- **CORS** (v2.8.6) - Cross-Origin Resource Sharing middleware

### **Development Tools**
- **ts-node** (v10.9.2) - TypeScript execution for Node.js
- **nodemon** (v3.1.11) - Auto-restart server on file changes
- **dotenv** (v17.3.1) - Environment variable management

### **Optional (Future Enhancement)**
- **Redis** (v5.11.0) - In-memory caching for session management

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                         │
│  (Frontend - Next.js deployed on Vercel)                    │
│  https://panchakarma-ayurvedic-care.vercel.app              │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/HTTPS Requests
                     │ (REST API Calls)
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     API GATEWAY LAYER                       │
│                    (Express.js Server)                      │
│                   Port: 5000 (localhost)                    │
├─────────────────────────────────────────────────────────────┤
│  Middleware:                                                │
│  • CORS Handler                                             │
│  • JSON Body Parser                                         │
│  • JWT Authentication                                       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      ROUTING LAYER                          │
├─────────────────────────────────────────────────────────────┤
│  /api/auth          → Authentication Routes                 │
│  /api/dashboard     → Dashboard Statistics                  │
│  /api/patients      → Patient Management                    │
│  /api/appointments  → Appointment Scheduling                │
│  /api/therapies     → Therapy Management                    │
│  /api/lab-reports   → Lab Report Management                 │
│  /api/payments      → Payment Processing                    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS LOGIC LAYER                     │
│                    (Route Controllers)                      │
├─────────────────────────────────────────────────────────────┤
│  • Request Validation                                       │
│  • Data Processing                                          │
│  • Error Handling                                           │
│  • Response Formatting                                      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATA ACCESS LAYER                        │
│                  (PostgreSQL Connection)                    │
├─────────────────────────────────────────────────────────────┤
│  • Connection Pool (pg)                                     │
│  • SQL Query Execution                                      │
│  • Transaction Management                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                         │
│                  PostgreSQL (panchakarma_db)                │
├─────────────────────────────────────────────────────────────┤
│  Tables:                                                    │
│  • users          → User accounts & authentication          │
│  • patients       → Patient records                         │
│  • appointments   → Appointment scheduling                  │
│  • therapies      → Therapy types & details                 │
│  • lab_reports    → Patient lab reports                     │
│  • payments       → Financial transactions                  │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Workflow

### **1. User Authentication Flow**
```
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │─────▶│   POST   │─────▶│  Verify  │─────▶│ Generate │
│  Login   │      │/api/auth │      │ Password │      │   JWT    │
│  Request │      │  /login  │      │  (bcrypt)│      │  Token   │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                                                              │
                                                              ▼
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │◀─────│  Return  │◀─────│  Query   │◀─────│  Fetch   │
│ Receives │      │   User   │      │   User   │      │   User   │
│  Token   │      │   Data   │      │   Data   │      │   From   │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
```

### **2. Protected API Request Flow**
```
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │─────▶│  Request │─────▶│   Auth   │─────▶│  Verify  │
│  Sends   │      │   with   │      │Middleware│      │   JWT    │
│  Request │      │  Bearer  │      │  Checks  │      │  Token   │
│          │      │  Token   │      │  Header  │      │          │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                                                              │
                                                              ▼
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │◀─────│  Return  │◀─────│ Execute  │◀─────│  Route   │
│ Receives │      │   JSON   │      │   SQL    │      │ Handler  │
│   Data   │      │ Response │      │  Query   │      │ Proceeds │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
```

### **3. CRUD Operation Flow (Example: Create Patient)**
```
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │─────▶│   POST   │─────▶│ Validate │─────▶│  Insert  │
│  Submits │      │/api/     │      │  Request │      │   Into   │
│   Form   │      │patients  │      │   Body   │      │   DB     │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                                                              │
                                                              ▼
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │◀─────│  Return  │◀─────│  Format  │◀─────│  Query   │
│  Updates │      │  201     │      │ Response │      │ Returns  │
│    UI    │      │ Created  │      │   Data   │      │  Result  │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
```

### **4. Dashboard Data Aggregation Flow**
```
┌──────────┐      ┌──────────┐      ┌──────────────────────────┐
│  Client  │─────▶│   GET    │─────▶│  Execute Multiple        │
│  Loads   │      │/api/     │      │  Parallel Queries:       │
│Dashboard │      │dashboard │      │  • Count Patients        │
│          │      │  /stats  │      │  • Count Doctors         │
│          │      │          │      │  • Count Appointments    │
│          │      │          │      │  • Count Therapies       │
│          │      │          │      │  • Sum Revenue           │
└──────────┘      └──────────┘      └──────────────────────────┘
                                                │
                                                ▼
┌──────────┐      ┌──────────┐      ┌──────────────────────────┐
│  Client  │◀─────│  Return  │◀─────│  Aggregate Results       │
│ Displays │      │   JSON   │      │  Into Single Response    │
│  Stats   │      │  Object  │      │  Object                  │
└──────────┘      └──────────┘      └──────────────────────────┘
```

### **5. Database Connection Pool Management**
```
┌─────────────────────────────────────────────────────────────┐
│                    Connection Pool                          │
│  (Maintains 10-20 active PostgreSQL connections)            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Request 1 ──▶ [Connection 1] ──▶ Execute Query ──▶ Return │
│  Request 2 ──▶ [Connection 2] ──▶ Execute Query ──▶ Return │
│  Request 3 ──▶ [Connection 3] ──▶ Execute Query ──▶ Return │
│  Request 4 ──▶ [Waits for available connection...]         │
│                                                             │
│  Benefits:                                                  │
│  ✓ Reuses connections (faster)                             │
│  ✓ Handles concurrent requests                             │
│  ✓ Automatic connection management                         │
│  ✓ Prevents connection exhaustion                          │
└─────────────────────────────────────────────────────────────┘
```

## ✨ Features

- RESTful API endpoints for all resources
- PostgreSQL database with connection pooling
- JWT authentication
- TypeScript for type safety
- CORS enabled for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update with your database credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=panchakarma_db
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret_key
```

### 3. Setup Database

Create the database and run the schema:

```bash
psql -U postgres
CREATE DATABASE panchakarma_db;
\q

psql -U postgres -d panchakarma_db -f schema.sql
```

### 4. Run the Server

Development mode (with hot reload):
```bash
npm run dev
```

Build and run production:
```bash
npm run build
node dist/server.js
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/treatments` - Get active treatments
- `GET /api/dashboard/payments` - Get recent payments
- `GET /api/dashboard/analytics` - Get registration analytics

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Appointments
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

### Therapies
- `GET /api/therapies` - Get all therapies
- `GET /api/therapies/:id` - Get therapy by ID
- `POST /api/therapies` - Create new therapy
- `PUT /api/therapies/:id` - Update therapy
- `DELETE /api/therapies/:id` - Delete therapy

### Lab Reports
- `GET /api/lab-reports` - Get all lab reports
- `GET /api/lab-reports/:id` - Get lab report by ID
- `POST /api/lab-reports` - Create new lab report
- `PUT /api/lab-reports/:id` - Update lab report
- `DELETE /api/lab-reports/:id` - Delete lab report

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/:id` - Get payment by ID
- `GET /api/payments/today-total` - Get today's total revenue
- `POST /api/payments` - Create new payment
- `PUT /api/payments/:id` - Update payment
- `DELETE /api/payments/:id` - Delete payment

## Testing Endpoints

Health check:
```bash
curl http://localhost:5000/health
```

Database connection:
```bash
curl http://localhost:5000/test-db
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts           # Database configuration
│   ├── middleware/
│   │   └── auth.ts         # Authentication middleware
│   ├── routes/
│   │   ├── auth.ts         # Authentication routes
│   │   ├── dashboard.ts    # Dashboard routes
│   │   ├── patients.ts     # Patient routes
│   │   ├── appointments.ts # Appointment routes
│   │   ├── therapies.ts    # Therapy routes
│   │   ├── lab-reports.ts  # Lab report routes
│   │   └── payments.ts     # Payment routes
│   └── server.ts           # Main server file
├── schema.sql              # Database schema
├── .env                    # Environment variables
├── .env.example            # Example environment variables
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Default Users

After running the schema, these users are available:

- **Admin**: admin@panchakarma.com / admin123
- **Doctor**: rajesh.varma@panchakarma.com / admin123
- **Staff**: staff@panchakarma.com / admin123

## CORS Configuration

The backend is configured to accept requests from the frontend. Update CORS settings in `server.ts` if needed.

## Deployment

For production deployment:

1. Set proper environment variables
2. Build the TypeScript code: `npm run build`
3. Run the compiled code: `node dist/server.js`
4. Use a process manager like PM2 for production

## License

MIT
