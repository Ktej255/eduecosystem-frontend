"use client";

import React from "react";
import {
    Gavel, ShieldAlert, Users, Landmark,
    History, Target, ShieldCheck, Scale,
    BadgeCheck, Info, BookOpen, UserCheck,
    SearchCheck, FileText, ArrowBigUpDash,
    MessageSquare, AlertTriangle, UserPlus,
    Hammer, Hand, Lock, Map, Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LokpalModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fafafa] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-900">
        <div className="max-w-5xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white rounded-3xl p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#16a34a] opacity-30"></div>
            {children}
        </div>
    </div>
);

const LegalCard = ({ title, children, color = "border-slate-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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
        <div className={`w-12 h-12 bg-black text-white rounded shadow-xl flex items-center justify-center font-black text-xl rotate-3`}>
            {number}
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            {title}
        </h2>
        <div className="h-[2px] flex-1 bg-slate-900 opacity-10"></div>
    </div>
);

export default function LokpalModule({ onComplete, isCompleted }: LokpalModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#171717] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(22,163,74,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#16a34a] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 57</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">The Ombudsman of India</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Lokpal and <br /> Lokayuktas <br />
                        <span className="text-[#16a34a] drop-shadow-md underline decoration-wavy decoration-white">The People's Judge</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed italic opacity-90">
                        "The final crusade against corruption. Born from movement, established by law, to hold the highest accountable."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Hammer size={200} className="text-[#16a34a]" />
                </div>
            </div>

            {/* PHASE 1: ORIGIN & COMPOSITION */}
            <PhaseHeader number="1" title="Origin & Composition (The Setup)" color="bg-black" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Lokpal Act (2013)" color="border-[#16a34a]">
                    <div className="p-4 bg-green-50 border-2 border-[#16a34a] rounded-xl transform -rotate-1">
                        <h4 className="font-black text-[#16a34a] flex items-center gap-2 uppercase text-xs mb-2">
                            <History size={18} /> The Movement
                        </h4>
                        <p className="text-sm font-black text-slate-900 leading-relaxed italic">
                            Passed after the massive anti-corruption movement led by Anna Hazare. Establish Lokpal (Centre) and Lokayuktas (States).
                        </p>
                    </div>
                    <div className="mt-4 p-4 bg-white border-2 border-slate-900 rounded-xl">
                        <p className="text-xs font-bold leading-relaxed">
                            <span className="text-[#16a34a] font-black underline">First Lokpal:</span> Justice Pinaki Chandra Ghose (2019). [PYQ]
                        </p>
                    </div>
                </LegalCard>

                <LegalCard title="Composition (1 + 8)" color="border-[#ea580c]">
                    <div className="space-y-3">
                        <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg">
                            <p className="text-[10px] uppercase text-orange-400 font-black">Chairperson:</p>
                            <p className="text-xs font-bold italic shadow-sm">Former CJI / SC Judge / Eminent Person.</p>
                        </div>
                        <div className="p-3 bg-orange-50 border-l-4 border-[#ea580c] rounded">
                            <p className="text-[10px] font-black text-[#ea580c] mb-1">MEMBERS (Max 8):</p>
                            <div className="grid grid-cols-2 gap-2 text-[8px] font-black uppercase">
                                <div className="p-1 bg-white border rounded">50% Judicial</div>
                                <div className="p-1 bg-white border rounded text-orange-600">50% SC/ST/OBC/Women [PYQ]</div>
                            </div>
                        </div>
                        <div className="p-2 bg-slate-50 border-2 border-dashed border-slate-300 rounded text-center">
                            <p className="text-[10px] font-black">Term: 5 Years / 70 Years Age [High Yield]</p>
                        </div>
                    </div>
                </LegalCard>
            </div>

            <div className="mt-8">
                <LegalCard title="The Selection Committee" color="border-slate-900" className="bg-slate-50">
                    <div className="flex flex-wrap gap-4 justify-center items-center py-4">
                        {[
                            { label: "Prime Minister", sub: "Chairperson" },
                            { label: "LS Speaker", sub: "Member" },
                            { label: "LoP (LS)", sub: "Member" },
                            { label: "CJI", sub: "Member" },
                            { label: "Eminent Jurist", sub: "Nominated [PYQ]" }
                        ].map((p, i) => (
                            <div key={i} className="flex flex-col items-center p-3 bg-white border-2 border-slate-900 rounded-2xl shadow-sm min-w-[120px] text-center hover:scale-105 transition-transform rotate-1">
                                <UserCheck className="text-[#16a34a] mb-1" size={20} />
                                <p className="text-[10px] font-black uppercase">{p.label}</p>
                                <p className="text-[8px] font-bold italic text-slate-400">{p.sub}</p>
                            </div>
                        ))}
                    </div>
                </LegalCard>
            </div>

            {/* PHASE 2: JURISDICTION */}
            <PhaseHeader number="2" title="Jurisdiction (The Net)" color="bg-black" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Who is Covered?" color="border-[#ea580c]">
                    <div className="space-y-3">
                        <div className="p-4 bg-red-50 border-4 border-double border-red-600 rounded-xl relative">
                            <div className="absolute top-0 right-0 p-2 opacity-10"><Target size={40} className="text-red-600" /></div>
                            <h4 className="text-sm font-black text-red-700 italic flex items-center gap-2">
                                Prime Minister [PYQ]
                            </h4>
                            <p className="text-[10px] font-bold leading-tight mt-1">
                                Covered with safeguards (National Security, International Relations, Public Order, etc.).
                            </p>
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                            {["Ministers & MPs", "Groups A, B, C, D Employees", "Foreign Contribution (>10L) Bodies"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100 text-[10px] font-black italic">
                                    <BadgeCheck size={14} className="text-[#16a34a]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </LegalCard>

                <LegalCard title="The Powers" color="border-[#16a34a]">
                    <div className="space-y-4">
                        <div className="flex gap-4 p-4 bg-green-50 rounded-2xl border border-[#16a34a]">
                            <Zap className="text-[#16a34a]" size={32} />
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-tight">Superintendence</h5>
                                <p className="text-[10px] font-bold italic text-slate-600">Over CBI for cases referred by Lokpal.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white border-2 border-slate-900 rounded-xl">
                                <SearchCheck className="text-slate-400 mb-1" size={18} />
                                <p className="text-[10px] font-black uppercase">Search & Seizure</p>
                            </div>
                            <div className="p-3 bg-white border-2 border-slate-900 rounded-xl">
                                <Scale className="text-slate-400 mb-1" size={18} />
                                <p className="text-[10px] font-black uppercase">Confiscation</p>
                            </div>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* PHASE 3: LOKAYUKTAS */}
            <PhaseHeader number="3" title="Lokayuktas (The State Counterpart)" color="bg-black" />

            <div className="grid md:grid-cols-1 gap-8">
                <LegalCard title="Regional Variations" color="border-slate-900" className="bg-slate-50">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="p-5 bg-white border-2 border-[#16a34a] rounded-3xl relative shadow-md">
                                <Badge className="absolute -top-3 left-4 bg-[#16a34a]">MANDATORY</Badge>
                                <p className="text-xs font-bold leading-relaxed italic mt-2">
                                    The 2013 Act made it mandatory for States to establish Lokayuktas within 1 year. Structure varies by state.
                                </p>
                            </div>
                            <div className="p-4 bg-orange-50 border-l-4 border-[#ea580c] rounded">
                                <p className="text-[10px] font-black text-[#ea580c]">Appointment:</p>
                                <p className="text-xs font-bold italic">By Governor (consulting CJ of HC and LoP).</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white border-2 border-slate-900 rounded-2xl rotate-1">
                                <div className="text-2xl font-black text-slate-200">FIRST</div>
                                <div>
                                    <p className="text-[10px] font-black uppercase">Maharashtra (1971)</p>
                                    <p className="text-[8px] font-bold italic">Established before the Central Act. [PYQ]</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white border-2 border-slate-900 rounded-2xl -rotate-1">
                                <div className="text-2xl font-black text-slate-200">STRONGEST</div>
                                <div>
                                    <p className="text-[10px] font-black uppercase">Karnataka</p>
                                    <p className="text-[8px] font-bold italic">Widely cited as the most powerful state ombudsman.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* LIMITATIONS */}
            <div className="mt-8 p-6 bg-[#ea580c]/5 border-4 border-dashed border-[#ea580c] rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                    <ShieldAlert size={100} className="text-[#ea580c]" />
                </div>
                <h4 className="text-xl font-black text-[#ea580c] mb-6 flex items-center gap-3 italic">
                    <Lock size={28} /> The Procedural Shield
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-4 bg-white border-2 border-[#ea580c] rounded-2xl shadow-sm">
                        <p className="text-[10px] font-black uppercase text-orange-600 mb-2 underline tracking-widest">Time Bar: [PYQ]</p>
                        <p className="text-xs font-bold italic leading-relaxed">
                            Cannot investigate complaints made after <span className="text-lg text-[#ea580c]">7 YEARS</span> from the date of offense.
                        </p>
                    </div>
                    <div className="p-4 bg-white border-2 border-[#ea580c] rounded-2xl shadow-sm">
                        <p className="text-[10px] font-black uppercase text-orange-600 mb-2 underline tracking-widest">PM Procedure:</p>
                        <p className="text-xs font-bold italic leading-relaxed">
                            Full bench inquiry needs <span className="text-lg text-[#ea580c]">2/3rd Approval</span>. Hearing held in camera.
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-slate-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-black hover:bg-slate-800 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            OMBUDSMAN MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Hammer size={32} className="group-hover:rotate-12 transition-transform shadow-green-500" />
                            MARK CHAPTER 57 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-black italic underline decoration-slate-200">The Power of Accountability.</p>
            </div>
        </ScrapbookContainer>
    );
}
