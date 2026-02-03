"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MEDITATION_THEME } from '../theme/MeditationTheme';

const data = [
    { name: 'Mon', minutes: 12 },
    { name: 'Tue', minutes: 18 },
    { name: 'Wed', minutes: 15 },
    { name: 'Thu', minutes: 25 },
    { name: 'Fri', minutes: 20 },
    { name: 'Sat', minutes: 30 },
    { name: 'Sun', minutes: 45 },
];

export default function ProgressGraph() {
    return (
        <div className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard}`}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-medium text-white">Mindfulness Journey</h3>
                    <p className="text-white/40 text-sm">Minutes meditated this week</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-400">165m</p>
                    <p className="text-emerald-500/60 text-xs font-medium uppercase tracking-wider">Total</p>
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            stroke="#ffffff40"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                            itemStyle={{ color: '#10b981' }}
                            cursor={{ stroke: '#ffffff20' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="minutes"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorMinutes)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
