"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    TrendingUp, DollarSign, Target, PieChart, 
    ArrowUpRight, BarChart3, Layers, TrendingDown,
    Activity, ShoppingBag
} from "lucide-react";
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';
import api from "@/lib/api";

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316'];

export default function RevenueIntelligence() {
    const [overview, setOverview] = useState<any>(null);
    const [roi, setRoi] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [ovRes, roiRes] = await Promise.all([
                api.get("/admin/revenue/overview"),
                api.get("/admin/revenue/marketing-roi")
            ]);
            setOverview(ovRes.data);
            setRoi(roiRes.data);
        } catch (error) {
            console.error("Revenue fetch failed:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center text-muted-foreground animate-pulse font-black uppercase tracking-widest">Loading Revenue Intelligence...</div>;

    return (
        <div className="space-y-8 p-6 bg-slate-950 min-h-screen text-slate-200">
            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Today", value: overview?.today, icon: Activity, color: "text-emerald-500" },
                    { title: "This Week", value: overview?.this_week, icon: TrendingUp, color: "text-blue-500" },
                    { title: "This Month", value: overview?.this_month, icon: ShoppingBag, color: "text-purple-500" },
                    { title: "All Time", value: overview?.total_all_time, icon: DollarSign, color: "text-amber-500" }
                ].map((stat, i) => (
                    <Card key={i} className="bg-slate-900 border-slate-800 shadow-2xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex justify-between items-center">
                                {stat.title}
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black text-white">₹{stat.value?.toLocaleString() || 0}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Line Chart: 30-Day Revenue Trend */}
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-indigo-400" />
                            30-Day Revenue Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={overview?.daily_trend_30d || []}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis 
                                    dataKey="date" 
                                    stroke="#475569" 
                                    fontSize={10} 
                                    tickFormatter={(val) => val.split('-').slice(2).join('/')}
                                />
                                <YAxis stroke="#475569" fontSize={10} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="revenue" 
                                    stroke="#6366f1" 
                                    strokeWidth={4} 
                                    dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }} 
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Bar Chart: Revenue by Subject */}
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <PieChart className="w-4 h-4 text-pink-400" />
                            Revenue by Subject
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={overview?.subject_breakdown || []}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis dataKey="subject" stroke="#94a3b8" fontSize={10} />
                                <YAxis stroke="#94a3b8" fontSize={10} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                />
                                <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]}>
                                    {(overview?.subject_breakdown || []).map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* ROI Table */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden shadow-2xl">
                <CardHeader className="bg-slate-950 border-b border-slate-800 py-6">
                    <CardTitle className="text-xs font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Marketing Campaign ROI Intelligence
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-left">
                        <thead className="text-[10px] text-slate-500 uppercase bg-slate-950/50">
                            <tr>
                                <th className="px-8 py-4 font-black">Campaign</th>
                                <th className="px-8 py-4 font-black text-center">Reach</th>
                                <th className="px-8 py-4 font-black text-center">Conversions</th>
                                <th className="px-8 py-4 font-black text-right">Revenue</th>
                                <th className="px-8 py-4 font-black text-right">ROI %</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {(roi?.campaigns || []).map((c: any, idx: number) => (
                                <tr key={idx} className="hover:bg-indigo-500/5 transition-colors border-l-4 border-transparent hover:border-indigo-500">
                                    <td className="px-8 py-6 font-black text-white text-sm">{c.campaign_name}</td>
                                    <td className="px-8 py-6 text-center text-slate-400 text-xs">{c.messages_sent.toLocaleString()}</td>
                                    <td className="px-8 py-6 text-center font-bold text-indigo-400">{c.enrollments_attributed}</td>
                                    <td className="px-8 py-6 text-right font-black text-emerald-400">₹{c.revenue_attributed.toLocaleString()}</td>
                                    <td className="px-8 py-6 text-right">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black ${c.roi_percentage > 100 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                                            {c.roi_percentage.toFixed(1)}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
