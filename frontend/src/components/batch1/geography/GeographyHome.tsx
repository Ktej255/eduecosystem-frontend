"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { GEOGRAPHY_CONFIG } from './data/geography-config';
import MainsPractice from '../history/HistoryMainsPractice'; // Reusing History component for now
import { Layout, PenTool } from 'lucide-react';

export default function GeographyHome() {
    const [activeTab, setActiveTab] = useState<'planner' | 'mains'>('planner');

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-emerald-700 dark:text-emerald-500 tracking-tight">
                            GEOGRAPHY<span className="text-neutral-400 font-light">HUB</span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Layout className="w-4 h-4" />
                                Planner & Content
                            </button>
                            <button
                                onClick={() => setActiveTab('mains')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'mains'
                                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
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
                    <SubjectPlanner config={GEOGRAPHY_CONFIG} />
                )}

                {activeTab === 'mains' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <MainsPractice config={GEOGRAPHY_CONFIG} />
                    </div>
                )}
            </div>
        </div>
    );
}

