"use client";

import React, { useState } from 'react';
import { Landmark, Scroll, Scale, ArrowRight, Gavel, BookOpen } from 'lucide-react';
import activityService from '@/services/activityService';
import ParliamentViz from './visualizations/ParliamentViz';
import PreambleDecoder from './visualizations/PreambleDecoder';
import JudicialHierarchy from './visualizations/JudicialHierarchy';
import EthicsSimulator from './visualizations/EthicsSimulator';
import ThinkersMatrix from './visualizations/ThinkersMatrix';

export default function PolityVisuals() {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    const MODULES = [
        {
            id: 'parliament',
            title: 'Parliament House',
            description: 'Interactive seating plan of Lok Sabha. Understand the Treasury, Opposition, and the Well.',
            icon: Landmark,
            color: 'bg-amber-600',
            component: <ParliamentViz />
        },
        {
            id: 'preamble',
            title: 'Preamble Decoder',
            description: 'Deconstruct the keywords: Sovereign, Socialist, Secular, Democratic, Republic.',
            icon: Scroll,
            color: 'bg-rose-600',
            component: <PreambleDecoder />
        },
        {
            id: 'judiciary',
            title: 'Judicial Structure',
            description: 'Hierarchy of Courts: SC, HC, and Subordinate Courts visualizer.',
            icon: Gavel,
            color: 'bg-indigo-600',
            component: <JudicialHierarchy />
        },
        {
            id: 'ethics',
            title: 'Ethics Case Study',
            description: 'Interactive decision-making tree for GS4 ethical dilemmas and case studies.',
            icon: Scale,
            color: 'bg-emerald-600',
            component: <EthicsSimulator />
        },
        {
            id: 'thinkers',
            title: 'Values & Thinkers',
            description: 'Matrix of foundational ethical values and administrative thinkers.',
            icon: BookOpen,
            color: 'bg-blue-600',
            component: <ThinkersMatrix />
        }
    ];

    const handleModuleSelect = (moduleId: string) => {
        activityService.logActivity('start_visual_module', `Polity Viz: ${moduleId}`);
        setSelectedModule(moduleId);
    };

    if (selectedModule) {
        const activeModule = MODULES.find(m => m.id === selectedModule);
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button
                    onClick={() => setSelectedModule(null)}
                    className="mb-4 text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-white flex items-center gap-2"
                >
                    &larr; Back to Governance Hub
                </button>
                {activeModule?.component}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4">
                    <Scale className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-2">Visual Polity Hub</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Visualize the framework of Indian Democracy. From the Preamble to the Parliament floor.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MODULES.map((module) => (
                    <div
                        key={module.id}
                        className="group bg-card dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:border-amber-500/50 transition-all cursor-pointer relative overflow-hidden"
                        onClick={() => module.component ? handleModuleSelect(module.id) : null}
                    >
                        <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                            <module.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-neutral-900 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {module.title}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                            {module.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xs font-bold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                {module.component ? 'Interactive' : 'Planned'}
                            </span>
                            {module.component && (
                                <div className="flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                    Launch <ArrowRight className="w-3 h-3 ml-1" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
