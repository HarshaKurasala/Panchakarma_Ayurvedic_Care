"use client";

import { useState } from "react";
import Link from "next/link";

interface Patient {
  id: string;
  patientId: string;
  name: string;
  age: number;
  gender: string;
  dosha: string;
  lastTreatment: string;
  avatar: string;
}

const patients: Patient[] = [
  {
    id: "1",
    patientId: "#PK-2024-001",
    name: "Elena Rodriguez",
    age: 28,
    gender: "Female",
    dosha: "Pitta",
    lastTreatment: "2 days ago",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0SYPco4FK5Kq5wH7guAvNWvZWI4nzcAhW6zvJVW_P45tj8hHVAojEILSIftOCniibrjmSQGKA_ndpj0kiTy77SBRQ65n3mW3tF_3ktK8ariHYOvc4WknmsXptItcmyoLcLrnJ2W7lxn3cm4SK-V-VJEo2781kpNLF5jDa7xgNi0LARmg5pahd8EtDIBFslK1IIFEo1xgJvOGPnOujuUF1kqqEbA2PC_Azr6n8-h9PRBeokoX1HvfZtSTPK6_J2Ep9_ZlGd7qb29T1",
  },
  {
    id: "2",
    patientId: "#PK-2024-042",
    name: "Marcus Thorne",
    age: 45,
    gender: "Male",
    dosha: "Kapha",
    lastTreatment: "Today",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0RJ1quzgZlpikDibVh7Y_0j8YFHoaR8m3Fm6G0YapVtUtCKpTSQcDxY2qJNkAEjKvkS23fL3rmi3aafsI3t8opevZ_nvmi68IH26s2jP_WRUVB6IlWbWujOL_qB170iRuj3SHkT1cx6qMU6rpxarWAwugDpH5K8y6ywJo9_AKLdSSubRY7CWGnSj5WFt1ZcGyS3KiCaMLnCkcF51HPqU2UZ9PXmywhAKY9P3zRmYXS77QsWN5atXcleGrLBT8yGYK3mKfvpAWOXjE",
  },
  {
    id: "3",
    patientId: "#PK-2024-055",
    name: "Sarah Jenkins",
    age: 62,
    gender: "Female",
    dosha: "Vata",
    lastTreatment: "1 week ago",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAswKHXZeDVK2j3zvyioTFuWelEav77UGMXgG3MfRDrRaKirHjGO_1x1dNb2SKxp5LoMLUMSM2EycQX-DX6C9IPxljf9Xvic-9e77uA-HG87soCFAdPbgAuvlysfIHmCz--bjGmUEg3X3wFHWVPDzaWIQ8b5bfL-1SIwsAe6UDXQBTIs9kcn3vRtPK8sk3B_BN5lTzbhF--K19PDqUZ6EIDJ2nKYCp1yIIOriKm2IGw9e6d6EOj3nmyspXr-gXag2TnH69K10_RzyX7",
  },
  {
    id: "4",
    patientId: "#PK-2024-061",
    name: "Liam Zhang",
    age: 34,
    gender: "Male",
    dosha: "Pitta",
    lastTreatment: "4 days ago",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK8ezR5ChwcIdk0u6Rj_ORjIGHJLQ1vdhY2X4rxPWvF7Bw66QVx6CowwaahCauLz4y8evgEEq26_wE2JmxPhd5LItxxU52k-qxnBiaiD1-2ewjoyaGmlkOV-iQS8YjpZAi5KIqP1mv7nFqEJE2CrMSUIysfW9R0YzGnepPUYG7z6F4UfoiQWWhYUq73Vn6dc-EFaiu53i_PtTkPPmfo7tJQGOcP1dVDr5crEl3Ex-n6cG5KeuFjAn_tqSb6pMBMS0DxKt239GZvrzg",
  },
];

export default function StaffPatients() {
  const [currentPage, setCurrentPage] = useState(1);

  const getDoshaStyles = (dosha: string) => {
    switch (dosha) {
      case "Pitta":
        return "bg-orange-100 text-orange-700";
      case "Kapha":
        return "bg-blue-100 text-blue-700";
      case "Vata":
        return "bg-violet-100 text-violet-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#066046] text-white shadow-md shadow-[#066046]/20"
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
          <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-[#066046]/5 hover:text-[#066046] transition-colors" href="/staff/doctors">
            <span className="material-symbols-outlined text-[22px]">event_available</span>
            <span className="text-sm font-medium">Doctor Availability</span>
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
            ></div>
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
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 border-b border-[#066046]/10 bg-white flex items-center justify-between px-8 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-[#066046]">Patients Management</h2>
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#066046]/20" placeholder="Search by name, ID or phone..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#066046] hover:text-white transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#066046] hover:text-white transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Body Canvas */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Page Header Actions */}
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-extrabold text-[#066046]">Active Patients</h3>
                <p className="text-slate-600 text-sm mt-1">Manage and track patient wellness journeys.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                  <button className="px-4 py-2 text-sm font-semibold bg-white shadow-sm rounded-lg text-[#066046]">All Patients</button>
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#066046] transition-colors">In-Treatment</button>
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#066046] transition-colors">Discharged</button>
                </div>
                <button className="bg-[#066046] hover:bg-[#055239] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#066046]/10">
                  <span className="material-symbols-outlined">person_add</span>
                  <span>Add Patient</span>
                </button>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#066046]/10 text-[#066046] rounded-lg">
                    <span className="material-symbols-outlined">filter_list</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Dosha Filter</p>
                    <p className="text-sm font-bold text-[#066046]">All Types</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </div>
              <div className="bg-white p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#066046]/10 text-[#066046] rounded-lg">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Last Visit</p>
                    <p className="text-sm font-bold text-[#066046]">This Month</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </div>
              <div className="bg-white p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#066046]/10 text-[#066046] rounded-lg">
                    <span className="material-symbols-outlined">diversity_3</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Gender</p>
                    <p className="text-sm font-bold text-[#066046]">All Genders</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </div>
              <div className="bg-white p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#066046]/10 text-[#066046] rounded-lg">
                    <span className="material-symbols-outlined">sort_by_alpha</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sort By</p>
                    <p className="text-sm font-bold text-[#066046]">Recently Added</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest">Patient ID</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest">Name</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest text-center">Age</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest">Gender</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest">Dosha</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5">
                        <span className="font-mono text-xs font-bold text-[#066046] bg-[#066046]/10 px-2 py-1 rounded">{patient.patientId}</span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <img alt={patient.name} className="w-10 h-10 rounded-xl object-cover" src={patient.avatar} />
                          <div>
                            <p className="text-sm font-bold text-slate-900">{patient.name}</p>
                            <p className="text-[11px] text-slate-500">Last Treatment: {patient.lastTreatment}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center text-sm font-medium text-slate-900">{patient.age}</td>
                      <td className="px-8 py-5 text-sm text-slate-600 font-medium">{patient.gender}</td>
                      <td className="px-8 py-5">
                        <span className={`${getDoshaStyles(patient.dosha)} text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tight`}>{patient.dosha}</span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-[#066046] hover:bg-[#066046]/10 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-[#066046] hover:bg-slate-100 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="bg-slate-50 px-8 py-4 flex items-center justify-between border-t border-slate-200">
                <p className="text-xs text-slate-600 font-medium">Showing 1-4 of 128 patients</p>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-slate-400 hover:bg-white rounded-lg transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-[#066046] text-white rounded-lg">1</button>
                  <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-white rounded-lg">2</button>
                  <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-white rounded-lg">3</button>
                  <button className="p-2 text-slate-400 hover:bg-white rounded-lg transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bento Stats Summary */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-[#066046] mb-4">Patient Demographics</h4>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-600">
                      <span>Pitta</span>
                      <span>42%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 w-[42%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-600">
                      <span>Kapha</span>
                      <span>35%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[35%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-600">
                      <span>Vata</span>
                      <span>23%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-400 w-[23%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 bg-[#066046] p-6 rounded-2xl relative overflow-hidden group text-white border border-[#055239]">
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Insight of the Week</p>
                  <h4 className="text-lg font-bold mt-2 leading-tight">Patient intake is up 12% from last month.</h4>
                  <p className="text-sm mt-2 text-white/80">Most new patients are seeking Pitta-balancing therapies.</p>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-[120px] select-none group-hover:scale-110 transition-transform duration-700">trending_up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
