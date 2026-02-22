"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Play, Globe, Mountain, Waves, Wind, Clock, CloudRain } from 'lucide-react';
import dynamic from 'next/dynamic';
import { FLUVIAL_LANDFORMS_CONTENT, GLACIAL_LANDFORMS_CONTENT, AEOLIAN_LANDFORMS_CONTENT, COASTAL_KARST_CONTENT } from '@/components/batch1/geography/content/landforms-data';
import { ORIGIN_OF_EARTH_CONTENT, GEO_TIME_SCALE_CONTENT } from '@/components/batch1/geography/content/earth-evolution-data';
import { ENDOGENIC_PROCESSES_CONTENT, EXOGENIC_PROCESSES_CONTENT } from '@/components/batch1/geography/content/geomorphic-processes-data';
import activityService from '@/services/activityService';
import LessonView from '@/components/batch1/geography/components/LessonView';

// Dynamic import for the heavy 3D globe visualization
const GeographyGlobe = dynamic(
    () => import('@/components/batch1/geography/3d/GeographyGlobe'),
    { ssr: false, loading: () => <div className="w-full h-96 flex items-center justify-center text-white">Loading Earth Engine...</div> }
);

export default function VisualGeographyPage() {
    const router = useRouter();
    const params = useParams();
    const moduleId = params.moduleId as string;

    const [activeLesson, setActiveLesson] = useState<any | null>(null);

    // If a specific lesson is active
    if (activeLesson) {
        return <LessonView content={activeLesson} onClose={() => setActiveLesson(null)} />;
    }

    // List of available visual modules
    const MODULES = [
        {
            id: 'monsoon',
            title: 'Indian Monsoon System',
            description: 'Visualize seasonal wind reversal, ITCZ shifts, and pressure zones.',
            icon: CloudRain, // Need to import CloudRain
            color: 'bg-indigo-600',
            action: () => router.push('/student/upsc/geography/visual/monsoon'),
            isSimulation: true
        },
        {
            id: 'tectonics',
            title: 'Plate Tectonics 3D',
            description: 'Interactive simulation of divergent, convergent, and transform boundaries.',
            icon: Globe,
            color: 'bg-blue-600',
            action: () => router.push('/student/upsc/geography/visual/plate-tectonics'),
            isSimulation: true
        },
        {
            id: 'ganga-river',
            title: 'Ganga River System',
            description: 'Trace the path from Gangotri to Bay of Bengal with all 3D tributaries.',
            icon: Waves,
            color: 'bg-cyan-500',
            action: () => router.push('/student/upsc/geography/visual/ganga-river'),
            isSimulation: true
        },
        {
            id: 'fluvial',
            title: 'Fluvial Landforms',
            description: 'River systems: Youth, Mature, and Old stages visualized.',
            icon: Waves,
            color: 'bg-cyan-600',
            content: FLUVIAL_LANDFORMS_CONTENT
        },
        {
            id: 'glacial',
            title: 'Glacial Landforms',
            description: 'U-shaped valleys, moraines, and cirques.',
            icon: Mountain,
            color: 'bg-indigo-600',
            content: GLACIAL_LANDFORMS_CONTENT
        },
        {
            id: 'aeolian',
            title: 'Aeolian (Desert) Landforms',
            description: 'Wind ecosystem: Dunes, Loess, and Mushroom rocks.',
            icon: Wind,
            color: 'bg-amber-600',
            content: AEOLIAN_LANDFORMS_CONTENT
        },
        {
            id: 'origin-earth',
            title: 'Origin of Earth',
            description: 'Nebular Hypothesis and the formation of Lithosphere & Atmosphere.',
            icon: Globe,
            color: 'bg-emerald-600',
            content: ORIGIN_OF_EARTH_CONTENT
        },
        {
            id: 'geo-time',
            title: 'Geological Time Scale',
            description: 'Eons, Eras, and Periods: Understanding Deep Time.',
            icon: Clock,
            color: 'bg-amber-600',
            content: GEO_TIME_SCALE_CONTENT
        },
        {
            id: 'endogenic',
            title: 'Endogenic Processes',
            description: 'Forces from within: Volcanism, Earthquakes & Diastrophism.',
            icon: Mountain, // Reusing Mountain icon for now
            color: 'bg-red-600',
            content: ENDOGENIC_PROCESSES_CONTENT
        },
        {
            id: 'exogenic',
            title: 'Exogenic Processes',
            description: 'Surface forces: Weathering, Mass Movements & Erosion.',
            icon: Wind, // Reusing Wind icon
            color: 'bg-stone-500',
            content: EXOGENIC_PROCESSES_CONTENT
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <header className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                <button
                    onClick={() => router.push('/student/upsc/geography?level=1')} // Go back to store/level view
                    className="flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Geography Module
                </button>
                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                        Visual Learning Mode
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Explore Earth in 3D
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Go beyond static textbooks. Interact with tectonic plates, visualize river courses, and explore landform formation in our high-fidelity simulation engine.
                        </p>
                        <button className="bg-card text-foreground px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
                            <Play className="w-5 h-5 fill-current" />
                            Start Full Globe Tour
                        </button>
                    </div>
                    <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/20 bg-black">
                        {/* Preview Globe */}
                        <div className="absolute inset-0">
                            <GeographyGlobe
                                activeModuleId="geomorphology"
                                onSelectTopic={() => { }}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-indigo-400" />
                    Available Visual Modules
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {MODULES.map((module) => (
                        <div
                            key={module.id}
                            className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/50 transition-all cursor-pointer group hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                            onClick={() => {
                                // Log activity
                                activityService.logActivity('start_visual_module', `Opened ${module.title} (${module.id})`);

                                if (module.isSimulation) {
                                    module.action?.();
                                } else {
                                    setActiveLesson(module.content);
                                }
                            }}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                <module.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">{module.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                {module.description}
                            </p>
                            <div className="flex items-center text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                {module.isSimulation ? 'Launch Simulation' : 'Start Lesson'} <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
