"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    XCircle,
    Target,
    ChevronRight,
    Timer,
    AlertCircle,
    Brain,
    ArrowLeft,
    ChevronLeft,
    Info,
    Trophy
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";

export interface HistoryMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    chapterId?: number;
}

export interface MCQResult {
    questionId: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: 'sure' | '50-50' | 'one-option' | 'blind' | null;
    timeSpent: number;
}

interface HistoryMCQSessionProps {
    questions: HistoryMCQ[];
    onComplete: (results: MCQResult[]) => void;
    onCancel: () => void;
    title: string;
}

export default function HistoryMCQSession({
    questions,
    onComplete,
    onCancel,
    title
}: HistoryMCQSessionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confidence, setConfidence] = useState<MCQResult['confidence']>(null);
    const [results, setResults] = useState<Record<string, MCQResult>>({});
    const [timeLeft, setTimeLeft] = useState(questions.length * 60); // 1 min per question
    const [questionStartTime, setQuestionStartTime] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    const handleNext = () => {
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

        const newResult: MCQResult = {
            questionId: currentQuestion.id,
            selectedAnswer,
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect,
            confidence,
            timeSpent
        };

        const updatedResults = { ...results, [currentQuestion.id]: newResult };
        setResults(updatedResults);

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            const nextQ = questions[currentIndex + 1];
            const existing = updatedResults[nextQ.id];
            setSelectedAnswer(existing?.selectedAnswer ?? null);
            setConfidence(existing?.confidence ?? null);
            setQuestionStartTime(Date.now());
        } else {
            onComplete(Object.values(updatedResults));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            const prevQ = questions[currentIndex - 1];
            const existing = results[prevQ.id];
            setSelectedAnswer(existing?.selectedAnswer ?? null);
            setConfidence(existing?.confidence ?? null);
            setQuestionStartTime(Date.now());
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-black overflow-hidden rounded-3xl">
            {/* Session Header */}
            <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={onCancel} className="text-white hover:bg-white/10 px-2 rounded-xl">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h3 className="font-bold text-lg">{title}</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Target className="h-3 w-3" />
                            <span>Question {currentIndex + 1} of {questions.length}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Time Remaining</div>
                        <div className={`text-2xl font-black tabular-nums ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-amber-400'}`}>
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                        <Trophy className="h-6 w-6 text-amber-500" />
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 shrink-0">
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            {/* Question Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm relative group">
                            <div className="absolute -left-3 top-8 w-1.5 h-12 bg-amber-500 rounded-full" />
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                                {currentQuestion.question}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedAnswer(idx)}
                                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-5 group ${selectedAnswer === idx
                                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 shadow-md transform scale-[1.01]'
                                        : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-amber-200'
                                        }`}
                                >
                                    <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${selectedAnswer === idx ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                        }`}>
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <span className={`text-lg transition-colors ${selectedAnswer === idx ? 'text-amber-900 dark:text-amber-200 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {option}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Confidence & Navigation Footer */}
            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Brain className="h-4 w-4 text-amber-500" />
                            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Confidence Level</span>
                        </div>
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl gap-1">
                            {(['sure', '50-50', 'one-option', 'blind'] as const).map((level) => (
                                <button
                                    key={level}
                                    disabled={selectedAnswer === null}
                                    onClick={() => setConfidence(level)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${confidence === level
                                        ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700 disabled:opacity-30'
                                        }`}
                                >
                                    {level === 'sure' && '✅ 100%'}
                                    {level === '50-50' && '🤔 50-50'}
                                    {level === 'one-option' && '💡 Eliminated'}
                                    {level === 'blind' && '🎲 Guess'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Button
                            variant="outline"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="h-12 px-6 rounded-2xl border-slate-200 dark:border-slate-700"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>

                        <Button
                            onClick={handleNext}
                            disabled={selectedAnswer === null || confidence === null}
                            className={`h-12 px-10 rounded-2xl font-black transition-all ${currentIndex === questions.length - 1
                                ? 'bg-orange-600 hover:bg-orange-700 text-white'
                                : 'bg-slate-900 dark:bg-white dark:text-slate-900'
                                }`}
                        >
                            {currentIndex === questions.length - 1 ? 'Finish Challenge' : 'Save & Next'}
                            {currentIndex < questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
