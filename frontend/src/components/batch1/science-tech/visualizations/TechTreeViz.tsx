"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Atom, Cpu, Dna, FileText, FlaskConical, Rocket, Zap, Microscope, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TECHNOLOGIES = [
    { id: 'biotech', name: 'Biotechnology', icon: Dna, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30', x: 200, y: 100, requires: [] },
    { id: 'nano', name: 'Nanotech', icon: Atom, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30', x: 500, y: 100, requires: [] },
    { id: 'space', name: 'Space Tech', icon: Rocket, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30', x: 350, y: 250, requires: ['biotech', 'nano'] },
    { id: 'ai', name: 'Artificial Intelligence', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30', x: 200, y: 400, requires: ['space'] },
    { id: 'energy', name: 'Clean Energy', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', x: 500, y: 400, requires: ['space'] },
];

export default function TechTreeViz() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <Card className="w-full bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden h-[600px]">
            <CardHeader className="relative z-10 border-b dark:border-neutral-800">
                <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Microscope className="w-5 h-5" />
                    </span>
                    Technology Evolution Tree
                </CardTitle>
                <CardDescription>
                    Interconnected domains of modern Science & Technology
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full relative p-0 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="w-full h-full relative">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <marker id="arrow-tech" markerWidth="6" markerHeight="6" refX="15" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
                            </marker>
                        </defs>
                        {TECHNOLOGIES.map(tech =>
                            tech.requires.map(reqId => {
                                const reqNode = TECHNOLOGIES.find(t => t.id === reqId);
                                if (!reqNode) return null;
                                return (
                                    <path
                                        key={`${reqId}-${tech.id}`}
                                        d={`M ${reqNode.x + 80},${reqNode.y + 30} C ${reqNode.x + 80},${(reqNode.y + tech.y) / 2} ${tech.x - 80},${(reqNode.y + tech.y) / 2} ${tech.x - 80},${tech.y + 30}`}
                                        fill="none"
                                        stroke={hoveredNode === tech.id || hoveredNode === reqId ? "#6366f1" : "#cbd5e1"}
                                        strokeWidth={hoveredNode === tech.id || hoveredNode === reqId ? 3 : 2}
                                        className="transition-all duration-300"
                                    />
                                );
                            })
                        )}
                    </svg>

                    {TECHNOLOGIES.map(tech => {
                        const Icon = tech.icon;
                        const isHovered = hoveredNode === tech.id;

                        return (
                            <motion.div
                                key={tech.id}
                                className={`absolute p-4 rounded-xl border-2 cursor-pointer bg-white dark:bg-black w-48 transition-all duration-300 ${isHovered ? 'border-indigo-500 shadow-xl scale-105 z-20' : 'border-neutral-200 dark:border-neutral-700 hover:border-indigo-300 shadow-md z-10'}`}
                                style={{ left: tech.x, top: tech.y, transform: 'translate(-50%, -50%)' }}
                                onMouseEnter={() => setHoveredNode(tech.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-lg ${tech.bg} ${tech.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-sm leading-tight">{tech.name}</h3>
                                </div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                    Key Topic for Prelims & Mains
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
