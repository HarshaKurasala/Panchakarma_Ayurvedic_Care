'use client';

export default function UserAppointments() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
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
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/appointments"
          >
            <span className="material-symbols-outlined text-xl">timeline</span>
            <span className="font-semibold">My Appointments</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/treatments"
          >
            <span className="material-symbols-outlined text-xl">spa</span>
            <span className="font-medium">My Treatments</span>
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
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b]">Wellness Journey</h2>
            <p className="text-[#6b7280] mt-1">Charting your path to holistic health and balance.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm relative text-gray-600 hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="flex items-center space-x-2 bg-[#064e3b] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all">
              <span className="material-symbols-outlined">add</span>
              <span>Schedule New Step</span>
            </button>
          </div>
        </header>

        {/* Journey Timeline Section */}
        <section className="mb-10" data-purpose="journey-timeline">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden relative">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-[#064e3b] flex items-center">
                <span className="material-symbols-outlined mr-2">route</span>
                Your Progress Map
              </h3>
              <div className="flex items-center space-x-4 text-sm font-medium">
                <span className="flex items-center text-[#6b7280]">
                  <span className="w-3 h-3 bg-gray-200 rounded-full mr-2"></span>Completed
                </span>
                <span className="flex items-center text-[#064e3b]">
                  <span className="w-3 h-3 bg-[#064e3b] rounded-full mr-2"></span>Next Up
                </span>
                <span className="flex items-center text-[#10b981]">
                  <span className="w-3 h-3 bg-[#10b981] rounded-full mr-2"></span>Upcoming
                </span>
              </div>
            </div>
            <div className="relative px-4">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-[40%] h-1 bg-[#064e3b] -translate-y-1/2 z-0"></div>
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-[#ecf3f0] border-2 border-[#064e3b] flex items-center justify-center text-[#064e3b] mb-3 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 12</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Consultation</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-[#ecf3f0] border-2 border-[#064e3b] flex items-center justify-center text-[#064e3b] mb-3 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 18</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Therapy Session</p>
                  </div>
                </div>
                <div className="flex flex-col items-center scale-110 relative">
                  <div className="absolute -top-12 bg-[#064e3b] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider whitespace-nowrap">
                    You are here
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#064e3b] border-4 border-white shadow-xl flex items-center justify-center text-white mb-3 ring-2 ring-[#064e3b]/20">
                    <span className="material-symbols-outlined">event</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#064e3b] uppercase">Tomorrow</p>
                    <p className="text-xs font-bold text-[#1f2937]">Major Milestone</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#10b981] flex items-center justify-center text-[#10b981] mb-3 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">pending</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 30</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Follow-up</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 mb-3 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">calendar_add_on</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Nov 05</p>
                    <p className="text-xs font-semibold text-[#6b7280]">Diet Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-[#ecf3f0]/50 p-4 rounded-2xl border border-[#064e3b]/5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#064e3b]/10 rounded-full flex items-center justify-center text-[#064e3b] mr-4">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#064e3b] tracking-tight">Treatment Completion: 68%</p>
                  <p className="text-xs text-[#6b7280]">You have completed 4 out of 6 prescribed steps for this phase.</p>
                </div>
              </div>
              <button className="text-[#064e3b] text-sm font-bold hover:underline">View Roadmap Details</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-12 gap-8 items-start">
          <section className="col-span-12 lg:col-span-7" data-purpose="upcoming-rich-cards">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#064e3b]">Upcoming Consultations</h3>
                <p className="text-sm text-[#6b7280] mt-1">Get prepared for your next healing session.</p>
              </div>
              <button className="text-sm text-[#10b981] font-semibold hover:text-[#064e3b] transition-colors">View all schedule</button>
            </div>
            <div className="space-y-6">
              <div className="bg-white border-2 border-[#064e3b] rounded-[2rem] p-6 shadow-md transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center justify-center bg-[#064e3b] text-white w-20 h-20 rounded-2xl shadow-inner">
                      <span className="text-xs font-bold uppercase opacity-80">OCT</span>
                      <span className="text-3xl font-bold leading-none">24</span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-[#ecf3f0] text-[#064e3b] text-[10px] font-bold rounded uppercase mb-2">
                        Priority session
                      </span>
                      <h4 className="text-xl font-bold text-[#1f2937]">Shirodhara - Stress Relief</h4>
                      <div className="flex items-center mt-1 space-x-4">
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">schedule</span>
                          10:00 AM
                        </p>
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">person</span>
                          Dr. Sunita Nair
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-[#064e3b] text-white font-bold rounded-xl shadow-md hover:bg-opacity-90 transition-all">
                      Join Room
                    </button>
                    <button className="flex-1 md:flex-none p-3 border border-gray-200 rounded-xl text-[#6b7280] hover:bg-gray-50 transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm transition-all hover:border-[#10b981]/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-500 w-20 h-20 rounded-2xl">
                      <span className="text-xs font-bold uppercase opacity-80">OCT</span>
                      <span className="text-3xl font-bold leading-none">26</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1f2937]">Panchakarma Consultation</h4>
                      <div className="flex items-center mt-1 space-x-4">
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">schedule</span>
                          02:30 PM
                        </p>
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">person</span>
                          Dr. Ananya Rao
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 md:flex-none px-6 py-3 border border-[#064e3b] text-[#064e3b] font-bold rounded-xl hover:bg-[#ecf3f0] transition-all">
                      Reschedule
                    </button>
                    <button className="flex-1 md:flex-none p-3 border border-gray-200 rounded-xl text-[#6b7280] hover:bg-gray-50 transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="col-span-12 lg:col-span-5" data-purpose="past-visits-rich">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-[#064e3b] mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">history</span>
                Reflection &amp; History
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Abhyanga Oil Massage</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 20 • 60 mins • High Impact</p>
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform"
                    title="Download Summary"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">self_care</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Udvarthanam Therapy</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 18 • 45 mins • Detox</p>
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform"
                    title="Download Summary"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">medical_services</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Basti Therapy</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 15 • 30 mins • Balancing</p>
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform"
                    title="Download Summary"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">psychiatry</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Prakriti Analysis</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 10 • 90 mins • Assessment</p>
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform"
                    title="Download Summary"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4">
                  <button className="w-full py-4 text-sm font-bold text-[#1f2937] hover:text-[#064e3b] border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#064e3b]/30 hover:bg-[#ecf3f0]/20 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined mr-2">summarize</span>
                    Download Full Medical Journal
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
