"use client";

import React from "react";
import {
    Search, FileSearch, Gavel, FileText,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Lightbulb, AlertCircle, FileStack, ArrowRightLeft,
    Shield, Scale, Clock, MessageSquare, Handshake,
    AlertTriangle, Receipt, UserMinus, UserPlus, Users,
    MapPin, Building2, Balance, Microscope,
    Fingerprint, Camera, ShieldX, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CBIModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f1f5f9] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-slate-200">
        <div className="max-w-6xl mx-auto space-y-12 bg-card/70 rounded-[40px] p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#374151] via-[#a1824a] to-[#991b1b] opacity-60"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-5 pointer-events-none"></div>
            {children}
        </div>
    </div>
);

const DetectiveCard = ({ title, children, color = "border-[#374151]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(55,65,81,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5">
            <Fingerprint size={48} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center font-black text-xl shadow-xl rotate-1`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-foreground`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CBIModule({ onComplete, isCompleted, chapterNumber = "65" }: CBIModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#374151] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(55,65,81,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#a1824a] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-slate-50 font-bold uppercase tracking-widest text-sm italic">Premier Investigating Agency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        CBI <br />
                        <span className="text-white drop-shadow-md underline decoration-wavy decoration-[#a1824a]">The Detective's Lens</span>
                    </h1>
                    <p className="text-xl text-slate-50 max-w-2xl leading-relaxed italic opacity-90">
                        Derived from the DSPE Act, 1946. A non-statutory body that investigates corruption, economic crimes, and special crimes.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Microscope size={200} />
                </div>
            </div>

            {/* PHASE 1: GENESIS */}
            <PhaseHeader number="1" title="Origin & Power (The DSPE Act)" color="bg-[#374151]" />

            <div className="grid md:grid-cols-2 gap-8">
                <DetectiveCard title="Evolution Trace [PYQ]" color="border-[#a1824a]">
                    <div className="space-y-4">
                        <div className="p-4 bg-muted border-2 border-dashed border-border rounded-2xl relative">
                            <History className="absolute top-2 right-2 text-slate-200" size={32} />
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-black italic">
                                    <BadgeCheck size={18} className="text-[#374151]" /> Established: 1963 [PYQ]
                                </li>
                                <li className="p-2 bg-[#374151] text-white rounded-lg text-[10px] uppercase font-black text-center tracking-tighter">
                                    By Resolution of MHA (Home Affairs)
                                </li>
                                <li className="text-[11px] font-black italic text-muted-foreground">
                                    Now under: <span className="underline decoration-[#a1824a]">Ministry of Personnel.</span> [PYQ TRAP]
                                </li>
                            </ul>
                        </div>
                        <div className="p-3 bg-red-900 text-white rounded-xl shadow-xl transform rotate-1">
                            <h4 className="text-[9px] font-black uppercase text-red-300 mb-1">NATURE: [CRITICAL TRAP]</h4>
                            <p className="text-lg font-black italic leading-none">NON-STATUTORY. [PYQ]</p>
                            <p className="text-[9px] mt-2 font-bold opacity-80 leading-tight">It derives its powers from the DSPE Act, 1946, but is NOT a statutory body itself.</p>
                        </div>
                    </div>
                </DetectiveCard>

                <DetectiveCard title="Motto & Vision" color="border-[#374151]">
                    <div className="flex flex-col items-center justify-center h-full p-4 space-y-6">
                        <div className="p-6 bg-muted border-4 border-slate-900 rounded-3xl text-center shadow-2xl relative w-full group">
                            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#a1824a] mb-2 font-sans">Motto</h4>
                            <p className="text-2xl font-black italic tracking-tighter italic">Industry, Impartiality, Integrity</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="p-3 bg-slate-900 text-white rounded-2xl text-center">
                                <p className="text-[10px] font-black uppercase text-muted-foreground">Jurisdiction</p>
                                <p className="text-[11px] font-bold italic">Central Govt Employees & UTs.</p>
                            </div>
                            <div className="p-3 bg-card border-2 border-slate-100 rounded-2xl text-center shadow-sm">
                                <p className="text-[10px] font-black uppercase text-muted-foreground">Interpol</p>
                                <p className="text-[11px] font-bold italic">National Central Bureau of India.</p>
                            </div>
                        </div>
                    </div>
                </DetectiveCard>
            </div>

            {/* PHASE 2: COMPOSITION */}
            <PhaseHeader number="2" title="Composition & Appointment (The Loop)" color="bg-[#a1824a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <DetectiveCard title="Director, CBI [PYQ]" color="border-slate-800">
                    <div className="space-y-6">
                        <div className="p-4 bg-[#a1824a] text-white rounded-3xl shadow-xl relative group">
                            <UserCheck className="absolute top-2 right-2 opacity-20" size={48} />
                            <h4 className="text-[10px] font-black uppercase underline mb-2">Qualifications:</h4>
                            <p className="text-sm font-black italic leading-snug">
                                IPS Officer of DGP rank. Tenure FIXED for <span className="text-white underline font-black">2 Years</span>. [CVC Act Mandate]
                            </p>
                        </div>
                        <div className="p-4 bg-card border-2 border-dashed border-border rounded-2xl">
                            <h4 className="text-[10px] font-black uppercase text-muted-foreground mb-2">Structure:</h4>
                            <ul className="text-[11px] font-black italic space-y-3">
                                <li className="flex items-center gap-2"><BadgeCheck size={14} className="text-blue-600" /> Director (Inspector General of Police, DSPE)</li>
                                <li className="flex items-center gap-2"><BadgeCheck size={14} className="text-blue-600" /> Special/Addl Directors</li>
                                <li className="flex items-center gap-2"><BadgeCheck size={14} className="text-blue-600" /> Joint Directors / DIGs / SPs</li>
                            </ul>
                        </div>
                    </div>
                </DetectiveCard>

                <DetectiveCard title="The Appointment Committee" color="border-[#374151]">
                    <div className="p-4 bg-slate-900 text-white rounded-[30px] shadow-2xl relative overflow-hidden h-full group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-12"><Users size={120} /></div>
                        <h4 className="text-xl font-black italic mb-8 underline decoration-[#a1824a]">3-Member Committee [PYQ]</h4>
                        <div className="space-y-6">
                            {[
                                { t: "Prime Minister", d: "Chairperson", i: "P" },
                                { t: "Leader of Opposition", d: "In Lok Sabha", i: "L" },
                                { t: "CJI or SC Judge", d: "Nominated by CJI", i: "C" }
                            ].map((member, i) => (
                                <div key={i} className="flex gap-4 items-center group/item hover:translate-x-2 transition-transform">
                                    <div className="w-10 h-10 bg-[#a1824a] text-white rounded-full flex items-center justify-center font-black shadow-lg border-2 border-white/20 select-none group-hover/item:rotate-12">{member.i}</div>
                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-tight">{member.t}</p>
                                        <p className="text-[9px] font-bold text-muted-foreground italic">{member.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-card/5 p-3 rounded-xl border border-white/10">
                            <p className="text-[10px] font-bold italic text-muted-foreground leading-tight">CVC Act (2003) gave CBI Director a statutory tenure security.</p>
                        </div>
                    </div>
                </DetectiveCard>
            </div>

            {/* PHASE 3: GENERAL CONSENT */}
            <PhaseHeader number="3" title="State Consent (The Red Line)" color="bg-[#991b1b]" />

            <div className="bg-[#991b1b] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12Scale transition-transform"><ShieldX size={150} /></div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="text-center shrink-0">
                        <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                            <ShieldX size={48} className="text-[#991b1b]" />
                        </div>
                        <p className="text-[10px] font-black mt-2 uppercase tracking-widest text-red-200">FEDERAL TRAP</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-3xl font-black italic underline decoration-white">General Consent [CRITICAL]</h4>
                        <p className="text-lg font-bold italic leading-relaxed opacity-90">
                            CBI <span className="text-black font-black bg-card px-1">CANNOT</span> investigate in a State without the State Govt's consent. Section 6 of DSPE Act. [PYQ]
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-3 bg-card/10 border border-white/20 rounded-xl">
                                <h5 className="text-[10px] font-black uppercase text-red-300 mb-1">General Consent:</h5>
                                <p className="text-[11px] font-bold italic">Facilitates seamless investigation of Central Employees in States.</p>
                            </div>
                            <div className="p-3 bg-red-950 border border-white/20 rounded-xl relative group">
                                <AlertTriangle className="absolute top-2 right-2 text-white/20 group-hover:text-amber-400" size={16} />
                                <h5 className="text-[10px] font-black uppercase text-red-300 mb-1">Specific Consent:</h5>
                                <p className="text-[11px] font-bold italic">Required for each case if General Consent is withdrawn. [Current Issue]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPARISON: CAG vs CBI */}
            <div className="bg-muted border-4 border-slate-900 rounded-[30px] p-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <h4 className="text-xl font-black italic text-foreground mb-6 flex items-center gap-2 uppercase tracking-tighter">
                    <ArrowRightLeft size={24} className="text-[#a1824a]" /> Functional Divisions
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { t: "Anti-Corruption", d: "Central Govt/PSUs", i: Briefcase },
                        { t: "Economic Crimes", d: "Scams/Bank Frauds", i: Scale },
                        { t: "Special Crimes", d: "Terrorism (Limited)", i: AlertTriangle },
                        { t: "Forensic", d: "Lab Investigations", i: Microscope }
                    ].map((div, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-3 bg-card border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-muted rounded-lg mb-2 text-muted-foreground"><div.i size={20} /></div>
                            <p className="text-[10px] font-black uppercase tracking-tight">{div.t}</p>
                            <p className="text-[8px] font-bold text-muted-foreground italic leading-[1.1]">{div.d}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-slate-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#374151] hover:bg-slate-900 text-white shadow-[0_10px_40px_-10px_rgba(55,65,81,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            INVESTIGATION MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Microscope size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-[11px] uppercase underline decoration-[#991b1b]">Industry | Impartiality | Integrity</p>
            </div>
        </ScrapbookContainer>
    );
}
