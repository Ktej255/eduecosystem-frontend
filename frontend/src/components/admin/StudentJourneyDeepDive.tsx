"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    User, AlertCircle, Calendar, CheckCircle2, 
    ArrowRight, MessageSquare, ShieldAlert,
    Clock, GraduationCap, Heart, History, BookOpen
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

import AdminInterventionForm from "@/components/admin/AdminInterventionForm";

interface StudentJourneyProps {
    userId: number;
    onClose: () => void;
}

export default function StudentJourneyDeepDive({ userId, onClose }: StudentJourneyProps) {
    const [journey, setStudentJourney] = useState<any>(null);
    const [progress, setProgress] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showIntervention, setShowIntervention] = useState(false);

    useEffect(() => {
        fetchJourney();
    }, [userId]);

    const fetchJourney = async () => {
        try {
            setLoading(true);
            const [journeyRes, progressRes] = await Promise.all([
                api.get(`/admin/student-insights/journey/${userId}`),
                api.get(`/admin/student-progress/${userId}/progress`)
            ]);
            setStudentJourney(journeyRes.data);
            setProgress(progressRes.data);
        } catch (error) {
            console.error("Journey fetch failed:", error);
            toast.error("Failed to load student journey");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center animate-pulse">Reconstructing student timeline...</div>;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="max-w-3xl w-full bg-slate-900 border-slate-800 max-h-[90vh] overflow-hidden flex flex-col">
                <CardHeader className="border-b border-slate-800 bg-slate-950 flex flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xl text-white">
                            {journey?.student_info?.name?.charAt(0) || journey?.student_info?.email?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <CardTitle className="text-white">{journey?.student_info?.name}</CardTitle>
                            <p className="text-xs text-muted-foreground">{journey?.student_info?.email}</p>
                        </div>
                    </div>
                    <Button variant="ghost" onClick={onClose} className="text-white hover:bg-slate-800">Close</Button>
                </CardHeader>
                <CardContent className="overflow-y-auto p-6 space-y-8 bg-slate-900">
                    {showIntervention ? (
                        <div className="space-y-4">
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => setShowIntervention(false)}
                                className="text-indigo-400 hover:text-indigo-300"
                            >
                                ← Back to Journey
                            </Button>
                            <AdminInterventionForm 
                                userId={userId} 
                                userEmail={journey?.student_info?.email} 
                                onSuccess={() => setShowIntervention(false)}
                            />
                        </div>
                    ) : (
                        <>
                            {/* Journey Timeline */}
                            <div className="relative">
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800" />
                                
                                <div className="space-y-8">
                                    {journey?.timeline?.map((event: any, idx: number) => (
                                        <div key={idx} className="relative pl-10">
                                            <div className={`absolute left-2.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-900 ${
                                                event.event === 'LEAD_CREATED' ? 'bg-blue-500' :
                                                event.event === 'CONVERTED' ? 'bg-emerald-500' :
                                                event.event === 'FIRST_MCQ' ? 'bg-purple-500' : 'bg-slate-500'
                                            }`} />
                                            
                                            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-slate-500 transition-colors">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                        {event.event.replace('_', ' ')}
                                                    </span>
                                                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(event.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-200">{event.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Subject Proficiency */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-indigo-400" />
                                    Subject-wise Proficiency
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {progress?.map((subj: any, idx: number) => (
                                        <div key={idx} className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-slate-200">{subj.subject}</span>
                                                <Badge variant="outline" className="text-[8px] border-indigo-500/30 text-indigo-400">
                                                    {subj.study_hours}h Study
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                                                <span>Proficiency (Avg MCQ)</span>
                                                <span>{subj.proficiency}%</span>
                                            </div>
                                            <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <div className={`h-full ${subj.proficiency > 70 ? 'bg-emerald-500' : subj.proficiency > 40 ? 'bg-amber-500' : 'bg-red-500'}`} 
                                                     style={{ width: `${subj.proficiency}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                    {progress?.length === 0 && (
                                        <p className="col-span-full text-xs text-muted-foreground italic py-4 text-center border border-dashed border-slate-800 rounded-lg">
                                            No subject-specific activity recorded yet.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Intervention Section */}
                            <div className="pt-6 border-t border-slate-800">
                                <h4 className="text-xs font-bold text-white uppercase mb-4 flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                                    Admin Intervention Center
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setShowIntervention(true)}
                                        className="text-xs border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white gap-2"
                                    >
                                        <MessageSquare className="w-3 h-3" /> Send Direct Message
                                    </Button>
                                    <Button variant="outline" className="text-xs border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white gap-2">
                                        <History className="w-3 h-3" /> View Activity Logs
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
