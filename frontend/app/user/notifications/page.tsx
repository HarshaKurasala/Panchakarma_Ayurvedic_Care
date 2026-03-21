'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Notification {
  id: string
  type: 'appointment' | 'therapy' | 'precaution' | 'instruction'
  title: string
  message: string
  timeAgo: string
  isNew: boolean
  icon: string
  doctor?: string
  date?: string
  actions?: boolean
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'appointment',
    title: 'Upcoming Abhyanga Session',
    message: 'Your follow-up consultation with Dr. Sunita is confirmed for tomorrow at 10:00 AM.',
    timeAgo: 'Arrived 2 minutes ago',
    isNew: true,
    icon: 'calendar_today',
    doctor: 'Dr. Sunita',
    actions: true,
  },
]

export default function NotificationsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  const handleBack = () => {
    router.back()
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === 'all') return true
    if (activeTab === 'appointments') return notif.type === 'appointment'
    if (activeTab === 'therapy') return notif.type === 'therapy'
    if (activeTab === 'precautions') return notif.type === 'precaution'
    if (activeTab === 'instructions') return notif.type === 'instruction'
    return true
  })

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
          <Link
            href="/user/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">grid_view</span>
            Dashboard
          </Link>
          <Link
            href="/user/appointments"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            My Appointments
          </Link>
          <Link
            href="/user/treatments"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">medical_services</span>
            My Treatments
          </Link>
          <Link
            href="/user/diet-guide"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">restaurant</span>
            Diet Guide
          </Link>
          <Link
            href="/user/billing"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">receipt_long</span>
            Billing
          </Link>
          <Link
            href="/user/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">person</span>
            Profile
          </Link>
          <Link
            href="/user/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqm1h73otI5BGfYes9ePJ98cbSfGQVarlz1dqZ47dLZZX6GKe_s660slW9jbHEy3D-rmNna-c5tv4x2Rj15O-fLo4O-s_rbM71A-o82kIDeL1g3OKLoMYT4OsLzUQJUryhabpachccd8Q5Rfy4FHh3IoIwRJ-goF02WzgdhauQx7ceI8fRmBybVo69yfpN91dcgtz6trWi-EcnQQoAaUSqSAcBfO2UwKNMx9EKoZOCLAuEk-BtrP7VuO-yrWeygjWtsEwatRs8AKBP')"}}></div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Arjun Mehta</p>
              <p className="text-xs text-slate-500 truncate uppercase tracking-tighter">Patient ID: #EV-9902</p>
            </div>
            <button 
              onClick={() => router.push("/user/login")}
              className="text-slate-400 hover:text-red-600 transition-colors"
              title="Logout"
            >
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
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Notifications</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 text-[20px]">search</span>
              <input
                className="pl-10 pr-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
                placeholder="Search notifications..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Notifications Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark/95">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={handleBack}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Notifications</h1>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-slate-800 rounded-2xl w-fit border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'all'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'appointments'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  Appointments
                </button>
                <button
                  onClick={() => setActiveTab('therapy')}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'therapy'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  Therapy
                </button>
                <button
                  onClick={() => setActiveTab('precautions')}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'precautions'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  Precautions
                </button>
                <button
                  onClick={() => setActiveTab('instructions')}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'instructions'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  Instructions
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-8">
              {filteredNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="group relative bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  {/* New Badge */}
                  {notif.isNew && (
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        New Message
                      </span>
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-md shadow-orange-500/40 animate-pulse" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {notif.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {notif.title}
                      </h3>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {notif.timeAgo}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                      {notif.message.includes('Dr.') ? (
                        <>
                          Your follow-up consultation with <span className="font-bold text-primary">{notif.doctor}</span> is
                          confirmed for tomorrow at 10:00 AM.
                        </>
                      ) : (
                        notif.message
                      )}
                    </p>

                    {/* Action Buttons */}
                    {notif.actions && (
                      <div className="pt-6 flex flex-wrap gap-4">
                        <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                          View Details
                        </button>
                        <button className="px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-primary rounded-xl font-bold text-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
                          Reschedule
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {filteredNotifications.length === 0 ? (
                <div className="pt-12 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-slate-100 dark:bg-slate-800 relative">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 text-4xl">spa</span>
                    <div className="absolute -bottom-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                        Zero Pending
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-primary/80 mb-2">You&apos;re all caught up!</h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    The above is your only active notification. Enjoy the serenity of an empty inbox.
                  </p>
                </div>
              ) : (
                <div className="pt-12 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-slate-100 dark:bg-slate-800 relative">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 text-4xl">spa</span>
                    <div className="absolute -bottom-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                        Zero Pending
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-primary/80 mb-2">You&apos;re all caught up!</h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Your sanctuary is quiet. We&apos;ll let you know as soon as there&apos;s something that needs your attention.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
