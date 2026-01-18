"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import api from "@/lib/api"; // Import centralized API instance
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
    Flag,
    Shield,
    ScrollText
} from "lucide-react";
// Import centrally registered data loader
import { getMCQDataForDay } from "../content-registry";
import { MCQ } from "../polity/data/day1-mcqs"; // Retain Type Import
import DetailedTestReport from "./DetailedTestReport";

interface MCQTestSessionProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

export default function MCQTestSession({ cycleId, day, onClose }: MCQTestSessionProps) {
    const { user } = useAuth(); // MOVED TO TOP - hooks must be unconditional
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null); // NEW: Sub-topic selection for Day 9
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: number }>({}); // qId -> optionIndex
    const [confidenceLevels, setConfidenceLevels] = useState<{ [key: string]: number }>({}); // qId -> confidence (1-4)
    const [timeLeft, setTimeLeft] = useState(60 * 60); // Default 60 min, will be updated based on question count
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [unansweredCount, setUnansweredCount] = useState(0);
    const [showHistory, setShowHistory] = useState(false);
    const [testHistory, setTestHistory] = useState<any[]>([]);
    const [loadingHistory, setLoadingHistory] = useState(false);
    const [reviewingTest, setReviewingTest] = useState<any | null>(null); // For reviewing a past test
    const [reviewAnswers, setReviewAnswers] = useState<any[]>([]); // Answers from past test
    const [showDetailedReport, setShowDetailedReport] = useState(false); // Show detailed analytics report
    const [submittedResultData, setSubmittedResultData] = useState<any>(null); // Store submitted result for report
    const [loading, setLoading] = useState(true); // New loading state for questions

    // Time tracking per question
    const [questionStartTimes, setQuestionStartTimes] = useState<{ [key: string]: number }>({}); // qId -> timestamp
    const [timeSpentPerQuestion, setTimeSpentPerQuestion] = useState<{ [key: string]: number }>({}); // qId -> seconds

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const handleSubmitRef = useRef<() => void>(() => { }); // Ref to hold latest handleSubmit

    // Format timer
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    // ===== ALL HOOKS MUST BE BEFORE ANY CONDITIONAL RETURNS =====

    // Timer logic - PER QUESTION
    useEffect(() => {
        // Only run timer if not on Day 9 selection screen and not submitted
        if ((day !== 9 || selectedSubTopic) && !isSubmitted) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        // Time's Up for THIS Question
                        handleQuestionTimeout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isSubmitted, day, selectedSubTopic, currentIndex]); // Added currentIndex dependency

    const handleQuestionTimeout = () => {
        // Auto-advance or Submit if last
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Last question timed out - Submit
            handleSubmitRef.current();
        }
    };

    // Dynamic timer: 1 question = 1 minute
    // Dynamic timer: 1 question = 1 minute (PER QUESTION NOW)
    useEffect(() => {
        if (questions.length > 0 && !isSubmitted) {
            // Reset to 60s whenever question changes
            setTimeLeft(60);
        }
    }, [currentIndex, questions.length, isSubmitted]);

    // Load questions based on day and selected sub-topic - always call this hook
    useEffect(() => {
        const loadQuestions = () => {
            setLoading(true);
            // Day 9 Special Handling: Requires sub-topic selection
            if (day === 9 && !selectedSubTopic) {
                setLoading(false);
                return;
            }

            const loadedMCQs = getMCQDataForDay(cycleId, day, selectedSubTopic || undefined);
            if (loadedMCQs) {
                setQuestions(loadedMCQs);
            } else {
                // If registry returns undefined, questions remains empty -> triggers "No Content Found" UI
                console.log(`No MCQs found in registry for Cycle ${cycleId}, Day ${day}`);
            }
            setLoading(false);
        };
        loadQuestions();
    }, [day, selectedSubTopic, cycleId]); // Re-load when day or sub-topic changes

    // Track time entering each question - always call this hook
    useEffect(() => {
        // Skip if on Day 9 selection screen
        if (day === 9 && !selectedSubTopic) return;

        if (!isSubmitted && questions.length > 0) {
            const currentQ = questions[currentIndex];
            if (currentQ) {
                const qId = currentQ.id;
                // Record start time for this question if not already set
                if (!questionStartTimes[qId]) {
                    setQuestionStartTimes(prev => ({ ...prev, [qId]: Date.now() }));
                }
            }
        }
    }, [currentIndex, isSubmitted, questions, day, selectedSubTopic]);

    // ===== NOW SAFE TO HAVE CONDITIONAL RETURNS =====

    // DAY 9 SELECTION SCREEN
    if (day === 9 && !selectedSubTopic) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] p-6 animate-in fade-in duration-500">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Day 9: Directive Principles & Fundamental Duties
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Please select a topic to begin your MCQ test.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                    {/* DPSP CARD */}
                    <Card
                        className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500"
                        onClick={() => setSelectedSubTopic('dpsp')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <ScrollText className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Directive Principles
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Test your knowledge on Articles 36-51, Classification of Principles, and Amendments.
                            </p>
                            <Button className="mt-auto w-full bg-purple-600 hover:bg-purple-700">
                                Start DPSP Test
                            </Button>
                        </CardContent>
                    </Card>

                    {/* FUNDAMENTAL DUTIES CARD */}
                    <Card
                        className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-500"
                        onClick={() => setSelectedSubTopic('fundamental-duties')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className="w-20 h-20 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Fundamental Duties
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Test your knowledge on Article 51A, Swaran Singh Committee, and Significance of Duties.
                            </p>
                            <Button className="mt-auto w-full bg-pink-600 hover:bg-pink-700">
                                Start Fundamental Duties Test
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Button variant="ghost" className="mt-12 text-gray-500" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        );
    }

    // When leaving a question, calculate time spent
    const recordTimeForQuestion = (qId: number) => {
        const startTime = questionStartTimes[qId];
        if (startTime) {
            const elapsed = Math.round((Date.now() - startTime) / 1000);
            setTimeSpentPerQuestion(prev => ({
                ...prev,
                [qId]: (prev[qId] || 0) + elapsed
            }));
            // Reset start time for next visit
            setQuestionStartTimes(prev => ({ ...prev, [qId]: Date.now() }));
        }
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (isSubmitted || questions.length === 0) return;
        setAnswers(prev => ({
            ...prev,
            [questions[currentIndex].id]: optionIndex
        }));
    };

    const handleConfidenceSelect = (confidence: number) => {
        if (isSubmitted || questions.length === 0) return;
        setConfidenceLevels(prev => ({
            ...prev,
            [questions[currentIndex].id]: confidence
        }));
    };

    const fetchTestHistory = async () => {
        setLoadingHistory(true);
        try {
            const response = await api.get(`/batch1/test-results`);
            setTestHistory(response.data);
        } catch (error) {
            console.error("Failed to fetch test history:", error);
        } finally {
            setLoadingHistory(false);
        }
    };

    const fetchTestDetail = async (resultId: number) => {
        setLoadingHistory(true);
        try {
            const response = await api.get(`/batch1/test-results/${resultId}`);
            setReviewingTest(response.data);
            setReviewAnswers(response.data.answers || []);
        } catch (error) {
            console.error("Failed to fetch test detail:", error);
        } finally {
            setLoadingHistory(false);
        }
    };

    const handleSubmit = async () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Prevent double submission
        if (isSubmitted) return;

        let calculatedScore = 0;
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const resultsForApi = questions.map(q => {
            const userAnswer = answers[q.id];
            let isCorrect = false;
            if (userAnswer === undefined) {
                unanswered++;
            } else if (userAnswer === (q.correctAnswer ?? q.correctIndex)) {
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
                isCorrect: isCorrect,
                confidence: confidenceLevels[q.id] || null, // Include confidence level
                timeSpentSeconds: timeSpentPerQuestion[q.id] || 0 // Include time spent
            };
        });

        const finalScore = Number(calculatedScore.toFixed(2));
        setScore(finalScore);
        setCorrectCount(correct);
        setIncorrectCount(incorrect);
        setUnansweredCount(unanswered);
        setIsSubmitted(true);
        setCurrentIndex(0); // Go back to start for review

        // IMPORTANT: Set result data BEFORE API call so report works even if API fails
        const resultData = {
            id: 0,
            cycle_id: cycleId,
            day_number: day,
            score: finalScore,
            total_questions: questions.length,
            correct_count: correct,
            incorrect_count: incorrect,
            unanswered_count: unanswered,
            answers: resultsForApi,
            timestamp: new Date().toISOString()
        };
        setSubmittedResultData(resultData);

        // Auto-open the detailed report immediately after submission
        setShowDetailedReport(true);

        // Save to Database in background
        setIsSaving(true);
        try {
            const response = await api.post(`/batch1/test-results`, {
                cycle_id: cycleId,
                day_number: day,
                score: finalScore,
                total_questions: questions.length,
                correct_count: correct,
                incorrect_count: incorrect,
                unanswered_count: unanswered,
                answers: resultsForApi
            });
            console.log("Test result saved to AWS database", response.data);

            // Update result with actual ID from database
            if (response.data && response.data.id) {
                setSubmittedResultData({ ...resultData, id: response.data.id });
            }

            // Refresh test history after successful save
            fetchTestHistory();
        } catch (error) {
            console.error("Failed to save test result:", error);
            // Log detailed error for debugging
            const errorMessage = (error as any)?.response?.data?.detail || (error as any)?.response?.statusText || (error as any)?.message || "Unknown error";
            const errorStatus = (error as any)?.response?.status || "No status";
            console.error("API Error: Status=" + errorStatus + ", Message=" + errorMessage);
            // Show error message but keep the report visible
            alert("Warning: Could not save to server (" + errorStatus + ": " + errorMessage + "). Your report is displayed but may not appear in history after refresh.");
        } finally {
            setIsSaving(false);
        }
    };

    // Keep the ref updated with latest handleSubmit
    useEffect(() => {
        handleSubmitRef.current = handleSubmit;
    });

    // Safety check for loading or empty questions
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                <Clock className="h-10 w-10 animate-spin text-blue-600" />
                <p className="text-gray-500 font-medium">Loading test content...</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
                <AlertCircle className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">No Content Found</h3>
                <p className="text-gray-500">
                    We couldn't find any questions for Cycle {cycleId}, Day {day}.
                    <br />Please try again later or contact support.
                </p>
                <Button onClick={onClose} variant="outline">Go Back</Button>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
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
                            ) : reviewingTest ? (
                                // Review Detail View
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                                        <div>
                                            <p className="font-bold text-blue-700">Cycle {reviewingTest.cycle_id}, Day {reviewingTest.day_number}</p>
                                            <p className="text-xs text-gray-500">{new Date(reviewingTest.timestamp).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-xl font-bold ${reviewingTest.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>{reviewingTest.score}</p>
                                            <p className="text-xs text-gray-500">{reviewingTest.correct_count}/{reviewingTest.total_questions}</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => { setReviewingTest(null); setReviewAnswers([]); }}>
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to History
                                    </Button>
                                    <div className="space-y-2 max-h-96 overflow-y-auto">
                                        {reviewAnswers.map((ans, idx) => {
                                            const q = questions.find(m => m.id === ans.qId);
                                            if (!q) return null;
                                            const confidenceLabels: Record<number, string> = { 1: '✅ 100% Sure', 2: '🤔 50-50', 3: '💡 One Known', 4: '🎲 Blind Guess' };
                                            return (
                                                <div key={idx} className={`p-3 rounded-lg border ${ans.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                                    <p className="text-sm font-medium mb-1">Q{idx + 1}: {q.question.substring(0, 80)}...</p>
                                                    <div className="flex items-center justify-between text-xs">
                                                        <span>Your Answer: <strong>{ans.answer >= 0 ? q.options[ans.answer]?.substring(0, 30) + '...' : 'Skipped'}</strong></span>
                                                        <span className={ans.isCorrect ? 'text-green-600' : 'text-red-600'}>{ans.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                                                    </div>
                                                    {ans.confidence && (
                                                        <p className="text-xs text-purple-600 mt-1">Confidence: {confidenceLabels[ans.confidence] || 'N/A'}</p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
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
                                                    <div className="text-right flex items-center gap-3">
                                                        <div>
                                                            <p className={`text-2xl font-bold ${result.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>{result.score}</p>
                                                            <p className="text-xs text-gray-500">{result.correct_count}/{result.total_questions} correct</p>
                                                        </div>
                                                        <Button size="sm" variant="outline" onClick={() => fetchTestDetail(result.id)}>
                                                            Review
                                                        </Button>
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

                <div className="hidden md:block font-semibold text-gray-700 dark:text-gray-300">
                    {day === 102 ? "Day 10 - Paper 2" : (day === 10 ? "Day 10 - Paper 1" : `Cycle ${cycleId} - Day ${day}`)}
                </div>

                {!isSubmitted && (
                    <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
                        <Clock className="h-5 w-5" />
                        {formatTime(timeLeft)}
                    </div>
                )}

                <div className="text-sm font-medium">
                    Question {currentIndex + 1} / {questions.length}
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-2" />

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
                    {/* View Detailed Report Button */}
                    {submittedResultData && (
                        <div className="flex justify-center mt-4">
                            <Button
                                onClick={() => setShowDetailedReport(true)}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 hover:from-purple-700 hover:to-blue-700"
                            >
                                📊 View Detailed Analytics Report
                            </Button>
                        </div>
                    )}
                </div>
            )}

            {/* Detailed Report Modal */}
            {showDetailedReport && submittedResultData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <DetailedTestReport
                            testResult={submittedResultData}
                            mcqs={questions}
                            onClose={() => setShowDetailedReport(false)}
                        />
                    </div>
                </div>
            )}

            {/* Main Question Area */}
            <Card className="min-h-[400px] flex flex-col bg-white dark:bg-gray-900 border">
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
                            const isCorrect = (currentQuestion.correctAnswer ?? currentQuestion.correctIndex) === idx;

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

                    {/* Confidence Level Selector - Always visible during test */}
                    {!isSubmitted && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                            <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-3">
                                🎯 Rate Your Confidence
                            </p>
                            {!isAnswered && (
                                <p className="text-xs text-gray-500 mb-2 italic">Select an answer above first, then rate your confidence</p>
                            )}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {[
                                    { id: 1, label: "100% Sure", emoji: "✅", color: "bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
                                    { id: 2, label: "50-50", emoji: "🤔", color: "bg-yellow-100 border-yellow-500 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
                                    { id: 3, label: "One Known", emoji: "💡", color: "bg-orange-100 border-orange-500 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
                                    { id: 4, label: "Blind Guess", emoji: "🎲", color: "bg-red-100 border-red-500 text-red-700 dark:bg-red-900/30 dark:text-red-300" }
                                ].map(conf => (
                                    <button
                                        key={conf.id}
                                        onClick={() => handleConfidenceSelect(conf.id)}
                                        disabled={!isAnswered}
                                        className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${confidenceLevels[currentQuestion.id] === conf.id
                                            ? `${conf.color} ring-2 ring-offset-2 ring-purple-500 shadow-md`
                                            : isAnswered
                                                ? "bg-white dark:bg-gray-900 border-gray-300 hover:border-purple-400 hover:shadow-sm"
                                                : "bg-gray-100 dark:bg-gray-800 border-gray-200 opacity-50 cursor-not-allowed"
                                            }`}
                                    >
                                        <span className="mr-1 text-base">{conf.emoji}</span> {conf.label}
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
                        {currentIndex < questions.length - 1 && (
                            <Button
                                variant="outline"
                                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                            >
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            onClick={() => {
                                const answeredCount = Object.keys(answers).length;
                                if (answeredCount < questions.length) {
                                    const unattempted = questions.length - answeredCount;
                                    const confirmed = window.confirm(
                                        `⚠️ Warning: You have ${unattempted} unattempted question(s) out of ${questions.length}.\n\nAre you sure you want to submit the test?`
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
                            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                            disabled={currentIndex === questions.length - 1}
                        >
                            Next Review <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Quick Navigation Sheet/Grid could be here, omitting for brevity */}
            {!isSubmitted && (
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {questions.map((q, idx) => (
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
