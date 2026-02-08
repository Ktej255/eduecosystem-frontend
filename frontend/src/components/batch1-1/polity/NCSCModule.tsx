"use client";

import React from "react";
import {
    Shield, Users, ScrollText, Gavel,
    Info, CheckCircle2, BookOpen,
    Scale, AlertTriangle, FileText, Landmark,
    ArrowBigUpDash, History, Search, Share2,
    Briefcase, Network
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCSCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-indigo-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/50 rounded-3xl p-6 shadow-inner border-2 border-slate-200">
            {children}
        </div>
    </div>
);

const HandwrittenCard = ({ title, children, color = "border-indigo-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 -mr-8 -mt-8 rounded-full border border-slate-100 italic flex items-end justify-start pl-2 pb-2 text-[10px] text-slate-300">SC</div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
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

export default function NCSCModule({ onComplete, isCompleted, chapterNumber = "48" }: NCSCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e40af] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,64,175,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ca8a04] text-white px-4 py-1 text-lg border-2 border-white shadow-sm">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-indigo-100 font-bold uppercase tracking-widest text-sm">The Constitutional Watchdog</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        National Commission <br /> for SCs <br />
                        <span className="text-[#ca8a04] drop-shadow-lg underline decoration-wavy">The Blue Shield</span>
                    </h1>
                    <p className="text-xl text-indigo-50 max-w-2xl leading-relaxed italic opacity-90">
                        "The protector of rights under Article 338. A body armed with the powers of a Civil Court to ensure justice."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10">
                    <Shield size={180} />
                </div>
            </div>

            {/* PHASE 1: EVOLUTION */}
            <PhaseHeader number="1" title="Evolution (The Split)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="The Timeline [High Yield]" color="border-[#c2410c]">
                    <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-100 before:border-l-2 before:border-dashed before:border-orange-200">
                        <div className="relative">
                            <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1e40af]"></div>
                            <h4 className="font-black text-[#1e40af]">1950 - Original Constitution</h4>
                            <p className="text-xs font-bold text-slate-500 italic">Article 338 provided for a Special Officer for SCs & STs.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1e40af]"></div>
                            <h4 className="font-black text-[#1e40af]">1990 - 65th Amendment [PYQ]</h4>
                            <p className="text-xs font-bold text-slate-500 italic">Replaced Special Officer with a Multi-Member Commission for SCs & STs.</p>
                        </div>
                        <div className="relative p-3 bg-orange-50 border-2 border-dashed border-[#c2410c] rounded-xl transform -rotate-1">
                            <div className="absolute -left-[31px] top-4 w-6 h-6 rounded-full bg-white border-4 border-[#c2410c] flex items-center justify-center">
                                <Share2 size={10} className="text-[#c2410c]" />
                            </div>
                            <h4 className="font-black text-[#c2410c]">2003 - 89th Amendment [CRITICAL]</h4>
                            <p className="text-xs font-black text-slate-600">Bifurcation into two distinct bodies:</p>
                            <ul className="text-[10px] font-black mt-1 text-orange-800 list-disc pl-4">
                                <li>NCSC (Article 338)</li>
                                <li>NCST (Article 338-A)</li>
                            </ul>
                            <p className="text-[10px] mt-2 font-black uppercase text-[#c2410c]">Effective: 2004</p>
                        </div>
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="Composition (The Team)" color="border-[#1e40af]">
                    <div className="bg-slate-50 p-6 rounded-2xl border-4 border-double border-slate-200">
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="text-center p-2 bg-white border-2 border-[#1e40af] rounded-lg shadow-sm">
                                <CheckCircle2 className="mx-auto text-[#1e40af]" size={20} />
                                <p className="text-[10px] font-black mt-1">Chairperson</p>
                                <p className="text-[8px] italic">(Cabinet Min Rank)</p>
                            </div>
                            <div className="text-center p-2 bg-white border-2 border-indigo-200 rounded-lg shadow-sm">
                                <Users className="mx-auto text-indigo-400" size={20} />
                                <p className="text-[10px] font-black mt-1">Vice-Chair</p>
                                <p className="text-[8px] italic">(MoS Rank)</p>
                            </div>
                            <div className="text-center p-2 bg-white border-2 border-indigo-100 rounded-lg shadow-sm">
                                <Users className="mx-auto text-indigo-200" size={20} />
                                <p className="text-[10px] font-black mt-1">3 Members</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-[#ca8a04]">
                                <Landmark className="text-[#ca8a04]" size={24} />
                                <p className="text-xs font-black italic">Appointed by the <span className="underline underline-offset-2">PRESIDENT</span> under his hand and seal.</p>
                            </div>
                            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                                <p className="text-[10px] font-bold text-indigo-900 leading-relaxed text-center">
                                    TENURE: <span className="text-lg font-black">3 YEARS</span><br />
                                    (Service conditions determined by President)
                                </p>
                            </div>
                        </div>
                    </div>
                </HandwrittenCard>
            </div>

            {/* PHASE 2: FUNCTIONS */}
            <PhaseHeader number="2" title="Functions (The Watchdog)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Duties (Art 338)" color="border-[#1e40af]">
                    <div className="space-y-4">
                        {[
                            { icon: Search, text: "INVESTIGATE: Monitors all matters relating to constitutional safeguards for SCs." },
                            { icon: AlertTriangle, text: "INQUIRE: Into specific complaints of deprivation of rights." },
                            { icon: Briefcase, text: "ADVISE: Participates in planning process of socio-economic development." },
                            { icon: FileText, text: "REPORT: Presents annual report to President." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100 items-start">
                                <div className="p-2 bg-white rounded shadow-sm">
                                    <item.icon className="text-[#1e40af]" size={20} />
                                </div>
                                <p className="text-xs font-bold leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="The Anglo-Indian Link [Trap Alert]" color="border-[#ca8a04]">
                    <div className="p-6 bg-[#fffbeb] border-4 border-double border-[#ca8a04] rounded-2xl relative">
                        <Network size={48} className="absolute top-2 right-2 text-[#ca8a04] opacity-20" />
                        <h4 className="text-[#ca8a04] font-black text-lg mb-4 flex items-center gap-2 italic">
                            Article 338(10) [PYQ]
                        </h4>
                        <p className="text-sm font-bold text-amber-900 leading-relaxed italic">
                            "The Commission also discharges similar functions for the <span className="underline decoration-[#ca8a04] decoration-2">ANGLO-INDIAN Community</span>."
                        </p>
                        <div className="mt-6 p-4 bg-white/80 rounded-xl border-2 border-dashed border-[#4b5563]">
                            <p className="text-[10px] font-black text-[#4b5563] uppercase tracking-tighter">Historical Note:</p>
                            <p className="text-[11px] font-bold text-slate-500 mt-1 leading-relaxed">
                                It used to cover OBCs too until the <span className="font-black text-[#c2410c]">102nd Amendment (2018)</span> created a separate NCBC.
                            </p>
                        </div>
                    </div>
                </HandwrittenCard>
            </div>

            {/* PHASE 3: POWERS */}
            <PhaseHeader number="3" title="Powers (The Teeth)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Civil Court Powers" color="border-slate-950" className="bg-slate-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex gap-4 items-start mb-6">
                        <div className="w-16 h-16 bg-white border-2 border-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Gavel size={32} className="text-slate-900" />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Judicial Status</p>
                            <h4 className="text-xl font-black text-slate-950">Civil Court [PYQ]</h4>
                        </div>
                    </div>
                    <ul className="space-y-3">
                        {[
                            "Summoning and enforcing attendance of any person.",
                            "Requiring discovery and production of documents.",
                            "Receiving evidence on affidavits.",
                            "Requisitioning public records from any court/office."
                        ].map((power, i) => (
                            <li key={i} className="flex gap-3 text-xs font-bold items-center">
                                <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                                {power}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                        <p className="text-[10px] font-black text-red-700 italic">
                            LIMITATION: It cannot punish (Criminal Court power is missing). It can only recommend.
                        </p>
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="Mandatory Consultation" color="border-[#1e40af]">
                    <div className="text-center p-8 bg-white border-4 border-[#1e40af] border-dashed rounded-3xl group-hover:bg-indigo-50 transition-colors">
                        <div className="flex justify-center -space-x-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-indigo-800 border-2 border-white flex items-center justify-center text-white font-black text-xs">UNION</div>
                            <div className="w-16 h-16 rounded-full bg-orange-700 border-2 border-white flex items-center justify-center text-white font-black text-xs">STATE</div>
                        </div>
                        <h4 className="font-black text-lg mb-2 text-indigo-950">Round Table Sketch</h4>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed italic">
                            "Union and State Govts <span className="text-[#1e40af] uppercase underline">Must Consult</span> the Commission on all major policy matters affecting SCs."
                        </p>
                    </div>
                </HandwrittenCard>
            </div>

            {/* FOOTER: THE REPORT ROUTE */}
            <div className="bg-[#4b5563] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <h4 className="text-xl font-black mb-8 flex items-center gap-3 underline decoration-[#ca8a04]">
                    <ArrowBigUpDash className="rotate-90" />
                    The Report Route
                </h4>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-24 bg-white border-2 border-slate-300 rounded shadow-inner rotate-3 flex items-center justify-center p-2">
                            <FileText size={40} className="text-[#4b5563]" />
                        </div>
                        <span className="text-[10px] font-black">Commission</span>
                    </div>

                    <div className="w-12 h-[2px] bg-slate-400"></div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-[#ca8a04] border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                            <Landmark size={32} />
                        </div>
                        <span className="text-[10px] font-black uppercase">President</span>
                    </div>

                    <div className="w-12 h-[2px] bg-slate-400"></div>

                    <div className="flex-1 grid grid-cols-2 gap-4 w-full md:w-auto">
                        <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-center">
                            <Users size={20} className="mx-auto mb-1 text-indigo-300" />
                            <p className="text-[9px] font-black leading-none italic uppercase">Parliament</p>
                            <p className="text-[8px] text-indigo-200 mt-1">(Action Taken Report)</p>
                        </div>
                        <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-center">
                            <Scale size={20} className="mx-auto mb-1 text-orange-300" />
                            <p className="text-[9px] font-black leading-none italic uppercase">Governor</p>
                            <p className="text-[8px] text-orange-200 mt-1">(State Legislature)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#1e40af] hover:bg-indigo-900 text-white shadow-[0_10px_40px_-10px_rgba(30,64,175,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            SAFEGUARDS MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Shield size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold">The Shield of Article 338.</p>
            </div>
        </ScrapbookContainer>
    );
}
