"use client";

import React, { useState, useEffect } from "react";
import {
    Brain,
    AlertTriangle,
    Eye,
    Zap,
    Info,
    RefreshCw
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import api from "@/lib/api";

interface StruggleEvent {
    id: number;
    event_type: string;
    user_id: number;
    event_data: string;
    timestamp: string;
}

interface ParsedSignal {
    signal: 'frustrated' | 'confused' | 'disengaged';
    path: string;
    scrollVelocity: number;
    clickFrequency: number;
    dwellTime: number;
}

// Aggregate signals by page path
interface PagePulse {
    path: string;
    frustrated: number;
    confused: number;
    disengaged: number;
    total: number;
    lastSeen: string;
}

const SIGNAL_CONFIG = {
    frustrated: { label: "Frustrated", color: "bg-red-500", textColor: "text-red-400", icon: AlertTriangle, description: "Rapid clicking detected" },
    confused: { label: "Confused", color: "bg-amber-500", textColor: "text-amber-400", icon: Eye, description: "Long freeze with no interaction" },
    disengaged: { label: "Disengaged", color: "bg-blue-500", textColor: "text-blue-400", icon: Zap, description: "Rapid scroll-through detected" },
};

export default function BehavioralHeatmap() {
    const [pagePulses, setPagePulses] = useState<PagePulse[]>([]);
    const [totalSignals, setTotalSignals] = useState({ frustrated: 0, confused: 0, disengaged: 0 });
    const [loading, setLoading] = useState(true);

    const fetchSignals = async () => {
        setLoading(true);
        try {
            // In production this would fetch from /analytics/events?event_type=struggle_signal
            // For now, generate realistic mock data from common lesson paths
            const mockPulses: PagePulse[] = [
                { path: "/student/batch1/economy", frustrated: 12, confused: 8, disengaged: 3, total: 23, lastSeen: "2 min ago" },
                { path: "/student/batch1/polity", frustrated: 5, confused: 15, disengaged: 2, total: 22, lastSeen: "5 min ago" },
                { path: "/student/batch1/history/read/ch-42", frustrated: 18, confused: 4, disengaged: 7, total: 29, lastSeen: "1 min ago" },
                { path: "/student/batch1/geography", frustrated: 2, confused: 6, disengaged: 1, total: 9, lastSeen: "12 min ago" },
                { path: "/student/batch1/science-tech", frustrated: 8, confused: 11, disengaged: 5, total: 24, lastSeen: "3 min ago" },
                { path: "/student/batch1/ethics", frustrated: 1, confused: 3, disengaged: 0, total: 4, lastSeen: "30 min ago" },
            ].sort((a, b) => b.total - a.total);

            setPagePulses(mockPulses);
            setTotalSignals({
                frustrated: mockPulses.reduce((sum, p) => sum + p.frustrated, 0),
                confused: mockPulses.reduce((sum, p) => sum + p.confused, 0),
                disengaged: mockPulses.reduce((sum, p) => sum + p.disengaged, 0),
            });
        } catch (e) {
            console.error("Failed to fetch behavioral signals:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSignals();
        // Auto-refresh every 30 seconds
        const interval = setInterval(fetchSignals, 30000);
        return () => clearInterval(interval);
    }, []);

    const getHeatLevel = (total: number) => {
        if (total >= 25) return "border-red-500/50 bg-red-950/20";
        if (total >= 15) return "border-amber-500/50 bg-amber-950/20";
        if (total >= 5) return "border-blue-500/50 bg-blue-950/20";
        return "border-slate-700 bg-slate-900/50";
    };

    const overallTotal = totalSignals.frustrated + totalSignals.confused + totalSignals.disengaged;

    return (
        <Card className="col-span-1 border-slate-800 bg-slate-900 overflow-hidden">
            <CardHeader className="pb-4 bg-slate-950/50 border-b border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2 text-white">
                            <Brain className="h-5 w-5 text-purple-400" />
                            Student Pulse Monitor
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Real-time behavioral struggle signals across lessons.
                        </CardDescription>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={fetchSignals}
                        className="text-slate-400 hover:text-white"
                    >
                        <RefreshCw className={cn("h-4 w-4 mr-1", loading && "animate-spin")} />
                        Refresh
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-3">
                    {(Object.keys(SIGNAL_CONFIG) as Array<keyof typeof SIGNAL_CONFIG>).map((key) => {
                        const config = SIGNAL_CONFIG[key];
                        const Icon = config.icon;
                        const count = totalSignals[key];
                        return (
                            <div key={key} className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={cn("w-2 h-2 rounded-full", config.color)} />
                                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
                                        {config.label}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className={cn("text-2xl font-black", config.textColor)}>
                                        {count}
                                    </span>
                                    <span className="text-[10px] text-slate-500">signals</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Page-Level Heatmap */}
                <div className="space-y-2">
                    <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest">
                        Lesson Struggle Heatmap
                    </h3>
                    <div className="space-y-2">
                        {pagePulses.map((pulse, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex items-center justify-between p-3 rounded-lg border transition-all hover:scale-[1.01]",
                                    getHeatLevel(pulse.total)
                                )}
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="text-sm font-mono text-slate-300 truncate">
                                        {pulse.path.replace('/student/batch1/', '').replace('/', ' › ')}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 flex-shrink-0">
                                    {/* Mini bars */}
                                    <div className="flex items-end gap-0.5 h-5">
                                        <div
                                            className="w-1.5 bg-red-500 rounded-t-sm"
                                            style={{ height: `${Math.min(100, (pulse.frustrated / pulse.total) * 100)}%` }}
                                        />
                                        <div
                                            className="w-1.5 bg-amber-500 rounded-t-sm"
                                            style={{ height: `${Math.min(100, (pulse.confused / pulse.total) * 100)}%` }}
                                        />
                                        <div
                                            className="w-1.5 bg-blue-500 rounded-t-sm"
                                            style={{ height: `${Math.min(100, (pulse.disengaged / pulse.total) * 100)}%` }}
                                        />
                                    </div>

                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "text-[10px] font-bold px-2",
                                            pulse.total >= 25
                                                ? "border-red-500/50 text-red-400"
                                                : pulse.total >= 15
                                                    ? "border-amber-500/50 text-amber-400"
                                                    : "border-slate-600 text-slate-400"
                                        )}
                                    >
                                        {pulse.total} signals
                                    </Badge>
                                    <span className="text-[10px] text-slate-600 w-16 text-right">
                                        {pulse.lastSeen}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insight Footer */}
                <div className="flex items-center gap-2 bg-purple-950/20 text-purple-300 px-4 py-2.5 rounded-lg text-xs font-medium border border-purple-900/30">
                    <Info className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>
                        {overallTotal > 50
                            ? "⚠️ High struggle activity detected. Consider reviewing History & Science-Tech content."
                            : overallTotal > 20
                                ? "Moderate struggle signals. Economy and Polity lessons show higher friction."
                                : "Student body is focused. Low struggle signals across all modules."}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
