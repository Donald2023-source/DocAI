import { useState } from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-hidden border border-gray-800">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-[255px]
          border-r border-gray-800 bg-white p-5
          transition-transform duration-300
          lg:static lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        Sidebar goes here
      </aside>

      {/* Main Layout */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="flex h-[72px] shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <label className="flex h-11 max-w-xl flex-1 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-400">
            <Search size={18} />
            <input
              type="search"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              placeholder="Search documents..."
              aria-label="Search documents"
            />
          </label>

          <button
            type="button"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-emerald-500" />
          </button>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg p-1 hover:bg-gray-50"
            aria-label="Open account menu"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
              JD
            </span>
            <span className="hidden text-left md:block">
              <span className="block text-sm font-semibold text-gray-900">
                John Doe
              </span>
              <span className="block text-xs text-gray-500">Administrator</span>
            </span>
            <ChevronDown className="hidden text-gray-400 md:block" size={16} />
          </button>
        </header>

        {/* Main */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
