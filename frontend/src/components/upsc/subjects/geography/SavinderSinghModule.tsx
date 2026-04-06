"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ChevronRight, CheckCircle2, Lock, Shield, ShieldAlert, AlertTriangle, Target, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useRouter } from 'next/navigation';
import {
    getSavinderChapterMCQs,
    getSavinderLevelMCQs,
    type TieredMCQ
} from './data/mcqs/savinder-singh-tiered';

interface SavinderSinghModuleProps {
    chapterId: string;
    chapterTitle: string;
    level1McqCount: number;
    level2McqCount: number;
    level3McqCount: number;
    onBack: () => void;
}

// ─── Inline MCQ Session ─────────────────────────────────────────────────────

interface MCQDrillProps {
    questions: TieredMCQ[];
    level: 1 | 2 | 3;
    onComplete: (score: number, total: number) => void;
    onCancel: () => void;
}

function MCQDrill({ questions, level, onComplete, onCancel }: MCQDrillProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

    const levelColors = { 1: 'emerald', 2: 'amber', 3: 'rose' } as const;
    const colour = levelColors[level];

    const current = questions[currentIndex];
    const isLast = currentIndex === questions.length - 1;
    const progress = ((currentIndex) / questions.length) * 100;

    const handleSelect = (idx: number) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(idx);
        setShowExplanation(true);
        if (idx === current.correctAnswer) {
            setScore(s => s + 1);
        }
        const newAnswers = [...answers];
        newAnswers[currentIndex] = idx;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (isLast) {
            onComplete(score + (selectedAnswer === current.correctAnswer ? 1 : 0), questions.length);
        } else {
            setCurrentIndex(i => i + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    if (!current) return null;

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onCancel}>← Exit Drill</Button>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground">
                        {currentIndex + 1} / {questions.length}
                    </span>
                    <Badge className={`bg-${colour}-100 text-${colour}-700 border-${colour}-200 font-bold`}>Level {level}</Badge>
                </div>
            </div>

            <Progress value={progress} className="h-1.5" />

            {/* Question */}
            <Card className="border-border shadow-sm">
                <CardContent className="p-6 md:p-8">
                    <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed whitespace-pre-line mb-6">{current.question}</p>
                    <div className="grid grid-cols-1 gap-3">
                        {current.options.map((opt, idx) => {
                            const isCorrect = idx === current.correctAnswer;
                            const isSelected = idx === selectedAnswer;
                            let className = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all text-sm ";
                            if (!showExplanation) {
                                className += "border-border hover:border-emerald-400 hover:bg-emerald-50/50 cursor-pointer";
                            } else if (isCorrect) {
                                className += "border-emerald-500 bg-emerald-50 text-emerald-900";
                            } else if (isSelected && !isCorrect) {
                                className += "border-rose-400 bg-rose-50 text-rose-900";
                            } else {
                                className += "border-border opacity-50 cursor-default";
                            }
                            return (
                                <button key={idx} className={className} onClick={() => handleSelect(idx)}>
                                    <span className="font-black text-muted-foreground mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                    {showExplanation && isCorrect && <CheckCircle2 className="inline w-4 h-4 ml-2 text-emerald-600" />}
                                    {showExplanation && isSelected && !isCorrect && <XCircle className="inline w-4 h-4 ml-2 text-rose-500" />}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                            <p className="text-sm font-black text-slate-600 uppercase tracking-widest mb-1">Explanation</p>
                            <p className="text-sm text-slate-700 leading-relaxed">{current.explanation}</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {showExplanation && (
                <Button onClick={handleNext} className="w-full h-12 font-black text-base bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                    {isLast ? "Complete Drill →" : "Next Question →"}
                </Button>
            )}
        </div>
    );
}

// ─── Result Screen ──────────────────────────────────────────────────────────

function LevelResult({ level, score, total, onRedo, onNext }: { level: 1 | 2 | 3; score: number; total: number; onRedo: () => void; onNext?: () => void }) {
    const pct = Math.round((score / total) * 100);
    const passed = pct >= 60;
    return (
        <Card className={`border-2 ${passed ? 'border-emerald-300 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
            <CardContent className="p-6 text-center space-y-4">
                {passed ? <Trophy className="w-12 h-12 text-emerald-500 mx-auto" /> : <XCircle className="w-12 h-12 text-rose-400 mx-auto" />}
                <div>
                    <p className="text-2xl font-black text-foreground">{score}/{total}</p>
                    <p className={`text-sm font-bold ${passed ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {passed ? '✅ Level Cleared!' : '❌ Needs Revision'}
                    </p>
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                    <Button variant="outline" size="sm" onClick={onRedo}>
                        <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Retry Level
                    </Button>
                    {onNext && passed && (
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                            Next Level <ChevronRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

// ─── Main Module ─────────────────────────────────────────────────────────────

export default function SavinderSinghModule({
    chapterId,
    chapterTitle,
    level1McqCount,
    level2McqCount,
    level3McqCount,
    onBack
}: SavinderSinghModuleProps) {
    const router = useRouter();
    const [activeDrill, setActiveDrill] = useState<{ level: 1 | 2 | 3 } | null>(null);
    const [results, setResults] = useState<Record<number, { score: number; total: number }>>({});

    // Load real MCQ data
    const chapterData = getSavinderChapterMCQs(chapterId);

    const questionsForLevel = useMemo(() => {
        return (level: 1 | 2 | 3): TieredMCQ[] => {
            if (chapterData) return getSavinderLevelMCQs(chapterId, level);
            return [];
        };
    }, [chapterId, chapterData]);

    const hasData = !!chapterData;
    const isComingSoon = !hasData;

    const handleDrillComplete = (level: 1 | 2 | 3, score: number, total: number) => {
        setResults(prev => ({ ...prev, [level]: { score, total } }));
        setActiveDrill(null);
    };

    if (activeDrill) {
        const qs = questionsForLevel(activeDrill.level);
        return (
            <div className="min-h-screen bg-background p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <MCQDrill
                        questions={qs}
                        level={activeDrill.level}
                        onComplete={(score, total) => handleDrillComplete(activeDrill.level, score, total)}
                        onCancel={() => setActiveDrill(null)}
                    />
                </div>
            </div>
        );
    }

    const levels = [
        {
            id: 1 as const,
            name: "Level 1: Factual Foundation",
            desc: "Direct concepts, definitions, and distinct physical features.",
            count: chapterData ? chapterData.level1.length : level1McqCount,
            icon: Shield,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            activeBg: "bg-emerald-600",
        },
        {
            id: 2 as const,
            name: "Level 2: Conceptual Flow",
            desc: "Process-based sequences, multi-statement logic matching.",
            count: chapterData ? chapterData.level2.length : level2McqCount,
            icon: ShieldAlert,
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-200",
            activeBg: "bg-amber-600",
        },
        {
            id: 3 as const,
            name: "Level 3: UPSC Simulation",
            desc: "Assertion-Reasoning, highly complex analytical synthesis.",
            count: chapterData ? chapterData.level3.length : level3McqCount,
            icon: AlertTriangle,
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-200",
            activeBg: "bg-rose-600",
        }
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto p-4 md:p-6 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 border-b pb-6 justify-between">
                <div>
                    <Button variant="ghost" className="rounded-xl px-2 mb-2" onClick={onBack}>
                        ← Back to Dashboard
                    </Button>
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 uppercase tracking-widest font-black text-[10px]">
                            Physical Geography Mastery
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold">Savinder Singh</span>
                        {hasData && <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px] font-bold">✅ Content Available</Badge>}
                        {isComingSoon && <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px] font-bold">⏳ Questions Coming Soon</Badge>}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                        {chapterTitle}
                    </h1>
                </div>
                {hasData && (
                    <div className="flex flex-col items-end gap-1">
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Total Questions</p>
                        <p className="text-3xl font-black text-foreground">
                            {(chapterData.level1.length + chapterData.level2.length + chapterData.level3.length)}
                        </p>
                    </div>
                )}
            </div>

            {/* Level Cards */}
            <div className="grid gap-6">
                {levels.map((level, idx) => {
                    const isCompleted = !!results[level.id];
                    const LevelIcon = level.icon;
                    // Sequential locking: Level 2 requires Level 1, Level 3 requires Level 2
                    const isAvailable = hasData && questionsForLevel(level.id).length > 0;
                    const isLocked = !isAvailable || (idx > 0 && !results[levels[idx - 1].id]);
                    const result = results[level.id];

                    return (
                        <div key={level.id}>
                            <Card
                                className={`border transition-all ${isLocked ? 'opacity-60 bg-slate-50 border-slate-100' : `hover:shadow-lg ${level.bg} ${level.border}`}`}
                            >
                                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-4 rounded-2xl shrink-0 ${isLocked ? 'bg-slate-200 text-slate-400' : `bg-white shadow-sm ${level.color}`}`}>
                                            {isLocked ? <Lock className="h-8 w-8" /> : <LevelIcon className="h-8 w-8" />}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold flex items-center gap-2 ${isLocked ? 'text-slate-600' : 'text-slate-900'}`}>
                                                {level.name}
                                                {isCompleted && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                                            </h3>
                                            <p className="text-stone-600 mt-1 max-w-md text-sm">{level.desc}</p>

                                            {!isLocked && (
                                                <div className="flex items-center gap-3 mt-3 flex-wrap">
                                                    <Badge variant="outline" className="bg-white/50 text-stone-600 font-bold border-stone-200 text-xs">
                                                        <Target className="w-3 h-3 mr-1" />
                                                        {level.count} Questions
                                                    </Badge>
                                                    {isCompleted && result && (
                                                        <Badge variant="outline" className={`font-bold text-xs ${result.score / result.total >= 0.6 ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-rose-100 text-rose-700 border-rose-200'}`}>
                                                            Score: {result.score}/{result.total} ({Math.round(result.score / result.total * 100)}%)
                                                        </Badge>
                                                    )}
                                                    {!hasData && (
                                                        <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-[10px] font-bold">
                                                            Content being uploaded
                                                        </Badge>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto flex flex-col gap-2 shrink-0">
                                        {isLocked ? (
                                            <Button disabled variant="outline" className="h-14 px-8 rounded-xl font-bold">
                                                <Lock className="w-4 h-4 mr-2" /> Locked
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => setActiveDrill({ level: level.id })}
                                                disabled={!hasData}
                                                className={`h-14 px-8 rounded-xl font-black text-white shadow-md hover:shadow-xl transition-all ${isCompleted ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-900 hover:bg-slate-800'} disabled:opacity-50`}
                                            >
                                                {isCompleted ? 'Retry Level' : 'Start Drill'}
                                                {!isCompleted && <ChevronRight className="w-5 h-5 ml-2" />}
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                            {/* Show result inline */}
                            {isCompleted && result && (
                                <div className="mt-2">
                                    <LevelResult
                                        level={level.id}
                                        score={result.score}
                                        total={result.total}
                                        onRedo={() => setActiveDrill({ level: level.id })}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
