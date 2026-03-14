"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Target, Flashlight, Newspaper, Globe, History, CheckCircle2, AlertCircle, Database } from "lucide-react";
import { HistoryMCQ } from '@/components/batch1/history/HistoryMCQSession';
import MCQSession from '@/components/batch1/history/HistoryMCQSession';

import { NCERT_MCQ_COLLECTION as NCERT_MCQS } from './data/mcqs/consolidated-ncert';
import { NCERT_GEOGRAPHY_NOTES } from './data/ncert-geography-notes';
import { NCERT_FLASHCARDS_DATA } from './data/ncert-flashcards-data';
import { useRouter } from 'next/navigation';

const FLASHCARDS_DATA = NCERT_FLASHCARDS_DATA;

interface Props {
    chapterId: string;
    chapterTitle: string;
    bookTitle: string;
    mcqDataId?: string;
    onBack: () => void;
}

export default function NCERTChapterModule({ chapterId, chapterTitle, bookTitle, mcqDataId, onBack }: Props) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("note");
    const [isMCQActive, setIsMCQActive] = useState(false);
    const [mcqResults, setMcqResults] = useState<any>(null);
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    // Dynamic MCQ matching using mcqDataId from registry, fallback to chapterId-based key
    const mcqKey = (mcqDataId || `chapter${chapterId.split('-').pop()}MCQs`) as keyof typeof NCERT_MCQS;
    const mcqsToUse: HistoryMCQ[] = (NCERT_MCQS[mcqKey] as any) || [];

    const handleMCQComplete = (results: any) => {
        setMcqResults(results);
        setIsMCQActive(false);
    };

    const toggleCard = (index: number) => {
        setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    if (isMCQActive) {
        return (
            <div className="h-[85vh]">
                <MCQSession 
                    questions={mcqsToUse}
                    onComplete={handleMCQComplete}
                    onCancel={() => setIsMCQActive(false)}
                    title={`NCERT Practice: ${chapterTitle}`}
                />
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6 pb-20">
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
                <Button variant="ghost" className="rounded-xl px-2" onClick={onBack}>
                    &larr; Back
                </Button>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                            NCERT Geography
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold">{bookTitle}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                        {chapterTitle}
                    </h1>
                </div>
            </div>

            <Tabs defaultValue="note" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-stone-100/50 p-1 mb-6 rounded-2xl h-14">
                    <TabsTrigger value="note" className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 text-stone-600 rounded-xl h-full font-bold transition-all data-[state=active]:shadow-sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span className="hidden md:inline">One Page Note</span>
                        <span className="md:hidden">Note</span>
                    </TabsTrigger>
                    <TabsTrigger value="mcq" className="data-[state=active]:bg-white data-[state=active]:text-rose-600 text-stone-600 rounded-xl h-full font-bold transition-all data-[state=active]:shadow-sm">
                        <Target className="h-4 w-4 mr-2" />
                        <span className="hidden md:inline">MCQ Practice</span>
                        <span className="md:hidden">MCQ</span>
                    </TabsTrigger>
                    <TabsTrigger value="flashcard" className="data-[state=active]:bg-white data-[state=active]:text-amber-600 text-stone-600 rounded-xl h-full font-bold transition-all data-[state=active]:shadow-sm">
                        <Flashlight className="h-4 w-4 mr-2" />
                        <span className="hidden md:inline">Flash Cards</span>
                        <span className="md:hidden">Cards</span>
                    </TabsTrigger>
                    <TabsTrigger value="current" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-stone-600 rounded-xl h-full font-bold transition-all data-[state=active]:shadow-sm">
                        <Newspaper className="h-4 w-4 mr-2" />
                        <span className="hidden md:inline">Current Affairs</span>
                        <span className="md:hidden">News</span>
                    </TabsTrigger>
                </TabsList>

                {/* TAB 1: ONE PAGE NOTE */}
                <TabsContent value="note" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardHeader className="bg-emerald-50 border-b border-emerald-100 rounded-t-xl">
                            <CardTitle className="flex items-center gap-2 text-xl text-emerald-900">
                                <Globe className="h-5 w-5 text-emerald-600" />
                                Synthesized Concept Sheet
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 space-y-8">
                            <div className="prose prose-stone dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed font-medium text-stone-700">
                                    This synthesized one-page note integrates foundational NCERT facts with analytical angles tested in the last 15 years of UPSC Prelims. Pay attention to highlighted keywords and causal relationships.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    {NCERT_GEOGRAPHY_NOTES[chapterId] ? (
                                        <>
                                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-inner">
                                                <h3 className="flex items-center gap-2 text-lg font-bold text-stone-800 border-b pb-3 mb-4">
                                                    <Database className="h-5 w-5 text-amber-500" />
                                                    Factual Knowledge
                                                </h3>
                                                <ul className="space-y-3">
                                                    {NCERT_GEOGRAPHY_NOTES[chapterId].facts.map((fact, idx) => (
                                                        <li key={idx} className="flex gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                            <span className="text-stone-700" dangerouslySetInnerHTML={{ __html: fact }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 shadow-inner">
                                                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-800 border-b border-emerald-200 pb-3 mb-4">
                                                    <History className="h-5 w-5 text-emerald-600" />
                                                    PYQ Concepts (Last 15 Yrs)
                                                </h3>
                                                <ul className="space-y-3">
                                                    {NCERT_GEOGRAPHY_NOTES[chapterId].pyqConcepts.map((concept, idx) => (
                                                        <li key={idx} className="flex gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                                            <span className="text-stone-700" dangerouslySetInnerHTML={{ __html: concept }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="md:col-span-2 bg-stone-50 p-8 rounded-2xl border border-dashed border-stone-300 text-center">
                                            <p className="text-stone-500 italic">Detailed concept sheet for this chapter is being synthesized based on the latest UPSC trends. Please stay tuned.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB 2: MCQ PRACTICE */}
                <TabsContent value="mcq" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardContent className="p-8 text-center space-y-6">
                            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-10 w-10 text-rose-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">Chapter Level MCQ Test</h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                Standard UPSC-level multiple-choice questions curated explicitly for this chapter. Tests factual recall and conceptual clarity.
                            </p>
                            
                            {mcqResults ? (
                                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl inline-block text-left mt-6">
                                    <h3 className="font-bold text-emerald-800 flex items-center gap-2 mb-2">
                                        <CheckCircle2 className="h-5 w-5" /> Test Completed
                                    </h3>
                                    <p className="text-emerald-700">You scored <strong>{mcqResults.filter((r:any) => r.isCorrect).length}</strong> / {mcqsToUse.length}</p>
                                    <Button onClick={() => setMcqResults(null)} variant="outline" className="mt-4 border-emerald-200 text-emerald-700">
                                        Retake Test
                                    </Button>
                                </div>
                            ) : (
                                <div className="mt-8">
                                    <Button 
                                        onClick={() => setIsMCQActive(true)} 
                                        className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all font-bold"
                                        disabled={mcqsToUse.length === 0}
                                    >
                                        Start Practice ({mcqsToUse.length} Qs)
                                    </Button>
                                    {mcqsToUse.length === 0 && (
                                        <p className="text-sm text-amber-600 mt-4 flex items-center justify-center gap-1">
                                            <AlertCircle className="w-4 h-4" /> Questions for this chapter are currently being indexed.
                                        </p>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB 3: FLASH CARDS */}
                <TabsContent value="flashcard" className="mt-6 animation-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(FLASHCARDS_DATA[chapterId] || FLASHCARDS_DATA['c11-p-1']).map((card, idx) => (
                            <div 
                                key={idx} 
                                className="group h-48 [perspective:1000px] cursor-pointer"
                                onClick={() => toggleCard(idx)}
                            >
                                <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] shadow-sm border border-stone-200 ${flippedCards[idx] ? '[transform:rotateY(180deg)]' : ''}`}>
                                    {/* Front */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center [backface-visibility:hidden] bg-white rounded-2xl">
                                        <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-widest text-amber-600 bg-amber-50">Term</Badge>
                                        <h3 className="text-lg font-black text-slate-800 leading-tight">{card.term}</h3>
                                        <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-tighter">Click to reveal definition</p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-amber-600 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center text-center">
                                        <div>
                                            <p className="text-sm font-medium leading-relaxed italic">"{card.definition}"</p>
                                            <div className="mt-4 pt-4 border-t border-amber-500/30">
                                                <Badge variant="secondary" className="bg-amber-700 text-white border-0 text-[10px]">VERIFIED FACT</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* TAB 4: CURRENT AFFAIRS */}
                <TabsContent value="current" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardHeader className="bg-blue-50 border-b border-blue-100 rounded-t-xl">
                            <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                                <Newspaper className="h-5 w-5 text-blue-600" />
                                Current Affairs Hook
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 text-center bg-white">
                            <div className="max-w-md mx-auto space-y-4">
                                <p className="text-slate-600 font-medium">
                                    Connecting static Geography with dynamic global events.
                                </p>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                    <h4 className="font-bold text-slate-700 mb-2">Relevant Subtopics:</h4>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <Badge variant="secondary">Monsoon Anomalies</Badge>
                                        <Badge variant="secondary">Urban Flooding</Badge>
                                        <Badge variant="secondary">Biodiversity Loss</Badge>
                                    </div>
                                </div>
                                <Button 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4 rounded-xl font-bold"
                                    onClick={() => router.push('/student/upsc/current-affairs')}
                                >
                                    Open Current Affair Hub →
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    );
}
