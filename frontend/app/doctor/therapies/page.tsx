"use client";

import { useState } from "react";
import Link from "next/link";

interface TherapyPlan {
  id: number;
  title: string;
  patient: string;
  duration: string;
  status: "Active" | "Scheduled" | "Draft";
  icon: string;
  color: string;
}

interface Patient {
  id: string;
  name: string;
  pid: string;
  primaryDosha: string;
  lastSession: string;
  medicalFlag?: string;
}

interface FormData {
  patient: string;
  therapyType: string;
  duration: string;
  intensity: "MILD" | "MODERATE" | "INTENSE";
  clinicalNotes: string;
}

export default function Therapies() {
  const [formData, setFormData] = useState<FormData>({
    patient: "Aarav Sharma - PID-9923",
    therapyType: "Snehanam (Oleation)",
    duration: "7",
    intensity: "MODERATE",
    clinicalNotes: ""
  });

  const [selectedPatient, setSelectedPatient] = useState<Patient>({
    id: "1",
    name: "Aarav Sharma",
    pid: "PID-9923",
    primaryDosha: "Pitta",
    lastSession: "Oct 24, 2023",
    medicalFlag: "Hypertension"
  });

  const patients: Patient[] = [
    {
      id: "1",
      name: "Aarav Sharma",
      pid: "PID-9923",
      primaryDosha: "Pitta",
      lastSession: "Oct 24, 2023",
      medicalFlag: "Hypertension"
    },
    {
      id: "2",
      name: "Meera Iyer",
      pid: "PID-4451",
      primaryDosha: "Vata",
      lastSession: "Oct 20, 2023",
      medicalFlag: "Arthritis"
    },
    {
      id: "3",
      name: "Vikram Seth",
      pid: "PID-1029",
      primaryDosha: "Kapha",
      lastSession: "Oct 15, 2023",
      medicalFlag: "Obesity"
    }
  ];

  const therapyTypes = [
    "Snehanam (Oleation)",
    "Swedanam (Sudation)",
    "Vamana (Emesis)",
    "Virechana (Purgation)",
    "Basti (Enema)"
  ];

  const recentProtocols: TherapyPlan[] = [
    {
      id: 1,
      title: "Detoxification Cycle",
      patient: "Mrs. Kamala Das",
      duration: "14 Days Program",
      status: "Active",
      icon: "spa",
      color: "bg-[#95d3ba]"
    },
    {
      id: 2,
      title: "Snehanam Routine",
      patient: "Rahul Varma",
      duration: "7 Days Program",
      status: "Scheduled",
      icon: "water_drop",
      color: "bg-[#ffdcc3]"
    },
    {
      id: 3,
      title: "Meditation & Recovery",
      patient: "Sarah Jensen",
      duration: "21 Days Program",
      status: "Draft",
      icon: "self_improvement",
      color: "bg-[#6ffbbe]"
    }
  ];

  const handlePatientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setFormData({ ...formData, patient: selectedValue });
    
    const patient = patients.find(p => `${p.name} - ${p.pid}` === selectedValue);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIntensityChange = (intensity: "MILD" | "MODERATE" | "INTENSE") => {
    setFormData({ ...formData, intensity });
  };

  const handleGenerateSchedule = () => {
    console.log("Generate schedule with:", formData);
    alert("Therapy schedule generated successfully!");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-[#e7f5f1] text-[#003527]";
      case "Scheduled":
        return "bg-[#fff3e0] text-[#904d00]";
      case "Draft":
        return "bg-[#f5f5f5] text-[#191c1d]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDoshaColor = (dosha: string) => {
    switch (dosha) {
      case "Pitta":
        return "bg-orange-100 text-orange-700";
      case "Vata":
        return "bg-blue-100 text-blue-700";
      case "Kapha":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
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
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa] flex flex-col">
        {/* Top Navigation Bar */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search records..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors" title="Voice Dictation">
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-12">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <nav className="mb-12 flex gap-8 border-b border-slate-200 pb-4">
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-[#003527] border-b-2 border-[#003527] pb-2 -mb-6 transition-all hover:text-[#003527]">
              Create Plan
            </a>
            <Link href="/doctor/therapies/sessions" className="text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-[#003527] transition-all">
              Session Monitoring
            </Link>
          </nav>
          {/* Hero Header Section */}
          <section className="mb-12 flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-[#904d00] font-bold tracking-widest text-xs uppercase mb-2 block">
                Clinical Excellence
              </span>
              <h2 className="text-5xl font-bold text-[#003527] leading-tight -tracking-widest">
                New Therapy <span className="text-[#31c98f]">Protocol.</span>
              </h2>
              <p className="mt-4 text-[#404944] font-normal leading-relaxed text-lg">
                Design a bespoke Ayurvedic journey by balancing doshas through traditional
                Prakriti analysis and modern monitoring techniques.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-[#b0f0d6] rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#003527] animate-pulse"></div>
                  <span className="text-[#002117] font-semibold text-xs uppercase tracking-tighter">
                    Live Session Count: 14
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Form Bento Grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Form Details */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className="bg-white p-10 rounded-xl shadow-sm border border-[#bfc9c3]/15">
                <form className="space-y-10">
                  {/* Patient Selection & Therapy Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#0b513d]">
                        Select Patient
                      </label>
                      <div className="relative group">
                        <select
                          value={formData.patient}
                          onChange={handlePatientChange}
                          className="w-full bg-[#f3f4f5] border-none rounded py-4 px-4 appearance-none text-[#191c1d] font-medium focus:ring-0 focus:outline-none"
                        >
                          {patients.map((p) => (
                            <option key={p.id} value={`${p.name} - ${p.pid}`}>
                              {p.name} - {p.pid}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707974]">
                          unfold_more
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#0b513d]">
                        Therapy Type
                      </label>
                      <div className="relative group">
                        <select
                          name="therapyType"
                          value={formData.therapyType}
                          onChange={handleFormChange}
                          className="w-full bg-[#f3f4f5] border-none rounded py-4 px-4 appearance-none text-[#191c1d] font-medium focus:ring-0 focus:outline-none"
                        >
                          {therapyTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707974]">
                          spa
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Duration & Intensity */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#0b513d]">
                        Duration (Days)
                      </label>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleFormChange}
                        placeholder="7"
                        className="w-full bg-[#f3f4f5] border-none rounded py-4 px-4 text-[#191c1d] font-medium focus:ring-0 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#0b513d]">
                        Intensity Level
                      </label>
                      <div className="flex items-center gap-4 py-3">
                        <button
                          type="button"
                          onClick={() => handleIntensityChange("MILD")}
                          className={`flex-1 py-2 rounded-full border text-xs font-bold transition-all ${
                            formData.intensity === "MILD"
                              ? "bg-[#003527] text-white border-[#003527]"
                              : "border-[#bfc9c3] text-[#191c1d] hover:bg-[#003527] hover:text-white"
                          }`}
                        >
                          MILD
                        </button>
                        <button
                          type="button"
                          onClick={() => handleIntensityChange("MODERATE")}
                          className={`flex-1 py-2 rounded-full border text-xs font-bold transition-all ${
                            formData.intensity === "MODERATE"
                              ? "bg-[#003527] text-white border-[#003527]"
                              : "border-[#bfc9c3] text-[#191c1d] hover:bg-[#003527] hover:text-white"
                          }`}
                        >
                          MODERATE
                        </button>
                        <button
                          type="button"
                          onClick={() => handleIntensityChange("INTENSE")}
                          className={`flex-1 py-2 rounded-full border text-xs font-bold transition-all ${
                            formData.intensity === "INTENSE"
                              ? "bg-[#003527] text-white border-[#003527]"
                              : "border-[#bfc9c3] text-[#191c1d] hover:bg-[#003527] hover:text-white"
                          }`}
                        >
                          INTENSE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Notes */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0b513d]">
                      Clinical Notes & Observations
                    </label>
                    <textarea
                      name="clinicalNotes"
                      value={formData.clinicalNotes}
                      onChange={handleFormChange}
                      placeholder="Document specific herbal oil requirements, dietary restrictions, and patient sensitivity notes here..."
                      rows={6}
                      className="w-full bg-[#f3f4f5] border-none rounded py-4 px-4 text-[#191c1d] font-medium focus:ring-0 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Form Action */}
                  <div className="pt-6 border-t border-[#edeeef]">
                    <button
                      type="button"
                      onClick={handleGenerateSchedule}
                      className="w-full py-5 rounded-xl bg-gradient-to-r from-[#003527] to-[#064e3b] text-white font-bold text-lg tracking-wide shadow-xl shadow-[#003527]/20 hover:scale-[1.01] transition-transform active:scale-95 flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        auto_awesome
                      </span>
                      Generate Therapy Schedule
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Contextual Info & Stats */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Patient Summary Card */}
              <div className="bg-[#003527] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-8xl">person</span>
                </div>
                <h3 className="font-bold text-xl mb-4 relative z-10">Patient Profile</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#80bea6] text-sm font-medium">Primary Dosha</span>
                    <span className={`${getDoshaColor(selectedPatient.primaryDosha)} px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest`}>
                      {selectedPatient.primaryDosha}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#80bea6] text-sm font-medium">Last Session</span>
                    <span className="text-white text-sm font-bold">{selectedPatient.lastSession}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#80bea6] text-sm font-medium">Medical Flag</span>
                    <span className="text-[#4edea3] text-sm font-bold">
                      {selectedPatient.medicalFlag || "None"}
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-4 flex gap-4">
                  <button className="flex-1 py-2 bg-white/10 rounded text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
                    Full History
                  </button>
                </div>
              </div>

              {/* Protocol Guidelines Card */}
              <div className="bg-[#f3f4f5] p-8 rounded-xl border border-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#003527]">menu_book</span>
                  <h3 className="font-bold text-[#003527]">Protocol Guidelines</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-[#404944] font-medium leading-tight">
                    <span className="material-symbols-outlined text-[#003527] text-base">check_circle</span>
                    Ensure Swedanam follows Snehanam for optimal toxins release.
                  </li>
                  <li className="flex gap-3 text-sm text-[#404944] font-medium leading-tight">
                    <span className="material-symbols-outlined text-[#003527] text-base">check_circle</span>
                    Monitor Pitta levels daily during Vamana cycles.
                  </li>
                  <li className="flex gap-3 text-sm text-[#404944] font-medium leading-tight">
                    <span className="material-symbols-outlined text-[#003527] text-base">check_circle</span>
                    Avoid heavy meals 4 hours prior to therapy initiation.
                  </li>
                </ul>
              </div>

              {/* Facility Availability */}
              <div className="bg-white p-8 rounded-xl border border-[#bfc9c3]/15 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="58"
                      fill="transparent"
                      stroke="#edeeef"
                      strokeWidth="8"
                    ></circle>
                    <circle
                      cx="64"
                      cy="64"
                      r="58"
                      fill="transparent"
                      stroke="#4edea3"
                      strokeWidth="8"
                      strokeDasharray="364"
                      strokeDashoffset="100"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-[#003527]">72%</span>
                    <span className="text-[8px] uppercase font-extrabold text-[#bfc9c3] tracking-widest">
                      Plan Capacity
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#191c1d] mb-2">Facility Availability</h4>
                <p className="text-xs text-[#404944] px-4">
                  The treatment wings are currently at 72% occupancy for the requested dates.
                </p>
              </div>
            </div>
          </div>

          {/* Recently Created Grid */}
          <section className="mt-20">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-bold text-[#003527] tracking-tight">
                Recent <span className="text-[#904d00]">Protocols</span>
              </h3>
              <button className="text-[#003527] font-bold text-sm flex items-center gap-2 hover:underline">
                View All Plans
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProtocols.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white p-6 rounded-xl border border-[#bfc9c3]/15 hover:shadow-xl hover:shadow-[#003527]/5 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${plan.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-[#003527]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {plan.icon}
                      </span>
                    </div>
                    <span className={`${getStatusColor(plan.status)} px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest`}>
                      {plan.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-[#191c1d] text-lg mb-1">{plan.title}</h4>
                  <p className="text-sm text-[#404944] mb-4">Patient: {plan.patient}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#003527]">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    {plan.duration}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        </div>

      {/* Visual Texture Element */}
      <div className="fixed bottom-0 right-0 w-1/3 h-1/2 pointer-events-none -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#003527] to-transparent"></div>
      </div>
    </main>
    </div>
  );
}
