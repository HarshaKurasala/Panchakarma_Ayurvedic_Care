'use client';

export default function BillingPage() {
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
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/billing"
          >
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span className="font-semibold">Billing</span>
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
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Financial Health Dashboard</h2>
            <p className="text-slate-500 mt-1">Track your wellness investments and manage upcoming obligations.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 relative hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-[#064e3b] text-white px-6 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:bg-emerald-900 transition-colors">
              <span className="material-symbols-outlined text-base">receipt_long</span>
              <span>Download Full Statement</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Outstanding Balances */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 flex items-center">
                      <span className="material-symbols-outlined mr-2 text-red-500">pending_actions</span>
                      Outstanding Balances
                    </h3>
                    <p className="text-sm text-slate-500">You have 2 pending payments due this week.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-800 tracking-tighter">₹4,500</p>
                    <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full uppercase">Action Required</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Payment 1 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="material-symbols-outlined text-[#064e3b]">spa</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Shirodhara - Stress Relief</h4>
                        <p className="text-xs text-slate-500">Invoice #INV-2023-042 • Oct 24, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-bold text-slate-800">₹2,800</p>
                        <p className="text-[10px] font-bold text-amber-600 uppercase">Due Tomorrow</p>
                      </div>
                      <button className="bg-[#064e3b] hover:bg-emerald-900 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all">
                        Pay Now
                      </button>
                    </div>
                  </div>

                  {/* Payment 2 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="material-symbols-outlined text-[#064e3b]">medication</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Herbal Supplement - Course 1</h4>
                        <p className="text-xs text-slate-500">Invoice #INV-2023-039 • Oct 22, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-bold text-slate-800">₹1,700</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Due in 3 days</p>
                      </div>
                      <button className="bg-[#064e3b] hover:bg-emerald-900 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment History */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 px-1">Payment History & Timeline</h3>
              <div className="relative space-y-4 before:content-[''] before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {/* Upcoming */}
                <div className="relative pl-12 group">
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full border-2 border-white bg-blue-500 z-10"></div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <span className="material-symbols-outlined text-blue-600">event_repeat</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Upcoming Auto-Pay</span>
                        <h4 className="font-bold text-slate-800 text-base">Monthly Maintenance Plan</h4>
                        <p className="text-xs text-slate-500">Scheduled for Oct 30, 2023 via •••• 4242</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-slate-800">₹5,000</p>
                      <button className="text-xs font-semibold text-blue-600 hover:underline">Modify Schedule</button>
                    </div>
                  </div>
                </div>

                {/* Payment 1 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full border-2 border-white bg-emerald-500 z-10"></div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Payment Received</span>
                        <h4 className="font-bold text-slate-800 text-base">Abhyanga Oil Massage</h4>
                        <p className="text-xs text-slate-500">Processed on Oct 18, 2023</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-slate-800">₹1,700</p>
                      <button className="text-xs font-semibold text-slate-400 flex items-center hover:text-[#064e3b]">
                        <span className="material-symbols-outlined text-sm mr-1">download</span>Invoice
                      </button>
                    </div>
                  </div>
                </div>

                {/* Payment 2 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full border-2 border-white bg-emerald-500 z-10"></div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Payment Received</span>
                        <h4 className="font-bold text-slate-800 text-base">Basti Therapy Session</h4>
                        <p className="text-xs text-slate-500">Processed on Oct 15, 2023</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-slate-800">₹1,200</p>
                      <button className="text-xs font-semibold text-slate-400 flex items-center hover:text-[#064e3b]">
                        <span className="material-symbols-outlined text-sm mr-1">download</span>Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="px-6 py-2 border border-gray-200 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors uppercase tracking-widest">
                  Load More Activity
                </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Lifetime Investment */}
            <div className="bg-[#064e3b] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-emerald-100/70 text-xs font-bold uppercase tracking-widest mb-1">Lifetime Investment</p>
                <h4 className="text-3xl font-black mb-6">₹42,800</h4>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-emerald-100/70 mb-1">Sessions Completed</p>
                    <p className="text-lg font-bold">24</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                    <span className="material-symbols-outlined text-emerald-400">trending_up</span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl"></div>
            </div>

            {/* Auto-Pay Schedules */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Auto-Pay Schedules</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              <div className="space-y-4">
                <div className="p-4 border border-[#D1FAE5] rounded-2xl bg-[#ECFDF5]/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs font-bold text-[#064e3b]">PRIMARY METHOD</p>
                      <div className="flex items-center mt-1">
                        <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[6px] font-bold text-white italic mr-2">
                          VISA
                        </div>
                        <p className="text-sm font-semibold text-slate-800">•••• 4242</p>
                      </div>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">Your balance is automatically charged on the due date. Next charge: Oct 30, 2023.</p>
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Stored Methods</h3>
                <button className="text-[#064e3b] hover:text-emerald-700 flex items-center text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-lg mr-1">add_card</span>Add
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 border border-emerald-100 rounded-xl bg-emerald-50/20">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-[6px] font-bold text-white italic mr-3">
                    VISA
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-800">•••• 4242</p>
                    <p className="text-[9px] text-slate-400 uppercase">Exp 08/26</p>
                  </div>
                  <span className="text-[8px] font-black text-white bg-emerald-600 px-1.5 py-0.5 rounded uppercase">Primary</span>
                </div>
                <div className="flex items-center p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-[6px] font-bold text-white italic mr-3">
                    MC
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-800">•••• 8812</p>
                    <p className="text-[9px] text-slate-400 uppercase">Exp 11/25</p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Support Card */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 text-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <span className="material-symbols-outlined text-amber-500 text-xl">help_center</span>
              </div>
              <h4 className="text-sm font-bold text-amber-900">Billing Concierge</h4>
              <p className="text-[11px] text-amber-800/70 mt-1 mb-4">Need a custom payment plan or have questions?</p>
              <button className="w-full py-2 bg-white border border-amber-200 rounded-lg text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors shadow-sm">
                Chat with Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
