"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Leaf, Network, Sun, CloudRain } from 'lucide-react';
import activityService from '@/services/activityService';

export default function VisualEnvironmentPage() {
    const router = useRouter();

    const MODULES = [
        {
            id: 'food-web',
            title: 'Interactive Food Web',
            description: 'Explore Trophic Levels and the 10% Energy Law in a dynamic ecosystem model.',
            icon: Network,
            color: 'bg-emerald-600',
            action: () => router.push('/student/upsc/environment/visual/food-web')
        },
        {
            id: 'carbon-cycle',
            title: 'Carbon Cycle (Coming Soon)',
            description: 'Visualize how carbon moves between Atmosphere, Biosphere, and Lithosphere.',
            icon: CloudRain,
            color: 'bg-teal-600',
            disabled: true
        },
        {
            id: 'energy-pyramid',
            title: 'Energy Pyramid (Coming Soon)',
            description: 'Thermodynamics in Ecology explained visually.',
            icon: Sun,
            color: 'bg-amber-600',
            disabled: true
        }
    ];

    return (
        <div className="min-h-screen bg-muted text-foreground">
            <header className="p-6 border-b border-border dark:border-white/10 flex items-center justify-between bg-card/50/50 backdrop-blur-md sticky top-0 z-10">
                <button
                    onClick={() => router.push('/student/upsc/environment?level=1')}
                    className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Environment Module
                </button>
                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/30">
                        Visual Ecology
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                        Ecology Simulations
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Deep dive into nature's systems. Interact with Food Webs, Energy Pyramids, and Biogeochemical Cycles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MODULES.map((module) => (
                        <div
                            key={module.id}
                            className={`
                                relative overflow-hidden rounded-2xl border transition-all duration-300
                                ${module.disabled
                                    ? 'opacity-60 grayscale cursor-not-allowed border-border dark:border-white/5 bg-muted'
                                    : 'cursor-pointer border-border dark:border-white/10 bg-card/50 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/50'
                                }
                            `}
                            onClick={() => {
                                if (!module.disabled) {
                                    // Log activity
                                    activityService.logActivity('start_visual_module', `Opened ${module.title} (${module.id})`);

                                    module.action && module.action();
                                }
                            }}
                        >
                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4 shadow-lg text-white`}>
                                    <module.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">
                                    {module.title}
                                </h3>
                                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-6 font-medium">
                                    {module.description}
                                </p>

                                <div className={`flex items-center text-xs font-bold uppercase tracking-wider ${module.disabled ? 'text-muted-foreground' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                    {module.disabled ? 'In Development' : 'Launch Simulation'}
                                    {!module.disabled && <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />}
                                </div>
                            </div>
                            {/* Decorative gradient blob */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full pointer-events-none" style={{ color: module.color.replace('bg-', 'text-') }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
