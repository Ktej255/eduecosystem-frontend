"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Network,
    Search,
    ZoomIn,
    ZoomOut,
    ExternalLink,
    Users,
    GraduationCap,
    Shield,
    BookOpen,
    ChevronRight,
    Layers
} from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

// Static fallback data defined below...
const staticPortalData = {
    admin: {
        name: "Admin Portal",
        color: "bg-purple-500",
        icon: Shield,
        basePath: "/admin",
        pages: [
            { name: "Dashboard", path: "/admin", connections: ["Users", "Analytics", "Drill"] },
            { name: "Users", path: "/admin/users", connections: ["User Details", "Ban/Promote"] },
            { name: "Student Activity", path: "/admin/student-activity", connections: ["Student Details"] },
            { name: "Analytics", path: "/admin/analytics", connections: ["Reports"] },
            { name: "Development History", path: "/admin/development-history", connections: [] },
            { name: "Portal Map", path: "/admin/pdr", connections: [] },
            { name: "AI Planning", path: "/admin/ai-planning", connections: ["Generate Plan"] },
            { name: "Daily Reports", path: "/admin/daily-reports", connections: [] },
            { name: "Drill Questions", path: "/admin/drill/questions", connections: ["Add Question", "Edit"] },
            { name: "Drill Analytics", path: "/admin/drill/analytics", connections: ["Performance Reports"] },
            { name: "Leads", path: "/admin/leads", connections: ["Lead Details", "Convert"] },
            { name: "Email Templates", path: "/admin/email-templates", connections: [] },
            { name: "Settings", path: "/admin/settings", connections: [] },
        ]
    },
    student: {
        name: "Student Portal",
        color: "bg-blue-500",
        icon: GraduationCap,
        basePath: "/student",
        pages: [
            { name: "Dashboard", path: "/student/dashboard", connections: ["Batch Selection", "Profile"] },
            { name: "Batch 1 Home", path: "/student/batch1", connections: ["Week Selection"] },
            { name: "Batch 1 Week", path: "/student/batch1/week1", connections: ["Day Selection"] },
            { name: "Morning Session", path: "/student/batch1/week1/day1/morning", connections: ["Pomodoro", "Guidance"] },
            { name: "Evening Session", path: "/student/batch1/week1/day1/evening", connections: ["Flashcards", "MCQs"] },
            { name: "Pomodoro Timer", path: "/student/batch1/pomodoro", connections: ["Ambient Sounds", "Goals"] },
            { name: "Focus Portal", path: "/student/focus-portal", connections: ["Deep Reports", "Analytics"] },
            { name: "Batch 1.1 Home", path: "/student/batch1_1", connections: ["Week Selection"] },
            { name: "Batch 2 Home", path: "/student/batch2", connections: ["Ancient Wisdom Modules"] },
            { name: "Upanishad Journey", path: "/student/batch2/upanishads", connections: ["108 Upanishads"] },
            { name: "Transformation", path: "/student/batch2/transformation", connections: ["Roadmap", "Progress"] },
            { name: "Profile", path: "/student/profile", connections: ["Edit", "Settings"] },
        ]
    },
    teacher: {
        name: "Teacher Portal",
        color: "bg-emerald-500",
        icon: BookOpen,
        basePath: "/teacher",
        pages: [
            { name: "Dashboard", path: "/teacher/dashboard", connections: ["Students", "Content"] },
            { name: "Batch 1 Content", path: "/teacher/batch1", connections: ["Upload Video", "Edit Content"] },
            { name: "Student List", path: "/teacher/students", connections: ["Student Details", "Progress"] },
            { name: "Content Upload", path: "/teacher/upload", connections: ["Video", "Documents"] },
            { name: "Course Management", path: "/teacher/courses", connections: ["Edit", "Delete"] },
            { name: "Analytics", path: "/teacher/analytics", connections: ["Performance", "Engagement"] },
        ]
    },
    crm: {
        name: "CRM Portal",
        color: "bg-orange-500",
        icon: Users,
        basePath: "/crm",
        pages: [
            { name: "Dashboard", path: "/crm/dashboard", connections: ["Leads", "Pipeline"] },
            { name: "Lead Management", path: "/crm/leads", connections: ["Add", "Import", "Export"] },
            { name: "Pipeline View", path: "/crm/pipeline", connections: ["Stages", "Move"] },
            { name: "Contacts", path: "/crm/contacts", connections: ["Add", "Import"] },
            { name: "Email Campaigns", path: "/crm/campaigns", connections: ["Create", "Analytics"] },
            { name: "Reports", path: "/crm/reports", connections: ["Export"] },
        ]
    },
    graphotherapy: {
        name: "Graphotherapy",
        color: "bg-pink-500",
        icon: Layers,
        basePath: "/graphotherapy",
        pages: [
            { name: "Landing Page", path: "/graphotherapy", connections: ["Funnel Start"] },
            { name: "Funnel Wizard", path: "/graphotherapy/funnel", connections: ["Upload", "Analysis"] },
            { name: "Analysis Report", path: "/graphotherapy/funnel/analysis", connections: ["Download PDF"] },
            { name: "Dashboard", path: "/graphotherapy/dashboard", connections: ["Progress", "Exercises"] },
            { name: "Practice", path: "/graphotherapy/practice", connections: ["Exercises"] },
        ]
    }
};

export default function PDRPage() {
    const [portalData, setPortalData] = useState<any>(staticPortalData);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPortal, setSelectedPortal] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [zoom, setZoom] = useState(100);

    // Fetch dynamic PDR data
    useEffect(() => {
        const fetchPDR = async () => {
            try {
                const res = await api.get('/admin/pdr/graph');
                const { nodes, links } = res.data;

                // Transform flat nodes back to hierarchical portalData
                const dynamicData: any = {};

                // 1. Identify Portals (Hubs)
                const portalNodes = nodes.filter((n: any) => n.type === 'portal');
                portalNodes.forEach((pNode: any) => {
                    const key = pNode.group; // e.g. "admin"

                    // Match icon/color from static config or default
                    const staticMatch = staticPortalData[key as keyof typeof staticPortalData];

                    dynamicData[key] = {
                        name: pNode.label,
                        color: staticMatch?.color || "bg-gray-500",
                        icon: staticMatch?.icon || Layers,
                        basePath: key === 'grapho' ? '/graphotherapy' : `/${key}`,
                        pages: []
                    };
                });

                // 2. Add Pages
                const pageNodes = nodes.filter((n: any) => n.type === 'page');
                pageNodes.forEach((pageNode: any) => {
                    const key = pageNode.group;
                    if (dynamicData[key]) {
                        dynamicData[key].pages.push({
                            name: pageNode.label,
                            path: pageNode.route,
                            connections: [] // Could derive from links if needed
                        });
                    }
                });

                // Use dynamic data if valid, otherwise fallback
                if (Object.keys(dynamicData).length > 0) {
                    setPortalData(dynamicData);
                }
            } catch (err) {
                console.error("Failed to fetch PDR graph", err);
                // Fallback to static data (already set)
            } finally {
                setIsLoading(false);
            }
        };

        // Start fetch
        fetchPDR();
    }, []);

    const allPages = Object.entries(portalData).flatMap(([key, portal]: [string, any]) =>
        portal.pages.map((page: any) => ({ ...page, portal: key, portalName: portal.name, color: portal.color }))
    );

    const filteredPages = searchQuery
        ? allPages.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.path.toLowerCase().includes(searchQuery.toLowerCase()))
        : allPages;

    const portalsToShow = selectedPortal
        ? { [selectedPortal]: portalData[selectedPortal as keyof typeof portalData] }
        : portalData;

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                            <Network className="w-8 h-8 text-indigo-600" />
                            Portal Map (PDR)
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Visual representation of all pages and their connections
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setZoom(Math.max(50, zoom - 10))}>
                            <ZoomOut className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-gray-600">{zoom}%</span>
                        <Button variant="outline" size="sm" onClick={() => setZoom(Math.min(150, zoom + 10))}>
                            <ZoomIn className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search pages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={selectedPortal === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPortal(null)}
                    >
                        All Portals
                    </Button>
                    {Object.entries(portalData).map(([key, portal]: [string, any]) => {
                        const Icon = portal.icon;
                        return (
                            <Button
                                key={key}
                                variant={selectedPortal === key ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedPortal(key)}
                                className="flex items-center gap-1"
                            >
                                <Icon className="w-4 h-4" />
                                {portal.name.split(' ')[0]}
                            </Button>
                        );
                    })}
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-5 gap-4 mb-8">
                {Object.entries(portalData).map(([key, portal]: [string, any]) => {
                    const Icon = portal.icon;
                    return (
                        <Card
                            key={key}
                            className={`cursor-pointer transition-all ${selectedPortal === key ? 'ring-2 ring-indigo-500' : ''}`}
                            onClick={() => setSelectedPortal(selectedPortal === key ? null : key)}
                        >
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg ${portal.color} flex items-center justify-center`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-gray-100">{portal.pages.length}</p>
                                    <p className="text-xs text-gray-500">{portal.name.split(' ')[0]}</p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Visual Map */}
            <div
                className="overflow-auto border rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8"
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(portalsToShow).map(([key, portal]: [string, any]) => {
                        const Icon = portal.icon;
                        const portalPages = searchQuery
                            ? portal.pages.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            : portal.pages;

                        if (portalPages.length === 0) return null;

                        return (
                            <Card key={key} className="overflow-hidden">
                                <div className={`${portal.color} p-4 text-white`}>
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-6 h-6" />
                                        <h3 className="text-lg font-bold">{portal.name}</h3>
                                    </div>
                                    <p className="text-sm opacity-80 mt-1">{portal.basePath}</p>
                                </div>
                                <CardContent className="p-4 max-h-96 overflow-y-auto">
                                    <div className="space-y-2">
                                        {portalPages.map((page, idx) => (
                                            <div
                                                key={idx}
                                                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                            {page.name}
                                                        </h4>
                                                        <p className="text-xs text-gray-500 font-mono">{page.path}</p>
                                                    </div>
                                                    <Link href={page.path} target="_blank">
                                                        <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </Link>
                                                </div>
                                                {page.connections.length > 0 && (
                                                    <div className="mt-2 flex flex-wrap gap-1">
                                                        {page.connections.map((conn, i) => (
                                                            <span
                                                                key={i}
                                                                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                                                            >
                                                                <ChevronRight className="w-3 h-3" />
                                                                {conn}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Legend</h3>
                <div className="flex flex-wrap gap-4">
                    {Object.entries(portalData).map(([key, portal]: [string, any]) => {
                        const Icon = portal.icon;
                        return (
                            <div key={key} className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded ${portal.color}`} />
                                <Icon className="w-4 h-4 text-gray-600" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">{portal.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Total Count */}
            <div className="mt-4 text-center text-gray-500 text-sm">
                Showing {filteredPages.length} pages across {Object.keys(portalData).length} portals
            </div>
        </div>
    );
}
