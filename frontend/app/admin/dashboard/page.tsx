import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsGrid from '@/components/admin/StatsGrid';
import RegistrationAnalytics from '@/components/admin/RegistrationAnalytics';
import RevenueMix from '@/components/admin/RevenueMix';
import ActiveTreatments from '@/components/admin/ActiveTreatments';
import RecentPayments from '@/components/admin/RecentPayments';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#F8FAFB' }}>
      <Sidebar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#F8FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

          {/* Stats */}
          <StatsGrid />

          {/* Charts Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginTop: '24px' }}>
            <RegistrationAnalytics />
            <RevenueMix />
          </div>

          {/* Bottom Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginTop: '24px', paddingBottom: '32px' }}>
            <ActiveTreatments />
            <RecentPayments />
          </div>

        </div>
      </main>
    </div>
  );
}
