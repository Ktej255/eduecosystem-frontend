"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CheckCircle2, Target, ChevronRight, Timer, AlertCircle, BookOpen, ArrowLeft, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useMCQShortcuts } from '@/hooks/useKeyboardShortcuts';
import { QuestionResult } from '../reports/StandardTestReport';
import { formatQuestionText } from '@/lib/mcq-formatter';

// Shared Types
export type ConfidenceLevel = 'sure' | '50-50' | 'one-option' | 'blind' | 'other';

export type MCQ = StandardMCQ;

export interface StandardMCQ {
    id: number | string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string; // Identifier for analysis
    chapter: string; // Identifier for analysis
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

interface StandardMCQInterfaceProps {
    questions: StandardMCQ[];
    onComplete: (results: QuestionResult[], totalTime: number) => void;
    title?: string;
    subtitle?: string;
    onExit: () => void;
}

export default function StandardMCQInterface({
    questions,
    onComplete,
    title = "Practice Session",
    subtitle = "Standardized MCQ Test",
    onExit
}: StandardMCQInterfaceProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
    const [results, setResults] = useState<Record<string, QuestionResult>>({});
    const [isGlobalTimeout, setIsGlobalTimeout] = useState(false);

    // Track time spent per question
    const [questionStartTime, setQuestionStartTime] = useState(Date.now());
    const [sessionStartTime] = useState(Date.now());

    // Dynamic Timer Logic
    const totalTimeSeconds = useMemo(() => {
        const count = questions.length;
        if (count >= 100) return 2 * 60 * 60; // 2 hours
        return count * 60; // 1 minute per question default
    }, [questions.length]);

    const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentMCQ = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const isLastQuestion = currentIndex === questions.length - 1;

    // Timer logic
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setIsGlobalTimeout(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (isGlobalTimeout) {
            handleFinish();
        }
    }, [isGlobalTimeout]);

    const handleAnswerSelect = (optionIndex: number) => {
        if (isGlobalTimeout) return;
        setSelectedAnswer(optionIndex);
    };

    const handleConfidenceSelect = (level: ConfidenceLevel) => {
        if (isGlobalTimeout) return;
        setConfidence(level);
    };

    const saveCurrentResult = () => {
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCorrect = selectedAnswer === currentMCQ.correctAnswer;

        setResults(prev => ({
            ...prev,
            [currentMCQ.id]: {
                id: currentMCQ.id,
                question: currentMCQ.question,
                options: currentMCQ.options,
                explanation: currentMCQ.explanation,
                chapter: currentMCQ.chapter,
                subtopic: currentMCQ.subtopic,
                userAnswer: selectedAnswer,
                correctAnswer: currentMCQ.correctAnswer,
                confidence,
                timeSpent,
                isCorrect
            }
        }));
    };

    const handleNext = () => {
        saveCurrentResult();
        if (isLastQuestion) {
            handleFinish();
        } else {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            const existing = results[questions[nextIndex].id];
            if (existing) {
                setSelectedAnswer(existing.userAnswer);
                setConfidence(existing.confidence);
            } else {
                setSelectedAnswer(null);
                setConfidence(null);
            }
            setQuestionStartTime(Date.now());
        }
    };

    const handlePrevious = () => {
        saveCurrentResult();
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            const existing = results[questions[prevIndex].id];
            if (existing) {
                setSelectedAnswer(existing.userAnswer);
                setConfidence(existing.confidence);
            }
            setQuestionStartTime(Date.now());
        }
    };

    const handleFinish = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Save final question state
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCorrect = selectedAnswer === currentMCQ.correctAnswer;
        const finalResultsMap = { ...results };

        // Add current question to map
        finalResultsMap[currentMCQ.id] = {
            id: currentMCQ.id,
            question: currentMCQ.question,
            options: currentMCQ.options,
            explanation: currentMCQ.explanation,
            chapter: currentMCQ.chapter,
            subtopic: currentMCQ.subtopic,
            userAnswer: selectedAnswer,
            correctAnswer: currentMCQ.correctAnswer,
            confidence,
            timeSpent,
            isCorrect
        };

        // Fill unattempted
        questions.forEach(q => {
            if (!finalResultsMap[q.id]) {
                finalResultsMap[q.id] = {
                    id: q.id,
                    question: q.question,
                    options: q.options,
                    explanation: q.explanation,
                    chapter: q.chapter,
                    subtopic: q.subtopic,
                    userAnswer: null,
                    correctAnswer: q.correctAnswer,
                    confidence: null,
                    timeSpent: 0,
                    isCorrect: false
                };
            }
        });

        const totalSessionTime = Math.floor((Date.now() - sessionStartTime) / 1000);
        onComplete(Object.values(finalResultsMap), totalSessionTime);
    };

    // ... (keep existing helper)
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    // Keyboard Shortcuts
    useMCQShortcuts(
        (index) => handleAnswerSelect(index),
        () => { },
        handleNext,
        !isGlobalTimeout
    );

    const [isPaletteOpen, setIsPaletteOpen] = useState(false);

    if (questions.length === 0) return <div>No Questions Available</div>;

    return (
        <div className="animate-in fade-in duration-300 min-h-screen bg-muted dark:bg-black p-4 md:p-6 pb-24 md:pb-6 relative">
            <Card className="max-w-6xl mx-auto bg-card border-border shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                {/* Left Side: Question Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Header */}
                    <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" onClick={onExit} className="text-muted-foreground hover:text-white">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <Target className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-white">{title}</h3>
                                <p className="text-[10px] text-muted-foreground">{subtitle}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] uppercase text-muted-foreground font-bold">Time Remaining</span>
                                <div className={`flex items-center gap-2 text-xl font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-indigo-400'}`}>
                                    <Timer className="h-5 w-5" />
                                    {formatTime(timeLeft)}
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="md:hidden"
                                onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                            >
                                {isPaletteOpen ? 'Hide Map' : 'Show Map'}
                            </Button>
                        </div>
                    </div>

                    <div className="p-4 md:p-6 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                        {/* Progress Bar */}
                        <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden shrink-0">
                            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>

                        {/* Question Area */}
                        <div className="flex-1 space-y-6">
                            <div className="bg-muted/50 rounded-2xl p-6 border border-slate-100 relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                                        QUESTION {currentIndex + 1}
                                    </span>
                                    {currentMCQ.difficulty && (
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentMCQ.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                                            currentMCQ.difficulty === 'Moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                                            }`}>
                                            {currentMCQ.difficulty}
                                        </span>
                                    )}
                                </div>
                                <div className="text-lg md:text-xl font-medium text-foreground leading-relaxed space-y-3">
                                    {formatQuestionText(currentMCQ.question).map((line, lIdx) => {
                                        const isStatement = /^\s*(\d+\.|[a-zA-I]\.|Statement\s+[IVX]+:)/i.test(line);
                                        return (
                                            <p key={lIdx} className={`${isStatement ? 'ml-4 pl-4 border-l-2 border-border italic text-muted-foreground dark:text-muted-foreground' : ''} whitespace-pre-wrap`}>
                                                {line.trim()}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Options */}
                            <div className="space-y-3">
                                {currentMCQ.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(index)}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 ring-2 ring-indigo-500/10 shadow-md'
                                                : 'bg-card border-border hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-bold transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground dark:text-muted-foreground group-hover:bg-indigo-100 group-hover:text-indigo-700'}`}>
                                                {String.fromCharCode(65 + index)}
                                            </div>
                                            <span className={`flex-1 text-base ${isSelected ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-foreground font-medium'}`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Confidence Strip */}
                        <div className="mt-6 pt-4 border-t border-slate-100 space-y-4 shrink-0">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-indigo-500" />
                                    Select Confidence
                                </h4>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                                {/* Sure Shot */}
                                <button onClick={() => handleConfidenceSelect('sure')} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'sure' ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300 font-bold shadow-sm' : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-green-300 hover:bg-green-50/50'}`}>
                                    <div className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${confidence === 'sure' ? 'text-green-600' : 'text-muted-foreground'}`} /><span>Sure Shot</span></div>
                                    <span className="text-[10px] opacity-70">100% Certain</span>
                                </button>
                                {/* 50-50 */}
                                <button onClick={() => handleConfidenceSelect('50-50')} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === '50-50' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 text-amber-700 dark:text-amber-300 font-bold shadow-sm' : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-amber-300 hover:bg-amber-50/50'}`}>
                                    <div className="flex items-center gap-2"><AlertCircle className={`h-4 w-4 ${confidence === '50-50' ? 'text-amber-600' : 'text-muted-foreground'}`} /><span>50-50</span></div>
                                    <span className="text-[10px] opacity-70">Confused b/w 2</span>
                                </button>
                                {/* One Option */}
                                <button onClick={() => handleConfidenceSelect('one-option')} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'one-option' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300 font-bold shadow-sm' : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-blue-300 hover:bg-blue-50/50'}`}>
                                    <div className="flex items-center gap-2"><Target className={`h-4 w-4 ${confidence === 'one-option' ? 'text-blue-600' : 'text-muted-foreground'}`} /><span>One Option</span></div>
                                    <span className="text-[10px] opacity-70">Eliminated others</span>
                                </button>
                                {/* Blind */}
                                <button onClick={() => handleConfidenceSelect('blind')} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'blind' ? 'bg-muted border-slate-500 text-foreground font-bold shadow-sm' : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-slate-400 hover:bg-muted'}`}>
                                    <div className="flex items-center gap-2"><BookOpen className={`h-4 w-4 ${confidence === 'blind' ? 'text-muted-foreground' : 'text-muted-foreground'}`} /><span>Blind Guess</span></div>
                                    <span className="text-[10px] opacity-70">No Idea</span>
                                </button>
                                {/* Other */}
                                <button onClick={() => handleConfidenceSelect('other')} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'other' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 text-purple-700 dark:text-purple-300 font-bold shadow-sm' : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-purple-300 hover:bg-purple-50/50'}`}>
                                    <div className="flex items-center gap-2"><HelpCircle className={`h-4 w-4 ${confidence === 'other' ? 'text-purple-600' : 'text-muted-foreground'}`} /><span>Other</span></div>
                                    <span className="text-[10px] opacity-70">Unspecified</span>
                                </button>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 shrink-0">
                            <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0} className="px-6 h-12 rounded-xl text-muted-foreground">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={handleNext} className={`px-10 h-12 rounded-xl font-bold transition-all shadow-lg ${isLastQuestion ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-900 hover:bg-black text-white'}`}>
                                {isLastQuestion ? 'Submit Test' : 'Save & Next'}
                                {!isLastQuestion && <ChevronRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Question Palette (Desktop: Always, Mobile: Toggle) */}
                <div className={`
                    fixed inset-0 z-50 bg-card md:static md:w-80 md:border-l border-border flex flex-col transition-transform duration-300
                    ${isPaletteOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}>
                    <div className="p-4 border-b border-border flex justify-between items-center bg-muted/50">
                        <h3 className="font-bold text-muted-foreground">Question Map</h3>
                        <Button variant="ghost" size="sm" onClick={() => setIsPaletteOpen(false)} className="md:hidden">
                            Start Solving
                        </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                        <div className="grid grid-cols-4 gap-2">
                            {questions.map((q, idx) => {
                                const result = results[q.id];
                                const isAnswered = result?.userAnswer !== null && result?.userAnswer !== undefined; // Check saved result
                                const isCurrent = currentIndex === idx;
                                const isSkipped = result && result.userAnswer === null; // Explicitly skipped in result

                                let bgClass = 'bg-muted/50 text-muted-foreground';
                                if (isCurrent) bgClass = 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-500';
                                else if (isAnswered) bgClass = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
                                else if (isSkipped) bgClass = 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            saveCurrentResult(); // Save current before switching
                                            setCurrentIndex(idx);
                                            // Restore state for target question
                                            const existing = results[questions[idx].id];
                                            if (existing) {
                                                setSelectedAnswer(existing.userAnswer);
                                                setConfidence(existing.confidence);
                                            } else {
                                                setSelectedAnswer(null);
                                                setConfidence(null);
                                            }
                                            setQuestionStartTime(Date.now());
                                            setIsPaletteOpen(false); // Close on mobile selection
                                        }}
                                        className={`
                                            h-10 rounded-lg text-xs font-bold transition-all hover:scale-105
                                            ${bgClass}
                                        `}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-4 border-t border-border text-xs text-muted-foreground space-y-2 bg-muted/50">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-emerald-100 border border-emerald-200"></div>
                            <span>Answered</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-amber-100 border border-amber-200"></div>
                            <span>Skipped / Visited</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-indigo-100 border border-indigo-200"></div>
                            <span>Current</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-muted border border-border"></div>
                            <span>Not Visited</span>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
}
