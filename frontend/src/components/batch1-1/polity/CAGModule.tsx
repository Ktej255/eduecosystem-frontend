"use client";

import React from "react";
import {
    ShieldCheck, Coins, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Calculator, ReceiptText, Scale, Lock,
    AlertTriangle, MessageSquare, Handshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CAGModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-red-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/70 rounded-3xl p-6 shadow-2xl border-2 border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b91c1c] via-[#b45309] to-[#1e40af] opacity-40"></div>
            {children}
        </div>
    </div>
);

const AuditCard = ({ title, children, color = "border-[#b91c1c]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(185,28,28,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5">
            <Calculator size={48} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-medium">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg ${color}`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CAGModule({ onComplete, isCompleted, chapterNumber = "52" }: CAGModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#b91c1c] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(185,28,28,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#b45309] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-red-50 font-bold uppercase tracking-widest text-sm italic">Guardian of the Public Purse</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        CAG of India <br />
                        <span className="text-[#b45309] drop-shadow-md underline decoration-wavy decoration-[#1e40af]">The Financial Watchdog</span>
                    </h1>
                    <p className="text-xl text-red-50 max-w-2xl leading-relaxed italic opacity-90">
                        "The most important officer under the Constitution" — Dr. Ambedkar. An eye over the safe, ensuring fiscal accountability.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Eye size={180} />
                </div>
            </div>

            {/* PHASE 1: INDEPENDENCE */}
            <PhaseHeader number="1" title="Appointment & Independence (The Shield)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <AuditCard title="Article 148 (The Officer)" color="border-[#b45309]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-orange-50 border-2 border-[#b45309] rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#b45309]"></div>
                            <BadgeCheck className="text-[#b45309]" size={32} />
                            <div>
                                <p className="text-xs font-black uppercase text-orange-400">Appointment</p>
                                <p className="text-sm font-black italic">By President by warrant under his hand and seal.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-card border-2 border-slate-100 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-black text-muted-foreground">TERM [PYQ]</p>
                                <p className="text-lg font-black text-[#b91c1c]">6 Years</p>
                            </div>
                            <div className="p-3 bg-card border-2 border-slate-100 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-black text-muted-foreground">OR AGE</p>
                                <p className="text-lg font-black text-[#b91c1c]">65 Years</p>
                            </div>
                        </div>
                        <p className="text-[10px] font-bold text-muted-foreground text-center italic">Resignation: To President. | Oath: Before President.</p>
                    </div>
                </AuditCard>

                <AuditCard title="Security Features (4 Bolts)" color="border-[#1e40af]">
                    <div className="p-4 bg-indigo-50 border-4 border-double border-[#1e40af] rounded-2xl relative">
                        <Lock size={48} className="absolute top-2 right-2 text-[#1e40af] opacity-10" />
                        <ul className="space-y-3">
                            {[
                                { t: "Removal:", d: "Only on grounds of Proved Misbehavior or Incapacity. (Same as SC Judge). [PYQ]" },
                                { t: "No Further Office:", d: "Ineligible for further office under GOI or State Govt after retirement." },
                                { t: "Salary:", d: "Charged on Consolidated Fund of India. (Non-votable)." },
                                { t: "Conditions:", d: "Cannot be varied to his disadvantage after appointment." }
                            ].map((bolt, i) => (
                                <li key={i} className="flex gap-3 items-start group">
                                    <div className="w-4 h-4 rounded bg-card border-2 border-[#1e40af] flex items-center justify-center shrink-0 mt-1 shadow-sm font-black text-[8px] group-hover:bg-[#1e40af] group-hover:text-white transition-colors">{i + 1}</div>
                                    <p className="text-[11px] font-bold leading-relaxed italic"><span className="text-[#1e40af] font-black">{bolt.t}</span> {bolt.d}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AuditCard>
            </div>

            {/* PHASE 2: DUTIES */}
            <PhaseHeader number="2" title="Duties & Powers (The Watchdog)" color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Article 149 (The Scope)" color="border-[#b45309]">
                    <div className="p-4 bg-[#fff7ed] border-2 border-dashed border-[#b45309] rounded-2xl relative overflow-hidden">
                        <div className="absolute -bottom-4 -right-4 opacity-10 -rotate-12">
                            <Landmark size={80} />
                        </div>
                        <h4 className="text-xs font-black text-[#b45309] uppercase mb-4 tracking-widest flex items-center gap-2">
                            <Coins size={16} /> Audits Expenditure from:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {[
                                "Consolidated Fund of India & States. [PYQ]",
                                "Consolidated Fund of UTs (with Assembly).",
                                "Contingency Fund & Public Account (India & States).",
                                "All Trading, Manufacturing, Profit & Loss accounts."
                            ].map((dept, i) => (
                                <div key={i} className="flex gap-3 items-center bg-card p-2 rounded border border-orange-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-[#b45309] rounded-full"></div>
                                    <p className="text-[10px] font-bold italic">{dept}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[9px] mt-4 font-black text-[#b45309] underline">Compiles accounts of State Govts (but not Central since 1976).</p>
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="The 3 Reports (Art 151)" color="border-[#b91c1c]">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            {[
                                { t: "Appropriation Accounts", d: "Did money go to intended purpose?" },
                                { t: "Finance Accounts", d: "Overall Income vs Expenditure." },
                                { t: "Public Undertakings", d: "PSU performance check." }
                            ].map((rep, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 bg-card border-2 border-slate-100 rounded-xl hover:border-[#b91c1c] transition-colors group">
                                    <FileText className="text-slate-300 group-hover:text-[#b91c1c]" size={20} />
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-tighter text-[#b91c1c]">{rep.t}</h5>
                                        <p className="text-[9px] font-bold text-muted-foreground italic">{rep.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 bg-red-50 border-2 border-[#b91c1c] border-dotted rounded-xl text-center">
                            <p className="text-[10px] font-black uppercase text-red-800">Route: To President -&gt; Parliament -&gt; PAC [PYQ]</p>
                        </div>
                    </div>
                </HandwrittenCard>
            </div>

            {/* PHASE 3: LIMITATIONS */}
            <PhaseHeader number="3" title="Limitations & Corps (The Gray Area)" color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Audit of Corporations" color="border-slate-400">
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 p-3 bg-red-50 border-l-4 border-[#b91c1c] rounded shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-[#b91c1c] flex items-center justify-center text-white font-black text-[8px]">DIRECT</div>
                            <p className="text-[10px] font-bold italic text-red-900 leading-tight">ONGC, Air India, DVC. (CAG Audits Directly)</p>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-yellow-50 border-l-4 border-yellow-600 rounded shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-black text-[8px]">SUPP</div>
                            <p className="text-[10px] font-bold italic text-yellow-900 leading-tight">SBI, LIC, FCI. (Private + CAG Supp Check)</p>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-green-50 border-l-4 border-green-600 rounded shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-[8px]">NONE</div>
                            <p className="text-[10px] font-bold italic text-green-900 leading-tight">RBI, SBI. (Total Private Audit; No CAG role) [PYQ Trap]</p>
                        </div>
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="Limitations & Critics" color="border-[#b91c1c]">
                    <div className="space-y-4">
                        <div className="p-4 bg-card border border-border rounded-xl relative">
                            <AlertTriangle className="text-red-500 mb-2" size={20} />
                            <h5 className="text-[10px] font-black uppercase text-muted-foreground">Post-Mortem Nature:</h5>
                            <p className="text-[11px] font-bold italic text-muted-foreground leading-relaxed">
                                Audit is <span className="underline decoration-red-500 decoration-2">Post-Facto</span>. Money is already spent.
                            </p>
                        </div>
                        <div className="p-4 bg-muted border border-border rounded-xl italic">
                            <p className="text-[10px] font-bold leading-relaxed">
                                <span className="text-[#1e40af] font-black uppercase mr-2">Appleby's Critique:</span>
                                Called CAG a "colonial inheritance" and an "impediment" to administration.
                            </p>
                        </div>
                    </div>
                </HandwrittenCard>
            </div>

            {/* FOOTER: THE PAC FRIEND */}
            <div className="bg-[#1e40af] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Handshake size={120} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-card border-4 border-[#b91c1c] rounded-full flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                            <Eye size={40} className="text-[#b91c1c]" />
                        </div>
                        <p className="text-[10px] font-black uppercase mt-2">CAG</p>
                    </div>

                    <div className="flex-1 space-y-4">
                        <h4 className="text-2xl font-black italic underline decoration-[#b45309]">The "PAC Friend"</h4>
                        <p className="text-sm font-bold leading-relaxed italic opacity-90">
                            CAG acts as a <span className="text-[#b45309] font-black uppercase">"Friend, Philosopher, and Guide"</span> of the Public Accounts Committee (PAC). [PYQ]
                        </p>
                        <p className="text-xs font-medium text-indigo-100 flex items-center gap-2">
                            <BadgeCheck size={14} className="text-[#b45309]" />
                            Relationship: PAC examines CAG reports and calls officials to explain irregularities.
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-border pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#b91c1c] hover:bg-red-900 text-white shadow-[0_10px_40px_-10px_rgba(185,28,28,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            PURSE GUARDED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Eye size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic">The Most Important Officer. — Ambedkar</p>
            </div>
        </ScrapbookContainer>
    );
}

const HandwrittenCard = ({ title, children, color = "border-slate-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-medium">
            {children}
        </div>
    </div>
);
