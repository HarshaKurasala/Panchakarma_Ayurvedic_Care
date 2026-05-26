# Panchakarma Ayurvedic Care Management System

A comprehensive healthcare management solution designed specifically for Ayurvedic Panchakarma treatment centers. This system streamlines clinical workflows, patient management, and administrative tasks within a modern, secure, and user-friendly digital environment.

## 🌟 Overview

The Panchakarma Management System is a full-stack application that provides specialized tools for practitioners and patients in the Ayurvedic ecosystem. It manages the entire patient lifecycle—from initial consultation and 21-day Panchakarma protocol tracking to payment processing and lab report management.

## 🏗️ Project Architecture

The system follows a modern decoupled architecture:

- **Frontend**: Next.js (TypeScript) application providing distinct portals for Admins, Doctors, Staff, and Patients.
- **Backend**: Node.js & Express (TypeScript) RESTful API handling business logic and data persistence.
- **Database**: PostgreSQL for robust relational data management.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Google Material Symbols
- **State Management**: React Hooks & Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Bcrypt (Password Hashing), CORS

### Database
- **Engine**: PostgreSQL
- **Client**: `pg` (node-postgres) with Connection Pooling

## ✨ Core Features

### 🔐 Multi-Role Access Control
- **Admin**: Oversight of all operations, financial analytics, and system users.
- **Doctor**: Clinical management, patient consultations, and therapy prescriptions.
- **Staff**: Daily scheduling, therapy execution tracking, and inventory.
- **Patient**: Personal health dashboard, appointment booking, and treatment history.

### 📅 Clinical Management
- **21-Day Protocol**: Specialized tracking for the traditional Panchakarma timeline.
- **Appointment Scheduling**: Real-time booking and specialist availability management.
- **Lab Reports**: Digital storage and retrieval of patient diagnostics.

### 💳 Financial & Analytics
- **Revenue Tracking**: Daily and monthly financial summaries.
- **Payment Processing**: Integrated billing for consultations and therapies.
- **Analytics Dashboard**: Visual representation of registration trends and treatment success.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### 1. Database Setup
```bash
# Create the database
psql -U postgres -c "CREATE DATABASE panchakarma_db;"

# Initialize schema and sample data
psql -U postgres -d panchakarma_db -f backend/schema.sql
```

### 2. Backend Configuration
```bash
cd backend
npm install

# Create .env file based on .env.example
# Update DB credentials and JWT_SECRET
npm run dev
```

### 3. Frontend Configuration
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

## 👤 Default Credentials

The system comes pre-seeded with the following test accounts:

| Role | Username / Email | Password |
| :--- | :--- | :--- |
| **Admin** | admin@panchakarma.com | `admin123` |
| **Doctor** | rajesh.varma@panchakarma.com | `admin123` |
| **Staff** | staff@panchakarma.com | `admin123` |

## 📁 Project Structure

```text
panchakarma-management-system/
├── backend/                # Express API
│   ├── src/                # Source code (Controllers, Routes, Middleware)
│   ├── dist/               # Compiled JavaScript
│   └── schema.sql          # Database initialization
├── frontend/               # Next.js Application
│   ├── app/                # App Router (Pages & Layouts)
│   ├── components/         # Reusable UI components
│   └── lib/                # API utilities
└── README.md               # Project documentation
```

## 📜 License

This project is licensed under the MIT License.
