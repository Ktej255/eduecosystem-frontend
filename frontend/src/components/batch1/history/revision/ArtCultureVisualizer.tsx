"use client";

import React, { useState } from 'react';
import {
    Landmark, Eye, Map, Sparkles,
    ArrowRight, Info, BookOpen, Layers,
    Camera, MapPin, ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VISUALS = [
    {
        title: "Nagara Style Temple",
        category: "Architecture",
        era: "Gupta & Later",
        description: "Northern Indian temple architecture characterized by curvilinear shikhara and square plan.",
        keyFeatures: ["Shikhara (Curvilinear)", "Amalaka & Kalasha", "Panchayatana Style", "Jagati (Platform)"],
        sites: ["Khajuraho", "Sun Temple, Konark", "Modhera Sun Temple"],
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200"
    },
    {
        title: "Dravida Style Temple",
        category: "Architecture",
        era: "Chola & Pallava",
        description: "Southern Indian temple architecture known for its pyramid-like towers (Vimana) and large gateways (Gopurams).",
        keyFeatures: ["Vimana (Pyramid Tower)", "Gopuram (Gateway)", "Mandapa", "Temple Tank"],
        sites: ["Brihadisvara Temple", "Meenakshi Temple", "Shore Temple"],
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200"
    },
    {
        title: "Dharmachakra Pravartana Mudra",
        category: "Sculpture/Buddhism",
        era: "Kushan & Gupta",
        description: "The 'Turning the Wheel of Law' gesture, representing Buddha's first sermon at Sarnath.",
        keyFeatures: ["Hands at heart level", "Thumb/index fingers touching", "Symbolizes Law", "Common in Sarnath Buddha"],
        sites: ["Sarnath", "Ajanta Caves"],
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200"
    },
    {
        title: "Indo-Islamic Architecture",
        category: "Architecture",
        era: "Delhi Sultanate & Mughal",
        description: "Synthesis of Indian and Persian styles, introducing domes and arches.",
        keyFeatures: ["Arch & Dome", "Minarets", "Arabesque patterns", "Charbagh Gardens"],
        sites: ["Qutub Minar", "Humayun Tomb", "Taj Mahal"],
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200"
    }
];

export default function ArtCultureVisualizer() {
    const [selected, setSelected] = useState(VISUALS[0]);

    return (
        <div className="space-y-8">
            {/* Visual Grid Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {VISUALS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelected(item)}
                        className={`p-4 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-32 ${selected.title === item.title
                                ? `${item.borderColor} ${item.bg} shadow-md`
                                : 'border-slate-100 bg-card hover:border-border'
                            }`}
                    >
                        <div>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                                {item.category}
                            </span>
                            <h4 className="font-bold text-foreground leading-tight mt-1 truncate w-full">
                                {item.title}
                            </h4>
                        </div>
                        <div className="flex justify-between items-center text-muted-foreground">
                            <span className="text-[10px] font-bold">{item.era}</span>
                            <Camera size={14} />
                        </div>
                    </button>
                ))}
            </div>

            {/* Detailed Visual Insight */}
            <div className={`bg-card rounded-3xl border-2 ${selected.border} shadow-sm overflow-hidden animate-in fade-in duration-500`}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Placeholder for Image/Visual */}
                    <div className={`${selected.bg} aspect-video flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r ${selected.border}`}>
                        <div className="text-center space-y-4">
                            <div className={`w-20 h-20 mx-auto rounded-full bg-card flex items-center justify-center shadow-sm ${selected.color}`}>
                                <Landmark size={40} />
                            </div>
                            <p className={`text-sm font-bold ${selected.color} uppercase tracking-widest italic`}>
                                Visual Simulation: {selected.title}
                            </p>
                            <Button variant="outline" className={`rounded-xl border-${selected.color.split('-')[1]}-200 bg-card shadow-sm`}>
                                Launch 3D Viewer
                            </Button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6">
                        <div>
                            <Badge className={`${selected.bg} ${selected.color} ${selected.border} border mb-2`}>
                                {selected.category}
                            </Badge>
                            <h3 className="text-3xl font-black text-foreground">{selected.title}</h3>
                            <p className="text-muted-foreground font-medium text-sm mt-1">{selected.era} Period</p>
                        </div>

                        <p className="text-muted-foreground font-medium leading-relaxed">
                            {selected.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                            <div className="space-y-3">
                                <h4 className="flex items-center gap-2 font-black text-foreground text-xs uppercase tracking-wider">
                                    <Layers size={16} className="text-blue-500" /> Defining Features
                                </h4>
                                <ul className="space-y-2">
                                    {selected.keyFeatures.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="flex items-center gap-2 font-black text-foreground text-xs uppercase tracking-wider">
                                    <MapPin size={16} className="text-red-500" /> Prominent Sites
                                </h4>
                                <ul className="space-y-2">
                                    {selected.sites.map((site, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                            {site}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Button className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 shadow-lg shadow-slate-200">
                            Analyze Architectural Comparison <ChevronRight className="ml-2" size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
