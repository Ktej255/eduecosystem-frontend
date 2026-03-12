"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send, BookOpen, Clock, FileText, CheckCircle,
    AlertTriangle, BarChart3, ChevronLeft, Save,
    History, Lightbulb, TrendingUp
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface EvaluationResult {
    score: number;
    feedback: {
        intro: string;
        body: string;
        conclusion: string;
        keywords: string[];
    };
    strengths: string[];
    gaps: string[];
}

export default function MainsAnswerWorkspace({ questionId = 'q1' }: { questionId?: string }) {
    const router = useRouter();
    const [answer, setAnswer] = useState('');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);
    const [charCount, setCharCount] = useState(0);

    const question = {
        title: "Federal Structure of India",
        text: "Discuss the challenges to the federal structure of India in the context of recent developments. Suggest measures for better coordination between Centre and States. (150 words)",
        keywords: ["Cooperative Federalism", "Sarkaria Commission", "GST Council", "Article 356", "Centrally Sponsored Schemes"]
    };

    const handleEvaluate = async () => {
        setIsEvaluating(true);

        // Simulate structural analysis logic
        const lowAnswer = answer.toLowerCase();
        const hasIntro = lowAnswer.includes('introduction') || answer.length > 200;
        const hasConclusion = lowAnswer.includes('conclusion') || lowAnswer.includes('way forward') || lowAnswer.includes('to conclude');
        const hasBullets = answer.includes('•') || answer.includes('- ') || answer.includes('1.') || answer.includes('*');

        const foundKeywords = question.keywords.filter(k => lowAnswer.includes(k.toLowerCase()));
        const keywordScore = (foundKeywords.length / question.keywords.length) * 10;

        // Calculate structural score
        let structuralScore = 0;
        if (hasIntro) structuralScore += 3;
        if (hasConclusion) structuralScore += 3;
        if (hasBullets) structuralScore += 4;

        const finalScore = Number(((structuralScore * 0.4) + (keywordScore * 0.6)).toFixed(1));

        setTimeout(() => {
            const result: EvaluationResult = {
                score: finalScore,
                feedback: {
                    intro: hasIntro ? "Introduction detected. Good context setting." : "Missing explicit introduction. Start by defining the core concepts.",
                    body: hasBullets ? "Body with bullet points detected. Excellent readability." : "Main body is professional but lacks structured bullet points for better presentation.",
                    conclusion: hasConclusion ? "Conclusion/Way Forward found. Balanced ending." : "Missing a concluding summary or 'Way Forward'.",
                    keywords: foundKeywords
                },
                strengths: [
                    hasIntro ? "Constitutionally sound introduction" : "Direct approach",
                    hasBullets ? "Highly structured and readable body" : "Flow is consistent",
                ],
                gaps: [
                    !hasConclusion ? "Needs a 'Way Forward' section" : "Could include more specific Article references",
                    foundKeywords.length < 3 ? "Missing expert terminology (e.g. GST Council, Sarkaria)" : "Include more recent case laws"
                ]
            };
            setResult(result);
            setIsEvaluating(false);
        }, 2500);
    };

    return (
        <div className="flex flex-col h-[calc(100-80px)] md:h-[calc(100vh-64px)] overflow-hidden">
            {/* Header */}
            <header className="p-4 border-b border-border bg-card dark:bg-[#0a0a0a] flex justify-between items-center">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-muted-foreground">
                        {charCount} characters / ~{Math.floor(charCount / 5)} words
                    </div>
                    <button className="p-2 rounded-lg hover:bg-muted dark:hover:bg-gray-900 text-muted-foreground">
                        <Save className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="flex-1 flex flex-col md:flex-row divide-x divide-border dark:divide-gray-800 overflow-hidden">
                {/* Left Pane: Question & Input */}
                <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                        <div className="flex items-center gap-2 text-blue-600 mb-3">
                            <BookOpen className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-wider text-xs">Question</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{question.title}</h2>
                        <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed font-medium">
                            {question.text}
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Your Answer</label>
                            <span className="text-xs text-muted-foreground">Handwriting-friendly view enabled</span>
                        </div>
                        <textarea
                            value={answer}
                            onChange={(e) => {
                                setAnswer(e.target.value);
                                setCharCount(e.target.value.length);
                            }}
                            placeholder="Type your answer here... Remember to structure it with Introduction, Body, and Conclusion."
                            className="flex-1 p-6 rounded-2xl border-2 border-border bg-card dark:bg-[#111] focus:border-blue-500 outline-none resize-none font-serif text-lg leading-relaxed shadow-sm transition-all"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleEvaluate}
                            disabled={answer.length < 50 || isEvaluating}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg transition-all 
                                ${answer.length < 50 || isEvaluating
                                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95'}`}
                        >
                            {isEvaluating ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    >
                                        <History className="w-5 h-5" />
                                    </motion.div>
                                    AI Evaluating...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" /> Submit for Evaluation
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Pane: AI Feedback */}
                <aside className="w-full md:w-96 bg-muted dark:bg-[#0c0c0c] overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {!result && !isEvaluating ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="h-full flex flex-col items-center justify-center p-8 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                                    <Lightbulb className="w-10 h-10 text-blue-500" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Instant Feedback</h3>
                                <p className="text-muted-foreground text-sm">
                                    Submit your answer to get structural evaluation, keyword analysis, and suggested improvements.
                                </p>
                            </motion.div>
                        ) : isEvaluating ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="h-full p-8 flex flex-col space-y-6"
                            >
                                <div className="space-y-4">
                                    <div className="h-4 bg-muted rounded-full w-3/4 animate-pulse"></div>
                                    <div className="h-4 bg-muted rounded-full w-full animate-pulse"></div>
                                    <div className="h-4 bg-muted rounded-full w-5/6 animate-pulse"></div>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 relative mb-4">
                                        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                            className="absolute inset-0 border-4 border-t-blue-500 rounded-full"
                                        />
                                    </div>
                                    <p className="font-bold text-muted-foreground animate-pulse">Analyzing Structure...</p>
                                </div>
                            </motion.div>
                        ) : result ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                className="p-6 space-y-6"
                            >
                                <div className="bg-card dark:bg-[#111] p-6 rounded-2xl border border-border shadow-sm text-center">
                                    <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-1">Mains Score</p>
                                    <div className="text-5xl font-black text-blue-600 mb-2">{result.score}<span className="text-2xl text-muted-foreground">/10</span></div>
                                    <div className="flex justify-center items-center gap-1 text-green-600 font-bold text-sm">
                                        <TrendingUp className="w-4 h-4" /> Good Effort
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" /> Strengths
                                    </h4>
                                    <ul className="space-y-2">
                                        {result.strengths.map((s, i) => (
                                            <li key={i} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-amber-500" /> Improvement Gaps
                                    </h4>
                                    <ul className="space-y-2">
                                        {result.gaps.map((g, i) => (
                                            <li key={i} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                                {g}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-muted dark:bg-[#151515] p-5 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                                        <BarChart3 className="w-4 h-4 text-purple-500" /> Structural Breakdown
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs font-bold">Introduction</span>
                                                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">PASSED</span>
                                            </div>
                                            <p className="text-[11px] text-muted-foreground">{result.feedback.intro}</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs font-bold">Main Body</span>
                                                <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">PARTIAL</span>
                                            </div>
                                            <p className="text-[11px] text-muted-foreground">{result.feedback.body}</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs font-bold">Conclusion</span>
                                                <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded">WEAK</span>
                                            </div>
                                            <p className="text-[11px] text-muted-foreground">{result.feedback.conclusion}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </aside>
            </div>
        </div>
    );
}
