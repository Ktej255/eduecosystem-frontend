"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Target, BookOpen, Lock, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

import { geographyMCQs } from '@/components/upsc/subjects/geography/data/mcqs/geography-mcqs';
import { ncertMcqBank } from '@/components/upsc/subjects/geography/data/mcqs/ncert-mcqs';
import SaturdayTestSession from '@/components/batch1-1/saturday/SaturdayTestSession';
import SaturdayTestReport from '@/components/batch1-1/saturday/SaturdayTestReport';

export default function SaturdayTestPage() {
    const router = useRouter();
    
    // Test Configurations
    const [testPhase, setTestPhase] = useState<'landing' | 'taking' | 'report'>('landing');
    const [currentPaper, setCurrentPaper] = useState<'paper1' | 'paper2' | null>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [testResults, setTestResults] = useState<any>(null);
    
    const nowHours = new Date().getHours();
    
    // The two requested slots
    const isPaper1Time = nowHours >= 9 && nowHours < 12;   // 9:00 AM to 11:59 AM (Giving 1 hr buffer)
    const isPaper2Time = nowHours >= 12 && nowHours < 15;  // 12:00 PM to 2:59 PM
    
    // Allow override for testing purposes if not saturday or wrong time temporarily
    const IS_DEV = true; 

    const handleStartTest = (paper: 'paper1' | 'paper2') => {
        // Construct the 100 Question test depending on the paper
        let generatedQuestions = [];
        
        if (paper === 'paper1') {
            const coreQs = geographyMCQs
                .filter(q => q.module === 'physical' && 
                    (q.topic.includes('Geomorphology') || q.topic.includes('Climo') || q.topic.includes('Ocean')))
                .slice(0, 50);
            const ncertQs = ncertMcqBank
                .filter(q => ['2', '3', '4', '5', '6'].includes(q.chapter))
                .slice(0, 50);
            
            generatedQuestions = [...coreQs, ...ncertQs].map((q, idx) => ({
                id: q.id || `q-${idx}`,
                question: q.question,
                options: q.options,
                explanation: q.explanation || "Detailed explanation available in the reading material.",
                chapter: q.topic || q.chapter || "Geography Syllabus",
                subtopic: q.subtopic || "UPSC Core",
                correctAnswer: q.correctAnswer || 0,
            }));
        } else {
            // Paper 2 Mock (Could be CSAT later, doing Indian Geo vs Resource Geo for now as placeholder)
            const coreQs = geographyMCQs.filter(q => q.module === 'indian').slice(0, 100);
            generatedQuestions = coreQs.map((q, idx) => ({
                id: q.id || `q-${idx}`,
                question: q.question,
                options: q.options,
                explanation: q.explanation || "Detailed explanation available in the reading material.",
                chapter: q.topic || q.chapter || "Geography Syllabus",
                subtopic: q.subtopic || "UPSC Core",
                correctAnswer: q.correctAnswer || 0,
            }));
        }

        // If we don't naturally have 100, duplicate or pad (Only for dev/mock, real will have 100)
        while(generatedQuestions.length < 100 && generatedQuestions.length > 0) {
            generatedQuestions.push({...generatedQuestions[generatedQuestions.length - 1], id: `pad-${generatedQuestions.length}`});
        }

        setQuestions(generatedQuestions.slice(0, 100)); // Ensure exactly 100
        setCurrentPaper(paper);
        setTestPhase('taking');
    };

    const handleTestComplete = (results: any) => {
        setTestResults(results);
        setTestPhase('report');
    };

    if (testPhase === 'taking') {
        return (
            <SaturdayTestSession 
                questions={questions}
                testTitle={`Saturday Target Test - ${currentPaper === 'paper1' ? 'GS Paper 1' : 'GS Paper 2'}`}
                onComplete={handleTestComplete}
                onCancel={() => setTestPhase('landing')}
            />
        );
    }

    if (testPhase === 'report') {
        return (
            <SaturdayTestReport 
                results={testResults}
                onBack={() => setTestPhase('landing')}
                onRetake={() => handleStartTest(currentPaper!)}
            />
        );
    }

    // LANDING PAGE
    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-8 pt-12">
            <Button variant="ghost" onClick={() => router.push('/student/upsc/geography')} className="mb-6 -ml-4 font-bold text-slate-500 hover:text-indigo-600">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Geography Dashboard
            </Button>
            
            <Card className="overflow-hidden border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 border-slate-800">
                <div className="p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3" />
                    
                    <div className="relative z-10 space-y-6">
                        <Badge className="bg-rose-500 text-white hover:bg-rose-600 px-3 py-1 text-xs tracking-widest uppercase font-black">
                            Mandatory Saturday Evaluation
                        </Badge>
                        
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                            Mega Test Schedule
                        </h1>
                        
                        <p className="text-slate-300 text-lg max-w-2xl font-medium leading-relaxed mb-8">
                            Complete the 200 Questions examination covering your entire weekly study targets. Designed strictly on UPSC Prelims standards with Confidence Tracking.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {/* Paper 1: 9 AM to 11 AM */}
                            <Card className={`p-6 border-2 transition-all group ${isPaper1Time || IS_DEV ? 'bg-slate-800/80 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'bg-slate-800/40 border-slate-700 opacity-60'}`}>
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-black uppercase text-white tracking-tight">Paper 1: Core GS</h3>
                                            <p className="text-sm font-bold text-indigo-400 mt-1 flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> 09:00 AM – 11:00 AM
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100 Questions (L1 + L2/L3)</div>
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 120 Minutes Duration</div>
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Geomorphology, Climatology, Oceanography</div>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        {(isPaper1Time || IS_DEV) ? (
                                            <Button 
                                                className="w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all group-hover:scale-[1.02]"
                                                onClick={() => handleStartTest('paper1')}
                                            >
                                                Start Paper 1 <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        ) : (
                                            <Button disabled className="w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest bg-slate-700 text-slate-400">
                                                <Lock className="w-4 h-4 mr-2" /> Unlock at 09:00 AM
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Paper 2: 12 PM to 2 PM */}
                            <Card className={`p-6 border-2 transition-all group ${isPaper2Time || IS_DEV ? 'bg-slate-800/80 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'bg-slate-800/40 border-slate-700 opacity-60'}`}>
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-black uppercase text-white tracking-tight">Paper 2: CSAT / Applied</h3>
                                            <p className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> 12:00 PM – 02:00 PM
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                                            <Target className="w-6 h-6" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100 Questions (L2/L3)</div>
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 120 Minutes Duration</div>
                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Case Studies & Map Based Facts</div>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        {(isPaper2Time || IS_DEV) ? (
                                            <Button 
                                                className="w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all group-hover:scale-[1.02]"
                                                onClick={() => handleStartTest('paper2')}
                                            >
                                                Start Paper 2 <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        ) : (
                                            <Button disabled className="w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest bg-slate-700 text-slate-400">
                                                <Lock className="w-4 h-4 mr-2" /> Unlock at 12:00 PM
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
