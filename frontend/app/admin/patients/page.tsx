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
    <div className="flex h-screen overflow-hidden bg-[#F8FAFB]">
      <Sidebar activePage="Patients" />
      <main className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        <Header />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F8FAFB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {/* Header Actions */}
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Patients</h1>
                <p className="text-xs md:text-sm text-slate-500 mt-1">Manage and view all registered patient records</p>
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg border-0 cursor-pointer whitespace-nowrap">
                <span className="material-symbols-outlined text-[20px] mr-2">add</span>
                Add Patient
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 mb-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                  <input
                    type="text"
                    placeholder="Filter by name or ID..."
                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white min-w-[120px] outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Dosha Type</option>
                  <option value="vata">Vata</option>
                  <option value="pitta">Pitta</option>
                  <option value="kapha">Kapha</option>
                </select>
                <select className="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white min-w-[100px] outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button className="p-2 border border-slate-200 rounded-lg bg-white cursor-pointer hover:bg-slate-50">
                  <span className="material-symbols-outlined text-[20px] text-slate-600">refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 md:px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Patient ID</th>
                    <th className="px-4 md:px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 md:px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Age/Gender</th>
                    <th className="px-4 md:px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Dosha Type</th>
                    <th className="px-4 md:px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Medical History</th>
                    <th className="px-4 md:px-6 py-3 text-right text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-4 md:px-6 py-3 text-xs md:text-sm font-medium text-slate-600">{patient.id}</td>
                      <td className="px-4 md:px-6 py-3">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[11px] font-bold text-blue-700 flex-shrink-0">
                            {patient.initials}
                          </div>
                          <span className="text-xs md:text-sm font-semibold text-slate-800">{patient.name}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-3 text-xs md:text-sm text-slate-600">{patient.age} / {patient.gender}</td>
                      <td className="px-4 md:px-6 py-3">
                        <span className="inline-block px-2 md:px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold bg-amber-100 text-amber-800">
                          {patient.dosha}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-3 text-xs md:text-sm text-slate-500 max-w-[150px] md:max-w-[200px]">
                        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                          {patient.history}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-3 text-right">
                        <button className="text-emerald-600 hover:text-emerald-700 text-xs md:text-sm font-semibold bg-transparent border-0 cursor-pointer">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-4 md:px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-xs md:text-sm text-slate-500">Showing 1 to 5 of 48 entries</span>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs md:text-sm text-slate-400 bg-white cursor-not-allowed">Previous</button>
                <button className="px-3 py-1.5 bg-emerald-600 border border-emerald-600 rounded-md text-xs md:text-sm text-white cursor-pointer">1</button>
                <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs md:text-sm text-slate-600 bg-white cursor-pointer hover:bg-slate-50">2</button>
                <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs md:text-sm text-slate-600 bg-white cursor-pointer hover:bg-slate-50">3</button>
                <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs md:text-sm text-slate-600 bg-white cursor-pointer hover:bg-slate-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
