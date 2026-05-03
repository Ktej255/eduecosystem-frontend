"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts";
import { Brain, TrendingUp, Users, Activity, AlertCircle } from "lucide-react";
import ChartErrorBoundary from "@/components/ui/ChartErrorBoundary";
import axios from "axios";
import { API_BASE as API_URL } from "@/lib/api";

interface PulseData {
    dominant_vibe: string;
    sample_size: number;
    focused_score: number;
    inspired_score: number;
    top_keywords: string;
}

interface TrendData {
    date: string;
    focused: number;
    anxious: number;
}

export function MindscapeDashboard() {
    const [pulseData, setPulseData] = useState<PulseData | null>(null);
    const [trends, setTrends] = useState<TrendData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("access_token");
            const config = { headers: { Authorization: `Bearer ${token}` } };

            const [pulseRes, trendsRes] = await Promise.all([
                axios.get(`${API_URL}/admin/sentiment/vibe-pulse?batch_name=Global`, config),
                axios.get(`${API_URL}/admin/sentiment/trends?batch_name=Global&days=7`, config)
            ]);

            // Verify pulseData type and set fallback if invalid
            if (pulseRes.data && typeof pulseRes.data === 'object') {
                setPulseData(pulseRes.data);
            } else {
                setPulseData({ dominant_vibe: "Stable", sample_size: 0, focused_score: 0, inspired_score: 0, top_keywords: "" });
            }

            // Verify trends data type before processing
            if (Array.isArray(trendsRes.data)) {
                setTrends(trendsRes.data.reverse());
            } else {
                setTrends([]); // Fallback to empty array
            }
        } catch (error) {
            console.error("Failed to fetch sentiment data", error);
            // Set fallback data on API failure
            setPulseData({ dominant_vibe: "Stable", sample_size: 0, focused_score: 0, inspired_score: 0, top_keywords: "" });
            setTrends([]);
        } finally {
            setLoading(false);
        }
    };

    const getPulseColor = (vibe: string) => {
        switch (vibe) {
            case "Focused": return "rgb(34, 197, 94)"; // Green
            case "Anxious": return "rgb(239, 68, 68)"; // Red
            case "Tired": return "rgb(234, 179, 8)"; // Yellow
            case "Inspired": return "rgb(168, 85, 247)"; // Purple
            default: return "rgb(59, 130, 246)"; // Blue
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    // Handle null pulseData in render after loading
    if (!pulseData) {
        return (
            <div className="p-6 text-center text-muted-foreground transition-colors">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 text-destructive" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Failed to load Mindscape Data</h3>
                <p>Please check if the backend service is running or if there's an issue with the data.</p>
            </div>
        );
    }

    const pulseColor = getPulseColor(pulseData?.dominant_vibe);

    return (
        <div className="space-y-6 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Vibe Pulse Visualization */}
                <Card className="bg-card border-border lg:col-span-1 overflow-hidden relative shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Activity className="w-4 h-4" />
                            Real-time Vibe Pulse
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-10 relative">
                        <ChartErrorBoundary name="Vibe Pulse">
                            {/* The Pulse Glow */}
                            <div
                                className="absolute w-40 h-40 rounded-full opacity-20 blur-3xl animate-pulse"
                                style={{ backgroundColor: pulseColor }}
                            />

                            <div
                                className="w-32 h-32 rounded-full border-4 flex items-center justify-center relative transition-colors duration-1000"
                                style={{ borderColor: pulseColor, boxShadow: `0 0 20px ${pulseColor}44` }}
                            >
                                <Brain className="w-12 h-12" style={{ color: pulseColor }} />
                            </div>

                            <div className="mt-6 text-center">
                                <div className="text-3xl font-black uppercase tracking-widest transition-colors duration-1000" style={{ color: pulseColor }}>
                                    {pulseData?.dominant_vibe || "Stable"}
                                </div>
                                <p className="text-muted-foreground text-xs mt-1 italic">Based on {pulseData?.sample_size || 0} reflections</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold">Focus</div>
                                    <div className="text-lg font-mono text-emerald-500">{(pulseData?.focused_score * 100).toFixed(0)}%</div>
                                </div>
                                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold">Inspiration</div>
                                    <div className="text-lg font-mono text-purple-500">{(pulseData?.inspired_score * 100).toFixed(0)}%</div>
                                </div>
                            </div>
                        </ChartErrorBoundary>
                    </CardContent>
                </Card>

                {/* Sentiment Trends Chart */}
                <Card className="bg-card border-border lg:col-span-2 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-tighter">
                            <TrendingUp className="w-4 h-4" />
                            Headspace Trajectory (7 Days)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full mt-4">
                            <ChartErrorBoundary name="Headspace Trends">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={trends}>
                                        <defs>
                                            <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorAnxious" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.5} />
                                        <XAxis
                                            dataKey="date"
                                            stroke="var(--muted-foreground)"
                                            fontSize={10}
                                            tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { weekday: 'short' })}
                                        />
                                        <YAxis stroke="var(--muted-foreground)" fontSize={10} domain={[0, 1]} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                                            itemStyle={{ fontSize: '12px', color: 'var(--foreground)' }}
                                        />
                                        <Area type="monotone" dataKey="focused" stroke="#10b981" fillOpacity={1} fill="url(#colorFocus)" strokeWidth={2} />
                                        <Area type="monotone" dataKey="anxious" stroke="#ef4444" fillOpacity={1} fill="url(#colorAnxious)" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </ChartErrorBoundary>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Keywords Word Cloud (Simplified) */}
            <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground uppercase font-bold">Trending Realizations</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {pulseData?.top_keywords.split(',').map((word, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-muted/50 border border-border rounded-full text-[10px] font-black uppercase text-muted-foreground hover:border-primary/50 transition-colors cursor-default"
                                style={{ fontSize: `${Math.max(8, 12 - (i * 0.5))}px`, opacity: 1 - (i * 0.05) }}
                            >
                                {word.trim()}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
