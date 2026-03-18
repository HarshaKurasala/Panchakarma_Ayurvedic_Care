"use client";

import { useEffect, useState } from "react";

export default function UserDashboard() {
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
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/appointments">
            <span className="material-symbols-outlined">calendar_today</span>
            My Appointments
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/treatments">
            <span className="material-symbols-outlined">medical_services</span>
            My Treatments
          </a>
          <div className="relative group">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/diet-guide">
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
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">receipt_long</span>
            Billing
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>
        
        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqm1h73otI5BGfYes9ePJ98cbSfGQVarlz1dqZ47dLZZX6GKe_s660slW9jbHEy3D-rmNna-c5tv4x2Rj15O-fLo4O-s_rbM71A-o82kIDeL1g3OKLoMYT4OsLzUQJUryhabpachccd8Q5Rfy4FHh3IoIwRJ-goF02WzgdhauQx7ceI8fRmBybVo69yfpN91dcgtz6trWi-EcnQQoAaUSqSAcBfO2UwKNMx9EKoZOCLAuEk-BtrP7VuO-yrWeygjWtsEwatRs8AKBP')"}}></div>
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
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Namaste, Arjun</h2>
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
              Book Session
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark/95">
          <div>
            <p className="text-slate-500 text-sm">Welcome back to your healing sanctuary.</p>
          </div>

        {/* Hero Section */}
        <section className="mb-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#066046] via-[#044a36] to-[#022e22] p-1 shadow-2xl">
          <div className="relative bg-black/10 rounded-[1.4rem] p-8 md:p-10 text-white flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Today's Wellness Focus
              </div>
              <h3 className="text-4xl font-black mb-4 leading-tight">Elevate Your Inner Calm</h3>
              <p className="text-emerald-50/70 text-lg leading-relaxed mb-8 max-w-2xl">
                Arjun, your <span className="text-emerald-300 font-bold underline decoration-emerald-500/30 text-xl">Vata dosha</span> is showing slight elevation today due to seasonal changes. To restore balance, prioritize grounding activities and nourishing warmth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-emerald-300 text-2xl">restaurant</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-200/60 uppercase tracking-widest mb-1">Diet Recommendation</p>
                    <p className="text-base font-medium">Warm soups &amp; cooked root vegetables for dinner to ground your energy.</p>
                  </div>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-emerald-300 text-2xl">self_improvement</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-200/60 uppercase tracking-widest mb-1">Mindful Action</p>
                    <p className="text-base font-medium">15 mins Nadi Shodhana Pranayama at sunset to balance the nervous system.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-64 h-64 border-4 border-white/10 rounded-full relative shrink-0">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="material-symbols-outlined text-[140px]">spa</span>
              </div>
              <div className="text-center z-10">
                <p className="text-[48px] font-black leading-none">84%</p>
                <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mt-1">Harmony Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Upcoming Sessions</span>
              <span className="material-symbols-outlined text-primary text-lg">event</span>
            </div>
            <p className="text-xl font-bold">2 Sessions</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Active Treatment</span>
              <span className="material-symbols-outlined text-blue-600 text-lg">healing</span>
            </div>
            <p className="text-xl font-bold">Abhyanga</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Treatment History</span>
              <span className="material-symbols-outlined text-orange-600 text-lg">task_alt</span>
            </div>
            <p className="text-xl font-bold">12 Total</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Due Amount</span>
              <span className="material-symbols-outlined text-red-600 text-lg">payments</span>
            </div>
            <p className="text-xl font-bold">₹4,500</p>
          </div>
        </div>

        {/* Activity Feed and Billing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Activity Feed */}
          <div className="lg:col-span-8">
            <section className="bg-white dark:bg-slate-800 rounded-3xl border border-primary/5 shadow-sm overflow-hidden flex flex-col h-[520px]">
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 sticky top-0 z-10">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  Activity &amp; Treatment Feed
                </h3>
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-700/50 p-1 rounded-lg">
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md bg-white dark:bg-slate-800 shadow-sm text-primary">All Activity</button>
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md text-slate-400 hover:bg-white dark:hover:bg-slate-800">Scheduled</button>
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md text-slate-400 hover:bg-white dark:hover:bg-slate-800">History</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{scrollbarWidth: 'thin'}}>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Upcoming Schedule</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 text-primary shrink-0">
                        <span className="text-[10px] font-bold uppercase">Oct</span>
                        <span className="text-lg font-black leading-none">24</span>
                      </div>
                      <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm">Shirodhara - Stress Relief</h5>
                            <p className="text-xs text-slate-500 mt-0.5">10:00 AM • Dr. Varma • Session 1/3</p>
                          </div>
                          <button className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/5 rounded-full hover:bg-primary/10">Reschedule</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 text-primary shrink-0">
                        <span className="text-[10px] font-bold uppercase">Oct</span>
                        <span className="text-lg font-black leading-none">26</span>
                      </div>
                      <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm">Panchakarma Detox Consultation</h5>
                            <p className="text-xs text-slate-500 mt-0.5">02:30 PM • Dr. Ananya</p>
                          </div>
                          <button className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/5 rounded-full hover:bg-primary/10">Reschedule</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Completed Treatments</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 shrink-0">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                      </div>
                      <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm">Abhyanga Oil Massage</h5>
                            <p className="text-xs text-slate-500 mt-0.5">Completed on Oct 20 • 60 min session</p>
                          </div>
                          <button className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 shrink-0">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                      </div>
                      <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm">Udwarthanam Therapy</h5>
                            <p className="text-xs text-slate-500 mt-0.5">Completed on Oct 18 • 45 min session</p>
                          </div>
                          <button className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 shrink-0">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                      </div>
                      <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm">Basti Therapy</h5>
                            <p className="text-xs text-slate-500 mt-0.5">Completed on Oct 15 • 30 min session</p>
                          </div>
                          <button className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Billing Summary */}
          <div className="lg:col-span-4">
            <section className="bg-white dark:bg-slate-800 rounded-3xl border border-primary/5 shadow-sm overflow-hidden flex flex-col h-[520px]">
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 sticky top-0 z-10">
                <h3 className="text-md font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">receipt_long</span>
                  Billing Summary
                </h3>
                <button className="text-[10px] font-bold text-primary hover:underline">History</button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-6" style={{scrollbarWidth: 'thin'}}>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-0.5">Unpaid Balance</p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">₹4,500</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:shadow-lg hover:shadow-primary/20 transition-all mt-2">
                    Pay Now
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Invoices</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 border border-transparent hover:border-slate-100 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-500 text-sm">description</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold">INV-042</p>
                          <p className="text-[10px] text-slate-400">Oct 15</p>
                        </div>
                      </div>
                      <p className="text-[11px] font-bold">₹1,200</p>
                    </div>
                    <div className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 border border-transparent hover:border-slate-100 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-500 text-sm">description</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold">INV-038</p>
                          <p className="text-[10px] text-slate-400">Oct 08</p>
                        </div>
                      </div>
                      <p className="text-[11px] font-bold">₹3,400</p>
                    </div>
                    <div className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 border border-transparent hover:border-slate-100 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-500 text-sm">description</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold">INV-031</p>
                          <p className="text-[10px] text-slate-400">Sep 28</p>
                        </div>
                      </div>
                      <p className="text-[11px] font-bold">₹2,100</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
