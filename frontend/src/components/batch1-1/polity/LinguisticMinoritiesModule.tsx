"use client";

import React from "react";
import {
    ShieldCheck, Languages, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    MessageSquare, MapPin, ShieldAlert, FileText,
    Landmark, ArrowBigUpDash, History, SearchCheck,
    Mic2, Globe2, HeartHandshake, UserSecret,
    ClipboardList, Map, HelpCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LinguisticMinoritiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-teal-100">
        <div className="max-w-4xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/60 rounded-3xl p-6 shadow-xl border-2 border-slate-200 relative overflow-hidden">
            {children}
        </div>
    </div>
);

const SentinelCard = ({ title, children, color = "border-teal-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(15,118,110,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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
        <div className={`w-10 h-10 rounded shadow-md flex items-center justify-center font-black text-white ${color}`}>
            {number}
        </div>
        <h2 className={`text-xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[1px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function LinguisticMinoritiesModule({ onComplete, isCompleted }: LinguisticMinoritiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#0f766e] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(15,118,110,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#374151] text-white px-4 py-1 text-lg border border-white/20 shadow-sm">Chapter 46</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-teal-50 font-bold uppercase tracking-widest text-sm italic">The Forgotten Guardian</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Special Officer for <br /> Linguistic Minorities <br />
                        <span className="text-teal-200 drop-shadow-md underline decoration-wavy decoration-[#374151]">The Quiet Sentinel</span>
                    </h1>
                    <p className="text-xl text-teal-50 max-w-2xl leading-relaxed italic opacity-90">
                        "A lone sentinel with a scroll, Article 350-B. Inserted later to ensure that language is never a barrier to opportunity."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-3">
                    <ScrollText size={180} />
                </div>
            </div>

            {/* PHASE 1: ORIGIN */}
            <PhaseHeader number="1" title="Origin (The Insert)" color="bg-[#0f766e]" />

            <div className="grid md:grid-cols-2 gap-8">
                <SentinelCard title="The 7th Amendment (1956)" color="border-[#374151]">
                    <div className="space-y-4">
                        <div className="p-4 bg-[#f3f4f6] border-2 border-dashed border-[#374151] rounded-xl relative">
                            <Badge className="absolute -top-3 left-4 bg-[#374151] font-['Kalam']">Book Insert</Badge>
                            <p className="text-xs font-black text-slate-700 leading-relaxed italic mt-2">
                                <span className="text-[#0f766e] underline">Original Constitution:</span> Did <span className="text-red-600 uppercase">NOT</span> provide for this officer. [PYQ]
                            </p>
                        </div>
                        <div className="flex items-start gap-4 p-3 bg-teal-50 rounded-xl border border-teal-100 italic">
                            <History className="text-[#0f766e] shrink-0" size={20} />
                            <p className="text-xs font-bold text-teal-900 leading-relaxed">
                                SRC Recommendation: States Reorganization Commission (1953-55) recommended it to protect diversity.
                            </p>
                        </div>
                        <div className="p-4 bg-white border-2 border-[#0f766e] rounded-xl text-center shadow-sm">
                            <h4 className="font-black text-[#0f766e] text-lg">Article 350-B</h4>
                            <p className="text-[10px] uppercase font-black text-slate-400">Inserted in Part XVII</p>
                        </div>
                    </div>
                </SentinelCard>

                <SentinelCard title="Appointment & Profile" color="border-[#0f766e]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl relative">
                            <Landmark className="text-[#0f766e]" size={32} />
                            <p className="text-sm font-black italic">Appointed By: <span className="underline decoration-[#0f766e] decoration-2">PRESIDENT</span></p>
                        </div>
                        <div className="p-4 bg-white border-2 border-dashed border-red-200 rounded-xl relative overflow-hidden">
                            <MapPin className="text-red-500 absolute -bottom-2 -left-2 opacity-10" size={64} />
                            <h5 className="text-[10px] font-black text-red-700 uppercase mb-2 flex items-center gap-2 italic">
                                <BadgeCheck size={14} /> HQ: Allahabad (Prayagraj), UP [PYQ Trap]
                            </h5>
                            <div className="grid grid-cols-3 gap-2">
                                {["Belgaum", "Chennai", "Kolkata"].map((city, i) => (
                                    <div key={i} className="bg-slate-50 p-2 rounded border border-slate-100 text-center">
                                        <p className="text-[8px] font-black text-slate-500">{city}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[8px] text-center mt-2 text-slate-400 font-bold uppercase">(Regional Offices)</p>
                        </div>
                    </div>
                </SentinelCard>
            </div>

            {/* PHASE 2: FUNCTIONS */}
            <PhaseHeader number="2" title="Functions (The Watchdog)" color="bg-[#0f766e]" />

            <div className="grid md:grid-cols-2 gap-8">
                <SentinelCard title="Duties (Art 350-B)" color="border-[#0f766e]">
                    <div className="space-y-4 p-4 bg-teal-50/50 rounded-2xl border-2 border-dashed border-teal-200 relative">
                        <div className="absolute top-2 right-2 p-2 bg-white rounded-lg shadow-sm border border-teal-100 flex items-center justify-center">
                            <ScrollText className="text-[#0f766e]" size={20} />
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-[#0f766e] mt-1.5 shadow-sm"></div>
                                <p className="text-xs font-bold leading-relaxed italic">
                                    <span className="font-black text-[#0f766e]">INVESTIGATE:</span> All matters relating to safeguards provided for linguistic minorities.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-[#0f766e] mt-1.5 shadow-sm"></div>
                                <p className="text-xs font-bold leading-relaxed italic">
                                    <span className="font-black text-[#0f766e]">REPORT:</span> To the President upon those matters at such intervals as President directs.
                                </p>
                            </div>
                        </div>
                    </div>
                </SentinelCard>

                <SentinelCard title="The Report Route" color="border-[#374151]">
                    <div className="space-y-6 flex flex-col items-center py-4">
                        <div className="flex items-center gap-3 w-full justify-between px-4">
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-white border-2 border-slate-800 rounded shadow-sm"><UserCheck size={24} /></div>
                                <span className="text-[8px] font-black mt-1">Commissioner</span>
                            </div>
                            <ArrowBigUpDash className="rotate-90 text-slate-300" />
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-[#0f766e] text-white rounded-full shadow-lg border-2 border-white"><Landmark size={24} /></div>
                                <span className="text-[8px] font-black mt-1 uppercase">President</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm hover:bg-white transition-colors">
                                <FileText size={20} className="mx-auto text-slate-600 mb-1" />
                                <p className="text-[9px] font-black uppercase text-slate-800">Parliament</p>
                                <p className="text-[8px] text-slate-400 italic">(Laid before both Houses)</p>
                            </div>
                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm hover:bg-white transition-colors">
                                <Map size={20} className="mx-auto text-slate-600 mb-1" />
                                <p className="text-[9px] font-black uppercase text-slate-800">Governor</p>
                                <p className="text-[8px] text-slate-400 italic">(Sent to state Govts)</p>
                            </div>
                        </div>
                    </div>
                </SentinelCard>
            </div>

            {/* PHASE 3: OBJECTIVES */}
            <PhaseHeader number="3" title="Objectives (Why does it exist?)" color="bg-[#0f766e]" />

            <div className="grid md:grid-cols-1 gap-8">
                <SentinelCard title="The Mission" color="border-[#0f766e]" className="bg-teal-50/20">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-32 h-32 shrink-0 bg-white border-4 border-dashed border-[#0f766e] rounded-full flex flex-col items-center justify-center text-[#0f766e] p-4 text-center">
                            <BadgeCheck size={32} />
                            <span className="text-[8px] font-black uppercase mt-1 leading-none italic">Speech Cloud</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 flex-1">
                            {[
                                { t: "Equal Opportunity", d: "Provide equal opportunities for inclusive development." },
                                { t: "Awareness", d: "Spread awareness about safeguards available." },
                                { t: "Implementation", d: "Ensure instruction in mother tongue at primary stage (Art 350-A)." }
                            ].map((obj, i) => (
                                <div key={i} className="p-4 bg-white border border-teal-100 rounded-2xl shadow-sm group hover:border-[#0f766e] transition-colors">
                                    <h5 className="text-[10px] font-black text-[#0f766e] uppercase mb-1">{obj.t}</h5>
                                    <p className="text-[11px] font-bold text-slate-600 leading-relaxed italic">{obj.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SentinelCard>
            </div>

            {/* FOOTER: MINORITY DEFINITION */}
            <div className="bg-[#374151] text-white border-4 border-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12">
                    <HelpCircle size={120} />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/20">
                        <SearchCheck size={32} className="text-teal-400" />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-black italic underline decoration-teal-400">The "Minority" Definition</h4>
                        <p className="text-sm font-bold text-slate-300 leading-relaxed italic">
                            Constitution: Does <span className="text-white font-black uppercase underline">NOT</span> define the term "Linguistic Minority".
                        </p>
                        <p className="text-xs font-black text-[#0f766e] bg-white px-3 py-1 rounded inline-block">
                            Determination: Determined by State Government (on a district-wise basis).
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-[#0f766e] hover:bg-teal-900 text-white shadow-[0_10px_40px_-10px_rgba(15,118,110,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            SPEECH PROTECTED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Languages size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 46 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic">Signed: Article 350-B.</p>
            </div>
        </ScrapbookContainer>
    );
}
