"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
    AlertTriangle
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
    slots: TimeSlot[];
    total_new_topics: number;
    remaining_topics: number;
}

export default function MyPlanPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [dashboard, setDashboard] = useState<DashboardData | null>(null);
    const [todayPlan, setTodayPlan] = useState<TodayPlan | null>(null);
    const [activeView, setActiveView] = useState<'dashboard' | 'today'>('dashboard');

    // Hardcoded email for now - in production, get from auth context
    const userEmail = "chitrakumawat33@gmail.com";

    useEffect(() => {
        async function checkAccessAndFetch() {
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

                // Fetch dashboard
                const dashRes = await fetch(`${API_BASE}/planner/dashboard/${userEmail}`);
                if (dashRes.ok) {
                    const dashData = await dashRes.json();
                    setDashboard(dashData);
                }

                // Fetch today's plan
                const todayRes = await fetch(`${API_BASE}/planner/today/${userEmail}`);
                if (todayRes.ok) {
                    const todayData = await todayRes.json();
                    setTodayPlan(todayData);
                }
            } catch (error) {
                console.error('Error fetching planner data:', error);
            } finally {
                setLoading(false);
            }
        }

        checkAccessAndFetch();
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

            // Refresh dashboard
            const dashRes = await fetch(`${API_BASE}/planner/dashboard/${userEmail}`);
            if (dashRes.ok) {
                setDashboard(await dashRes.json());
            }
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                <span className="ml-2 text-gray-600">Loading your plan...</span>
            </div>
        );
    }

    if (!hasAccess) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-center">
                <Lock className="h-16 w-16 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-600">Access Restricted</h2>
                <p className="text-gray-500 mt-2">This personalized plan is not available for your account.</p>
                <Link href="/student/dashboard">
                    <Button className="mt-4">Go to Dashboard</Button>
                </Link>
            </div>
        );
    }

    const priorityColors: Record<string, string> = {
        high: "text-red-600 bg-red-100",
        medium: "text-amber-600 bg-amber-100",
        low: "text-green-600 bg-green-100"
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">My RAS Plan</h1>
                    <p className="text-gray-600">Personalized study schedule • 1:30 PM - 8:30 PM</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={activeView === 'dashboard' ? 'default' : 'outline'}
                        onClick={() => setActiveView('dashboard')}
                    >
                        Dashboard
                    </Button>
                    <Button
                        variant={activeView === 'today' ? 'default' : 'outline'}
                        onClick={() => setActiveView('today')}
                    >
                        Today's Plan
                    </Button>
                </div>
            </div>

            {/* Overall Progress */}
            {dashboard && (
                <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">RAS Syllabus Progress</h2>
                                <p className="text-indigo-200">
                                    {dashboard.overall_progress.completed_topics} of {dashboard.overall_progress.total_topics} topics completed
                                </p>
                            </div>
                            <div className="text-right">
                                <div className="text-5xl font-bold">{dashboard.overall_progress.percentage}%</div>
                                <div className="text-indigo-200">Overall</div>
                            </div>
                        </div>
                        <Progress value={dashboard.overall_progress.percentage} className="mt-4 h-4 bg-white/20" />
                    </CardContent>
                </Card>
            )}

            {activeView === 'dashboard' && dashboard && (
                <>
                    {/* Subject Progress Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(dashboard.subject_progress).map(([key, subject]) => (
                            <Card key={key} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="font-semibold">{subject.name}</h3>
                                            <span className={`text-xs px-2 py-0.5 rounded ${priorityColors[subject.priority]}`}>
                                                {subject.priority} priority
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-600">{subject.percentage}%</div>
                                    </div>
                                    <Progress value={subject.percentage} className="h-2 mb-2" />
                                    <p className="text-sm text-gray-500">
                                        {subject.completed_topics}/{subject.total_topics} topics
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-4">
                            <Button onClick={() => setActiveView('today')} className="flex-1 bg-indigo-600">
                                <Calendar className="mr-2 h-4 w-4" />
                                View Today's Schedule
                            </Button>
                        </CardContent>
                    </Card>
                </>
            )}

            {activeView === 'today' && todayPlan && (
                <>
                    {/* Today's Schedule */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-indigo-600" />
                                Today's Schedule - {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {todayPlan.slots.map((slot, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 rounded-lg border-2 ${slot.type === 'new_topic'
                                        ? 'border-indigo-200 bg-indigo-50 dark:bg-indigo-900/20'
                                        : 'border-gray-200 bg-gray-50 dark:bg-gray-800'
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm font-mono text-gray-600 w-28">
                                                <Clock className="inline h-4 w-4 mr-1" />
                                                {slot.time}
                                            </div>
                                            <div>
                                                {slot.topic ? (
                                                    <>
                                                        <h4 className="font-semibold text-lg">{slot.topic.name}</h4>
                                                        <p className="text-sm text-gray-600">{slot.topic.subject}</p>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {slot.topic.subtopics.map((sub, i) => (
                                                                <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                                                                    {sub}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        {slot.pyqs && slot.pyqs.length > 0 && (
                                                            <div className="mt-2 text-sm text-amber-600">
                                                                <FileQuestion className="inline h-4 w-4 mr-1" />
                                                                {slot.pyqs.length} PYQs available
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <>
                                                        <h4 className="font-medium capitalize">{slot.type.replace('_', ' ')}</h4>
                                                        <p className="text-sm text-gray-500">{slot.description}</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {slot.topic && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleTopicComplete(slot.topic!.id, true)}
                                                className="flex items-center gap-1"
                                            >
                                                <CheckCircle2 className="h-4 w-4" />
                                                Done
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Remaining Topics */}
                    <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
                        <CardContent className="p-4 flex items-center gap-4">
                            <AlertTriangle className="h-8 w-8 text-amber-600" />
                            <div>
                                <h4 className="font-semibold text-amber-700">Topics Remaining</h4>
                                <p className="text-amber-600">
                                    {todayPlan.remaining_topics} topics left to complete in syllabus
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
}
