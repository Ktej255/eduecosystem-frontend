import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, Target, ChevronRight, Timer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { getMCQsForSubtopics, MCQ } from '@/components/batch1/polity/data/polity-mcqs-data';

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
}

export default function CycleMCQs({
    selectedSubtopics,
    onComplete,
    cycleNumber,
    preloadedMCQs
}: CycleMCQsProps) {
    const mcqs = useMemo(() => {
        if (preloadedMCQs && preloadedMCQs.length > 0) return preloadedMCQs;
        return generateMCQsForSubtopics(selectedSubtopics);
    }, [selectedSubtopics, preloadedMCQs]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [results, setResults] = useState<{ questionId: string; isCorrect: boolean }[]>([]);

    // Timer state
    const [timeLeft, setTimeLeft] = useState(60);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentMCQ = mcqs[currentIndex];
    const progress = ((currentIndex + 1) / mcqs.length) * 100;
    const isLastQuestion = currentIndex === mcqs.length - 1;

    // Timer logic
    useEffect(() => {
        if (showResult) return; // Stop timer if result is shown

        setTimeLeft(60);

        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    // Time up - auto submit
                    // We need to trigger submit, but we can't easily call the handler from here due to closure.
                    // Instead rely on the effect watching timeLeft
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentIndex, showResult]);

    // Watch for timeout
    useEffect(() => {
        if (timeLeft === 0 && !showResult) {
            handleAutoSubmit();
        }
    }, [timeLeft, showResult]);

    const handleAutoSubmit = () => {
        if (showResult) return;

        // If time runs out, mark as incorrect (or calculate score based on selected if any? usually timeout = wrong/unanswered)
        // Let's assume if they selected something but didn't click submit, we take that answer.
        // If nothing selected, it is wrong.

        const isCorrect = selectedAnswer === currentMCQ.correctIndex;
        setResults(prev => [...prev, { questionId: currentMCQ.id, isCorrect: selectedAnswer !== null ? isCorrect : false }]);
        setShowResult(true);
    };

    const handleAnswerSelect = (optionIndex: number) => {
        if (showResult) return; // Already answered
        setSelectedAnswer(optionIndex);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) return;

        const isCorrect = selectedAnswer === currentMCQ.correctIndex;
        setResults(prev => [...prev, { questionId: currentMCQ.id, isCorrect }]);
        setShowResult(true);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            const correct = results.filter(r => r.isCorrect).length + (showResult && selectedAnswer === currentMCQ.correctIndex && !results.find(r => r.questionId === currentMCQ.id) ? 1 : 0);
            // Note: results state might not be immediately updated if we just called setResults in handleSubmitAnswer?
            // Actually setResults is async. But here flow is: Submit -> Show Result -> User clicks Next.
            // So results SHOULD be updated by the time User clicks Next.

            // Wait, results array contains PREVIOUS questions. The current question result is added when Submit is clicked.
            // So results.length should be equal to (currentIndex + 1) when Next is clicked?
            // Yes.

            const totalCorrect = results.filter(r => r.isCorrect).length;
            onComplete({ correct: totalCorrect, total: mcqs.length });
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
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
                            <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-full ${timeLeft < 10 ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}>
                                <Timer className="h-4 w-4" />
                                <span>{timeLeft}s</span>
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

                            if (showCorrectness) {
                                if (isCorrect) {
                                    bgClass = 'bg-green-50 dark:bg-green-900/20 border-green-400';
                                    textClass = 'text-green-700 dark:text-green-300';
                                } else if (isSelected && !isCorrect) {
                                    bgClass = 'bg-red-50 dark:bg-red-900/20 border-red-400';
                                    textClass = 'text-red-700 dark:text-red-300';
                                }
                            } else if (isSelected) {
                                bgClass = 'bg-purple-50 dark:bg-purple-900/20 border-purple-400';
                                textClass = 'text-purple-700 dark:text-purple-300';
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showResult}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgClass}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${showCorrectness && isCorrect
                                            ? 'bg-green-500 text-white'
                                            : showCorrectness && isSelected && !isCorrect
                                                ? 'bg-red-500 text-white'
                                                : isSelected
                                                    ? 'bg-purple-500 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                            }`}>
                                            {showCorrectness ? (
                                                isCorrect ? <CheckCircle2 className="h-4 w-4" /> :
                                                    isSelected ? <XCircle className="h-4 w-4" /> :
                                                        String.fromCharCode(65 + index)
                                            ) : String.fromCharCode(65 + index)}
                                        </div>
                                        <span className={`flex-1 ${textClass}`}>{option}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Explanation (shown after answering) */}
                    {showResult && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
                            <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
                                Explanation:
                            </p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                {currentMCQ.explanation}
                            </p>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-purple-100 dark:border-purple-800">
                        {!showResult ? (
                            <Button
                                onClick={handleSubmitAnswer}
                                disabled={selectedAnswer === null}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                            >
                                Submit Answer
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                            >
                                {isLastQuestion ? 'Complete' : 'Next Question'}
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
