'use client';

import { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

interface Transaction {
  id: string;
  date: string;
  patientName: string;
  patientInitials: string;
  patientColor: string;
  protocol: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
  avatar?: string;
}

export default function FinancialsPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('30days');
  const [currentPage, setCurrentPage] = useState(1);

  const transactions: Transaction[] = [
    {
      id: 'TXN001',
      date: 'Jun 14, 2024',
      patientName: 'Elena Kostic',
      patientInitials: 'EK',
      patientColor: 'bg-emerald-100',
      protocol: 'Abhyanga Massage',
      amount: '$1,200.00',
      status: 'paid',
    },
    {
      id: 'TXN002',
      date: 'Jun 12, 2024',
      patientName: 'Julian Moore',
      patientInitials: 'JM',
      patientColor: 'bg-orange-100',
      protocol: 'Panchakarma Detox',
      amount: '$3,500.00',
      status: 'pending',
    },
    {
      id: 'TXN003',
      date: 'Jun 10, 2024',
      patientName: 'Marcus Thorne',
      patientInitials: 'MT',
      patientColor: 'bg-purple-100',
      protocol: 'Shirodhara Treatment',
      amount: '$850.00',
      status: 'overdue',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKUT5qmuSozbV4yJLlaWbiLBVHaJrWzSDXDK3GITekN_-uOT8VgMO4-XThecHClhzy5eRO3c6p2ZDcfsH8jRqqPa4ciSsFJyWtRMZp-J_oeH7WVJrw-6ufQhTqfay91XzbcgKcDBfHIohoxKgiWgFKSDVfbbP200jdbqcEyu8ax8ojSNdojqcAA2UWHtCs6pAEw4OScbE0xBZKoGTWB08BpG3vFfXbpFo5YsYJdLnh5_3uyzsPaj4BG7IWwyaEv4aH8vt4I8tl-gPR',
    },
    {
      id: 'TXN004',
      date: 'Jun 08, 2024',
      patientName: 'Sara Al-Farsi',
      patientInitials: 'SA',
      patientColor: 'bg-teal-100',
      protocol: 'Ayurvedic Consult',
      amount: '$250.00',
      status: 'paid',
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
      case 'pending':
        return 'bg-orange-50 text-orange-700 border border-orange-100';
      case 'overdue':
        return 'bg-red-50 text-red-700 border border-red-100';
      default:
        return 'bg-slate-50 text-slate-700 border border-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return 'check_circle';
      case 'pending':
        return 'schedule';
      case 'overdue':
        return 'error';
      default:
        return 'info';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fdfb]">
      <Sidebar activePage="Financials" />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Billing & Finances
              </h2>
              <p className="text-slate-600 font-body mt-2">
                Manage the sanctuary's fiscal performance and recent activities.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Financial Health Cards */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">Financial Health</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    Live
                  </span>
                </div>

                {/* Stat Cards */}
                <div className="space-y-4">
                  {/* Total Revenue Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-emerald-50 rounded-xl">
                        <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                          account_balance_wallet
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-xs">arrow_upward</span> 12%
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Total Revenue
                    </span>
                    <div className="flex flex-col mt-2">
                      <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        $42,800
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">
                        vs. last month <span className="font-semibold text-slate-700">$38.2k</span>
                      </span>
                    </div>
                  </div>

                  {/* Unpaid Invoices Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-600/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-orange-50 rounded-xl">
                        <span className="material-symbols-outlined text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                          pending_actions
                        </span>
                      </div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-lg">
                        3 Overdue
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Unpaid Invoices
                    </span>
                    <div className="flex flex-col mt-2">
                      <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        12
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">
                        Current active billing cycles
                      </span>
                    </div>
                  </div>

                  {/* Pending Amount Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-600/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-teal-50 rounded-xl">
                        <span className="material-symbols-outlined text-teal-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                          schedule
                        </span>
                      </div>
                      <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-lg">
                        Stripe
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Pending Amount
                    </span>
                    <div className="flex flex-col mt-2">
                      <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        $4,500
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">
                        Processing to bank account
                      </span>
                    </div>
                  </div>

                  {/* Monthly Growth Card */}
                  <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-xl shadow-emerald-600/20 flex flex-col gap-1 relative overflow-hidden group">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="flex justify-between items-start mb-2 relative z-10">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <span className="material-symbols-outlined text-emerald-200" style={{ fontVariationSettings: "'FILL' 1" }}>
                          trending_up
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-100/70 relative z-10">
                      Monthly Growth
                    </span>
                    <div className="flex flex-col relative z-10">
                      <span className="text-3xl font-extrabold tracking-tight">+8.4%</span>
                      <span className="text-[11px] text-emerald-100 mt-1">
                        Exceeding target (5.0%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Revenue & Expenses Chart */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Revenue & Expenses</h3>
                      <p className="text-sm text-slate-600">Comparative financial trajectory for H1 2024</p>
                    </div>
                    <div className="flex items-center gap-6 bg-slate-50 px-4 py-2 rounded-xl">
                      <button className="flex items-center gap-2 group">
                        <span className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-600/10"></span>
                        <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">
                          Revenue
                        </span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <span className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/10"></span>
                        <span className="text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                          Expenses
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex-1 flex flex-col justify-end relative min-h-[400px]">
                    <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none opacity-50">
                      <div className="w-full border-t border-dashed border-slate-300 flex justify-end">
                        <span className="text-[10px] pr-2 -mt-2 text-slate-400">$10k</span>
                      </div>
                      <div className="w-full border-t border-dashed border-slate-300 flex justify-end">
                        <span className="text-[10px] pr-2 -mt-2 text-slate-400">$7.5k</span>
                      </div>
                      <div className="w-full border-t border-dashed border-slate-300 flex justify-end">
                        <span className="text-[10px] pr-2 -mt-2 text-slate-400">$5k</span>
                      </div>
                      <div className="w-full border-t border-dashed border-slate-300 flex justify-end">
                        <span className="text-[10px] pr-2 -mt-2 text-slate-400">$2.5k</span>
                      </div>
                      <div className="w-full border-t border-slate-300"></div>
                    </div>

                    {/* Chart Bars */}
                    <div className="flex items-end justify-around h-full pt-8 relative z-10 px-4">
                      {/* Jan */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[65%] group-hover:brightness-110 transition-all cursor-pointer relative">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              $6.5k
                            </div>
                          </div>
                          <div className="w-4 bg-orange-300 rounded-t-lg h-[30%] group-hover:bg-orange-400 transition-all cursor-pointer"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Jan</span>
                      </div>

                      {/* Feb */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[75%] group-hover:brightness-110 transition-all cursor-pointer"></div>
                          <div className="w-4 bg-orange-300 rounded-t-lg h-[35%] group-hover:bg-orange-400 transition-all cursor-pointer"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Feb</span>
                      </div>

                      {/* Mar */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[70%] group-hover:brightness-110 transition-all cursor-pointer"></div>
                          <div className="w-4 bg-orange-300 rounded-t-lg h-[45%] group-hover:bg-orange-400 transition-all cursor-pointer"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Mar</span>
                      </div>

                      {/* Apr */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[85%] group-hover:brightness-110 transition-all cursor-pointer"></div>
                          <div className="w-4 bg-orange-300 rounded-t-lg h-[32%] group-hover:bg-orange-400 transition-all cursor-pointer"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Apr</span>
                      </div>

                      {/* May */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[92%] group-hover:brightness-110 transition-all cursor-pointer"></div>
                          <div className="w-4 bg-orange-300 rounded-t-lg h-[28%] group-hover:bg-orange-400 transition-all cursor-pointer"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">May</span>
                      </div>

                      {/* Jun */}
                      <div className="flex flex-col items-center gap-4 w-12 group">
                        <div className="flex items-end gap-1.5 h-64">
                          <div className="w-4 bg-emerald-600 rounded-t-lg h-[100%] group-hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-emerald-600/20">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-100">
                              $10.2k
                            </div>
                          </div>
                          <div className="w-4 bg-orange-500 rounded-t-lg h-[50%] group-hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-orange-500/20"></div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-tighter">Jun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Table Header */}
              <div className="p-8 border-b border-slate-200 bg-white/50">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl">
                      <span className="material-symbols-outlined text-emerald-600">receipt_long</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Recent Transactions</h3>
                      <p className="text-sm text-slate-600">Real-time ledger of patient payments and billing.</p>
                    </div>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                        filter_list
                      </span>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-10 py-2.5 text-xs font-bold focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer"
                      >
                        <option value="all">Status: All Activity</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="overdue">Overdue</option>
                      </select>
                    </div>

                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                        calendar_month
                      </span>
                      <select
                        value={timeFilter}
                        onChange={(e) => setTimeFilter(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-10 py-2.5 text-xs font-bold focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer"
                      >
                        <option value="30days">Last 30 Days</option>
                        <option value="quarter">This Quarter</option>
                        <option value="year">This Year</option>
                      </select>
                    </div>

                    <button className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-all">
                      <span className="material-symbols-outlined text-sm">settings_input_component</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600">
                        Transaction Date
                      </th>
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600">
                        Patient Account
                      </th>
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600">
                        Care Protocol
                      </th>
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600">
                        Amount
                      </th>
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600 text-center">
                        Settlement
                      </th>
                      <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-slate-600 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-emerald-50/30 transition-colors group cursor-pointer">
                        <td className="px-8 py-6 text-sm text-slate-600 font-bold">
                          {transaction.date}
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            {transaction.avatar ? (
                              <img
                                alt={transaction.patientName}
                                src={transaction.avatar}
                                className="w-10 h-10 rounded-xl object-cover"
                              />
                            ) : (
                              <div className={`w-10 h-10 rounded-xl ${transaction.patientColor} flex items-center justify-center text-xs font-bold text-slate-700`}>
                                {transaction.patientInitials}
                              </div>
                            )}
                            <span className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                              {transaction.patientName}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                            {transaction.protocol}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                            {transaction.amount}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span
                            className={`inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${getStatusBadgeColor(
                              transaction.status
                            )}`}
                          >
                            <span className="material-symbols-outlined text-xs">
                              {getStatusIcon(transaction.status)}
                            </span>
                            {transaction.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                            <span className="material-symbols-outlined text-xl">open_in_new</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">
                  Displaying 4 / 128 Entries
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-10 h-10 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-30 disabled:hover:bg-white"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                          currentPage === page
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="flex items-center justify-center w-10 h-10 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Quote */}
            <div className="py-16 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-emerald-600 text-2xl">spa</span>
              </div>
              <p className="font-headline font-bold text-emerald-600 italic max-w-md tracking-tight text-xl leading-relaxed opacity-60">
                "Financial abundance is the flower of well-organized labor and disciplined stewardship."
              </p>
              <div className="mt-4 w-12 h-0.5 bg-emerald-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
