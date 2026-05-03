"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { name: 'Week 1', score: 45, confidence: 40 },
    { name: 'Week 2', score: 62, confidence: 55 },
    { name: 'Week 3', score: 78, confidence: 72 },
    { name: 'Week 4', score: 85, confidence: 80 },
];

export default function GrowthCurve() {
    return (
        <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 overflow-hidden relative">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-black text-white">Your Growth Curve</h3>
                    <p className="text-xs text-neutral-500">Weekly progress markers and neurological stability.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[10px] text-neutral-400 font-bold uppercase">Focus Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[10px] text-neutral-400 font-bold uppercase">Stability</span>
                    </div>
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorConf" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis 
                            dataKey="name" 
                            stroke="#525252" 
                            fontSize={10} 
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis 
                            stroke="#525252" 
                            fontSize={10} 
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 100]}
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #ffffff10', borderRadius: '12px' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#22c55e" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorScore)" 
                        />
                        <Area 
                            type="monotone" 
                            dataKey="confidence" 
                            stroke="#3b82f6" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorConf)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
                {data.map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="text-[10px] text-neutral-600 font-bold uppercase">{item.name}</div>
                        <div className="text-sm font-black text-white">{item.score}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
