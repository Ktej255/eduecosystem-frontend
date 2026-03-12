"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, CheckCircle, Clock, BookOpen,
    AlertCircle, Target, Lock, Play, ChevronRight,
    TrendingUp, FileText, Award, StickyNote, BarChart2, Flame, Map
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from 'next/navigation';
import { getHistoryProgressStore, markHistoryChapterComplete } from '@/lib/history-progress-store';
import { upscSynapseService, CognitiveProfile } from '@/lib/upsc-synapse-service';
import { HISTORY_PLAN_CONFIGS, HistorySection } from './data/history-schedule-registry';

interface HistorySectionPlannerProps {
    section?: HistorySection;
}

export default function HistorySectionPlanner({ section = 'modern' }: HistorySectionPlannerProps) {
    const router = useRouter();
    const config = HISTORY_PLAN_CONFIGS[section];

    // Derived Data
    const todaysPlan = config.getToday();
    const [selectedDay, setSelectedDay] = useState<number | null>(todaysPlan ? todaysPlan.day : 1);

    // Checklist State
    const [checklist, setChecklist] = useState<boolean[]>([]);
    const [chapterProgress, setChapterProgress] = useState<Record<number, import('@/lib/history-progress-store').ChapterProgress>>({});
    const [profile, setProfile] = useState<CognitiveProfile | null>(null);

    // Fetch Profile
    useEffect(() => {
        upscSynapseService.getProfile().then(setProfile).catch(console.error);
    }, []);

    // Sync UI with selected day progress
    useEffect(() => {
        const store = getHistoryProgressStore();
        if (selectedDay) {
            const dayData = config.schedule.find(d => d.day === selectedDay);
            if (dayData) {
                // Try to restore from localStorage first
                const storageKey = `history-checklist-${section}-${selectedDay}`;
                const savedState = localStorage.getItem(storageKey);

                if (savedState) {
                    try {
                        const parsed = JSON.parse(savedState);
                        if (Array.isArray(parsed) && parsed.length === dayData.chapterNames.length) {
                            setChecklist(parsed);
                            // Still load progress for display purposes
                            const progressMap: Record<number, import('@/lib/history-progress-store').ChapterProgress> = {};
                            dayData.chapters.forEach((chId: number) => {
                                const prog = store.chapters[chId];
                                if (prog) progressMap[chId] = prog;
                            });
                            setChapterProgress(progressMap);
                            return; // Used localStorage state, skip default
                        }
                    } catch (e) { /* ignore parse errors */ }
                }

                // Fallback: initialize from progress store
                const initialChecks = new Array(dayData.chapterNames.length).fill(false);
                const progressMap: Record<number, import('@/lib/history-progress-store').ChapterProgress> = {};

                dayData.chapters.forEach((chId: number, idx: number) => {
                    const prog = store.chapters[chId];
                    if (prog) {
                        progressMap[chId] = prog;
                        if (prog.completed) {
                            initialChecks[idx] = true;
                        }
                    }
                });
                setChecklist(initialChecks);
                setChapterProgress(progressMap);
            }
        }
    }, [selectedDay, section]); // Re-sync when section changes too

    const dayData = config.schedule.find(d => d.day === selectedDay);
    const handleCheck = (index: number) => {
        const newChecklist = [...checklist];
        newChecklist[index] = !newChecklist[index];
        setChecklist(newChecklist);

        // Persist to localStorage
        if (selectedDay) {
            const storageKey = `history-checklist-${section}-${selectedDay}`;
            localStorage.setItem(storageKey, JSON.stringify(newChecklist));
        }

        const chId = dayData?.chapters[index];
        if (chId) {
            if (newChecklist[index]) {
                markHistoryChapterComplete(chId);
                if (profile) {
                    upscSynapseService.logGapAnalysis({
                        profile_id: profile.id,
                        chapter_id: chId,
                        subject: config.subject, // Uses "Modern History", "Medieval History", etc.
                        status: "mastered",
                        recall_accuracy: 100
                    }).catch(console.error);
                }
            }
        }
    };

    const allChecked = checklist.length > 0 && checklist.every(Boolean);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    // Color Helpers
    const getBrandColors = () => {
        switch (section) {
            case 'medieval': return { bg: 'bg-[#4a148c]', text: 'text-purple-400', ghost: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-600', gradient: 'from-purple-600 via-indigo-600 to-purple-700' };
            case 'ancient': return { bg: 'bg-[#795548]', text: 'text-amber-400', ghost: 'bg-amber-100 dark:bg-amber-900/30', border: 'border-amber-600', gradient: 'from-amber-600 via-orange-600 to-amber-700' };
            case 'art_culture': return { bg: 'bg-[#004d40]', text: 'text-emerald-400', ghost: 'bg-emerald-100 dark:bg-emerald-900/30', border: 'border-emerald-600', gradient: 'from-emerald-600 via-teal-600 to-emerald-700' };
            default: return { bg: 'bg-[#1a237e]', text: 'text-indigo-400', ghost: 'bg-indigo-100 dark:bg-indigo-900/30', border: 'border-indigo-600', gradient: 'from-indigo-600 via-blue-600 to-indigo-700' };
        }
    };

    const colors = getBrandColors();

    const isLevelLocked = (chapterId: number, level: number) => {
        if (level === 1) return false; // Level 1 is always unlocked
        const progress = chapterProgress[chapterId];
        if (!progress) return true; // generic lock if no progress at all? Or maybe unlocked if L1? Let's say unlocked L1 always.
        // Actually, if no progress object, it means they haven't done anything. L1 should be open. L2/L3 closed.

        const completedLevels = progress.mcqLevelsCompleted || [];
        // Level 2 requires Level 1 done
        if (level === 2) return !completedLevels.includes(1);
        // Level 3 requires Level 2 done
        if (level === 3) return !completedLevels.includes(2);

        return true;
    };

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] pb-24">
            {/* Header */}
            <div className={`${colors.bg} text-white pt-12 pb-24 px-6 relative overflow-hidden transition-colors duration-500`}>
                <div className="absolute top-0 right-0 p-32 bg-card/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-card/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <Clock className="w-3 h-3" /> 15 Day Intensive Plan
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black mb-2 uppercase italic tracking-tight">
                                {config.title} <span className={colors.text}>{config.subtitle}</span>
                            </h1>
                            <p className="text-muted-foreground max-w-xl">
                                {config.description} Targeted Daily Drills & Intensive Revision.
                            </p>
                        </div>

                        {todaysPlan && (
                            <div className="bg-card/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 animate-in zoom-in duration-500">
                                <div className="text-center">
                                    <div className={`text-xs ${colors.text} font-bold uppercase`}>Current Day</div>
                                    <div className="text-3xl font-black">{todaysPlan.day}</div>
                                </div>
                                <div className="h-10 w-px bg-card/20"></div>
                                <div>
                                    <div className="font-bold text-sm">{todaysPlan.title}</div>
                                    <div className="text-xs text-muted-foreground">{todaysPlan.mcqCount} MCQ Target</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Schedule List */}
                <div className="lg:col-span-2 space-y-8">
                    {config.phases.map((phase) => {
                        const phaseData = config.schedule.filter(d => d.phase === phase.id);
                        return (
                            <div key={phase.id} className="bg-card dark:bg-[#111] rounded-3xl border border-border shadow-sm overflow-hidden">
                                <div className="p-6 bg-muted border-b border-border flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Phase {phase.id}: {phase.title}</h3>
                                        <p className="text-xs text-muted-foreground">Days {phase.days}</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-border dark:divide-gray-800">
                                    {phaseData.map((day) => (
                                        <div
                                            key={day.day}
                                            onClick={() => setSelectedDay(day.day)}
                                            className={`p-4 flex items-center gap-4 cursor-pointer transition-colors hover:bg-muted dark:hover:bg-gray-900
                                                ${selectedDay === day.day ? `bg-muted dark:bg-card/5 border-l-4 ${colors.border}` : 'border-l-4 border-transparent'}
                                            `}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0
                                                ${day.isAssessmentDay ? 'bg-amber-100 text-amber-700' : 'bg-muted text-muted-foreground dark:text-muted-foreground'}
                                            `}>
                                                {day.day}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-foreground flex items-center gap-2">
                                                    {day.title}
                                                    {day.isAssessmentDay && <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full">TEST</span>}
                                                </div>
                                                <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                                                    {new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                                                </div>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${selectedDay === day.day ? 'rotate-90 text-indigo-500' : ''}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Daily Planner Action */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        {dayData ? (
                            <motion.div
                                key={`${section}-${selectedDay}`}
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="bg-card dark:bg-[#111] rounded-3xl border border-border p-6 shadow-xl"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`${colors.ghost} p-2 rounded-lg`}>
                                            <Target className={`w-5 h-5 ${colors.text.replace('text-', 'text-indigo-600')}`} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground font-bold uppercase">Day {dayData.day} Plan</div>
                                            <div className="font-bold text-foreground">Session Dashboard</div>
                                        </div>
                                    </div>
                                    {allChecked && <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />}
                                </div>

                                {/* Timer/Session Info */}
                                <div className="mb-6 grid grid-cols-2 gap-3">
                                    <div
                                        onClick={() => router.push(`/student/upsc/history/pomodoro?mode=study&subject=${section}&day=${dayData.day}`)}
                                        className="cursor-pointer bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Clock className="w-3 h-3 text-blue-600" />
                                            <span className="text-[10px] font-bold text-blue-800 dark:text-blue-300 uppercase">Study Session</span>
                                        </div>
                                        <div className="text-sm font-black text-blue-900 dark:text-blue-100">8AM - 1PM</div>
                                        <div className="text-[9px] text-blue-600 text-center">Intensive Reading</div>
                                    </div>
                                    <div
                                        onClick={() => router.push(`/student/upsc/history/pomodoro?mode=drill&subject=${section}&day=${dayData.day}`)}
                                        className="cursor-pointer bg-orange-50 dark:bg-orange-900/20 p-3 rounded-2xl border border-orange-100 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <FileText className="w-3 h-3 text-orange-600" />
                                            <span className="text-[10px] font-bold text-orange-800 dark:text-orange-300 uppercase">Recall Drill</span>
                                        </div>
                                        <div className="text-sm font-black text-orange-900 dark:text-orange-100">1PM - 2PM</div>
                                        <div className="text-[9px] text-orange-600 text-center">{dayData.mcqCount} Questions</div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                        <BookOpen className="w-3 h-3" /> Select Completed Chapters
                                    </div>
                                    {dayData.chapterNames.map((chapter: string, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer
                                                ${checklist[idx]
                                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                                                    : 'bg-card border-border hover:border-indigo-100'}
                                            `}
                                            onClick={() => handleCheck(idx)}
                                        >
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <div className={`text-[10px] font-bold uppercase ${colors.text} mb-0.5`}>
                                                            Chapter {dayData.chapters[idx] || (dayData.isAssessmentDay ? 'ASSESS' : 'SPL')}
                                                        </div>
                                                        <div className="text-sm font-bold text-foreground leading-tight">
                                                            {chapter}
                                                        </div>
                                                    </div>
                                                    <Checkbox
                                                        checked={checklist[idx]}
                                                        onCheckedChange={() => handleCheck(idx)}
                                                        className="mt-1"
                                                    />
                                                </div>

                                                {/* 7-Icon Action Row (Polity Style) */}
                                                <div className="grid grid-cols-7 gap-1 pt-3 border-t border-border mt-2">
                                                    {/* 1. Flashcards */}
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); router.push(`/student/upsc/history/flashcards?chapter=${dayData.chapters[idx]}`); }}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Study Flashcards"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover/btn:bg-blue-50 group-hover/btn:text-blue-500 transition-colors">
                                                            <StickyNote className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-muted-foreground group-hover/btn:text-blue-500">Cards</span>
                                                    </button>

                                                    {/* 2. Level 1 MCQs */}
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); router.push(`/student/upsc/history/mcq?chapter=${dayData.chapters[idx]}&level=1&section=${section}`); }}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Level 1: Foundation"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover/btn:bg-green-50 group-hover/btn:text-green-500 transition-colors">
                                                            <Target className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-muted-foreground group-hover/btn:text-green-500">L1</span>
                                                    </button>

                                                    {/* 2. Level 2 MCQs */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (!isLevelLocked(dayData.chapters[idx], 2)) {
                                                                router.push(`/student/upsc/history/mcq?chapter=${dayData.chapters[idx]}&level=2&section=${section}`);
                                                            }
                                                        }}
                                                        className={`flex flex-col items-center gap-0.5 group/btn ${isLevelLocked(dayData.chapters[idx], 2) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        title="Level 2: Conceptual"
                                                    >
                                                        <div className={`p-1.5 rounded-lg ${isLevelLocked(dayData.chapters[idx], 2) ? 'bg-muted text-muted-foreground' : 'bg-muted text-muted-foreground group-hover/btn:bg-purple-50 group-hover/btn:text-purple-500'} transition-colors`}>
                                                            {isLevelLocked(dayData.chapters[idx], 2) ? <Lock className="w-3.5 h-3.5" /> : <Target className="w-3.5 h-3.5" />}
                                                        </div>
                                                        <span className={`text-[8px] font-medium ${isLevelLocked(dayData.chapters[idx], 2) ? 'text-muted-foreground' : 'text-muted-foreground group-hover/btn:text-purple-500'}`}>L2</span>
                                                    </button>

                                                    {/* 3. Level 3 MCQs */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (!isLevelLocked(dayData.chapters[idx], 3)) {
                                                                router.push(`/student/upsc/history/mcq?chapter=${dayData.chapters[idx]}&level=3&section=${section}`);
                                                            }
                                                        }}
                                                        className={`flex flex-col items-center gap-0.5 group/btn ${isLevelLocked(dayData.chapters[idx], 3) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        title="Level 3: Applied"
                                                    >
                                                        <div className={`p-1.5 rounded-lg ${isLevelLocked(dayData.chapters[idx], 3) ? 'bg-muted text-muted-foreground' : 'bg-muted text-muted-foreground group-hover/btn:bg-red-50 group-hover/btn:text-red-500'} transition-colors`}>
                                                            {isLevelLocked(dayData.chapters[idx], 3) ? <Lock className="w-3.5 h-3.5" /> : <Flame className="w-3.5 h-3.5" />}
                                                        </div>
                                                        <span className={`text-[8px] font-medium ${isLevelLocked(dayData.chapters[idx], 3) ? 'text-muted-foreground' : 'text-muted-foreground group-hover/btn:text-red-500'}`}>L3</span>
                                                    </button>

                                                    {/* 5. Read */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            console.log('[DEBUG] Navigating to Read:', dayData.chapters[idx]);
                                                            router.push(`/student/upsc/history/read/${dayData.chapters[idx]}?section=${section}`);
                                                        }}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Read Content"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover/btn:bg-indigo-50 group-hover/btn:text-indigo-500 transition-colors">
                                                            <BookOpen className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-muted-foreground group-hover/btn:text-indigo-500">Read</span>
                                                    </button>

                                                    {/* 6. Visuals/Mapping */}
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); router.push(`/student/upsc/history/visuals?chapter=${dayData.chapters[idx]}`); }}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Interactive Visuals"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover/btn:bg-amber-50 group-hover/btn:text-amber-600 transition-colors">
                                                            <Map className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-muted-foreground group-hover/btn:text-amber-600">Map</span>
                                                    </button>

                                                    {/* 7. Current Affairs */}
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); router.push(`/student/upsc/current-affairs?subject=History&source=history_chapter_${dayData.chapters[idx]}`); }}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Current Affairs"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover/btn:bg-rose-50 group-hover/btn:text-rose-600 transition-colors">
                                                            <Flame className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-muted-foreground group-hover/btn:text-rose-600">CA</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <Button
                                        className={`w-full h-16 text-lg font-black rounded-2xl shadow-xl transition-all
                                            ${checklist.some(Boolean)
                                                ? `bg-gradient-to-r ${colors.gradient} hover:scale-[1.02] active:scale-95 text-white`
                                                : 'bg-muted text-muted-foreground cursor-not-allowed'
                                            }`}
                                        disabled={!checklist.some(Boolean)}
                                        onClick={() => {
                                            const selectedChapterIds = dayData.chapters.filter((_: any, i: number) => checklist[i]);
                                            router.push(`/student/upsc/history/mcq-drill?chapters=${selectedChapterIds.join(',')}&limit=${dayData.mcqCount}&subject=${encodeURIComponent(config.subject)}&section=${section}`);
                                        }}
                                    >
                                        {checklist.some(Boolean) ? (
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center gap-2">
                                                    <Play className="w-5 h-5 fill-current" />
                                                    Start {dayData.mcqCount} MCQ Drill
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Lock className="w-4 h-4" />
                                                Select Targets
                                            </div>
                                        )}
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground px-6 leading-relaxed">
                                        Your results will be analyzed by the <span className="font-bold text-muted-foreground italic">Synapse Engine</span> for cognitive gap reporting.
                                    </p>
                                </div>

                                {dayData.isAssessmentDay && (
                                    <div className="mt-8 bg-amber-500 rounded-2xl p-4 text-white shadow-lg shadow-amber-500/20 border-b-4 border-amber-700">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-card/20 p-2 rounded-lg">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold">Phase Assessment</h4>
                                        </div>
                                        <p className="text-xs text-amber-50 leading-relaxed">
                                            Today is a cumulative checkpoint. We recommend practicing ALL chapters from Phase {dayData.phase}.
                                        </p>
                                    </div>
                                )}
                            </motion.div>

                        ) : (
                            <div className="text-center p-12 text-muted-foreground">
                                Select a day to view plan
                            </div>
                        )}
                        {/* Stats Widget */}
                        <div className="bg-card dark:bg-[#111] border border-border rounded-3xl p-6 shadow-sm overflow-hidden relative">
                            <div className={`absolute top-0 right-0 p-12 ${colors.ghost} blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`}></div>
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <Award className={`w-5 h-5 ${colors.text.replace('text-', 'text-')}`} />
                                <h3 className="font-bold text-foreground">{config.title} Progress</h3>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1.5">
                                        <span className="text-muted-foreground tracking-wider">Chapters Sequenced</span>
                                        <span className="text-foreground">0 / {config.chaptersTotal}</span>
                                    </div>
                                    <div className="h-2 bg-muted dark:bg-card/5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000`}
                                            style={{ width: `5%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-2xl text-[10px] font-bold uppercase tracking-wide text-center bg-muted dark:bg-card/5 text-muted-foreground`}>
                                    Status: <span className={`${colors.text} ml-1`}>Initializing Module</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
