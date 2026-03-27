'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';

interface PatientData {
  id: string;
  name: string;
  age: number;
  location: string;
  gender: string;
  patientId: string;
  prakriti: string;
  status: string;
  phone: string;
  email: string;
  occupation: string;
  medicalHistory: Array<{
    condition: string;
    details: string;
  }>;
  dosha: {
    vata: number;
    pitta: number;
    kapha: number;
  };
  vitals: {
    bloodPressure: string;
    bmi: number;
    glucose: number;
    lastUpdate: string;
  };
}

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  status: string;
  icon: string;
}

export default function PatientProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [patient, setPatient] = useState<PatientData>({
    id: id,
    name: 'Arjun Mehta',
    age: 34,
    location: 'Mumbai, India',
    gender: 'Male',
    patientId: 'AM-8842',
    prakriti: 'Kapha-Pitta',
    status: 'Active Treatment',
    phone: '+91 98765 43210',
    email: 'arjun.mehta@email.com',
    occupation: 'Software Architect',
    medicalHistory: [
      {
        condition: 'Chronic Gastritis',
        details: 'Diagnosed Oct 2022 • High Acid Reversion',
      },
      {
        condition: 'Seasonal Allergies',
        details: 'Pollen & Dust • Moderate severity',
      },
    ],
    dosha: {
      vata: 20,
      pitta: 30,
      kapha: 50,
    },
    vitals: {
      bloodPressure: '118/74',
      bmi: 24.1,
      glucose: 92,
      lastUpdate: '2 days ago',
    },
  });

  const timeline: TimelineItem[] = [
    {
      id: 1,
      date: 'Mar 12, 2024',
      title: 'Amalaki Therapy Initiation',
      description: 'Prescribed for managing gastric acidity. Dosage: 500mg twice daily after meals.',
      status: 'Completed',
      icon: 'pill',
    },
    {
      id: 2,
      date: 'Feb 28, 2024',
      title: 'Panchakarma Consultation',
      description: 'Virechana therapy recommended for Pitta pacification in next quarter.',
      status: 'Observation',
      icon: 'calendar_month',
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">spa</span>
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Panchakarma</h1>
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Specialists</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link href="/doctor/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-not-allowed opacity-60" title="Coming soon">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </button>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold cursor-not-allowed">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </button>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-not-allowed opacity-60" title="Coming soon">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </button>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-not-allowed opacity-60" title="Coming soon">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </button>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-not-allowed opacity-60" title="Coming soon">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Analytics</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top App Bar */}
        <header className="fixed top-0 right-0 left-64 z-30 bg-white/80 backdrop-blur-xl px-8 py-4 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-primary/10">
              <img alt="Patient Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARyHNfXb9PwM_vkRQXPNhcoHAJKJPpJ7sZjQZOT59Tk5W9IMLi5GiGwhiV_oatQLItu8zOyii8sbqwypfhHLdZiVIJ8QRXdtHhAK78hnMvsipBnEvjG_Xgqmj_mDuZGp0BfyT8hPXp65rAhtNUZslKHcenb1Cq9aE0K9nrcIZDaMRYL9BEfduJLtmUEWPc89fUcTUTWf6qEGQ5aFAprsYud6TQ6j2qirUekZox8z1ewuXnIckSAkY1uWc2-oJPi9QDy6QK1luq0EcE" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-manrope text-slate-900 tracking-tight">{patient.name}</h2>
              <p className="text-xs text-slate-600 font-medium">Patient ID: #{patient.patientId}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-primary border border-primary/10 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">edit</span>
              Edit Profile
            </button>
            <button className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-md hover:opacity-95 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">medical_services</span>
              Quick Prescription
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        {/* Canvas */}
        <div className="pt-28 pb-12 px-8 space-y-8 flex-1 overflow-y-auto bg-slate-50">
          {/* Bento Overview Grid */}
          <section className="grid grid-cols-12 gap-6">
            {/* Patient Info Card */}
            <div className="col-span-12 lg:col-span-8 bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start border border-slate-100">
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle className="text-slate-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                  <circle className="text-emerald-400" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold font-manrope text-primary">75%</span>
                  <span className="text-[10px] font-bold text-slate-600/40">VITALITY</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-600/40 uppercase tracking-wider">Age / Gender</p>
                  <p className="text-lg font-semibold font-manrope text-slate-900">{patient.age} / {patient.gender}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-600/40 uppercase tracking-wider">Blood Group</p>
                  <p className="text-lg font-semibold font-manrope text-slate-900">O Positive</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-600/40 uppercase tracking-wider">Dosha Type</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-bold">Pitta</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-bold">Vata</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-600/40 uppercase tracking-wider">Last Visit</p>
                  <p className="text-lg font-semibold font-manrope text-slate-900">12 Oct 2023</p>
                </div>
                <div className="col-span-full pt-4 mt-4 border-t border-slate-100 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-medium text-slate-700/70">Sleep Quality: High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-xs font-medium text-slate-700/70">Stress Level: Moderate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    <span className="text-xs font-medium text-slate-700/70">Digestion: Regular</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Plan Card */}
            <div className="col-span-12 lg:col-span-4 bg-primary text-white p-8 rounded-3xl relative overflow-hidden shadow-lg shadow-primary/20">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <h3 className="text-[11px] font-bold text-emerald-100 uppercase tracking-[0.2em] mb-4">Active Protocol</h3>
              <div className="space-y-2 mb-8">
                <h4 className="text-2xl font-manrope font-extrabold leading-tight">Panchakarma Detox</h4>
                <p className="text-emerald-100/80 text-sm">Targeted Liver & Gut Rejuvenation</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold text-emerald-100/60 uppercase">Day 14 of 21</p>
                  <div className="mt-2 h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-300 w-[66%]"></div>
                  </div>
                </div>
                <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-50 transition-colors">
                  View Plan
                </button>
              </div>
            </div>
          </section>

          {/* Secondary Row: Appointments & Timeline */}
          <section className="grid grid-cols-12 gap-8">
            {/* Left Column: Appointment History & Feedback */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              {/* Appointment History */}
              <div className="bg-slate-100 p-1 rounded-3xl">
                <div className="bg-white p-8 rounded-[1.8rem]">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold font-manrope text-slate-900">Consultation History</h3>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                      Download All <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {/* Row 1 */}
                    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">event_available</span>
                        </div>
                        <div>
                          <p className="font-manrope font-bold text-slate-900">Quarterly Wellness Check</p>
                          <p className="text-xs text-slate-600 font-medium">Oct 12, 2023 • 10:30 AM</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">Completed</span>
                        <span className="material-symbols-outlined text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">emergency</span>
                        </div>
                        <div>
                          <p className="font-manrope font-bold text-slate-900">Digestive Distress Follow-up</p>
                          <p className="text-xs text-slate-600 font-medium">Aug 05, 2023 • 02:15 PM</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">Completed</span>
                        <span className="material-symbols-outlined text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                      </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/30 group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                          <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                          <p className="font-manrope font-bold text-slate-900">Post-Detox Assessment</p>
                          <p className="text-xs text-slate-600 font-medium">Nov 02, 2023 • 11:00 AM</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">Upcoming</span>
                        <span className="material-symbols-outlined text-slate-300 opacity-100 transition-opacity">chevron_right</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback History */}
              <div className="bg-slate-100 p-8 rounded-3xl">
                <h3 className="text-xl font-bold font-manrope text-slate-900 mb-6">Patient Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                    <div className="flex items-center gap-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-900 italic font-medium">"The Panchakarma therapy is making a world of difference. My digestion feels lighter and more consistent."</p>
                    <p className="text-[10px] font-bold text-slate-600/40 uppercase">Session: Abhyanga Massage • Oct 10</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                    <div className="flex items-center gap-1 text-orange-500">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                      <span className="material-symbols-outlined text-sm">star</span>
                    </div>
                    <p className="text-sm text-slate-900 italic font-medium">"The oil temperature was perfect. Feeling very relaxed. Staff was very attentive."</p>
                    <p className="text-[10px] font-bold text-slate-600/40 uppercase">Session: Shirodhara • Oct 08</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold font-manrope text-slate-900">Treatment Timeline</h3>
                  <span className="p-2 bg-slate-50 rounded-full text-primary">
                    <span className="material-symbols-outlined">history</span>
                  </span>
                </div>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-100 before:via-emerald-50 before:to-transparent">
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-start gap-8">
                    <div className="absolute left-0 mt-1.5 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10 shadow-sm">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="ml-14 bg-slate-50/50 p-5 rounded-2xl flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold font-manrope text-slate-900">Abhyanga (Herbal Oil Massage)</h4>
                        <span className="text-[10px] font-bold text-slate-600/40">TODAY</span>
                      </div>
                      <p className="text-xs text-slate-700/70 mb-3 leading-relaxed">Therapist Notes: Focused on lower back and joints. Used Mahanarayan oil as prescribed. Patient reported mild stiffness initially.</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img alt="Therapist" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRupgNgZ10Uu2-xvKXeh9bZ9jPH_P1dRF_38gOW2CgaaBJStwV2bJqc1taGjdbNLdNy_Gh2EVpkug8FsQPTBlELMxRwmplDoBCipet-NsqGWJ2Eu8_pJHqTV-HJyDpXQsfdEepmSxSGqk2Tdqgl1768uYp4q7lwXQGz0D6j6hfcV8aIqcvwZyu7ybJQCFtqQpSMb7fA8jixXmTqJ3l0wLmkYdH2YFGt9UmwtWowtj0JseYCixgCxsGvE3rcFr5TlUHKhwlIgno2YUx" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-900/60 uppercase">Therapist: Dr. Sarah S.</span>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Item 2 */}
                  <div className="relative flex items-start gap-8">
                    <div className="absolute left-0 mt-1.5 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10 shadow-sm">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="ml-14 bg-white p-5 rounded-2xl flex-1 border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold font-manrope text-slate-900">Shirodhara Session</h4>
                        <span className="text-[10px] font-bold text-slate-600/40">OCT 08</span>
                      </div>
                      <p className="text-xs text-slate-700/70 mb-3 leading-relaxed">45-minute rhythmic flow. Patient achieved deep state of relaxation. Recommended increased water intake post-session.</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img alt="Therapist" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6YwjVHiSLFsuT6vioXIEmt4wU4zPF3tkdj20LcG-LA240QCCNMiLVEqszEpla8haTQgB0AMjTBXX2pcJW0Jcf_kSmF0lePZgaLjJCJRzJW2iMD_7a8wIcp3-1QCE3XpNZRDGgiGgrfoiAO9BlI0vEDrc5a2Wjh1fDHODPVq95KJlfEW8HGdxWDSaqkk1ZJm44O6B89x_LhjDm24VM3CzxINGJxktTKl3HRj9KjQCOjtImMgmPshF-g47-m1xzAKpAjxGrsT78Yu4Y" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-900/60 uppercase">Therapist: Rahul K.</span>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className="relative flex items-start gap-8 opacity-60">
                    <div className="absolute left-0 mt-1.5 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-slate-300 text-sm">circle</span>
                    </div>
                    <div className="ml-14 p-5 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold font-manrope text-slate-900">Dietary Review</h4>
                        <span className="text-[10px] font-bold text-slate-600/40">OCT 05</span>
                      </div>
                      <p className="text-xs text-slate-700/70 leading-relaxed">Transitioned to Pitta-pacifying diet. Restricted spicy and acidic foods.</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 rounded-2xl bg-slate-100 text-primary font-bold text-sm hover:bg-slate-200 transition-colors">
                  View Full Session Archive
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
