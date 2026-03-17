'use client';

import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function SpecialistsPage() {
  const specialists = [
    {
      name: 'Dr. Ananya Sharma',
      specialty: 'Ayurvedic Internal Med',
      status: 'available',
      activePatients: 12,
      metric: 'Success Rate',
      metricValue: '98%',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Panchakarma Expert',
      status: 'busy',
      activePatients: 18,
      metric: 'Next Slot',
      metricValue: '2:30 PM',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop'
    },
    {
      name: 'Dr. Sunita Varma',
      specialty: 'Yoga & Meditation',
      status: 'off',
      activePatients: 0,
      metric: 'Back On',
      metricValue: 'Mon, 9AM',
      lastActive: 'Yesterday',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop'
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Ayurvedic Internal Med',
      status: 'available',
      activePatients: 9,
      metric: 'Room',
      metricValue: 'B-204',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop'
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f8f7]">
      <Sidebar activePage="Specialists" />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Specialists & Practitioners</h2>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Live availability and quick management for the clinic coordinator.</p>
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#066046] text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:bg-[#055539] transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add New Specialist
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-white border border-[#066046]/10 rounded-xl p-4 md:p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Total Specialists</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">42</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">+2.4%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#066046]/10 rounded-xl p-4 md:p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">On Duty Now</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">18</span>
                  <span className="text-xs text-slate-400 font-medium ml-1">Live Active</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#066046]/10 rounded-xl p-4 md:p-6 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-[#066046]/10 flex items-center justify-center text-[#066046]">
                <span className="material-symbols-outlined text-3xl">star_rate</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Avg. Satisfaction</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">4.9/5</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">+0.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-4 md:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
              Live Availability Board
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </h3>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="flex p-1 bg-slate-100 rounded-lg flex-1 sm:flex-none">
                <button className="flex-1 sm:flex-none px-3 py-1 text-sm font-medium rounded bg-white shadow-sm">Grid View</button>
                <button className="flex-1 sm:flex-none px-3 py-1 text-sm font-medium text-slate-500 hover:text-slate-700">List View</button>
              </div>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 bg-white">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
          </div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white border border-[#066046]/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#066046]/5 transition-all">
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden ring-4 ${
                        specialist.status === 'available' ? 'ring-emerald-50' :
                        specialist.status === 'busy' ? 'ring-amber-50' : 'ring-slate-100'
                      } bg-slate-100`}>
                        <img alt={specialist.name} className="w-full h-full object-cover" src={specialist.image} />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center">
                        <span className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                          specialist.status === 'available' ? 'bg-emerald-500' :
                          specialist.status === 'busy' ? 'bg-amber-500' : 'bg-slate-400'
                        }`}></span>
                      </span>
                    </div>
                    <div className={`px-2 md:px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                      specialist.status === 'available' ? 'bg-emerald-100 text-emerald-700' :
                      specialist.status === 'busy' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {specialist.status === 'available' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      )}
                      {specialist.status === 'available' ? 'Available' : specialist.status === 'busy' ? 'Busy' : 'Off Duty'}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold">{specialist.name}</h4>
                    <p className="text-[#066046] text-[10px] md:text-xs font-semibold uppercase tracking-wide mt-0.5">{specialist.specialty}</p>
                    <div className="mt-3 md:mt-4 flex items-center gap-3 md:gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-slate-500">
                          {specialist.status === 'off' ? 'Last Active' : 'Active Patients'}
                        </span>
                        <span className="text-xs md:text-sm font-bold">
                          {specialist.status === 'off' ? specialist.lastActive : specialist.activePatients}
                        </span>
                      </div>
                      <div className="w-px h-6 bg-slate-200"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-slate-500">{specialist.metric}</span>
                        <span className="text-xs md:text-sm font-bold">{specialist.metricValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`p-3 md:p-4 bg-slate-50/50 border-t border-[#066046]/5 grid grid-cols-2 gap-2 md:gap-3 ${
                  specialist.status === 'off' ? 'opacity-60' : ''
                }`}>
                  <button className={`flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all ${
                    specialist.status === 'off' 
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-[#066046] text-white hover:bg-[#055539]'
                  }`} disabled={specialist.status === 'off'}>
                    <span className="material-symbols-outlined text-base md:text-lg">calendar_month</span>
                    Schedule
                  </button>
                  <button className={`flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all ${
                    specialist.status === 'off'
                      ? 'border border-slate-200 text-slate-500 cursor-not-allowed'
                      : 'border border-[#066046]/20 text-[#066046] hover:bg-[#066046]/5'
                  }`} disabled={specialist.status === 'off'}>
                    <span className="material-symbols-outlined text-base md:text-lg">chat_bubble</span>
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Cards */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#066046]/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-[#066046] mb-2">Manage Duty Rosters</h4>
                <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base max-w-sm">Easily schedule and coordinate shifts for your on-call specialists to ensure seamless patient care.</p>
                <button className="bg-[#066046] text-white px-4 md:px-6 py-2 rounded-xl font-bold hover:bg-[#055539] transition-all text-sm md:text-base">Go to Scheduler</button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] md:text-[160px] opacity-10 text-[#066046] transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">calendar_today</span>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Recruitment Hub</h4>
                <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base max-w-sm">Review applications for new practitioner roles and manage the onboarding process.</p>
                <button className="bg-emerald-500 text-white px-4 md:px-6 py-2 rounded-xl font-bold hover:bg-emerald-400 transition-all text-sm md:text-base">View Applications</button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] md:text-[160px] opacity-10 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">work</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
