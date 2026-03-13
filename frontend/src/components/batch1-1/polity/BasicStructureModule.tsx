"use client";

import React, { useState } from "react";
import {
    Scale, Gavel, Shield, LandPlot, Landmark, History,
    ScrollText, AlertTriangle, CheckCircle2, XCircle,
    Building2, Sword
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BasicStructureModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The Architectural Foundation ---

const BlueprintContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1e3a8a] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-300 selection:text-blue-900 relative text-blue-50">
        {/* Blueprint Grid Texture */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80caff_1px,transparent_1px),linear-gradient(to_bottom,#80caff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80caff_0.5px,transparent_0.5px),linear-gradient(to_bottom,#80caff_0.5px,transparent_0.5px)] bg-[size:8px_8px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-[1px] flex-1 bg-blue-400/50"></div>
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-widest uppercase">{title}</h2>
            {subtitle && <p className="text-sm text-blue-300 italic mt-1 font-handwriting">{subtitle}</p>}
        </div>
        <div className="h-[1px] flex-1 bg-blue-400/50"></div>
    </div>
);

const ConflictCard = ({ title, year, children, icon: Icon, winner }: { title: string, year: string, children: React.ReactNode, icon?: any, winner: "Parliament" | "Judiciary" }) => {
    const isJudiciary = winner === "Judiciary";
    return (
        <div className={`relative border-2 ${isJudiciary ? 'border-blue-400 bg-blue-900/50' : 'border-red-400 bg-red-900/20'} rounded-xl p-6 shadow-lg backdrop-blur-sm`}>
            <div className={`absolute -top-3 left-4 ${isJudiciary ? 'bg-blue-600' : 'bg-red-600'} text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest`}>
                {year}
            </div>
            <div className={`absolute -top-3 right-4 ${isJudiciary ? 'text-blue-300' : 'text-red-300'} text-xs font-bold uppercase tracking-widest flex items-center gap-1`}>
                {isJudiciary ? <><Scale size={12} /> Judiciary Wins</> : <><Sword size={12} /> Parliament Wins</>}
            </div>

            <div className="flex items-start gap-4 mb-4 mt-2">
                {Icon && (
                    <div className={`p-2 rounded-lg border ${isJudiciary ? 'border-blue-400 text-blue-300' : 'border-red-400 text-red-300'}`}>
                        <Icon size={24} />
                    </div>
                )}
                <div>
                    <h3 className="font-bold text-lg text-white leading-tight font-serif">{title}</h3>
                </div>
            </div>
            <div className="text-sm space-y-3 font-handwriting text-blue-100 leading-relaxed opacity-90">
                {children}
            </div>
        </div>
    );
};

const PillarItem = ({ title, pyq }: { title: string, pyq?: boolean }) => (
    <div className="bg-card/10 border border-blue-300/30 p-4 rounded-lg backdrop-blur-sm hover:bg-card/20 transition-all flex items-center justify-between group">
        <span className="font-serif text-blue-50 font-semibold">{title}</span>
        {pyq && <Badge variant="destructive" className="text-[10px] h-5 bg-red-600 hover:bg-red-700">PYQ</Badge>}
    </div>
);


export default function BasicStructureModule({ onComplete, isCompleted }: BasicStructureModuleProps) {
    return (
        <BlueprintContainer>
            {/* HERO */}
            <div className="bg-[#172554] p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden border border-blue-400/30">
                {/* Blueprint Decor */}
                <div className="absolute right-10 top-10 opacity-10">
                    <Building2 size={200} />
                </div>

                <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-950 p-4 rounded-full border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                            <LandPlot size={48} className="text-blue-200" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-blue-300 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                        <Scale size={14} /> Judicial Innovation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 font-serif text-white tracking-tight">
                        The Bedrock Foundation
                    </h1>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed font-handwriting italic">
                        "The Constitution has a Basic Structure that even the Parliament cannot alter."
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE EVOLUTION (TUG OF WAR) */}
            <SectionHeader title="Phase 1: The Tug of War" subtitle="Parliament vs Judiciary (1951-1971)" />

            <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[50%] left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-transparent to-blue-500/50 z-0"></div>

                {/* ROW 1: EARLY CONFLICT */}
                <ConflictCard title="Shankari Prasad Case" year="1951" winner="Parliament" icon={Gavel}>
                    <p><strong className="text-white">Q:</strong> Can Parliament amend Fundamental Rights?</p>
                    <p><strong className="text-green-400">Verdict: YES.</strong></p>
                    <p className="text-xs">
                        <strong>Logic:</strong> "Law" in Art 13 = Ordinary Law ONLY. Not Const. Amendments (Art 368).
                    </p>
                    <p className="text-xs bg-red-900/40 p-2 rounded border border-red-500/30 text-red-200">
                        Result: Parliament can take away FRs.
                    </p>
                </ConflictCard>

                <ConflictCard title="Golak Nath Case" year="1967" winner="Judiciary" icon={Shield}>
                    <p><strong className="text-white">Q:</strong> Can Parliament amend FRs?</p>
                    <p><strong className="text-red-400">Verdict: NO.</strong> (Reversed Shankari Prasad)</p>
                    <p className="text-xs">
                        <strong>Logic:</strong> FRs are "transcendental and immutable".
                    </p>
                    <p className="text-xs bg-blue-900/40 p-2 rounded border border-blue-400/30 text-blue-200">
                        Result: Parliament CANNOT abridge any FR.
                    </p>
                </ConflictCard>

                {/* ROW 2: PARLIAMENT STRIKES BACK */}
                <div className="md:col-span-2 max-w-2xl mx-auto w-full">
                    <div className="border-2 border-red-500 bg-red-950/40 rounded-xl p-6 shadow-lg backdrop-blur-sm relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest">
                            1971: The Reaction
                        </div>
                        <h3 className="font-bold text-xl text-white text-center mb-4 flex items-center justify-center gap-2">
                            <Sword className="text-red-500" /> 24th Amendment Act
                        </h3>
                        <div className="text-center text-sm font-handwriting text-red-100 space-y-2">
                            <p>Govt reacted to Golak Nath case.</p>
                            <p>Amended Art 13 and Art 368.</p>
                            <div className="bg-red-900/60 border border-red-500 p-3 rounded text-white font-bold">
                                Declaration: Parliament has power to abridge or take away ANY Fundamental Right.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE BIRTH OF THE DOCTRINE */}
            <SectionHeader title="Phase 2: The Birth (1973)" subtitle="The Foundation Stone is Laid" />

            {/* KESAVANANDA BHARATI MEGA CARD */}
            <div className="bg-gradient-to-br from-yellow-700/20 to-yellow-900/20 border-2 border-yellow-600/50 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-yellow-500">
                    <Scale size={150} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-yellow-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                            April 24, 1973
                        </div>
                        <div className="h-[1px] flex-1 bg-yellow-600/30"></div>
                        <div className="text-yellow-400 font-serif font-bold text-lg">
                            Largest Bench (13 Judges)
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white font-serif mb-6 drop-shadow-md">
                        Kesavananda Bharati Case
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-blue-50">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-900/50 border border-green-500 flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={18} className="text-green-400" />
                                </div>
                                <p className="font-handwriting text-lg">
                                    Overruled Golak Nath. Upheld validity of 24th Amendment. <br />
                                    <span className="text-sm opacity-70">Result: Parliament CAN amend Fundamental Rights.</span>
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-900/50 border border-red-500 flex items-center justify-center shrink-0">
                                    <AlertTriangle size={18} className="text-red-400" />
                                </div>
                                <div className="font-handwriting text-lg">
                                    <span className="font-bold text-yellow-400 text-xl">BUT...</span> <br />
                                    It cannot alter the <strong className="text-white border-b-2 border-yellow-500">"Basic Structure"</strong> of the Constitution.
                                    <Badge className="ml-2 bg-red-600 hover:bg-red-700 text-[10px]">PYQ</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE ELEMENTS (PILLARS) */}
            <SectionHeader title="Phase 3: The Pillars" subtitle="What constitutes Basic Structure?" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Left: Definition Context */}
                <div className="md:col-span-1 bg-blue-900/30 border border-blue-400/30 p-6 rounded-xl">
                    <h3 className="font-serif font-bold text-xl text-white mb-4 border-b border-blue-400/30 pb-2">The Definition?</h3>
                    <ul className="space-y-4 text-sm font-handwriting text-blue-100">
                        <li className="flex gap-3">
                            <XCircle className="text-red-400 shrink-0" size={20} />
                            <span>The Constitution does <strong>NOT</strong> define 'Basic Structure'.</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                            <span>It is a <strong>Judicial Innovation</strong> derived from various SC judgments over time. <Badge variant="outline" className="text-red-400 border-red-400 ml-1 text-[10px]">PYQ</Badge></span>
                        </li>
                    </ul>
                </div>

                {/* Right: The Grid */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <PillarItem title="Supremacy of Constitution" />
                    <PillarItem title="Sovereign, Democratic, Republic" />
                    <PillarItem title="Secular Character" pyq />
                    <PillarItem title="Federal Character" pyq />
                    <PillarItem title="Separation of Powers" />
                    <PillarItem title="Judicial Review" pyq />
                    <PillarItem title="Rule of Law" />
                    <PillarItem title="Unity & Integrity of Nation" />
                    <PillarItem title="Balance (FRs & DPSP)" />
                    <PillarItem title="Free & Fair Elections" />
                </div>
            </div>


            {/* FOOTER */}
            <div className="mt-12 bg-[#0f172a] rounded-xl p-8 border border-blue-800 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                <div className="flex justify-center mb-6">
                    <div className="bg-slate-800 p-4 rounded-full border border-slate-600">
                        <Gavel size={32} className="text-blue-400" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8 text-left">
                    <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                        <h4 className="font-bold text-blue-300 text-sm mb-1">Waman Rao Case (1981)</h4>
                        <p className="text-xs text-slate-300">Doctrine applies <strong>prospectively</strong> from April 24, 1973.</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                        <h4 className="font-bold text-blue-300 text-sm mb-1">I.R. Coelho Case (2007)</h4>
                        <p className="text-xs text-slate-300">9th Schedule laws after 1973 are <strong>open to Judicial Review</strong>. <span className="text-red-400 font-bold">[PYQ]</span></p>
                    </div>
                </div>

                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-10 py-6 text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all border
            ${isCompleted ? 'bg-green-800 hover:bg-green-900 border-green-600 text-white' : 'bg-blue-700 hover:bg-blue-600 border-blue-500 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><CheckCircle2 /> Foundation Laid</span> :
                        <span className="flex items-center gap-2"><Building2 /> Cement the Foundation</span>
                    }
                </Button>
            </div>
        </BlueprintContainer>
    );
}
