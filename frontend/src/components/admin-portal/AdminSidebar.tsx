"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    BarChart3,
    Brain,
    FileText,
    Settings,
    TrendingUp,
    Activity,
    Mail,
    FileCode,
    Menu,
    X,
    Shield,
    GraduationCap,
    Zap,
    ChevronDown,
    ChevronRight,
    Layers,
    Target,
    Heart,
    AlertTriangle,
    Database,
    Search,
    UserCheck,
    Briefcase,
    Stethoscope,
    History
} from "lucide-react";

interface AdminSidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const menuItems = [
    {
        name: "Command Center",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Strategic Intelligence",
        icon: Brain,
        children: [
            { name: "Global War Room", href: "/admin", icon: Zap },
            { name: "Cohort Intelligence", href: "/admin/cohort-intelligence", icon: Layers },
            { name: "Revenue Analysis", href: "/admin/analytics", icon: TrendingUp },
            { name: "At-Risk Monitor", href: "/admin/performance", icon: Stethoscope },
            { name: "Student Journeys", href: "/admin/student-journey", icon: Target },
            { name: "Teacher Oversight", href: "/admin/teacher-performance", icon: UserCheck },
        ],
    },
    {
        name: "Academic Operations",
        icon: GraduationCap,
        children: [
            { name: "Content Health", href: "/admin/content-system", icon: Activity },
            { name: "UPSC Registry", href: "/admin/upsc-content", icon: Database },
            { name: "Graphotherapy", href: "/admin/drill/questions", icon: Heart },
            { name: "Meditation", href: "/admin/meditation", icon: Activity },
            { name: "Courses & Paths", href: "/admin/courses", icon: GraduationCap },
            { name: "Assessment Drills", href: "/admin/drill/analytics", icon: BarChart3 },
        ],
    },
    {
        name: "CRM & Growth",
        icon: Users,
        children: [
            { name: "Lead Command", href: "/admin/leads", icon: Target },
            { name: "User Directory", href: "/admin/users", icon: Users },
            { name: "Interventions", href: "/admin/interventions", icon: Zap },
            { name: "Marketing Auto", href: "/admin/marketing-automation", icon: Mail },
            { name: "Attendance", href: "/admin/attendance", icon: Activity },
        ],
    },
    {
        name: "System Command",
        icon: Shield,
        children: [
            { name: "Access Control", href: "/admin/user-management", icon: Shield },
            { name: "System Logs", href: "/admin/logs", icon: FileCode },
            { name: "Dev History", href: "/admin/development-history", icon: History },
            { name: "Global Search", href: "/admin/search", icon: Search },
            { name: "Communications", href: "/admin/email-templates", icon: Mail },
            { name: "PDR Map", href: "/admin/pdr", icon: Layers },
        ],
    },
    {
        name: "Quick Actions",
        icon: Zap,
        children: [
            { name: "Teacher Portal", href: "/teacher/dashboard", icon: GraduationCap },
            { name: "Student Portal", href: "/student/dashboard", icon: Users },
            { name: "Master Resume", href: "/resume", icon: FileText },
            { name: "Settings", href: "/admin/settings", icon: Settings },
        ],
    }
];

export default function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>(["Strategic Intelligence", "Academic Operations"]);

    const showExpanded = !isCollapsed || isHovered;

    const toggleExpanded = (name: string) => {
        setExpandedItems((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    const isActive = (href: string) => pathname === href;
    const isGroupActive = (children: { href: string }[]) =>
        children?.some((child) => pathname === child.href);

    return (
        <aside
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-slate-950 border-r border-slate-800 overflow-y-auto transition-all duration-300 ease-in-out z-40 ${showExpanded ? "w-64" : "w-20"
                }`}
            onMouseEnter={() => isCollapsed && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Toggle Button */}
            <div className="p-4 border-b border-slate-900">
                <button
                    onClick={onToggle}
                    className="p-2 rounded-lg hover:bg-slate-900 transition-colors w-full flex items-center justify-center text-slate-400"
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? (
                        <Menu className="h-5 w-5" />
                    ) : (
                        <X className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="p-3 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const hasChildren = item.children && item.children.length > 0;
                    const isExpanded = expandedItems.includes(item.name);
                    const groupActive = hasChildren && isGroupActive(item.children!);
                    const itemActive = item.href && isActive(item.href);

                    if (hasChildren) {
                        return (
                            <div key={item.name} className="space-y-1">
                                <button
                                    onClick={() => toggleExpanded(item.name)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${groupActive
                                        ? "bg-indigo-500/10 text-indigo-400"
                                        : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                        } ${!showExpanded ? "justify-center px-2" : ""}`}
                                    title={!showExpanded ? item.name : ""}
                                >
                                    <Icon className={`h-5 w-5 shrink-0 ${groupActive ? "text-indigo-400" : "text-slate-500"}`} />
                                    {showExpanded && (
                                        <>
                                            <span className="text-xs font-bold uppercase tracking-wider flex-1 text-left whitespace-nowrap">
                                                {item.name}
                                            </span>
                                            {isExpanded ? (
                                                <ChevronDown className="h-3 w-3" />
                                            ) : (
                                                <ChevronRight className="h-3 w-3" />
                                            )}
                                        </>
                                    )}
                                </button>
                                {showExpanded && isExpanded && (
                                    <div className="ml-4 space-y-1 border-l border-slate-800 pl-2">
                                        {item.children!.map((child) => {
                                            const ChildIcon = child.icon;
                                            const active = isActive(child.href);
                                            return (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${active
                                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                                        : "text-slate-500 hover:text-slate-200 hover:bg-slate-900"
                                                        }`}
                                                >
                                                    <ChildIcon className={`h-4 w-4 shrink-0 ${active ? "text-white" : "text-slate-600"}`} />
                                                    <span className="text-[13px] font-medium whitespace-nowrap">{child.name}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.name}
                            href={item.href!}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 overflow-hidden ${itemActive
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                } ${!showExpanded ? "justify-center px-2" : ""}`}
                            title={!showExpanded ? item.name : ""}
                        >
                            <Icon className={`h-5 w-5 shrink-0 ${itemActive ? "text-white" : "text-slate-500"}`} />
                            <span
                                className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-opacity duration-200 ${showExpanded ? "opacity-100" : "opacity-0 w-0"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Platform Status Badge (Expanded Only) */}
            {showExpanded && (
                <div className="p-4 mt-auto border-t border-slate-900">
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] uppercase font-bold text-slate-500">Node Status</span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight">
                            Intelligence Core: <span className="text-emerald-500">Active</span>
                            <br />
                            Last Sync: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                </div>
            )}
        </aside>
    );
}
