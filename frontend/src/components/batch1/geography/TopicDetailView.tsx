
"use client";

import React from 'react';
import { GeographyNode } from './data/spatial-syllabus';
import { ArrowLeft, Play, CheckCircle, BookOpen, BrainCircuit, Globe } from 'lucide-react';
import GenericFlashcardSession from '../framework/GenericFlashcardSession';
import { geographyFlashcards as GEOGRAPHY_FLASHCARDS } from './data/flashcards/geography-flashcards';
import { geographyMCQs as GEOGRAPHY_MCQS } from './data/mcqs/geography-mcqs';
import { Button } from '@/components/ui/button';
import { getContentForTopic } from './content/content-registry';
import { getVisualization, VISUALIZATION_REGISTRY } from '@/data/upsc-visualization-registry';
import { Card } from '@/components/ui/card';

interface TopicDetailViewProps {
    node: GeographyNode;
    onBack: () => void;
}

export default function TopicDetailView({ node, onBack }: TopicDetailViewProps) {
    const [activeTab, setActiveTab] = React.useState<'overview' | 'flashcards' | 'quiz'>('overview');

    // Fetch content from registry
    // We assume node.id matches the keys in the registry. 
    // If not, we fall back to a generic placeholder or null.
    const content = getContentForTopic(node.id);

    // Filter relevant flashcards
    const relevantFlashcards = GEOGRAPHY_FLASHCARDS.filter(fc =>
        fc.topic?.toLowerCase().includes(node.title.toLowerCase()) ||
        fc.front.toLowerCase().includes(node.title.toLowerCase())
    );
    const displayFlashcards = relevantFlashcards.length > 0 ? relevantFlashcards : GEOGRAPHY_FLASHCARDS.slice(0, 5);

    const quizQuestions = content?.sections
        .flatMap(s => s.content)
        .filter(c => c.type === 'quiz') || [];

    // Check for Visualization
    const VisualizationComponent = VISUALIZATION_REGISTRY[node.id] || getVisualization(node.id, 0);


    return (
        <div className="w-full animate-in slide-in-from-right duration-500 bg-card dark:bg-[#0a0a0a] min-h-[600px] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col">
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
                <p className="text-white/80 max-w-2xl">{content?.description || node.description || "Explore this geographical concept in depth."}</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black/50">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                >
                    <BookOpen className="w-4 h-4" /> Concept Map
                </button>
                <button
                    onClick={() => setActiveTab('flashcards')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'flashcards' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                >
                    <BrainCircuit className="w-4 h-4" /> Flashcards
                </button>
                <button
                    onClick={() => setActiveTab('quiz')}
                    className={`px-6 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'quiz' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                >
                    <CheckCircle className="w-4 h-4" /> Check Understanding
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'overview' && (
                    <div className="space-y-8 max-w-4xl mx-auto">

                        {/* Visualization Section */}
                        {VisualizationComponent && (
                            <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
                                <VisualizationComponent />
                            </div>
                        )}

                        {!content ? (
                            <div className="text-center py-12 text-neutral-500">
                                <p>Content is being curated for this topic.</p>
                                <p className="text-sm mt-2">Try "Origin of Universe" or "Geological Time Scale" for a demo.</p>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {content.sections.map((section) => (
                                    <div key={section.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-emerald-500 pl-4">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-6">
                                            {section.content.map((block) => (
                                                <div key={block.id}>
                                                    {block.type === 'text' && (
                                                        <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                                                            {block.content}
                                                        </div>
                                                    )}
                                                    {block.type === 'image' && (
                                                        <figure className="my-6">
                                                            <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800">
                                                                <img
                                                                    src={block.content}
                                                                    alt={block.alt || 'Lesson Image'}
                                                                    className="w-full h-auto object-cover max-h-[500px]"
                                                                />
                                                            </div>
                                                            {block.caption && (
                                                                <figcaption className="text-center text-sm text-neutral-500 mt-2 italic">
                                                                    {block.caption}
                                                                </figcaption>
                                                            )}
                                                        </figure>
                                                    )}
                                                    {block.type === 'callout' && (
                                                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
                                                            <div className="text-amber-900 dark:text-amber-100 font-medium whitespace-pre-line">
                                                                {block.content}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {block.type === 'quiz' && (
                                                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl my-4">
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">?</div>
                                                                <div>
                                                                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Check Your Knowledge</h4>
                                                                    <p className="text-blue-800 dark:text-blue-200">{block.content}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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
                        <h2 className="text-2xl font-bold mb-2">Quiz Mode</h2>
                        {quizQuestions.length > 0 ? (
                            <div className="space-y-4 mt-8 text-left">
                                {quizQuestions.map((q, i) => (
                                    <div key={q.id} className="p-4 border rounded-xl bg-neutral-50 dark:bg-neutral-900">
                                        <span className="font-bold text-emerald-600 mr-2">Q{i + 1}:</span>
                                        {q.content}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-neutral-500 mb-8">No specific questions found for this topic yet. Try the Flashcards!</p>
                        )}
                        <Button className="bg-emerald-600 hover:bg-emerald-700 mt-6" disabled={quizQuestions.length === 0}>
                            Start Interactive Quiz
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
