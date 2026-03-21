"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { dashboardAPI, getAuthToken } from "@/lib/api";

interface DashboardData {
  upcomingSessions: number;
  activeTreatment: string;
  treatmentHistory: number;
  dueAmount: number;
  harmonyScore: number;
  dosha: string;
  appointments: any[];
  payments: any[];
  notifications: any[];
}

export default function UserDashboard() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData>({
    upcomingSessions: 0,
    activeTreatment: "",
    treatmentHistory: 0,
    dueAmount: 0,
    harmonyScore: 0,
    dosha: "",
    appointments: [],
    payments: [],
    notifications: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          setLoading(false);
          router.push("/user/login");
          return;
        }

        const overview = await dashboardAPI.getOverview();
        const profile = await dashboardAPI.getProfile();
        
        setUserName(profile.patient?.fullName || "Guest");
        setData({
          upcomingSessions: overview.upcomingSessions || 0,
          activeTreatment: overview.activeTreatment || "Abhyanga",
          treatmentHistory: overview.treatmentHistory || 0,
          dueAmount: overview.dueAmount || 0,
          harmonyScore: overview.harmonyScore || 84,
          dosha: overview.dosha || "Vata-Pitta",
          appointments: overview.appointments || [],
          payments: overview.payments || [],
          notifications: overview.notifications || [],
        });
        setLoading(false);
      } catch (err) {
        console.error("Failed to load dashboard:", err);
        const errorMessage = (err as Error).message || "Failed to load dashboard";
        
        // Check if it's an authentication error
        if (errorMessage.includes("Unauthorized") || errorMessage.includes("401")) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
          setLoading(false);
          router.push("/user/login?error=session_expired");
          return;
        }
        
        // Check if user is not registered
        if (errorMessage.includes("not found") || errorMessage.includes("not registered")) {
          setLoading(false);
          setError("Your account is not registered in the system. Please contact support.");
          return;
        }
        
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  const handleBookSession = () => {
    router.push("/user/appointments");
  };

  const handlePayNow = () => {
    router.push("/user/billing");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/user/login");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Check if it's a network error
    const isNetworkError = error.includes('Cannot connect to backend') || 
                           error.includes('Network Error') ||
                           error.includes('Failed to fetch');
    
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark pt-20">
        <div className="text-center max-w-2xl px-4">
          <div className="mb-4">
            {isNetworkError ? (
              <span className="material-symbols-outlined text-red-600 text-6xl">cloud_off</span>
            ) : (
              <span className="material-symbols-outlined text-red-600 text-6xl">error</span>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            {isNetworkError ? 'Connection Error' : 'Error Loading Dashboard'}
          </h2>
          <p className="text-red-600 mb-6 max-w-md mx-auto whitespace-pre-wrap text-sm leading-relaxed">{error}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => {
                setError(null);
                setLoading(true);
                window.location.reload();
              }}
              className="px-6 py-2 bg-primary text-white rounded-xl font-bold hover:opacity-90"
            >
              Retry
            </button>
            {isNetworkError && (
              <a 
                href="http://localhost:5000/api/health"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:opacity-90"
              >
                Check Backend Status
              </a>
            )}
            <button 
              onClick={() => {
                localStorage.removeItem("authToken");
                localStorage.removeItem("user");
                router.push("/user/login");
              }}
              className="px-6 py-2 bg-slate-500 text-white rounded-xl font-bold hover:opacity-90"
            >
              Login Again
            </button>
          </div>
          {isNetworkError && (
            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg text-left">
              <p className="text-sm font-bold text-yellow-800 dark:text-yellow-200 mb-2">💡 Quick Fix:</p>
              <ol className="text-xs text-yellow-700 dark:text-yellow-300 list-decimal list-inside space-y-1">
                <li>Open terminal in the backend folder</li>
                <li>Run: <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">npm run dev</code></li>
                <li>Wait for "Server running on port 5000"</li>
                <li>Click "Retry" button above</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
      <aside className="w-64 border-r border-primary/10 bg-white dark:bg-background-dark/50 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">spa</span>
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Panchakarma</h1>
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">ayurvedic wellness</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/appointments">
            <span className="material-symbols-outlined">calendar_today</span>
            My Appointments
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/treatments">
            <span className="material-symbols-outlined">medical_services</span>
            My Treatments
          </a>
          <div className="relative group">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/diet-guide">
              <span className="material-symbols-outlined">restaurant</span>
              <span className="flex-1">Diet Guide</span>
              <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">info</span>
            </a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-full top-0 ml-2 w-48 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-primary/10 text-[11px] leading-relaxed z-50">
              <p className="font-bold text-primary mb-1">Nutrition Tip</p>
              <p className="text-slate-600 dark:text-slate-400">{data.dosha} benefits from warm, moist foods. Avoid cold salads and dry snacks today.</p>
              <div className="absolute top-4 -left-1 w-2 h-2 bg-white dark:bg-slate-800 border-l border-b border-primary/10 rotate-45"></div>
            </div>
          </div>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/billing">
            <span className="material-symbols-outlined">receipt_long</span>
            Billing
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/profile">
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-colors" href="/user/settings">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>
        
        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqm1h73otI5BGfYes9ePJ98cbSfGQVarlz1dqZ47dLZZX6GKe_s660slW9jbHEy3D-rmNna-c5tv4x2Rj15O-fLo4O-s_rbM71A-o82kIDeL1g3OKLoMYT4OsLzUQJUryhabpachccd8Q5Rfy4FHh3IoIwRJ-goF02WzgdhauQx7ceI8fRmBybVo69yfpN91dcgtz6trWi-EcnQQoAaUSqSAcBfO2UwKNMx9EKoZOCLAuEk-BtrP7VuO-yrWeygjWtsEwatRs8AKBP')"}}></div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">{userName}</p>
              <p className="text-xs text-slate-500 truncate uppercase tracking-tighter">{data.dosha} Prakriti</p>
            </div>
            <button 
              onClick={handleLogout}
              className="text-slate-400 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Namaste, {userName.split(' ')[0]}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Link 
                href="/user/notifications"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary/30 transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined">notifications</span>
              </Link>
              {data.notifications && data.notifications.length > 0 && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
              )}
            </div>
            <button 
              onClick={handleBookSession}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Book Session
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark/95">
          <div>
            <p className="text-slate-500 text-sm">Welcome back to your healing sanctuary.</p>
          </div>

        {/* Hero Section */}
        <section className="mb-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#066046] via-[#044a36] to-[#022e22] p-1 shadow-2xl">
          <div className="relative bg-black/10 rounded-[1.4rem] p-8 md:p-10 text-white flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Today's Wellness Focus
              </div>
              <h3 className="text-4xl font-black mb-4 leading-tight">Elevate Your Inner Calm</h3>
              <p className="text-emerald-50/70 text-lg leading-relaxed mb-8 max-w-2xl">
                {userName}, your <span className="text-emerald-300 font-bold underline decoration-emerald-500/30 text-xl">{data.dosha} dosha</span> is showing slight elevation today due to seasonal changes. To restore balance, prioritize grounding activities and nourishing warmth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-emerald-300 text-2xl">restaurant</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-200/60 uppercase tracking-widest mb-1">Diet Recommendation</p>
                    <p className="text-base font-medium">Warm soups &amp; cooked root vegetables for dinner to ground your energy.</p>
                  </div>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-emerald-300 text-2xl">self_improvement</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-200/60 uppercase tracking-widest mb-1">Mindful Action</p>
                    <p className="text-base font-medium">15 mins Nadi Shodhana Pranayama at sunset to balance the nervous system.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-64 h-64 border-4 border-white/10 rounded-full relative shrink-0">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="material-symbols-outlined text-[140px]">spa</span>
              </div>
              <div className="text-center z-10">
                <p className="text-[48px] font-black leading-none">{data.harmonyScore}%</p>
                <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mt-1">Harmony Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Upcoming Sessions</span>
              <span className="material-symbols-outlined text-primary text-lg">event</span>
            </div>
            <p className="text-xl font-bold">{data.upcomingSessions} Sessions</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Active Treatment</span>
              <span className="material-symbols-outlined text-blue-600 text-lg">healing</span>
            </div>
            <p className="text-xl font-bold">{data.activeTreatment}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Treatment History</span>
              <span className="material-symbols-outlined text-orange-600 text-lg">task_alt</span>
            </div>
            <p className="text-xl font-bold">{data.treatmentHistory} Total</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Due Amount</span>
              <span className="material-symbols-outlined text-red-600 text-lg">payments</span>
            </div>
            <p className="text-xl font-bold">₹{data.dueAmount}</p>
          </div>
        </div>

        {/* Activity Feed and Billing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Activity Feed */}
          <div className="lg:col-span-8">
            <section className="bg-white dark:bg-slate-800 rounded-3xl border border-primary/5 shadow-sm overflow-hidden flex flex-col h-[520px]">
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 sticky top-0 z-10">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  Activity &amp; Treatment Feed
                </h3>
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-700/50 p-1 rounded-lg">
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md bg-white dark:bg-slate-800 shadow-sm text-primary">All Activity</button>
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md text-slate-400 hover:bg-white dark:hover:bg-slate-800">Scheduled</button>
                  <button className="px-3 py-1 text-[10px] font-bold rounded-md text-slate-400 hover:bg-white dark:hover:bg-slate-800">History</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{scrollbarWidth: 'thin'}}>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Upcoming Schedule</h4>
                  <div className="space-y-4">
                    {data.appointments && data.appointments.length > 0 ? (
                      data.appointments.filter((apt: any) => apt.status === 'scheduled').map((apt: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 text-primary shrink-0">
                            <span className="text-[10px] font-bold uppercase">
                              {new Date(apt.dateTime).toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                            <span className="text-lg font-black leading-none">
                              {new Date(apt.dateTime).getDate()}
                            </span>
                          </div>
                          <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-bold text-sm">{apt.therapyName}</h5>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {new Date(apt.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {apt.doctorName} {apt.sessionNumber ? `• Session ${apt.sessionNumber}/${apt.totalSessions}` : ''}
                                </p>
                              </div>
                              <button 
                                onClick={() => router.push(`/user/appointments?reschedule=${apt.id}`)}
                                className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors"
                              >
                                Reschedule
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 text-sm">No upcoming appointments</p>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Completed Treatments</h4>
                  <div className="space-y-4">
                    {data.appointments && data.appointments.length > 0 ? (
                      data.appointments.filter((apt: any) => apt.status === 'completed').map((apt: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 shrink-0">
                            <span className="material-symbols-outlined text-xl">check_circle</span>
                          </div>
                          <div className="flex-1 border-b border-slate-50 dark:border-slate-700/50 pb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-bold text-sm">{apt.therapyName}</h5>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  Completed on {new Date(apt.dateTime).toLocaleDateString()} • ~60 min session
                                </p>
                              </div>
                              <button className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">download</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 text-sm">No completed treatments yet</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Billing Summary */}
          <div className="lg:col-span-4">
            <section className="bg-white dark:bg-slate-800 rounded-3xl border border-primary/5 shadow-sm overflow-hidden flex flex-col h-[520px]">
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 sticky top-0 z-10">
                <h3 className="text-md font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">receipt_long</span>
                  Billing Summary
                </h3>
                <button className="text-[10px] font-bold text-primary hover:underline">History</button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-6" style={{scrollbarWidth: 'thin'}}>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-0.5">Unpaid Balance</p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">₹{data.dueAmount}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                    </div>
                  </div>
                  <button 
                    onClick={handlePayNow}
                    className="w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:shadow-lg hover:shadow-primary/20 transition-all mt-2"
                  >
                    Pay Now
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Invoices</h4>
                  <div className="space-y-2">
                    {data.payments && data.payments.length > 0 ? (
                      data.payments.map((payment: any, idx: number) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 border border-transparent hover:border-slate-100 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                              <span className="material-symbols-outlined text-slate-500 text-sm">description</span>
                            </div>
                            <div>
                              <p className="text-[11px] font-bold">{payment.invoiceNumber}</p>
                              <p className="text-[10px] text-slate-400">{new Date(payment.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <p className="text-[11px] font-bold">₹{payment.amount}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 text-sm">No invoices</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
