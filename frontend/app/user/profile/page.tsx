'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Improve Sleep Quality', description: 'Consistently achieving 7.5 hours of restful sleep.', status: 'completed', progress: 100, streak: 7 },
    { id: 2, title: 'Stress Management', description: 'Daily Pranayama and 10min mindfulness meditation.', status: 'inprogress', progress: 80, streak: null },
    { id: 3, title: 'Weight Balancing', description: 'Maintain Sattvic diet and reduce refined sugars.', status: 'inprogress', progress: 45, streak: null },
  ]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Navigation */}
      <aside
        className="w-64 bg-white border-r border-gray-200 flex flex-col h-full sticky top-0"
        data-purpose="main-navigation"
      >
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#064e3b] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#064e3b] leading-none">Panchakarma</h1>
            <p className="text-[10px] text-[#6b7280]">Wellness Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/dashboard"
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
            <span className="font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/appointments"
          >
            <span className="material-symbols-outlined text-xl">timeline</span>
            <span className="font-medium">My Appointments</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/treatments"
          >
            <span className="material-symbols-outlined text-xl">spa</span>
            <span className="font-medium">My Treatments</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/diet-guide"
          >
            <span className="material-symbols-outlined text-xl">nutrition</span>
            <span className="font-medium">Diet Guide</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/billing"
          >
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span className="font-medium">Billing</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/profile"
          >
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="font-semibold">Profile</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/settings"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              alt="Arjun Sharma"
              className="w-10 h-10 rounded-full border border-gray-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmKePd_EOHIFqJO0SL2uvWMll02td7LKCwX-_Ix0n3-77juB9V83uqLbNqvMczpW5BzmjVtnYPRzc7uc8G1PjcsgGBWk1YpF1u5ISTTWHcbM50Fa32kAq26NNP7KGQ-Llkx-d2bbaULWFLn8-DJAYlUvgvkHa6_3V8pzZL4uyU33WIt1caMYb7-7C1KFx80n0GsFbzwKo9e094MCiX6Y5MIgq-23ltgVNFOF86OPP9-2JbC9O91IOr2Ewr3aDMhBaiMTmF2uRqNuk"
            />
            <div>
              <p className="text-sm font-bold text-[#1f2937]">Arjun Sharma</p>
              <p className="text-[10px] text-[#6b7280] uppercase">Vata-Pitta Prakriti</p>
            </div>
          </div>
          <button className="text-[#6b7280] hover:text-[#064e3b] transition-colors">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {/* Header with Profile Info */}
        <header className="bg-gradient-to-r from-[#064e3b] to-emerald-800 rounded-3xl p-6 mb-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                alt="Arjun Sharma"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXf5Fee4b5NpP57ydQe8uzfF_coyy92Xe7xfXE_zgE-LkV5BBNhi2HeZuU5FAxqO1ovPBQu-1V2MwUchyvUM-alWxshumjyjpVr9BbOjY2ruBsGBm_9PvEpVI2Wg77w7pyrEHGHwpo_XhD31sclugf2NMY_jg7iMxVXjVdMSl_mMCX2Yz8OQIOenTJOIxaMv2eiVzGyWKlTmT1bRCMG6QOm_36g89YWLi-Blsf-ytx4P5bDvbMgU0a76G2BZ1cu5Qd7fUHOdgrv26q"
              />
              <span className="absolute -bottom-1 -right-1 bg-white text-[#064e3b] w-6 h-6 rounded-lg flex items-center justify-center text-xs shadow-sm font-bold">✓</span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">Arjun Sharma</h2>
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Vata-Pitta</span>
              </div>
              <p className="text-emerald-100/80 text-sm mt-1">45 Years • New Delhi • Your wellness journey is 65% complete this month!</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="bg-white/10 hover:bg-white/20 transition-all px-4 py-2 rounded-xl text-sm font-medium border border-white/10">
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
            <button className="bg-emerald-400 hover:bg-emerald-300 transition-all text-[#064e3b] px-5 py-2 rounded-xl text-sm font-bold shadow-lg">
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>
        </header>

        {/* Wellness Goals Section */}
        <section className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-slate-800">Wellness Goals</h3>
              <p className="text-gray-500 mt-2">Small steps lead to great health. Keep going, Arjun!</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#064e3b] mb-1 uppercase tracking-wider">Overall Progress</p>
              <div className="flex items-center gap-4">
                <div className="w-48 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[72%] h-full bg-[#10b981] rounded-full"></div>
                </div>
                <span className="text-2xl font-bold text-slate-800">72%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goal 1 - Completed */}
            <div className="p-6 rounded-3xl border-2 border-gray-100 bg-gray-50/30 hover:border-[#10b981]/30 transition-all">
              <div className="flex items-start gap-5">
                <input defaultChecked className="w-8 h-8 rounded-xl border-gray-300 text-[#10b981] focus:ring-[#10b981] cursor-pointer mt-1" type="checkbox" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <label className="text-xl font-bold text-slate-800 cursor-pointer line-through text-gray-400">Improve Sleep Quality</label>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-lg">DONE</span>
                  </div>
                  <p className="text-gray-500 mt-1">Consistently achieving 7.5 hours of restful sleep.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-emerald-300 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-emerald-200 border-2 border-white"></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">7-day streak</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Goal 2 - In Progress 80% */}
            <div className="p-6 rounded-3xl border-2 border-[#10b981] bg-[#ecfdf5]/20 transition-all">
              <div className="flex items-start gap-5">
                <input className="w-8 h-8 rounded-xl border-gray-300 text-[#10b981] focus:ring-[#10b981] cursor-pointer mt-1" type="checkbox" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <label className="text-xl font-bold text-slate-800 cursor-pointer">Stress Management</label>
                    <span className="text-[#064e3b] text-[10px] font-bold">80% COMPLETE</span>
                  </div>
                  <p className="text-gray-500 mt-1">Daily Pranayama and 10min mindfulness meditation.</p>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4">
                    <div className="w-[80%] h-full bg-[#10b981] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goal 3 - In Progress 45% */}
            <div className="p-6 rounded-3xl border-2 border-gray-100 bg-gray-50/30 transition-all">
              <div className="flex items-start gap-5">
                <input className="w-8 h-8 rounded-xl border-gray-300 text-[#10b981] focus:ring-[#10b981] cursor-pointer mt-1" type="checkbox" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <label className="text-xl font-bold text-slate-800 cursor-pointer">Weight Balancing</label>
                    <span className="text-gray-400 text-[10px] font-bold uppercase">In Progress</span>
                  </div>
                  <p className="text-gray-500 mt-1">Maintain Sattvic diet and reduce refined sugars.</p>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4">
                    <div className="w-[45%] h-full bg-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Goal Button */}
            <button className="p-6 rounded-3xl border-2 border-dashed border-gray-300 hover:border-[#10b981] hover:bg-[#ecfdf5]/10 transition-all flex flex-col items-center justify-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#10b981] group-hover:text-white transition-all flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined">add</span>
              </div>
              <span className="font-bold text-gray-400 group-hover:text-[#10b981]">Add New Wellness Goal</span>
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Key Health Metrics */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                  <span className="material-symbols-outlined">notes_medical</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Key Health Metrics</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Primary Dosha */}
                <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
                    <span className="material-symbols-outlined">air</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">Primary Dosha</p>
                    <h4 className="text-lg font-bold text-sky-900">Vata-Pitta</h4>
                  </div>
                </div>

                {/* Blood Group */}
                <div className="bg-red-50 p-5 rounded-2xl border border-red-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-200">
                    <span className="material-symbols-outlined">water_drop</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Blood Group</p>
                    <h4 className="text-lg font-bold text-red-900">O Positive (O+)</h4>
                  </div>
                </div>
              </div>

              {/* Medical Notes */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Important Medical Notes</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                    <span className="material-symbols-outlined text-gray-400 block mb-1">bedtime</span>
                    <p className="text-xs font-bold text-gray-700">Insomnia</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                    <span className="material-symbols-outlined text-gray-400 block mb-1">accessibility</span>
                    <p className="text-xs font-bold text-gray-700">Back Pain</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 text-center">
                    <span className="material-symbols-outlined text-amber-500 block mb-1">warning</span>
                    <p className="text-xs font-bold text-amber-800">Nut Allergy</p>
                  </div>
                  <button className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <span className="text-[#10b981] font-bold text-sm">+ Add</span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Emergency Contact & Tips */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <section className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Emergency Contact</h3>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Priya Sharma"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo1172rQInBpCSiyS_dKbBrQwlu_R0bvtdjV_0PZ3pQ_H24U5oemOJhx1380zxHfHGygRYtDmuxcj97gR2Dq0WrQWSCwXMCP6QqP8YdUkH0p6kDPFk0NNWJ0_VQnWvi4W26aDS0lFvAukSHGs2WgFpYUmOdn1FNlbX8zal8WHh0DzGUVWcYYrusEm2tUlN7h1bgQZzxzkZUEKZ8b5bWBPwygji0o1psmBc7dHqWAcMRCVDoeODH5AkeCRpL-QyM-yTivZuhGokD775"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
                    <p className="text-[10px] text-gray-500 font-medium">Spouse (Wife)</p>
                  </div>
                </div>
                <a className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-gray-100 hover:border-red-200 transition-colors" href="tel:+919876500001">
                  <span className="text-sm font-bold text-slate-700">+91 98765 00001</span>
                  <span className="material-symbols-outlined text-red-500">phone</span>
                </a>
              </div>
            </section>

            {/* Vata Tip */}
            <div className="bg-[#064e3b] rounded-3xl p-6 text-white border border-emerald-700 shadow-lg">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-emerald-300">lightbulb</span>
              </div>
              <p className="font-bold text-lg leading-tight">Vata Tip</p>
              <p className="text-sm text-emerald-100/80 mt-2">Arjun, try sipping warm herbal tea every hour to keep your Vata dosha grounded during busy workdays.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
