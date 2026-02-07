"use client";

import React from "react";
import {
    Scale, Gavel, BookOpen,
    Archive, FileText, Search,
    ShieldCheck, UserCheck, Heart,
    Lock, Unlock, Key,
    Hammer, Landmark, Crown,
    Quote, ArrowRight, History,
    Flame, Zap, Skull,
    AlertTriangle, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LandmarkJudgementsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fdf2f8] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-pink-100 selection:text-pink-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#171717] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#171717" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#171717] opacity-80"></div>
            {children}
        </div>
    </div>
);

const CaseCard = ({ title, year, icon, color, children, className = "" }: { title: string, year: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-black flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
                {title}
            </h3>
            <Badge className="bg-slate-800 text-white font-mono">{year}</Badge>
        </div>

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

export default function LandmarkJudgementsModule({ onComplete, isCompleted }: LandmarkJudgementsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#171717] border-4 border-[#000000] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(23,23,23,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#404040] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 91</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-slate-300 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Judicial History</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Case Files <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Archive</span> <br />
                        <span className="text-slate-300 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">The Living Tree</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed italic opacity-90">
                        "From AK Gopalan to Puttaswamy. How the Supreme Court rewrote the Constitution."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Archive size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: FUNDAMENTAL RIGHTS */}
            <PhaseHeader
                number="1"
                title="The Rights (Liberty vs Life)"
                color="bg-[#ca8a04]"
                subtitle="The Expansion of Article 21"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <CaseCard
                    title="AK Gopalan Case"
                    year="1950"
                    icon={<Lock size={120} className="text-yellow-600" />}
                    color="border-yellow-600"
                    className="bg-yellow-50"
                >
                    <p className="text-sm">"Procedure Established by Law" (Narrow). No Due Process.</p>
                    <div className="bg-white p-3 rounded-lg border border-yellow-200 mt-2">
                        <p className="text-xs font-black text-slate-500 uppercase">Verdict</p>
                        <p className="text-sm font-bold text-yellow-800">Preventive Detention is valid. Art 19 & 21 are separate silos.</p>
                    </div>
                </CaseCard>

                <CaseCard
                    title="Maneka Gandhi Case"
                    year="1978"
                    icon={<Unlock size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <p className="text-sm">"Due Process of Law" (Broad). Golden Triangle (14, 19, 21).</p>
                    <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2">
                        <p className="text-xs font-black text-slate-500 uppercase">Verdict</p>
                        <p className="text-sm font-bold text-blue-800">Passport impounding must be 'fair, just & reasonable'. Art 21 expanded.</p>
                    </div>
                </CaseCard>

                <CaseCard
                    title="Puttaswamy Case"
                    year="2017"
                    icon={<ShieldCheck size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="bg-white p-3 rounded-lg border border-green-200 mt-2">
                        <p className="text-xs font-black text-slate-500 uppercase">Verdict</p>
                        <p className="text-sm font-bold text-green-800"><span className="underline">Right to Privacy</span> is a Fundamental Right under Article 21.</p>
                    </div>
                </CaseCard>
            </div>

            {/* PHASE 2: BASIC STRUCTURE (THE CROWN JEWEL) */}
            <PhaseHeader
                number="2"
                title="The Basic Structure"
                color="bg-[#b91c1c]"
                subtitle="Limits on Amendment Power"
            />

            <div className="bg-red-50 border-4 border-double border-red-600 rounded-3xl p-8 relative overflow-hidden">
                <Crown size={200} className="absolute -right-10 top-10 text-red-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-red-700 uppercase mb-4">Kesavananda Bharati (1973)</h3>
                        <p className="font-bold text-slate-700 mb-4">The most important case in Indian history. Bench of 13 Judges (Largest). Ratio 7:6.</p>
                        <ul className="space-y-3 text-sm font-bold text-red-900">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> Parliament usually amend ANY part (including FRs).</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> BUT cannot alter the <span className="underline text-lg">Basic Structure</span>.</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> Judicial Review is part of Basic Structure.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl rotate-2 border-2 border-red-200 flex flex-col items-center">
                        <Hammer size={48} className="text-slate-800 mb-2" />
                        <h4 className="font-black text-slate-800 uppercase text-center">Minerva Mills (1980)</h4>
                        <p className="text-xs font-bold text-center text-slate-600 mt-2">
                            "Constitution is founded on the bedrock of balance between Part III (FR) and Part IV (DPSP)."
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: FEDERALISM & MISC */}
            <PhaseHeader
                number="3"
                title="Federalism & Equality"
                color="bg-[#171717]"
                subtitle="Bommai & Indra Sawhney"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <CaseCard
                    title="SR Bommai Case"
                    year="1994"
                    icon={<Landmark size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <p className="text-sm font-bold text-slate-700 mb-4">Guidelines for imposing President's Rule (Art 356).</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li><span className="text-slate-900 font-black">Federalism</span> is Basic Structure.</li>
                        <li>Floor Test is the <span className="underline">only</span> way to test majority.</li>
                        <li>Assembly can only be dissolved <span className="underline">after</span> Parliament approval.</li>
                    </ul>
                </CaseCard>

                <CaseCard
                    title="Indra Sawhney Case"
                    year="1992"
                    icon={<Scale size={120} className="text-purple-600" />}
                    color="border-purple-600"
                    className="bg-purple-50"
                >
                    <p className="text-sm font-bold text-purple-900 mb-4">Mandal Case (27% OBC Reservation).</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-purple-800">
                        <li><span className="font-black">Total Cap:</span> 50% Limit on reservations.</li>
                        <li><span className="font-black">Creamy Layer:</span> Excluded from OBC quota.</li>
                        <li><span className="font-black">Promotion:</span> No reservation in promotions (Overturned by 77th AA).</li>
                    </ul>
                </CaseCard>
            </div>

            {/* FOOTER: RECENT CASES */}
            <div className="mt-8 p-8 bg-slate-100 text-slate-800 rounded-[2rem] border-4 border-slate-300 relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <Flame className="text-orange-500 mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">Modern Shifts</h4>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                    <Badge variant="outline" className="text-sm p-2 border-slate-400">Navtej Singh Johar (Sec 377)</Badge>
                    <Badge variant="outline" className="text-sm p-2 border-slate-400">Joseph Shine (Adultery)</Badge>
                    <Badge variant="outline" className="text-sm p-2 border-slate-400">Sabrimala (Religion)</Badge>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#171717] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-slate-800 hover:bg-slate-900 text-white shadow-[0_0_30px_-5px_rgba(23,23,23,0.5)]"
                        : "bg-[#171717] hover:bg-slate-800 text-white shadow-[0_10px_40px_-10px_rgba(23,23,23,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Gavel size={32} className="animate-bounce" />
                            JURIST CERTIFIED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <BookOpen size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 91 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Kesavananda • Basic Structure • Bommai.</p>
            </div>
        </ScrapbookContainer>
    );
}
