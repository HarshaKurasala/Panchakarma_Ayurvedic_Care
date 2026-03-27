"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

interface Appointment {
  id: string;
  patientName: string;
  condition: string;
  patientImage: string;
  doctor: string;
  doctorInitials: string;
  doctorBg: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  doctorColor: string;
}

export default function AdminAppointments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  const appointments: Appointment[] = [
    {
      id: "#APT-2901",
      patientName: "Meera Iyer",
      condition: "Pancha Karma - Abhyanga",
      patientImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDmJtbUIWRpwi3cBLY5JMF4D8QDsUQeZ-TNdLLpStSFpG5CmsAv4Xx5akqcyotKbAcuqH0GZ7WdyYRDruSzcfOJbl8zAFGB6oDUVyw1mKyZnysx6bW2Xb_6c2_-ak0-nU4wsDSHTztJZND5D0ZKGPEVuYDkEuVVku_eBNnKwvQ0DBGvu0wMcYDTuBZD_gLOjZ8N_f8sajLnNgsoYI8szSUrOozaXH70E2Fm4eq64LY7EOQAeN0XaY-ElzF7bVCDFSC5rl7FSHsg7Gj",
      doctor: "Dr. Rajesh Kumar",
      doctorInitials: "RK",
      doctorBg: "bg-primary-fixed",
      doctorColor: "text-primary",
      date: "Oct 24, 2023",
      time: "09:30 AM",
      status: "confirmed"
    },
    {
      id: "#APT-2905",
      patientName: "Arjun Verma",
      condition: "Detox Consultation",
      patientImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXG86UnvdTPRHf6TrUp1QfYSL_U-wkzhjaScZvyJMDPZJm9q7sFqPSGfAYqqDBYVPiXSbkCa0uuNu6qggK2RXdOtTaNvilo_EwkzDm6CjZhCSoM4WxYBevxV6wxkdVVbdIL1HLIoPp8t8cPpZwOVhmXcPugJB8mdVcaSQfxhafom29cEFPJ144c98TSLBYsJHnZQuqbGbGo8T3v8IlcCvK9is55KJTq-S80HoYMAB6nPBKa8W5Yes6y5suyzkd1U7VMqWch7GxXLFD",
      doctor: "Dr. Shreya Mishra",
      doctorInitials: "SM",
      doctorBg: "bg-secondary-fixed",
      doctorColor: "text-secondary",
      date: "Oct 24, 2023",
      time: "11:00 AM",
      status: "pending"
    },
    {
      id: "#APT-2899",
      patientName: "Sunita Reddy",
      condition: "Shirodhara Treatment",
      patientImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgj9AZUuFP_H32VYAKL0I0h4QnQHm1IvB9hhtdJbTNVlIsCEtZOh4v11ka682omq1q7DwNu-ULodlnmzGpbdkzBfaRJ7s7DrVAIXxo_O0ntlhYJibopziLiAsIYLAf1J5Oh9u7jqGAg7nu2_5HYnuihBU6sD9aaAXEKACczxZoLT7HyZ-_PgW_ZCxopr2luyQLwEIzljJ96mlbjK67WFPlKVuBsWfs6LH9DCJhQetNCuuy9BhAQGX8mJ_k1qf7oUpvPiyTyhIJqO8K",
      doctor: "Unassigned",
      doctorInitials: "NA",
      doctorBg: "bg-slate-200",
      doctorColor: "text-slate-600",
      date: "Oct 23, 2023",
      time: "02:00 PM",
      status: "cancelled"
    },
    {
      id: "#APT-2910",
      patientName: "Karthik Raja",
      condition: "General Wellness Checkup",
      patientImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DYwJmZNr3sD2VYiz9kS5Wo0BXceKMysZ9jinlaA16K6wSMlBrKc5U97yZ1Mtzv-gmOczduRZO3e8GmllCmwNKjysT8Vkqwd4hbPfXCmgL8qaHf8dnu1aKbAQErmPGoZOSddSF-mkJNaSSyvWukwynqVkUS1HTWCEAuzfMUT_dp4fmmZuVRZo0KIBTjnZcEeJUwJx07Jt-xqHeXMLHpxjBTVSm8ma3gc_GiAOX2eGYyNQXX72SMy_0533_XxXNTr5VENH9h1iSk36",
      doctor: "Dr. Rajesh Kumar",
      doctorInitials: "RK",
      doctorBg: "bg-primary-fixed",
      doctorColor: "text-primary",
      date: "Oct 24, 2023",
      time: "03:30 PM",
      status: "confirmed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-100 text-emerald-700";
      case "pending":
        return "bg-orange-100 text-secondary";
      case "cancelled":
        return "bg-red-100 text-error";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return "check_circle";
      case "pending":
        return "schedule";
      case "cancelled":
        return "cancel";
      default:
        return "circle";
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFB]">
      <Sidebar activePage="Appointments" />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Header Section */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-extrabold text-[#003527] tracking-tight font-headline">
                Appointments Monitoring
              </h2>
              <p className="text-[#404944] font-medium mt-1">
                Real-time overview of today's clinical schedule and patient flow.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#003527] to-[#064e3b] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-[#003527]/10 hover:shadow-[#003527]/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">add_circle</span>
              New Appointment
            </button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#003527] group hover:bg-emerald-50/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#b0f0d6] flex items-center justify-center rounded-xl text-[#003527]">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    calendar_today
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  +12% vs last week
                </span>
              </div>
              <h3 className="text-[#404944] text-sm font-semibold uppercase tracking-wider">Today's Total</h3>
              <p className="text-4xl font-extrabold text-[#003527] mt-1">42</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#904d00] group hover:bg-orange-50/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#ffdcc3] flex items-center justify-center rounded-xl text-[#904d00]">
                  <span className="material-symbols-outlined text-2xl">pending_actions</span>
                </div>
                <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSfQhvh9E5ITTJEtBBv_rXl9C8RpbFu9A_5SefDEG_4uA-f8D7mNG2kjvWqlaOF3CI5LOGd9GFlWOJ4qSLMV6Op_j1vVF810OSbAtAJV_Ob0ja_vGTEpt4KhCIdbplqqI81Z1VHimUOqFOxHfqVmS7ZKqyzYOQLTftWYeGA1ftmRn6Irhgc3OKkK4T8HWi6-PACasKtGBAzaf7x_W1witsPNHxE7hQe58qD_f9TrAenMAAKFFQxVP8qHwTvX24GPyE5BeHIfQuOnL3" alt="Patient" />
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_4inVCz7ydd7v-GuwVNBLYmbtsdCk221evKqrFDJd-b5ztBEdjUCCVQnmtrG7Dg4BQweprBTw6MJSBUwBnb1GNMVvYk7fjfMmCU1DKFmQ1-4_P7H9Odk-KBSq6A-_hODrNceCulSpaMLa9Wh4y1Q9zx5CtCTe2ABZCGh1R1JzXgrjzkeXeahd7_a2orr9DR4BI8_mSofRJknMtBll6ijC-Mm1ntBm3nMosyI-bbVLFQA_YvuYiPFRYUZAZ60basUNKOH0-eTi3OTU" alt="Patient" />
                  <div className="w-6 h-6 rounded-full bg-[#fe932c] text-white text-[8px] flex items-center justify-center border-2 border-white font-bold">
                    +5
                  </div>
                </div>
              </div>
              <h3 className="text-[#404944] text-sm font-semibold uppercase tracking-wider">Pending Confirmations</h3>
              <p className="text-4xl font-extrabold text-[#904d00] mt-1">08</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#003623] group hover:bg-emerald-50/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#6ffbbe] flex items-center justify-center rounded-xl text-[#003623]">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div className="flex items-center gap-1 text-[#003623] font-bold text-sm">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>Optimal</span>
                </div>
              </div>
              <h3 className="text-[#404944] text-sm font-semibold uppercase tracking-wider">Monthly Completion Rate</h3>
              <p className="text-4xl font-extrabold text-[#003527] mt-1">
                94.8<span className="text-xl">%</span>
              </p>
            </div>
          </div>

          {/* Main Table Section */}
          <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-emerald-900/5">
            <div className="p-6 border-b border-[#edeeef] bg-white/50 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeFilter === "all"
                      ? "bg-[#003527] text-white shadow-md"
                      : "text-emerald-900/60 hover:bg-emerald-50"
                  }`}
                >
                  All Appointments
                </button>
                <button
                  onClick={() => setActiveFilter("pending")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeFilter === "pending" ? "bg-[#003527] text-white shadow-md" : "text-emerald-900/60 hover:bg-emerald-50"
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setActiveFilter("confirmed")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeFilter === "confirmed" ? "bg-[#003527] text-white shadow-md" : "text-emerald-900/60 hover:bg-emerald-50"
                  }`}
                >
                  Confirmed
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#bfc9c3]/30 rounded-lg text-sm font-medium hover:bg-[#f3f4f5] transition-colors">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#bfc9c3]/30 rounded-lg text-sm font-medium hover:bg-[#f3f4f5] transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f4f5] text-[#404944] text-xs font-bold uppercase tracking-widest">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Patient Name</th>
                    <th className="px-6 py-4">Assigned Doctor</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Time Slot</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edeeef]">
                  {appointments.map((apt) => (
                    <tr
                      key={apt.id}
                      className={`hover:bg-emerald-50/20 transition-colors ${
                        apt.status === "cancelled" ? "bg-[#f3f4f5]/20 opacity-75" : ""
                      }`}
                    >
                      <td className="px-6 py-5 font-mono text-xs font-bold text-emerald-700">{apt.id}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <img
                            className={`w-10 h-10 rounded-full object-cover shadow-sm ${
                              apt.status === "cancelled" ? "grayscale" : ""
                            }`}
                            src={apt.patientImage}
                            alt={apt.patientName}
                          />
                          <div>
                            <p className="font-bold text-[#003527] text-sm">{apt.patientName}</p>
                            <p className="text-[10px] text-[#404944]">{apt.condition}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full ${apt.doctorBg} flex items-center justify-center ${apt.doctorColor} text-xs font-bold`}>
                            {apt.doctorInitials}
                          </div>
                          <p className="text-sm font-medium">{apt.doctor}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium">{apt.date}</td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-[#edeeef] rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                          {apt.time}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold w-fit uppercase tracking-wider ${getStatusColor(apt.status)}`}>
                          {apt.status === "confirmed" && (
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                          )}
                          {apt.status === "pending" && <span className="w-1.5 h-1.5 bg-[#fe932c] rounded-full"></span>}
                          {apt.status === "cancelled" && <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>}
                          {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-emerald-700 hover:bg-emerald-100/50 rounded-lg transition-colors" title="Reassign Doctor">
                            <span className="material-symbols-outlined text-xl">person_search</span>
                          </button>
                          <button className="p-2 text-[#404944] hover:bg-[#edeeef] rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-xl">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-[#f3f4f5]/50 flex items-center justify-between">
              <p className="text-xs font-medium text-[#404944]">Showing 4 of 42 appointments</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#edeeef] transition-colors disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#003527] text-white text-xs font-bold">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#edeeef] text-xs font-bold">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#edeeef] text-xs font-bold">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#edeeef] transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          {/* Bottom Contextual Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
            {/* Scheduling Optimization Card */}
            <div className="bg-[#064e3b] text-white p-6 rounded-2xl flex items-center gap-6">
              <div className="w-20 h-20 bg-emerald-900/20 rounded-2xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-4xl">lightbulb</span>
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">Scheduling Optimization</h4>
                <p className="text-sm text-emerald-50/80 mt-1">
                  Found 3 doctors available for reassignment during the 2 PM peak slot. Rebalancing can reduce patient wait times by 15 mins.
                </p>
                <button className="mt-3 text-xs font-bold uppercase tracking-widest text-emerald-200 hover:text-white transition-colors flex items-center gap-1">
                  View Optimization Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Doctor Availability Card */}
            <div className="bg-[#f3f4f5] p-6 rounded-2xl border border-[#bfc9c3]/20 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-[#003527]">Doctor Availability Today</h4>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  REAL-TIME
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-sm font-medium">Morning Shift</span>
                  </div>
                  <span className="text-sm font-bold">8/10 Doctors</span>
                </div>
                <div className="w-full bg-[#edeeef] h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[80%] rounded-full"></div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-sm font-medium">Afternoon Shift</span>
                  </div>
                  <span className="text-sm font-bold">5/10 Doctors</span>
                </div>
                <div className="w-full bg-[#edeeef] h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full w-[50%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
