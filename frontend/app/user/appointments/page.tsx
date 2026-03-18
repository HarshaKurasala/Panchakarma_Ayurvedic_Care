"use client";

import { useEffect, useState } from "react";

interface Appointment {
  id: number;
  patient_name: string;
  therapy_name: string;
  doctor_name: string;
  appointment_date: string;
  appointment_time: string;
  room_number: string;
  status: string;
  notes: string;
}

export default function UserAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    filterAppointments();
  }, [appointments, filter]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/appointments");
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAppointments = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let filtered = appointments;

    if (filter === "upcoming") {
      filtered = appointments.filter((apt) => {
        const aptDate = new Date(apt.appointment_date);
        return aptDate >= today && apt.status === "scheduled";
      });
    } else if (filter === "completed") {
      filtered = appointments.filter((apt) => apt.status === "completed");
    } else if (filter === "cancelled") {
      filtered = appointments.filter((apt) => apt.status === "cancelled");
    }

    setFilteredAppointments(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      case "in_progress":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "check_circle";
      case "scheduled":
        return "schedule";
      case "in_progress":
        return "pending";
      case "cancelled":
        return "cancel";
      default:
        return "help";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return "N/A";
    const [hours, minutes] = timeStr.split(":").slice(0, 2);
    const ampm = parseInt(hours) >= 12 ? "PM" : "AM";
    const displayHours = parseInt(hours) % 12 || 12;
    return `${displayHours}:${minutes} ${ampm}`;
  };

  const formatDateShort = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      day: date.getDate(),
    };
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
      <aside className="w-64 border-r border-primary/10 bg-white dark:bg-background-dark/50 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">spa</span>
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Panchakarma</h1>
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">ayurvedic wellness</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
            href="/user/dashboard"
          >
            <span className="material-symbols-outlined">grid_view</span>
            Dashboard
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold"
            href="/user/appointments"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            My Appointments
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
            href="/user/treatments"
          >
            <span className="material-symbols-outlined">medical_services</span>
            My Treatments
          </a>
          <div className="relative group">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">restaurant</span>
              <span className="flex-1">Diet Guide</span>
              <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">info</span>
            </a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-full top-0 ml-2 w-48 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-primary/10 text-[11px] leading-relaxed z-50">
              <p className="font-bold text-primary mb-1">Nutrition Tip</p>
              <p className="text-slate-600 dark:text-slate-400">Vata benefits from warm, moist foods. Avoid cold salads and dry snacks today.</p>
              <div className="absolute top-4 -left-1 w-2 h-2 bg-white dark:bg-slate-800 border-l border-b border-primary/10 rotate-45"></div>
            </div>
          </div>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">receipt_long</span>
            Billing
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>

        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="flex items-center gap-3 p-2">
            <div
              className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqm1h73otI5BGfYes9ePJ98cbSfGQVarlz1dqZ47dLZZX6GKe_s660slW9jbHEy3D-rmNna-c5tv4x2Rj15O-fLo4O-s_rbM71A-o82kIDeL1g3OKLoMYT4OsLzUQJUryhabpachccd8Q5Rfy4FHh3IoIwRJ-goF02WzgdhauQx7ceI8fRmBybVo69yfpN91dcgtz6trWi-EcnQQoAaUSqSAcBfO2UwKNMx9EKoZOCLAuEk-BtrP7VuO-yrWeygjWtsEwatRs8AKBP')",
              }}
            ></div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Arjun Sharma</p>
              <p className="text-xs text-slate-500 truncate uppercase tracking-tighter">Vata-Pitta Prakriti</p>
            </div>
            <button className="text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined text-xl">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">My Appointments</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Schedule New
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-background-light dark:bg-background-dark/95">
          {/* Filter Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/30"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === "upcoming"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/30"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === "completed"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/30"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("cancelled")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === "cancelled"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/30"
              }`}
            >
              Cancelled
            </button>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-primary animate-spin">sync</span>
                  </div>
                  <p className="text-slate-500">Loading appointments...</p>
                </div>
              </div>
            ) : filteredAppointments.length === 0 ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                  </div>
                  <p className="text-slate-500">No appointments found</p>
                </div>
              </div>
            ) : (
              filteredAppointments.map((appointment) => {
                const dateInfo = formatDateShort(appointment.appointment_date);
                const isPriority = appointment.status === "in_progress" || 
                  (appointment.status === "scheduled" && new Date(appointment.appointment_date) < new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

                return (
                  <div
                    key={appointment.id}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                      isPriority ? "border-primary shadow-md" : "border-slate-100 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Date and Therapy */}
                      <div className="flex items-center gap-6">
                        <div
                          className={`flex-col items-center justify-center w-20 h-20 rounded-2xl shadow-inner text-white font-bold flex ${
                            isPriority
                              ? "bg-primary"
                              : appointment.status === "completed"
                              ? "bg-green-500"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          <span className="text-xs font-bold uppercase opacity-80">{dateInfo.month}</span>
                          <span className="text-3xl leading-none">{dateInfo.day}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded uppercase ${getStatusColor(
                                appointment.status
                              )}`}
                            >
                              {appointment.status.replace("_", " ")}
                            </span>
                            {isPriority && (
                              <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                                Priority
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{appointment.therapy_name}</h4>
                          <div className="flex items-center mt-2 space-x-4 flex-wrap">
                            <p className="text-sm flex items-center text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-lg mr-1 opacity-60">schedule</span>
                              {formatTime(appointment.appointment_time)}
                            </p>
                            <p className="text-sm flex items-center text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-lg mr-1 opacity-60">person</span>
                              {appointment.doctor_name}
                            </p>
                            {appointment.room_number && (
                              <p className="text-sm flex items-center text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-lg mr-1 opacity-60">door_front</span>
                                {appointment.room_number}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        {appointment.status === "scheduled" && (
                          <>
                            <button className="flex-1 lg:flex-none px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-opacity-90 transition-all">
                              Join Room
                            </button>
                            <button className="flex-1 lg:flex-none px-6 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">
                              Reschedule
                            </button>
                          </>
                        )}
                        {appointment.status === "completed" && (
                          <>
                            <button className="flex-1 lg:flex-none px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                              Download Report
                            </button>
                          </>
                        )}
                        <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </div>
                    </div>

                    {/* Notes */}
                    {appointment.notes && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <span className="font-semibold">Notes:</span> {appointment.notes}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
