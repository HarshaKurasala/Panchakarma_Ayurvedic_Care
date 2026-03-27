"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PatientRecord {
  id: number;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: string;
  admission_date: string;
  days_in_clinic: number;
}

export default function PatientsList() {
  const [patients, setPatients] = useState<PatientRecord[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const router = useRouter();
  const itemsPerPage = 10;

  useEffect(() => {
    // Mock data with many patients for pagination
    const allPatients: PatientRecord[] = [
      { id: 1, name: "Rajesh Khanna", age: 45, gender: "M", condition: "Chronic Sinusitis", status: "Active", admission_date: "2026-03-10", days_in_clinic: 13 },
      { id: 2, name: "Meera Singh", age: 38, gender: "F", condition: "Arthritis", status: "Active", admission_date: "2026-03-22", days_in_clinic: 1 },
      { id: 3, name: "Amit Shah", age: 52, gender: "M", condition: "Digestive Reset", status: "Final Stage", admission_date: "2026-03-11", days_in_clinic: 12 },
      { id: 4, name: "Priya Sharma", age: 35, gender: "F", condition: "Migraine", status: "Active", admission_date: "2026-03-18", days_in_clinic: 5 },
      { id: 5, name: "Vikram Rao", age: 48, gender: "M", condition: "Back Pain", status: "Active", admission_date: "2026-03-19", days_in_clinic: 4 },
      { id: 6, name: "Anjali Verma", age: 42, gender: "F", condition: "Skin Disorder", status: "Improving", admission_date: "2026-03-05", days_in_clinic: 18 },
      { id: 7, name: "Suresh Kumar", age: 55, gender: "M", condition: "Hypertension", status: "Stable", admission_date: "2026-02-20", days_in_clinic: 32 },
      { id: 8, name: "Divya Patel", age: 40, gender: "F", condition: "Obesity", status: "Active", admission_date: "2026-03-01", days_in_clinic: 22 },
      { id: 9, name: "Rohit Singh", age: 36, gender: "M", condition: "Anxiety Disorder", status: "Active", admission_date: "2026-03-15", days_in_clinic: 8 },
      { id: 10, name: "Kavya Mishra", age: 29, gender: "F", condition: "Asthma", status: "Recovering", admission_date: "2026-03-12", days_in_clinic: 11 },
      { id: 11, name: "Arjun Nair", age: 50, gender: "M", condition: "Diabetes", status: "Monitoring", admission_date: "2026-02-28", days_in_clinic: 24 },
      { id: 12, name: "Neha Gupta", age: 33, gender: "F", condition: "Menstrual Disorder", status: "Active", admission_date: "2026-03-16", days_in_clinic: 7 },
      { id: 13, name: "Deepak Yadav", age: 47, gender: "M", condition: "Gastritis", status: "Improving", admission_date: "2026-03-02", days_in_clinic: 21 },
      { id: 14, name: "Sneha Bhat", age: 31, gender: "F", condition: "Joint Pain", status: "Active", admission_date: "2026-03-20", days_in_clinic: 3 },
      { id: 15, name: "Sandeep Malhotra", age: 54, gender: "M", condition: "Stress", status: "Active", admission_date: "2026-03-17", days_in_clinic: 6 }
    ];

    setPatients(allPatients);
  }, []);

  // Filter patients
  const filtered = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || patient.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Paginate
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPatients = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewProfile = (patientId: number) => {
    router.push(`/doctor/patients/${patientId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-100 dark:bg-blue-500/20 text-blue-600";
      case "Improving": return "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600";
      case "Stable": return "bg-slate-100 dark:bg-white/10 text-slate-600";
      case "Recovering": return "bg-orange-100 dark:bg-orange-500/20 text-orange-600";
      case "Monitoring": return "bg-purple-100 dark:bg-purple-500/20 text-purple-600";
      case "Final Stage": return "bg-red-100 dark:bg-red-500/20 text-red-600";
      default: return "bg-slate-100 dark:bg-white/10 text-slate-600";
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">spa</span>
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Panchakarma</h1>
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Specialists</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/appointments">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/doctor/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/therapies">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/analytics">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Analytics</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
                placeholder="Search patients..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-background-dark"></span>
            </button>
            <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #066046, #10b981)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Dr. Ayush Sharma</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark/95">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Patients</h1>
              <p className="text-slate-500 text-sm mt-1">Manage all patient records. Total: {filtered.length} patients</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add</span>
              Add Patient
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 flex gap-4">
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Improving">Improving</option>
              <option value="Stable">Stable</option>
              <option value="Recovering">Recovering</option>
              <option value="Monitoring">Monitoring</option>
              <option value="Final Stage">Final Stage</option>
            </select>
          </div>

          {/* Patients Table */}
          <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Age</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Condition</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Days</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {paginatedPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900 dark:text-white">{patient.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">{patient.age} y/o</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">{patient.condition}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(patient.status)}`}>
                          <span className="size-2 rounded-full bg-current"></span>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{patient.days_in_clinic}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewProfile(patient.id)}
                            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                            title="View Profile"
                          >
                            <span className="material-symbols-outlined text-primary">visibility</span>
                          </button>
                          <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-white/5">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filtered.length)} of {filtered.length} patients
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-base">chevron_left</span>
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageClick(pageNum)}
                        className={`size-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                          currentPage === pageNum
                            ? "bg-primary text-white"
                            : "border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
