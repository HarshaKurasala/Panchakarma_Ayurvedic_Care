"use client";

import { useState } from "react";
import Link from "next/link";

interface Appointment {
  id: string;
  appointmentId: string;
  patient: {
    name: string;
    initials: string;
    bgColor: string;
    condition: string;
    avatar?: string;
  };
  practitioner: {
    name: string;
    title: string;
  };
  schedule: {
    date: string;
    time: string;
    duration: string;
  };
  status: "Confirmed" | "Pending" | "Cancelled";
}

const appointments: Appointment[] = [
  {
    id: "1",
    appointmentId: "#PK-2023-891",
    patient: {
      name: "Rahul Jayakumar",
      initials: "RJ",
      bgColor: "bg-emerald-100 text-primary",
      condition: "Vata Imbalance",
    },
    practitioner: {
      name: "Dr. Anjali Sharma",
      title: "Lead Consultant",
    },
    schedule: {
      date: "Oct 24, 2023",
      time: "09:30 AM",
      duration: "1hr",
    },
    status: "Confirmed",
  },
  {
    id: "2",
    appointmentId: "#PK-2023-892",
    patient: {
      name: "Meera Singh",
      initials: "MS",
      bgColor: "bg-amber-100 text-amber-900",
      condition: "Panchakarma Detox",
    },
    practitioner: {
      name: "Dr. Vikram Raj",
      title: "Yoga Specialist",
    },
    schedule: {
      date: "Oct 24, 2023",
      time: "11:00 AM",
      duration: "2hrs",
    },
    status: "Pending",
  },
  {
    id: "3",
    appointmentId: "#PK-2023-895",
    patient: {
      name: "Arjun Luthra",
      initials: "AL",
      bgColor: "bg-slate-100 text-slate-700",
      condition: "Chronic Migraine",
    },
    practitioner: {
      name: "Dr. Anjali Sharma",
      title: "Lead Consultant",
    },
    schedule: {
      date: "Oct 24, 2023",
      time: "02:30 PM",
      duration: "45min",
    },
    status: "Cancelled",
  },
  {
    id: "4",
    appointmentId: "#PK-2023-899",
    patient: {
      name: "Sanya Malhotra",
      initials: "SM",
      bgColor: "bg-pink-100 text-pink-700",
      condition: "General Consultation",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJUohdreRBZMIjQekBdu-C46Ni-dqIeLbme4nwVl9724PRbL-uoTz75iasA8uuhmj821vJn5vK0dMtceR2lFdbSVkkunSAf0Z6gwIg2EAwbrzeV2wfWD7BbAvRskcbGXDPVpDdczr8IU1c7rzy-DMal77pzJTn-wOXDNKFfHYFW944p-GcVcNcuy-YKTwEz87MVtw0EH4PzSDe_6AAAzrHJ-vtDzc7_bVM8GqqxaPmh2AyZJYHnuC3oOliMwJsNOM2VH_ylUwwvUXP",
    },
    practitioner: {
      name: "Dr. Vikram Raj",
      title: "Yoga Specialist",
    },
    schedule: {
      date: "Oct 24, 2023",
      time: "04:00 PM",
      duration: "1hr",
    },
    status: "Confirmed",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-emerald-100 text-emerald-900";
    case "Pending":
      return "bg-amber-100 text-amber-900";
    case "Cancelled":
      return "bg-red-100 text-red-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
};

export default function StaffAppointments() {
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
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
          >
            <span className="material-symbols-outlined text-[22px]">calendar_today</span>
            <span className="text-sm font-medium">Appointments</span>
          </Link>
          <Link
            href="/staff/therapy-plan"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
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

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* TopAppBar */}
        <header className="sticky top-0 z-40 flex justify-between items-center px-8 h-16 w-full bg-white flex items-center justify-between px-8 flex-shrink-0 border-b border-[#066046]/10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                className="bg-[#f3f4f5] border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#066046]/20"
                placeholder="Search appointments..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-bold text-[#066046] leading-none">Admin Staff</p>
                <p className="text-[10px] text-slate-500 font-medium mt-1">Senior Coordinator</p>
              </div>
              <img
                alt="Admin Staff Profile"
                className="w-10 h-10 rounded-full border-2 border-slate-200 group-hover:border-[#066046] transition-colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ff4cM_uu9lzohUAaKEcYtL12TleppfFhtOXx5rlSnv0VHdg0u2nt4UNNBvIqjJUwldXuYNN9AfRxiOW0bcw1UTpmriPcS6DNp9xVETUwNQ8c_bE6-e_5LDJltmcoh4RGNKP5gOyj1WJAzQsldMAgER_HfE3x3Xsh6M78CNKw8HtpYxlJTiK2LIpHcOMCMOwXWuFMq5TFd13foCiuY_QPzjYVun_K1NeEE2vW9t4vfawonKYZjFSpS1e0FVsIxeVqKPfo6rJchwAn"
              />
            </div>
          </div>
        </header>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Header Section */}
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black text-[#066046] tracking-tight">Appointment Management</h2>
                <p className="text-slate-600 mt-1">Review and coordinate upcoming patient sessions</p>
              </div>
              <div className="flex gap-3">
                <div className="flex bg-[#f3f4f5] p-1 rounded-xl">
                  <button className="px-4 py-2 text-sm font-semibold text-[#066046] bg-white rounded-lg shadow-sm">Upcoming</button>
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#066046] transition-colors">History</button>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#066046] to-[#055239] text-white rounded-xl font-semibold shadow-lg shadow-[#066046]/20 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>New Appointment</span>
                </button>
              </div>
            </div>

            {/* Filters Bento Section */}
            <div className="grid grid-cols-12 gap-6">
              {/* Date Filter Card */}
              <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-[#066046]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <h3 className="font-bold text-[#066046]">Date Selection</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Filter by period</label>
                  <select className="w-full bg-[#f3f4f5] border-none rounded-lg text-sm focus:ring-2 focus:ring-[#066046]/20">
                    <option>Today, Oct 24 2023</option>
                    <option>Tomorrow, Oct 25 2023</option>
                    <option>Next 7 Days</option>
                    <option>Custom Range</option>
                  </select>
                </div>
              </div>

              {/* Status Summary Bento */}
              <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-4">
                <div className="bg-[#066046]/10 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="material-symbols-outlined text-[#066046]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <p className="text-3xl font-black text-[#066046]">12</p>
                    <p className="text-xs font-bold text-[#066046]/70 uppercase">Confirmed</p>
                  </div>
                </div>
                <div className="bg-amber-100 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="material-symbols-outlined text-amber-900" style={{ fontVariationSettings: "'FILL' 1" }}>
                    pending
                  </span>
                  <div>
                    <p className="text-3xl font-black text-amber-900">04</p>
                    <p className="text-xs font-bold text-amber-900/70 uppercase">Pending</p>
                  </div>
                </div>
                <div className="bg-red-100 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="material-symbols-outlined text-red-900" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cancel
                  </span>
                  <div>
                    <p className="text-3xl font-black text-red-900">02</p>
                    <p className="text-xs font-bold text-red-900/70 uppercase">Cancelled</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#066046]/5">
              <div className="p-6 border-b border-[#f3f4f5] flex justify-between items-center">
                <h3 className="font-bold text-[#066046]">Appointment Schedule</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-[#f3f4f5] rounded-lg transition-colors text-slate-600">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  </button>
                  <button className="p-2 hover:bg-[#f3f4f5] rounded-lg transition-colors text-slate-600">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f3f4f5]/50">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Appointment ID</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Patient</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Practitioner</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Schedule</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">Status</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3f4f5]">
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-[#f8f9fa] transition-colors">
                        <td className="px-6 py-5 font-mono text-xs text-[#066046] font-bold">{apt.appointmentId}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            {apt.patient.avatar ? (
                              <img alt={apt.patient.name} className="w-8 h-8 rounded-full" src={apt.patient.avatar} />
                            ) : (
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${apt.patient.bgColor}`}>
                                {apt.patient.initials}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-bold text-slate-900">{apt.patient.name}</p>
                              <p className="text-[10px] text-slate-600">{apt.patient.condition}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-sm font-medium text-slate-900">{apt.practitioner.name}</p>
                          <p className="text-[10px] text-slate-600">{apt.practitioner.title}</p>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-sm font-bold text-slate-900">{apt.schedule.date}</p>
                          <p className="text-xs text-slate-600">
                            {apt.schedule.time} ({apt.schedule.duration})
                          </p>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${getStatusStyles(apt.status)}`}>
                            {apt.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          {apt.status === "Pending" ? (
                            <div className="flex justify-end gap-2">
                              <button className="px-3 py-1.5 bg-[#066046] text-white text-[10px] font-bold rounded-lg hover:shadow-md transition-all">CONFIRM</button>
                              <button className="px-3 py-1.5 bg-[#f3f4f5] text-red-600 text-[10px] font-bold rounded-lg hover:bg-red-100 transition-all">CANCEL</button>
                            </div>
                          ) : apt.status === "Cancelled" ? (
                            <button className="p-2 hover:bg-[#f3f4f5] text-slate-600 rounded-lg transition-all">
                              <span className="material-symbols-outlined text-[18px]">restore</span>
                            </button>
                          ) : (
                            <div className="flex justify-end gap-1">
                              <button className="p-2 hover:bg-[#066046]/5 text-[#066046] rounded-lg transition-all" title="Reschedule">
                                <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                              </button>
                              <button className="p-2 hover:bg-[#066046]/5 text-[#066046] rounded-lg transition-all" title="Details">
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-6 border-t border-[#f3f4f5] flex justify-between items-center bg-[#f3f4f5]/20">
                <p className="text-xs text-slate-600 font-medium">
                  Showing <span className="text-slate-900 font-bold">4</span> of <span className="text-slate-900 font-bold">18</span> appointments for today
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-xs font-bold border border-slate-300 rounded-lg text-slate-600 bg-white hover:bg-[#f3f4f5] transition-colors disabled:opacity-50" disabled>
                    Previous
                  </button>
                  <button className="px-4 py-2 text-xs font-bold border border-slate-300 rounded-lg text-[#066046] bg-white hover:bg-[#f3f4f5] transition-colors shadow-sm">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Asymmetric Content Layer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
              <div className="bg-[#066046] p-8 rounded-2xl col-span-1 md:col-span-2 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-white text-2xl font-black mb-2">Staff Resource Overview</h4>
                    <p className="text-[#066046]/20 text-sm max-w-md">Dr. Vikram and Dr. Anjali are reaching 90% capacity for today. Consider opening additional slots for late evening emergency consultations.</p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <button className="bg-white text-[#066046] px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl shadow-white/20 active:scale-95 transition-transform">
                      Update Roster
                    </button>
                    <button className="text-white/80 hover:text-white px-6 py-2.5 font-bold text-sm transition-colors">View Capacity</button>
                  </div>
                </div>
                {/* Abstract Background Pattern */}
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#055239]/50 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:translate-x-4 transition-transform duration-700"></div>
              </div>

              <div className="bg-[#f3f4f5] p-8 rounded-2xl flex flex-col gap-6">
                <h4 className="font-bold text-[#066046]">Quick Notes</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-amber-500">
                    <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Alert</p>
                    <p className="text-xs text-slate-700 leading-relaxed">Update patient Rahul's report before 10:30 AM session.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-[#066046]">
                    <p className="text-[10px] font-bold text-[#066046] uppercase tracking-widest mb-1">Reminder</p>
                    <p className="text-xs text-slate-700 leading-relaxed">New equipment arriving at 1:00 PM today.</p>
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
