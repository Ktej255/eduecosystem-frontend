"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { HISTORY_CONFIG } from './data/history-config';
import HistoryTimeline from './HistoryTimeline';
import HistoryMainsPractice from './HistoryMainsPractice';
import { Layout, Clock, PenTool } from 'lucide-react';

export default function HistoryHome() {
    const [activeTab, setActiveTab] = useState<'planner' | 'timeline' | 'mains'>('planner');

    // Handler to switch tabs, usually passed to children if one needs to link to another
    const handleTopicSelect = (topicId: number) => {
        // Could open planner and scroll to topic, but for now just console log
        console.log("Timeline selected topic:", topicId);
        setActiveTab('planner');
        // Ideally pass a selectedTopic prop to SubjectPlanner to auto-expand
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Custom Tab Navigation Header - Overrides SubjectPlanner's internal nav conceptually,
                but SubjectPlanner has its own 'view' state. We will wrap SubjectPlanner to control it or
                just let it handle its internal views (Topics/Schedule) and use this outer tab for major modules.
            */}

            {/* We render SubjectPlanner ONLY when activeTab is planner.
                However, SubjectPlanner has a Hero section inside it. 
                If we want a shared Hero, we should extract it. 
                For now, to save refactoring time, I will render SubjectPlanner fully when in 'planner' mode,
                and render my own wrapper for 'timeline' and 'mains' mode, but this might duplicate the Hero 
                or lose the Hero in other tabs.
                
                Better Approach: Use SubjectPlanner as the base, but inject the other tabs?
                SubjectPlanner is generic.
                
                Let's make a wrapper layout here with a simple top nav bar for the "Module Mode".
            */}

            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-amber-700 dark:text-amber-500 tracking-tight">
                            HISTORY<span className="text-neutral-400 font-light">HUB</span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Layout className="w-4 h-4" />
                                Planner & Content
                            </button>
                            <button
                                onClick={() => setActiveTab('timeline')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'timeline'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Clock className="w-4 h-4" />
                                Visual Timeline
                            </button>
                            <button
                                onClick={() => setActiveTab('mains')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'mains'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <PenTool className="w-4 h-4" />
                                Mains Practice
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {activeTab === 'planner' && (
                    // Embedded=true to avoid double Hero if we decided to make a custom Hero, 
                    // but SubjectPlanner's Hero is nice. Let's keep it but maybe we need to adjust padding.
                    // Actually, let's keep SubjectPlanner as is (with Hero).
                    <SubjectPlanner config={HISTORY_CONFIG} />
                )}

                {activeTab === 'timeline' && (
                    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center py-8">
                            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">Historical Timeline</h1>
                            <p className="text-neutral-500">Navigate through the ages of Indian History</p>
                        </div>
                        <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={handleTopicSelect} />

                        {/* Placeholder for Detail View when a node is clicked? 
                            For now, just the timeline is the main feature.
                        */}
                    </div>
                )}

                {activeTab === 'mains' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HistoryMainsPractice config={HISTORY_CONFIG} />
                    </div>
                )}
            </div>
        </div>
    );
}
