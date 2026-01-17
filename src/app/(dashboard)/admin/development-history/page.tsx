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
    RefreshCw
} from "lucide-react";

interface DevelopmentLog {
    id: string;
    date: string;
    title: string;
    description: string;
    features: string[];
    challenges: string[];
    batch: string;
}

// Static development history data - will be replaced by API
const developmentHistory: DevelopmentLog[] = [
    {
        id: "1",
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
        id: "2",
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
        id: "3",
        date: "2026-01-16",
        title: "Batch 2 Premium Access Implementation",
        description: "Implemented access control and visual indicators for premium content within Batch 2.",
        features: [
            "Granted Batch 2 access to master ID and test accounts",
            "Added crown indicator for premium content",
            "Updated StudentSidebar.tsx navigation visibility",
            "Updated UpanishadProgressSequence.tsx unlock logic"
        ],
        challenges: [],
        batch: "Batch 2"
    },
    {
        id: "4",
        date: "2026-01-16",
        title: "Day 3 Evening Session Updates",
        description: "Implemented dynamic content loading for Chapter 16 and 17 in Batch 1.1 Evening Sessions.",
        features: [
            "Added Inter-State Relations chapter content",
            "Added Emergency Provisions chapter content",
            "Implemented day selection logic",
            "Created guided navigation flow between chapters"
        ],
        challenges: ["Type handling for ChapterSchedule union types"],
        batch: "Batch 1.1"
    },
    {
        id: "5",
        date: "2026-01-15",
        title: "Focus Analytics Integration",
        description: "Integrated real analytics data into Deep Reports tab of FocusPortal.",
        features: [
            "Created FocusAnalyticsService.ts",
            "Aggregated real user data from localStorage",
            "Replaced mock data with actual statistics",
            "Added flashcard counts and audio recall stats"
        ],
        challenges: ["Compilation errors during analytics service creation"],
        batch: "Batch 1"
    },
    {
        id: "6",
        date: "2026-01-15",
        title: "Backend Test Fixes",
        description: "Resolved import errors, NameError exceptions, and AttributeErrors in backend API endpoints.",
        features: [
            "Fixed missing type hints",
            "Corrected import statements",
            "Passed test_get_user_details test",
            "Passed full admin test suite"
        ],
        challenges: ["Pydantic and datetime deprecation warnings"],
        batch: "Backend"
    },
    {
        id: "7",
        date: "2026-01-14",
        title: "Pomodoro Focus & Goals Enhancement",
        description: "Enhanced Pomodoro timer with ambient focus features and task management.",
        features: [
            "Implemented AudioContext ambient noise generator",
            "Developed sound mixer UI controls",
            "Added session goal input field",
            "Integrated goal persistence using localStorage"
        ],
        challenges: [],
        batch: "Batch 1"
    },
    {
        id: "8",
        date: "2026-01-14",
        title: "Sadhana Modules Integration",
        description: "Integrated immersive Sadhana modules into Ancient Wisdom (Batch 2) portal.",
        features: [
            "Added level property to Upanishad108 interface",
            "Assigned Prana/Manas/Buddhi/Yoga/Moksha levels",
            "Implemented progress tracking for Transformation Roadmap",
            "Populated Vedic Knowledge Graph"
        ],
        challenges: [],
        batch: "Batch 2"
    },
    {
        id: "9",
        date: "2026-01-13",
        title: "AI Report Generation for Graphotherapy",
        description: "Implemented AI-powered report generation for the Graphotherapy funnel.",
        features: [
            "Created POST /graphotherapy/funnel/analyze endpoint",
            "Integrated Gemini Service for handwriting analysis",
            "Created analysis results page",
            "Added dynamic personality analysis display"
        ],
        challenges: ["File transfer between wizard steps"],
        batch: "Graphotherapy"
    },
    {
        id: "10",
        date: "2026-01-12",
        title: "CSAT Practice Set Integration",
        description: "Integrated UPSC CSAT Practice Set Day 03 into Day 1 Evening Session.",
        features: [
            "Created new data file for practice set",
            "Formatted passages and questions correctly",
            "Updated Evening Session configuration"
        ],
        challenges: ["Type error in Batch1_1EveningSession.tsx - ChapterSchedule handling"],
        batch: "Batch 1.1"
    }
];

export default function DevelopmentHistoryPage() {
    const [logs, setLogs] = useState<DevelopmentLog[]>(developmentHistory);
    const [filteredLogs, setFilteredLogs] = useState<DevelopmentLog[]>(developmentHistory);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [showAddForm, setShowAddForm] = useState(false);
    const [filterBatch, setFilterBatch] = useState<string>("all");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });

    // New entry form state
    const [newEntry, setNewEntry] = useState({
        title: "",
        description: "",
        features: "",
        challenges: "",
        batch: ""
    });

    const batches = ["all", ...new Set(logs.map(l => l.batch))];

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

    const toggleExpanded = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const handleAddEntry = () => {
        const today = new Date().toISOString().split('T')[0];
        const newLog: DevelopmentLog = {
            id: Date.now().toString(),
            date: today,
            title: newEntry.title,
            description: newEntry.description,
            features: newEntry.features.split('\n').filter(f => f.trim()),
            challenges: newEntry.challenges.split('\n').filter(c => c.trim()),
            batch: newEntry.batch || "General"
        };

        setLogs([newLog, ...logs]);
        setShowAddForm(false);
        setNewEntry({ title: "", description: "", features: "", challenges: "", batch: "" });
    };

    const getBatchColor = (batch: string) => {
        const colors: Record<string, string> = {
            "Batch 1": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "Batch 1.1": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
            "Batch 2": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
            "Admin Portal": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
            "Backend": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            "DevOps": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            "Graphotherapy": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
        };
        return colors[batch] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                            <Calendar className="w-8 h-8 text-indigo-600" />
                            Development History
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Track all development activities from the last 2 months
                        </p>
                    </div>
                    <Button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Entry
                    </Button>
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
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                                <Input
                                    value={newEntry.title}
                                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                                    placeholder="e.g., Pomodoro Timer Enhancement"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Batch/Area</label>
                                <Input
                                    value={newEntry.batch}
                                    onChange={(e) => setNewEntry({ ...newEntry, batch: e.target.value })}
                                    placeholder="e.g., Batch 1, Admin Portal"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                            <Textarea
                                value={newEntry.description}
                                onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                                placeholder="Brief description of work done..."
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Features (one per line)</label>
                                <Textarea
                                    value={newEntry.features}
                                    onChange={(e) => setNewEntry({ ...newEntry, features: e.target.value })}
                                    placeholder="Added X feature&#10;Implemented Y&#10;Fixed Z bug"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Challenges (one per line)</label>
                                <Textarea
                                    value={newEntry.challenges}
                                    onChange={(e) => setNewEntry({ ...newEntry, challenges: e.target.value })}
                                    placeholder="Type errors in...&#10;API integration issues..."
                                    rows={4}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                            <Button onClick={handleAddEntry} disabled={!newEntry.title}>Save Entry</Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                        value={filterBatch}
                        onChange={(e) => setFilterBatch(e.target.value)}
                        className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        {batches.map(batch => (
                            <option key={batch} value={batch}>
                                {batch === "all" ? "All Batches" : batch}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">From:</span>
                    <Input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        className="w-40"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">To:</span>
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
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{filteredLogs.length}</p>
                            <p className="text-sm text-gray-500">Total Entries</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-green-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {filteredLogs.reduce((acc, log) => acc + log.features.length, 0)}
                            </p>
                            <p className="text-sm text-gray-500">Features Added</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-amber-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {filteredLogs.reduce((acc, log) => acc + log.challenges.length, 0)}
                            </p>
                            <p className="text-sm text-gray-500">Challenges Resolved</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8 text-purple-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {new Set(filteredLogs.map(l => l.batch)).size}
                            </p>
                            <p className="text-sm text-gray-500">Areas Worked On</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
                {filteredLogs.map((log, index) => (
                    <Card key={log.id} className="relative overflow-hidden">
                        {/* Timeline connector */}
                        {index < filteredLogs.length - 1 && (
                            <div className="absolute left-8 top-full w-0.5 h-4 bg-gray-200 dark:bg-gray-700 z-10" />
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
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                {log.title}
                                            </h3>
                                            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getBatchColor(log.batch)}`}>
                                                {log.batch}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => toggleExpanded(log.id)}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                        >
                                            {expandedItems.has(log.id) ? (
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-gray-500" />
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                                        {log.description}
                                    </p>

                                    {expandedItems.has(log.id) && (
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
                                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
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
                                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
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
            </div>
        </div>
    );
}
