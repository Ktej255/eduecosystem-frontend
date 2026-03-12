"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Info, ChevronRight, ChevronDown, Calendar, Search } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

// --- Types & Data ---

type TimeUnit = 'eon' | 'era' | 'period' | 'epoch';

interface GtsNode {
    id: string;
    name: string;
    type: TimeUnit;
    startMa: number; // Start Time in Million Years Ago
    endMa: number;   // End Time in Million Years Ago
    color: string;
    description?: string;
    children?: GtsNode[];
    events?: string[]; // Key events
}

const GTS_DATA: GtsNode[] = [
    {
        id: "precambrian",
        name: "Precambrian Supereon",
        type: "eon",
        startMa: 4600,
        endMa: 541,
        color: "#ef4444", // Reddish
        description: "The span of time from the formation of Earth about 4.6 billion years ago to the beginning of the Cambrian Period.",
        children: [
            {
                id: "hadean",
                name: "Hadean Eon",
                type: "eon",
                startMa: 4600,
                endMa: 4000,
                color: "#1e1b4b",
                description: "The 'Hellish' era. Formation of Earth, Moon, and oceans.",
                events: ["Formation of Earth", "Moon formation", "First oceans"]
            },
            {
                id: "archean",
                name: "Archean Eon",
                type: "eon",
                startMa: 4000,
                endMa: 2500,
                color: "#312e81",
                description: "Cooling of Earth's crust. Earliest life forms (bacteria).",
                events: ["First prokaryotes (bacteria)", "Atmosphere formation (no oxygen)"]
            },
            {
                id: "proterozoic",
                name: "Proterozoic Eon",
                type: "eon",
                startMa: 2500,
                endMa: 541,
                color: "#4338ca",
                description: "Oxygenation of atmosphere. Eukaryotes appear.",
                events: ["Great Oxygenation Event", "First multicellular life", "Snowball Earth"]
            }
        ]
    },
    {
        id: "phanerozoic",
        name: "Phanerozoic Eon",
        type: "eon",
        startMa: 541,
        endMa: 0,
        color: "#059669", // Greenish for life
        description: "The current eon, characterized by abundant animal and plant life.",
        children: [
            {
                id: "paleozoic",
                name: "Paleozoic Era",
                type: "era",
                startMa: 541,
                endMa: 252,
                color: "#047857",
                description: "Ancient Life. Explosion of diversity.",
                children: [
                    { id: "cambrian", name: "Cambrian", type: "period", startMa: 541, endMa: 485, color: "#6ee7b7", events: ["Cambrian Explosion"] },
                    { id: "ordovician", name: "Ordovician", type: "period", startMa: 485, endMa: 443, color: "#34d399", events: ["First land plants"] },
                    { id: "silurian", name: "Silurian", type: "period", startMa: 443, endMa: 419, color: "#10b981", events: ["First jawed fish", "Vascular plants"] },
                    { id: "devonian", name: "Devonian", type: "period", startMa: 419, endMa: 359, color: "#059669", events: ["Age of Fishes", "First amphibians"] },
                    { id: "carboniferous", name: "Carboniferous", type: "period", startMa: 359, endMa: 299, color: "#047857", events: ["Coalfication", "First reptiles"] },
                    { id: "permian", name: "Permian", type: "period", startMa: 299, endMa: 252, color: "#065f46", events: ["Pangea forms", "Great Dying Extinction"] }
                ]
            },
            {
                id: "mesozoic",
                name: "Mesozoic Era",
                type: "era",
                startMa: 252,
                endMa: 66,
                color: "#d97706", // Orange/Dino
                description: "Age of Reptiles.",
                children: [
                    { id: "triassic", name: "Triassic", type: "period", startMa: 252, endMa: 201, color: "#fcd34d", events: ["First dinosaurs", "First mammals"] },
                    { id: "jurassic", name: "Jurassic", type: "period", startMa: 201, endMa: 145, color: "#fbbf24", events: ["Peak of dinosaurs", "First birds"] },
                    { id: "cretaceous", name: "Cretaceous", type: "period", startMa: 145, endMa: 66, color: "#f59e0b", events: ["First flowering plants", "K-T Extinction"] }
                ]
            },
            {
                id: "cenozoic",
                name: "Cenozoic Era",
                type: "era",
                startMa: 66,
                endMa: 0,
                color: "#eab308", // Yellow/Modern
                description: "Age of Mammals.",
                children: [
                    { id: "paleogene", name: "Paleogene", type: "period", startMa: 66, endMa: 23, color: "#facc15", events: ["Mammals diversify", "Himalayas begin rising"] },
                    { id: "neogene", name: "Neogene", type: "period", startMa: 23, endMa: 2.58, color: "#fde047", events: ["Early humans (hominids)", "Ice Ages begin"] },
                    { id: "quaternary", name: "Quaternary", type: "period", startMa: 2.58, endMa: 0, color: "#fef08a", events: ["Modern humans", "Major glaciations"] }
                ]
            }
        ]
    }
];

function TimeBlock({ node, depth = 0 }: { node: GtsNode, depth?: number }) {
    const [isOpen, setIsOpen] = useState(depth < 2); // Auto-open higher levels
    const hasChildren = node.children && node.children.length > 0;

    // Calculated height/width strategy could be complex, sticking to nested flex/grid

    return (
        <div className={`flex flex-col border-l-2 pl-4 py-2 relative group transition-all duration-300`} style={{ borderColor: node.color }}>
            {/* Timeline Node Marker */}
            <div
                className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 bg-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer`}
                style={{ borderColor: node.color }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {hasChildren && (
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isOpen ? 'bg-transparent' : 'bg-muted-foreground'}`} style={{ backgroundColor: isOpen ? node.color : undefined }} />
                )}
            </div>

            {/* Header Content */}
            <div
                className="flex items-center gap-3 mb-2 cursor-pointer hover:bg-slate-900/50 p-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-white">{node.name}</span>
                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-slate-700 text-muted-foreground font-mono">
                            {node.startMa} - {node.endMa} Ma
                        </Badge>
                    </div>
                    {node.description && <span className="text-xs text-muted-foreground line-clamp-1">{node.description}</span>}
                </div>
                {hasChildren && (
                    <div className="ml-auto">
                        {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                    </div>
                )}
            </div>

            {/* Expanded Content */}
            {isOpen && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-2">
                    {/* Events List */}
                    {node.events && node.events.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3 pl-2">
                            {node.events.map((evt, i) => (
                                <Badge key={i} className="bg-slate-800 text-slate-300 hover:bg-slate-700 border-none text-[10px]">
                                    {evt}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Children */}
                    {node.children && (
                        <div className="ml-1 space-y-1">
                            {node.children.map(child => (
                                <TimeBlock key={child.id} node={child} depth={depth + 1} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function GeologicalTimeScaleViz() {
    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl flex flex-col h-[600px] overflow-hidden">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-400">
                                <Clock className="w-5 h-5" />
                            </span>
                            Geological Time Scale
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Chronological dating of Earth's 4.6 billion year history.
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <ScrollArea className="flex-1 bg-slate-950 p-6">
                <div className="max-w-3xl mx-auto pl-4 border-l border-slate-800 ml-4 md:ml-8">
                    {/* Scale Start */}
                    <div className="flex items-center gap-2 ml-[-21px] mb-8 text-muted-foreground">
                        <div className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs font-bold font-mono">
                            4.6 Ga
                        </div>
                        <span className="text-xs uppercase tracking-widest font-semibold">Formation of Earth</span>
                    </div>

                    {GTS_DATA.map(node => (
                        <TimeBlock key={node.id} node={node} />
                    ))}

                    {/* Scale End */}
                    <div className="flex items-center gap-2 ml-[-21px] mt-8 text-emerald-500 animate-pulse">
                        <div className="w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-900/20 flex items-center justify-center text-xs font-bold font-mono">
                            0
                        </div>
                        <span className="text-xs uppercase tracking-widest font-semibold">Present Day</span>
                    </div>
                </div>
            </ScrollArea>
        </Card>
    );
}
