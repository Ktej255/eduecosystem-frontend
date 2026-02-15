"use client";

import React, { useMemo } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer, Tooltip
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Target, Zap, TrendingUp, Info } from 'lucide-react';
import { getLearningProgress } from "@/services/progressStorage";

export default function StudentDNAWidget() {
    const progress = getLearningProgress();
    const mastery = progress.subjectMastery;

    const chartData = useMemo(() => [
        { subject: 'Economy', A: mastery.economy, fullMark: 100 },
        { subject: 'Polity', A: mastery.polity, fullMark: 100 },
        { subject: 'History', A: mastery.history, fullMark: 100 },
        { subject: 'Geography', A: mastery.geography, fullMark: 100 },
        { subject: 'Science', A: mastery.science, fullMark: 100 },
        { subject: 'Ethics', A: mastery.ethics, fullMark: 100 },
        { subject: 'Security', A: mastery.security, fullMark: 100 },
        { subject: 'Art-Culture', A: mastery.art_culture, fullMark: 100 },
    ], [mastery]);

    const stats = useMemo(() => {
        const values = Object.values(mastery);
        const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
        const max = Math.max(...values);
        const weak = Object.entries(mastery).sort((a, b) => a[1] - b[1])[0];

        return { avg, max, weak };
    }, [mastery]);

    return (
        <Card className="w-full bg-slate-50 dark:bg-black/40 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <Brain className="w-5 h-5 text-indigo-500" />
                            Performance DNA
                        </CardTitle>
                        <CardDescription>Multifaceted subject mastery profile</CardDescription>
                    </div>
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Radar Chart */}
                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                <PolarGrid stroke="#334155" opacity={0.3} />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Mastery"
                                    dataKey="A"
                                    stroke="#4f46e5"
                                    fill="#4f46e5"
                                    fillOpacity={0.5}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Stats & Insights */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Mastery Index</p>
                                <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{stats.avg}%</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Peak Strength</p>
                                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{stats.max}%</p>
                            </div>
                        </div>

                        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
                            <Target className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs font-bold text-amber-800 dark:text-amber-400">Critical Focus Needed</p>
                                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                                    Your {stats.weak[0].replace('_', '-')} mastery is at {stats.weak[1]}%. Prioritize upcoming sessions for this pillar.
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                View Deep DNA Analysis <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
