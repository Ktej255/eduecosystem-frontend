"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, XCircle, HelpCircle, Target, AlertTriangle, Play, ChevronRight, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import MCQResultDashboard from './MCQResultDashboard';
import { MCQResult } from '@/types/mcq';

interface AdvancedMCQTestProps {
    questions: any[];
    chapterId: string | number;
    bookId: string;
    chapterTitle: string;
    onComplete?: (result: any) => void;
}

export type ConfidenceLevel = 'sure-shot' | '50-50' | 'one-option-known' | 'blind-guess';

interface AnswerState {
    questionIndex: number;
    selectedOption: number;
    confidence: ConfidenceLevel;
    isCorrect: boolean;
    timeTaken: number; // seconds
}

export default function AdvancedMCQTest({ questions, chapterId, bookId, chapterTitle }: AdvancedMCQTestProps) {
    const [mode, setMode] = useState<'intro' | 'test' | 'result'>('intro');
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
    const [timer, setTimer] = useState(0);
    const [lifelineUsed, setLifelineUsed] = useState<Record<number, boolean>>({});

    // Question State
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [selectedConfidence, setSelectedConfidence] = useState<ConfidenceLevel | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (mode === 'test') {
            interval = setInterval(() => {
                setTimer(t => t + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [mode]);

    const handleStart = () => {
        setMode('test');
        setTimer(0);
        setAnswers({});
    };

    const handleLifeline5050 = () => {
        if (lifelineUsed[currentQIndex]) return;

        const currentQ = questions[currentQIndex];
        const correct = currentQ.correctAnswer;
        const widthBadOptions = currentQ.options
            .map((_: string, idx: number) => idx)
            .filter((idx: number) => idx !== correct);

        // Shuffle and take 2 to remove (if > 2 options)
        // If 4 options, remote 2 wrong.
        const toRemove = widthBadOptions.slice(0, 2); // Simple logic: remove first 2 wrong

        // In a real app we might randomize which wrong ones are removed
        // For now, we'll store this "toRemove" in a local state to disable buttons
        // But simplifying: just mark lifeline as used and logic in render
        setLifelineUsed(prev => ({ ...prev, [currentQIndex]: true }));
    };

    const handleNext = () => {
        if (selectedOption !== null && selectedConfidence) {
            // Save answer
            const isCorrect = selectedOption === questions[currentQIndex].correctAnswer;
            setAnswers(prev => ({
                ...prev,
                [currentQIndex]: {
                    questionIndex: currentQIndex,
                    selectedOption,
                    confidence: selectedConfidence,
                    isCorrect,
                    timeTaken: 0 // placeholder
                }
            }));

            if (currentQIndex < questions.length - 1) {
                setCurrentQIndex(prev => prev + 1);
                setSelectedOption(null);
                setSelectedConfidence(null);
            } else {
                // Save Result to LocalStorage
                const finalAnswers = {
                    ...answers,
                    [currentQIndex]: {
                        questionIndex: currentQIndex,
                        selectedOption,
                        confidence: selectedConfidence,
                        isCorrect,
                        timeTaken: 0
                    }
                };

                const resultData = {
                    chapterId,
                    bookId,
                    chapterTitle,
                    date: new Date().toISOString(),
                    score: Object.values(finalAnswers).filter(a => a.isCorrect).length,
                    totalQuestions: questions.length,
                    answers: finalAnswers
                };

                try {
                    let existingHistory = [];
                    try {
                        const raw = localStorage.getItem('upsc_mcq_history');
                        existingHistory = raw ? JSON.parse(raw) : [];
                        if (!Array.isArray(existingHistory)) existingHistory = [];
                    } catch (e) {
                        console.error("Failed to parse upsc_mcq_history", e);
                        existingHistory = [];
                    }
                    localStorage.setItem('upsc_mcq_history', JSON.stringify([...existingHistory, resultData]));
                } catch (e) {
                    console.error("Failed to save progress", e);
                }

                setMode('result');
            }
        }
    };

    if (mode === 'intro') {
        return (
            <div className="text-center py-12 px-6 max-w-2xl mx-auto">
                <div className="bg-blue-50 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Start Assessment</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    You are about to start a <strong>{questions.length} Question</strong> test for {chapterTitle}.
                    <br />
                    Mark your confidence level for each answer to get detailed analytics.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-lg mx-auto">
                    <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-900/10 border-green-200">
                        <span className="font-bold text-green-700 block">Sure Shot</span>
                        <span className="text-xs text-gray-500">100% Confident</span>
                    </div>
                    <div className="p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200">
                        <span className="font-bold text-yellow-700 block">50:50</span>
                        <span className="text-xs text-gray-500">Confused between 2</span>
                    </div>
                    <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-900/10 border-blue-200">
                        <span className="font-bold text-blue-700 block">One Option</span>
                        <span className="text-xs text-gray-500">Eliminated others</span>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-900/10 border-red-200">
                        <span className="font-bold text-red-700 block">Blind Guess</span>
                        <span className="text-xs text-gray-500">Pure Luck</span>
                    </div>
                </div>

                <Button size="lg" onClick={handleStart} className="w-full md:w-auto">
                    <Play className="w-4 h-4 mr-2" /> Start Test
                </Button>
            </div>
        );
    }

    if (mode === 'result') {
        const results: MCQResult = {
            totalQuestions: questions.length,
            answers: answers,
            score: Object.values(answers).filter(a => a.isCorrect).length,
            timeSpent: timer
        };
        return <MCQResultDashboard results={results} questions={questions} chapterTitle={chapterTitle} onRetry={handleStart} />;
    }

    const currentQ = questions[currentQIndex];

    // Lifeline Logic: Determine which options to disable
    let disabledOptions: number[] = [];
    if (lifelineUsed[currentQIndex]) {
        // Find 2 wrong options to disable
        const wrongOptions = currentQ.options
            .map((_: any, idx: number) => idx)
            .filter((idx: number) => idx !== currentQ.correctAnswer);
        disabledOptions = wrongOptions.slice(0, 2); // Disable first 2 wrong options
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-sm text-gray-500">
                    Q{currentQIndex + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-gray-500">
                        {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLifeline5050}
                        disabled={lifelineUsed[currentQIndex]}
                        className={lifelineUsed[currentQIndex] ? 'opacity-50' : 'text-purple-600 border-purple-200 bg-purple-50'}
                    >
                        <HelpCircle className="w-4 h-4 mr-1" /> 50:50 Lifeline
                    </Button>
                </div>
            </div>

            {/* Question Card */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-8 leading-relaxed">
                        {currentQ.question}
                    </h3>

                    <div className="space-y-3">
                        {currentQ.options.map((option: string, calculateIdx: number) => {
                            const isOptionDisabled = disabledOptions.includes(calculateIdx);
                            return (
                                <button
                                    key={calculateIdx}
                                    onClick={() => !isOptionDisabled && setSelectedOption(calculateIdx)}
                                    disabled={isOptionDisabled}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all relative
                                        ${isOptionDisabled ? 'opacity-30 cursor-not-allowed bg-gray-100 border-gray-100' :
                                            selectedOption === calculateIdx
                                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                            ${selectedOption === calculateIdx ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                            {String.fromCharCode(65 + calculateIdx)}
                                        </span>
                                        <span className={isOptionDisabled ? 'line-through' : ''}>{option}</span>
                                    </div>
                                    {isOptionDisabled && (
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 transform rotate-12 border border-gray-300 px-1 rounded">
                                            ELIMINATED
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Selection (Only shows after option selected) */}
            {selectedOption !== null && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <p className="text-center text-sm text-gray-500 mb-3">How confident are you?</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {[
                            { id: 'sure-shot', label: 'Sure Shot', icon: Target, color: 'text-green-600 bg-green-50 border-green-200', hover: 'hover:bg-green-100' },
                            { id: '50-50', label: 'Confusion', icon: HelpCircle, color: 'text-yellow-600 bg-yellow-50 border-yellow-200', hover: 'hover:bg-yellow-100' },
                            { id: 'one-option-known', label: 'Elimination', icon: CheckCircle2, color: 'text-blue-600 bg-blue-50 border-blue-200', hover: 'hover:bg-blue-100' },
                            { id: 'blind-guess', label: 'Blind Guess', icon: AlertTriangle, color: 'text-red-600 bg-red-50 border-red-200', hover: 'hover:bg-red-100' },
                        ].map((conf) => (
                            <button
                                key={conf.id}
                                onClick={() => setSelectedConfidence(conf.id as ConfidenceLevel)}
                                className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2
                                    ${selectedConfidence === conf.id
                                        ? `border-current ring-2 ring-offset-2 ring-blue-500 ${conf.color}`
                                        : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <conf.icon className={`w-5 h-5 ${selectedConfidence === conf.id ? '' : 'text-gray-400'}`} />
                                <span className={`text-xs font-medium ${selectedConfidence === conf.id ? '' : 'text-gray-600'}`}>
                                    {conf.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        size="lg"
                        disabled={!selectedConfidence}
                        className="w-full"
                    >
                        {currentQIndex === questions.length - 1 ? 'Submit Test' : 'Next Question'} <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            )}
        </div>
    );
}
