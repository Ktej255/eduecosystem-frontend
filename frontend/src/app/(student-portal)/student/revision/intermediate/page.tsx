
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Award, BarChart2, Book, Calendar, Target } from "lucide-react";

export default function IntermediateRevisionDashboard() {
    const searchParams = useSearchParams();
    const examId = searchParams.get("exam") || "upsc";

    // Mock schedule data
    const schedule = [
        { day: "Today", subject: "Polity", topic: "Parliamentary System", status: "pending" },
        { day: "Tomorrow", subject: "Economy", topic: "Banking Reforms", status: "upcoming" },
        { day: "Wed", subject: "History", topic: "Freedom Struggle 1920-1947", status: "upcoming" },
    ];

    return (
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-level-2-primary/10 text-level-2-primary text-sm font-bold mb-2"
                        >
                            <Award className="w-4 h-4" /> INTERMEDIATE TRACK
                        </motion.div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-grapho-ink dark:text-white">
                            Structured Revision
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                            Keep the momentum. Stick to the plan.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <div className="text-sm text-neutral-500">Daily Streak</div>
                            <div className="text-xl font-bold flex items-center gap-1 justify-end">
                                <span className="text-orange-500">🔥</span> 12 Days
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-level-2-primary flex items-center justify-center font-bold text-level-2-primary bg-white dark:bg-neutral-800">
                            45%
                        </div>
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Main Column: Planner & Schedule */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Active Plan */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-level-2-primary" />
                                    This Week's Plan
                                </h2>
                                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View Full Schedule</button>
                            </div>

                            <div className="space-y-4">
                                {schedule.map((slot, i) => (
                                    <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${slot.day === 'Today' ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800' : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800'}`}>
                                        <div className={`w-16 h-16 rounded-lg flex flex-col items-center justify-center shrink-0 font-bold ${slot.day === 'Today' ? 'bg-white text-orange-600 shadow-sm' : 'bg-neutral-200 text-neutral-500'}`}>
                                            <span className="text-xs uppercase">{slot.day === 'Today' ? 'NOV' : ''}</span>
                                            <span className="text-lg">{slot.day === 'Today' ? '14' : slot.day}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{slot.subject}</div>
                                            <h3 className="font-bold text-lg text-grapho-ink dark:text-white">{slot.topic}</h3>
                                        </div>
                                        {slot.day === 'Today' ? (
                                            <button className="px-5 py-2 rounded-lg bg-level-2-primary text-white font-bold text-sm hover:shadow-lg transition-shadow">
                                                Start
                                            </button>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-neutral-300" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Subject Mastery Grid */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Subject Mastery</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['Polity', 'History', 'Geography', 'Environment'].map((subj, i) => (
                                    <div key={subj} className="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                                                <Book className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold">{subj}</div>
                                                <div className="text-xs text-neutral-500">12/45 Topics</div>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 relative flex items-center justify-center">
                                            {/* Pie chart Placeholder */}
                                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                                <path
                                                    className="text-neutral-100 dark:text-neutral-700"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                />
                                                <path
                                                    className="text-level-2-primary"
                                                    strokeDasharray={`${(i + 1) * 20}, 100`}
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                />
                                            </svg>
                                            <span className="absolute text-[10px] font-bold">{(i + 1) * 20}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Analytics & Quizzes */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Daily Quiz</h3>
                                        <p className="text-indigo-200 text-sm">Test your retention</p>
                                    </div>
                                    <Target className="w-8 h-8 text-indigo-400" />
                                </div>
                                <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
                                    Take Quiz (15 Qs)
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                        </div>

                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                            <h3 className="font-bold flex items-center gap-2 mb-4">
                                <BarChart2 className="w-4 h-4 text-neutral-500" /> recent Activity
                            </h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3 text-sm">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-level-2-primary shrink-0" />
                                        <div>
                                            <div className="font-medium text-grapho-ink dark:text-neutral-200">Completed "Preamble" Quiz</div>
                                            <div className="text-xs text-neutral-400">2 hours ago • Scored 85%</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
