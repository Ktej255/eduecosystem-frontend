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
    Settings,
    TrendingDown,
    Mic
} from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';
import {
    getAllProgress,
    getStreak,
    updateStreak,
    RevisionProgress,
    StudyStreak
} from './progress-utils';
import RevisionCalendar from './RevisionCalendar';
import CurrentAffairsDashboard from './CurrentAffairsDashboard';


export default function RevisionDashboard() {
    const [progress, setProgress] = useState<Record<string | number, RevisionProgress>>({});
    const [streak, setStreak] = useState<StudyStreak>({ currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 });
    const [selectedChapters, setSelectedChapters] = useState<(string | number)[]>([]);
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
    const toggleChapter = (id: string | number) => {
        setSelectedChapters(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    // Start custom session
    const startCustomSession = () => {
        if (selectedChapters.length === 0) return;
        // Navigate to custom session (will implement the route)
        const chapterIds = selectedChapters.join(',');
        window.location.href = `/student/upsc/polity/revision/custom?chapters=${chapterIds}`;
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] pb-20">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white pt-12 pb-48 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/student/upsc/polity" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors mb-8 text-sm font-medium">
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
                        <div className="hidden md:flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="flex items-center gap-2">
                                <Flame className="w-8 h-8 text-orange-400" />
                                <div>
                                    <div className="text-3xl font-black">{streak.currentStreak}</div>
                                    <div className="text-xs text-indigo-200">Day Streak</div>
                                </div>
                            </div>
                            <div className="h-12 w-px bg-card/20" />
                            <div className="text-center">
                                <div className="text-xl font-bold">{streak.totalDaysStudied}</div>
                                <div className="text-xs text-indigo-200">Total Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
                <Tabs defaultValue="syllabus" className="space-y-8">
                    <TabsList className="bg-card/90 backdrop-blur-md dark:bg-[#111]/90 p-1 rounded-2xl border border-white/20 shadow-xl w-full md:w-auto inline-flex h-auto">
                        <TabsTrigger
                            value="syllabus"
                            className="px-6 py-3 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all"
                        >
                            Detailed Syllabus ({stats.totalChapters} Topics)
                        </TabsTrigger>
                        <TabsTrigger
                            value="planner"
                            className="px-6 py-3 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2"
                        >
                            Study Planner & Schedule
                            <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">NEW</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="current-affairs"
                            className="px-6 py-3 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2"
                        >
                            <Flame className="w-4 h-4" /> Current Affairs
                        </TabsTrigger>
                        <TabsTrigger
                            value="mains"
                            className="px-6 py-3 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2"
                        >
                            <Settings className="w-4 h-4" /> Mains Practice
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="syllabus" className="space-y-6 focus:outline-none">
                        {/* 11.1 Daily Drill CTA */}
                        <div className="bg-card dark:bg-[#111] rounded-3xl p-1 shadow-xl border border-indigo-100 dark:border-indigo-900/30">
                            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-[22px] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                                <div className="absolute right-0 top-0 w-64 h-64 bg-card/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-16 h-16 bg-card/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-yellow-300" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black mb-1">Morning Vitamin Drill</h2>
                                        <p className="text-indigo-100">5 SRS Cards • 3 Facts • 2 Fast MCQs</p>
                                    </div>
                                </div>

                                <Link
                                    href="/student/upsc/polity/revision/drill"
                                    className="bg-card text-indigo-600 px-8 py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-transform flex items-center gap-2 relative z-10"
                                >
                                    <Play className="w-5 h-5 fill-indigo-600" /> Start Daily Drill
                                </Link>
                            </div>
                        </div>

                        {/* Stats & Quick Actions Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left: Progression Stats */}
                            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                                <div className="bg-card dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">Progress</span>
                                    </div>
                                    <div className="text-3xl font-black text-foreground">{stats.overallProgress}%</div>
                                    <div className="h-2 bg-muted rounded-full mt-2 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                                            style={{ width: `${stats.overallProgress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="bg-card dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">Mastered</span>
                                    </div>
                                    <div className="text-3xl font-black text-foreground">{stats.masteredChapters}</div>
                                    <div className="text-xs text-muted-foreground">of {stats.totalChapters} chapters</div>
                                </div>

                                <div className="bg-card dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">Flashcards</span>
                                    </div>
                                    <div className="text-3xl font-black text-foreground">{stats.completedFlashcards}</div>
                                    <div className="text-xs text-muted-foreground">of {stats.totalFlashcards} completed</div>
                                </div>

                                <div className="bg-card dark:bg-[#111] rounded-2xl p-5 shadow-lg border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">MCQs</span>
                                    </div>
                                    <div className="text-3xl font-black text-foreground">{stats.completedMcqs}</div>
                                    <div className="text-xs text-muted-foreground">of {stats.totalMcqs} attempted</div>
                                </div>
                            </div>

                            {/* Right: Quick Actions within Syllabus */}
                            <div className="space-y-4">
                                <Link
                                    href="/student/upsc/polity/revision/srs"
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group h-full"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-card/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-lg">Smart Review</div>
                                        <div className="text-sm text-purple-200">SRS Algorithm</div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 ml-auto" />
                                </Link>

                                <Link
                                    href="/student/upsc/polity/revision/weak"
                                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-card/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <TrendingDown className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-lg">Weak Topics</div>
                                        <div className="text-sm text-red-200">Focus on difficulties</div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 ml-auto" />
                                </Link>
                            </div>
                        </div>

                        {/* Custom Session Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowCustomSession(!showCustomSession)}
                                className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-100 transition-colors flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4" />
                                {showCustomSession ? 'Hide Custom Session' : 'Create Custom Session'}
                            </button>
                        </div>

                        {/* Custom Session Panel */}
                        {
                            showCustomSession && (
                                <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 shadow-lg animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold">Select Chapters for Custom Session</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">{selectedChapters.length} selected</span>
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
                                                    : 'bg-muted dark:bg-[#0a0a0a] text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-[#1a1a1a]'
                                                    }`}
                                            >
                                                <div className="font-bold">Ch {ch.id}</div>
                                                <div className="text-xs truncate opacity-80">{ch.title}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        {/* Filter Bar */}
                        <div className="flex items-center justify-between mt-8 mb-4">
                            <h2 className="text-xl font-bold text-foreground">All Chapters</h2>
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-muted-foreground" />
                                <select
                                    value={filterMode}
                                    onChange={(e) => setFilterMode(e.target.value as any)}
                                    className="bg-card dark:bg-[#111] border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">All Chapters</option>
                                    <option value="incomplete">In Progress</option>
                                    <option value="mastered">Mastered</option>
                                </select>
                            </div>
                        </div>

                        {/* Chapter Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredChapters.map((ch) => {
                                const p = progress[ch.id];
                                const flashcardPct = p ? Math.round((p.flashcardsCompleted / p.flashcardsTotal) * 100) : 0;
                                const mcqPct = p ? Math.round((p.mcqsCompleted / p.mcqsTotal) * 100) : 0;

                                return (
                                    <Link
                                        key={ch.id}
                                        href={`/student/upsc/polity/revision/${ch.id}`}
                                        className="bg-card dark:bg-[#111] rounded-2xl border border-border p-5 hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <div className="text-xs font-bold text-indigo-600 mb-1">Chapter {ch.id}</div>
                                                <div className="font-bold text-foreground group-hover:text-indigo-600 transition-colors line-clamp-1">
                                                    {ch.title}
                                                </div>
                                            </div>
                                            {p?.mastered && (
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                                                    <Trophy className="w-4 h-4 text-emerald-600" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <div>
                                                <div className="flex items-center justify-between text-xs mb-1">
                                                    <span className="text-muted-foreground">Flashcards</span>
                                                    <span className="font-medium">{flashcardPct}%</span>
                                                </div>
                                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-500 rounded-full transition-all"
                                                        style={{ width: `${flashcardPct}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-xs mb-1">
                                                    <span className="text-muted-foreground">MCQs</span>
                                                    <span className="font-medium">{mcqPct}%</span>
                                                </div>
                                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-purple-500 rounded-full transition-all"
                                                        style={{ width: `${mcqPct}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {p?.lastRevisedAt && (
                                            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                Last: {new Date(p.lastRevisedAt).toLocaleDateString()}
                                            </div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </TabsContent>

                    <TabsContent value="planner" className="focus:outline-none animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Study Planner & Schedule</h2>
                            <RevisionCalendar />
                        </div>
                    </TabsContent>

                    <TabsContent value="current-affairs" className="focus:outline-none animate-in fade-in slide-in-from-bottom-4">
                        <CurrentAffairsDashboard />
                    </TabsContent>

                    <TabsContent value="mains" className="focus:outline-none animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-12 text-center shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Settings className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Mains Answer Writing</h2>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Practice daily answer writing for Indian Polity. AI-evaluated feedback coming soon.
                            </p>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                Start Practice Session
                            </button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div >
    );
}
