"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, ChevronRight, CheckCircle2, Lock, Flame, Shield, ShieldAlert, AlertTriangle } from "lucide-react";
import HistoryMCQSession from '@/components/batch1/history/HistoryMCQSession';

interface SavinderSinghModuleProps {
    chapterId: string;
    chapterTitle: string;
    level1McqCount: number;
    level2McqCount: number;
    level3McqCount: number;
    onBack: () => void;
}

export default function SavinderSinghModule({ 
    chapterId, 
    chapterTitle, 
    level1McqCount, 
    level2McqCount, 
    level3McqCount, 
    onBack 
}: SavinderSinghModuleProps) {
    const [activeLevel, setActiveLevel] = useState<number | null>(null);
    const [results, setResults] = useState<Record<number, any>>({});

    const handleMCQComplete = (level: number, completedResults: any) => {
        setResults(prev => ({ ...prev, [level]: completedResults }));
        setActiveLevel(null);
    };

    if (activeLevel !== null) {
        // Mock empty questions for now since Savinder Singh MCQs aren't fully parsed yet.
        // The HistoryMCQSession will safely render an "Empty state" alert when questions=[]
        return (
            <div className="h-[85vh]">
                <HistoryMCQSession 
                    questions={[]}
                    onComplete={(res) => handleMCQComplete(activeLevel, res)}
                    onCancel={() => setActiveLevel(null)}
                    title={`Savinder Singh: Level ${activeLevel}`}
                />
            </div>
        );
    }

    const levels = [
        { 
            id: 1, 
            name: "Level 1: Factual Foundation", 
            desc: "Direct concepts, definitions, and distinct physical features.", 
            count: level1McqCount,
            icon: Shield,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200"
        },
        { 
            id: 2, 
            name: "Level 2: Conceptual Flow", 
            desc: "Process-based sequences, multi-statement logic matching.", 
            count: level2McqCount,
            icon: ShieldAlert,
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-200"
        },
        { 
            id: 3, 
            name: "Level 3: UPSC Simulation", 
            desc: "Assertion-Reasoning, highly complex analytical synthesis.", 
            count: level3McqCount,
            icon: AlertTriangle,
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-200"
        }
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto p-4 md:p-6 pb-20">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 border-b pb-6 justify-between">
                <div>
                    <Button variant="ghost" className="rounded-xl px-2 mb-2" onClick={onBack}>
                        &larr; Back to Dashboard
                    </Button>
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 uppercase tracking-widest font-black text-[10px]">
                            Physical Geography Mastery
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold">Savinder Singh</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                        {chapterTitle}
                    </h1>
                </div>
            </div>

            <div className="grid gap-6">
                {levels.map((level, idx) => {
                    const isCompleted = results[level.id];
                    const LevelIcon = level.icon;

                    // Require sequential unlocking (Level 2 requires Level 1, etc.)
                    const isLocked = idx > 0 && !results[levels[idx-1].id];

                    return (
                        <Card 
                            key={level.id} 
                            className={`border transition-all ${isLocked ? 'opacity-60 bg-slate-50 border-slate-100 grayscale' : `hover:shadow-lg ${level.bg} ${level.border}`}`}
                        >
                            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 rounded-2xl shrink-0 ${isLocked ? 'bg-slate-200 text-slate-400' : 'bg-white shadow-sm ' + level.color}`}>
                                        {isLocked ? <Lock className="h-8 w-8" /> : <LevelIcon className="h-8 w-8" />}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold flex items-center gap-2 ${isLocked ? 'text-slate-600' : 'text-slate-900'}`}>
                                            {level.name}
                                            {isCompleted && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                                        </h3>
                                        <p className="text-stone-600 mt-1 max-w-md">{level.desc}</p>
                                        
                                        {!isLocked && (
                                            <div className="flex items-center gap-3 mt-4">
                                                <Badge variant="outline" className="bg-white/50 text-stone-600 font-semibold border-stone-200">
                                                    {level.count} Questions
                                                </Badge>
                                                {isCompleted && (
                                                    <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300 font-bold">
                                                        Score: {isCompleted.filter((r:any) => r.isCorrect).length} / {level.count}
                                                    </Badge>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full md:w-auto flex flex-col gap-2 shrink-0">
                                    {isLocked ? (
                                        <Button disabled variant="outline" className="h-14 px-8 rounded-xl font-bold">
                                            <Lock className="w-4 h-4 mr-2" /> Locked
                                        </Button>
                                    ) : (
                                        <Button 
                                            onClick={() => setActiveLevel(level.id)}
                                            className={`h-14 px-8 rounded-xl font-black text-white shadow-md hover:shadow-xl transition-all ${
                                                isCompleted ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-900 hover:bg-slate-800'
                                            }`}
                                        >
                                            {isCompleted ? 'Retry Level' : 'Initiate Drill'}
                                            {!isCompleted && <ChevronRight className="w-5 h-5 ml-2" />}
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

        </div>
    );
}
