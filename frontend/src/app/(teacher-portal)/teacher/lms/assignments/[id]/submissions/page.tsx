"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
    ArrowLeft, 
    Sparkles, 
    CheckCircle2, 
    Clock, 
    Eye, 
    BarChart3, 
    Users,
    ChevronRight,
    Loader2,
    AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import api from '@/lib/api';
import { toast } from 'sonner';

export default function AssignmentSubmissionsPage() {
    const params = useParams();
    const router = useRouter();
    const assignmentId = params?.id;
    
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [evaluatingId, setEvaluatingId] = useState<string | null>(null);

    const fetchSubmissions = async () => {
        try {
            const response = await api.get(`/teacher/lms/assignments/${assignmentId}/submissions`);
            setSubmissions(response.data);
        } catch (error) {
            console.error("Failed to fetch submissions:", error);
            toast.error("Failed to load submissions");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (assignmentId) fetchSubmissions();
    }, [assignmentId]);

    const handleAIEvaluation = async (submissionId: string) => {
        setEvaluatingId(submissionId);
        try {
            await api.post(`/teacher/lms/submissions/${submissionId}/evaluate`);
            toast.success("AI Evaluation completed successfully!");
            fetchSubmissions(); // Refresh data
        } catch (error: any) {
            console.error("AI Evaluation failed:", error);
            toast.error(error.response?.data?.detail || "AI Evaluation failed");
        } finally {
            setEvaluatingId(null);
        }
    };

    const handleBulkEvaluate = async () => {
        try {
            toast.loading("Bulk AI evaluation in progress...", { id: "bulk-eval" });
            await api.post(`/teacher/lms/assignments/${assignmentId}/bulk-evaluate`);
            toast.success("Bulk evaluation triggered successfully", { id: "bulk-eval" });
            fetchSubmissions();
        } catch (error) {
            toast.error("Failed to trigger bulk evaluation", { id: "bulk-eval" });
        }
    };

    return (
        <div className="p-8 space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mb-2 -ml-2 text-muted-foreground"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Assignments
                    </Button>
                    <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
                        Student Submissions
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Review and evaluate student responses for Assignment ID: {assignmentId?.toString().slice(0, 8)}...
                    </p>
                </div>
                
                <div className="flex items-center gap-3">
                    <Button 
                        onClick={handleBulkEvaluate}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Bulk AI Evaluation
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Submissions</p>
                                <h3 className="text-3xl font-extrabold text-foreground mt-1">{submissions.length}</h3>
                            </div>
                            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Evaluated</p>
                                <h3 className="text-3xl font-extrabold text-emerald-600 mt-1">
                                    {submissions.filter(s => s.status === 'evaluated').length}
                                </h3>
                            </div>
                            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Pending</p>
                                <h3 className="text-3xl font-extrabold text-amber-500 mt-1">
                                    {submissions.filter(s => s.status === 'pending').length}
                                </h3>
                            </div>
                            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center">
                                <Clock className="h-6 w-6 text-amber-500 dark:text-amber-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Submissions Table */}
            <Card className="border-border shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>AI Score</TableHead>
                            <TableHead>Submitted At</TableHead>
                            <TableHead className="text-right">Evaluation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 opacity-20" />
                                    Loading student submissions...
                                </TableCell>
                            </TableRow>
                        ) : submissions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                                    <div className="max-w-xs mx-auto">
                                        <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                        <p className="font-bold text-foreground mb-1">No Submissions Found</p>
                                        <p className="text-sm">Students haven't submitted their answers for this assignment yet.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            submissions.map((sub) => (
                                <TableRow key={sub.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <div className="font-bold text-foreground">{sub.student_name}</div>
                                        <div className="text-xs text-muted-foreground font-mono">{sub.student_id}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge 
                                            variant="outline" 
                                            className={
                                                sub.status === 'evaluated' 
                                                ? 'border-emerald-500/50 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20' 
                                                : 'border-amber-500/50 text-amber-600 bg-amber-50 dark:bg-amber-950/20'
                                            }
                                        >
                                            {sub.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {sub.evaluation_logs?.[0]?.ai_score ? (
                                            <div className="flex items-center gap-2">
                                                <div className="text-lg font-extrabold text-indigo-600">
                                                    {sub.evaluation_logs[0].ai_score}
                                                </div>
                                                <span className="text-[10px] text-muted-foreground">/ 100</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-muted-foreground">Not Graded</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">
                                        {new Date(sub.submitted_at).toLocaleString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm" className="h-9 px-4">
                                                <Eye className="mr-2 h-4 w-4" /> View Essay
                                            </Button>
                                            <Button 
                                                size="sm" 
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white h-9 px-4"
                                                onClick={() => handleAIEvaluation(sub.id)}
                                                disabled={evaluatingId === sub.id}
                                            >
                                                {evaluatingId === sub.id ? (
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                ) : (
                                                    <>
                                                        <Sparkles className="mr-2 h-4 w-4" /> 
                                                        AI Evaluate
                                                    </>
                                                )}
                                            </Button>
                                        </div>
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
