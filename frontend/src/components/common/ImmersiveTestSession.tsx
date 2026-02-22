"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Clock,
    ChevronLeft,
    ChevronRight,
    Send,
    AlertCircle,
    CheckCircle2,
    Bookmark,
    Timer,
    Keyboard,
    HelpCircle
} from "lucide-react";
import { useMCQShortcuts } from "@/hooks/useKeyboardShortcuts";

// Generic MCQ Interface
export interface TestMCQ {
    id: string | number;
    question: string;
    options: string[];
    correctIndex: number; // 0-indexed
    explanation: string;
    chapter?: string;
    subtopic?: string;
    difficulty?: string;
}

export interface TestResult {
    testTitle: string;
    startTime: string;
    endTime: string;
    totalTimeTaken: number;
    questions: {
        id: string | number;
        question: string;
        options: string[];
        explanation: string;
        chapter: string;
        subtopic: string;
        userAnswer: number | null;
        correctAnswer: number;
        confidence: 'sure' | '50-50' | 'one-option' | 'blind' | 'other' | null;
        timeSpent: number;
        isCorrect: boolean;
        visitCount: number;
        attemptRound: number; // 1 = First Reading, 2 = Second Reading, etc.
    }[];
    score: number;
    accuracy: number;
    correct: number;
    total: number;
}

interface ImmersiveTestSessionProps {
    questions: TestMCQ[];
    testTitle: string;
    durationSeconds: number; // e.g., 7200 for 2 hours
    onComplete: (results: TestResult) => void;
    onCancel: () => void;
}

export type ConfidenceLevel = 'sure' | '50-50' | 'one-option' | 'blind' | 'other' | null;

interface QuestionState {
    selectedAnswer: number | null;
    confidence: ConfidenceLevel;
    timeSpent: number; // in seconds
    isBookmarked: boolean;
    visitCount: number; // How many times visited
    answeredAtVisit: number | null; // At which visit count was it answered?
}

const ImmersiveTestSession: React.FC<ImmersiveTestSessionProps> = ({
    questions,
    testTitle,
    durationSeconds,
    onComplete,
    onCancel
}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<string | number, QuestionState>>({});
    const [timeLeft, setTimeLeft] = useState(durationSeconds);
    const [isFinishing, setIsFinishing] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [startTime] = useState(new Date().toISOString());

    // Initialize state
    useEffect(() => {
        // Track visit for the first question immediately or when currentIdx changes
        const currentId = questions[currentIdx].id;

        setAnswers(prev => {
            const currentState = prev[currentId] || {
                selectedAnswer: null,
                confidence: null,
                timeSpent: 0,
                isBookmarked: false,
                visitCount: 0,
                answeredAtVisit: null
            };

            // Only increment visit count if we are entering for the first time in this "session" (simple debounce logic if needed, but here simple increment works)
            // Actually, strict "visit" means every time we navigate TO it.
            // We use a functional update to avoid dependency loops, but we need to be careful not to increment on every render.
            // But this useEffect depends on [currentIdx], so it runs once per navigation.

            return {
                ...prev,
                [currentId]: {
                    ...currentState,
                    visitCount: currentState.visitCount + 1
                }
            };
        });
    }, [currentIdx, questions]);

    // Time tracking
    useEffect(() => {
        const timer = setInterval(() => {
            setAnswers(prev => {
                const currentId = questions[currentIdx].id;
                const currentState = prev[currentId];
                if (!currentState) return prev; // Should be initialized by above effect

                return {
                    ...prev,
                    [currentId]: {
                        ...currentState,
                        timeSpent: currentState.timeSpent + 1
                    }
                };
            });

            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleFinish();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentIdx, questions]);

    const handleAnswerSelect = (optionIdx: number) => {
        const currentId = questions[currentIdx].id;
        setAnswers(prev => {
            const current = prev[currentId];
            return {
                ...prev,
                [currentId]: {
                    ...current,
                    selectedAnswer: optionIdx,
                    answeredAtVisit: current.answeredAtVisit === null ? current.visitCount : current.answeredAtVisit
                }
            };
        });
    };

    const handleConfidenceSelect = (level: ConfidenceLevel) => {
        const currentId = questions[currentIdx].id;
        setAnswers(prev => ({
            ...prev,
            [currentId]: {
                ...prev[currentId],
                confidence: level
            }
        }));
    };

    const toggleBookmark = () => {
        const currentId = questions[currentIdx].id;
        setAnswers(prev => ({
            ...prev,
            [currentId]: {
                ...prev[currentId],
                isBookmarked: !prev[currentId]?.isBookmarked
            }
        }));
    };

    const handleFinish = useCallback(() => {
        setIsFinishing(true);
        // Process results
        const processedQuestions = questions.map(q => {
            const state = answers[q.id] || {
                selectedAnswer: null,
                confidence: null,
                timeSpent: 0,
                isBookmarked: false,
                visitCount: 0,
                answeredAtVisit: null
            };
            return {
                id: q.id,
                question: q.question,
                options: q.options,
                explanation: q.explanation,
                chapter: q.chapter || "General Polity",
                subtopic: q.subtopic || q.difficulty || "UPSC",
                userAnswer: state.selectedAnswer,
                correctAnswer: q.correctIndex,
                confidence: state.confidence,
                timeSpent: state.timeSpent,
                isCorrect: state.selectedAnswer === q.correctIndex,
                visitCount: state.visitCount,
                attemptRound: state.answeredAtVisit || 0
            };
        });

        const total = processedQuestions.length;
        const correct = processedQuestions.filter(q => q.isCorrect).length;
        const attempted = processedQuestions.filter(q => q.userAnswer !== null).length;
        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

        const results: TestResult = {
            testTitle,
            startTime,
            endTime: new Date().toISOString(),
            totalTimeTaken: durationSeconds - timeLeft,
            questions: processedQuestions,
            score: (correct * 2) - ((attempted - correct) * 0.66),
            accuracy,
            correct,
            total
        };

        onComplete(results);
    }, [answers, questions, testTitle, timeLeft, durationSeconds, startTime, onComplete]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // Keyboard Shortcuts
    useMCQShortcuts(
        (optionIdx) => handleAnswerSelect(optionIdx),
        () => {
            if (currentIdx < questions.length - 1) {
                setCurrentIdx(prev => prev + 1);
            } else {
                handleFinish();
            }
        },
        () => {
            if (currentIdx < questions.length - 1) {
                setCurrentIdx(prev => prev + 1);
            }
        },
        true
    );

    const currentQuestion = questions[currentIdx];
    const currentState = answers[currentQuestion.id] || {
        selectedAnswer: null,
        confidence: null,
        timeSpent: 0,
        isBookmarked: false,
        visitCount: 0,
        answeredAtVisit: null
    };

    const progress = ((Object.keys(answers).filter(id => answers[id].selectedAnswer !== null).length) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-100 p-4 font-sans">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex justify-between items-center mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm sticky top-4 z-20">
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        {testTitle}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-400" /> {formatTime(timeLeft)} left</span>
                        <span className="flex items-center gap-1.5"><Progress value={progress} className="w-24 h-2 bg-slate-700" /> {Math.round(progress)}% done</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setShowNav(!showNav)} className="bg-slate-800/50 border-slate-700">
                        Grid
                    </Button>
                    <Button variant="destructive" size="sm" onClick={onCancel} className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20">
                        Quit
                    </Button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Main Question Panel */}
                <div className="lg:col-span-3 space-y-4">
                    <Card className="p-8 bg-slate-900/40 border-slate-800 backdrop-blur-md min-h-[400px] flex flex-col relative">
                        {/* Watermark for Visit Count */}
                        <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-50">
                            Visit #{currentState.visitCount}
                        </div>

                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 px-2 py-1 bg-blue-400/10 rounded-md border border-blue-400/20">
                                Question {currentIdx + 1} of {questions.length}
                            </span>
                            <button
                                onClick={toggleBookmark}
                                className={`p-2 rounded-full transition-all ${currentState.isBookmarked ? 'text-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'text-muted-foreground hover:text-slate-300 hover:bg-slate-800'}`}
                            >
                                <Bookmark className={`w-6 h-6 ${currentState.isBookmarked ? 'fill-current' : ''}`} />
                            </button>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-xl font-medium leading-relaxed text-slate-100 mb-2 whitespace-pre-wrap">
                                {currentQuestion.question}
                            </h2>
                            <div className="flex gap-2 text-xs text-muted-foreground italic">
                                <span>{currentQuestion.chapter || 'Polity'}</span>
                                {currentQuestion.difficulty && <span>• {currentQuestion.difficulty}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mt-auto">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswerSelect(idx)}
                                    className={`group relative p-4 pl-12 rounded-xl text-left border transition-all duration-300 ${currentState.selectedAnswer === idx
                                        ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-blue-100'
                                        : 'bg-slate-800/30 border-slate-700/50 text-slate-300 hover:bg-slate-800/60 hover:border-slate-600'
                                        }`}
                                >
                                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${currentState.selectedAnswer === idx
                                        ? 'bg-blue-500 border-blue-400 text-white'
                                        : 'bg-slate-700 border-slate-600 text-muted-foreground group-hover:border-slate-500'
                                        }`}>
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </Card>

                    {/* Confidence Slider */}
                    <Card className="p-6 bg-slate-900/40 border-slate-800 backdrop-blur-md">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                            <Timer className="w-4 h-4 text-blue-400" />
                            Confidence Level
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { id: 'sure', label: 'Sure Shot', color: 'bg-emerald-500', icon: CheckCircle2 },
                                { id: '50-50', label: '50-50', color: 'bg-blue-500', icon: AlertCircle },
                                { id: 'one-option', label: 'One Option', color: 'bg-amber-500', icon: AlertCircle },
                                { id: 'blind', label: 'Blind Guess', color: 'bg-red-500', icon: AlertCircle },
                                { id: 'other', label: 'Other', color: 'bg-purple-500', icon: HelpCircle },
                            ].map((level) => (
                                <button
                                    key={level.id}
                                    onClick={() => handleConfidenceSelect(level.id as ConfidenceLevel)}
                                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${currentState.confidence === level.id
                                        ? `${level.color}/20 border-${level.color.split('-')[1]}-500/50`
                                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/60'
                                        }`}
                                >
                                    <level.icon className={`w-5 h-5 ${currentState.confidence === level.id ? `text-${level.color.split('-')[1]}-400` : 'text-muted-foreground'}`} />
                                    <span className={`text-xs font-medium ${currentState.confidence === level.id ? 'text-slate-100' : 'text-muted-foreground'}`}>
                                        {level.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </Card>

                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center py-4 px-2">
                        <Button
                            variant="outline"
                            disabled={currentIdx === 0}
                            onClick={() => setCurrentIdx(prev => prev - 1)}
                            className="bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                        </Button>

                        <div className="flex gap-4">
                            {currentIdx === questions.length - 1 ? (
                                <Button
                                    onClick={handleFinish}
                                    disabled={isFinishing}
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 px-8"
                                >
                                    <Send className="w-4 h-4 mr-2" /> Finish Test
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => setCurrentIdx(prev => prev + 1)}
                                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 px-8"
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Desktop Question Grid Panel */}
                <Card className="hidden lg:block lg:col-span-1 p-6 bg-slate-900/40 border-slate-800 backdrop-blur-md h-fit static top-10">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider flex items-center justify-between">
                        Overview
                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 font-mono">
                            {Object.keys(answers).filter(id => answers[id].selectedAnswer !== null).length}/{questions.length}
                        </span>
                    </h3>
                    <div className="grid grid-cols-5 gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {questions.map((q, idx) => {
                            const qState = answers[q.id];
                            const isAnswered = qState?.selectedAnswer !== null;
                            const isBookmarked = qState?.isBookmarked;
                            const isCurrent = currentIdx === idx;

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => setCurrentIdx(idx)}
                                    className={`w-full aspect-square rounded-lg text-xs font-semibold transition-all duration-200 border flex items-center justify-center relative ${isCurrent ? 'bg-blue-500 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] z-10 scale-110' :
                                        isAnswered ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                                            isBookmarked ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                                                'bg-slate-800/50 border-slate-700 text-muted-foreground hover:border-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    {idx + 1}
                                    {isBookmarked && !isCurrent && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </Card>
            </div>
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
        </div>
    );
};

export default ImmersiveTestSession;
