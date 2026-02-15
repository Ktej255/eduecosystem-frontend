"use client";

import React, { useEffect, useState } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { meditationService } from '@/services/meditationService';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import { Brain, BookOpen } from 'lucide-react';

export default function FocusCorrelationChart() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await meditationService.getFocusCorrelation(7);
                // If data is empty, use some mock data for visualization purposes during dev
                if (result.length === 0) {
                    setData([
                        { date: 'Mon', focus_score: 6.5, chapters_completed: 2 },
                        { date: 'Tue', focus_score: 7.2, chapters_completed: 3 },
                        { date: 'Wed', focus_score: 5.8, chapters_completed: 1 },
                        { date: 'Thu', focus_score: 8.4, chapters_completed: 5 },
                        { date: 'Fri', focus_score: 7.9, chapters_completed: 4 },
                        { date: 'Sat', focus_score: 4.5, chapters_completed: 1 },
                        { date: 'Sun', focus_score: 9.1, chapters_completed: 6 },
                    ]);
                } else {
                    setData(result.map(d => ({
                        ...d,
                        date: new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' })
                    })));
                }
            } catch (error) {
                console.error("Failed to fetch correlation data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="h-64 flex items-center justify-center text-white/40">Analyzing focus patterns...</div>;

    return (
        <div className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard}`}>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-xl font-serif text-white">Focus Correlation</h3>
                    <p className="text-white/40 text-sm">Mindfulness Focus vs. Academic Output</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="text-xs text-white/60">Focus Level</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-xs text-white/60">Completions</span>
                    </div>
                </div>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#ffffff20"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            yAxisId="left"
                            stroke="#ffffff20"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 10]}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#ffffff20"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0f172a',
                                border: '1px solid #ffffff10',
                                borderRadius: '12px',
                                color: '#fff'
                            }}
                            itemStyle={{ fontSize: '12px' }}
                        />
                        <Bar
                            yAxisId="right"
                            dataKey="chapters_completed"
                            fill="#10b981"
                            radius={[4, 4, 0, 0]}
                            barSize={30}
                            fillOpacity={0.6}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="focus_score"
                            stroke="#6366f1"
                            strokeWidth={3}
                            dot={{ fill: '#6366f1', strokeWidth: 2 }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                        <Brain className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Peak Focus</span>
                    </div>
                    <p className="text-xl font-bold">8.4 / 10</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Efficiency Boost</span>
                    </div>
                    <p className="text-xl font-bold">+28%</p>
                </div>
            </div>
        </div>
    );
}
