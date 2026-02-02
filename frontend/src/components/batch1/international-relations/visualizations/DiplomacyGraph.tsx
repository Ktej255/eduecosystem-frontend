"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ExternalLink, ShieldAlert, BadgeIndianRupee } from 'lucide-react';

// --- Data ---
const DIPLOMACY_NODES = [
    { country: 'India', x: 0, y: 0, z: 100, type: 'Home', color: '#f97316' }, // Center
    { country: 'USA', x: 20, y: 20, z: 80, type: 'Strategic', color: '#3b82f6', desc: 'Critical Tech, Defense (iCET)' },
    { country: 'Russia', x: -20, y: 20, z: 70, type: 'Strategic', color: '#ef4444', desc: 'Defense, Nuclear, Energy' },
    { country: 'France', x: 0, y: 30, z: 60, type: 'Strategic', color: '#3b82f6', desc: 'Space, Defense (Rafale)' },
    { country: 'Japan', x: 30, y: 0, z: 60, type: 'Strategic', color: '#3b82f6', desc: 'Infra, Tech, Quad' },
    { country: 'UAE', x: -10, y: -20, z: 50, type: 'Trade', color: '#10b981', desc: 'Trade, Diaspora, Energy' },
    { country: 'Saudi', x: -20, y: -10, z: 40, type: 'Trade', color: '#10b981', desc: 'Energy Security' },
    { country: 'China', x: 0, y: -30, z: 90, type: 'Conflict', color: '#64748b', desc: 'Border Dispute, Trade Deficit' },
    { country: 'Pakistan', x: -10, y: -40, z: 30, type: 'Conflict', color: '#64748b', desc: 'Hostile Neighbor' },
];

const LINES = [
    { start: 'India', end: 'USA', strength: 5, color: '#3b82f6' },
    { start: 'India', end: 'Russia', strength: 4, color: '#ef4444' },
    { start: 'India', end: 'France', strength: 4, color: '#3b82f6' },
    { start: 'India', end: 'Japan', strength: 4, color: '#3b82f6' },
    { start: 'India', end: 'China', strength: 2, color: '#94a3b8', dashed: true },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white/90 dark:bg-black/90 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md">
                <p className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
                    {data.country}
                </p>
                {data.desc && <p className="text-xs text-slate-500 mt-1">{data.desc}</p>}
                <p className="text-[10px] font-mono mt-2 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded w-fit">
                    {data.type} Relationship
                </p>
            </div>
        );
    }
    return null;
};

// Custom Node Shape
const CustomNode = (props: any) => {
    const { cx, cy, payload } = props;
    const isCenter = payload.country === 'India';

    return (
        <svg x={cx - 20} y={cy - 20} width={40} height={40} className="overflow-visible cursor-pointer group">
            {/* Pulsing effect for nodes */}
            {!isCenter && (
                <circle cx="20" cy="20" r="8" fill={payload.color} opacity="0.2">
                    <animate attributeName="r" from="8" to="16" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
            )}

            <circle cx="20" cy="20" r={isCenter ? 12 : 8} fill={payload.color} className="drop-shadow-md transition-all group-hover:r-[10px]" />
            <text x="20" y={isCenter ? 40 : 35} textAnchor="middle" className="text-[10px] font-bold fill-slate-700 dark:fill-slate-300 pointer-events-none">
                {payload.country}
            </text>
        </svg>
    );
};

export default function DiplomacyGraph() {
    const [filter, setFilter] = useState<'All' | 'Strategic' | 'Trade' | 'Conflict'>('All');

    const filteredData = DIPLOMACY_NODES.filter(node =>
        filter === 'All' || node.type === filter || node.country === 'India'
    );

    return (
        <Card className="w-full h-[500px] border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <Network className="w-5 h-5 text-purple-600" />
                            Diplomacy Matrix
                        </CardTitle>
                        <CardDescription>
                            India's Strategic Relationships (Force Simulation)
                        </CardDescription>
                    </div>
                    <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                        {['All', 'Strategic', 'Trade', 'Conflict'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f as any)}
                                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-indigo-300' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 relative">
                {/* Connections Overlay (Implemented as absolutes since Scatter doesn't support lines easily) */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-30">
                        {/* 
                            Note: Recharts coordinates are dynamic, so hardcoding lines here accurately is tricky without exact pixel mapping.
                            For this visual concept, we will rely on the Node Proximity to imply connection, 
                            and add a central 'starburst' background for effect.
                        */}
                        <defs>
                            <radialGradient id="grad-india" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="50%" cy="50%" r="200" fill="url(#grad-india)" />

                        <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#3b82f6" strokeWidth="2" /> {/* USA */}
                        <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#ef4444" strokeWidth="2" /> {/* Russia */}
                        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" /> {/* China */}
                    </svg>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <XAxis type="number" dataKey="x" name="stature" domain={[-50, 50]} hide />
                        <YAxis type="number" dataKey="y" name="relation" domain={[-50, 50]} hide />
                        <ZAxis type="number" dataKey="z" range={[100, 500]} name="score" />
                        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter data={filteredData} shape={<CustomNode />}>
                            {filteredData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>

                <div className="absolute bottom-4 left-4 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                    <div className="flex items-center gap-1"><ShieldAlert className="w-3 h-3 text-blue-500" /> Strategic Pact</div>
                    <div className="flex items-center gap-1"><BadgeIndianRupee className="w-3 h-3 text-green-500" /> Trade Partner</div>
                    <div className="flex items-center gap-1 bg-red-50 p-1 rounded"><ExternalLink className="w-3 h-3 text-red-500" /> Conflict Zone</div>
                </div>
            </CardContent>
        </Card>
    );
}
