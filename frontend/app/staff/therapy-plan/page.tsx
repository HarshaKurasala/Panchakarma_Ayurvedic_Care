"use client";

import { useState } from "react";
import Link from "next/link";

interface TherapyDay {
  id: string;
  day: number;
  title: string;
  status: "Completed" | "In Progress" | "Scheduled";
  date: string;
  notes: string;
  actions?: boolean;
}

const therapyDays: TherapyDay[] = [
  {
    id: "1",
    day: 1,
    title: "Snehanam (Oil Massage)",
    status: "Completed",
    date: "Oct 12",
    notes: "Patient responded well to warm oil. No adverse skin reactions observed. Muscle tension visibly reduced post-session.",
  },
  {
    id: "2",
    day: 2,
    title: "Swedanam (Steam Therapy)",
    status: "Completed",
    date: "Oct 13",
    notes: "Effective detoxification observed. Profuse sweating achieved within expected timeframe. Hydration maintained throughout.",
  },
  {
    id: "3",
    day: 3,
    title: "Vamana (Emesis Therapy)",
    status: "In Progress",
    date: "Today",
    notes: "Current therapeutic procedure. Patient is resting in observation room. Vitals stable.",
    actions: true,
  },
  {
    id: "4",
    day: 4,
    title: "Basti (Enema Therapy)",
    status: "Scheduled",
    date: "Oct 15",
    notes: "Ensure medicinal decoction is prepared 2 hours prior. Review dietary guidelines with patient.",
  },
  {
    id: "5",
    day: 5,
    title: "Virechana (Purgation)",
    status: "Scheduled",
    date: "Oct 16",
    notes: "Monitor gastrointestinal response. Patient to fast 12 hours before procedure.",
  },
  {
    id: "6",
    day: 6,
    title: "Abhyanga Massage (Follow-up)",
    status: "Scheduled",
    date: "Oct 17",
    notes: "Lighter oil massage to restore dosha balance post-detoxification.",
  },
  {
    id: "7",
    day: 7,
    title: "Pizhichil (Oil Bath)",
    status: "Scheduled",
    date: "Oct 18",
    notes: "Duration: 60 minutes. Use medicated oil as per chief physician's recommendation.",
  },
];

export default function TherapyPlans() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

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
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
          >
            <span className="material-symbols-outlined text-[22px]">description</span>
            <span className="text-sm font-medium">Therapy Plans</span>
          </Link>
          <Link
            href="/staff/therapy-sessions"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
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
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#f5f8f7]">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 border-b border-[#066046]/10 bg-white flex items-center justify-between px-8 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-slate-800">Therapy Plans</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-[#066046] transition-colors rounded-lg hover:bg-slate-100">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-2 text-slate-600 hover:text-[#066046] transition-colors rounded-lg hover:bg-slate-100">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </header>

        {/* Body Canvas */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Page Header */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">21-Day Panchakarma Protocol</h3>
            <p className="text-slate-600">
              <span className="font-semibold">Patient:</span> Rahul S. • <span className="font-semibold">Status:</span> In Progress (Day 3/7 of Phase 1)
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">Completed</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">2</p>
              <p className="text-xs text-slate-500 mt-1">sessions completed</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">schedule</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">In Progress</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">1</p>
              <p className="text-xs text-slate-500 mt-1">active session</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-600">event_note</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">Scheduled</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">4</p>
              <p className="text-xs text-slate-500 mt-1">upcoming sessions</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-600">info</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">Adherence</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p className="text-xs text-slate-500 mt-1">compliance rate</p>
            </div>
          </div>

          {/* Therapy Days Timeline */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Daily Schedule</h4>
            {therapyDays.map((day) => (
              <div
                key={day.id}
                className="bg-white rounded-xl border border-[#066046]/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.id ? null : day.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-6 flex-1">
                    {/* Day Number Circle */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                        day.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : day.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      Day {day.day}
                    </div>

                    {/* Content */}
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h5 className="font-bold text-slate-900">{day.title}</h5>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            day.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : day.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {day.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{day.date}</p>
                    </div>
                  </div>

                  <span
                    className={`material-symbols-outlined transition-transform ${
                      expandedDay === day.id ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Expanded Content */}
                {expandedDay === day.id && (
                  <div className="border-t border-[#066046]/10 px-8 py-6 bg-slate-50">
                    <p className="text-sm text-slate-700 leading-relaxed mb-6">{day.notes}</p>

                    {day.actions && (
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 bg-[#066046] text-white rounded-lg font-medium text-sm hover:bg-[#055239] transition-colors">
                          Update Status
                        </button>
                        <button className="flex-1 px-4 py-2 border border-[#066046]/20 text-slate-700 rounded-lg font-medium text-sm hover:bg-[#066046]/5 transition-colors">
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Notes Section */}
          <div className="bg-white p-8 rounded-xl border border-[#066046]/10 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Clinical Observations</h4>
            <p className="text-slate-700 leading-relaxed mb-6">
              Patient shows excellent compliance with treatment protocol. Mild digestive adjustments observed on Day 2, managed with warm ginger tea.
              Recommended increased rest between sessions and body pressure point massage during evenings. Follow-up consultation scheduled for Day 8 to
              assess overall progress and adjust Phase 2 accordingly.
            </p>
            <button className="px-6 py-2 bg-[#066046] text-white rounded-lg font-medium text-sm hover:bg-[#055239] transition-colors">
              Add Note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
