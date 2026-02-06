"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Brain, PlayCircle, Sparkles, Target, Zap } from "lucide-react";
import { useRouter } from 'next/navigation';
import { SCIENCE_TECH_CONFIG } from './data/science-tech-config';
import { SCI_TECH_SYLLABUS } from './data/scitech-schedule-data';

interface ScienceModuleViewerProps {
    moduleId: string; // e.g., 'space-tech', 'biotech'
}

export default function ScienceModuleViewer({ moduleId }: ScienceModuleViewerProps) {
    const router = useRouter();
    const [filter, setFilter] = useState<'all' | 'high-priority'>('all');

    // 1. Find the Broad Subject from Syllabus Data
    const subject = SCI_TECH_SYLLABUS.find(s => s.id === moduleId);

    if (!subject) {
        return <div className="p-8 text-center text-red-500">Module not found: {moduleId}</div>;
    }

    // 2. Map Broad Subject to Detailed Topics (1-55) from Config
    // This mapping is heuristic based on keywords since categories don't perfectly align perfectly with Modules 1-4
    const getDetailedTopics = () => {
        const allTopics = SCIENCE_TECH_CONFIG.topics as any[];

        // Filter logic
        return allTopics.filter(t => {
            const title = t.title.toLowerCase();
            const module = t.moduleId; // "1", "2", "3", "4"

            if (moduleId === 'space-tech') return module === "3" && (title.includes('space') || title.includes('satellite') || title.includes('launch') || title.includes('mission') || title.includes('isro') || title.includes('navic'));
            if (moduleId === 'defense-tech') return module === "3" && (title.includes('defense') || title.includes('missile') || title.includes('weapon') || title.includes('fighter') || title.includes('drdo'));
            if (moduleId === 'biotech') return module === "1"; // All Biology
            if (moduleId === 'it-comms') return module === "4" && (title.includes('ai') || title.includes('iot') || title.includes('5g') || title.includes('blockchain') || title.includes('crypto') || title.includes('data') || title.includes('cyber'));
            if (moduleId === 'energy') return (module === "2" || module === "4") && (title.includes('nuclear') || title.includes('solar') || title.includes('energy') || title.includes('electric') || title.includes('nano'));
            if (moduleId === 'nano') return title.includes('nano');

            return false;
        });
    };

    const topics = getDetailedTopics();
    const filteredTopics = filter === 'all' ? topics : topics.filter(t => t.priority === 'High');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8">
            {/* Header */}
            <div className="max-w-5xl mx-auto mb-8">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-4 text-slate-500 hover:text-slate-800 dark:text-slate-400"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
                                {subject.category} Module
                            </Badge>
                            <span className="text-sm text-slate-400 font-mono">{topics.length} Topics</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            {subject.title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
                            {subject.description}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 flex">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === 'all' ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                All Topics
                            </button>
                            <button
                                onClick={() => setFilter('high-priority')}
                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === 'high-priority' ? 'bg-rose-100 text-rose-700' : 'text-slate-500 hover:text-rose-600'}`}
                            >
                                High Yield
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4">
                {filteredTopics.map((topic) => (
                    <Card key={topic.id} className="group hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-md border-slate-200 dark:border-slate-800">
                        <CardContent className="p-0 flex flex-col md:flex-row">
                            {/* Status Strip */}
                            <div className={`w-full md:w-2 h-2 md:h-auto ${topic.priority === 'High' ? 'bg-rose-500' : 'bg-indigo-500'}`}></div>

                            <div className="p-6 flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {topic.title}
                                        </h3>
                                        {topic.priority === 'High' && (
                                            <Badge variant="secondary" className="text-[10px] bg-rose-50 text-rose-600 border-rose-100 h-5">HIGH YIELD</Badge>
                                        )}
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">ID: {topic.id}</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Static Focus</span>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{topic.staticFocus}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Key Concepts</span>
                                        <div className="flex flex-wrap gap-1">
                                            {topic.keyConcepts.map((k: string, i: number) => (
                                                <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                    <Button size="sm" variant="outline" className="gap-2 h-8">
                                        <BookOpen className="w-3 h-3" /> Read Notes
                                    </Button>
                                    <Button size="sm" variant="outline" className="gap-2 h-8">
                                        <Zap className="w-3 h-3 text-amber-500" /> Flashcards
                                    </Button>
                                    <Button size="sm" className="gap-2 h-8 bg-indigo-600 hover:bg-indigo-700 text-white ml-auto">
                                        <PlayCircle className="w-3 h-3" /> Practice MCQs
                                    </Button>
                                    {topic.currentAffairsCount > 0 && (
                                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 ml-2">
                                            <Sparkles className="w-3 h-3" />
                                            {topic.currentAffairsCount} Updates
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {filteredTopics.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        No topics found matching your filter.
                    </div>
                )}
            </div>
        </div>
    );
}
