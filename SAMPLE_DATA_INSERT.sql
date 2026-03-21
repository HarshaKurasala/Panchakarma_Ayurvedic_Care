-- ========================================
-- PANCHAKARMA MANAGEMENT SYSTEM
-- SAMPLE DATA FOR PGADMIN
-- ========================================
-- Password for all users: password123
-- bcrypt hash: $2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW

-- ========================================
-- 1. INSERT USERS (4 Roles - Admin, Doctor, Staff, Patient)
-- ========================================

INSERT INTO users (name, email, password, role, is_active) VALUES
-- Admin Users
('Admin User', 'admin@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'admin', TRUE),
('System Administrator', 'admin2@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'admin', TRUE),

-- Doctor Users
('Dr. Rajesh Varma', 'doctor@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'doctor', TRUE),
('Dr. Priya Nair', 'doctor2@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'doctor', TRUE),
('Dr. Amit Shah', 'doctor3@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'doctor', TRUE),
('Dr. Sneha Rao', 'doctor4@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'doctor', TRUE),

-- Staff Users
('Jane Staff', 'staff@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'staff', TRUE),
('John Reception', 'staff2@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'staff', TRUE),

-- Therapist Users
('Therapist Dev', 'therapist@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'therapist', TRUE),
('Therapist Maya', 'therapist2@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'therapist', TRUE),

-- Patient Users
('John Patient', 'patient@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'patient', TRUE),
('Rajesh Kumar', 'patient2@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'patient', TRUE),
('Sunita Patel', 'patient3@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'patient', TRUE),
('Anjali Singh', 'patient4@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'patient', TRUE),
('Vikram Sharma', 'patient5@example.com', '$2b$10$IQV8kHFZsKT8UtchfQDmhurYaBp0fj5TpCg8W6r24T3pq8xUhZ6hW', 'patient', TRUE);

-- ========================================
-- 2. INSERT PATIENTS
-- ========================================

INSERT INTO patients (user_id, name, email, phone, age, gender, dosha, medical_history, condition, status, treatment_start_date, treatment_duration) VALUES
(11, 'John Patient', 'patient@example.com', '9876543210', 45, 'Male', 'Vata-Pitta', 'Chronic lower back pain, Insomnia', 'Chronic Sinusitis', 'active', CURRENT_DATE - INTERVAL '5 days', 7),
(12, 'Rajesh Kumar', 'patient2@example.com', '9876543211', 42, 'Male', 'Kapha-Vata', 'Weight management, Joint pain', 'Arthritis', 'active', CURRENT_DATE - INTERVAL '2 days', 14),
(13, 'Sunita Patel', 'patient3@example.com', '9876543212', 38, 'Female', 'Pitta-Kapha', 'Seasonal allergies, Migraine', 'Migraine Issues', 'active', CURRENT_DATE - INTERVAL '1 day', 10),
(14, 'Anjali Singh', 'patient4@example.com', '9876543213', 35, 'Female', 'Kapha', 'Thyroid management', 'Thyroid Disorder', 'active', CURRENT_DATE, 21),
(15, 'Vikram Sharma', 'patient5@example.com', '9876543214', 50, 'Male', 'Vata', 'Diabetes, Hypertension', 'Obesity Management', 'active', CURRENT_DATE - INTERVAL '7 days', 28);

-- ========================================
-- 3. INSERT THERAPIES
-- ========================================

INSERT INTO therapies (therapy_name, description, panchakarma_type, duration, status) VALUES
('Vamana Karma', 'Therapeutic vomiting procedure to expel toxins', 'Vamana', 60, 'active'),
('Virechana', 'Purgation therapy for pittic disorders', 'Virechana', 60, 'active'),
('Basti Therapy', 'Medicated enema therapy for vata disorders', 'Basti', 45, 'active'),
('Nasya', 'Nasal administration of medicated oils', 'Nasya', 30, 'active'),
('Rakta Mokshan', 'Blood letting therapy for blood purification', 'Rakta Mokshan', 45, 'active'),
('Abhyangam', 'Full body oil massage therapy', 'Snehanam', 60, 'active'),
('Shirodhara', 'Oil pouring therapy for stress relief and mental health', 'Shirodhara', 45, 'active'),
('Swedanam', 'Therapeutic sweating procedure', 'Swedanam', 45, 'active'),
('Consultation', 'Initial consultation and assessment', 'Assessment', 30, 'active'),
('Diet Consultation', 'Customized diet plan consultation', 'Consultation', 45, 'active');

-- ========================================
-- 4. INSERT DOCTORS
-- ========================================

INSERT INTO doctors (name, email, phone, specialization, experience_years, status) VALUES
('Dr. Rajesh Varma', 'doctor@example.com', '9876501234', 'Panchakarma Specialist', 15, 'active'),
('Dr. Priya Nair', 'doctor2@example.com', '9876501235', 'Ayurvedic Physician', 12, 'active'),
('Dr. Amit Shah', 'doctor3@example.com', '9876501236', 'Vata Dosha Expert', 10, 'active'),
('Dr. Sneha Rao', 'doctor4@example.com', '9876501237', 'Wellness Consultant', 8, 'active');

-- ========================================
-- 5. INSERT THERAPY PLANS
-- ========================================

INSERT INTO therapy_plans (patient_id, doctor_id, therapy_type, start_date, end_date, duration_days, status, notes) VALUES
(1, 1, 'Panchakarma - 7 Day Intensive Program', CURRENT_DATE - INTERVAL '5 days', CURRENT_DATE + INTERVAL '2 days', 7, 'active', 'Full Panchakarma protocol for chronic sinusitis and pain management'),
(2, 2, 'Panchakarma - 14 Day Extended Program', CURRENT_DATE - INTERVAL '2 days', CURRENT_DATE + INTERVAL '12 days', 14, 'active', 'Extended therapy for arthritis management with dietary modifications'),
(3, 3, 'Migraine Relief Program', CURRENT_DATE - INTERVAL '1 day', CURRENT_DATE + INTERVAL '9 days', 10, 'active', 'Special focus on stress relief and migraine prevention'),
(4, 4, 'Wellness and Rejuvenation', CURRENT_DATE, CURRENT_DATE + INTERVAL '20 days', 21, 'active', 'Comprehensive wellness program with thyroid management'),
(5, 1, 'Obesity Management Program', CURRENT_DATE - INTERVAL '7 days', CURRENT_DATE + INTERVAL '21 days', 28, 'active', 'Intensive weight management and metabolic balance program');

-- ========================================
-- 6. INSERT APPOINTMENTS
-- ========================================

INSERT INTO appointments (patient_id, therapy_id, doctor_id, appointment_date, appointment_time, room_number, status, notes) VALUES
-- Today's appointments
(1, 9, 1, CURRENT_DATE, '08:30:00', 'Room 102', 'completed', 'Initial consultation completed successfully'),
(2, 9, 2, CURRENT_DATE, '10:00:00', 'Cabin A', 'in_progress', 'Follow-up consultation in progress'),
(3, 6, 3, CURRENT_DATE, '14:00:00', 'Room 105', 'scheduled', 'Abhyangam massage session'),
(4, 7, 4, CURRENT_DATE, '15:30:00', 'Room 103', 'scheduled', 'Shirodhara session for migraine relief'),

-- Tomorrow's appointments
(1, 1, 1, CURRENT_DATE + INTERVAL '1 day', '09:00:00', 'Room 102', 'pending', 'Vamana Karma therapy session'),
(2, 4, 2, CURRENT_DATE + INTERVAL '1 day', '11:00:00', 'Cabin A', 'pending', 'Nasya therapy planned'),
(5, 8, 1, CURRENT_DATE + INTERVAL '1 day', '13:00:00', 'Room 105', 'pending', 'Swedanam therapy session'),

-- Future appointments
(1, 3, 1, CURRENT_DATE + INTERVAL '2 days', '09:30:00', 'Room 104', 'pending', 'Basti therapy - second session'),
(3, 2, 3, CURRENT_DATE + INTERVAL '3 days', '10:00:00', 'Room 102', 'pending', 'Diet and lifestyle consultation'),
(4, 10, 4, CURRENT_DATE + INTERVAL '5 days', '14:00:00', 'Cabin B', 'pending', 'Monthly follow-up consultation');

-- ========================================
-- 7. INSERT THERAPY SESSIONS
-- ========================================

INSERT INTO therapy_sessions (patient_id, therapy_plan_id, doctor_id, session_date, session_time, therapy_type, panchakarma_stage, session_number, status, duration_minutes, room_number, notes) VALUES
-- Patient 1 sessions
(1, 1, 1, CURRENT_DATE - INTERVAL '5 days', '08:30', 'Consultation', 'Assessment', 1, 'completed', 30, 'Room 102', 'Initial assessment and dosha analysis'),
(1, 1, 1, CURRENT_DATE - INTERVAL '4 days', '09:00', 'Abhyangam', 'Purva Karma', 2, 'completed', 60, 'Room 102', 'Oil massage - first session, good response'),
(1, 1, 1, CURRENT_DATE - INTERVAL '3 days', '09:00', 'Swedan', 'Purva Karma', 3, 'completed', 45, 'Room 102', 'Therapeutic sweating session'),
(1, 1, 1, CURRENT_DATE - INTERVAL '2 days', '08:30', 'Snehana', 'Purva Karma', 4, 'completed', 60, 'Room 102', 'Oil application session'),
(1, 1, 1, CURRENT_DATE - INTERVAL '1 day', '08:30', 'Vamana', 'Pradhana Karma', 5, 'completed', 60, 'Room 102', 'Main procedure - therapeutic vomiting completed'),
(1, 1, 1, CURRENT_DATE, '09:00', 'Swedanam', 'Pradhana Karma', 6, 'in_progress', 45, 'Room 102', 'Therapeutic sweating - post-procedure'),

-- Patient 2 sessions
(2, 2, 2, CURRENT_DATE - INTERVAL '2 days', '10:00', 'Consultation', 'Assessment', 1, 'completed', 30, 'Cabin A', 'Initial assessment for arthritis'),
(2, 2, 2, CURRENT_DATE - INTERVAL '1 day', '10:00', 'Abhyangam', 'Purva Karma', 2, 'completed', 60, 'Cabin A', 'Deep tissue massage therapy'),
(2, 2, 2, CURRENT_DATE, '10:30', 'Basti', 'Pradhana Karma', 3, 'in_progress', 45, 'Cabin A', 'Medicated enema therapy'),

-- Patient 3 sessions
(3, 3, 3, CURRENT_DATE - INTERVAL '1 day', '14:00', 'Consultation', 'Assessment', 1, 'completed', 30, 'Room 105', 'Initial consultation for migraine'),
(3, 3, 3, CURRENT_DATE, '14:30', 'Shirodhara', 'Purva Karma', 2, 'scheduled', 45, 'Room 105', 'Oil pouring therapy for stress relief'),

-- Patient 4 sessions
(4, 4, 4, CURRENT_DATE, '15:30', 'Shirodhara', 'Purva Karma', 1, 'scheduled', 45, 'Room 103', 'Initial shirodhara session'),

-- Patient 5 sessions
(5, 5, 1, CURRENT_DATE - INTERVAL '7 days', '08:00', 'Consultation', 'Assessment', 1, 'completed', 30, 'Room 101', 'Detailed assessment for obesity management'),
(5, 5, 1, CURRENT_DATE - INTERVAL '6 days', '08:30', 'Abhyangam', 'Purva Karma', 2, 'completed', 60, 'Room 101', 'Oil massage - lymphatic drainage focus'),
(5, 5, 1, CURRENT_DATE - INTERVAL '5 days', '09:00', 'Swedanam', 'Purva Karma', 3, 'completed', 45, 'Room 101', 'Therapeutic sweating');

-- ========================================
-- 8. INSERT FEEDBACK
-- ========================================

INSERT INTO feedback (patient_id, therapy_session_id, rating, comments) VALUES
(1, 1, 5, 'Excellent initial consultation. Doctor was very attentive and explained everything clearly.'),
(1, 2, 5, 'Amazing massage therapy. Very soothing and professional. Felt much better.'),
(1, 3, 4, 'Good sweating session. Felt energized afterward.'),
(2, 7, 5, 'Outstanding service. The doctor and therapist team is excellent.'),
(2, 8, 4, 'Great massage experience. Very knowledgeable therapist.'),
(3, 10, 4, 'Good consultation. Doctor recommended good dietary changes.'),
(5, 13, 5, 'Comprehensive assessment. Very happy with the treatment plan.'),
(5, 14, 5, 'Excellent massage therapy. Great therapeutic value.');

-- ========================================
-- 9. INSERT NOTIFICATIONS
-- ========================================

INSERT INTO notifications (patient_id, type, title, message, related_entity_type, related_entity_id, is_read) VALUES
(1, 'appointment_reminder', 'Upcoming Appointment', 'Your therapy session is scheduled for tomorrow at 09:00 AM in Room 102', 'appointment', 5, false),
(2, 'appointment_reminder', 'Upcoming Session', 'Your next therapy session (Basti) is scheduled for today at 10:30 AM', 'appointment', 8, false),
(3, 'appointment_reminder', 'Shirodhara Session', 'Your Shirodhara therapy is scheduled for today at 14:30 in Room 105', 'appointment', 7, false),
(4, 'appointment_reminder', 'Today Session', 'Your Shirodhara session starts in 2 hours at 15:30 in Room 103', 'appointment', 4, false),
(1, 'therapy_session', 'Session Completed', 'Your Vamana Karma therapy has been completed successfully', 'therapy_session', 5, true),
(2, 'therapy_session', 'Session In Progress', 'Your Basti therapy session is currently in progress', 'therapy_session', 8, false),
(1, 'precautions', 'Pre-Therapy Instructions', 'Please follow the pre-therapy guidelines: avoid heavy meals 2 hours before', 'therapy_session', 6, false),
(3, 'general', 'Welcome to Treatment', 'Welcome to Panchakarma Management System. Your treatment journey begins today!', 'patient', 3, true),
(4, 'general', 'Diet Recommendations', 'Check your email for personalized diet recommendations for your wellness plan', 'patient', 4, false),
(5, 'appointment_reminder', 'Next Session Reminder', 'Your next Abhyangam session is in 3 days at 08:30 AM', 'appointment', 6, false);

-- ========================================
-- 10. INSERT PRECAUTIONS
-- ========================================

INSERT INTO precautions (therapy_session_id, before_instructions, after_instructions, precautions) VALUES
(1, 'Avoid heavy food. Do not eat 2 hours before therapy. Wear comfortable clothing. Arrive 15 minutes early.', 'Rest for 1 hour after consultation. Stay hydrated. Avoid strenuous activities.', 'Take notes of all instructions. Ask if anything is unclear.'),
(2, 'Light breakfast recommended. Avoid oil-based foods 1 hour before. Wear loose, clean clothing.', 'Rest for 2 hours after massage. Avoid cold water bathing. Light meals preferred for 6 hours.', 'Do not exercise. Avoid loud noise. Stay in warm environment.'),
(3, 'Light diet. Avoid dairy. Wear comfortable cotton clothing.', 'Rest completely for 1 hour. Drink warm water. Avoid bathing for 2 hours.', 'Avoid cold exposure. Do not go out in AC. Stay warm.'),
(4, 'Empty stomach or light breakfast. Comfortable clothing.', 'Rest for 2 hours minimum. Warm water consumption. No cold showers.', 'No sexual activity for 48 hours. Avoid heavy work.'),
(5, 'Very light breakfast only. No spicy food. Comfortable loose clothing.', 'Rest for 4 hours post-procedure. Warm water and light meals only. Complete rest advised.', 'Complete bed rest for 24 hours. No exercise for 3 days. Follow strict diet.'),
(6, 'Light diet. Comfortable clothing.', 'Rest for 2 hours. Drink warm water. Avoid cold exposure.', 'Stay warm. Avoid AC. No strenuous activities for 24 hours.'),
(10, 'Empty stomach. Comfortable traditional clothing. Arrive early for preparation.', 'Rest for 3 hours. Remain in warm room. Drink warm medicated oils as advised.', 'No bathing for 4 hours. Complete rest. Follow diet strictly for 7 days.'),
(11, 'Light breakfast. Comfortable clothing. Relaxed mind state.', 'Rest for 2 hours. Warm herbal tea. Light meals.', 'Avoid strenuous work. Relaxation recommended. Meditation beneficial.'),
(13, 'Light breakfast. Fasting not required but light diet preferred.', 'Rest for 1 hour. Regular water consumption. Normal activities can resume.', 'Gentle activities only. Avoid heavy lifting for 24 hours.');

-- ========================================
-- 11. INSERT LAB REPORTS
-- ========================================

INSERT INTO lab_reports (patient_id, report_type, status, report_date) VALUES
(1, 'Blood Test Panel', 'completed', CURRENT_DATE - INTERVAL '3 days'),
(1, 'Liver Function Test', 'completed', CURRENT_DATE - INTERVAL '2 days'),
(2, 'Joint Mobility Assessment', 'completed', CURRENT_DATE - INTERVAL '1 day'),
(2, 'Blood Sugar Test', 'completed', CURRENT_DATE),
(3, 'CT Scan Report', 'pending_verification', CURRENT_DATE),
(4, 'Thyroid Profile', 'completed', CURRENT_DATE - INTERVAL '5 days'),
(5, 'Comprehensive Metabolic Panel', 'pending_verification', CURRENT_DATE),
(5, 'Body Composition Analysis', 'completed', CURRENT_DATE - INTERVAL '2 days');

-- ========================================
-- 12. INSERT PAYMENTS
-- ========================================

INSERT INTO payments (patient_id, invoice_number, amount, category, status, payment_date) VALUES
-- Paid invoices
(1, 'INV-0921', 850.00, 'Panchakarma', 'paid', CURRENT_DATE - INTERVAL '5 days'),
(1, 'INV-0922', 250.00, 'Consultation', 'paid', CURRENT_DATE - INTERVAL '2 days'),
(2, 'INV-0923', 1500.00, 'Panchakarma', 'paid', CURRENT_DATE - INTERVAL '3 days'),
(3, 'INV-0924', 600.00, 'Therapy Sessions', 'paid', CURRENT_DATE - INTERVAL '1 day'),
(5, 'INV-0925', 2500.00, 'Panchakarma Extended', 'paid', CURRENT_DATE - INTERVAL '7 days'),

-- Pending invoices
(2, 'INV-0926', 1200.00, 'Panchakarma', 'pending', CURRENT_DATE),
(4, 'INV-0927', 1800.00, 'Wellness Program', 'pending', CURRENT_DATE),
(1, 'INV-0928', 350.00, 'Follow-up Sessions', 'pending', CURRENT_DATE),
(3, 'INV-0929', 950.00, 'Extended Program', 'pending', CURRENT_DATE + INTERVAL '1 day'),
(5, 'INV-0930', 1100.00, 'Monthly Maintenance', 'pending', CURRENT_DATE + INTERVAL '5 days');

-- ========================================
-- VERIFICATION QUERIES
-- ========================================
-- Run these to verify data was inserted correctly:

-- Verify Users Count
-- SELECT COUNT(*) as total_users, role FROM users GROUP BY role;

-- Verify Patients
-- SELECT id, name, email, condition, status FROM patients;

-- Verify Appointments
-- SELECT a.id, p.name as patient, a.appointment_date, a.appointment_time, a.status FROM appointments a JOIN patients p ON a.patient_id = p.id;

-- Verify Therapy Sessions
-- SELECT ts.id, p.name as patient, tp.therapy_type, ts.session_date, ts.status FROM therapy_sessions ts JOIN patients p ON ts.patient_id = p.id JOIN therapy_plans tp ON ts.therapy_plan_id = tp.id;

-- Verify Payments
-- SELECT p.id, pa.name as patient, p.amount, p.category, p.status FROM payments p JOIN patients pa ON p.patient_id = pa.id ORDER BY p.id DESC;
