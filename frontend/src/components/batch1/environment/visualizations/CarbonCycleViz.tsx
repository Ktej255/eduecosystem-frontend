"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Factory, Flame, Leaf, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CarbonCycleViz() {
    return (
        <Card className="w-full bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden min-h-[500px]">
            <div className="absolute inset-0 bg-blue-50/50 dark:bg-slate-900/50" />

            <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                        <Wind className="w-5 h-5" />
                    </span>
                    Carbon Cycle
                </CardTitle>
                <CardDescription>
                    Movement of Carbon between Atmosphere, Biosphere, and Lithosphere
                </CardDescription>
            </CardHeader>

            <CardContent className="h-full relative p-0 min-h-[400px]">
                {/* Simplified SVG Schematic */}
                <div className="absolute inset-0 flex items-center justify-center pb-8">
                    <svg className="w-full h-full max-w-2xl" viewBox="0 0 600 400">
                        <defs>
                            <marker id="arrow-up" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 z" fill="#ef4444" />
                            </marker>
                            <marker id="arrow-down" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 z" fill="#22c55e" />
                            </marker>
                        </defs>

                        {/* Atmosphere */}
                        <rect x="0" y="0" width="600" height="100" fill="url(#skyGradient)" opacity="0.1" />
                        <text x="300" y="50" textAnchor="middle" className="text-sm font-bold fill-slate-500 uppercase tracking-widest">Atmosphere (CO₂)</text>

                        {/* Ground */}
                        <path d="M0,300 Q300,280 600,300 L600,400 L0,400 Z" fill="#9ca3af" className="dark:fill-slate-800" />

                        {/* Nodes */}
                        <g transform="translate(100, 280)">
                            {/* Plants */}
                            <foreignObject width="80" height="80">
                                <div className="flex flex-col items-center text-green-600">
                                    <Leaf className="w-10 h-10" />
                                    <span className="text-xs font-bold bg-white/80 px-1 rounded">Plants</span>
                                </div>
                            </foreignObject>
                        </g>

                        <g transform="translate(450, 250)">
                            {/* Factory */}
                            <foreignObject width="80" height="80">
                                <div className="flex flex-col items-center text-slate-600 dark:text-slate-400">
                                    <Factory className="w-10 h-10" />
                                    <span className="text-xs font-bold bg-white/80 px-1 rounded">Industry</span>
                                </div>
                            </foreignObject>
                        </g>

                        {/* Flows */}
                        {/* Photosynthesis (Down) */}
                        <path id="photo" d="M 300,80 C 200,80 140,150 140,280" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow-down)" strokeDasharray="5 5" />
                        <text x="200" y="180" className="text-xs fill-green-600 font-bold" transform="rotate(-15 200,180)">Photosynthesis</text>

                        {/* Combustion (Up) */}
                        <path id="combust" d="M 490,250 C 490,150 400,80 350,80" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-up)" />
                        <text x="450" y="160" className="text-xs fill-red-500 font-bold" transform="rotate(10 450,160)">Combustion</text>

                        {/* Respiration (Up from Plants) */}
                        <path id="resp" d="M 160,280 C 180,200 250,90 300,90" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-up)" opacity="0.6" />
                        <text x="230" y="240" className="text-[10px] fill-red-400 font-medium">Respiration</text>

                        {/* Animated Particles */}
                        <circle r="4" fill="#ef4444">
                            <animateMotion repeatCount="indefinite" dur="3s" path="M 490,250 C 490,150 400,80 350,80" />
                        </circle>
                        <circle r="4" fill="#22c55e">
                            <animateMotion repeatCount="indefinite" dur="4s" path="M 300,80 C 200,80 140,150 140,280" />
                        </circle>

                    </svg>
                </div>
            </CardContent>
        </Card>
    );
}
