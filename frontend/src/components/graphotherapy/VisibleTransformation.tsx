"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Image as ImageIcon, ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BeforeAfterSlider from './BeforeAfterSlider';
import { Progress } from "@/components/ui/progress";

interface MetricImprovement {
    name: string;
    improvement: number;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const improvements: MetricImprovement[] = [
    { 
        name: "Emotional Stability", 
        improvement: 24, 
        description: "Your baseline is 15% straighter than Day 1.", 
        icon: <ShieldCheck className="w-4 h-4" />,
        color: "text-blue-400"
    },
    { 
        name: "Focus & Willpower", 
        improvement: 38, 
        description: "T-bars are consistently higher and stronger.", 
        icon: <Target className="w-4 h-4" />,
        color: "text-orange-400"
    },
    { 
        name: "Cognitive Flow", 
        improvement: 19, 
        description: "Connective strokes show smoother transitions.", 
        icon: <Zap className="w-4 h-4" />,
        color: "text-yellow-400"
    }
];

export default function VisibleTransformation({ 
    baselineImage, 
    currentImage, 
    transformationScore,
    currentDay
}: { 
    baselineImage?: string; 
    currentImage?: string; 
    transformationScore: number;
    currentDay: number;
}) {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-yellow-400" />
                        Your Transformation
                    </h2>
                    <p className="text-neutral-500 text-sm">Visible neurological shifts in your handwriting.</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-black text-green-400">{transformationScore}%</div>
                    <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-tighter">Improvement Index</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
                {/* Left: Before/After Slider */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <BeforeAfterSlider 
                            beforeImage={baselineImage}
                            afterImage={currentImage}
                            beforeLabel="Day 1 Baseline"
                            afterLabel={`Day ${currentDay} Progress`}
                        />
                    </div>
                    <div className="flex justify-between items-center px-2">
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                            <ImageIcon className="w-4 h-4" />
                            Drag slider to see evolution
                        </div>
                        <div className="text-xs text-neutral-500 font-medium">
                            Latest update: {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>

                {/* Right: Improvement Signals & Narrative */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-neutral-800/50 border-white/5 backdrop-blur-xl rounded-3xl overflow-hidden">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                Growth Signals
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {improvements.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-2"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 text-sm font-bold text-white">
                                            <span className={item.color}>{item.icon}</span>
                                            {item.name}
                                        </div>
                                        <div className={`text-xs font-black ${item.color}`}>+{item.improvement}%</div>
                                    </div>
                                    <Progress value={item.improvement * 2} className="h-1 bg-neutral-900" indicatorClassName={`bg-gradient-to-r ${i === 0 ? 'from-blue-600 to-cyan-400' : i === 1 ? 'from-orange-600 to-amber-400' : 'from-yellow-600 to-yellow-400'}`} />
                                    <p className="text-[11px] text-neutral-500 italic">{item.description}</p>
                                </motion.div>
                            ))}

                            <div className="pt-4 border-t border-white/5">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">The Progress Story</h4>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    You started with a <span className="text-blue-400 font-medium">variable slant</span> indicating internal emotional flux. 
                                    As of Day {currentDay}, your writing shows <span className="text-green-400 font-medium">consistent pressure</span> and stable baselines, 
                                    reflecting a more grounded and focused subconscious state.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Rewards & Coins Connection */}
                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 p-6 rounded-3xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles className="w-12 h-12 text-yellow-400" />
                         </div>
                         <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Effort Proof</h4>
                         <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-black text-yellow-400">{(currentDay * 150).toLocaleString()}</span>
                            <span className="text-sm font-bold text-neutral-500 uppercase">Coins Earned</span>
                         </div>
                         <p className="text-xs text-neutral-500 leading-tight">
                            Every coin represents a neural connection strengthened. Your discipline is your greatest asset.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
