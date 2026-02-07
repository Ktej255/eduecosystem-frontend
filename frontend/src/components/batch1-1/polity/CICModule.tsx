"use client";

import React from "react";
import {
    Search, FileSearch, Gavel, FileText,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Lightbulb, AlertCircle, FileStack, ArrowRightLeft,
    Shield, Scale, Clock, MessageSquare, Handshake,
    AlertTriangle, Receipt, UserMinus, UserPlus, Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CICModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-200">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/80 rounded-3xl p-6 shadow-2xl border-4 border-blue-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#1d4ed8] via-[#b91c1c] to-[#c2410c] opacity-50"></div>
            {children}
        </div>
    </div>
);

const SearchlightCard = ({ title, children, color = "border-[#1d4ed8]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(29,78,216,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5">
            <Search size={48} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center font-black text-xl shadow-xl rotate-6`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-blue-900`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CICModule({ onComplete, isCompleted }: CICModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1d4ed8] border-4 border-blue-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(29,78,216,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#b91c1c] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 53</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-50 font-bold uppercase tracking-widest text-sm italic">Guardian of Transparency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        CIC <br />
                        <span className="text-white drop-shadow-md underline decoration-wavy decoration-white">The Searchlight</span>
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl leading-relaxed italic opacity-90">
                        The eye of RTI. Armed with the power to penalize and the mandate to open the files of the Union.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12Scale transition-transform group-hover:rotate-0">
                    <FileSearch size={200} />
                </div>
            </div>

            {/* PHASE 1: STATUS & COMPOSITION */}
            <PhaseHeader number="1" title="Origin & Composition (The Setup)" color="bg-[#1d4ed8]" />

            <div className="grid md:grid-cols-2 gap-8">
                <SearchlightCard title="The RTI Act (2005)" color="border-[#1d4ed8]">
                    <div className="p-4 bg-blue-50 border-2 border-dashed border-blue-400 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100/50 rounded-full group-hover:scale-150 transition-transform"></div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-black italic">
                                <BadgeCheck size={18} className="text-[#1d4ed8]" /> Status: STATUTORY [PYQ]
                            </li>
                            <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                <Info size={14} /> Created under RTI Act, 2005.
                            </li>
                            <li className="p-2 bg-blue-900 text-white rounded-lg text-[10px] uppercase font-black tracking-widest text-center shadow-lg">
                                Nodal: Ministry of Personnel [PYQ]
                            </li>
                            <li className="text-[10px] font-black text-slate-400 text-center uppercase tracking-tighter italic">Not under Home Ministry!</li>
                        </ul>
                    </div>
                </SearchlightCard>

                <SearchlightCard title="Composition (1 + 10)" color="border-slate-800">
                    <div className="space-y-4">
                        <div className="p-4 bg-white border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="text-[10px] font-black uppercase text-slate-400 mb-1">Structure:</h4>
                            <p className="text-sm font-black italic">1 Chief + Max 10 Information Commissioners.</p>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl relative">
                            <Lightbulb className="text-blue-200 absolute top-2 right-2" size={24} />
                            <h4 className="text-[9px] font-black uppercase text-blue-600 mb-1">Qualification: [PYQ]</h4>
                            <p className="text-[10px] font-bold italic leading-tight text-slate-600">
                                Eminent persons in Law, Science, Tech, Media, Administration, etc.
                            </p>
                        </div>
                        <div className="bg-red-50 p-2 rounded border border-red-100 text-center">
                            <p className="text-[9px] font-black text-red-700 uppercase leading-none">Bar: No MP/MLA, No Office of Profit, No Politics.</p>
                        </div>
                    </div>
                </SearchlightCard>
            </div>

            {/* APPOINTMENT COMMITTEE */}
            <div className="bg-white border-2 border-blue-950 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1d4ed8]"></div>
                <h4 className="text-xl font-black mb-8 italic text-blue-900 flex items-center gap-3 underline decoration-orange-400">
                    <Users size={28} className="text-[#1d4ed8]" /> The Appointment Committee
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Prime Minister", d: "Chairperson", c: "bg-blue-700" },
                        { t: "LoP (Lok Sabha)", d: "Leader of Opposition", c: "bg-slate-700" },
                        { t: "Cabinet Minister", d: "Nominated by PM [PYQ]", c: "bg-slate-700" }
                    ].map((m, i) => (
                        <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl group transition-all hover:bg-white hover:shadow-md">
                            <div className={`w-10 h-10 ${m.c} text-white rounded-full flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform`}>{m.t.charAt(0)}</div>
                            <div>
                                <p className="text-[11px] font-black uppercase tracking-tight">{m.t}</p>
                                <p className="text-[9px] font-bold text-slate-400 italic">{m.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PHASE 2: 2019 AMENDMENT */}
            <PhaseHeader number="2" title="The 2019 Amendment (The Shift)" color="bg-[#b91c1c]" />

            <div className="bg-[#b91c1c] text-white border-4 border-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><History size={150} /></div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 border-b md:border-b-0 md:border-r border-red-800 bg-red-900/50">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-slate-900">Before 2019</Badge>
                            <span className="text-[10px] font-black uppercase tracking-widest text-red-200 opacity-50">Independence</span>
                        </div>
                        <ul className="space-y-6">
                            <li className="space-y-1">
                                <p className="text-[10px] font-black text-red-300 uppercase underline">Tenure:</p>
                                <p className="text-lg font-black italic">FIXED 5 Years. [PYQ]</p>
                            </li>
                            <li className="space-y-1">
                                <p className="text-[10px] font-black text-red-300 uppercase underline">Salary:</p>
                                <p className="text-lg font-black italic">Equated to CEC / ECs.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 bg-white text-slate-900 relative border-l-4 border-white border-dashed">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-[#b91c1c]">After 2019</Badge>
                            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 italic underline decoration-dotted">Executive Discretion</span>
                        </div>
                        <ul className="space-y-6">
                            <li className="space-y-1">
                                <p className="text-[10px] font-black text-red-600 uppercase underline">Tenure:</p>
                                <p className="text-lg font-black italic text-[#b91c1c]">As Prescribed by Centre.</p>
                            </li>
                            <li className="space-y-1">
                                <p className="text-[10px] font-black text-red-600 uppercase underline">Salary:</p>
                                <p className="text-lg font-black italic text-[#b91c1c]">Determined by Centre.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 bg-slate-900 text-[10px] font-black text-center text-red-400 italic">
                    Critically cited as dilution of independence.
                </div>
            </div>

            {/* PHASE 3: POWERS & FUNCTIONS */}
            <PhaseHeader number="3" title="Powers & Functions (The Teeth)" color="bg-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <SearchlightCard title="Quasi-Judicial Powers" color="border-blue-900">
                    <div className="space-y-4">
                        <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="flex items-center gap-2 font-black text-[#1d4ed8] mb-3">
                                <Gavel size={20} /> Civil Court Powers:
                            </h4>
                            <p className="text-[11px] font-bold text-slate-600 leading-relaxed italic">
                                Summons, discovery of docs, receiving evidence on affidavits.
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 border-2 border-blue-100 rounded-xl relative overflow-hidden group">
                            <div className="absolute -bottom-2 -right-2 opacity-5 scale-150 rotate-12"><FileStack size={64} /></div>
                            <h4 className="text-[10px] font-black uppercase text-blue-800 mb-2 italic">No Secret Files:</h4>
                            <p className="text-[11px] font-black italic leading-tight">
                                Can examine <span className="underline decoration-blue-900 decoration-2">ANY RECORD</span> under public authority. No confidentiality shield! [PYQ]
                            </p>
                        </div>
                    </div>
                </SearchlightCard>

                <SearchlightCard title="The Bite (Penalties)" color="border-[#c2410c]">
                    <div className="space-y-4">
                        <div className="p-6 bg-orange-50 border-l-8 border-[#c2410c] rounded-2xl shadow-xl transform rotate-1 group hover:rotate-0 transition-transform">
                            <h4 className="text-2xl font-black text-[#c2410c] italic mb-2 select-none group-hover:translate-x-1 transition-transform">Power to Fine</h4>
                            <p className="text-[11px] font-bold text-slate-800 italic leading-snug mb-4">
                                On Public Information Officer (PIO) for unreasonable delay.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-3 bg-white border-2 border-[#c2410c] rounded-xl flex-1 text-center group-hover:scale-105 transition-transform">
                                    <p className="text-[8px] font-black text-slate-400 font-sans uppercase">Per Day</p>
                                    <p className="text-xl font-black text-[#c2410c]">₹250</p>
                                </div>
                                <div className="p-3 bg-white border-2 border-[#c2410c] rounded-xl flex-1 text-center group-hover:scale-105 transition-transform">
                                    <p className="text-[8px] font-black text-slate-400 font-sans uppercase">Maximum [PYQ]</p>
                                    <p className="text-xl font-black text-[#c2410c]">₹25,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl italic">
                            <BadgeCheck className="text-green-600" size={18} />
                            <p className="text-[10px] font-black">Can recommend disciplinary action against PIO.</p>
                        </div>
                    </div>
                </SearchlightCard>
            </div>

            {/* REMOVAL PROCESS */}
            <div className="p-8 border-4 border-dashed border-red-200 rounded-[30px] bg-red-50 relative overflow-hidden text-center group">
                <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                    <h4 className="text-xl font-black italic text-red-900 mb-4 underline decoration-red-400 flex items-center justify-center gap-2">
                        <Scale size={24} /> Removal Process
                    </h4>
                    <p className="text-sm font-bold leading-relaxed italic text-red-800">
                        By <span className="font-black underline scale-110 inline-block px-1">PRESIDENT</span> on grounds of Misbehavior/Incapacity only after <span className="text-black font-black">Supreme Court Inquiry</span>. [PYQ]
                    </p>
                    <p className="text-[9px] font-black text-slate-400 mt-4 uppercase tracking-tighter">Reference to SC is mandatory for Misbehavior grounds.</p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-blue-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-[40px] transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-[#1d4ed8] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(29,78,216,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            TRANSPARENCY MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Search size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 53 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest">RTI Act, 2005: The Power of Information.</p>
            </div>
        </ScrapbookContainer>
    );
}
