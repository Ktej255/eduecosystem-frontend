"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Clock,
    AlertCircle,
    Trophy,
    RotateCcw,
    Flag
} from "lucide-react";
import { DAY1_MCQS, MCQ } from "../polity/data/day1-mcqs";

interface MCQTestSessionProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

export default function MCQTestSession({ cycleId, day, onClose }: MCQTestSessionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({}); // qId -> optionIndex
    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [unansweredCount, setUnansweredCount] = useState(0);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Format timer
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Timer logic
    useEffect(() => {
        if (!isSubmitted) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        handleSubmit();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isSubmitted]);

    const handleOptionSelect = (optionIndex: number) => {
        if (isSubmitted) return;
        setAnswers(prev => ({
            ...prev,
            [DAY1_MCQS[currentIndex].id]: optionIndex
        }));
    };

    const handleSubmit = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        let calculatedScore = 0;
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        DAY1_MCQS.forEach(q => {
            const userAnswer = answers[q.id];
            if (userAnswer === undefined) {
                unanswered++;
            } else if (userAnswer === q.correctAnswer) {
                calculatedScore += 2; // +2 for correct
                correct++;
            } else {
                calculatedScore -= 0.66; // -0.66 (1/3rd of 2) for incorrect
                incorrect++;
            }
        });

        setScore(Number(calculatedScore.toFixed(2)));
        setCorrectCount(correct);
        setIncorrectCount(incorrect);
        setUnansweredCount(unanswered);
        setIsSubmitted(true);
        setCurrentIndex(0); // Go back to start for review
    };

    const currentQuestion = DAY1_MCQS[currentIndex];
    const isAnswered = answers[currentQuestion.id] !== undefined;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Exit
                </Button>

                {!isSubmitted && (
                    <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
                        <Clock className="h-5 w-5" />
                        {formatTime(timeLeft)}
                    </div>
                )}

                <div className="text-sm font-medium">
                    Question {currentIndex + 1} / {DAY1_MCQS.length}
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentIndex + 1) / DAY1_MCQS.length) * 100} className="h-2" />

            {/* Results View */}
            {isSubmitted && currentIndex === 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-blue-700">{score}</div>
                            <div className="text-xs text-blue-600">Total Score</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-700">{correctCount}</div>
                            <div className="text-xs text-green-600">Correct</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-red-50 border-red-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-red-700">{incorrectCount}</div>
                            <div className="text-xs text-red-600">Incorrect</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-50 border-gray-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-gray-700">{unansweredCount}</div>
                            <div className="text-xs text-gray-600">Unattempted</div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Main Question Area */}
            <Card className="min-h-[400px] flex flex-col">
                <CardContent className="p-6 flex-1">
                    <div className="mb-6">
                        <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 mb-2">
                            {currentQuestion.level || "Regular"}
                        </span>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-wrap">
                            {currentQuestion.question}
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, idx) => {
                            let optionClass = "border-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all";
                            const isSelected = answers[currentQuestion.id] === idx;
                            const isCorrect = currentQuestion.correctAnswer === idx;

                            if (isSubmitted) {
                                if (isCorrect) {
                                    optionClass = "border-green-500 bg-green-50 dark:bg-green-900/20";
                                } else if (isSelected && !isCorrect) {
                                    optionClass = "border-red-500 bg-red-50 dark:bg-red-900/20";
                                } else {
                                    optionClass = "border-gray-200 opacity-60";
                                }
                            } else {
                                if (isSelected) {
                                    optionClass = "border-blue-500 bg-blue-50 dark:bg-blue-900/20";
                                } else {
                                    optionClass = "border-gray-200";
                                }
                            }

                            return (
                                <div
                                    key={idx}
                                    onClick={() => handleOptionSelect(idx)}
                                    className={`p-4 rounded-lg flex items-start gap-3 ${optionClass}`}
                                >
                                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 ${isSubmitted && isCorrect ? 'bg-green-500 border-green-500 text-white' :
                                            isSubmitted && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                                                isSelected ? 'bg-blue-500 border-blue-500 text-white' :
                                                    'border-gray-400 text-gray-500'
                                        }`}>
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <div className="text-base">{option}</div>
                                    {isSubmitted && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />}
                                    {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500 ml-auto" />}
                                </div>
                            );
                        })}
                    </div>

                    {/* Explanation Section (Only after submit) */}
                    {isSubmitted && (
                        <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" /> Explanation
                            </h4>
                            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
                                {currentQuestion.explanation || "No explanation provided for this question."}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center py-4">
                <Button
                    variant="outline"
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {!isSubmitted ? (
                    currentIndex === DAY1_MCQS.length - 1 ? (
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            onClick={handleSubmit}
                        >
                            Submit Test
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setCurrentIndex(prev => Math.min(DAY1_MCQS.length - 1, prev + 1))}
                        >
                            Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )
                ) : (
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsSubmitted(false);
                                setAnswers({});
                                setTimeLeft(60 * 60);
                                setCurrentIndex(0);
                                setScore(0);
                            }}
                        >
                            <RotateCcw className="mr-2 h-4 w-4" /> Retake Test
                        </Button>
                        <Button
                            onClick={() => setCurrentIndex(prev => Math.min(DAY1_MCQS.length - 1, prev + 1))}
                            disabled={currentIndex === DAY1_MCQS.length - 1}
                        >
                            Next Review <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Quick Navigation Sheet/Grid could be here, omitting for brevity */}
            {!isSubmitted && (
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {DAY1_MCQS.map((q, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-8 h-8 rounded text-xs font-bold transition-colors ${currentIndex === idx ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                                } ${answers[q.id] !== undefined
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600'
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
