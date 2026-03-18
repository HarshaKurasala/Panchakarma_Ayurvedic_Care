'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);
  const [researchParticipation, setResearchParticipation] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Navigation */}
      <aside
        className="w-64 bg-white border-r border-gray-200 flex flex-col h-full sticky top-0"
        data-purpose="main-navigation"
      >
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
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/dashboard"
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
            <span className="font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/appointments"
          >
            <span className="material-symbols-outlined text-xl">timeline</span>
            <span className="font-medium">My Appointments</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/treatments"
          >
            <span className="material-symbols-outlined text-xl">spa</span>
            <span className="font-medium">My Treatments</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/diet-guide"
          >
            <span className="material-symbols-outlined text-xl">nutrition</span>
            <span className="font-medium">Diet Guide</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/billing"
          >
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span className="font-medium">Billing</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl text-[#6b7280] hover:bg-[#ecf3f0] transition-colors"
            href="/user/profile"
          >
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="font-medium">Profile</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded-xl bg-[#ecf3f0] text-[#064e3b] shadow-sm"
            href="/user/settings"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="font-semibold">Settings</span>
          </a>
        </nav>
        <div className="mt-auto p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              alt="Arjun Sharma"
              className="w-10 h-10 rounded-full border border-gray-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmKePd_EOHIFqJO0SL2uvWMll02td7LKCwX-_Ix0n3-77juB9V83uqLbNqvMczpW5BzmjVtnYPRzc7uc8G1PjcsgGBWk1YpF1u5ISTTWHcbM50Fa32kAq26NNP7KGQ-Llkx-d2bbaULWFLn8-DJAYlUvgvkHa6_3V8pzZL4uyU33WIt1caMYb7-7C1KFx80n0GsFbzwKo9e094MCiX6Y5MIgq-23ltgVNFOF86OPP9-2JbC9O91IOr2Ewr3aDMhBaiMTmF2uRqNuk"
            />
            <div>
              <p className="text-sm font-bold text-[#1f2937]">Arjun Sharma</p>
              <p className="text-[10px] text-[#6b7280] uppercase">Vata-Pitta Prakriti</p>
            </div>
          </div>
          <button className="text-[#6b7280] hover:text-[#064e3b] transition-colors">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {/* Header */}
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Settings</h2>
            <p className="text-gray-500 mt-1">Manage your privacy and account security preferences.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 relative hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-[#064e3b] text-white px-6 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:bg-emerald-900 transition-colors">
              <span className="material-symbols-outlined text-base">save</span>
              <span>Save Changes</span>
            </button>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-gray-200 overflow-x-auto">
          <nav className="flex space-x-8 -mb-px">
            <button
              onClick={() => setActiveTab('notifications')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'notifications'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Notification Preferences
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'security'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Account Security
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'privacy'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Privacy
            </button>
            <button
              onClick={() => setActiveTab('localization')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'localization'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Localization
            </button>
            <button
              onClick={() => setActiveTab('theme')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'theme'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Theme & Display
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#ecf3f0] rounded-2xl flex items-center justify-center mr-4 text-[#064e3b]">
                    <span className="material-symbols-outlined text-3xl">notifications_active</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#064e3b]">Notification Preferences</h3>
                    <p className="text-sm text-gray-500">Configure how and when you want to be reached.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Channel Settings</h4>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="max-w-[80%]">
                          <p className="font-semibold text-gray-800">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive weekly wellness digests, appointment confirmations, and medical reports.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#064e3b]"></div>
                        </label>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex items-center justify-between">
                        <div className="max-w-[80%]">
                          <p className="font-semibold text-gray-800">SMS Alerts</p>
                          <p className="text-sm text-gray-500">Get instant SMS reminders for your therapy sessions and medication times.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#064e3b]"></div>
                        </label>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex items-center justify-between">
                        <div className="max-w-[80%]">
                          <p className="font-semibold text-gray-800">Push Notifications</p>
                          <p className="text-sm text-gray-500">Enable browser notifications for real-time updates and announcements.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#064e3b]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Specific Alerts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Health Milestones</span>
                          <input defaultChecked className="rounded border-gray-200 text-[#064e3b] focus:ring-[#064e3b]" type="checkbox" />
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Practitioner Messages</span>
                          <input defaultChecked className="rounded border-gray-200 text-[#064e3b] focus:ring-[#064e3b]" type="checkbox" />
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Yoga Reminders</span>
                          <input className="rounded border-gray-200 text-[#064e3b] focus:ring-[#064e3b]" type="checkbox" />
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">System Maintenance</span>
                          <input className="rounded border-gray-200 text-[#064e3b] focus:ring-[#064e3b]" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Account Security Tab */}
            {activeTab === 'security' && (
              <>
                <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-[#ecf3f0] rounded-2xl flex items-center justify-center mr-4 text-[#064e3b]">
                      <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#064e3b]">Authentication Controls</h3>
                      <p className="text-sm text-gray-500">Manage how you verify your identity during login.</p>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-500 mt-1">Add an extra layer of protection to your medical data.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input checked={twoFactorEnabled} onChange={(e) => setTwoFactorEnabled(e.target.checked)} className="sr-only peer" type="checkbox" />
                          <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#064e3b]"></div>
                        </label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="p-5 border border-[#064e3b] bg-slate-50 rounded-xl flex items-start text-left hover:bg-slate-100 transition-colors">
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center mr-4 shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px] text-[#064e3b]">sms</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-[#064e3b]">SMS Verification</p>
                            <p className="text-[11px] text-gray-500 mt-1">Secure codes sent via text to +91 •••• ••89</p>
                          </div>
                        </button>
                        <button className="p-5 border border-gray-200 hover:bg-slate-50 rounded-xl flex items-start text-left transition-all">
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center mr-4 shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px] text-gray-400">qr_code_2</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-slate-700">Authenticator App</p>
                            <p className="text-[11px] text-gray-400 mt-1">Generate timed codes with Google or Authy.</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Password Credentials</h4>
                      <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl">
                        <div>
                          <p className="font-medium text-sm text-slate-700">Primary Password</p>
                          <p className="text-[11px] text-gray-400 mt-2">Last modified: Oct 12, 2023</p>
                        </div>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 font-medium text-xs rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                          Change Password
                        </button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-5">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Authorized Sessions</h4>
                        <button className="text-[11px] font-semibold text-gray-400 hover:text-red-500 transition-colors uppercase">Log out all other devices</button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg hover:border-gray-300 transition-all">
                          <div className="flex items-center">
                            <div className="w-9 h-9 bg-slate-50 text-gray-400 rounded flex items-center justify-center mr-4">
                              <span className="material-symbols-outlined text-[20px]">laptop_mac</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm text-slate-700">MacBook Pro 14" • Chrome Browser</p>
                              <p className="text-[10px] text-teal-600 font-medium mt-0.5 flex items-center">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-1.5"></span> Active Now • Bengaluru, IN
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg hover:border-gray-300 transition-all">
                          <div className="flex items-center">
                            <div className="w-9 h-9 bg-slate-50 text-gray-400 rounded flex items-center justify-center mr-4">
                              <span className="material-symbols-outlined text-[20px]">smartphone</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm text-slate-700">iPhone 15 Pro • Patient App</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">Last active: 2 hours ago • New Delhi, IN</p>
                            </div>
                          </div>
                          <button className="text-gray-300 hover:text-red-400 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <>
                <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-[#ecf3f0] rounded-2xl flex items-center justify-center mr-4 text-[#064e3b]">
                      <span className="material-symbols-outlined text-3xl">shield_person</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#064e3b]">Privacy Settings</h3>
                      <p className="text-sm text-gray-500">Control your data sharing and how we personalize your experience.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Data Sharing Preferences</h4>
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="max-w-[85%]">
                            <p className="font-semibold text-gray-800">Strict Third-Party Access Policy</p>
                            <p className="text-sm text-gray-500 leading-relaxed">To ensure uncompromising patient confidentiality, AyurCare does not share your personal health data, medical history, or wellness metrics with any third-party applications or external entities. Your data remains protected within our secure medical environment.</p>
                          </div>
                          <div className="flex items-center text-[#064e3b] bg-[#ecf3f0] px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap ml-4">
                            <span className="material-symbols-outlined text-sm mr-1.5">verified_user</span>
                            SECURED
                          </div>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex items-start justify-between">
                          <div className="max-w-[85%]">
                            <p className="font-semibold text-gray-800">Internal Data Security & Confidentiality</p>
                            <p className="text-sm text-gray-500 leading-relaxed">Personal health data is utilized solely for your direct care. De-identified and aggregated data may be used internally for clinical research and service optimization to improve Ayurvedic treatment protocols while maintaining total patient anonymity.</p>
                          </div>
                          <div className="flex items-center text-[#064e3b] bg-[#ecf3f0] px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap ml-4">
                            <span className="material-symbols-outlined text-sm mr-1.5">lock</span>
                            PROTECTED
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Personalization</h4>
                      <div className="flex items-center justify-between">
                        <div className="max-w-[80%]">
                          <p className="font-semibold text-gray-800">Tailored Recommendations</p>
                          <p className="text-sm text-gray-500">Enable suggestions for yoga practices and dietary adjustments based on your activity patterns.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#064e3b]"></div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Activity History</h4>
                      <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-gray-800">Data Retention Policy</p>
                            <p className="text-sm text-gray-500 mt-1">Your detailed activity logs are stored for 12 months for clinical reference before being archived.</p>
                          </div>
                          <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                            View & Manage Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Theme & Display Tab */}
            {activeTab === 'theme' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#ecf3f0] rounded-2xl flex items-center justify-center mr-4 text-[#064e3b]">
                    <span className="material-symbols-outlined text-3xl">palette</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#064e3b]">Theme & Display</h3>
                    <p className="text-sm text-gray-500">Personalize your viewing experience and portal interface.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button className="p-4 border-2 border-[#064e3b] rounded-2xl bg-[#ecf3f0] text-left hover:shadow-md transition-all">
                    <div className="w-full h-16 bg-white rounded-lg mb-3 shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-300 text-3xl">light_mode</span>
                    </div>
                    <p className="font-bold text-sm text-[#064e3b]">Light Mode</p>
                    <p className="text-[10px] text-gray-500">Default interface</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 text-left transition-colors group">
                    <div className="w-full h-16 bg-slate-800 rounded-lg mb-3 shadow-sm flex items-center justify-center group-hover:bg-slate-700">
                      <span className="material-symbols-outlined text-slate-500 text-3xl">dark_mode</span>
                    </div>
                    <p className="font-bold text-sm">Dark Mode</p>
                    <p className="text-[10px] text-gray-500">Gentle on eyes</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 text-left transition-colors group">
                    <div className="w-full h-16 bg-gradient-to-br from-white to-slate-200 rounded-lg mb-3 shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-400 text-3xl">settings_brightness</span>
                    </div>
                    <p className="font-bold text-sm">System Sync</p>
                    <p className="text-[10px] text-gray-500">Follow device settings</p>
                  </button>
                </div>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== 'notifications' && activeTab !== 'security' && activeTab !== 'privacy' && activeTab !== 'theme' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center py-16">
                <span className="material-symbols-outlined text-gray-300 text-5xl mb-4 block">info</span>
                <p className="text-gray-500 text-lg">This section is coming soon.</p>
                <p className="text-gray-400 text-sm mt-2">More settings options will be available in the near future.</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-4 sticky top-8 space-y-6">
            {/* Support Card */}
            <div className="bg-[#064e3b] rounded-3xl p-8 text-white overflow-hidden relative shadow-lg">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">support_agent</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Need assistance?</h4>
                <p className="text-emerald-100 text-sm mb-6 leading-relaxed">Our wellness guides are here to help you navigate your healing journey and technical queries.</p>
                <button className="bg-white text-[#064e3b] w-full py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-emerald-50 transition-colors">
                  Contact Support
                </button>
              </div>
              <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.17,20C14.33,20 19,15.33 19,9.17C19,8.76 18.97,8.37 18.92,8H17Z"></path>
              </svg>
            </div>

            {/* Quick Stats */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Stats</h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Profile Completion</span>
                  <span className="text-sm font-bold text-[#064e3b]">85%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#064e3b] h-full w-[85%]"></div>
                </div>
                <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-200">Last security check: 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
