"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Trophy, Play, Lock, AlertTriangle, RefreshCw, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChapterLevels } from '../data/chapter-level-index';
import { LevelQuestion, LevelData } from '../data/level-types';
// @ts-ignore
import confetti from 'canvas-confetti';

interface ChapterLevelGameProps {
    topicId: number;
    onComplete?: (level: number, score: number) => void;
}

export default function ChapterLevelGame({ topicId, onComplete }: ChapterLevelGameProps) {
    const [activeLevel, setActiveLevel] = useState<number | null>(null);
    const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]); // Default Level 1 unlocked
    const chapterData = getChapterLevels(topicId);

    if (!chapterData) {
        return (
            <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-800">Content Coming Soon!</h3>
                <p className="text-slate-500">The Level System for this chapter is being prepared.</p>
            </div>
        );
    }

    const handleLevelSelect = (levelId: number) => {
        if (unlockedLevels.includes(levelId)) {
            setActiveLevel(levelId);
        }
    };

    const handleLevelFinish = (levelId: number, scorePercentage: number) => {
        if (scorePercentage >= 50) { // 50% needed to unlock next level
            if (levelId < 3 && !unlockedLevels.includes(levelId + 1)) {
                setUnlockedLevels(prev => [...prev, levelId + 1]);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
        setActiveLevel(null);
        if (onComplete) onComplete(levelId, scorePercentage);
    };

    if (activeLevel) {
        const levelData = chapterData.levels.find((l: LevelData) => l.levelId === activeLevel);
        if (!levelData) return null;

        return (
            <GameInterface
                levelData={levelData}
                onBack={() => setActiveLevel(null)}
                onFinish={(score) => handleLevelFinish(activeLevel, score)}
            />
        );
    }

    return (
        <div className="space-y-6 font-['Calibri']">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-slate-800 flex items-center justify-center gap-2">
                    <BookOpen className="text-violet-600" />
                    Chapter Mastery System
                </h3>
                <p className="text-slate-500">Complete Level 1 to unlock the next challenge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chapterData.levels.map((level: LevelData) => {
                    const isUnlocked = unlockedLevels.includes(level.levelId);
                    const colors = getLevelColors(level.levelId);

                    return (
                        <motion.button
                            key={level.levelId}
                            disabled={!isUnlocked}
                            onClick={() => handleLevelSelect(level.levelId)}
                            whileHover={isUnlocked ? { scale: 1.03, y: -5 } : {}}
                            whileTap={isUnlocked ? { scale: 0.98 } : {}}
                            className={`
                                relative p-6 rounded-2xl border-2 text-left h-full min-h-[200px] flex flex-col justify-between overflow-hidden transition-all shadow-sm
                                ${isUnlocked
                                    ? `bg-white ${colors.border} hover:shadow-xl`
                                    : 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed'
                                }
                            `}
                        >
                            {/* Background Decoration */}
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${colors.bgGradient} opacity-10 rounded-full blur-2xl`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md font-black text-xl
                                        ${isUnlocked ? `bg-gradient-to-br ${colors.bgGradient}` : 'bg-slate-300'}
                                    `}>
                                        {level.levelId}
                                    </div>
                                    {!isUnlocked && <Lock className="text-slate-300" />}
                                    {isUnlocked && <Play className={`w-8 h-8 ${colors.text} opacity-20`} fill="currentColor" />}
                                </div>
                                <h4 className={`text-lg font-black mb-1 leading-tight ${isUnlocked ? 'text-slate-800' : 'text-slate-400'}`}>
                                    {level.title}
                                </h4>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    {level.questions.length} Questions
                                </p>
                            </div>

                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                {level.description}
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

// --- Game Interface ---

function GameInterface({ levelData, onBack, onFinish }: { levelData: LevelData, onBack: () => void, onFinish: (score: number) => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const question = levelData.questions[currentIndex];
    const totalQuestions = levelData.questions.length;
    const progress = ((currentIndex) / totalQuestions) * 100;

    const handleSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        if (index === question.correctAnswerIndex) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        const percentage = Math.round((score / totalQuestions) * 100);
        const isPass = percentage >= 50;

        return (
            <Card className="text-center p-8 max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-2 ${isPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <div className="mb-6 inline-block p-4 bg-slate-50 rounded-full">
                    {isPass ? <Trophy className="w-16 h-16 text-yellow-500" /> : <RefreshCw className="w-16 h-16 text-slate-400" />}
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">
                    {isPass ? "Level Complete!" : "Keep Practicing!"}
                </h2>
                <p className="text-slate-500 mb-6 text-lg">
                    You scored <span className={`font-bold ${isPass ? 'text-green-600' : 'text-red-500'}`}>{score}/{totalQuestions}</span> ({percentage}%)
                </p>

                {isPass ? (
                    <div className="p-4 bg-green-50 rounded-xl mb-8 text-green-800 text-sm">
                        Great job! You have unlocked the next level (if available).
                    </div>
                ) : (
                    <div className="p-4 bg-red-50 rounded-xl mb-8 text-red-800 text-sm">
                        You need at least 50% to unlock the next level. Try review the chapter text again.
                    </div>
                )}

                <div className="flex gap-4 justify-center">
                    <Button onClick={onBack} variant="outline">
                        Back to Menu
                    </Button>
                    <Button onClick={() => onFinish(percentage)} className={isPass ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900'}>
                        {isPass ? 'Continue' : 'Try Again'}
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Button variant="ghost" onClick={onBack} size="sm" className="text-slate-500 hover:text-slate-800">
                    &larr; Exit Level
                </Button>
                <div className="text-sm font-bold text-slate-400">
                    {currentIndex + 1} / {totalQuestions}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-violet-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <Card className="border-0 shadow-lg relative overflow-hidden">
                <CardContent className="p-8">
                    <div className="mb-8">
                        <Badge variant="outline" className="mb-4">
                            {levelData.title}
                        </Badge>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                            {question.question}
                        </h3>
                    </div>

                    <div className="space-y-3">
                        {question.options.map((option, idx) => {
                            let statusClass = "bg-white border-2 border-slate-100 text-slate-600 hover:border-violet-200 hover:bg-violet-50";
                            const isSelected = selectedOption === idx;
                            const isCorrect = idx === question.correctAnswerIndex;

                            if (isAnswered) {
                                if (isCorrect) {
                                    statusClass = "bg-green-50 border-green-500 text-green-700 font-bold shadow-sm";
                                } else if (isSelected) {
                                    statusClass = "bg-red-50 border-red-500 text-red-700 opacity-60";
                                } else {
                                    statusClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                                }
                            } else if (isSelected) {
                                statusClass = "border-violet-600 bg-violet-50 text-violet-800 font-bold shadow-md ring-2 ring-violet-100";
                            }

                            return (
                                <motion.button
                                    key={idx}
                                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                                    onClick={() => handleSelect(idx)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${statusClass}`}
                                >
                                    <div className={`
                                       w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border
                                       ${isAnswered && isCorrect ? 'bg-green-600 border-green-600 text-white' : ''}
                                       ${isAnswered && isSelected && !isCorrect ? 'bg-red-600 border-red-600 text-white' : ''}
                                       ${!isAnswered ? 'bg-white border-slate-200 text-slate-500' : ''}
                                   `}>
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <span className="flex-1">{option}</span>
                                    {isAnswered && isCorrect && <CheckCircle2 className="text-green-600" size={20} />}
                                    {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Explanation / Next Button */}
                    <AnimatePresence>
                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 pt-6 border-t border-slate-100 flex justify-end"
                            >
                                <Button size="lg" onClick={handleNext} className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200">
                                    {currentIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Level'} <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}

function getLevelColors(level: number) {
    if (level === 1) return { bgGradient: "from-blue-500 to-cyan-500", text: "text-blue-600", border: "border-blue-200" };
    if (level === 2) return { bgGradient: "from-orange-500 to-amber-500", text: "text-orange-600", border: "border-orange-200" };
    return { bgGradient: "from-red-600 to-rose-600", text: "text-red-600", border: "border-red-200" };
}
