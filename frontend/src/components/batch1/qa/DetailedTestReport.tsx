"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    TrendingUp,
    TrendingDown,
    Clock,
    Target,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Trophy,
    Brain,
    Timer,
    BarChart3,
    BookOpen,
    Download,
    Bookmark, // For Spaced Repetition
    Filter,   // For filtering questions
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

interface TestAnswer {
    qId: string | number;
    answer: number;
    isCorrect: boolean;
    confidence: number | null; // 1=100% Sure, 2=50-50, 3=One Known, 4=Blind Guess
    timeSpentSeconds?: number;
}

interface MCQWithMeta {
    id: string | number;
    question: string;
    options: string[];
    correctAnswer?: number;
    correctIndex?: number;
    explanation?: string;
    level?: string;
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

interface DetailedTestReportProps {
    testResult: {
        id: number;
        cycle_id: number;
        day_number: number;
        score: number;
        total_questions: number;
        correct_count: number;
        incorrect_count: number;
        unanswered_count: number;
        answers: TestAnswer[];
        timestamp: string;
    };
    mcqs: MCQWithMeta[];
    history?: {
        id: number;
        score: number;
        total: number;
        accuracy: number;
        date: string;
    }[]; // For Trend Analysis
    onClose: () => void;
}

const CONFIDENCE_LABELS: Record<number, { label: string; emoji: string; color: string }> = {
    1: { label: "100% Sure", emoji: "✅", color: "text-emerald-600 dark:text-emerald-400" },
    2: { label: "50-50", emoji: "🤔", color: "text-amber-600 dark:text-amber-400" },
    3: { label: "One Known", emoji: "💡", color: "text-orange-600 dark:text-orange-400" },
    4: { label: "Blind Guess", emoji: "🎲", color: "text-destructive" },
};

export default function DetailedTestReport({ testResult, mcqs, history, onClose }: DetailedTestReportProps) {
    const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'skipped' | 'marked'>('all');
    const [markedQuestions, setMarkedQuestions] = useState<(string | number)[]>([]);

    // Load bookmarks
    useEffect(() => {
        const saved = localStorage.getItem('spacerep_bookmarks');
        if (saved) setMarkedQuestions(JSON.parse(saved));
    }, []);

    const toggleBookmark = (qId: string | number) => {
        const newSet = markedQuestions.includes(qId)
            ? markedQuestions.filter(id => id !== qId)
            : [...markedQuestions, qId];
        setMarkedQuestions(newSet);
        localStorage.setItem('spacerep_bookmarks', JSON.stringify(newSet));
    };
    // Compute topic-wise breakdown
    const topicAnalysis = useMemo(() => {
        const topicMap: Record<string, {
            total: number;
            correct: number;
            incorrect: number;
            unanswered: number;
            avgTime: number;
            questions: { qId: string | number; isCorrect: boolean; confidence: number | null }[];
        }> = {};

        testResult.answers.forEach(ans => {
            const mcq = mcqs.find(m => m.id === ans.qId);
            const topic = mcq?.subtopic || mcq?.chapter || mcq?.topic || "General";

            if (!topicMap[topic]) {
                topicMap[topic] = { total: 0, correct: 0, incorrect: 0, unanswered: 0, avgTime: 0, questions: [] };
            }

            topicMap[topic].total++;
            if (ans.answer === -1) {
                topicMap[topic].unanswered++;
            } else if (ans.isCorrect) {
                topicMap[topic].correct++;
            } else {
                topicMap[topic].incorrect++;
            }
            topicMap[topic].questions.push({ qId: ans.qId, isCorrect: ans.isCorrect, confidence: ans.confidence });
        });

        return Object.entries(topicMap)
            .map(([name, data]) => ({
                name,
                ...data,
                accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
            }))
            .sort((a, b) => b.total - a.total);
    }, [testResult.answers, mcqs]);

    // Compute confidence analysis
    const confidenceAnalysis = useMemo(() => {
        const results: Record<number, { total: number; correct: number; accuracy: number }> = {
            1: { total: 0, correct: 0, accuracy: 0 },
            2: { total: 0, correct: 0, accuracy: 0 },
            3: { total: 0, correct: 0, accuracy: 0 },
            4: { total: 0, correct: 0, accuracy: 0 },
        };

        testResult.answers.forEach(ans => {
            if (ans.confidence && ans.answer !== -1) {
                results[ans.confidence].total++;
                if (ans.isCorrect) {
                    results[ans.confidence].correct++;
                }
            }
        });

        Object.keys(results).forEach(key => {
            const k = parseInt(key);
            if (results[k].total > 0) {
                results[k].accuracy = Math.round((results[k].correct / results[k].total) * 100);
            }
        });

        return results;
    }, [testResult.answers]);

    // Compute time analysis (if available)
    const timeAnalysis = useMemo(() => {
        const answersWithTime = testResult.answers.filter(a => a.timeSpentSeconds !== undefined && a.timeSpentSeconds > 0);
        if (answersWithTime.length === 0) return null;

        const totalTime = answersWithTime.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0);
        const avgTime = totalTime / answersWithTime.length;

        const slowQuestions = answersWithTime.filter(a => (a.timeSpentSeconds || 0) > avgTime * 1.5);
        const fastQuestions = answersWithTime.filter(a => (a.timeSpentSeconds || 0) < avgTime * 0.5);

        return {
            totalTime,
            avgTime,
            slowCount: slowQuestions.length,
            fastCount: fastQuestions.length,
            answersWithTime,
        };
    }, [testResult.answers]);

    // Get weak topics (accuracy < 50%)
    const weakTopics = topicAnalysis.filter(t => t.accuracy < 50 && t.total >= 2);

    // Get strong topics (accuracy >= 80%)
    const strongTopics = topicAnalysis.filter(t => t.accuracy >= 80 && t.total >= 2);

    const scorePercent = Math.round((testResult.correct_count / testResult.total_questions) * 100);

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => {
                        const csvContent = "data:text/csv;charset=utf-8,"
                            + "Question ID,Question,Your Answer,Correct Answer,Is Correct,Time Spent(s),Confidence\n"
                            + testResult.answers.map(ans => {
                                const mcq = mcqs.find(m => m.id === ans.qId);
                                const qText = mcq?.question.replace(/,/g, " ") || "Unknown";
                                const myAns = ans.answer !== -1 ? String.fromCharCode(65 + ans.answer) : "Skipped";
                                const correctAns = mcq ? String.fromCharCode(65 + (mcq.correctAnswer ?? mcq.correctIndex ?? 0)) : "?";
                                return `${ans.qId},"${qText}",${myAns},${correctAns},${ans.isCorrect ? "Yes" : "No"},${ans.timeSpentSeconds || 0},${ans.confidence || ""}`;
                            }).join("\n");
                        const encodedUri = encodeURI(csvContent);
                        const link = document.createElement("a");
                        link.setAttribute("href", encodedUri);
                        link.setAttribute("download", `test_report_${testResult.id}.csv`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}>
                        <Download className="mr-2 h-4 w-4" /> Export CSV
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => {
                        const summary = `Test Score: ${testResult.score}/${testResult.total_questions * 2}\nCorrect: ${testResult.correct_count}\nAccuracy: ${scorePercent}%`;
                        navigator.clipboard.writeText(summary);
                        alert("Summary copied to clipboard!");
                    }}>
                        Copy Summary
                    </Button>
                </div>
                <h2 className="text-xl font-bold text-foreground">
                    📊 Detailed Test Report
                </h2>
                <div className="text-sm text-muted-foreground">
                    {new Date(testResult.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
            </div>

            {/* Score Overview */}
            <Card className="bg-primary text-primary-foreground shadow-lg">
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <Trophy className="h-8 w-8 mx-auto mb-2 text-primary-foreground/80" />
                            <p className="text-3xl font-bold">{testResult.score}</p>
                            <p className="text-xs opacity-80">Total Score</p>
                        </div>
                        <div>
                            <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-primary-foreground/80" />
                            <p className="text-3xl font-bold">{testResult.correct_count}</p>
                            <p className="text-xs opacity-80">Correct</p>
                        </div>
                        <div>
                            <XCircle className="h-8 w-8 mx-auto mb-2 text-primary-foreground/80" />
                            <p className="text-3xl font-bold">{testResult.incorrect_count}</p>
                            <p className="text-xs opacity-80">Incorrect</p>
                        </div>
                        <div>
                            <Target className="h-8 w-8 mx-auto mb-2 text-primary-foreground/80" />
                            <p className="text-3xl font-bold">{scorePercent}%</p>
                            <p className="text-xs opacity-80">Accuracy</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Analysis */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Brain className="h-5 w-5 text-purple-600" />
                        Confidence vs Accuracy Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(conf => {
                            const data = confidenceAnalysis[conf];
                            const meta = CONFIDENCE_LABELS[conf];
                            const expectedAccuracy = conf === 1 ? 90 : conf === 2 ? 50 : conf === 3 ? 35 : 25;
                            const isGood = data.accuracy >= expectedAccuracy;

                            return (
                                <div key={conf} className="p-4 rounded-lg border bg-muted">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg">{meta.emoji}</span>
                                        <span className={`text-xs font-medium ${meta.color}`}>{meta.label}</span>
                                    </div>
                                    <p className="text-2xl font-bold">{data.accuracy}%</p>
                                    <p className="text-xs text-muted-foreground">{data.correct}/{data.total} correct</p>
                                    <div className="mt-2 flex items-center gap-1 text-xs">
                                        {isGood ? (
                                            <><TrendingUp className="h-3 w-3 text-green-500" /> <span className="text-green-600">Good judgment</span></>
                                        ) : (
                                            <><TrendingDown className="h-3 w-3 text-red-500" /> <span className="text-red-600">Overconfident</span></>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                        <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">💡 Insight:</p>
                        <p className="text-blue-700 dark:text-blue-400">
                            {confidenceAnalysis[4].accuracy > 30
                                ? "Your blind guesses are doing well! Your intuition is strong."
                                : confidenceAnalysis[1].accuracy < 80
                                    ? "When you're 100% sure, you should aim for 90%+ accuracy. Review your 'sure' answers more carefully."
                                    : "Good confidence calibration! Your judgment aligns well with your actual knowledge."}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Topic-wise Breakdown */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <BookOpen className="h-5 w-5 text-green-600" />
                        Topic-wise Performance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topicAnalysis.map((topic, idx) => (
                            <div key={idx} className="p-3 rounded-lg border bg-muted">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium text-foreground">{topic.name}</span>
                                    <span className={`text-sm font-bold ${topic.accuracy >= 60 ? 'text-emerald-600 dark:text-emerald-400' : topic.accuracy >= 40 ? 'text-amber-500' : 'text-destructive'}`}>
                                        {topic.accuracy}%
                                    </span>
                                </div>
                                <Progress value={topic.accuracy} className="h-2 mb-2" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>{topic.total} questions</span>
                                    <span className="text-emerald-600 dark:text-emerald-400">{topic.correct} ✓</span>
                                    <span className="text-destructive">{topic.incorrect} ✗</span>
                                    {topic.unanswered > 0 && <span>{topic.unanswered} skipped</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Trend Analysis (If History Provided) */}
            {history && history.length > 1 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <TrendingUp className="h-5 w-5 text-indigo-600" />
                            Performance Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={history}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                                <XAxis
                                    dataKey="date"
                                    tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    style={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis domain={[0, 100]} style={{ fontSize: 10, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    labelFormatter={(d) => new Date(d).toLocaleDateString()}
                                    formatter={(val: number | any) => [`${val}%`, 'Accuracy']}
                                    contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                                />
                                <ReferenceLine y={scorePercent} stroke="var(--primary)" strokeDasharray="3 3" label={{ value: 'Current', fill: 'var(--primary)', fontSize: 10 }} />
                                <Line
                                    type="monotone"
                                    dataKey="accuracy"
                                    stroke="var(--primary)"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: 'var(--primary)', strokeWidth: 2, stroke: 'var(--card)' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            )}

            {/* Question Review Panel */}
            <Card>
                <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            Detailed Question Review
                        </CardTitle>

                        <div className="flex gap-2">
                            <Button variant={reviewFilter === 'all' ? "default" : "outline"} size="sm" onClick={() => setReviewFilter('all')}>
                                All
                            </Button>
                            <Button variant={reviewFilter === 'incorrect' ? "destructive" : "outline"} size="sm" onClick={() => setReviewFilter('incorrect')}>
                                Incorrect
                            </Button>
                            <Button variant={reviewFilter === 'skipped' ? "secondary" : "outline"} size="sm" onClick={() => setReviewFilter('skipped')}>
                                Skipped
                            </Button>
                            <Button variant={reviewFilter === 'marked' ? "default" : "outline"} size="sm" onClick={() => setReviewFilter('marked')} className={reviewFilter === 'marked' ? "bg-amber-500 hover:bg-amber-600" : ""}>
                                <Bookmark className="w-3 h-3 mr-1" /> Marked
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {testResult.answers
                        .filter(ans => {
                            if (reviewFilter === 'incorrect') return !ans.isCorrect && ans.answer !== -1;
                            if (reviewFilter === 'skipped') return ans.answer === -1;
                            if (reviewFilter === 'marked') return markedQuestions.includes(ans.qId);
                            return true;
                        })
                        .map((ans, idx) => {
                            const mcq = mcqs.find(m => m.id === ans.qId);
                            if (!mcq) return null;

                            return (
                                <div key={idx} className={`p-4 rounded-lg border ${ans.isCorrect
                                    ? "bg-emerald-500/5 border-emerald-500/20"
                                    : "bg-destructive/5 border-destructive/20"
                                    }`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-semibold text-sm text-muted-foreground">Q{idx + 1}</span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => toggleBookmark(ans.qId)}
                                                className={`p-1.5 rounded-full transition-colors ${markedQuestions.includes(ans.qId) ? 'text-amber-500 bg-amber-100 dark:bg-amber-900/30' : 'text-muted-foreground hover:bg-muted dark:hover:bg-gray-800'}`}
                                                title="Mark for Spaced Repetition"
                                            >
                                                <Bookmark className={`w-4 h-4 ${markedQuestions.includes(ans.qId) ? 'fill-amber-500' : ''}`} />
                                            </button>

                                            {ans.confidence && CONFIDENCE_LABELS[ans.confidence] && (
                                                <span className={`text-xs px-2 py-0.5 rounded-full bg-card dark:bg-black border ${CONFIDENCE_LABELS[ans.confidence].color} border-current`}>
                                                    {CONFIDENCE_LABELS[ans.confidence].emoji} {CONFIDENCE_LABELS[ans.confidence].label}
                                                </span>
                                            )}
                                            {ans.timeSpentSeconds && (
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Timer className="w-3 h-3" /> {ans.timeSpentSeconds}s
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="font-medium text-foreground mb-3">{mcq.question}</p>

                                    <div className="space-y-2 pl-4 border-l-2 border-border">
                                        {mcq.options.map((opt, oIdx) => (
                                            <div key={oIdx} className={`text-sm p-2 rounded ${oIdx === mcq.correctAnswer
                                                ? "bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 font-medium"
                                                : oIdx === ans.answer && !ans.isCorrect
                                                    ? "bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 line-through decoration-red-500"
                                                    : "text-muted-foreground dark:text-muted-foreground"
                                                }`}>
                                                {String.fromCharCode(65 + oIdx)}. {opt}
                                                {oIdx === mcq.correctAnswer && <span className="ml-2 text-green-600">✓</span>}
                                                {oIdx === ans.answer && !ans.isCorrect && <span className="ml-2 text-red-600">✗</span>}
                                            </div>
                                        ))}
                                    </div>

                                    {mcq.explanation && (
                                        <div className="mt-3 text-xs bg-primary/5 p-3 rounded border border-primary/10 text-foreground/80">
                                            <span className="font-bold text-primary mr-1">Explanation:</span> {mcq.explanation}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-300">
                        <Target className="h-5 w-5" />
                        Revision Recommendations
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {weakTopics.length > 0 ? (
                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                Focus on these topics for improvement:
                            </p>
                            {weakTopics.map((topic, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-red-700 dark:text-red-300">{topic.name}</p>
                                        <p className="text-xs text-red-600 dark:text-red-400">
                                            {topic.accuracy}% accuracy ({topic.correct}/{topic.total}) - Needs revision
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-3">
                                <Trophy className="h-6 w-6 text-green-500" />
                                <div>
                                    <p className="font-medium text-green-700 dark:text-green-300">Great job!</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">
                                        No major weak areas detected. Keep up the good work!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {strongTopics.length > 0 && (
                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">Your strong areas:</p>
                            <div className="flex flex-wrap gap-2">
                                {strongTopics.map((topic, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                                        ✓ {topic.name} ({topic.accuracy}%)
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
