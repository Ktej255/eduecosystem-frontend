"use client";

/**
 * SubjectDrillWidget — Universal MCQ Drill Panel
 * Plugs into any subject dashboard to show live practice questions.
 * Fetches from /api/v1/drill/questions?subject=<subject>
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Brain, CheckCircle2, XCircle, ChevronRight, RefreshCw, Trophy, Target, Zap } from 'lucide-react';
import api from '@/lib/api';

interface MCQ {
    id: number;
    text: string;
    options: string[]; // ["A) ...", "B) ...", "C) ...", "D) ..."]
    correct_answer: string; // "A" | "B" | "C" | "D"
    explanation: string;
    topic_tag: string;
    difficulty: string;
}

interface SubjectDrillWidgetProps {
    subject: string; // e.g., "Economy", "Geography"
    color?: string;  // e.g., "emerald", "blue"
}

export default function SubjectDrillWidget({ subject, color = "blue" }: SubjectDrillWidgetProps) {
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sessionComplete, setSessionComplete] = useState(false);

    const colorMap: Record<string, string> = {
        emerald: "bg-emerald-600 hover:bg-emerald-700",
        blue: "bg-blue-600 hover:bg-blue-700",
        indigo: "bg-indigo-600 hover:bg-indigo-700",
        amber: "bg-amber-600 hover:bg-amber-700",
        rose: "bg-rose-600 hover:bg-rose-700",
        teal: "bg-teal-600 hover:bg-teal-700",
        purple: "bg-purple-600 hover:bg-purple-700",
    };
    const btnColor = colorMap[color] || colorMap.blue;

    const activeColor: Record<string, string> = {
        emerald: "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200",
        blue: "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200",
        indigo: "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200",
        amber: "border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200",
        rose: "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-200",
        teal: "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-800 dark:text-teal-200",
        purple: "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200",
    };
    const selectedStyle = activeColor[color] || activeColor.blue;

    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        setError(null);
        setCurrentIndex(0);
        setSelected(null);
        setShowResult(false);
        setSessionComplete(false);
        setScore({ correct: 0, total: 0 });

        try {
            const res = await api.get(`/drill/questions?subject=${encodeURIComponent(subject)}&limit=5`);
            const raw = res.data;

            // Parse options if stored as JSON string
            const parsed = raw.map((q: any) => ({
                ...q,
                options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
            }));

            if (parsed.length === 0) {
                setError("No practice questions available yet for this subject. Check back soon!");
            } else {
                setQuestions(parsed);
            }
        } catch (err: any) {
            if (err.response?.status === 401) {
                setError("Please log in to access practice questions.");
            } else {
                setError("Could not load questions. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }, [subject]);

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    const current = questions[currentIndex];

    const handleAnswer = (option: string) => {
        if (selected) return; // already answered
        const letter = option.charAt(0); // "A", "B", "C", "D"
        setSelected(letter);
        setShowResult(true);
        setScore(prev => ({
            correct: prev.correct + (letter === current.correct_answer ? 1 : 0),
            total: prev.total + 1
        }));
    };

    const handleNext = () => {
        if (currentIndex + 1 >= questions.length) {
            setSessionComplete(true);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelected(null);
            setShowResult(false);
        }
    };

    const getOptionStyle = (option: string) => {
        const letter = option.charAt(0);
        if (!showResult) {
            return selected === letter
                ? `${selectedStyle} border`
                : "border border-border hover:border-gray-400 dark:hover:border-gray-500 bg-card dark:bg-[#111]";
        }
        if (letter === current.correct_answer) return "border border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200";
        if (letter === selected && letter !== current.correct_answer) return "border border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200";
        return "border border-border bg-card dark:bg-[#111] opacity-60";
    };

    if (loading) {
        return (
            <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-3/4 mb-6" />
                <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-10 bg-muted rounded-lg" />)}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 text-center">
                <Brain className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{error}</p>
                <button onClick={fetchQuestions} className="mt-3 text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 mx-auto">
                    <RefreshCw className="w-3 h-3" /> Try Again
                </button>
            </div>
        );
    }

    if (sessionComplete) {
        const pct = Math.round((score.correct / score.total) * 100);
        return (
            <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 text-center space-y-4">
                <Trophy className="w-12 h-12 text-amber-500 mx-auto" />
                <h3 className="text-xl font-bold">Session Complete!</h3>
                <div className="text-4xl font-black">{pct}%</div>
                <p className="text-sm text-muted-foreground">{score.correct}/{score.total} correct</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${pct >= 80 ? 'bg-emerald-100 text-emerald-700' : pct >= 60 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {pct >= 80 ? '🎯 Excellent!' : pct >= 60 ? '📚 Keep Practicing' : '💪 Needs Review'}
                </div>
                <button
                    onClick={fetchQuestions}
                    className={`${btnColor} text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 mx-auto transition-colors`}
                >
                    <RefreshCw className="w-4 h-4" /> Next 5 Questions
                </button>
            </div>
        );
    }

    if (!current) return null;

    return (
        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold text-foreground">Quick Drill</span>
                    <span className="text-xs text-muted-foreground">• {subject}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">{currentIndex + 1}/{questions.length}</span>
                    <div className="flex gap-1">
                        {questions.map((_, i) => (
                            <div key={i} className={`h-1.5 w-4 rounded-full transition-colors ${i < currentIndex ? 'bg-emerald-500' : i === currentIndex ? 'bg-blue-500' : 'bg-muted'}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Question */}
            <div className="p-5 space-y-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {current.topic_tag}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${current.difficulty === 'hard' ? 'bg-red-100 text-red-700' : current.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {current.difficulty}
                        </span>
                    </div>
                    <p className="text-sm font-medium text-foreground leading-relaxed">{current.text}</p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-2">
                    {current.options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => handleAnswer(option)}
                            disabled={!!selected}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${getOptionStyle(option)} ${!selected ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            <span className="font-bold mr-2">{option.charAt(0)})</span>
                            {option.slice(3)}
                        </button>
                    ))}
                </div>

                {/* Result & Explanation */}
                {showResult && (
                    <div className={`rounded-xl p-4 border ${selected === current.correct_answer ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20' : 'border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-900/20'}`}>
                        <div className="flex items-center gap-2 mb-2">
                            {selected === current.correct_answer
                                ? <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                : <XCircle className="w-4 h-4 text-red-600" />}
                            <span className={`text-xs font-bold ${selected === current.correct_answer ? 'text-emerald-700' : 'text-red-700'}`}>
                                {selected === current.correct_answer ? 'Correct!' : `Incorrect — Answer: ${current.correct_answer}`}
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{current.explanation}</p>
                    </div>
                )}

                {/* Next Button */}
                {showResult && (
                    <button
                        onClick={handleNext}
                        className={`${btnColor} text-white w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors`}
                    >
                        {currentIndex + 1 >= questions.length ? (
                            <><Trophy className="w-4 h-4" /> View Results</>
                        ) : (
                            <>Next Question <ChevronRight className="w-4 h-4" /></>
                        )}
                    </button>
                )}
            </div>

            {/* Score tracker at bottom */}
            <div className="px-5 pb-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    <span>{score.correct}/{score.total} correct so far</span>
                </div>
                <button onClick={fetchQuestions} className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <RefreshCw className="w-3 h-3" /> New Set
                </button>
            </div>
        </div>
    );
}
