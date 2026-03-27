"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  reorder_level: number;
  cost_per_unit: number;
  supplier: string;
  last_restocked: string;
  status: string;
}

export default function Inventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const itemsPerPage = 10;

  useEffect(() => {
    const allItems: InventoryItem[] = [
      { id: 1, name: "Sesame Oil Premium", category: "Oils", quantity: 245, unit: "Liters", reorder_level: 100, cost_per_unit: 450, supplier: "Organic Supplies Co", last_restocked: "2026-03-20", status: "In Stock" },
      { id: 2, name: "Coconut Oil Cold Pressed", category: "Oils", quantity: 180, unit: "Liters", reorder_level: 80, cost_per_unit: 380, supplier: "Kerala Exports", last_restocked: "2026-03-18", status: "In Stock" },
      { id: 3, name: "Brahmi Powder", category: "Herbs", quantity: 45, unit: "Kg", reorder_level: 50, cost_per_unit: 2800, supplier: "Herbal Traders", last_restocked: "2026-03-15", status: "Low Stock" },
      { id: 4, name: "Ashwagandha Extract", category: "Herbs", quantity: 32, unit: "Kg", reorder_level: 25, cost_per_unit: 3200, supplier: "Ayurveda Direct", last_restocked: "2026-03-19", status: "In Stock" },
      { id: 5, name: "Neem Oil Pure", category: "Oils", quantity: 95, unit: "Liters", reorder_level: 100, cost_per_unit: 520, supplier: "Organic Supplies Co", last_restocked: "2026-03-10", status: "Low Stock" },
      { id: 6, name: "Turmeric Root Powder", category: "Spices", quantity: 78, unit: "Kg", reorder_level: 50, cost_per_unit: 450, supplier: "Spice Master", last_restocked: "2026-03-21", status: "In Stock" },
      { id: 7, name: "Ginger Extract", category: "Herbs", quantity: 56, unit: "Kg", reorder_level: 40, cost_per_unit: 1800, supplier: "Herbal Traders", last_restocked: "2026-03-17", status: "In Stock" },
      { id: 8, name: "Massage Stones Set", category: "Equipment", quantity: 12, unit: "Sets", reorder_level: 15, cost_per_unit: 5000, supplier: "Wellness Supplies", last_restocked: "2026-03-09", status: "Low Stock" },
      { id: 9, name: "Herbal Paste Base", category: "Pastes", quantity: 150, unit: "Kg", reorder_level: 100, cost_per_unit: 800, supplier: "Paste Makers Inc", last_restocked: "2026-03-19", status: "In Stock" },
      { id: 10, name: "Essential Oil Storage Bottles", category: "Packaging", quantity: 8, unit: "Boxes", reorder_level: 10, cost_per_unit: 2500, supplier: "Packaging Pro", last_restocked: "2026-03-05", status: "Low Stock" },
      { id: 11, name: "Medicated Ghee", category: "Products", quantity: 34, unit: "Kg", reorder_level: 25, cost_per_unit: 6500, supplier: "Ghee Master", last_restocked: "2026-03-16", status: "In Stock" },
      { id: 12, name: "Treatment Room Linens", category: "Linens", quantity: 45, unit: "Sets", reorder_level: 30, cost_per_unit: 1200, supplier: "Linen Supplies", last_restocked: "2026-03-21", status: "In Stock" },
      { id: 13, name: "Shirodhara Equipment", category: "Equipment", quantity: 3, unit: "Units", reorder_level: 2, cost_per_unit: 45000, supplier: "Medical Equipment Co", last_restocked: "2026-02-10", status: "In Stock" },
      { id: 14, name: "Pizhichil Pouches", category: "Packaging", quantity: 200, unit: "Pieces", reorder_level: 150, cost_per_unit: 80, supplier: "Packaging Pro", last_restocked: "2026-03-20", status: "In Stock" }
    ];

    setItems(allItems);
  }, []);

  const filtered = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600";
      case "Low Stock": return "bg-red-100 dark:bg-red-500/20 text-red-600";
      case "Out of Stock": return "bg-slate-100 dark:bg-white/10 text-slate-600";
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors hover:text-primary" href="/doctor/therapies">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-sm">Therapies</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav font-semibold" href="/doctor/inventory">
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
                placeholder="Search inventory..."
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
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Inventory Management</h1>
              <p className="text-slate-500 text-sm mt-1">Track medical supplies and materials. Total: {filtered.length} items</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add</span>
              Add Item
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
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Inventory Table */}
          <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Item Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Quantity</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Cost/Unit</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Supplier</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {paginatedItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.category}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{item.quantity} {item.unit}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">₹{item.cost_per_unit}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.supplier}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                          <span className="size-2 rounded-full bg-current"></span>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors" title="Reorder">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">shopping_cart</span>
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
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filtered.length)} of {filtered.length} items
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
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      className={`size-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
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
