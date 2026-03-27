"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";

interface ProtocolCard {
  id: string;
  title: string;
  patient: string;
  duration: string;
  status: "Active" | "Scheduled" | "Draft";
  icon: string;
  bgColor: string;
}

const recentProtocols: ProtocolCard[] = [
  {
    id: "1",
    title: "Detoxification Cycle",
    patient: "Mrs. Kamala Das",
    duration: "14 Days Program",
    status: "Active",
    icon: "spa",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  {
    id: "2",
    title: "Snehanam Routine",
    patient: "Rahul Varma",
    duration: "7 Days Program",
    status: "Scheduled",
    icon: "water_drop",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    id: "3",
    title: "Meditation & Recovery",
    patient: "Sarah Jensen",
    duration: "21 Days Program",
    status: "Draft",
    icon: "self_improvement",
    bgColor: "bg-teal-100 dark:bg-teal-900/20",
  },
];

export default function TherapyPlanPage() {
  const [selectedIntensity, setSelectedIntensity] = useState("MODERATE");
  const [formData, setFormData] = useState({
    patient: "Aarav Sharma - PID-9923",
    therapyType: "Snehanam (Oleation)",
    duration: "7",
    notes: "",
  });

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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/appointments">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/staff/therapy-plan">
            <span className="material-symbols-outlined">spa</span>
            <span className="text-sm">Therapy Plans</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/therapy-sessions">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapy Sessions</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/staff/doctors">
            <span className="material-symbols-outlined">person_in_circle</span>
            <span className="text-sm">Doctors</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-white/5 space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-white/5">
            <img alt="Staff Member" className="size-10 rounded-full object-cover border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3vX78aJ5gEZL9k4oRHLVEGbnEVOdLV7QnGsZTVIjanIGJJ2CARtjxu5RL-hDQLPSoemlBbjKNFrWRevvSVzb72mKxN9L0QvUYW6sEQU7HCOlK3YNGCZXCyaTr0AWWw3NGE0dmVwqsCkmWkp22hMQEUGWLdkELKtZrIliTL6unH38OWGdaypdvU965IfpFo3KDUG2KTB8ab_Zs0UcjpEYepnfuRWdIQE8hVdkXbRmiYokTXNJVYpgXLueNK25HkzNMbvV1bAH6tFEm" />
            <div className="flex flex-col overflow-hidden">
              <p className="text-xs font-bold truncate">Revati Singh</p>
              <p className="text-[10px] text-slate-500 font-medium">Therapy Coordinator</p>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md shadow-primary/10">
            <span className="material-symbols-outlined text-lg">add</span>
            New Plan
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between h-20 px-8 shrink-0">
          <div className="flex items-center gap-8 flex-1">
            <h1 className="font-bold text-xl tracking-tight text-primary">Panchakarma Management</h1>
            <nav className="flex gap-8">
              <Link className="font-semibold uppercase tracking-wider text-primary border-b-2 border-primary pb-1 text-sm" href="/staff/therapy-plan">
                Create Plan
              </Link>
              <Link className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">
                Session Monitoring
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-slate-400" style={{ fontSize: "20px" }}>search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-white/5 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64" placeholder="Search records..." type="text" />
            </div>
            <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border-2 border-primary">
              <img className="w-full h-full object-cover" alt="Doctor Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXTvZPtX4HpqRxnvcjUdJ-WyTZeMzWUt0KhQl1HXLAQqL_LojTKzL6IOywG7i3rEWVmFJRu9YRpmKT1aUjTVaqG_rzOaC1TPrew9kldq0AkP2mX_uGb4F3EYHASj2rWnLmzV8HJRLc3o9gh61PlKsQrrH_irYfTz3etOL2L2FKyGhM7vAtAsNXNZuY-2ZF6aRuLcTjyQK4Gxi2Pak7ypsv3X_ywYSawRrBumTeJ9dY_GSFMH5XBXd1HwS9x4e55bEAzYT4599IEeD1" />
            </div>
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-12 bg-background-light dark:bg-background-dark/95">
          <div className="max-w-6xl mx-auto">
            {/* Hero Header Section */}
            <section className="mb-12 flex justify-between items-end">
              <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Clinical Excellence</span>
                <h2 className="text-5xl font-bold text-primary leading-tight -tracking-widest">
                  New Therapy <span className="text-emerald-600 dark:text-emerald-400">Protocol.</span>
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                  Design a bespoke Ayurvedic journey by balancing doshas through traditional Prakriti analysis and modern monitoring techniques.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-primary font-semibold text-xs uppercase tracking-tighter">Live Session Count: 14</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Form Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column: Form Details */}
              <div className="col-span-12 lg:col-span-8 space-y-8">
                <div className="bg-white dark:bg-white/5 p-10 rounded-xl shadow-sm border border-slate-200 dark:border-white/10">
                  <form className="space-y-10">
                    {/* Patient Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Select Patient</label>
                        <div className="relative group">
                          <select 
                            value={formData.patient} 
                            onChange={(e) => setFormData({...formData, patient: e.target.value})}
                            className="w-full bg-slate-100 dark:bg-white/5 border-none rounded py-4 px-4 appearance-none text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary/20"
                          >
                            <option>Aarav Sharma - PID-9923</option>
                            <option>Meera Iyer - PID-4451</option>
                            <option>Vikram Seth - PID-1029</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" style={{ fontSize: "20px" }}>unfold_more</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Therapy Type</label>
                        <div className="relative group">
                          <select 
                            value={formData.therapyType}
                            onChange={(e) => setFormData({...formData, therapyType: e.target.value})}
                            className="w-full bg-slate-100 dark:bg-white/5 border-none rounded py-4 px-4 appearance-none text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary/20"
                          >
                            <option>Snehanam (Oleation)</option>
                            <option>Swedanam (Sudation)</option>
                            <option>Vamana (Emesis)</option>
                            <option>Virechana (Purgation)</option>
                            <option>Basti (Enema)</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" style={{ fontSize: "20px" }}>spa</span>
                        </div>
                      </div>
                    </div>

                    {/* Duration & Intensity */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Duration (Days)</label>
                        <input 
                          type="number" 
                          value={formData.duration}
                          onChange={(e) => setFormData({...formData, duration: e.target.value})}
                          className="w-full bg-slate-100 dark:bg-white/5 border-none rounded py-4 px-4 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary/20" 
                          placeholder="7" 
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Intensity Level</label>
                        <div className="flex items-center gap-4 py-3">
                          {["MILD", "MODERATE", "INTENSE"].map((level) => (
                            <button
                              key={level}
                              onClick={() => setSelectedIntensity(level)}
                              type="button"
                              className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                                selectedIntensity === level
                                  ? "bg-primary text-white"
                                  : "border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white"
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Clinical Notes */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Clinical Notes & Observations</label>
                      <textarea 
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-slate-100 dark:bg-white/5 border-none rounded py-4 px-4 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary/20 resize-none" 
                        placeholder="Document specific herbal oil requirements, dietary restrictions, and patient sensitivity notes here..." 
                        rows={6}
                      ></textarea>
                    </div>

                    {/* Form Action */}
                    <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                      <button 
                        type="button"
                        className="w-full py-5 rounded-xl bg-gradient-to-r from-primary to-emerald-700 text-white font-bold text-lg tracking-wide shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "24px", fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        Generate Therapy Schedule
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Contextual Info & Stats */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                {/* Patient Summary Card */}
                <div className="bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined" style={{ fontSize: "128px" }}>person</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 relative z-10">Patient Profile</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-emerald-100 text-sm font-medium">Primary Dosha</span>
                      <span className="bg-orange-500 px-3 py-1 rounded-full text-[10px] font-extrabold text-white uppercase tracking-widest">Pitta</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-emerald-100 text-sm font-medium">Last Session</span>
                      <span className="text-white text-sm font-bold">Oct 24, 2023</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-emerald-100 text-sm font-medium">Medical Flag</span>
                      <span className="text-emerald-200 text-sm font-bold">Hypertension</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 flex gap-4">
                    <button className="flex-1 py-2 bg-white/10 rounded text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">Full History</button>
                  </div>
                </div>

                {/* Guidelines Card */}
                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-xl border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>menu_book</span>
                    <h3 className="font-bold text-primary">Protocol Guidelines</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
                      <span className="material-symbols-outlined text-primary text-base" style={{ fontSize: "20px" }}>check_circle</span>
                      Ensure Swedanam follows Snehanam for optimal toxins release.
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
                      <span className="material-symbols-outlined text-primary text-base" style={{ fontSize: "20px" }}>check_circle</span>
                      Monitor Pitta levels daily during Vamana cycles.
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
                      <span className="material-symbols-outlined text-primary text-base" style={{ fontSize: "20px" }}>check_circle</span>
                      Avoid heavy meals 4 hours prior to therapy initiation.
                    </li>
                  </ul>
                </div>

                {/* Facility Availability Visualization */}
                <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                      <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-200 dark:text-slate-700" />
                      <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="364" strokeDashoffset="100" className="text-emerald-500" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-primary">72%</span>
                      <span className="text-[8px] uppercase font-extrabold text-slate-500 tracking-widest">Plan Capacity</span>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Facility Availability</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 px-4">The treatment wings are currently at 72% occupancy for the requested dates.</p>
                </div>
              </div>
            </div>

            {/* Recently Created Grid */}
            <section className="mt-20">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold text-primary tracking-tight">
                  Recent <span className="text-secondary">Protocols</span>
                </h3>
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                  View All Plans <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentProtocols.map((protocol) => (
                  <div key={protocol.id} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-lg ${protocol.bgColor} flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                        <span className="material-symbols-outlined" style={{ fontSize: "24px", fontVariationSettings: "'FILL' 1" }}>{protocol.icon}</span>
                      </div>
                      <span className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded text-[10px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{protocol.status}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{protocol.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Patient: {protocol.patient}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>calendar_month</span>
                      {protocol.duration}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
