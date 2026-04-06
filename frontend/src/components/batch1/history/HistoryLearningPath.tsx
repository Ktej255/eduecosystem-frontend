"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Clock, Sparkles, BookOpen, MapPin, CheckCircle2 } from "lucide-react";
import { ANCIENT_TOPICS } from "./data/ancient-types-27";
import { MEDIEVAL_CHAPTERS } from "./data/medieval-chapters";
import { SPECTRUM_MODERN_HISTORY } from "./data/spectrum-modern-history";

type Duration = 30 | 45 | 60 | 90;

interface MappedChapter {
    globalId: number;
    era: 'ancient' | 'medieval' | 'modern';
    localId: string | number;
    title: string;
    priority: string; // 'High', 'Medium', 'Low'
}

// Flatten all 86 chapters into a single sequential timeline
const ALL_CHAPTERS: MappedChapter[] = [
    // Ancient (27)
    ...ANCIENT_TOPICS.map((t, i) => ({
        globalId: i + 1,
        era: 'ancient' as const,
        localId: t.id,
        title: t.title,
        priority: 'Medium' 
    })),
    // Medieval (20)
    ...MEDIEVAL_CHAPTERS.map((t, i) => ({
        globalId: ANCIENT_TOPICS.length + i + 1,
        era: 'medieval' as const,
        localId: t.id,
        title: t.title,
        priority: t.priority
    })),
    // Modern (39)
    ...SPECTRUM_MODERN_HISTORY.map((t, i) => ({
        globalId: ANCIENT_TOPICS.length + MEDIEVAL_CHAPTERS.length + i + 1,
        era: 'modern' as const,
        localId: t.id,
        title: t.title,
        // Extrapolate a mock priority based on the dataset structure if needed
        priority: t.title.includes('Congress') || t.title.includes('Gandhi') ? 'High' : 'Medium'
    }))
];

export default function HistoryLearningPath() {
    const router = useRouter();
    const [duration, setDuration] = useState<Duration>(45);
    const [isGenerating, setIsGenerating] = useState(false);
    const [planGenerated, setPlanGenerated] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setPlanGenerated(true);
        }, 1200);
    };

    // Calculate grouping
    const dailyPlan = useMemo(() => {
        if (!planGenerated) return [];
        const plan: MappedChapter[][] = [];
        const total = ALL_CHAPTERS.length; // 86
        const chaptersPerDay = Math.ceil(total / duration); // approx 2-3
        
        for (let i = 0; i < total; i += chaptersPerDay) {
            plan.push(ALL_CHAPTERS.slice(i, i + chaptersPerDay));
        }
        return plan;
    }, [duration, planGenerated]);

    return (
        <div className="w-full">
            {/* Header & Controls */}
            <div className="bg-stone-900 border-2 border-stone-800 rounded-3xl p-8 mb-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none mix-blend-overlay">
                    <Calendar className="w-64 h-64 text-emerald-400" />
                </div>
                
                <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4 px-3 py-1 font-bold uppercase tracking-widest">
                    Adaptive Planner
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    History Learning Path
                </h1>
                
                <p className="text-stone-400 text-lg max-w-2xl mb-8">
                    Distribute 86 chapters of Ancient, Medieval, and Modern History into a focused, achievable daily schedule aligned with your UPSC Prelims target.
                </p>

                {!planGenerated && !isGenerating && (
                    <div className="bg-stone-950/50 border border-stone-800 rounded-2xl p-6 backdrop-blur-sm max-w-2xl relative z-10">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-amber-500" />
                            Select Target Duration
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {[30, 45, 60, 90].map((days) => (
                                <button
                                    key={days}
                                    onClick={() => setDuration(days as Duration)}
                                    className={`py-4 rounded-xl border-2 font-black text-xl transition-all ${
                                        duration === days 
                                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                                        : 'border-stone-800 bg-stone-900 text-stone-500 hover:border-stone-600 hover:bg-stone-800'
                                    }`}
                                >
                                    {days} <span className="text-sm font-semibold uppercase block tracking-wider mt-1 opacity-80">Days</span>
                                </button>
                            ))}
                        </div>
                        <Button 
                            onClick={handleGenerate}
                            className="w-full h-12 bg-white text-stone-900 hover:bg-stone-200 font-extrabold text-lg transition-transform hover:scale-[1.02]"
                        >
                            <Sparkles className="w-5 h-5 mr-2" />
                            Generate Optimal Plan
                        </Button>
                    </div>
                )}

                {isGenerating && (
                    <div className="py-12 flex flex-col items-center justify-center relative z-10">
                        <div className="w-16 h-16 border-4 border-stone-800 border-t-emerald-500 rounded-full animate-spin mb-4" />
                        <p className="text-emerald-400 font-bold animate-pulse">Running timeline distribution algorithm...</p>
                        <p className="text-stone-500 text-sm mt-2">Mapping 86 chapters across {duration} days</p>
                    </div>
                )}

                {planGenerated && !isGenerating && (
                    <div className="flex items-center gap-6 mt-4 relative z-10">
                        <div className="flex items-center gap-3 bg-emerald-950/50 border border-emerald-900/50 rounded-xl p-4">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                            <div>
                                <div className="text-emerald-400 font-bold">{duration}-Day Plan Active</div>
                                <div className="text-emerald-500/70 text-sm font-medium">86 Chapters • ~{Math.ceil(86/duration)}/day</div>
                            </div>
                        </div>
                        <Button 
                            variant="outline" 
                            className="bg-stone-800 border-stone-700 text-stone-300 hover:text-white"
                            onClick={() => setPlanGenerated(false)}
                        >
                            Reset Plan
                        </Button>
                    </div>
                )}
            </div>

            {/* Generated Plan Render */}
            {planGenerated && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-stone-800 flex items-center gap-2 border-b-2 border-stone-200 pb-3">
                        <MapPin className="w-6 h-6 text-emerald-500" />
                        Your Daily Roadmap
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {dailyPlan.map((dayChapters, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Card className="h-full border-2 border-stone-200 hover:border-emerald-300 transition-colors shadow-sm bg-white overflow-hidden group">
                                        <CardHeader className="bg-stone-50 border-b border-stone-100 py-3 flex flex-row items-center justify-between space-y-0">
                                            <CardTitle className="text-base font-extrabold text-stone-900 bg-white px-3 py-1 rounded-md shadow-sm border border-stone-100">
                                                Day {idx + 1}
                                            </CardTitle>
                                            <Badge variant="secondary" className="bg-stone-200 text-stone-600 uppercase font-black tracking-wider text-[10px]">
                                                {dayChapters.length} Chapters
                                            </Badge>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <div className="divide-y divide-stone-100">
                                                {dayChapters.map((ch, count) => {
                                                    const isHot = ch.priority === 'High';
                                                    return (
                                                        <div key={ch.globalId} className="p-4 hover:bg-stone-50 transition-colors group/item">
                                                            <div className="flex items-start gap-3">
                                                                <div className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                                                                    ch.era === 'ancient' ? 'bg-emerald-100 text-emerald-700' :
                                                                    ch.era === 'medieval' ? 'bg-fuchsia-100 text-fuchsia-700' :
                                                                    'bg-blue-100 text-blue-700'
                                                                }`}>
                                                                    {ch.era.charAt(0).toUpperCase()}
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                                                                            Chapter {ch.localId}
                                                                        </span>
                                                                        {isHot && (
                                                                            <Badge className="bg-rose-100 hover:bg-rose-200 text-rose-700 border-0 h-4 px-1.5 text-[9px]">HIGH YIELD</Badge>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="font-semibold text-stone-800 text-sm leading-tight group-hover/item:text-emerald-700 transition-colors">
                                                                        {ch.title}
                                                                    </h4>
                                                                </div>
                                                                <button 
                                                                    onClick={() => router.push(`/student/batch1-1/${ch.era}-history/${ch.localId}`)}
                                                                    className="opacity-0 group-hover/item:opacity-100 p-2 text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                                                >
                                                                    <Play className="w-4 h-4 fill-current" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
}
