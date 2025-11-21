"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Watermark from "@/components/watermark"
import ProtectedRoute from "@/components/protected-route"
import { logActivity } from "@/lib/activity-tracker"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    useEffect(() => {
        logActivity("view_page", pathname)
    }, [pathname])

    return (
        <ProtectedRoute>
            <div className="h-full relative">
                <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                    <Sidebar />
                </div>
                <main className="md:pl-72 pb-10 bg-black min-h-screen text-white relative">
                    <Watermark />
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    )
}
