"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { SCIENCE_TECH_CONFIG } from './data/science-tech-config';
import SciTechDashboard from './SciTechDashboard';
import { Layout, Microscope, Rocket, BookOpen } from 'lucide-react';

export default function ScienceTechHome() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'planner'>('dashboard');

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-indigo-700 dark:text-indigo-500 tracking-tight flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                                <Microscope className="w-5 h-5" />
                            </div>
                            <span>SCITECH<span className="text-neutral-400 font-light">HUB</span></span>
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <Rocket className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('planner')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'planner'
                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
                                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <BookOpen className="w-4 h-4" />
                                Planner
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {activeTab === 'dashboard' && (
                    <SciTechDashboard />
                )}

                {activeTab === 'planner' && (
                    <SubjectPlanner config={SCIENCE_TECH_CONFIG} />
                )}
            </div>
        </div>
    );
}
