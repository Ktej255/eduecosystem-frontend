"use client";

import { useState, useEffect } from "react";
import { BookOpen, Video, Upload, Users, BarChart3, Clock, CheckCircle2, AlertCircle, Eye, TrendingUp, Target, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import api from "@/lib/api";

interface StudentData {
    id: number;
    email: string;
    full_name: string;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
    streak_days: number;
    coins: number;
}

interface ContentUpload {
    id: number;
    type: string;
    title: string;
    timestamp: string;
}

export default function TeacherDashboard() {
    const [students, setStudents] = useState<StudentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ totalStudents: 0, batch1: 0, ras: 0, activeToday: 0 });
    const [polityTask, setPolityTask] = useState<any>(null);

    const fetchDashboardData = async () => {
        try {
            // Fetch students
            const usersRes = await api.get('/admin/users?role=student&limit=100');
            const studentList = usersRes.data.users || [];
            setStudents(studentList);

            // Calculate stats
            const batch1Count = studentList.filter((s: StudentData) => s.is_batch1_authorized).length;
            const rasCount = studentList.filter((s: StudentData) => s.is_ras_authorized).length;
            setStats({
                totalStudents: studentList.length,
                batch1: batch1Count,
                ras: rasCount,
                activeToday: Math.ceil(studentList.length * 0.3) // Placeholder
            });

            // Fetch Polity Task
            try {
                const polityRes = await api.get('/polity/tasks');
                const tasks = polityRes.data;
                const nextTask = tasks.find((t: any) => t.status !== 'completed');
                setPolityTask(nextTask || { title: "All Chapters Completed!", status: 'completed' });
            } catch (err) {
                console.log("Polity tasks not found", err);
                // Fallback if endpoint fails
                setPolityTask(null);
            }
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    const teacherStats = [
        { label: "Total Students", value: stats.totalStudents.toString(), icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" },
        { label: "Batch 1 Students", value: stats.batch1.toString(), icon: BookOpen, color: "text-purple-600", bgColor: "bg-purple-100" },
        { label: "RAS Students", value: stats.ras.toString(), icon: Target, color: "text-orange-600", bgColor: "bg-orange-100" },
        { label: "Active Today", value: stats.activeToday.toString(), icon: TrendingUp, color: "text-green-600", bgColor: "bg-green-100" },
    ];

    const quickActions = [
        {
            title: "UPSC Batch 1 Content",
            description: "Upload videos & PDFs for Prelims cycles",
            href: "/teacher/batch1",
            icon: Upload,
            color: "from-indigo-600 to-purple-600"
        },
        {
            title: "View Student Analytics",
            description: "Check student progress and performance",
            href: "/teacher/analytics",
            icon: BarChart3,
            color: "from-emerald-600 to-teal-600"
        },
        {
            title: "Manage Students",
            description: "View enrolled students list",
            href: "/teacher/students",
            icon: Users,
            color: "from-blue-600 to-cyan-600"
        },
        {
            title: "Content Library",
            description: "View all uploaded content",
            href: "/teacher/content",
            icon: FileText,
            color: "from-orange-600 to-amber-600"
        },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                        👨‍🏫 Teacher Dashboard
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Manage your courses, content, and students
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link href="/teacher/batch1">
                        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Content
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teacherStats.map((stat) => (
                    <Card key={stat.label} className="hover:shadow-md transition">
                        <CardContent className="p-4 md:p-6">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 md:p-3 rounded-lg ${stat.bgColor}`}>
                                    <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">{stat.value}</p>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Today's Priority Task */}
            {polityTask && (
                <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-0 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Target className="h-32 w-32" />
                    </div>
                    <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Shield className="h-6 w-6 text-blue-400" />
                                    Operation Lakshmikant: Today's Focus
                                </h2>
                                <p className="text-blue-100 mt-1">
                                    {polityTask.status === 'completed'
                                        ? "Mission Accomplished! All 95 chapters processed."
                                        : `Chapter ${polityTask.chapter_number}: ${polityTask.chapter_title}`
                                    }
                                </p>
                            </div>
                            <div className="flex gap-3">
                                {polityTask.status !== 'completed' && (
                                    <div className="flex gap-2 text-sm bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                        <div className="opacity-70">Next Step:</div>
                                        <div className="font-bold text-yellow-300">
                                            {!polityTask.research_done ? "Research" :
                                                !polityTask.report_generated ? "Generate Report" :
                                                    !polityTask.report_saved ? "Save to DB" :
                                                        !polityTask.video_generated ? "Video" : "Podcast"}
                                        </div>
                                    </div>
                                )}
                                <Link href="/teacher/polity-tracker">
                                    <Button variant="secondary" className="shadow-lg hover:shadow-xl transition-all">
                                        {polityTask.status === 'completed' ? "View Report" : "Execute Task"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action) => (
                        <Link key={action.href} href={action.href}>
                            <Card className="cursor-pointer hover:shadow-lg transition-all h-full">
                                <CardContent className="p-5">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} text-white flex items-center justify-center mb-3`}>
                                        <action.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{action.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{action.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Students */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Recent Students
                    </CardTitle>
                    <Link href="/teacher/students">
                        <Button variant="outline" size="sm">View All</Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {students.slice(0, 5).map((student) => (
                            <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                        {student.full_name?.[0] || student.email[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">
                                            {student.full_name || student.email.split('@')[0]}
                                        </p>
                                        <p className="text-xs text-gray-500">{student.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {student.is_batch1_authorized && (
                                        <Badge className="bg-purple-100 text-purple-700 text-xs">Batch 1</Badge>
                                    )}
                                    {student.is_ras_authorized && (
                                        <Badge className="bg-orange-100 text-orange-700 text-xs">RAS</Badge>
                                    )}
                                    <span className="text-sm text-gray-500">🔥 {student.streak_days}</span>
                                </div>
                            </div>
                        ))}
                        {students.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                <p>No students enrolled yet</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-gray-600" />
                        Recent Activity
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <div>
                                <p className="font-medium text-gray-800 dark:text-gray-200">Content uploaded for Cycle 1</p>
                                <p className="text-sm text-gray-500">Ready for student access</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Video className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            <div>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{stats.totalStudents} students enrolled</p>
                                <p className="text-sm text-gray-500">{stats.batch1} in Batch 1, {stats.ras} in RAS</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                            <div>
                                <p className="font-medium text-gray-800 dark:text-gray-200">Reminder: Upload content for upcoming days</p>
                                <p className="text-sm text-gray-500">Keep students engaged with fresh content</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
