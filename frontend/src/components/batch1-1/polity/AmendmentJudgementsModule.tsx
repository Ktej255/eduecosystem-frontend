"use client";

import React from "react";
import {
    Gavel, Hammer, Scale,
    Swords, Shield, Crown,
    AlertTriangle, CheckCircle2, XCircle,
    Trophy, Swords as BoxingGlove, Scroll,
    BookOpen, History, Lock, Unlock,
    Zap, Flame, Target, ArrowRight,
    Divide
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AmendmentJudgementsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100 selection:text-orange-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#c2410c] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#c2410c" strokeWidth="2" strokeDasharray="20 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-60"></div>
            {children}
        </div>
    </div>
);

const RoundCard = ({ title, winner, icon, color, children, className = "" }: { title: string, winner: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-black flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
                {title}
            </h3>
            <Badge className={`${winner === 'Parliament' ? 'bg-red-600' : winner === 'Judiciary' ? 'bg-blue-600' : 'bg-green-600'} text-white font-mono uppercase`}>
                Winner: {winner}
            </Badge>
        </div>

        <div className="space-y-4 text-foreground relative z-10 font-bold leading-relaxed">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color, subtitle }: { number: string, title: string, color: string, subtitle?: string }) => (
    <div className="flex flex-col gap-2 my-8">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-2deg] border-2 border-white`}>
                {number}
            </div>
            <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
                {title}
            </h2>
            <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
        </div>
        {subtitle && <p className="text-muted-foreground font-bold italic ml-16">{subtitle}</p>}
    </div>
);

export default function AmendmentJudgementsModule({ onComplete, isCompleted, chapterNumber = "93" }: AmendmentJudgementsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#c2410c] border-4 border-[#7c2d12] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(194,65,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#7c2d12] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Amending Power</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Gavel <br /> <span className="text-[#fcd34d] italic drop-shadow-md">vs The Hammer</span> <br />
                        <span className="text-orange-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">Parliament vs Judiciary</span>
                    </h1>
                    <p className="text-xl text-orange-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Who is supreme? The elected representatives or the Constitution? The Ultimate Tug of War."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Swords size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: ROUND 1 & 2 */}
            <PhaseHeader
                number="1"
                title="Rounds 1 & 2 (The Opening)"
                color="bg-[#b91c1c]"
                subtitle="Shankari Prasad to Golaknath"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <RoundCard
                    title="Shankari Prasad (1951)"
                    winner="Parliament"
                    icon={<Gavel size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <p className="text-sm">"Law" in Art 13 does <span className="underline">NOT</span> include Constitutional Amendments.</p>
                    <div className="bg-card p-3 rounded-lg border border-red-200 mt-2">
                        <p className="text-xs font-black text-muted-foreground uppercase">Implication</p>
                        <p className="text-sm font-bold text-red-800">Parliament can amend Fundamental Rights easily.</p>
                    </div>
                </RoundCard>

                <RoundCard
                    title="Golaknath (1967)"
                    winner="Judiciary"
                    icon={<Scale size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <p className="text-sm">"Law" in Art 13 <span className="underline">INCLUDES</span> Amendments.</p>
                    <div className="bg-card p-3 rounded-lg border border-blue-200 mt-2">
                        <p className="text-xs font-black text-muted-foreground uppercase">Implication</p>
                        <p className="text-sm font-bold text-blue-800">Parliament <span className="underline text-red-600">CANNOT</span> take away Fundamental Rights. (Prospective Overruling).</p>
                    </div>
                </RoundCard>
            </div>

            {/* PHASE 2: ROUND 3 (THE KNOCKOUT) */}
            <PhaseHeader
                number="2"
                title="Round 3 (The Knockout)"
                color="bg-[#ca8a04]"
                subtitle="Kesavananda Bharati (1973)"
            />

            <div className="bg-yellow-50 border-4 border-double border-yellow-600 rounded-3xl p-8 relative overflow-hidden">
                <Trophy size={200} className="absolute -right-10 top-10 text-yellow-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-yellow-800 uppercase mb-4">The Verdict</h3>
                        <div className="space-y-4">
                            <div className="bg-card p-4 rounded-xl border border-yellow-300 shadow-sm">
                                <h5 className="font-black text-yellow-900">Parliament's Power?</h5>
                                <p className="text-sm font-bold text-muted-foreground">Can amend ANY part of Constitution (including Preamble & FRs).</p>
                            </div>
                            <div className="bg-card p-4 rounded-xl border border-red-300 shadow-sm">
                                <h5 className="font-black text-red-900">The Limit?</h5>
                                <p className="text-sm font-bold text-muted-foreground">Cannot destroy the <span className="text-lg underline decoration-wavy decoration-red-500">Basic Structure</span>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Badge className="bg-green-600 text-xl py-2 px-6 mb-4">DRAW</Badge>
                        <p className="text-center text-xs font-bold text-muted-foreground max-w-xs italic">
                            "Parliament has power, but not unlimited power. Constitution is Supreme."
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE AFTERMATH */}
            <PhaseHeader
                number="3"
                title="The Aftermath (Minerva Mills)"
                color="bg-[#171717]"
                subtitle="Correcting the Balance"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <RoundCard
                    title="42nd Amendment (1976)"
                    winner="Parliament"
                    icon={<Flame size={120} className="text-red-500" />}
                    color="border-red-500"
                    className="bg-red-50"
                >
                    <p className="text-sm font-bold text-red-900 mb-2">"Mini Constitution"</p>
                    <p className="text-sm text-foreground">Tried to give <span className="underline">Unlimited Power</span> to Parliament and bar Judicial Review (Art 368(4) & (5)).</p>
                </RoundCard>

                <RoundCard
                    title="Minerva Mills (1980)"
                    winner="Judiciary"
                    icon={<Scale size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <p className="text-sm font-bold text-green-900 mb-2">"Judicial Review Restored"</p>
                    <p className="text-sm text-foreground">Struck down 42nd AA provisions. Held that <span className="underline">limited amending power</span> is itself a Basic Feature.</p>
                </RoundCard>
            </div>

            {/* FOOTER: BASIC STRUCTURE LIST */}
            <div className="mt-8 p-8 bg-slate-900 text-white rounded-[2rem] border-4 border-slate-700 relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <Scroll className="text-yellow-400 mb-4 animate-pulse" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">What IS Basic Structure?</h4>
                <p className="text-sm font-bold opacity-70 max-w-xl mb-4">
                    SC refused to define it exhaustively (Case-by-Case basis).
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary" className="bg-slate-700 text-white">Rule of Law</Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-white">Federalism</Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-white">Secularism</Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-white">Free Elections</Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-white">Judicial Review</Badge>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#c2410c] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#c2410c] hover:bg-orange-900 text-white shadow-[0_10px_40px_-10px_rgba(194,65,12,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Crown size={32} className="animate-bounce" />
                            CONSTITUTION DEFENDER
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Hammer size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center uppercase">Shankari Prasad • Golaknath • Minerva Mills.</p>
            </div>
        </ScrapbookContainer>
    );
}
