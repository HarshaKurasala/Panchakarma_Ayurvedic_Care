<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>My Appointments - AyurCare Wellness</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              "ayur-green": "#064e3b",
              "ayur-light-green": "#ecf3f0",
              "ayur-accent": "#10b981",
              "ayur-text-main": "#1f2937",
              "ayur-text-muted": "#6b7280",
            },
          },
        },
      };
    </script>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      rel="stylesheet"
    />
    <style type="text/tailwindcss">
      body {
        font-family: "Inter", sans-serif;
        background-color: #f9fafb;
      }
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #d1d5db;
        border-radius: 10px;
      }
    </style>
  </head>
  <body class="flex h-screen overflow-hidden">
    <aside
      class="w-64 bg-white border-r border-gray-200 flex flex-col h-full sticky top-0"
      data-purpose="main-navigation"
    >
      <div class="p-6 flex items-center space-x-2">
        <div class="w-8 h-8 bg-ayur-green rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            ></path>
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-bold text-ayur-green leading-none">AyurCare</h1>
          <p class="text-[10px] text-ayur-text-muted">Wellness Portal</p>
        </div>
      </div>
      <nav class="flex-1 px-4 space-y-1">
        <a
          class="flex items-center space-x-3 p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="/user/dashboard"
        >
          <span class="material-symbols-outlined text-xl">grid_view</span>
          <span class="font-medium">Dashboard</span>
        </a>
        <a
          class="flex items-center space-x-3 p-3 rounded-xl bg-ayur-light-green text-ayur-green shadow-sm"
          href="/user/appointments"
        >
          <span class="material-symbols-outlined text-xl">timeline</span>
          <span class="font-semibold">My Appointments</span>
        </a>
        <a
          class="flex items-center space-x-3 p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="#"
        >
          <span class="material-symbols-outlined text-xl">spa</span>
          <span class="font-medium">My Treatments</span>
        </a>
        <a
          class="flex items-center justify-between p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="#"
        >
          <div class="flex items-center space-x-3">
            <span class="material-symbols-outlined text-xl">nutrition</span>
            <span class="font-medium">Diet Guide</span>
          </div>
          <div class="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 font-bold italic">
            i
          </div>
        </a>
        <a
          class="flex items-center space-x-3 p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="#"
        >
          <span class="material-symbols-outlined text-xl">receipt_long</span>
          <span class="font-medium">Billing</span>
        </a>
        <a
          class="flex items-center space-x-3 p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="#"
        >
          <span class="material-symbols-outlined text-xl">person</span>
          <span class="font-medium">Profile</span>
        </a>
        <a
          class="flex items-center space-x-3 p-3 rounded-xl text-ayur-text-muted hover:bg-ayur-light-green transition-colors"
          href="#"
        >
          <span class="material-symbols-outlined text-xl">settings</span>
          <span class="font-medium">Settings</span>
        </a>
      </nav>
      <div class="mt-auto p-4 border-t border-gray-100 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            alt="Arjun Sharma"
            class="w-10 h-10 rounded-full border border-gray-200"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmKePd_EOHIFqJO0SL2uvWMll02td7LKCwX-_Ix0n3-77juB9V83uqLbNqvMczpW5BzmjVtnYPRzc7uc8G1PjcsgGBWk1YpF1u5ISTTWHcbM50Fa32kAq26NNP7KGQ-Llkx-d2bbaULWFLn8-DJAYlUvgvkHa6_3V8pzZL4uyU33WIt1caMYb7-7C1KFx80n0GsFbzwKo9e094MCiX6Y5MIgq-23ltgVNFOF86OPP9-2JbC9O91IOr2Ewr3aDMhBaiMTmF2uRqNuk"
          />
          <div>
            <p class="text-sm font-bold text-ayur-text-main">Arjun Sharma</p>
            <p class="text-[10px] text-ayur-text-muted uppercase">Vata-Pitta Prakriti</p>
          </div>
        </div>
        <button class="text-ayur-text-muted hover:text-ayur-green transition-colors">
          <span class="material-symbols-outlined">logout</span>
        </button>
      </div>
    </aside>
    <main class="flex-1 overflow-y-auto bg-gray-50 p-8">
      <header class="flex justify-between items-start mb-8">
        <div>
          <h2 class="text-3xl font-bold text-ayur-green">My Appointments</h2>
          <p class="text-ayur-text-muted mt-1">Manage and track all your wellness sessions.</p>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm relative text-gray-600 hover:bg-gray-50 transition-all"
          >
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button
            class="flex items-center space-x-2 bg-ayur-green hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all"
          >
            <span class="material-symbols-outlined">add</span>
            <span>Schedule New</span>
          </button>
        </div>
      </header>

      <div class="grid grid-cols-12 gap-8 items-start">
        <section class="col-span-12 lg:col-span-7" data-purpose="upcoming-rich-cards">
          <div class="flex justify-between items-end mb-6">
            <div>
              <h3 class="text-xl font-bold text-ayur-green">Upcoming Consultations</h3>
              <p class="text-sm text-ayur-text-muted mt-1">Get prepared for your next healing session.</p>
            </div>
            <button class="text-sm text-ayur-accent font-semibold hover:text-ayur-green transition-colors">View all schedule</button>
          </div>
          <div class="space-y-6">
            <div
              class="bg-white border-2 border-ayur-green rounded-[2rem] p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="flex items-center space-x-6">
                  <div
                    class="flex flex-col items-center justify-center bg-ayur-green text-white w-20 h-20 rounded-2xl shadow-inner"
                  >
                    <span class="text-xs font-bold uppercase opacity-80">OCT</span>
                    <span class="text-3xl font-bold leading-none">24</span>
                  </div>
                  <div>
                    <span
                      class="inline-block px-2 py-0.5 bg-ayur-light-green text-ayur-green text-[10px] font-bold rounded uppercase mb-2"
                      >Priority session</span
                    >
                    <h4 class="text-xl font-bold text-ayur-text-main">
                      Shirodhara - Stress Relief
                    </h4>
                    <div class="flex items-center mt-1 space-x-4">
                      <p class="text-sm flex items-center text-ayur-text-muted">
                        <span class="material-symbols-outlined text-lg mr-1 opacity-60"
                          >schedule</span
                        >
                        10:00 AM
                      </p>
                      <p class="text-sm flex items-center text-ayur-text-muted">
                        <span class="material-symbols-outlined text-lg mr-1 opacity-60"
                          >person</span
                        >
                        Dr. Sunita Nair
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <button
                    class="flex-1 md:flex-none px-6 py-3 bg-ayur-green text-white font-bold rounded-xl shadow-md hover:bg-opacity-90 transition-all"
                  >
                    Join Room
                  </button>
                  <button
                    class="flex-1 md:flex-none p-3 border border-gray-200 rounded-xl text-ayur-text-muted hover:bg-gray-50 transition-all"
                  >
                    <span class="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              class="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm transition-all hover:border-ayur-accent/30"
            >
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="flex items-center space-x-6">
                  <div
                    class="flex flex-col items-center justify-center bg-gray-50 text-gray-500 w-20 h-20 rounded-2xl"
                  >
                    <span class="text-xs font-bold uppercase opacity-80">OCT</span>
                    <span class="text-3xl font-bold leading-none">26</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-ayur-text-main">
                      Panchakarma Consultation
                    </h4>
                    <div class="flex items-center mt-1 space-x-4">
                      <p class="text-sm flex items-center text-ayur-text-muted">
                        <span class="material-symbols-outlined text-lg mr-1 opacity-60"
                          >schedule</span
                        >
                        02:30 PM
                      </p>
                      <p class="text-sm flex items-center text-ayur-text-muted">
                        <span class="material-symbols-outlined text-lg mr-1 opacity-60"
                          >person</span
                        >
                        Dr. Ananya Rao
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <button
                    class="flex-1 md:flex-none px-6 py-3 border border-ayur-green text-ayur-green font-bold rounded-xl hover:bg-ayur-light-green transition-all"
                  >
                    Reschedule
                  </button>
                  <button
                    class="flex-1 md:flex-none p-3 border border-gray-200 rounded-xl text-ayur-text-muted hover:bg-gray-50 transition-all"
                  >
                    <span class="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="col-span-12 lg:col-span-5" data-purpose="past-visits-rich">
          <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full">
            <h3 class="text-xl font-bold text-ayur-green mb-6 flex items-center">
              <span class="material-symbols-outlined mr-2">history</span>
              Recent Sessions
            </h3>
            <div class="space-y-6">
              <div
                class="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-ayur-light-green/30 transition-colors group"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined">water_drop</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-bold text-ayur-text-main">
                      Abhyanga Oil Massage
                    </h5>
                    <p class="text-[11px] text-ayur-text-muted">
                      Completed Oct 20 • 60 mins • High Impact
                    </p>
                  </div>
                </div>
                <button
                  class="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ayur-green shadow-sm hover:scale-110 transition-transform"
                  title="Download Summary"
                >
                  <span class="material-symbols-outlined text-lg">download</span>
                </button>
              </div>

              <div
                class="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-ayur-light-green/30 transition-colors group"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined">self_care</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-bold text-ayur-text-main">
                      Udvarthanam Therapy
                    </h5>
                    <p class="text-[11px] text-ayur-text-muted">
                      Completed Oct 18 • 45 mins • Detox
                    </p>
                  </div>
                </div>
                <button
                  class="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ayur-green shadow-sm hover:scale-110 transition-transform"
                  title="Download Summary"
                >
                  <span class="material-symbols-outlined text-lg">download</span>
                </button>
              </div>

              <div
                class="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-ayur-light-green/30 transition-colors group"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined">medical_services</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-bold text-ayur-text-main">
                      Basti Therapy
                    </h5>
                    <p class="text-[11px] text-ayur-text-muted">
                      Completed Oct 15 • 30 mins • Balancing
                    </p>
                  </div>
                </div>
                <button
                  class="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ayur-green shadow-sm hover:scale-110 transition-transform"
                  title="Download Summary"
                >
                  <span class="material-symbols-outlined text-lg">download</span>
                </button>
              </div>

              <div
                class="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-ayur-light-green/30 transition-colors group"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined">psychiatry</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-bold text-ayur-text-main">
                      Prakriti Analysis
                    </h5>
                    <p class="text-[11px] text-ayur-text-muted">
                      Completed Oct 10 • 90 mins • Assessment
                    </p>
                  </div>
                </div>
                <button
                  class="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ayur-green shadow-sm hover:scale-110 transition-transform"
                  title="Download Summary"
                >
                  <span class="material-symbols-outlined text-lg">download</span>
                </button>
              </div>

              <div class="pt-6 border-t border-gray-100 mt-4">
                <button
                  class="w-full py-4 text-sm font-bold text-ayur-text-main hover:text-ayur-green border-2 border-dashed border-gray-200 rounded-2xl hover:border-ayur-green/30 hover:bg-ayur-light-green/20 transition-all flex items-center justify-center"
                >
                  <span class="material-symbols-outlined mr-2">summarize</span>
                  Download Full Medical Journal
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>
