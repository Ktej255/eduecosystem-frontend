"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Trophy, Play, Lock, AlertTriangle, RefreshCw, ChevronRight, BookOpen, FileBarChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChapterLevels } from '../data/chapter-level-index';
import { LevelQuestion, LevelData, FormattedChapterLevelData } from '../data/level-types';
import { saveChapterReport } from '@/lib/report-persistence';
// @ts-ignore
import confetti from 'canvas-confetti';

// --- Types ---
export type ConfidenceLevel = 'sure' | '50-50' | 'one-option' | 'blind' | 'other' | null;

export interface QuestionResult {
    id: string | number;
    question: string;
    options: string[];
    explanation: string;
    userAnswer: number | null;
    correctAnswer: number;
    confidence: ConfidenceLevel;
    timeSpent: number;
    isCorrect: boolean;
}

export interface ChapterTestResult {
    chapterNumber: number;
    chapterId?: number;
    chapterTitle?: string;
    topicName: string;
    levelId: 1 | 2 | 3;
    levelTitle: string;
    startTime: string;
    endTime: string;
    totalTimeTaken: number;
    questions: QuestionResult[];
    score: number;
    totalQuestions: number;
    percentage: number;
}

interface ChapterLevelGameProps {
    topicId: number;
    onComplete?: (level: number, score: number, result?: ChapterTestResult) => void;
}

// --- Confidence Button Strip ---
const CONFIDENCE_OPTIONS: { value: ConfidenceLevel; label: string; color: string; bgColor: string }[] = [
    { value: 'sure', label: 'Sure', color: 'text-emerald-600', bgColor: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100' },
    { value: '50-50', label: '50-50', color: 'text-orange-600', bgColor: 'bg-orange-50 border-orange-200 hover:bg-orange-100' },
    { value: 'one-option', label: 'One Option Known', color: 'text-blue-600', bgColor: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
    { value: 'blind', label: 'Blind Guess', color: 'text-muted-foreground', bgColor: 'bg-muted border-border hover:bg-muted' },
];

function ConfidenceStrip({
    selected,
    onSelect,
    disabled
}: {
    selected: ConfidenceLevel;
    onSelect: (c: ConfidenceLevel) => void;
    disabled?: boolean;
}) {
    return (
        <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">How confident are you?</p>
            <div className="flex flex-wrap gap-2">
                {CONFIDENCE_OPTIONS.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => onSelect(opt.value)}
                        disabled={disabled}
                        className={`
                            px-3 py-2 rounded-lg text-sm font-medium border transition-all
                            ${selected === opt.value
                                ? `${opt.bgColor} ${opt.color} ring-2 ring-offset-1 ring-${opt.value === 'sure' ? 'emerald' : opt.value === '50-50' ? 'orange' : opt.value === 'one-option' ? 'blue' : 'slate'}-300`
                                : 'bg-card border-border text-muted-foreground hover:bg-muted'
                            }
                            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

// --- Main Component ---
export default function ChapterLevelGame({ topicId, onComplete }: ChapterLevelGameProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const requestedLevel = searchParams.get('level');

    const [activeLevel, setActiveLevel] = useState<number | null>(null);
    const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
    const [showReport, setShowReport] = useState(false);
    const [lastResult, setLastResult] = useState<ChapterTestResult | null>(null);
    const chapterData = getChapterLevels(topicId);

    // Initial Level Selection from Query Param
    useEffect(() => {
        if (requestedLevel) {
            const levelNum = parseInt(requestedLevel);
            if ([1, 2, 3].includes(levelNum)) {
                setActiveLevel(levelNum);
                // Also unlock levels up to requested if needed, or assume first time
                if (levelNum > 1) {
                    setUnlockedLevels(prev => Array.from(new Set([...prev, levelNum])));
                }
            }
        }
    }, [requestedLevel]);

    // Load unlocked levels from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(`polity-chapter-${topicId}-unlocked`);
        if (saved) {
            try {
                setUnlockedLevels(JSON.parse(saved));
            } catch { }
        }
    }, [topicId]);

    if (!chapterData) {
        return (
            <div className="text-center p-8 bg-muted rounded-xl border border-border">
                <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-lg font-bold text-foreground">Content Coming Soon!</h3>
                <p className="text-muted-foreground">The Level System for this chapter is being prepared.</p>
            </div>
        );
    }

    const handleLevelSelect = (levelId: number) => {
        if (unlockedLevels.includes(levelId)) {
            setActiveLevel(levelId);
            setShowReport(false);
        }
    };

    const handleLevelFinish = (levelId: number, scorePercentage: number, result: ChapterTestResult) => {
        // Save result to localStorage
        const storageKey = `polity-chapter-${topicId}-reports`;
        const existing = localStorage.getItem(storageKey);
        const reports: ChapterTestResult[] = existing ? JSON.parse(existing) : [];
        reports.unshift(result); // Add new result at the beginning
        localStorage.setItem(storageKey, JSON.stringify(reports.slice(0, 20))); // Keep last 20 reports

        // Save to universal persistence for Deep Report
        saveChapterReport('polity', topicId, {
            totalQuestions: result.totalQuestions,
            correctCount: result.score,
            incorrectCount: result.totalQuestions - result.score,
            unansweredCount: result.totalQuestions - result.questions.filter(q => q.userAnswer !== null).length,
            score: result.score,
            accuracy: result.percentage,
            timeTaken: result.totalTimeTaken,
            totalTimeTaken: result.totalTimeTaken,
            topicBreakdown: { "Polity": { total: result.totalQuestions, correct: result.score } },
            questionAnalysis: result.questions.map(q => ({ questionId: q.id, wasted: !q.isCorrect && q.timeSpent > 60 })),
            questions: result.questions.map(q => ({
                ...q,
                id: q.id.toString(),
                chapter: `Polity Ch. ${topicId}`,
                subtopic: 'General'
            }))
        }, levelId);

        // Unlock next level if passed
        if (scorePercentage >= 50 && levelId < 3 && !unlockedLevels.includes(levelId + 1)) {
            const newUnlocked = [...unlockedLevels, levelId + 1];
            setUnlockedLevels(newUnlocked);
            localStorage.setItem(`polity-chapter-${topicId}-unlocked`, JSON.stringify(newUnlocked));
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        setLastResult(result);
        setActiveLevel(null);
        setShowReport(true);
        if (onComplete) onComplete(levelId, scorePercentage, result);
    };

    // Show report after finishing
    if (showReport && lastResult) {
        return (
            <ChapterTestReportView
                result={lastResult}
                onBack={() => setShowReport(false)}
                onRetake={() => handleLevelSelect(lastResult.levelId)}
            />
        );
    }

    if (activeLevel) {
        const levelData = chapterData.levels.find((l: LevelData) => l.levelId === activeLevel);
        if (!levelData) return null;

        return (
            <GameInterface
                levelData={levelData}
                chapterNumber={topicId}
                topicName={`Polity Ch. ${topicId}`}
                onBack={() => setActiveLevel(null)}
                onFinish={(score, result) => handleLevelFinish(activeLevel, score, result)}
            />
        );
    }

    return (
        <div className="space-y-6 font-['Calibri']">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-foreground flex items-center justify-center gap-2">
                    <BookOpen className="text-violet-600" />
                    Chapter Mastery System
                </h3>
                <p className="text-muted-foreground">Complete Level 1 to unlock the next challenge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chapterData.levels.map((level: LevelData) => {
                    const isUnlocked = unlockedLevels.includes(level.levelId);
                    const colors = getLevelColors(level.levelId);

                    return (
                        <motion.button
                            key={level.levelId}
                            disabled={!isUnlocked}
                            onClick={() => handleLevelSelect(level.levelId)}
                            whileHover={isUnlocked ? { scale: 1.03, y: -5 } : {}}
                            whileTap={isUnlocked ? { scale: 0.98 } : {}}
                            className={`
                                relative p-6 rounded-2xl border-2 text-left h-full min-h-[200px] flex flex-col justify-between overflow-hidden transition-all shadow-sm
                                ${isUnlocked
                                    ? `bg-card ${colors.border} hover:shadow-xl`
                                    : 'bg-muted border-slate-100 opacity-60 cursor-not-allowed'
                                }
                            `}
                        >
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${colors.bgGradient} opacity-10 rounded-full blur-2xl`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md font-black text-xl
                                        ${isUnlocked ? `bg-gradient-to-br ${colors.bgGradient}` : 'bg-slate-300'}
                                    `}>
                                        {level.levelId}
                                    </div>
                                    {!isUnlocked && <Lock className="text-slate-300" />}
                                    {isUnlocked && <Play className={`w-8 h-8 ${colors.text} opacity-20`} fill="currentColor" />}
                                </div>
                                <h4 className={`text-lg font-black mb-1 leading-tight ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {level.title}
                                </h4>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                    {level.questions.length} Questions
                                </p>
                            </div>

                            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                {level.description}
                            </p>
                        </motion.button>
                    );
                })}
            </div>

            {/* View Past Reports Button */}
            <ReportHistoryButton topicId={topicId} />
        </div>
    );
}

// --- Report History Button ---
function ReportHistoryButton({ topicId }: { topicId: number }) {
    const [reports, setReports] = useState<ChapterTestResult[]>([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(`polity-chapter-${topicId}-reports`);
        if (saved) {
            try {
                setReports(JSON.parse(saved));
            } catch { }
        }
    }, [topicId]);

    if (reports.length === 0) return null;

    return (
        <div className="mt-6 text-center">
            <Button
                variant="outline"
                onClick={() => setShowHistory(!showHistory)}
                className="gap-2"
            >
                <FileBarChart className="w-4 h-4" />
                View Past Reports ({reports.length})
            </Button>

            {showHistory && (
                <div className="mt-4 space-y-3 max-h-[300px] overflow-y-auto">
                    {reports.map((r, i) => (
                        <div key={i} className="p-4 bg-muted rounded-lg border border-slate-100 text-left">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="font-bold text-muted-foreground">Level {r.levelId}</span>
                                    <span className="text-muted-foreground mx-2">•</span>
                                    <span className="text-muted-foreground text-sm">{new Date(r.endTime).toLocaleDateString()}</span>
                                </div>
                                <Badge className={r.percentage >= 50 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                                    {r.percentage}%
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// --- Game Interface ---
function GameInterface({
    levelData,
    chapterNumber,
    topicName,
    onBack,
    onFinish
}: {
    levelData: LevelData;
    chapterNumber: number;
    topicName: string;
    onBack: () => void;
    onFinish: (score: number, result: ChapterTestResult) => void;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [confidence, setConfidence] = useState<ConfidenceLevel>(null);

    // Time tracking
    const [startTime] = useState(() => new Date().toISOString());
    const [questionStartTime, setQuestionStartTime] = useState(() => Date.now());
    const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);

    const question = levelData.questions[currentIndex];
    const totalQuestions = levelData.questions.length;
    const progress = ((currentIndex) / totalQuestions) * 100;

    const handleSelect = (index: number) => {
        setSelectedOption(index);
        setIsAnswered(true);
        // Correct answers are evaluated on 'Next Question', not here.
    };

    const handleNext = () => {
        // Save question result
        const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
        const isCorrect = selectedOption === question.correctAnswerIndex;

        // Standardized scoring: only evaluate on submission (Next)
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        const result: QuestionResult = {
            id: question.id || `q${currentIndex + 1}`,
            question: question.question,
            options: question.options,
            explanation: question.explanation || '',
            userAnswer: selectedOption,
            correctAnswer: question.correctAnswerIndex,
            confidence: confidence,
            timeSpent: timeSpent,
            isCorrect: isCorrect,
        };

        setQuestionResults(prev => [...prev, result]);

        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setConfidence(null);
            setQuestionStartTime(Date.now());
        } else {
            setShowResult(true);
        }
    };

    const handleFinish = useCallback(() => {
        const endTime = new Date().toISOString();
        const totalTime = questionResults.reduce((acc, q) => acc + q.timeSpent, 0);
        const percentage = Math.round((score / totalQuestions) * 100);

        const testResult: ChapterTestResult = {
            chapterNumber,
            topicName,
            levelId: levelData.levelId as 1 | 2 | 3,
            levelTitle: levelData.title,
            startTime,
            endTime,
            totalTimeTaken: totalTime,
            questions: questionResults,
            score,
            totalQuestions,
            percentage,
        };

        onFinish(percentage, testResult);
    }, [questionResults, score, totalQuestions, chapterNumber, topicName, levelData, startTime, onFinish]);

    if (showResult) {
        const percentage = Math.round((score / totalQuestions) * 100);
        const isPass = percentage >= 50;

        return (
            <Card className="text-center p-8 max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-2 ${isPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <div className="mb-6 inline-block p-4 bg-muted rounded-full">
                    {isPass ? <Trophy className="w-16 h-16 text-yellow-500" /> : <RefreshCw className="w-16 h-16 text-muted-foreground" />}
                </div>
                <h2 className="text-3xl font-black text-foreground mb-2">
                    {isPass ? "Level Complete!" : "Keep Practicing!"}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                    You scored <span className={`font-bold ${isPass ? 'text-green-600' : 'text-red-500'}`}>{score}/{totalQuestions}</span> ({percentage}%)
                </p>

                {isPass ? (
                    <div className="p-4 bg-green-50 rounded-xl mb-8 text-green-800 text-sm">
                        Great job! You have unlocked the next level (if available).
                    </div>
                ) : (
                    <div className="p-4 bg-red-50 rounded-xl mb-8 text-red-800 text-sm">
                        You need at least 50% to unlock the next level. Try reviewing the chapter text again.
                    </div>
                )}

                <div className="flex gap-4 justify-center">
                    <Button onClick={onBack} variant="outline">
                        Back to Menu
                    </Button>
                    <Button onClick={handleFinish} className={isPass ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900'}>
                        <FileBarChart className="w-4 h-4 mr-2" />
                        View Detailed Report
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Button variant="ghost" onClick={onBack} size="sm" className="text-muted-foreground hover:text-foreground">
                    &larr; Exit Level
                </Button>
                <div className="text-sm font-bold text-muted-foreground">
                    {currentIndex + 1} / {totalQuestions}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-violet-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <Card className="border-0 shadow-lg relative overflow-hidden">
                <CardContent className="p-8">
                    <div className="mb-8">
                        <Badge variant="outline" className="mb-4">
                            {levelData.title}
                        </Badge>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                            {question.question}
                        </h3>
                    </div>

                    <div className="space-y-3">
                        {question.options.map((option, idx) => {
                            const isSelected = selectedOption === idx;

                            // Standardized behavior: NO immediate correct/incorrect coloring.
                            // Only indicate selection state like the standard exam layout.
                            let statusClass = "bg-card border-2 border-slate-100 text-muted-foreground hover:border-violet-200 hover:bg-violet-50";

                            if (isSelected) {
                                statusClass = "border-violet-600 bg-violet-50 text-violet-800 font-bold shadow-md ring-2 ring-violet-100";
                            } else if (isAnswered) {
                                // If answered, non-selected options just subtly fade.
                                statusClass = "bg-card border-slate-100 text-muted-foreground opacity-70";
                            }

                            return (
                                <motion.button
                                    key={idx}
                                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                                    onClick={() => handleSelect(idx)}
                                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${statusClass}`}
                                >
                                    <div className={`
                                       w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border
                                       ${isSelected ? 'bg-violet-600 border-violet-600 text-white' : 'bg-card border-border text-muted-foreground'}
                                   `}>
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <span className="flex-1">{option}</span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Confidence Strip - Show AFTER selecting an answer */}
                    {isAnswered && (
                        <ConfidenceStrip
                            selected={confidence}
                            onSelect={setConfidence}
                        />
                    )}

                    {/* Next Button */}
                    <AnimatePresence>
                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 pt-6 border-t border-slate-100 flex justify-end"
                            >
                                <Button
                                    size="lg"
                                    onClick={handleNext}
                                    disabled={!confidence}
                                    className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200 disabled:opacity-50"
                                >
                                    {currentIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Level'} <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {isAnswered && !confidence && (
                        <p className="text-xs text-center text-amber-600 mt-2">
                            Please select your confidence level to continue
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

// --- Simple Report View (Inline) ---
function ChapterTestReportView({
    result,
    onBack,
    onRetake
}: {
    result: ChapterTestResult;
    onBack: () => void;
    onRetake: () => void;
}) {
    const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');

    // Confidence analysis
    const confidenceStats = CONFIDENCE_OPTIONS.map(opt => {
        const qs = result.questions.filter(q => q.confidence === opt.value);
        const correct = qs.filter(q => q.isCorrect).length;
        return {
            level: opt.label,
            total: qs.length,
            correct,
            accuracy: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0,
            avgTime: qs.length > 0 ? Math.round(qs.reduce((a, q) => a + q.timeSpent, 0) / qs.length) : 0,
        };
    });

    const filteredQuestions = result.questions.filter(q => {
        if (filter === 'correct') return q.isCorrect;
        if (filter === 'incorrect') return !q.isCorrect;
        return true;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={onBack} size="sm">
                    &larr; Back to Levels
                </Button>
                <Button onClick={onRetake} size="sm" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" /> Retake
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200">
                    <p className="text-xs font-bold text-violet-600 uppercase">Score</p>
                    <p className="text-3xl font-black text-violet-700">{result.percentage}%</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <p className="text-xs font-bold text-green-600 uppercase">Correct</p>
                    <p className="text-3xl font-black text-green-700">{result.score}</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                    <p className="text-xs font-bold text-red-600 uppercase">Incorrect</p>
                    <p className="text-3xl font-black text-red-700">{result.totalQuestions - result.score}</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <p className="text-xs font-bold text-blue-600 uppercase">Time</p>
                    <p className="text-3xl font-black text-blue-700">{Math.floor(result.totalTimeTaken / 60)}m</p>
                </Card>
            </div>

            {/* Confidence Analysis */}
            <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Confidence Level Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {confidenceStats.map((stat) => (
                        <div key={stat.level} className="p-4 bg-muted rounded-xl text-center">
                            <p className="text-xs font-bold text-muted-foreground uppercase">{stat.level}</p>
                            <p className="text-2xl font-black text-muted-foreground">{stat.accuracy}%</p>
                            <p className="text-xs text-muted-foreground">{stat.correct}/{stat.total} correct</p>
                            <p className="text-xs text-muted-foreground">~{stat.avgTime}s avg</p>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Question Review */}
            <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-foreground">Question Review</h3>
                    <div className="flex gap-2">
                        {(['all', 'correct', 'incorrect'] as const).map(f => (
                            <Button
                                key={f}
                                variant={filter === f ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setFilter(f)}
                                className="capitalize"
                            >
                                {f}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                    {filteredQuestions.map((q, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${q.isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
                            <div className="flex items-start gap-3 mb-3">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <p className="font-medium text-foreground leading-relaxed">{q.question}</p>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                        <span className={`px-2 py-0.5 rounded-full ${q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {q.isCorrect ? 'Correct' : 'Incorrect'}
                                        </span>
                                        <span>•</span>
                                        <span>{q.confidence || 'No confidence'}</span>
                                        <span>•</span>
                                        <span>{q.timeSpent}s</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-3">
                                {q.options.map((opt, idx) => {
                                    const isCorrect = idx === q.correctAnswer;
                                    const isUserChoice = idx === q.userAnswer;
                                    let cls = "p-2 rounded-lg text-sm border ";
                                    if (isCorrect) cls += "bg-green-100 border-green-300 text-green-800";
                                    else if (isUserChoice) cls += "bg-red-100 border-red-300 text-red-800";
                                    else cls += "bg-card border-slate-100 text-muted-foreground";

                                    return (
                                        <div key={idx} className={cls}>
                                            <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                                            {opt}
                                            {isCorrect && <CheckCircle2 className="inline ml-1 w-4 h-4" />}
                                            {isUserChoice && !isCorrect && <XCircle className="inline ml-1 w-4 h-4" />}
                                        </div>
                                    );
                                })}
                            </div>

                            {q.explanation && (
                                <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                                    <strong>Explanation:</strong> {q.explanation}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

function getLevelColors(level: number) {
    if (level === 1) return { bgGradient: "from-blue-500 to-cyan-500", text: "text-blue-600", border: "border-blue-200" };
    if (level === 2) return { bgGradient: "from-orange-500 to-amber-500", text: "text-orange-600", border: "border-orange-200" };
    return { bgGradient: "from-red-600 to-rose-600", text: "text-red-600", border: "border-red-200" };
}
