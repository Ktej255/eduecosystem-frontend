"use client";

import React from "react";
import {
    BookOpen, Users, Map,
    BadgeCheck, ShieldCheck, Vote,
    Gavel, Ban, Scale,
    AlertTriangle, CheckCircle2,
    FileText, UserCheck, Search,
    Milestone, Calendar, Mic2,
    Flag, Megaphone, Lock,
    Scissors, MinusCircle, AlertCircle,
    XCircle, UserX,
    Trophy,
    Landmark
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ElectionLawsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#15803d] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#15803d" strokeWidth="2" strokeDasharray="15 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#15803d] opacity-40"></div>
            {children}
        </div>
    </div>
);

const RulebookCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function ElectionLawsModule({ onComplete, isCompleted }: ElectionLawsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#16a34a] border-4 border-[#14532d] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(22,163,74,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#14532d] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 82</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-green-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Statutory Framework</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Two <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Rulebooks</span> <br />
                        <span className="text-green-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">RPA 1950 vs RPA 1951</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-2xl leading-relaxed italic opacity-90">
                        "The Locker Room vs The Stadium. One prepares the team (Voters), the other plays the game (Candidates)."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <BookOpen size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: RPA 1950 - THE SETUP */}
            <PhaseHeader
                number="1"
                title="RPA 1950 (The Setup)"
                color="bg-[#16a34a]"
                subtitle="The Locker Room: Preparing the Voters & Seats"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <RulebookCard
                    title="Scope of 1950 Act"
                    icon={<Users size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <p className="text-sm">Everything <span className="underline decoration-wavy decoration-green-500">before</span> the election notification.</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li><span className="text-green-700 font-black">Allocation of Seats:</span> In Lok Sabha & Assemblies.</li>
                        <li><span className="text-green-700 font-black">Delimitation:</span> Of Constituencies.</li>
                        <li><span className="text-green-700 font-black">Voters:</span> Qualification of voters (Who can be on the roll?). [PYQ]</li>
                        <li><span className="text-green-700 font-black">Electoral Rolls:</span> Preparation & Revision.</li>
                    </ul>
                </RulebookCard>

                <RulebookCard
                    title="The Officers (1950)"
                    icon={<BadgeCheck size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-green-200">
                            <BadgeCheck className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-xs uppercase text-slate-500 font-black">State Level</p>
                                <p className="text-green-800 font-black">Chief Electoral Officer (CEO)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-green-200">
                            <UserCheck className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-xs uppercase text-slate-500 font-black">District Level</p>
                                <p className="text-green-800 font-black">District Election Officer (DEO)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-green-200">
                            <FileText className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-xs uppercase text-slate-500 font-black">Roll Prep</p>
                                <p className="text-green-800 font-black">Electoral Registration Officer (ERO)</p>
                            </div>
                        </div>
                    </div>
                </RulebookCard>
            </div>

            {/* PHASE 2: RPA 1951 - THE CONDUCT */}
            <PhaseHeader
                number="2"
                title="RPA 1951 (The Conduct)"
                color="bg-[#2563eb]"
                subtitle="The Stadium: The Actual Game & Result"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <RulebookCard
                    title="Scope of 1951 Act"
                    icon={<Vote size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <p className="text-sm">The actual <span className="underline decoration-wavy decoration-blue-500">conduct</span> of election & disputes.</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li><span className="text-blue-700 font-black">Candidates:</span> Qualifications & Disqualifications. [PYQ]</li>
                        <li><span className="text-blue-700 font-black">Conduct:</span> Nomination, Polling, Counting.</li>
                        <li><span className="text-blue-700 font-black">Parties:</span> Registration (Section 29A).</li>
                        <li><span className="text-blue-700 font-black">Corrupt Practices:</span> Bribery, Undue Influence.</li>
                        <li><span className="text-blue-700 font-black">Disputes:</span> Election Petitions.</li>
                    </ul>
                </RulebookCard>

                <div className="bg-red-50 border-4 border-[#b91c1c] border-dashed rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                        <Flag size={100} className="text-red-700" />
                    </div>
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-[#b91c1c]">
                        <AlertCircle className="fill-red-100" />
                        Disqualification (Sec 8)
                    </h3>
                    <div className="bg-white p-4 rounded-xl border-2 border-red-200 shadow-inner mb-4">
                        <p className="text-sm font-bold text-slate-700 italic">
                            "A person convicted of any offence and sentenced to imprisonment for <span className="text-red-600 underline">not less than 2 years</span>..."
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-red-800 font-black text-sm">
                        <Ban className="shrink-0" />
                        <span>Disqualified from date of conviction.</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-800 font-black text-sm mt-2">
                        <Calendar className="shrink-0" />
                        <span>Continue for 6 years after release (Total = Jail + 6 Years). [Lily Thomas Case]</span>
                    </div>
                </div>
            </div>

            {/* PHASE 3: DELIMITATION */}
            <PhaseHeader
                number="3"
                title="Delimitation (The Boundaries)"
                color="bg-[#475569]"
                subtitle="The Map Makers"
            />

            <div className="bg-slate-50 border-4 border-slate-600 rounded-3xl p-8 relative overflow-hidden">
                <Map size={200} className="absolute -right-10 -bottom-10 text-slate-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-slate-800 uppercase underline decoration-slate-400">Delimitation Commission Act, 2002</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <UserCheck className="text-slate-600 mt-1 shrink-0" />
                                <p className="text-sm font-bold text-slate-700"><strong>Appointed By:</strong> President of India.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users className="text-slate-600 mt-1 shrink-0" />
                                <p className="text-sm font-bold text-slate-700"><strong>Composition:</strong> Retired SC Judge + CEC + State Election Commissioners.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Gavel className="text-slate-600 mt-1 shrink-0" />
                                <p className="text-sm font-bold text-slate-700"><strong>Power:</strong> Orders have force of law & <span className="text-red-600 underline">cannot be questioned</span> in any court. [PYQ]</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-slate-300 shadow-xl rotate-1">
                        <h4 className="font-black text-slate-700 mb-2 uppercase text-center">The Freeze</h4>
                        <div className="flex justify-between items-center text-xs font-bold border-b border-slate-200 pb-2 mb-2">
                            <span>Number of Seats</span>
                            <span className="text-blue-600">1971 Census</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold">
                            <span>Boundaries</span>
                            <span className="text-green-600">2001 Census</span>
                        </div>
                        <p className="mt-4 text-[10px] text-center text-slate-400 italic">Frozen till 2026/2031</p>
                    </div>
                </div>
            </div>

            {/* FOOTER: NOTA */}
            <div className="mt-8 p-8 bg-slate-900 text-white rounded-[2rem] border-4 border-slate-700 relative overflow-hidden flex flex-col items-center text-center">
                <MinusCircle className="text-slate-500 mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">NOTA (Negative Voting)</h4>
                <p className="text-sm font-bold opacity-70 max-w-xl mb-4">
                    Introduced by SC in <span className="text-yellow-400">PUCL vs Union of India (2013)</span>.
                    Even if NOTA gets max votes, the 2nd highest candidate wins (in LS/Assembly). It does <span className="underline decoration-red-500">not</span> cancel the election.
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#15803d] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#15803d] hover:bg-green-900 text-white shadow-[0_10px_40px_-10px_rgba(21,128,61,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            RULEBOOK MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <BookOpen size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 82 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Prep vs Play • Section 8 • Delimitation.</p>
            </div>
        </ScrapbookContainer>
    );
}
