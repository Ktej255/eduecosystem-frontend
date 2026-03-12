"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    Send, History, Zap, MessageSquare, 
    User, Users, AlertTriangle, CheckCircle,
    Info, Clock
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import api from "@/lib/api";
import { toast } from "sonner";

export default function InterventionEngine() {
    const searchParams = useSearchParams();
    const [targetType, setTargetType] = useState<'STUDENT' | 'TEACHER' | 'BATCH'>('STUDENT');
    const [studentId, setStudentId] = useState<number | null>(null);
    const [teacherId, setTeacherId] = useState<number | null>(null);
    const [message, setMessage] = useState('');
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchHistory();
        
        const sId = searchParams.get('studentId');
        const tId = searchParams.get('teacherId');
        
        if (sId) {
            setStudentId(parseInt(sId));
            setTargetType('STUDENT');
        } else if (tId) {
            setTeacherId(parseInt(tId));
            setTargetType('TEACHER');
        }
    }, [searchParams]);

    const fetchHistory = async () => {
        try {
            const res = await api.get('/admin/interventions/history');
            setHistory(res.data);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSend = async () => {
        if (!message) return;
        setLoading(true);
        try {
            let endpoint = '/admin/interventions/message-student';
            let payload: any = { message, intervention_type: 'GUIDANCE', action_required: false };

            if (targetType === 'STUDENT') {
                payload.student_id = studentId || 1; 
            } else if (targetType === 'TEACHER') {
                endpoint = '/admin/interventions/message-teacher';
                payload = { teacher_id: teacherId || 1, message, priority: 'NORMAL' };
            } else {
                endpoint = '/admin/interventions/batch-nudge';
                payload = { target: 'ALL', message, nudge_type: 'MOTIVATION' };
            }

            await api.post(endpoint, payload);
            toast.success("Intervention sent successfully");
            setMessage('');
            fetchHistory();
        } catch (e) {
            toast.error("Failed to send intervention");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-12 gap-6 p-6 bg-slate-950 min-h-screen text-slate-200">
            {/* Left Panel: Quick Actions */}
            <div className="col-span-12 lg:col-span-3 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-2">Quick Interventions</h3>
                <Button variant="outline" className="w-full justify-start gap-3 bg-slate-900 border-slate-800 hover:bg-indigo-600 h-12 rounded-xl text-xs font-bold" onClick={() => setMessage("Great job on your streak! Keep it up!")}>
                    <Zap className="w-4 h-4 text-amber-400" /> Send Encouragement
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 bg-slate-900 border-slate-800 hover:bg-red-600 h-12 rounded-xl text-xs font-bold" onClick={() => setMessage("Urgent: Your MCQ accuracy has dropped below 40%. Let's review.")}>
                    <AlertTriangle className="w-4 h-4 text-red-400" /> Critical Alert
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 bg-slate-900 border-slate-800 hover:bg-emerald-600 h-12 rounded-xl text-xs font-bold" onClick={() => setMessage("New study materials have been uploaded for Geography.")}>
                    <Info className="w-4 h-4 text-emerald-400" /> Content Update
                </Button>
            </div>

            {/* Center Panel: Compose */}
            <Card className="col-span-12 lg:col-span-5 bg-slate-900 border-slate-800 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-slate-950 border-b border-slate-800 p-6">
                    <CardTitle className="text-xs font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Compose Intervention
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                    <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800">
                        <button 
                            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${targetType === 'STUDENT' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                            onClick={() => setTargetType('STUDENT')}
                        >
                            <User className="w-3 h-3 inline mr-2" /> Student
                        </button>
                        <button 
                            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${targetType === 'TEACHER' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                            onClick={() => setTargetType('TEACHER')}
                        >
                            <Users className="w-3 h-3 inline mr-2" /> Teacher
                        </button>
                        <button 
                            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${targetType === 'BATCH' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                            onClick={() => setTargetType('BATCH')}
                        >
                            <Users className="w-3 h-3 inline mr-2" /> Batch
                        </button>
                    </div>

                    <textarea 
                        className="w-full h-48 bg-slate-950 border border-slate-800 rounded-3xl p-6 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-300 placeholder:text-slate-700"
                        placeholder="Type your instruction or message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <Button 
                        className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-3 transition-all"
                        onClick={handleSend}
                        disabled={loading || !message}
                    >
                        <Send className="w-4 h-4" /> {loading ? 'Transmitting...' : 'Dispatch Intervention'}
                    </Button>
                </CardContent>
            </Card>

            {/* Right Panel: History */}
            <div className="col-span-12 lg:col-span-4 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-2 flex items-center gap-2">
                    <History className="w-3 h-3" /> Recent Activity
                </h3>
                <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2">
                    {history.map((item) => (
                        <div key={item.id} className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl space-y-3 hover:border-indigo-500/30 transition-all group">
                            <div className="flex justify-between items-center">
                                <Badge className="bg-indigo-500/10 text-indigo-400 text-[8px] font-black px-2 py-0.5">{item.type}</Badge>
                                <span className="text-[10px] text-slate-600 font-mono flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {new Date(item.timestamp).toLocaleTimeString()}
                                </span>
                            </div>
                            <p className="text-xs text-white font-bold">{item.target}</p>
                            <p className="text-[11px] text-slate-400 leading-relaxed italic">"{item.message}"</p>
                            <div className="flex items-center gap-2 pt-2 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                                <CheckCircle className="w-3 h-3" /> {item.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
