"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { ECONOMY_CONFIG } from './data/economy-config';
import { economyFlashcards as ECONOMY_FLASHCARDS } from './data/flashcards/economy-flashcards';
import GenericFlashcardSession from '../framework/GenericFlashcardSession';
import { Layout, Zap } from 'lucide-react';

export default function EconomyHome() {
    const [activeTab, setActiveTab] = useState<'planner' | 'flashcards'>('planner');

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-blue-700 dark:text-blue-500 tracking-tight">
                            ECONOMY<span className="text-neutral-400 font-light">HUB</span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Layout className="w-4 h-4" />
                                Planner & Content
                            </button>
                            <button
                                onClick={() => setActiveTab('flashcards')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'flashcards'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Zap className="w-4 h-4" />
                                Flashcards
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {activeTab === 'planner' && (
                    <SubjectPlanner config={ECONOMY_CONFIG} />
                )}

                {activeTab === 'flashcards' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
                        <div className="max-w-4xl mx-auto mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-2">Economy Flashcards</h2>
                            <p className="text-gray-500">Master key economic concepts and terms.</p>
                        </div>
                        <GenericFlashcardSession
                            flashcards={ECONOMY_FLASHCARDS.map(fc => ({
                                ...fc,
                                category: 'concept' as const,
                                source: fc.topic
                            }))}
                            title="Economy"
                            onClose={() => setActiveTab('planner')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
