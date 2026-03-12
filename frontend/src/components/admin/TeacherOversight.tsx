"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    GraduationCap, BookOpen, Users, TrendingUp, 
    Mail, MessageSquare, Zap, ExternalLink,
    Search, Filter, MoreVertical, Loader2
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";
import Link from "next/link";

interface Teacher {
    id: number;
    email: string;
    full_name: string;
    student_count: number;
    course_count: number;
    active_marketing_count: number;
    last_login: string | null;
    composite_score?: number;
    grade?: string;
}

export default function TeacherOversight() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const response = await api.get("/admin/teacher-performance/leaderboard");
            setTeachers(response.data);
        } catch (error) {
            console.error("Failed to fetch teachers:", error);
            toast.error("Could not load teacher performance data");
        } finally {
            setLoading(false);
        }
    };

    const filteredTeachers = teachers.filter(t => 
        t.teacher_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="text-sm text-muted-foreground">Aggregating teacher performance data...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Search by teacher name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="w-4 h-4" /> Filter
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                        <Plus className="w-4 h-4" /> Add Teacher
                    </Button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTeachers.map((teacher) => (
                    <Card key={teacher.id} className="hover:shadow-md transition-shadow overflow-hidden group">
                        <CardHeader className="pb-3 border-b bg-muted/30">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold relative">
                                        {teacher.full_name?.charAt(0) || teacher.email.charAt(0).toUpperCase()}
                                        {teacher.grade && (
                                            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-indigo-600 text-[10px] rounded-full border-2 border-white">
                                                {teacher.grade}
                                            </Badge>
                                        )}
                                    </div>
                                    <div>
                                        <CardTitle className="text-sm font-bold">{teacher.full_name || "Unnamed Teacher"}</CardTitle>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{teacher.email}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[8px] text-muted-foreground uppercase font-bold">Perf. Score</p>
                                    <p className="text-xs font-black text-indigo-600">{teacher.composite_score || 0}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-4">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-indigo-50/50 border border-indigo-100/50">
                                    <Users className="w-3 h-3 text-indigo-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">{teacher.student_count || 0}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Students</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-emerald-50/50 border border-emerald-100/50">
                                    <BookOpen className="w-3 h-3 text-emerald-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">{teacher.course_count || 0}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Courses</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-amber-50/50 border border-amber-100/50">
                                    <Zap className="w-3 h-3 text-amber-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">{teacher.active_marketing_count || 0}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Active Mktg</div>
                                </div>
                            </div>

                            {/* Recent Activity Mini-Timeline */}
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Teacher Engagement</h4>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <Mail className="w-3 h-3" /> Campaigns Sent
                                    </span>
                                    <span className="font-medium">12</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <MessageSquare className="w-3 h-3" /> Broadcaster Active
                                    </span>
                                    <Badge variant="outline" className="text-[8px] h-4 bg-green-50 text-green-700 border-green-200">YES</Badge>
                                </div>
                            </div>

                            <Button asChild variant="outline" size="sm" className="w-full text-xs gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <Link href={`/admin/teachers/${teacher.id}`}>
                                    View Full Management Portal <ChevronRight className="w-3 h-3" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredTeachers.length === 0 && (
                <div className="text-center py-20 bg-muted/20 rounded-xl border-2 border-dashed">
                    <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                    <h3 className="text-lg font-medium text-muted-foreground">No teachers found</h3>
                    <p className="text-sm text-muted-foreground">Try adjusting your search terms.</p>
                </div>
            )}
        </div>
    );
}

import { Plus, ChevronRight } from "lucide-react";
