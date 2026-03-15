'use client';

const stats = [
  { icon: 'person_add', label: "Total Patients", value: '1,284', badge: '+12%', badgeColor: '#059669', badgeBg: 'rgba(16,185,129,0.08)', iconBg: 'rgba(6,96,70,0.1)', iconColor: '#066046', circleBg: 'rgba(6,96,70,0.05)', badgeIcon: 'arrow_upward' },
  { icon: 'stethoscope', label: 'Active Doctors', value: '24', badge: 'Current', badgeColor: '#64748b', badgeBg: '#f1f5f9', iconBg: 'rgba(37,99,235,0.1)', iconColor: '#2563eb', circleBg: 'rgba(37,99,235,0.05)', badgeIcon: null },
  { icon: 'schedule', label: 'Appointments', value: '158', badge: 'High Priority', badgeColor: '#d97706', badgeBg: 'rgba(217,119,6,0.08)', iconBg: 'rgba(217,119,6,0.1)', iconColor: '#d97706', circleBg: 'rgba(217,119,6,0.05)', badgeIcon: null },
  { icon: 'ecg_heart', label: 'Ongoing Therapy', value: '82', badge: 'Reports', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)', iconBg: 'rgba(124,58,237,0.1)', iconColor: '#7c3aed', circleBg: 'rgba(124,58,237,0.05)', badgeIcon: null },
  { icon: 'account_balance_wallet', label: 'Total Revenue', value: '$42.8k', badge: '+8.5%', badgeColor: '#059669', badgeBg: 'rgba(16,185,129,0.08)', iconBg: 'rgba(6,96,70,0.1)', iconColor: '#066046', circleBg: 'rgba(6,96,70,0.05)', badgeIcon: 'arrow_upward' },
];

export default function StatsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {stats.map((s) => (
        <div key={s.label} style={{
          background: '#ffffff', padding: '24px', borderRadius: '24px',
          border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative circle */}
          <div style={{
            position: 'absolute', right: '-16px', top: '-16px',
            width: '96px', height: '96px', borderRadius: '50%',
            background: s.circleBg,
          }} />
          {/* Icon */}
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px',
            background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '22px', color: s.iconColor }}>{s.icon}</span>
          </div>
          <p style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', lineHeight: 1.1 }}>{s.value}</h3>
            <span style={{
              fontSize: '10px', fontWeight: 700, color: s.badgeColor,
              background: s.badgeBg, padding: '2px 8px', borderRadius: '6px',
              display: 'flex', alignItems: 'center', gap: '2px',
            }}>
              {s.badgeIcon && <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>{s.badgeIcon}</span>}
              {s.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
