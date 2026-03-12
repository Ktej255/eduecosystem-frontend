"use client";

import React, { useState, useEffect } from 'react';
import { BrainCircuit, AlertTriangle, CheckCircle, XCircle, BookOpen, ChevronRight, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { upscSynapseService, GapAnalysisEntry } from '@/lib/upsc-synapse-service';
import { ANCIENT_HISTORY_CHAPTERS } from '../data/ancient/history-chapters';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GapStatus = 'knowledge_gap' | 'logic_gap' | 'mastered' | 'unattempted';

interface ChapterStatus {
    id: number;
    title: string;
    status: GapStatus;
    lastScore?: number;
    gapDetails?: {
        missingPage?: number;
        missingConcept?: string;
    }
}

export default function HistoryGapHeatmap() {
    const router = useRouter();
    const [gapData, setGapData] = useState<GapAnalysisEntry[]>([]);
    const [selectedChapter, setSelectedChapter] = useState<ChapterStatus | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGapData = async () => {
            try {
                const data = await upscSynapseService.getHeatmap();
                if (data) {
                    // Filter for History subject
                    const filtered = data.filter(entry =>
                        entry.subject.toLowerCase().includes('history') &&
                        entry.subject.toLowerCase().includes('ancient')
                    );
                    setGapData(filtered);
                }
            } catch (err) {
                console.error("Failed to fetch gap analysis:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchGapData();
    }, []);

    const profileMap = React.useMemo(() => {
        const map: Record<number, Partial<ChapterStatus>> = {};
        gapData.forEach(entry => {
            map[entry.chapter_id] = {
                status: entry.status as GapStatus,
                lastScore: entry.recall_accuracy,
                gapDetails: entry.gap_details
            };
        });
        return map;
    }, [gapData]);

    const getStatusStyles = (status: GapStatus) => {
        switch (status) {
            case 'knowledge_gap': return 'bg-red-500 border-red-600 shadow-red-200 text-white';
            case 'logic_gap': return 'bg-amber-400 border-amber-500 shadow-amber-100 text-black';
            case 'mastered': return 'bg-emerald-500 border-emerald-600 shadow-emerald-100 text-white';
            default: return 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-400';
        }
    };

    const handleChapterClick = (ch: typeof ANCIENT_HISTORY_CHAPTERS[0]) => {
        const profile = profileMap[ch.id] || { status: 'unattempted' };
        setSelectedChapter({
            id: ch.id,
            title: ch.title,
            status: profile.status as GapStatus,
            lastScore: profile.lastScore,
            gapDetails: profile.gapDetails
        });
    };

    return (
        <Card className="border-2 border-amber-100 dark:border-amber-900/40 overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-amber-100 dark:border-amber-900/20 bg-amber-50/50 dark:bg-amber-900/10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-black text-amber-900 dark:text-amber-100">PYQ COGNITIVE HEATMAP</CardTitle>
                            <CardDescription className="text-amber-700/70 dark:text-amber-400/60 font-medium">Ancient History Performance Audit (27 Chapters)</CardDescription>
                        </div>
                    </div>
                    <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 font-bold uppercase tracking-wider">
                        Synapse AI Active
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Heatmap Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2">
                            {ANCIENT_HISTORY_CHAPTERS.map((ch) => {
                                const status = profileMap[ch.id]?.status || 'unattempted';
                                return (
                                    <button
                                        key={ch.id}
                                        onClick={() => handleChapterClick(ch)}
                                        className={`group relative aspect-square rounded-lg border-b-2 flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:shadow-md active:scale-95 ${getStatusStyles(status)}`}
                                        title={ch.title}
                                    >
                                        <span className="text-xs font-black">{ch.id}</span>
                                        {status === 'mastered' && <CheckCircle className="w-2.5 h-2.5 absolute top-1 right-1 opacity-80" />}
                                        {status === 'knowledge_gap' && <AlertTriangle className="w-2.5 h-2.5 absolute top-1 right-1 opacity-80" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center gap-4 mt-6 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                                <div className="w-3 h-3 rounded bg-red-500" /> Knowledge Gap
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                                <div className="w-3 h-3 rounded bg-amber-400" /> Logic Gap
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                                <div className="w-3 h-3 rounded bg-emerald-500" /> Mastered
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                                <div className="w-3 h-3 rounded bg-neutral-200 dark:bg-neutral-800" /> Unattempted
                            </div>
                        </div>
                    </div>

                    {/* Analysis Sidebar */}
                    <div className="w-full lg:w-72 border-l border-amber-50 dark:border-amber-900/20 pl-0 lg:pl-8">
                        {!selectedChapter ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-800">
                                <BrainCircuit className="w-10 h-10 text-neutral-300 mb-3" />
                                <p className="text-xs text-neutral-500 font-medium">Select a chapter block to view the Synapse Analysis</p>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">Chapter {selectedChapter.id}</span>
                                        <button onClick={() => setSelectedChapter(null)} className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                            <XCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-bold leading-tight mb-2">{selectedChapter.title}</h3>

                                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tight
                                        ${selectedChapter.status === 'knowledge_gap' ? 'bg-red-100 text-red-700' :
                                            selectedChapter.status === 'logic_gap' ? 'bg-amber-100 text-amber-700' :
                                                selectedChapter.status === 'mastered' ? 'bg-green-100 text-green-700' :
                                                    'bg-neutral-100 text-neutral-600'}`}>
                                        {selectedChapter.status.replace('_', ' ')}
                                    </div>
                                </div>

                                {selectedChapter.status === 'unattempted' ? (
                                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                                        <p className="text-xs text-amber-800 dark:text-amber-200 mb-3">No performance data found for this chapter.</p>
                                        <button
                                            onClick={() => router.push(`/student/upsc/history/mcq?chapter=${selectedChapter.id}&level=1&section=ancient`)}
                                            className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2 rounded-lg shadow-lg flex items-center justify-center gap-1.5 transition-all"
                                        >
                                            Start Foundation Audit <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                            <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Recall Accuracy</div>
                                            <div className="text-xl font-black text-neutral-900 dark:text-neutral-100">{selectedChapter.lastScore}%</div>
                                        </div>

                                        {selectedChapter.status === 'knowledge_gap' && (
                                            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/40">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <AlertTriangle className="w-4 h-4 text-red-600" />
                                                    <span className="text-[10px] font-bold text-red-800 dark:text-red-400 uppercase">Diagnosis: Factual Gap</span>
                                                </div>
                                                <p className="text-[11px] text-red-700 dark:text-red-300 leading-normal mb-3">
                                                    Weakness identified in <strong>{selectedChapter.gapDetails?.missingConcept || 'Historical Facts'}</strong>.
                                                </p>
                                                <button
                                                    onClick={() => router.push(`/student/upsc/history/read/${selectedChapter.id}?section=ancient`)}
                                                    className="w-full bg-white dark:bg-neutral-950 border-2 border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 hover:shadow-md transition-all"
                                                >
                                                    <BookOpen className="w-3.5 h-3.5" /> Read Analysis
                                                </button>
                                            </div>
                                        )}

                                        {selectedChapter.status === 'mastered' && (
                                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/40 text-center">
                                                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                                <p className="text-xs font-bold text-green-800 dark:text-green-300 uppercase">UPSC Ready</p>
                                                <p className="text-[10px] text-green-600 opacity-80 mt-1">Foundational concepts solidified.</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
