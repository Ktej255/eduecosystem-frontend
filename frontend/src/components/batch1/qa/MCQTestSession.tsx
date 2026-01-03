"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import { useAuth } from "@/contexts/auth-context";
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
import { DAY2_MCQS } from "../polity/data/day2-mcqs";
import { DAY3_MCQS } from "../polity/data/day3-mcqs";

interface MCQTestSessionProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

export default function MCQTestSession({ cycleId, day, onClose }: MCQTestSessionProps) {
    // Dynamic MCQ loading based on day
    const mcqs = useMemo(() => {
        const d = typeof day === 'string' ? parseInt(day) : day;
        switch (d) {
            case 3:
                return DAY3_MCQS;
            case 2:
                return DAY2_MCQS;
            case 1:
            default:
                return DAY1_MCQS;
        }
    }, [day]);

    const { user } = useAuth();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({}); // qId -> optionIndex
    const [confidenceLevels, setConfidenceLevels] = useState<{ [key: number]: number }>({}); // qId -> confidence (1-4)
    const [timeLeft, setTimeLeft] = useState(() => {
        const d = typeof day === 'string' ? parseInt(day) : day;
        return d === 3 ? 120 * 60 : 60 * 60; // 2 hours for Day 3, 1 hour otherwise
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [unansweredCount, setUnansweredCount] = useState(0);
    const [showHistory, setShowHistory] = useState(false);
    const [testHistory, setTestHistory] = useState<any[]>([]);
    const [loadingHistory, setLoadingHistory] = useState(false);

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
            [mcqs[currentIndex].id]: optionIndex
        }));
    };

    const handleConfidenceSelect = (confidence: number) => {
        if (isSubmitted) return;
        setConfidenceLevels(prev => ({
            ...prev,
            [mcqs[currentIndex].id]: confidence
        }));
    };

    const fetchTestHistory = async () => {
        setLoadingHistory(true);
        try {
            const AWS_API = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";
            const token = localStorage.getItem('token');
            const response = await axios.get(`${AWS_API}/batch1/test-results`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setTestHistory(response.data);
        } catch (error) {
            console.error("Failed to fetch test history:", error);
        } finally {
            setLoadingHistory(false);
        }
    };

    const handleSubmit = async () => {
        if (timerRef.current) clearInterval(timerRef.current);

        let calculatedScore = 0;
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const resultsForApi = mcqs.map(q => {
            const userAnswer = answers[q.id];
            let isCorrect = false;
            if (userAnswer === undefined) {
                unanswered++;
            } else if (userAnswer === q.correctAnswer) {
                calculatedScore += 2; // +2 for correct
                correct++;
                isCorrect = true;
            } else {
                calculatedScore -= 0.66; // -0.66 (1/3rd of 2) for incorrect
                incorrect++;
            }
            return {
                qId: q.id,
                answer: userAnswer !== undefined ? userAnswer : -1,
                isCorrect: isCorrect
            };
        });

        const finalScore = Number(calculatedScore.toFixed(2));
        setScore(finalScore);
        setCorrectCount(correct);
        setIncorrectCount(incorrect);
        setUnansweredCount(unanswered);
        setIsSubmitted(true);
        setCurrentIndex(0); // Go back to start for review

        // Save to Database
        setIsSaving(true);
        try {
            const AWS_API = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";
            const token = localStorage.getItem('token');

            await axios.post(`${AWS_API}/batch1/test-results`, {
                cycle_id: cycleId,
                day_number: day,
                score: finalScore,
                total_questions: mcqs.length,
                correct_count: correct,
                incorrect_count: incorrect,
                unanswered_count: unanswered,
                answers: resultsForApi
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Test result saved to AWS database");
        } catch (error) {
            console.error("Failed to save test result:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const currentQuestion = mcqs[currentIndex];
    const isAnswered = answers[currentQuestion.id] !== undefined;

    return (
        <div className="space-y-6">
            {/* Test History Modal */}
            {showHistory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                        <div className="p-4 border-b flex items-center justify-between bg-blue-600 text-white">
                            <h3 className="font-bold text-lg">Previous Test Results</h3>
                            <Button variant="ghost" size="sm" onClick={() => setShowHistory(false)} className="text-white hover:bg-white/20">✕</Button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            {loadingHistory ? (
                                <div className="flex items-center justify-center py-8">
                                    <Clock className="h-6 w-6 animate-spin text-blue-600" />
                                </div>
                            ) : testHistory.length === 0 ? (
                                <p className="text-center py-8 text-gray-500">No previous tests found. Complete a test to see your history!</p>
                            ) : (
                                <div className="space-y-3">
                                    {testHistory.map((result, idx) => (
                                        <Card key={idx} className="border hover:shadow-md transition-all">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-semibold">Cycle {result.cycle_id}, Day {result.day_number}</p>
                                                        <p className="text-xs text-gray-500">{new Date(result.timestamp).toLocaleDateString()} at {new Date(result.timestamp).toLocaleTimeString()}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className={`text-2xl font-bold ${result.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>{result.score}</p>
                                                        <p className="text-xs text-gray-500">{result.correct_count}/{result.total_questions} correct</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Exit
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setShowHistory(true); fetchTestHistory(); }}
                    className="text-blue-600 border-blue-200"
                >
                    <Trophy className="mr-2 h-4 w-4" /> History
                </Button>

                {!isSubmitted && (
                    <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
                        <Clock className="h-5 w-5" />
                        {formatTime(timeLeft)}
                    </div>
                )}

                <div className="text-sm font-medium">
                    Question {currentIndex + 1} / {mcqs.length}
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentIndex + 1) / mcqs.length) * 100} className="h-2" />

            {/* Results View */}
            {isSubmitted && currentIndex === 0 && (
                <div className="space-y-4 mb-6">
                    {isSaving && (
                        <div className="flex items-center gap-2 text-sm text-blue-600 animate-pulse bg-blue-50 p-2 rounded justify-center">
                            <Clock className="h-4 w-4" /> Saving your results to dashboard...
                        </div>
                    )}
                    {!isSaving && isSubmitted && (
                        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded justify-center">
                            <CheckCircle2 className="h-4 w-4" /> Results saved! You can cross-check them later.
                        </div>
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                    {/* Confidence Level Selector - Only during test */}
                    {!isSubmitted && isAnswered && (
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">How confident are you?</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {[
                                    { id: 1, label: "100% Sure", emoji: "✅", color: "bg-green-100 border-green-400 text-green-700" },
                                    { id: 2, label: "50-50", emoji: "🤔", color: "bg-yellow-100 border-yellow-400 text-yellow-700" },
                                    { id: 3, label: "One Known", emoji: "💡", color: "bg-orange-100 border-orange-400 text-orange-700" },
                                    { id: 4, label: "Blind Guess", emoji: "🎲", color: "bg-red-100 border-red-400 text-red-700" }
                                ].map(conf => (
                                    <button
                                        key={conf.id}
                                        onClick={() => handleConfidenceSelect(conf.id)}
                                        className={`p-2 rounded-lg border-2 text-sm font-medium transition-all ${confidenceLevels[currentQuestion.id] === conf.id
                                                ? `${conf.color} ring-2 ring-offset-1`
                                                : "bg-white dark:bg-gray-900 border-gray-200 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span className="mr-1">{conf.emoji}</span> {conf.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

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

                {!isSubmitted && (
                    <div className="flex gap-2">
                        {currentIndex < mcqs.length - 1 && (
                            <Button
                                variant="outline"
                                onClick={() => setCurrentIndex(prev => Math.min(mcqs.length - 1, prev + 1))}
                            >
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            onClick={() => {
                                const answeredCount = Object.keys(answers).length;
                                if (answeredCount < mcqs.length) {
                                    const unattempted = mcqs.length - answeredCount;
                                    const confirmed = window.confirm(
                                        `⚠️ Warning: You have ${unattempted} unattempted question(s) out of ${mcqs.length}.\n\nAre you sure you want to submit the test?`
                                    );
                                    if (confirmed) {
                                        handleSubmit();
                                    }
                                } else {
                                    handleSubmit();
                                }
                            }}
                        >
                            Submit Test
                        </Button>
                    </div>
                )}
                {isSubmitted && (
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
                            onClick={() => setCurrentIndex(prev => Math.min(mcqs.length - 1, prev + 1))}
                            disabled={currentIndex === mcqs.length - 1}
                        >
                            Next Review <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Quick Navigation Sheet/Grid could be here, omitting for brevity */}
            {!isSubmitted && (
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {mcqs.map((q, idx) => (
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
