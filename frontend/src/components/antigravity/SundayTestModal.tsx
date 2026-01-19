"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, FileText, AlertCircle } from "lucide-react";

interface Question {
    id: number;
    text: string;
    options?: string[];
    type: "MCQ" | "Subjective";
    topic_tag: string;
}

interface TestResponse {
    test_id: string;
    questions: Question[];
}

interface TestResult {
    score: number;
    total_marks: number;
    correct_count: number;
    wrong_count: number;
    percentage: number;
    feedback: string;
    weak_topics?: string[]; // New
}

interface SundayTestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SundayTestModal({ isOpen, onClose }: SundayTestModalProps) {
    const [loading, setLoading] = useState(true);
    const [testData, setTestData] = useState<TestResponse | null>(null);
    const [answers, setAnswers] = useState<Record<number, string | number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState<TestResult | null>(null); // NEW

    useEffect(() => {
        if (isOpen) {
            fetchTest();
        }
    }, [isOpen]);

    const fetchTest = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/test/sunday`);
            setTestData(res.data);
        } catch (error) {
            console.error("Failed to load test", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (qId: number, value: string | number) => {
        setAnswers(prev => ({ ...prev, [qId]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Convert state to API format (QuestionID -> OptionIndex)
            // Note: OptionIndex needs to be number. Frontend stores option index as number.

            const payload = {
                answers: Object.entries(answers).reduce((acc, [key, val]) => {
                    acc[Number(key)] = Number(val);
                    return acc;
                }, {} as Record<number, number>)
            };

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/test/submit`, payload);
            setResult(res.data);
            setSubmitted(true);
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-2xl bg-[#1a1b26] border border-white/10 rounded-2xl flex flex-col max-h-[90vh] overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <FileText className="mr-2 text-blue-400" /> Sunday Test
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Generated from your completed tasks (70% Current + 20% Revision)
                            </p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {loading && !result ? (
                            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4" />
                                {submitted ? "Processing Test..." : "Generating Personalized Questions..."}
                            </div>
                        ) : submitted && result ? (
                            <div className="text-center py-12 px-6">
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className={`inline-flex p-6 rounded-[2rem] mb-6 shadow-2xl ${result.percentage >= 50
                                        ? 'bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-green-500/20'
                                        : 'bg-gradient-to-br from-red-500 to-orange-700 text-white shadow-red-500/20'}`}
                                >
                                    <CheckCircle size={64} strokeWidth={2.5} />
                                </motion.div>

                                <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                                    {result.score} <span className="text-lg text-gray-500 font-medium">/ {result.total_marks}</span>
                                </h3>

                                <div className="flex justify-center items-center gap-6 mb-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-green-500/80">Correct</span>
                                        <span className="text-xl font-mono font-black text-green-400">{result.correct_count}</span>
                                    </div>
                                    <div className="h-8 w-[1px] bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-red-500/80">Inaccurate</span>
                                        <span className="text-xl font-mono font-black text-red-400">{result.wrong_count}</span>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-10"
                                >
                                    <p className="text-2xl text-blue-300 font-black italic uppercase tracking-tight mb-2">
                                        {result.feedback}
                                    </p>
                                    <p className="text-gray-500 text-xs font-medium">
                                        Every error is a stepping stone to mastery. Review your weak areas below.
                                    </p>
                                </motion.div>

                                {result.weak_topics && result.weak_topics.length > 0 && (
                                    <div className="mt-8 mb-10 p-6 bg-white/5 border border-white/10 rounded-[2rem] text-left">
                                        <p className="text-red-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center">
                                            <AlertCircle size={14} className="mr-2" /> Strategic Vulnerabilities
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {result.weak_topics.map((t, i) => (
                                                <span key={i} className="px-4 py-2 bg-red-500/10 text-red-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-500/20 shadow-lg">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Negative Marking Applied: -0.66 per error</p>

                                    <button
                                        onClick={onClose}
                                        className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all active:scale-95"
                                    >
                                        Return to Mission Control
                                    </button>
                                </div>
                            </div>
                        ) : (
                            testData?.questions.map((q, index) => (
                                <div key={q.id} className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-mono text-gray-500">Q{index + 1} • {q.topic_tag}</span>
                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">{q.type}</span>
                                    </div>
                                    <p className="text-white text-lg mb-4">{q.text}</p>

                                    {q.type === "MCQ" && q.options ? (
                                        <div className="space-y-2">
                                            {q.options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(q.id, i)}
                                                    className={`w-full text-left p-3 rounded-lg transition-all ${answers[q.id] === i
                                                        ? "bg-blue-600 text-white border-blue-500"
                                                        : "bg-black/20 text-gray-300 hover:bg-white/10"
                                                        }`}
                                                >
                                                    <span className="font-mono opacity-50 mr-2">{String.fromCharCode(65 + i)}.</span>
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <textarea
                                            placeholder="Type your answer here..."
                                            rows={4}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500/50"
                                            onChange={(e) => handleAnswer(q.id, e.target.value)}
                                        />
                                    )}
                                </div>
                            ))
                        )}

                        {!loading && !submitted && testData?.questions.length === 0 && (
                            <div className="text-center text-gray-400 py-8">
                                <AlertCircle className="mx-auto mb-2" size={32} />
                                <p>No completed tasks found to generate a test from.</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {!loading && !submitted && (
                        <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
                            <button onClick={onClose} className="px-6 py-2 text-gray-400 hover:text-white mr-4">
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95"
                            >
                                Submit Test
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
