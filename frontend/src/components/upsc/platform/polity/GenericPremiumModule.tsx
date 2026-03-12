"use client";

import React from "react";
import {
    BookOpen, Sparkles, Target,
    FileText, CheckCircle2, Award,
    Layers, Cpu, Zap, Box
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface GenericPremiumModuleProps {
    topicId: number;
    title: string;
    staticFocus?: string[];
    keyConcepts?: string[];
    prelimsPointers?: string[];
    onComplete?: () => void;
    isCompleted?: boolean;
}

const PremiumContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <div className="max-w-5xl mx-auto space-y-10">
            {children}
        </div>
    </div>
);

const FeatureSection = ({ title, icon: Icon, children, color = "indigo" }: { title: string, icon: any, children: React.ReactNode, color?: string }) => {
    const colorClasses: Record<string, string> = {
        indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
        amber: "bg-amber-50 border-amber-200 text-amber-700",
        emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
        sky: "bg-sky-50 border-sky-200 text-sky-700",
    };

    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${colorClasses[color]}`}>
                    <Icon size={20} />
                </div>
                <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {children}
            </div>
        </section>
    );
};

const SmartCard = ({ title, children, icon: Icon, delay = 0 }: { title: string, children: React.ReactNode, icon: any, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
    >
        <Card className="h-full border-2 border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
            <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                    <div className="bg-slate-50 p-2 rounded-lg text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-slate-700 group-hover:text-indigo-900 transition-colors uppercase text-xs tracking-widest">{title}</h3>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed font-medium">
                    {children}
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

export default function GenericPremiumModule({
    topicId,
    title,
    staticFocus = [],
    keyConcepts = [],
    prelimsPointers = [],
    onComplete,
    isCompleted
}: GenericPremiumModuleProps) {
    return (
        <PremiumContainer>
            {/* HERO SECTION */}
            <div className="bg-slate-950 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border-b-[12px] border-indigo-600">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Box size={240} className="rotate-12" />
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3 text-indigo-400 uppercase tracking-[0.2em] text-[10px] font-black">
                        <Cpu size={14} className="animate-pulse" /> Advanced Learning Module v2.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 font-serif leading-[1.1]">
                        {title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        <Badge className="bg-indigo-600/30 text-indigo-100 border-indigo-500/50 px-4 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                            Topic ID: {topicId}
                        </Badge>
                        <Badge className="bg-emerald-600/30 text-emerald-100 border-emerald-500/50 px-4 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                            Part of Part I-IV
                        </Badge>
                        <Badge className="bg-sky-600/30 text-sky-100 border-sky-500/50 px-4 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                            Core Concept
                        </Badge>
                    </div>
                </div>
            </div>

            {/* STATIC FOCUS SECTION */}
            {staticFocus.length > 0 && (
                <FeatureSection title="High Yield Focus" icon={Target} color="amber">
                    {staticFocus.map((focus, i) => (
                        <SmartCard key={i} title={`Focus Area ${i + 1}`} icon={Sparkles} delay={i * 0.1}>
                            <p className="bg-amber-50/50 p-2 rounded border border-amber-100 text-amber-900 font-bold mb-2">CRITICAL DATA</p>
                            {focus}
                        </SmartCard>
                    ))}
                </FeatureSection>
            )}

            {/* KEY CONCEPTS SECTION */}
            {keyConcepts.length > 0 && (
                <FeatureSection title="Conceptual Framework" icon={Layers} color="indigo">
                    {keyConcepts.map((concept, i) => (
                        <SmartCard key={i} title={`Core Concept ${String.fromCharCode(65 + i)}`} icon={FileText} delay={i * 0.1}>
                            <p className="bg-indigo-50/50 p-2 rounded border border-indigo-100 text-indigo-900 font-bold mb-2">EXAM LOGIC</p>
                            {concept}
                        </SmartCard>
                    ))}
                </FeatureSection>
            )}

            {/* PRELIMS POINTERS */}
            {prelimsPointers.length > 0 && (
                <section className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute -left-10 -bottom-10 opacity-10">
                        <Zap size={200} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-emerald-800 p-2 rounded-xl">
                                <Award size={24} className="text-emerald-400" />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Prelims Bullet Points</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {prelimsPointers.map((pointer, i) => (
                                <div key={i} className="flex gap-4 items-start bg-emerald-800/50 p-4 rounded-xl border border-emerald-700/50 hover:bg-emerald-800 transition-colors">
                                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={18} />
                                    <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                                        {pointer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* DATA STATUS FOOTER */}
            <div className="bg-slate-100 border-2 border-slate-200 rounded-3xl p-6 text-center space-y-4">
                <div className="flex justify-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Last Synced: {new Date().toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Version 2.4</span>
                    <span>•</span>
                    <span>Standard Polity Framework</span>
                </div>
            </div>
        </PremiumContainer>
    );
}
