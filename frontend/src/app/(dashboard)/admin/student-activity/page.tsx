"use client";


import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Users,
    Search,
    RefreshCw,
    Timer,
    BookOpen,
    CheckCircle2,
    TrendingUp,
    Clock,
    Award,
    Calendar,
    ChevronRight,
    Activity,
    Zap
} from "lucide-react";
import api from "@/lib/api";

interface StudentActivity {
    id: number;
    email: string;
    full_name: string;
    role: string;
    coins: number;
    streak_days: number;
    is_active: boolean;
    is_batch1_authorized: boolean;
    is_batch2_authorized: boolean;
    last_login: string | null;
    // Derived activity metrics (to be added)
    pomodoro_sessions?: number;
    mcqs_completed?: number;
    flashcards_reviewed?: number;
    total_study_hours?: number;
}

export default function StudentActivityPage() {
    const router = useRouter();
    const [students, setStudents] = useState<StudentActivity[]>([]);
    // ... rest of the state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] = useState<StudentActivity | null>(null);
    const [timeline, setTimeline] = useState<any[]>([]);
    const [timelineLoading, setTimelineLoading] = useState(false);

    useEffect(() => {
        if (selectedStudent) {
            fetchTimeline(selectedStudent?.id);
        }
    }, [selectedStudent]);

    const fetchTimeline = async (studentId: number) => {
        setTimelineLoading(true);
        try {
            const response = await api.get(`/admin/student-activity/${studentId}/timeline`, {
                params: { days: 1 }
            });
            setTimeline(response.data);
        } catch (err) {
            console.error("Failed to fetch timeline", err);
            toast.error("Failed to load activity timeline");
        } finally {
            setTimelineLoading(false);
        }
    };

    const fetchStudents = async () => {
        setLoading(true);
        setError(null);
        try {
            // Use the new dedicated activity summary endpoint
            const response = await api.get("/admin/student-activity/summary", {
                params: { limit: 100 }
            });

            // Map backend response to component state
            const activityData = (response.data || []).map((user: any) => ({
                id: user?.id,
                email: user?.email,
                full_name: user.name,
                role: 'student', // default
                coins: 0, // Not in summary yet
                streak_days: user.streak,
                is_active: user.lastActive !== "Never",
                is_batch1_authorized: true, // Placeholder until batch auth is in summary
                is_batch2_authorized: false,
                last_login: user.lastActive === "Never" ? null : user.lastActive,
                pomodoro_sessions: user.pomodoros,
                mcqs_completed: user.mcqs,
                flashcards_reviewed: 0, // Not in summary yet
                total_study_hours: user.studyHours
            }));

            setStudents(activityData);
        } catch (err: any) {
            console.error("Failed to fetch students:", err);
            setError(err.response?.data?.detail || err.message || "Failed to load students");
        } finally {
            setLoading(false);
        }
    };

    const filteredStudents = students.filter(s =>
        s.email?.toLowerCase().includes(search.toLowerCase()) ||
        s.full_name?.toLowerCase().includes(search.toLowerCase())
    );

    const totalStats = {
        totalStudents: students.length,
        activeToday: students.filter(s => s.is_active).length,
        totalPomodoros: students.reduce((acc, s) => acc + (s.pomodoro_sessions || 0), 0),
        totalMCQs: students.reduce((acc, s) => acc + (s.mcqs_completed || 0), 0),
        totalStudyHours: students.reduce((acc, s) => acc + (s.total_study_hours || 0), 0)
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-96 space-y-4">
                <p className="text-red-500">{error}</p>
                <Button onClick={fetchStudents}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <Activity className="w-8 h-8 text-green-600" />
                            Student Activity Dashboard
                        </h1>
                        <p className="text-muted-foreground dark:text-muted-foreground mt-2">
                            Real-time tracking of student Pomodoro usage, MCQs, and study time
                        </p>
                    </div>
                    <Button onClick={fetchStudents} variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-5 gap-4 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Users className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="text-2xl font-bold text-foreground">{totalStats.totalStudents}</p>
                                <p className="text-sm text-muted-foreground">Total Students</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-2xl font-bold text-foreground">{totalStats.activeToday}</p>
                                <p className="text-sm text-muted-foreground">Active Users</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Timer className="w-8 h-8 text-purple-600" />
                            <div>
                                <p className="text-2xl font-bold text-foreground">{totalStats.totalPomodoros}</p>
                                <p className="text-sm text-muted-foreground">Pomodoro Sessions</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-amber-600" />
                            <div>
                                <p className="text-2xl font-bold text-foreground">{totalStats.totalMCQs}</p>
                                <p className="text-sm text-muted-foreground">MCQs Completed</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-rose-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Clock className="w-8 h-8 text-rose-600" />
                            <div>
                                <p className="text-2xl font-bold text-foreground">{totalStats.totalStudyHours}h</p>
                                <p className="text-sm text-muted-foreground">Total Study Time</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search */}
            <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <p className="text-sm text-muted-foreground">
                    Showing {filteredStudents.length} of {students.length} students
                </p>
            </div>

            {/* Student Grid and Detail View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: User List */}
                <div className={`space-y-4 lg:col-span-2 ${selectedStudent ? 'hidden md:block' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredStudents.map((student) => (
                            <Card
                                key={student?.id}
                                className={`cursor-pointer transition-all hover:shadow-lg ${selectedStudent?.id === student?.id ? 'ring-2 ring-indigo-500' : ''
                                    }`}
                                onClick={() => setSelectedStudent(selectedStudent?.id === student?.id ? null : student)}
                            >
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold text-foreground">
                                                {student?.full_name || "No Name"}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{student?.email}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {student?.is_active ? (
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                            )}
                                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </div>

                                    {/* Activity Metrics */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                            <div className="flex items-center gap-1.5">
                                                <Timer className="w-4 h-4 text-purple-600" />
                                                <span className="text-sm font-medium text-foreground">
                                                    {student?.pomodoro_sessions || 0}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-0.5">Pomodoros</p>
                                        </div>
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <div className="flex items-center gap-1.5">
                                                <BookOpen className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm font-medium text-foreground">
                                                    {student?.mcqs_completed || 0}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-0.5">MCQs</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right: Detailed Timeline View */}
                {selectedStudent && (
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8 border-indigo-500/30 bg-indigo-50/5 dark:bg-indigo-950/5">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">Activity Timeline</CardTitle>
                                    <div className="flex gap-2">
                                        <Button 
                                            size="sm" 
                                            variant="outline" 
                                            className="h-8 text-[10px] font-black uppercase tracking-widest bg-indigo-600 text-white hover:bg-indigo-700 border-none flex items-center gap-1 px-3"
                                            onClick={() => router.push(`/admin/interventions?studentId=${selectedStudent?.id}`)}
                                        >
                                            <Zap className="w-3 h-3" /> Intervene
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => setSelectedStudent(null)}>Close</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">{selectedStudent?.full_name}</p>
                            </CardHeader>
                            <CardContent>
                                {timelineLoading ? (
                                    <div className="flex items-center justify-center p-12">
                                        <RefreshCw className="w-6 h-6 animate-spin text-indigo-500" />
                                    </div>
                                ) : timeline.length > 0 ? (
                                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                        {timeline.map((event, idx) => (
                                            <div key={idx} className="relative pl-4 pb-4 border-l border-indigo-200 dark:border-indigo-800 last:border-0">
                                                <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${event.type === 'STUDY_SESSION' ? 'bg-purple-500' : 'bg-blue-400'
                                                    }`} />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] theme-text-secondary uppercase font-bold tracking-tighter">
                                                        {new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                    <span className="text-sm font-medium text-foreground">
                                                        {event.action || event.details}
                                                    </span>
                                                    {event.type === 'STUDY_SESSION' && (
                                                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                                                            {Math.round(event.duration / 60)} min session
                                                        </span>
                                                    )}
                                                    <span className="text-[10px] text-muted-foreground">
                                                        {event.category}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-xl">
                                        <Clock className="w-8 h-8 mx-auto mb-2 opacity-20" />
                                        <p className="text-sm">No activity in last 24h</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>

            {filteredStudents.length === 0 && !selectedStudent && (
                <div className="text-center py-12 text-muted-foreground">
                    No students found. {search && "Try a different search term."}
                </div>
            )}
        </div>
    );
}
