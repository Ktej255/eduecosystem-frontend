"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, AlertCircle, CheckCircle2, RefreshCcw, Gamepad2, Brain, Star, Timer } from 'lucide-react';

interface Question {
    id: number;
    article: string;
    description: string;
}

const QUESTIONS: Question[] = [
    { id: 1, article: 'Article 14', description: 'Equality before law and equal protection of laws.' },
    { id: 2, article: 'Article 17', description: 'Abolition of Untouchability and prohibition of its practice.' },
    { id: 3, article: 'Article 21', description: 'Protection of Life and Personal Liberty.' },
    { id: 4, article: 'Article 32', description: 'Right to Constitutional Remedies (Heart & Soul of Constitution).' },
    { id: 5, article: 'Article 40', description: 'Organization of Village Panchayats.' },
    { id: 6, article: 'Article 44', description: 'Uniform Civil Code for the citizens.' },
    { id: 7, article: 'Article 51A', description: 'Fundamental Duties of the citizens.' },
    { id: 8, article: 'Article 61', description: 'Procedure for Impeachment of the President.' },
    { id: 9, article: 'Article 72', description: 'Pardoning power of the President.' },
    { id: 10, article: 'Article 76', description: 'Attorney General of India.' },
    { id: 11, article: 'Article 108', description: 'Joint sitting of both Houses of Parliament.' },
    { id: 12, article: 'Article 110', description: 'Definition of Money Bills.' },
    { id: 13, article: 'Article 112', description: 'Annual Financial Statement (Budget).' },
    { id: 14, article: 'Article 123', description: 'Power of President to promulgate Ordinances during recess.' },
    { id: 15, article: 'Article 148', description: 'Comptroller and Auditor-General of India.' },
    { id: 16, article: 'Article 280', description: 'Finance Commission recommendations.' },
    { id: 17, article: 'Article 324', description: 'Superintendence, direction and control of elections.' },
    { id: 18, article: 'Article 352', description: 'Proclamation of National Emergency.' },
    { id: 19, article: 'Article 356', description: 'Provisions in case of failure of constitutional machinery in States.' },
    { id: 20, article: 'Article 368', description: 'Power of Parliament to amend the Constitution.' }
];

export default function ArticleArcade() {
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [options, setOptions] = useState<Question[]>([]);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [highScore, setHighScore] = useState(0);
    const [gameStatus, setGameStatus] = useState<'idle' | 'playing'>('idle');
    const [questionsAnswered, setQuestionsAnswered] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem('article_arcade_highscore');
        if (saved) setHighScore(parseInt(saved));
    }, []);

    const startNewGame = () => {
        setScore(0);
        setStreak(0);
        setQuestionsAnswered(0);
        setGameStatus('playing');
        loadNewQuestion();
    };

    const loadNewQuestion = () => {
        const randomQ = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        setCurrentQuestion(randomQ);

        const distractors = QUESTIONS
            .filter(q => q.id !== randomQ.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        const allOptions = [...distractors, randomQ].sort(() => 0.5 - Math.random());
        setOptions(allOptions);
        setFeedback(null);
    };

    const handleAnswer = (selected: Question) => {
        if (!currentQuestion || feedback) return;

        if (selected.id === currentQuestion.id) {
            setFeedback('correct');
            const bonus = Math.floor(streak / 5) * 5;
            const newScore = score + 10 + bonus;
            setScore(newScore);
            setStreak(s => s + 1);
            setQuestionsAnswered(q => q + 1);
            if (newScore > highScore) {
                setHighScore(newScore);
                localStorage.setItem('article_arcade_highscore', newScore.toString());
            }
            setTimeout(loadNewQuestion, 1200);
        } else {
            setFeedback('wrong');
            setStreak(0);
        }
    };

    return (
        <div className="w-full h-full min-h-[600px] flex flex-col lg:flex-row gap-8 animate-in fade-in duration-700">
            {/* Game Canvas Area */}
            <div className="flex-1 bg-white dark:bg-[#050505] rounded-[2.5rem] border border-border overflow-hidden relative shadow-2xl group flex flex-col items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

                <AnimatePresence mode="wait">
                    {gameStatus === 'idle' ? (
                        <motion.div 
                            key="start"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="text-center z-10"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[2rem] flex items-center justify-center text-white mb-8 mx-auto shadow-2xl shadow-purple-500/20">
                                <Gamepad2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black text-foreground font-serif mb-4">Article Arcade</h2>
                            <p className="text-muted-foreground text-sm max-w-sm mb-12">
                                Master the Articles of the Indian Constitution through speed and precision. High streaks grant bonus points.
                            </p>
                            <button 
                                onClick={startNewGame}
                                className="px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl border-b-4 border-purple-900 active:border-b-0 active:translate-y-1"
                            >
                                START MISSION
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="question"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-600/10 text-purple-600 px-4 py-2 rounded-xl border border-purple-100 dark:border-purple-900/50 flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase tracking-widest">Streak: {streak}</span>
                                    </div>
                                    {streak >= 5 && (
                                        <motion.div 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                                            className="bg-amber-100 text-amber-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter"
                                        >
                                            Multiplier Active!
                                        </motion.div>
                                    )}
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block">Current Score</span>
                                    <span className="text-2xl font-black text-foreground">{score}</span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-12">
                                <motion.div 
                                    className="space-y-4"
                                    key={currentQuestion?.id}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <span className="text-[10px] font-black uppercase text-purple-600 tracking-[0.3em] block">Constitutional Provision</span>
                                    <h2 className="text-3xl font-black text-foreground font-serif leading-tight">
                                        "{currentQuestion?.description}"
                                    </h2>
                                </motion.div>

                                <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                                    {options.map((option) => (
                                        <motion.button
                                            key={option.id}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleAnswer(option)}
                                            className={`
                                                relative h-20 rounded-2xl border-2 font-black text-xl transition-all overflow-hidden
                                                ${feedback === null ? 'bg-card border-border hover:border-purple-500 hover:text-purple-600 shadow-sm' : ''}
                                                ${feedback === 'correct' && option.id === currentQuestion?.id ? 'bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/20' : ''}
                                                ${feedback === 'wrong' && option.id === currentQuestion?.id ? 'bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/20' : ''}
                                                ${feedback === 'wrong' && option !== currentQuestion && feedback ? 'bg-rose-500 border-rose-600 text-white opacity-40' : ''}
                                            `}
                                        >
                                            {option.article}
                                            {feedback === 'correct' && option.id === currentQuestion?.id && (
                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1.5 }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                                    <CheckCircle2 className="w-12 h-12" />
                                                </motion.div>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12">
                                <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-purple-600"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${(questionsAnswered % 10) * 10}%` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sidebar Stats Area */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
                <div className="bg-card dark:bg-[#111] p-8 rounded-[2.5rem] border border-border shadow-md">
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="w-6 h-6 text-amber-500" />
                        <h3 className="text-lg font-black text-foreground font-serif">Arcade Stats</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-border pb-4">
                            <div>
                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1">Lifetime Peak</span>
                                <span className="text-3xl font-black text-foreground">{highScore}</span>
                            </div>
                            <Star className="text-amber-500 w-5 h-5 mb-2" />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Recent Performance</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-muted/50 p-4 rounded-2xl border border-border">
                                    <span className="text-[9px] font-black text-muted-foreground uppercase opacity-70 block mb-1">Max Streak</span>
                                    <span className="font-bold text-foreground">{streak}🔥</span>
                                </div>
                                <div className="bg-muted/50 p-4 rounded-2xl border border-border">
                                    <span className="text-[9px] font-black text-muted-foreground uppercase opacity-70 block mb-1">Fast Finish</span>
                                    <span className="font-bold text-foreground">1.2s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 text-white flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-purple-400">
                            <Brain className="w-5 h-5" />
                            <h4 className="text-xs font-black uppercase tracking-widest">Pro Strategy</h4>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-purple-500/50 pl-4">
                            "Focus on the **Heart & Soul** (Article 32) and **Joint Sittings** (Article 108). These are high-yield areas where speed counts double in real UPSC Prelims."
                        </p>
                    </div>
                    
                    <button 
                        onClick={() => setGameStatus('idle')}
                        className="w-full py-4 mt-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2"
                    >
                        <RefreshCcw className="w-3 h-3" /> RESET SESSION
                    </button>
                </div>
            </div>
        </div>
    );
}
