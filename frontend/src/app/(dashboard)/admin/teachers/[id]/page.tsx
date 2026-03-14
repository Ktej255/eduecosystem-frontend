"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    ArrowLeft, User, Mail, Users, BookOpen, BarChart3,
    Upload, Video, FileText, Clock, CheckCircle2, Eye,
    ShieldAlert, Lock, LockOpen, ShieldCheck, TrendingUp,
    Zap, Target, Award
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

interface TeacherData {
    id: number;
    email: string;
    full_name: string;
    role: string;
    last_login: string | null;
    is_active: boolean;
}

interface StudentSummary {
    id: number;
    email: string;
    full_name: string;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
    streak_days: number;
}

export default function TeacherDetailPage() {
    const params = useParams();
    const teacherId = params.id as string;
    const [teacher, setTeacher] = useState<TeacherData | null>(null);
    const [performance, setPerformance] = useState<any>(null);
    const [students, setStudents] = useState<StudentSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    useEffect(() => {
        fetchTeacherData();
    }, [teacherId]);

    const fetchTeacherData = async () => {
        try {
            setLoading(true);
            // Fetch teacher details and performance in parallel
            const [userRes, perfRes, studentsRes] = await Promise.all([
                api.get(`/admin/users/${teacherId}`),
                api.get(`/admin/teacher-performance/${teacherId}/performance`),
                api.get("/admin/users?role=student&limit=100")
            ]);
            
            setTeacher(userRes.data.user);
            setPerformance(perfRes.data);
            setStudents(studentsRes.data.users || []);
        } catch (error) {
            console.error("Failed to fetch teacher data:", error);
            toast.error("Failed to fetch teacher profile");
        } finally {
            setLoading(false);
        }
    };

    const handleAdminAction = async (action: string) => {
        if (!teacher) return;
        
        const confirmMsg = action === 'ban' ? "Are you sure you want to BAN this user?" :
                           action === 'unban' ? "Are you sure you want to UNBAN this user?" :
                           "Are you sure you want to perform this action?";
        
        if (!window.confirm(confirmMsg)) return;

        try {
            setActionLoading(action);
            await api.put(`/admin/users/${teacherId}/${action}`);
            toast.success(`Action ${action} successful`);
            fetchTeacherData();
        } catch (error) {
            console.error(`Admin action ${action} failed:`, error);
            toast.error(`Admin action failed`);
        } finally {
            setActionLoading(null);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    if (!teacher) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Teacher not found</p>
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
                <Link href="/admin/teachers">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">Teacher Command Center</h1>
                    <p className="text-gray-500 text-sm">Strategic oversight for {teacher.full_name}</p>
                </div>
            </div>

            {/* Profile Card */}
            <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                            {teacher.full_name?.[0] || teacher.email[0].toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{teacher.full_name || "No Name"}</h2>
                            <p className="text-emerald-100 flex items-center gap-2">
                                <Mail className="h-4 w-4" /> {teacher.email}
                            </p>
                        </div>
                    </div>
                </div>
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Users className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">{students.length}</p>
                            <p className="text-xs text-gray-500">Students</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Video className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">-</p>
                            <p className="text-xs text-gray-500">Videos Uploaded</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <FileText className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold">-</p>
                            <p className="text-xs text-gray-500">PDFs Uploaded</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Clock className="h-6 w-6 text-green-500 mx-auto mb-1" />
                            <p className="text-sm font-bold">
                                {teacher.last_login ? new Date(teacher.last_login).toLocaleDateString() : 'Never'}
                            </p>
                            <p className="text-xs text-gray-500">Last Login</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Badge className="bg-emerald-100 text-emerald-700 capitalize">{teacher.role}</Badge>
                        {teacher.is_active ? (
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
                <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Status Section */}
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Account Status</h4>
                        <div className="flex flex-col gap-2">
                            {teacher.is_active ? (
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    className="w-full gap-2 text-xs"
                                    onClick={() => handleAdminAction('ban')}
                                    disabled={actionLoading !== null}
                                >
                                    <Lock className="w-3.5 h-3.5" /> Ban Teacher Access
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
                                disabled={actionLoading !== null || teacher.role === 'admin'}
                            >
                                <ShieldCheck className="w-3.5 h-3.5" /> Promote to Super-Admin
                            </Button>
                        </div>
                    </div>

                    {/* Operational Details */}
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Operational Override</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs text-muted-foreground font-medium">Disable Performance Tracking</span>
                                <Button variant="outline" size="sm" className="h-7 text-[10px]">DISABLE</Button>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs text-muted-foreground font-medium">Re-initialize Content Stats</span>
                                <Button variant="outline" size="sm" className="h-7 text-[10px]">SYNC</Button>
                            </div>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic mt-2">
                            Teacher permissions affect the entire cohort's content availability.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Students Under This Teacher */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Students ({students.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {students.length > 0 ? (
                        <div className="space-y-2">
                            {students.slice(0, 10).map((student) => (
                                <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                            {student.full_name?.[0] || student.email[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-medium">{student.full_name || student.email.split('@')[0]}</p>
                                            <p className="text-xs text-gray-500">{student.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {student.is_batch1_authorized && (
                                            <Badge variant="outline" className="text-xs">B1</Badge>
                                        )}
                                        {student.is_ras_authorized && (
                                            <Badge variant="outline" className="text-xs">RAS</Badge>
                                        )}
                                        <span className="text-sm text-gray-500">🔥 {student.streak_days}</span>
                                        <Link href={`/admin/students/${student.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {students.length > 10 && (
                                <p className="text-center text-sm text-gray-500 py-2">
                                    Showing 10 of {students.length} students
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                            <p>No students enrolled yet</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
