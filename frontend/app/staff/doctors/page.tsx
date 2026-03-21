'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DoctorAvailabilityPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const doctors = [
    {
      id: 'DOC-1042',
      name: 'Dr. Sarah Jenkins',
      specialization: 'Cardiologist',
      availability: '09:00 AM - 05:00 PM',
      nextSlot: '10:30 AM',
      status: 'Available',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrJYqoKzrTIy16C_k74Y1X4G4OkX8MDuxk9WNAP-c03wh2A1mOxAws9AI5rGDBGhSHsWvOOsdqTf_ftFXAgM5d3Mmveep167i8BYqbf9yuK1J25U_48FLX_-sbfiqEB4VBMeyoOSZEoKV6jdBA6Af-JaHS_7b6_MHaGY2af3BMoa24Zj3ZyLA6NiHkcPd-OI96W6-uZ6vlX09zjlcDjANrDxInphd_N8R9SERt7zl_8M01jnV3WFbCPULLukiSwwOH70oH2n8J9nm',
    },
    {
      id: 'DOC-2184',
      name: 'Dr. Michael Chen',
      specialization: 'Neurologist',
      availability: '10:00 AM - 06:00 PM',
      nextSlot: '02:15 PM',
      status: 'Busy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9jaTHfSp230HAMms9YVcwVUyGzveZBlJYmO-ClYifHnpxh383qUUHeBK3Gzwc3oslWBnM2yZpD4nDbpyRKmbN1R--S1IO-QRloJ4sUVi9CMo-cmj55aZN3YBYkR6CUrU0mRQlIv2_rpv7eL9Q81ML3_UpD_sC0_-XJ-OA6qxY8XOEy0vlH1_EohfIv20mZPnPyrFxAF6NawQrrXpPBncidlNzQ6ZQD11GtiGzDEXhmgER5FgAA6fsAPJJ-qNhqLpq0SJLh8KjYUDA',
    },
    {
      id: 'DOC-0932',
      name: 'Dr. Emily Wong',
      specialization: 'Pediatrician',
      availability: '08:00 AM - 04:00 PM',
      nextSlot: '-',
      status: 'Off Duty',
      image: null,
    },
    {
      id: 'DOC-3401',
      name: 'Dr. James Smith',
      specialization: 'Orthopedist',
      availability: '09:00 AM - 05:00 PM',
      nextSlot: '11:00 AM',
      status: 'Available',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrJYqoKzrTIy16C_k74Y1X4G4OkX8MDuxk9WNAP-c03wh2A1mOxAws9AI5rGDBGhSHsWvOOsdqTf_ftFXAgM5d3Mmveep167i8BYqbf9yuK1J25U_48FLX_-sbfiqEB4VBMeyoOSZEoKV6jdBA6Af-JaHS_7b6_MHaGY2af3BMoa24Zj3ZyLA6NiHkcPd-OI96W6-uZ6vlX09zjlcDjANrDxInphd_N8R9SERt7zl_8M01jnV3WFbCPULLukiSwwOH70oH2n8J9nm',
    },
  ]

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Available':
        return {
          badge: 'bg-[#bef5e8] text-[#035544]',
          dot: 'bg-[#10b981]',
        }
      case 'Busy':
        return {
          badge: 'bg-[#fef3c7] text-[#92400e]',
          dot: 'bg-[#d97706]',
        }
      case 'Off Duty':
        return {
          badge: 'bg-gray-200 text-gray-600',
          dot: 'bg-gray-400',
        }
      default:
        return {
          badge: 'bg-gray-200 text-gray-600',
          dot: 'bg-gray-400',
        }
    }
  }

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
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
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
          <Link
            href="/staff/doctors"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
          >
            <span className="material-symbols-outlined text-[22px]">event_available</span>
            <span className="text-sm font-medium">Doctor Availability</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-[#066046]/10">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-10 h-10 rounded-full bg-[#066046]/20 bg-cover bg-center border border-[#066046]/20" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0apnuuA-ZcDEnNEit2QGz1ud6kNtCDdHeuit0jLEjluBV5SYiG08-u7VhCdKI6aQb5tu61qIM6LoK54xz2uPT2TavKc706JvcoTEV3lOOkfwqVTz0GY9Lq-rsfIftEmuI3TYG3DX6bqghq4Z4Ab97flo62kE7aOq6AP80qszLBYZdNvH6wntx_6aEz13XdEicxt6OXScbAw_0afTex_p6eQTAr3hJQyt_Bpj_mXLWtZouECifZQ4dl3FV7G862Ac6R9-OFkDgFwJq')"}}></div>
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#f5f8f7]">
        {/* Header */}
        <header className="h-16 border-b border-[#066046]/10 bg-white flex items-center justify-between px-8 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-slate-800">Doctor Availability</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#066046]/60 text-[20px]">search</span>
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#066046]/5 border border-[#066046]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#066046] w-64"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 rounded-lg bg-[#066046]/5 flex items-center justify-center text-[#066046] hover:bg-[#066046] hover:text-white transition-all">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#066046]/5 flex items-center justify-center text-[#066046] hover:bg-[#066046] hover:text-white transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Metrics Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#066046]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Specialists
                </h3>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-slate-900">42</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-md mb-1">
                  +3 this month
                </span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#066046]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Currently Available
                </h3>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-green-700">18</span>
                <span className="text-sm font-medium text-slate-600 mb-1">/ 42 Active</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#066046]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Next Slot Available
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-slate-900">10:30 AM</span>
                <span className="text-sm font-medium text-slate-600">
                  Dr. Sarah Jenkins (Cardiology)
                </span>
              </div>
            </div>
          </section>

          {/* Table Section */}
          <section className="bg-white rounded-xl shadow-sm border border-[#066046]/10 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold text-slate-900">Doctor Directory</h3>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                    All (42)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-50 text-xs font-medium text-green-700 cursor-pointer hover:bg-green-100 transition-colors">
                    Available (18)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  title="Filter"
                  className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button
                  title="Export"
                  className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Doctor
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Specialization
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Availability
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Next Slot
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {doctors.map((doctor, index) => {
                    const statusStyles = getStatusStyles(doctor.status)
                    const isHighlighted = doctor.status === 'Available'

                    return (
                      <tr
                        key={index}
                        className={`${
                          isHighlighted ? 'bg-green-50' : ''
                        } hover:bg-slate-50 transition-colors`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              {doctor.image ? (
                                <img
                                  src={doctor.image}
                                  alt={doctor.name}
                                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 border-2 border-white shadow-sm">
                                  <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                              )}
                              <div
                                className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${statusStyles.dot} rounded-full border border-white`}
                              ></div>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                {doctor.name}
                              </div>
                              <div className="text-xs text-slate-600 mt-0.5">
                                ID: #{doctor.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                            {doctor.specialization}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-600">
                          {doctor.availability}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-slate-900">
                          {doctor.nextSlot}
                        </td>
                        <td className="py-4 px-6">
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles.badge}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${statusStyles.dot}`}></span>
                            {doctor.status}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          {doctor.status === 'Available' ? (
                            <button className="text-[#066046] hover:text-[#055239] font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors">
                              Book
                            </button>
                          ) : (
                            <button className="text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                              View
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="text-sm text-slate-600">Showing 1-4 of 42 doctors</span>
              <div className="flex items-center gap-2">
                <button
                  disabled
                  className="p-1 rounded-md text-slate-600 hover:bg-slate-200 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <span className="text-sm font-medium text-slate-900 px-2">1 / 11</span>
                <button className="p-1 rounded-md text-slate-600 hover:bg-slate-200">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
