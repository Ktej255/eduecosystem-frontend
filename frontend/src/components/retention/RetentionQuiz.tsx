"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Trophy,
    Target,
    RefreshCw,
    X,
} from "lucide-react";
import { recordRevisionResult } from "@/services/progressStorage";

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
}

interface RetentionQuizProps {
    chapterId: string;
    topicName: string;
    questions: QuizQuestion[];
    onClose: () => void;
    onComplete?: (score: number, total: number) => void;
}

export default function RetentionQuiz({
    chapterId,
    topicName,
    questions,
    onClose,
    onComplete,
}: RetentionQuizProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [answers, setAnswers] = useState<(number | null)[]>(
        new Array(questions.length).fill(null)
    );

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + (isComplete ? 1 : 0)) / questions.length) * 100;

    const handleSelect = useCallback(
        (optionIndex: number) => {
            if (isRevealed) return;
            setSelectedAnswer(optionIndex);
        },
        [isRevealed]
    );

    const handleReveal = useCallback(() => {
        if (selectedAnswer === null) return;
        setIsRevealed(true);

        const isCorrect = selectedAnswer === currentQuestion.correctIndex;
        if (isCorrect) {
            setCorrectCount((prev) => prev + 1);
        }

        setAnswers((prev) => {
            const next = [...prev];
            next[currentIndex] = selectedAnswer;
            return next;
        });
    }, [selectedAnswer, currentQuestion, currentIndex]);

    const handleNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setSelectedAnswer(null);
            setIsRevealed(false);
        } else {
            // Quiz complete — record result
            const finalCorrect =
                correctCount +
                (selectedAnswer === currentQuestion.correctIndex ? 0 : 0);
            // correctCount already includes this answer from handleReveal
            const score = correctCount / questions.length;
            recordRevisionResult(chapterId, score);
            setIsComplete(true);
            onComplete?.(correctCount, questions.length);
        }
    }, [
        currentIndex,
        questions.length,
        correctCount,
        chapterId,
        onComplete,
        selectedAnswer,
        currentQuestion,
    ]);

    const getScoreMessage = () => {
        const pct = (correctCount / questions.length) * 100;
        if (pct >= 90)
            return {
                emoji: "🎯",
                title: "Excellent Retention!",
                desc: "Your stability score has doubled. This topic is well retained.",
                color: "text-emerald-400",
            };
        if (pct >= 60)
            return {
                emoji: "👍",
                title: "Good Recall",
                desc: "Stability maintained. Keep reviewing to strengthen this topic.",
                color: "text-amber-400",
            };
        return {
            emoji: "📚",
            title: "Needs Revision",
            desc: "Stability has been reset. This topic needs re-learning. Don't worry — that's what this portal is for!",
            color: "text-red-400",
        };
    };

    // Completion screen
    if (isComplete) {
        const msg = getScoreMessage();
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 max-w-md w-full text-center"
                >
                    <div className="text-6xl mb-4">{msg.emoji}</div>
                    <h2 className={`text-2xl font-bold ${msg.color} mb-2`}>
                        {msg.title}
                    </h2>
                    <p className="text-gray-400 mb-6">{msg.desc}</p>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="text-center">
                            <div className="text-4xl font-black text-white">
                                {correctCount}
                            </div>
                            <div className="text-xs text-gray-500">Correct</div>
                        </div>
                        <div className="text-gray-600 text-2xl">/</div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-gray-500">
                                {questions.length}
                            </div>
                            <div className="text-xs text-gray-500">Total</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 justify-center mb-8">
                        {questions.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full ${answers[i] === questions[i].correctIndex
                                        ? "bg-emerald-500"
                                        : "bg-red-500"
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Back to Dashboard
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-neutral-900 rounded-3xl border border-neutral-800 p-6 max-w-lg w-full"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-sm">
                                Retention Check
                            </h3>
                            <p className="text-gray-500 text-xs">{topicName}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-neutral-800 rounded-full mb-6 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Question counter */}
                <div className="text-gray-500 text-xs mb-3">
                    Question {currentIndex + 1} of {questions.length}
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <p className="text-white font-medium mb-5 leading-relaxed">
                            {currentQuestion.question}
                        </p>

                        {/* Options */}
                        <div className="space-y-3">
                            {currentQuestion.options.map((option, i) => {
                                const isSelected = selectedAnswer === i;
                                const isCorrect =
                                    i === currentQuestion.correctIndex;
                                let optionClass =
                                    "bg-neutral-800/50 border-neutral-700 hover:border-indigo-500/50 hover:bg-neutral-800";

                                if (isRevealed) {
                                    if (isCorrect) {
                                        optionClass =
                                            "bg-emerald-500/10 border-emerald-500 text-emerald-400";
                                    } else if (isSelected && !isCorrect) {
                                        optionClass =
                                            "bg-red-500/10 border-red-500 text-red-400";
                                    } else {
                                        optionClass =
                                            "bg-neutral-800/30 border-neutral-800 opacity-50";
                                    }
                                } else if (isSelected) {
                                    optionClass =
                                        "bg-indigo-500/10 border-indigo-500 text-indigo-300";
                                }

                                return (
                                    <motion.button
                                        key={i}
                                        whileHover={
                                            !isRevealed ? { scale: 1.01 } : {}
                                        }
                                        whileTap={
                                            !isRevealed ? { scale: 0.99 } : {}
                                        }
                                        onClick={() => handleSelect(i)}
                                        disabled={isRevealed}
                                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${optionClass}`}
                                    >
                                        <span className="w-7 h-7 rounded-lg bg-neutral-700/50 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        <span className="text-sm">
                                            {option}
                                        </span>
                                        {isRevealed && isCorrect && (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-auto flex-shrink-0" />
                                        )}
                                        {isRevealed &&
                                            isSelected &&
                                            !isCorrect && (
                                                <XCircle className="w-5 h-5 text-red-400 ml-auto flex-shrink-0" />
                                            )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Explanation */}
                        {isRevealed && currentQuestion.explanation && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700"
                            >
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    💡 {currentQuestion.explanation}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500">
                        {correctCount} / {currentIndex + (isRevealed ? 1 : 0)}{" "}
                        correct
                    </div>

                    {!isRevealed ? (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleReveal}
                            disabled={selectedAnswer === null}
                            className={`px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all ${selectedAnswer !== null
                                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                                    : "bg-neutral-800 text-gray-600 cursor-not-allowed"
                                }`}
                        >
                            <Target className="w-4 h-4" />
                            Check Answer
                        </motion.button>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleNext}
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2"
                        >
                            {currentIndex < questions.length - 1 ? (
                                <>
                                    Next <ArrowRight className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    <Trophy className="w-4 h-4" /> See Results
                                </>
                            )}
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
