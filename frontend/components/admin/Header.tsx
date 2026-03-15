'use client';

export default function Header() {
  return (
    <header style={{
      height: '64px', minHeight: '64px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Search */}
      <div style={{ position: 'relative', width: '384px' }}>
        <span className="material-symbols-outlined" style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          color: '#94a3b8', fontSize: '20px',
        }}>search</span>
        <input
          type="text"
          placeholder="Search patients, records or treatments..."
          style={{
            width: '100%', padding: '8px 16px 8px 40px',
            background: '#f1f5f9', border: 'none',
            borderRadius: '10px', fontSize: '14px',
            color: '#334155', outline: 'none',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        />
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Mic */}
        <button style={{
          width: '40px', height: '40px', borderRadius: '50%', border: 'none',
          background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#64748b' }}>mic</span>
        </button>

        {/* Notifications */}
        <button style={{
          width: '40px', height: '40px', borderRadius: '50%', border: 'none',
          background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#64748b' }}>notifications</span>
          <span style={{
            position: 'absolute', top: '10px', right: '10px',
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#ef4444', border: '2px solid #fff',
          }} />
        </button>

        {/* Settings */}
        <button style={{
          width: '40px', height: '40px', borderRadius: '50%', border: 'none',
          background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#64748b' }}>settings</span>
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />

        {/* Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #066046, #10b981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '12px', fontWeight: 700, flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Alexander Pierce</span>
        </div>
      </div>
    </header>
  );
}
