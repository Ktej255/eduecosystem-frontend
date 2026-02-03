"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Plane, Rocket, Star, Sun, Wind, Thermometer, Info } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

// --- Types & Data ---

interface LayerData {
    id: string;
    name: string;
    altitudeRange: string; // e.g., "0 - 12 km"
    tempRange: string;     // e.g., "15°C to -56°C"
    color: string;         // Tailwind class or hex for background gradient
    textColor: string;
    features: { icon: React.ReactNode, label: string, position: string }[]; // position as percentage from bottom of layer
    description: string;
    funFact?: string;
}

const ATMOSPHERE_LAYERS: LayerData[] = [
    {
        id: "thermosphere",
        name: "Thermosphere",
        altitudeRange: "80 - 700 km",
        tempRange: "-90°C to 1500°C",
        color: "bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950",
        textColor: "text-slate-200",
        description: "The hottest layer. The air is very thin. The Aurora Borealis occurs here.",
        funFact: "The International Space Station orbits here!",
        features: [
            { icon: <Star className="w-4 h-4 text-yellow-100" />, label: "Aurora Borealis", position: "80%" },
            { icon: <Rocket className="w-5 h-5 text-slate-300" />, label: "Satellites & ISS", position: "40%" }
        ]
    },
    {
        id: "mesosphere",
        name: "Mesosphere",
        altitudeRange: "50 - 80 km",
        tempRange: "-2°C to -90°C",
        color: "bg-gradient-to-b from-indigo-950 via-indigo-900 to-blue-900",
        textColor: "text-indigo-100",
        description: "The coldest layer. Meteors burn up here upon entering Earth's atmosphere.",
        features: [
            { icon: <Star className="w-4 h-4 text-orange-400 rotate-180" />, label: "Meteors", position: "60%" },
        ]
    },
    {
        id: "stratosphere",
        name: "Stratosphere",
        altitudeRange: "12 - 50 km",
        tempRange: "-56°C to -2°C",
        color: "bg-gradient-to-b from-blue-900 via-blue-700 to-sky-600",
        textColor: "text-sky-100",
        description: "Contains the Ozone Layer which absorbs UV radiation. Very stable air.",
        funFact: "Weather balloons and spy planes fly here to avoid turbulence.",
        features: [
            { icon: <div className="w-full h-1 bg-teal-400/30 blur-sm rounded-full" />, label: "Ozone Layer", position: "40%" },
            { icon: <div className="w-3 h-3 bg-white/80 rounded-full" />, label: "Weather Balloons", position: "70%" },
        ]
    },
    {
        id: "troposphere",
        name: "Troposphere",
        altitudeRange: "0 - 12 km",
        tempRange: "15°C to -56°C",
        color: "bg-gradient-to-b from-sky-600 via-sky-400 to-sky-200",
        textColor: "text-sky-900",
        description: "Where we live. Contains 75% of the atmosphere's mass and almost all weather.",
        features: [
            { icon: <Plane className="w-5 h-5 text-slate-700" />, label: "Commercial Jets (Top)", position: "85%" },
            { icon: <Cloud className="w-8 h-8 text-white/90" />, label: "Cumulus Clouds", position: "30%" },
            { icon: <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-stone-700 border-r-[10px] border-r-transparent" />, label: "Mt. Everest (8.8km)", position: "73%" }
        ]
    }
];

function AtmosphereLayer({ layer, isActive, onClick }: { layer: LayerData, isActive: boolean, onClick: () => void }) {

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`relative w-full cursor-pointer transition-all duration-500 overflow-hidden group
                ${isActive ? 'h-[300px]' : 'h-[120px]'}
                ${layer.color}
            `}
        >
            {/* Layer Label (Always Visible) */}
            <div className={`absolute top-4 left-4 z-10 ${layer.textColor}`}>
                <h3 className="text-xl font-bold flex items-center gap-2">
                    {layer.name}
                    {!isActive && <Info className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
                </h3>
                <p className="text-xs font-mono opacity-80">{layer.altitudeRange}</p>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`absolute top-20 left-4 z-10 max-w-sm p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 ${layer.textColor}`}
                    >
                        <p className="text-sm leading-relaxed mb-3">{layer.description}</p>

                        <div className="flex items-center gap-2 text-xs font-mono bg-white/10 px-2 py-1 rounded w-fit mb-2">
                            <Thermometer className="w-3 h-3" />
                            {layer.tempRange}
                        </div>

                        {layer.funFact && (
                            <div className="text-xs italic opacity-90 border-l-2 border-yellow-400 pl-2 mt-2">
                                Tip: {layer.funFact}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Visual Features (Absolute Positioning) */}
            {layer.features.map((feat, i) => (
                <div
                    key={i}
                    className="absolute right-8 md:right-20 flex flex-col items-center group/feat"
                    style={{ bottom: feat.position }}
                >
                    <div className="transition-transform duration-300 group-hover/feat:scale-125">
                        {feat.icon}
                    </div>
                    {isActive && (
                        <span className={`text-[10px] mt-1 px-2 py-0.5 rounded bg-black/30 backdrop-blur text-white opacity-0 group-hover/feat:opacity-100 transition-opacity`}>
                            {feat.label}
                        </span>
                    )}
                </div>
            ))}

            {/* Hover hint */}
            {!isActive && (
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}
        </motion.div>
    );
}

export default function AtmosphereViz() {
    const [activeLayer, setActiveLayer] = useState<string | null>("troposphere");

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl overflow-hidden flex flex-col h-[700px] md:h-[800px]">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-20 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-sky-900/50 flex items-center justify-center text-sky-400">
                                <Wind className="w-5 h-5" />
                            </span>
                            Atmosphere Structure
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Vertical layers of Earth's atmosphere. Click a layer to explore.
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <ScrollArea className="flex-1 bg-slate-950">
                <div className="flex flex-col relative min-h-full">
                    {/* Exosphere Fade */}
                    <div className="h-24 bg-gradient-to-b from-black to-slate-950 relative">
                        <div className="absolute top-4 left-4 text-slate-500 text-xs font-mono">
                            Exosphere (Above 700km)
                            <br />
                            Transition to Space
                        </div>
                    </div>

                    {ATMOSPHERE_LAYERS.map((layer) => (
                        <AtmosphereLayer
                            key={layer.id}
                            layer={layer}
                            isActive={activeLayer === layer.id}
                            onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                        />
                    ))}

                    {/* Earth Surface */}
                    <div className="h-16 bg-[#2d4a3a] relative border-t-4 border-[#8B4513]">
                        <div className="absolute -top-6 left-8 flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-700 rotate-45 transform skew-x-12 translate-y-3"></div>
                        </div>
                        <span className="absolute bottom-2 left-4 text-green-100/50 text-xs font-bold uppercase tracking-widest">
                            Earth Surface
                        </span>
                    </div>
                </div>
            </ScrollArea>
        </Card>
    );
}
