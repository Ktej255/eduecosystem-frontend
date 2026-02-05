"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, CheckCircle, Clock, BookOpen,
    AlertCircle, Target, Lock, Play, ChevronRight,
    TrendingUp, FileText, Award
} from 'lucide-react';
import { SPECTRUM_SCHEDULE, SPECTRUM_PHASES, getSpectrumDaySchedule, SpectrumDaySchedule } from './data/spectrum-schedule-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from 'next/navigation';
import { getHistoryProgressStore, markHistoryChapterComplete, markHistorySubtopicsComplete } from '@/lib/history-progress-store';
import { upscSynapseService, CognitiveProfile } from '@/lib/upsc-synapse-service';

export default function SpectrumPlanner() {
    const router = useRouter();
    const todaysPlan = getSpectrumDaySchedule();
    const [selectedDay, setSelectedDay] = useState<number | null>(todaysPlan ? todaysPlan.day : 1);

    // Checklist State
    const [completedChapters, setCompletedChapters] = useState<Record<number, boolean>>({}); // dayId -> chapterIndex -> boolean? Actually simplify: just count chapters done for the day
    // Better: State for current selected day's checklist
    const [checklist, setChecklist] = useState<boolean[]>([]);
    const [profile, setProfile] = useState<CognitiveProfile | null>(null);

    // Fetch Profile
    useEffect(() => {
        upscSynapseService.getProfile().then(setProfile).catch(console.error);
    }, []);

    useEffect(() => {
        const store = getHistoryProgressStore();
        if (selectedDay) {
            const dayKey = `1_${selectedDay}`; // Store uses "week_day"
            const dayProgress = store.days[dayKey];
            const dayData = SPECTRUM_SCHEDULE.find(d => d.day === selectedDay);

            if (dayData) {
                // If we have progress in store, use it. Else default false.
                const initialChecks = new Array(dayData.chapterNames.length).fill(false);
                if (dayProgress) {
                    // Logic: If morning is complete, maybe all are done? 
                    // Or check subtopic completions. 
                    // For Spectrum Planner, we'll use a simpler mapping or just stick to 'mastered' chapters.
                    dayData.chapters.forEach((chId, idx) => {
                        if (store.chapters[chId]?.completed) {
                            initialChecks[idx] = true;
                        }
                    });
                }
                setChecklist(initialChecks);
            }
        }
    }, [selectedDay]);

    const handleCheck = (index: number) => {
        const newChecklist = [...checklist];
        newChecklist[index] = !newChecklist[index];
        setChecklist(newChecklist);

        // Persist to local store
        const chId = dayData?.chapters[index];
        if (chId) {
            if (newChecklist[index]) {
                markHistoryChapterComplete(chId);
                // Sync to backend
                if (profile) {
                    upscSynapseService.logGapAnalysis({
                        profile_id: profile.id,
                        chapter_id: chId,
                        subject: "History",
                        status: "mastered",
                        recall_accuracy: 100 // Manual check assumes mastery
                    }).catch(console.error);
                }
            }
        }
    };

    const allChecked = checklist.length > 0 && checklist.every(Boolean);
    const dayData = SPECTRUM_SCHEDULE.find(d => d.day === selectedDay);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pb-24">
            {/* Header */}
            <div className="bg-[#1a237e] text-white pt-12 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <Clock className="w-3 h-3" /> 15 Day Intensive
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black mb-2">
                                Modern History <span className="text-indigo-400">Spectrum</span>
                            </h1>
                            <p className="text-gray-300 max-w-xl">
                                Daily Study (8 AM - 1 PM) + Daily Drill (1 PM - 2 PM).
                                Covers 39 Chapters in 15 Days.
                            </p>
                        </div>

                        {todaysPlan && (
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                                <div className="text-center">
                                    <div className="text-xs text-indigo-300 font-bold uppercase">Current Day</div>
                                    <div className="text-3xl font-black">{todaysPlan.day}</div>
                                </div>
                                <div className="h-10 w-px bg-white/20"></div>
                                <div>
                                    <div className="font-bold text-sm">{todaysPlan.title}</div>
                                    <div className="text-xs text-gray-300">{todaysPlan.mcqCount} MCQ Target</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Schedule List */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Phase Tabs */}
                    {SPECTRUM_PHASES.map((phase) => {
                        const phaseData = SPECTRUM_SCHEDULE.filter(d => d.phase === phase.id);
                        return (
                            <div key={phase.id} className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <div className="p-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Phase {phase.id}: {phase.title}</h3>
                                        <p className="text-xs text-gray-500">Days {phase.days}</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {phaseData.map((day) => (
                                        <div
                                            key={day.day}
                                            onClick={() => setSelectedDay(day.day)}
                                            className={`p-4 flex items-center gap-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-900
                                                ${selectedDay === day.day ? 'bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-600' : 'border-l-4 border-transparent'}
                                            `}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0
                                                ${day.isAssessmentDay ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}
                                            `}>
                                                {day.day}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                                    {day.title}
                                                    {day.isAssessmentDay && <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full">TEST</span>}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                    {new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                                                </div>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${selectedDay === day.day ? 'rotate-90 text-indigo-500' : ''}`} />
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
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 p-6 shadow-xl"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-bold uppercase">Day {dayData.day} Plan</div>
                                            <div className="font-bold text-gray-900 dark:text-white">Session Dashboard</div>
                                        </div>
                                    </div>
                                    {allChecked && <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />}
                                </div>

                                {/* Timer/Session Info */}
                                <div className="mb-6 grid grid-cols-2 gap-3">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl border border-blue-100 dark:border-blue-800">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Clock className="w-3 h-3 text-blue-600" />
                                            <span className="text-[10px] font-bold text-blue-800 dark:text-blue-300 uppercase">Study Session</span>
                                        </div>
                                        <div className="text-sm font-black text-blue-900 dark:text-blue-100">8AM - 1PM</div>
                                        <div className="text-[9px] text-blue-600">5 Hour Pomodoro Block</div>
                                    </div>
                                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-2xl border border-orange-100 dark:border-orange-800">
                                        <div className="flex items-center gap-2 mb-1">
                                            <FileText className="w-3 h-3 text-orange-600" />
                                            <span className="text-[10px] font-bold text-orange-800 dark:text-orange-300 uppercase">MCQ Drill</span>
                                        </div>
                                        <div className="text-sm font-black text-orange-900 dark:text-orange-100">1PM - 2PM</div>
                                        <div className="text-[9px] text-orange-600">60 Questions / Daily</div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <BookOpen className="w-3 h-3" /> Select Completed Chapters
                                    </div>
                                    {dayData.chapterNames.map((chapter, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                            className={`flex items-start gap-3 p-4 rounded-2xl border transition-all cursor-pointer
                                                ${checklist[idx]
                                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                                                    : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-indigo-100'}
                                            `}
                                            onClick={() => handleCheck(idx)}
                                        >
                                            <Checkbox
                                                checked={checklist[idx]}
                                                onCheckedChange={() => handleCheck(idx)}
                                                className="mt-1"
                                            />
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-indigo-600 mb-0.5">Chapter {dayData.chapters[idx] || 'Special'}</div>
                                                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                                                    {chapter}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <Button
                                        className={`w-full h-16 text-lg font-black rounded-2xl shadow-xl transition-all
                                            ${checklist.some(Boolean)
                                                ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:scale-[1.02] active:scale-95 text-white'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800'
                                            }`}
                                        disabled={!checklist.some(Boolean)}
                                        onClick={() => {
                                            const selectedChapterIds = dayData.chapters.filter((_, i) => checklist[i]);
                                            // Redirect to test session with selected chapters
                                            router.push(`/student/batch1/history/mcq-drill?chapters=${selectedChapterIds.join(',')}&limit=${dayData.mcqCount}`);
                                        }}
                                    >
                                        {checklist.some(Boolean) ? (
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center gap-2">
                                                    <Play className="w-5 h-5 fill-current" />
                                                    Start {dayData.mcqCount} MCQ Drill
                                                </div>
                                                <div className="text-[10px] font-normal opacity-80">
                                                    Based on {checklist.filter(Boolean).length} Selected Chapters
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Lock className="w-4 h-4" />
                                                Select Chapters First
                                            </div>
                                        )}
                                    </Button>
                                    <p className="text-[10px] text-center text-gray-400 px-6 leading-relaxed">
                                        Your performance will be logged in the <span className="font-bold text-gray-500">Deep Report Section</span> for gap analysis.
                                    </p>
                                </div>

                                {dayData.isAssessmentDay && (
                                    <div className="mt-8 bg-amber-500 rounded-2xl p-4 text-white shadow-lg shadow-amber-500/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-white/20 p-2 rounded-lg">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold">Phase Assessment</h4>
                                        </div>
                                        <p className="text-xs text-amber-50 leading-relaxed">
                                            Today is a cumulative assessment. We recommend selecting ALL chapters from Phase {dayData.phase} for a comprehensive check.
                                        </p>
                                    </div>
                                )}
                            </motion.div>

                        ) : (
                            <div className="text-center p-12 text-gray-400">
                                Select a day to view plan
                            </div>
                        )}
                        {/* Stats Widget */}
                        <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-5 h-5 text-yellow-500" />
                                <h3 className="font-bold text-gray-900 dark:text-white">Your Progress</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-500">Chapters Completed</span>
                                        <span className="font-bold">{getHistoryProgressStore().totalChaptersCompleted}/39</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-indigo-500 transition-all duration-500"
                                            style={{ width: `${(getHistoryProgressStore().totalChaptersCompleted / 39) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-xs text-blue-700 dark:text-blue-300">
                                    Current Streak: <span className="font-bold">1 Day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
