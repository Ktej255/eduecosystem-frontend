"use client";

import { useState, useEffect } from "react";
import { Bell, User, Flame } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import LiveDateTime from "@/components/LiveDateTime";
import { getStudentStats } from "@/services/progressStorage";
import StudentMobileSidebar from "@/components/student-portal/StudentMobileSidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UPSCGlobalSearch from "@/components/upsc/UPSCGlobalSearch";

export default function StudentHeader() {
    const { user, logout } = useAuth();
    const [streak, setStreak] = useState(0);

    // Load streak from persistent storage
    useEffect(() => {
        const stats = getStudentStats();
        setStreak(stats.overallStreak);

        // Listen for storage updates
        const handleStorageChange = () => {
            const updatedStats = getStudentStats();
            setStreak(updatedStats.overallStreak);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const NavDropdown = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 transition-colors">
                    {title}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-card border border-border shadow-lg animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2">
                {items.map((item) => (
                    <DropdownMenuItem
                        key={item.href}
                        onClick={() => window.location.href = item.href}
                        className="cursor-pointer focus:bg-muted dark:focus:bg-gray-800"
                    >
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 transition-colors">
            <div className="flex items-center justify-between h-full px-3 sm:px-4 md:px-6">
                {/* Left Section: Mobile Menu + Logo */}
                <div className="flex items-center gap-2 sm:gap-6">
                    <div className="flex items-center gap-2">
                        {/* Mobile Sidebar Toggle */}
                        <StudentMobileSidebar />

                        {/* Logo */}
                        <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => window.location.href = "/student/dashboard"}>
                            Eduecosystem
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-1">
                        <NavDropdown
                            title="GS 1"
                            items={[
                                { label: "History", href: "/student/batch1/history" },
                                { label: "Geography", href: "/student/upsc/geography" },
                                { label: "Art & Culture", href: "/student/batch1/art-culture" },
                                { label: "Indian Society", href: "/student/batch1/society" },
                            ]}
                        />
                        <NavDropdown
                            title="GS 2"
                            items={[
                                { label: "Polity", href: "/student/batch1/polity" },
                                { label: "Governance", href: "/student/batch1/polity" }, // Fallback to Polity for now
                                { label: "International Relations", href: "/student/batch1/international-relations" },
                                { label: "Social Justice", href: "/student/batch1/society" }, // Fallback to Society
                            ]}
                        />
                        <NavDropdown
                            title="GS 3"
                            items={[
                                { label: "Economy", href: "/student/batch1/economy" },
                                { label: "Environment", href: "/student/batch1/environment" },
                                { label: "Science & Tech", href: "/student/batch1/science-tech" },
                                { label: "Geography", href: "/student/upsc/geography" },
                                { label: "Security", href: "/student/batch1/security" },
                                { label: "Disaster Mgmt", href: "/student/upsc/geography" }, // Fallback to Geography
                            ]}
                        />
                        <NavDropdown
                            title="GS 4"
                            items={[
                                { label: "Ethics (Theory)", href: "/student/batch1/ethics" },
                                { label: "Case Studies", href: "/student/batch1/ethics/case-studies" },
                            ]}
                        />
                        <NavDropdown
                            title="Quick Access"
                            items={[
                                { label: "Current Affairs", href: "/student/batch1/current-affairs" },
                                { label: "Revision Portal", href: "/student/revision" },
                                { label: "Test Series", href: "/student/batch1/mock-tests" },
                                { label: "My Planner", href: "/student/planner" },
                            ]}
                        />
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="hidden md:block w-48 xl:w-72 relative mr-2">
                        <UPSCGlobalSearch />
                    </div>
                    <ThemeToggle />

                    {/* Streak - Compact on mobile */}
                    <div className="flex items-center gap-1 sm:gap-2 bg-orange-50 dark:bg-orange-900/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                        <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                        <span className="font-bold text-orange-700 dark:text-orange-400 text-sm sm:text-base">{streak}</span>
                        <span className="hidden sm:inline text-xs text-orange-600 dark:text-orange-300">days</span>
                    </div>

                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10">
                        <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 px-2 sm:px-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>
                                <span className="hidden md:inline font-medium text-foreground">{user?.full_name || "Student"}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onClick={() => (window.location.href = "/student/settings")}>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => (window.location.href = "/student/profile")}>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={logout} className="text-red-600">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}


