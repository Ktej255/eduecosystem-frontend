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
    MapPin, Building2, Balance
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SICModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-900">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/90 rounded-[40px] p-6 shadow-2xl border-4 border-green-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#2563eb] via-[#15803d] to-[#c2410c] opacity-50"></div>
            {children}
        </div>
    </div>
);

const SpotlightCard = ({ title, children, color = "border-[#15803d]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(21,128,61,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5 scale-x-[-1]">
            <Eye size={48} className={color.replace('border-', 'text-')} />
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
        <div className={`w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl -rotate-6`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-green-800`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function SICModule({ onComplete, isCompleted, chapterNumber = "63" }: SICModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#2563eb] border-4 border-blue-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#15803d] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-blue-50 font-bold uppercase tracking-widest text-sm italic">The State Transparency Hub</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        SIC <br />
                        <span className="text-white drop-shadow-md underline decoration-wavy decoration-[#c2410c]">The Regional Spotlight</span>
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl leading-relaxed italic opacity-90">
                        The state-level vanguard of information. Empowered by the RTI Act, 2005 to illuminate regional administration.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12Scale transition-transform group-hover:rotate-0">
                    <Search size={200} />
                </div>
            </div>

            {/* PHASE 1: STATUS & JURISDICTION */}
            <PhaseHeader number="1" title="Status & Composition (Regional Setup)" color="bg-[#15803d]" />

            <div className="grid md:grid-cols-2 gap-8">
                <SpotlightCard title="The RTI Act (2005)" color="border-[#2563eb]">
                    <div className="p-4 bg-blue-50 border-2 border-dashed border-blue-400 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100/50 rounded-full group-hover:scale-150 transition-transform"></div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-black italic">
                                <BadgeCheck size={18} className="text-[#2563eb]" /> Established: STATE GOVT
                            </li>
                            <li className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                                <Info size={14} /> Created under RTI Act, 2005.
                            </li>
                            <li className="p-2 bg-[#15803d] text-white rounded-lg text-[10px] uppercase font-black tracking-widest text-center shadow-lg">
                                Jurisdiction: State Public Authorities [PYQ]
                            </li>
                        </ul>
                    </div>
                </SpotlightCard>

                <SpotlightCard title="State Composition (1 + 10)" color="border-[#15803d]">
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                            <h4 className="text-[10px] font-black uppercase text-green-600 mb-1">Regional Team:</h4>
                            <p className="text-sm font-black italic">State Chief + Max 10 State Info Commissioners.</p>
                        </div>
                        <div className="p-3 bg-card border-2 border-slate-900 rounded-xl relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="text-[9px] font-black uppercase text-muted-foreground mb-1">Eminence Qualification:</h4>
                            <p className="text-[10px] font-bold italic leading-tight text-muted-foreground">
                                Law, Science, Tech, Media, Admin, Social Service.
                            </p>
                        </div>
                    </div>
                </SpotlightCard>
            </div>

            {/* APPOINTMENT COMMITTEE */}
            <div className="bg-card border-4 border-green-800 rounded-[50px] p-8 shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#c2410c] opacity-20"></div>
                <h4 className="text-2xl font-black mb-8 italic text-green-800 flex items-center justify-center gap-3 underline decoration-orange-400">
                    <Handshake size={32} className="text-green-700" /> The State Appointment Loop
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Chief Minister", d: "Chairperson", i: "bg-green-700" },
                        { t: "LoP (Assembly)", d: "Leader of Opposition", i: "bg-slate-700" },
                        { t: "Cabinet Minister", d: "Nominated by CM [PYQ]", i: "bg-slate-700" }
                    ].map((member, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className={`w-14 h-14 ${member.i} text-white rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform font-black text-xl`}>{member.t.charAt(0)}</div>
                            <p className="text-[11px] font-black uppercase mt-2 tracking-tighter">{member.t}</p>
                            <p className="text-[9px] font-bold text-muted-foreground italic">{member.d}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* PHASE 2: 2019 AMENDMENT */}
            <PhaseHeader number="2" title="The 2019 Impact (State Sync)" color="bg-[#dc2626]" />

            <div className="bg-[#dc2626] text-white border-4 border-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><History size={150} /></div>
                <div className="relative z-10 space-y-8">
                    <h4 className="text-3xl font-black italic underline decoration-white flex items-center gap-3">
                        <AlertCircle size={32} /> Executive Control Sync
                    </h4>
                    <p className="text-sm font-bold opacity-90 italic max-w-2xl leading-relaxed">
                        The 2019 Amendment ensures that the <span className="text-black font-black bg-card px-1">CENTRAL GOVERNMENT</span> now determines the tenure and salary of State Information Commissioners as well. [CRITICAL]
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-card/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                            <p className="text-[10px] font-black uppercase text-red-200">TENURE:</p>
                            <p className="text-lg font-black mt-1">"As prescribed by Central Govt."</p>
                        </div>
                        <div className="p-4 bg-card/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                            <p className="text-[10px] font-black uppercase text-red-200">SALARY:</p>
                            <p className="text-lg font-black mt-1">"Determined by Central Govt."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: REMOVAL DISTINCTION */}
            <PhaseHeader number="3" title="Removal (The Governor's Power)" color="bg-[#c2410c]" />

            <div className="grid md:grid-cols-1 gap-8">
                <SpotlightCard title="Removal vs SHRC [CRITICAL TRAP]" color="border-[#c2410c]" className="bg-orange-50">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="p-6 bg-card border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-5"><ShieldAlert size={64} /></div>
                            <h4 className="text-lg font-black text-foreground mb-2 italic">SIC Removal:</h4>
                            <p className="text-3xl font-black text-[#c2410c] flex items-center gap-4">
                                GOVERNOR <BadgeCheck className="text-green-600" size={32} />
                            </p>
                            <p className="text-[10px] font-black text-muted-foreground mt-2 italic shadow-sm bg-muted p-1 rounded inline-block">After SC Inquiry. [PYQ]</p>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="p-4 bg-blue-900 text-white rounded-2xl border-4 border-dashed border-blue-400 transform rotate-1">
                                <h5 className="text-[10px] font-black uppercase text-blue-300 italic mb-1">Contrast: SHRC / SPSC</h5>
                                <p className="text-sm font-black">Removed by: PRESIDENT ONLY. [PYQ Trap]</p>
                            </div>
                            <p className="text-[11px] font-bold text-muted-foreground italic leading-relaxed">
                                Always remember: For SIC, the appointing authority (Governor) is also the removing authority.
                            </p>
                        </div>
                    </div>
                </SpotlightCard>
            </div>

            {/* POWERS & PENALTIES */}
            <div className="grid md:grid-cols-2 gap-8">
                <SpotlightCard title="Regional Bite" color="border-[#c2410c]">
                    <div className="space-y-4">
                        <div className="p-4 bg-card border-2 border-[#15803d] rounded-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex justify-between items-center">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase text-muted-foreground">Per Day Fine:</h4>
                                    <p className="text-3xl font-black text-[#15803d]">₹250</p>
                                </div>
                                <Receipt className="text-green-200 group-hover:text-green-600 transition-colors" size={48} />
                            </div>
                        </div>
                        <div className="p-3 bg-slate-900 text-white rounded-xl text-center">
                            <p className="text-[10px] uppercase font-black tracking-widest text-orange-400">Max: ₹25,000 [PYQ]</p>
                        </div>
                        <p className="text-[10px] font-bold italic text-muted-foreground">Can order compensation for loss to applicant.</p>
                    </div>
                </SpotlightCard>

                <SpotlightCard title="Powers Recap" color="border-[#15803d]">
                    <ul className="space-y-3">
                        {[
                            "Suo Motu investigation power.",
                            "Civil Court status (Summons, Affidavits).",
                            "Examine any public record directly."
                        ].map((p, i) => (
                            <li key={i} className="flex gap-3 items-center p-3 bg-muted rounded-xl border border-slate-100 italic transition-transform hover:translate-x-1">
                                <BadgeCheck className="text-green-600" size={16} />
                                <p className="text-[11px] font-black">{p}</p>
                            </li>
                        ))}
                    </ul>
                </SpotlightCard>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-green-800 pt-12 pb-12 font-['Kalam']">
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
                            STATE ACCESS MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Lightbulb size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-[11px] uppercase">RTI Act, 2005: The Regional Searchlight.</p>
            </div>
        </ScrapbookContainer>
    );
}
