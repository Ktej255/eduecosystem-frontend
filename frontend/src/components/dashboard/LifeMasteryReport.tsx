"use client";

import React, { useMemo } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

const MOCK_MASTERY_DATA = [
    { day: 'Mon', academic: 4, focus: 6, skills: 20 },
    { day: 'Tue', academic: 6, focus: 7, skills: 25 },
    { day: 'Wed', academic: 5, focus: 8, skills: 40 },
    { day: 'Thu', academic: 8, focus: 9, skills: 55 },
    { day: 'Fri', academic: 7, focus: 7, skills: 70 },
    { day: 'Sat', academic: 9, focus: 10, skills: 85 },
    { day: 'Sun', academic: 10, focus: 9, skills: 100 },
];

export default function LifeMasteryReport() {
    return (
        <Card className="w-full bg-card dark:bg-black/40 border-border dark:border-white/5 shadow-2xl overflow-hidden group">
            <CardHeader className="pb-2 border-b border-white/5 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-black italic flex items-center gap-2 tracking-tighter">
                            <Sparkles className="w-5 h-5 text-blue-500" />
                            LIFE MASTERY SYNERGY
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                            Correlation: Academic vs. Wellbeing
                        </CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-[10px] font-bold text-blue-400">
                            +24% SYNERGY
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="space-y-8">
                    {/* Main Correlation Chart */}
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={MOCK_MASTERY_DATA}>
                                <defs>
                                    <linearGradient id="colorAcademic" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#ffffff40', fontSize: 10 }}
                                />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#000',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        fontSize: '10px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="academic"
                                    stroke="#3b82f6"
                                    fillOpacity={1}
                                    fill="url(#colorAcademic)"
                                    strokeWidth={3}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="focus"
                                    stroke="#8b5cf6"
                                    fillOpacity={1}
                                    fill="url(#colorFocus)"
                                    strokeWidth={3}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="skills"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-card/5 rounded-2xl border border-white/5 hover:bg-card/10 transition-all">
                            <Activity className="w-4 h-4 text-blue-400 mb-2" />
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-tighter leading-none mb-1">Consistency</p>
                            <p className="text-xl font-black text-white">92%</p>
                            <div className="mt-2 text-[8px] text-emerald-400 font-bold">↑ 12% vs last week</div>
                        </div>
                        <div className="p-4 bg-card/5 rounded-2xl border border-white/5 hover:bg-card/10 transition-all">
                            <Zap className="w-4 h-4 text-purple-400 mb-2" />
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-tighter leading-none mb-1">Focus IQ</p>
                            <p className="text-xl font-black text-white">8.4</p>
                            <div className="mt-2 text-[8px] text-emerald-400 font-bold">Peak: Sat (10.0)</div>
                        </div>
                        <div className="p-4 bg-card/5 rounded-2xl border border-white/5 hover:bg-card/10 transition-all">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-2" />
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-tighter leading-none mb-1">Skill Mastery</p>
                            <p className="text-xl font-black text-white">34/36</p>
                            <div className="mt-2 text-[8px] text-white/40 font-bold">In progress: Real Estate</div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                        <p className="text-[10px] text-blue-300 font-bold italic">
                            "AI INSIGHT: When your Morning Meditation Focus exceeds 8.0, your History Retention increases by 42%. Maintain today's pattern for the exam streak."
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
