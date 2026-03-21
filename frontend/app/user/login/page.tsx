'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { authAPI, setAuthToken } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionExpired, setSessionExpired] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if session expired
    if (searchParams.get('error') === 'session_expired') {
      setSessionExpired(true);
      setError('Your session has expired. Please log in again.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await Promise.race([
        fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout after 30 seconds')), 30000)
        ),
      ]) as Response;

      const data = await response.json();

      if (!response.ok) {
        // Check if user is not registered
        if (response.status === 404 || data.error?.includes('not found')) {
          setError('Account not found. Please check your email or create a new account.');
          setLoading(false);
          return;
        }
        
        // Check if credentials are invalid
        if (response.status === 401 || data.error?.includes('invalid') || data.error?.includes('incorrect')) {
          setError('Invalid email or password. Please try again.');
          setLoading(false);
          return;
        }

        setError(data.error || 'Login failed. Please try again.');
        setLoading(false);
        return;
      }

      // Verify user is registered (check if response has user data)
      if (!data.user || !data.user.id) {
        setError('User account data is invalid. Please contact support.');
        setLoading(false);
        return;
      }

      // For patient login, verify user is patient role
      if (data.user.role !== 'patient') {
        setError('Access denied. Patient credentials required. Please use the appropriate dashboard login.');
        setLoading(false);
        return;
      }

      // Store token and user data
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setAuthToken(data.token);

      // Redirect to dashboard
      setLoading(false);
      router.push('/user/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      const errorMsg = (err as Error).message;
      
      if (errorMsg.includes('Failed to fetch') || errorMsg.includes('Network')) {
        setError(`Network Error: Cannot connect to backend server.

Please ensure:
1. Backend server is running (npm run dev in backend folder)
2. Backend is on http://localhost:5000
3. Check your internet connection

Error: ${errorMsg}`);
      } else if (errorMsg.includes('timeout')) {
        setError('Request timeout. The server took too long to respond. Please try again.');
      } else {
        setError('Connection error. Please make sure the backend server is running.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="font-body text-white/90" suppressHydrationWarning>
        {/* Background Container */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <img
            alt="Misty Ancient Forest"
            className="w-full h-full object-cover animate-float opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQT2gu4HwenUk6KEVzQYtjgXfhyoHvQQ10dhQnopIaa8jBB38tunwaGWh8IKjBRPTwe_KU5Yq6TdNIYyWdbCn_ctZkhZMx4mTTIS6RoJHs1mxPpiI7fza-wlWecq9JkunuBI4g9ewj4nf6FENte8Fidf3IeEBdw03qI3nU1vm1yPsQ-vI7OwgfTH4K-QBeDhDqKwosQV8KctjYe0_1oH4mRWS0ibXzDcoy5f0OIzC2CHnzmaLjP55LvKEUi1S27WBGB7E0b12HBAL"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050a09]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-900/10"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pt-32 md:pt-40">
          {/* Logo */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 transition-opacity duration-1000">
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="material-symbols-outlined text-3xl font-light text-emerald-300">spa</span>
              <span className="font-headline tracking-[0.3em] uppercase text-sm font-light">Panchakarma Ayurvedic Care</span>
            </div>
          </div>

          {/* Login Form Section */}
          <section className="w-full max-w-lg animate-fade-in-delayed">
            <div className="glass-morphism rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl">
              {/* Header */}
              <header className="mb-12">
                <h1 className="font-headline font-extralight text-4xl md:text-5xl tracking-tight mb-4 text-white">
                  Return to <span className="text-emerald-300 italic">Balance</span>
                </h1>
                <p className="text-white/40 text-sm tracking-widest uppercase font-light">Sign in to your private dashboard</p>
              </header>

              {/* Form */}
              <form className="space-y-10" onSubmit={handleSubmit}>
                {/* Session Expired Alert */}
                {sessionExpired && (
                  <div className="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/50 text-yellow-200 text-sm">
                    <p className="font-semibold mb-1">Session Expired</p>
                    <p>Your session has expired. Please log in again to continue.</p>
                  </div>
                )}

                {/* Error Message */}
                {error && !sessionExpired && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                    {error}
                  </div>
                )}

                {/* Email Input */}
                <div className="relative">
                  <input
                    className="ethereal-input w-full text-center placeholder:text-center disabled:opacity-50"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    className="ethereal-input w-full text-center placeholder:text-center disabled:opacity-50"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-emerald-300 transition-colors disabled:opacity-50"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>

                {/* Checkbox and Forgot Password */}
                <div className="flex flex-col items-center gap-4 text-xs tracking-wider text-white/40 font-light">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors disabled:opacity-50">
                    <input
                      className="rounded-full bg-transparent border-white/20 text-emerald-600 focus:ring-0 w-3 h-3 disabled:opacity-50"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={loading}
                    />
                    Remember me
                  </label>
                  <Link
                    className="hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-emerald-800"
                    href="#"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    className="w-full py-5 rounded-full bg-emerald-sanctuary text-white tracking-[0.2em] uppercase text-xs font-bold hover:bg-emerald-700 transition-all duration-500 shadow-[0_0_40px_rgba(6,78,59,0.3)] hover:shadow-[0_0_60px_rgba(6,78,59,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Entering...
                      </>
                    ) : (
                      'Enter the Sanctuary'
                    )}
                  </button>
                </div>
              </form>

              {/* Signup Link */}
              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-white/40 text-sm font-light">
                  New seeker?
                  <Link className="text-emerald-300 font-normal hover:text-emerald-200 ml-2 transition-colors" href="/user/register">
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <div className="mt-16 opacity-30 hover:opacity-60 transition-opacity max-w-sm text-center animate-pulse-slow">
            <p className="text-xs italic font-light tracking-wide leading-relaxed">
              "The natural force within each of us is the greatest healer of disease."
            </p>
          </div>

          {/* Footer */}
          <footer className="absolute bottom-8 w-full px-8 flex flex-col md:flex-row justify-center items-center gap-6 opacity-30 text-[10px] tracking-[0.2em] uppercase font-light">
            <span className="hidden md:inline">© 2024 VedaCare Sanctuary</span>
            <div className="flex gap-8">
              <Link className="hover:text-emerald-300 transition-colors" href="#">
                Privacy
              </Link>
              <Link className="hover:text-emerald-300 transition-colors" href="#">
                Terms of Peace
              </Link>
              <Link className="hover:text-emerald-300 transition-colors" href="#">
                Help
              </Link>
            </div>
          </footer>
        </main>

        {/* Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/p6-polkadots.png')] mix-blend-overlay"></div>
      </div>
    );
  }
