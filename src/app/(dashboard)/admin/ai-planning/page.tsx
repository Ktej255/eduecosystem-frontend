"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Sparkles,
    RefreshCw,
    Calendar,
    Target,
    Lightbulb,
    ChevronRight,
    Zap,
    TrendingUp,
    Clock,
    CheckCircle2
} from "lucide-react";

interface PlanItem {
    day: number;
    date: string;
    portal: string;
    tasks: string[];
    priority: "high" | "medium" | "low";
    estimatedHours: number;
}

interface AIInsight {
    type: "enhancement" | "priority" | "recommendation";
    message: string;
    portal: string;
}

export default function AIPlanningPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [daysToAnalyze, setDaysToAnalyze] = useState(15);
    const [planGenerated, setPlanGenerated] = useState(true);

    // AI-generated 7-day plan
    const generatedPlan: PlanItem[] = [
        {
            day: 1,
            date: "2026-01-18",
            portal: "Admin Portal",
            tasks: [
                "Complete backend models for DevelopmentLog and DailyReport",
                "Create CRUD endpoints for development history",
                "Implement AI planning API integration with Gemini",
                "Add auto-logging mechanism for daily summaries"
            ],
            priority: "high",
            estimatedHours: 8
        },
        {
            day: 2,
            date: "2026-01-19",
            portal: "Admin Portal",
            tasks: [
                "Enhance PDR visualization with interactive D3.js",
                "Add zoom/pan functionality to portal map",
                "Implement page navigation from diagram nodes",
                "Create detailed connection tooltips"
            ],
            priority: "high",
            estimatedHours: 6
        },
        {
            day: 3,
            date: "2026-01-20",
            portal: "Student Portal - Batch 1",
            tasks: [
                "Implement real-time Pomodoro session tracking to backend",
                "Create MCQ completion analytics API",
                "Add study time aggregation service",
                "Build student activity heatmap component"
            ],
            priority: "high",
            estimatedHours: 8
        },
        {
            day: 4,
            date: "2026-01-21",
            portal: "Student Portal - Batch 1.1",
            tasks: [
                "Add cumulative timer to MCQ sessions",
                "Implement auto-submission on timer end",
                "Create detailed grading with explanations",
                "Add 'Read Material' phase after MCQs"
            ],
            priority: "medium",
            estimatedHours: 6
        },
        {
            day: 5,
            date: "2026-01-22",
            portal: "Teacher Portal",
            tasks: [
                "Create teacher activity tracking dashboard",
                "Add content upload analytics",
                "Implement student progress overview for teachers",
                "Build engagement metrics visualization"
            ],
            priority: "medium",
            estimatedHours: 5
        },
        {
            day: 6,
            date: "2026-01-23",
            portal: "CRM Portal",
            tasks: [
                "Integrate real lead data with admin dashboard",
                "Add lead conversion tracking",
                "Create automated follow-up reminders",
                "Build marketing campaign analytics"
            ],
            priority: "medium",
            estimatedHours: 6
        },
        {
            day: 7,
            date: "2026-01-24",
            portal: "All Portals",
            tasks: [
                "Run comprehensive test suite",
                "Fix any remaining bugs",
                "Deploy all changes to production",
                "Create walkthrough documentation",
                "User acceptance testing"
            ],
            priority: "high",
            estimatedHours: 8
        }
    ];

    // AI-generated insights
    const aiInsights: AIInsight[] = [
        {
            type: "priority",
            message: "Student Pomodoro tracking should be prioritized - 15+ days of user data not being captured in admin dashboard",
            portal: "Admin Portal"
        },
        {
            type: "enhancement",
            message: "Consider adding email notifications when students complete batch milestones to increase engagement",
            portal: "Student Portal"
        },
        {
            type: "recommendation",
            message: "The Batch 1.1 evening session flow could benefit from progress persistence across browser sessions",
            portal: "Batch 1.1"
        },
        {
            type: "enhancement",
            message: "Add weekly digest emails for teachers showing their students' progress summaries",
            portal: "Teacher Portal"
        },
        {
            type: "priority",
            message: "Mobile responsiveness needs attention - several admin pages don't scale well on tablet devices",
            portal: "Admin Portal"
        }
    ];

    const handleGenerate = async () => {
        setIsGenerating(true);
        // Simulate AI generation
        await new Promise(resolve => setTimeout(resolve, 2000));
        setPlanGenerated(true);
        setIsGenerating(false);
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
            case "medium": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
            case "low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getInsightIcon = (type: string) => {
        switch (type) {
            case "priority": return <Zap className="w-4 h-4 text-red-500" />;
            case "enhancement": return <Lightbulb className="w-4 h-4 text-amber-500" />;
            case "recommendation": return <Target className="w-4 h-4 text-blue-500" />;
            default: return <Sparkles className="w-4 h-4 text-gray-500" />;
        }
    };

    const totalHours = generatedPlan.reduce((acc, p) => acc + p.estimatedHours, 0);
    const totalTasks = generatedPlan.reduce((acc, p) => acc + p.tasks.length, 0);

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                            <Brain className="w-8 h-8 text-purple-600" />
                            AI-Powered Planning
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Analyzes past development and generates 7-day enhancement plans
                        </p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <Card className="mb-8">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Analyze Last</label>
                                <select
                                    value={daysToAnalyze}
                                    onChange={(e) => setDaysToAnalyze(Number(e.target.value))}
                                    className="ml-2 px-3 py-1.5 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                >
                                    <option value={7}>7 days</option>
                                    <option value={10}>10 days</option>
                                    <option value={15}>15 days</option>
                                    <option value={30}>30 days</option>
                                </select>
                            </div>
                            <div className="text-sm text-gray-500">
                                Portals: Admin, Student, Teacher, CRM, Graphotherapy
                            </div>
                        </div>
                        <Button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                        >
                            {isGenerating ? (
                                <>
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4" />
                                    Generate Plan
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {planGenerated && (
                <>
                    {/* Summary Stats */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <Card className="p-4 border-l-4 border-l-purple-500">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-8 h-8 text-purple-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">7</p>
                                    <p className="text-sm text-gray-500">Days Planned</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4 border-l-4 border-l-blue-500">
                            <div className="flex items-center gap-3">
                                <Target className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalTasks}</p>
                                    <p className="text-sm text-gray-500">Tasks Identified</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4 border-l-4 border-l-amber-500">
                            <div className="flex items-center gap-3">
                                <Clock className="w-8 h-8 text-amber-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalHours}h</p>
                                    <p className="text-sm text-gray-500">Estimated Time</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4 border-l-4 border-l-green-500">
                            <div className="flex items-center gap-3">
                                <Lightbulb className="w-8 h-8 text-green-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{aiInsights.length}</p>
                                    <p className="text-sm text-gray-500">AI Insights</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* AI Insights */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-amber-600" />
                            AI-Generated Insights
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {aiInsights.map((insight, idx) => (
                                <Card key={idx} className="p-4">
                                    <div className="flex items-start gap-3">
                                        {getInsightIcon(insight.type)}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                                    {insight.portal}
                                                </span>
                                                <span className="text-xs text-gray-400 capitalize">{insight.type}</span>
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{insight.message}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* 7-Day Plan */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-indigo-600" />
                            7-Day Development Plan
                        </h2>
                        <div className="space-y-4">
                            {generatedPlan.map((plan) => (
                                <Card key={plan.day} className="overflow-hidden">
                                    <div className="flex">
                                        {/* Day Badge */}
                                        <div className="w-20 bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 text-white">
                                            <span className="text-xs font-medium">Day</span>
                                            <span className="text-2xl font-bold">{plan.day}</span>
                                        </div>

                                        <CardContent className="flex-1 p-5">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                                            {plan.portal}
                                                        </h3>
                                                        <span className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(plan.priority)}`}>
                                                            {plan.priority}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500">{new Date(plan.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                                    <Clock className="w-4 h-4" />
                                                    {plan.estimatedHours}h
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                {plan.tasks.map((task, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
