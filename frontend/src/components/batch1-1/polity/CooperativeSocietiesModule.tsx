"use client";

import React from "react";
import {
    Users, ShieldCheck, Heart,
    Sprout, Handshake, Globe,
    BadgeCheck, Landmark, Info,
    History, Ban, Scale,
    CheckCircle2, BookOpen, UserCheck,
    SearchCheck, Sparkles, Zap,
    ArrowRight, MessageSquare,
    Coins, TrendingUp, Target,
    FileText, LayoutGrid
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CooperativeSocietiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fffbeb] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-amber-100 selection:text-amber-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-800 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/honey-comb.png')]">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#d97706] opacity-30"></div>
            {children}
        </div>
    </div>
);

const HoneycombCard = ({ title, children, color = "border-amber-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(217,119,6,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <LayoutGrid size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-12 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CooperativeSocietiesModule({ onComplete, isCompleted }: CooperativeSocietiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#d97706] border-4 border-amber-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(217,119,6,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#b45309] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 60</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-amber-50 font-bold uppercase tracking-widest text-sm italic">Strength in Unity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Co-operative <br />
                        <span className="text-amber-900 drop-shadow-md underline decoration-wavy decoration-white italic">Societies</span>
                    </h1>
                    <p className="text-xl text-amber-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Each for all and all for each. The 97th Amendment gave constitutional status to the dream of collective self-help and economic democracy."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Handshake size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE BIG AMENDMENT */}
            <PhaseHeader number="1" title="Phase 1: The Status (97th CA)" color="bg-amber-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <HoneycombCard title="97th Amendment (2011)" color="border-amber-800">
                    <div className="p-5 bg-amber-50 border-x-4 border-amber-600 rounded-3xl relative overflow-hidden group">
                        <History className="absolute top-0 right-0 p-2 opacity-10 text-amber-600" size={40} />
                        <h4 className="font-black text-amber-700 uppercase text-xs mb-4 italic">3-Point Impact [PYQ]</h4>
                        <ul className="space-y-4 text-[10px] font-black italic text-slate-700">
                            <li className="flex items-center gap-2">
                                <BadgeCheck size={14} className="text-amber-600" /> <span className="text-blue-700">Art 19(1)(c):</span> Fundamental Right to form co-ops.
                            </li>
                            <li className="flex items-center gap-2">
                                <BadgeCheck size={14} className="text-amber-600" /> <span className="text-blue-700">Art 43B (DPSP):</span> State to promote them.
                            </li>
                            <li className="p-3 bg-white rounded border border-amber-100 italic">
                                <span className="text-blue-800 underline">Part IX-B:</span> Added to the Constitution (Arts 243ZH to 243ZT).
                            </li>
                        </ul>
                    </div>
                </HoneycombCard>

                <HoneycombCard title="SC Ruling (2021) [PYQ]" color="border-red-800">
                    <div className="p-6 bg-red-900 text-white rounded-[2rem] relative shadow-xl space-y-4">
                        <Scale className="text-red-400 group-hover:rotate-12 transition-transform" size={32} />
                        <h4 className="text-xs font-black uppercase text-red-200 italic underline underline-offset-4 tracking-widest">Gujarat High Court Case</h4>
                        <p className="text-sm font-black leading-tight italic">
                            SC struck down Part IX-B to the extent it applied to <span className="text-red-300">State</span> Co-ops (Multi-state stayed).
                        </p>
                        <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-[10px] font-black italic">Reason: 97th CA didn't get 50% State ratification for a "State List" subject.</p>
                        </div>
                    </div>
                </HoneycombCard>
            </div>

            {/* PHASE 2: MANAGEMENT RULES */}
            <PhaseHeader number="2" title="Phase 2: The Hive (Management)" color="bg-amber-900" />

            <div className="relative p-10 bg-amber-50 border-4 border border-amber-900 border-dashed rounded-[3rem] shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-25 transition-opacity"><LayoutGrid size={180} /></div>
                <div className="max-w-4xl mx-auto space-y-12 relative z-10 font-black italic">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-5 bg-white border-2 border-amber-800 rounded-3xl relative h-full">
                            <Badge className="mb-2 bg-amber-700">DIRECTORS</Badge>
                            <p className="text-[10px] font-bold text-slate-500 italic leading-relaxed">
                                Max <span className="text-amber-800 underline">21 Directors</span>. Reservation: 1 SC/ST + 2 Women. [PYQ]
                            </p>
                        </div>
                        <div className="p-5 bg-white border-2 border-amber-800 rounded-3xl relative h-full">
                            <Badge className="mb-2 bg-amber-700">TENURE</Badge>
                            <p className="text-[10px] font-bold text-slate-500 italic leading-relaxed">
                                Term: <span className="text-amber-800 underline">5 Years</span>. Election must be held before term ends.
                            </p>
                        </div>
                        <div className="p-5 bg-white border-2 border-amber-800 rounded-3xl relative h-full">
                            <Badge className="mb-2 bg-amber-700">AUDIT</Badge>
                            <p className="text-[10px] font-bold text-slate-500 italic leading-relaxed">
                                Yearly audit within 6 months of FY end. Report to State Leg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: MINISTRY OF COOPERATION */}
            <PhaseHeader number="3" title="Phase 3: The New Ministry" color="bg-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <HoneycombCard title="Sahakar-se-Samriddhi" color="border-emerald-600">
                    <div className="p-5 bg-emerald-50 border-t-4 border-emerald-600 rounded-2xl relative space-y-4 shadow-sm">
                        <TrendingUp className="text-emerald-900" size={32} />
                        <h4 className="text-xs font-black uppercase text-emerald-800 italic underline">Created July 2021</h4>
                        <p className="text-[10px] font-black leading-relaxed italic text-slate-600">
                            Separate Ministry headed by Amit Shah. Focus on simplifying processes for "Ease of Doing Business".
                        </p>
                    </div>
                </HoneycombCard>

                <div className="bg-amber-900 p-8 rounded-[3rem] text-white space-y-6 relative overflow-hidden group shadow-2xl flex flex-col justify-center items-center text-center">
                    <Coins className="text-yellow-400 absolute top-2 right-2 opacity-20 rotate-12" size={80} />
                    <h4 className="text-2xl font-black italic underline decoration-yellow-400 decoration-4 underline-offset-8 uppercase">PACs</h4>
                    <p className="text-sm font-bold opacity-85 leading-relaxed italic">
                        "Primary Agricultural Credit Societies. The smallest unit of the hive, bringing credit to the farm door."
                    </p>
                    <div className="p-4 bg-white text-slate-900 rounded-2xl rotate-1 font-black italic shadow-inner">
                        Prosperity through Coop.
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-amber-800 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#d97706] hover:bg-amber-900 text-white shadow-[0_10px_40px_-10px_rgba(217,119,6,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            COOP MASTER GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Handshake size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 60 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Unity • Prosperity • Democracy.</p>
            </div>
        </ScrapbookContainer>
    );
}
