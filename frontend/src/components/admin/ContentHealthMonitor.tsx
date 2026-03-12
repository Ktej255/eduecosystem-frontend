"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    Activity, BookOpen, Heart, Shield, 
    TrendingDown, TrendingUp, AlertTriangle,
    CheckCircle2, RefreshCw, BarChart3
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import api from "@/lib/api";
import { toast } from "sonner";

export default function ContentHealthMonitor() {
    const [summary, setSummary] = useState<any>(null);
    const [atRisk, setAtRisk] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [sumRes, riskRes] = await Promise.all([
                api.get('/admin/content-health/summary'),
                api.get('/admin/content-health/at-risk-content')
            ]);
            setSummary(sumRes.data);
            setAtRisk(riskRes.data);
        } catch (e) {
            toast.error("Failed to fetch content health data");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-12 text-center animate-pulse text-slate-500 font-black uppercase tracking-widest text-xs">Scanning Content Integrity...</div>;

    return (
        <div className="space-y-8">
            {/* Top Level Health Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* UPSC Pillar */}
                <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-3xl overflow-hidden group hover:border-indigo-500/50 transition-all">
                    <CardHeader className="bg-slate-950 border-b border-slate-800 p-6">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> UPSC Mastery
                            </CardTitle>
                            <Badge className={summary?.upsc?.status === 'HEALTHY' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}>
                                {summary?.upsc?.status}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg MCQ Accuracy</p>
                                <p className="text-4xl font-black text-white mt-1">{summary?.upsc?.avg_score}%</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Units</p>
                                <p className="text-xl font-black text-slate-300">{summary?.upsc?.total_questions}</p>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-indigo-500" style={{ width: `${summary?.upsc?.avg_score}%` }}></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Meditation Pillar */}
                <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-3xl overflow-hidden group hover:border-emerald-500/50 transition-all">
                    <CardHeader className="bg-slate-950 border-b border-slate-800 p-6">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                                <Heart className="w-4 h-4" /> Mindscape
                            </CardTitle>
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">HEALTHY</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Completion Rate</p>
                                <p className="text-4xl font-black text-white mt-1">{(summary?.meditation?.engagement_rate * 100).toFixed(0)}%</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Processes</p>
                                <p className="text-xl font-black text-slate-300">{summary?.meditation?.total_processes}</p>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-emerald-500" style={{ width: `${summary?.meditation?.engagement_rate * 100}%` }}></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Grapho Pillar */}
                <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-3xl overflow-hidden group hover:border-amber-500/50 transition-all">
                    <CardHeader className="bg-slate-950 border-b border-slate-800 p-6">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Neuro-Flow
                            </CardTitle>
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">HEALTHY</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Submissions</p>
                                <p className="text-4xl font-black text-white mt-1">{summary?.graphotherapy?.submission_count}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Books</p>
                                <p className="text-xl font-black text-slate-300">{summary?.graphotherapy?.total_books}</p>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-amber-500" style={{ width: '75%' }}></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* At-Risk Content Table */}
            <Card className="bg-slate-900 border-slate-800 shadow-3xl rounded-[2.5rem] overflow-hidden border-t-4 border-t-red-500/50">
                <CardHeader className="bg-slate-950/50 border-b border-slate-800 p-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="text-lg font-black text-white flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                                Content Vulnerability Index
                            </CardTitle>
                            <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">Identifying modules with high friction or low retention</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={fetchData} className="rounded-xl border-slate-800 bg-slate-900 hover:bg-slate-800 h-10 px-4">
                            <RefreshCw className="w-4 h-4 mr-2" /> Re-Scan
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-950/30 text-[10px] text-slate-600 uppercase font-black tracking-widest border-b border-slate-800">
                                <tr>
                                    <th className="px-8 py-6">Content Identifier</th>
                                    <th className="px-8 py-6">Category</th>
                                    <th className="px-8 py-6">Critical Reason</th>
                                    <th className="px-8 py-6">User Drop-off</th>
                                    <th className="px-8 py-6 text-right">Strategic Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {atRisk.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="font-black text-sm text-white">{item.title}</div>
                                            <div className="text-[10px] text-slate-600 font-mono mt-0.5">{item.id}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <Badge variant="outline" className="border-slate-700 text-slate-400 font-black text-[9px] uppercase tracking-tighter">
                                                {item.type}
                                            </Badge>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
                                                <TrendingDown className="w-3 h-3" /> {item.reason}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-slate-300 font-black text-sm">{item.drop_off}</div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <Button size="sm" variant="ghost" className="text-indigo-400 hover:text-white hover:bg-indigo-600 h-9 rounded-xl font-bold text-xs">
                                                Optimize Module
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
