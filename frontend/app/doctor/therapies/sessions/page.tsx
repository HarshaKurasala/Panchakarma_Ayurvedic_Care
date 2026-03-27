"use client";

import Link from "next/link";
import { useState } from "react";

interface Session {
  id: string;
  sessionId: string;
  patient: string;
  condition: string;
  therapyType: string;
  time: string;
  room: string;
  status: "scheduled" | "completed" | "in-progress";
  initials: string;
  color: string;
}

export default function SessionMonitoring() {
  const [currentPage, setCurrentPage] = useState(1);

  const sessions: Session[] = [
    {
      id: "1",
      sessionId: "#PK-2023-089",
      patient: "Arjun Sharma",
      condition: "Pitta Imbalance",
      therapyType: "Shirodhara (Oil)",
      time: "09:30 AM - 10:45 AM",
      room: "Room 4B",
      status: "scheduled",
      initials: "AS",
      color: "bg-[#b0f0d6]"
    },
    {
      id: "2",
      sessionId: "#PK-2023-090",
      patient: "Meera Kapoor",
      condition: "Vata Disorder",
      therapyType: "Abhyanga Massage",
      time: "11:00 AM - 12:00 PM",
      room: "Room 2A",
      status: "completed",
      initials: "MK",
      color: "bg-[#ffdcc3]"
    },
    {
      id: "3",
      sessionId: "#PK-2023-091",
      patient: "Rahul Joshi",
      condition: "Kapha Detox",
      therapyType: "Vamana Therapy",
      time: "01:30 PM - 03:00 PM",
      room: "Detox Suite 1",
      status: "scheduled",
      initials: "RJ",
      color: "bg-[#6ffbbe]"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "text-emerald-600";
      case "completed":
        return "text-[#003623]";
      case "in-progress":
        return "text-orange-600";
      default:
        return "text-slate-600";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-emerald-100/50";
      case "completed":
        return "bg-[#e7f5f1]";
      case "in-progress":
        return "bg-orange-100/50";
      default:
        return "bg-slate-100/50";
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/appointments">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/doctor/therapies">
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
              <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search records..." type="text" />
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
        <div className="flex-1 overflow-y-auto p-8 bg-[#f8f9fa]">
          {/* Navigation Tabs */}
          <nav className="mb-12 flex gap-8 border-b border-slate-200 pb-4">
            <Link href="/doctor/therapies" className="text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-all">
              Create Plan
            </Link>
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-primary border-b-2 border-primary pb-2 -mb-6 transition-all">
              Session Monitoring
            </a>
          </nav>

          <div className="space-y-12">
            {/* Summary Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Total Sessions */}
              <div className="bg-white p-8 rounded-xl shadow-sm border-none flex flex-col justify-between group hover:bg-[#064e3b] hover:text-white transition-all duration-500 h-48 cursor-pointer">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#b0f0d6]/30 flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white mb-4">
                    <span className="material-symbols-outlined text-2xl">event_available</span>
                  </div>
                  <p className="text-[#404944] font-medium text-sm group-hover:text-[#b0f0d6]">Total Sessions Today</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-primary group-hover:text-white">24</span>
                  <span className="text-emerald-500 group-hover:text-[#4edea3] text-sm font-semibold">+12% vs yesterday</span>
                </div>
              </div>

              {/* In-Progress */}
              <div className="bg-white p-8 rounded-xl shadow-sm border-none flex flex-col justify-between group hover:bg-[#fe932c] hover:text-white transition-all duration-500 h-48 cursor-pointer">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#ffdcc3]/30 flex items-center justify-center text-[#904d00] group-hover:bg-white/20 group-hover:text-white mb-4">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
                  </div>
                  <p className="text-[#404944] font-medium text-sm group-hover:text-[#ffdcc3]">In-Progress</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-primary group-hover:text-white">8</span>
                  <span className="text-[#904d00] group-hover:text-white text-sm font-semibold">Active now</span>
                </div>
              </div>

              {/* Completion Rate */}
              <div className="bg-white p-8 rounded-xl shadow-sm border-none flex flex-col justify-between group hover:bg-[#004f34] hover:text-white transition-all duration-500 h-48 cursor-pointer">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#6ffbbe]/30 flex items-center justify-center text-[#003623] group-hover:bg-white/20 group-hover:text-white mb-4">
                    <span className="material-symbols-outlined text-2xl">task_alt</span>
                  </div>
                  <p className="text-[#404944] font-medium text-sm group-hover:text-[#6ffbbe]">Completion Rate</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-primary group-hover:text-white">94%</span>
                  <div className="flex-1 h-2 bg-[#edeeef] rounded-full overflow-hidden group-hover:bg-white/20 ml-4">
                    <div className="h-full bg-[#003623] group-hover:bg-[#4edea3] w-[94%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Session Tracking Table */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-extrabold text-primary">Live Session Tracking</h2>
                  <p className="text-[#404944] text-sm mt-1">Real-time status of all panchakarma procedures for today</p>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#edeeef] text-[#404944] text-sm font-semibold hover:bg-[#e1e3e4] transition-colors">
                    <span className="material-symbols-outlined text-sm">filter_list</span>
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#edeeef] text-[#404944] text-sm font-semibold hover:bg-[#e1e3e4] transition-colors">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export Report
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#e1e3e4]">
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4">Session ID</th>
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4">Patient</th>
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4">Therapy Type</th>
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4">Time</th>
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4">Status</th>
                      <th className="pb-6 font-bold text-xs uppercase tracking-widest text-[#404944] px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((session, index) => (
                      <tr key={session.id} className={`group hover:bg-[#f3f4f5] transition-colors ${index === 1 ? 'bg-[#f3f4f5]/50' : ''}`}>
                        <td className="py-6 px-4">
                          <span className="text-sm font-mono text-[#707974] font-medium">{session.sessionId}</span>
                        </td>
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`${session.color} w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-[#003527]`}>
                              {session.initials}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary">{session.patient}</p>
                              <p className="text-xs text-[#404944]">{session.condition}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#b0f0d6] text-[#0b513d]">
                            {session.therapyType}
                          </span>
                        </td>
                        <td className="py-6 px-4">
                          <p className="text-sm font-medium text-[#191c1d]">{session.time}</p>
                          <p className="text-xs text-[#404944]">{session.room}</p>
                        </td>
                        <td className="py-6 px-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${getStatusColor(session.status)}`}>
                            {session.status === 'completed' ? (
                              <>
                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                Completed
                              </>
                            ) : (
                              <>
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Scheduled
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-6 px-4 text-right">
                          <button className="text-[#707974] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#edeeef]">
                <p className="text-sm text-[#404944]">
                  Showing <span className="font-bold text-primary">3</span> of 24 sessions
                </p>
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#bfc9c3]/30 text-[#707974] hover:bg-[#edeeef] transition-colors disabled:opacity-30" disabled>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#bfc9c3]/30 text-primary hover:bg-[#edeeef] transition-colors font-bold text-sm">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#bfc9c3]/30 text-primary hover:bg-[#edeeef] transition-colors font-bold text-sm">3</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#bfc9c3]/30 text-[#707974] hover:bg-[#edeeef] transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Treatment Progress Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Therapist Assignment Map */}
              <div className="bg-[#064e3b] text-white p-10 rounded-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-extrabold mb-4">Therapist Assignment Map</h3>
                  <p className="text-[#80bea6] text-sm leading-relaxed mb-8 max-w-sm">
                    8 active therapists are currently assigned to critical Panchakarma procedures. View real-time resource allocation and facility availability.
                  </p>
                  <button className="px-6 py-3 bg-[#4edea3] text-[#002113] font-bold rounded-lg hover:scale-105 active:scale-95 transition-all">
                    View Facility Map
                  </button>
                </div>
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#003527] rounded-full blur-3xl opacity-40 group-hover:scale-125 transition-transform duration-700"></div>
                <span className="absolute right-8 top-8 material-symbols-outlined text-8xl text-white/10">map</span>
              </div>

              {/* Room Utilization */}
              <div className="bg-[#f3f4f5] p-10 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="stroke-[#edeeef]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="3"
                      ></path>
                      <path
                        className="stroke-[#904d00]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeDasharray="75, 100"
                        strokeLinecap="round"
                        strokeWidth="3"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[#904d00] font-bold text-xl">75%</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Room Utilization</h4>
                    <p className="text-sm text-[#404944] max-w-xs">
                      12 out of 16 treatment rooms are currently occupied for the morning shift.
                    </p>
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
