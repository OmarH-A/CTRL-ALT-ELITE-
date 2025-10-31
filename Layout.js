import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Thermometer, Droplets, Clock, Settings } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();

  const navigationItems = [
    {
      name: "Temperature",
      path: createPageUrl("Temperature"),
      icon: Thermometer,
    },
    {
      name: "Humidity",
      path: createPageUrl("Humidity"),
      icon: Droplets,
    },
    {
      name: "History",
      path: createPageUrl("DataHistory"),
      icon: Clock,
    },
    {
      name: "Settings",
      path: createPageUrl("Settings"),
      icon: Settings,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {children}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-blue-600 shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}