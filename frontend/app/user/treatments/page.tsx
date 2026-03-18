'use client';

export default function TreatmentsPage() {
  return (
    <div className="flex min-h-screen text-slate-800">
      {/* Main Content */}
      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-1">My Treatment Plan</h2>
            <p className="text-slate-500">Tracking your journey to holistic balance and rejuvenation.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white border border-slate-200 rounded-xl relative shadow-sm hover:bg-slate-50 transition-colors">
              <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="flex items-center gap-2 bg-[#064E3B] text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Book Session
            </button>
          </div>
        </header>

        {/* Therapy Plan Overview */}
        <section className="bg-[#064E3B] rounded-[2.5rem] p-10 text-white mb-10 flex flex-col md:flex-row justify-between relative overflow-hidden shadow-2xl">
          <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
              Active Therapy Plan
            </div>
            <h3 className="text-4xl font-bold mb-4 leading-tight">
              7-Day Panchakarma <br /> Detox Journey
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl">
              Deep cleansing and cellular rejuvenation focusing on pacifying{' '}
              <span className="text-white font-bold underline decoration-emerald-400">Vata Dosha</span> through traditional
              Ayurvedic therapies and specialized diet.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl flex-1 min-w-[200px] border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Current Phase</span>
                </div>
                <p className="text-xl font-bold">Phase 2: Snehana</p>
                <p className="text-sm text-emerald-100/70 mt-1">Oleation & Internal Lubrication</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl flex-1 min-w-[200px] border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Timeline</span>
                </div>
                <p className="text-xl font-bold">Day 4 of 7</p>
                <p className="text-sm text-emerald-100/70 mt-1">Next: Phase 3 Swedana (Oct 28)</p>
              </div>
            </div>
          </div>

          {/* Harmony Circle Decoration */}
          <div className="hidden md:flex items-center justify-center relative md:w-1/3">
            <div className="w-64 h-64 border-[16px] border-white/5 rounded-full flex flex-col items-center justify-center relative">
              <div
                className="absolute inset-0 border-[16px] border-emerald-400 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)' }}
              ></div>
              <p className="text-5xl font-black">57%</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 text-emerald-200">Plan Progress</p>
              <div className="absolute -bottom-2">
                <svg className="w-12 h-12 text-emerald-300/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Treatment Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Treatment Timeline Section */}
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Treatment Timeline
                </h4>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Completed
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium ml-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> Scheduled
                  </span>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
                {/* Completed Item 1 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-slate-800">Initial Consultation & Pulse Diagnosis</h5>
                      <p className="text-xs text-emerald-600 font-medium mb-2 uppercase tracking-wide">Oct 20, 2023 • 10:00 AM</p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Prakriti analysis confirmed Vata predominance with seasonal imbalances. Base plan established.
                      </p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      Report Ready
                    </span>
                  </div>
                </div>

                {/* Completed Item 2 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-slate-800">Abhyanga (Herbal Oil Massage)</h5>
                      <p className="text-xs text-emerald-600 font-medium mb-2 uppercase tracking-wide">Oct 22, 2023 • 09:30 AM</p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        First session of Snehana. Focused on joints and lower back using Mahanarayan oil.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active/Current Item */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-emerald-600 ring-4 ring-emerald-100 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-bold text-emerald-900">Shirodhara - Stress Relief</h5>
                        <p className="text-xs text-emerald-700 font-bold mb-2 uppercase tracking-wide">Today • 02:30 PM</p>
                        <p className="text-sm text-emerald-800/70">
                          Continuous flow of warm medicated oil on the forehead to calm the nervous system.
                        </p>
                      </div>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors">
                        Check In
                      </button>
                    </div>
                  </div>
                </div>

                {/* Future Item */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-slate-400">Swedana (Herbal Steam)</h5>
                      <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Oct 28, 2023 • 11:00 AM</p>
                      <p className="text-sm text-slate-400 leading-relaxed italic">Scheduled after Snehana completion.</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Therapist Progress Notes */}
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Therapist's Progress Notes
              </h4>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Dr. Varma"
                    className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RjiH2-tq8rkd7oURc0tGeF207w4Dxcy7olRsDz5g2FCbMER7UttjcMz4rjfQXynmQ7CWjTaYzFYadS_L10daf3lhoQnOrUCJbVcR1WnzEBSibqEBOKV2pTMkGxEWiVrkHrKrT2-IqbDdniAruGgGrAFsP-WVgYyGgtFyW5Mbg-LLjc9bx0GFy_KamX1P053w0g4HSR7hcVGebEISlXOnmIgG76VSkL_meyEM5381R2UpQTq_659bgELb-8XtYgspIBcnJoc1CXjO"
                  />
                  <div>
                    <p className="font-bold text-slate-800">Dr. Ananya Varma</p>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Senior Ayurvedic Physician</p>
                  </div>
                  <span className="ml-auto text-xs text-slate-400">Oct 26, 2023</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  "Arjun is responding well to the initial Abhyanga sessions. We noticed significant reduction in stiffness around the
                  scapular region. His pulse indicates a 'Mandagni' (slow digestion), so we've slightly adjusted the herbal decoction
                  for his Shirodhara session today. Patient reports improved sleep quality over the last 48 hours."
                </p>
                <div className="flex gap-2">
                  <span className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                    Reduced Stiffness
                  </span>
                  <span className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                    Improved Sleep
                  </span>
                  <span className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                    Vata Pacified
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Side Sidebar */}
          <aside className="space-y-8">
            {/* Precautions & Guidelines */}
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
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
                  <p className="text-sm text-slate-600 leading-snug">Avoid direct exposure to cold wind or AC for 2 hours after Shirodhara.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">Sip warm water throughout the day to aid toxin release.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">Gentle walking only; avoid strenuous exercise during detox week.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">Use provided herbal hair wash to remove excess oil post-treatment.</p>
                </li>
              </ul>
            </section>

            {/* Quick Summary Cards */}
            <section className="space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Completed</p>
                    <p className="text-xl font-bold text-slate-800">
                      03 <span className="text-sm font-normal text-slate-500">Therapies</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scheduled</p>
                    <p className="text-xl font-bold text-slate-800">
                      04 <span className="text-sm font-normal text-slate-500">Remaining</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-[2rem] text-center">
              <p className="text-sm font-bold text-emerald-900 mb-2">Need a printed copy?</p>
              <p className="text-xs text-emerald-700/70 mb-4">Download your full 7-day treatment roadmap with diet chart.</p>
              <button className="w-full bg-white border border-emerald-200 text-emerald-700 py-3 rounded-xl text-sm font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Download PDF Plan
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
