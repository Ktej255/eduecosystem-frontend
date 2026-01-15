"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    BookOpen,
    Layers,
    ChevronRight,
    ChevronLeft,
    Target,
    TrendingUp,
    Layout,
    User,
    ShieldCheck,
    Sparkles,
    BrainCircuit,
    FileText,
    CheckCircle
} from 'lucide-react';
import { generateWeeklySchedule, WeeklySchedule, LAXMIKANTH_CHAPTERS } from './data/polity-schedule-data';
import { CHAPTER_SUBTOPICS } from './data/polity-subtopics';
import { getModuleById, getModuleColors } from './data/polity-types';

export default function PolityScheduleView({ isAdmin = false }: { isAdmin?: boolean }) {
    const weeklyData = useMemo(() => generateWeeklySchedule(), []);
    const [selectedWeek, setSelectedWeek] = useState(0); // 0-indexed for state
    const [viewMode, setViewMode] = useState<'student' | 'master'>(isAdmin ? 'master' : 'student');
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [completedSubTopics, setCompletedSubTopics] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem('polity_completed_subtopics');
        return saved ? JSON.parse(saved) : {};
    });

    const toggleSubTopic = (subId: string) => {
        const newState = { ...completedSubTopics, [subId]: !completedSubTopics[subId] };
        setCompletedSubTopics(newState);
        localStorage.setItem('polity_completed_subtopics', JSON.stringify(newState));
    };

    // Initialize completion and week
    useEffect(() => {
        const stored = localStorage.getItem('completed_polity_chapters');
        if (stored) setCompletedChapters(JSON.parse(stored));

        if (!isAdmin) {
            // BATCH 1.1 START DATE: January 12, 2026 (Monday)
            // Force this date for all students to ensure consistency
            const BATCH_START_DATE = '2026-01-12T00:00:00';
            const CALENDAR_VERSION = 'v2'; // Increment this to force reset for all users

            const storedVersion = localStorage.getItem('polity_calendar_version');
            let startDate: Date;

            if (storedVersion !== CALENDAR_VERSION) {
                // New version - reset to correct date
                startDate = new Date(BATCH_START_DATE);
                localStorage.setItem('polity_start_calendar_date', startDate.toISOString());
                localStorage.setItem('polity_calendar_version', CALENDAR_VERSION);
            } else {
                const startDateStr = localStorage.getItem('polity_start_calendar_date');
                startDate = startDateStr ? new Date(startDateStr) : new Date(BATCH_START_DATE);
            }

            const diffTime = (new Date().getTime() - startDate.getTime());
            const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
            const calculatedWeek = Math.floor(diffDays / 7);

            setSelectedWeek(Math.min(calculatedWeek, weeklyData.length - 1));
        }
    }, [isAdmin, weeklyData.length]);

    const toggleCompletion = (chapterId: number) => {
        const newSet = completedChapters.includes(chapterId)
            ? completedChapters.filter(id => id !== chapterId)
            : [...completedChapters, chapterId];
        setCompletedChapters(newSet);
        localStorage.setItem('completed_polity_chapters', JSON.stringify(newSet));
    };

    const currentWeek: WeeklySchedule = weeklyData[selectedWeek] || weeklyData[0];

    // Total Stats
    const totalChapters = LAXMIKANTH_CHAPTERS.length;
    const totalPages = LAXMIKANTH_CHAPTERS.reduce((sum, ch) => sum + ch.pages, 0);
    const progressPercent = Math.round((completedChapters.length / totalChapters) * 100);

    const days: (keyof typeof currentWeek.days)[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const weekStartDates = useMemo(() => {
        const startDateStr = localStorage.getItem('polity_start_calendar_date');
        const baseDate = startDateStr ? new Date(startDateStr) : new Date('2026-01-12T00:00:00');
        const weekStart = new Date(baseDate);
        weekStart.setDate(baseDate.getDate() + (selectedWeek * 7));
        return weekStart;
    }, [selectedWeek]);

    return (
        <div className="space-y-8 pb-20">
            {/* Header / Config */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white dark:bg-[#111] p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-7 h-7 text-blue-600" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Polity Study Planner
                        </h2>
                        {progressPercent > 0 && (
                            <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold border border-green-200 dark:border-green-800 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> {progressPercent}% Done
                            </div>
                        )}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                        Synced with 95 Chapters • Target: 6 Hours (6 Pomodoros) / Day
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {isAdmin && (
                        <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            <button
                                onClick={() => setViewMode('student')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'student' ? 'bg-white dark:bg-[#222] text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <User className="w-4 h-4" /> Student
                            </button>
                            <button
                                onClick={() => setViewMode('master')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'master' ? 'bg-white dark:bg-[#222] text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <ShieldCheck className="w-4 h-4" /> Master View
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-2xl">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl">{currentWeek.totalSlots}</div>
                    <div className="text-xs text-blue-800 dark:text-blue-300 font-medium">Week {currentWeek.week} Slots</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-100 dark:border-purple-900/30 p-4 rounded-2xl">
                    <div className="text-purple-600 dark:text-purple-400 font-bold text-2xl">{currentWeek.totalPages}</div>
                    <div className="text-xs text-purple-800 dark:text-purple-300 font-medium">Target Pages</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/30 p-4 rounded-2xl">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-2xl">{currentWeek.totalSlots} h</div>
                    <div className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Estimated Time</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border border-amber-100 dark:border-amber-900/30 p-4 rounded-2xl">
                    <div className="text-amber-600 dark:text-amber-400 font-bold text-2xl">{Math.round((currentWeek.week / weeklyData.length) * 100)}%</div>
                    <div className="text-xs text-amber-800 dark:text-amber-300 font-medium">Syllabus Completion</div>
                </div>
            </div>

            {/* Week Selection / Navigation */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setSelectedWeek(prev => Math.max(0, prev - 1))}
                        disabled={selectedWeek === 0}
                        className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-500 hover:text-blue-600 disabled:opacity-30 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="px-6 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl font-bold border border-blue-100 dark:border-blue-900/30">
                        Week {selectedWeek + 1}
                    </div>
                    <button
                        onClick={() => setSelectedWeek(prev => Math.min(weeklyData.length - 1, prev + 1))}
                        disabled={selectedWeek === weeklyData.length - 1}
                        className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-500 hover:text-blue-600 disabled:opacity-30 transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {viewMode === 'master' && (
                    <div className="hidden md:flex gap-2 overflow-x-auto max-w-[60%] pb-2 scrollbar-hide">
                        {weeklyData.map((w, idx) => (
                            <button
                                key={w.week}
                                onClick={() => setSelectedWeek(idx)}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all text-xs font-bold ${selectedWeek === idx
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                                    : 'bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800 text-gray-500 hover:border-blue-300'
                                    }`}
                            >
                                W{w.week}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Detailed Daily Cards */}
            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedWeek}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                    >
                        {days.map((day, dayIndex) => {
                            const contents = currentWeek.days[day];
                            if (!contents || (Array.isArray(contents) && contents.length === 0)) return null;

                            const isSaturday = day === 'saturday';
                            const isSunday = day === 'sunday';

                            // Calculate specific date for this day card
                            const cardDate = new Date(weekStartDates);
                            cardDate.setDate(weekStartDates.getDate() + dayIndex);

                            const daySlots = Array.isArray(contents) && !isSaturday
                                ? (contents as any[]).reduce((sum, c) => sum + (c.slots || 0), 0)
                                : isSaturday ? 4 : 6;

                            return (
                                <div key={day} className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-3 px-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">{day}</span>
                                            <span className="text-[10px] text-gray-500 font-medium">
                                                {cardDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                            </span>
                                        </div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm ${isSunday ? 'bg-indigo-100 text-indigo-700' :
                                            isSaturday ? 'bg-amber-100 text-amber-700' :
                                                'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                            }`}>
                                            {daySlots} {isSaturday || isSunday ? 'Pomodoros' : 'Slots'}
                                        </span>
                                    </div>

                                    <div className={`flex-1 space-y-3 p-3 rounded-2xl border ${isSunday ? 'bg-indigo-50/30 border-indigo-200 shadow-[0_4px_20px_-4px_rgba(79,70,229,0.1)]' :
                                        isSaturday ? 'bg-amber-50/30 border-amber-200 shadow-[0_4px_20px_-4px_rgba(245,158,11,0.1)]' :
                                            'bg-white dark:bg-[#111] border-gray-100 dark:border-gray-800'
                                        }`}>
                                        {isSaturday ? (
                                            (contents as string[]).map((paper, idx) => (
                                                <div key={idx} className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-center justify-between group hover:border-amber-400 transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                                                            <FileText size={16} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-gray-800 dark:text-white">{paper}</p>
                                                            <p className="text-[10px] text-gray-500">100 MCQs • 2 Hours</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-[10px] font-bold bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 transition-colors shadow-sm">
                                                        START
                                                    </button>
                                                </div>
                                            ))
                                        ) : isSunday ? (
                                            (contents as any[]).map((chapter, idx) => {
                                                const subtopics = CHAPTER_SUBTOPICS[chapter.chapter] || [];
                                                return (
                                                    <div key={idx} className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-indigo-100 dark:border-indigo-900/30 space-y-2">
                                                        <div className="flex items-center justify-between border-b border-indigo-50 dark:border-indigo-900/30 pb-2 mb-2">
                                                            <p className="text-xs font-bold text-indigo-900 dark:text-indigo-300">CH {chapter.chapter}: {chapter.topic}</p>
                                                            <BrainCircuit size={14} className="text-indigo-400" />
                                                        </div>
                                                        {subtopics.length > 0 ? (
                                                            <div className="grid grid-cols-1 gap-2">
                                                                {subtopics.map(sub => (
                                                                    <div
                                                                        key={sub.id}
                                                                        className="flex items-start gap-2 group cursor-pointer"
                                                                        onClick={() => toggleSubTopic(sub.id)}
                                                                    >
                                                                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${completedSubTopics[sub.id] ? 'bg-green-500 border-green-500 scale-110 shadow-sm' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 group-hover:border-indigo-400'}`}>
                                                                            {completedSubTopics[sub.id] && <CheckCircle size={10} className="text-white" />}
                                                                        </div>
                                                                        <span className={`text-[10px] leading-tight font-medium ${completedSubTopics[sub.id] ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-700 dark:text-gray-300 group-hover:text-indigo-600'}`}>
                                                                            {sub.label}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className="text-[10px] text-gray-400 italic">Sub-topics incoming...</p>
                                                        )}
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            (contents as any[]).map((chapter) => {
                                                const module = getModuleById(chapter.part);
                                                const colors = getModuleColors(module?.color || 'blue');
                                                const isDone = completedChapters.includes(chapter.chapter);

                                                return (
                                                    <div
                                                        key={chapter.chapter}
                                                        onClick={() => toggleCompletion(chapter.chapter)}
                                                        className={`group relative bg-white dark:bg-[#111] rounded-2xl border p-4 transition-all cursor-pointer shadow-sm ${isDone
                                                            ? 'border-green-500 bg-green-50/30 dark:bg-green-900/10'
                                                            : 'border-gray-200 dark:border-gray-800 hover:border-blue-400 hover:shadow-md'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between gap-2 mb-2">
                                                            <div className="flex items-center gap-2">
                                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${isDone ? 'bg-green-600' : colors.bg} text-white`}>
                                                                    CH {chapter.chapter}
                                                                </span>
                                                                <span className="text-[9px] text-gray-400 font-semibold uppercase truncate max-w-[60px]">{module?.title}</span>
                                                            </div>
                                                            {isDone && <ShieldCheck className="w-4 h-4 text-green-600" />}
                                                        </div>

                                                        <h4 className={`text-sm font-bold mb-3 transition-colors ${isDone ? 'text-green-800 dark:text-green-300 line-through opacity-70' : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600'}`}>
                                                            {chapter.topic}
                                                        </h4>

                                                        <div className="flex items-center justify-between mt-auto">
                                                            <div className="flex items-center gap-1.5">
                                                                <BookOpen className="w-3 h-3 text-gray-400" />
                                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">{chapter.pages} Pgs</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5">
                                                                <Clock className="w-3 h-3 text-gray-400" />
                                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">{chapter.slots} Slots</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>

                                    {!isSaturday && !isSunday && (
                                        <div className="mt-auto pt-3">
                                            <a href={`/student/batch1-1/${currentWeek.week}/${dayIndex + 1}`} className="block w-full">
                                                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                                    <BrainCircuit className="w-3.5 h-3.5" />
                                                    Start Session
                                                </button>
                                            </a>
                                        </div>
                                    )}

                                    {!isSaturday && !isSunday && (
                                        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 text-center">
                                            <span className="text-[10px] font-bold text-gray-500 uppercase">Day Summary</span>
                                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                {(contents as any[]).reduce((sum, c) => sum + (c.pages || 0), 0)} Pages • {daySlots} Hours
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Comparison Logic Tip */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Sparkles className="w-32 h-32" />
                </div>
                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-200" />
                        <span className="text-blue-100 font-bold uppercase tracking-wider text-sm">Smart Study Strategy</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">The Comparative Advantage</h3>
                    <p className="text-blue-100 leading-relaxed">
                        Notice that for chapters like <span className="font-bold text-white underline decoration-blue-400 decoration-2">President vs Governor</span>,
                        the slots can be reduced by 50% in the second reading. Our system automatically recalibrates your pace based on these overlaps.
                        Focus on the Core Articles (1-51) first – they form 60% of the Prelims weightage.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/20 text-sm font-medium">
                            1. Read Core Topic
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/20 text-sm font-medium">
                            2. Compare with State Equivalent
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
