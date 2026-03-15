"use client";

export default function StaffDashboard() {
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
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20" href="#">
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-sm font-medium">Patients</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">calendar_today</span>
            <span className="text-sm font-medium">Appointments</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">description</span>
            <span className="text-sm font-medium">Therapy Plans</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">exercise</span>
            <span className="text-sm font-medium">Therapy Sessions</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">rate_review</span>
            <span className="text-sm font-medium">Feedback</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="#">
            <span className="material-symbols-outlined text-[22px]">medical_services</span>
            <span className="text-sm font-medium">Doctors</span>
          </a>
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
            <h2 className="text-xl font-bold text-slate-800">Operational Overview</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#066046]/60 text-[20px]">search</span>
              <input className="pl-10 pr-4 py-2 bg-[#066046]/5 border border-[#066046]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#066046] w-64" placeholder="Search patients, sessions..." type="text"/>
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
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">+12%</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Total Patients</p>
              <h3 className="text-2xl font-bold mt-1">1,284</h3>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-[#066046]/30 shadow-lg relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <span className="flex items-center gap-1 text-[#066046] text-xs font-bold bg-[#066046]/10 px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#066046]"></span> Live Status
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Today&apos;s Appointments</p>
              <div className="flex items-center justify-between mt-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#066046] bg-[#066046]/5" style={{boxShadow: '0 0 0 4px rgba(6, 96, 70, 0.1), 0 0 15px rgba(6, 96, 70, 0.2)'}}>
                  <h3 className="text-3xl font-black text-[#066046]">24</h3>
                </div>
                <button className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-[11px] font-black uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm shadow-orange-200">
                  6 Pending
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                  <span className="material-symbols-outlined">clinical_notes</span>
                </div>
                <span className="text-red-600 text-sm font-bold bg-red-50 px-2 py-1 rounded">-2%</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Active Therapy Plans</p>
              <h3 className="text-2xl font-bold mt-1">86</h3>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <span className="text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">+18%</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Completed Sessions</p>
              <h3 className="text-2xl font-bold mt-1">312</h3>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Therapy Progress Trends */}
            <div className="xl:col-span-2 bg-white p-8 rounded-xl border border-[#066046]/10 shadow-sm flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Therapy Progress Trends</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-3xl font-extrabold text-[#066046]">88%</p>
                    <span className="text-sm text-slate-500">Avg. Success Rate</span>
                    <span className="text-green-600 text-xs font-bold ml-2">↑ 4.5% last 30 days</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-semibold bg-[#066046] text-white rounded">Weekly</button>
                  <button className="px-3 py-1 text-xs font-semibold text-slate-500 rounded border border-transparent hover:border-slate-200 transition-all">Monthly</button>
                </div>
              </div>
              <div className="flex-1 relative h-64">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#066046" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#066046" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,150 Q50,130 100,160 T200,80 T300,120 T400,40 T500,100 L500,200 L0,200 Z" fill="url(#chartGradient)"></path>
                  <path d="M0,150 Q50,130 100,160 T200,80 T300,120 T400,40 T500,100" fill="none" stroke="#066046" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="flex justify-between mt-4 px-2">
                  <span className="text-xs font-bold text-slate-400">Week 1</span>
                  <span className="text-xs font-bold text-slate-400">Week 2</span>
                  <span className="text-xs font-bold text-slate-400">Week 3</span>
                  <span className="text-xs font-bold text-slate-400">Week 4</span>
                </div>
              </div>
            </div>

            {/* Pending Actions */}
            <div className="bg-white p-6 rounded-xl border border-[#066046]/10 shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">assignment_late</span>
                  Pending Actions
                </h4>
                <span className="text-[10px] bg-red-100 text-red-700 font-black px-2 py-0.5 rounded uppercase">4 Critical</span>
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3 p-4 rounded-lg border-l-4 border-l-red-500 border border-red-100 bg-red-50/50 hover:bg-red-50 transition-colors cursor-pointer group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-slate-900">Approve Therapy Plan #842</p>
                      <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold uppercase whitespace-nowrap">Action Required</span>
                    </div>
                    <p className="text-xs text-slate-600">Patient: Rahul S. • <span className="font-bold text-red-600">Due in 2 hrs</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border-l-4 border-l-orange-500 border border-orange-100 bg-orange-50/50 hover:bg-orange-50 transition-colors cursor-pointer group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-slate-900">Emergency Reschedule</p>
                      <span className="text-[9px] bg-orange-500 text-white px-1.5 py-0.5 rounded font-bold uppercase whitespace-nowrap">Due Soon</span>
                    </div>
                    <p className="text-xs text-slate-600">Dr. Rajesh Kumar • 3rd Jan slot</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-[#066046]/5 bg-[#066046]/5 hover:bg-[#066046]/10 transition-colors cursor-pointer group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-[#066046] transition-colors">Update Patient Feedback</p>
                    <p className="text-xs text-slate-500 mt-1">Session: Abhyanga Therapy</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-[#066046]/5 bg-[#066046]/5 hover:bg-[#066046]/10 transition-colors cursor-pointer group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-[#066046] transition-colors">Medicine Inventory Check</p>
                    <p className="text-xs text-slate-500 mt-1">Section: Herbal Oils</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full py-2.5 text-sm font-bold text-[#066046] border border-[#066046]/20 rounded-lg hover:bg-[#066046] hover:text-white transition-all">
                View All Tasks
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Patient Recovery Analytics */}
            <div className="bg-white p-8 rounded-xl border border-[#066046]/10 shadow-sm">
              <div className="mb-6">
                <h4 className="text-lg font-bold">Patient Recovery Analytics</h4>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-extrabold text-[#066046]">92%</p>
                  <span className="text-sm text-slate-500">Recovery Rate</span>
                  <span className="text-green-600 text-xs font-bold ml-2">↑ 2.1% last 6 months</span>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 items-end h-64 px-4">
                {[70, 85, 65, 90, 75, 95].map((height, index) => (
                  <div key={index} className="flex flex-col gap-2 items-center">
                    <div className="w-full bg-[#066046]/20 rounded-t-lg relative" style={{height: '140px'}}>
                      <div className="absolute bottom-0 w-full bg-[#066046] rounded-t-lg" style={{height: `${height}%`}}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Availability */}
            <div className="bg-white rounded-xl border border-[#066046]/10 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-[#066046]/10 flex justify-between items-center">
                <h4 className="text-lg font-bold">Doctor Availability</h4>
                <button className="text-sm text-[#066046] font-semibold flex items-center gap-1 hover:underline">
                  View Detailed Report <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left">
                  <thead className="bg-[#066046]/5 text-slate-500 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Doctor Name</th>
                      <th className="px-6 py-4">Specialization</th>
                      <th className="px-6 py-4 text-center">Load</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#066046]/5">
                    <tr className="hover:bg-[#066046]/5 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp3lv-PEkFBR39mfLODwjkh1CgqgCxEtpUHbCvSge02cNjH4eXobN7GO3kYhC-C2NPD6OiYhNYXnX7VLpLeLKSkC4rSxvhRGkUMUN0akBvA-NBjHH5t6RyqN1Ht0ISyBLBe3Z_ANSkkVy0GDcVMwobHVo2uyGfyklKTpmJyz_cuId6sXmELWpmuN6nmFsJiu7_spUXlAml6hnXESss14R_oYvTH_C4Bo3hiR_nrAyW13w8r-Vg6Ih7aMYtQIIuk9Bf9LjdNuDoVVAL')"}}></div>
                        <span className="font-medium text-sm">Dr. Rajesh Kumar</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Ayurvedic Specialist</td>
                      <td className="px-6 py-4 text-sm font-semibold text-center">12</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#066046]/5 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArWlFhadX_8Qb43LY_XDqNe4R2XvR67WkyPzD8nlg8bqfDxgwzTJA4bopVFmYUiyYtDwqeBdkqM7TTkrS6y1tnsUbGuexVrrZ24OiXrJwB612Atet0xoqJpecEBOEEEu0IubLqUXL5FoW1GYdh7xNe1_da6SoOACMi45buTp4wnuLu-wvnUYwHM-47OAAFJOhXUU0QsqXNNCCH3sBQfrKkUHgQ9irgFTSa5TWQcFt9b5OujyVoM2a2fLyVK1GdunFrBAE38zCZMV3O')"}}></div>
                        <span className="font-medium text-sm">Dr. Meera Varma</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Panchakarma Expert</td>
                      <td className="px-6 py-4 text-sm font-semibold text-center">8</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase">Busy</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#066046]/5 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0R5HuCALsb0Lj5RKEhP4QsXmZtlEteyN5-dvuiTAMQlBZJqrjjNqnX7pubY3Ou0NsY-No7pzmo3Y4gEytC9bjgtEx5pP0LRMsQqZbFxLMt2i2jXFCxNWT4sAQ95u6ftvuc9DsETNk3HGsSWFCwp0PcAmC9pmazHcqgBc9rcEu3kYFrZZngsb_KuoZOkftzciiUDTV2-iY3mGEQFO99An4SvkSUldbvQKRHYCH-ynjLl8_aGMTNbnS_NPG2bs_kl4Fty3Ao3xeerH')"}}></div>
                        <span className="font-medium text-sm">Dr. Amit Shah</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">Internal Medicine</td>
                      <td className="px-6 py-4 text-sm font-semibold text-center">10</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Available</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
