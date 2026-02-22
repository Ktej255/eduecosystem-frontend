"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import StudentSidebar from "@/components/student-portal/StudentSidebar";
import Navbar from "@/components/navbar";
import StudentHeader from "@/components/student-portal/StudentHeader";
import ProtectedRoute from "@/components/protected-route";
import { logActivity } from "@/lib/activity-tracker";
import MobileSidebar from "@/components/mobile-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check route type
  const isAdminRoute = pathname?.startsWith("/admin");
  const isStudentRoute = pathname?.startsWith("/student");

  useEffect(() => {
    try {
      logActivity("view_page", pathname || "");
    } catch (error) {
      // Silently ignore if analytics endpoint doesn't exist
    }
  }, [pathname]);

  // For admin routes, just render children (admin has its own layout)
  if (isAdminRoute) {
    return (
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    );
  }

  // For student routes, use StudentSidebar
  if (isStudentRoute) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-muted">
          <StudentHeader />
          <div className="flex">
            {/* Student Sidebar - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block">
              <StudentSidebar
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed(!isCollapsed)}
              />
            </div>
            {/* Main content */}
            <main className={`flex-1 pt-20 transition-all duration-300 
              px-4 pb-4 
              md:px-6 md:pb-6
              ${isCollapsed ? "md:ml-20" : "md:ml-64"
              }`}>
              {children}
            </main>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // For non-admin, non-student routes, show the standard dashboard layout
  return (
    <ProtectedRoute>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72 bg-background min-h-screen transition-all duration-300 ease-in-out">
          <Navbar />
          <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
