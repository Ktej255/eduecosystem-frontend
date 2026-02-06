"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Play, CheckCircle } from 'lucide-react';
import { MODERN_CHAPTER_1_MCQS, MODERN_CHAPTER_1_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter1';
import { MODERN_CHAPTER_2_MCQS, MODERN_CHAPTER_2_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter2';
import { MODERN_CHAPTER_3_MCQS, MODERN_CHAPTER_3_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter3';
import { MODERN_CHAPTER_4_MCQS, MODERN_CHAPTER_4_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter4';
import { MODERN_CHAPTER_5_MCQS, MODERN_CHAPTER_5_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter5';
import { MODERN_CHAPTER_6_MCQS, MODERN_CHAPTER_6_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter6';
import { MODERN_CHAPTER_7_MCQS, MODERN_CHAPTER_7_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter7';
import { MODERN_CHAPTER_8_MCQS, MODERN_CHAPTER_8_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter8';
import { MODERN_CHAPTER_9_MCQS, MODERN_CHAPTER_9_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter9';
import { MODERN_CHAPTER_10_MCQS, MODERN_CHAPTER_10_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter10';
import { MODERN_CHAPTER_11_MCQS, MODERN_CHAPTER_11_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter11';
import { MODERN_CHAPTER_12_MCQS, MODERN_CHAPTER_12_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter12';
import { MODERN_CHAPTER_13_MCQS, MODERN_CHAPTER_13_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter13';
import { MODERN_CHAPTER_14_MCQS, MODERN_CHAPTER_14_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter14';
import { MODERN_CHAPTER_15_MCQS, MODERN_CHAPTER_15_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter15';
import { MODERN_CHAPTER_16_MCQS, MODERN_CHAPTER_16_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter16';
import { MODERN_CHAPTER_17_MCQS, MODERN_CHAPTER_17_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter17';
import { MODERN_CHAPTER_18_MCQS, MODERN_CHAPTER_18_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter18';
import { MODERN_CHAPTER_19_MCQS, MODERN_CHAPTER_19_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter19';
import { MODERN_CHAPTER_20_MCQS, MODERN_CHAPTER_20_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter20';
import { MODERN_CHAPTER_21_MCQS, MODERN_CHAPTER_21_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter21';
import { MODERN_CHAPTER_22_MCQS, MODERN_CHAPTER_22_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter22';
import { MODERN_CHAPTER_23_MCQS, MODERN_CHAPTER_23_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter23';
import { MODERN_CHAPTER_24_MCQS, MODERN_CHAPTER_24_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter24';
import { MODERN_CHAPTER_25_MCQS, MODERN_CHAPTER_25_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter25';
import { MODERN_CHAPTER_26_MCQS, MODERN_CHAPTER_26_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter26';
import { MODERN_CHAPTER_27_MCQS, MODERN_CHAPTER_27_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter27';
import { MODERN_CHAPTER_28_MCQS, MODERN_CHAPTER_28_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter28';
import { MODERN_CHAPTER_29_MCQS, MODERN_CHAPTER_29_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter29';
import { MODERN_CHAPTER_30_MCQS, MODERN_CHAPTER_30_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter30';
import { MODERN_CHAPTER_31_MCQS, MODERN_CHAPTER_31_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter31';
import { MODERN_CHAPTER_32_MCQS, MODERN_CHAPTER_32_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter32';
import { MODERN_CHAPTER_33_MCQS, MODERN_CHAPTER_33_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter33';
import { MODERN_CHAPTER_34_MCQS, MODERN_CHAPTER_34_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter34';
import { MODERN_CHAPTER_35_MCQS, MODERN_CHAPTER_35_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter35';
import { MODERN_CHAPTER_36_MCQS, MODERN_CHAPTER_36_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter36';
import { MODERN_CHAPTER_37_MCQS, MODERN_CHAPTER_37_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter37';
import { MODERN_CHAPTER_38_MCQS, MODERN_CHAPTER_38_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter38';
import { MODERN_CHAPTER_39_MCQS, MODERN_CHAPTER_39_SUBTOPICS } from '@/components/batch1/history/data/modern/chapter39';

export default function UPSCHistoryStorePage() {
    const router = useRouter();
    const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white pb-24">
            {/* Header */}
            <div className="bg-indigo-900 text-white pt-12 pb-16 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <button
                        onClick={() => router.back()}
                        className="mb-8 flex items-center gap-2 text-indigo-200 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Store
                    </button>
                    <h1 className="text-4xl font-black mb-4">Modern History (Spectrum)</h1>
                    <p className="text-indigo-200 text-xl max-w-2xl">
                        Chapter-wise Mock Tests & Logic Modules.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
                <div className="bg-white dark:bg-black rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">Chapter List</h2>

                    <div className="space-y-4">
                        {/* Chapter 1 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-indigo-50/50 dark:bg-indigo-900/10 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 1: Sources for the History of Modern India
                                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Free Trial</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_1_MCQS.length} MCQs • {MODERN_CHAPTER_1_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=1')}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:scale-105 transition-transform"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>

                            {/* Preview of Subtopics */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_1_SUBTOPICS.map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                                        {sub.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Chapter 2 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 2: Major Approaches to History
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_2_MCQS.length} MCQs • {MODERN_CHAPTER_2_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=2')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_2_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+4 more</span>
                            </div>
                        </div>

                        {/* Chapter 3 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 3: Advent of Europeans
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_3_MCQS.length} MCQs • {MODERN_CHAPTER_3_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=3')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_3_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+2 more</span>
                            </div>
                        </div>

                        {/* Chapter 4 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 4: Eve of British Conquest
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_4_MCQS.length} MCQs • {MODERN_CHAPTER_4_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=4')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_4_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_4_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 5 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 5: Expansion of British Power
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_5_MCQS.length} MCQs • {MODERN_CHAPTER_5_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=5')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_5_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_5_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 6 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 6: Civil Uprisings
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_6_MCQS.length} MCQs • {MODERN_CHAPTER_6_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=6')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_6_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_6_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 7 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 7: Revolt of 1857
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_7_MCQS.length} MCQs • {MODERN_CHAPTER_7_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=7')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_7_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_7_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 8 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 8: Socio-Religious Reform
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_8_MCQS.length} MCQs • {MODERN_CHAPTER_8_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=8')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_8_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_8_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 9 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 9: Caste & Cultural Reform
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_9_MCQS.length} MCQs • {MODERN_CHAPTER_9_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=9')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_9_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_9_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 10 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 10: Modern Nationalism
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_10_MCQS.length} MCQs • {MODERN_CHAPTER_10_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=10')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_10_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_10_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 11 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 11: INC Foundation
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_11_MCQS.length} MCQs • {MODERN_CHAPTER_11_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=11')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_11_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_11_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 12 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 12: Militant Nationalism
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_12_MCQS.length} MCQs • {MODERN_CHAPTER_12_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=12')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_12_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_12_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 13 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 13: Revolutionary Activities
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_13_MCQS.length} MCQs • {MODERN_CHAPTER_13_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=13')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_13_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_13_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 14 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 14: WWI & Home Rule
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_14_MCQS.length} MCQs • {MODERN_CHAPTER_14_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=14')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_14_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_14_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 15 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 15: Emergence of Gandhi
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_15_MCQS.length} MCQs • {MODERN_CHAPTER_15_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=15')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_15_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_15_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 16 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 16: Non-Cooperation
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_16_MCQS.length} MCQs • {MODERN_CHAPTER_16_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=16')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_16_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_16_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 17 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 17: Swarajists & Phase II
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_17_MCQS.length} MCQs • {MODERN_CHAPTER_17_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=17')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_17_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_17_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 18 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 18: Simon to CDM
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_18_MCQS.length} MCQs • {MODERN_CHAPTER_18_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=18')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_18_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_18_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 19 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 19: Post-CDM & Congress Ministries
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_19_MCQS.length} MCQs • {MODERN_CHAPTER_19_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=19')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_19_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_19_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 20 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 20: History During WWII
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_20_MCQS.length} MCQs • {MODERN_CHAPTER_20_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=20')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_20_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_20_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 21 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 21: Independence with Partition
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_21_MCQS.length} MCQs • {MODERN_CHAPTER_21_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=21')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_21_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_21_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 22 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 22: Constitutional & Administrative Developments
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_22_MCQS.length} MCQs • {MODERN_CHAPTER_22_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=22')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_22_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_22_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 23 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 23: Press and Education
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_23_MCQS.length} MCQs • {MODERN_CHAPTER_23_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=23')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_23_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_23_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 24 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 24: Peasant Movements
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_24_MCQS.length} MCQs • {MODERN_CHAPTER_24_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=24')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_24_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_24_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 25 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 25: Working Class Movements
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_25_MCQS.length} MCQs • {MODERN_CHAPTER_25_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=25')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_25_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_25_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 26 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 26: Indian States
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_26_MCQS.length} MCQs • {MODERN_CHAPTER_26_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=26')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_26_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_26_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 27 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 27: Survey of British Policies
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_27_MCQS.length} MCQs • {MODERN_CHAPTER_27_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=27')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_27_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_27_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 28 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 28: Economic Impact of British Rule
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_28_MCQS.length} MCQs • {MODERN_CHAPTER_28_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=28')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_28_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_28_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 29 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 29: Development of Indian Press
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_29_MCQS.length} MCQs • {MODERN_CHAPTER_29_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=29')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_29_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_29_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 30 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 30: Development of Education
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_30_MCQS.length} MCQs • {MODERN_CHAPTER_30_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=30')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_30_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_30_SUBTOPICS.length - 4)} more</span>
                            </div>
                        </div>

                        {/* Chapter 31 Card */}
                        <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                        Chapter 31: Peasant Movements
                                        <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {MODERN_CHAPTER_31_MCQS.length} MCQs • {MODERN_CHAPTER_31_SUBTOPICS.length} Subtopics
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=31')}
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                >
                                    <Play className="w-4 h-4" /> Start Mock
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {MODERN_CHAPTER_31_SUBTOPICS.slice(0, 4).map(sub => (
                                    <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                        {sub.name}
                                    </span>
                                ))}
                                <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_31_SUBTOPICS.length - 4)} more</span>
                            </div>
                            {/* Chapter 32 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 32: Working Class Movements
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_32_MCQS.length} MCQs • {MODERN_CHAPTER_32_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=32')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_32_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_32_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 33 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 33: Challenges of a New Nation
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_33_MCQS.length} MCQs • {MODERN_CHAPTER_33_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=33')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_33_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_33_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 34 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 34: The Indian State
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_34_MCQS.length} MCQs • {MODERN_CHAPTER_34_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=34')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_34_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_34_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 35 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 35: Making of the Constitution
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_35_MCQS.length} MCQs • {MODERN_CHAPTER_35_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=35')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_35_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_35_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 36 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 36: Nationalist Foreign Policy
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_36_MCQS.length} MCQs • {MODERN_CHAPTER_36_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=36')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_36_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_36_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 37 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 37: First General Elections
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_37_MCQS.length} MCQs • {MODERN_CHAPTER_37_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=37')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_37_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_37_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 38 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 38: Nehru Years (1947-64)
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_38_MCQS.length} MCQs • {MODERN_CHAPTER_38_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=38')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_38_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_38_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                            {/* Chapter 39 Card */}
                            <div className="border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 bg-white dark:bg-neutral-900 hover:border-indigo-500 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-900 dark:text-white flex items-center gap-2">
                                            Chapter 39: Shastri Years (1964-66)
                                            <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">New</span>
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                            {MODERN_CHAPTER_39_MCQS.length} MCQs • {MODERN_CHAPTER_39_SUBTOPICS.length} Subtopics
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => router.push('/student/batch1/history/pomodoro?mode=study&subject=Modern&day=39')}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                                    >
                                        <Play className="w-4 h-4" /> Start Mock
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {MODERN_CHAPTER_39_SUBTOPICS.slice(0, 4).map(sub => (
                                        <span key={sub.id} className="text-xs border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                            {sub.name}
                                        </span>
                                    ))}
                                    <span className="text-xs text-neutral-400 flex items-center">+{Math.max(0, MODERN_CHAPTER_39_SUBTOPICS.length - 4)} more</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
