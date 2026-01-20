import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, Target, ChevronRight, Timer, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { getMCQsForSubtopics, MCQ } from '@/components/batch1/polity/data/polity-mcqs-data';
import { useMCQShortcuts } from '@/hooks/useKeyboardShortcuts';
import KeyboardShortcutsHelp from '@/components/common/KeyboardShortcutsHelp';
import { recordMCQAttempt } from '@/lib/analytics';

// Temporary MCQ generator - will be replaced with actual content
function generateMCQsForSubtopics(subtopics: SubTopic[]): MCQ[] {
    const realMCQs = getMCQsForSubtopics(subtopics.map(s => s.id));
    if (realMCQs.length > 0) return realMCQs;

    const mcqs: MCQ[] = [];

    subtopics.forEach((subtopic, index) => {
        if (index < 5) { // Only 5-7 MCQs per cycle
            mcqs.push({
                id: `mcq_${subtopic.id}`,
                subtopicId: subtopic.id,
                question: `Which of the following best describes "${subtopic.label}"?`,
                options: [
                    'Option A related to constitutional provisions',
                    'Option B related to historical context',
                    'Option C related to practical applications',
                    'Option D related to comparative analysis'
                ],
                correctIndex: 0, // Placeholder - actual MCQs will have correct answers
                explanation: `The correct answer explains the key aspects of ${subtopic.label} as defined in the Constitution. [Detailed explanation to be added]`
            });
        }
    });

    return mcqs.slice(0, 7); // Max 7 MCQs per cycle
}

export type ConfidenceLevel = 'sure' | '50-50' | 'blind';

interface MCQResult {
    questionId: string;
    subtopicId?: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
    timeSpent: number; // in seconds
}

interface CycleMCQsProps {
    selectedSubtopics: SubTopic[];
    onComplete: (results: MCQResult[]) => void;
    cycleNumber: number;
    preloadedMCQs?: MCQ[];
    canSkip?: boolean;
    skipsRemaining?: number;
    onSkip?: () => void;
}

export default function CycleMCQs({
    selectedSubtopics,
    onComplete,
    cycleNumber,
    preloadedMCQs,
    canSkip = false,
    skipsRemaining = 0,
    onSkip
}: CycleMCQsProps) {
    const mcqs = useMemo(() => {
        if (preloadedMCQs && preloadedMCQs.length > 0) return preloadedMCQs;
        return generateMCQsForSubtopics(selectedSubtopics);
    }, [selectedSubtopics, preloadedMCQs]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
    const [results, setResults] = useState<Record<string, MCQResult>>({});
    const [isGlobalTimeout, setIsGlobalTimeout] = useState(false);

    // Track time spent per question
    const [questionStartTime, setQuestionStartTime] = useState(Date.now());

    // Cumulative Timer: 60 minutes for the entire session
    const totalTimeSeconds = 60 * 60;

    // Timer state
    const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentMCQ = mcqs[currentIndex];
    const progress = ((currentIndex + 1) / mcqs.length) * 100;
    const isLastQuestion = currentIndex === mcqs.length - 1;

    // Timer logic - GLOBAL
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

    // Handle Global Timeout
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
        const isCorrect = selectedAnswer === (currentMCQ.correctIndex ?? currentMCQ.correctAnswer);

        setResults(prev => ({
            ...prev,
            [currentMCQ.id]: {
                questionId: String(currentMCQ.id),
                subtopicId: currentMCQ.subtopicId,
                selectedAnswer,
                correctAnswer: (currentMCQ.correctIndex ?? currentMCQ.correctAnswer) || 0,
                isCorrect,
                confidence,
                timeSpent
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

            // Restore previous choice if exists
            const existing = results[mcqs[nextIndex].id];
            if (existing) {
                setSelectedAnswer(existing.selectedAnswer);
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
            const existing = results[mcqs[prevIndex].id];
            if (existing) {
                setSelectedAnswer(existing.selectedAnswer);
                setConfidence(existing.confidence);
            }
            setQuestionStartTime(Date.now());
        }
    };

    const handleFinish = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Current question data
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCurrentCorrect = selectedAnswer === (currentMCQ.correctIndex ?? currentMCQ.correctAnswer);

        // Create the final results object, starting with existing results
        const finalResultsMap: Record<string, MCQResult> = { ...results };

        // Ensure every question from the array is represented
        mcqs.forEach((mcq, idx) => {
            if (idx === currentIndex) {
                // Current question
                finalResultsMap[mcq.id] = {
                    questionId: String(mcq.id),
                    subtopicId: mcq.subtopicId,
                    selectedAnswer,
                    correctAnswer: (mcq.correctIndex ?? mcq.correctAnswer) || 0,
                    isCorrect: isCurrentCorrect,
                    confidence,
                    timeSpent
                };
            } else if (!finalResultsMap[mcq.id]) {
                // Unattempted question (before or after current index)
                finalResultsMap[mcq.id] = {
                    questionId: String(mcq.id),
                    subtopicId: mcq.subtopicId,
                    selectedAnswer: null,
                    correctAnswer: (mcq.correctIndex ?? mcq.correctAnswer) || 0,
                    isCorrect: false,
                    confidence: null,
                    timeSpent: 0
                };
            }
        });

        onComplete(Object.values(finalResultsMap));
    };

    // Keyboard shortcuts
    useMCQShortcuts(
        (index) => handleAnswerSelect(index),
        () => { }, // No immediate submit
        handleNext,
        !isGlobalTimeout
    );

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (mcqs.length === 0) {
        return (
            <Card className="p-8 text-center">
                <p className="text-gray-500">No MCQs available for selected subtopics.</p>
                <Button onClick={() => onComplete([])} className="mt-4">Continue</Button>
            </Card>
        );
    }

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                {/* Header with persistent timer */}
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <Target className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-white">Evening MCQ Challenge</h3>
                            <p className="text-[10px] text-slate-400">Week {cycleNumber} Session</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase text-slate-400 font-bold">Time Remaining</span>
                            <div className={`flex items-center gap-2 text-xl font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-indigo-400'}`}>
                                <Timer className="h-5 w-5" />
                                {formatTime(timeLeft)}
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-800" />
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase text-slate-400 font-bold">Progress</span>
                            <span className="text-xl font-bold text-white">{currentIndex + 1}<span className="text-slate-300 text-sm ml-1">/ {mcqs.length}</span></span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    {/* Progress Bar */}
                    <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full mb-8 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Question Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Question Area */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
                                    QUESTION {currentIndex + 1}
                                </span>
                                <div className="text-xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed space-y-3">
                                    {currentMCQ.question.split(/(\d+\.\s|(?:\(?[ivx]+\)?)\.\s|(?=Which of the|Select the correct answer))/g).map((part, i, arr) => {
                                        if (!part) return null;

                                        // If part is a marker (like 1. or (i).)
                                        if (/^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(part)) {
                                            return <div key={i} className="flex gap-2">
                                                <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">{part}</span>
                                                <span className="text-slate-800 dark:text-slate-200">{arr[i + 1]}</span>
                                            </div>;
                                        }
                                        // If this is the text part following a marker, skip it here
                                        if (i > 0 && /^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(arr[i - 1])) {
                                            return null;
                                        }
                                        // Specific handling for "Which of..." or "Select the..." which are now on new lines via lookahead
                                        const isTrailer = /^(Which of the|Select the correct answer)/.test(part);
                                        return <div key={i} className={isTrailer ? "pt-2 border-t border-slate-100 dark:border-slate-800 text-base font-semibold text-slate-600 dark:text-slate-400" : ""}>
                                            {part}
                                        </div>;
                                    })}
                                </div>
                            </div>

                            <div className="space-y-3">
                                {currentMCQ.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(index)}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 ring-4 ring-indigo-500/10 shadow-md'
                                                : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                                                }`}>
                                                {String.fromCharCode(65 + index)}
                                            </div>
                                            <span className={`flex-1 text-base ${isSelected ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-slate-800 dark:text-slate-300 font-medium'}`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Confidence Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 h-full flex flex-col">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                    <Brain className="h-4 w-4 text-indigo-500" />
                                    Confidence Level
                                </h4>
                                <p className="text-xs text-slate-500 mb-6">
                                    Be honest about your knowledge. This helps in tailoring your revision plan.
                                </p>

                                <div className="space-y-3 flex-1">
                                    <button
                                        onClick={() => handleConfidenceSelect('sure')}
                                        className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${confidence === 'sure'
                                            ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300 font-bold shadow-sm'
                                            : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 text-slate-800 dark:text-slate-300 hover:border-green-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className={`h-5 w-5 ${confidence === 'sure' ? 'text-green-600' : 'text-slate-400'}`} />
                                            <span>Sure (100%)</span>
                                        </div>
                                        {confidence === 'sure' && <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />}
                                    </button>

                                    <button
                                        onClick={() => handleConfidenceSelect('50-50')}
                                        className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${confidence === '50-50'
                                            ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 text-amber-700 dark:text-amber-300 font-bold shadow-sm'
                                            : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 text-slate-800 dark:text-slate-300 hover:border-amber-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <AlertCircle className={`h-5 w-5 ${confidence === '50-50' ? 'text-amber-600' : 'text-slate-400'}`} />
                                            <span>50-50 Chance</span>
                                        </div>
                                        {confidence === '50-50' && <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />}
                                    </button>

                                    <button
                                        onClick={() => handleConfidenceSelect('blind')}
                                        className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${confidence === 'blind'
                                            ? 'bg-slate-100 dark:bg-slate-800 border-slate-500 text-slate-900 dark:text-slate-100 font-bold shadow-sm'
                                            : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 text-slate-800 dark:text-slate-300 hover:border-slate-400'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <BookOpen className={`h-5 w-5 ${confidence === 'blind' ? 'text-slate-500' : 'text-slate-300'}`} />
                                            <span>Blind Guess</span>
                                        </div>
                                        {confidence === 'blind' && <div className="w-2 h-2 rounded-full bg-slate-500 shadow-[0_0_8px_rgba(107,114,128,0.5)]" />}
                                    </button>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <KeyboardShortcutsHelp context="mcq" compact={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Actions */}
                    <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="px-6 h-12 rounded-xl text-slate-600"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>

                        <div className="flex gap-4">
                            {onSkip && (
                                <Button
                                    variant="ghost"
                                    onClick={onSkip}
                                    disabled={!canSkip}
                                    className="text-slate-400 hover:text-indigo-600"
                                >
                                    Skip Phase ({skipsRemaining})
                                </Button>
                            )}

                            <Button
                                onClick={handleNext}
                                disabled={selectedAnswer === null || confidence === null}
                                className={`px-10 h-12 rounded-xl font-bold transition-all shadow-lg ${isLastQuestion
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    : 'bg-slate-900 hover:bg-black text-white'
                                    }`}
                            >
                                {isLastQuestion ? 'Submit Test' : 'Save & Next'}
                                {!isLastQuestion && <ChevronRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

// Re-add imports that might have been missed or needed
import { ArrowLeft, Brain, BookOpen } from 'lucide-react';

