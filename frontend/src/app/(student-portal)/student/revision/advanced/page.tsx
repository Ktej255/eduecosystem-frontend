
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Crown, Zap, TrendingUp, AlertCircle, PieChart } from "lucide-react";

export default function AdvancedRevisionDashboard() {
    const searchParams = useSearchParams();

    return (
        <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-sm font-bold mb-2 shadow-lg shadow-amber-900/20"
                        >
                            <Crown className="w-4 h-4 fill-current" /> ADVANCED TRACK
                        </motion.div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                            Performance Optimization
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800">
                            <div className="text-xs text-neutral-400 uppercase tracking-widest">Exam Rdy. Score</div>
                            <div className="text-2xl font-bold font-mono text-green-400">87.5%</div>
                        </div>
                    </div>
                </header>

                {/* Gap Analysis Hero */}
                <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                                Critical Gaps Detected
                            </h2>
                            <p className="text-neutral-400 max-w-md">
                                Based on your recent mock tests, these areas need immediate polishing to maximize your score.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-red-900/10 border border-red-500/20 hover:border-red-500/40 transition-colors cursor-pointer">
                                    <div>
                                        <div className="font-bold text-red-200">Economics - Monetary Policy</div>
                                        <div className="text-xs text-red-400">High Weightage • Low Accuracy</div>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-bold text-sm">
                                        Fix Now
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-xl bg-amber-900/10 border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-pointer">
                                    <div>
                                        <div className="font-bold text-amber-200">Polity - Anti-Defection Law</div>
                                        <div className="text-xs text-amber-400">Medium Weightage • Conceptual Error</div>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-sm">
                                        Review
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-500" /> Projected Rank
                                </h3>
                                <div className="h-48 relative flex items-end gap-2">
                                    {[40, 45, 60, 55, 70, 82, 87].map((h, i) => (
                                        <div key={i} className="flex-1 bg-neutral-700 hover:bg-level-3-primary transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                Test {i + 1}: {h}%
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-level-3-primary/5 rounded-full blur-[100px] pointer-events-none" />
                </section>

                {/* Advanced Tools Grid */}
                <section>
                    <h2 className="text-xl font-bold mb-4 text-neutral-300">Advanced Tools</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <ToolCard
                            icon={<Zap className="w-6 h-6 text-yellow-400" />}
                            title="Speed Drills"
                            desc="Increase your solving speed with rapid-fire MCQ sessions."
                            color="hover:border-yellow-500/50"
                        />
                        <ToolCard
                            icon={<PieChart className="w-6 h-6 text-purple-400" />}
                            title="Deep Analytics"
                            desc="Analyze your performance by topic, difficulty, and time."
                            color="hover:border-purple-500/50"
                        />
                        <ToolCard
                            icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                            title="Rank Predictor"
                            desc="Compare your performance with top rankers in real-time."
                            color="hover:border-green-500/50"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}

function ToolCard({ icon, title, desc, color }: any) {
    return (
        <div className={`p-6 rounded-2xl bg-neutral-900 border border-neutral-800 ${color} transition-all hover:bg-neutral-800 cursor-pointer group`}>
            <div className="mb-4 p-3 bg-neutral-950 rounded-lg w-fit group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="font-bold text-lg mb-2 text-neutral-200">{title}</h3>
            <p className="text-sm text-neutral-500">{desc}</p>
        </div>
    )
}
