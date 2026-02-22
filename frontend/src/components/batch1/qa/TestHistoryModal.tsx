"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";

interface TestHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Reuse the questions data
import { DAY1_MCQS } from "@/components/batch1/polity/data/day1-mcqs";
import { DAY2_MCQS } from "@/components/batch1/polity/data/day2-mcqs";
import { DAY3_MCQS } from "@/components/batch1/polity/data/day3-mcqs";

import api from "@/lib/api";

export default function TestHistoryModal({ isOpen, onClose }: TestHistoryModalProps) {
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [reviewingTest, setReviewingTest] = useState<any | null>(null);
    const [reviewAnswers, setReviewAnswers] = useState<any[]>([]);

    // ... inside component ...

    const fetchHistory = async () => {
        setLoading(true);
        try {
            const res = await api.get('/batch1/test-results');
            setHistory(res.data);
        } catch (error) {
            console.error("Failed to fetch history:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDetail = async (id: number) => {
        console.log("Fetching detail for ID:", id);
        setLoading(true);
        try {
            const res = await api.get(`/batch1/test-results/${id}`);
            console.log("Detail Response:", res.data);
            setReviewingTest(res.data);
            setReviewAnswers(res.data.answers || []);
        } catch (error: any) {
            console.error("Failed to fetch detail:", error);
            const msg = error.response?.data?.detail || error.message;
            alert(`Error loading report: ${msg}`);
        } finally {
            setLoading(false);
        }
    };



    // Helper to get MCQs for a day
    const getMcqsForDay = (day: number) => {
        const d = typeof day === 'string' ? parseInt(day) : day;
        switch (d) {
            case 3: return DAY3_MCQS;
            case 2: return DAY2_MCQS;
            case 1: default: return DAY1_MCQS;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col bg-card">
                <div className="p-4 border-b flex items-center justify-between bg-blue-600 text-white">
                    <h3 className="font-bold text-lg">My Test Reports</h3>
                    <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-card/20">✕</Button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {loading ? (
                        <div className="flex items-center justify-center py-8">
                            <Clock className="h-6 w-6 animate-spin text-blue-600" />
                        </div>
                    ) : reviewingTest ? (
                        // Detailed View
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                <div>
                                    <p className="font-bold text-blue-700 dark:text-blue-300">Cycle {reviewingTest.cycle_id}, Day {reviewingTest.day_number}</p>
                                    <p className="text-xs text-muted-foreground">{new Date(reviewingTest.timestamp).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-xl font-bold ${reviewingTest.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>{reviewingTest.score}</p>
                                    <p className="text-xs text-muted-foreground">{reviewingTest.correct_count}/{reviewingTest.total_questions}</p>
                                </div>
                            </div>

                            <Button variant="outline" size="sm" onClick={() => { setReviewingTest(null); setReviewAnswers([]); }}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to History
                            </Button>

                            <div className="space-y-2">
                                {reviewAnswers.map((ans, idx) => {
                                    const mcqs = getMcqsForDay(reviewingTest.day_number);
                                    const q = mcqs.find(m => m.id === ans.qId);
                                    if (!q) return null;

                                    const confidenceLabels: Record<number, string> = { 1: '✅ 100% Sure', 2: '🤔 50-50', 3: '💡 One Known', 4: '🎲 Blind Guess' };

                                    return (
                                        <div key={idx} className={`p-3 rounded-lg border ${ans.isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900/10' : 'bg-red-50 border-red-200 dark:bg-red-900/10'}`}>
                                            <p className="text-sm font-medium mb-1">Q{idx + 1}: {q.question}</p>
                                            <div className="flex items-center justify-between text-xs mt-2">
                                                <span className="dark:text-muted-foreground">Your Answer: <strong>{ans.answer >= 0 ? q.options[ans.answer] : 'Skipped'}</strong></span>
                                                <span className={ans.isCorrect ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{ans.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                                            </div>
                                            {/* Show correct answer if incorrect */}
                                            {!ans.isCorrect && (
                                                <div className="text-xs text-green-700 dark:text-green-400 mt-1">
                                                    Correct Answer: {q.options[(q.correctAnswer ?? q.correctIndex) ?? 0]}
                                                </div>
                                            )}
                                            {ans.confidence && (
                                                <p className="text-xs text-purple-600 mt-1">Confidence: {confidenceLabels[ans.confidence] || 'N/A'}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : history.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No test reports found.</p>
                            <p className="text-sm mt-2">Complete a test in Batch 1 to see your results here!</p>
                        </div>
                    ) : (
                        // List View
                        <div className="space-y-3">
                            {history.map((result, idx) => (
                                <Card key={idx} className="border hover:shadow-md transition-all">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold">Test Item: Cycle {result.cycle_id}, Day {result.day_number}</p>
                                                <p className="text-xs text-muted-foreground">{new Date(result.timestamp).toLocaleDateString()} • {new Date(result.timestamp).toLocaleTimeString()}</p>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xl font-bold ${result.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>{result.score}</span>
                                                    <span className="text-xs text-muted-foreground">marks</span>
                                                </div>
                                                <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => fetchDetail(result.id)}>
                                                    View Report
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
    );
}
