"use client";

import React from "react";
import {
    ShieldCheck, Users, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    Scale, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, SearchCheck, GitBranch,
    UserPlus, Briefcase, ListChecks, Landmark as Pillar,
    Construction
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCBCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/80 rounded-3xl p-6 shadow-2xl border-2 border-orange-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[repeating-linear-gradient(-45deg,#ea580c_0,#ea580c_1px,transparent_1px,transparent_10px)] opacity-10"></div>
            {children}
        </div>
    </div>
);

const JusticeCard = ({ title, children, color = "border-orange-600", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(234,88,12,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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

export default function NCBCModule({ onComplete, isCompleted, chapterNumber = "50" }: NCBCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#ea580c] border-4 border-orange-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(234,88,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ca8a04] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-50 font-bold uppercase tracking-widest text-sm italic">From Statute to Constitution</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        NCBC <br />
                        <span className="text-orange-950 drop-shadow-md underline decoration-wavy decoration-[#ca8a04]">The Orange Shield</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic opacity-90">
                        "The newest constitutional guardian for Backward Classes. Elevated to balance the scales of social justice under Article 338-B."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Scale size={180} />
                </div>
            </div>

            {/* PHASE 1: EVOLUTION */}
            <PhaseHeader number="1" title="Evolution (The Upgrade)" color="bg-[#ea580c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <JusticeCard title="The Timeline [High Yield]" color="border-[#4b5563]">
                    <div className="space-y-6 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                        <div className="relative">
                            <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-slate-400 border-2 border-white"></div>
                            <h4 className="font-black text-slate-600">1992 - Mandal Case [PYQ]</h4>
                            <p className="text-xs font-bold text-slate-500 italic leading-relaxed">Supreme Court directed Govt to create a permanent body for BCs.</p>
                        </div>
                        <div className="relative p-3 bg-slate-50 border-2 border-slate-200 rounded-xl transform rotate-1">
                            <div className="absolute -left-[30px] top-4 w-5 h-5 rounded bg-[#4b5563] flex items-center justify-center text-white text-[8px] font-black shadow-sm">
                                <Construction size={10} />
                            </div>
                            <h4 className="font-black text-[#4b5563]">1993 - Statutory Body</h4>
                            <p className="text-[10px] font-bold text-slate-500">Established under NCBC Act, 1993. (Wooden Post Era)</p>
                        </div>
                        <div className="relative p-4 bg-orange-50 border-2 border-[#ea580c] rounded-xl transform -rotate-1 shadow-sm">
                            <div className="absolute -left-[31px] top-5 w-6 h-6 rounded-full bg-[#ca8a04] flex items-center justify-center text-white border-2 border-white shadow-md">
                                <Pillar size={12} />
                            </div>
                            <h4 className="font-black text-[#ea580c]">2018 - 102nd Amendment [PYQ]</h4>
                            <p className="text-xs font-black text-orange-800 italic">Conferred CONSTITUTIONAL Status.</p>
                            <ul className="text-[10px] font-black mt-2 text-orange-700 list-disc pl-4 space-y-1">
                                <li>Added Art 338-B (Structure)</li>
                                <li>Added Art 342-A (List Power)</li>
                            </ul>
                            <p className="text-[9px] mt-2 uppercase font-black text-red-700 underline underline-offset-2 decoration-dotted">Repealed the 1993 Act.</p>
                        </div>
                    </div>
                </JusticeCard>

                <JusticeCard title="Composition (The Standard)" color="border-[#ea580c]">
                    <div className="bg-orange-50/50 p-6 rounded-2xl border-4 border-dotted border-orange-200">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="col-span-2 text-center p-4 bg-white border-2 border-[#ea580c] rounded-2xl shadow-sm relative overflow-hidden">
                                <BadgeCheck className="absolute top-2 right-2 text-[#ea580c] opacity-20" size={32} />
                                <p className="text-xs font-black uppercase text-orange-400">Chairperson</p>
                                <p className="text-lg font-black text-[#ea580c] leading-none mt-1">Cabinet Minister Rank</p>
                            </div>
                            <div className="text-center p-3 bg-white border-2 border-orange-200 rounded-xl shadow-sm">
                                <p className="text-[10px] font-black text-orange-400">Vice-Chair</p>
                                <p className="text-xs font-black text-[#ea580c] italic">MoS Rank</p>
                            </div>
                            <div className="text-center p-3 bg-white border-2 border-orange-200 rounded-xl shadow-sm">
                                <p className="text-[10px] font-black text-orange-400">3 Members</p>
                                <p className="text-xs font-black text-[#ea580c]">Permanent Body</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-orange-100 italic font-bold">
                                <Landmark className="text-[#ca8a04]" size={20} />
                                <p className="text-[11px] leading-relaxed italic">"Appointed by the <span className="underline decoration-[#4b5563]">President</span> by warrant under his hand and seal."</p>
                            </div>
                            <div className="p-3 bg-slate-900 text-white rounded-xl flex justify-between items-center px-6">
                                <p className="text-[10px] font-black uppercase tracking-widest">Tenure</p>
                                <p className="text-xl font-black">3 YEARS</p>
                            </div>
                        </div>
                    </div>
                </JusticeCard>
            </div>

            {/* PHASE 2: FUNCTIONS */}
            <PhaseHeader number="2" title="Functions (The Watchdog)" color="bg-[#ea580c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <JusticeCard title="Duties (Art 338-B)" color="border-[#ea580c]">
                    <div className="space-y-3">
                        {[
                            { icon: SearchCheck, txt: "INVESTIGATE: Monitors safeguards for SEBCs." },
                            { icon: ShieldAlert, txt: "INQUIRE: Into specific complaints of deprivation of rights." },
                            { icon: Briefcase, txt: "ADVISE: Participates in socio-economic planning." },
                            { icon: FileText, txt: "REPORT: Presents annual report to President." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-3 bg-orange-50/50 rounded-xl border border-orange-100 group">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                                    <item.icon size={18} />
                                </div>
                                <p className="text-xs font-bold leading-relaxed self-center italic">{item.txt}</p>
                            </div>
                        ))}
                    </div>
                </JusticeCard>

                <JusticeCard title="Powers & Consultation" color="border-[#ca8a04]">
                    <div className="space-y-4">
                        <div className="p-5 bg-white border-b-4 border-r-4 border-slate-900 rounded-2xl">
                            <h4 className="flex items-center gap-2 font-black text-slate-900 mb-3 underline decoration-wavy decoration-[#ea580c]">
                                <Gavel size={24} /> Civil Court Powers
                            </h4>
                            <p className="text-[11px] font-bold text-slate-600 leading-relaxed italic">
                                While investigating, it has powers of a civil court (Summoning, Discovery, Evidence). Same as SC/ST Commissions.
                            </p>
                        </div>
                        <div className="p-5 bg-orange-900 text-white rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 -mr-8 -mt-8 rounded-full"></div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-2">Mandatory:</h4>
                            <p className="text-sm font-bold italic leading-relaxed">
                                Union and State Govts <span className="underline decoration-orange-400 decoration-2">Must Consult</span> the Commission on all major policies affecting SEBCs.
                            </p>
                        </div>
                    </div>
                </JusticeCard>
            </div>

            {/* PHASE 3: THE LIST POWER */}
            <PhaseHeader number="3" title="The List Power (Art 342-A)" color="bg-[#ea580c]" />

            <div className="grid md:grid-cols-1 gap-8">
                <JusticeCard title="Who Decides the List? [CRITICAL UPDATE]" color="border-[#ea580c]" className="bg-[#fff7ed]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white border-2 border-[#ca8a04] rounded-3xl relative">
                            <h5 className="font-black text-[#ca8a04] flex items-center gap-2 mb-4">
                                <ListChecks /> Central List
                            </h5>
                            <p className="text-xs font-black text-slate-700 leading-relaxed italic">
                                <span className="text-[#ea580c]">President:</span> Notifies the list (in consultation with Governor).<br /><br />
                                <span className="text-[#ea580c]">Parliament:</span> Can amend the list (Include/Exclude).
                            </p>
                        </div>
                        <div className="p-6 bg-[#fffbeb] border-2 border-orange-800 rounded-3xl relative">
                            <Badge className="absolute -top-3 right-4 bg-orange-800 animate-pulse">105th AA Twist</Badge>
                            <h5 className="font-black text-orange-900 flex items-center gap-2 mb-4 italic">
                                State List [2021 Update]
                            </h5>
                            <p className="text-xs font-bold text-orange-800 leading-relaxed italic">
                                <span className="font-black underline">Restored:</span> 105th Amendment Act (2021) clarified that States <span className="font-black">DO</span> have the power to maintain their own "State List" of OBCs. [PYQ]
                            </p>
                        </div>
                    </div>
                </JusticeCard>
            </div>

            {/* FOOTER: ROHINI COMMISSION */}
            <div className="bg-[#4b5563] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 right-0 p-2 opacity-5">
                    <History size={120} />
                </div>
                <h4 className="text-xl font-black mb-6 flex items-center gap-3 underline decoration-[#ea580c] font-['Kalam']">
                    The "Rohini Commission" Insight
                </h4>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="w-24 h-24 bg-white border-4 border-[#ea580c] rounded-full flex flex-col items-center justify-center text-[#ea580c] shrink-0 transform rotate-6 shadow-xl">
                        <GitBranch size={40} />
                        <span className="text-[8px] font-black uppercase">Sub-cat</span>
                    </div>
                    <div className="flex-1 space-y-3">
                        <p className="text-sm font-bold italic leading-relaxed">
                            Setup under <span className="text-orange-400 font-black">Article 340</span> for sub-categorization of OBCs to ensure equitable distribution of benefits.
                        </p>
                        <div className="flex gap-3">
                            <Badge className="bg-orange-600">Status</Badge>
                            <p className="text-xs font-black text-slate-300">Report Submitted (July 2023).</p>
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
                        : "bg-[#ea580c] hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)]"
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
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic">The Shield of Article 338-B.</p>
            </div>
        </ScrapbookContainer>
    );
}
