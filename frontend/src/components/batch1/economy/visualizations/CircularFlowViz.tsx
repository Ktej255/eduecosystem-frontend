"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DollarSign, Briefcase, ShoppingBag, Home, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CircularFlowViz() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [flowSpeed, setFlowSpeed] = useState(1);

    return (
        <Card className="w-full bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

            <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <DollarSign className="w-5 h-5" />
                            </span>
                            Circular Flow of Income
                        </CardTitle>
                        <CardDescription>
                            Real Flow (Goods/Services) vs Money Flow (Income/Expenditure) in a 2-Sector Model
                        </CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={isPlaying ? "bg-amber-100 text-amber-900 border-amber-200 hover:bg-amber-200" : ""}
                        >
                            {isPlaying ? "Pause Flow" : "Resume Flow"}
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 min-h-[500px] flex items-center justify-center">
                {/* Main Container */}
                <div className="relative w-full max-w-3xl aspect-[1.8/1]">

                    {/* SVG Paths for Flows */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450">
                        {/* DEFS for Arrows */}
                        <defs>
                            <marker id="arrow-money" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L6,3 z" fill="#22c55e" />
                            </marker>
                            <marker id="arrow-real" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6" />
                            </marker>
                        </defs>

                        {/* Top Arc: Factor Services (Households -> Firms) -- REAL FLOW */}
                        <path
                            id="real-flow-top"
                            d="M 200,200 C 200,50 600,50 600,200"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeDasharray="8 4"
                            className="opacity-30"
                        />
                        {/* Bottom Arc: Goods & Services (Firms -> Households) -- REAL FLOW */}
                        <path
                            id="real-flow-bottom"
                            d="M 600,250 C 600,400 200,400 200,250"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeDasharray="8 4"
                            className="opacity-30"
                        />

                        {/* Top Inner Arc: Factor Payments (Firms -> Households) -- MONEY FLOW */}
                        <path
                            id="money-flow-top"
                            d="M 600,200 C 600,80 200,80 200,200"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                        />

                        {/* Bottom Inner Arc: Consumption Expenditure (Households -> Firms) -- MONEY FLOW */}
                        <path
                            id="money-flow-bottom"
                            d="M 200,250 C 200,370 600,370 600,250"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                        />

                        {/* Labels on Paths */}
                        <g transform="translate(400, 70)">
                            <rect x="-60" y="-14" width="120" height="28" rx="14" fill="white" className="dark:fill-slate-900" stroke="#22c55e" />
                            <text x="0" y="5" textAnchor="middle" className="text-xs font-bold fill-green-600 dark:fill-green-400">Factor Payments</text>
                        </g>
                        <text x="400" y="40" textAnchor="middle" className="text-[10px] fill-blue-500 font-medium tracking-widest uppercase">Factor Services (Labor/Land)</text>

                        <g transform="translate(400, 380)">
                            <rect x="-70" y="-14" width="140" height="28" rx="14" fill="white" className="dark:fill-slate-900" stroke="#22c55e" />
                            <text x="0" y="5" textAnchor="middle" className="text-xs font-bold fill-green-600 dark:fill-green-400">Consumption Exp.</text>
                        </g>
                        <text x="400" y="420" textAnchor="middle" className="text-[10px] fill-blue-500 font-medium tracking-widest uppercase">Goods & Services</text>

                    </svg>

                    {/* Animated Particles */}
                    {isPlaying && (
                        <>
                            {/* Money Flow Particles (Green) */}
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={`money-${i}`}
                                    className="absolute w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] z-20"
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{
                                        duration: 4 / flowSpeed,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * (4 / 3)
                                    }}
                                    style={{
                                        offsetPath: `path("M 600,200 C 600,80 200,80 200,200")`
                                    }}
                                />
                            ))}
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={`exp-${i}`}
                                    className="absolute w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] z-20"
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{
                                        duration: 4 / flowSpeed,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * (4 / 3)
                                    }}
                                    style={{
                                        offsetPath: `path("M 200,250 C 200,370 600,370 600,250")`
                                    }}
                                />
                            ))}

                            {/* Real Flow Particles (Blue) */}
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={`real-${i}`}
                                    className="absolute w-2 h-2 bg-blue-500 rounded-full z-10 opacity-60"
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{
                                        duration: 6 / flowSpeed,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 2
                                    }}
                                    style={{
                                        offsetPath: `path("M 200,200 C 200,50 600,50 600,200")`
                                    }}
                                />
                            ))}
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={`goods-${i}`}
                                    className="absolute w-2 h-2 bg-blue-500 rounded-full z-10 opacity-60"
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{
                                        duration: 6 / flowSpeed,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 2
                                    }}
                                    style={{
                                        offsetPath: `path("M 600,250 C 600,400 200,400 200,250")`
                                    }}
                                />
                            ))}
                        </>
                    )}

                    {/* Left Node: Households */}
                    <div className="absolute left-[120px] top-1/2 -translate-y-1/2 w-40 flex flex-col items-center gap-3 z-30">
                        <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-900 shadow-xl flex items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform">
                            <Home className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                            <Badge className="absolute -top-3 bg-indigo-600 text-white border-2 border-white dark:border-slate-900">
                                Consumers
                            </Badge>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Households</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Owners of Factors<br />(Land, Labor, Capital)</p>
                        </div>
                    </div>

                    {/* Right Node: Firms */}
                    <div className="absolute right-[120px] top-1/2 -translate-y-1/2 w-40 flex flex-col items-center gap-3 z-30">
                        <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border-2 border-orange-200 dark:border-orange-900 shadow-xl flex items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform">
                            <Factory className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                            <Badge className="absolute -top-3 bg-orange-600 text-white border-2 border-white dark:border-slate-900">
                                Producers
                            </Badge>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Firms</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Hire Factors<br />Produce Goods</p>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}
