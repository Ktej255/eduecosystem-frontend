"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Calendar,
    ChevronDown,
    ChevronRight,
    Download,
    Clock,
    CheckCircle2,
    Code,
    GitBranch,
    Sparkles,
    RefreshCw
} from "lucide-react";

interface DailyReport {
    id: string;
    date: string;
    batch: string;
    summary: string;
    actions: {
        type: "feature" | "fix" | "enhancement" | "refactor";
        description: string;
        files: string[];
    }[];
    metrics: {
        filesChanged: number;
        linesAdded: number;
        linesRemoved: number;
        testsRun: number;
        testsPassed: number;
    };
}

// Sample daily reports data
const dailyReports: DailyReport[] = [
    {
        id: "1",
        date: "2026-01-17",
        batch: "Admin Portal",
        summary: "Major admin portal enhancement - Phase 1 of 7-day sprint. Added real-time student activity tracking, error handling, and new sidebar menu structure.",
        actions: [
            {
                type: "feature",
                description: "Added Real-Time Student Activity section to admin dashboard",
                files: ["src/app/(dashboard)/admin/page.tsx"]
            },
            {
                type: "feature",
                description: "Created Development History page with timeline view",
                files: ["src/app/(dashboard)/admin/development-history/page.tsx"]
            },
            {
                type: "feature",
                description: "Created Portal Map (PDR) page with visual architecture",
                files: ["src/app/(dashboard)/admin/pdr/page.tsx"]
            },
            {
                type: "feature",
                description: "Created Student Activity dashboard with metrics",
                files: ["src/app/(dashboard)/admin/student-activity/page.tsx"]
            },
            {
                type: "enhancement",
                description: "Updated AdminSidebar with Development menu group",
                files: ["src/components/admin-portal/AdminSidebar.tsx"]
            },
            {
                type: "fix",
                description: "Added error handling and retry for admin stats API",
                files: ["src/app/(dashboard)/admin/page.tsx"]
            }
        ],
        metrics: {
            filesChanged: 6,
            linesAdded: 1250,
            linesRemoved: 50,
            testsRun: 15,
            testsPassed: 15
        }
    },
    {
        id: "2",
        date: "2026-01-16",
        batch: "DevOps & Batch 2",
        summary: "Deployed frontend to Vercel, fixed Docker issues for AWS, and implemented Batch 2 premium access controls.",
        actions: [
            {
                type: "fix",
                description: "Fixed Dockerfile.production permission issues (chmod before user switch)",
                files: ["backend/Dockerfile.production"]
            },
            {
                type: "feature",
                description: "Implemented Batch 2 premium access for master ID and test accounts",
                files: ["src/components/student-portal/StudentSidebar.tsx", "src/components/batch2/UpanishadProgressSequence.tsx"]
            },
            {
                type: "enhancement",
                description: "Added crown indicator for premium content items",
                files: ["src/components/batch2/UpanishadProgressSequence.tsx"]
            }
        ],
        metrics: {
            filesChanged: 5,
            linesAdded: 320,
            linesRemoved: 45,
            testsRun: 12,
            testsPassed: 12
        }
    },
    {
        id: "3",
        date: "2026-01-15",
        batch: "Batch 1 & Backend",
        summary: "Focus analytics integration with real localStorage data and backend test fixes.",
        actions: [
            {
                type: "feature",
                description: "Created FocusAnalyticsService for real data aggregation",
                files: ["src/services/FocusAnalyticsService.ts"]
            },
            {
                type: "fix",
                description: "Fixed admin test suite - resolved import and type errors",
                files: ["backend/app/api/api_v1/endpoints/admin.py", "backend/tests/api/test_admin.py"]
            },
            {
                type: "enhancement",
                description: "Replaced mock data with real analytics in Deep Reports",
                files: ["src/components/batch1/focus/FocusAnalyticsDashboard.tsx"]
            }
        ],
        metrics: {
            filesChanged: 8,
            linesAdded: 450,
            linesRemoved: 180,
            testsRun: 25,
            testsPassed: 25
        }
    }
];

import api from "@/lib/api";

// ... (interfaces remain same)

export default function DailyReportsPage() {
    const [reports, setReports] = useState<DailyReport[]>(dailyReports);
    const [expandedReports, setExpandedReports] = useState<Set<string>>(new Set(["1"]));
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const res = await api.get('/admin/daily-reports');
            if (res.data && res.data.reports && res.data.reports.length > 0) {
                // Transform backend data to frontend model
                const apiReports = res.data.reports.map((r: any) => ({
                    id: String(r.id),
                    date: r.date,
                    batch: r.batch,
                    summary: r.summary,
                    actions: r.actions || [],
                    metrics: r.metrics || {
                        filesChanged: 0,
                        linesAdded: 0,
                        linesRemoved: 0,
                        testsRun: 0,
                        testsPassed: 0
                    }
                }));
                setReports(apiReports);
            }
        } catch (error) {
            console.error("Failed to fetch reports:", error);
        }
    };

    const handleAutoGenerate = async () => {
        setIsGenerating(true);
        try {
            await api.post('/admin/daily-reports/auto-generate');
            await fetchReports(); // Refresh list associated
        } catch (error) {
            console.error("Failed to auto-generate report:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    const toggleExpanded = (id: string) => {
        const newExpanded = new Set(expandedReports);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedReports(newExpanded);
    };

    const getActionIcon = (type: string) => {
        switch (type) {
            case "feature": return <Sparkles className="w-4 h-4 text-green-500" />;
            case "fix": return <CheckCircle2 className="w-4 h-4 text-red-500" />;
            case "enhancement": return <Code className="w-4 h-4 text-blue-500" />;
            case "refactor": return <GitBranch className="w-4 h-4 text-purple-500" />;
            default: return <Code className="w-4 h-4 text-muted-foreground" />;
        }
    };

    const getActionBadge = (type: string) => {
        const colors: Record<string, string> = {
            feature: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            fix: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            enhancement: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            refactor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
        };
        return colors[type] || "bg-muted text-foreground";
    };

    const totalMetrics = reports.reduce((acc, r) => ({
        filesChanged: acc.filesChanged + r.metrics.filesChanged,
        linesAdded: acc.linesAdded + r.metrics.linesAdded,
        linesRemoved: acc.linesRemoved + r.metrics.linesRemoved
    }), { filesChanged: 0, linesAdded: 0, linesRemoved: 0 });

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <FileText className="w-8 h-8 text-indigo-600" />
                            Daily Development Reports
                        </h1>
                        <p className="text-muted-foreground dark:text-muted-foreground mt-2">
                            Batch-wise breakdown of daily development activities
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            onClick={handleAutoGenerate}
                            disabled={isGenerating}
                            className="bg-indigo-600 hover:bg-indigo-700"
                        >
                            {isGenerating ? (
                                <>
                                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Auto-Generate Today
                                </>
                            )}
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export All
                        </Button>
                    </div>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-8 h-8 text-indigo-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">{reports.length}</p>
                            <p className="text-sm text-muted-foreground">Reports</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-green-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">{totalMetrics.filesChanged}</p>
                            <p className="text-sm text-muted-foreground">Files Changed</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Code className="w-8 h-8 text-blue-600" />
                        <div>
                            <p className="text-2xl font-bold text-green-600">+{totalMetrics.linesAdded}</p>
                            <p className="text-sm text-muted-foreground">Lines Added</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <GitBranch className="w-8 h-8 text-red-600" />
                        <div>
                            <p className="text-2xl font-bold text-red-600">-{totalMetrics.linesRemoved}</p>
                            <p className="text-sm text-muted-foreground">Lines Removed</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
                {reports.map((report) => (
                    <Card key={report.id} className="overflow-hidden">
                        <div
                            className="p-5 cursor-pointer hover:bg-muted dark:hover:bg-gray-800 transition-colors"
                            onClick={() => toggleExpanded(report.id)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    {/* Date Badge */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white">
                                        <span className="text-lg font-bold">{new Date(report.date).getDate()}</span>
                                        <span className="text-xs">{new Date(report.date).toLocaleString('default', { month: 'short' })}</span>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {report.batch}
                                            </h3>
                                            <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground dark:text-muted-foreground rounded">
                                                {report.actions.length} actions
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground dark:text-muted-foreground text-sm mt-1 max-w-2xl">
                                            {report.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Quick Metrics */}
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="text-green-600">+{report.metrics.linesAdded}</span>
                                        <span className="text-red-600">-{report.metrics.linesRemoved}</span>
                                    </div>
                                    {expandedReports.has(report.id) ? (
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedReports.has(report.id) && (
                            <div className="border-t border-border bg-muted/50 p-5">
                                {/* Actions */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-foreground mb-3">Actions Taken</h4>
                                    <div className="space-y-3">
                                        {report.actions.map((action, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-card rounded-lg">
                                                {getActionIcon(action.type)}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-xs px-2 py-0.5 rounded ${getActionBadge(action.type)}`}>
                                                            {action.type}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
                                                        {action.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {action.files.map((file, i) => (
                                                            <span key={i} className="text-xs font-mono px-2 py-0.5 bg-muted text-muted-foreground dark:text-muted-foreground rounded">
                                                                {file.split('/').pop()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics Summary */}
                                <div className="grid grid-cols-5 gap-4">
                                    <div className="p-3 bg-card rounded-lg text-center">
                                        <p className="text-lg font-bold text-foreground">{report.metrics.filesChanged}</p>
                                        <p className="text-xs text-muted-foreground">Files Changed</p>
                                    </div>
                                    <div className="p-3 bg-card rounded-lg text-center">
                                        <p className="text-lg font-bold text-green-600">+{report.metrics.linesAdded}</p>
                                        <p className="text-xs text-muted-foreground">Lines Added</p>
                                    </div>
                                    <div className="p-3 bg-card rounded-lg text-center">
                                        <p className="text-lg font-bold text-red-600">-{report.metrics.linesRemoved}</p>
                                        <p className="text-xs text-muted-foreground">Lines Removed</p>
                                    </div>
                                    <div className="p-3 bg-card rounded-lg text-center">
                                        <p className="text-lg font-bold text-blue-600">{report.metrics.testsRun}</p>
                                        <p className="text-xs text-muted-foreground">Tests Run</p>
                                    </div>
                                    <div className="p-3 bg-card rounded-lg text-center">
                                        <p className="text-lg font-bold text-green-600">{report.metrics.testsPassed}</p>
                                        <p className="text-xs text-muted-foreground">Tests Passed</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
}
