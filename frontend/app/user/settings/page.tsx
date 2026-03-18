'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('security');
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
        <header className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">Account Settings</h2>
            <p className="text-slate-500 text-sm mt-1">Configure your security parameters and digital privacy controls.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2.5 text-slate-400 hover:text-[#064e3b] hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
            </button>
            <button className="bg-[#064e3b] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-700 transition-all flex items-center">
              <span className="material-symbols-outlined text-[18px] mr-2">check_circle</span>
              Save Changes
            </button>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="mb-10 border-b border-gray-200 overflow-x-auto">
          <nav className="flex space-x-10 -mb-px">
            <button
              onClick={() => setActiveTab('notifications')}
              className={`border-b-2 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'notifications'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`border-b-2 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'security'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`border-b-2 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'privacy'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Privacy
            </button>
            <button
              onClick={() => setActiveTab('localization')}
              className={`border-b-2 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'localization'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Localization
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`border-b-2 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'preferences'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Preferences
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-12 gap-10 items-start">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Authentication Controls Section */}
            {activeTab === 'security' && (
              <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center mb-8 pb-6 border-b border-slate-50">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mr-4 text-slate-400">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Authentication Controls</h3>
                    <p className="text-xs text-slate-400 font-normal mt-0.5">Manage how you verify your identity during login.</p>
                  </div>
                </div>

                <div className="space-y-10">
                  {/* Two-Factor Authentication */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Two-Factor Authentication</h4>
                        <p className="text-sm text-slate-500 mt-1">Add an extra layer of protection to your medical data.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input checked={twoFactorEnabled} onChange={(e) => setTwoFactorEnabled(e.target.checked)} className="sr-only peer" type="checkbox" />
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#064e3b]"></div>
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="p-5 border border-[#064e3b] bg-slate-50 rounded-xl flex items-start text-left group hover:bg-slate-100 transition-colors">
                        <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center mr-4 shrink-0 shadow-sm">
                          <span className="material-symbols-outlined text-[18px] text-[#064e3b]">sms</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm text-[#064e3b]">SMS Verification</p>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Secure codes sent via text to +91 •••• ••89</p>
                        </div>
                      </button>
                      <button className="p-5 border border-gray-200 hover:bg-slate-50 rounded-xl flex items-start text-left transition-all">
                        <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center mr-4 shrink-0 shadow-sm">
                          <span className="material-symbols-outlined text-[18px] text-slate-400">qr_code_2</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm text-slate-700">Authenticator App</p>
                          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Generate timed codes with Google or Authy.</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Password Credentials */}
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Password Credentials</h4>
                    <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl">
                      <div>
                        <p className="font-medium text-sm text-slate-700 leading-none">Primary Password</p>
                        <p className="text-[11px] text-slate-400 mt-2">Last modified: Oct 12, 2023</p>
                      </div>
                      <button className="px-4 py-2 bg-white border border-gray-200 text-slate-600 font-medium text-xs rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                        Change Password
                      </button>
                    </div>
                  </div>

                  {/* Authorized Sessions */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Authorized Sessions</h4>
                      <button className="text-[11px] font-semibold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider">Log out all other devices</button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg group hover:border-gray-300 transition-all">
                        <div className="flex items-center">
                          <div className="w-9 h-9 bg-slate-50 text-slate-400 rounded flex items-center justify-center mr-4">
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
                      <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg group hover:border-gray-300 transition-all">
                        <div className="flex items-center">
                          <div className="w-9 h-9 bg-slate-50 text-slate-400 rounded flex items-center justify-center mr-4">
                            <span className="material-symbols-outlined text-[20px]">smartphone</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-slate-700">iPhone 15 Pro • Patient App</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Last active: 2 hours ago • New Delhi, IN</p>
                          </div>
                        </div>
                        <button className="text-slate-300 hover:text-red-400 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Privacy Preferences Section */}
            {activeTab === 'security' && (
              <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center mb-8 pb-6 border-b border-slate-50">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mr-4 text-slate-400">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Privacy Preferences</h3>
                    <p className="text-xs text-slate-400 font-normal mt-0.5">Control access to your health history and profile.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="pr-8">
                      <p className="font-medium text-sm text-slate-700">Public Practitioner Profile</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Allow licensed medical practitioners on the platform to view your basic health statistics for consultation purposes.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input checked={publicProfile} onChange={(e) => setPublicProfile(e.target.checked)} className="sr-only peer" type="checkbox" />
                      <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#064e3b]"></div>
                    </label>
                  </div>

                  <div className="border-t border-slate-50 pt-6 flex items-start justify-between">
                    <div className="pr-8">
                      <p className="font-medium text-sm text-slate-700">Anonymized Research Participation</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Share de-identified data with clinical research groups to help improve Ayurvedic treatment protocols worldwide.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input checked={researchParticipation} onChange={(e) => setResearchParticipation(e.target.checked)} className="sr-only peer" type="checkbox" />
                      <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#064e3b]"></div>
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <>
                <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mr-4 text-slate-400">
                      <span className="material-symbols-outlined text-3xl">shield_person</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#064e3b]">Privacy Settings</h3>
                      <p className="text-sm text-gray-500">Control your data sharing and how we personalize your experience.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Data Sharing Preferences */}
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

                    {/* Personalization */}
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

                    {/* Activity History */}
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

                <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mr-4 text-slate-400">
                      <span className="material-symbols-outlined text-3xl">lock</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#064e3b]">Account Security</h3>
                      <p className="text-sm text-gray-500">Manage your login credentials and two-factor authentication.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-yellow-600 mr-3">warning</span>
                      <p className="text-sm text-yellow-800">Two-factor authentication is currently <strong>disabled</strong>.</p>
                    </div>
                    <button className="text-yellow-800 font-bold text-sm hover:underline">Enable Now</button>
                  </div>
                </section>
              </>
            )}

            {/* Other Tabs Placeholder */}
            {activeTab !== 'security' && activeTab !== 'privacy' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center py-16">
                <span className="material-symbols-outlined text-gray-300 text-5xl mb-4 block">info</span>
                <p className="text-gray-500 text-lg">This section is coming soon.</p>
                <p className="text-gray-400 text-sm mt-2">More settings options will be available in the near future.</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* Technical Support Card */}
            <div className="bg-[#064e3b] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white">contact_support</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Technical Support</h4>
                <p className="text-slate-300 text-xs mb-8 leading-relaxed">Need help with security settings or clinical data? Our expert team is available 24/7 for patient assistance.</p>
                <button className="bg-white text-[#064e3b] w-full py-2.5 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors">
                  Open Support Ticket
                </button>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            {/* Security Health Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">Security Health</h5>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-medium">Compliance Level</span>
                    <span className="text-xs font-semibold text-[#064e3b]">Excellent</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#064e3b] h-full w-[92%] transition-all duration-1000"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-slate-400">Profile Verified</span>
                    <span className="material-symbols-outlined text-teal-500 text-[18px]">check_circle</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Encryption Active</span>
                    <span className="material-symbols-outlined text-teal-500 text-[18px]">lock</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic text-center pt-2">Last system scan: 18 hours ago</p>
              </div>
            </div>

            {/* Paired Devices Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">Paired Devices</h5>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded flex items-center justify-center mr-3 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">watch</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-700">Clinical Watch Pro</p>
                    <p className="text-[10px] text-teal-600 font-medium">Synced • Heart rate monitoring</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded flex items-center justify-center mr-3 border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">devices</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-700">Home Health Hub</p>
                    <p className="text-[10px] text-slate-400">Offline since 08:30 AM</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 border border-dashed border-slate-200 text-slate-400 text-[10px] font-semibold uppercase tracking-widest rounded-lg hover:border-[#064e3b] hover:text-[#064e3b] transition-all">
                + Link New Device
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
