"use client";

import React, { useState, useEffect } from 'react';
import { ARTICLE_MEMORY_DATA, ArticleMemoryItem } from '../data/article-memory-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RefreshCw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper to mask key words
const createQuestion = (item: ArticleMemoryItem) => {
    const words = item.provision.split(' ');
    // Simple logic: mask words longer than 3 chars that are not common stopwords
    const candidates = words.map((w, i) => ({ word: w, index: i })).filter(x => x.word.length > 4);

    if (candidates.length === 0) return { ...item, maskedProvision: item.provision, answer: '' };

    const target = candidates[Math.floor(Math.random() * candidates.length)];
    const maskedProvision = words.map((w, i) => i === target.index ? '______' : w).join(' ');

    return {
        ...item,
        maskedProvision,
        answer: target.word.replace(/[^a-zA-Z]/g, '') // Remove punctuation for checking
    };
};

export default function ArticleMissingLinkGame({ onComplete }: { onComplete?: () => void }) {
    const [queue, setQueue] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
    const [score, setScore] = useState(0);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        // Pick 5 random questions
        const selection = [...ARTICLE_MEMORY_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
        const questions = selection.map(createQuestion);
        setQueue(questions);
        setCurrentIndex(0);
        setScore(0);
        setStatus('idle');
        setUserInput('');
        setShowHint(false);
    };

    const currentQ = queue[currentIndex];

    const handleSubmit = () => {
        if (!currentQ) return;

        if (userInput.toLowerCase().trim() === currentQ.answer.toLowerCase()) {
            setStatus('correct');
            setScore(prev => prev + 1);
        } else {
            setStatus('incorrect');
        }
    };

    const handleNext = () => {
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setStatus('idle');
            setUserInput('');
            setShowHint(false);
        } else {
            setStatus('finished');
            if (onComplete) onComplete();
        }
    };

    if (!currentQ || status === 'finished') {
        const percentage = Math.round((score / queue.length) * 100);
        return (
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <div className="mb-6 inline-block p-4 bg-yellow-100 rounded-full text-yellow-600">
                    <Trophy size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">Level 2 Complete!</h2>
                <p className="text-slate-500 mb-6">You scored {score} / {queue.length}</p>

                <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
                    <div className={`h-full ${percentage >= 80 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${percentage}%` }}></div>
                </div>

                <Button onClick={resetGame} size="lg" className="rounded-full font-bold">
                    <RefreshCw className="mr-2" /> Play Again
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8 font-['Calibri']">
            {/* Header */}
            <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                <span>Question {currentIndex + 1} / {queue.length}</span>
                <span className="text-emerald-600">Score: {score}</span>
            </div>
            <Progress value={((currentIndex) / queue.length) * 100} className="h-2" />

            <Card className="border-2 border-slate-100 shadow-lg overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-slate-100 text-center">
                    <Badge variant="outline" className="mb-2 border-slate-300 text-slate-500">Article {currentQ.articleNumber}</Badge>
                    <h3 className="text-2xl font-bold text-slate-800 leading-relaxed">
                        {currentQ.maskedProvision}
                    </h3>
                </div>

                <CardContent className="p-8 space-y-6">
                    <div className="flex gap-4">
                        <Input
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type the missing word..."
                            className="text-lg py-6"
                            disabled={status !== 'idle'}
                            onKeyDown={(e) => e.key === 'Enter' && status === 'idle' && handleSubmit()}
                        />
                        {status === 'idle' ? (
                            <Button size="lg" onClick={handleSubmit} className="px-8 font-bold">Check</Button>
                        ) : (
                            <Button size="lg" onClick={handleNext} variant="outline" className="px-8 font-bold ml-auto">
                                Next <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        )}
                    </div>

                    <AnimatePresence>
                        {status === 'correct' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-50 text-green-800 rounded-xl flex items-center gap-3 font-bold border border-green-200"
                            >
                                <CheckCircle2 /> Correct! The word was "{currentQ.answer}".
                            </motion.div>
                        )}
                        {status === 'incorrect' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-50 text-red-800 rounded-xl flex items-center gap-3 font-bold border border-red-200"
                            >
                                <XCircle /> Incorrect. The answer was "{currentQ.answer}".
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {status === 'idle' && (
                        <div className="flex justify-center">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowHint(!showHint)}
                                className="text-slate-400 hover:text-yellow-600"
                            >
                                <HelpCircle className="mr-1 w-4 h-4" /> {showHint ? currentQ.mnemonic : 'Need a Hint?'}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
