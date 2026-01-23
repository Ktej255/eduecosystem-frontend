"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { ENVIRONMENT_CONFIG } from './data/environment-config';
import { environmentFlashcards as ENVIRONMENT_FLASHCARDS } from './data/flashcards/environment-flashcards';
import GenericFlashcardSession from '../framework/GenericFlashcardSession';
import EnvironmentDashboard from './EnvironmentDashboard';
import { Layout, Zap, Sprout, BookOpen } from 'lucide-react';

export default function EnvironmentHome() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'planner' | 'flashcards'>('dashboard');

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-emerald-700 dark:text-emerald-500 tracking-tight flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                                <Sprout className="w-5 h-5" />
                            </div>
                            <span>ENVIRON<span className="text-neutral-400 font-light">HUB</span></span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Sprout className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <BookOpen className="w-4 h-4" />
                                Planner
                            </button>
                            <button
                                onClick={() => setActiveTab('flashcards')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'flashcards'
                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
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
                    <EnvironmentDashboard />
                )}

                {activeTab === 'planner' && (
                    <SubjectPlanner config={ENVIRONMENT_CONFIG} />
                )}

                {activeTab === 'flashcards' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
                        <div className="max-w-4xl mx-auto mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-2">Environment Flashcards</h2>
                            <p className="text-gray-500">Key concepts in Ecology, Biodiversity, and Climate Change.</p>
                        </div>
                        <GenericFlashcardSession
                            flashcards={ENVIRONMENT_FLASHCARDS.map(fc => ({
                                ...fc,
                                category: 'concept' as const,
                                source: fc.topic
                            }))}
                            title="Environment"
                            onClose={() => setActiveTab('planner')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
