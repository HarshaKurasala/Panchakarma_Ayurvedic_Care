'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    password: '',
    termsAccepted: false,
  });

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          age: parseInt(formData.age),
          role: 'patient',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        setLoading(false);
        return;
      }

      // Redirect to login
      router.push('/user/login?registered=true');
    } catch (err) {
      setError('Connection error. Make sure backend is running.');
      setLoading(false);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const getProgressBars = () => {
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`w-12 h-1 rounded-full transition-all ${
          i < currentStep ? 'bg-emerald-light/60' : i === currentStep - 1 ? 'bg-white/100' : 'bg-white/20'
        }`}
      />
    ));
  };

  return (
    <div className="relative w-screen h-screen bg-black font-body text-white antialiased overflow-x-hidden" suppressHydrationWarning>
      {/* Top Logo */}
      <div className="fixed top-8 left-8 z-50">
        <span className="font-headline font-extrabold tracking-tighter text-2xl">VEDACARE</span>
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <button
            key={i}
            onClick={() => goToStep(i + 1)}
            className={`w-3 h-3 rounded-full transition-all ring-offset-4 ring-offset-black ring-1 ${
              currentStep === i + 1
                ? 'bg-white ring-white/40'
                : 'bg-white/20 hover:bg-white ring-white/0 hover:ring-white/40'
            }`}
          />
        ))}
      </div>

      {/* Progress Bars */}
      <div className="absolute top-12 left-0 right-0 z-20 flex justify-center gap-2">
        {getProgressBars()}
      </div>

      {/* Step 1: Name */}
      {currentStep === 1 && (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Serene sunrise over mist-covered mountains"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdZHuGrms5Z11DiI5faN4beMWOsSskW5G2o9iMrVlIiMAGJd9ftPC2tB5SY2qbK2QCugIZndIaaoxTIPPjS67tvZqa09u3aO6s4l54zRI1-bZUdaJt51H6ZsVh2RL5-h9xtgOO_25XJp9tZR3U6ULoTUm6DkzDumL_zRRsEnIxhQGa8JAmXFBmUs2NeyAveRJbofhPXnIG62EL8PD7Rlub4cjrBEAi0q2WvSoFEpH9r9Q2hBt3v9RFGZ041kyuys1I73azvKhX4_z5"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6 text-center">
            <span className="inline-block mb-6 text-emerald-light font-bold tracking-[0.2em] uppercase text-sm">
              The Beginning
            </span>
            <h1 className="font-serif italic text-5xl md:text-7xl mb-8 leading-tight text-shadow-lg">
              Welcome to your sanctuary. <br /> What is your name?
            </h1>
            <div className="mt-12 space-y-8">
              <input
                className="w-full bg-transparent border-b-2 border-white/30 text-3xl md:text-4xl text-center py-4 focus:outline-none focus:border-emerald-light transition-colors placeholder:text-white/20 font-light"
                placeholder="Your full name"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
              />
              <button
                onClick={() => goToStep(2)}
                className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-deep text-white text-lg font-bold rounded-full hover:bg-emerald-700 transition-all shadow-2xl hover:scale-105"
              >
                Continue my journey
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Email & Age */}
      {currentStep === 2 && (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Close up of a healing herbal tea being poured"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHxWQpnjqw6iprygz0Vp0U00qlgi0WKLG00SjglovMxKYYdZ2LeewXB7fqup0nMccIHIT2OTkB4phDpAjdo72yhNco6il_9kd6kiaLzEa9VgoiMt-N4Vdkb6PG9pWzwsQwC7qnXhNrRyVxf2X-s06LOVTypDQzHkCcnx6mSL_7QD3RmurUQx9yrAQqJZaIN82FNY-JvCpj9EF28L54V9vVmNJTpnvA7BQ6gBFPVmWLhl2v_zitVQBsScJmpV322LKnntRFXTiDY_Pg"
            />
            <div className="absolute inset-0 bg-emerald-deep/30"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6 text-center">
            <span className="inline-block mb-6 text-emerald-light font-bold tracking-[0.2em] uppercase text-sm">
              Connection
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl mb-8 leading-tight text-shadow-lg">
              How may we <br /> reach your soul?
            </h2>
            <div className="mt-12 space-y-12">
              <div className="space-y-4">
                <input
                  className="w-full bg-transparent border-b-2 border-white/30 text-2xl md:text-3xl text-center py-4 focus:outline-none focus:border-emerald-light transition-colors placeholder:text-white/20 font-light"
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <input
                  className="w-full bg-transparent border-b-2 border-white/30 text-2xl md:text-3xl text-center py-4 focus:outline-none focus:border-emerald-light transition-colors placeholder:text-white/20 font-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Your Age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => goToStep(3)}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-deep text-white text-lg font-bold rounded-full hover:bg-emerald-700 transition-all shadow-2xl"
                >
                  Next step
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  onClick={() => goToStep(1)}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Password */}
      {currentStep === 3 && (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Quiet morning light in a wooden temple"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlQeiUrzuYbWqqHBBm5fe-Fz5g2Q9X0wqShnAajESTu1c8HFCcNWLohfyUyLx_Q9vythRrxN-_OdCvHo04yiPueKMskoKqmuu2ehO_1ZzwXT9FJEBomec8__rY7kLqlbVRFVB1QIRpRndikdvEjLpVO1s4dLQUQxlZTJSYp-aTjEVjIh7tEQWU5KMXrbJZ2kw5SdzECe4zhPL4OoS5dPK8AdODVlN_roJ26yqQOh9tsBEFmN14gcydz9lT6ZUHl0AXv_D-bQjaGAR"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6 text-center">
            <span className="inline-block mb-6 text-emerald-light font-bold tracking-[0.2em] uppercase text-sm">
              Security
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl mb-8 leading-tight text-shadow-lg">
              Create your <br /> private sanctuary.
            </h2>
            <div className="mt-12 space-y-12">
              <div className="space-y-4">
                <input
                  className="w-full bg-transparent border-b-2 border-white/30 text-2xl md:text-3xl text-center py-4 focus:outline-none focus:border-emerald-light transition-colors placeholder:text-white/20 font-light"
                  placeholder="Create a password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                <p className="text-white/40 text-sm">Minimum 8 characters to ensure your data stays sacred.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => goToStep(4)}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-deep text-white text-lg font-bold rounded-full hover:bg-emerald-700 transition-all shadow-2xl"
                >
                  Finalize your space
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  onClick={() => goToStep(2)}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Terms & Submit */}
      {currentStep === 4 && (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Person looking out at a peaceful forest"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEwjHyK5GoboJHubyqut3UxWiSdfrNgn9p2ILvkURlk_UUr6ceU2u36y_tzS7ZUArzlzlFEoDNhNvxI7ZvhOdto2Pp4_CMX4DgCSOEy0wBNa02WUhc_onOr3GEdxeF8gHv4PReYAugIQG-PebHIY9mmaIGCCtQXXmbr1zptCZoLGrKYjT-Ksu8-jiDIlISzDJkvf13_TwazwkPexNkd3Z0Pn0igDTGRsd3qlxqs4kLnc82n1ZMNWBcuTYuy-2Dq2CThKLUHQOxJ_Eg"
            />
            <div className="absolute inset-0 bg-emerald-deep/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6 text-center">
            <span className="inline-block mb-6 text-emerald-light font-bold tracking-[0.2em] uppercase text-sm">
              Commitment
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl mb-8 leading-tight text-shadow-lg">
              Ready to begin?
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div className="glass-panel p-8 rounded-3xl">
                <div className="flex items-start gap-4 text-left">
                  <input
                    className="mt-1 w-6 h-6 rounded border-white/20 bg-white/10 text-emerald-deep focus:ring-emerald-light transition-all disabled:opacity-50"
                    id="terms-final"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                    disabled={loading}
                  />
                  <label className="text-sm leading-relaxed text-white/90" htmlFor="terms-final">
                    I acknowledge that my wellness journey is a sacred commitment. I agree to the{' '}
                    <Link className="underline font-bold decoration-emerald-light" href="#">
                      Terms of Service
                    </Link>{' '}
                    and allow VedaCare to protect my clinical and holistic data.
                  </label>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-8">
                <button
                  className="w-full max-w-md py-6 bg-emerald-deep text-white text-2xl font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-[0_0_50px_rgba(6,78,59,0.5)] border border-emerald-light/30 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  type="submit"
                  disabled={!formData.termsAccepted || loading}
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating...
                    </>
                  ) : (
                    'Awaken My Journey'
                  )}
                </button>
                <div className="space-y-2">
                  <p className="text-white/60">Already walking this path?</p>
                  <Link className="text-emerald-light font-bold text-lg hover:underline" href="/user/login">
                    Log in to your dashboard
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
