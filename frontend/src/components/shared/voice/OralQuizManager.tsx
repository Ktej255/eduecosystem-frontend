"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Volume2, X, Brain, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import VoiceInput from './VoiceInput';
import TTSPlayer from './TTSPlayer';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OralQuizManagerProps {
    subjectName: string;
    topics: string[];
    onClose: () => void;
}

type QuizState = 'idle' | 'asking' | 'listening' | 'processing' | 'feedback';

export default function OralQuizManager({ subjectName, topics, onClose }: OralQuizManagerProps) {
    const [state, setState] = useState<QuizState>('idle');
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect'>('correct');
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);

    // Mock Question Generator
    const generateQuestion = () => {
        setState('asking');
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];

        let q = "";
        if (subjectName.toLowerCase().includes('history')) {
            q = `Thinking about ${randomTopic}, what was its primary significance?`;
        } else if (subjectName.toLowerCase().includes('geography')) {
            q = `Explain the formation process of ${randomTopic}.`;
        } else {
            q = `What are the key features of ${randomTopic}?`;
        }

        setCurrentQuestion(q);
        setUserAnswer("");
        setFeedback("");
    };

    // Auto-start
    useEffect(() => {
        if (state === 'idle') {
            generateQuestion();
        }
    }, []);

    const handleSpeechEnd = () => {
        if (state === 'asking') {
            setState('listening');
        }
    };

    const handleTranscript = (text: string) => {
        setUserAnswer(text);
        setState('processing');
        processAnswer(text);
    };

    const processAnswer = (answer: string) => {
        setTimeout(() => {
            // Mock Grading Logic
            const isCorrect = answer.length > 5; // Simple heuristic for demo
            setFeedbackType(isCorrect ? 'correct' : 'incorrect');

            if (isCorrect) {
                setFeedback("That's a great answer! You covered the main points.");
                setScore(s => s + 10);
            } else {
                setFeedback("That's partially correct, but you missed some details. Let's try another.");
            }

            setState('feedback');
        }, 1500);
    };

    const nextQuestion = () => {
        setRound(r => r + 1);
        generateQuestion();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg"
            >
                <Card className="border-indigo-100 dark:border-indigo-900 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <Brain className="w-5 h-5" />
                                    Oral Quiz: {subjectName}
                                </CardTitle>
                                <p className="text-indigo-100 text-sm">Round {round} • Score: {score}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white/70 hover:bg-white/20 hover:text-white -mr-2 -mt-2"
                                onClick={onClose}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent className="p-6 space-y-6">
                        {/* Avatar / Animation Area */}
                        <div className="flex justify-center py-4">
                            <div className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
                                state === 'asking' ? "bg-indigo-100 text-indigo-600 animate-pulse ring-4 ring-indigo-200" :
                                    state === 'listening' ? "bg-red-100 text-red-600 ring-4 ring-red-200" :
                                        state === 'processing' ? "bg-amber-100 text-amber-600 animate-bounce" :
                                            state === 'feedback' ? (feedbackType === 'correct' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600") :
                                                "bg-slate-100 text-slate-400"
                            )}>
                                {state === 'asking' && <Volume2 className="w-10 h-10" />}
                                {state === 'listening' && <Mic className="w-10 h-10" />}
                                {state === 'processing' && <Loader2 className="w-10 h-10 animate-spin" />}
                                {state === 'feedback' && (feedbackType === 'correct' ? <CheckCircle className="w-10 h-10" /> : <XCircle className="w-10 h-10" />)}
                            </div>
                        </div>

                        {/* Text Area */}
                        <div className="text-center space-y-4">
                            {state === 'asking' && (
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-200">Listening to Question...</h3>
                                    <p className="text-slate-500 italic">"{currentQuestion}"</p>
                                    <TTSPlayer text={currentQuestion} autoPlay={true} onEnd={handleSpeechEnd} className="hidden" />
                                </div>
                            )}

                            {state === 'listening' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">Your Turn To Speak</h3>
                                    <VoiceInput
                                        onTranscript={handleTranscript}
                                        isListening={true}
                                        className="scale-125"
                                    />
                                    <p className="text-xs text-slate-400">Listening...</p>
                                </div>
                            )}

                            {state === 'processing' && (
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-slate-700">Evaluating Answer...</h3>
                                    <p className="text-slate-500">"{userAnswer}"</p>
                                </div>
                            )}

                            {state === 'feedback' && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
                                    <h3 className={cn("text-lg font-bold", feedbackType === 'correct' ? "text-green-600" : "text-orange-600")}>
                                        {feedbackType === 'correct' ? "Correct!" : "Needs Improvement"}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">"{feedback}"</p>
                                    <TTSPlayer text={feedback} autoPlay={true} className="hidden" />
                                </div>
                            )}
                        </div>
                    </CardContent>

                    <CardFooter className="bg-slate-50 dark:bg-slate-950/50 p-4 flex justify-center">
                        {state === 'feedback' && (
                            <Button onClick={nextQuestion} className="w-full max-w-xs bg-indigo-600 hover:bg-indigo-700 text-white">
                                Next Question
                            </Button>
                        )}
                        {state === 'listening' && (
                            <Button variant="ghost" onClick={() => setState('asking')} className="text-xs text-slate-400">
                                Repeat Question
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
