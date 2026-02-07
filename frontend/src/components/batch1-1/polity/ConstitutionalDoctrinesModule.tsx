"use client";

import React from "react";
import {
    Gavel, Scissors, Cloud, Shield, Hand,
    Microscope, VenetianMask as Mask, Map, Handshake,
    Scale, AlertTriangle, CheckCircle2, XCircle,
    BookOpen, History, Lock, Unlock,
    Zap, Flame, Target, ArrowRight,
    Divide, Search, Globe, Crown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ConstitutionalDoctrinesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#1e3a8a] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
            {/* Hand-drawn SVG Border Overlay */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="15 5" />
            </svg>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-16 -mt-16"></div>
            {children}
        </div>
    </div>
);

const DoctrineCard = ({ title, metaphor, icon, color, children, caseName, caseYear }: { title: string, metaphor: string, icon: React.ReactNode, color: string, children: React.ReactNode, caseName?: string, caseYear?: string }) => (
    <div className={`bg-white border-l-4 ${color.replace('text-', 'border-')} rounded-r-xl p-6 shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300`}>
        <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform">
            {icon}
        </div>

        <div className="flex items-start gap-4 mb-3">
            <div className={`p-3 rounded-lg ${color.replace('text-', 'bg-').replace('600', '100')} ${color} shadow-sm`}>
                {icon}
            </div>
            <div>
                <h3 className={`text-xl font-black ${color}`}>{title}</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metaphor}</span>
            </div>
        </div>

        <div className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4">
            {children}
        </div>

        {caseName && (
            <div className={`mt-auto inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${color.replace('text-', 'border-').replace('600', '200')} ${color.replace('text-', 'bg-').replace('600', '50')}`}>
                <Gavel size={12} />
                {caseName} <span className="opacity-70">({caseYear})</span>
            </div>
        )}
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-10 h-10 ${color} text-white rounded-full flex items-center justify-center font-black shadow-lg border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function ConstitutionalDoctrinesModule({ onComplete, isCompleted }: ConstitutionalDoctrinesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e3a8a] text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden mb-12 border-4 border-[#172554]">
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-[#172554] text-white border border-blue-400">Chapter 94</Badge>
                            <span className="text-blue-200 font-bold uppercase tracking-widest text-sm">Constitutional Interpretation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                            The Judge's <span className="text-[#60a5fa] underline decoration-wavy decoration-white">Toolkit</span>
                        </h1>
                        <p className="text-lg text-blue-100 opacity-90 max-w-md">
                            "When the Constitution is silent or ambiguous, the Judiciary uses these 5 Golden Rules to interpret the supreme law."
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <BriefcaseIcon size={180} className="text-blue-300 opacity-20 absolute top-0 left-0 animate-pulse" />
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center">
                                    <Scissors size={32} className="text-red-400 mb-2" />
                                    <span className="text-xs font-bold">Cut</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center">
                                    <Cloud size={32} className="text-gray-300 mb-2" />
                                    <span className="text-xs font-bold">Hide</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center">
                                    <Microscope size={32} className="text-green-400 mb-2" />
                                    <span className="text-xs font-bold">Examine</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center">
                                    <Mask size={32} className="text-yellow-400 mb-2" />
                                    <span className="text-xs font-bold">Unmask</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 1: FUNDAMENTAL RIGHTS */}
            <PhaseHeader number="1" title="Fundamental Rights (Art 13)" color="bg-red-600" />

            <div className="grid md:grid-cols-3 gap-6">
                <DoctrineCard
                    title="Severability"
                    metaphor="The Scalpel"
                    icon={<Scissors className="w-8 h-8" />}
                    color="text-red-600"
                    caseName="A.K. Gopalan Case"
                    caseYear="1950"
                >
                    <p>If a law violates FR, the Court will not strike down the entire law, but <span className="font-bold underline decoration-red-300">only the offending part</span>.</p>
                    <p className="text-sm mt-2 italic text-slate-500">"Separate the bad from the good."</p>
                </DoctrineCard>

                <DoctrineCard
                    title="Eclipse"
                    metaphor="The Cloud"
                    icon={<Cloud className="w-8 h-8" />}
                    color="text-slate-600"
                    caseName="Bhikaji Narain vs State of MP"
                    caseYear="1955"
                >
                    <p>Pre-constitutional laws violating FR are not dead, but <span className="font-bold underline decoration-slate-300">dormant (eclipsed)</span>. If FR is amended, they wake up!</p>
                    <p className="text-sm mt-2 italic text-slate-500">"Hiding behind the shadow."</p>
                </DoctrineCard>

                <DoctrineCard
                    title="Waiver"
                    metaphor="The Refused Gift"
                    icon={<Hand className="w-8 h-8" />}
                    color="text-orange-600"
                    caseName="Basheshar Nath vs IT Comm."
                    caseYear="1959"
                >
                    <p>Can a citizen voluntarily give up their Fundamental Rights? <span className="font-black text-red-600">NO.</span></p>
                    <p className="text-sm mt-2 italic text-slate-500">"Rights are not just for you, but for public policy."</p>
                </DoctrineCard>
            </div>

            {/* PHASE 2: FEDERALISM */}
            <PhaseHeader number="2" title="Federalism (Centre vs State)" color="bg-green-600" />

            <div className="grid md:grid-cols-2 gap-6">
                <DoctrineCard
                    title="Pith & Substance"
                    metaphor="The Microscope"
                    icon={<Microscope className="w-8 h-8" />}
                    color="text-green-600"
                    caseName="Prafulla Kumar vs Bank of Commerce"
                    caseYear="1947"
                >
                    <p>When a law of one list touches another list, court checks its <span className="font-bold underline decoration-green-300">True Nature (Pith)</span>. If substance is valid, incidental encroachment is allowed.</p>
                </DoctrineCard>

                <DoctrineCard
                    title="Colorable Legislation"
                    metaphor="The Mask"
                    icon={<Mask className="w-8 h-8" />}
                    color="text-purple-600"
                    caseName="K.C. Gajapati Narayan Deo Case"
                    caseYear="1953"
                >
                    <p className="font-bold italic mb-2">"What cannot be done directly, cannot be done indirectly."</p>
                    <p>Legislature cannot disguise a law to bypass its power limits. The Court will <span className="font-bold underline decoration-purple-300">unmask</span> the disguise.</p>
                </DoctrineCard>
            </div>

            {/* PHASE 3: TERRITORY & INTERPRETATION */}
            <PhaseHeader number="3" title="Territory & Interpretation" color="bg-blue-600" />

            <div className="grid md:grid-cols-2 gap-6">
                <DoctrineCard
                    title="Territorial Nexus"
                    metaphor="The Map Connection"
                    icon={<Map className="w-8 h-8" />}
                    color="text-blue-600"
                    caseName="State of Bombay vs R.M.D.C."
                    caseYear="1957"
                >
                    <p>State laws apply only within the state. Exception: If there is a <span className="font-bold underline decoration-blue-300">sufficient connection (Nexus)</span> between the state and the object outside.</p>
                </DoctrineCard>

                <DoctrineCard
                    title="Harmonious Construction"
                    metaphor="The Handshake"
                    icon={<Handshake className="w-8 h-8" />}
                    color="text-teal-600"
                    caseName="Kerala Education Bill"
                    caseYear="1957"
                >
                    <p>When two provisions clash (e.g., FR vs DPSP), interpret them to <span className="font-bold underline decoration-teal-300">give effect to both</span>. Avoid head-on collision.</p>
                </DoctrineCard>
            </div>

            {/* FOOTER: JUDICIAL REVIEW */}
            <div className="mt-12 p-8 bg-slate-900 text-white rounded-[2rem] border-4 border-slate-700 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                <div className="bg-slate-800 p-6 rounded-full border-4 border-slate-600 shadow-inner">
                    <Gavel size={64} className="text-yellow-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                        <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold">BASIC STRUCTURE</Badge>
                    </div>
                    <h4 className="text-2xl font-black uppercase mb-2">Judicial Review</h4>
                    <p className="text-slate-300 max-w-xl leading-relaxed">
                        Derived from Art 13 & 32/226. It is the power of courts to declare legislative and executive actions void. Confirmed as Basic Structure in <span className="text-yellow-400 font-bold">Minerva Mills (1980)</span>.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center pt-8 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-6 text-xl font-black rounded-full transition-all duration-500 shadow-xl transform hover:scale-105 ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white ring-4 ring-green-200"
                        : "bg-[#1e3a8a] hover:bg-blue-900 text-white ring-4 ring-blue-200"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-3">
                            <CheckCircle2 size={24} />
                            DOCTRINES MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-3">
                            <BookOpen size={24} />
                            MARK CHAPTER 94 COMPLETE
                        </span>
                    )}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}

// Icon for the Hero section
const BriefcaseIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);
