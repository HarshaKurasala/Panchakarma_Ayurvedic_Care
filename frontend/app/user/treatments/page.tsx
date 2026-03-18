'use client';

export default function TreatmentsPage() {
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
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/treatments"
          >
            <span className="material-symbols-outlined text-xl">spa</span>
            <span className="font-semibold">My Treatments</span>
          </a>
          <a
            className="flex items-center justify-between p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="#"
          >
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-xl">nutrition</span>
              <span className="font-medium">Diet Guide</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 font-bold italic">
              i
            </div>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span className="font-medium">Billing</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="font-medium">Profile</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="#"
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
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b]">My Treatment Plan</h2>
            <p className="text-[#6b7280] mt-1">Tracking your journey to holistic balance and rejuvenation.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm relative text-gray-600 hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="flex items-center space-x-2 bg-[#064e3b] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all">
              <span className="material-symbols-outlined">add</span>
              <span>Book Session</span>
            </button>
          </div>
        </header>

        {/* Therapy Plan Overview */}
        <section className="bg-[#064e3b] rounded-3xl p-10 text-white mb-10 flex flex-col md:flex-row justify-between relative overflow-hidden shadow-lg border border-[#064e3b]">
          <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
              Active Therapy Plan
            </div>
            <h3 className="text-3xl font-bold mb-4 leading-tight">
              7-Day Panchakarma <br /> Detox Journey
            </h3>
            <p className="text-emerald-100 text-base mb-8 max-w-2xl">
              Deep cleansing and cellular rejuvenation focusing on pacifying Vata Dosha through traditional Ayurvedic therapies and specialized diet.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex-1 min-w-[180px] border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Current Phase</span>
                </div>
                <p className="text-lg font-bold">Phase 2: Snehana</p>
                <p className="text-sm text-emerald-100/70 mt-1">Oleation & Internal Lubrication</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex-1 min-w-[180px] border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Timeline</span>
                </div>
                <p className="text-lg font-bold">Day 4 of 7</p>
                <p className="text-sm text-emerald-100/70 mt-1">Next: Phase 3 Swedana (Oct 28)</p>
              </div>
            </div>
          </div>

          {/* Progress Circle */}
          <div className="hidden md:flex items-center justify-center relative md:w-1/3">
            <div className="w-56 h-56 border-[14px] border-white/10 rounded-full flex flex-col items-center justify-center relative">
              <div
                className="absolute inset-0 border-[14px] border-emerald-400 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)' }}
              ></div>
              <p className="text-5xl font-black relative z-10">57%</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mt-1 text-emerald-200 relative z-10">Plan Progress</p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Treatment Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Treatment Timeline Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-bold text-[#064e3b] flex items-center">
                  <span className="material-symbols-outlined mr-2">timeline</span>
                  Treatment Timeline
                </h4>
                <div className="flex gap-3 text-xs font-medium">
                  <span className="flex items-center text-[#6b7280]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>Completed
                  </span>
                  <span className="flex items-center text-[#6b7280]">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200 mr-2"></span>Scheduled
                  </span>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-5 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
                {/* Completed Item 1 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <span className="material-symbols-outlined text-5xl text-white str">check</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-[#1f2937]">Initial Consultation & Pulse Diagnosis</h5>
                      <p className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">Oct 20, 2023 • 10:00 AM</p>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        Prakriti analysis confirmed Vata predominance with seasonal imbalances. Base plan established.
                      </p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                      Report Ready
                    </span>
                  </div>
                </div>

                {/* Completed Item 2 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <span className="material-symbols-outlined text-5xl text-white">check</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-[#1f2937]">Abhyanga (Herbal Oil Massage)</h5>
                      <p className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">Oct 22, 2023 • 09:30 AM</p>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        First session of Snehana. Focused on joints and lower back using Mahanarayan oil.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active/Current Item */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-500 ring-4 ring-emerald-100 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h5 className="font-bold text-emerald-900">Shirodhara - Stress Relief</h5>
                        <p className="text-xs text-emerald-700 font-bold mb-2 uppercase tracking-wide">Today • 02:30 PM</p>
                        <p className="text-sm text-emerald-800/70">
                          Continuous flow of warm medicated oil on the forehead to calm the nervous system.
                        </p>
                      </div>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors whitespace-nowrap">
                        Check In
                      </button>
                    </div>
                  </div>
                </div>

                {/* Future Item */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <span className="material-symbols-outlined text-5xl text-gray-400">schedule</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-gray-400">Swedana (Herbal Steam)</h5>
                      <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wide">Oct 28, 2023 • 11:00 AM</p>
                      <p className="text-sm text-gray-400 leading-relaxed italic">Scheduled after Snehana completion.</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Therapist Progress Notes */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-[#064e3b] flex items-center mb-6">
                <span className="material-symbols-outlined mr-2">description</span>
                Therapist's Progress Notes
              </h4>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-500">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Dr. Varma"
                    className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RjiH2-tq8rkd7oURc0tGeF207w4Dxcy7olRsDz5g2FCbMER7UttjcMz4rjfQXynmQ7CWjTaYzFYadS_L10daf3lhoQnOrUCJbVcR1WnzEBSibqEBOKV2pTMkGxEWiVrkHrKrT2-IqbDdniAruGgGrAFsP-WVgYyGgtFyW5Mbg-LLjc9bx0GFy_KamX1P053w0g4HSR7hcVGebEISlXOnmIgG76VSkL_meyEM5381R2UpQTq_659bgELb-8XtYgspIBcnJoc1CXjO"
                  />
                  <div>
                    <p className="font-bold text-[#1f2937]">Dr. Ananya Varma</p>
                    <p className="text-[10px] text-[#6b7280] uppercase font-semibold">Senior Ayurvedic Physician</p>
                  </div>
                  <span className="ml-auto text-xs text-[#6b7280]">Oct 26, 2023</span>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                  "Arjun is responding well to the initial Abhyanga sessions. We noticed significant reduction in stiffness around the scapular region. His pulse indicates a 'Mandagni' (slow digestion), so we've slightly adjusted the herbal decoction for his Shirodhara session today. Patient reports improved sleep quality over the last 48 hours."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white px-3 py-1 border border-gray-200 rounded-lg text-xs font-medium text-[#6b7280]">
                    Reduced Stiffness
                  </span>
                  <span className="bg-white px-3 py-1 border border-gray-200 rounded-lg text-xs font-medium text-[#6b7280]">
                    Improved Sleep
                  </span>
                  <span className="bg-white px-3 py-1 border border-gray-200 rounded-lg text-xs font-medium text-[#6b7280]">
                    Vata Pacified
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Side Sidebar */}
          <aside className="space-y-8">
            {/* Precautions & Guidelines */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-[#1f2937] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    clipRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Precautions & Care
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-snug">Avoid direct exposure to cold wind or AC for 2 hours after Shirodhara.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-snug">Sip warm water throughout the day to aid toxin release.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-snug">Gentle walking only; avoid strenuous exercise during detox week.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-snug">Use provided herbal hair wash to remove excess oil post-treatment.</p>
                </li>
              </ul>
            </section>

            {/* Quick Summary Cards */}
            <section className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">Completed</p>
                    <p className="text-lg font-bold text-[#1f2937]">
                      03 <span className="text-xs font-normal text-[#6b7280]">Therapies</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">Scheduled</p>
                    <p className="text-lg font-bold text-[#1f2937]">
                      04 <span className="text-xs font-normal text-[#6b7280]">Remaining</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center">
              <p className="text-sm font-bold text-emerald-900 mb-2">Need a printed copy?</p>
              <p className="text-xs text-emerald-700/70 mb-4">Download your full 7-day treatment roadmap with diet chart.</p>
              <button className="w-full bg-white border border-emerald-200 text-emerald-700 py-3 rounded-xl text-sm font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Download PDF Plan
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
