"use client";

import React, { useState } from 'react';
import HistoryMainsPractice from './HistoryMainsPractice';
import HistoryDashboard from './HistoryDashboard';
import { Layout, PenTool, Sparkles, Flag, Scroll, Landmark, Clock } from 'lucide-react';
import HistorySectionPlanner from './HistorySectionPlanner';
import { HistorySection } from './data/history-schedule-registry';
import HistoryRevisionDashboard from './revision/HistoryRevisionDashboard';
import { HISTORY_CONFIG } from './data/history-config';

import { useSearchParams } from 'next/navigation';

export default function HistoryHome({ embedded = false }: { embedded?: boolean }) {
    return (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading History Module...</div>}>
            <HistoryHomeContent embedded={embedded} />
        </React.Suspense>
    );
}

function HistoryHomeContent({ embedded = false }: { embedded?: boolean }) {
    const searchParams = useSearchParams();
    const initialTab = (searchParams.get('tab') as any) || 'dashboard';
    const initialSection = (searchParams.get('section') as HistorySection) || 'modern';

    const [activeTab, setActiveTab] = useState<'dashboard' | 'overview' | 'mains' | 'revision'>(initialTab);
    const [selectedSection, setSelectedSection] = useState<HistorySection>(initialSection);

    const sections = [
        { id: 'modern', name: 'Modern', icon: Flag, color: 'text-indigo-500' },
        { id: 'medieval', name: 'Medieval', icon: Scroll, color: 'text-purple-500' },
        { id: 'ancient', name: 'Ancient', icon: Landmark, color: 'text-amber-500' },
        { id: 'art_culture', name: 'Art&Culture', icon: Sparkles, color: 'text-emerald-500' },
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            {!embedded && (
                <div className="bg-card border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
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
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    Study Dashboard
                                </button>
                                <button
                                    onClick={() => setActiveTab('revision')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border-2 ${activeTab === 'revision'
                                        ? 'bg-amber-600 text-white border-amber-700 shadow-lg'
                                        : 'text-amber-700 border-amber-200 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                                        }`}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Revision Hub
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <Layout className="w-4 h-4" />
                                    Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('mains')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'mains'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <PenTool className="w-4 h-4" />
                                    Mains
                                </button>
                                <button
                                    onClick={() => window.location.href = '/student/batch1/current-affairs?subject=History'}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all items-center gap-2 flex text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20`}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Current Affairs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {/* Sub-Nav for Study Dashboard & Revision Hub */}
            {
                (activeTab === 'dashboard' || activeTab === 'revision') && (
                    <div className="bg-card/50 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-8">
                            {sections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => setSelectedSection(sec.id as HistorySection)}
                                    className={`h-full px-2 text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border-b-2
                                    ${selectedSection === sec.id
                                            ? `border-indigo-600 ${sec.color} scale-110`
                                            : 'border-transparent text-muted-foreground hover:text-muted-foreground'
                                        }`}
                                >
                                    <sec.icon className="w-3.5 h-3.5" />
                                    {sec.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            }

            <div className="w-full">
                {activeTab === 'dashboard' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HistorySectionPlanner section={selectedSection} />
                    </div>
                )}

                {activeTab === 'overview' && (
                    <HistoryDashboard />
                )}

                {activeTab === 'mains' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HistoryMainsPractice config={HISTORY_CONFIG} />
                    </div>
                )}

                {activeTab === 'revision' && (
                    <HistoryRevisionDashboard section={selectedSection} />
                )}
            </div>
        </div >
    );
}
