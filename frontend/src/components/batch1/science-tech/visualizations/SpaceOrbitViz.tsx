"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Satellite, Globe, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SpaceOrbitViz() {
    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-sm overflow-hidden h-[400px]">
            <CardHeader className="border-b border-slate-900 bg-slate-900/50">
                <CardTitle className="flex items-center gap-2 text-white">
                    <span className="w-8 h-8 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                        <Rocket className="w-5 h-5" />
                    </span>
                    Space Technology
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Orbits: LEO (Low Earth Orbit) vs GEO (Geostationary)
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full relative flex items-center justify-center p-0 overflow-hidden">
                {/* Stars Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full opacity-40 animate-pulse"
                            style={{
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animationDuration: Math.random() * 3 + 2 + 's'
                            }}
                        />
                    ))}
                </div>

                {/* Earth */}
                <div className="relative w-24 h-24 rounded-full bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.4)] z-10 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-blue-300 opacity-80 animate-spin-slow" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-0 rounded-full border border-blue-400/30" />
                </div>

                {/* LEO Orbit Path */}
                <div className="absolute w-48 h-48 rounded-full border border-dashed border-slate-600 opacity-50" />

                {/* GEO Orbit Path */}
                <div className="absolute w-80 h-80 rounded-full border border-slate-700 opacity-30" />

                {/* LEO Satellite */}
                <motion.div
                    className="absolute w-48 h-48"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative group cursor-pointer">
                            <Satellite className="w-6 h-6 text-cyan-400" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded text-xs text-cyan-200 border border-cyan-900">
                                ISS / Remote Sensing (LEO)
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* GEO Satellite */}
                <motion.div
                    className="absolute w-80 h-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative group cursor-pointer">
                            <Radio className="w-6 h-6 text-amber-400" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded text-xs text-amber-200 border border-amber-900">
                                Comm Satellites (GEO)
                            </div>
                        </div>
                    </div>
                </motion.div>

            </CardContent>
        </Card>
    );
}
