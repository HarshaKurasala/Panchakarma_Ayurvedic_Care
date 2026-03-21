'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Therapy {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  availability: string;
}

export default function UserAppointments() {
  const router = useRouter();
  const [showBooking, setShowBooking] = useState(false);
  const [step, setStep] = useState(1);
  const [therapies, setTherapies] = useState<Therapy[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fetchLoading, setFetchLoading] = useState(false);

  const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  };

  const minDate = getTomorrowDate();

  useEffect(() => {
    if (showBooking) {
      const fetchData = async () => {
        setFetchLoading(true);
        try {
          const [therapiesRes, doctorsRes] = await Promise.all([
            fetch('http://localhost:5000/api/test-db/therapies'),
            fetch('http://localhost:5000/api/test-db/doctors')
          ]);

          if (therapiesRes.ok) {
            const data = await therapiesRes.json();
            setTherapies(data);
          }

          if (doctorsRes.ok) {
            const data = await doctorsRes.json();
            setDoctors(data);
          }
        } catch (err) {
          setError('Failed to load therapies and doctors');
        } finally {
          setFetchLoading(false);
        }
      };

      fetchData();
    }
  }, [showBooking]);

  const handleNextStep = () => {
    if (step === 1 && !selectedTherapy) {
      setError('Please select a therapy');
      return;
    }
    if (step === 2 && !selectedDoctor) {
      setError('Please select a doctor');
      return;
    }
    if (step === 3 && (!appointmentDate || !appointmentTime)) {
      setError('Please select date and time');
      return;
    }

    setError('');
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setError('');
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!selectedTherapy || !selectedDoctor || !appointmentDate || !appointmentTime) {
      setError('Please complete all fields');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/user/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          therapyId: selectedTherapy.id,
          doctorId: selectedDoctor.id,
          date: appointmentDate,
          time: appointmentTime
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book appointment');
      }

      setSuccess('✓ Appointment booked successfully!');
      setTimeout(() => {
        setShowBooking(false);
        setStep(1);
        setSelectedTherapy(null);
        setSelectedDoctor(null);
        setAppointmentDate('');
        setAppointmentTime('');
        setSuccess('');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full sticky top-0" data-purpose="main-navigation">
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#064e3b] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#064e3b] leading-none">Panchakarma</h1>
            <p className="text-[10px] text-[#6b7280]">Wellness Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a href="/user/dashboard" className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <span className="material-symbols-outlined text-xl">grid_view</span>
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="/user/appointments" className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm">
            <span className="material-symbols-outlined text-xl">timeline</span>
            <span className="font-semibold">My Appointments</span>
          </a>
          <a href="/user/treatments" className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <span className="material-symbols-outlined text-xl">spa</span>
            <span className="font-medium">My Treatments</span>
          </a>
          <a href="/user/diet-guide" className="flex items-center justify-between p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-xl">nutrition</span>
              <span className="font-medium">Diet Guide</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 font-bold italic">i</div>
          </a>
          <a href="/user/billing" className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span className="font-medium">Billing</span>
          </a>
          <a href="/user/profile" className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="font-medium">Profile</span>
          </a>
          <a href="/user/settings" className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img alt="Patient" className="w-10 h-10 rounded-full border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmKePd_EOHIFqJO0SL2uvWMll02td7LKCwX-_Ix0n3-77juB9V83uqLbNqvMczpW5BzmjVtnYPRzc7uc8G1PjcsgGBWk1YpF1u5ISTTWHcbM50Fa32kAq26NNP7KGQ-Llkx-d2bbaULWFLn8-DJAYlUvgvkHa6_3V8pzZL4uyU33WIt1caMYb7-7C1KFx80n0GsFbzwKo9e094MCiX6Y5MIgq-23ltgVNFOF86OPP9-2JbC9O91IOr2Ewr3aDMhBaiMTmF2uRqNuk" />
            <div>
              <p className="text-sm font-bold text-[#1f2937]">Patient</p>
              <p className="text-[10px] text-[#6b7280] uppercase">Wellness</p>
            </div>
          </div>
          <button className="text-[#6b7280] hover:text-[#064e3b] transition-colors">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b]">Wellness Journey</h2>
            <p className="text-[#6b7280] mt-1">Charting your path to holistic health and balance.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm relative text-gray-600 hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button
              onClick={() => {
                setShowBooking(true);
                setStep(1);
                setSelectedTherapy(null);
                setSelectedDoctor(null);
                setAppointmentDate('');
                setAppointmentTime('');
                setError('');
              }}
              className="flex items-center space-x-2 bg-[#064e3b] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all"
            >
              <span className="material-symbols-outlined">add</span>
              <span>Book Session</span>
            </button>
          </div>
        </header>

        {/* Progress Map Timeline */}
        <section className="mb-10">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden relative">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-[#064e3b] flex items-center">
                <span className="material-symbols-outlined mr-2">route</span>
                Your Progress Map
              </h3>
              <div className="flex items-center space-x-4 text-sm font-medium">
                <span className="flex items-center text-[#6b7280]">
                  <span className="w-3 h-3 bg-gray-200 rounded-full mr-2"></span>Completed
                </span>
                <span className="flex items-center text-[#064e3b]">
                  <span className="w-3 h-3 bg-[#064e3b] rounded-full mr-2"></span>Current
                </span>
                <span className="flex items-center text-[#10b981]">
                  <span className="w-3 h-3 bg-[#10b981] rounded-full mr-2"></span>Upcoming
                </span>
              </div>
            </div>
            <div className="relative px-4">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-[50%] h-1 bg-[#064e3b] -translate-y-1/2 z-0"></div>
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-[#ecf3f0] border-2 border-[#064e3b] flex items-center justify-center text-[#064e3b] mb-3">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 12</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Consultation</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-[#ecf3f0] border-2 border-[#064e3b] flex items-center justify-center text-[#064e3b] mb-3">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 18</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Therapy Started</p>
                  </div>
                </div>
                <div className="flex flex-col items-center scale-110 relative">
                  <div className="absolute -top-12 bg-[#064e3b] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider whitespace-nowrap">
                    Scheduling
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#064e3b] border-4 border-white shadow-xl flex items-center justify-center text-white mb-3">
                    <span className="material-symbols-outlined animate-spin">schedule</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#064e3b] uppercase">Today</p>
                    <p className="text-xs font-bold text-[#1f2937]">Booking</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#10b981] flex items-center justify-center text-[#10b981] mb-3">
                    <span className="material-symbols-outlined text-xl">pending</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Oct 30</p>
                    <p className="text-xs font-semibold text-[#1f2937]">Follow-up</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 mb-3">
                    <span className="material-symbols-outlined text-xl">calendar_add_on</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-[#6b7280] uppercase">Nov 05</p>
                    <p className="text-xs font-semibold text-[#6b7280]">Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-[#ecf3f0]/50 p-4 rounded-2xl border border-[#064e3b]/5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#064e3b]/10 rounded-full flex items-center justify-center text-[#064e3b] mr-4">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#064e3b] tracking-tight">Treatment Progress: 58%</p>
                  <p className="text-xs text-[#6b7280]">You are on track with your wellness schedule. Keep it up!</p>
                </div>
              </div>
              <button className="text-[#064e3b] text-sm font-bold hover:underline">View Details</button>
            </div>
          </div>
        </section>

        {/* Appointments Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          <section className="col-span-12 lg:col-span-7">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#064e3b]">Upcoming Consultations</h3>
                <p className="text-sm text-[#6b7280] mt-1">Get prepared for your next healing session.</p>
              </div>
              <button className="text-sm text-[#10b981] font-semibold hover:text-[#064e3b] transition-colors">View all</button>
            </div>
            <div className="space-y-6">
              <div className="bg-white border-2 border-[#064e3b] rounded-[2rem] p-6 shadow-md transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center justify-center bg-[#064e3b] text-white w-20 h-20 rounded-2xl shadow-inner">
                      <span className="text-xs font-bold uppercase opacity-80">OCT</span>
                      <span className="text-3xl font-bold leading-none">24</span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-[#ecf3f0] text-[#064e3b] text-[10px] font-bold rounded uppercase mb-2">
                        Priority
                      </span>
                      <h4 className="text-xl font-bold text-[#1f2937]">Shirodhara - Stress Relief</h4>
                      <div className="flex items-center mt-1 space-x-4">
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">schedule</span>
                          10:00 AM
                        </p>
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">person</span>
                          Dr. Sunita Nair
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-[#064e3b] text-white font-bold rounded-xl shadow-md hover:bg-opacity-90 transition-all">
                      Join Session
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm transition-all hover:border-[#10b981]/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-500 w-20 h-20 rounded-2xl">
                      <span className="text-xs font-bold uppercase opacity-80">OCT</span>
                      <span className="text-3xl font-bold leading-none">26</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1f2937]">Panchakarma Consultation</h4>
                      <div className="flex items-center mt-1 space-x-4">
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">schedule</span>
                          02:30 PM
                        </p>
                        <p className="text-sm flex items-center text-[#6b7280]">
                          <span className="material-symbols-outlined text-lg mr-1 opacity-60">person</span>
                          Dr. Ananya Rao
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="flex-1 md:flex-none px-6 py-3 border border-[#064e3b] text-[#064e3b] font-bold rounded-xl hover:bg-[#ecf3f0] transition-all">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="col-span-12 lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-[#064e3b] mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">history</span>
                Reflection & History
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Abhyanga Oil Massage</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 20 • 60 mins</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">self_care</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Udvarthanam Therapy</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 18 • 45 mins</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#ecf3f0]/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">medical_services</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1f2937]">Basti Therapy</h5>
                      <p className="text-[11px] text-[#6b7280]">Completed Oct 15 • 30 mins</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#064e3b] shadow-sm hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4">
                  <button className="w-full py-4 text-sm font-bold text-[#1f2937] hover:text-[#064e3b] border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#064e3b]/30 hover:bg-[#ecf3f0]/20 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined mr-2">summarize</span>
                    View Medical Journal
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#064e3b]">Book Appointment Session</h2>
              <button
                onClick={() => setShowBooking(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                          s === step
                            ? 'bg-[#064e3b] text-white scale-110'
                            : s < step
                            ? 'bg-[#10b981] text-white'
                            : 'bg-gray-200 text-[#6b7280]'
                        }`}
                      >
                        {s < step ? <span className="material-symbols-outlined text-lg">check</span> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 transition-all ${
                            s < step ? 'bg-[#10b981]' : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs font-medium text-[#6b7280]">
                  <span>Select Therapy</span>
                  <span>Select Doctor</span>
                  <span>Choose Date & Time</span>
                </div>
              </div>

              {/* Error and Success Messages */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                  <span className="material-symbols-outlined text-red-600 flex-shrink-0">error</span>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                  <span className="material-symbols-outlined text-green-600 flex-shrink-0">check_circle</span>
                  <p className="text-sm text-green-700">{success}</p>
                </div>
              )}

              {fetchLoading && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#064e3b]"></div>
                  <p className="mt-4 text-[#6b7280] font-medium">Loading therapies and doctors...</p>
                </div>
              )}

              {!fetchLoading && (
                <>
                  {/* Step 1: Therapy Selection */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-lg font-bold text-[#064e3b] mb-4">Select a Therapy</h3>
                      <div className="space-y-3 mb-6">
                        {therapies.map((therapy) => (
                          <div
                            key={therapy.id}
                            onClick={() => setSelectedTherapy(therapy)}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedTherapy?.id === therapy.id
                                ? 'border-[#064e3b] bg-[#ecf3f0]'
                                : 'border-gray-200 hover:border-[#064e3b]/50'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-[#1f2937]">{therapy.name}</h4>
                              {selectedTherapy?.id === therapy.id && (
                                <span className="material-symbols-outlined text-[#064e3b]">check_circle</span>
                              )}
                            </div>
                            <p className="text-sm text-[#6b7280] mb-2">{therapy.description}</p>
                            <div className="flex justify-between text-xs text-[#6b7280]">
                              <span>{therapy.duration} mins</span>
                              <span className="font-semibold text-[#064e3b]">₹{therapy.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Doctor Selection */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-lg font-bold text-[#064e3b] mb-4">Select a Doctor</h3>
                      <div className="space-y-3 mb-6">
                        {doctors.map((doctor) => (
                          <div
                            key={doctor.id}
                            onClick={() => setSelectedDoctor(doctor)}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedDoctor?.id === doctor.id
                                ? 'border-[#064e3b] bg-[#ecf3f0]'
                                : 'border-gray-200 hover:border-[#064e3b]/50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-[#1f2937]">{doctor.name}</h4>
                                <p className="text-sm text-[#6b7280]">{doctor.specialization}</p>
                                <p className="text-xs text-[#6b7280] mt-1">{doctor.experience} years experience</p>
                              </div>
                              {selectedDoctor?.id === doctor.id && (
                                <span className="material-symbols-outlined text-[#064e3b]">check_circle</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Date and Time */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-lg font-bold text-[#064e3b] mb-4">Choose Date & Time</h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                            Appointment Date
                          </label>
                          <input
                            type="date"
                            min={minDate}
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/20"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                            Appointment Time
                          </label>
                          <select
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/20"
                          >
                            <option value="">Select a time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="09:30">9:30 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </div>

                        {selectedTherapy && selectedDoctor && appointmentDate && appointmentTime && (
                          <div className="p-4 bg-[#ecf3f0] rounded-lg border border-[#064e3b]/20">
                            <h4 className="font-bold text-[#064e3b] mb-2">Booking Summary</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="text-[#6b7280]">Therapy:</span>
                                <span className="font-semibold text-[#1f2937]">{selectedTherapy.name}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#6b7280]">Doctor:</span>
                                <span className="font-semibold text-[#1f2937]">{selectedDoctor.name}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#6b7280]">Date:</span>
                                <span className="font-semibold text-[#1f2937]">{new Date(appointmentDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#6b7280]">Time:</span>
                                <span className="font-semibold text-[#1f2937]">{appointmentTime}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePreviousStep}
                  disabled={step === 1}
                  className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                    step === 1
                      ? 'bg-gray-100 text-[#6b7280] cursor-not-allowed'
                      : 'bg-gray-100 text-[#064e3b] hover:bg-gray-200'
                  }`}
                >
                  Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2.5 bg-[#064e3b] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`px-8 py-2.5 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                      loading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#10b981] text-white hover:bg-opacity-90'
                    }`}
                  >
                    {loading && <div className="inline-block animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>}
                    <span>{loading ? 'Booking...' : 'Confirm Booking'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
