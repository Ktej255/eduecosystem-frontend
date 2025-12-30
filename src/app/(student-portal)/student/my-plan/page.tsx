"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BookOpen,
    Clock,
    Target,
    CheckCircle2,
    Circle,
    ArrowRight,
    Calendar,
    TrendingUp,
    Brain,
    FileQuestion,
    Loader2,
    Lock,
    AlertTriangle,
    Mic,
    Send,
    BarChart3,
    ListChecks,
    LayoutDashboard
} from "lucide-react";
import Link from "next/link";

// PRODUCTION: Railway backend - DO NOT CHANGE
const API_BASE = "https://eduecosystem-backend-production.up.railway.app/api/v1";

interface SubjectProgress {
    name: string;
    priority: string;
    total_topics: number;
    completed_topics: number;
    percentage: number;
}

interface DashboardData {
    email: string;
    overall_progress: {
        total_topics: number;
        completed_topics: number;
        percentage: number;
    };
    subject_progress: Record<string, SubjectProgress>;
    schedule: {
        start_time: string;
        end_time: string;
        daily_hours: number;
    };
}

interface TimeSlot {
    time: string;
    type: string;
    duration: number;
    topic?: {
        id: string;
        name: string;
        subject: string;
        subtopics: string[];
        priority: string;
    };
    pyqs?: any[];
    description?: string;
}

interface TodayPlan {
    email: string;
    date: string;
    day_number?: number;
    total_days?: number;
    slots: TimeSlot[];
    total_new_topics: number;
    status: string;
    message?: string;
    days_until_start?: number;
}

interface ReportData {
    overall_retention: number;
    total_submissions: number;
    daily_retention: { day: number; score: number }[];
}

export default function MyPlanPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [dashboard, setDashboard] = useState<DashboardData | null>(null);
    const [todayPlan, setTodayPlan] = useState<TodayPlan | null>(null);
    const [reports, setReports] = useState<ReportData | null>(null);
    const [activeTab, setActiveTab] = useState('daily');
    const [recordingTopic, setRecordingTopic] = useState<string | null>(null);

    // Hardcoded email for now - in production, get from auth context
    const userEmail = "chitrakumawat33@gmail.com";

    useEffect(() => {
        async function fetchData() {
            try {
                // Check access
                const accessRes = await fetch(`${API_BASE}/planner/check-access/${userEmail}`);
                const accessData = await accessRes.json();

                if (!accessData.has_access) {
                    setHasAccess(false);
                    setLoading(false);
                    return;
                }

                setHasAccess(true);

                // Fetch all data in parallel
                const [dashRes, todayRes, reportRes] = await Promise.all([
                    fetch(`${API_BASE}/planner/dashboard/${userEmail}`),
                    fetch(`${API_BASE}/planner/today/${userEmail}`),
                    fetch(`${API_BASE}/planner/reports/${userEmail}`)
                ]);

                if (dashRes.ok) setDashboard(await dashRes.json());
                if (todayRes.ok) setTodayPlan(await todayRes.json());
                if (reportRes.ok) setReports(await reportRes.json());

            } catch (error) {
                console.error('Error fetching planner data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleTopicComplete = async (topicId: string, completed: boolean) => {
        try {
            await fetch(`${API_BASE}/planner/update-progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail,
                    topic_id: topicId,
                    completed
                })
            });

            // Refresh data
            const dashRes = await fetch(`${API_BASE}/planner/dashboard/${userEmail}`);
            if (dashRes.ok) setDashboard(await dashRes.json());
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    const handleRecordSubmit = async (topicId: string) => {
        setRecordingTopic(topicId);
        // In a real implementation, this would trigger recording UI
        // For demo, we simulate a submission after 2 seconds
        setTimeout(async () => {
            try {
                const res = await fetch(`${API_BASE}/planner/record-and-submit`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: userEmail,
                        topic_id: topicId,
                        duration: 60,
                        explanation_text: "System simulated explanation for the topic."
                    })
                });
                if (res.ok) {
                    setRecordingTopic(null);
                    // Refresh dash and reports
                    const [dashRes, reportRes] = await Promise.all([
                        fetch(`${API_BASE}/planner/dashboard/${userEmail}`),
                        fetch(`${API_BASE}/planner/today/${userEmail}`),
                        fetch(`${API_BASE}/planner/reports/${userEmail}`)
                    ]);
                    if (dashRes.ok) setDashboard(await dashRes.json());
                    if (reportRes.ok) setReports(await reportRes.json());
                }
            } catch (e) {
                console.error("Recording failed", e);
                setRecordingTopic(null);
            }
        }, 2000);
    };

    const handleAICheck = async (topicId: string) => {
        try {
            const res = await fetch(`${API_BASE}/planner/ai-learning-check`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userEmail, topic_id: topicId })
            });
            const data = await res.json();
            alert(`AI Learning Check: ${data.question}\n\n(This would open a quiz interface)`);
        } catch (e) {
            console.error("AI Check failed", e);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto mb-4" />
                    <span className="text-gray-600 font-medium">Preparing your 40-day RAS Revision Journey...</span>
                </div>
            </div>
        );
    }

    if (!hasAccess) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-center">
                <Lock className="h-16 w-16 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-600">Access Restricted</h2>
                <p className="text-gray-500 mt-2">This personalized plan is exclusively for authorized RAS learners.</p>
                <Link href="/student/dashboard">
                    <Button className="mt-4">Return to Student Portal</Button>
                </Link>
            </div>
        );
    }

    const priorityColors: Record<string, string> = {
        high: "text-red-700 bg-red-100 dark:bg-red-900/30",
        medium: "text-amber-700 bg-amber-100 dark:bg-amber-900/30",
        low: "text-green-700 bg-green-100 dark:bg-green-900/30"
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div>
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        RAS Revision Mastery
                    </h1>
                    <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Starts Jan 1, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 1:30 PM - 8:30 PM (7h Daily)</span>
                    </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-xl border border-indigo-100 dark:border-indigo-800 flex items-center gap-3">
                    <div className="text-right">
                        <div className="text-xs uppercase tracking-wider text-indigo-600 font-bold">Overall Progress</div>
                        <div className="text-2xl font-black text-indigo-900 dark:text-indigo-100">{dashboard?.overall_progress.percentage}%</div>
                    </div>
                    <Progress value={dashboard?.overall_progress.percentage} className="w-24 h-3 rounded-full" />
                </div>
            </div>

            <Tabs defaultValue="daily" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 h-14 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                    <TabsTrigger value="daily" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm">
                        <ListChecks className="h-4 w-4" /> Daily Tasks
                    </TabsTrigger>
                    <TabsTrigger value="inventory" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <BookOpen className="h-4 w-4" /> Knowledge Inventory
                    </TabsTrigger>
                    <TabsTrigger value="overview" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <LayoutDashboard className="h-4 w-4" /> Plan Overview
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <BarChart3 className="h-4 w-4" /> Retention Reports
                    </TabsTrigger>
                </TabsList>

                {/* DAILY TASKS CONTENT */}
                <TabsContent value="daily" className="mt-6 space-y-6">
                    {todayPlan && todayPlan.status === 'not_started' ? (
                        <Card className="border-dashed border-2 py-12 text-center">
                            <CardContent>
                                <Calendar className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-700">{todayPlan.message}</h3>
                                <p className="text-gray-500 mt-2">Plan officially begins in {todayPlan.days_until_start} days. Prepare your materials!</p>
                            </CardContent>
                        </Card>
                    ) : todayPlan && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        Day {todayPlan.day_number} <span className="text-gray-400 text-lg font-normal">of 40</span>
                                    </h2>
                                    <div className="text-sm font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                                        Focus: Revision Priority
                                    </div>
                                </div>

                                {todayPlan.slots.map((slot, idx) => (
                                    <Card key={idx} className={`overflow-hidden transition-all hover:shadow-md ${slot.type === 'new_topic' ? 'border-l-4 border-l-indigo-500' : 'bg-gray-50/50'}`}>
                                        <CardContent className="p-0">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-32 bg-gray-100 dark:bg-gray-800 p-4 flex md:flex-col items-center justify-center gap-1 border-r border-gray-200 dark:border-gray-700">
                                                    <Clock className="h-4 w-4 text-gray-500" />
                                                    <span className="text-xs font-mono font-bold text-center">{slot.time.split(' - ')[0]}</span>
                                                    <div className="h-px w-4 bg-gray-300 md:block hidden my-1"></div>
                                                    <span className="text-[10px] text-gray-500">{slot.duration}m</span>
                                                </div>
                                                <div className="flex-1 p-5">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md ${slot.type === 'new_topic' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-200 text-gray-600'}`}>
                                                                    {slot.type.replace('_', ' ')}
                                                                </span>
                                                                {slot.topic && (
                                                                    <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md ${priorityColors[slot.topic.priority]}`}>
                                                                        {slot.topic.priority} Priority
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                                                {slot.topic ? slot.topic.name : slot.type.replace('_', ' ').toUpperCase()}
                                                            </h4>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                                {slot.topic ? slot.topic.subject : slot.description}
                                                            </p>

                                                            {slot.topic && (
                                                                <div className="flex flex-wrap gap-1.5 mt-3">
                                                                    {slot.topic.subtopics.map((sub, i) => (
                                                                        <span key={i} className="text-[11px] font-medium bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-300">
                                                                            {sub}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex flex-col gap-2">
                                                            {slot.topic && (
                                                                <>
                                                                    <Button
                                                                        variant="default"
                                                                        size="sm"
                                                                        className="shadow-sm gap-2"
                                                                        onClick={() => handleRecordSubmit(slot.topic!.id)}
                                                                        disabled={recordingTopic === slot.topic.id}
                                                                    >
                                                                        {recordingTopic === slot.topic.id ? (
                                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                                        ) : <Mic className="h-4 w-4" />}
                                                                        Record & Submit
                                                                    </Button>
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="gap-2"
                                                                        onClick={() => handleAICheck(slot.topic!.id)}
                                                                    >
                                                                        <Brain className="h-4 w-4 text-purple-600" />
                                                                        AI Learning Check
                                                                    </Button>
                                                                </>
                                                            )}
                                                            {!slot.topic && slot.type !== 'summary' && (
                                                                <Button variant="ghost" size="sm" className="gap-2 text-gray-400">
                                                                    <CheckCircle2 className="h-4 w-4" /> Mark Done
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-0 shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Study Strategy</CardTitle>
                                        <CardDescription className="text-indigo-100">Optimized for Day {todayPlan.day_number}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 text-sm">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white/20 rounded-lg"><Target className="h-4 w-4" /></div>
                                            <p>Focus on <b>active recall</b> during the summary session. Use the Record & Submit feature for better retention.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white/20 rounded-lg"><Brain className="h-4 w-4" /></div>
                                            <p>Today covers <b>{todayPlan.total_new_topics} key topics</b>. Ensure you practice at least 5 PYQs for each.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Upcoming Milestones</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { day: 7, title: "Rajasthan Geo Completion" },
                                            { day: 15, title: "Science & Tech Mastery" },
                                            { day: 30, title: "Full Mock Test 1" }
                                        ].map((m, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${m.day <= (todayPlan.day_number || 0) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    D-{m.day}
                                                </div>
                                                <div className="text-sm font-medium">{m.title}</div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </TabsContent>

                {/* KNOWLEDGE INVENTORY CONTENT */}
                <TabsContent value="inventory" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dashboard && Object.entries(dashboard.subject_progress).map(([key, subject]) => (
                            <Card key={key} className="overflow-hidden border-gray-200 dark:border-gray-700">
                                <CardHeader className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-lg">{subject.name}</h3>
                                        <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${priorityColors[subject.priority]}`}>
                                            {subject.priority}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Provided vs Selected</span>
                                        <span className="font-bold">{subject.completed_topics}/{subject.total_topics} Topics</span>
                                    </div>
                                    <Progress value={subject.percentage} className="h-2" />
                                    <div className="pt-2">
                                        <Link href={`#subject-${key}`}>
                                            <Button variant="outline" size="sm" className="w-full text-xs gap-1">
                                                View Topic Slivers <ArrowRight className="h-3 w-3" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* OVERVIEW CONTENT */}
                <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Card className="md:col-span-1">
                            <CardHeader>
                                <CardTitle className="text-lg">Plan Structure</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <div className="text-xs text-gray-500">Duration</div>
                                    <div className="font-bold text-lg">40 Days (Strict)</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs text-gray-500">Daily Study Hours</div>
                                    <div className="font-bold text-lg">7 Hours (Continuous)</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs text-gray-500">Total Subjects</div>
                                    <div className="font-bold text-lg">{dashboard ? Object.keys(dashboard.subject_progress).length : 0}</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-3">
                            <CardHeader>
                                <CardTitle className="text-lg">Syllabus Roadmap</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500">
                                    {[
                                        { week: "Week 1", desc: "Core Foundation & Rajasthan Geography", status: "Focus" },
                                        { week: "Week 2", desc: "Science & Technology Integration", status: "Upcoming" },
                                        { week: "Week 3", desc: "Indian Economy & Polity Intensive", status: "Upcoming" },
                                        { week: "Week 4", desc: "Full Length Tests & Final Polish", status: "Grand Finale" }
                                    ].map((step, i) => (
                                        <div key={i} className="relative pl-12">
                                            <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full border-4 border-white dark:border-gray-900 bg-indigo-600 shadow-sm flex items-center justify-center">
                                                <TrendingUp className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <h4 className="font-bold text-lg">{step.week}</h4>
                                                    <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded uppercase font-black">{step.status}</span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* REPORTS CONTENT */}
                <TabsContent value="reports" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recall Score Accuracy</CardTitle>
                                <CardDescription>Average performance over the last 10 submissions</CardDescription>
                            </CardHeader>
                            <CardContent className="h-64 flex items-end justify-between gap-2 pt-10">
                                {reports?.daily_retention.map((d, i) => (
                                    <div key={i} className="group relative flex-1 flex flex-col items-center">
                                        <div
                                            className="w-full bg-indigo-500 rounded-t-md transition-all group-hover:bg-indigo-600"
                                            style={{ height: `${d.score}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                Score: {d.score}
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 mt-2">D{d.day}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Daily Retention Insights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-green-600 font-bold uppercase">Average Retention</div>
                                        <div className="text-3xl font-black text-green-900 dark:text-green-100">{reports?.overall_retention}%</div>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-sm">Actionable Feedback</h4>
                                    <div className="space-y-2">
                                        <div className="flex gap-3 text-sm">
                                            <div className="text-indigo-600 font-bold">•</div>
                                            <p className="text-gray-600 dark:text-gray-400">Your retention in <b>Rajasthan Geography</b> is exceptional (92%).</p>
                                        </div>
                                        <div className="flex gap-3 text-sm">
                                            <div className="text-amber-600 font-bold">•</div>
                                            <p className="text-gray-600 dark:text-gray-400">Consider revising <b>Physics</b> subtopics again; recall speed was slower than usual.</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full bg-indigo-600 gap-2">
                                    <TrendingUp className="h-4 w-4" /> Generate Full Report
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
