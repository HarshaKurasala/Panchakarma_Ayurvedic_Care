-- Panchakarma Management System Database Schema

-- Patients Table
CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    condition VARCHAR(255),
    status VARCHAR(50) DEFAULT 'active',
    treatment_start_date DATE,
    treatment_duration INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Therapies Table
CREATE TABLE IF NOT EXISTS therapies (
    id SERIAL PRIMARY KEY,
    therapy_name VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    therapy_id INTEGER REFERENCES therapies(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    room_number VARCHAR(50),
    status VARCHAR(50) DEFAULT 'scheduled',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lab Reports Table
CREATE TABLE IF NOT EXISTS lab_reports (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    report_type VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending_verification',
    report_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data
INSERT INTO patients (name, email, phone, condition, status, treatment_start_date, treatment_duration) VALUES
('Rajesh Khanna', 'rajesh@example.com', '9876543210', 'Chronic Sinusitis', 'active', CURRENT_DATE - INTERVAL '4 days', 7),
('Meera Singh', 'meera@example.com', '9876543211', 'Arthritis', 'active', CURRENT_DATE - INTERVAL '1 day', 14),
('Amit Shah', 'amit@example.com', '9876543212', 'Digestive Reset', 'active', CURRENT_DATE - INTERVAL '9 days', 12);

INSERT INTO therapies (therapy_name, description, status) VALUES
('Vamana Karma', 'Therapeutic vomiting procedure', 'completed'),
('Basti Therapy', 'Medicated enema therapy', 'pending'),
('Consultation', 'General consultation', 'in_progress');

INSERT INTO appointments (patient_id, therapy_id, appointment_date, appointment_time, room_number, status, notes) VALUES
(1, 1, CURRENT_DATE, '08:30:00', 'Room 102', 'completed', 'Procedure successfully administered'),
(2, 3, CURRENT_DATE, '10:00:00', 'Cabin A', 'in_progress', 'New patient assessment. Follow-up for rheumatoid arthritis.'),
(3, 2, CURRENT_DATE, '11:30:00', 'Room 105', 'scheduled', 'Basti therapy session');

INSERT INTO lab_reports (patient_id, report_type, status, report_date) VALUES
(1, 'Blood Test', 'pending_verification', CURRENT_DATE),
(2, 'X-Ray', 'pending_verification', CURRENT_DATE),
(3, 'Urine Analysis', 'pending_verification', CURRENT_DATE);
