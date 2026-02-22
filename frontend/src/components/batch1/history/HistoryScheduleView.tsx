"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    BookOpen,
    ChevronRight,
    CheckCircle,
    Target,
    TrendingUp,
    Play,
    BookMarked
} from 'lucide-react';
import { HISTORY_SCHEDULE, HISTORY_PHASES, getCurrentDayNumber, HISTORY_START_DATE, HistoryDaySchedule } from './data/history-schedule-data';
import Link from 'next/link';

export default function HistoryScheduleView() {
    const [selectedPhase, setSelectedPhase] = useState(1);
    const [completedDays, setCompletedDays] = useState<number[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('history_completed_days');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    const currentDayNumber = useMemo(() => getCurrentDayNumber(), []);
    const phaseDays = useMemo(() => HISTORY_SCHEDULE.filter(d => d.phase === selectedPhase), [selectedPhase]);

    const toggleDayCompletion = (day: number) => {
        const newSet = completedDays.includes(day)
            ? completedDays.filter(d => d !== day)
            : [...completedDays, day];
        setCompletedDays(newSet);
        if (typeof window !== 'undefined') {
            localStorage.setItem('history_completed_days', JSON.stringify(newSet));
        }
    };

    const progressPercent = Math.round((completedDays.length / HISTORY_SCHEDULE.length) * 100);

    // Format start date
    const startDateStr = HISTORY_START_DATE.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    return (
        <div className="space-y-8 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <BookMarked className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Modern History - 30 Day Plan</h2>
                    </div>
                    {progressPercent > 0 && (
                        <div className="px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full text-sm font-bold flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> {progressPercent}% Complete
                        </div>
                    )}
                </div>
                <p className="text-amber-100 mb-4">
                    Based on "A Brief History of Modern India" (Spectrum) by Rajiv Ahir
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-card/10 rounded-lg px-3 py-2">
                        <Calendar className="w-4 h-4" /> Start: {startDateStr}
                    </div>
                    <div className="flex items-center gap-2 bg-card/10 rounded-lg px-3 py-2">
                        <Clock className="w-4 h-4" /> 6 Pomodoros/Day
                    </div>
                    <div className="flex items-center gap-2 bg-card/10 rounded-lg px-3 py-2">
                        <Target className="w-4 h-4" /> Current: Day {currentDayNumber || 'Not Started'}
                    </div>
                </div>
            </div>

            {/* Phase Selector */}
            <div className="flex flex-wrap gap-2">
                {HISTORY_PHASES.map(phase => (
                    <button
                        key={phase.id}
                        onClick={() => setSelectedPhase(phase.id)}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all border
                            ${selectedPhase === phase.id
                                ? 'bg-amber-600 text-white border-amber-600 shadow-lg'
                                : 'bg-card dark:bg-[#111] text-muted-foreground dark:text-muted-foreground border-border hover:border-amber-400'
                            }`}
                    >
                        Phase {phase.id}: {phase.title}
                    </button>
                ))}
            </div>

            {/* Phase Info */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedPhase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6"
                >
                    <h3 className="text-lg font-bold text-foreground mb-1">
                        {HISTORY_PHASES.find(p => p.id === selectedPhase)?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                        {HISTORY_PHASES.find(p => p.id === selectedPhase)?.description} (Days {HISTORY_PHASES.find(p => p.id === selectedPhase)?.days})
                    </p>

                    {/* Day Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {phaseDays.map(day => (
                            <DayCard
                                key={day.day}
                                dayData={day}
                                isCompleted={completedDays.includes(day.day)}
                                isCurrent={day.day === currentDayNumber}
                                onToggle={() => toggleDayCompletion(day.day)}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function DayCard({ dayData, isCompleted, isCurrent, onToggle }: {
    dayData: HistoryDaySchedule;
    isCompleted: boolean;
    isCurrent: boolean;
    onToggle: () => void;
}) {
    return (
        <div className={`rounded-xl border p-4 transition-all
            ${isCompleted
                ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                : isCurrent
                    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 ring-2 ring-amber-400/50'
                    : 'bg-muted/50 border-border'
            }`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${isCompleted
                            ? 'bg-green-500 text-white'
                            : isCurrent
                                ? 'bg-amber-500 text-white'
                                : dayData.isRevisionDay
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                                    : 'bg-muted text-muted-foreground dark:text-muted-foreground'
                        }`}>
                        {dayData.day}
                    </span>
                    {dayData.isRevisionDay && (
                        <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 rounded-full font-medium">
                            Revision
                        </span>
                    )}
                    {isCurrent && (
                        <span className="text-xs px-2 py-0.5 bg-amber-500 text-white rounded-full font-bold animate-pulse">
                            TODAY
                        </span>
                    )}
                </div>
                <button
                    onClick={onToggle}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                        ${isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-border hover:border-green-500'
                        }`}
                >
                    {isCompleted && <CheckCircle className="w-4 h-4" />}
                </button>
            </div>

            <h4 className="font-bold text-foreground text-sm mb-2">{dayData.title}</h4>

            <ul className="text-xs text-muted-foreground dark:text-muted-foreground space-y-1 mb-3">
                {dayData.topics.slice(0, 2).map((topic, i) => (
                    <li key={i} className="flex items-start gap-1">
                        <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{topic}</span>
                    </li>
                ))}
                {dayData.topics.length > 2 && (
                    <li className="text-muted-foreground text-xs">+{dayData.topics.length - 2} more</li>
                )}
            </ul>

            <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground italic line-clamp-1">{dayData.strategy.slice(0, 40)}...</span>
                {dayData.chapters.length > 0 && (
                    <Link
                        href={`/student/batch1/history/portal?day=${dayData.day}`}
                        className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium"
                    >
                        <Play className="w-3 h-3" /> Start Portal
                    </Link>
                )}
            </div>
        </div>
    );
}
