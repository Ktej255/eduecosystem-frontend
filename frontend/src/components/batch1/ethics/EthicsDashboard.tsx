"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale, Brain, Heart, Users, ChevronRight, Gavel, BookOpenCheck } from 'lucide-react';
import { ETHICS_SYLLABUS } from './data/ethics-schedule-data';

export default function EthicsDashboard() {
    const [viewMode, setViewMode] = useState<'theory' | 'case-studies'>('theory');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard icon={<Scale />} label="Case Studies Solved" value="12" color="text-indigo-600" />
                <StatCard icon={<Brain />} label="Thinkers Mastered" value="5" color="text-emerald-600" />
                <StatCard icon={<Heart />} label="EI Score" value="High" color="text-rose-600" />
                <StatCard icon={<Gavel />} label="Definitions" value="45+" color="text-amber-600" />
            </div>

            {/* View Toggle */}
            <div className="flex justify-center border-b border-border pb-1">
                <div className="flex gap-4">
                    <button
                        onClick={() => setViewMode('theory')}
                        className={`px-6 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'theory' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                    >
                        <Brain className="w-4 h-4" /> Core Theory
                    </button>
                    <button
                        onClick={() => setViewMode('case-studies')}
                        className={`px-6 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'case-studies' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                    >
                        <Scale className="w-4 h-4" /> Case Study Lab
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            {viewMode === 'theory' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                    {ETHICS_SYLLABUS.filter(m => m.category !== 'Applied').map((topic) => (
                        <div key={topic.id} className="group bg-card dark:bg-[#111] rounded-2xl border border-border p-6 hover:border-indigo-300 transition-all hover:shadow-md">
                            <div className="pb-3">
                                <div className="flex justify-between items-start">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-muted text-muted-foreground`}>
                                        {topic.category}
                                    </span>
                                    <span className="text-xs font-mono text-muted-foreground">{topic.days} Days</span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-600 transition-colors mt-2">
                                    {topic.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                    {topic.description}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-border mt-4">
                                <ul className="space-y-2 mb-6">
                                    {topic.subtopics.map((sub, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                            <span className="truncate">{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/student/batch1/ethics/${topic.id}`}>
                                    <button className="w-full py-2 bg-muted dark:bg-[#0a0a0a] hover:bg-muted dark:hover:bg-gray-800 text-muted-foreground dark:text-muted-foreground rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        Read Notes <ChevronRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted dark:bg-[#111] rounded-3xl border border-border animate-in zoom-in-95 duration-300">
                    <div className="max-w-md mx-auto">
                        <Scale className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-foreground mb-2">Internal Case Study Simulator</h2>
                        <p className="text-muted-foreground mb-8">
                            Detailed automated case study evaluation system coming in Batch 1.7 update.
                            Currently initializing modules...
                        </p>
                        <Link href="/student/batch1/ethics/case-studies">
                            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/30">
                                Enter Manual Mode
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
    return (
        <div className="bg-card dark:bg-[#111] p-5 rounded-2xl border border-border flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-muted dark:bg-[#1a1a1a] ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{label}</p>
            </div>
        </div>
    );
}
