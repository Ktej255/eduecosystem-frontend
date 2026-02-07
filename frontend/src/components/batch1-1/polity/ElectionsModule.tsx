"use client";

import React from "react";
import {
    Vote, Fingerprint, ShieldCheck,
    Globe, Heart, Sprout,
    Handshake, Info, History,
    Ban, Scale, CheckCircle2,
    BookOpen, UserCheck, SearchCheck,
    Sparkles, Zap, ArrowRight,
    MessageSquare, Coins, TrendingUp,
    Target, FileText, LayoutGrid,
    Users, Landmark, Gavel,
    ShieldAlert, HelpCircle, Briefcase,
    Milestone, Scroll, UserPlus,
    Layers, BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ElectionsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-purple-100 selection:text-purple-900">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#1e3a8a] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 15 15 L 985 15 L 985 985 L 15 985 Z" fill="none" stroke="#1e3a8a" strokeWidth="3" strokeDasharray="15 10" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#581c87] opacity-30"></div>
            {children}
        </div>
    </div>
);

const VoterCard = ({ title, children, color = "border-[#1e3a8a]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(30,58,138,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Fingerprint size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-3deg] border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function ElectionsModule({ onComplete, isCompleted }: ElectionsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e3a8a] border-4 border-[#1e1b4b] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#581c87] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 81</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic">The Universal Voter</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Democracy <br /> <span className="text-blue-300 italic underline decoration-white">In Action</span> <br />
                        <span className="text-white drop-shadow-md italic text-3xl md:text-5xl">The Election System</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "The largest democratic exercise on Earth. Understanding Part XV, the independent Election Commission, and the rules of the game."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Vote size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: CONSTITUTIONAL FRAMEWORK */}
            <PhaseHeader number="1" title="Phase 1: Constitutional Pillars [PYQ]" color="bg-[#1e3a8a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <VoterCard title="Article 324: The Pulse" color="border-blue-700">
                    <div className="p-5 bg-blue-50 border-x-4 border-blue-600 rounded-3xl relative overflow-hidden group italic text-xs font-bold leading-relaxed">
                        <ShieldCheck className="absolute top-0 right-0 p-2 opacity-10 text-blue-600" size={40} />
                        <p className="mb-4">
                            Vests the <span className="text-blue-700 underline decoration-wavy">Superintendence, Direction & Control</span> of all elections (LS, RS, Assemblies, President/VP) in the <span className="text-blue-700 underline underline-offset-4">Election Commission</span>.
                        </p>
                        <div className="p-3 bg-white border border-dashed border-blue-400 rounded-xl">
                            <h5 className="font-black text-[10px] text-blue-700 uppercase">Warning [PYQ Trap]</h5>
                            <p className="mt-1">ECI does NOT conduct Panchayat/Municipality elections. (State EC does).</p>
                        </div>
                    </div>
                </VoterCard>

                <VoterCard title="Articles 325 & 326" color="border-purple-800">
                    <div className="p-6 bg-purple-900 text-white rounded-[2rem] relative shadow-xl space-y-4 italic">
                        <Users className="text-purple-300 group-hover:rotate-12 transition-transform" size={42} />
                        <h4 className="text-xs font-black uppercase text-purple-200 underline underline-offset-4 tracking-widest italic font-bold leading-tight">Universal Adult Suffrage</h4>
                        <div className="space-y-4 text-xs">
                            <p><span className="text-amber-400 text-lg">325:</span> No person ineligible on grounds of religion, race, caste or sex for inclusion in electoral roll.</p>
                            <p><span className="text-amber-400 text-lg">326:</span> Elections on basis of Adult Suffrage. (18+ Age).</p>
                            <div className="p-2 bg-white/10 rounded-lg text-center border border-white/20">
                                <span className="text-[10px] font-black underline decoration-yellow-400">61st AA 1988:</span> Lowered age from 21 to 18. [PYQ]
                            </div>
                        </div>
                    </div>
                </VoterCard>
            </div>

            {/* PHASE 2: ELECTORAL MACHINERY */}
            <PhaseHeader number="2" title="Phase 2: Electoral Machinery (The Gear)" color="bg-emerald-700" />

            <div className="relative group p-10 bg-emerald-50 border-4 border-emerald-700 border-dashed rounded-[3rem] shadow-xl overflow-hidden italic">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-[-10deg] transition-transform"><Layers size={180} className="text-emerald-700" /></div>
                <div className="max-w-4xl mx-auto space-y-12 relative z-10 font-bold">
                    <h4 className="text-2xl font-black text-emerald-800 italic uppercase mb-6 underline decoration-emerald-700 underline-offset-8 text-center">Hierarchy of Conduct</h4>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="p-5 bg-white border-2 border-emerald-700 rounded-2xl shadow-sm relative overflow-hidden group">
                                <div className="flex items-center gap-3 text-emerald-900 font-black mb-2"><Globe size={20} /> <h5 className="uppercase text-sm">CEO (State Level)</h5></div>
                                <p className="text-[10px] text-slate-500">Chief Electoral Officer. Superintends election work in a State/UT.</p>
                            </div>
                            <div className="p-5 bg-white border-2 border-emerald-700 rounded-2xl shadow-sm relative overflow-hidden group">
                                <div className="flex items-center gap-3 text-emerald-900 font-black mb-2"><Landmark size={20} /> <h5 className="uppercase text-sm">DEO (District Level)</h5></div>
                                <p className="text-[10px] text-slate-500">District Election Officer. Usually the DM/Collector.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-5 bg-white border-2 border-emerald-700 rounded-2xl shadow-sm relative overflow-hidden group">
                                <div className="flex items-center gap-3 text-emerald-900 font-black mb-2"><UserCheck size={20} /> <h5 className="uppercase text-sm">RO (Constituency Level)</h5></div>
                                <p className="text-[10px] text-slate-500">Returning Officer. Responsible for the entire constituency (LS/MLA).</p>
                            </div>
                            <div className="p-5 bg-white border-2 border-emerald-700 rounded-2xl shadow-sm relative overflow-hidden group">
                                <div className="flex items-center gap-3 text-emerald-900 font-black mb-2"><Briefcase size={20} /> <h5 className="uppercase text-sm">Presiding Officer</h5></div>
                                <p className="text-[10px] text-slate-500">Conducts the poll at a specific <span className="underline font-black">Polling Station</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: ELECTORAL DISPUTES */}
            <PhaseHeader number="3" title="Phase 3: Disputes (Art 329)" color="bg-red-800" />

            <div className="grid md:grid-cols-1 gap-8">
                <VoterCard title="Bar on Court Interference" color="border-red-600">
                    <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group font-black italic">
                        <Gavel className="absolute top-2 right-2 text-red-600 opacity-20" size={100} />
                        <h4 className="text-xl italic text-white mb-6 uppercase underline decoration-red-600 underline-offset-8">Article 329 [PYQ]</h4>
                        <div className="space-y-6">
                            <p className="text-sm opacity-90 leading-relaxed max-w-2xl border-l-4 border-red-600 pl-4">
                                Courts cannot question any law relating to <span className="text-red-400 underline italic">Delimitation</span> of constituencies or allotment of seats.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <p className="text-xs text-red-400 mb-2 uppercase tracking-widest"><ShieldAlert size={14} className="inline mr-2" /> Key Exception Rule</p>
                                <p className="text-xs opacity-75 font-bold italic">
                                    Elections can ONLY be challenged by an <span className="underline text-red-300">Election Petition</span> presented to the <span className="underline text-red-300 text-lg">High Court</span>. [PYQ Trap: Not ECI/Supreme Court first].
                                </p>
                            </div>
                        </div>
                    </div>
                </VoterCard>
            </div>

            {/* FOOTER: THE VOTER IDENTITY */}
            <div className="mt-8 p-10 bg-slate-50 border-4 border-blue-900 rounded-[3rem] relative overflow-hidden shadow-inner group italic">
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <Fingerprint className="text-blue-900 animate-pulse" size={64} />
                    <div className="space-y-4">
                        <h4 className="text-xl font-black text-blue-900 uppercase underline decoration-purple-500 underline-offset-8 italic">The EPIC Card</h4>
                        <p className="text-xs font-bold text-slate-600 leading-relaxed max-w-xl italic">
                            Electoral Photo Identity Cards (EPIC) introduced in 1993. Note: <span className="text-purple-700 underline underline-offset-4 decoration-wavy">Voting is a Statutory Right</span> (as per SC in PUCL case), though rooted in Art 326.
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#1e3a8a] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#1e3a8a] hover:bg-blue-950 text-white shadow-[0_10px_40px_-10px_rgba(30,58,138,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            DEMOCRACY GRADUATE MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Vote size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 81 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Adult Suffrage • Article 324 • Free & Fair.</p>
            </div>
        </ScrapbookContainer>
    );
}
