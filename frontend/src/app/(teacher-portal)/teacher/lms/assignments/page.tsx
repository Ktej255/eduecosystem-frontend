"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
    BookOpen, 
    Calendar, 
    CheckCircle2, 
    Clock, 
    Plus, 
    Search, 
    Users,
    ChevronRight,
    Loader2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import api from "@/lib/api";
import { toast } from "sonner";

export default function TeacherAssignmentsPage() {
    const router = useRouter();
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get("/teacher/lms/assignments");
            setData(response.data);
        } catch (error) {
            console.error("Failed to fetch assignments:", error);
            toast.error("Failed to load assignments");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-1">
                        <BookOpen className="h-4 w-4" />
                        LMS Management
                    </div>
                    <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
                        Course Assignments
                    </h1>
                    <p className="text-muted-foreground mt-1 max-w-md">
                        Create, manage, and evaluate student assignments with AI-powered grading.
                    </p>
                </div>
                
                <div className="flex items-center gap-3">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Assignment
                    </Button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search assignments..." 
                        className="pl-10 border-border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-100">All Batches</Badge>
                    <Badge variant="outline" className="px-3 py-1">Active</Badge>
                    <Badge variant="outline" className="px-3 py-1">Drafts</Badge>
                </div>
            </div>

            {/* Assignments Table */}
            <Card className="border-border shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[400px]">Assignment Title</TableHead>
                            <TableHead>Batch</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 opacity-20" />
                                    Loading assignments...
                                </TableCell>
                            </TableRow>
                        ) : filteredData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                                    No assignments found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredData.map((item) => (
                                <TableRow key={item.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <div className="font-bold text-foreground">{item.title}</div>
                                        <div className="text-xs text-muted-foreground line-clamp-1 max-w-xs">
                                            {item.rubric_json ? "Rubric defined" : "No rubric set"}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-3 w-3 text-muted-foreground" />
                                            <span className="text-sm">Batch {item.batch_id?.toString().slice(0,4)}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-3 w-3" />
                                            {item.due_date ? new Date(item.due_date).toLocaleDateString() : "Open"}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge 
                                            variant="outline" 
                                            className={
                                                item.status === 'published' 
                                                ? 'border-emerald-500/50 text-emerald-600 bg-emerald-50' 
                                                : 'border-amber-500/50 text-amber-600 bg-amber-50'
                                            }
                                        >
                                            {item.status?.toUpperCase() || "DRAFT"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button 
                                            variant="ghost" 
                                            className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                            onClick={() => router.push(`/teacher/lms/assignments/${item.id}/submissions`)}
                                        >
                                            View Submissions <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
