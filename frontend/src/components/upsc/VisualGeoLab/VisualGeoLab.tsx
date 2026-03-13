"use client";

import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Boxes, Wind, Waves, Flame, Mountain, Layers, CloudRain, Clock, ChevronRight, Maximize2, Info, LayoutGrid } from 'lucide-react';

// Lazy load the 12 simulations
const PlateTectonicsViz = dynamic(() => import('../subjects/geography/3d/simulations/PlateTectonicsViz'), { ssr: false });
const AtmosphereViz = dynamic(() => import('../subjects/geography/3d/simulations/AtmosphereViz'), { ssr: false });
const MonsoonViz = dynamic(() => import('../subjects/geography/3d/simulations/MonsoonViz'), { ssr: false });
const VolcanoViz = dynamic(() => import('../subjects/geography/3d/simulations/VolcanoViz'), { ssr: false });
const InteriorEarthViz = dynamic(() => import('../subjects/geography/3d/simulations/InteriorEarthViz'), { ssr: false });
const OceanCurrentsViz = dynamic(() => import('../subjects/geography/3d/simulations/OceanCurrentsViz'), { ssr: false });
const OceanFloorViz = dynamic(() => import('../subjects/geography/3d/simulations/OceanFloorViz'), { ssr: false });
const GeologicalTimeScaleViz = dynamic(() => import('../subjects/geography/3d/simulations/GeologicalTimeScaleViz'), { ssr: false });
const RiverSystemViz = dynamic(() => import('../subjects/geography/3d/simulations/RiverSystemViz'), { ssr: false });
const GlacialViz = dynamic(() => import('../subjects/geography/3d/simulations/GlacialViz'), { ssr: false });
const ClimateClassificationViz = dynamic(() => import('../subjects/geography/3d/simulations/ClimateClassificationViz'), { ssr: false });

const LABS = [
    { id: 'tectonics', name: 'Plate Tectonics', icon: Boxes, component: PlateTectonicsViz, category: 'Geomorphology', description: 'Interactive 3D model of Earth\'s tectonic plates and boundaries.' },
    { id: 'monsoon', name: 'Indian Monsoon', icon: Wind, component: MonsoonViz, category: 'Climatology', description: 'Seasonal wind reversal and ITCZ shift visualization.' },
    { id: 'volcano', name: 'Volcanism', icon: Flame, component: VolcanoViz, category: 'Geomorphology', description: 'Internal structure and eruption mechanics of various volcanoes.' },
    { id: 'interior', name: 'Interior Earth', icon: Layers, component: InteriorEarthViz, category: 'Geomorphology', description: 'Cross-section of Earth\'s crust, mantle, and core layers.' },
    { id: 'atmosphere', name: 'Atmosphere Layers', icon: CloudRain, component: AtmosphereViz, category: 'Climatology', description: 'Vertical profile of the atmosphere from Troposphere to Exosphere.' },
    { id: 'currents', name: 'Ocean Currents', icon: Waves, component: OceanCurrentsViz, category: 'Oceanography', description: 'Global thermohaline circulation and surface current patterns.' },
    { id: 'river', name: 'River Systems', icon: Mountain, component: RiverSystemViz, category: 'Physical Geo', description: 'Evolution of river channels and drainage pattern types.' },
    { id: 'floor', name: 'Ocean Floor', icon: LayoutGrid, component: OceanFloorViz, category: 'Oceanography', description: 'Topography of the sea floor: Ridges, Trenches, and Abyssal plains.' }
];

export default function VisualGeoLab() {
    const [selectedLab, setSelectedLab] = useState(LABS[0]);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const CurrentLabComponent = selectedLab.component;

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[700px] animate-in fade-in duration-700">
            {/* Lab Menu Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border shadow-sm mb-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                            <Globe className="w-5 h-5 animate-spin-slow" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground font-serif">Visual Geo Lab</h3>
                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-none">Immersive simulations</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[500px]">
                    {LABS.map((lab) => (
                        <motion.button
                            key={lab.id}
                            onClick={() => setSelectedLab(lab)}
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group
                                ${selectedLab.id === lab.id 
                                    ? 'bg-indigo-600 border-indigo-600 shadow-md text-white' 
                                    : 'bg-card dark:bg-[#111] border-border hover:border-indigo-500/50'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                                ${selectedLab.id === lab.id ? 'bg-white/20' : 'bg-muted group-hover:bg-indigo-500/10 text-muted-foreground group-hover:text-indigo-600'}`}>
                                <lab.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <span className={`text-[9px] font-black uppercase tracking-wider block mb-0.5 ${selectedLab.id === lab.id ? 'text-indigo-200' : 'text-indigo-600'}`}>
                                    {lab.category}
                                </span>
                                <span className="text-xs font-bold truncate block">{lab.name}</span>
                            </div>
                            <ChevronRight className={`w-3 h-3 transition-transform ${selectedLab.id === lab.id ? 'translate-x-1' : 'text-muted-foreground opacity-30'}`} />
                        </motion.button>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-6 rounded-3xl text-white shadow-lg">
                    <h4 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Info className="w-3.5 h-3.5" /> Concept Mastery
                    </h4>
                    <p className="text-[11px] leading-relaxed opacity-90 italic">
                        "Visualizing {selectedLab.category} via these sims will help anchor theoretical definitions into spatial memories."
                    </p>
                </div>
            </div>

            {/* Simulation Canvas Viewport */}
            <div className={`flex-1 flex flex-col gap-6 ${isFullscreen ? 'fixed inset-0 z-[100] bg-black p-4' : ''}`}>
                <div className="bg-card dark:bg-[#0c0c0c] border border-border rounded-[2.5rem] shadow-2xl relative overflow-hidden flex-1 group">
                    <div className="absolute top-6 right-6 z-20 flex gap-2">
                        <button 
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className="bg-black/50 backdrop-blur-md p-2.5 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-xl"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>

                    <Suspense fallback={
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white">
                            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
                            <p className="text-xs font-black uppercase tracking-[0.3em] animate-pulse">Initializing Lab Shell...</p>
                        </div>
                    }>
                        <CurrentLabComponent />
                    </Suspense>

                    {/* Simulation Description Overlay (Bottom) */}
                    <div className="absolute bottom-6 left-6 right-24 z-10 p-5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        <h4 className="text-white font-bold text-sm mb-1">{selectedLab.name}</h4>
                        <p className="text-zinc-400 text-[10px] leading-relaxed line-clamp-2">
                            {selectedLab.description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-card dark:bg-[#111] p-6 rounded-3xl border border-border flex items-center gap-5">
                        <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                            <Boxes className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Interaction Guide</h5>
                            <p className="text-xs text-foreground font-medium">Use **Mouse** to Rotate, **Scroll** to Zoom, and **Toggles** to shift layers.</p>
                        </div>
                    </div>
                    
                    <button className="px-8 py-4 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 border-b-4 border-indigo-900 active:border-b-0 active:translate-y-1 transition-all group shrink-0">
                        LAUNCH LAB TEST <Maximize2 className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
