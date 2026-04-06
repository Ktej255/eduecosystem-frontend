"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, CheckCircle2, Bookmark, Map, Target } from "lucide-react";
import { ANCIENT_TOPICS } from "./data/ancient-types-27";
import { MEDIEVAL_CHAPTERS } from "./data/medieval-chapters";
import { SPECTRUM_MODERN_HISTORY } from "./data/spectrum-modern-history";
import { isEraChapterMastered } from "@/lib/history-era-store";

export default function DynastyAtlas() {
    const router = useRouter();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const scrollBy = (amount: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const navigateTo = (era: string, id: number | string) => {
        router.push(`/student/batch1-1/${era}-history/${id}`);
    };

    if (!hydrated) return null; // Prevent hydration mismatch on mastery badges

    return (
        <div className="relative w-full py-8 bg-stone-900 rounded-2xl shadow-inner border border-stone-800 overflow-hidden my-8">
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-stone-950 to-transparent pointer-events-none z-10" />
            
            <div className="px-8 pb-6 relative z-20 flex justify-between items-end">
                <div>
                    <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                        Interactive Map
                    </Badge>
                    <h2 className="text-3xl font-black text-white flex items-center gap-3 tracking-tight">
                        <Map className="h-8 w-8 text-amber-400" />
                        The Dynasty Atlas
                    </h2>
                    <p className="text-stone-400 mt-2 max-w-2xl text-sm">
                        Navigate 86 chapters horizontally across Ancient, Medieval, and Modern history timelines.
                        Hot spots indicate high-yield UPSC topics.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => scrollBy(-800)}
                        className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full border border-stone-700 text-stone-300 transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                        onClick={() => scrollBy(800)}
                        className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full border border-stone-700 text-stone-300 transition-colors"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="overflow-x-auto pb-12 pt-8 px-8 no-scrollbar scroll-smooth whitespace-nowrap"
                style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                <div className="inline-flex gap-x-12 items-center relative">
                    {/* The continuous timeline track */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-stone-800 rounded-full -translate-y-1/2 z-0"></div>

                    {/* ENTIRE ERA WRAPPERS */}
                    
                    {/* ERAS: Ancient */}
                    <EraSwimlane 
                        title="Ancient India" 
                        color="emerald" 
                        chapters={ANCIENT_TOPICS} 
                        eraId="ancient" 
                        navigateTo={navigateTo} 
                    />

                    {/* ERAS: Medieval */}
                    <EraSwimlane 
                        title="Medieval India" 
                        color="fuchsia" 
                        chapters={MEDIEVAL_CHAPTERS} 
                        eraId="medieval" 
                        navigateTo={navigateTo} 
                    />

                    {/* ERAS: Modern */}
                    <EraSwimlane 
                        title="Modern India" 
                        color="blue" 
                        chapters={SPECTRUM_MODERN_HISTORY} 
                        eraId="modern" 
                        navigateTo={navigateTo} 
                    />
                </div>
            </div>
        </div>
    );
}

// Subcomponent to render a specific era's swimlane
function EraSwimlane({ title, color, chapters, eraId, navigateTo }: { 
    title: string, color: string, chapters: any[], eraId: string, 
    navigateTo: (era: string, id: number|string) => void 
}) {
    // Style mappings dynamically
    const map: Record<string, { bg: string, ring: string, text: string, track: string, nodeOn: string }> = {
        emerald: { bg: 'bg-emerald-950/50', ring: 'border-emerald-500/30', text: 'text-emerald-400', track: 'bg-emerald-500/20', nodeOn: 'bg-emerald-500 shadow-emerald-500/50' },
        fuchsia: { bg: 'bg-fuchsia-950/50', ring: 'border-fuchsia-500/30', text: 'text-fuchsia-400', track: 'bg-fuchsia-500/20', nodeOn: 'bg-fuchsia-500 shadow-fuchsia-500/50' },
        blue:    { bg: 'bg-blue-950/50',    ring: 'border-blue-500/30',    text: 'text-blue-400',    track: 'bg-blue-500/20',    nodeOn: 'bg-blue-500 shadow-blue-500/50' }
    };
    const style = map[color] || map.blue;

    return (
        <div className={`relative inline-flex flex-col items-center justify-center p-6 rounded-3xl border-2 ${style.ring} ${style.bg}`}>
            <div className="absolute top-4 left-6">
                <Badge variant="outline" className={`border-${color}-500/50 ${style.text} bg-black/40 font-bold uppercase tracking-widest`}>
                    {title} ({chapters.length})
                </Badge>
            </div>
            
            {/* Colored track segment */}
            <div className={`absolute top-1/2 left-0 right-0 h-2 ${style.track} -translate-y-1/2 z-0`}></div>

            <div className="flex gap-4 mt-12 relative z-10 items-center h-48">
                {chapters.map((ch, idx) => {
                    // Extract data based on different chapter interfaces across eras
                    const masterStatus = isEraChapterMastered(eraId as any, ch.id);
                    const isPyqHeavy = ch.pyqCount && ch.pyqCount > 4; // Arbitrary logic to highlight important medieval nodes
                    const isHot = ch.priority === 'High' || ch.priority === 'A' || isPyqHeavy;

                    // Alternating positions (Up or Down)
                    const isUp = idx % 2 === 0;

                    return (
                        <motion.div 
                            key={ch.id}
                            whileHover={{ scale: 1.05, y: isUp ? -5 : 5 }}
                            className="relative flex flex-col items-center cursor-pointer group"
                            onClick={() => navigateTo(eraId, ch.id)}
                        >
                            {/* Card appearing either above or below the node */}
                            <div className={`absolute w-44 opacity-0 transition-opacity group-hover:opacity-100 ${
                                isUp ? 'bottom-8 pb-4' : 'top-8 pt-4'
                            }`}>
                                <Card className="border-stone-700 bg-stone-800 shadow-xl overflow-hidden">
                                    <div className={`h-1.5 w-full ${style.nodeOn}`} />
                                    <CardContent className="p-3 text-left">
                                        <div className="text-[10px] font-bold text-stone-400 uppercase mb-1">Chapter {ch.id}</div>
                                        <div className="text-sm font-semibold text-white leading-tight break-words whitespace-normal line-clamp-2">
                                            {ch.title}
                                        </div>
                                        {masterStatus && (
                                            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mt-2 text-[10px] px-1 py-0">Mastered</Badge>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Node Point */}
                            <div className={`w-5 h-5 rounded-full border-4 border-stone-800 transition-colors flex items-center justify-center
                                ${masterStatus ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 
                                  isHot ? 'bg-amber-400 animate-pulse' : 'bg-stone-500'}`}
                            ></div>

                            {/* Connecting Line to Node */}
                            <div className={`absolute w-0.5 h-6 bg-stone-700 ${isUp ? 'bottom-2.5' : 'top-2.5'}`}></div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
