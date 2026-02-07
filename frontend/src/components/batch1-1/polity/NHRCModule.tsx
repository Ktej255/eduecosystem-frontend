"use client";

import React from "react";
import {
    ShieldCheck, Scale, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Search, UserMinus, UserPlus, Users,
    Clock, AlertTriangle, MessageSquare, Handshake,
    Lock, Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NHRCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f1f5f9] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/80 rounded-3xl p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#1d4ed8] via-[#374151] to-[#b91c1c] opacity-50"></div>
            {children}
        </div>
    </div>
);

const RightsCard = ({ title, children, color = "border-[#1d4ed8]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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
        <div className={`w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl -rotate-6`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-slate-900`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function NHRCModule({ onComplete, isCompleted }: NHRCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1d4ed8] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(29,78,216,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#374151] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 51</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-50 font-bold uppercase tracking-widest text-sm italic">Watchdog of Human Rights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        NHRC <br />
                        <span className="text-white drop-shadow-md underline decoration-wavy decoration-[#b91c1c]">The Shield & The Muzzle</span>
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl leading-relaxed italic opacity-90">
                        A Statutory guardian established in 1993. It protects with a shield of inquiry but acts with a muzzle of recommendation.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Shield size={200} />
                </div>
            </div>

            {/* PHASE 1: STATUS & COMPOSITION */}
            <PhaseHeader number="1" title="Status & Composition (The Setup)" color="bg-[#1d4ed8]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RightsCard title="PHR Act, 1993" color="border-[#374151]">
                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-400 rounded-2xl relative">
                        <ScrollText className="absolute top-2 right-2 text-slate-300" size={32} />
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-black italic">
                                <BadgeCheck size={18} className="text-[#1d4ed8]" /> Status: STATUTORY [PYQ]
                            </li>
                            <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                <Info size={14} /> Created by Parliamentary Act (Not Constitutional).
                            </li>
                            <li className="p-2 bg-blue-900 text-white rounded-lg text-[10px] uppercase font-black tracking-widest text-center">
                                Conforms to Paris Principles (1991)
                            </li>
                            <li className="text-[11px] font-black text-[#b91c1c] underline decoration-dotted">Major Amendment: 2019 [Current]</li>
                        </ul>
                    </div>
                </RightsCard>

                <RightsCard title="The Head Table [PYQ]" color="border-[#1d4ed8]">
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 border-2 border-[#1d4ed8] rounded-xl transform rotate-1">
                            <h4 className="text-[10px] font-black uppercase text-blue-600 mb-1">Chairperson:</h4>
                            <p className="text-sm font-black italic">Retd. CJI OR SC Judge. <span className="text-[10px] text-slate-400 font-sans tracking-tighter">(2019 Change)</span></p>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {[
                                "1 Retd/Serving SC Judge",
                                "1 Retd/Serving CJ of High Court",
                                "3 Knowledgeable Experts (incl. 1 Woman)"
                            ].map((member, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-2 rounded border border-slate-100 shadow-sm">
                                    <UserPlus size={16} className="text-blue-500" />
                                    <p className="text-[11px] font-bold italic">{member}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 bg-slate-900 text-white rounded-xl">
                            <p className="text-[9px] font-black uppercase text-blue-400 mb-1 tracking-widest">Ex-Officio Members (7 Bodies):</p>
                            <div className="flex flex-wrap gap-2">
                                {["NCSC", "NCST", "NCBC", "NCW", "Minorities", "CCPWD", "NCPCR"].map(b => (
                                    <span key={b} className="text-[8px] font-black border border-white/20 px-1 rounded">{b}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </RightsCard>
            </div>

            {/* APPOINTMENT COMMITTEE */}
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1d4ed8]"></div>
                <h4 className="text-xl font-black mb-6 italic flex items-center gap-2 text-slate-900 uppercase tracking-tighter">
                    <Handshake size={24} className="text-[#1d4ed8]" /> The Selection Committee (6 Members)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { t: "PM", d: "Head/Chair", i: "bg-blue-600" },
                        { t: "Speaker", d: "Lok Sabha", i: "bg-slate-700" },
                        { t: "Deputy Chairman", d: "Rajya Sabha [TRAP]", i: "bg-red-600" },
                        { t: "LoP (LS)", d: "Lok Sabha", i: "bg-slate-700" },
                        { t: "LoP (RS)", d: "Rajya Sabha", i: "bg-slate-700" },
                        { t: "Home Minister", d: "Union", i: "bg-slate-700" }
                    ].map((m, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className={`w-12 h-12 ${m.i} text-white rounded-full flex items-center justify-center font-black shadow-lg group-hover:scale-110 transition-transform`}>{m.t.charAt(0)}</div>
                            <p className="text-[10px] font-black mt-2 uppercase tracking-tighter">{m.t}</p>
                            <p className="text-[8px] font-bold text-slate-400 italic">{m.d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-3 bg-red-50 border-2 border-dashed border-red-200 rounded-xl text-center">
                    <p className="text-[10px] font-black text-red-700 uppercase leading-none italic tracking-tighter">
                        <ShieldAlert size={14} className="inline mr-1" /> Trap: Chairman/VP of Rajya Sabha is <span className="underline">NOT</span> a member. [PYQ]
                    </p>
                </div>
            </div>

            {/* PHASE 2: POWERS & LIMITATIONS */}
            <PhaseHeader number="2" title="Powers (The Shield)" color="bg-[#1d4ed8]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RightsCard title="Investigative Scope" color="border-[#1d4ed8]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 group">
                            <Search className="text-blue-600 group-hover:scale-125 transition-transform" size={32} />
                            <div>
                                <p className="text-xs font-black uppercase text-blue-400">Suo Motu [PYQ]</p>
                                <p className="text-[11px] font-bold italic">Can inquire on its own motion or on petition.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="text-[10px] font-black uppercase text-slate-500 mb-2 italic">Civil Court Powers:</h4>
                            <p className="text-[11px] font-bold text-slate-700 italic leading-relaxed">
                                Summoning witnesses, discovery of documents, receiving evidence on affidavits.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 italic">
                            <Lock size={16} className="text-slate-400" />
                            <p className="text-[10px] font-bold">Can visit jails to study living conditions.</p>
                        </div>
                    </div>
                </RightsCard>

                <RightsCard title="The 'Toothless' Muzzle" color="border-[#b91c1c]">
                    <div className="p-1 border-4 border-[#b91c1c] rounded-3xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-red-50 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative p-6 space-y-4">
                            <div className="flex justify-center">
                                <AlertTriangle size={64} className="text-[#b91c1c] animate-pulse" />
                            </div>
                            <h4 className="text-center text-lg font-black text-[#b91c1c] italic underline decoration-slate-900">Why the "Tiger" Title?</h4>
                            <ul className="space-y-3">
                                <li className="p-2 bg-white rounded-lg shadow-sm border-l-4 border-[#b91c1c] text-[11px] font-bold italic">
                                    <span className="text-[#b91c1c] font-black">RECOMMENDATORY:</span> Advise NOT binding on Govt. [PYQ]
                                </li>
                                <li className="p-2 bg-white rounded-lg shadow-sm border-l-4 border-[#b91c1c] text-[11px] font-bold italic">
                                    <span className="text-[#b91c1c] font-black">NO POWER:</span> Cannot punish violators directly.
                                </li>
                                <li className="p-2 bg-white rounded-lg shadow-sm border-l-4 border-[#b91c1c] text-[11px] font-bold italic">
                                    <span className="text-[#b91c1c] font-black">ARMED FORCES:</span> Limited role (Can only seek report). [PYQ]
                                </li>
                            </ul>
                        </div>
                    </div>
                </RightsCard>
            </div>

            {/* CRITICAL LIMITATION: 1-YEAR RULE */}
            <div className="bg-[#b91c1c] text-white border-4 border-black rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Clock size={150} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl rotate-12 transition-transform hover:rotate-0">
                            <Watch size={48} className="text-[#b91c1c]" />
                        </div>
                        <p className="text-[12px] font-black uppercase mt-2 tracking-widest">Section 36</p>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-4xl font-black italic underline decoration-black">The 1-Year Rule [HIGH YIELD]</h4>
                        <p className="text-lg font-bold leading-relaxed italic opacity-95">
                            NHRC <span className="text-black font-black bg-white px-2">CANNOT</span> inquire into any matter after one year from the date of occurrence. [PYQ Trap]
                        </p>
                        <p className="text-xs font-medium text-red-100 flex items-center gap-2">
                            <BadgeCheck size={16} className="text-white" />
                            Strict time bar on investigation powers.
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER: SHRC */}
            <div className="p-12 border-4 border-dashed border-slate-200 rounded-[50px] text-center bg-slate-50 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 border-2 border-slate-900 rounded-full font-black text-sm uppercase">State Mirror Preview</div>
                <h4 className="text-2xl font-black italic text-slate-800 mb-4 underline decoration-[#1d4ed8]">State Human Rights Commission (SHRC)</h4>
                <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400">Chair</p>
                        <p className="text-sm font-bold italic">Retd. CJ or Judge of High Court</p>
                    </div>
                    <div className="w-[1px] h-12 bg-slate-200 hidden md:block"></div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-[#b91c1c]">Removal Trap [PYQ]</p>
                        <p className="text-sm font-bold italic text-[#b91c1c]">By PRESIDENT only (Not Governor)</p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-slate-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-[#1d4ed8] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(29,78,216,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            RIGHTS PROTECTED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Shield size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 51 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic underline decoration-[#b91c1c] tracking-widest">A Protection of Rights Scroll.</p>
            </div>
        </ScrapbookContainer>
    );
}
