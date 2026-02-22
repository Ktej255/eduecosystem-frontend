"use client";

import React, { useMemo } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer, Tooltip, Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import ChartErrorBoundary from '@/components/ui/ChartErrorBoundary';

// Mock aggregate data for the batch
const BATCH_DATA = [
    { subject: 'Economy', BatchAvg: 65, TopPercentile: 92 },
    { subject: 'Polity', BatchAvg: 78, TopPercentile: 95 },
    { subject: 'History', BatchAvg: 55, TopPercentile: 88 },
    { subject: 'Geography', BatchAvg: 48, TopPercentile: 85 },
    { subject: 'Science', BatchAvg: 70, TopPercentile: 90 },
    { subject: 'Ethics', BatchAvg: 62, TopPercentile: 82 },
    { subject: 'Security', BatchAvg: 40, TopPercentile: 75 },
    { subject: 'Art-Culture', BatchAvg: 42, TopPercentile: 78 },
];

export default function BatchDNAMonitor() {
    return (
        <Card className="w-full bg-card border-border shadow-xl overflow-hidden">
            <CardHeader className="border-b border-slate-50 bg-slate-50/50 dark:bg-black/20">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            Batch Performance DNA
                        </CardTitle>
                        <CardDescription>Aggregate mastery across 124 active students</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Radar Chart */}
                    <div className="h-[350px] w-full">
                        <ChartErrorBoundary name="Batch DNA Radar">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={BATCH_DATA}>
                                    <PolarGrid stroke="var(--border)" opacity={0.5} />
                                    <PolarAngleAxis
                                        dataKey="subject"
                                        tick={{ fill: 'var(--muted-foreground)', fontSize: 11, fontWeight: 'bold' }}
                                    />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                                    <Radar
                                        name="Batch Average"
                                        dataKey="BatchAvg"
                                        stroke="var(--primary)"
                                        fill="var(--primary)"
                                        fillOpacity={0.4}
                                    />
                                    <Radar
                                        name="Top 10% Accuracy"
                                        dataKey="TopPercentile"
                                        stroke="#10b981"
                                        fill="#10b981"
                                        fillOpacity={0.1}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                                        itemStyle={{ color: 'var(--foreground)' }}
                                    />
                                    <Legend />
                                </RadarChart>
                            </ResponsiveContainer>
                        </ChartErrorBoundary>
                    </div>

                    {/* Insights for Teacher */}
                    <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-100 dark:border-red-900/40">
                            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-4 h-4" />
                                <span>Critical Knowledge Gaps</span>
                            </div>
                            <p className="text-sm text-red-600 dark:text-red-300">
                                <b>Security & Art-Culture</b> mastery is below the 45% threshold. Recommend pushing additional PYQ deep-dives for these sectors.
                            </p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-2">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Batch Strengths</span>
                            </div>
                            <p className="text-sm text-emerald-600 dark:text-emerald-300">
                                <b>Polity</b> metrics are exceptional (78% Avg). The batch is ready for advanced Level-3 simulation tests in this subject.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <h4 className="text-xs font-black uppercase text-muted-foreground mb-4 tracking-widest">Growth Vector</h4>
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-muted-foreground">Weekly Consistency</span>
                                        <span className="font-bold">+12%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-[72%] bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-muted-foreground">Retention Stability</span>
                                        <span className="font-bold">4.2 Days</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-indigo-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
