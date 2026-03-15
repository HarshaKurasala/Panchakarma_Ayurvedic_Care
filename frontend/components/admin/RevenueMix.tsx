'use client';

const legend = [
  { label: 'Panchakarma', value: '$24,500', color: '#066046' },
  { label: 'Products', value: '$8,200', color: '#C5A059' },
  { label: 'Consulting', value: '$4,100', color: '#34d399' },
  { label: 'Others', value: '$2,800', color: '#cbd5e1' },
];

export default function RevenueMix() {
  return (
    <div style={{
      background: '#ffffff', borderRadius: '24px', padding: '24px',
      border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>Revenue Mix</h3>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Service Distribution</p>
        </div>
        <button style={{
          width: '32px', height: '32px', borderRadius: '8px', border: 'none',
          background: '#f1f5f9', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#64748b' }}>more_horiz</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '148px', height: '148px' }}>
          <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="11" />
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#066046" strokeDasharray="163 251" strokeLinecap="round" strokeWidth="11" />
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#C5A059" strokeDasharray="50 251" strokeDashoffset="-168" strokeLinecap="round" strokeWidth="11" />
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#34d399" strokeDasharray="30 251" strokeDashoffset="-223" strokeLinecap="round" strokeWidth="11" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '22px', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>68%</span>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '3px' }}>Growth</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginTop: '20px', width: '100%' }}>
          {legend.map((l) => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: l.color, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l.label}</p>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{l.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
