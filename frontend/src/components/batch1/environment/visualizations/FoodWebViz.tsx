"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Rabbit, Skull, Bug, Sun, CloudRain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TROPHIC_LEVELS = [
    { id: 'producers', name: 'Producers', icon: Leaf, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30', desc: 'Plants, Algae (Autotrophs)' },
    { id: 'primary', name: 'Primary Consumers', icon: Rabbit, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30', desc: 'Herbivores' },
    { id: 'secondary', name: 'Secondary Consumers', icon: Skull, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30', desc: 'Carnivores/Omnivores' },
    { id: 'decomposers', name: 'Decomposers', icon: Bug, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30', desc: 'Fungi, Bacteria (Saprotrophs)' },
];

export default function FoodWebViz() {
    const [activeLevel, setActiveLevel] = useState<string | null>(null);

    return (
        <Card className="w-full bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden min-h-[500px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <Leaf className="w-5 h-5" />
                    </span>
                    Trophic Levels & Energy Flow
                </CardTitle>
                <CardDescription>
                    Interactive Food Web Model (10% Energy Law)
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full relative p-8 flex flex-col items-center justify-center gap-8">

                {/* Pyramid Structure */}
                <div className="flex flex-col-reverse gap-4 items-center w-full max-w-lg">
                    {TROPHIC_LEVELS.map((level, index) => {
                        const Icon = level.icon;
                        const isActive = activeLevel === level.id;
                        const widthClass = index === 0 ? 'w-full' : index === 1 ? 'w-3/4' : index === 2 ? 'w-1/2' : 'w-1/3';

                        return (
                            <motion.div
                                key={level.id}
                                className={`relative cursor-pointer transition-all duration-300 ${widthClass}`}
                                onMouseEnter={() => setActiveLevel(level.id)}
                                onMouseLeave={() => setActiveLevel(null)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={`h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 ${level.bg} ${isActive ? 'border-current opacity-100 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'} ${level.color}`}>
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-6 h-6" />
                                        <span className="font-bold uppercase tracking-wider text-sm">{level.name}</span>
                                    </div>
                                    <span className="text-xs font-medium dark:text-neutral-300 text-neutral-600 bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full">
                                        {index === 0 ? '100% Energy' : `${Math.pow(10, -(index)) * 100}% Energy`}
                                    </span>
                                </div>

                                {/* Info Tooltip on Side */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-48 bg-white dark:bg-neutral-900 p-3 rounded-lg border shadow-xl z-10"
                                    >
                                        <h4 className={`font-bold text-sm mb-1 ${level.color}`}>{level.name}</h4>
                                        <p className="text-xs text-neutral-500">{level.desc}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="absolute top-8 right-8 flex flex-col items-center text-yellow-500 opacity-50">
                    <Sun className="w-12 h-12 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">Solar Energy</span>
                </div>

            </CardContent>
        </Card>
    );
}
