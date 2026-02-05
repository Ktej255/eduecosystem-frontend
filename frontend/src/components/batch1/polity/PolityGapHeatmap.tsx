"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, BookOpen, BrainCircuit, CheckCircle, ChevronRight, XCircle } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { GapAnalysisEntry } from '@/lib/upsc-synapse-service';

// ... (types)

// Status Types for the Heatmap
type GapStatus = 'knowledge_gap' | 'logic_gap' | 'mastered' | 'unattempted';

interface ChapterStatus {
    id: number;
    status: GapStatus;
    lastScore?: number;
    gapDetails?: {
        missingPage?: number;
        missingConcept?: string;
    }
}

interface PolityGapHeatmapProps {
    gapData?: GapAnalysisEntry[];
    onStartAudit?: (chapterId: number) => void;
}

export default function PolityGapHeatmap({ gapData = [], onStartAudit }: PolityGapHeatmapProps) {
    const router = useRouter(); // Use Router
    const [selectedChapter, setSelectedChapter] = useState<ChapterStatus | null>(null);

    // Convert API List to Map for O(1) Lookup
    const profileMap = React.useMemo(() => {
        const map: Record<number, ChapterStatus> = {};
        gapData.forEach(entry => {
            map[entry.chapter_id] = {
                id: entry.chapter_id,
                status: entry.status as GapStatus,
                lastScore: entry.recall_accuracy,
                gapDetails: entry.gap_details
            };
        });
        return map;
    }, [gapData]);

    const chapters = [
        { id: 1, title: "Historical Background", icon: "🏛️" },
        { id: 2, title: "Making of Constitution", icon: "✍️" },
        { id: 3, title: "Concept of Constitution", icon: "💡" },
        { id: 4, title: "Salient Features", icon: "✨" },
        { id: 5, title: "Preamble", icon: "📜" },
        { id: 6, title: "Union and Its Territory", icon: "🗺️" },
        { id: 7, title: "Citizenship", icon: "🇮🇳" },
        { id: 8, title: "Fundamental Rights (I)", icon: "⚖️" },
        { id: 9, title: "Fundamental Rights (II)", icon: "🛡️" },
        { id: 10, title: "Fundamental Rights (III)", icon: "🔓" },
        { id: 20, title: "President", icon: "👤" },
        { id: 21, title: "Vice-President", icon: "🥈" },
        { id: 22, title: "Prime Minister", icon: "👔" },
        // ... (We can map more if needed, keeping it short for prototype UI)
    ];

    const getStatusColor = (status: GapStatus) => {
        switch (status) {
            case 'knowledge_gap': return 'bg-red-500 border-red-600 text-white';
            case 'logic_gap': return 'bg-amber-400 border-amber-500 text-black';
            case 'mastered': return 'bg-emerald-500 border-emerald-600 text-white';
            default: return 'bg-gray-100 dark:bg-[#222] border-gray-200 dark:border-gray-800 text-gray-400';
        }
    };

    const handleChapterClick = (chId: number) => {
        const status = profileMap[chId] || { id: chId, status: 'unattempted' };
        setSelectedChapter(status);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-8">

            {/* HEATMAP GRID */}
            <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white">
                            Cognitive Gap Heatmap
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Visualise your preparation. Red blocks indicate failed Foundation tests.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {chapters.map((ch) => {
                        const status = profileMap[ch.id]?.status || 'unattempted';
                        return (
                            <button
                                key={ch.id}
                                onClick={() => handleChapterClick(ch.id)}
                                className={`aspect-square rounded-xl border-b-4 flex flex-col items-center justify-center gap-1 transition-all hover:scale-105 active:scale-95 ${getStatusColor(status)}`}
                            >
                                <span className="text-2xl filter drop-shadow-md">{ch.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 truncate max-w-[80%]">
                                    CH {ch.id}
                                </span>
                            </button>
                        );
                    })}
                    {/* Filler blocks for visual density */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={`fill-${i}`} className="aspect-square rounded-xl bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center opacity-30">
                            <span className="text-xs">{i + 23}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <div className="w-3 h-3 rounded bg-red-500" /> Knowledge Gap
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <div className="w-3 h-3 rounded bg-amber-400" /> Logic Gap
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <div className="w-3 h-3 rounded bg-emerald-500" /> Exam Ready
                    </div>
                </div>
            </div>

            {/* GAP ANALYSIS PANEL */}
            <div className="w-full lg:w-96">
                <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl h-full p-6 min-h-[400px]">
                    {!selectedChapter ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                            <BrainCircuit className="w-12 h-12 mb-4 opacity-50" />
                            <p>Select a block from the grid <br /> to analyze your gap.</p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Chapter Analysis</span>
                                <button onClick={() => setSelectedChapter(null)} className="text-gray-400 hover:text-black dark:hover:text-white">
                                    <XCircle className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                                    Chapter {selectedChapter.id}
                                </h3>
                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase ${selectedChapter.status === 'knowledge_gap' ? 'bg-red-100 text-red-700' :
                                    selectedChapter.status === 'logic_gap' ? 'bg-amber-100 text-amber-700' :
                                        selectedChapter.status === 'mastered' ? 'bg-green-100 text-green-700' :
                                            'bg-gray-100 text-gray-700'
                                    }`}>
                                    {selectedChapter.status === 'knowledge_gap' && <AlertTriangle className="w-3 h-3" />}
                                    {selectedChapter.status === 'mastered' && <CheckCircle className="w-3 h-3" />}
                                    {selectedChapter.status.replace('_', ' ')}
                                </div>
                            </div>

                            {selectedChapter.status === 'knowledge_gap' && (
                                <div className="space-y-4">
                                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                                        <h4 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2">Diagnosis: Memory Failure</h4>
                                        <p className="text-red-700 dark:text-red-400 text-sm mb-3">
                                            You failed factual questions on <strong>{selectedChapter.gapDetails?.missingConcept}</strong>.
                                        </p>
                                        <button
                                            onClick={() => router.push(`/student/library/polity-book?page=${selectedChapter.gapDetails?.missingPage || 1}`)}
                                            className="w-full bg-white dark:bg-black border border-red-200 dark:border-red-800 text-red-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                                        >
                                            <BookOpen className="w-4 h-4" />
                                            Read Page {selectedChapter.gapDetails?.missingPage} (Laxmikanth)
                                        </button>
                                    </div>
                                    <p className="text-xs text-center text-gray-400">
                                        Recall accuracy: {selectedChapter.lastScore}% (Threshold: 85%)
                                    </p>
                                </div>
                            )}

                            {selectedChapter.status === 'logic_gap' && (
                                <div className="space-y-4">
                                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
                                        <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm mb-2">Diagnosis: Concept Weakness</h4>
                                        <p className="text-amber-700 dark:text-amber-400 text-sm mb-3">
                                            You know the facts, but failed the application on <strong>{selectedChapter.gapDetails?.missingConcept}</strong>.
                                        </p>
                                        <button className="w-full bg-amber-500 text-white px-4 py-3 rounded-lg text-sm font-bold shadow-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
                                            <BrainCircuit className="w-4 h-4" />
                                            Unlock Logic Masterclass (₹99)
                                        </button>
                                    </div>
                                </div>
                            )}

                            {selectedChapter.status === 'mastered' && (
                                <div className="space-y-4">
                                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full text-emerald-600 mx-auto mb-3">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-center mb-1">Excellent!</h4>
                                        <p className="text-emerald-700 dark:text-emerald-400 text-sm text-center">
                                            You are exam ready for this chapter.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {selectedChapter.status === 'unattempted' && (
                                <div className="text-center pt-8">
                                    <button
                                        onClick={() => selectedChapter && onStartAudit?.(selectedChapter.id)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        Start Audit Test <ChevronRight className="w-4 h-4" />
                                    </button>
                                    <p className="text-xs text-gray-500 mt-2">Time required: 15 mins</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
