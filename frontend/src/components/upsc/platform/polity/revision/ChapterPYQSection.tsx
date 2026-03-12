"use client";

import React, { useState } from "react";
import {
    BookOpen, CheckCircle2, XCircle, Clock,
    TrendingUp, History, Target, ChevronDown,
    ChevronUp, Award, AlertTriangle, Sparkles,
    Newspaper, Lightbulb
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PYQItem } from "../data/pyq-types";

interface ChapterPYQSectionProps {
    pyqData: PYQItem[];
}

const FrequencyBadge = ({ frequency }: { frequency: 'high' | 'medium' | 'low' }) => {
    const config = {
        high: { bg: "bg-red-100 text-red-800 border-red-300", label: "🔥 HIGH YIELD" },
        medium: { bg: "bg-yellow-100 text-yellow-800 border-yellow-300", label: "📊 MEDIUM" },
        low: { bg: "bg-green-100 text-green-800 border-green-300", label: "📗 LOW" },
    };
    return (
        <Badge className={`${config[frequency].bg} border font-bold text-xs`}>
            {config[frequency].label}
        </Badge>
    );
};

const TrendBadge = ({ trend }: { trend: 'increasing' | 'stable' | 'decreasing' }) => {
    const config = {
        increasing: { icon: TrendingUp, color: "text-green-600", label: "Trending ↑" },
        stable: { icon: Target, color: "text-blue-600", label: "Stable" },
        decreasing: { icon: History, color: "text-muted-foreground", label: "Declining ↓" },
    };
    const Icon = config[trend].icon;
    return (
        <span className={`flex items-center gap-1 text-xs font-bold ${config[trend].color}`}>
            <Icon size={12} /> {config[trend].label}
        </span>
    );
};

const QuestionCard = ({
    question,
    index,
    onAnswer
}: {
    question: PYQItem;
    index: number;
    onAnswer: (correct: boolean) => void;
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const correctAnswerIndex = question.options ? question.options.findIndex(o => o.isCorrect) : -1;
    const isAnswered = selectedAnswer !== null;
    const isCorrect = selectedAnswer === correctAnswerIndex;

    const handleSelect = (optionIndex: number) => {
        if (isAnswered) return;
        setSelectedAnswer(optionIndex);
        setShowExplanation(true);
        onAnswer(optionIndex === correctAnswerIndex);
    };

    const difficultyColors: Record<string, string> = {
        Easy: "bg-green-100 text-green-800",
        Medium: "bg-yellow-100 text-yellow-800",
        Hard: "bg-red-100 text-red-800",
    };

    const diffColor = difficultyColors[question.difficulty] || "bg-yellow-100 text-yellow-800";

    return (
        <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800 font-bold">
                        UPSC {question.year}
                    </Badge>
                    <Badge className={`${diffColor} font-bold text-[10px]`}>
                        {question.difficulty.toUpperCase()}
                    </Badge>
                </div>
            </div>

            {/* Question */}
            <p className="text-foreground font-bold text-sm leading-relaxed mb-4 whitespace-pre-line">
                {question.question}
            </p>

            {/* Options */}
            <div className="space-y-2">
                {question.options?.map((option, optIdx) => {
                    let optionStyle = "bg-muted border-border hover:bg-muted";

                    if (isAnswered) {
                        if (optIdx === correctAnswerIndex) {
                            optionStyle = "bg-green-100 border-green-500 text-green-800";
                        } else if (optIdx === selectedAnswer && !isCorrect) {
                            optionStyle = "bg-red-100 border-red-500 text-red-800";
                        } else {
                            optionStyle = "bg-muted border-border opacity-50";
                        }
                    }

                    return (
                        <button
                            key={optIdx}
                            onClick={() => handleSelect(optIdx)}
                            disabled={isAnswered}
                            className={`w-full text-left p-3 rounded-xl border-2 ${optionStyle} transition-all flex items-center gap-3`}
                        >
                            <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                                {option.label}
                            </span>
                            <span className="text-sm font-medium">{option.text}</span>
                            {isAnswered && optIdx === correctAnswerIndex && (
                                <CheckCircle2 className="ml-auto text-green-600" size={18} />
                            )}
                            {isAnswered && optIdx === selectedAnswer && !isCorrect && (
                                <XCircle className="ml-auto text-red-600" size={18} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {showExplanation && (
                <div className={`mt-4 p-4 rounded-xl border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                            <>
                                <CheckCircle2 className="text-green-600" size={18} />
                                <span className="font-black text-green-700">Correct! ✨</span>
                            </>
                        ) : (
                            <>
                                <AlertTriangle className="text-amber-600" size={18} />
                                <span className="font-black text-amber-700">Not quite. Learn from this:</span>
                            </>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {question.explanation}
                    </p>
                    {question.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                            {question.tags.map((tag, i) => (
                                <Badge key={i} className="bg-card border text-muted-foreground text-[10px]">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function ChapterPYQSection({ pyqData }: ChapterPYQSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const totalPYQs = pyqData.length;
    const lastAskedYear = pyqData.length > 0 ? Math.max(...pyqData.map(q => q.year)) : 0;

    let frequency: 'high' | 'medium' | 'low' = 'low';
    if (totalPYQs >= 5) frequency = 'high';
    else if (totalPYQs >= 2) frequency = 'medium';

    const recent = pyqData.filter(q => q.year >= 2020).length;
    const old = pyqData.filter(q => q.year < 2020 && q.year >= 2015).length;
    let trendDirection: 'increasing' | 'stable' | 'decreasing' = 'stable';
    if (recent > old) trendDirection = 'increasing';
    else if (recent < old && recent === 0) trendDirection = 'decreasing';

    const handleAnswer = (correct: boolean) => {
        setScore(prev => ({
            correct: prev.correct + (correct ? 1 : 0),
            total: prev.total + 1
        }));
    };

    return (
        <div className="mt-12 border-t-4 border-indigo-600 pt-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                    <BookOpen size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Sparkles className="text-yellow-300" size={24} />
                        <h3 className="text-2xl font-black">Previous Year Questions</h3>
                    </div>
                    <p className="text-indigo-100 text-sm italic mb-4">
                        Master this topic with actual UPSC Prelims questions
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="bg-card/20 backdrop-blur-sm rounded-xl px-4 py-2">
                            <span className="text-2xl font-black">{totalPYQs}</span>
                            <span className="text-xs ml-1">Total PYQs</span>
                        </div>
                        {totalPYQs > 0 && (
                            <div className="bg-card/20 backdrop-blur-sm rounded-xl px-4 py-2">
                                <span className="text-lg font-bold">📅 Last asked: {lastAskedYear}</span>
                            </div>
                        )}
                        <FrequencyBadge frequency={frequency} />
                        <TrendBadge trend={trendDirection} />
                    </div>

                    {/* Score Display */}
                    {score.total > 0 && (
                        <div className="mt-4 bg-card/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-flex items-center gap-2">
                            <Award className="text-yellow-300" size={18} />
                            <span className="font-bold">
                                Your Score: {score.correct}/{score.total} ({Math.round((score.correct / score.total) * 100)}%)
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Expand/Collapse Button */}
            <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mt-4 bg-muted hover:bg-slate-200 text-muted-foreground border-2 border-border py-6 rounded-xl font-bold"
            >
                {isExpanded ? (
                    <>
                        <ChevronUp className="mr-2" size={20} />
                        Hide PYQ Practice ({pyqData.length} questions)
                    </>
                ) : (
                    <>
                        <ChevronDown className="mr-2" size={20} />
                        Practice PYQs ({pyqData.length} questions available)
                    </>
                )}
            </Button>

            {/* Questions List */}
            {isExpanded && (
                <div className="mt-6 space-y-6">
                    {pyqData.map((q, idx) => (
                        <QuestionCard
                            key={q.id}
                            question={q}
                            index={idx}
                            onAnswer={handleAnswer}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
