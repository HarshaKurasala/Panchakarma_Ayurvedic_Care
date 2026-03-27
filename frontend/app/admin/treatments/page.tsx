"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

interface TherapyPlan {
  id: string;
  patient: string;
  patientInitials: string;
  doctor: string;
  therapyType: string;
  duration: string;
  status: "active" | "pending" | "completed";
}

interface Session {
  id: number;
  type: string;
  patient: string;
  therapist: string;
  date: string;
  day: number;
  month: string;
  timeStart: string;
  timeEnd: string;
  status: "in-progress" | "scheduled";
  statusColor: string;
}

export default function AdminTreatments() {
  const [activeTab, setActiveTab] = useState("plans");

  const therapyPlans: TherapyPlan[] = [
    {
      id: "#PLN-4921",
      patient: "Ananya Kulkarni",
      patientInitials: "AK",
      doctor: "Dr. Sharma",
      therapyType: "Vamana Karma",
      duration: "14 Days",
      status: "active"
    },
    {
      id: "#PLN-4852",
      patient: "Rahul Mishra",
      patientInitials: "RM",
      doctor: "Dr. Iyer",
      therapyType: "Basti Karma",
      duration: "21 Days",
      status: "pending"
    },
    {
      id: "#PLN-4820",
      patient: "Sonia Jain",
      patientInitials: "SJ",
      doctor: "Dr. Mehta",
      therapyType: "Nasya Karma",
      duration: "7 Days",
      status: "completed"
    }
  ];

  const activeSessions: Session[] = [
    {
      id: 1,
      type: "Virechana Session",
      patient: "Vikram Roy",
      therapist: "Mohan S.",
      month: "Oct",
      day: 24,
      date: "Oct 24, 2023",
      timeStart: "10:30 AM",
      timeEnd: "12:00 PM",
      status: "in-progress",
      statusColor: "bg-emerald-500"
    },
    {
      id: 2,
      type: "Abhyanga Massage",
      patient: "Meera Devi",
      therapist: "Lakshmi P.",
      month: "Oct",
      day: 24,
      date: "Oct 24, 2023",
      timeStart: "02:15 PM",
      timeEnd: "03:00 PM",
      status: "scheduled",
      statusColor: "bg-amber-500"
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600";
      case "pending":
        return "bg-amber-100 dark:bg-amber-900/30 text-amber-600";
      case "completed":
        return "bg-slate-100 dark:bg-slate-800 text-slate-600";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-600";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-600";
      case "pending":
        return "bg-amber-600";
      case "completed":
        return "bg-slate-400";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fdfb] dark:bg-[#06130e]">
      <Sidebar activePage="Treatments" />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Plans Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#10b981]/10 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Plans</span>
                <span className="p-2 bg-[#10b981]/10 text-[#10b981] rounded-lg material-symbols-outlined">
                  assignment
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">124</p>
                <span className="text-xs font-bold text-emerald-500 flex items-center">
                  <span className="material-symbols-outlined text-xs">trending_up</span> +12%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Currently being managed</p>
            </div>

            {/* Sessions Today Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#10b981]/10 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Sessions Today</span>
                <span className="p-2 bg-[#10b981]/10 text-[#10b981] rounded-lg material-symbols-outlined">
                  calendar_today
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">42</p>
                <span className="text-xs font-bold text-emerald-500 flex items-center">
                  <span className="material-symbols-outlined text-xs">trending_up</span> +5%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Scheduled for today's roster</p>
            </div>

            {/* Completion Rate Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#10b981]/10 shadow-sm flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Completion Rate</span>
                <span className="p-2 bg-[#10b981]/10 text-[#10b981] rounded-lg material-symbols-outlined">
                  check_circle
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">98.5%</p>
                <span className="text-xs font-bold text-orange-500 flex items-center">
                  <span className="material-symbols-outlined text-xs">trending_down</span> -0.2%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Overall protocol adherence</p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            <div className="flex border-b border-[#10b981]/10 gap-8">
              <button
                onClick={() => setActiveTab("plans")}
                className={`border-b-2 px-4 py-2 text-sm font-bold flex items-center gap-2 transition-colors ${
                  activeTab === "plans"
                    ? "border-[#10b981] text-[#10b981]"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#10b981]"
                }`}
              >
                Therapy Plans
              </button>
              <button
                onClick={() => setActiveTab("sessions")}
                className={`border-b-2 px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${
                  activeTab === "sessions"
                    ? "border-[#10b981] text-[#10b981]"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#10b981]"
                }`}
              >
                Active Sessions
                <span className="bg-[#10b981]/20 text-[#10b981] text-[10px] px-1.5 py-0.5 rounded-full">
                  14
                </span>
              </button>
            </div>

            {/* Therapy Plans Tab */}
            {activeTab === "plans" && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#10b981]/10 overflow-hidden shadow-sm">
                <div className="px-6 py-4 flex items-center justify-between border-b border-[#10b981]/5">
                  <h3 className="text-slate-900 dark:text-white font-bold">Latest Therapy Plans</h3>
                  <button className="text-sm text-[#10b981] font-semibold flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-sm">add</span> New Plan
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Plan ID
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Therapy Type
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#10b981]/5">
                      {therapyPlans.map((plan) => (
                        <tr key={plan.id}>
                          <td className="px-6 py-4 text-sm font-mono text-slate-500 dark:text-slate-400">
                            {plan.id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                                {plan.patientInitials}
                              </div>
                              <span className="text-sm font-medium text-slate-900 dark:text-white">
                                {plan.patient}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            {plan.doctor}
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-[#10b981]/5 text-[#10b981] text-xs rounded-lg font-medium">
                              {plan.therapyType}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            {plan.duration}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full font-bold ${getStatusBadgeColor(
                                plan.status
                              )}`}
                            >
                              <span className={`size-1.5 rounded-full ${getStatusDotColor(plan.status)}`}></span>
                              {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-[#10b981] transition-colors">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* View All Button */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 text-center">
                  <button className="text-xs font-bold text-slate-500 hover:text-[#10b981] tracking-wider uppercase">
                    View All Plans
                  </button>
                </div>
              </div>
            )}

            {/* Active Sessions Tab */}
            {activeTab === "sessions" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Sessions</h3>
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-lg border border-[#10b981]/10 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-lg">filter_list</span>
                    </button>
                    <button className="p-1.5 rounded-lg border border-[#10b981]/10 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-lg">refresh</span>
                    </button>
                  </div>
                </div>

                {/* Session Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {activeSessions.map((session) => (
                    <div
                      key={session.id}
                      className={`bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border border-[#10b981]/10 shadow-sm flex justify-between items-center ${
                        session.status === "in-progress" ? "border-l-[#10b981]" : "border-l-amber-500"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`size-12 rounded-xl flex flex-col items-center justify-center ${
                          session.status === "in-progress"
                            ? "bg-[#10b981]/10"
                            : "bg-slate-100 dark:bg-slate-800"
                        }`}>
                          <span className={`text-[10px] font-bold uppercase ${
                            session.status === "in-progress"
                              ? "text-[#10b981]"
                              : "text-slate-400"
                          }`}>
                            {session.month}
                          </span>
                          <span className={`text-lg font-bold leading-tight ${
                            session.status === "in-progress"
                              ? "text-[#10b981]"
                              : "text-slate-500"
                          }`}>
                            {session.day}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {session.type}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Patient: {session.patient} • Therapist: {session.therapist}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-slate-400 font-medium">
                              {session.timeStart} - {session.timeEnd}
                            </span>
                            <span className={`px-1.5 py-0.5 ${session.statusColor} text-white text-[9px] rounded font-bold uppercase tracking-wider`}>
                              {session.status === "in-progress" ? "In Progress" : "Scheduled"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 text-[#10b981] hover:bg-[#10b981]/5 rounded-lg font-bold text-sm transition-colors">
                        {session.status === "in-progress" ? "Update" : "Reschedule"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
