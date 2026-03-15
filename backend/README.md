# Panchakarma Management System - Backend

Backend API for the Panchakarma Ayurvedic Care Management System built with Node.js, Express, TypeScript, and PostgreSQL.

## Features

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
