"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, AlertTriangle, BookOpen, Clock, Target, ArrowRight } from "lucide-react";
import { ncertMcqBank } from '@/components/upsc/subjects/geography/data/mcqs/ncert-mcqs';

export default function NCERTTestRunner({ params }: { params: { chapterId: string } }) {
    const router = useRouter();
    const chapterId = params.chapterId;
    
    const [questions, setQuestions] = useState(ncertMcqBank.filter(q => q.chapter === chapterId));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 mins

    const currentQuestion = questions[currentIndex];

    // Timer logic
    useEffect(() => {
        if (!showResults && timeRemaining > 0) {
            const timer = setInterval(() => setTimeRemaining(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining === 0 && !showResults) {
            setShowResults(true); // Auto-submit when time's up
        }
    }, [timeRemaining, showResults]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 space-y-4">
                <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
                <h2 className="text-2xl font-black uppercase text-slate-800 dark:text-slate-100">Chapter Not Found</h2>
                <p className="text-slate-500">No questions found for NCERT Chapter {chapterId}.</p>
                <Button onClick={() => router.back()} className="mt-4" variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Return to Dashboard
                </Button>
            </div>
        );
    }

    const handleAnswer = (index: number) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);

        if (index === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            // Assessment Complete
            setShowResults(true);
        }
    };
    
    // Result screen
    if (showResults) {
        const percentage = Math.round((score / questions.length) * 100);
        const passed = percentage >= 60; // 60% passing threshold for Level 1
        
        return (
            <div className="max-w-4xl mx-auto p-4 sm:p-8 pt-12">
                <Button variant="ghost" onClick={() => router.push('/student/upsc/geography')} className="mb-6 -ml-4 font-bold text-slate-500 hover:text-indigo-600">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>
                
                <Card className="text-center overflow-hidden border-0 shadow-2xl rounded-3xl">
                    <div className={`h-32 ${passed ? 'bg-emerald-500' : 'bg-rose-500'} flex items-center justify-center`}>
                        {passed ? <CheckCircle2 className="w-16 h-16 text-white" /> : <XCircle className="w-16 h-16 text-white" />}
                    </div>
                    <CardContent className="pt-12 pb-16 px-8 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 rounded-full p-4 shadow-xl">
                            <div className={`w-24 h-24 rounded-full border-8 flex items-center justify-center ${passed ? 'border-emerald-100 text-emerald-600' : 'border-rose-100 text-rose-600'}`}>
                                <h2 className="text-3xl font-black">{percentage}%</h2>
                            </div>
                        </div>
                        
                        <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-8 mb-2">
                            {passed ? 'Level 1 Cleared!' : 'More Review Needed'}
                        </h2>
                        <p className="text-slate-500 font-medium mb-8">
                            You scored {score} out of {questions.length} on NCERT Chapter {chapterId}.
                        </p>
                        
                        <div className="flex justify-center gap-4">
                            <Button className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => router.push('/student/upsc/geography')}>
                                Return to Dashboard
                            </Button>
                            {!passed && (
                                <Button variant="outline" className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest border-indigo-200 text-indigo-700 hover:bg-indigo-50" onClick={() => {
                                    setCurrentIndex(0);
                                    setScore(0);
                                    setSelectedAnswer(null);
                                    setIsAnswered(false);
                                    setShowResults(false);
                                    setTimeRemaining(25*60);
                                }}>
                                    <RotateCcw className="w-4 h-4 mr-2" /> Retry Full Chapter
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col">
            {/* Header / HUD */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center shadow-inner font-black text-sm">
                        CH {chapterId.padStart(2, '0')}
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Level 1: NCERT Base</h2>
                        <span className="text-xs text-slate-500 font-medium">{questions.length} MCQs</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 border-2 ${timeRemaining < 300 ? 'text-rose-600 border-rose-200 bg-rose-50' : 'text-slate-600 border-slate-200 bg-white'}`}>
                        <Clock className="w-3.5 h-3.5" /> {formatTime(timeRemaining)}
                    </Badge>
                    <Button variant="ghost" size="icon" onClick={() => router.push('/student/upsc/geography')} className="text-slate-400 hover:bg-slate-100 rounded-xl">
                        <XCircle className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
                    <span>Question {currentIndex + 1} of {questions.length}</span>
                    <span className="text-indigo-600">Score: {score}</span>
                </div>
                <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-2 rounded-full bg-slate-100" />
            </div>

            {/* Question Card */}
            <Card className="flex-1 border-0 shadow-lg shadow-indigo-900/5 bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col h-full">
                <CardContent className="p-8 md:p-12 flex-1 overflow-y-auto">
                    {currentQuestion.question_type === 'statement_based' && (
                        <Badge className="mb-6 bg-amber-100 text-amber-700 hover:bg-amber-100 border-0 uppercase font-black tracking-widest text-[9px]">UPSC Format: Statement Based</Badge>
                    )}
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-8 whitespace-pre-line">
                        {currentQuestion.question}
                    </h3>
                    
                    <div className="space-y-4">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = selectedAnswer === idx;
                            const isCorrect = idx === currentQuestion.correctAnswer;
                            const showStatus = isAnswered;
                            
                            let buttonStyle = "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-slate-700 bg-white";
                            let icon = <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0 mr-4" />;
                            
                            if (showStatus) {
                                if (isCorrect) {
                                    buttonStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                                    icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mr-4" />;
                                } else if (isSelected && !isCorrect) {
                                    buttonStyle = "border-rose-400 bg-rose-50 text-rose-900";
                                    icon = <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mr-4" />;
                                } else {
                                    buttonStyle = "border-slate-200 bg-slate-50/50 text-slate-400 opacity-50"; // Dim non-selected wrong answers
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={isAnswered}
                                    className={`w-full p-5 md:p-6 rounded-2xl border-2 transition-all flex items-center text-left ${buttonStyle}`}
                                >
                                    {icon}
                                    <span className="font-semibold text-sm md:text-base leading-relaxed">{option}</span>
                                </button>
                            );
                        })}
                    </div>

                    {isAnswered && (
                        <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 mb-2">
                                <BookOpen className="w-4 h-4 text-indigo-500" /> Explanation
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                                {currentQuestion.explanation || "No explanation provided for this question."}
                            </p>
                        </div>
                    )}
                </CardContent>
                
                {/* Footer Action */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                    <Button 
                        size="lg" 
                        className={`h-14 px-10 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${isAnswered ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                        disabled={!isAnswered}
                        onClick={handleNext}
                    >
                        {currentIndex === questions.length - 1 ? 'Finish Assessment' : 'Next Question'} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
