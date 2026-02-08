"use client";

import React from "react";
import {
    ShieldCheck, Eye, Search, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Rocket, Lightbulb,
    Network, Scaling, Target, PieChart,
    ArrowDownCircle, HelpCircle, Layers, Settings,
    UserPlus, FileBadge, Globe, TowerControl,
    Shield, Scale, Clock, AlertTriangle, Users,
    UserMinus, Handshake, Briefcase, FileSearch
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CVCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/70 rounded-3xl p-6 shadow-2xl border-2 border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#ca8a04] to-[#4b5563] opacity-40"></div>
            {children}
        </div>
    </div>
);

const WatchtowerCard = ({ title, children, color = "border-[#1e3a8a]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(30,58,138,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10">
            <TowerControl size={48} className={color.replace('border-', 'text-')} />
        </div>
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
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl text-white shadow-lg ${color} rotate-2`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CVCModule({ onComplete, isCompleted, chapterNumber = "64" }: CVCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e3a8a] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ca8a04] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-50 font-bold uppercase tracking-widest text-sm italic">Apex Vigilance Institution</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        CVC <br />
                        <span className="text-[#ca8a04] drop-shadow-md underline decoration-wavy decoration-white">The Watchtower</span>
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl leading-relaxed italic opacity-90">
                        The guardian against corruption. A statutory agency independent of executive control, ensuring integrity in administration.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Eye size={180} />
                </div>
            </div>

            {/* PHASE 1: EVOLUTION */}
            <PhaseHeader number="1" title="Origin & Nature (The Timeline)" color="bg-[#1e3a8a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <WatchtowerCard title="Historical Roots [PYQ]" color="border-[#ca8a04]">
                    <div className="space-y-6 relative border-l-2 border-dashed border-slate-200 ml-4 pl-6">
                        <div className="relative">
                            <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#1e3a8a] border-4 border-white shadow-md"></div>
                            <p className="text-[10px] font-black uppercase text-slate-400">1964</p>
                            <p className="text-sm font-black italic">Established by Govt Resolution.</p>
                            <p className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 rounded inline-block">Santhanam Committee (1962-64)</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#ca8a04] border-4 border-white shadow-md animate-pulse"></div>
                            <p className="text-[10px] font-black uppercase text-slate-400">2003</p>
                            <p className="text-sm font-black italic">Conferred STATUTORY Status. [PYQ]</p>
                            <p className="text-[9px] font-bold text-slate-500 italic">By CVC Act, 2003.</p>
                        </div>
                    </div>
                </WatchtowerCard>

                <WatchtowerCard title="Nature of the Beast" color="border-[#1e3a8a]">
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 border-2 border-[#1e3a8a] rounded-2xl relative">
                            <ShieldAlert className="absolute top-2 right-2 text-blue-200" size={32} />
                            <h4 className="text-[10px] font-black uppercase text-blue-700 mb-2">Independent of Executive:</h4>
                            <p className="text-xs font-black italic">Only responsible to the Parliament. [PYQ]</p>
                        </div>
                        <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl">
                            <ul className="text-[11px] space-y-2 font-bold italic">
                                <li className="flex items-center gap-2"><BadgeCheck size={14} className="text-[#ca8a04]" /> Multi-member Body</li>
                                <li className="flex items-center gap-2"><BadgeCheck size={14} className="text-[#ca8a04]" /> Apex Vigilance Body</li>
                                <li className="flex items-center gap-2 text-red-400"><UserMinus size={14} /> NO investigation wing of its own. [PYQ TRAP]</li>
                            </ul>
                        </div>
                    </div>
                </WatchtowerCard>
            </div>

            {/* PHASE 2: COMPOSITION */}
            <PhaseHeader number="2" title="Composition & Tenure (4-Year Rule)" color="bg-[#ca8a04]" />

            <div className="grid md:grid-cols-2 gap-8">
                <WatchtowerCard title="The Commission" color="border-slate-800">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-center p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl transform hover:scale-105 transition-transform">
                            <UserCheck className="text-slate-900" size={32} />
                            <div>
                                <h4 className="text-[10px] font-black uppercase text-slate-400">Structure:</h4>
                                <p className="text-sm font-black italic underline decoration-[#ca8a04]">1 Central Vigilance Commissioner + <br />Max 2 Vigilance Commissioners.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-[#ca8a04] text-white rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <Clock className="absolute top-2 right-2 opacity-20" size={48} />
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-900 mb-2">TENURE: [VERY HIGH YIELD]</h4>
                            <p className="text-2xl font-black italic">4 YEARS or 65 Years. [PYQ TRAP]</p>
                            <p className="text-[10px] mt-2 font-bold italic opacity-80 underline">Unique 4-year term in Indian Polity!</p>
                        </div>
                        <div className="text-center p-2 border-2 border-dashed border-red-200 rounded-xl">
                            <p className="text-[10px] font-black text-red-700 uppercase">NOT eligible for further employment. [PYQ]</p>
                        </div>
                    </div>
                </WatchtowerCard>

                <WatchtowerCard title="Appointment Committee" color="border-[#1e3a8a]">
                    <h4 className="text-[10px] font-black uppercase text-blue-400 mb-6 tracking-tighter">Selection by 3-Member Panel:</h4>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { t: "Prime Minister", d: "Chairperson", c: "bg-blue-700" },
                            { t: "Home Minister", d: "Member", c: "bg-slate-700" },
                            { t: "Leader of Opposition", d: "In Lok Sabha [PYQ]", c: "bg-slate-700" }
                        ].map((m, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow group">
                                <div className={`w-10 h-10 ${m.c} text-white rounded-full flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform`}>{m.t.charAt(0)}</div>
                                <div>
                                    <p className="text-[11px] font-black uppercase tracking-tight">{m.t}</p>
                                    <p className="text-[9px] font-bold text-slate-400 italic">{m.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </WatchtowerCard>
            </div>

            {/* PHASE 3: FUNCTIONS */}
            <PhaseHeader number="3" title="Powers & Functions (The Supervisor)" color="bg-slate-800" />

            <div className="bg-white border-4 border-slate-900 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ca8a04]"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black italic underline decoration-[#1e3a8a] flex items-center gap-3">
                            <Settings size={28} className="text-[#1e3a8a] group-hover:rotate-180 transition-transform duration-1000" /> The Supervisory Role
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 p-4 bg-blue-50 border-l-4 border-[#1e3a8a] rounded-2xl">
                                <Eye size={20} className="text-[#1e3a8a] shrink-0" />
                                <p className="text-xs font-black italic">Superintend functioning of Delhi Special Police Establishment (<span className="text-blue-900 underline">CBI</span>) for PCA offenses. [PYQ]</p>
                            </li>
                            <li className="flex gap-3 p-4 bg-orange-50 border-l-4 border-[#ca8a04] rounded-2xl">
                                <Handshake size={20} className="text-[#ca8a04] shrink-0" />
                                <p className="text-xs font-black italic">Consulted by Central Govt/RBI/SIDBI etc. in vigilance matters.</p>
                            </li>
                            <li className="flex gap-3 p-3 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl">
                                <AlertTriangle size={18} className="text-red-500 shrink-0" />
                                <p className="text-[10px] font-bold italic">Can call for information from any authority for inquiry.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Scale size={100} /></div>
                            <h4 className="text-lg font-black italic text-[#ca8a04] mb-4">Advisory Nature</h4>
                            <p className="text-xs font-bold leading-relaxed italic mb-4">
                                CVC's role is ADVISORY. If Central Govt disagrees with CVC's advice, it must record reasons in writing.
                            </p>
                            <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                                <p className="text-[10px] font-black uppercase text-blue-300">Annual Report:</p>
                                <p className="text-sm font-black italic mt-1">Presented to the <span className="text-[#ca8a04] underline">PRESIDENT</span>. [PYQ]</p>
                            </div>
                        </div>
                        <div className="p-4 border-2 border-[#1e3a8a] rounded-2xl bg-white text-center">
                            <h5 className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">Whistleblowers Act (2014) [FYI]</h5>
                            <p className="text-[11px] font-black italic leading-tight">CVC is the designated agency to receive complaints under the PIDPI Resolution.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* REMOVAL PROCESS */}
            <div className="p-8 border-4 border-dashed border-[#ca8a04] rounded-[30px] bg-yellow-50/50 relative text-center group">
                <h4 className="text-xl font-black italic text-[#ca8a04] mb-4 underline decoration-blue-800">The Power to Remove</h4>
                <p className="text-sm font-bold leading-relaxed italic text-blue-900">
                    By <span className="text-black font-black bg-white px-2 rounded border border-black shadow-sm">PRESIDENT</span>. <br />
                    Reference to <span className="underline font-black">Supreme Court</span> mandatory for Misbehavior grounds. [PYQ]
                </p>
                <div className="mt-4 flex justify-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <Shield size={20} />
                    <Scale size={20} />
                    <Gavel size={20} />
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#1e3a8a] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(30,58,138,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            INTEGRITY GUARDED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <TowerControl size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest">CVC Act, 2003: Integrity is the Foundation.</p>
            </div>
        </ScrapbookContainer>
    );
}
