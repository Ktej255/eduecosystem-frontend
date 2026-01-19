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

interface CycleMCQsProps {
    selectedSubtopics: SubTopic[];
    onComplete: (results: { correct: number; total: number }) => void;
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
    const [showResult, setShowResult] = useState(false);
    const [results, setResults] = useState<{ questionId: string; isCorrect: boolean }[]>([]);
    const [isGlobalTimeout, setIsGlobalTimeout] = useState(false);

    // Cumulative Timer: 60 minutes for the entire session
    // Or if less questions, max 1 minute per question as per user request (cumulative)
    const totalTimeSeconds = mcqs.length * 60;

    // Timer state
    const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentMCQ = mcqs[currentIndex];
    const progress = ((currentIndex + 1) / mcqs.length) * 100;
    const isLastQuestion = currentIndex === mcqs.length - 1;

    // Timer logic - GLOBAL (runs continuously until 0 or completion)
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
    }, []); // Run once on mount

    // Handle Global Timeout
    useEffect(() => {
        if (isGlobalTimeout && !showResult) {
            // Auto submit current if selected, else just finish
            // If they selected something, count it
            if (selectedAnswer !== null) {
                const isCorrect = selectedAnswer === currentMCQ.correctIndex;
                setResults(prev => [...prev, { questionId: String(currentMCQ.id), isCorrect }]);
            }
            // Finish immediately
            handleFinish();
        }
    }, [isGlobalTimeout]);



    const handleAnswerSelect = (optionIndex: number) => {
        if (showResult || isGlobalTimeout) return; // Already answered or timed out
        setSelectedAnswer(optionIndex);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) return;

        const isCorrect = selectedAnswer === currentMCQ.correctIndex;
        setResults(prev => [...prev, { questionId: String(currentMCQ.id), isCorrect }]);

        // Record analytics for weak topic identification
        const topicLabel = selectedSubtopics.find(s => s.id === currentMCQ.subtopicId)?.label || "Unknown Topic";
        if (currentMCQ.subtopicId) {
            recordMCQAttempt(currentMCQ.subtopicId, topicLabel, isCorrect);
        }

        setShowResult(true);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            handleFinish();
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    // Keyboard shortcuts
    useMCQShortcuts(
        (index) => handleAnswerSelect(index),
        handleSubmitAnswer,
        handleNext,
        !showResult && !isGlobalTimeout
    );

    const handleFinish = () => {
        const totalCorrect = results.filter(r => r.isCorrect).length + (isLastQuestion && showResult && selectedAnswer === currentMCQ.correctIndex && !results.some(r => r.questionId === currentMCQ.id) ? 1 : 0);

        // Safety check to ensure we get all correct ones
        const calculatedCorrect = results.filter(r => r.isCorrect).length;

        if (timerRef.current) clearInterval(timerRef.current);
        onComplete({ correct: calculatedCorrect, total: mcqs.length });
    };

    // Formatting time
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (mcqs.length === 0) {
        return (
            <Card className="p-8 text-center">
                <p className="text-gray-500">No MCQs available for selected subtopics.</p>
                <Button onClick={() => onComplete({ correct: 0, total: 0 })} className="mt-4">Continue</Button>
            </Card>

        );
    }

    const correctCount = results.filter(r => r.isCorrect).length;

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-purple-500" />
                            <span className="font-bold text-purple-700 dark:text-purple-300">
                                Cycle {cycleNumber} MCQs
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-full ${timeLeft < 60 ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}>
                                <Timer className="h-4 w-4" />
                                <span>{formatTime(timeLeft)}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                                    {correctCount}/{results.length} correct
                                </span>
                                <span className="text-sm text-purple-600 dark:text-purple-400">
                                    Q{currentIndex + 1} / {mcqs.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Question */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 mb-4 border border-purple-100 dark:border-purple-800">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                            {currentMCQ.question}
                        </p>
                    </div>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                        {currentMCQ.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrect = index === currentMCQ.correctIndex;
                            const showCorrectness = showResult;

                            let bgClass = 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700';
                            let textClass = 'text-gray-700 dark:text-gray-300';
                            let icon = null;

                            if (showCorrectness) {
                                if (isCorrect) {
                                    bgClass = 'bg-green-50 dark:bg-green-900/20 border-green-500 ring-1 ring-green-500';
                                    textClass = 'text-green-700 dark:text-green-300 font-semibold';
                                    icon = <CheckCircle2 className="h-5 w-5 text-green-600" />;
                                } else if (isSelected && !isCorrect) {
                                    bgClass = 'bg-red-50 dark:bg-red-900/20 border-red-500 ring-1 ring-red-500';
                                    textClass = 'text-red-700 dark:text-red-300';
                                    icon = <XCircle className="h-5 w-5 text-red-600" />;
                                }
                            } else if (isSelected) {
                                bgClass = 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 ring-1 ring-purple-500';
                                textClass = 'text-purple-700 dark:text-purple-300';
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showResult || isGlobalTimeout}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${bgClass}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${showCorrectness && isCorrect ? 'bg-green-500 text-white' :
                                        showCorrectness && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                                            isSelected ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                        }`}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className={`flex-1 ${textClass}`}>{option}</span>
                                    {icon}
                                </button>
                            );
                        })}
                    </div>

                    {/* Explanation (shown after answering) */}
                    {showResult && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
                            <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" /> Explanation:
                            </p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                {currentMCQ.explanation}
                            </p>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between gap-3 pt-4 border-t border-purple-100 dark:border-purple-800">
                        {onSkip && (
                            <Button
                                variant="ghost"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onSkip) {
                                        onSkip();
                                        // Also trigger complete with current results? 
                                        // Usually skip means abort this phase. The parent handles transition.
                                    }
                                }}
                                disabled={!canSkip}
                                className="text-purple-600 hover:text-purple-800 hover:bg-purple-100 dark:text-purple-400 dark:hover:text-purple-200 dark:hover:bg-purple-900/30"
                                title={canSkip ? "Skip this section" : "No skips remaining"}
                            >
                                Skip ({skipsRemaining})
                            </Button>
                        )}
                        <div className="flex gap-2">
                            {!showResult ? (
                                <Button
                                    onClick={handleSubmitAnswer}
                                    disabled={selectedAnswer === null || isGlobalTimeout}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                                >
                                    Submit Answer
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                                >
                                    {isLastQuestion ? 'Complete Test' : 'Next Question'}
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>

                </CardContent>
            </Card>


            <div className="mt-4 flex justify-center">
                <KeyboardShortcutsHelp context="mcq" compact={true} />
            </div>
        </div >
    );
}
