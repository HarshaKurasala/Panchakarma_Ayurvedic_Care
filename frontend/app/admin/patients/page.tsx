'use client';

import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function PatientsPage() {

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
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#F8FAFB' }}>
      <Sidebar activePage="Patients" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#F8FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
      </main>
    </div>
  );
}
