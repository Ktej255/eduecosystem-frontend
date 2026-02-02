"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
    CheckCircle2,
    XCircle,
    Target,
    ChevronRight,
    Timer,
    AlertCircle,
    ArrowLeft,
    Brain,
    BookOpen,
    Maximize2,
    Minimize2,
    ZoomIn,
    ZoomOut,
    Lightbulb,
    Trophy,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CSAT_BATCH1_1_DATA, CSATDayData, CSATQuestion, CSATPassage } from './data/csat-data';
import { ActivityLogger } from '@/lib/analytics/ActivityLogger';

interface CSATPracticeViewProps {
    dayNumber: number;
    onComplete: (score: number, total: number) => void;
}

type ConfidenceLevel = 'sure' | '50-50' | 'one-option' | 'blind';

interface AttemptResult {
    questionId: number;
    selectedAnswer: number | null;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
}

export default function CSATPracticeView({ dayNumber, onComplete }: CSATPracticeViewProps) {
    const data = CSAT_BATCH1_1_DATA[dayNumber];

    // Flattened questions for easy navigation
    const allQuestions = useMemo(() => {
        if (!data) return [];
        return data.passages.flatMap(p => p.questions);
    }, [data]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
    const [attempts, setAttempts] = useState<Record<number, AttemptResult>>({});
    const [showResults, setShowResults] = useState(false);
    const [showVocabulary, setShowVocabulary] = useState(false);

    // UI States
    const [passageFontSize, setPassageFontSize] = useState(16);
    const [isPassageFullscreen, setIsPassageFullscreen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins

    // Current Question & Passage
    const currentQuestion = allQuestions[currentIndex];
    const currentPassage = data?.passages.find(p => p.questions.some(q => q.id === currentQuestion?.id));

    // Timer Logic
    useEffect(() => {
        if (showResults) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [showResults]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (index: number) => {
        if (showResults) return;
        setSelectedAnswer(index);
    };

    const handleConfidenceSelect = (level: ConfidenceLevel) => {
        if (showResults) return;
        setConfidence(level);
    };

    const saveCurrentAttempt = () => {
        if (!currentQuestion) return;
        setAttempts(prev => ({
            ...prev,
            [currentQuestion.id]: {
                questionId: currentQuestion.id,
                selectedAnswer,
                isCorrect: selectedAnswer === currentQuestion.correctAnswer,
                confidence
            }
        }));
    };

    const handleNext = () => {
        saveCurrentAttempt();
        if (currentIndex < allQuestions.length - 1) {
            const nextIdx = currentIndex + 1;
            setCurrentIndex(nextIdx);

            // Restore previous choice if exists
            const prevAttempt = attempts[allQuestions[nextIdx].id];
            if (prevAttempt) {
                setSelectedAnswer(prevAttempt.selectedAnswer);
                setConfidence(prevAttempt.confidence);
            } else {
                setSelectedAnswer(null);
                setConfidence(null);
            }
        }
    };

    const handlePrevious = () => {
        saveCurrentAttempt();
        if (currentIndex > 0) {
            const prevIdx = currentIndex - 1;
            setCurrentIndex(prevIdx);
            const prevAttempt = attempts[allQuestions[prevIdx].id];
            if (prevAttempt) {
                setSelectedAnswer(prevAttempt.selectedAnswer);
                setConfidence(prevAttempt.confidence);
            }
        }
    };

    const handleSubmit = () => {
        saveCurrentAttempt();
        setShowResults(true);
        const score = Object.values(attempts).filter(a => a.isCorrect).length +
            (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);

        // LOG ACTIVITY
        Object.values(attempts).forEach(attempt => {
            ActivityLogger.logActivity({
                type: 'MCQ_CSAT',
                details: {
                    questionId: attempt.questionId.toString(),
                    topic: 'CSAT',
                    subtopic: 'Reading Comprehension', // Deduced from context
                    isCorrect: attempt.isCorrect,
                    confidence: attempt.confidence,
                    timeSpent: 0 // Not tracked individually perfectly yet, but acceptable
                }
            });
        });
        // Log current question if not in attempts yet
        if (selectedAnswer !== null && !attempts[currentQuestion.id]) {
            ActivityLogger.logActivity({
                type: 'MCQ_CSAT',
                details: {
                    questionId: currentQuestion.id.toString(),
                    topic: 'CSAT',
                    subtopic: 'Reading Comprehension',
                    isCorrect: selectedAnswer === currentQuestion.correctAnswer,
                    confidence: confidence,
                    timeSpent: 0
                }
            });
        }

        onComplete(score, allQuestions.length);
    };

    if (!data) {
        return (
            <Card className="p-8 text-center border-amber-200 bg-amber-50">
                <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-amber-900">Content Coming Soon</h3>
                <p className="text-amber-700">CSAT Practice content for Day {dayNumber} is being prepared.</p>
            </Card>
        );
    }

    if (showResults) {
        const score = Object.values(attempts).filter(a => a.isCorrect).length;
        return (
            <Card className="animate-in fade-in zoom-in duration-500 overflow-hidden border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center">
                    <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <CardTitle className="text-3xl">Practice Complete!</CardTitle>
                    <p className="opacity-90">Great effort on Day {dayNumber} CSAT practice.</p>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="flex justify-center items-center gap-12 mb-12">
                        <div className="text-center">
                            <span className="text-5xl font-black text-indigo-600">{score}</span>
                            <span className="text-xl text-gray-400">/{allQuestions.length}</span>
                            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Score</p>
                        </div>
                        <div className="h-16 w-[1px] bg-slate-200" />
                        <div className="text-center">
                            <span className="text-5xl font-black text-emerald-500">{Math.round((score / allQuestions.length) * 100)}%</span>
                            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Accuracy</p>
                        </div>
                        <div className="h-16 w-[1px] bg-slate-200" />
                        <div className="text-center">
                            <span className="text-5xl font-black text-amber-500">{formatTime(25 * 60 - timeLeft)}</span>
                            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Time Taken</p>
                        </div>
                    </div>

                    {/* Deep Insight Analytics */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 mb-8">
                        <h4 className="flex items-center gap-2 font-black text-slate-800 dark:text-white mb-4 uppercase tracking-tighter">
                            <Sparkles className="h-5 w-5 text-indigo-500" />
                            Deep Insight Analysis
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-black p-4 rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Consistency</span>
                                <div className="text-xl font-black text-indigo-600">
                                    {Math.round((Object.values(attempts).filter(a => a.confidence === 'sure' && a.isCorrect).length / Math.max(1, Object.values(attempts).filter(a => a.confidence === 'sure').length)) * 100)}%
                                </div>
                                <p className="text-[10px] text-slate-500 mt-1">Foundational Stability</p>
                            </div>
                            <div className="bg-white dark:bg-black p-4 rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Risk Factor</span>
                                <div className="text-xl font-black text-rose-500">
                                    {Object.values(attempts).filter(a => a.confidence === 'sure' && !a.isCorrect).length} Misconceptions
                                </div>
                                <p className="text-[10px] text-slate-500 mt-1">High-confidence errors</p>
                            </div>
                            <div className="bg-white dark:bg-black p-4 rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Intuition</span>
                                <div className="text-xl font-black text-emerald-500">
                                    {Math.round((Object.values(attempts).filter(a => a.confidence !== 'sure' && a.isCorrect).length / Math.max(1, Object.values(attempts).filter(a => a.confidence !== 'sure').length)) * 100)}%
                                </div>
                                <p className="text-[10px] text-slate-500 mt-1">Guesswork Accuracy</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h4 className="font-bold text-gray-900 dark:text-gray-100">Review Analysis:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {allQuestions.map((q, idx) => {
                                const attempt = attempts[q.id];
                                const isCorrect = attempt?.isCorrect;
                                return (
                                    <div key={idx} className={`p-4 rounded-xl border-l-4 transition-all ${isCorrect ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
                                        <div className="flex items-start gap-3">
                                            {isCorrect ? <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" /> : <XCircle className="h-5 w-5 text-red-600 shrink-0" />}
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-gray-800 line-clamp-2">{q.question}</p>
                                                <p className="text-xs text-gray-500 mt-1">Correct Answer: {q.options[q.correctAnswer]}</p>
                                                <p className="text-[10px] uppercase font-bold text-indigo-500 mt-1">Confidence: {attempt?.confidence || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold h-14 px-8 rounded-2xl shadow-lg"
                            onClick={() => setShowVocabulary(true)}
                        >
                            <BookOpen className="mr-2 h-5 w-5" /> Master Vocabulary
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 rounded-2xl font-bold"
                            onClick={() => window.location.reload()}
                        >
                            Back to Evening Dashboard
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {/* Vocabulary Modal */}
                    {showVocabulary && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                            <Card className="w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border-purple-200">
                                <CardHeader className="bg-purple-600 text-white flex flex-row items-center justify-between p-6">
                                    <div>
                                        <CardTitle className="text-2xl font-black">Vocabulary Power-Up</CardTitle>
                                        <p className="text-purple-100 text-sm">Key terms from Day {dayNumber} Passages</p>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => setShowVocabulary(false)} className="text-white hover:bg-white/20 rounded-full h-10 w-10 p-0">
                                        ✕
                                    </Button>
                                </CardHeader>
                                <CardContent className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                                    {data.vocabulary.map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl group hover:border-purple-300 transition-all">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">{item.word}</h4>
                                                {item.toneIndicator && (
                                                    <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full ${item.toneIndicator === 'positive' ? 'bg-emerald-100 text-emerald-700' :
                                                        item.toneIndicator === 'negative' ? 'bg-rose-100 text-rose-700' :
                                                            'bg-slate-200 text-slate-700'
                                                        }`}>
                                                        {item.toneIndicator}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-medium leading-relaxed">{item.definition}</p>
                                            <div className="bg-white dark:bg-black/40 p-3 rounded-xl text-xs text-gray-500 mb-4 border-l-4 border-slate-300 italic">
                                                "{item.context}"
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] uppercase font-black text-slate-400">Synonyms</span>
                                                    <p className="text-xs font-bold text-slate-600">{item.synonyms.join(', ')}</p>
                                                </div>
                                                {item.antonyms.length > 0 && (
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] uppercase font-black text-slate-400">Antonyms</span>
                                                        <p className="text-xs font-bold text-slate-600">{item.antonyms.join(', ')}</p>
                                                    </div>
                                                )}
                                            </div>
                                            {item.csatTip && (
                                                <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 p-3 rounded-xl flex items-start gap-3 border border-amber-100 dark:border-amber-900/50">
                                                    <Lightbulb className="h-5 w-5 shrink-0 text-amber-500" />
                                                    <div className="text-[11px] leading-normal">
                                                        <span className="font-black block mb-0.5">CSAT STRATEGY TIP:</span>
                                                        {item.csatTip}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 flex flex-col gap-6">
            {/* Split Screen Container */}
            <div className={`grid grid-cols-1 ${isPassageFullscreen ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-6 h-[85vh] lg:h-[750px]`}>

                {/* Passage Side */}
                <Card className={`flex flex-col overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-xl transition-all ${isPassageFullscreen ? 'fixed inset-4 z-[90]' : ''}`}>
                    <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-indigo-400" />
                            <h3 className="font-bold text-sm">Passage Reader</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setPassageFontSize(p => Math.max(12, p - 2))} className="text-white hover:bg-white/10 h-8 w-8 p-0">
                                <ZoomOut className="h-4 w-4" />
                            </Button>
                            <span className="text-xs font-mono w-8 text-center">{passageFontSize}</span>
                            <Button variant="ghost" size="sm" onClick={() => setPassageFontSize(p => Math.min(24, p + 2))} className="text-white hover:bg-white/10 h-8 w-8 p-0">
                                <ZoomIn className="h-4 w-4" />
                            </Button>
                            <div className="w-[1px] h-4 bg-slate-700 mx-1" />
                            <Button variant="ghost" size="sm" onClick={() => setIsPassageFullscreen(!isPassageFullscreen)} className="text-white hover:bg-white/10 h-8 w-8 p-0">
                                {isPassageFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white dark:bg-gray-950 custom-scrollbar">
                        {currentPassage && (
                            <div className="max-w-prose mx-auto">
                                <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Source: {currentPassage.source}</span>
                                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mt-3 leading-tight">{currentPassage.title}</h2>
                                </div>
                                <div
                                    className="text-gray-800 dark:text-gray-200 leading-[1.8] whitespace-pre-wrap transition-all"
                                    style={{ fontSize: `${passageFontSize}px` }}
                                >
                                    {currentPassage.content}
                                </div>
                            </div>
                        )}
                    </div>
                </Card>

                {/* MCQ Side */}
                {!isPassageFullscreen && (
                    <Card className="flex flex-col overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900/50">
                        {/* MCQ Header */}
                        <div className="bg-white dark:bg-gray-950 p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <span className="block text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Question</span>
                                    <span className="text-xl font-black text-indigo-600">{currentIndex + 1}<span className="text-slate-300 text-sm ml-1">/ {allQuestions.length}</span></span>
                                </div>
                                <div className="w-[1px] h-10 bg-slate-100 mx-2" />
                                <div className="text-right">
                                    <span className="block text-[10px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Time</span>
                                    <div className="flex items-center gap-1.5 text-xl font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <Timer className={`h-5 w-5 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-400'}`} />
                                        {formatTime(timeLeft)}
                                    </div>
                                </div>
                            </div>
                            <Progress value={((currentIndex + 1) / allQuestions.length) * 100} className="w-24 h-2 bg-slate-100" />
                        </div>

                        {/* MCQ Content */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col custom-scrollbar">
                            <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 mb-6 transition-all">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-relaxed whitespace-pre-wrap">
                                    {currentQuestion?.question}
                                </h3>
                            </div>

                            <div className="space-y-3 mb-8">
                                {currentQuestion?.options.map((option, idx) => {
                                    const isSelected = selectedAnswer === idx;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerSelect(idx)}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-md ring-4 ring-indigo-500/5'
                                                : 'bg-white dark:bg-gray-950 border-slate-100 dark:border-slate-800 hover:border-indigo-300'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-black transition-all ${isSelected ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className={`text-base font-medium ${isSelected ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Confidence Area */}
                            <div className="mt-auto">
                                <div className="flex items-center gap-2 mb-3">
                                    <Brain className="h-4 w-4 text-purple-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Confidence Level</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {[
                                        { id: 'sure', label: '100% Sure', icon: CheckCircle2, color: 'emerald' },
                                        { id: '50-50', label: '50-50', icon: AlertCircle, color: 'amber' },
                                        { id: 'one-option', label: 'One Option', icon: Target, color: 'blue' },
                                        { id: 'blind', label: 'Blind Guess', icon: Brain, color: 'slate' }
                                    ].map(conf => (
                                        <button
                                            key={conf.id}
                                            disabled={selectedAnswer === null}
                                            onClick={() => handleConfidenceSelect(conf.id as ConfidenceLevel)}
                                            className={`p-2.5 rounded-xl border-2 flex flex-col items-center gap-1 transition-all ${confidence === conf.id
                                                ? `bg-${conf.color}-50 border-${conf.color}-500 text-${conf.color}-700 ring-4 ring-${conf.color}-500/5 scale-105`
                                                : selectedAnswer === null ? 'opacity-40 cursor-not-allowed bg-slate-50' : 'bg-white border-slate-100 hover:border-indigo-200'
                                                }`}
                                        >
                                            <conf.icon className={`h-4 w-4 ${confidence === conf.id ? `text-${conf.color}-600` : 'text-slate-400'}`} />
                                            <span className="text-[10px] font-black font-sans">{conf.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <div className="bg-white dark:bg-gray-950 p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)]">
                            <Button
                                variant="ghost"
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className="h-12 px-6 rounded-xl font-bold"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>

                            {currentIndex === allQuestions.length - 1 ? (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={selectedAnswer === null || confidence === null}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white h-12 px-10 rounded-xl font-bold shadow-lg shadow-indigo-200"
                                >
                                    Finish Practice
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    disabled={selectedAnswer === null || confidence === null}
                                    className="bg-slate-900 hover:bg-black text-white h-12 px-10 rounded-xl font-bold shadow-lg"
                                >
                                    Next <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </Card>
                )}
            </div>

            {/* Quick Progress Dots (Visible when not fullscreen) */}
            {!isPassageFullscreen && (
                <div className="flex justify-center gap-2 pb-4">
                    {allQuestions.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                saveCurrentAttempt();
                                setCurrentIndex(idx);
                                const att = attempts[allQuestions[idx].id];
                                setSelectedAnswer(att?.selectedAnswer ?? null);
                                setConfidence(att?.confidence ?? null);
                            }}
                            className={`h-2.5 rounded-full cursor-pointer transition-all ${idx === currentIndex ? 'w-8 bg-indigo-600' :
                                attempts[allQuestions[idx].id] ? 'w-2.5 bg-emerald-400' : 'w-2.5 bg-slate-200'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
