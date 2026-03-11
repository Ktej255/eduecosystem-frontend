"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, XCircle, Clock, Target, AlertTriangle, BookOpen, Lock, ArrowRight } from "lucide-react";
// Import from both banks to construct the 100 question test
import { geographyMCQs } from '@/components/batch1/geography/data/mcqs/geography-mcqs';
import { ncertMcqBank } from '@/components/batch1/geography/data/mcqs/ncert-mcqs';

export default function SaturdayTestPage() {
    const router = useRouter();
    
    // Construct the 100 Question test:
    // 50 Questions from Level 2/3 (Statement based / Core syllabus)
    // 50 Questions from Level 1 (NCERT Base)
    // Focusing strictly on Geomorphology, Climatology, Oceanography
    const [questions, setQuestions] = useState<any[]>([]);
    
    useEffect(() => {
        // Find core syllabus questions (Geomorphology, Climatology, Oceanography focus)
        const coreQs = geographyMCQs
            .filter(q => q.module === 'physical' && 
                (q.topic.includes('Geomorphology') || q.topic.includes('Climo') || q.topic.includes('Ocean') || q.topic.includes('Tectonic')))
            .slice(0, 50);
            
        // Find NCERT Chapters 2-6 (Fundamentals of Physical Geo) for the Level 1 base
        const ncertQs = ncertMcqBank
            .filter(q => ['2', '3', '4', '5', '6'].includes(q.chapter))
            .slice(0, 50);
            
        // In a real scenario, we'd randomly select or specifically curate 100 questions.
        // For this demo, we concatenate the available ones up to 100.
        // If we don't have enough, we'll just use what we have padded.
        setQuestions([...coreQs, ...ncertQs]);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answers, setAnswers] = useState<number[]>([]); // Track all answers 
    const [showResults, setShowResults] = useState(false);
    
    // 2 Hours for 100 Questions (Standard UPSC Time)
    const [timeRemaining, setTimeRemaining] = useState(2 * 60 * 60); 
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (isStarted && !showResults && timeRemaining > 0) {
            const timer = setInterval(() => setTimeRemaining(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining === 0 && !showResults) {
            setShowResults(true); // Auto-submit when time's up
        }
    }, [isStarted, timeRemaining, showResults]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (!isStarted) {
        return (
            <div className="max-w-4xl mx-auto p-4 sm:p-8 pt-12">
                <Button variant="ghost" onClick={() => router.push('/student/batch1/geography')} className="mb-6 -ml-4 font-bold text-slate-500 hover:text-indigo-600">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>
                
                <Card className="overflow-hidden border-0 shadow-2xl rounded-[2rem] bg-slate-900 border-slate-800">
                    <div className="p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3" />
                        
                        <div className="relative z-10 space-y-6">
                            <Badge className="bg-rose-500 text-white hover:bg-rose-600 px-3 py-1 text-xs tracking-widest uppercase font-black">
                                Mandatory Evaluation
                            </Badge>
                            
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                                Saturday Mega Test
                            </h1>
                            
                            <p className="text-slate-300 text-lg max-w-2xl font-medium leading-relaxed">
                                comprehensive 100-question examination covering Geomorphology, Climatology, and Oceanography. Designed strictly on UPSC Prelims standards.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                                    <Target className="w-6 h-6 text-indigo-400" />
                                    <span className="text-2xl font-black text-white">100</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Questions</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                                    <Clock className="w-6 h-6 text-emerald-400" />
                                    <span className="text-2xl font-black text-white">120</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Minutes</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                                    <BookOpen className="w-6 h-6 text-amber-400" />
                                    <span className="text-2xl font-black text-white">L1 + L2/3</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Syllabus Depth</span>
                                </div>
                            </div>
                            
                            <div className="pt-8 flex items-center justify-between border-t border-white/10">
                                <p className="text-sm font-bold text-slate-400 flex items-center gap-2">
                                    <Lock className="w-4 h-4" /> This test must be completed in a single sitting.
                                </p>
                                <Button 
                                    size="lg" 
                                    className="h-14 px-10 rounded-xl font-black uppercase text-xs tracking-widest bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                    onClick={() => setIsStarted(true)}
                                >
                                    Begin Examination <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    // Safe fallback if questions aren't loaded properly
    if (!currentQuestion) {
        return <div className="p-20 text-center font-bold text-slate-500">Loading Question...</div>;
    }

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        const newAnswers = [...answers];
        newAnswers[currentIndex] = index;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(answers[currentIndex + 1] !== undefined ? answers[currentIndex + 1] : null);
        } else {
            setShowResults(true);
        }
    };
    
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setSelectedAnswer(answers[currentIndex - 1] !== undefined ? answers[currentIndex - 1] : null);
        }
    };

    if (showResults) {
        let score = 0;
        answers.forEach((ans, idx) => {
            if (questions[idx] && ans === questions[idx].correctAnswer) score++;
        });
        
        const percentage = Math.round((score / questions.length) * 100);
        
        return (
            <div className="max-w-4xl mx-auto p-4 sm:p-8 pt-12">
                <Card className="text-center overflow-hidden border-0 shadow-2xl rounded-3xl">
                    <div className="bg-slate-900 p-12 text-white relative">
                        <div className="relative z-10 space-y-4">
                            <h2 className="text-sm font-black uppercase tracking-widest text-indigo-400">Examination Results</h2>
                            <h1 className="text-5xl font-black uppercase tracking-tight">{percentage}%</h1>
                            <p className="text-slate-400 font-medium">You scored {score} out of {questions.length} questions correctly.</p>
                        </div>
                    </div>
                    <CardContent className="p-12">
                        <div className="flex justify-center gap-4">
                            <Button className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => router.push('/student/batch1/geography')}>
                                Return to Dashboard
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const isNCERT = currentQuestion.id && currentQuestion.id.startsWith('ncert');

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col">
            {/* Header / HUD */}
            <div className="flex items-center justify-between mb-8 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center font-black text-sm">
                        Q{currentIndex + 1}
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Saturday Target Test</h2>
                        <div className="flex items-center gap-2 mt-1">
                            {isNCERT ? (
                                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest border-emerald-200 text-emerald-700 bg-emerald-50">NCERT Level 1</Badge>
                            ) : (
                                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest border-indigo-200 text-indigo-700 bg-indigo-50">Savindra Singh L2/3</Badge>
                            )}
                            {currentQuestion.question_type === 'statement_based' && (
                                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest border-amber-200 text-amber-700 bg-amber-50">Statement Based</Badge>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="text-right mr-4 hidden sm:block">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time Remaining</p>
                        <p className={`text-xl font-mono font-black ${timeRemaining < 600 ? 'text-rose-600 animate-pulse' : 'text-slate-700 dark:text-slate-200'}`}>
                            {formatTime(timeRemaining)}
                        </p>
                    </div>
                    <Button variant="outline" className="h-10 px-6 rounded-lg font-bold text-xs border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200" onClick={() => {
                        if (confirm("Are you sure you want to exit? Your progress will not be saved.")) {
                            router.push('/student/batch1/geography');
                        }
                    }}>
                        Exit Test
                    </Button>
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-1.5 rounded-full bg-slate-100 mb-8" />

            {/* Question Card */}
            <Card className="flex-1 border-0 shadow-xl shadow-indigo-900/5 bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col h-full border-t border-slate-50">
                <CardContent className="p-8 md:p-12 flex-1 overflow-y-auto">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-10 whitespace-pre-line">
                        {currentQuestion.question}
                    </h3>
                    
                    <div className="space-y-4">
                        {currentQuestion.options.map((option: string, idx: number) => {
                            const isSelected = selectedAnswer === idx;
                            const abc = ['A', 'B', 'C', 'D'][idx];
                            
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-4 md:p-5 rounded-2xl border-2 transition-all flex items-center text-left ${isSelected ? 'border-indigo-600 bg-indigo-50/50 shadow-md shadow-indigo-600/10' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 bg-white'}`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm mr-4 flex-shrink-0 transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {abc}
                                    </div>
                                    <span className={`font-medium text-sm md:text-base leading-relaxed ${isSelected ? 'text-indigo-900' : 'text-slate-700'}`}>{option}</span>
                                </button>
                            );
                        })}
                    </div>
                </CardContent>
                
                {/* Footer Action */}
                <div className="p-6 md:px-12 bg-slate-50 border-t border-slate-100 flex justify-between items-center rounded-b-[2.5rem]">
                    <Button 
                        variant="ghost"
                        className="h-12 px-6 font-bold text-slate-500 hover:text-slate-800"
                        disabled={currentIndex === 0}
                        onClick={handlePrevious}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                    </Button>
                    
                    {currentIndex === questions.length - 1 ? (
                        <Button 
                            className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                            onClick={() => setShowResults(true)}
                        >
                            Submit Examination <CheckCircle2 className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button 
                             className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20"
                            onClick={handleNext}
                        >
                            Next Question <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
}
