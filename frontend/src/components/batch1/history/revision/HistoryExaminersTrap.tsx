"use client";

import React, { useState } from 'react';
import {
    AlertTriangle, Sparkles, Target,
    XCircle, CheckCircle2, Info,
    ArrowRight, Lightbulb, Zap, GraduationCap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Trap {
    title: string;
    scenario: string;
    wrongWay: string;
    rightWay: string;
    trick: string;
    color: string;
    bg: string;
    border: string;
}

const DEFAULT_TRAPS: Trap[] = [
    {
        title: "Similary Named Organizations",
        scenario: "Confusion between Raja Ram Mohan Roy's organizations.",
        wrongWay: "Atmiya Sabha was founded after Brahmo Samaj.",
        rightWay: "Atmiya Sabha (1815) was the precursor to Brahmo Samaj (1828).",
        trick: "A to B - Atmiya (A) comes before Brahmo (B).",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200"
    },
    {
        title: "Multiple Panipat Dates",
        scenario: "Mixing up the significance of the 3 Panipat battles.",
        wrongWay: "1st Panipat established Maratha power.",
        rightWay: "1st (1526) established Mughals; 3rd (1761) weakened Marathas.",
        trick: "Babur (1st), Hemu (2nd), Durrani (3rd).",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200"
    },
    {
        title: "Modern Association Founders",
        scenario: "Mixing up Indian Association and East India Association.",
        wrongWay: "Surendranath Banerjee founded East India Association.",
        rightWay: "Dadabhai Naoroji (London, 1866) vs SN Banerjee (Calcutta, 1876).",
        trick: "Dadabhai was the 'Old Man' (founded the older association).",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200"
    },
    {
        title: "Buddhism vs Jainism Terms",
        scenario: "Mixing concepts like Nirvana and Kaivalya.",
        wrongWay: "Buddha attained Kaivalya.",
        rightWay: "Buddha (Nirvana/Mahaparinirvana) vs Mahavira (Kaivalya).",
        trick: "K for Kevalin (the Jain term).",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200"
    }
];

interface HistoryExaminersTrapProps {
    traps?: Trap[];
}

export default function HistoryExaminersTrap({ traps = DEFAULT_TRAPS }: HistoryExaminersTrapProps) {
    return (
        <div className="space-y-8">
            <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
                <div className="p-4 bg-red-100 rounded-2xl text-red-600 shadow-sm animate-pulse">
                    <AlertTriangle size={48} />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-red-900 mb-2">Avoid the "History Date Trap"</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                        UPSC loves to test students on Chronological order of events and similar-sounding organizations. Here are the most commonly made mistakes - and how to beat them.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {traps.map((trap, idx) => (
                    <div key={idx} className={`bg-white rounded-3xl border-2 ${trap.border} shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300`}>
                        <div className={`p-5 ${trap.bg} border-b ${trap.border} flex justify-between items-center`}>
                            <h4 className="font-black text-slate-800">{trap.title}</h4>
                            <Zap size={18} className={trap.color} />
                        </div>

                        <div className="p-6 space-y-6 flex-1">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{trap.scenario}</p>

                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100 flex gap-3 items-start">
                                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[10px] font-black text-red-400 uppercase">Common Error</p>
                                        <p className="text-sm font-bold text-slate-700">{trap.wrongWay}</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex gap-3 items-start translate-x-1">
                                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[10px] font-black text-emerald-500 uppercase">Correct Fact</p>
                                        <p className="text-sm font-bold text-slate-800">{trap.rightWay}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-200 flex gap-3 items-start mt-4">
                                <Lightbulb className="text-amber-600 shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="text-[10px] font-black text-amber-600 uppercase">Elimination Trick</p>
                                    <p className="text-sm font-black text-slate-800 italic">{trap.trick}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <Button variant="ghost" size="sm" className="text-xs font-bold gap-1 group-hover:text-amber-700">
                                Practice MCQs on this <ArrowRight size={14} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/10 to-transparent"></div>
                <GraduationCap size={48} className="mx-auto text-amber-400 mb-4 relative z-10" />
                <h3 className="text-2xl font-black mb-2 relative z-10">Think Like an Examiner</h3>
                <p className="text-slate-400 max-w-xl mx-auto font-medium mb-6 relative z-10">
                    Always ask: "Is this fact similar to something else I've read?" Breaking the confusion early is the key to 100% accuracy in Prelims.
                </p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 rounded-2xl relative z-10 h-12">
                    Take the Confusion Test
                </Button>
            </div>
        </div>
    );
}
