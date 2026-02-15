"use client";

import { useState, useEffect } from "react";
import { BookOpen, Video, Upload, Users, BarChart3, Clock, CheckCircle2, AlertCircle, Eye, TrendingUp, Target, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import api from "@/lib/api";

import MorningBriefing from "@/components/teacher-portal/dashboard/MorningBriefing";
import PriorityInbox from "@/components/teacher-portal/dashboard/PriorityInbox";
import LakshmikantKanban from "@/components/teacher-portal/dashboard/LakshmikantKanban";
import SmartUploadWizard from "@/components/teacher-portal/dashboard/SmartUploadWizard";
import ContentHealthScore from "@/components/teacher-portal/library/ContentHealthScore";
import LiveSessionDashboard from "@/components/teacher-portal/dashboard/live/LiveSessionDashboard";
import BatchDNAMonitor from "@/components/teacher-portal/dashboard/BatchDNAMonitor";
import PYQCommandCenter from "@/components/teacher-portal/dashboard/PYQCommandCenter";

interface StudentData {
    id: number;
    email: string;
    full_name: string;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
    streak_days: number;
    coins: number;
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
            const activeCount = studentList.filter((s: StudentData) => s.streak_days > 0).length;
            setStats({
                totalStudents: studentList.length,
                batch1: batch1Count,
                ras: rasCount,
                activeToday: activeCount
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

    useEffect(() => {
        fetchDashboardData();
    }, []);

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
            {/* Phase 17: Live Classroom Command Center */}
            <LiveSessionDashboard />

            {/* Phase 1: Dynamic Morning Briefing */}
            <MorningBriefing />

            {/* Smart Upload Wizard */}
            <SmartUploadWizard />


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

            {/* Phase 3: Operation Lakshmikant Live Kanban */}
            <LakshmikantKanban />

            {/* Strategic Oversight Section */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Strategic Oversight
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    <BatchDNAMonitor />
                    <PYQCommandCenter />
                </div>
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action) => (
                        <Link key={action.href} href={action.href}>
                            <Card className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 h-full border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden group relative">
                                <div className={`absolute top-0 right-0 p-16 rounded-full blur-3xl opacity-10 bg-gradient-to-r ${action.color} -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`}></div>
                                <CardContent className="p-6 relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${action.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all`}>
                                        <action.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1 group-hover:text-indigo-600 transition-colors">{action.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{action.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Phase 2 Layout: Priority Inbox & Secondary Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Priority Inbox - Takes 2/3 width */}
                <PriorityInbox />

                {/* Side Column - Takes 1/3 width */}
                <div className="space-y-6">
                    {/* Recent Students */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between py-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Users className="h-4 w-4 text-blue-600" />
                                Recent Students
                            </CardTitle>
                            <Link href="/teacher/students">
                                <Button variant="ghost" size="sm" className="h-7 text-xs">View All</Button>
                            </Link>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                                {students.slice(0, 5).map((student) => (
                                    <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                                                {student.full_name?.[0] || student.email[0].toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate max-w-[120px]">
                                                    {student.full_name || student.email.split('@')[0]}
                                                </p>
                                                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                                    {student.is_batch1_authorized && <span className="text-purple-600">Batch 1</span>}
                                                    {student.is_batch1_authorized && student.is_ras_authorized && <span>•</span>}
                                                    {student.is_ras_authorized && <span className="text-orange-600">RAS</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs font-medium text-gray-500">🔥 {student.streak_days}</div>
                                    </div>
                                ))}
                                {students.length === 0 && (
                                    <div className="text-center py-6 text-gray-400 text-sm">
                                        No students enrolled yet
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats / Recent Activity Mini */}
                    <Card>
                        <CardHeader className="py-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Clock className="h-4 w-4 text-gray-600" />
                                Latest Actions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                                <div className="p-3 text-sm flex gap-3 hover:bg-gray-50">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Cycle 1 Content Live</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="p-3 text-sm flex gap-3 hover:bg-gray-50">
                                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Upload Reminder</p>
                                        <p className="text-xs text-gray-500">Tomorrow's content due</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Content Health Score Widget */}
                    <ContentHealthScore />
                </div>
            </div>
        </div >
    );
}
