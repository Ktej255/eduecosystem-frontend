"use client";

import React from "react";
import {
    Shield, Zap, Globe, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, MessageSquare,
    Eye, Target, ShieldHalf
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NIAModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f4f8] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-5xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card rounded-3xl p-6 shadow-2xl border-4 border-blue-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#1e40af] opacity-30"></div>
            {children}
        </div>
    </div>
);

const SecurityCard = ({ title, children, color = "border-blue-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(30,64,175,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 bg-blue-900 text-white rounded shadow-xl flex items-center justify-center font-black text-xl rotate-2`}>
            {number}
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-blue-900">
            {title}
        </h2>
        <div className="h-[2px] flex-1 bg-blue-900 opacity-10"></div>
    </div>
);

export default function NIAModule({ onComplete, isCompleted, chapterNumber = "67" }: NIAModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e40af] border-4 border-blue-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,64,175,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#b91c1c] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic">The Federal Anti-Terror Agency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        National Investigation <br /> Agency (NIA) <br />
                        <span className="text-[#10b981] drop-shadow-md underline decoration-wavy decoration-white">The Hawk Eye</span>
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Born from the fire of 26/11. A shield protecting sovereignty, integrity, and national security with federal force."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Eye size={200} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: ORIGIN & MANDATE */}
            <PhaseHeader number="1" title="Origin & Mandate (The Response)" color="bg-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <SecurityCard title="The Trigger (2008)" color="border-[#b91c1c]">
                    <div className="p-4 bg-red-50 border-2 border-[#b91c1c] rounded-xl transform -rotate-1">
                        <h4 className="font-black text-[#b91c1c] flex items-center gap-2 uppercase text-xs mb-2">
                            <History size={18} /> THE NIA ACT (2008)
                        </h4>
                        <p className="text-sm font-black text-foreground leading-relaxed italic">
                            Established following the <span className="text-[#b91c1c] underline">2008 Mumbai Terror Attacks</span>. [PYQ]
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Badge className="bg-slate-900">MHA</Badge>
                        <p className="text-xs font-bold leading-tight italic">Under Ministry of Home Affairs. Headed by Director General.</p>
                    </div>
                </SecurityCard>

                <SecurityCard title="Suo Motu Power [CRITICAL]" color="border-blue-700">
                    <div className="p-5 bg-blue-900 text-white rounded-2xl relative shadow-xl transform rotate-1">
                        <Zap className="absolute top-2 right-2 text-yellow-400" size={32} />
                        <h4 className="text-lg font-black italic mb-4 underline decoration-blue-500">Federal Power</h4>
                        <p className="text-xs font-bold text-blue-100 leading-relaxed mb-4">
                            Can take over investigation of terror cases anywhere in India without State consent. [PYQ]
                        </p>
                        <div className="p-3 bg-card/10 rounded-xl border border-white/20">
                            <p className="text-xs font-black text-yellow-500 uppercase">VS CBI:</p>
                            <p className="text-[10px] font-bold mt-1">Unlike CBI, NIA does NOT require State consent for terror cases.</p>
                        </div>
                    </div>
                </SecurityCard>
            </div>

            {/* PHASE 2: 2019 AMENDMENT */}
            <PhaseHeader number="2" title="2019 Amendment (The Expansion)" color="bg-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <SecurityCard title="Widening the Net" color="border-[#15803d]">
                    <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase text-green-700 font-sans tracking-widest">Added Offenses [PYQ]:</p>
                        {[
                            "Human Trafficking",
                            "Counterfeit Currency",
                            "Prohibited Arms (Sale/Mfg)",
                            "Cyber Terrorism",
                            "Explosive Substances Act"
                        ].map((p, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-100 text-[10px] font-black italic">
                                <BadgeCheck size={14} className="text-[#15803d]" /> {p}
                            </div>
                        ))}
                    </div>
                </SecurityCard>

                <SecurityCard title="Extra-Territorial Jurisdiction" color="border-blue-900">
                    <div className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden group">
                        <Globe className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity" size={150} />
                        <h4 className="text-lg font-black text-blue-400 mb-4 italic underline decoration-blue-900">Beyond Borders</h4>
                        <p className="text-xs font-bold text-slate-300 leading-relaxed italic mb-4">
                            Empowered to investigate terror attacks committed outside India affecting Indian interests. [PYQ]
                        </p>
                        <div className="flex gap-2">
                            <Badge className="bg-blue-800 text-[8px] uppercase">International Treaties</Badge>
                            <Badge className="bg-blue-800 text-[8px] uppercase">Domestic Laws</Badge>
                        </div>
                    </div>
                </SecurityCard>
            </div>

            {/* PHASE 3: SPECIAL COURTS */}
            <PhaseHeader number="3" title="Special Courts (The Trial)" color="bg-blue-900" />

            <div className="grid md:grid-cols-1 gap-8">
                <SecurityCard title="Trial Mechanics" color="border-slate-900" className="bg-muted">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-card border-2 border-blue-900 rounded-2xl shadow-sm text-center">
                            <Gavel size={24} className="mx-auto mb-2 text-blue-900" />
                            <p className="text-[10px] font-black uppercase">Sessions Judge</p>
                            <p className="text-[8px] font-bold italic text-muted-foreground">Appointed on HC recommendation.</p>
                        </div>
                        <div className="p-4 bg-card border-2 border-blue-900 rounded-2xl shadow-sm text-center">
                            <Target size={24} className="mx-auto mb-2 text-red-600" />
                            <p className="text-[10px] font-black uppercase">Day-to-Day</p>
                            <p className="text-[8px] font-bold italic text-muted-foreground">Speedy trial on daily basis.</p>
                        </div>
                        <div className="p-4 bg-card border-2 border-blue-900 rounded-2xl shadow-sm text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-600 text-white p-1 text-[8px] font-black rotate-45 -mr-4 mt-2 w-20">TRAP</div>
                            <BadgeCheck size={24} className="mx-auto mb-2 text-green-600" />
                            <p className="text-[10px] font-black uppercase">Appeal: HC</p>
                            <p className="text-[8px] font-bold italic text-muted-foreground underline underline-offset-2">Lies to High Court (Div Bench). NOT SC directly. [PYQ]</p>
                        </div>
                    </div>
                </SecurityCard>
            </div>

            {/* FOOTER: UAPA CONNECTION */}
            <div className="bg-[#b91c1c] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert size={120} />
                </div>
                <div className="relative z-10">
                    <h4 className="text-2xl font-black italic underline decoration-blue-950 mb-6 flex items-center gap-3">
                        <FileText size={28} /> The UAPA Connection
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-sm font-bold opacity-80 italic leading-relaxed">
                                UAPA (1967): The primary law enforced by NIA.
                            </p>
                            <div className="p-4 bg-card/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                                <h5 className="text-[10px] font-black uppercase text-red-100 mb-2">2019 Expansion:</h5>
                                <p className="text-xs font-black italic text-yellow-400 leading-tight tracking-wider">
                                    Can designate INDIVIDUALS as terrorists. Previously only organizations. [HY]
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap gap-4">
                            <ShieldHalf size={100} className="text-white/20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-blue-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#1e40af] hover:bg-blue-800 text-white shadow-[0_10px_40px_-10px_rgba(30,64,175,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            SECURITY ASSETS MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Shield size={32} className="group-hover:rotate-12 transition-transform shadow-blue-500" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest uppercase text-xs">Sovereignty • Integrity • Security</p>
            </div>
        </ScrapbookContainer>
    );
}
