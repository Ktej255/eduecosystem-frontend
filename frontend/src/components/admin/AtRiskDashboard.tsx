"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    AlertCircle, ShieldAlert, User, MessageSquare, 
    UserCheck, Shield, RefreshCw, Loader2,
    CheckCircle2, X
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

interface AtRiskStudent {
    student_id: number;
    student_name: string;
    email: string;
    risk_level: 'HIGH' | 'MEDIUM' | 'LOW';
    risk_factors: string[];
    days_since_login: number;
    current_streak: number;
    mcq_accuracy_7d: number;
    last_meditation: string;
    recommended_action: string;
}

export default function AtRiskDashboard() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState<AtRiskStudent | null>(null);
    const [isIntervening, setIsIntervening] = useState(false);

    useEffect(() => {
        fetchAtRisk();
    }, []);

    const fetchAtRisk = async () => {
        try {
            setLoading(true);
            const response = await api.get("/admin/at-risk/students");
            setData(response.data);
        } catch (error) {
            console.error("At-Risk fetch failed:", error);
            toast.error("Failed to load at-risk students");
        } finally {
            setLoading(false);
        }
    };

    const handleIntervention = async (type: 'MESSAGE' | 'TEACHER' | 'STREAK') => {
        if (!selectedStudent) return;
        
        if (type === 'MESSAGE') {
            router.push(`/admin/interventions?studentId=${selectedStudent.student_id}`);
            setSelectedStudent(null);
            return;
        }

        if (type === 'TEACHER') {
            // In a real app, we'd need the teacher_id assigned to this student
            // For now, we'll just go to teacher mode in the engine
            router.push(`/admin/interventions?teacherId=1`); 
            setSelectedStudent(null);
            return;
        }
        
        try {
            setIsIntervening(true);
            if (type === 'STREAK') {
                // Grant 7-day streak protection
                await api.post(`/admin/at-risk/streak-protection`, { student_id: selectedStudent.student_id, days: 7 });
                toast.success(`7-day streak protection granted to ${selectedStudent.student_name}`);
            }
            setSelectedStudent(null);
        } catch (e) {
            toast.error("Intervention failed");
        } finally {
            setIsIntervening(false);
        }
    };

    if (loading) return <div className="p-12 text-center animate-pulse text-muted-foreground font-black tracking-widest uppercase text-sm">Analyzing risk signals...</div>;

    return (
        <div className="space-y-6 p-6 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
                        <ShieldAlert className="w-8 h-8 text-red-500" />
                        At-Risk Student Detection
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Platform-wide risk identification and intervention center.
                    </p>
                </div>
                <Button variant="outline" size="sm" onClick={fetchAtRisk} className="gap-2 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white rounded-xl h-10 px-4">
                    <RefreshCw className="w-4 h-4" /> Refresh Engine
                </Button>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-red-500/10 border-red-500/20 shadow-2xl rounded-3xl">
                    <CardContent className="pt-6">
                        <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Critical (High Risk)</p>
                        <p className="text-5xl font-black text-red-500 mt-2">{data?.high_risk_count || 0}</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-3xl">
                    <CardContent className="pt-6">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Flagged</p>
                        <p className="text-5xl font-black text-white mt-2">{data?.total_at_risk || 0}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Table */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden shadow-2xl rounded-3xl">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-950/50 text-[10px] text-slate-500 uppercase font-black tracking-widest border-b border-slate-800">
                                <tr>
                                    <th className="px-8 py-5">Student Profile</th>
                                    <th className="px-8 py-5">Risk Level</th>
                                    <th className="px-8 py-5">Risk Factors</th>
                                    <th className="px-8 py-5">Engagement Metrics</th>
                                    <th className="px-8 py-5 text-right">Action Plan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {data?.at_risk_students?.length > 0 ? data.at_risk_students.map((student: AtRiskStudent) => (
                                    <tr key={student.student_id} className="hover:bg-slate-800/30 transition-colors border-l-4 border-transparent hover:border-indigo-500">
                                        <td className="px-8 py-6">
                                            <div className="font-black text-sm text-white">{student.student_name}</div>
                                            <div className="text-xs text-slate-500 font-mono mt-1">{student.email}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <Badge className={`${
                                                student.risk_level === 'HIGH' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                                                student.risk_level === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                                                'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                                            } text-[10px] px-3 py-1 font-black uppercase tracking-widest`}>
                                                {student.risk_level}
                                            </Badge>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-2 max-w-[250px]">
                                                {student.risk_factors.map((f, i) => (
                                                    <span key={i} className="text-xs text-slate-300 font-medium bg-slate-800/50 px-2 py-1 rounded-md border border-slate-700/50">• {f}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="space-y-1">
                                                <div className="text-xs text-slate-400"><span className="text-white font-bold">{student.days_since_login}d</span> since login</div>
                                                <div className="text-xs text-slate-400"><span className="text-white font-bold">{student.current_streak}d</span> streak</div>
                                                <div className="text-xs text-slate-400"><span className="text-white font-bold">{student.mcq_accuracy_7d}%</span> MCQ Acc</div>
                                                <div className="text-xs text-slate-400">Med: <span className="text-white font-bold">{student.last_meditation}</span></div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">{student.recommended_action}</span>
                                                <Button 
                                                    size="sm" 
                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-9 px-4 font-bold text-xs"
                                                    onClick={() => setSelectedStudent(student)}
                                                >
                                                    Intervene Now
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-12 text-center text-slate-500 font-medium">
                                            No at-risk students detected.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Intervention Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
                    <Card className="w-full max-w-md bg-slate-900 border-slate-800 shadow-3xl rounded-[2rem] overflow-hidden">
                        <CardHeader className="bg-slate-950 border-b border-slate-800 flex flex-row items-center justify-between py-6 px-8">
                            <CardTitle className="text-lg font-black text-white">Select Intervention</CardTitle>
                            <Button variant="ghost" size="icon" onClick={() => setSelectedStudent(null)} className="h-8 w-8 text-slate-400 hover:text-white rounded-full">
                                <X className="w-4 h-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="mb-6">
                                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Target Student</p>
                                <p className="font-bold text-white text-lg">{selectedStudent.student_name}</p>
                            </div>

                            <Button 
                                variant="outline" 
                                className="w-full justify-start gap-4 h-14 bg-slate-800/50 border-slate-700 text-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-2xl transition-all"
                                onClick={() => handleIntervention('MESSAGE')}
                                disabled={isIntervening}
                            >
                                <MessageSquare className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="font-bold">Direct Message</div>
                                    <div className="text-[10px] opacity-70">Send automated motivation nudge</div>
                                </div>
                            </Button>

                            <Button 
                                variant="outline" 
                                className="w-full justify-start gap-4 h-14 bg-slate-800/50 border-slate-700 text-white hover:bg-amber-600 hover:text-white hover:border-amber-600 rounded-2xl transition-all"
                                onClick={() => handleIntervention('TEACHER')}
                                disabled={isIntervening}
                            >
                                <UserCheck className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="font-bold">Notify Teacher</div>
                                    <div className="text-[10px] opacity-70">Alert assigned mentor for 1-on-1</div>
                                </div>
                            </Button>

                            <Button 
                                variant="outline" 
                                className="w-full justify-start gap-4 h-14 bg-slate-800/50 border-slate-700 text-white hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-2xl transition-all"
                                onClick={() => handleIntervention('STREAK')}
                                disabled={isIntervening}
                            >
                                <Shield className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="font-bold">Streak Protection</div>
                                    <div className="text-[10px] opacity-70">Grant 7-day grace period</div>
                                </div>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
