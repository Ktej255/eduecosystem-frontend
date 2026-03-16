"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, ChevronRight, Trophy } from 'lucide-react';
import { toast } from 'sonner';

interface Question {
    id: number;
    text: string;
    options?: string[];
    type: string;
    topic_tag: string;
}

interface TestResult {
    score: number;
    total_marks: number;
    correct_count: number;
    wrong_count: number;
    percentage: number;
    feedback: string;
}

interface Props {
    testId: string;
    questions: Question[];
    onClose: () => void;
}

export default function SundayTestModal({ testId, questions, onClose }: Props) {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<TestResult | null>(null);
    const [currentQIndex, setCurrentQIndex] = useState(0);

    const handleOptionSelect = (qId: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/antigravity/test/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers })
            });

            if (!res.ok) throw new Error('Submission failed');

            const data = await res.json();
            setResult(data);
            toast.success("Test Submitted Successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit test. Please try again.");
            setSubmitting(false);
        }
    };

    if (result) {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                <div className="bg-[#1a1a2e] border border-purple-500/30 w-full max-w-lg rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                    <div className="mb-6 inline-flex p-4 rounded-full bg-purple-500/10 border border-purple-500/30">
                        <Trophy className="w-10 h-10 text-yellow-400" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-2">{result.feedback}</h2>
                    <p className="text-muted-foreground mb-8">Test ID: {testId}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                            <div className="text-muted-foreground text-xs uppercase tracking-wider">Score</div>
                            <div className="text-3xl font-black text-white">{result.score} <span className="text-sm text-muted-foreground">/ {result.total_marks}</span></div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                            <div className="text-muted-foreground text-xs uppercase tracking-wider">Percentage</div>
                            <div className={`text-3xl font-black ${result.percentage >= 50 ? 'text-emerald-400' : 'text-red-400'}`}>
                                {result.percentage}%
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                            <div className="text-muted-foreground text-xs uppercase tracking-wider">Correct</div>
                            <div className="text-xl font-bold text-emerald-400">{result.correct_count}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                            <div className="text-muted-foreground text-xs uppercase tracking-wider">Wrong</div>
                            <div className="text-xl font-bold text-red-400">{result.wrong_count}</div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-card text-black font-bold rounded-xl hover:bg-muted transition-colors"
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQIndex];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0B0B15] border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-[#111]">
                    <div>
                        <h2 className="text-xl font-bold text-white">Sunday Mock Test</h2>
                        <p className="text-sm text-muted-foreground">Question {currentQIndex + 1} of {questions.length}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full transition-colors text-muted-foreground">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Question Body */}
                <div className="flex-1 overflow-y-auto p-8">
                    <span className="inline-block px-2 py-1 rounded bg-blue-900/30 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">
                        {currentQ.topic_tag}
                    </span>
                    <h3 className="text-xl text-white font-medium mb-8 leading-relaxed">
                        {currentQ.text}
                    </h3>

                    <div className="space-y-3">
                        {currentQ.options?.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(currentQ.id, idx)}
                                className={`w-full p-4 text-left rounded-xl border transition-all flex items-center gap-4 group
                                    ${answers[currentQ.id] === idx
                                        ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/20'
                                        : 'bg-gray-900/50 border-gray-800 text-muted-foreground hover:border-gray-600 hover:bg-gray-800'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 
                                    ${answers[currentQ.id] === idx ? 'border-white bg-card/20' : 'border-gray-600 group-hover:border-gray-400'}
                                `}>
                                    {answers[currentQ.id] === idx && <div className="w-2.5 h-2.5 bg-card rounded-full" />}
                                </div>
                                <span className="font-medium">{opt}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800 bg-[#111] flex items-center justify-between">
                    <button
                        onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentQIndex === 0}
                        className="px-6 py-2 text-muted-foreground font-medium hover:text-white disabled:opacity-30 disabled:hover:text-muted-foreground"
                    >
                        Previous
                    </button>

                    {currentQIndex === questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            {submitting ? 'Submitting...' : 'Submit Test'}
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentQIndex(prev => Math.min(questions.length - 1, prev + 1))}
                            className="px-8 py-3 bg-card text-black font-bold rounded-xl hover:bg-muted transition-colors flex items-center gap-2"
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
