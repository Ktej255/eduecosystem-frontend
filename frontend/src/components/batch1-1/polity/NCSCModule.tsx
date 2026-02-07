"use client";

import React from "react";
import {
    ShieldCheck, Users, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    Scales, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, SearchCheck, HeartHandshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCSCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const SocialContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fcfaf2] min-h-screen p-4 md:p-8 font-sans selection:bg-rose-100">
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

const SocialCard = ({ title, children, color = "border-rose-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function NCSCModule({ onComplete, isCompleted }: NCSCModuleProps) {
    return (
        <SocialContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#be123c] border-4 border-rose-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(157,23,77,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-rose-950 text-rose-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 43</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-rose-100 font-bold uppercase tracking-widest text-sm text-shadow-sm">Guardians of Constitutional Safeguards</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        National Commission <br /> for SCs <br />
                        <span className="text-rose-900 drop-shadow-md">The Constitutional Shield</span>
                    </h1>
                    <p className="text-xl text-rose-50 max-w-2xl leading-relaxed italic">
                        "A directly established constitutional body under Article 338 to investigate, monitor and evaluate all matters relating to the safeguards provided for Scheduled Castes."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10">
                    <ShieldCheck size={160} />
                </div>
            </div>

            {/* PHASE 1: EVOLUTION & STRUCTURE */}
            <SectionHeader title="Phase 1: Evolution & Structure" icon={History} color="border-rose-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <SocialCard title="Evolution Timeline" color="border-rose-700">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center border-2 border-rose-700 font-bold text-rose-800 text-xs">Org</div>
                            <div>
                                <h4 className="font-bold text-rose-900 leading-none">Art 338 Original</h4>
                                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold text-shadow-sm">Special Officer for SCs and STs</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative">
                            <div className="absolute left-5 -top-6 bottom-0 w-[2px] bg-rose-200 -z-10"></div>
                            <div className="shrink-0 w-10 h-10 rounded-full bg-rose-700 flex items-center justify-center border-2 border-rose-900 font-bold text-white text-xs">65th</div>
                            <div>
                                <h4 className="font-bold text-rose-900 leading-none">65th Amd. Act, 1990 [PYQ]</h4>
                                <p className="text-[10px] text-slate-500 mt-1">Multi-member Commission replaced the Special Officer.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative">
                            <div className="absolute left-5 -top-6 bottom-0 w-[2px] bg-rose-200 -z-10"></div>
                            <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center border-2 border-amber-700 font-bold text-white text-xs">89th</div>
                            <div>
                                <h4 className="font-bold text-rose-900 leading-none">89th Amd. Act, 2003 [CRITICAL]</h4>
                                <p className="text-[10px] text-slate-500 mt-1 italic">Bifurcation into NCSC (Art 338) and NCST (Art 338-A). [PYQ]</p>
                            </div>
                        </div>
                    </div>
                </SocialCard>

                <SocialCard title="Composition (Total 5)" color="border-rose-800">
                    <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 relative">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-rose-700 rounded-xl flex items-center justify-center text-white font-black mb-1 mx-auto shadow-md">1</div>
                                <span className="text-[10px] uppercase font-bold">Chairman</span>
                            </div>
                            <Plus size={16} className="text-slate-300" />
                            <div className="text-center">
                                <div className="w-12 h-12 bg-rose-200 rounded-xl flex items-center justify-center text-rose-900 font-black mb-1 mx-auto border-2 border-rose-300">1</div>
                                <span className="text-[10px] uppercase font-bold">V-Chair</span>
                            </div>
                            <Plus size={16} className="text-slate-300" />
                            <div className="text-center">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-800 font-black mb-1 mx-auto border-2 border-rose-200">3</div>
                                <span className="text-[10px] uppercase font-bold">Members</span>
                            </div>
                        </div>
                        <div className="p-3 bg-rose-50 border-t-2 border-rose-400 rounded-xl">
                            <p className="text-xs font-bold text-rose-900 italic">
                                Appointed by <span className="underline">President</span>. Tenure and conditions determined by <span className="underline">President</span> (usually 3 years).
                            </p>
                        </div>
                    </div>
                </SocialCard>
            </div>

            {/* PHASE 2: FUNCTIONS & POWERS */}
            <SectionHeader title="Phase 2: Functions & Judicial Power" icon={Gavel} color="border-rose-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <SocialCard title="The Watchdog Role" color="border-rose-900" className="md:col-span-1">
                    <ul className="space-y-4 text-sm font-bold">
                        <li className="flex gap-3">
                            <SearchCheck className="text-rose-700 shrink-0" size={20} />
                            <span>Investigate & Monitor constitutional safeguards.</span>
                        </li>
                        <li className="flex gap-3">
                            <ShieldAlert className="text-rose-700 shrink-0" size={20} />
                            <span>Inquire into specific complaints of right violations.</span>
                        </li>
                    </ul>
                </SocialCard>

                <SocialCard title="Civil Court Status [PYQ]" color="border-rose-950" className="md:col-span-2 bg-rose-50/30">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-rose-900 font-black text-xs uppercase">
                                <Scales size={16} /> Powers while inquiring:
                            </div>
                            <ul className="text-[10px] space-y-1 list-disc pl-4 text-slate-600">
                                <li>Summoning and enforcing attendance.</li>
                                <li>Discovery and production of documents.</li>
                                <li>Receiving evidence on affidavits.</li>
                                <li>Requisitioning public records.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center border-l-2 border-rose-200 pl-4">
                            <Gavel size={48} className="text-rose-900 mb-2 rotate-12" />
                            <p className="text-[10px] text-center font-black uppercase text-rose-800 tracking-tighter">
                                DEEMED TO HAVE ALL POWERS OF A <br />
                                <span className="text-lg bg-rose-700 text-white px-2 mt-1 inline-block">CIVIL COURT</span>
                            </p>
                        </div>
                    </div>
                </SocialCard>
            </div>

            {/* PHASE 3: REPORTING & REPORTS */}
            <SectionHeader title="Phase 3: The Report Route" icon={ScrollText} color="border-slate-800" />

            <div className="bg-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 -mr-16 -mt-16 rounded-full"></div>

                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="text-center group">
                        <div className="w-24 h-32 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center flex-col p-4 mb-2 group-hover:bg-rose-50 transition-colors">
                            <FileText size={40} className="text-rose-700" />
                            <span className="text-[8px] font-black mt-2">NCSC REPORT</span>
                        </div>
                        <p className="text-xs font-bold uppercase">Commission</p>
                    </div>

                    <div className="hidden md:block">
                        <ArrowBigUpDash size={32} className="rotate-90 text-slate-300" />
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-amber-100 rounded-full border-2 border-slate-900 flex items-center justify-center mb-2 shadow-md">
                            <Landmark size={40} className="text-amber-800" />
                        </div>
                        <p className="text-xs font-black uppercase">President</p>
                    </div>

                    <div className="hidden md:block">
                        <ArrowBigUpDash size={32} className="rotate-90 text-slate-300" />
                    </div>

                    <div className="text-center">
                        <div className="w-24 h-24 bg-rose-700 rounded-xl border-2 border-slate-900 flex items-center justify-center mb-2 shadow-lg">
                            <div className="text-white font-black text-center text-[10px] leading-tight flex flex-col items-center">
                                <Users size={20} className="mb-1" />
                                PARLIAMENT
                            </div>
                        </div>
                        <p className="text-xs font-bold text-slate-400">Final Table</p>
                    </div>

                    <div className="flex-1 border-l-2 border-dashed border-slate-200 pl-8 space-y-3">
                        <div className="p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                            <h6 className="text-[10px] font-black text-red-800 flex items-center gap-2">
                                <ShieldAlert size={14} /> MEMORANDUM OF EXPLANATION
                            </h6>
                            <p className="text-[9px] text-red-700 mt-1">
                                If President rejects any recommendation, <span className="underline">Reasons for Non-Acceptance</span> must be tabled.
                            </p>
                        </div>
                        <p className="text-[10px] font-medium italic text-slate-500">
                            For State Safeguards, reports are sent to the <span className="font-bold text-slate-900">Governor</span> who tables them in State Legislature. [PYQ]
                        </p>
                    </div>
                </div>
            </div>

            {/* ANGLO-INDIAN TRAP FOOTER */}
            <div className="bg-amber-100 border-2 border-amber-900 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-md border-b-8 border-amber-800">
                <div className="p-4 bg-white rounded-xl shadow-inner shrink-0 leading-none">
                    <span className="text-4xl font-black text-amber-700">AI</span>
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-amber-900 text-lg flex items-center gap-2">
                        The Anglo-Indian Extension [PYQ]
                        <Badge className="bg-amber-800 text-white">Critical</Badge>
                    </h5>
                    <p className="text-sm text-amber-800 mt-2 italic font-medium">
                        The NCSC is required to discharge functions for the <span className="font-bold underline">Anglo-Indian Community</span> in the same manner as for SCs. <br />
                        <span className="text-[10px] text-shadow-sm font-bold text-red-800">Note: Till 2018, it also handled OBCs, but now there's NCBC.</span>
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-rose-700 hover:bg-rose-800 text-white shadow-[0_10px_40px_-10px_rgba(157,23,77,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            SAFEGUARDS MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <ShieldCheck size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 43 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Shield of Article 338.</p>
            </div>
        </SocialContainer>
    );
}

const Plus = ({ size, className }: { size: number, className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <div className="w-1.5 h-0.5 bg-slate-300 absolute"></div>
        <div className="w-1.5 h-0.5 bg-slate-300 absolute rotate-90"></div>
    </div>
);
