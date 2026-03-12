"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Users, TrendingUp, BookOpen, Clock, 
    ArrowUpRight, ArrowDownRight, Layers,
    Activity, BarChart3
} from "lucide-react";
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, Legend, Cell
} from 'recharts';
import api from "@/lib/api";

const COLORS = ['#6366f1', '#10b981', '#f59e0b'];

export default function CohortComparison() {
    const [data, setData] = useState<any[]>([]);
    const [healthData, setHealthData] = useState<any>(null);
    const [engagementData, setEngagementData] = useState<any[]>([]);
    const [proficiencyData, setProficiencyData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const [compRes, healthRes, engageRes, profRes] = await Promise.all([
                api.get("/admin/cohorts/compare"),
                api.get("/admin/cohorts/health-distribution"),
                api.get("/admin/cohorts/engagement-trends"),
                api.get("/admin/cohorts/subject-proficiency")
            ]);
            
            setData(compRes.data);
            setHealthData(healthRes.data);
            setEngagementData(engageRes.data);
            setProficiencyData(profRes.data);
        } catch (error) {
            console.error("Cohort data fetch failed:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center animate-pulse text-muted-foreground">Synchronizing cohort intelligence...</div>;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                        <Layers className="w-5 h-5 text-indigo-400" />
                        Cohort Intelligence Dashboard
                    </h2>
                    <p className="text-sm text-muted-foreground">Advanced cross-batch performance and health metrics.</p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
                        Phase 4 Active
                    </Badge>
                </div>
            </div>

            {/* Top Level Comparison Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Score Comparison */}
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                            <Activity className="w-4 h-4 text-emerald-400" />
                            Academic Strength (Avg MCQ Score)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="cohort" stroke="#475569" fontSize={12} />
                                <YAxis stroke="#475569" fontSize={12} domain={[0, 100]} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                />
                                <Bar dataKey="avg_score" radius={[4, 4, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Engagement Trends */}
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            Engagement Trends (Daily Study Mins)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={engagementData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="date" stroke="#475569" fontSize={10} tickFormatter={(val) => val.split('-').slice(1).join('/')} />
                                <YAxis stroke="#475569" fontSize={12} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                />
                                <Legend />
                                <Bar dataKey="Batch 1" fill={COLORS[0]} radius={[2, 2, 0, 0]} />
                                <Bar dataKey="Batch 2" fill={COLORS[1]} radius={[2, 2, 0, 0]} />
                                <Bar dataKey="RAS" fill={COLORS[2]} radius={[2, 2, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Middle Section: Health and Proficiency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Health Distribution */}
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                            <Shield className="w-4 h-4 text-amber-500" />
                            Cohort Vulnerability (At-Risk Students)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {healthData && Object.entries(healthData).map(([key, cohort]: [string, any]) => (
                                <div key={key} className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-bold text-slate-300">{cohort.name}</span>
                                        <span className="text-muted-foreground">{cohort.at_risk} at risk / {cohort.total} total</span>
                                    </div>
                                    <div className="relative h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                        <div 
                                            className="absolute left-0 top-0 h-full bg-emerald-500 transition-all duration-500" 
                                            style={{ width: `${100 - cohort.at_risk_percentage}%` }}
                                        />
                                        <div 
                                            className="absolute right-0 top-0 h-full bg-rose-500 transition-all duration-500" 
                                            style={{ width: `${cohort.at_risk_percentage}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-muted-foreground italic">
                                        <span>{100 - cohort.at_risk_percentage}% Healthy</span>
                                        <span>{cohort.at_risk_percentage}% Vulnerable</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Subject Proficiency */}
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-indigo-400" />
                            Subject-Wise Performance (GS Pillars)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={proficiencyData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis dataKey="subject" type="category" stroke="#475569" fontSize={12} width={40} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                />
                                <Legend />
                                <Bar dataKey="Batch 1" fill={COLORS[0]} radius={[0, 2, 2, 0]} />
                                <Bar dataKey="Batch 2" fill={COLORS[1]} radius={[0, 2, 2, 0]} />
                                <Bar dataKey="RAS" fill={COLORS[2]} radius={[0, 2, 2, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Metrics Table */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <CardContent className="p-0">
                    <table className="w-full text-xs text-left">
                        <thead className="text-muted-foreground uppercase bg-slate-950/50">
                            <tr>
                                <th className="px-6 py-4 font-bold">Cohort / Batch</th>
                                <th className="px-6 py-4 font-bold text-center">Total Students</th>
                                <th className="px-6 py-4 font-bold text-center">Avg. Streak</th>
                                <th className="px-6 py-4 font-bold text-right">MCQ Proficiency</th>
                                <th className="px-6 py-4 font-bold text-right">Study Effort</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {data.map((cohort, idx) => (
                                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-200">{cohort.cohort}</td>
                                    <td className="px-6 py-4 text-center">{cohort.students}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-amber-500 font-bold">{cohort.avg_streak} days</span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-black text-emerald-400">{cohort.avg_score}%</td>
                                    <td className="px-6 py-4 text-right font-medium text-slate-300">{cohort.avg_study_hours}h</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
