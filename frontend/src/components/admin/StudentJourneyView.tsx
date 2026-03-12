"use client";

import React, { useState, useEffect } from 'react';
import { 
    User, BookOpen, Heart, Activity, 
    Calendar, CheckCircle, Award, Clock,
    Mail, Phone, Zap, Star, Shield,
    ArrowUpRight, BarChart2, Briefcase, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import api from "@/lib/api";

export default function StudentJourneyView({ studentId }: { studentId: number }) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJourney = async () => {
            try {
                setLoading(true);
                const res = await api.get(`/admin/student-journey/${studentId}/journey`);
                setData(res.data);
            } catch (err) {
                console.error("Fetch journey failed", err);
            } finally {
                setLoading(false);
            }
        };
        fetchJourney();
    }, [studentId]);

    if (loading) return <div className="p-20 text-center animate-pulse font-black text-slate-500 uppercase tracking-widest">Reconstructing Student History...</div>;
    if (!data) return <div className="p-20 text-center text-red-500 font-bold">Failed to load student journey.</div>;

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 p-8">
            {/* Top Header Profile Summary */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-3xl border-4 border-slate-900">
                        <User className="w-12 h-12 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight leading-none mb-2">{data.profile.name}</h1>
                        <div className="flex flex-wrap gap-3">
                            <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-3 py-1">ID: {data.profile.id}</Badge>
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">{data.profile.lead_source}</Badge>
                            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-3 py-1">Streak: {data.academic.current_streak} Days</Badge>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Total Lifetime Value</p>
                        <p className="text-3xl font-black text-emerald-400 font-mono">₹{data.profile.total_paid.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="academic" className="space-y-8">
                <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-2xl h-auto flex flex-wrap lg:inline-flex">
                    {[
                        { value: 'profile', label: 'Identity & Access', icon: Shield },
                        { value: 'academic', label: 'Learning Performance', icon: BookOpen },
                        { value: 'wellness', label: 'Mindset & Wellness', icon: Heart },
                        { value: 'timeline', label: 'Event History', icon: Calendar },
                    ].map(tab => (
                        <TabsTrigger 
                            key={tab.value}
                            value={tab.value} 
                            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-xl px-6 py-3 flex items-center gap-2 transition-all font-bold text-xs uppercase tracking-widest"
                        >
                            <tab.icon className="w-4 h-4" /> {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-slate-900 border-slate-800 shadow-2xl">
                            <CardHeader><CardTitle className="text-sm font-black uppercase text-indigo-400 tracking-widest">Contact & Metadata</CardTitle></CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex justify-between border-b border-slate-800 pb-4">
                                    <span className="text-slate-500 text-xs font-bold uppercase">Email</span>
                                    <span className="text-white font-mono">{data.profile.email}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-4">
                                    <span className="text-slate-500 text-xs font-bold uppercase">Phone</span>
                                    <span className="text-white font-mono">{data.profile.phone}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-4">
                                    <span className="text-slate-500 text-xs font-bold uppercase">Enrolled Since</span>
                                    <span className="text-white font-mono">{new Date(data.profile.enrolled_date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 text-xs font-bold uppercase">Lead Source</span>
                                    <Badge className="bg-indigo-500/20 text-indigo-400">{data.profile.lead_source}</Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-900 border-slate-800 shadow-2xl">
                            <CardHeader><CardTitle className="text-sm font-black uppercase text-purple-400 tracking-widest">Purchased Inventory</CardTitle></CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {data.profile.purchased_subjects.map((sub: string) => (
                                        <div key={sub} className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3">
                                            <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-tight text-white">{sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Academic Tab */}
                <TabsContent value="academic">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-indigo-600 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-white/60 text-[10px] uppercase font-black tracking-widest mb-1">Overall Progress</p>
                                <p className="text-5xl font-black text-white">{data.academic.overall_progress}%</p>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <Badge className="bg-indigo-500 text-white font-black">{data.academic.mcq_accuracy}% Acc</Badge>
                            </div>
                            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1">MCQs Attempted</p>
                            <p className="text-4xl font-black text-white">{data.academic.mcq_attempted.toLocaleString()}</p>
                        </div>
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
                                <Clock className="w-6 h-6" />
                            </div>
                            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1">Total Study Hours</p>
                            <p className="text-4xl font-black text-white">{data.academic.total_study_hours}h</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-slate-900 border-slate-800">
                            <CardHeader><CardTitle className="text-xs font-black uppercase text-indigo-400 tracking-widest">Topic Mastery Matrix</CardTitle></CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {Object.entries(data.academic.subject_progress).map(([name, progress]: any) => (
                                        <div key={name}>
                                            <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                                                <span className="text-white">{name}</span>
                                                <span className="text-slate-500">{progress}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${progress}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-900 border-slate-800">
                            <CardHeader><CardTitle className="text-xs font-black uppercase text-amber-400 tracking-widest">Critical Gaps (Weak Topics)</CardTitle></CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {data.academic.weak_topics.map((t: string) => (
                                        <Badge key={t} className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-2 text-xs font-black uppercase">{t}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Wellness Tab */}
                <TabsContent value="wellness">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Sessions", value: data.wellness.meditation_sessions_total, icon: Activity, color: "text-indigo-400" },
                            { label: "Minutes", value: data.wellness.meditation_minutes_total, icon: Clock, color: "text-purple-400" },
                            { label: "Wellness Score", value: data.wellness.wellness_score, icon: Award, color: "text-emerald-400" },
                            { label: "Grapho Subs", value: data.wellness.grapho_submissions, icon: Zap, color: "text-amber-400" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                                <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">{stat.label}</p>
                                <p className="text-2xl font-black text-white">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                    <Card className="bg-slate-900 border-slate-800 shadow-2xl">
                        <CardHeader><CardTitle className="text-sm font-black uppercase text-indigo-400 tracking-widest">Psychometric Analysis (Handwriting Traits)</CardTitle></CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {Object.entries(data.wellness.latest_grapho_traits).map(([trait, val]: any) => (
                                    <div key={trait} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black uppercase text-white tracking-widest">{trait}</span>
                                            <span className="text-xs font-black text-indigo-400">{(val * 100).toFixed(0)}%</span>
                                        </div>
                                        <div className="h-4 bg-slate-800 rounded-xl p-1">
                                            <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-glow" style={{ width: `${val * 100}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Timeline Tab */}
                <TabsContent value="timeline">
                    <Card className="bg-slate-900 border-slate-800 shadow-2xl overflow-hidden">
                        <CardHeader className="bg-slate-950 border-b border-slate-800 py-6">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-500">Comprehensive Activity Stream</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-800">
                                {data.timeline.map((event: any, idx: number) => (
                                    <div key={idx} className="p-6 hover:bg-white/5 transition-colors flex items-start gap-6 border-l-4 border-transparent hover:border-indigo-500">
                                        <div className="text-[10px] font-black font-mono text-slate-500 uppercase mt-1 w-32 shrink-0">
                                            {new Date(event.date).toLocaleString()}
                                        </div>
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
                                            <Activity className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-white uppercase tracking-tight mb-1">{event.event_type.replace(/_/g, ' ')}</p>
                                            <p className="text-xs text-slate-400">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
