'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface StaffNotification {
  id: string
  type: 'critical' | 'delay' | 'upcoming' | 'memo'
  title: string
  subtitle: string
  message: string
  timeAgo: string
  icon: string
  borderColor: string
  bgColor: string
  iconBgColor: string
  actions: { label: string; style: string }[]
}

const notifications: StaffNotification[] = [
  {
    id: '1',
    type: 'critical',
    title: 'Critical Status',
    subtitle: 'Critical: Dr. Meera Varma is now Unavailable',
    message: 'Reason: Emergency Leave. Impacting 8 appointments today.',
    timeAgo: '2 mins ago',
    icon: 'emergency_home',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-50',
    iconBgColor: 'bg-red-100',
    actions: [
      { label: 'View Schedule', style: 'bg-gray-100 text-[#066046] hover:bg-gray-200' },
      { label: 'Reassign Doctor', style: 'bg-[#066046] text-white hover:bg-[#055239]' },
    ],
  },
  {
    id: '2',
    type: 'delay',
    title: 'Operational Delay',
    subtitle: 'Shirodhara Session #402 for Julian Reed delayed by 20 mins',
    message: 'Resource: Room 104 turnaround delay.',
    timeAgo: '15 mins ago',
    icon: 'schedule',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50',
    iconBgColor: 'bg-orange-100',
    actions: [
      { label: 'Acknowledge', style: 'bg-gray-100 text-[#066046] hover:bg-gray-200' },
      { label: 'Adjust Slot', style: 'bg-orange-500 text-white hover:bg-orange-600' },
    ],
  },
  {
    id: '3',
    type: 'upcoming',
    title: 'Upcoming Session',
    subtitle: 'Ayurvedic Consultation: Amara Vance starting in 22 mins',
    message: 'Location: Room 302 | Practitioner: Dr. Anand',
    timeAgo: '22 mins ago',
    icon: 'calendar_today',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-50',
    iconBgColor: 'bg-green-100',
    actions: [
      { label: 'View History', style: 'bg-gray-100 text-[#066046] hover:bg-gray-200' },
      { label: 'Pre-check Room', style: 'bg-[#066046]/20 text-[#066046] hover:bg-[#066046]/30' },
    ],
  },
  {
    id: '4',
    type: 'memo',
    title: 'Internal Memo',
    subtitle: 'New instruction: Vata-balancing oils',
    message: 'Clinical Protocol Update by Chief Medical Officer.',
    timeAgo: '1 hour ago',
    icon: 'description',
    borderColor: 'border-slate-300',
    bgColor: 'bg-slate-50',
    iconBgColor: 'bg-slate-200',
    actions: [
      { label: 'Dismiss', style: 'bg-gray-100 text-slate-600 hover:bg-gray-200' },
      { label: 'Read Protocol', style: 'bg-teal-600 text-white hover:bg-teal-700' },
    ],
  },
]

export default function StaffNotificationsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  const handleBack = () => {
    router.back()
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === 'all') return true
    if (activeTab === 'upcoming') return notif.type === 'upcoming'
    if (activeTab === 'delays') return notif.type === 'delay'
    if (activeTab === 'availability') return notif.type === 'critical'
    return true
  })

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
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">event_available</span>
            <span className="text-sm font-medium">Doctor Availability</span>
          </Link>
          <Link
            href="/staff/notifications"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
          >
            <span className="material-symbols-outlined text-[22px]">notifications_active</span>
            <span className="text-sm font-medium">Alerts</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-[#066046]/10">
          <div className="flex items-center gap-3 px-2 py-2">
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border border-[#066046]/20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0apnuuA-ZcDEnNEit2QGz1ud6kNtCDdHeuit0jLEjluBV5SYiG08-u7VhCdKI6aQb5tu61qIM6LoK54xz2uPT2TavKc706JvcoTEV3lOOkfwqVTz0GY9Lq-rsfIftEmuI3TYG3DX6bqghq4Z4Ab97flo62kE7aOq6AP80qszLBYZdNvH6wntx_6aEz13XdEicxt6OXScbAw_0afTex_p6eQTAr3hJQyt_Bpj_mXLWtZouECifZQ4dl3FV7G862Ac6R9-OFkDgFwJq')",
              }}
            />
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
            <h2 className="text-xl font-bold text-slate-800">Notification Hub</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#066046]/60 text-[20px]">
                search
              </span>
              <input
                className="pl-10 pr-4 py-2 bg-[#066046]/5 border border-[#066046]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#066046] w-64"
                placeholder="Search operations..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 rounded-lg bg-[#066046]/5 flex items-center justify-center text-[#066046] hover:bg-[#066046] hover:text-white transition-all">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#066046]/5 flex items-center justify-center text-[#066046] hover:bg-[#066046] hover:text-white transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Notifications Content */}
        <div className="p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={handleBack}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#066046] hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notification Hub</h1>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'all'
                      ? 'bg-[#066046] text-white shadow-lg shadow-[#066046]/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'upcoming'
                      ? 'bg-[#066046] text-white shadow-lg shadow-[#066046]/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Upcoming Sessions
                </button>
                <button
                  onClick={() => setActiveTab('delays')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'delays'
                      ? 'bg-[#066046] text-white shadow-lg shadow-[#066046]/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Delays
                </button>
                <button
                  onClick={() => setActiveTab('availability')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'availability'
                      ? 'bg-[#066046] text-white shadow-lg shadow-[#066046]/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Doctor Availability
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`bg-white p-6 rounded-xl border-l-4 ${notif.borderColor} flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 rounded-full ${notif.iconBgColor} flex items-center justify-center flex-shrink-0`}>
                        <span
                          className={`material-symbols-outlined ${
                            notif.type === 'critical' ? 'text-red-600' : notif.type === 'delay' ? 'text-orange-600' : notif.type === 'upcoming' ? 'text-green-600' : 'text-slate-600'
                          }`}
                        >
                          {notif.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                          notif.type === 'critical' ? 'text-red-600' : notif.type === 'delay' ? 'text-orange-600' : notif.type === 'upcoming' ? 'text-green-600' : 'text-slate-600'
                        }`}>
                          {notif.title}
                        </p>
                        <h3 className="text-lg font-bold text-slate-900">{notif.subtitle}</h3>
                        <p className="text-slate-600 text-sm mt-1">{notif.message}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{notif.timeAgo}</span>
                  </div>
                  <div className="flex gap-3 justify-end">
                    {notif.actions.map((action, idx) => (
                      <button
                        key={idx}
                        className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${action.style}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600">Today's Alert Frequency</p>
                <div className="mt-4 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#066046] w-2/3" />
                </div>
                <p className="mt-2 text-xs font-medium text-[#066046]">High activity recorded in Morning Shift</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600">Avg. Acknowledge Time</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">4.2m</p>
                <p className="text-xs text-green-600">8% faster than yesterday</p>
              </div>
              <div className="bg-[#066046]/10 p-6 rounded-xl border border-[#066046]/20">
                <p className="text-sm text-[#066046]/80">Unresolved Critical</p>
                <p className="mt-2 text-3xl font-bold text-[#066046]">01</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
