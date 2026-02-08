"use client";

import React from "react";
import {
    Activity, ShieldAlert, Pyramid, Info,
    BadgeCheck, BookOpen, UserCheck, SearchCheck,
    FileText, Landmark, ArrowBigUpDash, History,
    MessageSquare, AlertTriangle, UserPlus, HelpCircle,
    Settings, Users, Waves, Heart, Shield, Gavel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NDMAModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100 selection:text-orange-900">
        <div className="max-w-5xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white rounded-3xl p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ea580c] opacity-10"></div>
            {children}
        </div>
    </div>
);

const CrisisCard = ({ title, children, color = "border-slate-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl -rotate-2`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function NDMAModule({ onComplete, isCompleted, chapterNumber = "68" }: NDMAModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#ea580c] border-4 border-orange-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(234,88,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#374151] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-50 font-bold uppercase tracking-widest text-sm italic">The Crisis Manager</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        National Disaster <br /> Management <br />
                        <span className="text-orange-950 drop-shadow-md underline decoration-wavy decoration-[#16a34a]">The Safety Pyramid</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic opacity-90">
                        "From rescue to proactive resilience. Institutionalizing safety through a holistic 3-tier shield against crisis."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Activity size={200} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: ORIGIN & APEX */}
            <PhaseHeader number="1" title="Origin & Apex (The Top Tier)" color="bg-[#ea580c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <CrisisCard title="The DM Act (2005)" color="border-[#374151]">
                    <div className="p-4 bg-slate-50 border-2 border-[#374151] rounded-2xl relative overflow-hidden">
                        <Waves className="absolute -bottom-4 -right-4 text-slate-200" size={80} />
                        <h4 className="font-black text-slate-700 flex items-center gap-2 uppercase text-xs mb-2">
                            <History size={18} /> The Tsunami Trigger
                        </h4>
                        <p className="text-sm font-black text-slate-900 leading-relaxed italic">
                            Enacted after the 2004 Tsunami. Shifted focus from <span className="underline decoration-[#ea580c]">Relief</span> to <span className="text-[#16a34a]">Resilience</span>. [PYQ]
                        </p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-[#ea580c] rounded-xl flex items-center gap-3 mt-4">
                        <ShieldAlert className="text-[#ea580c]" size={24} />
                        <p className="text-xs font-black uppercase tracking-tighter">Nodal Ministry: Home Affairs (MHA)</p>
                    </div>
                </CrisisCard>

                <CrisisCard title="NDMA (National Level)" color="border-[#ea580c]">
                    <div className="p-5 bg-[#ea580c] text-white rounded-3xl relative shadow-xl transform rotate-1">
                        <h4 className="flex items-center gap-2 font-black text-orange-950 underline mb-4">
                            <UserCheck size={24} /> Chairperson: PM [PYQ]
                        </h4>
                        <ul className="space-y-2 text-[11px] font-black italic">
                            <li className="flex items-center gap-2 bg-white/10 p-2 rounded">
                                <BadgeCheck size={14} className="text-[#16a34a]" /> Max 9 Members (Nominated by PM)
                            </li>
                            <li className="flex items-center gap-2 bg-white/10 p-2 rounded border border-white/20">
                                <BadgeCheck size={14} className="text-[#16a34a]" /> Vice-Chair: Rank of Cabinet Minister
                            </li>
                        </ul>
                    </div>
                </CrisisCard>
            </div>

            {/* PHASE 2: STATE & DISTRICT */}
            <PhaseHeader number="2" title="State & District (The Execution)" color="bg-[#16a34a]" />

            <div className="relative p-8 bg-slate-50 border-4 border-slate-900 rounded-[3rem] shadow-2xl">
                <div className="grid md:grid-cols-1 gap-12 text-center">
                    <div className="space-y-8 relative">
                        {/* PYRAMID VISUAL */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-1/3 p-4 bg-[#ea580c] text-white font-black rounded-t-3xl shadow-lg border-x-4 border-t-4 border-slate-900 group hover:scale-105 transition-transform">
                                <p className="text-xs uppercase opacity-80">National (NDMA)</p>
                                <p className="text-sm underline decoration-slate-900 underline-offset-4 font-black">PM (Ex-Officio)</p>
                            </div>
                            <div className="w-1/2 p-4 bg-blue-600 text-white font-black shadow-lg border-x-4 border-slate-900 group hover:scale-105 transition-transform">
                                <p className="text-xs uppercase opacity-80">State (SDMA)</p>
                                <p className="text-sm underline decoration-slate-900 underline-offset-4 font-black">CM (Ex-Officio)</p>
                            </div>
                            <div className="w-2/3 p-6 bg-[#16a34a] text-white font-black rounded-b-3xl shadow-lg border-4 border-slate-900 relative group hover:scale-105 transition-transform">
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-950 p-2 text-[8px] rotate-12 shadow-md">HIGH YIELD TRAP</div>
                                <p className="text-xs uppercase opacity-80">District (DDMA)</p>
                                <p className="text-lg underline decoration-slate-900 underline-offset-4 font-black">DM / Collector [PYQ]</p>
                                <p className="text-[10px] mt-2 italic text-green-100">Co-Chair: Elected Local Rep (ZP Chair)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE ARMS */}
            <PhaseHeader number="3" title="The Arms (NEC & NDRF)" color="bg-[#374151]" />

            <div className="grid md:grid-cols-2 gap-8">
                <CrisisCard title="NEC (Executive Body)" color="border-[#374151]">
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-900 text-white rounded-2xl relative">
                            <Settings className="absolute top-2 right-2 text-slate-600" size={24} />
                            <h4 className="text-xs font-black uppercase text-slate-400 mb-2 underline tracking-widest">Chairperson: [TRAP]</h4>
                            <p className="text-lg font-black italic shadow-sm text-yellow-400">Union Home Secretary</p>
                            <p className="text-[10px] font-bold text-slate-300 mt-2">Not the Home Minister. Assists NDMA. Secretaries of other ministries.</p>
                        </div>
                    </div>
                </CrisisCard>

                <CrisisCard title="NDRF (The Force)" color="border-blue-600">
                    <div className="p-5 bg-blue-50 border-2 border-blue-600 rounded-2xl space-y-3">
                        <div className="flex items-center gap-3">
                            <Heart className="text-red-500 fill-red-500" size={24} />
                            <p className="text-xs font-black uppercase text-blue-900 tracking-tight">Motto: Aapda Seva Sadaiv</p>
                        </div>
                        <p className="text-[10px] font-bold italic leading-relaxed text-slate-600">
                            Specialized force. Headed by DG (IPS). Composed of personnel from BSF, CRPF, CISF, ITBP, etc.
                        </p>
                    </div>
                </CrisisCard>
            </div>

            {/* FOOTER: THE FUND */}
            <div className="mt-8 p-6 bg-slate-900 text-white border-4 border-slate-950 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
                    <Landmark size={150} />
                </div>
                <h4 className="text-xl font-black text-green-400 mb-6 flex items-center gap-3 italic">
                    <Shield size={28} /> The Fund Structure
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <Badge className="bg-orange-600">NDRF</Badge>
                        <p className="text-xs font-bold italic">National Disaster <span className="text-orange-400">Response</span> Fund (Relief).</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 relative">
                        <Badge className="bg-green-600">NDMF</Badge>
                        <p className="text-xs font-bold italic">National Disaster <span className="text-green-400">Mitigation</span> Fund (Prevention).</p>
                        <div className="absolute -top-3 -right-3 bg-red-600 p-1 text-[8px] font-black rotate-12">AUDITED BY CAG</div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-slate-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#ea580c] hover:bg-orange-700 text-white shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            RESILIENCE MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Pyramid size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center">Aapda Seva Sadaiv • Sustained Service</p>
            </div>
        </ScrapbookContainer>
    );
}
