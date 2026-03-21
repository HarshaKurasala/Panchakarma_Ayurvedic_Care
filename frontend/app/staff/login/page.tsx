'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function StaffLoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (searchParams.get('error') === 'session_expired') {
      setError('Your session has expired. Please log in again.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed. Please try again.');
        setLoading(false);
        return;
      }

      const allowedRoles = ['staff', 'therapist'];
      if (!allowedRoles.includes(data.user.role)) {
        setError('Access denied. Staff or therapist credentials required.');
        setLoading(false);
        return;
      }

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setLoading(false);
      router.push('/staff/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      const errorMsg = (err as Error).message;
      
      if (errorMsg.includes('Failed to fetch') || errorMsg.includes('Network')) {
        setError('Network Error: Cannot connect to backend server.');
      } else if (errorMsg.includes('timeout')) {
        setError('Request timeout. Please try again.');
      } else {
        setError('Connection error. Please make sure the backend server is running.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="font-body text-white/90" suppressHydrationWarning>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          alt="Staff Background"
          className="w-full h-full object-cover animate-float opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQT2gu4HwenUk6KEVzQYtjgXfhyoHvQQ10dhQnopIaa8jBB38tunwaGWh8IKjBRPTwe_KU5Yq6TdNIYyWdbCn_ctZkhZMx4mTTIS6RoJHs1mxPpiI7fza-wlWecq9JkunuBI4g9ewj4nf6FENte8Fidf3IeEBdw03qI3nU1vm1yPsQ-vI7OwgfTH4K-QBeDhDqKwosQV8KctjYe0_1oH4mRWS0ibXzDcoy5f0OIzC2CHnzmaLjP55LvKEUi1S27WBGB7E0b12HBAL"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050a09]"></div>
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 transition-opacity duration-1000">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <span className="material-symbols-outlined text-3xl font-light text-teal-300">person_check</span>
            <span className="font-headline tracking-[0.3em] uppercase text-sm font-light">Staff Dashboard</span>
          </div>
        </div>

        <section className="w-full max-w-lg animate-fade-in-delayed">
          <div className="glass-morphism rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl">
            <header className="mb-12">
              <h1 className="font-headline font-extralight text-4xl md:text-5xl tracking-tight mb-4 text-white">
                Staff <span className="text-teal-300 italic">Access</span>
              </h1>
              <p className="text-white/40 text-sm tracking-widest uppercase font-light">Staff & Therapist Dashboard</p>
            </header>

            <form className="space-y-10" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div className="text-left space-y-3">
                <label htmlFor="email" className="text-sm font-light tracking-wide">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="staff@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-teal-300/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div className="text-left space-y-3">
                <label htmlFor="password" className="text-sm font-light tracking-wide">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-teal-300/50 focus:bg-white/10 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 accent-teal-300"
                  />
                  <span className="font-light">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-light tracking-wide py-3 rounded-lg transition-all duration-300"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm font-light">
                Need help?{' '}
                <Link href="/login" className="text-teal-300 hover:text-teal-200 transition-colors">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function StaffLoginPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <StaffLoginContent />
    </Suspense>
  );
}
