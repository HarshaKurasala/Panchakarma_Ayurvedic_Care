"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TimelineAppointment {
  id: number;
  patient_name: string;
  appointment_time: string;
  therapy_name: string;
  room_number: string;
  status: "in_progress" | "confirmed" | "pending";
  is_break?: boolean;
}

export default function Appointments() {
  const [appointments, setAppointments] = useState<TimelineAppointment[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 24)); // Oct 24, 2026
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("day");

  useEffect(() => {
    const timelineAppointments: TimelineAppointment[] = [
      {
        id: 1,
        patient_name: "Arjun Mehra",
        appointment_time: "09:00",
        therapy_name: "Panchakarma Detox Therapy",
        room_number: "Room 302",
        status: "in_progress"
      },
      {
        id: 2,
        patient_name: "Priya Sharma",
        appointment_time: "10:30",
        therapy_name: "Vata Imbalance Consultation",
        room_number: "Video Consultation",
        status: "confirmed"
      },
      {
        id: 3,
        patient_name: "Rohan Verma",
        appointment_time: "11:15",
        therapy_name: "Ayurvedic Nutritional Follow-up",
        room_number: "Cabin B",
        status: "pending"
      },
      {
        id: 4,
        is_break: true,
        patient_name: "Lunch Break",
        appointment_time: "12:30",
        therapy_name: "Sanctuary Kitchen",
        room_number: "",
        status: "confirmed"
      },
      {
        id: 5,
        patient_name: "Elena Rodriguez",
        appointment_time: "14:00",
        therapy_name: "Shirodhara Stress Relief Session",
        room_number: "Room 105",
        status: "confirmed"
      }
    ];
    setAppointments(timelineAppointments);
  }, []);

  const handlePreviousDay = () => {
    setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
  };

  const handleNextDay = () => {
    setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const getStatusStyles = (status: string, isBreak?: boolean) => {
    if (isBreak) return "opacity-50";
    switch (status) {
      case "in_progress":
        return "bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500";
      case "confirmed":
        return "bg-emerald-50 dark:bg-emerald-900/20";
      case "pending":
        return "bg-slate-50 dark:bg-slate-900/20 border border-dashed border-slate-300 dark:border-slate-700";
      default:
        return "";
    }
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "in_progress":
        return "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300";
      case "confirmed":
        return "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300";
      case "pending":
        return "bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300";
      default:
        return "";
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
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Specialists</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/doctor/appointments">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/therapies">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/analytics">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Analytics</span>
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
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
                placeholder="Search appointments..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 bg-background-light dark:bg-background-dark/95 space-y-8">
          {/* Header Section */}
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-primary tracking-tight">Appointments</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">Manage your daily path to patient wellness.</p>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-xl hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined">add</span>
              New Appointment
            </button>
          </div>

          {/* Controls Section */}
          <div className="grid grid-cols-12 gap-6">
            {/* Date Picker & Filter */}
            <div className="col-span-8 bg-slate-50 dark:bg-white/5 rounded-2xl p-6 flex items-center justify-between border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <button onClick={handlePreviousDay} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">chevron_left</span>
                </button>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{formatDate(currentDate)}</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-semibold">Today</p>
                </div>
                <button onClick={handleNextDay} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                </button>
              </div>
              <div className="flex gap-2 p-1 bg-slate-200 dark:bg-white/10 rounded-lg">
                <button
                  onClick={() => setViewMode("day")}
                  className={`px-4 py-2 rounded-md font-bold text-sm transition-all ${
                    viewMode === "day"
                      ? "bg-white dark:bg-white/20 text-primary shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10"
                  }`}
                >
                  Day
                </button>
                <button
                  onClick={() => setViewMode("week")}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    viewMode === "week"
                      ? "bg-white dark:bg-white/20 text-primary shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10"
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setViewMode("month")}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                    viewMode === "month"
                      ? "bg-white dark:bg-white/20 text-primary shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10"
                  }`}
                >
                  Month
                </button>
              </div>
            </div>

            {/* Daily Capacity Stats */}
            <div className="col-span-4 bg-gradient-to-br from-primary to-emerald-700 text-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-emerald-100 text-sm font-medium">Daily Capacity</p>
                <h3 className="text-4xl font-bold mt-2">82%</h3>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <p className="text-xs opacity-90 uppercase tracking-wider">12 Appointments Remaining</p>
                <span className="material-symbols-outlined text-5xl opacity-20">analytics</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Timeline for Today</h3>
            </div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <div key={appointment.id} className="relative flex gap-8">
                  {/* Time */}
                  <div className="w-20 pt-4 flex flex-col items-center">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{appointment.appointment_time}</span>
                    {index < appointments.length - 1 && (
                      <div className="w-0.5 h-24 bg-slate-300 dark:bg-slate-700 my-2"></div>
                    )}
                  </div>

                  {/* Appointment Card */}
                  {appointment.is_break ? (
                    <div className="flex-1 py-3 px-6 flex items-center justify-center border-y border-slate-300 dark:border-slate-700 opacity-50">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-600 dark:text-slate-400">
                        {appointment.patient_name} • {appointment.therapy_name}
                      </span>
                    </div>
                  ) : (
                    <div className={`flex-1 bg-white dark:bg-white/5 rounded-2xl p-6 transition-all border border-slate-200 dark:border-white/10 hover:shadow-lg ${getStatusStyles(appointment.status)}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            appointment.status === "in_progress"
                              ? "bg-orange-100 dark:bg-orange-500/20"
                              : "bg-primary/10 dark:bg-primary/20"
                          }`}>
                            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">person</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">{appointment.patient_name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{appointment.therapy_name}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-full flex items-center gap-1 ${getStatusBadgeStyles(appointment.status)}`}>
                            {appointment.status === "in_progress" && (
                              <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></span>
                            )}
                            {appointment.status.replace("_", " ")}
                          </span>
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{appointment.room_number}</span>
                        </div>
                      </div>

                      {/* Action Buttons for Pending */}
                      {appointment.status === "pending" && (
                        <div className="flex gap-2 mt-4">
                          <button className="p-2 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">check_circle</span>
                          </button>
                          <button className="p-2 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-2xl">cancel</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
