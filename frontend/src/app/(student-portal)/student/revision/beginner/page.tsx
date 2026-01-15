
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, CheckCircle, Clock } from "lucide-react";

export default function BeginnerRevisionDashboard() {
    const searchParams = useSearchParams();
    const examId = searchParams.get("exam") || "upsc"; // Default to UPSC if not present

    return (
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-level-1-primary/10 text-level-1-primary text-sm font-bold mb-2"
                        >
                            <BookOpen className="w-4 h-4" /> BEGINNER TRACK
                        </motion.div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-grapho-ink dark:text-white">
                            Foundations First
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                            Your journey to mastery starts here. Build a strong base.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                1
                            </div>
                            <div>
                                <div className="text-xs text-neutral-500 uppercase font-bold">Current Level</div>
                                <div className="font-bold text-grapho-ink dark:text-white">Basics</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Daily Goals / Recommended Actions */}
                <section className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700"
                    >
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <PlayCircle className="w-5 h-5 text-level-1-primary" />
                            Today's Priority
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-level-1-primary transition-colors cursor-pointer group">
                                <div className="w-16 h-16 rounded-lg bg-neutral-200 overflow-hidden relative shrink-0">
                                    {/* In real app, put thumbnail here */}
                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/0 transition-colors">
                                        <PlayCircle className="w-8 h-8 text-white/80" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-blue-600 mb-1">HISTORY - ANCIENT INDIA</div>
                                    <h3 className="font-bold text-grapho-ink dark:text-white leading-tight">Introduction to Indus Valley Civilization</h3>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-neutral-500">
                                        <Clock className="w-3 h-3" /> 25 mins
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-3 rounded-xl bg-level-1-primary text-white font-bold hover:bg-level-1-secondary transition-colors">
                                Start Learning
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-level-1-bg to-blue-500 p-6 rounded-2xl text-white shadow-lg"
                    >
                        <h2 className="text-xl font-bold mb-2">My Progress</h2>
                        <p className="opacity-90 text-sm mb-6">You're just getting started! Consistency is key.</p>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-1">
                                    <span>Topic Coverage</span>
                                    <span>12%</span>
                                </div>
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[12%] rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-1">
                                    <span>Video Completion</span>
                                    <span>4/20</span>
                                </div>
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[20%] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Foundations Grid */}
                <section>
                    <h2 className="text-xl font-bold mb-4 text-grapho-ink dark:text-white">Essential Foundations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {['History', 'Geography', 'Polity', 'Economics'].map((subj, i) => (
                            <motion.div
                                key={subj}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-md hover:border-level-1-primary transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-700 mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {i === 0 ? '🏛️' : i === 1 ? '🌍' : i === 2 ? '⚖️' : '💰'}
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-level-1-primary transition-colors">{subj}</h3>
                                <p className="text-sm text-neutral-500">0/5 Chapters Completed</p>
                                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-level-1-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Basics <ArrowRightIcon className="w-3 h-3" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
    )
}
