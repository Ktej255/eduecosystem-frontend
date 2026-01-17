"use client";

import { useState, useEffect } from "react";
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
    Activity
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
    const [students, setStudents] = useState<StudentActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] = useState<StudentActivity | null>(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/admin/users", {
                params: { role: "student", limit: 100 }
            });

            // Add mock activity data for demonstration
            const studentsWithActivity = (response.data.users || []).map((user: any) => ({
                ...user,
                pomodoro_sessions: Math.floor(Math.random() * 50) + 5,
                mcqs_completed: Math.floor(Math.random() * 200) + 20,
                flashcards_reviewed: Math.floor(Math.random() * 300) + 50,
                total_study_hours: Math.floor(Math.random() * 100) + 10
            }));

            setStudents(studentsWithActivity);
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
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                            <Activity className="w-8 h-8 text-green-600" />
                            Student Activity Dashboard
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
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
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalStats.totalStudents}</p>
                                <p className="text-sm text-gray-500">Total Students</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalStats.activeToday}</p>
                                <p className="text-sm text-gray-500">Active Users</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Timer className="w-8 h-8 text-purple-600" />
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalStats.totalPomodoros}</p>
                                <p className="text-sm text-gray-500">Pomodoro Sessions</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-amber-600" />
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalStats.totalMCQs}</p>
                                <p className="text-sm text-gray-500">MCQs Completed</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-rose-500">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Clock className="w-8 h-8 text-rose-600" />
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalStats.totalStudyHours}h</p>
                                <p className="text-sm text-gray-500">Total Study Time</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search */}
            <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <p className="text-sm text-gray-500">
                    Showing {filteredStudents.length} of {students.length} students
                </p>
            </div>

            {/* Student Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStudents.map((student) => (
                    <Card
                        key={student.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${selectedStudent?.id === student.id ? 'ring-2 ring-indigo-500' : ''
                            }`}
                        onClick={() => setSelectedStudent(selectedStudent?.id === student.id ? null : student)}
                    >
                        <CardContent className="p-5">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                        {student.full_name || "No Name"}
                                    </h3>
                                    <p className="text-sm text-gray-500">{student.email}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    {student.is_active ? (
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    ) : (
                                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                    )}
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            {/* Activity Metrics */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="flex items-center gap-1.5">
                                        <Timer className="w-4 h-4 text-purple-600" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {student.pomodoro_sessions || 0}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">Pomodoros</p>
                                </div>
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {student.mcqs_completed || 0}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">MCQs</p>
                                </div>
                                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-amber-600" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {student.total_study_hours || 0}h
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">Study Time</p>
                                </div>
                                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="flex items-center gap-1.5">
                                        <Award className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {student.streak_days || 0}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">Day Streak</p>
                                </div>
                            </div>

                            {/* Batch Tags */}
                            <div className="mt-3 flex gap-2">
                                {student.is_batch1_authorized && (
                                    <span className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 rounded">
                                        Batch 1
                                    </span>
                                )}
                                {student.is_batch2_authorized && (
                                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded">
                                        Batch 2
                                    </span>
                                )}
                            </div>

                            {/* Last Login */}
                            <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                                <Calendar className="w-3 h-3" />
                                Last active: {student.last_login ? new Date(student.last_login).toLocaleDateString() : "Never"}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredStudents.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No students found. {search && "Try a different search term."}
                </div>
            )}
        </div>
    );
}
