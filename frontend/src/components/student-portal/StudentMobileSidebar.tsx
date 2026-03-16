"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
    BookOpen,
    PenTool,
    Brain,
    CheckSquare,
    LayoutDashboard,
    Settings,
    User,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getStudentStats, StudentStats } from "@/services/progressStorage";

const menuItems = [
    {
        name: "Dashboard",
        href: "/student/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Learn",
        href: "/student/learn",
        icon: BookOpen,
    },
    {
        name: "Graphotherapy",
        href: "/student/graphotherapy",
        icon: PenTool,
    },
    {
        name: "Meditation",
        href: "/student/meditation",
        icon: Brain,
    },
    {
        name: "Daily Action",
        href: "/student/daily-action",
        icon: CheckSquare,
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

export default function StudentMobileSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [stats, setStats] = useState<StudentStats | null>(null);

    // Calculate overall progress percentage
    const calculateProgress = useCallback((studentStats: StudentStats): number => {
        if (!studentStats) return 0;

        const meditationProgress = ((studentStats.meditation.currentLevel - 1) * 60 + studentStats.meditation.currentDay) / 120 * 100;
        const graphoProgress = ((studentStats.graphotherapy.currentLevel - 1) * 60 + studentStats.graphotherapy.currentDay) / 120 * 100;
        const prelimsProgress = studentStats.prelims.totalSegmentsCompleted * 2;

        const overall = Math.min(100, Math.round((meditationProgress + graphoProgress + prelimsProgress) / 3));
        return overall;
    }, []);

    // Load stats
    useEffect(() => {
        const studentStats = getStudentStats();
        setStats(studentStats);
    }, []);

    const progressPercent = stats ? calculateProgress(stats) : 0;

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden p-2 hover:bg-muted dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Menu className="h-6 w-6 text-muted-foreground dark:text-muted-foreground" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px] bg-card border-r border-border">
                <SheetHeader className="p-4 border-b border-border">
                    <SheetTitle className="text-left text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Student Portal
                    </SheetTitle>
                </SheetHeader>

                <nav className="p-4 space-y-1">
                    <Link
                        href="/student/dashboard"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${pathname === "/student/dashboard"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800"
                            }`}
                    >
                        <LayoutDashboard className="h-5 w-5 shrink-0" />
                        <span className="font-medium">Dashboard</span>
                    </Link>

                    <Accordion type="single" collapsible className="w-full">
                        {/* GS 1 */}
                        <AccordionItem value="gs1" className="border-b-0">
                            <AccordionTrigger className="px-4 py-3 hover:bg-muted dark:hover:bg-gray-800 rounded-lg text-muted-foreground dark:text-muted-foreground decoration-0 hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <BookOpen className="h-5 w-5 shrink-0" />
                                    <span>GS 1 (History/Geo)</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-12 space-y-2 pb-2">
                                {[
                                    { label: "History", href: "/student/batch1/history" },
                                    { label: "Geography", href: "/student/upsc/geography" },
                                    { label: "Art & Culture", href: "/student/batch1/art-culture" },
                                    { label: "Indian Society", href: "/student/batch1/society" },
                                ].map(sub => (
                                    <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-blue-600">
                                        {sub.label}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        {/* GS 2 */}
                        <AccordionItem value="gs2" className="border-b-0">
                            <AccordionTrigger className="px-4 py-3 hover:bg-muted dark:hover:bg-gray-800 rounded-lg text-muted-foreground dark:text-muted-foreground decoration-0 hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <BookOpen className="h-5 w-5 shrink-0" />
                                    <span>GS 2 (Polity/IR)</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-12 space-y-2 pb-2">
                                {[
                                    { label: "Polity", href: "/student/batch1/polity" },
                                    { label: "Governance", href: "/student/batch1/polity" },
                                    { label: "International Relations", href: "/student/batch1/international-relations" },
                                    { label: "Social Justice", href: "/student/batch1/society" },
                                ].map(sub => (
                                    <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-blue-600">
                                        {sub.label}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        {/* GS 3 */}
                        <AccordionItem value="gs3" className="border-b-0">
                            <AccordionTrigger className="px-4 py-3 hover:bg-muted dark:hover:bg-gray-800 rounded-lg text-muted-foreground dark:text-muted-foreground decoration-0 hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <BookOpen className="h-5 w-5 shrink-0" />
                                    <span>GS 3 (Eco/Env/Sci)</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-12 space-y-2 pb-2">
                                {[
                                    { label: "Economy", href: "/student/batch1/economy" },
                                    { label: "Environment", href: "/student/batch1/environment" },
                                    { label: "Science & Tech", href: "/student/batch1/science-tech" },
                                    { label: "Security", href: "/student/batch1/security" },
                                ].map(sub => (
                                    <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-blue-600">
                                        {sub.label}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        {/* GS 4 */}
                        <AccordionItem value="gs4" className="border-b-0">
                            <AccordionTrigger className="px-4 py-3 hover:bg-muted dark:hover:bg-gray-800 rounded-lg text-muted-foreground dark:text-muted-foreground decoration-0 hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <BookOpen className="h-5 w-5 shrink-0" />
                                    <span>GS 4 (Ethics)</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-12 space-y-2 pb-2">
                                {[
                                    { label: "Ethics Theory", href: "/student/batch1/ethics" },
                                    { label: "Case Studies", href: "/student/batch1/ethics/case-studies" },
                                ].map(sub => (
                                    <Link key={sub.href} href={sub.href} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-blue-600">
                                        {sub.label}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Tools */}
                    <div className="pt-2 space-y-1">
                        <Link href="/student/graphotherapy" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 rounded-lg">
                            <PenTool className="h-5 w-5 shrink-0" />
                            <span className="font-medium">Graphotherapy</span>
                        </Link>
                        <Link href="/student/meditation" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 rounded-lg">
                            <Brain className="h-5 w-5 shrink-0" />
                            <span className="font-medium">Meditation</span>
                        </Link>
                        <Link href="/student/daily-action" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 rounded-lg">
                            <CheckSquare className="h-5 w-5 shrink-0" />
                            <span className="font-medium">Daily Action</span>
                        </Link>
                    </div>
                </nav>

                {/* Progress Section */}
                <div className="p-4 mt-2 border-t border-border">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
                        <h3 className="font-semibold text-sm text-foreground mb-2">
                            Your Progress
                        </h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground dark:text-muted-foreground">Overall</span>
                                <span className="font-medium text-foreground">{progressPercent}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
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
                                    <div className="flex justify-between">
                                        <span>🔥 Streak</span>
                                        <span>{stats.overallStreak} days</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Menu Items */}
                <nav className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card space-y-2">
                    {bottomMenuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 min-h-[48px] ${isActive
                                    ? "bg-muted text-blue-600"
                                    : "text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-gray-800 active:bg-muted dark:active:bg-gray-700"
                                    }`}
                            >
                                <Icon className="h-5 w-5 shrink-0" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
