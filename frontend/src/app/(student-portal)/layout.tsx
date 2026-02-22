"use client";

import { useState } from "react";
import StudentSidebar from "@/components/student-portal/StudentSidebar";
import StudentHeader from "@/components/student-portal/StudentHeader";
import ProtectedRoute from "@/components/protected-route";
import FloatingVoiceAssistant from "@/components/shared/voice/FloatingVoiceAssistant";

export default function StudentPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-muted">
                <StudentHeader />
                <div className="flex">
                    {/* Sidebar - Hidden on mobile, shown on md+ */}
                    <div className="hidden md:block">
                        <StudentSidebar
                            isCollapsed={isCollapsed}
                            onToggle={() => setIsCollapsed(!isCollapsed)}
                        />
                    </div>
                    {/* Main content - Full width on mobile, with margin on md+ */}
                    <main className={`flex-1 pt-20 transition-all duration-300 
                        px-4 pb-4 
                        md:px-6 md:pb-6
                        ${isCollapsed ? "md:ml-20" : "md:ml-64"
                        }`}>
                        {children}
                    </main>
                </div>
                <FloatingVoiceAssistant />
            </div>
        </ProtectedRoute>
    );
}
