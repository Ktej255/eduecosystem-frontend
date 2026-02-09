"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Filter, CheckCircle, XCircle, HelpCircle, BookOpen, Clock, Zap, Target, Sparkles, ChevronRight, Award, Lock, Unlock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';
import { recordMCQAttempt } from '@/lib/analytics/WeakTopicAnalyzer';
import { POLITY_PYQS } from './data/polity-pyqs';
import { HISTORY_PYQS } from '../history/data/history-pyqs';
import { GEOGRAPHY_PYQS } from '../geography/data/geography-pyqs';
import { ECONOMY_PYQS } from '../economy/data/economy-pyqs';
import { SCIENCE_PYQS } from '../science-tech/data/science-pyqs';
import { ENVIRONMENT_PYQS } from '../environment/data/environment-pyqs';
import { IR_PYQS } from '../international-relations/data/ir-pyqs';
import { PYQQuestion } from '@/lib/pyq/pyq-types';
import { awardXP } from '@/lib/gamification/xp-engine';
import { ActivityLogger } from '@/lib/analytics/ActivityLogger';
import { saveChapterReport } from '@/lib/report-persistence';
import { toast } from 'sonner';

export default function PYQExplorer() {
    const [activeSubject, setActiveSubject] = useState("Polity");
    const [selectedYears, setSelectedYears] = useState<number[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
    const [showFilters, setShowFilters] = useState(true);
    const [lastSavedCount, setLastSavedCount] = useState(0);

    // Combine Data Map
    const subjectDataMap: Record<string, PYQQuestion[]> = {
        "Polity": POLITY_PYQS,
        "History": HISTORY_PYQS,
        "Geography": GEOGRAPHY_PYQS,
        "Economy": ECONOMY_PYQS,
        "Science": SCIENCE_PYQS,
        "Environment": ENVIRONMENT_PYQS,
        "International Relations": IR_PYQS
    };

    const subjectQuestions = useMemo(() => {
        return subjectDataMap[activeSubject] || [];
    }, [activeSubject]);

    // Calculate Counts
    const yearCounts = useMemo(() => {
        const counts: Record<number, number> = {};
        subjectQuestions.forEach(q => {
            counts[q.year] = (counts[q.year] || 0) + 1;
        });
        return counts;
    }, [subjectQuestions]);

    const topicCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        subjectQuestions.forEach(q => {
            counts[q.topic] = (counts[q.topic] || 0) + 1;
        });
        return counts;
    }, [subjectQuestions]);

    const allYears = useMemo(() => Object.keys(yearCounts).map(Number).sort((a, b) => b - a), [yearCounts]);
    const allTopics = useMemo(() => Object.keys(topicCounts).sort(), [topicCounts]);

    // Save PYQ session report every 5 new answers
    useEffect(() => {
        const answeredCount = Object.keys(userAnswers).length;
        const newAnswers = answeredCount - lastSavedCount;

        // Save when 5+ new answers since last save
        if (newAnswers >= 5 && answeredCount > 0) {
            const answeredQuestions = subjectQuestions.filter(q => userAnswers[String(q.id)] !== undefined);
            const score = answeredQuestions.filter(q => userAnswers[String(q.id)] === q.correctIndex).length;
            const totalQuestions = answeredQuestions.length;
            const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

            // Use subject name as lowercase for report key
            const subjectKey = activeSubject.toLowerCase() as 'polity' | 'history';
            saveChapterReport(subjectKey === 'polity' || subjectKey === 'history' ? subjectKey : 'polity', 0, {
                score,
                totalQuestions,
                accuracy,
                timeTaken: 0, // PYQ doesn't track time
                questions: answeredQuestions.map((q, i) => ({
                    id: typeof q.id === 'number' ? q.id : i,
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.correctIndex,
                    selectedAnswer: userAnswers[String(q.id)] ?? -1,
                    isCorrect: userAnswers[String(q.id)] === q.correctIndex,
                    explanation: q.explanation || ''
                }))
            }, 0); // Level 0 = PYQ

            setLastSavedCount(answeredCount);
            toast.success(
                `✅ PYQ Progress Saved! ${score}/${totalQuestions} (${accuracy}%) - Report updated in Deep Report Center`,
                { duration: 4000 }
            );
        }
    }, [userAnswers, subjectQuestions, activeSubject, lastSavedCount]);

    const toggleYear = (year: number) => {
        setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
    };

    const toggleTopic = (topic: string) => {
        setSelectedTopics(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
    };

    const handleAnswer = (pyqId: string | number, optionIndex: number) => {
        if (userAnswers[String(pyqId)] !== undefined) return;

        setUserAnswers(prev => ({ ...prev, [String(pyqId)]: optionIndex }));

        // Find question in the active set
        const question = subjectQuestions.find(q => q.id === pyqId);
        if (question) {
            const isCorrect = optionIndex === question.correctIndex;
            recordMCQAttempt(question.topic, question.topic, isCorrect);

            // Gamification
            awardXP('mcq_attempt');
            if (isCorrect) {
                awardXP('mcq_correct');
            }

            // Activity Logging
            ActivityLogger.logActivity({
                type: 'MCQ_PYQ',
                details: {
                    questionId: String(pyqId),
                    topic: question.topic,
                    subtopic: question.year.toString(), // Using year as subtopic for PYQs
                    isCorrect: isCorrect,
                    timeSpent: 0 // Not tracked for PYQs yet
                }
            });
        }
    };

    const filteredPYQs = subjectQuestions.filter(q => {
        const yearMatch = selectedYears.length === 0 || selectedYears.includes(q.year);
        const topicMatch = selectedTopics.length === 0 || selectedTopics.includes(q.topic);
        return yearMatch && topicMatch;
    });

    const solvedCount = Object.keys(userAnswers).filter(id => subjectQuestions.some(q => String(q.id) === id)).length;
    const progressPercentage = (solvedCount / (subjectQuestions.length || 1)) * 100;

    return (
        <div className="space-y-4 md:space-y-8 w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 pb-20">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl md:rounded-[2rem] backdrop-blur-3xl shadow-lg dark:shadow-2xl p-4 md:p-8 lg:p-10">
                <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:20px_20px] hidden md:block" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />

                <div className="relative flex flex-col gap-4 md:gap-6">
                    {/* Title Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="hidden md:flex items-center gap-2 mb-3">
                                <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                                    <Sparkles size={12} className="mr-1.5" /> Archives Declassified
                                </Badge>
                            </div>
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-1 md:mb-3">
                                PYQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Explorer</span>
                            </h2>
                            <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base font-medium max-w-xl hidden md:block">
                                Access historical intelligence data. Analyze patterns from 2013-2024 to predict future trajectories.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-200/50 dark:bg-white/5 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-slate-200 dark:border-white/10">
                            <Target size={16} className="text-emerald-600 dark:text-emerald-400" />
                            <span className="text-xs md:text-sm font-mono text-slate-600 dark:text-gray-300">
                                <span className="text-slate-900 dark:text-white font-bold">{solvedCount}</span> / {subjectQuestions.length} Resolved
                            </span>
                        </div>
                    </div>

                    {/* Subject Selection */}
                    {/* Mobile: Dropdown */}
                    <div className="md:hidden">
                        <select
                            value={activeSubject}
                            onChange={(e) => { setActiveSubject(e.target.value); setSelectedTopics([]); setSelectedYears([]); }}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                        >
                            {Object.keys(subjectDataMap).map(sub => (
                                <option key={sub} value={sub}>{sub}</option>
                            ))}
                        </select>
                    </div>

                    {/* Desktop: Wrapping Tabs */}
                    <div className="hidden md:flex flex-wrap gap-2 lg:gap-3 bg-white/60 dark:bg-black/60 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md">
                        {Object.keys(subjectDataMap).map(sub => (
                            <button
                                key={sub}
                                onClick={() => { setActiveSubject(sub); setSelectedTopics([]); setSelectedYears([]); }}
                                className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg lg:rounded-xl text-sm lg:text-base font-bold uppercase transition-all duration-300 ${activeSubject === sub ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"}`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Sticky Sidebar */}
                <div className="lg:col-span-3 xl:col-span-2 title-sticky lg:top-24 space-y-4">
                    <div className="bg-slate-100/50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-[1.5rem] backdrop-blur-xl overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-white/5 flex justify-between items-center cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
                            <div className="flex items-center gap-2">
                                <Filter size={14} className="text-blue-600 dark:text-blue-400" />
                                <span className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-white">Filter Intel</span>
                            </div>
                            <ChevronRight size={14} className={`text-slate-500 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
                        </div>

                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 space-y-6">
                                        {/* Years */}
                                        <div className="space-y-3">
                                            <span className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest px-1">Timeline</span>
                                            <div className="flex flex-wrap gap-2">
                                                {allYears.map(year => (
                                                    <button
                                                        key={year}
                                                        onClick={() => toggleYear(year)}
                                                        className={`relative overflow-hidden px-2.5 py-1 rounded-md text-[10px] font-bold transition-all border ${selectedYears.includes(year) ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-white/50 dark:bg-white/5 text-slate-600 dark:text-gray-400 border-slate-200 dark:border-white/5 hover:border-blue-400'}`}
                                                    >
                                                        {year}
                                                        <span className={`ml-1.5 text-[9px] opacity-70 ${selectedYears.includes(year) ? 'text-blue-100' : 'text-slate-400 dark:text-gray-600'}`}>
                                                            {yearCounts[year]}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Topics */}
                                        <div className="space-y-3">
                                            <span className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest px-1">Classified Sectors</span>
                                            <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                                {allTopics.map(topic => (
                                                    <button
                                                        key={topic}
                                                        onClick={() => toggleTopic(topic)}
                                                        className={`w-full flex justify-between items-start text-left px-3 py-2 rounded-lg text-[11px] font-medium transition-all group ${selectedTopics.includes(topic) ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30' : 'hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 border border-transparent'}`}
                                                    >
                                                        <span className="line-clamp-2">{topic}</span>
                                                        <span className={`px-1.5 py-0.5 rounded-sm text-[9px] font-bold bg-slate-200 dark:bg-black/20 shrink-0 ml-2 ${selectedTopics.includes(topic) ? 'text-amber-700 dark:text-amber-300' : 'text-slate-500 dark:text-gray-600'}`}>
                                                            {topicCounts[topic]}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {(selectedYears.length > 0 || selectedTopics.length > 0) && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full text-[10px] font-black uppercase border-red-500/20 text-red-400 hover:bg-red-500/10 hover:text-red-300 h-8"
                                                onClick={() => { setSelectedYears([]); setSelectedTopics([]); }}
                                            >
                                                Clear Filters
                                            </Button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9 xl:col-span-10 space-y-6">
                    {/* Active Filters Display */}
                    {(selectedYears.length > 0 || selectedTopics.length > 0) && (
                        <div className="flex flex-wrap gap-2 pb-2">
                            {selectedYears.map(y => (
                                <Badge key={y} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 cursor-pointer" onClick={() => toggleYear(y)}>
                                    {y} <XCircle size={10} className="ml-1" />
                                </Badge>
                            ))}
                            {selectedTopics.map(t => (
                                <Badge key={t} className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 cursor-pointer" onClick={() => toggleTopic(t)}>
                                    {t} <XCircle size={10} className="ml-1" />
                                </Badge>
                            ))}
                        </div>
                    )}

                    <div className="space-y-4">
                        {filteredPYQs.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 bg-white/[0.02] border border-dashed border-white/10 rounded-[2rem]">
                                <Lock size={48} className="text-gray-700 mb-4" />
                                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No Intel Found</p>
                                <p className="text-gray-600 text-xs mt-2">Adjust your clearance filters to access data.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {filteredPYQs.map((pyq, index) => (
                                    <PYQCard
                                        key={pyq.id}
                                        pyq={pyq}
                                        index={index}
                                        userAnswer={userAnswers[String(pyq.id)]}
                                        onAnswer={(idx) => handleAnswer(pyq.id, idx)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PYQCard({ pyq, userAnswer, onAnswer, index }: {
    pyq: PYQQuestion,
    userAnswer: number | undefined,
    onAnswer: (idx: number) => void,
    index: number
}) {
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === pyq.correctIndex;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.03, 0.3) }}
            className={`relative p-4 md:p-6 lg:p-8 xl:p-10 rounded-xl md:rounded-[1.5rem] lg:rounded-[2rem] border backdrop-blur-3xl transition-all duration-500 overflow-hidden group ${isAnswered ? (isCorrect ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-600/5 to-transparent' : 'border-red-500/30 bg-gradient-to-br from-red-600/5 to-transparent') : 'border-slate-200 dark:border-white/10 hover:border-blue-500/30 bg-slate-50 dark:bg-black/20 shadow-sm hover:shadow-lg'}`}
        >
            {/* Background Decorations */}
            <div className={`absolute top-0 right-0 p-3 opacity-30 ${isAnswered ? (isCorrect ? 'text-emerald-500' : 'text-red-500') : 'text-slate-300 dark:text-gray-700'}`}>
                {isAnswered ? (isCorrect ? <CheckCircle size={80} className="opacity-10" /> : <XCircle size={80} className="opacity-10" />) : <HelpCircle size={80} className="opacity-5" />}
            </div>

            {/* Meta Header */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 relative z-10">
                <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                        {pyq.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {pyq.topic}
                    </span>
                    {pyq.difficulty && (
                        <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${pyq.difficulty === 'Easy' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                            pyq.difficulty === 'Moderate' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                'bg-red-500/10 border-red-500/20 text-red-400'
                            }`}>
                            {pyq.difficulty}
                        </span>
                    )}
                </div>
            </div>

            {/* Question Text with Paper Layout */}
            <div className="text-slate-900 dark:text-white font-medium text-lg leading-relaxed mb-8 relative z-10 font-sans space-y-3">
                <span className="text-slate-400 dark:text-gray-500 font-mono text-xs mr-2">Q{index + 1}.</span>
                {pyq.question.split(/(\d+\.\s|(?:\(?[ivx]+\)?)\.\s|(?=Which of the|Select the correct answer))/g).map((part, i, arr) => {
                    if (!part) return null;
                    if (/^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(part)) {
                        return <div key={i} className="flex gap-2">
                            <span className="font-bold text-blue-600 dark:text-blue-400 shrink-0">{part}</span>
                            <span className="text-slate-800 dark:text-slate-200">{arr[i + 1]}</span>
                        </div>;
                    }
                    if (i > 0 && /^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(arr[i - 1])) return null;
                    const isTrailer = /^(Which of the|Select the correct answer)/.test(part);
                    return <div key={i} className={isTrailer ? "pt-2 border-t border-slate-100 dark:border-slate-800 text-base font-semibold text-slate-500 dark:text-slate-400" : ""}>
                        {part}
                    </div>;
                })}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                {pyq.options.map((option, idx) => {
                    let btnClass = "relative w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 overflow-hidden group/opt";
                    let markerClass = "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 transition-colors mt-0.5";

                    if (!isAnswered) {
                        btnClass += " bg-white/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:border-blue-400/50 dark:hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5";
                        markerClass += " bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-gray-500 group-hover/opt:bg-blue-600 group-hover/opt:text-white";
                    } else {
                        if (idx === pyq.correctIndex) {
                            btnClass += " bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                            markerClass += " bg-emerald-600 text-white";
                        } else if (idx === userAnswer) {
                            btnClass += " bg-red-500/10 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]";
                            markerClass += " bg-red-600 text-white";
                        } else {
                            btnClass += " bg-slate-100 dark:bg-black/20 border-slate-200 dark:border-white/5 opacity-50 grayscale";
                            markerClass += " bg-slate-200 dark:bg-black/40 text-slate-400 dark:text-gray-600";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => !isAnswered && onAnswer(idx)}
                            disabled={isAnswered}
                            className={btnClass}
                        >
                            <span className={markerClass}>
                                {String.fromCharCode(65 + idx)}
                            </span>
                            <span className={`text-sm font-medium leading-snug ${isAnswered && idx === pyq.correctIndex ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-700 dark:text-gray-400 group-hover/opt:text-blue-700 dark:group-hover/opt:text-white'}`}>
                                {option}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Explanation Dossier */}
            <AnimatePresence>
                {isAnswered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
                        className="overflow-hidden"
                    >
                        <div className="p-1 rounded-[1.5rem] bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent">
                            <div className="bg-black/80 rounded-[1.4rem] p-6 border border-blue-500/10 relative">
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">Classified Intelligence</span>
                                </div>
                                <div className="mt-6 text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-500/30 italic">
                                    {pyq.explanation}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

