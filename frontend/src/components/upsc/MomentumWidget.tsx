"use client";

import React, { useState, useEffect } from 'react';
import { 
    Zap, 
    TrendingUp, 
    TrendingDown, 
    Activity, 
    ArrowUpRight,
    Loader2,
    Target
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import api from '@/lib/api';

interface MomentumData {
    efficiency_score: number;
    trend: 'improving' | 'declining' | 'stable';
    this_week_avg_score: number;
    last_week_avg_score: number;
    interpretation: string;
}

interface MomentumWidgetProps {
    subject: string;
}

export default function MomentumWidget({ subject }: MomentumWidgetProps) {
    const [data, setData] = useState<MomentumData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/engine/efficiency-score?subject_slug=${encodeURIComponent(subject)}`);
                setData(res.data);
            } catch (err) {
                console.error("Momentum lookup failed:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [subject]);

    if (loading) {
        return (
            <div className="h-[280px] flex flex-col items-center justify-center border-2 border-dashed rounded-3xl bg-muted/5">
                <Loader2 className="w-6 h-6 text-emerald-500 animate-spin mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 italic font-mono">Syncing Velocity...</p>
            </div>
        );
    }

    if (!data) return null;

    const isImproving = data.trend === 'improving';
    const isDeclining = data.trend === 'declining';

    return (
        <Card className="bg-[#0a0a0a] border-2 border-emerald-500/20 shadow-2xl overflow-hidden rounded-3xl group transition-all hover:border-emerald-500/40 relative h-full">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />
            
            <CardHeader className="pb-2 relative z-10">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xs font-black tracking-[0.2em] text-emerald-500/60 uppercase font-mono">
                        Mastery Momentum
                    </CardTitle>
                    <Activity className={`w-4 h-4 ${isImproving ? 'text-emerald-500' : isDeclining ? 'text-rose-500' : 'text-amber-500'} animate-pulse`} />
                </div>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10 pt-2 h-full flex flex-col justify-between pb-8">
                <div>
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                {isImproving ? <TrendingUp className="w-5 h-5 text-emerald-500" /> : <TrendingDown className="w-5 h-5 text-rose-500" />}
                                <span className={`text-xs font-black uppercase tracking-[.25em] font-mono ${isImproving ? 'text-emerald-500' : isDeclining ? 'text-rose-500' : 'text-amber-500'}`}>
                                    {data.trend}
                                </span>
                            </div>
                            <h2 className="text-7xl font-black tracking-tighter text-white font-mono leading-none transition-all group-hover:scale-105 origin-left">
                                {Math.round(data.efficiency_score)}
                            </h2>
                            <p className="text-[10px] text-muted-foreground mt-4 font-black uppercase tracking-tight italic opacity-70 border-l-2 border-emerald-500/20 pl-2">
                                {data.interpretation}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 border-t border-emerald-500/10 mt-8 pt-6">
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40 font-mono">Weekly Avg</p>
                            <div className="flex items-center gap-1">
                                <span className="text-2xl font-black text-white font-mono">{Math.round(data.this_week_avg_score)}%</span>
                                <ArrowUpRight className="w-3 h-3 text-emerald-500 opacity-60" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40 font-mono">Target Yield</p>
                            <div className="flex items-center gap-1">
                                <span className="text-2xl font-black text-emerald-500 font-mono">90%</span>
                                <Target className="w-3 h-3 text-emerald-500 opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Data Visualization Placeholder */}
                    <div className="h-12 w-full flex items-end gap-[3px] opacity-30 group-hover:opacity-60 transition-all">
                        {[5, 8, 12, 10, 15, 22, 18, 25, 32, 28, 40, 45, 42, 55, 62, 58, 75, 82, 80, 95].map((h, i) => (
                            <div 
                                key={i} 
                                className={`flex-1 rounded-t-[1px] transition-all duration-700 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]`}
                                style={{ 
                                    height: `${h}%`, 
                                    opacity: 0.2 + (i / 20 * 0.8),
                                    transitionDelay: `${i * 30}ms`
                                }} 
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-emerald-500/5">
                        <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                        <span className="text-[8px] font-black uppercase text-emerald-500 tracking-[0.4em] font-mono animate-pulse">
                            Synapse Monitoring: Active Intelligence
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
