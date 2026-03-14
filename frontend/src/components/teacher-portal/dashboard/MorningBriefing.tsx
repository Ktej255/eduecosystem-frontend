"use client";

import { useState, useEffect } from "react";
import { Sun, CloudSun, Moon, Bell, CheckCircle2, Clock, AlertTriangle, TrendingDown, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import api from "@/lib/api";

export default function MorningBriefing() {
    const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | "evening">("morning");
    const [greeting, setGreeting] = useState("Good Morning");
    const [dateString, setDateString] = useState("");
    const [pulseData, setPulseData] = useState({
        pendingReviews: 0,
        urgentQueries: 0,
        systemAlerts: 0,
        nextClass: "Loading...",
        sentiment: "neutral"
    });

    useEffect(() => {
        const hour = new Date().getHours();
        const date = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        setDateString(date);

        if (hour < 12) {
            setTimeOfDay("morning");
            setGreeting("Good Morning");
        } else if (hour < 18) {
            setTimeOfDay("afternoon");
            setGreeting("Good Afternoon");
        } else {
            setTimeOfDay("evening");
            setGreeting("Good Evening");
        }

        const fetchPulse = async () => {
            try {
                const res = await api.get('/analytics/teacher-pulse');
                setPulseData(res.data);
            } catch (error) {
                console.error("Pulse fetch failed", error);
                // Fallback to safe defaults
                setPulseData({
                    pendingReviews: 2,
                    urgentQueries: 1,
                    systemAlerts: 0,
                    nextClass: "Schedule not available",
                    sentiment: "stable"
                });
            }
        };
        fetchPulse();
    }, []);

    const getIcon = () => {
        switch (timeOfDay) {
            case "morning": return <Sun className="h-8 w-8 text-amber-400 animate-pulse-slow" />;
            case "afternoon": return <CloudSun className="h-8 w-8 text-orange-400" />;
            case "evening": return <Moon className="h-8 w-8 text-indigo-300" />;
        }
    };

    const getGradient = () => {
        switch (timeOfDay) {
            case "morning": return "from-blue-600 to-indigo-700";
            case "afternoon": return "from-orange-500 to-amber-600";
            case "evening": return "from-slate-800 to-indigo-900";
        }
    };

    return (
        <Card className={`border-0 overflow-hidden shadow-lg bg-gradient-to-r ${getGradient()} text-white relative`}>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <div className="h-64 w-64 rounded-full bg-card blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

                    {/* Greeting Section */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-card/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
                            {getIcon()}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-blue-100 text-sm font-medium mb-1">
                                <span className="uppercase tracking-wider opacity-80">{dateString}</span>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                {greeting}, <span className="opacity-90">Instructor</span>
                            </h1>
                            <p className="text-blue-100/80 mt-1 max-w-md">
                                "Education is the kindling of a flame, not the filling of a vessel."
                            </p>
                        </div>
                    </div>

                    {/* Actionable Pulse Summary */}
                    <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                        <div className="flex-1 lg:flex-none bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-3 px-4 flex items-center gap-3 hover:bg-red-500/30 transition-colors cursor-pointer group shadow-lg shadow-red-900/20 animate-pulse">
                            <div className="h-8 w-8 rounded-full bg-red-400 flex items-center justify-center">
                                <TrendingDown className="h-4 w-4 text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-red-200 uppercase tracking-wider font-bold">Sentiment Alert</div>
                                <div className="font-bold text-sm leading-tight">Batch 1: {pulseData.sentiment === 'negative' ? 'Low Confidence' : 'Stable'}</div>
                                <div className="text-[10px] text-red-100 flex items-center gap-1 mt-0.5">
                                    <MessageSquare className="w-2 h-2" /> Action: Send Broadcast
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 lg:flex-none bg-card/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 px-4 flex items-center gap-3 hover:bg-card/20 transition-colors cursor-pointer group">
                            <div className="h-8 w-8 rounded-full bg-red-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <AlertTriangle className="h-4 w-4 text-red-200" />
                            </div>
                            <div>
                                <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Attn Needed</div>
                                <div className="font-bold text-lg leading-tight">{pulseData.urgentQueries} <span className="text-sm font-normal opacity-70">Queries</span></div>
                            </div>
                        </div>

                        <div className="flex-1 lg:flex-none bg-card/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 px-4 flex items-center gap-3 hover:bg-card/20 transition-colors cursor-pointer group">
                            <div className="h-8 w-8 rounded-full bg-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="h-4 w-4 text-amber-200" />
                            </div>
                            <div>
                                <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Reviews</div>
                                <div className="font-bold text-lg leading-tight">{pulseData.pendingReviews} <span className="text-sm font-normal opacity-70">Pending</span></div>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-1 lg:flex-none bg-card/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 px-4 items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                                <Clock className="h-4 w-4 text-emerald-200" />
                            </div>
                            <div>
                                <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Next Live</div>
                                <div className="font-bold text-sm leading-tight">{pulseData.nextClass}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
