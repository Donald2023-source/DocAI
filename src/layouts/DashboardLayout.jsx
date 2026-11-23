import { useState } from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { useInRouterContext, useLocation } from "react-router-dom";
import Header from "../components/Header";

function RouteHeader() {
  const { pathname } = useLocation();
  console.log("Pathname", pathname);
  return pathname === "/" ? <Header /> : null;
}

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasRouter = useInRouterContext();

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
        {hasRouter && <RouteHeader />}

        {/* Main */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
