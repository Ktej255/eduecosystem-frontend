"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Info, RotateCcw } from 'lucide-react';

interface LayerZone {
    id: string;
    label: string;
    description: string;
    correctItems: string[];
}

const ZONES: LayerZone[] = [
    {
        id: 'crust',
        label: 'Crust',
        description: 'Outermost solid shell',
        correctItems: ['Continental (SiAl)', 'Oceanic (SiMa)']
    },
    {
        id: 'mantle',
        label: 'Mantle',
        description: 'Silicate rocky shell (84% volume)',
        correctItems: ['Asthenosphere', 'Lower Mantle']
    },
    {
        id: 'core',
        label: 'Core',
        description: 'Iron-Nickel center',
        correctItems: ['Outer Liquid Core', 'Inner Solid Core']
    }
];

const ITEMS = [
    { id: 'Continental (SiAl)', text: 'Continental (SiAl)' },
    { id: 'Outer Liquid Core', text: 'Outer Liquid Core' },
    { id: 'Oceanic (SiMa)', text: 'Oceanic (SiMa)' },
    { id: 'Lower Mantle', text: 'Lower Mantle' },
    { id: 'Asthenosphere', text: 'Asthenosphere' },
    { id: 'Inner Solid Core', text: 'Inner Solid Core' },
];

export default function EarthLayersInteract({ onClose }: { onClose: () => void }) {
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [assignments, setAssignments] = useState<Record<string, string[]>>({
        crust: [],
        mantle: [],
        core: []
    });
    const [showResults, setShowResults] = useState(false);

    const handleDrop = (zoneId: string) => {
        if (!draggedItem) return;

        // Remove from other zones first if re-dragging
        const newAssignments = { ...assignments };
        Object.keys(newAssignments).forEach(key => {
            newAssignments[key] = newAssignments[key].filter(i => i !== draggedItem);
        });

        // Add to new zone
        newAssignments[zoneId] = [...newAssignments[zoneId], draggedItem];
        setAssignments(newAssignments);
        setDraggedItem(null);
    };

    const checkResults = () => {
        setShowResults(true);
    };

    const reset = () => {
        setAssignments({ crust: [], mantle: [], core: [] });
        setShowResults(false);
    };

    // Calculate score
    const getScore = () => {
        let correct = 0;
        ZONES.forEach(zone => {
            assignments[zone.id].forEach(item => {
                if (zone.correctItems.includes(item)) correct++;
            });
        });
        return correct;
    };

    // Helper to get remaining items
    const getRemainingItems = () => {
        const assigned = Object.values(assignments).flat();
        return ITEMS.filter(i => !assigned.includes(i.id));
    };

    return (
        <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-neutral-400 hover:text-white pointer-events-auto z-20"
            >
                <XCircle className="w-8 h-8" />
            </button>

            <div className="max-w-4xl w-full z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-600 mb-2">
                        Build the Earth
                    </h2>
                    <p className="text-muted-foreground">Drag each component to its correct layer.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {ZONES.map(zone => (
                        <div
                            key={zone.id}
                            className={`min-h-[200px] border-2 border-dashed rounded-xl p-4 transition-all relative flex flex-col gap-2
                                ${showResults
                                    ? 'border-neutral-700 bg-neutral-900/50'
                                    : 'border-slate-700 hover:border-indigo-400 bg-slate-900/50'
                                }
                            `}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => !showResults && handleDrop(zone.id)}
                        >
                            <h3 className="text-xl font-bold text-center text-slate-200 mb-1">{zone.label}</h3>
                            <p className="text-xs text-center text-muted-foreground mb-4">{zone.description}</p>

                            {assignments[zone.id].map(item => {
                                const isCorrect = zone.correctItems.includes(item);
                                return (
                                    <motion.div
                                        layoutId={item}
                                        key={item}
                                        className={`p-3 rounded-lg text-sm font-semibold text-center border shadow-sm
                                            ${showResults
                                                ? isCorrect
                                                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-400'
                                                    : 'bg-red-950/50 border-red-500 text-red-400'
                                                : 'bg-indigo-950 border-indigo-500/50 text-indigo-200 cursor-grab active:cursor-grabbing'
                                            }
                                        `}
                                        draggable={!showResults}
                                        onDragStart={() => setDraggedItem(item)}
                                    >
                                        {item}
                                        {showResults && (
                                            <span className="ml-2 inline-block align-middle">
                                                {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                            </span>
                                        )}
                                    </motion.div>
                                );
                            })}

                            {/* Drop Zone Indicator */}
                            {assignments[zone.id].length === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm pointer-events-none">
                                    Drop Items Here
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Source Items */}
                <div className="flex flex-wrap gap-4 justify-center min-h-[80px]">
                    <AnimatePresence>
                        {getRemainingItems().map(item => (
                            <motion.div
                                layoutId={item.id}
                                key={item.id}
                                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-600 text-slate-200 font-medium cursor-grab hover:bg-slate-700 hover:border-slate-500 active:scale-95 transition-all shadow-lg"
                                draggable={!showResults}
                                onDragStart={() => setDraggedItem(item.id)}
                            >
                                {item.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {getRemainingItems().length === 0 && !showResults && (
                        <div className="text-muted-foreground animate-pulse">All items placed! Check your results.</div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="mt-12 flex justify-center gap-4">
                    {!showResults ? (
                        <button
                            onClick={checkResults}
                            disabled={getRemainingItems().length > 0}
                            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-indigo-900/20"
                        >
                            Check Answers
                        </button>
                    ) : (
                        <div className="text-center animate-in slide-in-from-bottom-4">
                            <div className="text-2xl font-bold text-white mb-2">
                                Score: {getScore()}/{ITEMS.length}
                            </div>
                            <button
                                onClick={reset}
                                className="flex items-center gap-2 mx-auto px-6 py-2 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 transition-colors"
                            >
                                <RotateCcw className="w-4 h-4" /> Try Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
