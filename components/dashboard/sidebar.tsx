"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  Settings, 
  LogOut,
  BarChart3,
  Users,
  FileText
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
//   { icon: TrendingUp, label: "Investments", href: "/dashboard/investments" },
//   { icon: Wallet, label: "Portfolio", href: "/dashboard/portfolio" },
//   { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
//   { icon: Users, label: "Clients", href: "/dashboard/clients" },
//   { icon: FileText, label: "Reports", href: "/dashboard/reports" },
//   { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen fixed left-0 top-0 shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-gray-900" />
          </div> */}
          <div>
            <h1 className="text-xl font-bold text-amber-400">Imperial Gold Focus</h1>
            <p className="text-xs text-gray-400">Investment Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-amber-400 text-gray-900 font-semibold shadow-lg"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
