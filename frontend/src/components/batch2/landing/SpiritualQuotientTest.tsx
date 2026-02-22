"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Brain, Zap, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

interface Question {
    id: number;
    text: string;
    category: "manas" | "prana" | "buddhi";
    options: { label: string; guna: "sattva" | "rajas" | "tamas"; weight: number }[];
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "When you wake up in the morning, what is your dominant feeling?",
        category: "prana",
        options: [
            { label: "Calm, clear, and ready for the day", guna: "sattva", weight: 3 },
            { label: "Restless or already thinking of tasks", guna: "rajas", weight: 2 },
            { label: "Heavy, tired, or wanting more sleep", guna: "tamas", weight: 1 },
        ],
    },
    {
        id: 2,
        text: "How easily can you focus on a single task for 30 minutes?",
        category: "manas",
        options: [
            { label: "Effortlessly, I lose track of time", guna: "sattva", weight: 3 },
            { label: "I can do it, but my mind jumps around", guna: "rajas", weight: 2 },
            { label: "It feels like a massive struggle", guna: "tamas", weight: 1 },
        ],
    },
    {
        id: 3,
        text: "How do you react to sudden changes or unexpected problems?",
        category: "buddhi",
        options: [
            { label: "I observe them calmly and find a solution", guna: "sattva", weight: 3 },
            { label: "I get anxious and start rushing", guna: "rajas", weight: 2 },
            { label: "I feel stuck, numb, or overwhelmed", guna: "tamas", weight: 1 },
        ],
    },
    {
        id: 4,
        text: "In your free time, what do you naturally gravitate towards?",
        category: "manas",
        options: [
            { label: "Self-reflection, reading, or quietude", guna: "sattva", weight: 3 },
            { label: "Entertainment, social media, or projects", guna: "rajas", weight: 2 },
            { label: "Sleeping, snacking, or doing nothing", guna: "tamas", weight: 1 },
        ],
    },
];

export default function SpiritualQuotientTest({ onComplete }: { onComplete?: (phaseId: number) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]); // Storing Gunas
    const [showResult, setShowResult] = useState(false);
    const router = useRouter();

    const handleStart = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    const handleAnswer = (guna: string) => {
        const newAnswers = [...answers, guna];
        setAnswers(newAnswers);

        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
            const counts = newAnswers.reduce((acc: any, g: string) => {
                acc[g] = (acc[g] || 0) + 1;
                return acc;
            }, {});

            let suggestedPhase = 1;
            if (counts.sattva >= 3) suggestedPhase = 4;
            else if (counts.sattva >= 2 || counts.rajas >= 3) suggestedPhase = 3;
            else if (counts.rajas >= 2) suggestedPhase = 2;

            if (onComplete) onComplete(suggestedPhase);
        }
    };

    const calculateResult = () => {
        const counts = answers.reduce((acc: any, g: string) => {
            acc[g] = (acc[g] || 0) + 1;
            return acc;
        }, {});

        // Expert Guna Analysis
        if (counts.sattva >= 3) return {
            level: "Sage in Making (Sattvic)",
            msg: "Your internal environment is pure and steady. You are ready for the highest non-dual teachings like Mandukya and the Brahma Sutras.",
            path: "/ancient-wisdom/gita",
            suggestedPhase: 4
        };

        if (counts.rajas >= 3 || (counts.sattva >= 2 && counts.rajas >= 1)) return {
            level: "The Dynamic Seeker (Rajasic-Sattvic)",
            msg: "You have great drive but need to channel it. The 'Inquiry' of Kena Upanishad will help you find the source of your dynamic energy.",
            path: "/ancient-wisdom/kena",
            suggestedPhase: 3
        };

        if (counts.rajas >= 2) return {
            level: "The Aspiring Warrior (Rajasic)",
            msg: "Your mind is highly active and prone to stress. Focus on the Isha Upanishad and Gita to find peace amidst action.",
            path: "/ancient-wisdom/isha",
            suggestedPhase: 2
        };

        return {
            level: "The Foundation Builder (Tamasic)",
            msg: "You are currently in a state of inertia or high friction. Start with Prana-Vidya and Yoga Upanishads to awaken your vital energy.",
            path: "/ancient-wisdom/kena?tab=introduction",
            suggestedPhase: 1
        };
    };

    const result = showResult ? calculateResult() : null;

    return (
        <>
            <div className="text-center py-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-white shadow-lg shadow-purple-500/30 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-card/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out skew-x-12" />
                    <span className="relative flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Discover Your Spiritual Quotient (SQ)
                    </span>
                </motion.button>
                <p className="mt-4 text-muted-foreground text-sm">Takes 1 minute • Receive a personalized roadmap</p>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

                            {!showResult ? (
                                <>
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Question {currentQuestion + 1}/{QUESTIONS.length}</span>
                                        <button onClick={handleClose} className="text-muted-foreground hover:text-white">✕</button>
                                    </div>

                                    <h3 className="text-2xl font-serif text-white mb-8 leading-relaxed">
                                        {QUESTIONS[currentQuestion].text}
                                    </h3>

                                    <div className="space-y-3">
                                        {QUESTIONS[currentQuestion].options.map((option, idx) => (
                                            <motion.button
                                                key={idx}
                                                whileHover={{ scale: 1.02, x: 5 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleAnswer(option.guna)}
                                                className="w-full text-left p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all text-slate-300 hover:text-white"
                                            >
                                                {option.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center space-y-6">
                                    <motion.div
                                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                                        className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500"
                                    >
                                        <Brain className="w-10 h-10" />
                                    </motion.div>

                                    <div>
                                        <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">Analysis Complete</h3>
                                        <h2 className="text-3xl font-serif text-white mb-4">You are a {result?.level}</h2>
                                        <p className="text-muted-foreground leading-relaxed">{result?.msg}</p>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            onClick={() => {
                                                handleClose();
                                                router.push(result?.path || "/ancient-wisdom");
                                            }}
                                            className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                        >
                                            Start Your Recommended Path <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
