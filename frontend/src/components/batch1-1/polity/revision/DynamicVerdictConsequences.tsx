"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Scale, Activity, Gavel, GitBranch, ShieldAlert,
    BookOpen, CheckCircle2, ChevronRight, Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type VerdictEffect = {
    id: string;
    entity: 'Parliament' | 'Executive' | 'Judiciary' | 'Citizens';
    impact: 'positive' | 'negative' | 'neutral';
    description: string;
    articleAffected: string;
};

type LandmarkCase = {
    id: string;
    name: string;
    year: number;
    coreIssue: string;
    judgment: string;
    effects: VerdictEffect[];
    isUnlocked: boolean;
};

// --- Data ---
const LANDMARK_CASES: LandmarkCase[] = [
    {
        id: "kesavananda",
        name: "Kesavananda Bharati",
        year: 1973,
        coreIssue: "Can Parliament amend ANY part of the Constitution, including Fundamental Rights?",
        judgment: "Parliament CAN amend any part, BUT cannot alter the 'Basic Structure' of the Constitution.",
        isUnlocked: true,
        effects: [
            {
                id: "k1",
                entity: "Parliament",
                impact: "negative",
                description: "Lost absolute amending power under Article 368. Any amendment is now subject to Judicial Review.",
                articleAffected: "Art. 368"
            },
            {
                id: "k2",
                entity: "Judiciary",
                impact: "positive",
                description: "Emerged as the supreme interpreter and guardian of the Constitution's core identity.",
                articleAffected: "Art. 13 & 32"
            },
            {
                id: "k3",
                entity: "Citizens",
                impact: "positive",
                description: "Fundamental Rights secured against arbitrary deletion by legislative majority.",
                articleAffected: "Part III"
            }
        ]
    },
    {
        id: "minerva",
        name: "Minerva Mills",
        year: 1980,
        coreIssue: "Does DPSP take precedence over Fundamental Rights?",
        judgment: "The Constitution is founded on the bedrock of 'balance' between Fundamental Rights and DPSP. Harmony between them is a basic feature.",
        isUnlocked: true,
        effects: [
            {
                id: "m1",
                entity: "Parliament",
                impact: "negative",
                description: "Section 4 and 5 of 42nd Amendment struck down. Cannot put all DPSP above Arts. 14 & 19.",
                articleAffected: "Art. 31C"
            },
            {
                id: "m2",
                entity: "Judiciary",
                impact: "positive",
                description: "Reaffirmed the power of Judicial Review as a basic feature.",
                articleAffected: "Art. 32 & 226"
            }
        ]
    },
    {
        id: "puttaswamy",
        name: "K.S. Puttaswamy (Privacy)",
        year: 2017,
        coreIssue: "Is the Right to Privacy a Fundamental Right?",
        judgment: "Yes. Right to Privacy is an intrinsic part of Right to Life and Personal Liberty under Article 21.",
        isUnlocked: false,
        effects: []
    }
];

export default function DynamicVerdictConsequences() {
    const [selectedCase, setSelectedCase] = useState<LandmarkCase>(LANDMARK_CASES[0]);

    const getImpactStyle = (impact: VerdictEffect['impact']) => {
        switch (impact) {
            case 'positive': return "border-emerald-500/50 bg-emerald-950/20 text-emerald-300";
            case 'negative': return "border-rose-500/50 bg-rose-950/20 text-rose-300";
            case 'neutral': return "border-blue-500/50 bg-blue-950/20 text-blue-300";
            default: return "border-slate-500/50 bg-slate-900 text-slate-300";
        }
    };

    const getImpactBg = (impact: VerdictEffect['impact']) => {
        switch (impact) {
            case 'positive': return "from-emerald-900/40 to-transparent";
            case 'negative': return "from-rose-900/40 to-transparent";
            case 'neutral': return "from-blue-900/40 to-transparent";
            default: return "from-slate-800 to-transparent";
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 font-['Calibri'] relative h-[800px] flex gap-6">

            {/* Left Col: Case Selection */}
            <div className="w-1/3 flex flex-col gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-[40px] pointer-events-none"></div>
                    <Badge variant="outline" className="border-amber-900 text-amber-500 mb-4 tracking-widest font-bold">
                        <Scale className="w-3 h-3 mr-2" /> SUPREME COURT REGISTRY
                    </Badge>
                    <h2 className="text-2xl font-black text-white">Landmark Rulings</h2>
                    <p className="text-slate-400 text-sm mt-2">Explore the cascading consequences of historic verdicts.</p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                    {LANDMARK_CASES.map(c => (
                        <button
                            key={c.id}
                            onClick={() => c.isUnlocked && setSelectedCase(c)}
                            disabled={!c.isUnlocked}
                            className={`w-full text-left p-4 rounded-xl border transition-all ${selectedCase.id === c.id
                                    ? 'bg-slate-800 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                                    : c.isUnlocked
                                        ? 'bg-slate-900 border-slate-800 hover:border-slate-600'
                                        : 'bg-slate-950/50 border-slate-800/50 opacity-50 cursor-not-allowed'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className={`font-bold ${selectedCase.id === c.id ? 'text-amber-400' : 'text-slate-200'}`}>
                                    {c.name}
                                </h3>
                                {!c.isUnlocked && <Lock className="w-4 h-4 text-slate-600" />}
                                {c.isUnlocked && <Badge variant="secondary" className="bg-slate-800 text-slate-300 pointer-events-none">{c.year}</Badge>}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2">{c.coreIssue}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Col: Visualization Engine */}
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-3xl p-8 relative flex flex-col shadow-2xl overflow-hidden">
                <Gavel className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-900/50 z-0 pointer-events-none" />

                {/* Core Ruling Header */}
                <div className="relative z-10 border-b border-slate-800 pb-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-900 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white tracking-tight">{selectedCase.name} <span className="text-slate-500 font-medium">({selectedCase.year})</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/50">
                            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">The Constitutional Question</h4>
                            <p className="text-slate-300 leading-relaxed font-medium">{selectedCase.coreIssue}</p>
                        </div>
                        <div className="bg-amber-950/10 p-5 rounded-2xl border border-amber-900/30">
                            <h4 className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">The Supreme Decree</h4>
                            <p className="text-amber-200/90 leading-relaxed font-semibold italic">"{selectedCase.judgment}"</p>
                        </div>
                    </div>
                </div>

                {/* Shockwave Effects */}
                <div className="relative z-10 flex-1">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                        <Activity className="w-4 h-4 text-cyan-500" /> Constitutional Shockwaves
                    </h3>

                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            {selectedCase.effects.map((effect, idx) => (
                                <motion.div
                                    key={effect.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.15 }}
                                    className={`relative overflow-hidden p-5 rounded-2xl border bg-gradient-to-r ${getImpactBg(effect.impact)} ${getImpactStyle(effect.impact)}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1">
                                                {effect.impact === 'positive' && <CheckCircle2 className="w-5 h-5" />}
                                                {effect.impact === 'negative' && <ShieldAlert className="w-5 h-5" />}
                                                {effect.impact === 'neutral' && <GitBranch className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-black uppercase tracking-wider text-sm">{effect.entity}</span>
                                                    <Badge variant="outline" className={`ml-2 text-[10px] ${getImpactStyle(effect.impact)}`}>
                                                        {effect.impact.toUpperCase()} IMPACT
                                                    </Badge>
                                                </div>
                                                <p className="text-sm leading-relaxed opacity-90">{effect.description}</p>
                                            </div>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 block">Affected Space</span>
                                            <span className="font-mono text-sm font-bold bg-black/20 px-2 py-1 rounded mt-1 inline-block border border-white/10">{effect.articleAffected}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}
