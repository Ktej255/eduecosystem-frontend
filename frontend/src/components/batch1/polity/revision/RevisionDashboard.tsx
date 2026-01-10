"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
    BookOpen,
    Target,
    Trophy,
    Flame,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    Clock,
    Layers,
    Sparkles,
    BarChart3,
    Zap,
    Brain,
    Filter,
    Play,
    Settings
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';
import {
    getAllProgress,
    getStreak,
    updateStreak,
    RevisionProgress,
    StudyStreak
} from './progress-utils';


export default function RevisionDashboard() {
    const [progress, setProgress] = useState<Record<number, RevisionProgress>>({});
    const [streak, setStreak] = useState<StudyStreak>({ currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 });
    const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
    const [filterMode, setFilterMode] = useState<'all' | 'incomplete' | 'mastered'>('all');
    const [showCustomSession, setShowCustomSession] = useState(false);

    // Load data on mount
    useEffect(() => {
        setProgress(getAllProgress());
        setStreak(getStreak());
    }, []);

    // Stats
    const stats = useMemo(() => {
        const totalChapters = POLITY_REVISION_CHAPTERS.length;
        const masteredChapters = Object.values(progress).filter(p => p.mastered).length;
        const inProgressChapters = Object.values(progress).filter(p => !p.mastered && (p.flashcardsCompleted > 0 || p.mcqsCompleted > 0)).length;
        const totalFlashcards = POLITY_REVISION_CHAPTERS.reduce((sum, ch) => sum + (ch.flashcards?.length || 0), 0);
        const completedFlashcards = Object.values(progress).reduce((sum, p) => sum + p.flashcardsCompleted, 0);
        const totalMcqs = POLITY_REVISION_CHAPTERS.reduce((sum, ch) => sum + (ch.mcqs?.length || 0), 0);
        const completedMcqs = Object.values(progress).reduce((sum, p) => sum + p.mcqsCompleted, 0);

        return {
            totalChapters,
            masteredChapters,
            inProgressChapters,
            notStartedChapters: totalChapters - masteredChapters - inProgressChapters,
            totalFlashcards,
            completedFlashcards,
            totalMcqs,
            completedMcqs,
            overallProgress: Math.round(((completedFlashcards + completedMcqs) / (totalFlashcards + totalMcqs)) * 100) || 0
        };
    }, [progress]);

    // Filtered chapters
    const filteredChapters = useMemo(() => {
        return POLITY_REVISION_CHAPTERS.filter(ch => {
            const p = progress[ch.id];
            if (filterMode === 'mastered') return p?.mastered;
            if (filterMode === 'incomplete') return !p?.mastered;
            return true;
        });
    }, [progress, filterMode]);

    // Toggle chapter selection
    const toggleChapter = (id: number) => {
        setSelectedChapters(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    // Start custom session
    const startCustomSession = () => {
        if (selectedChapters.length === 0) return;
        // Navigate to custom session (will implement the route)
        const chapterIds = selectedChapters.join(',');
        window.location.href = `/student/batch1/polity/revision/custom?chapters=${chapterIds}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] pb-20">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white pt-12 pb-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/student/batch1/polity" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Polity
                    </Link>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-black mb-3 flex items-center gap-3">
                                <Brain className="w-10 h-10" />
                                Revision Hub
                            </h1>
                            <p className="text-xl text-indigo-100 opacity-90">
                                Master 95 Chapters with Smart Revision
                            </p>
                        </div>
                        {/* Streak Badge */}
                        <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="flex items-center gap-2">
                                <Flame className="w-8 h-8 text-orange-400" />
                                <div>
                                    <div className="text-3xl font-black">{streak.currentStreak}</div>
                                    <div className="text-xs text-indigo-200">Day Streak</div>
                                </div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-center">
                                <div className="text-xl font-bold">{streak.totalDaysStudied}</div>
                                <div className="text-xs text-indigo-200">Total Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-6xl mx-auto px-6 -mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="text-sm text-gray-500">Progress</span>
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.overallProgress}%</div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                                style={{ width: `${stats.overallProgress}%` }}
                            />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="text-sm text-gray-500">Mastered</span>
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.masteredChapters}</div>
                        <div className="text-xs text-gray-500">of {stats.totalChapters} chapters</div>
                    </div>

                    <div className="bg-white dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-amber-600" />
                            </div>
                            <span className="text-sm text-gray-500">Flashcards</span>
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.completedFlashcards}</div>
                        <div className="text-xs text-gray-500">of {stats.totalFlashcards} completed</div>
                    </div>

                    <div className="bg-white dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <Target className="w-5 h-5 text-purple-600" />
                            </div>
                            <span className="text-sm text-gray-500">MCQs</span>
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.completedMcqs}</div>
                        <div className="text-xs text-gray-500">of {stats.totalMcqs} attempted</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-6xl mx-auto px-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link
                        href="/student/batch1/polity/revision/srs"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Brain className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg">Smart Review</div>
                            <div className="text-sm text-purple-200">SRS Algorithm</div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-auto" />
                    </Link>

                    <button
                        onClick={() => setShowCustomSession(!showCustomSession)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg">Custom Session</div>
                            <div className="text-sm text-indigo-200">Pick chapters to revise</div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-auto" />
                    </button>

                    <Link
                        href="/student/batch1/polity/revision/quick"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg">Quick Revision</div>
                            <div className="text-sm text-amber-200">Rapid-fire flashcards</div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-auto" />
                    </Link>

                    <Link
                        href="/student/batch1/polity/revision/facts"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg">Facts Master-Sheet</div>
                            <div className="text-sm text-emerald-200">Key dates, persons, acts</div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-auto" />
                    </Link>
                </div>
            </div>

            {/* Custom Session Panel */}
            {showCustomSession && (
                <div className="max-w-6xl mx-auto px-6 mt-6">
                    <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Select Chapters for Custom Session</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">{selectedChapters.length} selected</span>
                                {selectedChapters.length > 0 && (
                                    <button
                                        onClick={startCustomSession}
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                                    >
                                        <Play className="w-4 h-4" />
                                        Start Session
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-64 overflow-y-auto">
                            {POLITY_REVISION_CHAPTERS.map(ch => (
                                <button
                                    key={ch.id}
                                    onClick={() => toggleChapter(ch.id)}
                                    className={`p-3 rounded-xl text-left transition-all text-sm ${selectedChapters.includes(ch.id)
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-50 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]'
                                        }`}
                                >
                                    <div className="font-bold">Ch {ch.id}</div>
                                    <div className="text-xs truncate opacity-80">{ch.title}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Bar */}
            <div className="max-w-6xl mx-auto px-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">All Chapters</h2>
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-500" />
                        <select
                            value={filterMode}
                            onChange={(e) => setFilterMode(e.target.value as any)}
                            className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-sm"
                        >
                            <option value="all">All Chapters</option>
                            <option value="incomplete">In Progress</option>
                            <option value="mastered">Mastered</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Chapter Grid */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredChapters.map((ch) => {
                        const p = progress[ch.id];
                        const flashcardPct = p ? Math.round((p.flashcardsCompleted / p.flashcardsTotal) * 100) : 0;
                        const mcqPct = p ? Math.round((p.mcqsCompleted / p.mcqsTotal) * 100) : 0;

                        return (
                            <Link
                                key={ch.id}
                                href={`/student/batch1/polity/revision/${ch.id}`}
                                className="bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="text-xs font-bold text-indigo-600 mb-1">Chapter {ch.id}</div>
                                        <div className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                            {ch.title}
                                        </div>
                                    </div>
                                    {p?.mastered && (
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <Trophy className="w-4 h-4 text-emerald-600" />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <div className="flex items-center justify-between text-xs mb-1">
                                            <span className="text-gray-500">Flashcards</span>
                                            <span className="font-medium">{flashcardPct}%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-amber-500 rounded-full transition-all"
                                                style={{ width: `${flashcardPct}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-xs mb-1">
                                            <span className="text-gray-500">MCQs</span>
                                            <span className="font-medium">{mcqPct}%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-purple-500 rounded-full transition-all"
                                                style={{ width: `${mcqPct}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {p?.lastRevisedAt && (
                                    <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                                        <Clock className="w-3 h-3" />
                                        Last: {new Date(p.lastRevisedAt).toLocaleDateString()}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
