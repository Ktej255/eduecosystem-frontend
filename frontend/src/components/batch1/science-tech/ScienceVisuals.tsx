"use client";

import React, { useState } from 'react';
import { Rocket, Dna, Shield, Atom, ArrowRight } from 'lucide-react';
import activityService from '@/services/activityService';
import OrbitSimulation from './visualizations/OrbitSimulation';
import DefenseSystemsViz from './visualizations/DefenseSystemsViz';

export default function ScienceVisuals() {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    const MODULES = [
        {
            id: 'orbits',
            title: 'Orbital Mechanics (Space)',
            description: 'Interactive comparison of LEO, MEO, and GEO satellite orbits.',
            icon: Rocket,
            color: 'bg-indigo-600',
            component: <OrbitSimulation />
        },
        {
            id: 'tech-tree',
            title: 'Emerging Tech Tree',
            description: 'Visualize the evolution of modern technologies from IoT to GenAI.',
            icon: Atom,
            color: 'bg-purple-600',
            component: <OrbitSimulation /> // Reusing or mapping to SciTechDashboard eventually
        },
        {
            id: 'defense',
            title: 'Defense Systems',
            description: 'Interactive simulation of ballistic trajectories and interceptor mechanics.',
            icon: Shield,
            color: 'bg-emerald-600',
            component: <DefenseSystemsViz />
        }
    ];

    const handleModuleSelect = (moduleId: string) => {
        activityService.logActivity('start_visual_module', `Science Viz: ${moduleId}`);
        setSelectedModule(moduleId);
    };

    if (selectedModule === 'orbits') {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button
                    onClick={() => setSelectedModule(null)}
                    className="mb-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2"
                >
                    &larr; Back to Science Hub
                </button>
                <OrbitSimulation />
            </div>
        );
    }

    if (selectedModule === 'defense') {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button
                    onClick={() => setSelectedModule(null)}
                    className="mb-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2"
                >
                    &larr; Back to Science Hub
                </button>
                <DefenseSystemsViz />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    <Atom className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">Science Visual Hub</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Complex scientific concepts made simple through 3D visualization. From sub-atomic particles to interplanetary orbits.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MODULES.map((module) => (
                    <div
                        key={module.id}
                        className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-500/50 transition-all cursor-pointer relative overflow-hidden"
                        onClick={() => module.component ? handleModuleSelect(module.id) : null}
                    >
                        <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                            <module.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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
                                <div className="flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
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
