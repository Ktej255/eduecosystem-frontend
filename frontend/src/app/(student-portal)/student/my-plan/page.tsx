"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
    BookOpen,
    Clock,
    Target,
    CheckCircle2,
    Circle,
    ArrowRight,
    ArrowLeft,
    Calendar,
    TrendingUp,
    Brain,
    FileQuestion,
    Loader2,
    Lock,
    AlertTriangle,
    Mic,
    Play,
    Pause,
    BarChart3,
    ListChecks,
    LayoutDashboard,
    Timer,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";

// PRODUCTION: AWS App Runner backend - DO NOT CHANGE
const API_BASE = "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

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
}

interface TopicData {
    id: string;
    name: string;
    subject: string;
    subtopics: string[];
    priority: string;
    completed?: boolean;
}

interface TimeSlot {
    time: string;
    type: string;
    duration: number;
    topic?: TopicData;
    pyqs?: any[];
    description?: string;
    subject?: string;
}

interface DayPlan {
    email: string;
    date: string;
    day_number: number;
    total_days: number;
    slots: TimeSlot[];
    total_topics_today: number;
    status: string;
    message?: string;
}

interface CalendarDay {
    day_number: number;
    date: string;
    topics_count: number;
    completed_count: number;
    status: string;
}

interface CalendarOverview {
    plan_start: string;
    plan_end: string;
    total_days: number;
    days: CalendarDay[];
}

interface SubjectTopics {
    subject_key: string;
    subject_name: string;
    priority: string;
    total_topics: number;
    completed_count: number;
    topics: Array<TopicData & { completed: boolean; completed_at?: string; marked_by?: string }>;
}

interface ReportData {
    overall_retention: number;
    total_submissions: number;
    daily_retention: { day: number; score: number }[];
    subject_stats: Record<string, { name: string; total: number; completed: number; percentage: number }>;
}

export default function MyPlanPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [dashboard, setDashboard] = useState<DashboardData | null>(null);
    const [calendarData, setCalendarData] = useState<CalendarOverview | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [dayPlan, setDayPlan] = useState<DayPlan | null>(null);
    const [reports, setReports] = useState<ReportData | null>(null);
    const [activeTab, setActiveTab] = useState('calendar');
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [subjectTopics, setSubjectTopics] = useState<SubjectTopics | null>(null);

    // Timer state
    const [timerActive, setTimerActive] = useState(false);
    const [timerTopicId, setTimerTopicId] = useState<string | null>(null);
    const [timerSeconds, setTimerSeconds] = useState(3600); // 1 hour default
    const [showRecallPrompt, setShowRecallPrompt] = useState(false);

    // Test state
    const [testActive, setTestActive] = useState(false);
    const [testQuestions, setTestQuestions] = useState<any[]>([]);
    const [currentTestIndex, setCurrentTestIndex] = useState(0);
    const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
    const [testScore, setTestScore] = useState<number | null>(null);
    const [testSubmitted, setTestSubmitted] = useState(false);

    const userEmail = "chitrakumawat33@gmail.com";

    // Fetch daily test
    const fetchDailyTest = async (date: string) => {
        try {
            const res = await fetch(`${API_BASE}/planner/daily-test/${userEmail}/${date}`);
            if (res.ok) {
                const data = await res.json();
                setTestQuestions(data.questions);
            }
        } catch (e) {
            console.error("Failed to fetch daily test", e);
        }
    };

    // Fetch initial data
    useEffect(() => {
        async function fetchData() {
            try {
                const accessRes = await fetch(`${API_BASE}/planner/check-access/${userEmail}`);
                const accessData = await accessRes.json();

                if (!accessData.has_access) {
                    setHasAccess(false);
                    setLoading(false);
                    return;
                }

                setHasAccess(true);

                const [dashRes, calRes, reportRes] = await Promise.all([
                    fetch(`${API_BASE}/planner/dashboard/${userEmail}`),
                    fetch(`${API_BASE}/planner/calendar-overview/${userEmail}`),
                    fetch(`${API_BASE}/planner/reports/${userEmail}`)
                ]);

                if (dashRes.ok) setDashboard(await dashRes.json());
                if (calRes.ok) setCalendarData(await calRes.json());
                if (reportRes.ok) setReports(await reportRes.json());

                // Fetch today's test
                const today = new Date().toISOString().split('T')[0];
                fetchDailyTest(today);
            } catch (error) {
                console.error('Error fetching planner data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    // Fetch day plan when date is selected
    useEffect(() => {
        if (!selectedDate) return;

        async function fetchDayPlan() {
            try {
                const res = await fetch(`${API_BASE}/planner/plan-by-date/${userEmail}/${selectedDate}`);
                if (res.ok) setDayPlan(await res.json());

                // Also fetch test for this selected date
                fetchDailyTest(selectedDate!);
            } catch (e) {
                console.error("Failed to fetch day plan", e);
            }
        }
        fetchDayPlan();
    }, [selectedDate]);

    // Fetch subject topics
    useEffect(() => {
        if (!selectedSubject) return;

        async function fetchTopics() {
            try {
                const res = await fetch(`${API_BASE}/planner/syllabus-topics/${selectedSubject}?email=${userEmail}`);
                if (res.ok) setSubjectTopics(await res.json());
            } catch (e) {
                console.error("Failed to fetch topics", e);
            }
        }
        fetchTopics();
    }, [selectedSubject]);

    // Timer countdown
    useEffect(() => {
        if (!timerActive || timerSeconds <= 0) return;

        const interval = setInterval(() => {
            setTimerSeconds(prev => {
                if (prev <= 1) {
                    setTimerActive(false);
                    setShowRecallPrompt(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timerActive]);

    const startTimer = (topicId: string, durationMinutes: number) => {
        setTimerTopicId(topicId);
        setTimerSeconds(durationMinutes * 60);
        setTimerActive(true);
        setShowRecallPrompt(false);
    };

    const toggleTimer = () => {
        setTimerActive(prev => !prev);
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleTopicComplete = async (topicId: string, completed: boolean) => {
        try {
            await fetch(`${API_BASE}/planner/update-progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userEmail, topic_id: topicId, completed })
            });

            // Refresh
            const [dashRes, calRes] = await Promise.all([
                fetch(`${API_BASE}/planner/dashboard/${userEmail}`),
                fetch(`${API_BASE}/planner/calendar-overview/${userEmail}`)
            ]);
            if (dashRes.ok) setDashboard(await dashRes.json());
            if (calRes.ok) setCalendarData(await calRes.json());

            if (selectedSubject) {
                const topicRes = await fetch(`${API_BASE}/planner/syllabus-topics/${selectedSubject}?email=${userEmail}`);
                if (topicRes.ok) setSubjectTopics(await topicRes.json());
            }
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    const handleRecordRecall = async () => {
        if (!timerTopicId) return;

        try {
            await fetch(`${API_BASE}/planner/record-and-submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail,
                    topic_id: timerTopicId,
                    duration: 60,
                    explanation_text: "Recorded recall submission"
                })
            });

            setShowRecallPrompt(false);
            setTimerTopicId(null);

            alert("Recall recorded successfully! Your response is being analyzed by AI.");
        } catch (e) {
            console.error("Failed to record recall", e);
        }
    };

    const submitTest = () => {
        let score = 0;
        testQuestions.forEach((q, idx) => {
            if (testAnswers[idx] === q.correct_answer) score++;
        });
        setTestScore(score);
        setTestSubmitted(true);
    };

    const resetTest = () => {
        setTestActive(false);
        setTestSubmitted(false);
        setTestScore(null);
        setTestAnswers({});
        setCurrentTestIndex(0);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto mb-4" />
                    <span className="text-gray-600 font-medium">Loading your 40-day RAS Revision Plan...</span>
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

    const dayStatusColors: Record<string, string> = {
        completed: "bg-green-500 text-white",
        partial: "bg-amber-400 text-white",
        today: "bg-indigo-600 text-white ring-4 ring-indigo-200",
        future: "bg-gray-100 text-gray-600 hover:bg-gray-200"
    };

    // Full-screen timer overlay
    if (timerActive || showRecallPrompt) {
        return (
            <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center z-50">
                <div className="text-center text-white">
                    {!showRecallPrompt ? (
                        <>
                            <div className="text-8xl font-mono font-bold mb-8">{formatTime(timerSeconds)}</div>
                            <p className="text-xl text-indigo-200 mb-8">Focus Mode Active</p>
                            <div className="flex gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white hover:bg-white/20"
                                    onClick={toggleTimer}
                                >
                                    {timerActive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                                    {timerActive ? "Pause" : "Resume"}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="destructive"
                                    onClick={() => { setTimerActive(false); setTimerTopicId(null); }}
                                >
                                    End Session
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <CheckCircle2 className="h-20 w-20 mx-auto mb-6 text-green-400" />
                            <h2 className="text-4xl font-bold mb-4">Session Complete!</h2>
                            <p className="text-xl text-indigo-200 mb-8">Time to record your recall</p>
                            <div className="flex gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-green-500 hover:bg-green-600"
                                    onClick={handleRecordRecall}
                                >
                                    <Mic className="mr-2" /> Record Recall
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white hover:bg-white/20"
                                    onClick={() => { setShowRecallPrompt(false); setTimerTopicId(null); }}
                                >
                                    Skip for Now
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    // Full-screen test overlay
    if (testActive && testQuestions.length > 0) {
        const currentQ = testQuestions[currentTestIndex];
        return (
            <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
                <div className="max-w-3xl mx-auto p-4 md:p-12 min-h-screen flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-2xl font-bold">Daily Revision Test</h2>
                            <p className="text-gray-500">Day {dayPlan?.day_number} • {testQuestions.length} Questions</p>
                        </div>
                        {!testSubmitted && (
                            <div className="text-indigo-600 font-mono font-bold text-xl">
                                Q {currentTestIndex + 1}/{testQuestions.length}
                            </div>
                        )}
                        <Button variant="ghost" onClick={resetTest}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Exit
                        </Button>
                    </div>

                    {!testSubmitted ? (
                        <div className="flex-1 space-y-8">
                            <Card className="border-2 border-indigo-100 shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">
                                        <Target className="h-3 w-3" /> {currentQ.topic_name}
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl leading-relaxed">
                                        {currentQ.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {currentQ.options.map((option: string, idx: number) => (
                                        <button
                                            key={idx}
                                            className={`p-4 text-left rounded-xl border-2 transition-all flex items-center gap-4 ${testAnswers[currentTestIndex] === idx
                                                ? "border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md"
                                                : "border-gray-100 dark:border-gray-800 hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                                                }`}
                                            onClick={() => setTestAnswers({ ...testAnswers, [currentTestIndex]: idx })}
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${testAnswers[currentTestIndex] === idx ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className="font-medium">{option}</span>
                                        </button>
                                    ))}
                                </CardContent>
                            </Card>

                            <div className="flex justify-between items-center">
                                <Button
                                    variant="outline"
                                    disabled={currentTestIndex === 0}
                                    onClick={() => setCurrentTestIndex(currentTestIndex - 1)}
                                >
                                    Previous
                                </Button>
                                {currentTestIndex < testQuestions.length - 1 ? (
                                    <Button
                                        className="bg-indigo-600 hover:bg-indigo-700 px-8"
                                        onClick={() => setCurrentTestIndex(currentTestIndex + 1)}
                                    >
                                        Next Question
                                    </Button>
                                ) : (
                                    <Button
                                        className="bg-green-600 hover:bg-green-700 px-12"
                                        onClick={submitTest}
                                    >
                                        Submit Test
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center">
                                    <div className="text-6xl font-black text-indigo-600">
                                        {Math.round((testScore! / testQuestions.length) * 100)}%
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    {testScore}/{testQuestions.length} Correct
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black mb-2">
                                    {testScore! / testQuestions.length >= 0.7 ? "Excellent Progress!" : "Keep Practicing!"}
                                </h3>
                                <p className="text-gray-500 max-w-md">
                                    You have completed today's validation test. Review your results and continue with the next session.
                                </p>
                            </div>

                            <div className="test-review space-y-4 w-full text-left max-h-96 overflow-y-auto pr-4">
                                {testQuestions.map((q, i) => (
                                    <div key={i} className={`p-4 rounded-xl border ${testAnswers[i] === q.correct_answer ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                        <div className="font-bold text-sm mb-1">{i + 1}. {q.question}</div>
                                        <div className="text-xs space-y-1">
                                            <p className={testAnswers[i] === q.correct_answer ? 'text-green-700' : 'text-red-700'}>
                                                Your answer: {q.options[testAnswers[i]] || 'Not answered'}
                                            </p>
                                            <p className="text-gray-600 font-medium">Correct: {q.options[q.correct_answer]}</p>
                                            <p className="mt-2 text-indigo-600 italic border-l-2 border-indigo-200 pl-2">{q.explanation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="w-full max-w-sm" onClick={resetTest}>
                                Return to Study Plan
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div>
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        RAS Revision Mastery
                    </h1>
                    <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Jan 1 - Feb 9, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 1:30 PM - 8:30 PM</span>
                        <span className="flex items-center gap-1"><Target className="h-4 w-4" /> 40 Days</span>
                    </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-xl border border-indigo-100 dark:border-indigo-800 flex items-center gap-3">
                    <div className="text-right">
                        <div className="text-xs uppercase tracking-wider text-indigo-600 font-bold">Overall Progress</div>
                        <div className="text-2xl font-black text-indigo-900 dark:text-indigo-100">{dashboard?.overall_progress.percentage || 0}%</div>
                    </div>
                    <Progress value={dashboard?.overall_progress.percentage || 0} className="w-24 h-3 rounded-full" />
                </div>
            </div>

            <Tabs defaultValue="calendar" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 h-14 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                    <TabsTrigger value="calendar" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <Calendar className="h-4 w-4" /> 40-Day Calendar
                    </TabsTrigger>
                    <TabsTrigger value="inventory" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <BookOpen className="h-4 w-4" /> Topics Inventory
                    </TabsTrigger>
                    <TabsTrigger value="overview" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <LayoutDashboard className="h-4 w-4" /> Plan Overview
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="rounded-lg gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                        <BarChart3 className="h-4 w-4" /> Reports
                    </TabsTrigger>
                </TabsList>

                {/* CALENDAR TAB */}
                <TabsContent value="calendar" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Calendar Grid */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>40-Day Revision Calendar</span>
                                        <div className="flex items-center gap-2 text-sm font-normal">
                                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500"></div> Completed</span>
                                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-amber-400"></div> Partial</span>
                                            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-indigo-600"></div> Today</span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-7 gap-2">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                            <div key={d} className="text-center text-xs font-bold text-gray-500 py-2">{d}</div>
                                        ))}

                                        {calendarData?.days.map((day) => {
                                            const dayDate = new Date(day.date);
                                            const dayOfWeek = dayDate.getDay();

                                            // Add padding for first day
                                            const padding = day.day_number === 1 ? Array(dayOfWeek).fill(null) : [];

                                            return (
                                                <>
                                                    {padding.map((_, i) => (
                                                        <div key={`pad-${i}`} className="p-2"></div>
                                                    ))}
                                                    <button
                                                        key={day.date}
                                                        className={`p-3 rounded-lg text-center transition-all ${dayStatusColors[day.status]} ${selectedDate === day.date ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                                                        onClick={() => setSelectedDate(day.date)}
                                                    >
                                                        <div className="text-lg font-bold">D{day.day_number}</div>
                                                        <div className="text-[10px] opacity-80">{day.completed_count}/{day.topics_count}</div>
                                                    </button>
                                                </>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Day Details */}
                        <div className="space-y-4">
                            {selectedDate && dayPlan ? (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">Day {dayPlan.day_number} Plan</CardTitle>
                                        <CardDescription>{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {testQuestions.length > 0 && (
                                            <Button
                                                className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-none gap-2 py-6 text-lg font-bold"
                                                onClick={() => setTestActive(true)}
                                            >
                                                <Target className="h-5 w-5" /> Take Daily Revision Test
                                            </Button>
                                        )}

                                        <div className="space-y-3">
                                            {dayPlan.slots.map((slot, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`p-3 rounded-lg border ${slot.topic ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200' : 'bg-gray-50 dark:bg-gray-800 border-gray-200'}`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs font-mono text-gray-500">{slot.time}</span>
                                                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-gray-200 text-gray-600">
                                                            {slot.type.replace('_', ' ')}
                                                        </span>
                                                    </div>

                                                    {slot.topic ? (
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <Checkbox
                                                                    checked={slot.topic.completed}
                                                                    onCheckedChange={(checked: any) => handleTopicComplete(slot.topic!.id, !!checked)}
                                                                />
                                                                <span className={`font-semibold ${slot.topic.completed ? 'line-through text-gray-400' : ''}`}>
                                                                    {slot.topic.name}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-gray-500 mt-1 ml-6">{slot.topic.subject}</p>

                                                            {!slot.topic.completed && (
                                                                <Button
                                                                    size="sm"
                                                                    className="mt-2 w-full gap-2"
                                                                    onClick={() => startTimer(slot.topic!.id, slot.duration)}
                                                                >
                                                                    <Play className="h-3 w-3" /> Start {slot.duration}min Session
                                                                </Button>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <p className="text-sm font-medium">{slot.description || slot.subject}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                <Card className="border-dashed">
                                    <CardContent className="p-8 text-center">
                                        <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500">Click a day to view its plan</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </TabsContent>

                {/* TOPICS INVENTORY TAB */}
                <TabsContent value="inventory" className="mt-6">
                    {!selectedSubject ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {dashboard && Object.entries(dashboard.subject_progress).map(([key, subject]) => (
                                <Card
                                    key={key}
                                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-indigo-500"
                                    onClick={() => setSelectedSubject(key)}
                                >
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-lg">{subject.name}</h3>
                                            <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${priorityColors[subject.priority]}`}>
                                                {subject.priority}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span className="text-gray-500">Completion</span>
                                            <span className="font-bold">{subject.completed_topics}/{subject.total_topics}</span>
                                        </div>
                                        <Progress value={subject.percentage} className="h-2" />
                                        <Button variant="ghost" size="sm" className="w-full mt-3 text-indigo-600">
                                            View All Topics <ArrowRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <Button
                                variant="ghost"
                                className="mb-4"
                                onClick={() => { setSelectedSubject(null); setSubjectTopics(null); }}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Subjects
                            </Button>

                            {subjectTopics && (
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <CardTitle>{subjectTopics.subject_name}</CardTitle>
                                                <CardDescription>{subjectTopics.completed_count}/{subjectTopics.total_topics} topics completed</CardDescription>
                                            </div>
                                            <Progress value={(subjectTopics.completed_count / subjectTopics.total_topics) * 100} className="w-32 h-3" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {subjectTopics.topics.map((topic, idx) => (
                                                <div
                                                    key={topic.id}
                                                    className={`flex items-center gap-3 p-3 rounded-lg border ${topic.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}
                                                >
                                                    <Checkbox
                                                        checked={topic.completed}
                                                        onCheckedChange={(checked: any) => handleTopicComplete(topic.id, !!checked)}
                                                    />
                                                    <div className="flex-1">
                                                        <div className={`font-medium ${topic.completed ? 'line-through text-gray-400' : ''}`}>
                                                            {idx + 1}. {topic.name}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {topic.subtopics.join(' • ')}
                                                        </div>
                                                    </div>
                                                    {topic.completed && (
                                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    )}
                </TabsContent>

                {/* OVERVIEW TAB */}
                <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Plan Configuration</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-bold">40 Days</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Daily Hours</span>
                                    <span className="font-bold">7 Hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Primary Subject</span>
                                    <span className="font-bold">5 Hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Medieval History</span>
                                    <span className="font-bold">1 Hour</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Mathematics</span>
                                    <span className="font-bold">1 Hour</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle className="text-lg">Weekly Roadmap</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {[
                                        { week: 1, focus: "Rajasthan Geography + Physics", days: "Day 1-10" },
                                        { week: 2, focus: "Indian Economy + Reasoning", days: "Day 11-20" },
                                        { week: 3, focus: "Indian Polity + Biology", days: "Day 21-30" },
                                        { week: 4, focus: "Revision + Mock Tests", days: "Day 31-40" }
                                    ].map((w, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                                                W{w.week}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold">{w.focus}</div>
                                                <div className="text-sm text-gray-500">{w.days}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* REPORTS TAB */}
                <TabsContent value="reports" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recall Accuracy</CardTitle>
                                <CardDescription>Performance over last 10 sessions</CardDescription>
                            </CardHeader>
                            <CardContent className="h-64 flex items-end justify-between gap-2 pt-10">
                                {reports?.daily_retention.map((d, i) => (
                                    <div key={i} className="group relative flex-1 flex flex-col items-center">
                                        <div
                                            className="w-full bg-indigo-500 rounded-t-md transition-all group-hover:bg-indigo-600"
                                            style={{ height: `${d.score}%` }}
                                        />
                                        <span className="text-[10px] text-gray-500 mt-2">D{d.day}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Subject-wise Progress</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {reports && Object.entries(reports.subject_stats).slice(0, 5).map(([key, stat]) => (
                                    <div key={key}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{stat.name}</span>
                                            <span className="font-bold">{stat.percentage}%</span>
                                        </div>
                                        <Progress value={stat.percentage} className="h-2" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
