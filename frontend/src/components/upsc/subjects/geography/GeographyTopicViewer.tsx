"use client";

import React from 'react';
import { GeographyTopic } from './data/geography-types';
import { ArrowLeft, BookOpen, BrainCircuit, CheckCircle, Globe, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getContentForTopic } from './content/content-registry';
import { getVisualization } from '@/data/upsc-visualization-registry';
import GenericFlashcardSession from '../../common/framework/GenericFlashcardSession';
import { geographyFlashcards } from './data/flashcards/geography-flashcards';
import { useRouter } from 'next/navigation';

interface GeographyTopicViewerProps {
    topic: GeographyTopic;
    topicId: number;
}

export default function GeographyTopicViewer({ topic, topicId }: GeographyTopicViewerProps) {
    const router = useRouter();
    const [activeTab, setActiveTab] = React.useState<'overview' | 'flashcards' | 'quiz'>('overview');

    const content = topic.contentId ? getContentForTopic(topic.contentId) : null;
    const VisualizationComponent = topic.visualId ? getVisualization(topic.visualId, 0) : null;

    const relevantFlashcards = geographyFlashcards.filter(fc => 
        fc.topic?.toLowerCase().includes(topic.title.toLowerCase())
    );
    const displayFlashcards = relevantFlashcards.length > 0 ? relevantFlashcards : geographyFlashcards.slice(0, 5);

    return (
        <div className="flex flex-col min-h-screen bg-card">
            {/* Header */}
            <div className="h-64 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-950 relative p-8 flex flex-col justify-end text-white">
                <Button 
                    variant="ghost" 
                    className="absolute top-4 left-4 text-white/70 hover:text-white bg-white/10"
                    onClick={() => router.push('/student/upsc/geography')}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>
                
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
                    <Globe className="w-4 h-4" /> {topic.branch}
                </div>
                <h1 className="text-4xl font-extrabold mb-2 tracking-tight">{topic.title}</h1>
                <p className="text-white/70 max-w-2xl text-lg font-medium leading-relaxed">
                    Module {topic.blockId} • {topic.referenceChapter || "Standard Framework"}
                </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border bg-muted/30 sticky top-0 z-10 backdrop-blur-md px-6">
                <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-8 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground'}`}
                >
                    <BookOpen className="w-4 h-4" /> Concepts
                </button>
                <button 
                    onClick={() => setActiveTab('flashcards')}
                    className={`px-8 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'flashcards' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground'}`}
                >
                    <BrainCircuit className="w-4 h-4" /> Flashcards
                </button>
                <button 
                    onClick={() => setActiveTab('quiz')}
                    className={`px-8 py-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'quiz' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground'}`}
                >
                    <CheckCircle className="w-4 h-4" /> Assessment
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 overflow-y-auto">
                {activeTab === 'overview' && (
                    <div className="max-w-5xl mx-auto space-y-12">
                        {VisualizationComponent && (
                            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-black/5 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-4 px-2 tracking-widest uppercase">
                                    <Sparkles className="w-3 h-3 text-emerald-500" /> Interactive Simulation
                                </div>
                                <VisualizationComponent />
                            </div>
                        )}

                        {!content ? (
                            <div className="text-center py-24 bg-muted/20 rounded-3xl border border-dashed border-border group hover:border-emerald-300 transition-all">
                                <Sparkles className="w-12 h-12 text-muted-foreground mb-4 mx-auto opacity-50 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-foreground">Drafting Rich Content</h3>
                                <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                                    Our content engineers are currently polishing the detailed notes for this topic. 
                                    Try the Flashcards or Assessment in the mean time!
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-10">
                                {content.sections.map((section) => (
                                    <section key={section.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <h2 className="text-2xl font-black text-foreground mb-8 border-l-[6px] border-emerald-500 pl-6 tracking-tight">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-8 pl-6">
                                            {section.content.map((block) => (
                                                <div key={block.id} className="text-lg leading-relaxed text-muted-foreground/90 font-medium">
                                                    {block.type === 'text' && (
                                                        <div className="whitespace-pre-line prose lg:prose-xl dark:prose-invert max-w-none">
                                                            {block.content}
                                                        </div>
                                                    )}
                                                    {block.type === 'callout' && (
                                                        <div className="bg-emerald-50/50 border-l-4 border-emerald-500 p-6 rounded-r-2xl italic shadow-sm transform hover:scale-[1.01] transition-transform">
                                                            {block.content}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
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
                            title={topic.title}
                            onClose={() => setActiveTab('overview')}
                        />
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div className="max-w-3xl mx-auto text-center py-32 space-y-8 bg-muted/10 rounded-3xl border border-border mt-8">
                         <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle className="w-12 h-12" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black mb-3 italic">Diagnostic Assessment</h2>
                            <p className="text-muted-foreground text-lg font-medium max-w-sm mx-auto leading-tight">
                                Ready to validate your mastery of <strong>{topic.title}</strong>? 
                            </p>
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-12 py-7 text-xl rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-all">
                            Start Assessment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
