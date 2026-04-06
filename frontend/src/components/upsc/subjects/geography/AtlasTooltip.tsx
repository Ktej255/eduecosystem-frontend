"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AtlasTooltipProps {
    x: number;
    y: number;
    regionName: string;
    topicName: string;
    description: string;
    mastery: number; // 0, 1, or 2
    isLocked: boolean;
    isVisible: boolean;
    topicId: number;
}

const AtlasTooltip: React.FC<AtlasTooltipProps> = ({
    x,
    y,
    regionName,
    topicName,
    description,
    mastery = 0,
    isLocked = false,
    isVisible = false,
    topicId,
}) => {
    // Mastery Visuals
    const masteryConfigs = [
        { label: "Untouched", color: "bg-slate-400", text: "text-slate-400", progress: 0 },
        { label: "In Progress", color: "bg-amber-500", text: "text-amber-500", progress: 45 },
        { label: "Mastered", color: "bg-emerald-500", text: "text-emerald-500", progress: 100 },
    ];

    const currentMastery = masteryConfigs[mastery] || masteryConfigs[0];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed z-50 pointer-events-none"
                    style={{ left: x + 15, top: y + 15 }}
                >
                    <div className="relative pointer-events-auto bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-5 min-w-[280px] max-w-[320px]">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{regionName}</span>
                            {isLocked && (
                                <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-700 text-[10px] py-0 px-2 h-5 font-bold uppercase tracking-tighter">
                                    Coming Soon
                                </Badge>
                            )}
                        </div>

                        {/* Title & Description */}
                        <div className="mb-4">
                            <h3 className="font-bold text-base leading-tight mb-1">{topicName}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed italic">{description}</p>
                        </div>

                        {/* Mastery Progress (If not locked) */}
                        {!isLocked ? (
                            <div className="space-y-3 pt-3 border-t border-border/50">
                                <div className="flex items-center justify-between text-[11px] font-medium">
                                    <div className="flex items-center gap-1.5 font-bold">
                                         <div className={`w-2 h-2 rounded-full ${currentMastery.color}`} />
                                         <span className={currentMastery.text}>{currentMastery.label}</span>
                                    </div>
                                    <span className="text-muted-foreground">{currentMastery.progress}% Mastery</span>
                                </div>
                                <Progress value={currentMastery.progress} className="h-1.5" />
                                
                                {/* Call to Action */}
                                <div className="pt-2">
                                    <Link href={`/student/upsc/geography/mcq?chapter=${topicId}&level=1`}>
                                        <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-9 text-xs font-semibold flex items-center justify-center gap-2 group">
                                            <Target className="w-3.5 h-3.5" />
                                            Practice MCQs
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="pt-4 border-t border-border/50 flex flex-col items-center text-center">
                                <div className="p-3 bg-muted rounded-full mb-3">
                                    <Lock className="w-5 h-5 text-muted-foreground/50" />
                                </div>
                                <p className="text-[11px] text-muted-foreground max-w-[200px]">
                                    Module is currently being ingested by the Content Engine. Check back soon.
                                </p>
                            </div>
                        )}

                        {/* Dropdown Shadow Effect */}
                        <div className="absolute -z-10 bottom-[-10px] left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/10 blur-xl rounded-full" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AtlasTooltip;
