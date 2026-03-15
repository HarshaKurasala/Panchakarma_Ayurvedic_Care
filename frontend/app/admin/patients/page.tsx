'use client';

import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function PatientsPage() {

  const patients = [
    {
      id: '#PAC-9042',
      name: 'Rajesh Kumar',
      initials: 'RK',
      age: 42,
      gender: 'Male',
      dosha: 'Vata-Pitta',
      doshaColor: 'amber',
      history: 'Chronic lower back pain, Insomnia, Migraine issues',
      avatarColor: 'blue'
    },
    {
      id: '#PAC-9045',
      name: 'Sunita Patel',
      initials: 'SP',
      age: 35,
      gender: 'Female',
      dosha: 'Kapha',
      doshaColor: 'emerald',
      history: 'Joint pain, Weight management, Seasonal allergies',
      avatarColor: 'rose'
    },
    {
      id: '#PAC-8991',
      name: 'Amit Iyer',
      initials: 'AI',
      age: 29,
      gender: 'Male',
      dosha: 'Pitta',
      doshaColor: 'orange',
      history: 'Digestive disorders, Skin inflammation, Stress',
      avatarColor: 'indigo'
    },
    {
      id: '#PAC-9051',
      name: 'Meera Devi',
      initials: 'MD',
      age: 58,
      gender: 'Female',
      dosha: 'Vata',
      doshaColor: 'amber',
      history: 'Arthritis, Anxiety, Post-treatment recovery',
      avatarColor: 'teal'
    },
    {
      id: '#PAC-9102',
      name: 'Vikram Singh',
      initials: 'VS',
      age: 51,
      gender: 'Male',
      dosha: 'Kapha-Pitta',
      doshaColor: 'emerald',
      history: 'Respiratory issues, Sinusitis, High blood pressure',
      avatarColor: 'purple'
    }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#F8FAFB' }}>
      <Sidebar activePage="Patients" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#F8FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="md:p-6">
          {/* Header Actions */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b' }} className="md:text-2xl">Patients</h1>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }} className="md:text-sm">Manage and view all registered patient records</p>
              </div>
              <button style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '10px 16px', background: '#059669', color: '#fff',
                fontSize: '14px', fontWeight: 600, borderRadius: '8px',
                border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', marginRight: '6px' }}>add</span>
                Add Patient
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div style={{
            background: '#fff', padding: '16px', borderRadius: '12px',
            border: '1px solid #e2e8f0', marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="md:flex-row md:items-center">
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined" style={{
                    position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                    color: '#94a3b8', fontSize: '18px',
                  }}>search</span>
                  <input
                    type="text"
                    placeholder="Filter by name or ID..."
                    style={{
                      width: '100%', padding: '8px 12px 8px 40px',
                      border: '1px solid #e2e8f0', borderRadius: '8px',
                      fontSize: '14px', outline: 'none',
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <select style={{
                  padding: '8px 12px', fontSize: '14px',
                  border: '1px solid #e2e8f0', borderRadius: '8px',
                  background: '#fff', minWidth: '120px',
                }}>
                  <option value="">Dosha Type</option>
                  <option value="vata">Vata</option>
                  <option value="pitta">Pitta</option>
                  <option value="kapha">Kapha</option>
                </select>
                <select style={{
                  padding: '8px 12px', fontSize: '14px',
                  border: '1px solid #e2e8f0', borderRadius: '8px',
                  background: '#fff', minWidth: '100px',
                }}>
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button style={{
                  padding: '8px', border: '1px solid #e2e8f0',
                  borderRadius: '8px', background: '#fff', cursor: 'pointer',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#64748b' }}>refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Patients Table */}
          <div style={{
            background: '#fff', borderRadius: '12px',
            border: '1px solid #e2e8f0', overflow: 'hidden',
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Patient ID</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Name</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Age/Gender</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Dosha Type</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Medical History</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 500, color: '#475569' }}>{patient.id}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            background: '#dbeafe', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#1e40af',
                          }}>
                            {patient.initials}
                          </div>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{patient.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569' }}>{patient.age} / {patient.gender}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          display: 'inline-block', padding: '4px 10px', borderRadius: '12px',
                          fontSize: '11px', fontWeight: 600, background: '#fef3c7', color: '#92400e',
                        }}>
                          {patient.dosha}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#64748b', maxWidth: '200px' }}>
                        <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {patient.history}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button style={{
                          color: '#059669', fontSize: '13px', fontWeight: 600,
                          background: 'none', border: 'none', cursor: 'pointer',
                        }}>
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div style={{
              padding: '16px', borderTop: '1px solid #f1f5f9',
              display: 'flex', flexDirection: 'column', gap: '12px',
            }} className="sm:flex-row sm:items-center sm:justify-between">
              <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 1 to 5 of 48 entries</span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button style={{
                  padding: '6px 12px', border: '1px solid #e2e8f0',
                  borderRadius: '6px', fontSize: '13px', color: '#94a3b8',
                  background: '#fff', cursor: 'not-allowed',
                }}>Previous</button>
                <button style={{
                  padding: '6px 12px', background: '#059669',
                  border: '1px solid #059669', borderRadius: '6px',
                  fontSize: '13px', color: '#fff', cursor: 'pointer',
                }}>1</button>
                <button style={{
                  padding: '6px 12px', border: '1px solid #e2e8f0',
                  borderRadius: '6px', fontSize: '13px', color: '#475569',
                  background: '#fff', cursor: 'pointer',
                }}>2</button>
                <button style={{
                  padding: '6px 12px', border: '1px solid #e2e8f0',
                  borderRadius: '6px', fontSize: '13px', color: '#475569',
                  background: '#fff', cursor: 'pointer',
                }}>3</button>
                <button style={{
                  padding: '6px 12px', border: '1px solid #e2e8f0',
                  borderRadius: '6px', fontSize: '13px', color: '#475569',
                  background: '#fff', cursor: 'pointer',
                }}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
