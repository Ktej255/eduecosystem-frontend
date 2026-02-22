"use client";

import GraphoSidebar from "@/components/graphotherapy/dashboard/Sidebar";
// import ProtectedRoute from "@/components/protected-route"; // Ensure auth verification

export default function GraphotherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ProtectedRoute>
    <div className="h-full relative bg-muted">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <GraphoSidebar />
      </div>
      <main className="md:pl-72 min-h-screen">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
    // </ProtectedRoute>
  );
}
