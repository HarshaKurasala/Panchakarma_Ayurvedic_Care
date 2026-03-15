"use client";

import { useEffect, useState } from "react";

interface Stats {
  todays_appointments: number;
  active_patients: number;
  pending_therapies: number;
  lab_verifications: number;
}

interface Schedule {
  id: number;
  appointment_time: string;
  patient_name: string;
  room_number: string;
  therapy_name: string;
  status: string;
  notes: string;
}

interface Patient {
  id: number;
  name: string;
  condition: string;
  status: string;
  treatment_duration: number;
  days_completed: number;
}

export default function DoctorDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => setStats({ todays_appointments: 14, active_patients: 42, pending_therapies: 8, lab_verifications: 3 }));

    fetch("http://localhost:5000/api/dashboard/schedule")
      .then((res) => res.json())
      .then(setSchedule)
      .catch(() => setSchedule([
        {
          id: 1,
          appointment_time: "08:30 AM",
          patient_name: "Rajesh Khanna",
          room_number: "Room 102",
          therapy_name: "Vamana Karma",
          status: "completed",
          notes: "Panchakarma Department • Procedure successfully administered"
        },
        {
          id: 2,
          appointment_time: "10:00 AM",
          patient_name: "Meera Singh",
          room_number: "Cabin A",
          therapy_name: "Consultation",
          status: "in_progress",
          notes: "New patient assessment. Follow-up for rheumatoid arthritis."
        },
        {
          id: 3,
          appointment_time: "11:30 AM",
          patient_name: "Amit Shah",
          room_number: "Room 105",
          therapy_name: "Basti Therapy",
          status: "scheduled",
          notes: "Basti therapy session"
        },
        {
          id: 4,
          appointment_time: "02:00 PM",
          patient_name: "Priya Sharma",
          room_number: "Cabin B",
          therapy_name: "Follow-up",
          status: "scheduled",
          notes: "Follow-up consultation"
        }
      ]));

    fetch("http://localhost:5000/api/dashboard/active-patients")
      .then((res) => res.json())
      .then(setPatients)
      .catch(() => setPatients([
        {
          id: 1,
          name: "Rajesh Khanna",
          condition: "Chronic Sinusitis",
          status: "Recovering",
          treatment_duration: 7,
          days_completed: 4
        },
        {
          id: 2,
          name: "Meera Singh",
          condition: "Arthritis",
          status: "Intensive",
          treatment_duration: 14,
          days_completed: 1
        },
        {
          id: 3,
          name: "Amit Shah",
          condition: "Digestive Reset",
          status: "Final Stage",
          treatment_duration: 12,
          days_completed: 9
        }
      ]));
  }, []);

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
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Analytics</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-white/5 space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-white/5">
            <img alt="Dr. Ayush Sharma" className="size-10 rounded-full object-cover border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3vX78aJ5gEZL9k4oRHLVEGbnEVOdLV7QnGsZTVIjanIGJJ2CARtjxu5RL-hDQLPSoemlBbjKNFrWRevvSVzb72mKxN9L0QvUYW6sEQU7HCOlK3YNGCZXCyaTr0AWWw3NGE0dmVwqsCkmWkp22hMQEUGWLdkELKtZrIliTL6unH38OWGdaypdvU965IfpFo3KDUG2KTB8ab_Zs0UcjpEYepnfuRWdIQE8hVdkXbRmiYokTXNJVYpgXLueNK25HkzNMbvV1bAH6tFEm" />
            <div className="flex flex-col overflow-hidden">
              <p className="text-xs font-bold truncate">Dr. Ayush Sharma</p>
              <p className="text-[10px] text-slate-500 font-medium">Sr. BAMS Consultant</p>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md shadow-primary/10">
            <span className="material-symbols-outlined text-lg">add</span>
            New Consultation
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search patients, records, or medicines..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors relative group" title="Voice Dictation">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-background-dark"></span>
            </button>
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #066046, #10b981)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Dr. Ayush Sharma</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark/95">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Clinical Overview</h1>
              <p className="text-slate-500 text-sm mt-1">Good morning, Dr. Sharma. Your clinic is running at 85% capacity today.</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Today&apos;s Appts</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.todays_appointments || 0}</h3>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span> 12%
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-blue-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">person_pin_circle</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Patients</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.active_patients || 0}</h3>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded">Current</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-orange-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pending Therapy</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.pending_therapies || 0}</h3>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded-lg">High Priority</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-purple-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">lab_research</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Lab Verifications</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.lab_verifications || 0}</h3>
                <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-lg">Reports</span>
              </div>
            </div>
          </div>

          {/* Schedule and Patients */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Daily Schedule */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-xl">Daily Schedule</h3>
                    <p className="text-xs text-slate-500">4 sessions completed, {schedule.length} remaining</p>
                  </div>
                  <button className="flex items-center gap-1 text-primary text-sm font-bold bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-lg">calendar_view_week</span>
                    Full Calendar
                  </button>
                </div>
                <div className="space-y-0 relative timeline-line">
                  {schedule.map((item, index) => (
                    <div key={item.id} className="relative flex gap-6 pb-8 last:pb-0">
                      <div className={`relative z-10 size-10 flex items-center justify-center rounded-full border-4 border-white dark:border-background-dark shrink-0 ${
                        item.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600' :
                        item.status === 'in_progress' ? 'bg-primary text-white shadow-lg shadow-primary/20 animate-pulse' :
                        'bg-slate-100 dark:bg-white/5 text-slate-400'
                      }`}>
                        <span className="material-symbols-outlined text-lg">
                          {item.status === 'completed' ? 'check_circle' : item.status === 'in_progress' ? 'play_arrow' : 'schedule'}
                        </span>
                      </div>
                      <div className={`flex-1 pt-1.5 ${
                        item.status === 'in_progress' ? 'bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl border border-primary/20' : ''
                      }`}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold ${
                              item.status === 'in_progress' ? 'text-primary' : 'text-slate-400'
                            }`}>{item.appointment_time}</span>
                            <h4 className="font-bold text-slate-900 dark:text-white">{item.patient_name}</h4>
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                              item.status === 'in_progress' ? 'bg-primary/10 text-primary' : 
                              item.status === 'completed' ? 'bg-slate-100 dark:bg-white/5 text-slate-500' :
                              'bg-slate-50 dark:bg-white/5 text-slate-400'
                            }`}>{item.room_number}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${
                              item.status === 'completed' ? 'bg-primary/10 text-primary border border-primary/20' :
                              item.status === 'in_progress' ? 'bg-blue-500 text-white shadow-sm' :
                              item.therapy_name === 'Basti Therapy' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' :
                              'bg-slate-100 dark:bg-white/5 text-slate-500'
                            }`}>{item.therapy_name}</span>
                            {item.status === 'in_progress' && <span className="flex size-2 bg-emerald-500 rounded-full"></span>}
                          </div>
                        </div>
                        <p className={`text-xs mt-${item.status === 'in_progress' ? '2' : '1'} ${
                          item.status === 'in_progress' ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500'
                        }`}>{item.therapy_name} • {item.notes}</p>
                        {item.status === 'in_progress' && (
                          <div className="flex gap-2 mt-4">
                            <button className="bg-white dark:bg-white/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5">View History</button>
                            <button className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">End Session</button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Active Patients & Task List */}
            <div className="space-y-8">
              {/* Active Patients */}
              <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <h3 className="font-bold text-lg">Active Patients</h3>
                  <button className="text-primary text-xs font-bold hover:underline">See All</button>
                </div>
                <div className="p-4 space-y-4">
                  {patients.map((patient) => {
                    const progress = (patient.days_completed / patient.treatment_duration) * 100;
                    return (
                      <div key={patient.id} className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-white/10">
                        <div className="relative">
                          <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="absolute -bottom-1 -right-1 size-3.5 bg-emerald-500 border-2 border-white dark:border-background-dark rounded-full"></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{patient.name}</p>
                            <span className="text-[10px] font-medium text-slate-400">Day {patient.days_completed}/{patient.treatment_duration}</span>
                          </div>
                          <p className="text-xs text-slate-500 truncate mt-0.5">{patient.condition} • {patient.status}</p>
                          <div className="w-full bg-slate-100 dark:bg-white/10 h-1 rounded-full mt-2">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Task List */}
              <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Task List</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Daily Operations</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="size-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">mic</span>
                    </button>
                    <button className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <label className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="pt-1">
                      <input defaultChecked className="rounded border-slate-300 dark:border-white/20 text-primary focus:ring-primary/20 size-5 cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 dark:text-slate-500 line-through">Heat Dashmool oil for Amit Shah</span>
                        <span className="px-1.5 py-0.5 bg-red-100 dark:bg-red-500/10 text-[8px] font-black text-red-600 rounded uppercase">High</span>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="pt-1">
                      <input className="rounded border-slate-300 dark:border-white/20 text-primary focus:ring-primary/20 size-5 cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Update diet chart for Meera</span>
                        <span className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-500/10 text-[8px] font-black text-amber-600 rounded uppercase">Medium</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">Review lab results before updating</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="pt-1">
                      <input className="rounded border-slate-300 dark:border-white/20 text-primary focus:ring-primary/20 size-5 cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Check Triphala Guggulu stock</span>
                        <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/10 text-[8px] font-black text-slate-400 rounded uppercase">Low</span>
                      </div>
                    </div>
                  </label>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 text-xs font-bold text-slate-500 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">note_add</span>
                        Quick Note
                      </button>
                      <button className="size-11 flex items-center justify-center text-primary bg-primary/10 rounded-xl hover:bg-primary/20 transition-all shadow-sm" title="Quick Voice Memo">
                        <span className="material-symbols-outlined">mic</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
