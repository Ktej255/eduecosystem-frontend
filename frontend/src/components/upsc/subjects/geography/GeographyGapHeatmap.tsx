"use client";

import React, { useState } from 'react';
import { BrainCircuit, CheckCircle, ChevronRight, XCircle, Globe, Map, Mountain, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

type GapStatus = 'knowledge_gap' | 'logic_gap' | 'mastered' | 'unattempted';

interface ModuleStatus {
    id: string;
    title: string;
    icon: React.ReactNode;
    status: GapStatus;
    accuracy?: number;
    totalQuestions: number;
    correctQuestions: number;
}

interface GeographyGapHeatmapProps {
    moduleData?: Record<string, { correct: number, total: number }>;
    onStartPractice?: (moduleId: string) => void;
}

export default function GeographyGapHeatmap({ moduleData = {}, onStartPractice }: GeographyGapHeatmapProps) {
    const router = useRouter();
    const [selectedModule, setSelectedModule] = useState<ModuleStatus | null>(null);

    const modules = [
        { id: 'physical', title: "Physical Geography", icon: <Mountain className="w-6 h-6" />, totalQuestions: 0, correctQuestions: 0 },
        { id: 'world', title: "World Geography", icon: <Globe className="w-6 h-6" />, totalQuestions: 0, correctQuestions: 0 },
        { id: 'indian', title: "Indian Geography", icon: <Map className="w-6 h-6" />, totalQuestions: 0, correctQuestions: 0 },
        { id: 'human', title: "Human Geography", icon: <Users className="w-6 h-6" />, totalQuestions: 0, correctQuestions: 0 },
    ];

    const getStatus = (accuracy: number | undefined): GapStatus => {
        if (accuracy === undefined) return 'unattempted';
        if (accuracy >= 85) return 'mastered';
        if (accuracy >= 60) return 'logic_gap';
        return 'knowledge_gap';
    };

    const getStatusColor = (status: GapStatus) => {
        switch (status) {
            case 'knowledge_gap': return 'bg-red-500 border-red-600 text-white';
            case 'logic_gap': return 'bg-amber-400 border-amber-500 text-black';
            case 'mastered': return 'bg-emerald-500 border-emerald-600 text-white';
            default: return 'bg-muted dark:bg-[#222] border-border text-muted-foreground';
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-8">
            <div className="flex-1">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Module Performance Heatmap</h2>
                    <p className="text-muted-foreground text-sm">Visualise your preparation across Geography modules.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {modules.map((mod) => {
                        const data = moduleData[mod.id] || { correct: 0, total: 0 };
                        const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : undefined;
                        const status = getStatus(accuracy);

                        return (
                            <button
                                key={mod.id}
                                onClick={() => setSelectedModule({ ...mod, status, accuracy, correctQuestions: data.correct, totalQuestions: data.total })}
                                className={`aspect-square rounded-2xl border-b-4 flex flex-col items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 ${getStatusColor(status)} shadow-lg`}
                            >
                                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                    {mod.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-center px-2">
                                    {mod.title}
                                </span>
                                {accuracy !== undefined && (
                                    <span className="text-lg font-black">{Math.round(accuracy)}%</span>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-6 mt-8 p-4 bg-muted/30 rounded-xl border border-border">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-red-500" /> &lt; 60% (Gap)
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-amber-400" /> 60-85% (Medium)
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-emerald-500" /> &gt; 85% (Mastery)
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-96">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border shadow-2xl h-full p-8 min-h-[400px]">
                    {!selectedModule ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                            <Globe className="w-12 h-12 mb-4 opacity-20 animate-pulse" />
                            <p className="font-medium">Select a module for <br /> detailed analysis.</p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Module Insight</span>
                                <button onClick={() => setSelectedModule(null)} className="p-1 hover:bg-muted rounded-full transition-colors">
                                    <XCircle className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-foreground mb-2 leading-tight">
                                    {selectedModule.title}
                                </h3>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                    selectedModule.status === 'knowledge_gap' ? 'bg-red-100 text-red-700' :
                                    selectedModule.status === 'logic_gap' ? 'bg-amber-100 text-amber-700' :
                                    selectedModule.status === 'mastered' ? 'bg-emerald-100 text-emerald-700' :
                                    'bg-muted text-muted-foreground'
                                }`}>
                                    {selectedModule.status.replace('_', ' ')}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                                    <div className="flex items-end justify-between mb-2">
                                        <span className="text-xs font-bold text-muted-foreground">Accuracy Score</span>
                                        <span className="text-2xl font-black text-foreground">
                                            {selectedModule.accuracy !== undefined ? `${Math.round(selectedModule.accuracy)}%` : '0%'}
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-1000 ${
                                                selectedModule.status === 'mastered' ? 'bg-emerald-500' :
                                                selectedModule.status === 'logic_gap' ? 'bg-amber-400' : 'bg-red-500'
                                            }`}
                                            style={{ width: `${selectedModule.accuracy || 0}%` }}
                                        />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground mt-3 font-medium">
                                        {selectedModule.correctQuestions} correct out of {selectedModule.totalQuestions} questions attempted.
                                    </p>
                                </div>

                                {selectedModule.status !== 'mastered' && (
                                    <button
                                        onClick={() => onStartPractice?.(selectedModule.id)}
                                        className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                    >
                                        Practice More {selectedModule.title} <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
