'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('notifications');

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
            <p className="text-slate-500 mt-1">Manage your account preferences and security settings.</p>
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
              onClick={() => setActiveTab('theme')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'theme'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Theme & Display
            </button>
            <button
              onClick={() => setActiveTab('connected')}
              className={`border-b-2 py-4 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === 'connected'
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-500 hover:text-[#064e3b] hover:border-gray-200'
              }`}
            >
              Connected Applications
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Notification Preferences */}
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

            {/* Theme & Display */}
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

            {/* Other Tabs Placeholder */}
            {activeTab !== 'notifications' && activeTab !== 'theme' && (
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Active Sensors</span>
                  <span className="text-sm font-bold text-[#064e3b]">4</span>
                </div>
                <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-200">Last security check: 2 days ago</p>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connected Devices</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="material-symbols-outlined text-lg">watch</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">AyurWatch Pro</p>
                    <p className="text-[10px] text-green-500 font-medium">Syncing now...</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="material-symbols-outlined text-lg">smartphone</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">iPhone 15 Pro</p>
                    <p className="text-[10px] text-gray-400">Last sync 2h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
