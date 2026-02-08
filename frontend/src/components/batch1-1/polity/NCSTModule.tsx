"use client";

import React from "react";
import {
    ShieldCheck, Users, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    Trees, Mountain, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, SearchCheck, GitBranch,
    UserPlus, Briefcase, MapIcon, Compass
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCSTModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fcfaf2] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/70 rounded-3xl p-6 shadow-xl border-2 border-slate-200 relative overflow-hidden">
            {/* Tribal Motif Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(90deg,#92400e,#92400e_20px,#16a34a_20px,#16a34a_40px)] opacity-20"></div>
            {children}
        </div>
    </div>
);

const TribalCard = ({ title, children, color = "border-green-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute bottom-0 right-0 p-1 opacity-5 group-hover:opacity-10 transition-opacity">
            <Mountain size={64} />
        </div>
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
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl text-white shadow-lg rotate-3 ${color}`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function NCSTModule({ onComplete, isCompleted }: NCSTModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#16a34a] border-4 border-green-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(22,163,74,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-orange-600 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter 49</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-green-50 font-bold uppercase tracking-widest text-sm italic">The Tribal Shield & A Bow</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        National Commission <br /> for STs <br />
                        <span className="text-[#92400e] drop-shadow-md underline decoration-wavy decoration-white">The Forest Guardian</span>
                    </h1>
                    <p className="text-xl text-green-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Protection of rights under Article 338-A. Aiming for development with a focus on geographical and cultural preservation."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Trees size={180} />
                </div>
            </div>

            {/* PHASE 1: EVOLUTION */}
            <PhaseHeader number="1" title="Evolution (The Separation)" color="bg-[#16a34a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <TribalCard title="The 89th Amendment (2003)" color="border-[#92400e]">
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border-2 border-dashed border-[#16a34a] rounded-xl transform rotate-1">
                            <h4 className="font-black text-[#16a34a] flex items-center gap-2">
                                <GitBranch size={20} /> Reason for Bifurcation
                            </h4>
                            <p className="text-sm font-bold text-slate-600 mt-2 leading-relaxed italic">
                                "Geographically & culturally, the problems of STs are <span className="underline decoration-green-600">different</span> from SCs." [PYQ]
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 bg-white p-3 border-2 border-slate-100 rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                                <span className="font-black text-slate-400">Old: Art 338</span>
                                <span className="text-xs font-bold text-slate-500">NCSC</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-3 border-2 border-[#16a34a] rounded-xl relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#16a34a]"></div>
                                <span className="font-black text-[#16a34a]">New: Art 338-A</span>
                                <span className="text-xs font-black text-green-700 italic">Effective: 2004</span>
                            </div>
                        </div>
                    </div>
                </TribalCard>

                <TribalCard title="Composition (The Council)" color="border-[#16a34a]">
                    <div className="bg-slate-50 p-6 rounded-2xl border-4 border-dotted border-slate-200">
                        <div className="flex flex-wrap gap-4 justify-center mb-6">
                            <div className="text-center p-3 bg-white border-2 border-[#16a34a] rounded-xl shadow-sm min-w-[100px]">
                                <BadgeCheck className="mx-auto text-[#16a34a]" size={24} />
                                <p className="text-[10px] font-black mt-1">Chairperson</p>
                                <p className="text-[8px] italic">(Cabinet Min Rank)</p>
                            </div>
                            <div className="text-center p-3 bg-white border-2 border-[#92400e] rounded-xl shadow-sm min-w-[100px]">
                                <UserPlus className="mx-auto text-[#92400e]" size={24} />
                                <p className="text-[10px] font-black mt-1">Vice-Chair</p>
                                <p className="text-[8px] italic">(MoS Rank)</p>
                            </div>
                            <div className="text-center p-3 bg-white border-2 border-green-200 rounded-xl shadow-sm min-w-[100px]">
                                <Users className="mx-auto text-green-400" size={24} />
                                <p className="text-[10px] font-black mt-1">3 Members</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-white rounded-xl border-t-4 border-[#b91c1c] shadow-sm">
                                <h4 className="text-[10px] font-black text-[#b91c1c] uppercase">Critical Condition:</h4>
                                <p className="text-xs font-black italic mt-1 text-slate-700">At least <span className="underline decoration-[#b91c1c]">one member</span> must be a woman. [PYQ]</p>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                                <Landmark className="text-[#16a34a]" size={20} />
                                <p className="text-[10px] font-black">Appointed by <span className="uppercase underline">President</span> for 3 Years.</p>
                            </div>
                        </div>
                    </div>
                </TribalCard>
            </div>

            {/* PHASE 2: FUNCTIONS */}
            <PhaseHeader number="2" title="Functions (The Guardian)" color="bg-[#16a34a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <TribalCard title="Standard Duties (Art 338-A)" color="border-[#16a34a]">
                    <div className="space-y-3 relative p-4 bg-green-50/50 rounded-2xl border-2 border-dashed border-green-200">
                        <Compass size={40} className="absolute top-2 right-2 text-green-200" />
                        {[
                            "INVESTIGATE: Monitors all matters relating to safeguards for STs.",
                            "INQUIRE: Into specific complaints of deprivation of rights.",
                            "ADVISE: Participates in planning of socio-economic development.",
                            "REPORT: Presents annual report to President."
                        ].map((duty, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                                <div className="p-1.5 bg-white border border-green-200 rounded text-[10px] font-black group-hover:bg-green-600 group-hover:text-white transition-colors">{idx + 1}</div>
                                <p className="text-xs font-bold leading-relaxed">{duty}</p>
                            </div>
                        ))}
                    </div>
                </TribalCard>

                <TribalCard title="Powers & Consultation" color="border-[#92400e]">
                    <div className="space-y-4">
                        <div className="p-4 bg-white border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex gap-3 items-center mb-3">
                                <Gavel className="text-slate-900" size={24} />
                                <h4 className="font-black text-slate-950 italic">Civil Court Powers</h4>
                            </div>
                            <p className="text-[10px] font-bold text-slate-600 leading-relaxed italic">
                                While investigating, it has powers of a civil court (Summoning, Discovery, Evidence).
                            </p>
                        </div>
                        <div className="p-4 bg-[#fff7ed] border-2 border-[#92400e] rounded-xl transform -rotate-1">
                            <h4 className="text-[10px] font-black text-[#92400e] uppercase mb-2">Mandatory Consultation:</h4>
                            <p className="text-xs font-black italic">
                                Union and State Govts <span className="underline decoration-[#92400e]">Must Consult</span> the Commission on major policy matters affecting STs.
                            </p>
                        </div>
                    </div>
                </TribalCard>
            </div>

            {/* PHASE 3: UNIQUE FUNCTIONS */}
            <PhaseHeader number="3" title="Unique Functions (Forest Rights)" color="bg-[#16a34a]" />

            <div className="grid md:grid-cols-1 gap-8">
                <TribalCard title="Special Mandate (2005 Notification) [CRITICAL]" color="border-[#16a34a]">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 border-l-4 border-[#16a34a] rounded shadow-sm">
                                <h5 className="text-xs font-black text-[#16a34a] uppercase mb-1 flex items-center gap-2">
                                    <Trees size={16} /> Forest Rights Act & PESA
                                </h5>
                                <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                                    Measures for effective implementation of <span className="font-black">PESA Act (1996)</span> and Conferring ownership rights of <span className="underline italic">Minor Forest Produce</span>. [PYQ]
                                </p>
                            </div>
                            <div className="p-4 bg-amber-50 border-l-4 border-[#92400e] rounded shadow-sm">
                                <h5 className="text-xs font-black text-[#92400e] uppercase mb-1 flex items-center gap-2">
                                    <History size={16} /> Rehabilitation
                                </h5>
                                <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                                    Relief and rehabilitation of displaced tribal groups; safeguarding rights over mineral/water resources.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-red-50 border-l-4 border-[#b91c1c] rounded shadow-sm">
                                <h5 className="text-xs font-black text-[#b91c1c] uppercase mb-1 flex items-center gap-2">
                                    <ShieldAlert size={16} /> Land Alienation
                                </h5>
                                <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                                    Measures to prevent alienation of tribal people from land and prevention of <span className="font-black italic">Shifting Cultivation</span> (Jhum).
                                </p>
                            </div>
                            <div className="p-4 bg-white border-2 border-dashed border-slate-200 rounded flex items-center justify-center italic text-slate-400 text-xs text-center font-bold">
                                "The President may specify other functions relating to the welfare of STs."
                            </div>
                        </div>
                    </div>
                </TribalCard>
            </div>

            {/* FOOTER: THE REPORT ROUTE */}
            <div className="bg-[#92400e] text-white border-4 border-orange-950 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -mr-24 -mt-24 rounded-full blur-2xl"></div>
                <h4 className="text-xl font-black mb-8 flex items-center gap-3 underline decoration-white font-['Kalam']">
                    The Report Route Flowchart
                </h4>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 font-bold">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 bg-white rounded shadow-xl text-[#92400e] border-2 border-[#16a34a]">
                            <FileText size={32} />
                        </div>
                        <span className="text-[10px] uppercase">NCST</span>
                    </div>

                    <div className="hidden md:block w-8 h-[2px] bg-white opacity-50"></div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-[#ca8a04] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                            <Landmark size={24} />
                        </div>
                        <span className="text-[10px] uppercase">President</span>
                    </div>

                    <div className="hidden md:block w-8 h-[2px] bg-white opacity-50"></div>

                    <div className="flex-1 grid grid-cols-2 gap-4 w-full md:w-auto">
                        <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-center backdrop-blur-sm">
                            <p className="text-[9px] uppercase tracking-tighter">Parliament</p>
                            <p className="text-[7px] text-orange-200 mt-1 italic">Action Taken Report</p>
                        </div>
                        <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-center backdrop-blur-sm">
                            <p className="text-[9px] uppercase tracking-tighter">Governor</p>
                            <p className="text-[7px] text-orange-200 mt-1 italic">State Legislature</p>
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
                        : "bg-[#16a34a] hover:bg-green-800 text-white shadow-[0_10px_40px_-10px_rgba(22,163,74,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            TRIBAL RIGHTS CHAMPIONED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Trees size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 49 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold">The Shield of Article 338-A.</p>
            </div>
        </ScrapbookContainer>
    );
}
