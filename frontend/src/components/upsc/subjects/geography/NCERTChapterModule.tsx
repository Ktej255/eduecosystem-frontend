"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Target, Flashlight, Newspaper, Globe, History, CheckCircle2, AlertCircle, Database, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { HistoryMCQ } from '@/components/batch1/history/HistoryMCQSession';
import MCQSession from '@/components/batch1/history/HistoryMCQSession';

import { NCERT_MCQ_COLLECTION as NCERT_MCQS } from './data/mcqs/consolidated-ncert';
import { NCERT_GEOGRAPHY_NOTES } from './data/ncert-geography-notes';
import { NCERT_FLASHCARDS_DATA } from './data/ncert-flashcards-data';
import { GEOGRAPHY_CURRENT_AFFAIRS } from '@/components/upsc/subjects/current-affairs/current-affairs-data';
import { useRouter } from 'next/navigation';

const FLASHCARDS_DATA = NCERT_FLASHCARDS_DATA;

interface Props {
    chapterId: string;
    chapterTitle: string;
    bookTitle: string;
    mcqDataId?: string;
    initialTab?: string;
    onBack: () => void;
}

export default function NCERTChapterModule({ chapterId, chapterTitle, bookTitle, mcqDataId, initialTab = "note", onBack }: Props) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [isMCQActive, setIsMCQActive] = useState(false);
    const [mcqResults, setMcqResults] = useState<any>(null);
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    // Dynamic MCQ matching
    const mcqKey = useMemo(() => {
        if (mcqDataId) return mcqDataId as keyof typeof NCERT_MCQS;
        
        const chNum = chapterId.split('-').pop();
        const isIndiaBook = chapterId.includes('-i-');
        
        if (isIndiaBook) {
            return `indiaPeopleChapter${chNum}MCQs` as keyof typeof NCERT_MCQS;
        }
        
        return `chapter${chNum}MCQs` as keyof typeof NCERT_MCQS;
    }, [chapterId, mcqDataId]);

    const mcqsToUse: HistoryMCQ[] = (NCERT_MCQS[mcqKey] as any) || [];

    // Filter relevant current affairs
    const relevantCurrentAffairs = useMemo(() => {
        const chapterNum = parseInt(chapterId.split('-').pop() || '0');
        const isIndiaBook = chapterId.includes('-i-');
        
        return GEOGRAPHY_CURRENT_AFFAIRS.filter(item => {
            // Match by chapter number if available
            if (item.chapter === chapterNum) {
                // If it's an India book chapter, check for India keywords or specific tags if needed
                // For now, matching by chapter number is the most specific we have in the data
                return true;
            }
            // Match by related_topic_id if it exists and matches keywords in chapter title
            if (item.related_topic_id && chapterTitle.toLowerCase().includes(item.related_topic_id.replace(/-/g, ' '))) {
                return true;
            }
            return false;
        });
    }, [chapterId, chapterTitle]);

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
                <Button variant="ghost" className="rounded-xl px-2" onClick={() => router.push('/student/upsc/geography')}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                            NCERT Geography
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{bookTitle}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                        {chapterTitle}
                    </h1>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                <TabsContent value="note" className="mt-6 animation-fade-in focus-visible:outline-none">
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
                <TabsContent value="mcq" className="mt-6 animation-fade-in focus-visible:outline-none">
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
                <TabsContent value="flashcard" className="mt-6 animation-fade-in focus-visible:outline-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(FLASHCARDS_DATA[chapterId] || []).length > 0 ? (
                            FLASHCARDS_DATA[chapterId].map((card, idx) => (
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
                            ))
                        ) : (
                            <div className="col-span-full bg-stone-50 p-12 rounded-2xl border border-dashed border-stone-300 text-center">
                                <Flashlight className="h-10 w-10 text-stone-300 mx-auto mb-4" />
                                <p className="text-stone-500 italic">Flashcards for this chapter are currently being finalized.</p>
                            </div>
                        )}
                    </div>
                </TabsContent>

                {/* TAB 4: CURRENT AFFAIRS */}
                <TabsContent value="current" className="mt-6 animation-fade-in focus-visible:outline-none">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200 overflow-hidden">
                        <CardHeader className="bg-blue-50 border-b border-blue-100 p-6">
                            <div className="flex justify-between items-center">
                                <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                                    <Newspaper className="h-5 w-5 text-blue-600" />
                                    Dynamic Context Hub
                                </CardTitle>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="text-blue-700 border-blue-200 hover:bg-blue-100 rounded-lg"
                                    onClick={() => router.push('/student/upsc/current-affairs?subject=Geography')}
                                >
                                    Full Hub <ExternalLink className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {relevantCurrentAffairs.length > 0 ? (
                                <div className="divide-y divide-stone-100">
                                    {relevantCurrentAffairs.map((news) => (
                                        <div key={news.id} className="p-6 hover:bg-blue-50/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-slate-800 leading-snug">{news.title}</h4>
                                                <span className="text-xs font-semibold text-slate-400 flex items-center whitespace-nowrap ml-4">
                                                    <Calendar className="h-3 w-3 mr-1" /> {news.date}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{news.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {news.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 text-[10px] font-bold">
                                                        #{tag.toUpperCase()}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                                        <Newspaper className="h-8 w-8 text-blue-300" />
                                    </div>
                                    <div className="max-w-md mx-auto">
                                        <p className="text-slate-600 font-medium">
                                            No highly-specific news items for this chapter in this week's update.
                                        </p>
                                        <p className="text-slate-400 text-sm mt-1">
                                            Check the main hub for broader Geography updates including global climate trends and resource discoveries.
                                        </p>
                                        <Button 
                                            variant="ghost"
                                            className="text-blue-600 hover:bg-blue-50 mt-6 font-bold"
                                            onClick={() => router.push('/student/upsc/current-affairs?subject=Geography')}
                                        >
                                            Go to Geography News Feed &rarr;
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
