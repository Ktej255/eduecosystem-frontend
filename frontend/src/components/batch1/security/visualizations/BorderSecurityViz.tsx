"use client";

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const BORDERS = [
    { id: 'pak', name: 'India-Pakistan', length: '3,323 km', issues: ['Infiltration', 'Drug Smuggling', 'Drones'], color: 'bg-red-500' },
    { id: 'china', name: 'India-China', length: '3,488 km', issues: ['Salami Slicing', 'Incursions', 'Infrastructure'], color: 'bg-orange-500' },
    { id: 'ban', name: 'India-Bangladesh', length: '4,096 km', issues: ['Illegal Migration', 'Cattle Smuggling'], color: 'bg-green-500' },
    { id: 'nepal', name: 'India-Nepal', length: '1,751 km', issues: ['Open Border', 'Fake Currency'], color: 'bg-blue-500' },
    { id: 'myanmar', name: 'India-Myanmar', length: '1,643 km', issues: ['Insurgency', 'Arms Smuggling', 'Drugs'], color: 'bg-purple-500' },
];

export default function BorderSecurityViz() {
    const [activeBorder, setActiveBorder] = useState(BORDERS[0]);

    return (
        <Card className="p-6 bg-muted border-border">
            <h3 className="text-lg font-bold mb-4 text-foreground">Border Management & Challenges</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Visual Representation (Abstract Map/List) */}
                <div className="space-y-3">
                    {BORDERS.map((border) => (
                        <motion.div
                            key={border.id}
                            className={`p-4 rounded-xl cursor-pointer border-l-4 transition-all ${activeBorder.id === border.id ? 'bg-card shadow-md border-l-indigo-500' : 'bg-transparent border-l-transparent hover:bg-muted dark:hover:bg-slate-800/50'}`}
                            onClick={() => setActiveBorder(border)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-muted-foreground">{border.name}</span>
                                <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded text-muted-foreground dark:text-muted-foreground">{border.length}</span>
                            </div>
                            {activeBorder.id === border.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-2 text-xs text-muted-foreground"
                                >
                                    <div className="flex gap-2 flex-wrap mt-2">
                                        {border.issues.map(issue => (
                                            <span key={issue} className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md border border-red-100 dark:border-red-900/30">
                                                {issue}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Info Panel */}
                <div className="bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${activeBorder.color} opacity-20 blur-3xl rounded-full`} />
                    <h4 className="text-xl font-bold mb-1">{activeBorder.name}</h4>
                    <p className="text-muted-foreground text-sm mb-6">Border Length: {activeBorder.length}</p>

                    <div className="space-y-4">
                        <div>
                            <h5 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">Key Challenges</h5>
                            <ul className="space-y-2">
                                {activeBorder.issues.map(issue => (
                                    <li key={issue} className="flex items-center gap-2 text-sm">
                                        <div className={`w-1.5 h-1.5 rounded-full ${activeBorder.color}`} />
                                        {issue}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
