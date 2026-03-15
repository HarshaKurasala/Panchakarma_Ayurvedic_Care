'use client';

export default function RegistrationAnalytics() {
  return (
    <div style={{
      background: '#ffffff', borderRadius: '24px', padding: '24px',
      border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>Registration Analytics</h3>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Monthly growth comparison (Current Year)</p>
        </div>
        <div style={{ display: 'flex', padding: '4px', background: '#f1f5f9', borderRadius: '12px', gap: '2px' }}>
          {['7D', '1M', '1Y'].map((t) => (
            <button key={t} style={{
              padding: '5px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontSize: '12px', fontWeight: 700,
              background: t === '1M' ? '#fff' : 'transparent',
              color: t === '1M' ? '#066046' : '#64748b',
              boxShadow: t === '1M' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
        <svg style={{ width: '100%', height: '170px' }} preserveAspectRatio="none" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="graphGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#066046" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#066046" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g opacity="0.15">
            <line stroke="#cbd5e1" strokeDasharray="4" x1="0" x2="800" y1="50" y2="50" />
            <line stroke="#cbd5e1" strokeDasharray="4" x1="0" x2="800" y1="100" y2="100" />
            <line stroke="#cbd5e1" strokeDasharray="4" x1="0" x2="800" y1="150" y2="150" />
          </g>
          <path d="M0,170 C80,160 120,40 200,80 C280,120 350,20 450,50 C550,80 700,10 800,40 L800,200 L0,200 Z" fill="url(#graphGrad)" />
          <path d="M0,170 C80,160 120,40 200,80 C280,120 350,20 450,50 C550,80 700,10 800,40" fill="none" stroke="#066046" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <circle cx="200" cy="80" fill="white" r="4" stroke="#066046" strokeWidth="2" />
          <circle cx="450" cy="50" fill="white" r="4" stroke="#066046" strokeWidth="2" />
          <circle cx="800" cy="40" fill="white" r="4" stroke="#066046" strokeWidth="2" />
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m) => (
            <span key={m} style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
