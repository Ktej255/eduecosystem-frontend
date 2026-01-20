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
import { PYQQuestion } from '@/lib/pyq/pyq-types';
import { awardXP } from '@/lib/gamification/xp-engine';

export default function PYQExplorer() {
    const [activeSubject, setActiveSubject] = useState("Polity");
    const [selectedYears, setSelectedYears] = useState<number[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
    const [showFilters, setShowFilters] = useState(true);

    // Combine Data Map
    const subjectDataMap: Record<string, PYQQuestion[]> = {
        "Polity": POLITY_PYQS,
        "History": HISTORY_PYQS,
        "Geography": GEOGRAPHY_PYQS,
        "Economy": ECONOMY_PYQS,
        "Science": SCIENCE_PYQS,
        "Environment": ENVIRONMENT_PYQS
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
        <div className="space-y-6 max-w-7xl mx-auto pb-20">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-black/40 border border-white/10 rounded-[2rem] backdrop-blur-3xl shadow-2xl p-8">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-[10px] font-black tracking-widest uppercase">
                                <Sparkles size={10} className="mr-1" /> Archives Declassified
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
                            PYQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Explorer</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium max-w-lg">
                            Access historical intelligence data. Analyze patterns from 2013-2024 to predict future trajectories.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                        <div className="flex bg-black/60 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                            {Object.keys(subjectDataMap).map(sub => (
                                <button
                                    key={sub}
                                    onClick={() => { setActiveSubject(sub); setSelectedTopics([]); setSelectedYears([]); }}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-300 ${activeSubject === sub ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"}`}
                                >
                                    {sub}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <Target size={14} className="text-emerald-400" />
                            <span className="text-xs font-mono text-gray-300">
                                <span className="text-white font-bold">{solvedCount}</span> / {subjectQuestions.length} Resolved
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Sticky Sidebar */}
                <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
                    <div className="bg-black/30 border border-white/10 rounded-[1.5rem] backdrop-blur-xl overflow-hidden">
                        <div className="p-4 border-b border-white/5 flex justify-between items-center cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
                            <div className="flex items-center gap-2">
                                <Filter size={14} className="text-blue-400" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">Filter Intel</span>
                            </div>
                            <ChevronRight size={14} className={`text-gray-500 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
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
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Timeline</span>
                                            <div className="flex flex-wrap gap-2">
                                                {allYears.map(year => (
                                                    <button
                                                        key={year}
                                                        onClick={() => toggleYear(year)}
                                                        className={`relative overflow-hidden px-3 py-1.5 rounded-md text-[10px] font-bold transition-all border ${selectedYears.includes(year) ? 'bg-blue-500 text-white border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'}`}
                                                    >
                                                        {year}
                                                        <span className={`ml-1.5 text-[9px] opacity-70 ${selectedYears.includes(year) ? 'text-blue-100' : 'text-gray-600'}`}>
                                                            {yearCounts[year]}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Topics */}
                                        <div className="space-y-3">
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Classified Sectors</span>
                                            <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                                {allTopics.map(topic => (
                                                    <button
                                                        key={topic}
                                                        onClick={() => toggleTopic(topic)}
                                                        className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-[11px] font-medium transition-all group ${selectedTopics.includes(topic) ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'hover:bg-white/5 text-gray-400 border border-transparent'}`}
                                                    >
                                                        <span>{topic}</span>
                                                        <span className={`px-1.5 py-0.5 rounded-sm text-[9px] font-bold bg-black/20 ${selectedTopics.includes(topic) ? 'text-amber-300' : 'text-gray-600'}`}>
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
                <div className="lg:col-span-9 space-y-6">
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
                            filteredPYQs.map((pyq, index) => (
                                <PYQCard
                                    key={pyq.id}
                                    pyq={pyq}
                                    index={index}
                                    userAnswer={userAnswers[String(pyq.id)]}
                                    onAnswer={(idx) => handleAnswer(pyq.id, idx)}
                                />
                            ))
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
            transition={{ delay: index * 0.05 }}
            className={`relative p-6 md:p-8 rounded-[2rem] border backdrop-blur-3xl transition-all duration-500 overflow-hidden group ${isAnswered ? (isCorrect ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-950/10 to-transparent' : 'border-red-500/30 bg-gradient-to-br from-red-950/10 to-transparent') : 'border-white/10 hover:border-blue-400/30 bg-black/20'}`}
        >
            {/* Background Decorations */}
            <div className={`absolute top-0 right-0 p-3 opacity-30 ${isAnswered ? (isCorrect ? 'text-emerald-500' : 'text-red-500') : 'text-gray-700'}`}>
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

            {/* Question Text */}
            <p className="text-white font-medium text-lg leading-relaxed mb-8 relative z-10 font-sans">
                <span className="text-gray-500 font-mono text-xs mr-2">Q{index + 1}.</span>
                {pyq.question}
            </p>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                {pyq.options.map((option, idx) => {
                    let btnClass = "relative w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 overflow-hidden group/opt";
                    let markerClass = "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 transition-colors mt-0.5";

                    if (!isAnswered) {
                        btnClass += " bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5";
                        markerClass += " bg-white/10 text-gray-500 group-hover/opt:bg-blue-500 group-hover/opt:text-white";
                    } else {
                        if (idx === pyq.correctIndex) {
                            btnClass += " bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                            markerClass += " bg-emerald-500 text-black";
                        } else if (idx === userAnswer) {
                            btnClass += " bg-red-500/10 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]";
                            markerClass += " bg-red-500 text-black";
                        } else {
                            btnClass += " bg-black/20 border-white/5 opacity-50 grayscale";
                            markerClass += " bg-black/40 text-gray-600";
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
                            <span className={`text-sm font-medium leading-snug ${isAnswered && idx === pyq.correctIndex ? 'text-white' : 'text-gray-400 group-hover/opt:text-white'}`}>
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

