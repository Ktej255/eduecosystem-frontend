"use client";

import React, { useState } from 'react';
import { Map, Crown, Castle, Eye, ArrowRight } from 'lucide-react';
import activityService from '@/services/activityService';
import MapViewer from './visuals/MapViewer';

export default function HistoryVisuals() {
    const [selectedMap, setSelectedMap] = useState<{ id: string, title: string, description: string } | null>(null);

    const MAP_MODULES = [
        {
            id: 'mauryan-empire',
            title: 'Mauryan Empire (250 BCE)',
            description: 'Extent of Ashoka\'s reign, major rock edicts, and provincial capitals.',
            icon: Crown,
            color: 'bg-amber-600',
            difficulty: 'Intermediate'
        },
        {
            id: 'indus-valley',
            title: 'Indus Valley Civilization',
            description: 'Major sites (Harappa, Mohenjo-Daro), river courses, and trade routes.',
            icon: Castle, // Using Castle as proxy for Civilization/Sites
            color: 'bg-stone-600',
            difficulty: 'Beginner'
        },
        {
            id: 'gupta-empire',
            title: 'Gupta Empire (400 CE)',
            description: 'The Golden Age: Political extent, art centers, and universities.',
            icon: Crown,
            color: 'bg-yellow-600',
            difficulty: 'Advanced'
        }
    ];

    const handleOpenMap = (module: typeof MAP_MODULES[0]) => {
        // Log activity
        activityService.logActivity('start_visual_module', `Opened Map: ${module.title} (${module.id})`);
        setSelectedMap({
            id: module.id,
            title: module.title,
            description: module.description
        });
    };

    if (selectedMap) {
        return (
            <MapViewer
                mapId={selectedMap.id}
                title={selectedMap.title}
                description={selectedMap.description}
                onClose={() => setSelectedMap(null)}
            />
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4">
                    <Map className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-2">Historical Maps</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Visualize the rise and fall of empires. Interactive maps with layers for political boundaries, trade routes, and cultural sites.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MAP_MODULES.map((module) => (
                    <div
                        key={module.id}
                        className="group bg-card dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:border-amber-500/50 transition-all cursor-pointer relative overflow-hidden"
                        onClick={() => handleOpenMap(module)}
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
                                {module.difficulty}
                            </span>
                            <div className="flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                View Map <ArrowRight className="w-3 h-3 ml-1" />
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-6 -right-6 text-neutral-100 dark:text-neutral-800 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                            <module.icon className="w-32 h-32 transform rotate-12" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
