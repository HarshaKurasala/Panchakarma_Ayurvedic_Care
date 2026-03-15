'use client';

const payments = [
  { name: 'M. Gupta',  invoice: '#0921', amount: '$850.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'R. Khanna', invoice: '#0920', amount: '$1,240.00', status: 'Pending', statusColor: '#94a3b8', iconBg: 'rgba(148,163,184,0.1)', iconColor: '#94a3b8', icon: 'credit_card' },
  { name: 'S. Mehta',  invoice: '#0919', amount: '$450.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'J. Wilson', invoice: '#0918', amount: '$320.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'A. Verma',  invoice: '#0917', amount: '$1,100.00', status: 'Pending', statusColor: '#94a3b8', iconBg: 'rgba(148,163,184,0.1)', iconColor: '#94a3b8', icon: 'credit_card' },
  { name: 'P. Singh',  invoice: '#0916', amount: '$560.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'L. Morris', invoice: '#0915', amount: '$740.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'D. Rao',    invoice: '#0914', amount: '$980.00',   status: 'Pending', statusColor: '#94a3b8', iconBg: 'rgba(148,163,184,0.1)', iconColor: '#94a3b8', icon: 'credit_card' },
  { name: 'B. Chand',  invoice: '#0913', amount: '$410.00',   status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
  { name: 'F. Khan',   invoice: '#0912', amount: '$1,500.00', status: 'Paid',    statusColor: '#059669', iconBg: 'rgba(16,185,129,0.1)',  iconColor: '#059669', icon: 'payments' },
];

export default function RecentPayments() {
  return (
    <div style={{
      background: '#ffffff', borderRadius: '24px',
      border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>Recent Payments</h3>
        <a href="#" style={{ fontSize: '12px', fontWeight: 700, color: '#066046', textDecoration: 'none', background: 'rgba(6,96,70,0.05)', padding: '4px 12px', borderRadius: '8px' }}>See All</a>
      </div>

      <div style={{ padding: '8px', flex: 1, overflowY: 'auto' }}>
        {payments.map((p, i) => (
          <div key={i}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '12px', transition: 'background 0.15s', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#f8fafc'}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: p.iconColor }}>{p.icon}</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{p.name}</p>
                <p style={{ fontSize: '11px', color: '#94a3b8' }}>Inv {p.invoice}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{p.amount}</p>
              <p style={{ fontSize: '11px', fontWeight: 700, color: p.statusColor }}>{p.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 16px', borderTop: '1px solid #f1f5f9' }}>
        <div style={{
          padding: '14px 18px', borderRadius: '14px',
          background: 'rgba(6,96,70,0.05)', border: '1px solid rgba(6,96,70,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today&apos;s Total</p>
            <p style={{ fontSize: '18px', fontWeight: 900, color: '#066046', marginTop: '2px' }}>$4,520.00</p>
          </div>
          <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#066046', opacity: 0.4 }}>analytics</span>
        </div>
      </div>
    </div>
  );
}
