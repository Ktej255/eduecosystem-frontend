"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dna, Rocket, Cpu, Zap, Atom, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Tech Tree Data
const TECHNOLOGIES = [
    { id: 'biotech', name: 'Biotechnology', icon: Dna, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30', x: 200, y: 100, requires: [], link: 'biotech' },
    { id: 'nano', name: 'Nanotechnology', icon: Atom, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30', x: 500, y: 100, requires: [], link: 'nano' },
    { id: 'space', name: 'Space Tech', icon: Rocket, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30', x: 350, y: 250, requires: ['biotech', 'nano'], link: 'space-tech' },
    { id: 'ai', name: 'Artificial Intelligence', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30', x: 200, y: 400, requires: ['space'], link: 'it-comms' },
    { id: 'energy', name: 'Clean Energy', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', x: 500, y: 400, requires: ['space'], link: 'energy' },
];

export default function TechTreeViz() {
    const router = useRouter();
    const [selectedTech, setSelectedTech] = useState<typeof TECHNOLOGIES[0] | null>(null);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl overflow-hidden h-[600px] relative">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10 relative z-10">
                <CardTitle className="text-white flex items-center gap-2">
                    <Atom className="w-5 h-5 text-indigo-400" />
                    Technology Tree v3.0
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Interactive Knowledge Graph
                </CardDescription>
            </CardHeader>

            <CardContent className="h-full p-0 relative">
                {/* SVG Connections Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {TECHNOLOGIES.map(tech => (
                        tech.requires.map(reqId => {
                            const req = TECHNOLOGIES.find(t => t.id === reqId);
                            if (req) {
                                return (
                                    <line
                                        key={`${req.id}-${tech.id}`}
                                        x1={req.x} y1={req.y}
                                        x2={tech.x} y2={tech.y}
                                        stroke="#64748b"
                                        strokeWidth="2"
                                        strokeDasharray="4"
                                        className="opacity-20"
                                    />
                                );
                            }
                            return null;
                        })
                    ))}
                </svg>

                {/* Nodes Layer */}
                <div className="relative w-full h-full z-10">
                    {TECHNOLOGIES.map(tech => (
                        <motion.button
                            key={tech.id}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)]
                                ${selectedTech?.id === tech.id ? 'border-white scale-110 z-20 bg-slate-800' : 'border-slate-700 bg-slate-900 hover:border-indigo-500'}
                            `}
                            style={{ left: tech.x, top: tech.y }}
                            onClick={() => setSelectedTech(tech)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <tech.icon className={`w-8 h-8 ${tech.color}`} />
                        </motion.button>
                    ))}
                </div>

                {/* Detail Overlay */}
                <AnimatePresence>
                    {selectedTech && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="absolute top-0 right-0 bottom-0 w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-6 z-30 flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedTech(null)}
                                className="self-end text-slate-500 hover:text-white mb-4"
                            >
                                Close
                            </button>

                            <div className={`w-16 h-16 rounded-2xl ${selectedTech.bg} flex items-center justify-center mb-4`}>
                                <selectedTech.icon className={`w-8 h-8 ${selectedTech.color}`} />
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-2">{selectedTech.name}</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Unlock deep insights into {selectedTech.name} and its applications in UPSC Civil Services.
                            </p>

                            <button
                                onClick={() => router.push(`/student/batch1/science-tech/${selectedTech.link}`)}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                <FileText className="w-5 h-5" />
                                Start Revision
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
