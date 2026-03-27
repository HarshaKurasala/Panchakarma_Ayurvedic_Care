"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AnalyticsData {
  total_patients: number;
  new_patients_month: number;
  recovery_rate: number;
  revenue_month: number;
}

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [dateRange, setDateRange] = useState("month");

  useEffect(() => {
    // Mock analytics data
    setAnalytics({
      total_patients: 156,
      new_patients_month: 24,
      recovery_rate: 87,
      revenue_month: 542000
    });
  }, []);

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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/therapies">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/doctor/analytics">
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
              <input
                className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
                placeholder="Search analytics..."
                type="text"
              />
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
        <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark/95">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Analytics & Reports</h1>
              <p className="text-slate-500 text-sm mt-1">Clinical and business insights</p>
            </div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20"
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Patients</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{analytics?.total_patients}</h3>
              <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                12% increase
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">New Patients (Month)</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{analytics?.new_patients_month}</h3>
              <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                8% increase
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="size-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Recovery Rate</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{analytics?.recovery_rate}%</h3>
              <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                3% increase
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="size-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">attach_money</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Revenue (Month)</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">₹{analytics?.revenue_month?.toLocaleString()}</h3>
              <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                15% increase
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart */}
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Monthly Revenue Trend</h3>
              <div className="h-64 bg-slate-50 dark:bg-white/5 rounded-lg flex items-end justify-around gap-2 p-4">
                {[45, 52, 38, 65, 42, 78, 65, 72, 58, 85, 92, 88].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t" style={{ height: `${value}%` }}></div>
                    <span className="text-xs text-slate-500 group-hover:text-primary transition-colors">M{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-primary"></span>
                  <span className="text-slate-600 dark:text-slate-400">Revenue</span>
                </div>
              </div>
            </div>

            {/* Patient Status Distribution */}
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Patient Status Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Active Treatment</p>
                    <span className="text-sm font-bold text-primary">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Improving</p>
                    <span className="text-sm font-bold text-emerald-600">20%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Recovered</p>
                    <span className="text-sm font-bold text-blue-600">10%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Follow-up</p>
                    <span className="text-sm font-bold text-orange-600">5%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-600 h-full rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Therapies */}
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Top Therapies</h3>
              <div className="space-y-3">
                {[
                  { name: "Basti Therapy", count: 45, color: "bg-primary" },
                  { name: "Abhyanga", count: 38, color: "bg-emerald-600" },
                  { name: "Shirodhara", count: 32, color: "bg-blue-600" },
                  { name: "Nasya", count: 28, color: "bg-orange-600" }
                ].map((therapy, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`size-3 rounded-full ${therapy.color}`}></div>
                      <p className="text-sm text-slate-900 dark:text-white font-semibold">{therapy.name}</p>
                    </div>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{therapy.count} uses</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Avg. Treatment Duration</p>
                  <p className="text-lg font-bold text-primary">12.5 days</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Patient Satisfaction</p>
                  <p className="text-lg font-bold text-emerald-600">4.8/5.0</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Clinic Utilization</p>
                  <p className="text-lg font-bold text-blue-600">82%</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Avg. Revenue/Patient</p>
                  <p className="text-lg font-bold text-orange-600">₹3,475</p>
                </div>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined">download</span>
              Export Report
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
