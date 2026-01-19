"use client";

import React, { useState, useMemo } from 'react';
import { Filter, CheckCircle, XCircle, HelpCircle, BookOpen, Clock, Zap, Target, Sparkles, ChevronRight, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';
import { recordMCQAttempt } from '@/lib/analytics/WeakTopicAnalyzer';
import { POLITY_PYQS } from './data/polity-pyqs';
import { HISTORY_PYQS } from './data/history-pyqs';
import { GEOGRAPHY_PYQS } from './data/geography-pyqs';
import { ECONOMY_PYQS } from './data/economy-pyqs';
import { SCIENCE_PYQS } from './data/science-pyqs';
import { PYQQuestion } from '@/lib/pyq/pyq-types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { awardXP } from '@/lib/gamification/xp-engine';

export default function PYQExplorer() {
    const [activeSubject, setActiveSubject] = useState("Polity");
    const [selectedYears, setSelectedYears] = useState<number[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

    // Combine Data Map
    const subjectDataMap: Record<string, PYQQuestion[]> = {
        "Polity": POLITY_PYQS,
        "History": HISTORY_PYQS,
        "Geography": GEOGRAPHY_PYQS,
        "Economy": ECONOMY_PYQS,
        "Science": SCIENCE_PYQS
    };

    const subjectQuestions = useMemo(() => {
        return subjectDataMap[activeSubject] || [];
    }, [activeSubject]);

    const allYears = useMemo(() => [...new Set(subjectQuestions.map(q => q.year))].sort((a, b) => b - a), [subjectQuestions]);
    const allTopics = useMemo(() => [...new Set(subjectQuestions.map(q => q.topic))].sort(), [subjectQuestions]);

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

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="text-yellow-400" size={16} />
                        <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase leading-none">Archives Retrieval</span>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">PYQ Explorer <span className="text-gray-500 text-sm font-medium tracking-normal italic ml-2">2013-2025</span></h2>
                </div>

                <div className="flex flex-wrap gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/10 shadow-inner overflow-x-auto no-scrollbar max-w-full">
                    {Object.keys(subjectDataMap).map(sub => (
                        <button
                            key={sub}
                            onClick={() => { setActiveSubject(sub); setSelectedTopics([]); setSelectedYears([]); }}
                            className={`px-5 py-2 rounded-xl text-xs font-black uppercase transition-all whitespace-nowrap ${activeSubject === sub ? "bg-white text-black shadow-[0_5px_15px_rgba(255,255,255,0.2)]" : "text-gray-500 hover:text-white"}`}
                        >
                            {sub}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Console */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <Filter size={14} className="text-blue-400" />
                            <h3 className="text-xs font-black uppercase tracking-widest text-white">Refine Search</h3>
                        </div>

                        {/* Year Filter */}
                        <div className="space-y-3 mb-8">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block px-1">Temporality</span>
                            <div className="flex flex-wrap gap-2">
                                {allYears.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => toggleYear(year)}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all border ${selectedYears.includes(year) ? 'bg-blue-500 text-white border-blue-400 shadow-[0_4px_10px_rgba(59,130,246,0.3)]' : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'}`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Topic Filter */}
                        <div className="space-y-3">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block px-1">Structural Segments</span>
                            <div className="flex flex-col gap-2">
                                {allTopics.map(topic => (
                                    <button
                                        key={topic}
                                        onClick={() => toggleTopic(topic)}
                                        className={`w-full text-left px-4 py-2 rounded-xl text-[10px] font-bold transition-all border ${selectedTopics.includes(topic) ? 'bg-amber-400/10 text-amber-400 border-amber-400/30' : 'bg-black/20 text-gray-500 border-white/5 hover:border-white/20'}`}
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {(selectedYears.length > 0 || selectedTopics.length > 0) && (
                            <Button
                                variant="ghost"
                                className="w-full mt-6 text-[10px] font-black uppercase text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                onClick={() => { setSelectedYears([]); setSelectedTopics([]); }}
                            >
                                Reset Filters
                            </Button>
                        )}
                    </div>

                    {/* Quick Stats */}
                    <div className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[2rem] relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="text-yellow-400" size={16} />
                                <span className="text-xs font-black uppercase text-white">Mission Stats</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-gray-400 font-bold">Solved</span>
                                    <span className="text-lg font-black text-white">{Object.keys(userAnswers).length}</span>
                                </div>
                                <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${(Object.keys(userAnswers).length / (subjectQuestions.length || 1)) * 100}%` }} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Target size={80} />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <ScrollArea className="h-[800px] pr-4 no-scrollbar">
                        <div className="space-y-6">
                            {filteredPYQs.length === 0 ? (
                                <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10">
                                    <p className="text-gray-500 font-bold uppercase tracking-widest mb-4">No intel found in archives</p>
                                    <Button variant="outline" className="rounded-full border-white/10 bg-white/5 font-black uppercase tracking-widest" onClick={() => { setSelectedYears([]); setSelectedTopics([]); }}>
                                        Clear Search
                                    </Button>
                                </div>
                            ) : (
                                filteredPYQs.map((pyq) => (
                                    <PYQCard
                                        key={pyq.id}
                                        pyq={pyq}
                                        userAnswer={userAnswers[String(pyq.id)]}
                                        onAnswer={(idx) => handleAnswer(pyq.id, idx)}
                                    />
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}

function PYQCard({ pyq, userAnswer, onAnswer }: {
    pyq: PYQQuestion,
    userAnswer: number | undefined,
    onAnswer: (idx: number) => void
}) {
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === pyq.correctIndex;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500 overflow-hidden group ${isAnswered ? (isCorrect ? 'border-green-500/30 bg-green-500/[0.02]' : 'border-red-500/30 bg-red-500/[0.02]') : 'border-white/10 hover:border-blue-400/30 bg-white/[0.02]'}`}
        >
            {/* Meta */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                        {pyq.year}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {pyq.topic}
                    </div>
                </div>
                {isAnswered && (
                    <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${isCorrect ? 'bg-green-500 text-green-950' : 'bg-red-500 text-red-950'}`}>
                        {isCorrect ? "Precision Achieved" : "Inaccurate Probe"}
                    </div>
                )}
            </div>

            {/* Question */}
            <p className="text-white font-black text-xl mb-8 leading-tight tracking-tight">
                {pyq.question}
            </p>

            {/* Options */}
            <div className="grid gap-4">
                {pyq.options.map((option, idx) => {
                    let btnClass = "relative w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 overflow-hidden group/opt";

                    if (!isAnswered) {
                        btnClass += " bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20";
                    } else {
                        if (idx === pyq.correctIndex) {
                            btnClass += " bg-green-500/20 border-green-500/50 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.1)]";
                        } else if (idx === userAnswer) {
                            btnClass += " bg-red-500/20 border-red-500/50 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.1)]";
                        } else {
                            btnClass += " bg-black/20 border-white/5 opacity-40 grayscale pointer-events-none";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => !isAnswered && onAnswer(idx)}
                            disabled={isAnswered}
                            className={btnClass}
                        >
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${!isAnswered ? 'bg-black/40 text-gray-400 group-hover/opt:text-white group-hover/opt:bg-blue-500' : (idx === pyq.correctIndex ? 'bg-green-500 text-black' : 'bg-red-500 text-black')}`}>
                                {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="flex-1 text-sm font-bold tracking-tight">{option}</span>

                            {isAnswered && idx === pyq.correctIndex && (
                                <CheckCircle className="text-green-500 shrink-0" size={20} />
                            )}
                            {isAnswered && idx === userAnswer && idx !== pyq.correctIndex && (
                                <XCircle className="text-red-500 shrink-0" size={20} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
                {isAnswered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-8 pt-8 border-t border-white/5"
                    >
                        <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3 text-blue-400 font-black uppercase tracking-[0.2em] text-[10px]">
                                    <HelpCircle size={14} /> Intelligence Synthesis
                                </div>
                                <p className="text-blue-100/70 text-sm leading-relaxed font-medium italic">
                                    "{pyq.explanation}"
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <BookOpen size={60} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

