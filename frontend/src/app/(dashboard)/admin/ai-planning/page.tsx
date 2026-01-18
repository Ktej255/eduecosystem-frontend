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

import { toast } from "sonner";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function AIPlanningPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [daysToAnalyze, setDaysToAnalyze] = useState(15);
    const [planGenerated, setPlanGenerated] = useState(false);
    const [planData, setPlanData] = useState<{ generated_plan: PlanItem[], strategic_insights: AIInsight[] } | null>(null);
    const [isLogging, setIsLogging] = useState(false);
    const [logForm, setLogForm] = useState({
        portal: "Admin",
        feature: "",
        action: "NEW_FEATURE",
        description: "",
        impact: "Medium"
    });

    const handleLogDevelopment = async () => {
        if (!logForm.feature || !logForm.description) {
            toast.error("Please fill in feature name and description");
            return;
        }
        setIsLogging(true);
        try {
            const token = localStorage.getItem("access_token");
            await axios.post(`${API_URL}/api/v1/admin/ai/log-development`, null, {
                params: logForm,
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Development action logged!");
            setLogForm({ ...logForm, feature: "", description: "" });
        } catch (error) {
            toast.error("Failed to log activity");
        } finally {
            setIsLogging(false);
        }
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const token = localStorage.getItem("access_token");
            const response = await axios.get(`${API_URL}/api/v1/admin/ai/plan`, {
                params: { lookback: daysToAnalyze },
                headers: { Authorization: `Bearer ${token}` }
            });
            setPlanData(response.data);
            setPlanGenerated(true);
            toast.success("AI Strategic Plan generated!");
        } catch (error) {
            console.error("Failed to generate plan", error);
            toast.error("Failed to reach Strategic AI engine");
        } finally {
            setIsGenerating(false);
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority?.toLowerCase()) {
            case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
            case "medium": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
            case "low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getInsightIcon = (type: string) => {
        switch (type?.toLowerCase()) {
            case "priority": return <Zap className="w-4 h-4 text-red-500" />;
            case "enhancement": return <Lightbulb className="w-4 h-4 text-amber-500" />;
            case "recommendation": return <Target className="w-4 h-4 text-blue-500" />;
            default: return <Sparkles className="w-4 h-4 text-gray-500" />;
        }
    };

    const totalHours = planData?.generated_plan.reduce((acc, p) => acc + p.estimatedHours, 0) || 0;
    const totalTasks = planData?.generated_plan.reduce((acc, p) => acc + p.tasks.length, 0) || 0;

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
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{planData?.strategic_insights.length || 0}</p>
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
                            {planData?.strategic_insights.map((insight, idx) => (
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
                            {planData?.generated_plan.map((plan) => (
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

            {/* Manual Activity Logger */}
            <hr className="my-12 border-gray-800" />
            <Card className="bg-zinc-900/50 border-zinc-800 border-dashed">
                <CardHeader>
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                        <Plus className="w-4 h-4 text-gray-500" />
                        Log Manual Development Activity
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <select
                            className="bg-black border border-zinc-800 rounded px-3 py-1.5 text-xs text-gray-300"
                            value={logForm.portal}
                            onChange={(e) => setLogForm({ ...logForm, portal: e.target.value })}
                        >
                            <option>Admin</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>CRM</option>
                            <option>Graphotherapy</option>
                        </select>
                        <select
                            className="bg-black border border-zinc-800 rounded px-3 py-1.5 text-xs text-gray-300"
                            value={logForm.action}
                            onChange={(e) => setLogForm({ ...logForm, action: e.target.value })}
                        >
                            <option value="NEW_FEATURE">New Feature</option>
                            <option value="BUG_FIX">Bug Fix</option>
                            <option value="ENHANCEMENT">Enhancement</option>
                        </select>
                        <Input
                            placeholder="Feature Name"
                            className="bg-black border-zinc-800 text-xs h-8"
                            value={logForm.feature}
                            onChange={(e) => setLogForm({ ...logForm, feature: e.target.value })}
                        />
                        <select
                            className="bg-black border border-zinc-800 rounded px-3 py-1.5 text-xs text-gray-300"
                            value={logForm.impact}
                            onChange={(e) => setLogForm({ ...logForm, impact: e.target.value })}
                        >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <Input
                            placeholder="Brief description of work done..."
                            className="bg-black border-zinc-800 text-xs h-8 flex-1"
                            value={logForm.description}
                            onChange={(e) => setLogForm({ ...logForm, description: e.target.value })}
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={isLogging}
                            onClick={handleLogDevelopment}
                            className="text-xs h-8"
                        >
                            {isLogging ? "Logging..." : "Log Activity"}
                        </Button>
                    </div>
                    <p className="text-[10px] text-gray-500">
                        Historical logs are used by the Strategic AI to understand current project state and suggest next steps.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
