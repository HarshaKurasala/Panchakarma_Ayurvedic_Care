'use client';

import Link from 'next/link';

export default function LoginHubPage() {
  return (
    <div className="font-body text-white/90" suppressHydrationWarning>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          alt="Background"
          className="w-full h-full object-cover animate-float opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQT2gu4HwenUk6KEVzQYtjgXfhyoHvQQ10dhQnopIaa8jBB38tunwaGWh8IKjBRPTwe_KU5Yq6TdNIYyWdbCn_ctZkhZMx4mTTIS6RoJHs1mxPpiI7fza-wlWecq9JkunuBI4g9ewj4nf6FENte8Fidf3IeEBdw03qI3nU1vm1yPsQ-vI7OwgfTH4K-QBeDhDqKwosQV8KctjYe0_1oH4mRWS0ibXzDcoy5f0OIzC2CHnzmaLjP55LvKEUi1S27WBGB7E0b12HBAL"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050a09]"></div>
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000">
          <div className="flex items-center gap-3 opacity-100 hover:opacity-80 transition-opacity cursor-default">
            <span className="material-symbols-outlined text-4xl font-light text-emerald-300">spa</span>
            <div>
              <span className="font-headline tracking-[0.3em] uppercase text-lg font-light">Panchakarma</span>
              <span className="font-headline tracking-[0.2em] uppercase text-xs font-light block text-emerald-300">Management System</span>
            </div>
          </div>
        </div>

        <section className="w-full max-w-6xl mt-32">
          <div className="mb-16 text-center">
            <h1 className="font-headline font-extralight text-5xl md:text-6xl tracking-tight mb-4 text-white">
              Choose Your <span className="text-emerald-300 italic">Dashboard</span>
            </h1>
            <p className="text-white/60 text-lg tracking-widest uppercase font-light">Select your access level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Patient Dashboard */}
            <Link href="/user/login">
              <div className="group glass-morphism rounded-2xl p-8 hover:from-emerald-500/20 hover:to-emerald-600/20 hover:border-emerald-400/50 cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center text-center shadow-xl hover:shadow-emerald-500/20 hover:shadow-2xl">
                <div className="mb-4 p-4 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-all">
                  <span className="material-symbols-outlined text-4xl text-emerald-300">person</span>
                </div>
                <h2 className="font-headline text-2xl font-light tracking-wide mb-2 text-white">Patient</h2>
                <p className="text-white/60 text-sm font-light">Patient Dashboard</p>
                <div className="mt-4 text-emerald-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  View appointments, treatments, and health records →
                </div>
              </div>
            </Link>

            {/* Staff Dashboard */}
            <Link href="/staff/login">
              <div className="group glass-morphism rounded-2xl p-8 hover:from-teal-500/20 hover:to-teal-600/20 hover:border-teal-400/50 cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center text-center shadow-xl hover:shadow-teal-500/20 hover:shadow-2xl">
                <div className="mb-4 p-4 rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-all">
                  <span className="material-symbols-outlined text-4xl text-teal-300">person_check</span>
                </div>
                <h2 className="font-headline text-2xl font-light tracking-wide mb-2 text-white">Staff</h2>
                <p className="text-white/60 text-sm font-light">Staff & Therapist Dashboard</p>
                <div className="mt-4 text-teal-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Manage sessions, patients, and schedules →
                </div>
              </div>
            </Link>

            {/* Doctor Dashboard */}
            <Link href="/doctor/login">
              <div className="group glass-morphism rounded-2xl p-8 hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-400/50 cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center text-center shadow-xl hover:shadow-blue-500/20 hover:shadow-2xl">
                <div className="mb-4 p-4 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all">
                  <span className="material-symbols-outlined text-4xl text-blue-300">local_hospital</span>
                </div>
                <h2 className="font-headline text-2xl font-light tracking-wide mb-2 text-white">Doctor</h2>
                <p className="text-white/60 text-sm font-light">Medical Professional Dashboard</p>
                <div className="mt-4 text-blue-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Review patients, consultations, and treatment plans →
                </div>
              </div>
            </Link>

            {/* Admin Dashboard */}
            <Link href="/admin/login">
              <div className="group glass-morphism rounded-2xl p-8 hover:from-amber-500/20 hover:to-amber-600/20 hover:border-amber-400/50 cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center text-center shadow-xl hover:shadow-amber-500/20 hover:shadow-2xl">
                <div className="mb-4 p-4 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 transition-all">
                  <span className="material-symbols-outlined text-4xl text-amber-300">admin_panel_settings</span>
                </div>
                <h2 className="font-headline text-2xl font-light tracking-wide mb-2 text-white">Admin</h2>
                <p className="text-white/60 text-sm font-light">Administrative Dashboard</p>
                <div className="mt-4 text-amber-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Manage users, analytics, and system settings →
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm font-light">
              Don't have an account?{' '}
              <Link href="/user/register" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                Register here
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
