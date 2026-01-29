"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Play, TrendingUp, DollarSign, Building2 } from 'lucide-react';
import activityService from '@/services/activityService';
import dynamic from 'next/dynamic';

export default function VisualEconomyPage() {
    const router = useRouter();
    const params = useParams();

    // List of available visual modules
    const MODULES = [
        {
            id: 'circular-flow',
            title: 'Circular Flow of Income',
            description: 'Visualize how money and goods flow between Households and Firms in a 2-Sector economy.',
            icon: DollarSign,
            color: 'bg-green-600',
            action: () => router.push('/student/upsc/economy/visual/circular-flow')
        },
        {
            id: 'demand-supply',
            title: 'Demand & Supply (Coming Soon)',
            description: 'Interactive graph to understand equilibrium price shifts.',
            icon: TrendingUp,
            color: 'bg-blue-600',
            disabled: true
        },
        {
            id: 'banking-system',
            title: 'Banking & RBI (Coming Soon)',
            description: 'How Repo Rage, CRR, and SLR affect money supply.',
            icon: Building2,
            color: 'bg-indigo-600',
            disabled: true
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
            <header className="p-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                <button
                    onClick={() => router.push('/student/upsc/economy?level=1')}
                    className="flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Economy Module
                </button>
                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-bold border border-green-500/30">
                        Visual Economics
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                        Macroeconomics Simulations
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        Complex economic theories made simple through interactive visualizations. Break down models like Circular Flow and Money Multiplier.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MODULES.map((module) => (
                        <div
                            key={module.id}
                            className={`
                                relative overflow-hidden rounded-2xl border transition-all duration-300
                                ${module.disabled
                                    ? 'opacity-60 grayscale cursor-not-allowed border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-slate-900'
                                    : 'cursor-pointer border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/50 hover:shadow-xl hover:-translate-y-1 hover:border-green-500/50'
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
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                    {module.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                    {module.description}
                                </p>

                                <div className={`flex items-center text-xs font-bold uppercase tracking-wider ${module.disabled ? 'text-gray-400' : 'text-green-600 dark:text-green-400'}`}>
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
