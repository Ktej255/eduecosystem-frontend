"use client";

import React from "react";
import {
    Puzzle, Users, Handshake,
    Scale, TrendingUp, Activity,
    AlertTriangle, CheckCircle2,
    XCircle, Split, Merge,
    GitMerge, GitBranch, Share2,
    Layers, UserPlus, Anchor,
    Clock, History, Target,
    ShieldCheck, MinusCircle,
    Vote
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CoalitionGovtModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#2563eb] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="12 12" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#2563eb] opacity-40"></div>
            {children}
        </div>
    </div>
);

const PuzzleCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold leading-relaxed">
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
        {subtitle && <p className="text-slate-500 font-bold italic ml-16">{subtitle}</p>}
    </div>
);

export default function CoalitionGovtModule({ onComplete, isCompleted, chapterNumber = "85" }: CoalitionGovtModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#2563eb] border-4 border-[#1e40af] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#1e40af] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Era of Alliances</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Jigsaw <br /> <span className="text-[#facc15] italic drop-shadow-md">Puzzle</span> <br />
                        <span className="text-blue-100 drop-shadow-md underline decoration-wavy decoration-[#facc15] italic text-3xl md:text-5xl">The Glue of Power</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "When no single piece completes the picture, many come together. The Art of the Possible."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Puzzle size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: FEATURES & FORMATION */}
            <PhaseHeader
                number="1"
                title="Features & Formation"
                color="bg-[#4b5563]"
                subtitle="How the Puzzle fits together"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <PuzzleCard
                    title="What is a Coalition?"
                    icon={<Handshake size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <p className="text-sm">A temporary alliance of distinct parties to form a government. Ideology takes a back seat.</p>
                    <div className="bg-white p-4 rounded-xl border-l-4 border-slate-600 shadow-sm mt-4">
                        <h5 className="font-black text-slate-700 uppercase mb-2">Common Minimum Programme (CMP)</h5>
                        <p className="text-xs font-bold text-slate-600">A document outlining agenda, shelving controversial issues. [PYQ]</p>
                    </div>
                </PuzzleCard>

                <PuzzleCard
                    title="Features"
                    icon={<Share2 size={120} className="text-orange-600" />}
                    color="border-orange-600"
                    className="bg-orange-50"
                >
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-800 font-bold">
                        <li><span className="text-orange-700">Instability:</span> Prone to collapse (e.g., V.P. Singh, 13-day Vajpayee govt).</li>
                        <li><span className="text-orange-700">Super-PMs:</span> Regional leaders dictating terms to PM.</li>
                        <li><span className="text-orange-700">Steering Committee:</span> Extra-constitutional coordination body (e.g., NAC).</li>
                    </ul>
                </PuzzleCard>
            </div>

            {/* PHASE 2: MERITS vs DEMERITS */}
            <PhaseHeader
                number="2"
                title="The Balance Sheet"
                color="bg-[#1e40af]"
                subtitle="Consensus vs Paralysis"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <PuzzleCard
                    title="Merits (The Good)"
                    icon={<CheckCircle2 size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="space-y-4 text-green-900 font-bold text-sm">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Accommodation of diverse interests.</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Consensus Politics; forces moderation.</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Better Representation in cabinet.</div>
                    </div>
                </PuzzleCard>

                <PuzzleCard
                    title="Demerits (The Bad)"
                    icon={<AlertTriangle size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <div className="space-y-4 text-red-900 font-bold text-sm">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full" /> Unstable Governments.</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full" /> Policy Paralysis (Delay in decisions).</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full" /> PM becomes 'Manager' not 'Leader'.</div>
                    </div>
                </PuzzleCard>
            </div>

            {/* PHASE 3: THE TIMELINE */}
            <PhaseHeader
                number="3"
                title="The Eras of Coalition"
                color="bg-[#7c3aed]"
                subtitle="From One Party to Many"
            />

            <div className="bg-purple-50 border-4 border-dashed border-purple-300 rounded-3xl p-8 relative overflow-hidden">
                <Activity size={200} className="absolute -right-10 top-10 text-purple-200 opacity-50" />
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-purple-600 text-lg">1947-67</Badge>
                        <p className="font-bold text-slate-700">Congress System (One Party Dominance).</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge className="bg-purple-600 text-lg">1977</Badge>
                        <p className="font-bold text-slate-700">First Coalition at Centre (Janata Party). [PYQ]</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-purple-600 text-purple-700 text-lg">1989-2014</Badge>
                        <p className="font-bold text-purple-900">The Coalition Era (NF, UF, NDA, UPA).</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge className="bg-purple-600 text-lg">2024+</Badge>
                        <p className="font-bold text-slate-700">Return to Coalition Dependence (BJP reliance on TDP/JD(U)).</p>
                    </div>
                </div>
            </div>

            {/* FOOTER: TYPES OF COALITIONS */}
            <div className="mt-8 p-8 bg-white border-4 border-slate-200 rounded-[2rem] relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <GitMerge className="text-slate-400 mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-4 text-slate-600">Types of Coalitions</h4>
                <div className="flex flex-wrap justify-center gap-6">
                    <Badge className="bg-green-600 text-lg py-2 px-6">Pre-Poll (More Stable)</Badge>
                    <Badge className="bg-red-600 text-lg py-2 px-6">Post-Poll (Opportunistic)</Badge>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#2563eb] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]"
                        : "bg-[#2563eb] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            ALLIANCE ARCHITECT
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Puzzle size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">CMP • Steering Committee • Stability.</p>
            </div>
        </ScrapbookContainer>
    );
}
