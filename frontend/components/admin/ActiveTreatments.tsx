'use client';

const treatments = [
  { name: 'Ananya Sharma', id: '#PK-2291', treatment: 'Abhyangam', course: '7-Day Course', doctor: 'Dr. Rajesh Varma', status: 'Upcoming', statusColor: '#d97706', statusBg: 'rgba(217,119,6,0.08)', statusBorder: 'rgba(217,119,6,0.2)' },
  { name: 'Vikram Singh', id: '#PK-2104', treatment: 'Shirodhara', course: 'Stress Protocol', doctor: 'Dr. Priya Nair', status: 'Active', statusColor: '#066046', statusBg: 'rgba(6,96,70,0.08)', statusBorder: 'rgba(6,96,70,0.2)' },
  { name: 'Rohan Kapoor', id: '#PK-2342', treatment: 'Basti Therapy', course: 'Detox Cycle', doctor: 'Dr. Amit Shah', status: 'Active', statusColor: '#066046', statusBg: 'rgba(6,96,70,0.08)', statusBorder: 'rgba(6,96,70,0.2)' },
  { name: 'Meera Iyer', id: '#PK-2388', treatment: 'Udvartanam', course: 'Weight Care', doctor: 'Dr. Sneha Rao', status: 'Completed', statusColor: '#2563eb', statusBg: 'rgba(37,99,235,0.08)', statusBorder: 'rgba(37,99,235,0.2)' },
  { name: 'Karan Malhotra', id: '#PK-2401', treatment: 'Nasya', course: 'Sinus Protocol', doctor: 'Dr. Rajesh Varma', status: 'Upcoming', statusColor: '#d97706', statusBg: 'rgba(217,119,6,0.08)', statusBorder: 'rgba(217,119,6,0.2)' },
  { name: 'Aditi Sen', id: '#PK-2415', treatment: 'Pizhichil', course: 'Rejuvenation', doctor: 'Dr. Priya Nair', status: 'Active', statusColor: '#066046', statusBg: 'rgba(6,96,70,0.08)', statusBorder: 'rgba(6,96,70,0.2)' },
  { name: 'Sanjay Dutt', id: '#PK-2422', treatment: 'Netra Tarpana', course: 'Eye Wellness', doctor: 'Dr. Amit Shah', status: 'Active', statusColor: '#066046', statusBg: 'rgba(6,96,70,0.08)', statusBorder: 'rgba(6,96,70,0.2)' },
];

const avatarColors = ['#d1fae5','#dbeafe','#fef3c7','#fce7f3','#ede9fe','#d1fae5','#fef9c3'];
const avatarText  = ['#066046','#2563eb','#d97706','#db2777','#7c3aed','#066046','#ca8a04'];

export default function ActiveTreatments() {
  return (
    <div style={{
      background: '#ffffff', borderRadius: '24px',
      border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>Active Treatments</h3>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Currently monitored therapy sessions</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '8px 16px', borderRadius: '12px', border: 'none',
          background: 'rgba(6,96,70,0.05)', color: '#066046',
          fontSize: '13px', fontWeight: 700, cursor: 'pointer',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
          Export
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Patient', 'Treatment', 'Specialist', 'Status'].map((h, i) => (
                <th key={h} style={{
                  padding: '12px 20px', fontSize: '10px', fontWeight: 700,
                  color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em',
                  textAlign: i === 3 ? 'right' : 'left',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {treatments.map((t, i) => (
              <tr key={i}
                style={{ borderTop: '1px solid #f1f5f9', transition: 'background 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#f8fafc'}
                onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'}
              >
                <td style={{ padding: '12px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                      background: avatarColors[i],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 700, color: avatarText[i],
                    }}>{t.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{t.name}</p>
                      <p style={{ fontSize: '11px', color: '#94a3b8' }}>{t.id}</p>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px 20px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{t.treatment}</p>
                  <p style={{ fontSize: '11px', color: '#066046', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.course}</p>
                </td>
                <td style={{ padding: '12px 20px', fontSize: '13px', color: '#64748b' }}>{t.doctor}</td>
                <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: '999px',
                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                    background: t.statusBg, color: t.statusColor, border: `1px solid ${t.statusBorder}`,
                  }}>{t.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
