"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BookOpen, 
    ChevronRight, 
    Settings, 
    Play, 
    History, 
    Globe, 
    FileText, 
    CheckCircle2,
    X,
    Filter
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import HistoryMCQSession, { HistoryMCQ, MCQResult } from '../subjects/history/HistoryMCQSession';

// Metadata for subjects and chapters
const SUBJECT_METADATA = [
    {
        id: 'ancient-history',
        title: 'Ancient History',
        icon: History,
        color: 'text-amber-500',
        chapters: 27
    },
    {
        id: 'modern-history',
        title: 'Modern History',
        icon: History,
        color: 'text-indigo-500',
        chapters: 39
    },
    {
        id: 'geography',
        title: 'Geography (NCERT)',
        icon: Globe,
        color: 'text-emerald-500',
        chapters: 12 // NCERT chapters available
    }
];

export default function CustomTestEngine() {
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
    const [questionCount, setQuestionCount] = useState<number>(30);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [testPool, setTestPool] = useState<HistoryMCQ[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const toggleChapter = (num: number) => {
        if (selectedChapters.includes(num)) {
            setSelectedChapters(selectedChapters.filter(c => c !== num));
        } else {
            setSelectedChapters([...selectedChapters, num]);
        }
    };

    const handleSelectAll = () => {
        const subject = SUBJECT_METADATA.find(s => s.id === selectedSubject);
        if (subject) {
            const all = Array.from({ length: subject.chapters }, (_, i) => i + 1);
            setSelectedChapters(all);
        }
    };

    const startTest = async () => {
        if (!selectedSubject || selectedChapters.length === 0) return;
        
        setIsLoading(true);
        let pool: HistoryMCQ[] = [];

        try {
            if (selectedSubject === 'ancient-history') {
                for (const ch of selectedChapters) {
                    const module = await import(`../subjects/history/data/mcqs/ancient/chapter${ch}-data`);
                    const key = `CH${ch}_L1_MCQS`;
                    if (module[key]) {
                        // Normalize ancient history keys (correctIndex -> correctAnswer)
                        const normalized = module[key].map((q: any) => ({
                            ...q,
                            correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctIndex
                        }));
                        pool = [...pool, ...normalized];
                    }
                }
            } else if (selectedSubject === 'modern-history') {
                for (const ch of selectedChapters) {
                    const module = await import(`../subjects/history/data/mcqs/modern/chapter${ch}`);
                    // Modern files use HISTORY_CH[N]_MCQS exports
                    const key = `HISTORY_CH${ch}_MCQS`;
                    if (module[key]) {
                        pool = [...pool, ...module[key]];
                    }
                }
            } else if (selectedSubject === 'geography') {
                const geoData = await import(`../subjects/geography/data/mcqs/ncert-mcqs.json`);
                const allGeo = geoData.default || geoData;
                pool = allGeo.filter((q: any) => selectedChapters.includes(parseInt(q.chapter)));
            }

            // Shuffle and cap
            const shuffled = [...pool].sort(() => 0.5 - Math.random());
            setTestPool(shuffled.slice(0, questionCount));
            setIsSessionActive(true);
        } catch (error) {
            console.error("Failed to load custom test data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSessionActive) {
        return (
            <HistoryMCQSession 
                questions={testPool}
                title={`Custom Test: ${SUBJECT_METADATA.find(s => s.id === selectedSubject)?.title} (${selectedChapters.length} Chapters)`}
                onCancel={() => setIsSessionActive(false)}
                onComplete={(results) => {
                    console.log("Test Complete", results);
                    setIsSessionActive(false);
                }}
            />
        );
    }

    const currentSubject = SUBJECT_METADATA.find(s => s.id === selectedSubject);

    return (
        <div className="max-w-5xl mx-auto space-y-8 p-4">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                        <Settings className="w-8 h-8 text-blue-500" />
                        Custom Test Engine
                    </h1>
                    <p className="text-muted-foreground mt-1">Generate personalized mock tests from the cumulative question pool.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Total Pool</div>
                        <div className="text-2xl font-black">4,500+ <span className="text-sm font-medium text-muted-foreground">MCQs</span></div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Subject Selection */}
                <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Filter className="w-3 h-3" /> Step 1: Select Subject
                    </h3>
                    <div className="space-y-3">
                        {SUBJECT_METADATA.map((subject) => (
                            <button
                                key={subject.id}
                                onClick={() => {
                                    setSelectedSubject(subject.id);
                                    setSelectedChapters([]);
                                }}
                                className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${selectedSubject === subject.id 
                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 shadow-md translate-x-1' 
                                    : 'bg-card border-border hover:border-blue-500/30'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-xl bg-muted ${selectedSubject === subject.id ? 'bg-blue-500 text-white' : ''}`}>
                                        <subject.icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-left font-bold">{subject.title}</div>
                                </div>
                                <ChevronRight className={`w-4 h-4 transition-transform ${selectedSubject === subject.id ? 'translate-x-1' : 'opacity-0'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chapter Selection */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                             Step 2: Pick Chapters
                        </h3>
                        {selectedSubject && (
                            <Button variant="ghost" size="sm" onClick={handleSelectAll} className="text-xs font-bold text-blue-500">
                                Select All
                            </Button>
                        )}
                    </div>
                    
                    {selectedSubject ? (
                        <Card className="rounded-3xl border-2 border-slate-100 overflow-hidden bg-muted/30">
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {Array.from({ length: currentSubject?.chapters || 0 }, (_, i) => i + 1).map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => toggleChapter(num)}
                                            className={`p-3 rounded-xl border text-sm font-bold transition-all text-center ${selectedChapters.includes(num)
                                                ? 'bg-blue-500 border-blue-600 text-white shadow-lg scale-105'
                                                : 'bg-card border-border hover:border-blue-300 text-muted-foreground'}`}
                                        >
                                            Ch {num}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="h-[200px] rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                            <BookOpen className="w-8 h-8 mb-4 opacity-20" />
                            <p className="text-sm font-medium">Select a subject to list chapters</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Test Settings Footer */}
            <AnimatePresence>
                {selectedChapters.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50"
                    >
                        <div className="bg-slate-900 dark:bg-blue-900/90 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                            {/* Decorative element */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50"></div>
                            
                            <div className="flex items-center gap-8">
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-blue-300 mb-1">Configuration</div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline" className="text-white border-white/20 px-3 py-1 bg-white/5">
                                            {selectedChapters.length} Chapters
                                        </Badge>
                                        <div className="flex items-center gap-2">
                                            <Input 
                                                type="number" 
                                                value={questionCount}
                                                onChange={(e) => setQuestionCount(parseInt(e.target.value) || 0)}
                                                className="w-20 bg-white/10 border-white/20 text-white font-bold h-9 rounded-lg focus-visible:ring-blue-500"
                                            />
                                            <span className="text-xs font-bold text-white/60">Questions</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-10 bg-white/10"></div>

                                <div className="hidden md:block">
                                    <div className="text-[10px] uppercase font-bold text-blue-300 mb-1">Difficulty</div>
                                    <div className="text-white font-black">Mixed Adaptive</div>
                                </div>
                            </div>

                            <Button 
                                disabled={isLoading}
                                onClick={startTest}
                                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-black px-10 py-6 rounded-2xl flex items-center gap-3 group"
                            >
                                {isLoading ? 'PREPARING POOL...' : 'LAUNCH TEST ENGINE'}
                                {!isLoading && <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="h-32"></div> {/* Spacer for fixed footer */}
        </div>
    );
}
