'use client';

const navItems = [
  { icon: 'grid_view', label: 'Dashboard', active: true },
  { icon: 'person_outline', label: 'Patients' },
  { icon: 'medical_services', label: 'Specialists' },
  { icon: 'calendar_today', label: 'Appointments' },
  { icon: 'monitoring', label: 'Treatments' },
  { icon: 'receipt_long', label: 'Financials' },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: '256px', minWidth: '256px', height: '100vh',
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Logo */}
      <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '12px',
          background: '#066046',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: '22px' }}>spa</span>
        </div>
        <div>
          <h1 style={{ fontSize: '16px', fontWeight: 700, color: '#066046', lineHeight: 1.2 }}>Panchakarma</h1>
          <p style={{ fontSize: '10px', color: 'rgba(6,96,70,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Admin Dashboard</p>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
        {navItems.map((item) => (
          <a key={item.label} href="#" style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '10px 12px', borderRadius: '10px', textDecoration: 'none',
            fontSize: '14px', fontWeight: item.active ? 600 : 400,
            background: item.active ? 'linear-gradient(135deg, #066046 0%, #034230 100%)' : 'transparent',
            color: item.active ? '#ffffff' : '#64748b',
            boxShadow: item.active ? '0 4px 12px -2px rgba(6,96,70,0.3)' : 'none',
            transition: 'all 0.15s',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{item.icon}</span>
            <span style={{ fontSize: '14px' }}>{item.label}</span>
          </a>
        ))}
      </nav>

      <div style={{ height: '16px' }} />
    </aside>
  );
}
