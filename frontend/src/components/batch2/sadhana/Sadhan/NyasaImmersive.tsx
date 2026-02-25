"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Shield, Sparkles, CheckCircle2, RotateCcw, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface NyasaPoint {
    id: string;
    label: string;
    mantra: string;
    x: number; // percentage
    y: number; // percentage
}

const RISHI_NYASA: NyasaPoint[] = [
    { id: "head", label: "Rishi (At Crown)", mantra: "अस्य श्री-मन्त्रस्य ब्रह्मा-ऋषये नमः शिरसि", x: 50, y: 10 },
    { id: "mouth", label: "Chanda (At Mouth)", mantra: "अनुष्टुप्-छन्दसे नमः मुखे", x: 50, y: 18 },
    { id: "heart", label: "Devata (At Heart)", mantra: "श्री-महा-त्रिपुर-सुन्दरी-देवतायै नमः हृदि", x: 50, y: 40 },
    { id: "genitals", label: "Bija (At Base)", mantra: "ऐं बीजाय नमः गुह्ये", x: 50, y: 75 },
    { id: "feet", label: "Shakti (At Feet)", mantra: "सौः शक्तये नमः पादयोः", x: 50, y: 95 },
];

const ANGA_NYASA: NyasaPoint[] = [
    { id: "heart", label: "Hridayaya (Heart)", mantra: "हृदयाय नमः", x: 50, y: 40 },
    { id: "head", label: "Shirase (Head)", mantra: "शिरसे स्वाहा", x: 50, y: 8 },
    { id: "crown", label: "Shikhayai (Crown)", mantra: "शिखायै वषट्", x: 52, y: 2 },
    { id: "shoulders", label: "Kavachaya (Shoulders)", mantra: "कवचाय हुम्", x: 40, y: 25 },
    { id: "eyes", label: "Netraya (Eyes)", mantra: "नेत्रत्रयाय वौषट्", x: 50, y: 14 },
    { id: "hands", label: "Astraya (Strike)", mantra: "अस्त्राय फट्", x: 75, y: 55 },
];

export function NyasaImmersive() {
    const [activeSequence, setActiveSequence] = useState<"rishi" | "anga">("rishi");
    const [completedPoints, setCompletedPoints] = useState<string[]>([]);
    const [draggingPoint, setDraggingPoint] = useState<NyasaPoint | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    const points = activeSequence === "rishi" ? RISHI_NYASA : ANGA_NYASA;

    const handleDrop = (pointId: string) => {
        if (completedPoints.includes(pointId)) return;

        setCompletedPoints(prev => {
            const updated = [...prev, pointId];
            if (updated.length === points.length) {
                setIsComplete(true);
            }
            return updated;
        });
        setDraggingPoint(null);
    };

    const reset = () => {
        setCompletedPoints([]);
        setIsComplete(false);
    };

    return (
        <div className="relative w-full min-h-[800px] flex flex-col items-center justify-center p-8 bg-slate-950/20 rounded-[3rem] border border-white/5 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
                <AnimatePresence>
                    {isComplete && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-amber-500/10 transition-colors duration-2000"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Header Controls */}
            <div className="relative z-10 w-full max-w-4xl flex items-center justify-between mb-12">
                <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-black text-white flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-500" />
                        Nyasa: Body Consecration
                    </h3>
                    <p className="text-sm text-slate-400">Place the sacred mantras onto your energetic body.</p>
                </div>

                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                    <button
                        onClick={() => { setActiveSequence("rishi"); reset(); }}
                        className={cn(
                            "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                            activeSequence === "rishi" ? "bg-amber-500 text-slate-950" : "text-slate-500 hover:text-white"
                        )}
                    >
                        Rishi Nyasa
                    </button>
                    <button
                        onClick={() => { setActiveSequence("anga"); reset(); }}
                        className={cn(
                            "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                            activeSequence === "anga" ? "bg-amber-500 text-slate-950" : "text-slate-500 hover:text-white"
                        )}
                    >
                        Anga Nyasa
                    </button>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Left: Mantra List (Draggable Source) */}
                <div className="md:col-span-4 order-2 md:order-1 flex flex-col gap-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Available Mantras</h4>
                    {points.map((p) => {
                        const done = completedPoints.includes(p.id);
                        return (
                            <motion.div
                                key={p.id}
                                layoutId={p.id}
                                draggable={!done}
                                onDragStart={() => setDraggingPoint(p)}
                                className={cn(
                                    "p-5 rounded-2xl border transition-all cursor-grab active:cursor-grabbing group",
                                    done
                                        ? "bg-emerald-500/10 border-emerald-500/20 opacity-50 cursor-default"
                                        : "bg-white/[0.03] border-white/10 hover:border-amber-500/50 hover:bg-white/[0.05]"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center border transition-colors",
                                        done ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-white/5 border-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/40"
                                    )}>
                                        {done ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-5 h-5 opacity-40 group-hover:opacity-100" />}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">{p.label}</p>
                                        <p className="text-lg font-serif text-white">{p.mantra}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Center: Body Visualization */}
                <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative">
                    <div className="relative w-full max-w-[400px] aspect-[1/2]">
                        {/* Shadow Body Silhouette */}
                        <svg viewBox="0 0 200 400" className="w-full h-full text-white/[0.03] fill-current drop-shadow-[0_0_50px_rgba(255,255,255,0.02)]">
                            <path d="M100,5 C120,5 135,20 135,40 C135,60 120,75 100,75 C80,75 65,60 65,40 C65,20 80,5 100,5 Z" /> {/* Head */}
                            <path d="M60,80 L140,80 L155,140 L160,250 L140,250 L135,160 L125,160 L130,390 L95,390 L100,200 L105,200 L70,390 L10,390 L75,160 L65,160 L60,250 L40,250 L45,140 Z" /> {/* Body & Limbs simplified */}
                        </svg>

                        {/* Interactive Targets */}
                        {points.map((p) => {
                            const done = completedPoints.includes(p.id);
                            const active = draggingPoint?.id === p.id;

                            return (
                                <motion.div
                                    key={p.id}
                                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center p-2"
                                    onMouseUp={() => draggingPoint?.id === p.id && handleDrop(p.id)}
                                    // Touch / Mobile handle
                                    onPointerUp={() => draggingPoint?.id === p.id && handleDrop(p.id)}
                                >
                                    <div className={cn(
                                        "w-full h-full rounded-full border-2 flex items-center justify-center transition-all duration-500",
                                        done
                                            ? "bg-emerald-500 border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                                            : active
                                                ? "bg-amber-500/40 border-amber-500 animate-pulse scale-150"
                                                : "bg-white/5 border-white/10"
                                    )}>
                                        {done && <CheckCircle2 className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="absolute mt-14 text-[8px] font-black uppercase tracking-widest text-white/20 whitespace-nowrap">
                                        {p.label}
                                    </span>
                                </motion.div>
                            );
                        })}

                        {/* Connection Lines if complete */}
                        <AnimatePresence>
                            {isComplete && (
                                <motion.svg
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                    viewBox="0 0 100 200"
                                >
                                    {points.slice(0, -1).map((p, i) => (
                                        <line
                                            key={i}
                                            x1={p.x} y1={p.y}
                                            x2={points[i + 1].x} y2={points[i + 1].y}
                                            stroke="white" strokeWidth="0.5" strokeDasharray="2 2"
                                        />
                                    ))}
                                </motion.svg>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: Instructions & Insight */}
                <div className="md:col-span-3 order-3 flex flex-col gap-8">
                    <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-3xl">
                        <h5 className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Info className="w-3 h-3" /> Spiritual Insight
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed italic">
                            Nyasa is the science of placing divine vibration onto biological matter. By dragging these mantras, you are mentally "mapping" the deity's power onto your own skeletal and nervous structure.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Progress</h4>
                            <span className="text-amber-500 font-mono text-sm">{completedPoints.length} / {points.length}</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-amber-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${(completedPoints.length / points.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    <AnimatePresence>
                        {isComplete && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-2xl text-center">
                                    <p className="text-emerald-400 text-xs font-black uppercase">Vessel Harmonized</p>
                                </div>
                                <button
                                    onClick={reset}
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm text-white"
                                >
                                    <RotateCcw className="w-4 h-4" /> Reset Ritual
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
