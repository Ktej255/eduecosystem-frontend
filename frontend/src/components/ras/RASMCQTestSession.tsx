"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Globe, ChevronLeft, ChevronRight, RefreshCw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { RAS_2024_FULL_PAPER } from "./data/ras-2024-index";

interface RASMCQTestSessionProps {
    onExit: () => void;
}

export default function RASMCQTestSession({ onExit }: RASMCQTestSessionProps) {
    const [questions, setQuestions] = useState(RAS_2024_FULL_PAPER);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [language, setLanguage] = useState<"en" | "hi">("en");
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({}); // questionId -> optionIndex (0-4)
    const [showResult, setShowResult] = useState(false);

    // Derived state
    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    const handleOptionSelect = (optionIndex: number) => {
        if (showResult) return; // Prevent changing after submission/result view if we add that mode
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: optionIndex
        }));
    };

    const handleNext = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;
        let correctCount = 0;
        let incorrectCount = 0;
        let unattemptedCount = 0;

        questions.forEach(q => {
            const userAns = selectedAnswers[q.id];
            if (userAns !== undefined) {
                // RAS specific: Option 5 (index 4) is usually "Question not attempted" in recent papers if forced, 
                // but here our data has it as an option. 
                // If the correct answer is index 4 (5th option), and user picked it, they get marks.
                // However, usually "Question not attempted" is a specific bubble. 
                // In our data, "Question not attempted" is often the 5th option text.
                // If user selects "Question not attempted" (index 4), it should count as 0 marks, not negative.
                // WE need to check if the question defines 'correctAnswer' as the actual answer logic.
                // In the data provided, `correctAnswer` is the 1-based index of the correct option.
                // So if userAns + 1 === q.correctAnswer, it is correct.

                if (userAns + 1 === q.correctAnswer) {
                    score += 1.33; // Standard RAS prelims marks approx? (200 marks / 150 Qs = 1.33 marks/Q)
                    correctCount++;
                } else {
                    // Negative marking usually 1/3rd of marks assigned.
                    score -= (1.33 / 3);
                    incorrectCount++;
                }
            } else {
                unattemptedCount++;
            }
        });
        return { score, correctCount, incorrectCount, unattemptedCount };
    };

    if (showResult) {
        const { score, correctCount, incorrectCount } = calculateScore();
        return (
            <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
                <Card className="w-full max-w-2xl bg-neutral-900 border-amber-500/30">
                    <CardContent className="p-8 text-center space-y-6">
                        <Trophy className="w-16 h-16 text-amber-500 mx-auto" />
                        <h2 className="text-3xl font-bold text-amber-500">Result Summary</h2>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                                <div className="text-2xl font-bold text-green-400">{correctCount}</div>
                                <div className="text-sm text-neutral-400">Correct</div>
                            </div>
                            <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                                <div className="text-2xl font-bold text-red-400">{incorrectCount}</div>
                                <div className="text-sm text-neutral-400">Incorrect</div>
                            </div>
                            <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                                <div className="text-2xl font-bold text-amber-400">{score.toFixed(2)}</div>
                                <div className="text-sm text-neutral-400">Score</div>
                            </div>
                        </div>
                        <Button onClick={onExit} className="w-full bg-neutral-800 hover:bg-neutral-700">
                            Exit to Dashboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50 backdrop-blur">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={onExit}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-sm font-bold text-amber-500 uppercase tracking-wider">RAS Pre 2024</h1>
                        <p className="text-xs text-neutral-400">Full Paper (150 Questions)</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setLanguage(l => l === 'en' ? 'hi' : 'en')}
                        className="flex items-center gap-2 border-neutral-700 text-neutral-300 hover:text-white"
                    >
                        <Globe className="w-4 h-4" />
                        {language === 'en' ? 'हिन्दी' : 'English'}
                    </Button>
                    <div className="text-right">
                        <div className="text-xl font-mono font-bold text-white">
                            {currentIndex + 1}<span className="text-neutral-600 text-sm">/{totalQuestions}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={progress} className="h-1 bg-neutral-900" />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-4xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Question */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 rounded text-xs font-bold bg-neutral-800 text-neutral-400 border border-neutral-700">
                                    {currentQuestion.subject}
                                </span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-medium leading-relaxed font-serif text-neutral-100">
                                {language === 'en' ? currentQuestion.question.en : currentQuestion.question.hi}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="grid gap-3">
                            {(language === 'en' ? currentQuestion.options.en : currentQuestion.options.hi)?.map((option, idx) => {
                                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        className={cn(
                                            "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 group",
                                            isSelected
                                                ? "bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/50"
                                                : "bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5",
                                            isSelected
                                                ? "border-amber-500 bg-amber-500 text-black"
                                                : "border-neutral-600 group-hover:border-neutral-400"
                                        )}>
                                            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                        </div>
                                        <span className={cn(
                                            "text-lg",
                                            isSelected ? "text-amber-200" : "text-neutral-300"
                                        )}>
                                            {option}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="p-4 border-t border-neutral-800 bg-black flex justify-between items-center max-w-4xl mx-auto w-full">
                <Button
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="text-neutral-400 hover:text-white"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                </Button>

                <Button
                    onClick={handleNext}
                    className="bg-white text-black hover:bg-neutral-200 font-bold px-8"
                >
                    {currentIndex === totalQuestions - 1 ? "Finish & Submit" : "Next Question"} <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
}
