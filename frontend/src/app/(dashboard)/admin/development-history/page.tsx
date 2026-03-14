"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Calendar,
    Plus,
    Sparkles,
    AlertTriangle,
    ChevronDown,
    ChevronRight,
    Clock,
    CheckCircle2,
    Filter,
    RefreshCw,
    Trash2,
    Database,
    Wifi,
    WifiOff,
    GitCommit
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

interface DevelopmentLog {
    id: string | number;
    date: string;
    title: string;
    description: string;
    features: string[];
    challenges: string[];
    batch: string;
}

// Static fallback data - used ONLY when API returns no entries
const STATIC_SEED: DevelopmentLog[] = [
    {
        id: "seed-100",
        date: "2026-02-11",
        title: "Modern History Completion & Question Bank Refinement",
        description: "Achieved 100% MCQ coverage for Modern History and standardized the Question Bank interface.",
        features: [
            "Integrated all 39 Modern History chapters (Spectrum)",
            "Codified 3,500+ MCQs with Level 1/2/3 tagging",
            "Renamed 'Qosian Bank' to 'Question Bank' for better clarity",
            "Verified global question aggregation in QuestionBankService"
        ],
        challenges: ["Ensuring performance while aggregating 3500+ dynamic items"],
        batch: "History"
    },
    {
        id: "seed-101",
        date: "2026-01-25",
        title: "Complete Polity Chapter System",
        description: "Fully populated Polity section with 100+ chapters for Laxmikanth, DD Basu, and NCERTs.",
        features: [
            "Implemented UPSC Chapter Registry with 154+ chapters",
            "Added DD Basu (35 chapters) and NCERT (19 chapters)",
            "Connected UPSC Store to dynamic RevisionRegistry",
            "Enabled Chapter MCQ tab with real practice questions",
            "Fixed 404 errors on chapter navigation"
        ],
        challenges: ["Mapping existing revision data to new store structure"],
        batch: "UPSC"
    },
    {
        id: "seed-102",
        date: "2026-01-24",
        title: "UPSC Store Implementation",
        description: "Built the core Amazon-like store interface for UPSC study materials.",
        features: [
            "Designed Subject & Book Detail Pages",
            "Implemented Pricing Logic (₹2999 -> ₹299)",
            "Added Start/Stop Purchase Flow with LocalStorage",
            "Created Price Countdown Component",
            "Integrated Onboarding Video & User Survey"
        ],
        challenges: ["Responsive grid layout for varied book covers"],
        batch: "UPSC"
    },
    {
        id: "seed-1",
        date: "2026-01-17",
        title: "Admin Portal Enhancement Phase 1",
        description: "Enhanced admin dashboard with real-time student activity tracking, error handling, and new sidebar menu structure.",
        features: [
            "Added Real-Time Student Activity section",
            "Implemented error state with retry functionality",
            "Added overview API integration (/admin/overview)",
            "Updated sidebar with Development menu",
            "Added Student Activity link in CRM menu"
        ],
        challenges: ["Frontend-backend data sync verification"],
        batch: "Admin Portal"
    },
    {
        id: "seed-2",
        date: "2026-01-16",
        title: "Frontend Deployment & Docker Fixes",
        description: "Deployed frontend updates to Vercel and fixed backend Docker issues for AWS App Runner.",
        features: [
            "Fixed Dockerfile.production permission issues",
            "Built Docker image locally and pushed to ECR",
            "Triggered AWS App Runner deployment"
        ],
        challenges: ["AccountLimitExceededException in AWS CodeBuild - bypassed with local build"],
        batch: "DevOps"
    },
    {
        id: "seed-14",
        date: "2025-12-05",
        title: "Teacher Portal V1 Launch",
        description: "First production release of the content management system for faculty.",
        features: [
            "Developed MCQ Upload & Parser system",
            "Added Batch Control Panel for managing student access",
            "Implemented real-time Student Analytics for teachers",
            "Created Global Content Registry"
        ],
        challenges: ["Ensuring secure access to administrative controls"],
        batch: "Teacher Portal"
    },
    {
        id: "seed-15",
        date: "2025-11-20",
        title: "Core Platform Architecture & Security",
        description: "Established the enterprise-grade foundation for the EduEcosystem.",
        features: [
            "Designed Split-Portal Architecture (Student/Teacher/Admin)",
            "Implemented JWT-based Secure Authentication",
            "Developed the Core Design System (Inter, Shadcn, Framer Motion)",
            "Setup Automated CI/CD pipelines to Vercel/AWS"
        ],
        challenges: ["Handling persistent sessions across subdomains"],
        batch: "Core Platform"
    },
    {
        id: "seed-16",
        date: "2025-11-10",
        title: "Project Kickoff & DB Schema Design",
        description: "Initialization of the master software repository and backend infrastructure.",
        features: [
            "Designed PostgreSQL relational schema for Users, Batches, and MCQs",
            "Setup FastAPI Backend with Pydantic validation",
            "Implemented the shared QuestionBank interface",
            "Drafted the UPSC Syllabus hierarchy mapping"
        ],
        challenges: [],
        batch: "Backend"
    }
];


export default function DevelopmentHistoryPage() {
    const [logs, setLogs] = useState<DevelopmentLog[]>([]);
    const [filteredLogs, setFilteredLogs] = useState<DevelopmentLog[]>([]);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [showAddForm, setShowAddForm] = useState(false);
    const [filterBatch, setFilterBatch] = useState<string>("all");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [isLive, setIsLive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isSyncingGit, setIsSyncingGit] = useState(false);
    const [isDeleting, setIsDeleting] = useState<string | number | null>(null);

    // New entry form state
    const [newEntry, setNewEntry] = useState({
        title: "",
        description: "",
        features: "",
        challenges: "",
        batch: ""
    });

    // Fetch logs from API on mount
    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        setIsLoading(true);
        try {
            const res = await api.get("/admin/development-logs?limit=200");
            const apiLogs: DevelopmentLog[] = (res.data.logs || []).map((l: any) => ({
                ...l,
                id: l.id,
                features: l.features || [],
                challenges: l.challenges || []
            }));

            if (apiLogs.length > 0) {
                setLogs(apiLogs);
                setIsLive(true);
            } else {
                // Fallback to static seed when DB is empty
                setLogs(STATIC_SEED);
                setIsLive(false);
            }
        } catch {
            // API unreachable - use static data
            setLogs(STATIC_SEED);
            setIsLive(false);
        } finally {
            setIsLoading(false);
        }
    };

    const batches = ["all", ...new Set(logs.map(l => l.batch).filter(Boolean))];

    useEffect(() => {
        let filtered = [...logs];

        if (filterBatch !== "all") {
            filtered = filtered.filter(l => l.batch === filterBatch);
        }

        if (dateRange.start) {
            filtered = filtered.filter(l => l.date >= dateRange.start);
        }

        if (dateRange.end) {
            filtered = filtered.filter(l => l.date <= dateRange.end);
        }

        setFilteredLogs(filtered);
    }, [logs, filterBatch, dateRange]);

    const toggleExpanded = (id: string | number) => {
        const key = String(id);
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(key)) {
            newExpanded.delete(key);
        } else {
            newExpanded.add(key);
        }
        setExpandedItems(newExpanded);
    };

    const handleAddEntry = async () => {
        if (!newEntry.title) return;

        const today = new Date().toISOString().split('T')[0];
        const payload = {
            date: today,
            title: newEntry.title,
            description: newEntry.description,
            batch: newEntry.batch || "General",
            features: newEntry.features.split('\n').filter(f => f.trim()),
            challenges: newEntry.challenges.split('\n').filter(c => c.trim()),
        };

        setIsSaving(true);
        try {
            await api.post("/admin/development-logs", payload);
            toast.success("Development log saved to database!");
            setShowAddForm(false);
            setNewEntry({ title: "", description: "", features: "", challenges: "", batch: "" });
            fetchLogs(); // Refresh from API
        } catch {
            // Fallback: add locally if API fails
            const localLog: DevelopmentLog = {
                id: `local-${Date.now()}`,
                date: today,
                title: payload.title,
                description: payload.description,
                features: payload.features,
                challenges: payload.challenges,
                batch: payload.batch,
            };
            setLogs([localLog, ...logs]);
            setShowAddForm(false);
            setNewEntry({ title: "", description: "", features: "", challenges: "", batch: "" });
            toast.warning("Saved locally (API unreachable)");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteEntry = async (logId: string | number) => {
        if (!window.confirm("Delete this development log permanently?")) return;

        // Don't allow deleting static seed entries
        if (String(logId).startsWith("seed-") || String(logId).startsWith("local-")) {
            setLogs(logs.filter(l => l.id !== logId));
            toast.success("Entry removed");
            return;
        }

        setIsDeleting(logId);
        try {
            await api.delete(`/admin/development-logs/${logId}`);
            toast.success("Log deleted");
            fetchLogs();
        } catch {
            toast.error("Delete failed");
        } finally {
            setIsDeleting(null);
        }
    };

    const handleSeedDatabase = async () => {
        if (!window.confirm("This will push all static entries to the database. Continue?")) return;

        setIsSaving(true);
        let count = 0;
        for (const entry of STATIC_SEED) {
            try {
                await api.post("/admin/development-logs", {
                    date: entry.date,
                    title: entry.title,
                    description: entry.description,
                    batch: entry.batch,
                    features: entry.features,
                    challenges: entry.challenges,
                });
                count++;
            } catch {
                // Skip duplicates or errors
            }
        }
        toast.success(`Seeded ${count} entries to database`);
        setIsSaving(false);
        fetchLogs();
    };

    const handleSyncGit = async () => {
        setIsSyncingGit(true);
        try {
            const res = await api.post("/admin/development-logs/git-sync", null, {
                params: { limit: 50 }
            });
            toast.success(`Synced! Added ${res.data.added_count} new entries from Git.`);
            fetchLogs();
        } catch (error: any) {
            toast.error(error?.response?.data?.detail || "Failed to sync with Git.");
        } finally {
            setIsSyncingGit(false);
        }
    };

    const getBatchColor = (batch: string) => {
        const colors: Record<string, string> = {
            "Batch 1": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "Batch 1.1": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
            "Batch 2": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
            "Admin Portal": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
            "Backend": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            "DevOps": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            "Graphotherapy": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
            "History": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
            "UPSC": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
            "Geography": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
            "Teacher Portal": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
            "Core Platform": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
            "Reports": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
            "Mindscape": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
        };
        return colors[batch] || "bg-muted text-foreground";
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-muted-foreground text-sm">Loading development history...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <Calendar className="w-8 h-8 text-indigo-600" />
                            Development History
                        </h1>
                        <div className="flex items-center gap-3 mt-2">
                            <p className="text-muted-foreground">
                                Track all development activities
                            </p>
                            {/* Live/Offline indicator */}
                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                isLive
                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                                    : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                            }`}>
                                {isLive ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                                {isLive ? "LIVE" : "STATIC"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {!isLive && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleSeedDatabase}
                                disabled={isSaving}
                                className="gap-2 text-xs"
                            >
                                <Database className="w-3.5 h-3.5" />
                                Seed DB
                            </Button>
                        )}
                        {isLive && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleSyncGit}
                                disabled={isSyncingGit}
                                className="gap-2 text-xs"
                            >
                                <GitCommit className={`w-3.5 h-3.5 ${isSyncingGit ? "animate-spin" : ""}`} />
                                {isSyncingGit ? "Syncing..." : "Sync Git"}
                            </Button>
                        )}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={fetchLogs}
                            className="gap-2 text-xs"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Refresh
                        </Button>
                        <Button
                            onClick={() => setShowAddForm(!showAddForm)}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
                        >
                            <Plus className="w-4 h-4" />
                            Add Entry
                        </Button>
                    </div>
                </div>
            </div>

            {/* Add Entry Form */}
            {showAddForm && (
                <Card className="mb-8 border-2 border-indigo-200 dark:border-indigo-800">
                    <CardHeader>
                        <CardTitle className="text-lg">Add New Development Entry</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Title</label>
                                <Input
                                    value={newEntry.title}
                                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                                    placeholder="e.g., Pomodoro Timer Enhancement"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Batch/Area</label>
                                <Input
                                    value={newEntry.batch}
                                    onChange={(e) => setNewEntry({ ...newEntry, batch: e.target.value })}
                                    placeholder="e.g., Batch 1, Admin Portal"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Description</label>
                            <Textarea
                                value={newEntry.description}
                                onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                                placeholder="Brief description of work done..."
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Features (one per line)</label>
                                <Textarea
                                    value={newEntry.features}
                                    onChange={(e) => setNewEntry({ ...newEntry, features: e.target.value })}
                                    placeholder={"Added X feature\nImplemented Y\nFixed Z bug"}
                                    rows={4}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Challenges (one per line)</label>
                                <Textarea
                                    value={newEntry.challenges}
                                    onChange={(e) => setNewEntry({ ...newEntry, challenges: e.target.value })}
                                    placeholder={"Type errors in...\nAPI integration issues..."}
                                    rows={4}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                            <Button onClick={handleAddEntry} disabled={!newEntry.title || isSaving}>
                                {isSaving ? "Saving..." : "Save Entry"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    <select
                        value={filterBatch}
                        onChange={(e) => setFilterBatch(e.target.value)}
                        className="px-3 py-2 border rounded-lg bg-card text-foreground"
                    >
                        {batches.map(batch => (
                            <option key={batch} value={batch}>
                                {batch === "all" ? "All Batches" : batch}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">From:</span>
                    <Input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        className="w-40"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">To:</span>
                    <Input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        className="w-40"
                    />
                </div>
                <Button variant="outline" size="sm" onClick={() => setDateRange({ start: "", end: "" })}>
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Reset
                </Button>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Clock className="w-8 h-8 text-blue-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">{filteredLogs.length}</p>
                            <p className="text-sm text-muted-foreground">Total Entries</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-green-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">
                                {filteredLogs.reduce((acc, log) => acc + log.features.length, 0)}
                            </p>
                            <p className="text-sm text-muted-foreground">Features Added</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-amber-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">
                                {filteredLogs.reduce((acc, log) => acc + log.challenges.length, 0)}
                            </p>
                            <p className="text-sm text-muted-foreground">Challenges Resolved</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8 text-purple-600" />
                        <div>
                            <p className="text-2xl font-bold text-foreground">
                                {new Set(filteredLogs.map(l => l.batch)).size}
                            </p>
                            <p className="text-sm text-muted-foreground">Areas Worked On</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
                {filteredLogs.map((log, index) => (
                    <Card key={String(log.id)} className="relative overflow-hidden group">
                        {/* Timeline connector */}
                        {index < filteredLogs.length - 1 && (
                            <div className="absolute left-8 top-full w-0.5 h-4 bg-muted z-10" />
                        )}

                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                {/* Date circle */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white">
                                    <span className="text-lg font-bold">{new Date(log.date).getDate()}</span>
                                    <span className="text-xs">{new Date(log.date).toLocaleString('default', { month: 'short' })}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">
                                                {log.title}
                                            </h3>
                                            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getBatchColor(log.batch)}`}>
                                                {log.batch}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={() => handleDeleteEntry(log.id)}
                                                className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                title="Delete entry"
                                            >
                                                <Trash2 className="w-4 h-4 text-red-400" />
                                            </button>
                                            <button
                                                onClick={() => toggleExpanded(log.id)}
                                                className="p-2 hover:bg-muted dark:hover:bg-gray-800 rounded-lg transition-colors"
                                            >
                                                {expandedItems.has(String(log.id)) ? (
                                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                                ) : (
                                                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mt-3">
                                        {log.description}
                                    </p>

                                    {expandedItems.has(String(log.id)) && (
                                        <div className="mt-4 grid grid-cols-2 gap-6">
                                            {/* Features */}
                                            {log.features.length > 0 && (
                                                <div>
                                                    <h4 className="font-medium text-green-600 dark:text-green-400 flex items-center gap-2 mb-2">
                                                        <Sparkles className="w-4 h-4" />
                                                        Features Developed
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {log.features.map((feature, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Challenges */}
                                            {log.challenges.length > 0 && (
                                                <div>
                                                    <h4 className="font-medium text-amber-600 dark:text-amber-400 flex items-center gap-2 mb-2">
                                                        <AlertTriangle className="w-4 h-4" />
                                                        Challenges Faced
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {log.challenges.map((challenge, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                                                {challenge}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {filteredLogs.length === 0 && (
                    <div className="text-center py-16">
                        <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
                        <p className="text-muted-foreground text-lg font-medium">No entries match your filters</p>
                        <p className="text-muted-foreground text-sm mt-1">Try adjusting the batch or date range</p>
                    </div>
                )}
            </div>
        </div>
    );
}
