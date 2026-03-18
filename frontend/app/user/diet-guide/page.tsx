'use client';

export default function DietGuidePage() {
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
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/diet-guide"
          >
            <span className="material-symbols-outlined text-xl">nutrition</span>
            <span className="font-semibold">Diet Guide</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/billing"
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
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b]">Your Personal Diet Plan</h2>
            <p className="text-[#6b7280] mt-1">Holistic nutrition tailored to balance your Vata dosha.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm relative text-gray-600 hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="flex items-center space-x-2 bg-[#064e3b] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all">
              <span className="material-symbols-outlined">add</span>
              <span>Book Consultation</span>
            </button>
          </div>
        </header>

        {/* Hero Diet Focus Card */}
        <section className="bg-[#064e3b] rounded-3xl p-10 mb-10 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">star</span>
              Seasonal Nutrition Goal
            </div>
            <h2 className="text-5xl font-bold mb-4">Grounding Warmth</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              To counter your currently elevated <span className="text-white font-bold underline decoration-emerald-400">Vata dosha</span>, focus on moist, heavy, and warm cooked foods. Avoid raw salads and cold drinks which can aggravate restlessness.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-wider mb-1">Energy Boost</p>
                  <p className="text-sm font-medium">Add Ghee to your lunch for sustained digestive fire (Agni).</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-wider mb-1">Timing Rule</p>
                  <p className="text-sm font-medium">Eat your largest meal between 12:00 PM and 1:30 PM.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-80 h-80 opacity-20">
            <div className="w-full h-full rounded-full border-[1.5rem] border-emerald-300/30 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-emerald-300">spa</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Daily Nourishment Schedule */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-[#064e3b]">schedule</span>
                  <h3 className="text-lg font-bold text-[#1f2937]">Daily Nourishment</h3>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-[#6b7280] hover:bg-gray-200">Weekly</button>
                  <button className="px-4 py-1.5 bg-[#064e3b] text-white rounded-full text-xs font-bold shadow-md">Today</button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Breakfast */}
                <div className="group flex gap-6 p-5 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-16 flex flex-col items-center">
                    <span className="text-xs font-bold text-[#6b7280] uppercase">08:00</span>
                    <div className="flex-1 w-px bg-gray-200 my-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded">Breakfast</span>
                      <span className="text-xs text-[#6b7280]">• 450 kcal</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1f2937]">Warm Spiced Oats</h4>
                    <p className="text-[#6b7280] text-sm mt-1">Prepared with almond milk, cinnamon, cardamom, and topped with 3 soaked almonds and stewed apples.</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:text-[#064e3b] hover:border-[#064e3b] transition-all self-center shrink-0">
                    <span className="material-symbols-outlined">check</span>
                  </button>
                </div>

                {/* Lunch */}
                <div className="group flex gap-6 p-5 rounded-2xl bg-[#ecf3f0] border border-[#064e3b]/10">
                  <div className="w-16 flex flex-col items-center">
                    <span className="text-xs font-bold text-[#064e3b] uppercase">12:30</span>
                    <div className="flex-1 w-px bg-[#064e3b]/20 my-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold text-[#064e3b] uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-[#064e3b]/10">Lunch (Main)</span>
                      <span className="text-xs text-[#6b7280]">• 680 kcal</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1f2937]">Mung Dal Kitchari</h4>
                    <p className="text-[#6b7280] text-sm mt-1">Classic Ayurvedic comfort meal with basmati rice, yellow mung dal, seasonal squash, and a spoonful of medicinal ghee.</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center shadow-lg self-center shrink-0">
                    <span className="material-symbols-outlined">check</span>
                  </button>
                </div>

                {/* Dinner */}
                <div className="group flex gap-6 p-5 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-16 flex flex-col items-center">
                    <span className="text-xs font-bold text-[#6b7280] uppercase">19:00</span>
                    <div className="flex-1 w-px bg-gray-200 my-2 opacity-0"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">Dinner</span>
                      <span className="text-xs text-[#6b7280]">• 320 kcal</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1f2937]">Roasted Root Vegetables</h4>
                    <p className="text-[#6b7280] text-sm mt-1">Lightly seasoned carrots, sweet potatoes, and beets roasted with ginger and coriander. Served with a small bowl of clear soup.</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:text-[#064e3b] hover:border-[#064e3b] transition-all self-center shrink-0">
                    <span className="material-symbols-outlined">check</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Dosha Specific Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Good for Vata */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h4 className="font-bold text-[#1f2937] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-[#10b981]">check_circle</span>
                  Good for Vata
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Warm water with lemon (Morning)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Spices: Cumin, Ginger, Mustard seeds</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Fruits: Ripe Bananas, Mangos, Papaya</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Nuts: Almonds, Walnuts (Soaked)</p>
                  </li>
                </ul>
              </div>

              {/* Foods to Avoid */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h4 className="font-bold text-[#1f2937] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-red-400">cancel</span>
                  Foods to Avoid
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Iced drinks and cold salads</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Cruciferous: Raw broccoli, Cabbage</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Dry foods: Popcorn, Crackers, Dry cereal</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-sm text-[#6b7280] font-medium">Caffeine and carbonated drinks</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Hydration & Tracker */}
          <div className="space-y-8">
            {/* Hydration Tracker */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-[#1f2937]">Hydration</h3>
                <span className="text-[#064e3b] font-bold">1.2 / 2.5 L</span>
              </div>
              <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-gray-100" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-blue-500" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="220" strokeWidth="12"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-blue-500 mb-1">water_drop</span>
                  <span className="text-2xl font-black text-[#1f2937]">48%</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-6">
                <button className="h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xs font-bold">250ml</button>
                <button className="h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center text-xs font-bold">250ml</button>
                <button className="h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center text-xs font-bold">500ml</button>
                <button className="h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center text-xs font-bold">Tea</button>
              </div>
              <p className="text-xs text-[#6b7280]">Pro tip: Sip warm ginger tea every hour to keep Vata balanced.</p>
            </section>

            {/* Supplements */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[#1f2937]">Supplements</h3>
                <a className="text-xs font-bold text-[#064e3b] hover:underline" href="#">History</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-[#6b7280]">medication</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#1f2937]">Ashwagandha</p>
                    <p className="text-[10px] text-[#6b7280] uppercase font-bold">1 Capsule • After Lunch</p>
                  </div>
                  <input className="w-5 h-5 rounded border-gray-300 text-[#064e3b]" type="checkbox" />
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-[#6b7280]">medication</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#1f2937]">Triphala Churna</p>
                    <p className="text-[10px] text-[#6b7280] uppercase font-bold">1 tsp • Before Bed</p>
                  </div>
                  <input className="w-5 h-5 rounded border-gray-300 text-[#064e3b]" type="checkbox" />
                </div>
              </div>
            </section>

            {/* Digestive Score */}
            <section className="bg-gradient-to-br from-[#064e3b] to-emerald-900 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-2">Digestive Score</h3>
              <p className="text-emerald-200 text-xs mb-6">Based on your recent logs and meals.</p>
              <div className="flex items-end gap-3 h-24 mb-4">
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[40%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[60%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[85%]"></div>
                <div className="flex-1 bg-white/40 rounded-t-lg hover:bg-white/50 transition-colors h-[70%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[90%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[50%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-lg hover:bg-white/20 transition-colors h-[75%]"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-emerald-300/60 uppercase">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span className="text-white">Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
