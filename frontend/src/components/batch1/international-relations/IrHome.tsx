"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { IR_CONFIG } from './data/ir-config';
import { irFlashcards as IR_FLASHCARDS } from './data/flashcards/ir-flashcards';
import GenericFlashcardSession from '../framework/GenericFlashcardSession';
import IrDashboard from './IrDashboard';
import { Layout, Zap, BarChart2 } from 'lucide-react';

export default function IrHome() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'planner' | 'flashcards'>('dashboard');

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-indigo-700 dark:text-indigo-500 tracking-tight">
                            GLOBAL<span className="text-neutral-400 font-light">HUB</span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <BarChart2 className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Layout className="w-4 h-4" />
                                Planner
                            </button>
                            <button
                                onClick={() => setActiveTab('flashcards')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'flashcards'
                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
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
                {activeTab === 'dashboard' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <IrDashboard />
                    </div>
                )}

                {activeTab === 'planner' && (
                    <SubjectPlanner config={IR_CONFIG} />
                )}

                {activeTab === 'flashcards' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
                        <div className="max-w-4xl mx-auto mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-2">IR Flashcards</h2>
                            <p className="text-gray-500">Foreign Policy, International Organizations, and key bilateral relations.</p>
                        </div>
                        <GenericFlashcardSession
                            flashcards={IR_FLASHCARDS.map(fc => ({
                                ...fc,
                                category: 'concept' as const,
                                source: fc.topic
                            }))}
                            title="International Relations"
                            onClose={() => setActiveTab('planner')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

