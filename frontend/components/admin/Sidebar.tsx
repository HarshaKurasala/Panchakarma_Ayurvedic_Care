'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activePage?: string;
}

export default function Sidebar({ activePage = 'Dashboard' }: SidebarProps) {
  const navItems = [
    { icon: 'grid_view', label: 'Dashboard', href: '/admin/dashboard' },
    { icon: 'person_outline', label: 'Patients', href: '/admin/patients' },
    { icon: 'medical_services', label: 'Specialists', href: '/admin/specialists' },
    { icon: 'calendar_today', label: 'Appointments', href: '#' },
    { icon: 'monitoring', label: 'Treatments', href: '#' },
    { icon: 'receipt_long', label: 'Financials', href: '#' },
  ];

  return (
    <aside className="hidden lg:flex" style={{
      width: '256px', minWidth: '256px', height: '100vh',
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      flexDirection: 'column',
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
        {navItems.map((item) => {
          const isActive = item.label === activePage;
          return (
            <Link key={item.label} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '10px 12px', borderRadius: '10px', textDecoration: 'none',
              fontSize: '14px', fontWeight: isActive ? 600 : 400,
              background: isActive ? 'linear-gradient(135deg, #066046 0%, #034230 100%)' : 'transparent',
              color: isActive ? '#ffffff' : '#64748b',
              boxShadow: isActive ? '0 4px 12px -2px rgba(6,96,70,0.3)' : 'none',
              transition: 'all 0.15s',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{item.icon}</span>
              <span style={{ fontSize: '14px' }}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ height: '16px' }} />
    </aside>
  );
}
