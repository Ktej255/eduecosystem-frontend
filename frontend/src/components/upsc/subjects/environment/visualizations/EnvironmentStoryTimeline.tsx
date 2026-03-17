"use client";

import React, { useState } from 'react';
import { ENVIRONMENT_STORY_EVENTS, StoryEvent } from '../data/environment-config';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, ChevronRight, History, Calendar, Info } from 'lucide-react';

export default function EnvironmentStoryTimeline() {
    const [activeThread, setActiveThread] = useState<string | null>(null);
    const threads: StoryEvent['thread'][] = ['Governance', 'Biodiversity', 'Finance', 'Ozone', 'Pollution'];

    const filteredEvents = activeThread 
        ? ENVIRONMENT_STORY_EVENTS.filter(e => e.thread === activeThread)
        : ENVIRONMENT_STORY_EVENTS;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Thread Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-950/30 rounded-xl">
                        <Filter className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-stone-900 dark:text-stone-100">Story Threads</h3>
                        <p className="text-xs text-stone-500">Filter the timeline by thematic journey</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    <Button 
                        variant={activeThread === null ? "default" : "outline"}
                        onClick={() => setActiveThread(null)}
                        className="rounded-full text-xs h-8 bg-stone-800 hover:bg-stone-700"
                    >
                        All Eras
                    </Button>
                    {threads.map(thread => (
                        <Button
                            key={thread}
                            variant={activeThread === thread ? "default" : "outline"}
                            onClick={() => setActiveThread(thread)}
                            className={`rounded-full text-xs h-8 transition-all ${
                                activeThread === thread 
                                ? getThreadColor(thread) 
                                : "hover:border-stone-400"
                            }`}
                        >
                            {thread}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Timeline View */}
            <div className="relative border-l-4 border-stone-200 dark:border-stone-800 ml-6 md:ml-12 space-y-12 pb-12">
                {filteredEvents.map((event, idx) => (
                    <div key={event.id} className="relative pl-12 md:pl-16 group">
                        {/* Node Decoration */}
                        <div className={`absolute -left-[14px] top-4 w-6 h-6 rounded-xl rotate-45 border-4 border-white dark:border-stone-950 shadow-md group-hover:scale-125 group-hover:rotate-90 transition-all duration-500 ${getThreadBg(event.thread)}`} />
                        
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                            {/* Year Marker */}
                            <div className="shrink-0 pt-2">
                                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${getThreadColorLight(event.thread)}`}>
                                    <Calendar className="w-3 h-3" />
                                    {event.year}
                                </span>
                            </div>

                            {/* Event Content */}
                            <Card className="flex-1 hover:border-stone-300 dark:hover:border-stone-700 transition-all hover:shadow-lg hover:-translate-y-1 bg-white/50 dark:bg-stone-900/30 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-stone-900 duration-500">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-serif italic text-xl md:text-2xl text-stone-800 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
                                            {event.title}
                                        </h4>
                                        <Badge variant="secondary" className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {event.thread}
                                        </Badge>
                                    </div>
                                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base">
                                        {event.description}
                                    </p>
                                    
                                    <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                                        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                                            <Info className="w-3 h-3" />
                                            Module {event.moduleId} Reference
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-xs font-bold text-stone-700 hover:text-stone-900 gap-2">
                                            View Details <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}

                {/* Future Marker */}
                {activeThread === null && (
                    <div className="relative pl-12 md:pl-16 pt-8 italic text-stone-400 text-sm">
                        <div className="absolute -left-[6px] top-10 w-2.5 h-2.5 rounded-full bg-stone-200" />
                        The story continues... towards UPSC 2026 and beyond.
                    </div>
                )}
            </div>
        </div>
    );
}

function getThreadColor(thread: StoryEvent['thread']) {
    switch (thread) {
        case 'Finance': return 'bg-emerald-600 text-white';
        case 'Biodiversity': return 'bg-green-600 text-white';
        case 'Ozone': return 'bg-blue-600 text-white';
        case 'Pollution': return 'bg-red-600 text-white';
        case 'Governance': return 'bg-stone-600 text-white';
    }
}

function getThreadBg(thread: StoryEvent['thread']) {
    switch (thread) {
        case 'Finance': return 'bg-emerald-500';
        case 'Biodiversity': return 'bg-green-500';
        case 'Ozone': return 'bg-blue-500';
        case 'Pollution': return 'bg-red-500';
        case 'Governance': return 'bg-stone-500';
    }
}

function getThreadColorLight(thread: StoryEvent['thread']) {
    switch (thread) {
        case 'Finance': return 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900';
        case 'Biodiversity': return 'bg-green-50 text-green-700 border border-green-100 dark:bg-green-950/20 dark:text-green-400 dark:border-green-900';
        case 'Ozone': return 'bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900';
        case 'Pollution': return 'bg-red-50 text-red-700 border border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900';
        case 'Governance': return 'bg-stone-100 text-stone-700 border border-stone-200 dark:bg-stone-800/50 dark:text-stone-300 dark:border-stone-700';
    }
}
