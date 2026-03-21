"use client";

import { useState } from "react";
import Link from "next/link";

interface TherapySession {
  id: string;
  sessionId: string;
  patient: {
    name: string;
    avatar: string;
  };
  therapyType: string;
  therapist: string;
  dateTime: string;
  status: "Scheduled" | "In-Progress" | "Completed";
}

const sessions: TherapySession[] = [
  {
    id: "1",
    sessionId: "#TS-9021",
    patient: {
      name: "Amara Singh",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN7lYAc3siTm4W1tTenWwzuAkBxqE5D_6EA1TiZDoxUarlndS2XIx7sG5896180_QjTInCDdScDLgLTy635ds5tbMlHo79mtYjvYGig567szEBuWwvFbIZIucrNGj4yDm3s2jh-a2mFwhzJmVGfz5Id3m_2dmlZzk-Bfw5GvrF-ijtCvFnme0qfmdGC5ANE-a3Ydl5G8BlZtxH3-96t-a1mXqsqR2QBP6xhGta1dxyh2HrxVbOQvVDHcSR0ZBqQgmEq8ET6A-FmH0n",
    },
    therapyType: "Panchakarma",
    therapist: "Dr. Rajesh K.",
    dateTime: "Oct 24, 09:00 AM",
    status: "Scheduled",
  },
  {
    id: "2",
    sessionId: "#TS-9025",
    patient: {
      name: "David Chen",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN7lYAc3siTm4W1tTenWwzuAkBxqE5D_6EA1TiZDoxUarlndS2XIx7sG5896180_QjTInCDdScDLgLTy635ds5tbMlHo79mtYjvYGig567szEBuWwvFbIZIucrNGj4yDm3s2jh-a2mFwhzJmVGfz5Id3m_2dmlZzk-Bfw5GvrF-ijtCvFnme0qfmdGC5ANE-a3Ydl5G8BlZtxH3-96t-a1mXqsqR2QBP6xhGta1dxyh2HrxVbOQvVDHcSR0ZBqQgmEq8ET6A-FmH0n",
    },
    therapyType: "Shirodhara",
    therapist: "Dr. Meera J.",
    dateTime: "Oct 24, 10:15 AM",
    status: "In-Progress",
  },
  {
    id: "3",
    sessionId: "#TS-9018",
    patient: {
      name: "Sarah Miller",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN7lYAc3siTm4W1tTenWwzuAkBxqE5D_6EA1TiZDoxUarlndS2XIx7sG5896180_QjTInCDdScDLgLTy635ds5tbMlHo79mtYjvYGig567szEBuWwvFbIZIucrNGj4yDm3s2jh-a2mFwhzJmVGfz5Id3m_2dmlZzk-Bfw5GvrF-ijtCvFnme0qfmdGC5ANE-a3Ydl5G8BlZtxH3-96t-a1mXqsqR2QBP6xhGta1dxyh2HrxVbOQvVDHcSR0ZBqQgmEq8ET6A-FmH0n",
    },
    therapyType: "Abhyanga",
    therapist: "Dr. Rajesh K.",
    dateTime: "Oct 24, 08:30 AM",
    status: "Completed",
  },
  {
    id: "4",
    sessionId: "#TS-9033",
    patient: {
      name: "James Wilson",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN7lYAc3siTm4W1tTenWwzuAkBxqE5D_6EA1TiZDoxUarlndS2XIx7sG5896180_QjTInCDdScDLgLTy635ds5tbMlHo79mtYjvYGig567szEBuWwvFbIZIucrNGj4yDm3s2jh-a2mFwhzJmVGfz5Id3m_2dmlZzk-Bfw5GvrF-ijtCvFnme0qfmdGC5ANE-a3Ydl5G8BlZtxH3-96t-a1mXqsqR2QBP6xhGta1dxyh2HrxVbOQvVDHcSR0ZBqQgmEq8ET6A-FmH0n",
    },
    therapyType: "Basti Therapy",
    therapist: "Dr. Ananya P.",
    dateTime: "Oct 24, 11:30 AM",
    status: "Scheduled",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Scheduled":
      return "bg-slate-100 text-slate-700";
    case "In-Progress":
      return "bg-blue-100 text-blue-700";
    case "Completed":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusDotColor = (status: string) => {
  switch (status) {
    case "Scheduled":
      return "bg-slate-500";
    case "In-Progress":
      return "bg-blue-500";
    case "Completed":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const getTherapyTypeStyles = (type: string) => {
  switch (type) {
    case "Panchakarma":
      return "bg-[#066046]/10 text-[#066046]";
    case "Shirodhara":
      return "bg-orange-100 text-orange-700";
    case "Abhyanga":
      return "bg-emerald-100 text-emerald-700";
    case "Basti Therapy":
      return "bg-[#066046]/10 text-[#066046]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function TherapySessions() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f8f7]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#066046]/10 flex flex-col h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#066046] flex items-center justify-center text-white">
            <span className="material-symbols-outlined">spa</span>
          </div>
          <div>
            <h1 className="text-[#066046] font-bold text-lg leading-tight">Panchakarma</h1>
            <p className="text-xs text-[#066046]/60 font-medium">Staff Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link
            href="/staff/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            href="/staff/patients"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-sm font-medium">Patients</span>
          </Link>
          <Link
            href="/staff/appointments"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">calendar_today</span>
            <span className="text-sm font-medium">Appointments</span>
          </Link>
          <Link
            href="/staff/therapy-plan"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">description</span>
            <span className="text-sm font-medium">Therapy Plan</span>
          </Link>
          <Link
            href="/staff/therapy-sessions"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
          >
            <span className="material-symbols-outlined text-[22px]">spa</span>
            <span className="text-sm font-medium">Therapy Sessions</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="/staff/doctors">
            <span className="material-symbols-outlined text-[22px]">event_available</span>
            <span className="text-sm font-medium">Doctor Availability</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-[#066046]/10">
          <div className="flex items-center gap-3 px-2 py-2">
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border border-[#066046]/20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0apnuuA-ZcDEnNEit2QGz1ud6kNtCDdHeuit0jLEjluBV5SYiG08-u7VhCdKI6aQb5tu61qIM6LoK54xz2uPT2TavKc706JvcoTEV3lOOkfwqVTz0GY9Lq-rsfIftEmuI3TYG3DX6bqghq4Z4Ab97flo62kE7aOq6AP80qszLBYZdNvH6wntx_6aEz13XdEicxt6OXScbAw_0afTex_p6eQTAr3hJQyt_Bpj_mXLWtZouECifZQ4dl3FV7G862Ac6R9-OFkDgFwJq')",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Dr. Ananya Rao</p>
              <p className="text-xs text-[#066046]/60 truncate">Senior Therapist</p>
            </div>
            <button className="text-slate-400 hover:text-[#066046]">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 border-b border-[#066046]/10 bg-white flex items-center justify-between px-8 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#066046]/20" placeholder="Search sessions, patients, or therapists..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-[#066046] transition-colors rounded-lg hover:bg-slate-100">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-2 text-slate-600 hover:text-[#066046] transition-colors rounded-lg hover:bg-slate-100">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-[#066046] leading-tight">Dr. Aristha Varma</p>
                <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Chief Consultant</p>
              </div>
              <img alt="Staff Member Portrait" className="w-10 h-10 rounded-full border-2 border-white shadow-sm group-hover:border-[#066046] transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN7lYAc3siTm4W1tTenWwzuAkBxqE5D_6EA1TiZDoxUarlndS2XIx7sG5896180_QjTInCDdScDLgLTy635ds5tbMlHo79mtYjvYGig567szEBuWwvFbIZIucrNGj4yDm3s2jh-a2mFwhzJmVGfz5Id3m_2dmlZzk-Bfw5GvrF-ijtCvFnme0qfmdGC5ANE-a3Ydl5G8BlZtxH3-96t-a1mXqsqR2QBP6xhGta1dxyh2HrxVbOQvVDHcSR0ZBqQgmEq8ET6A-FmH0n" />
            </div>
          </div>
        </header>

        {/* Body Canvas */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Page Header Actions */}
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-extrabold text-[#066046]">Therapy Sessions</h2>
                <p className="text-slate-600 text-sm mt-1">Manage and monitor daily Ayurvedic clinical sessions.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors font-medium text-sm">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Filter
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#066046] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold text-sm">
                  <span className="material-symbols-outlined text-lg">add</span>
                  New Session
                </button>
              </div>
            </div>

            {/* Dashboard Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                  <span className="material-symbols-outlined">event_busy</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Scheduled Today</p>
                  <p className="text-2xl font-bold text-slate-900">24</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">In Progress</p>
                  <p className="text-2xl font-bold text-slate-900">06</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Completed</p>
                  <p className="text-2xl font-bold text-slate-900">18</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Therapists</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#066046]/10">
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-xl text-[#066046]">Daily Therapy Sessions</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-medium text-slate-600">Live Updates Enabled</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Session ID</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Patient</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Therapy Type</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Therapist</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Date & Time</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Status</th>
                      <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sessions.map((session) => (
                      <tr key={session.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-5 text-sm font-medium text-[#066046]">{session.sessionId}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <img alt={session.patient.name} className="w-8 h-8 rounded-full object-cover shadow-sm" src={session.patient.avatar} />
                            <span className="text-sm font-semibold text-slate-900">{session.patient.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${getTherapyTypeStyles(session.therapyType)}`}>{session.therapyType}</span>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">{session.therapist}</td>
                        <td className="px-6 py-5 text-sm text-slate-600">{session.dateTime}</td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${getStatusStyles(session.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(session.status)}`}></span>
                            {session.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex justify-end gap-2">
                            {session.status === "Scheduled" ? (
                              <>
                                <button className="px-4 py-1.5 bg-[#066046] text-white text-xs font-bold rounded-lg hover:shadow-md transition-all">Start Session</button>
                                <button className="p-1.5 text-slate-400 hover:text-[#066046] transition-colors">
                                  <span className="material-symbols-outlined text-lg">edit_calendar</span>
                                </button>
                              </>
                            ) : session.status === "In-Progress" ? (
                              <>
                                <button className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:shadow-md transition-all">Complete Session</button>
                                <button className="p-1.5 text-slate-400 hover:text-[#066046] transition-colors" title="Add Notes">
                                  <span className="material-symbols-outlined text-lg">edit_note</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">View Record</button>
                                <button className="p-1.5 text-[#066046] hover:text-[#066046]/70 transition-colors">
                                  <span className="material-symbols-outlined text-lg">clinical_notes</span>
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-8 py-4 bg-slate-50/50 flex justify-between items-center text-sm font-medium text-slate-600">
                <p>Showing 1 to 4 of 24 sessions</p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 hover:border-[#066046] transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[#066046] text-white flex items-center justify-center font-bold">1</button>
                  <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 hover:border-[#066046] transition-colors">2</button>
                  <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 hover:border-[#066046] transition-colors">3</button>
                  <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 hover:border-[#066046] transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-orange-500 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add_notes</span>
      </button>
    </div>
  );
}
