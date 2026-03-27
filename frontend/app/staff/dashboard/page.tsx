"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  totalAppointmentsToday: number;
  activeTherapySessions: number;
  completedSessionsToday: number;
  pendingAlerts: number;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  scheduled_appointments: number;
  availabilityStatus: string;
  nextAvailableSlot: string;
}

interface Schedule {
  id: number;
  appointment_time: string;
  patient_name: string;
  room_number: string;
  therapy_name: string;
  status: string;
}

export default function StaffDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    // Mock data for fallback
    const mockStats: Stats = {
      totalAppointmentsToday: 12,
      activeTherapySessions: 8,
      completedSessionsToday: 5,
      pendingAlerts: 4,
    };

    const mockDoctors: Doctor[] = [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        specialization: 'Panchakarma Specialist',
        scheduled_appointments: 6,
        availabilityStatus: 'available',
        nextAvailableSlot: '2:30 PM',
      },
      {
        id: 2,
        name: 'Dr. Priya Sharma',
        specialization: 'Massage Therapy',
        scheduled_appointments: 5,
        availabilityStatus: 'busy',
        nextAvailableSlot: '3:45 PM',
      },
      {
        id: 3,
        name: 'Dr. Vikram Singh',
        specialization: 'Herbal Medicine',
        scheduled_appointments: 4,
        availabilityStatus: 'available',
        nextAvailableSlot: '1:00 PM',
      },
    ];

    const mockSchedule: Schedule[] = [
      {
        id: 1,
        appointment_time: "08:30 AM",
        patient_name: "Rahul Singh",
        room_number: "Room 102",
        therapy_name: "Panchakarma",
        status: "completed",
      },
      {
        id: 2,
        appointment_time: "10:00 AM",
        patient_name: "Priya Verma",
        room_number: "Cabin A",
        therapy_name: "Consultation",
        status: "in_progress",
      },
      {
        id: 3,
        appointment_time: "11:30 AM",
        patient_name: "Amit Kumar",
        room_number: "Room 105",
        therapy_name: "Massage Therapy",
        status: "scheduled",
      },
      {
        id: 4,
        appointment_time: "02:00 PM",
        patient_name: "Sara Patel",
        room_number: "Cabin B",
        therapy_name: "Follow-up",
        status: "scheduled",
      }
    ];

    setStats(mockStats);
    setDoctors(mockDoctors);
    setSchedule(mockSchedule);
  }, []);

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-700';
      case 'busy':
        return 'bg-orange-100 text-orange-700';
      case 'off_duty':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

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
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Staff Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/staff/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/patients">
            <span className="material-symbols-outlined">person</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/appointments">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/therapy-plan">
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm">Therapy Plans</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/therapy-sessions">
            <span className="material-symbols-outlined">spa</span>
            <span className="text-sm">Therapy Sessions</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/doctors">
            <span className="material-symbols-outlined">event_available</span>
            <span className="text-sm">Doctor Availability</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search patients, sessions..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
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
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Dr. Ananya Rao</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark/95">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Operational Overview</h1>
              <p className="text-slate-500 text-sm mt-1">Good morning, Dr. Rao. Today's operations status.</p>
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
                <span className="material-symbols-outlined">groups</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Today's Appointments</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.totalAppointmentsToday || 0}</h3>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span> Live
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-blue-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Sessions</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.activeTherapySessions || 0}</h3>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded">{stats?.pendingAlerts || 0} Alerts</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-orange-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">clinical_notes</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Completed Sessions</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.completedSessionsToday || 0}</h3>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded-lg">+8%</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 size-24 bg-purple-500/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pending Actions</p>
              <div className="mt-1 flex items-baseline gap-2">
                <h3 className="text-3xl font-black">{stats?.pendingAlerts || 0}</h3>
                <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-lg">Pending</span>
              </div>
            </div>
          </div>

          {/* Schedule and Doctors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Daily Schedule */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-xl">Daily Schedule</h3>
                    <p className="text-xs text-slate-500">Staff appointments for today</p>
                  </div>
                  <button className="flex items-center gap-1 text-primary text-sm font-bold bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-lg">calendar_view_week</span>
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {schedule.map((item) => (
                    <div key={item.id} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      item.status === 'in_progress' ? 'bg-primary/5 dark:bg-primary/10 border-primary/20' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`size-10 flex items-center justify-center rounded-full ${
                          item.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600' :
                          item.status === 'in_progress' ? 'bg-primary text-white' :
                          'bg-slate-100 dark:bg-white/5 text-slate-400'
                        }`}>
                          <span className="material-symbols-outlined text-lg">
                            {item.status === 'completed' ? 'check_circle' : item.status === 'in_progress' ? 'play_arrow' : 'schedule'}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{item.patient_name}</p>
                          <p className="text-sm text-slate-500">{item.appointment_time} • {item.room_number}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.therapy_name}</p>
                        <p className={`text-xs ${
                          item.status === 'completed' ? 'text-emerald-600' :
                          item.status === 'in_progress' ? 'text-primary' :
                          'text-slate-400'
                        }`}>{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Doctor Availability */}
            <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-xl">Doctor Availability</h3>
                  <p className="text-xs text-slate-500">Current schedule</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">{doctor.name}</p>
                        <p className="text-xs text-slate-500">{doctor.specialization}</p>
                      </div>
                      <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${getStatusColor(doctor.availabilityStatus)}`}>
                        {doctor.availabilityStatus}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{doctor.scheduled_appointments} appointments</span>
                      <span className="text-primary font-semibold">{doctor.nextAvailableSlot}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2.5 text-sm font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-all">
                View Full Schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
