"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Question {
    id: number;
    article: string;
    description: string;
}

const QUESTIONS: Question[] = [
    { id: 1, article: 'Article 14', description: 'Equality before law' },
    { id: 2, article: 'Article 17', description: 'Abolition of Untouchability' },
    { id: 3, article: 'Article 21', description: 'Protection of Life and Personal Liberty' },
    { id: 4, article: 'Article 32', description: 'Remedies for enforcement of rights (Heart & Soul)' },
    { id: 5, article: 'Article 40', description: 'Organization of Village Panchayats' },
    { id: 6, article: 'Article 44', description: 'Uniform Civil Code' },
    { id: 7, article: 'Article 51A', description: 'Fundamental Duties' },
    { id: 8, article: 'Article 61', description: 'Impeachment of the President' },
    { id: 9, article: 'Article 72', description: 'Pardoning power of President' },
    { id: 10, article: 'Article 76', description: 'Attorney General of India' },
    { id: 11, article: 'Article 108', description: 'Joint sitting of both Houses' },
    { id: 12, article: 'Article 110', description: 'Definition of Money Bill' },
    { id: 13, article: 'Article 112', description: 'Annual Financial Statement (Budget)' },
    { id: 14, article: 'Article 123', description: 'Power of President to promulgate Ordinances' },
    { id: 15, article: 'Article 148', description: 'Comptroller and Auditor-General of India' },
    { id: 16, article: 'Article 280', description: 'Finance Commission' },
    { id: 17, article: 'Article 324', description: 'Election Commission' },
    { id: 18, article: 'Article 352', description: 'Proclamation of Emergency (National)' },
    { id: 19, article: 'Article 356', description: 'Provisions in case of failure of constitutional machinery in States' },
    { id: 20, article: 'Article 368', description: 'Power of Parliament to amend the Constitution' },
];

export default function ArticleArcade() {
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [options, setOptions] = useState<Question[]>([]);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [highScore, setHighScore] = useState(0);

    // Initialize/Reset
    useEffect(() => {
        loadNewQuestion();
        const saved = localStorage.getItem('article_arcade_highscore');
        if (saved) setHighScore(parseInt(saved));
    }, []);

    const loadNewQuestion = () => {
        const randomQ = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        setCurrentQuestion(randomQ);

        // Generate distractors
        const distractors = QUESTIONS
            .filter(q => q.id !== randomQ.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        const allOptions = [...distractors, randomQ].sort(() => 0.5 - Math.random());
        setOptions(allOptions);
        setFeedback(null);
    };

    const handleAnswer = (selected: Question) => {
        if (!currentQuestion) return;

        if (selected.id === currentQuestion.id) {
            setFeedback('correct');
            const newScore = score + 10 + (streak * 2);
            setScore(newScore);
            setStreak(s => s + 1);
            if (newScore > highScore) {
                setHighScore(newScore);
                localStorage.setItem('article_arcade_highscore', newScore.toString());
            }
            setTimeout(loadNewQuestion, 1000);
        } else {
            setFeedback('wrong');
            setStreak(0);
        }
    };

    return (
        <Card className="w-full bg-slate-900 border-4 border-slate-700 text-white font-['Kalam'] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

            <CardHeader className="relative z-10 border-b border-slate-700 pb-2">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center gap-2">
                        <Zap className="text-yellow-400 fill-yellow-400" />
                        Article Arcade
                    </CardTitle>
                    <div className="flex gap-4 text-sm font-bold">
                        <div className="bg-slate-800 px-3 py-1 rounded-full border border-slate-600">
                            Score: <span className="text-green-400">{score}</span>
                        </div>
                        <div className="bg-slate-800 px-3 py-1 rounded-full border border-slate-600 flex items-center gap-1">
                            High Score: <Trophy size={14} className="text-yellow-500" /> {highScore}
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-6 relative z-10">
                {currentQuestion && (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <Badge className="bg-slate-700 text-slate-300 hover:bg-slate-700 mb-2">Streak: {streak} 🔥</Badge>
                            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                                {currentQuestion.description}
                            </h2>
                            <p className="text-slate-400 font-bold text-lg">Which Article is this?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((option) => (
                                <Button
                                    key={option.id}
                                    onClick={() => handleAnswer(option)}
                                    disabled={feedback !== null}
                                    className={`
                                        h-20 text-xl font-bold rounded-xl border-b-4 transition-all
                                        ${feedback === 'correct' && option.id === currentQuestion.id
                                            ? 'bg-green-500 border-green-700 hover:bg-green-500 text-white'
                                            : feedback === 'wrong' && option.id === currentQuestion.id
                                                ? 'bg-green-500 border-green-700 opacity-50' // Reveal correct
                                                : feedback === 'wrong' // Selected wrong
                                                    ? 'bg-slate-800 border-slate-950 hover:bg-slate-800'
                                                    : 'bg-indigo-600 border-indigo-800 hover:bg-indigo-500 hover:-translate-y-1'
                                        }
                                    `}
                                >
                                    {option.article}
                                    {feedback === 'correct' && option.id === currentQuestion.id && <CheckCircle2 className="ml-2 w-6 h-6" />}
                                    {feedback === 'wrong' && option.id === currentQuestion.id && <CheckCircle2 className="ml-2 w-6 h-6 text-green-200" />}
                                </Button>
                            ))}
                        </div>

                        {feedback === 'wrong' && (
                            <div className="text-center animate-in fade-in slide-in-from-bottom-4">
                                <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-200 px-6 py-3 rounded-xl border border-red-500/30">
                                    <AlertCircle />
                                    <span className="font-bold">Missed it! The correct answer was {currentQuestion.article}.</span>
                                    <Button size="sm" variant="secondary" onClick={loadNewQuestion}>Next</Button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
