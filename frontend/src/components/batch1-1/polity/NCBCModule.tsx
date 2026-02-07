"use client";

import React from "react";
import {
    ShieldCheck, Users, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    Scale, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, SearchCheck, LayoutGrid,
    Target, Weight, Handshake, Timer, Percent
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCBCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const BCContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f5fbf6] min-h-screen p-4 md:p-8 font-sans selection:bg-emerald-100">
        <div className="max-w-6xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-xl bg-white shadow-sm border-2 ${color}`}>
            <Icon className={color.replace('border-', 'text-')} size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('border-', 'text-')} font-['Kalam']`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color.replace('border-', 'bg-')} opacity-20`}></div>
    </div>
);

const BCCard = ({ title, children, color = "border-emerald-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#000_10px,#000_11px)] opacity-10"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function NCBCModule({ onComplete, isCompleted }: NCBCModuleProps) {
    return (
        <BCContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#059669] border-4 border-emerald-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(6,78,59,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-white text-emerald-800 font-['Kalam'] px-4 py-1 text-lg">Chapter 45</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-emerald-50 font-bold uppercase tracking-widest text-sm">Empowering Backward Classes</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        NCBC <br />
                        <span className="text-emerald-900 drop-shadow-md">The Upliftment Scale</span>
                    </h1>
                    <p className="text-xl text-emerald-50 max-w-2xl leading-relaxed italic">
                        "Elevated to a Constitutional Body from a Statutory one by the 102nd Amendment Act. Article 338-B now provides the framework for social and educational justice."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 animate-bounce">
                    <Scale size={120} className="text-white/10" />
                </div>
            </div>

            {/* PHASE 1: STATUS EVOLUTION */}
            <SectionHeader title="Phase 1: Status Elevation" icon={History} color="border-emerald-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <BCCard title="Statutory to Constitutional [PYQ]" color="border-emerald-700">
                    <div className="space-y-4">
                        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-xl">
                            <h4 className="font-black text-emerald-950 flex items-center gap-2 italic">
                                102nd Amendment, 2018
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 uppercase font-black tracking-tighter">
                                Conferred Constitutional Status.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border-2 border-slate-100">
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-slate-400">OLD</span>
                                <Badge variant="outline" className="text-slate-400">1993 Act</Badge>
                            </div>
                            <ArrowBigUpDash className="rotate-90 text-emerald-500" size={24} />
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-emerald-600">NEW</span>
                                <Badge className="bg-emerald-700 text-white animate-pulse">Art 338-B</Badge>
                            </div>
                        </div>
                        <p className="text-[10px] text-red-700 font-bold">Note: This followed the Supreme Court's direction in the <span className="underline italic">Indira Sawhney Case</span> (1992). [PYQ]</p>
                    </div>
                </BCCard>

                <BCCard title="Composition (1+1+3)" color="border-emerald-800">
                    <div className="flex flex-col items-center py-4">
                        <div className="relative w-48 h-24 bg-emerald-100 border-2 border-emerald-700 rounded-3xl flex items-center justify-center shadow-inner">
                            <div className="absolute -top-4 w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center text-white font-black shadow-lg">CH</div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">VC</div>
                                <div className="w-10 h-10 bg-white rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 text-[10px] font-bold">M1</div>
                                <div className="w-10 h-10 bg-white rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 text-[10px] font-bold">M2</div>
                                <div className="w-10 h-10 bg-white rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 text-[10px] font-bold">M3</div>
                            </div>
                        </div>
                        <div className="mt-8 text-center bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                            <span className="text-xs font-bold text-emerald-900 italic">"Appointed by the President by warrant under his hand and seal."</span>
                        </div>
                    </div>
                </BCCard>
            </div>

            {/* PHASE 2: POWERS & FUNCTIONS */}
            <SectionHeader title="Phase 2: The Mandate" icon={ShieldCheck} color="border-emerald-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <BCCard title="Social & Educational Focus" color="border-emerald-900">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <SearchCheck size={20} />
                            </div>
                            <span className="text-xs font-bold">Investigate & Monitor implementation of safeguards for SEBCs.</span>
                        </li>
                        <li className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <ShieldAlert size={20} />
                            </div>
                            <span className="text-xs font-bold">Inquire into complaints of violation of rights of SEBCs.</span>
                        </li>
                    </ul>
                </BCCard>

                <BCCard title="Civil Court Powers [PYQ]" color="border-emerald-950">
                    <div className="bg-emerald-900 text-white p-5 rounded-2xl relative">
                        <div className="flex items-center gap-4 mb-4">
                            <Gavel className="text-emerald-400 rotate-12" size={32} />
                            <h4 className="text-sm font-black uppercase tracking-widest underline decoration-emerald-500 underline-offset-4">Judicial Capability</h4>
                        </div>
                        <p className="text-[10px] leading-relaxed opacity-80 mb-4">
                            The Commission has the power of a <span className="font-black italic text-emerald-200">Civil Court</span> to:
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-[9px] font-bold">
                            <div className="bg-emerald-800 p-2 rounded">Summon Persons</div>
                            <div className="bg-emerald-800 p-2 rounded">Examine on Oath</div>
                            <div className="bg-emerald-800 p-2 rounded">Discovery of Docs</div>
                            <div className="bg-emerald-800 p-2 rounded">Affidavit Evidence</div>
                        </div>
                    </div>
                </BCCard>
            </div>

            {/* PHASE 3: THE REPORTING */}
            <SectionHeader title="Phase 3: Transparency & Accountability" icon={ScrollText} color="border-slate-800" />

            <div className="bg-emerald-50 border-2 border-emerald-900 rounded-3xl p-8 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-20 bg-white border-2 border-emerald-900 rounded-lg flex items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(6,78,59,1)]">
                    <FileText size={32} className="text-emerald-700" />
                    <Badge className="absolute -top-3 -right-6 bg-emerald-800">ANNUAL</Badge>
                </div>
                <div className="max-w-xl space-y-4">
                    <p className="font-black text-emerald-900 italic">"Presents report to the <span className="underline italic">President</span> annually or whenever fit."</p>
                    <p className="text-xs text-slate-600 font-bold leading-relaxed px-4">
                        President causes report to be laid before each House of <span className="text-slate-900">Parliament</span>, along with a <span className="underline italic">Memorandum explaining the action taken</span>. [PYQ]
                    </p>
                </div>
            </div>

            {/* MANDATORY CONSULTATION FOOTER */}
            <div className="bg-amber-100 border-2 border-amber-900 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-md border-b-8 border-amber-800">
                <div className="p-4 bg-white rounded-xl shadow-inner shrink-0 scale-up-center">
                    <Handshake size={48} className="text-amber-700" />
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-amber-900 text-lg flex items-center gap-2 uppercase">
                        Mandatory Consultation [CRITICAL]
                    </h5>
                    <p className="text-sm text-amber-800 mt-2 italic font-medium leading-relaxed">
                        The Central Government and every State Government <span className="font-bold underline text-red-700 uppercase">shall consult</span> the Commission on all major policy matters affecting SEBCs. [PYQ]
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-emerald-700 hover:bg-emerald-800 text-white shadow-[0_10px_40px_-10px_rgba(6,78,59,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            UPLIFTMENT MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Scale size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 45 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Shield of Article 338-B.</p>
            </div>
        </BCContainer>
    );
}
