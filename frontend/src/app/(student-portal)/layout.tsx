"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import StudentSidebar from "@/components/student-portal/StudentSidebar";
import StudentHeader from "@/components/student-portal/StudentHeader";
import ProtectedRoute from "@/components/protected-route";
import FloatingVoiceAssistant from "@/components/shared/voice/FloatingVoiceAssistant";
import { Batch2UIProvider } from "@/components/batch2/context/Batch2UIContext";
import { LanguageProvider } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";

export default function StudentPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && user?.is_focused_portal_user && !pathname?.startsWith("/student/focused")) {
            router.replace("/student/focused");
        }
    }, [user, loading, pathname, router]);

    if (pathname?.startsWith("/student/focused")) {
        return <ProtectedRoute>{children}</ProtectedRoute>;
    }

    // Prevent flashing main portal while redirect is pending
    if (!loading && user?.is_focused_portal_user) {
        return null;
    }

    return (
        <LanguageProvider>
            <ProtectedRoute>
                <Batch2UIProvider>
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
            </Batch2UIProvider>
        </ProtectedRoute>
    </LanguageProvider>
    );
}
