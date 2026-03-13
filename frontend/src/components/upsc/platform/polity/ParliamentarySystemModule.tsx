"use client";

import React, { useState } from "react";
import {
    Landmark, Crown, Vote, Users, Scale, AlertTriangle,
    CheckCircle2, XCircle, Gavel, Split, Shield, UserCheck,
    Mic2, Building, Flag, ArrowRightLeft, Scroll
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ParliamentarySystemModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Westminster Hall ---

const ParliamentContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1a1a1a] min-h-screen p-4 md:p-8 font-sans selection:bg-green-300 selection:text-green-900 relative">
        {/* Wood Panel Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
        {/* Green Carpet Gradient */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-green-900/30 to-black pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 text-amber-50">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-[2px] flex-1 bg-amber-700/50"></div>
        <div className="flex items-center gap-2 bg-[#2d1b0e] border border-amber-800 px-6 py-2 rounded-full shadow-lg">
            <Icon size={18} className="text-amber-500" />
            <span className="font-bold uppercase tracking-wider text-sm text-amber-100 font-serif">{title}</span>
        </div>
        <div className="h-[2px] flex-1 bg-amber-700/50"></div>
    </div>
);

const FeaturePillar = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
    <div className="bg-[#0f2e18] border border-green-800/50 p-4 rounded-lg shadow-md hover:bg-[#143d20] transition-all group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={60} />
        </div>
        <div className="flex items-start gap-3 relative z-10">
            <div className="p-2 rounded bg-green-900/50 text-green-400 border border-green-700">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="font-bold text-green-100 mb-1 font-serif">{title}</h4>
                <p className="text-xs text-green-300/80 leading-relaxed font-handwriting">{desc}</p>
            </div>
        </div>
    </div>
);

const ComparisonRow = ({ label, left, right, highlight }: { label: string, left: React.ReactNode, right: React.ReactNode, highlight?: boolean }) => (
    <div className={`grid grid-cols-[1fr_2fr_2fr] gap-4 p-4 border-b border-white/10 items-center ${highlight ? 'bg-card/5' : ''}`}>
        <div className="font-bold text-amber-400 text-sm font-serif">{label}</div>
        <div className="text-sm text-green-200 font-handwriting border-l border-white/10 pl-4">{left}</div>
        <div className="text-sm text-blue-200 font-handwriting border-l border-white/10 pl-4">{right}</div>
    </div>
);

export default function ParliamentarySystemModule({ onComplete, isCompleted, chapterNumber = "13" }: ParliamentarySystemModuleProps) {
    return (
        <ParliamentContainer>
            {/* HERO */}
            <div className="bg-[#2d1b0e] text-amber-50 p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden border-4 border-amber-900">
                {/* Decorative Pillars */}
                <div className="absolute left-4 top-0 bottom-0 w-8 border-x-2 border-amber-900/30 bg-black/20"></div>
                <div className="absolute right-4 top-0 bottom-0 w-8 border-x-2 border-amber-900/30 bg-black/20"></div>

                <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-amber-950 p-4 rounded-full border-2 border-amber-700 shadow-xl">
                            <Landmark size={40} className="text-amber-500" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-xs mb-3">
                        <Scroll size={14} /> Chapter {chapterNumber}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 font-serif text-amber-100">
                        Parliamentary <br /> System
                    </h1>
                    <p className="text-amber-200/80 max-w-2xl mx-auto text-lg leading-relaxed font-handwriting italic">
                        "Responsible Government over Stability. Cooperation over Conflict."
                    </p>
                </div>
            </div>

            {/* PHASE 1: CORE FEATURES */}
            <SectionHeader title="Phase 1: The Core Features" icon={Building} />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Parliamentary */}
                <div className="bg-[#052e16] border-2 border-green-700 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute -top-3 left-4 bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest">
                        Westminster Model
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-green-100 mb-4 mt-2">Cabinet Government</h3>
                    <ul className="space-y-3 text-sm font-handwriting text-green-200">
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> <span><strong>Articles:</strong> 74 & 75 (Centre), 163 & 164 (States).</span></li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> <span><strong>Principle:</strong> Co-operation between Legislature & Executive.</span></li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> <span><strong>Also called:</strong> Responsible Govt, Prime Ministerial Govt.</span></li>
                    </ul>
                </div>

                {/* Right: Presidential */}
                <div className="bg-[#172554] border-2 border-blue-700 rounded-xl p-6 relative overflow-hidden opacity-90">
                    <div className="absolute -top-3 right-4 bg-blue-700 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest">
                        Presidential System
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-blue-100 mb-4 mt-2 text-right">Fixed Executive</h3>
                    <ul className="space-y-3 text-sm font-handwriting text-blue-200 text-right">
                        <li className="flex gap-2 justify-end"><span><strong>Principle:</strong> Separation of Powers. <Split size={14} className="inline ml-1" /></span> <XCircle size={16} className="text-blue-500 mt-0.5" /></li>
                        <li className="flex gap-2 justify-end"><span>Non-responsible, Non-parliamentary.</span> <XCircle size={16} className="text-blue-500 mt-0.5" /></li>
                        <li className="flex gap-2 justify-end"><span>Example: USA, Brazil, Russia (Semi).</span> <XCircle size={16} className="text-blue-500 mt-0.5" /></li>
                    </ul>
                </div>
            </div>

            {/* The 7 Pillars Grid */}
            <h3 className="text-center font-serif text-amber-200 mb-6 text-xl">— The 7 Pillars of Parliamentary Govt —</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FeaturePillar title="Nominal vs Real Exec" desc="President (De Jure/Titular) vs PM (De Facto/Real)." icon={Crown} />
                <FeaturePillar title="Majority Party Rule" desc="Party with majority seats forms the government." icon={Vote} />
                <div className="md:col-span-1 lg:col-span-1 relative">
                    <div className="absolute -top-2 -right-2 z-20">
                        <Badge className="bg-red-600 hover:bg-red-700 text-[10px]">PYQ</Badge>
                    </div>
                    <FeaturePillar title="Collective Responsibility" desc="Ministers responsible to Lok Sabha (Art 75). Swim or sink together." icon={Users} />
                </div>
                <FeaturePillar title="Political Homogeneity" desc="Ministers usually share same ideology." icon={Scale} />
                <FeaturePillar title="Double Membership" desc="Ministers are part of both Legislature AND Executive." icon={UserCheck} />
                <FeaturePillar title="Leadership of PM" desc="Plays the role of 'Captain of the Ship'." icon={Mic2} />
                <FeaturePillar title="Dissolution of Lower House" desc="PM can advise Prez to dissolve Lok Sabha before term ends." icon={AlertTriangle} />
            </div>

            {/* PHASE 2: MERITS vs DEMERITS */}
            <SectionHeader title="Phase 2: The Trade-off" icon={ArrowRightLeft} />

            <div className="grid md:grid-cols-2 gap-0 border border-white/20 rounded-xl overflow-hidden">
                {/* Merits */}
                <div className="bg-green-900/20 p-6 border-r border-white/10">
                    <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                        <CheckCircle2 size={16} /> Merits (Why we chose it)
                    </h3>
                    <ul className="space-y-4 text-sm font-handwriting text-green-100">
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <span><strong>Harmony:</strong> Cooperation between Legislature & Executive.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <span><strong>Responsible Govt:</strong> Ministers accountable daily (Q-Hour). <span className="text-green-500 font-bold text-[10px] ml-1">[PYQ]</span></span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <span><strong>Prevents Despotism:</strong> Authority vested in Council, not one person.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <span><strong>Wide Representation:</strong> Diverse sections/regions represented.</span>
                        </li>
                    </ul>
                </div>

                {/* Demerits */}
                <div className="bg-red-900/10 p-6">
                    <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                        <XCircle size={16} /> Demerits (The Flaws)
                    </h3>
                    <ul className="space-y-4 text-sm font-handwriting text-red-100">
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                            <span><strong>Unstable Govt:</strong> No fixed tenure (No confidence motion).</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                            <span><strong>No Continuity:</strong> Policies change with Government.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                            <span><strong>Dictatorship of Cabinet:</strong> If massive majority (e.g., Indira Gandhi).</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                            <span><strong>Against Separation of Powers:</strong> Cabinet leads both.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#2d1b0e] border border-amber-800 p-4 rounded-lg mt-6 shadow-inner text-center">
                <h4 className="font-serif text-amber-500 font-bold mb-2">Why did the Constituent Assembly choose it?</h4>
                <div className="flex flex-wrap justify-center gap-2 text-xs font-handwriting text-amber-100">
                    <span className="bg-amber-900/50 px-2 py-1 rounded border border-amber-800">1. Familiarity with British Rule</span>
                    <span className="bg-amber-900/50 px-2 py-1 rounded border border-amber-800">2. Responsibility &gt; Stability <span className="text-amber-500 font-bold ml-1">[PYQ]</span></span>
                    <span className="bg-amber-900/50 px-2 py-1 rounded border border-amber-800">3. Avoid conflict in diverse society</span>
                </div>
            </div>

            {/* PHASE 3: INDIA vs BRITAIN */}
            <SectionHeader title="Phase 3: India vs Britain" icon={Flag} />

            <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 p-4 bg-slate-800 border-b border-slate-700">
                    <div className="text-xs uppercase font-bold text-muted-foreground">Feature</div>
                    <div className="text-xs uppercase font-bold text-green-400 flex items-center gap-2"><Crown size={12} /> British Model</div>
                    <div className="text-xs uppercase font-bold text-blue-400 flex items-center gap-2"><Landmark size={12} /> Indian Model</div>
                </div>

                <div className="divide-y divide-slate-800">
                    <ComparisonRow
                        label="Head of State"
                        left="Monarchy (Hereditary)."
                        right="Republic (Elected President)."
                    />
                    <ComparisonRow
                        label="Sovereignty"
                        left="Parliament is Sovereign. (Can do anything)."
                        right={<>Parliament is <strong>NOT</strong> Sovereign. (Written Const, Judicial Review). <span className="text-red-400 font-bold text-[10px] ml-1">[PYQ]</span></>}
                    />
                    <ComparisonRow
                        label="PM's House"
                        left="PM must be from Lower House (Commons)."
                        right={<>PM from <strong>Either</strong> House (RS/LS). (e.g., Indira, Manmohan). <span className="text-red-400 font-bold text-[10px] ml-1">[PYQ]</span></>}
                        highlight
                    />
                    <ComparisonRow
                        label="Minister"
                        left="Must be an MP."
                        right="Can be non-MP for 6 Months."
                    />
                    <ComparisonRow
                        label="Responsibility"
                        left="Legal Responsibility (Countersign)."
                        right="No Legal Responsibility."
                    />
                    <ComparisonRow
                        label="Shadow Cabinet"
                        left="Unique Institution (Opposition ready)."
                        right="No such institution."
                    />
                </div>
            </div>


            {/* FOOTER */}
            <div className="mt-12 bg-[#0f172a] rounded-xl p-8 border border-slate-800 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

                <div className="flex justify-center mb-6">
                    <div className="bg-slate-800 p-4 rounded-full border border-slate-600">
                        <Gavel size={32} className="text-green-400" />
                    </div>
                </div>

                <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8 font-serif leading-relaxed">
                    <strong className="text-green-400">Swaran Singh Committee (1975)</strong> considered switching to a Presidential System but rejected it. The Parliamentary system is now part of the <strong>Basic Structure</strong>.
                </p>

                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-10 py-6 text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(22,163,74,0.3)] transition-all border
            ${isCompleted ? 'bg-green-800 hover:bg-green-900 border-green-600 text-white' : 'bg-[#1a1a1a] hover:bg-[#2d2d2d] border-green-800 text-green-400'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><CheckCircle2 /> CHAPTER {chapterNumber} COMPLETED</span> :
                        <span className="flex items-center gap-2"><Gavel /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                    }
                </Button>
            </div>
        </ParliamentContainer>
    );
}
