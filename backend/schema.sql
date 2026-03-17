-- Panchakarma Management System Database Schema

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patients Table
CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    age INTEGER,
    gender VARCHAR(20),
    dosha VARCHAR(50),
    medical_history TEXT,
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

-- Doctors/Specialists Table
CREATE TABLE IF NOT EXISTS doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    specialization VARCHAR(255),
    experience_years INTEGER,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    therapy_id INTEGER REFERENCES therapies(id),
    doctor_id INTEGER REFERENCES doctors(id),
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

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    invoice_number VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) DEFAULT 'Panchakarma',
    status VARCHAR(50) DEFAULT 'pending',
    payment_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data

-- Insert default admin user (password: admin123)
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@panchakarma.com', '$2b$10$rKZYvJ8B7ZqXn5Z5Z5Z5ZeJ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', 'admin'),
('Dr. Rajesh Varma', 'rajesh.varma@panchakarma.com', '$2b$10$rKZYvJ8B7ZqXn5Z5Z5Z5ZeJ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', 'doctor'),
('Staff Member', 'staff@panchakarma.com', '$2b$10$rKZYvJ8B7ZqXn5Z5Z5Z5ZeJ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', 'staff');

INSERT INTO patients (name, email, phone, age, gender, dosha, medical_history, condition, status, treatment_start_date, treatment_duration) VALUES
('Rajesh Kumar', 'rajesh.kumar@example.com', '9876543210', 42, 'Male', 'Vata-Pitta', 'Chronic lower back pain, Insomnia, Migraine issues', 'Chronic Sinusitis', 'active', CURRENT_DATE - INTERVAL '4 days', 7),
('Sunita Patel', 'sunita.patel@example.com', '9876543211', 35, 'Female', 'Kapha', 'Joint pain, Weight management, Seasonal allergies', 'Arthritis', 'active', CURRENT_DATE - INTERVAL '1 day', 14),
('Amit Iyer', 'amit.iyer@example.com', '9876543212', 29, 'Male', 'Pitta', 'Digestive disorders, Skin inflammation, Stress', 'Digestive Reset', 'active', CURRENT_DATE - INTERVAL '9 days', 12),
('Meera Devi', 'meera.devi@example.com', '9876543213', 58, 'Female', 'Vata', 'Arthritis, Anxiety, Post-treatment recovery', 'Joint Pain', 'active', CURRENT_DATE - INTERVAL '2 days', 10),
('Vikram Singh', 'vikram.singh@example.com', '9876543214', 51, 'Male', 'Kapha-Pitta', 'Respiratory issues, Sinusitis, High blood pressure', 'Respiratory Issues', 'active', CURRENT_DATE - INTERVAL '5 days', 14);

INSERT INTO therapies (therapy_name, description, status, duration) VALUES
('Vamana Karma', 'Therapeutic vomiting procedure', 'completed', 60),
('Basti Therapy', 'Medicated enema therapy', 'pending', 45),
('Consultation', 'General consultation', 'in_progress', 30),
('Abhyangam', 'Full body oil massage therapy', 'active', 60),
('Shirodhara', 'Oil pouring therapy for stress relief', 'active', 45),
('Nasya', 'Nasal administration of medicated oils', 'active', 30);

INSERT INTO doctors (name, email, phone, specialization, experience_years, status) VALUES
('Dr. Rajesh Varma', 'rajesh.varma@panchakarma.com', '9876501234', 'Panchakarma Specialist', 15, 'active'),
('Dr. Priya Nair', 'priya.nair@panchakarma.com', '9876501235', 'Ayurvedic Physician', 12, 'active'),
('Dr. Amit Shah', 'amit.shah@panchakarma.com', '9876501236', 'Vata Dosha Expert', 10, 'active'),
('Dr. Sneha Rao', 'sneha.rao@panchakarma.com', '9876501237', 'Wellness Consultant', 8, 'active');

INSERT INTO appointments (patient_id, therapy_id, doctor_id, appointment_date, appointment_time, room_number, status, notes) VALUES
(1, 1, 1, CURRENT_DATE, '08:30:00', 'Room 102', 'completed', 'Procedure successfully administered'),
(2, 3, 2, CURRENT_DATE, '10:00:00', 'Cabin A', 'in_progress', 'New patient assessment. Follow-up for rheumatoid arthritis.'),
(3, 2, 3, CURRENT_DATE, '11:30:00', 'Room 105', 'scheduled', 'Basti therapy session'),
(4, 4, 1, CURRENT_DATE + INTERVAL '1 day', '09:00:00', 'Room 101', 'scheduled', 'Abhyangam massage therapy'),
(5, 5, 2, CURRENT_DATE + INTERVAL '1 day', '14:00:00', 'Room 103', 'scheduled', 'Shirodhara stress relief session');

INSERT INTO lab_reports (patient_id, report_type, status, report_date) VALUES
(1, 'Blood Test', 'pending_verification', CURRENT_DATE),
(2, 'X-Ray', 'pending_verification', CURRENT_DATE),
(3, 'Urine Analysis', 'pending_verification', CURRENT_DATE);

INSERT INTO payments (patient_id, invoice_number, amount, category, status, payment_date) VALUES
(1, '#0921', 850.00, 'Panchakarma', 'paid', CURRENT_DATE),
(2, '#0920', 1240.00, 'Panchakarma', 'pending', CURRENT_DATE),
(3, '#0919', 450.00, 'Products', 'paid', CURRENT_DATE),
(1, '#0918', 320.00, 'Consulting', 'paid', CURRENT_DATE - INTERVAL '1 day'),
(2, '#0917', 1100.00, 'Panchakarma', 'pending', CURRENT_DATE - INTERVAL '1 day'),
(3, '#0916', 560.00, 'Products', 'paid', CURRENT_DATE - INTERVAL '2 days'),
(1, '#0915', 740.00, 'Panchakarma', 'paid', CURRENT_DATE - INTERVAL '2 days'),
(2, '#0914', 980.00, 'Panchakarma', 'pending', CURRENT_DATE - INTERVAL '3 days'),
(3, '#0913', 410.00, 'Consulting', 'paid', CURRENT_DATE - INTERVAL '3 days'),
(1, '#0912', 1500.00, 'Panchakarma', 'paid', CURRENT_DATE - INTERVAL '4 days'),
(4, '#0911', 650.00, 'Products', 'paid', CURRENT_DATE - INTERVAL '5 days'),
(5, '#0910', 890.00, 'Panchakarma', 'paid', CURRENT_DATE - INTERVAL '5 days');
