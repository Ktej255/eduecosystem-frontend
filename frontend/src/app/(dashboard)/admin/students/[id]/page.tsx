"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
    ArrowLeft, User, Mail, Calendar, Clock, Trophy, Target,
    BookOpen, BarChart3, TrendingUp, TrendingDown, Activity,
    CheckCircle2, XCircle, Flame, Award, Brain, ShieldAlert, 
    UserPlus, UserMinus, ShieldCheck, LockOpen, Lock
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

interface StudentData {
    id: number;
    email: string;
    full_name: string;
    role: string;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
    last_login: string | null;
    is_active: boolean;
    coins: number;
    streak_days: number;
    created_at?: string;
}

interface TestResult {
    id: number;
    cycle_id: number;
    day_number: number;
    score: number;
    total_questions: number;
    correct_count: number;
    incorrect_count: number;
    timestamp: string;
}

const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

export default function StudentDetailPage() {
    const params = useParams();
    const studentId = params.id as string;
    const [student, setStudent] = useState<StudentData | null>(null);
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        fetchStudentData();
    }, [studentId]);

    const fetchStudentData = async () => {
        try {
            setLoading(true);
            // Fetch student details
            const userRes = await api.get(`/admin/users/${studentId}`);
            setStudent(userRes.data.user);

            // Fetch real performance data
            const perfRes = await api.get(`/admin/students/${studentId}/performance`);
            setTestResults(perfRes.data.test_results || []);
        } catch (error) {
            console.error("Failed to fetch student data:", error);
            toast.error("Failed to sync student data");
        } finally {
            setLoading(false);
        }
    };

    const handleAdminAction = async (action: string, params: any = {}) => {
        if (!student) return;
        
        const confirmMsg = action === 'ban' ? "Are you sure you want to BAN this user?" :
                           action === 'unban' ? "Are you sure you want to UNBAN this user?" :
                           "Are you sure you want to perform this action?";
        
        if (!window.confirm(confirmMsg)) return;

        try {
            setActionLoading(action);
            let endpoint = `/admin/users/${studentId}/${action}`;
            
            if (action === 'access') {
                const queryParams = new URLSearchParams(params).toString();
                await api.put(`/admin/users/${studentId}/access?${queryParams}`);
            } else {
                await api.put(endpoint);
            }
            
            toast.success(`Action ${action} successful`);
            fetchStudentData();
        } catch (error) {
            console.error(`Admin action ${action} failed:`, error);
            toast.error(`Admin action failed`);
        } finally {
            setActionLoading(null);
        }
    };

    const calculateStats = () => {
        if (testResults.length === 0) return { avgScore: 0, bestScore: 0, totalTests: 0, correct: 0, incorrect: 0 };

        const scores = testResults.map(t => Math.round((t.correct_count / t.total_questions) * 100));
        const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        const bestScore = Math.max(...scores);
        const totalCorrect = testResults.reduce((sum, t) => sum + t.correct_count, 0);
        const totalIncorrect = testResults.reduce((sum, t) => sum + t.incorrect_count, 0);

        return { avgScore, bestScore, totalTests: testResults.length, correct: totalCorrect, incorrect: totalIncorrect };
    };

    const stats = calculateStats();

    const trendData = testResults.map(t => ({
        day: `Day ${t.day_number}`,
        score: Math.round((t.correct_count / t.total_questions) * 100)
    }));

    const pieData = [
        { name: 'Correct', value: stats.correct, color: '#10B981' },
        { name: 'Incorrect', value: stats.incorrect, color: '#EF4444' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!student) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Student not found</p>
                <Link href="/admin">
                    <Button className="mt-4">Back to Admin</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">Student Profile</h1>
                    <p className="text-gray-500 text-sm">Detailed performance and activity view</p>
                </div>
            </div>

            {/* Profile Card */}
            <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                            {student.full_name?.[0] || student.email[0].toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{student.full_name || "No Name"}</h2>
                            <p className="text-blue-100 flex items-center gap-2">
                                <Mail className="h-4 w-4" /> {student.email}
                            </p>
                        </div>
                    </div>
                </div>
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Flame className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">{student.streak_days}</p>
                            <p className="text-xs text-gray-500">Day Streak</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Award className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">{student.coins}</p>
                            <p className="text-xs text-gray-500">Coins Earned</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Target className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">{stats.totalTests}</p>
                            <p className="text-xs text-gray-500">Tests Taken</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">{stats.avgScore}%</p>
                            <p className="text-xs text-gray-500">Avg Score</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        {student.is_batch1_authorized && (
                            <Badge className="bg-purple-100 text-purple-700">Batch 1 Authorized</Badge>
                        )}
                        {student.is_ras_authorized && (
                            <Badge className="bg-orange-100 text-orange-700">RAS Authorized</Badge>
                        )}
                        {student.is_active ? (
                            <Badge className="bg-green-100 text-green-700">Active</Badge>
                        ) : (
                            <Badge className="bg-gray-100 text-gray-700">Inactive</Badge>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Admin Command Panel */}
            <Card className="border-red-100 bg-red-50/10">
                <CardHeader className="pb-3 border-b border-red-100 flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-bold flex items-center gap-2 text-red-700">
                        <ShieldAlert className="w-4 h-4" />
                        Administrative Command Panel
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px] text-red-600 border-red-200">RESTRICTED</Badge>
                </CardHeader>
                <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Status Section */}
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Account Status</h4>
                        <div className="flex flex-col gap-2">
                            {student.is_active ? (
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    className="w-full gap-2 text-xs"
                                    onClick={() => handleAdminAction('ban')}
                                    disabled={actionLoading !== null}
                                >
                                    <Lock className="w-3.5 h-3.5" /> Ban User Access
                                </Button>
                            ) : (
                                <Button 
                                    variant="default" 
                                    size="sm" 
                                    className="w-full gap-2 text-xs bg-emerald-600 hover:bg-emerald-700"
                                    onClick={() => handleAdminAction('unban')}
                                    disabled={actionLoading !== null}
                                >
                                    <LockOpen className="w-3.5 h-3.5" /> Unban Access
                                </Button>
                            )}
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full gap-2 text-xs"
                                onClick={() => handleAdminAction('promote')}
                                disabled={actionLoading !== null || student.role === 'admin'}
                            >
                                <ShieldCheck className="w-3.5 h-3.5" /> Promote to Admin
                            </Button>
                        </div>
                    </div>

                    {/* Authorization Section */}
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Batch Authorization</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <Button 
                                variant={student.is_batch1_authorized ? "default" : "outline"} 
                                size="sm" 
                                className={`text-[10px] h-8 ${student.is_batch1_authorized ? 'bg-indigo-600' : ''}`}
                                onClick={() => handleAdminAction('access', { batch1: !student.is_batch1_authorized })}
                                disabled={actionLoading !== null}
                            >
                                UPSC B1
                            </Button>
                            <Button 
                                variant={student.is_ras_authorized ? "default" : "outline"} 
                                size="sm" 
                                className={`text-[10px] h-8 ${student.is_ras_authorized ? 'bg-orange-500' : ''}`}
                                onClick={() => handleAdminAction('access', { ras: !student.is_ras_authorized })}
                                disabled={actionLoading !== null}
                            >
                                RAS B1
                            </Button>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic mt-2">
                            Toggling access will immediately update student workspace permissions.
                        </p>
                    </div>

                    {/* Engagement Section */}
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Engagement Override</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs text-muted-foreground font-medium">Reset Streak</span>
                                <Button variant="outline" size="sm" className="h-7 text-[10px]">EXECUTE</Button>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs text-muted-foreground font-medium">Add 500 Coins</span>
                                <Button variant="outline" size="sm" className="h-7 text-[10px]">ADD</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Score Trend */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                            Performance Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {trendData.length > 0 ? (
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={trendData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="day" />
                                        <YAxis domain={[0, 100]} />
                                        <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
                                        <Line type="monotone" dataKey="score" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6' }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="h-[250px] flex items-center justify-center text-gray-500">
                                No test data available
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Accuracy Pie */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-green-600" />
                            Accuracy Breakdown
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {pieData[0].value > 0 ? (
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="h-[250px] flex items-center justify-center text-gray-500">
                                No test data available
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Test History */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        Test History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {testResults.length > 0 ? (
                        <div className="space-y-3">
                            {testResults.map((test) => {
                                const scorePercent = Math.round((test.correct_count / test.total_questions) * 100);
                                return (
                                    <div key={test.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${scorePercent >= 60 ? 'bg-green-500' : scorePercent >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                                {scorePercent}%
                                            </div>
                                            <div>
                                                <p className="font-semibold">Cycle {test.cycle_id}, Day {test.day_number}</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(test.timestamp).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <p className="flex items-center gap-1 text-sm text-green-600">
                                                    <CheckCircle2 className="h-3 w-3" /> {test.correct_count}
                                                </p>
                                                <p className="flex items-center gap-1 text-sm text-red-600">
                                                    <XCircle className="h-3 w-3" /> {test.incorrect_count}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            <Brain className="h-12 w-12 mx-auto mb-3 opacity-50" />
                            <p>No tests taken yet</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
