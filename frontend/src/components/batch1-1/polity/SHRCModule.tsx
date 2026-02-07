"use client";

import React from "react";
import {
    ShieldCheck, Scale, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Search, UserMinus, UserPlus, Users,
    Clock, AlertTriangle, MessageSquare, Handshake,
    Lock, Shield, MapPin, Building2, Balance
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SHRCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9f3] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-900">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/90 rounded-[40px] p-6 shadow-2xl border-4 border-green-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#15803d] via-[#c2410c] to-[#b91c1c] opacity-50"></div>
            {children}
        </div>
    </div>
);

const RegionalCard = ({ title, children, color = "border-[#15803d]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(21,128,61,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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
        <div className={`w-12 h-12 bg-green-900 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-xl rotate-3`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-green-900`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function SHRCModule({ onComplete, isCompleted }: SHRCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#15803d] border-4 border-green-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(21,128,61,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#c2410c] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 52</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-green-50 font-bold uppercase tracking-widest text-sm italic">Regional Rights Guardian</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        SHRC <br />
                        <span className="text-white drop-shadow-md underline decoration-wavy decoration-[#c2410c]">The Regional Shield</span>
                    </h1>
                    <p className="text-xl text-green-50 max-w-2xl leading-relaxed italic opacity-90">
                        The state-level mirror of NHRC. Protecting rights within List II & III subjects with a regional focus.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <MapPin size={200} />
                </div>
            </div>

            {/* PHASE 1: STATUS & JURISDICTION */}
            <PhaseHeader number="1" title="Status & Jurisdiction (The Regional Setup)" color="bg-[#15803d]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RegionalCard title="State PHR List" color="border-slate-800">
                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-400 rounded-2xl">
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <BadgeCheck size={18} className="text-[#15803d] shrink-0 mt-1" />
                                <p className="text-sm font-black italic">Statutory Body established by State Government notification.</p>
                            </li>
                            <li className="p-3 bg-[#15803d] text-white rounded-xl shadow-md">
                                <h4 className="text-[10px] uppercase font-black tracking-widest text-green-200 mb-1">Jurisdiction: [PYQ]</h4>
                                <p className="text-sm font-bold italic leading-tight">Inquire into violations in <span className="underline decoration-orange-400">List II (State)</span> & <span className="underline decoration-orange-400">List III (Concurrent)</span>.</p>
                            </li>
                            <li className="flex gap-3 items-start p-3 bg-red-50 border border-red-100 rounded-xl">
                                <ShieldAlert size={18} className="text-[#b91c1c] shrink-0 mt-1" />
                                <p className="text-[10px] font-black italic text-red-900 leading-tight">Exception: If NHRC is already inquiring, SHRC cannot inquire into the same matter. [PYQ]</p>
                            </li>
                        </ul>
                    </div>
                </RegionalCard>

                <RegionalCard title="State Composition (2019)" color="border-[#c2410c]">
                    <div className="space-y-4">
                        <div className="p-4 bg-orange-50 border-2 border-[#c2410c] rounded-xl transform -rotate-1">
                            <h4 className="text-[10px] font-black uppercase text-orange-600 mb-1">Chairperson: [PYQ]</h4>
                            <p className="text-sm font-black italic">Retd. Chief Justice OR <span className="underline">Judge</span> of High Court.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                "1 Retd/Serving HC Judge OR District Judge (7y exp)",
                                "1 Person with Knowledge of Human Rights"
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-2 rounded border border-orange-100 shadow-sm">
                                    <UserPlus size={16} className="text-orange-600" />
                                    <p className="text-[11px] font-bold italic">{m}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 bg-slate-900 md:bg-white md:text-slate-900 text-white md:border-2 md:border-slate-100 rounded-xl">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1 flex items-center gap-2">
                                <Building2 size={14} /> Secretary:
                            </h5>
                            <p className="text-[11px] font-black italic">The CEO of the Commission (Rank: Secretary to State Govt).</p>
                        </div>
                    </div>
                </RegionalCard>
            </div>

            {/* APPOINTMENT COMMITTEE */}
            <div className="bg-white border-4 border-green-900 rounded-[50px] p-8 shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#c2410c] opacity-20"></div>
                <h4 className="text-2xl font-black mb-8 italic text-green-900 flex items-center justify-center gap-3 underline decoration-orange-400">
                    <Users size={32} /> The Appointment Loop
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { t: "Chief Minister", d: "Head", i: "bg-green-700" },
                        { t: "Speaker", d: "Assembly", i: "bg-slate-700" },
                        { t: "Home Minister", d: "State", i: "bg-slate-700" },
                        { t: "LoP (Assembly)", d: "Opposition", i: "bg-slate-700" }
                    ].map((member, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className={`w-14 h-14 ${member.i} text-white rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform font-black text-xl`}>{member.t.charAt(0)}</div>
                            <p className="text-[11px] font-black uppercase mt-2">{member.t}</p>
                            <p className="text-[9px] font-bold text-slate-400 italic">{member.d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-3 bg-orange-50 border-2 border-[#c2410c] border-dotted rounded-xl max-w-md mx-auto">
                    <p className="text-[10px] font-black text-orange-800 uppercase italic">If Council exists: Chairman + LoP included. [PYQ]</p>
                </div>
            </div>

            {/* PHASE 2: REMOVAL TRAP */}
            <PhaseHeader number="2" title="The Structural Trap (Critical)" color="bg-[#b91c1c]" />

            <div className="bg-[#b91c1c] text-white border-4 border-slate-900 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert size={180} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 space-y-4">
                        <h4 className="text-4xl md:text-5xl font-black italic underline decoration-white mb-6">Appointment vs Removal</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white/10 border-2 border-white/20 rounded-3xl backdrop-blur-sm group hover:bg-white/20 transition-all">
                                <p className="text-[10px] font-black uppercase tracking-widest text-orange-300">Appointed By:</p>
                                <p className="text-3xl font-black italic mt-2 text-white">GOVERNOR</p>
                            </div>
                            <div className="p-6 bg-red-950 border-4 border-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-all scale-105">
                                <p className="text-[10px] font-black uppercase tracking-widest text-red-400 underline decoration-red-900">BUT REMOVED BY:</p>
                                <p className="text-3xl font-black italic mt-2 text-white flex items-center gap-3">
                                    PRESIDENT <BadgeCheck className="text-green-400" size={28} />
                                </p>
                                <p className="text-[10px] font-black uppercase mt-3 text-red-200">[HIGH YIELD TRAP]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: POWERS & LIMITS */}
            <PhaseHeader number="3" title="Powers & Limitations (The Muzzle)" color="bg-[#15803d]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RegionalCard title="Regional Powers" color="border-[#15803d]">
                    <ul className="space-y-3">
                        {[
                            "Suo Motu: Inquiry on own motion.",
                            "Civil Court: Powers to summon & discover.",
                            "Jails: Can visit state institutions."
                        ].map((pow, i) => (
                            <li key={i} className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                                <Search className="text-green-600" size={18} />
                                <p className="text-[11px] font-black italic">{pow}</p>
                            </li>
                        ))}
                    </ul>
                </RegionalCard>

                <RegionalCard title="State Limitations" color="border-[#b91c1c]">
                    <div className="p-4 bg-red-50 border-2 border-[#b91c1c] rounded-2xl relative group">
                        <AlertTriangle className="absolute top-2 right-2 text-red-200 group-hover:text-red-600 transition-colors" size={32} />
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold italic">Advice is NOT binding. Govt must inform within 1 month.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold italic underline decoration-slate-900">1-YEAR RULE: Cannot inquire after 1 year. [PYQ]</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold italic">Limited role in Armed Forces matters.</p>
                            </li>
                        </ul>
                    </div>
                </RegionalCard>
            </div>

            {/* FOOTER: HUMAN RIGHTS COURTS */}
            <div className="p-8 bg-slate-100 border-4 border-slate-900 rounded-[30px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Gavel size={100} /></div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl">
                        <Gavel className="text-slate-900" size={32} />
                    </div>
                    <div className="text-left">
                        <h4 className="text-xl font-black italic underline decoration-green-700">Human Rights Courts (Sec 30)</h4>
                        <p className="text-xs font-bold leading-relaxed italic opacity-80 mt-2">
                            State Govt with CJ of HC concurrence can specify a <span className="underline font-black">Court of Session</span> as a Human Rights Court in each district for speedy trials.
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-green-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-[40px] transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-[#15803d] hover:bg-green-900 text-white shadow-[0_10px_40px_-10px_rgba(21,128,61,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STATE RIGHTS MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <ShieldCheck size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 52 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic underline decoration-[#c2410c] tracking-widest">Article 165 - The Mirror Scroll.</p>
            </div>
        </ScrapbookContainer>
    );
}
