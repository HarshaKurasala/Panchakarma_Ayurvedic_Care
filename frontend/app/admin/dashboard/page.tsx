import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsGrid from '@/components/admin/StatsGrid';
import RegistrationAnalytics from '@/components/admin/RegistrationAnalytics';
import RevenueMix from '@/components/admin/RevenueMix';
import ActiveTreatments from '@/components/admin/ActiveTreatments';
import RecentPayments from '@/components/admin/RecentPayments';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFB]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F8FAFB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

          {/* Stats */}
          <StatsGrid />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="lg:col-span-2">
              <RegistrationAnalytics />
            </div>
            <div className="lg:col-span-1">
              <RevenueMix />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 pb-6 md:pb-8">
            <div className="lg:col-span-2">
              <ActiveTreatments />
            </div>
            <div className="lg:col-span-1">
              <RecentPayments />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
