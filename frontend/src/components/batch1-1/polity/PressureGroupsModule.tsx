"use client";

import React from "react";
import {
    Hand, GripVertical, Settings,
    Users, Briefcase, Factory,
    Tractor, Stethoscope, Gavel,
    Megaphone, AlertTriangle, Lightbulb,
    Brain, Network, Share2,
    MessageCircle, Signal, Radio,
    Target, Flag, Zap,
    Vote, ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PressureGroupsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3e8ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-purple-100 selection:text-purple-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#7c3aed] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="15 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7c3aed] opacity-40"></div>
            {children}
        </div>
    </div>
);

const GroupCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function PressureGroupsModule({ onComplete, isCompleted }: PressureGroupsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#7c3aed] border-4 border-[#5b21b6] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(124,58,237,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#5b21b6] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 87</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-purple-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Invisible Empires</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Hand on <br /> <span className="text-[#fcd34d] italic drop-shadow-md">The Lever</span> <br />
                        <span className="text-purple-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">Influence without Power</span>
                    </h1>
                    <p className="text-xl text-purple-100 max-w-2xl leading-relaxed italic opacity-90">
                        "They don't want the throne (Government). They want to move the hand that sits on it (Policy)."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Hand size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: CONCEPT & CLASSIFICATION */}
            <PhaseHeader
                number="1"
                title="The Theory (Almond's Matrix)"
                color="bg-[#2563eb]"
                subtitle="The 4 Types of Groups"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <GroupCard
                    title="Pressure Group vs Party"
                    icon={<Users size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <div className="flex justify-between items-center text-sm font-bold border-b border-blue-200 pb-2 mb-2">
                        <span>Political Party</span>
                        <span className="text-blue-800">Captures Power (Govt)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span>Pressure Group</span>
                        <span className="text-purple-800">Influences Power (Policy)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 italic">*Also called "Interest Groups" or "Vested Groups".</p>
                </GroupCard>

                <div className="bg-white border-4 border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-black text-slate-700 mb-4 uppercase text-center">Gabriel Almond's Classification</h4>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-600">
                        <div className="p-3 bg-purple-50 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🏛️</span>
                            Institutional (IAS, Army)
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🏭</span>
                            Associational (FICCI, Unions)
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg text-center">
                            <span className="block text-2xl mb-1">👨‍👩‍👧‍👦</span>
                            Non-Associational (Caste, Kinship)
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg text-center border-2 border-red-200">
                            <span className="block text-2xl mb-1">🔥</span>
                            <span className="text-red-600">Anomic (Riots, Agitations)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: MAJOR GROUPS IN INDIA */}
            <PhaseHeader
                number="2"
                title="The Zoo (Major Groups)"
                color="bg-[#16a34a]"
                subtitle="Business, Labor & Farmers"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <GroupCard
                    title="Business & Trade Unions"
                    icon={<Factory size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-black text-slate-500 uppercase">Business</p>
                            <p className="text-sm font-bold">FICCI, CII, ASSOCHAM.</p>
                        </div>
                        <div className="pt-2 border-t border-slate-300">
                            <p className="text-xs font-black text-slate-500 uppercase mb-1">Trade Unions (Match the Following)</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <span className="bg-red-100 p-1 rounded">AITUC - CPI (Oldest)</span>
                                <span className="bg-orange-100 p-1 rounded">BMS - BJP/RSS</span>
                                <span className="bg-blue-100 p-1 rounded">INTUC - Congress</span>
                                <span className="bg-red-200 p-1 rounded">CITU - CPI(M)</span>
                            </div>
                        </div>
                    </div>
                </GroupCard>

                <GroupCard
                    title="Agrarian & Professional"
                    icon={<Tractor size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Tractor className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-green-900 font-bold">Bhartiya Kisan Union (BKU)</p>
                                <p className="text-xs text-green-700">Famous for Farm Laws protest.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Stethoscope className="text-blue-600 shrink-0" />
                            <div>
                                <p className="text-blue-900 font-bold">IMA & Bar Council</p>
                                <p className="text-xs text-blue-700">Doctors & Lawyers Associations.</p>
                            </div>
                        </div>
                    </div>
                </GroupCard>
            </div>

            {/* PHASE 3: METHODS & LIMITATIONS */}
            <PhaseHeader
                number="3"
                title="The Toolbox (Methods)"
                color="bg-[#b91c1c]"
                subtitle="How they get things done"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <GroupCard
                    title="Techniques of Influence"
                    icon={<Settings size={120} className="text-purple-600" />}
                    color="border-purple-600"
                    className="bg-[#faf5ff]"
                >
                    <ul className="list-disc pl-4 space-y-2 text-sm text-purple-900 font-bold">
                        <li><span className="underline">Lobbying:</span> Persuading MPs (Less formal in India).</li>
                        <li><span className="underline">Electioneering:</span> Funding parties (Bonds).</li>
                        <li><span className="underline">Litigation:</span> Filing PILs for judicial intervention.</li>
                        <li><span className="underline text-red-600">Direct Action:</span> Strikes (Hartal), Bandhs, Gheraos.</li>
                    </ul>
                </GroupCard>

                <GroupCard
                    title="Criticism"
                    icon={<AlertTriangle size={120} className="text-red-500" />}
                    color="border-red-500"
                    className="bg-red-50"
                >
                    <div className="space-y-3 font-bold text-red-900 text-sm">
                        <p>1. <span className="underline">Narrow Base:</span> Represent mostly urban/wealthy interests.</p>
                        <p>2. <span className="underline">Violence:</span> Frequent use of unconstitutional methods (burning buses, blocking roads).</p>
                    </div>
                </GroupCard>
            </div>

            {/* FOOTER: THINK TANKS */}
            <div className="mt-8 p-8 bg-blue-900 text-white rounded-[2rem] border-4 border-blue-500 relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <Brain className="text-blue-300 mb-4 animate-pulse" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">The Modern Shift: Think Tanks</h4>
                <p className="text-sm font-bold opacity-80 max-w-xl mb-4">
                    Policy influence is shifting from traditional pressure groups to expert Think Tanks (CPR, ORF, VIF).
                    <br /><span className="text-yellow-400 text-lg">NITI Aayog</span> is the supreme government think tank bridging the gap.
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#7c3aed] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)]"
                        : "bg-[#7c3aed] hover:bg-purple-900 text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Hand size={32} className="animate-bounce" />
                            LOBBYIST MASTER
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <GripVertical size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 87 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">FICCI • BMS • Anomic Groups.</p>
            </div>
        </ScrapbookContainer>
    );
}
