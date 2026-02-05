"use client";

import React from 'react';
import { Activity, ArrowRight, Brain, CheckCircle, Lock, Shield, Zap } from 'lucide-react';
import PolityGapHeatmap from './PolityGapHeatmap';

import { GapAnalysisEntry } from '@/services/upscSynapseService';

interface ResultDashboardProps {
    score: number;
    stressIndex?: number; // 0-10 scale
    accuracy?: number;
    gapData?: GapAnalysisEntry[]; // NEW: Gap Data Prop
    onUnlockLevel2?: () => void;
    onRetakeAudit?: () => void;
    onStartAudit?: (chapterId: number) => void;
}

export default function PolityResultDashboard({
    score = 72,
    stressIndex = 6.5,
    accuracy = 65,
    gapData = [],
    onUnlockLevel2,
    onRetakeAudit,
    onStartAudit
}: ResultDashboardProps) {

    const isLevel1Passed = accuracy > 80;
    const isHighStress = stressIndex > 5;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* HERO STATS HEADER */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                        {isLevel1Passed ? "Foundation Mastery Achieved! 🏆" : "Foundation Gaps Detected ⚠️"}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {isLevel1Passed
                            ? "You are ready for Logic & Application."
                            : "Your book reading has memory leaks. Check the Heatmap below."}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Rank</span>
                        <span className="text-2xl font-black text-blue-600">Top 12%</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">XP Earned</span>
                        <span className="text-2xl font-black text-amber-500">+450 XP</span>
                    </div>
                </div>
            </div>

            {/* ZONE 1: COGNITIVE HEATMAP */}
            <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden mb-12">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 flex items-center justify-between">
                    <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Brain className="w-5 h-5 text-blue-500" />
                        Zone 1: The Cognitive Heatmap
                    </h2>
                    <span className="text-xs font-bold text-gray-400 uppercase">Interactive Gap Analysis</span>
                </div>
                <PolityGapHeatmap gapData={gapData} onStartAudit={onStartAudit} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                {/* ZONE 2: STRESS & BEHAVIOR REPORT */}
                <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-24 bg-red-50 dark:bg-red-900/10 rounded-bl-[150px] -z-0" />

                    <div className="relative z-10">
                        <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                            <Activity className={`w-5 h-5 ${isHighStress ? 'text-red-500' : 'text-green-500'}`} />
                            Zone 2: Behavioral Stress Index
                        </h2>

                        <div className="flex items-center gap-6 mb-6">
                            <div className={`text-5xl font-black ${isHighStress ? 'text-red-500' : 'text-green-500'}`}>
                                {stressIndex}/10
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                    {isHighStress ? "Exam Anxiety Detected" : "Calm & Focused"}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {isHighStress
                                        ? "You rushed 40% of questions in the last 5 mins. This drops recall by 30%."
                                        : "Your pacing is optimal (avg 45s/question). Keep this up!"}
                                </p>
                            </div>
                        </div>

                        {isHighStress && (
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-100 dark:border-red-900/50">
                                <h4 className="font-bold text-red-800 dark:text-red-300 text-sm mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 fill-current" /> Recommended Action
                                </h4>
                                <button className="w-full bg-white dark:bg-black text-red-600 font-bold py-3 rounded-lg shadow-sm hover:shadow hover:scale-[1.02] transition-all text-sm">
                                    Start 3-Min Reset Graphotherapy
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* ZONE 3: THE UPSELL FUNNEL */}
                <div className={`rounded-3xl border shadow-xl p-8 relative overflow-hidden flex flex-col justify-center ${isLevel1Passed
                    ? 'bg-gradient-to-br from-indigo-900 to-blue-900 text-white border-blue-800'
                    : 'bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800'
                    }`}>
                    <div className="relative z-10">
                        <h2 className="font-bold flex items-center gap-2 mb-4 opacity-90">
                            <Shield className="w-5 h-5" />
                            Zone 3: The Path Forward
                        </h2>

                        {isLevel1Passed ? (
                            <>
                                <h3 className="text-2xl font-black mb-3">
                                    You have conquered the Book! 📖
                                </h3>
                                <p className="text-blue-100 mb-8 max-w-sm">
                                    Your facts are solid. But can you handle multi-statement logic traps?
                                    <strong> 90% of students fail Level 2.</strong>
                                </p>
                                <button
                                    onClick={onUnlockLevel2}
                                    className="w-full bg-white text-blue-900 font-black py-4 rounded-xl shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-lg"
                                >
                                    <Brain className="w-5 h-5" />
                                    Unlock Level 2: Logic Masterclass (₹499)
                                </button>
                            </>
                        ) : (
                            <>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                                    Don't waste money on Level 2 yet. 🛑
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
                                    You have <strong>4 Critical Knowledge Gaps</strong> in Fundamental Rights.
                                    Fix them for free before advancing.
                                </p>
                                <button
                                    onClick={onRetakeAudit}
                                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Re-Audit Weak Chapters (Free)
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
