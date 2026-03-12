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
    Globe
} from 'lucide-react';
import { GEOGRAPHY_SCHEDULE, GEOGRAPHY_PHASES, getCurrentDayNumber, GEOGRAPHY_START_DATE, GeographyDaySchedule } from './data/geography-schedule-data';
import StudyModeModal from '@/components/upsc/common/StudyModeModal';
import { useRouter } from 'next/navigation';

export default function GeographyScheduleView() {
    const router = useRouter();
    const [selectedPhase, setSelectedPhase] = useState(1);
    const [completedDays, setCompletedDays] = useState<number[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('geography_completed_days');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    // Modal State
    const [isModeModalOpen, setIsModeModalOpen] = useState(false);
    const [activeDayData, setActiveDayData] = useState<GeographyDaySchedule | null>(null);

    const currentDayNumber = useMemo(() => getCurrentDayNumber(), []);
    const phaseDays = useMemo(() => GEOGRAPHY_SCHEDULE.filter(d => d.phase === selectedPhase), [selectedPhase]);

    const toggleDayCompletion = (day: number) => {
        const newSet = completedDays.includes(day)
            ? completedDays.filter(d => d !== day)
            : [...completedDays, day];
        setCompletedDays(newSet);
        if (typeof window !== 'undefined') {
            localStorage.setItem('geography_completed_days', JSON.stringify(newSet));
        }
    };

    const handleLearnClick = (dayData: GeographyDaySchedule) => {
        setActiveDayData(dayData);
        setIsModeModalOpen(true);
    };

    const handleSelectSelfStudy = () => {
        if (!activeDayData) return;
        setIsModeModalOpen(false);
        router.push(`/student/upsc/geography/pomodoro?day=${activeDayData.day}&title=${encodeURIComponent(activeDayData.title)}`);
    };

    const handleSelectGuided = () => {
        if (!activeDayData) return;
        setIsModeModalOpen(false);
        router.push(`/student/upsc/geography/guided-lesson?day=${activeDayData.day}`);
    };

    const progressPercent = Math.round((completedDays.length / GEOGRAPHY_SCHEDULE.length) * 100);
    const startDateStr = GEOGRAPHY_START_DATE.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    return (
        <div className="space-y-8 pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Globe className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">Geography - 21 Day Plan</h2>
                        </div>
                        {progressPercent > 0 && (
                            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> {progressPercent}% Complete
                            </div>
                        )}
                    </div>
                    <p className="text-emerald-100 mb-6 max-w-xl">
                        A structured spatial reasoning journey covering Geomorphology, Climatology, Oceanography, and Indian Geography.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                            <Calendar className="w-4 h-4 text-emerald-300" /> Start: {startDateStr}
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                            <Clock className="w-4 h-4 text-emerald-300" /> 4 Pomodoros/Day
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                            <Target className="w-4 h-4 text-emerald-300" /> Today: Day {currentDayNumber}
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase Selector */}
            <div className="flex flex-wrap gap-2">
                {GEOGRAPHY_PHASES.map(phase => (
                    <button
                        key={phase.id}
                        onClick={() => setSelectedPhase(phase.id)}
                        className={`px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border
                            ${selectedPhase === phase.id
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg'
                                : 'bg-card dark:bg-[#111] text-muted-foreground border-border hover:border-emerald-400'
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
                    className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 shadow-sm"
                >
                    <div className="mb-8">
                        <h3 className="text-xl font-black text-foreground mb-2 tracking-tight">
                            {GEOGRAPHY_PHASES.find(p => p.id === selectedPhase)?.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                            {GEOGRAPHY_PHASES.find(p => p.id === selectedPhase)?.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {phaseDays.map(day => (
                            <DayCard
                                key={day.day}
                                dayData={day}
                                isCompleted={completedDays.includes(day.day)}
                                isCurrent={day.day === currentDayNumber}
                                onToggle={() => toggleDayCompletion(day.day)}
                                onLearn={() => handleLearnClick(day)}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <StudyModeModal
                isOpen={isModeModalOpen}
                onClose={() => setIsModeModalOpen(false)}
                dayTitle={activeDayData?.title || ""}
                dayNumber={activeDayData?.day || 1}
                onSelectSelfStudy={handleSelectSelfStudy}
                onSelectGuided={handleSelectGuided}
            />
        </div>
    );
}

function DayCard({ dayData, isCompleted, isCurrent, onToggle, onLearn }: {
    dayData: GeographyDaySchedule;
    isCompleted: boolean;
    isCurrent: boolean;
    onToggle: () => void;
    onLearn: () => void;
}) {
    return (
        <div className={`rounded-2xl border p-5 transition-all group hover:shadow-md
            ${isCompleted
                ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-300 dark:border-emerald-700/50'
                : isCurrent
                    ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-400 ring-4 ring-blue-400/10'
                    : 'bg-muted/30 border-border hover:border-emerald-300'
            }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black
                        ${isCompleted
                            ? 'bg-emerald-500 text-white'
                            : isCurrent
                                ? 'bg-blue-500 text-white'
                                : dayData.isRevisionDay
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-muted text-muted-foreground'
                        }`}>
                        {dayData.day}
                    </span>
                    {dayData.isRevisionDay && (
                        <span className="text-[10px] px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-black uppercase tracking-tighter">
                            Revision
                        </span>
                    )}
                </div>
                <button
                    onClick={onToggle}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                        ${isCompleted
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-border hover:border-emerald-500 hover:scale-110'
                        }`}
                >
                    {isCompleted && <CheckCircle className="w-4 h-4" />}
                </button>
            </div>

            <h4 className="font-bold text-foreground text-sm mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                {dayData.title}
            </h4>

            <ul className="space-y-2 mb-4">
                {dayData.topics.slice(0, 3).map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground font-medium">
                        <ChevronRight className="w-3 h-3 mt-0.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{topic}</span>
                    </li>
                ))}
            </ul>

            <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">
                        {dayData.chapters.length > 0 ? "Lesson Active" : "Review Only"}
                    </span>
                </div>
                {dayData.chapters.length > 0 && (
                    <button
                        onClick={onLearn}
                        className="text-[10px] font-black uppercase tracking-wider text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group/btn"
                    >
                        Learn <Play className="w-2.5 h-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                )}
            </div>
        </div>
    );
}
