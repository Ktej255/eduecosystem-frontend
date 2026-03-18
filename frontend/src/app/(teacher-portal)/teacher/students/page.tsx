"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
    ArrowLeft, Users, Search, Eye, TrendingUp, Flame,
    Award, BookOpen, Target, Mail
} from "lucide-react";

interface StudentData {
    id: number;
    email: string;
    full_name: string;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
    streak_days: number;
    coins: number;
    last_login: string | null;
}

export default function TeacherStudentsPage() {
    const [students, setStudents] = useState<StudentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState<"all" | "batch1" | "ras">("all");

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1";

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/admin/users?role=student&limit=200`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setStudents(data.users || []);
            }
        } catch (error) {
            console.error("Failed to fetch students:", error);
        } finally {
            setLoading(false);
        }
    };

    // Filter students
    let filteredStudents = students.filter(s =>
        s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.full_name && s.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filterType === "batch1") {
        filteredStudents = filteredStudents.filter(s => s.is_batch1_authorized);
    } else if (filterType === "ras") {
        filteredStudents = filteredStudents.filter(s => s.is_ras_authorized);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/teacher/dashboard">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-foreground">
                        👥 Student Management
                    </h1>
                    <p className="text-muted-foreground text-sm">View and manage enrolled students</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                    <CardContent className="p-4">
                        <Users className="h-6 w-6 mb-2 opacity-80" />
                        <p className="text-2xl font-bold">{students.length}</p>
                        <p className="text-xs text-blue-100">Total Students</p>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                    <CardContent className="p-4">
                        <BookOpen className="h-6 w-6 mb-2 opacity-80" />
                        <p className="text-2xl font-bold">{students.filter(s => s.is_batch1_authorized).length}</p>
                        <p className="text-xs text-purple-100">Batch 1</p>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                    <CardContent className="p-4">
                        <Target className="h-6 w-6 mb-2 opacity-80" />
                        <p className="text-2xl font-bold">{students.filter(s => s.is_ras_authorized).length}</p>
                        <p className="text-xs text-orange-100">RAS</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search students..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={filterType === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterType("all")}
                    >
                        All
                    </Button>
                    <Button
                        variant={filterType === "batch1" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterType("batch1")}
                    >
                        Batch 1
                    </Button>
                    <Button
                        variant={filterType === "ras" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterType("ras")}
                    >
                        RAS
                    </Button>
                </div>
            </div>

            {/* Students List */}
            <Card>
                <CardHeader>
                    <CardTitle>Students ({filteredStudents.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {filteredStudents.map((student) => (
                            <div key={student.id} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:shadow-sm transition">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                        {student.full_name?.[0] || student.email[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {student.full_name || student.email.split('@')[0]}
                                        </p>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Mail className="h-3 w-3" /> {student.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        {student.is_batch1_authorized && (
                                            <Badge className="bg-purple-100 text-purple-700 text-xs">Batch 1</Badge>
                                        )}
                                        {student.is_ras_authorized && (
                                            <Badge className="bg-orange-100 text-orange-700 text-xs">RAS</Badge>
                                        )}
                                    </div>
                                    <div className="text-right text-sm hidden md:block">
                                        <p className="flex items-center gap-1 text-orange-500">
                                            <Flame className="h-4 w-4" /> {student.streak_days} days
                                        </p>
                                        <p className="flex items-center gap-1 text-yellow-500">
                                            <Award className="h-4 w-4" /> {student.coins} coins
                                        </p>
                                    </div>
                                    <Link href={`/teacher/students/${student.id}`}>
                                        <Button variant="outline" size="sm">
                                            <Eye className="h-4 w-4 mr-1" /> View
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {filteredStudents.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                <p>No students found</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

