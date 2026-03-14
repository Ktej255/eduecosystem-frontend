"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    Users, BookOpen, TrendingUp, 
    Zap, ExternalLink, Search, Filter, 
    MoreVertical, Loader2, Plus, 
    ChevronRight, Flame, Award, Mail
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";
import Link from "next/link";

interface Student {
    id: number;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    streak_days: number;
    coins: number;
    last_login: string | null;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
}

export default function StudentOversight() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await api.get("/admin/users?role=student&limit=100");
            setStudents(response.data.users || []);
        } catch (error) {
            console.error("Failed to fetch students:", error);
            toast.error("Could not load student data");
        } finally {
            setLoading(false);
        }
    };

    const filteredStudents = students.filter(s => 
        (s.full_name || s.email)?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <p className="text-sm text-muted-foreground">Aggregating student journey data...</p>
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
                        className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Search by student name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="w-4 h-4" /> Filter
                    </Button>
                    <Link href="/admin/user-management">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
                            <Plus className="w-4 h-4" /> Add Student
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                    <Card key={student.id} className="hover:shadow-md transition-shadow overflow-hidden group">
                        <CardHeader className="pb-3 border-b bg-muted/30">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold relative">
                                        {student.full_name?.charAt(0) || student.email.charAt(0).toUpperCase()}
                                        {student.is_active && (
                                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                                        )}
                                    </div>
                                    <div>
                                        <CardTitle className="text-sm font-bold">{student.full_name || "Unnamed Student"}</CardTitle>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{student.email}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">ID</p>
                                    <p className="text-xs font-mono text-blue-600">#{student.id}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-4">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-orange-50/50 border border-orange-100/50">
                                    <Flame className="w-3 h-3 text-orange-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">{student.streak_days || 0}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Streak</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-yellow-50/50 border border-yellow-100/50">
                                    <Award className="w-3 h-3 text-yellow-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">{student.coins || 0}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Coins</div>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-indigo-50/50 border border-indigo-100/50">
                                    <Zap className="w-3 h-3 text-indigo-600 mx-auto mb-1" />
                                    <div className="text-xs font-bold">
                                        {student.is_batch1_authorized ? 'B1' : 'FREE'}
                                    </div>
                                    <div className="text-[8px] text-muted-foreground uppercase">Access</div>
                                </div>
                            </div>

                            {/* Access & Activity */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-muted-foreground font-bold uppercase">Last Seen</span>
                                    <span className="font-medium text-slate-700">
                                        {student.last_login ? new Date(student.last_login).toLocaleDateString() : 'Inactive'}
                                    </span>
                                </div>
                                <div className="flex gap-1 flex-wrap">
                                    {student.is_batch1_authorized && (
                                        <Badge className="bg-indigo-600 text-white text-[8px] h-4">UPSC B1</Badge>
                                    )}
                                    {student.is_ras_authorized && (
                                        <Badge className="bg-orange-500 text-white text-[8px] h-4">RAS</Badge>
                                    )}
                                </div>
                            </div>

                            <Button asChild variant="outline" size="sm" className="w-full text-xs gap-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Link href={`/admin/students/${student.id}`}>
                                    View Student Journey <ChevronRight className="w-3 h-3" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredStudents.length === 0 && (
                <div className="text-center py-20 bg-muted/20 rounded-xl border-2 border-dashed">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                    <h3 className="text-lg font-medium text-muted-foreground">No students found</h3>
                    <p className="text-sm text-muted-foreground">Try adjusting your search terms.</p>
                </div>
            )}
        </div>
    );
}
