"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, Award, Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PackStats {
    id: number;
    name: string;
    description: string;
    house_type: string;
    points: number;
    weekly_points: number;
    member_count: number;
    metadata: {
        motto?: string;
        color?: string;
        emblem?: string;
    };
}

export function PackDashboard({ pack }: { pack: PackStats }) {
    const weeklyGoal = 5000;
    const progress = (pack.weekly_points / weeklyGoal) * 100;

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div
                className="relative p-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${pack.metadata.color || '#111'}dd, #000000)` }}
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-card/5 rounded-full -mr-32 -mt-32 blur-3xl" />

                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="w-32 h-32 rounded-3xl bg-card/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-6xl font-black shadow-2xl">
                        {pack.metadata.emblem || pack.name[0]}
                    </div>

                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest bg-card/10 px-3 py-1 rounded-full text-white/80">
                                House of {pack.house_type}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest bg-cyan-600 px-3 py-1 rounded-full text-white">
                                Rank #4
                            </span>
                        </div>
                        <h1 className="text-5xl font-black text-white mb-2">{pack.name}</h1>
                        <p className="text-xl text-white/60 italic">"{pack.metadata.motto}"</p>
                    </div>

                    <div className="flex-1" />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl font-black text-white">{pack.points.toLocaleString()}</div>
                            <div className="text-[10px] uppercase text-white/40 font-bold">Total Points</div>
                        </div>
                        <div className="p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl font-black text-white">{pack.member_count}</div>
                            <div className="text-[10px] uppercase text-white/40 font-bold">Active Wolves</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Weekly Mission */}
                <div className="lg:col-span-2 bg-gray-900 rounded-2xl border border-gray-800 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Target className="h-6 w-6 text-red-500" />
                            <h3 className="text-xl font-bold text-white">Weekly Pack Mission</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Flame className="h-4 w-4 text-orange-500" />
                            <span>Ends in 3 days</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground font-bold uppercase tracking-wider">Collective Progress: Complete 5,000 Lessons</span>
                                <span className="text-white font-bold">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-4 bg-gray-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-black/30 rounded-xl border border-gray-800 flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Zap className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">{pack.weekly_points}</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Earned Today</div>
                                </div>
                            </div>
                            <div className="p-4 bg-black/30 rounded-xl border border-gray-800 flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <Award className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">2.5x</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Point Multiplier</div>
                                </div>
                            </div>
                            <div className="p-4 bg-black/30 rounded-xl border border-gray-800 flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                    <Users className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">12</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Learning Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Feed / Shoutbox Placeholder */}
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="h-6 w-6 text-cyan-500" />
                        <h3 className="text-xl font-bold text-white">Shoutbox</h3>
                    </div>
                    <div className="space-y-4 opacity-40">
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-sm">Real-time pack chat coming soon in Phase 2!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
