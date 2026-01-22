
"use client";

import React from 'react';
import { GeographyNode } from './data/spatial-syllabus';
import { ArrowLeft, Play, CheckCircle, BookOpen, BrainCircuit, Globe } from 'lucide-react';
import GenericFlashcardSession from '../framework/GenericFlashcardSession';
import { geographyFlashcards as GEOGRAPHY_FLASHCARDS } from './data/flashcards/geography-flashcards';
import { geographyMCQs as GEOGRAPHY_MCQS } from './data/mcqs/geography-mcqs';
import { Button } from '@/components/ui/button';

interface TopicDetailViewProps {
    node: GeographyNode;
    onBack: () => void;
}

export default function TopicDetailView({ node, onBack }: TopicDetailViewProps) {
    const [activeTab, setActiveTab] = React.useState<'overview' | 'flashcards' | 'quiz'>('overview');

    // Filter relevant flashcards based on node ID matching source or tags
    // For prototype, we show all if not found, or specific ones.
    // Ideally, we filter by topic slug or ID.
    const relevantFlashcards = GEOGRAPHY_FLASHCARDS.filter(fc =>
        // Simple matching logic: if flashcard source matches the node title roughly
        fc.topic?.toLowerCase().includes(node.title.toLowerCase()) ||
        fc.front.toLowerCase().includes(node.title.toLowerCase())
    );

    // Fallback if none found, show a few randoms or empty
    const displayFlashcards = relevantFlashcards.length > 0 ? relevantFlashcards : GEOGRAPHY_FLASHCARDS.slice(0, 5);

    return (
        <div className="w-full animate-in slide-in-from-right duration-500 bg-white dark:bg-[#0a0a0a] min-h-[600px] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col">
            {/* Header / Hero */}
            <div className="h-48 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 relative p-6 flex flex-col justify-end">
                <button
                    onClick={onBack}
                    className="absolute top-4 left-4 text-white/70 hover:text-white flex items-center gap-2 text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm transition-all hover:bg-black/40"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Geosphere
                </button>

                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-2">
                    <Globe className="w-3 h-3" />
                    {node.type} Level
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{node.title}</h1>
                <p className="text-white/80 max-w-2xl">{node.description || "Explore this geographical concept in depth."}</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black/50">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    <BookOpen className="w-4 h-4" /> Concept Map
                </button>
                <button
                    onClick={() => setActiveTab('flashcards')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'flashcards' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    <BrainCircuit className="w-4 h-4" /> Flashcards
                </button>
                <button
                    onClick={() => setActiveTab('quiz')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'quiz' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    <CheckCircle className="w-4 h-4" /> Check Understanding
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'overview' && (
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {/* Micro-Lecture Placeholder */}
                        <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center relative group cursor-pointer shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                                alt="Lecture Thumbnail"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="z-20 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 mb-4 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-colors">
                                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                </div>
                                <span className="text-white font-bold tracking-wide">WATCH MICRO-LECTURE (10:00)</span>
                            </div>
                        </div>

                        {/* UPSC Connection */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/30">
                                <h3 className="font-bold text-amber-800 dark:text-amber-500 mb-3 flex items-center gap-2">
                                    <span className="bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded text-xs">PRELIMS FOCUS</span>
                                </h3>
                                <p className="text-amber-900/80 dark:text-amber-200/80 text-sm leading-relaxed">
                                    Key facts about {node.title} often asked in Prelims. E.g., Major landforms, specific terminology, or associated scientists/theories.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30">
                                <h3 className="font-bold text-blue-800 dark:text-blue-500 mb-3 flex items-center gap-2">
                                    <span className="bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded text-xs">MAINS PYQ (2018)</span>
                                </h3>
                                <p className="text-blue-900/80 dark:text-blue-200/80 text-sm leading-relaxed italic">
                                    "Discuss the significance of {node.title} in the context of Indian Geography."
                                </p>
                            </div>
                        </div>

                        {/* Concept Hierarchy */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
                            <div className="space-y-2">
                                {['Concept A', 'Concept B', 'Concept C'].map((c, i) => (
                                    <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 transition-colors cursor-pointer flex justify-between items-center group">
                                        <span className="font-medium group-hover:text-emerald-600">{node.title}: {c}</span>
                                        <ArrowLeft className="w-4 h-4 rotate-180 text-neutral-400 group-hover:text-emerald-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'flashcards' && (
                    <div className="max-w-4xl mx-auto">
                        <GenericFlashcardSession
                            flashcards={displayFlashcards.map(fc => ({
                                ...fc,
                                category: 'concept' as const,
                                source: 'Geography'
                            }))}
                            title={node.title}
                            onClose={onBack}
                        />
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div className="max-w-2xl mx-auto text-center py-20">
                        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Quiz Mode Ready</h2>
                        <p className="text-neutral-500 mb-8">Test your knowledge on {node.title}.</p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Start 5-Question Quiz</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
