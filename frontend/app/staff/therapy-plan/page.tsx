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
    title: "Nasya (Nasal Administration)",
    status: "Scheduled",
    date: "Oct 16",
    notes: "Post-Basti observation needed before proceeding. Check for any sinus congestion.",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-slate-100 text-slate-700";
    case "In Progress":
      return "bg-orange-100 text-orange-700";
    case "Scheduled":
      return "bg-slate-50 text-slate-600";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusDotColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500";
    case "In Progress":
      return "bg-orange-500";
    case "Scheduled":
      return "bg-slate-400";
    default:
      return "bg-gray-500";
  }
};

export default function TherapyPlan() {
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
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 border-b border-[#066046]/10 bg-white flex items-center justify-between px-8 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-[#066046]">Therapy Plan</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-96 hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#066046]/20" placeholder="Search patients..." type="text" />
            </div>
            <img alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDhOWOksULSNAkyvAOumHmW-OlsvKVNekzaS9P29Wtr5B7p5qoarvyHZaS6dh8PYHRAagn90_UBoZY8VkFQSIjG5OUi40fsGF7-JvkrhtHDiNJBN9hEO6SxivSGKNG65_pRhor86I8CNDdhRW5Fgx48YBetbsIw63LRMGRhxcP-rbg2HFt3oY9CyWn388u06klpHw7z47JgK5vj-Fi0l0cM_ROKj4IUK2Am-sPWj9q5NDYMNPslmsh5QYgNRts4ChF-nZzArpyxuqS" />
          </div>
        </header>

        {/* Body Canvas */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8 max-w-5xl mx-auto w-full">
            {/* Patient Header Info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <h1 className="text-3xl font-extrabold text-[#066046] tracking-tight mb-2">Arjun Mehta</h1>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <span className="bg-[#066046]/10 text-[#066046] px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold">Panchakarma Flow</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span> Oct 12 - Oct 16
                  </span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#066046] to-[#055239] text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">edit</span>
                Modify Plan
              </button>
            </div>

            {/* Timeline */}
            <div className="relative pl-4 md:pl-8 space-y-6 before:absolute before:inset-0 before:ml-4 md:before:ml-8 before:-translate-x-px before:w-0.5 before:bg-slate-300 before:rounded-full before:h-full pb-8">
              {therapyDays.map((day, index) => (
                <div key={day.id} className={`relative pl-8 md:pl-12 group ${day.status === "Scheduled" && index > 2 ? "opacity-75 hover:opacity-100 transition-opacity" : ""}`}>
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-[-11px] md:left-[-11px] top-4 z-10 flex items-center justify-center shadow-[0_0_0_4px_#f5f8f7] transition-all ${
                      day.status === "Completed"
                        ? "size-6 rounded-full bg-white border-2 border-green-500"
                        : day.status === "In Progress"
                          ? "size-7 rounded-full bg-[#066046] border-4 border-white"
                          : "size-5 rounded-full bg-slate-200 border-2 border-slate-300"
                    }`}
                  >
                    {day.status === "Completed" && (
                      <span className="material-symbols-outlined text-[14px] text-green-500">check</span>
                    )}
                    {day.status === "In Progress" && (
                      <span className="material-symbols-outlined text-[14px] text-white animate-spin">sync</span>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl p-6 border transition-all ${
                      day.status === "Completed"
                        ? "bg-white border-slate-200 shadow-sm hover:shadow-md"
                        : day.status === "In Progress"
                          ? "bg-white border-2 border-[#066046]/20 shadow-md hover:shadow-lg relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#066046] before:to-[#055239]"
                          : "bg-slate-50/60 border-slate-200 border-dashed"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-1">
                          Day {day.day}: {day.title}
                        </h3>
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-bold ${getStatusStyles(day.status)}`}
                        >
                          <span className={`size-2 rounded-full ${getStatusDotColor(day.status)}`}></span>
                          {day.status}
                        </div>
                      </div>
                      <span className={`text-sm font-medium flex items-center gap-1 ${day.status === "In Progress" ? "text-[#066046] font-bold" : "text-slate-600"}`}>
                        <span className="material-symbols-outlined text-[16px]">schedule</span> {day.date}
                      </span>
                    </div>

                    <div className={`p-4 rounded-xl border ${day.status === "Scheduled" ? "bg-slate-50/50 border-slate-200" : "bg-slate-50 border-slate-200"}`}>
                      <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">description</span>
                        {day.status === "Scheduled" ? "Preparation Required" : "Clinical Notes"}
                      </h4>
                      <p className={`text-sm leading-relaxed ${day.status === "In Progress" ? "font-medium text-slate-900" : day.status === "Scheduled" ? "text-slate-600" : "text-slate-700"}`}>
                        {day.notes}
                      </p>
                      {day.actions && (
                        <div className="mt-4 flex gap-3">
                          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-slate-50 transition-colors">
                            Update Status
                          </button>
                          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-slate-50 transition-colors">
                            Add Note
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
