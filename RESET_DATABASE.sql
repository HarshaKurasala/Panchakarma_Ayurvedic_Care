-- ========================================
-- PANCHAKARMA MANAGEMENT SYSTEM
-- RESET DATABASE - DELETE ALL DATA
-- ========================================
-- This script safely deletes all data from tables
-- in the correct order to respect foreign key constraints
-- Run this BEFORE inserting fresh sample data

-- Temporarily disable foreign key constraints
ALTER TABLE payments DISABLE TRIGGER ALL;
ALTER TABLE lab_reports DISABLE TRIGGER ALL;
ALTER TABLE precautions DISABLE TRIGGER ALL;
ALTER TABLE notifications DISABLE TRIGGER ALL;
ALTER TABLE feedback DISABLE TRIGGER ALL;
ALTER TABLE therapy_sessions DISABLE TRIGGER ALL;
ALTER TABLE appointments DISABLE TRIGGER ALL;
ALTER TABLE therapy_plans DISABLE TRIGGER ALL;
ALTER TABLE doctors DISABLE TRIGGER ALL;
ALTER TABLE therapies DISABLE TRIGGER ALL;
ALTER TABLE patients DISABLE TRIGGER ALL;
ALTER TABLE users DISABLE TRIGGER ALL;

-- Delete data from dependent tables first (reverse order of creation)
DELETE FROM payments;
DELETE FROM lab_reports;
DELETE FROM precautions;
DELETE FROM notifications;
DELETE FROM feedback;
DELETE FROM therapy_sessions;
DELETE FROM appointments;
DELETE FROM therapy_plans;
DELETE FROM doctors;
DELETE FROM therapies;
DELETE FROM patients;
DELETE FROM users;

-- Re-enable foreign key constraints
ALTER TABLE users ENABLE TRIGGER ALL;
ALTER TABLE patients ENABLE TRIGGER ALL;
ALTER TABLE therapies ENABLE TRIGGER ALL;
ALTER TABLE doctors ENABLE TRIGGER ALL;
ALTER TABLE therapy_plans ENABLE TRIGGER ALL;
ALTER TABLE appointments ENABLE TRIGGER ALL;
ALTER TABLE therapy_sessions ENABLE TRIGGER ALL;
ALTER TABLE feedback ENABLE TRIGGER ALL;
ALTER TABLE notifications ENABLE TRIGGER ALL;
ALTER TABLE precautions ENABLE TRIGGER ALL;
ALTER TABLE lab_reports ENABLE TRIGGER ALL;
ALTER TABLE payments ENABLE TRIGGER ALL;

-- Reset auto-increment sequences
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE patients_id_seq RESTART WITH 1;
ALTER SEQUENCE therapies_id_seq RESTART WITH 1;
ALTER SEQUENCE doctors_id_seq RESTART WITH 1;
ALTER SEQUENCE appointments_id_seq RESTART WITH 1;
ALTER SEQUENCE therapy_plans_id_seq RESTART WITH 1;
ALTER SEQUENCE therapy_sessions_id_seq RESTART WITH 1;
ALTER SEQUENCE feedback_id_seq RESTART WITH 1;
ALTER SEQUENCE notifications_id_seq RESTART WITH 1;
ALTER SEQUENCE precautions_id_seq RESTART WITH 1;
ALTER SEQUENCE lab_reports_id_seq RESTART WITH 1;
ALTER SEQUENCE payments_id_seq RESTART WITH 1;

-- Verification
SELECT 'Users' as table_name, COUNT(*) as record_count FROM users
UNION ALL
SELECT 'Patients', COUNT(*) FROM patients
UNION ALL
SELECT 'Therapies', COUNT(*) FROM therapies
UNION ALL
SELECT 'Doctors', COUNT(*) FROM doctors
UNION ALL
SELECT 'Appointments', COUNT(*) FROM appointments
UNION ALL
SELECT 'Payments', COUNT(*) FROM payments;
