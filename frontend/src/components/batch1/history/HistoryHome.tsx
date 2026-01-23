"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { HISTORY_CONFIG } from './data/history-config';
import HistoryTimeline from './HistoryTimeline';
import HistoryMainsPractice from './HistoryMainsPractice';
import HistoryDashboard from './HistoryDashboard';
import { Layout, Clock, PenTool, BookOpen } from 'lucide-react';

export default function HistoryHome() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'planner' | 'timeline' | 'mains'>('dashboard');

    const handleTopicSelect = (topicId: number) => {
        console.log("Timeline selected topic:", topicId);
        setActiveTab('planner');
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-amber-700 dark:text-amber-500 tracking-tight flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                                <Clock className="w-5 h-5" />
                            </div>
                            <span>HISTORY<span className="text-neutral-400 font-light">HUB</span></span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Clock className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <BookOpen className="w-4 h-4" />
                                Planner
                            </button>
                            <button
                                onClick={() => setActiveTab('timeline')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'timeline'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Layout className="w-4 h-4" />
                                Full Timeline
                            </button>
                            <button
                                onClick={() => setActiveTab('mains')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'mains'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <PenTool className="w-4 h-4" />
                                Mains
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {activeTab === 'dashboard' && (
                    <HistoryDashboard />
                )}

                {activeTab === 'planner' && (
                    <SubjectPlanner config={HISTORY_CONFIG} />
                )}

                {activeTab === 'timeline' && (
                    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center py-8">
                            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">Detailed Timeline</h1>
                            <p className="text-neutral-500">Navigate through the ages of Indian History</p>
                        </div>
                        <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={handleTopicSelect} />
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
