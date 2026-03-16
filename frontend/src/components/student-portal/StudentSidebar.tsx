"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen,
    PenTool,
    Brain,
    CheckSquare,
    LayoutDashboard,
    Menu,
    X,
    Settings,
    User,
    Shield,
    BrainCircuit,
    CalendarDays,
    Layers,
    GraduationCap,
    BarChart3,
    ShoppingBag,
    Globe2,
} from "lucide-react";
import { getStudentStats, StudentStats } from "@/services/progressStorage";
import { useAuth } from "@/contexts/auth-context";
import { getUserAccess, isMasterUser } from "@/config/user-access-config";
import { getUserXP, getLevelIcon, getLevelTitle } from "@/lib/gamification";
import { Flame, Sparkles, Trophy } from "lucide-react";
import NotificationManager from "@/components/batch1-1/utils/NotificationManager";

// Menu items with access keys that map to UserAccess properties
const menuItems = [
    {
        name: "Dashboard",
        href: "/student/dashboard",
        icon: LayoutDashboard,
        accessKey: "dashboard", // Maps to UserAccess.dashboard
    },

    {
        name: "UPSC",
        href: "/student/batch1",
        icon: BookOpen,
        accessKey: "batch1", // Maps to UserAccess.batch1
    },
    {
        name: "Batch 2",
        href: "/student/batch2",
        icon: Layers,
        accessKey: "batch2", // Maps to UserAccess.batch2
    },
    {
        name: "RAS Revision",
        href: "/student/ras",
        icon: CalendarDays,
        accessKey: "rasRevision", // Maps to UserAccess.rasRevision
    },
    {
        name: "AI Coach",
        href: "/student/ai-coach",
        icon: BrainCircuit,
        accessKey: "aiCoach", // Maps to UserAccess.aiCoach
    },
    {
        name: "Productivity",
        href: "/student/batch1-1/productivity",
        icon: Sparkles,
        accessKey: "productivity",
    },
    {
        name: "Community",
        href: "/student/batch1-1/community",
        icon: User,
        accessKey: "community",
    },
    {
        name: "Leaderboard",
        href: "/student/batch1-1/leaderboard",
        icon: Trophy,
        accessKey: "leaderboard",
    },
    {
        name: "Graphotherapy",
        href: "/student/graphotherapy",
        icon: PenTool,
        accessKey: "graphotherapy", // Maps to UserAccess.graphotherapy
    },
    {
        name: "Meditation",
        href: "/student/meditation",
        icon: Brain,
        accessKey: "meditation", // Maps to UserAccess.meditation
    },
    {
        name: "Achievements",
        href: "/student/achievements",
        icon: Trophy,
        accessKey: "dashboard", // Available to all users
    },
    {
        name: "Deep Report",
        href: "/student/batch1-1/deep-report",
        icon: BarChart3,
        accessKey: "batch1", // Linked to UPSC access
    },
    {
        name: "Community Hub",
        href: "/student/community",
        icon: User,
        accessKey: "community",
    },
    {
        name: "UPSC Store",
        href: "/student/upsc-store",
        icon: ShoppingBag,
        accessKey: "dashboard",
    },
    {
        name: "Revision Portal",
        href: "/student/revision",
        icon: Layers,
        accessKey: "revisionPortal", // Maps to UserAccess.revisionPortal
    },
    {
        name: "Geography",
        href: "/student/upsc/geography",
        icon: Globe2,
        accessKey: "geography",
    },
];

const bottomMenuItems = [
    {
        name: "Profile",
        href: "/student/profile",
        icon: User,
    },
    {
        name: "Settings",
        href: "/student/settings",
        icon: Settings,
    },
];

const batchItems = [
    {
        name: "UPSC",
        href: "/student/batch1",
        icon: BookOpen,
    },
    {
        name: "Batch 2",
        href: "/student/batch2",
        icon: Layers,
    }
];

interface StudentSidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

import { useSubjectAccess } from "@/hooks/useSubjectAccess";

export default function StudentSidebar({ isCollapsed, onToggle }: StudentSidebarProps) {
    const pathname = usePathname();
    const { user } = useAuth();
    const { hasAccess: hasDynamicAccess } = useSubjectAccess();

    // Get user access configuration from centralized config
    const userAccess = getUserAccess(user?.email);
    const isMasterId = isMasterUser(user?.email);

    const [stats, setStats] = useState<StudentStats | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [xpData, setXpData] = useState<ReturnType<typeof getUserXP> | null>(null);

    // Calculate overall progress percentage
    const calculateProgress = useCallback((studentStats: StudentStats): number => {
        if (!studentStats) return 0;

        // Calculate based on meditation and graphotherapy progress (60 days each)
        const meditationProgress = ((studentStats.meditation.currentLevel - 1) * 60 + studentStats.meditation.currentDay) / 120 * 100;
        const graphoProgress = ((studentStats.graphotherapy.currentLevel - 1) * 60 + studentStats.graphotherapy.currentDay) / 120 * 100;
        const prelimsProgress = studentStats.prelims.totalSegmentsCompleted * 2; // Rough estimate

        // Weight the different activities
        const overall = Math.min(100, Math.round((meditationProgress + graphoProgress + prelimsProgress) / 3));
        return overall;
    }, []);

    // Load stats
    const loadStats = useCallback(() => {
        const studentStats = getStudentStats();
        setStats(studentStats);
        // Also load XP data
        setXpData(getUserXP());
    }, []);

    // Initial load
    useEffect(() => {
        loadStats();
    }, [loadStats]);

    // Listen for storage changes (real-time updates)
    useEffect(() => {
        const handleStorageChange = () => {
            loadStats();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleStorageChange);
        window.addEventListener('xp-updated', handleStorageChange);

        // Refresh every 30 seconds
        const interval = setInterval(loadStats, 30000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleStorageChange);
            window.removeEventListener('xp-updated', handleStorageChange);
            clearInterval(interval);
        };
    }, [loadStats]);

    const progressPercent = stats ? calculateProgress(stats) : 0;
    const showExpanded = !isCollapsed || isHovered;

    return (
        <aside
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border overflow-y-auto transition-all duration-300 ease-in-out z-40 ${showExpanded ? "w-64" : "w-20"
                }`}
            onMouseEnter={() => isCollapsed && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Toggle Button - Hamburger Style */}
            <div className="p-4 border-b border-border">
                <button
                    onClick={onToggle}
                    className="p-2 rounded-lg hover:bg-muted dark:hover:bg-gray-800 transition-colors w-full flex items-center justify-center"
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? (
                        <Menu className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
                    ) : (
                        <X className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
                    )}
                </button>
            </div>

            {/* Main Navigation */}
            <nav className="p-4 space-y-2">
                {menuItems
                    .filter((item) => {
                        // Use centralized access config for filtering
                        const accessKey = item.accessKey as keyof typeof userAccess.access;

                        // Special check for geography to use dynamic access from hook
                        if (accessKey === 'geography') {
                            return hasDynamicAccess('geography');
                        }

                        return userAccess.access[accessKey] === true;
                    })
                    .map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname.startsWith(item.href.split("?")[0]);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 overflow-hidden ${isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                    : "text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800"
                                    } ${!showExpanded ? "justify-center px-2" : ""}`}
                                title={!showExpanded ? item.name : ""}
                            >
                                <Icon className="h-5 w-5 shrink-0" />
                                <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 w-0"
                                    }`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}

                {/* Batch Items for Master ID */}
                {isMasterId && (
                    <>
                        <div className={`mt-4 mb-2 px-4 transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Batches</p>
                        </div>
                        {batchItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 overflow-hidden ${isActive
                                        ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                                        : "text-muted-foreground dark:text-muted-foreground hover:bg-amber-50 dark:hover:bg-amber-900/10"
                                        } ${!showExpanded ? "justify-center px-2" : ""}`}
                                    title={!showExpanded ? item.name : ""}
                                >
                                    <Icon className="h-5 w-5 shrink-0" />
                                    <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 w-0"
                                        }`}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </>
                )}
            </nav>

            {/* Progress Section */}
            <div className={`p-4 mt-4 border-t border-border transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden p-0"
                }`}>
                {/* XP & Level Widget */}
                {xpData && (
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{getLevelIcon(xpData.level)}</span>
                                <div>
                                    <div className="font-bold text-sm text-foreground">
                                        Level {xpData.level}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground">
                                        {getLevelTitle(xpData.level)}
                                    </div>
                                </div>
                            </div>
                            {xpData.streak > 0 && (
                                <div className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                                    <Flame className="h-3 w-3 text-orange-500" />
                                    <span className="text-xs font-bold text-orange-600">{xpData.streak}</span>
                                </div>
                            )}
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Sparkles className="h-3 w-3 text-indigo-500" />
                                    {xpData.currentXP} / {xpData.xpToNextLevel} XP
                                </span>
                                <span>{Math.round((xpData.currentXP / xpData.xpToNextLevel) * 100)}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${(xpData.currentXP / xpData.xpToNextLevel) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Study Progress */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-sm text-foreground mb-2">
                        Study Progress
                    </h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground dark:text-muted-foreground">Overall</span>
                            <span className="font-medium text-foreground">{progressPercent}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        {stats && (
                            <div className="mt-3 space-y-1 text-xs text-muted-foreground dark:text-muted-foreground">
                                <div className="flex justify-between">
                                    <span>🧘 Meditation</span>
                                    <span>Lv{stats.meditation.currentLevel} D{stats.meditation.currentDay}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>✍️ Graphotherapy</span>
                                    <span>Lv{stats.graphotherapy.currentLevel} D{stats.graphotherapy.currentDay}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Admin Portal Switcher - Only for Master ID */}
            {isMasterId && (
                <div className={`p-4 border-t border-border transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden p-0"}`}>
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg"
                    >
                        <Shield className="h-5 w-5" />
                        <span className="font-medium">Admin Portal</span>
                    </Link>
                    <Link
                        href="/teacher/dashboard"
                        className="mt-2 flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
                    >
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-medium">Teacher Portal</span>
                    </Link>
                </div>
            )}

            {/* Bottom Menu Items */}
            <div className={`p-4 mt-auto border-t border-border space-y-2 ${!showExpanded ? "flex flex-col items-center" : ""}`}>
                {showExpanded && <NotificationManager />}
                {bottomMenuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                ? "bg-muted text-foreground font-medium"
                                : "text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 hover:text-foreground dark:hover:text-white"
                                } ${!showExpanded ? "justify-center px-2" : ""}`}
                            title={!showExpanded ? item.name : ""}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 w-0"
                                }`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}
