'use client';

import { useState } from 'react';

export default function PatientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const patients = [
    {
      id: '#PAC-9042',
      name: 'Rajesh Kumar',
      initials: 'RK',
      age: 42,
      gender: 'Male',
      dosha: 'Vata-Pitta',
      doshaColor: 'amber',
      history: 'Chronic lower back pain, Insomnia, Migraine issues',
      avatarColor: 'blue'
    },
    {
      id: '#PAC-9045',
      name: 'Sunita Patel',
      initials: 'SP',
      age: 35,
      gender: 'Female',
      dosha: 'Kapha',
      doshaColor: 'emerald',
      history: 'Joint pain, Weight management, Seasonal allergies',
      avatarColor: 'rose'
    },
    {
      id: '#PAC-8991',
      name: 'Amit Iyer',
      initials: 'AI',
      age: 29,
      gender: 'Male',
      dosha: 'Pitta',
      doshaColor: 'orange',
      history: 'Digestive disorders, Skin inflammation, Stress',
      avatarColor: 'indigo'
    },
    {
      id: '#PAC-9051',
      name: 'Meera Devi',
      initials: 'MD',
      age: 58,
      gender: 'Female',
      dosha: 'Vata',
      doshaColor: 'amber',
      history: 'Arthritis, Anxiety, Post-treatment recovery',
      avatarColor: 'teal'
    },
    {
      id: '#PAC-9102',
      name: 'Vikram Singh',
      initials: 'VS',
      age: 51,
      gender: 'Male',
      dosha: 'Kapha-Pitta',
      doshaColor: 'emerald',
      history: 'Respiratory issues, Sinusitis, High blood pressure',
      avatarColor: 'purple'
    }
  ];

  return (
    <div className="flex min-h-screen overflow-hidden bg-[#f9fafb]">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Brand Logo */}
          <div className="p-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">Panchakarma</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="/admin/dashboard">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Dashboard
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-lg" href="/admin/patients">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Patients
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Doctors
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Appointments
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Treatments
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Therapies
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Staff
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Billing
            </a>
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Reports
            </a>
          </nav>

          <div className="p-4 border-t border-slate-200">
            <a className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50" href="#">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Settings
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">
          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
              <input className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Search for patients, records..." type="text" />
            </div>
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">Dr. Arjun Sharma</p>
                <p className="text-xs text-slate-500 text-right">Administrator</p>
              </div>
              <img alt="Admin Profile" className="h-9 w-9 rounded-full object-cover border-2 border-emerald-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-6 md:p-8 flex-1 space-y-6">
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Patients</h1>
              <p className="text-sm text-slate-500">Manage and view all registered patient records</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Add Patient
            </button>
          </div>

          {/* Filters Section */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
                <input className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Filter by name or ID..." type="text" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <select className="text-sm border-slate-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 min-w-[120px]">
                <option value="">Dosha Type</option>
                <option value="vata">Vata</option>
                <option value="pitta">Pitta</option>
                <option value="kapha">Kapha</option>
                <option value="vata-pitta">Vata-Pitta</option>
              </select>
              <select className="text-sm border-slate-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 min-w-[120px]">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select className="text-sm border-slate-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 min-w-[120px]">
                <option value="">Status</option>
                <option value="active">Active Treatment</option>
                <option value="completed">Completed</option>
                <option value="new">New Patient</option>
              </select>
              <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg border border-slate-200" title="Clear Filters">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient ID</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Age/Gender</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Dosha Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Medical History</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">{patient.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-${patient.avatarColor}-100 flex items-center justify-center text-${patient.avatarColor}-700 font-bold text-xs`}>
                            {patient.initials}
                          </div>
                          <span className="text-sm font-semibold text-slate-800">{patient.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{patient.age} / {patient.gender}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${patient.doshaColor}-100 text-${patient.doshaColor}-800`}>
                          {patient.dosha}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        <span className="truncate block max-w-[200px]" title={patient.history}>
                          {patient.history.substring(0, 35)}...
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold">View Profile</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-500">Showing 1 to 5 of 48 entries</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-400 cursor-not-allowed">Previous</button>
                <button className="px-3 py-1 bg-emerald-600 text-white border border-emerald-600 rounded-md text-sm">1</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50">2</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50">3</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-200 bg-white text-center">
          <p className="text-sm text-slate-500">© 2024 Panchakarma Ayurvedic Care. All Rights Reserved.</p>
        </footer>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
}
