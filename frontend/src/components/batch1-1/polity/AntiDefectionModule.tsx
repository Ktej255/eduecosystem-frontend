"use client";

import React from "react";
import {
    Link, Lock, ShieldCheck, Landmark,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, History,
    MessageSquare, AlertTriangle, UserPlus,
    Scaling, Target, ShieldCheck as Shield,
    UserGroup, GraduationCap, Briefcase,
    Milestone, Sparkles, CheckCircle2,
    Gavel, Scale, Chainlink, Link2, Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AntiDefectionModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#ecfdf5] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-emerald-100 selection:text-emerald-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-white rounded-3xl p-6 shadow-2xl border-4 border-emerald-800 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')]">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#10b981] opacity-30"></div>
            {children}
        </div>
    </div>
);

const ChainCard = ({ title, children, color = "border-emerald-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(16,185,129,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Link2 size={64} className={color.replace('border-', 'text-')} />
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
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-6 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function AntiDefectionModule({ onComplete, isCompleted, chapterNumber = "70" }: AntiDefectionModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#10b981] border-4 border-emerald-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(16,185,129,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#065f46] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-emerald-50 font-bold uppercase tracking-widest text-sm italic">Curbing Political Opportunism</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Anti-Defection <br /> Law <br />
                        <span className="text-emerald-900 drop-shadow-md underline decoration-wavy decoration-white">The Unbreakable Chain</span>
                    </h1>
                    <p className="text-xl text-emerald-50 max-w-2xl leading-relaxed italic opacity-90">
                        "The 10th Schedule: Protecting the mandate of the voter from Horse Trading and floor-crossing. A shield for stability in the parliamentary system."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Link size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE 52nd AMENDMENT */}
            <PhaseHeader number="1" title="The 52nd Amendment (1985)" color="bg-[#10b981]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ChainCard title="The 10th Schedule" color="border-[#10b981]">
                    <div className="p-5 bg-emerald-50 border-x-4 border-emerald-600 rounded-3xl relative overflow-hidden group">
                        <History className="absolute top-0 right-0 p-2 opacity-10 text-emerald-600" size={40} />
                        <h4 className="font-black text-emerald-700 flex items-center gap-2 uppercase text-xs mb-4">
                            Origin Story
                        </h4>
                        <p className="text-sm font-black text-slate-900 leading-relaxed italic mb-4">
                            Added in 1985 to stop <span className="text-xl text-emerald-600 underline">Aaya Ram Gaya Ram</span> politics. [PYQ]
                        </p>
                        <ul className="text-[10px] font-black italic space-y-2">
                            <li className="flex items-center gap-2">
                                <BadgeCheck size={14} className="text-emerald-600" /> Applicable to Parliament.
                            </li>
                            <li className="flex items-center gap-2">
                                <BadgeCheck size={14} className="text-emerald-600" /> Applicable to State Legislatures.
                            </li>
                        </ul>
                    </div>
                </ChainCard>

                <ChainCard title="Grounds for Displacement" color="border-slate-900">
                    <div className="p-6 bg-slate-900 text-white rounded-[2rem] relative shadow-xl space-y-4">
                        <AlertTriangle className="text-emerald-400" size={24} />
                        <h4 className="text-xs font-black uppercase text-emerald-300 mb-2 font-sans underline">Disqualification Triggered If:</h4>
                        <div className="space-y-3">
                            <div className="p-3 bg-white/10 rounded-2xl border border-white/20">
                                <p className="text-[10px] font-black uppercase text-emerald-100">Voluntary Resignation: [PYQ]</p>
                                <p className="text-[10px] font-bold italic opacity-80 mt-1">Gives up membership of his political party voluntarily.</p>
                            </div>
                            <div className="p-3 bg-white/10 rounded-2xl border border-white/20">
                                <p className="text-[10px] font-black uppercase text-emerald-100">Defying the Whip: [PYQ]</p>
                                <p className="text-[10px] font-bold italic opacity-80 mt-1">Votes or abstains against party direction without condonation (within 15 days).</p>
                            </div>
                        </div>
                    </div>
                </ChainCard>
            </div>

            {/* PHASE 2: INDEPENDENTS & NOMINEES */}
            <PhaseHeader number="2" title="Independents & Nominees (The Trap)" color="bg-emerald-900" />

            <div className="relative p-8 bg-emerald-50 border-4 border border-emerald-900 border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 group-hover:opacity-20 transition-opacity"><Target size={150} /></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
                    <h4 className="text-xl font-black text-emerald-950 italic underline decoration-emerald-400 decoration-8 underline-offset-4">
                        Specific High-Yield Rules [PYQ]
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 bg-white border-2 border-emerald-900 rounded-3xl shadow-sm relative group hover:scale-105 transition-transform">
                            <Badge className="absolute -top-3 left-4 bg-emerald-600">INDEPENDENTS</Badge>
                            <p className="text-xs font-black italic text-slate-600 leading-relaxed mt-2">
                                DQ if he <span className="text-emerald-600 underline">JOINS</span> any political party after election. [PYQ]
                            </p>
                        </div>
                        <div className="p-6 bg-white border-2 border-slate-900 rounded-3xl shadow-sm relative group hover:scale-105 transition-transform">
                            <Badge className="absolute -top-3 left-4 bg-slate-900">NOMINATED</Badge>
                            <p className="text-xs font-black italic text-slate-600 leading-relaxed mt-2">
                                DQ if he joins a party <span className="text-emerald-600 underline">AFTER 6 MONTHS</span> of taking seat. [PYQ]
                            </p>
                            <p className="text-[8px] font-bold text-slate-400 mt-2 italic shadow-sm">Allowed if joined within 6 months.</p>
                        </div>
                    </div>
                    <div className="inline-block p-4 bg-emerald-900 text-white rounded-2xl shadow-lg rotate-1">
                        <div className="flex items-center gap-3">
                            <Lock size={20} className="text-emerald-400" />
                            <p className="text-xs font-bold italic tracking-wider">PRESIDING OFFICER DECIDES: [PYQ]</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: EXCEPTIONS & REVIEW */}
            <PhaseHeader number="3" title="Exceptions & Judicial Review" color="bg-slate-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <ChainCard title="The Merger (91st AA)" color="border-emerald-600">
                    <div className="p-5 bg-emerald-100/50 border-2 border-emerald-200 rounded-3xl relative overflow-hidden group">
                        <Shield size={32} className="absolute top-2 right-2 text-emerald-600 opacity-20" />
                        <h4 className="text-sm font-black text-emerald-700 italic mb-4">Safe Passage</h4>
                        <p className="text-xs font-bold leading-relaxed mb-4">
                            No DQ if <span className="text-emerald-700 underline font-black">2/3rd members</span> of a party agree to a merger. [PYQ]
                        </p>
                        <div className="p-3 bg-white rounded-xl border-2 border-emerald-600 shadow-sm relative">
                            <div className="absolute top-0 right-0 bg-red-600 text-white p-1 text-[8px] font-black rotate-12">DELETED</div>
                            <p className="text-[10px] font-black italic">The "Split" provision (1/3rd) was removed by the 91st AA (2003). [PYQ]</p>
                        </div>
                    </div>
                </ChainCard>

                <ChainCard title="Kihoto Hollohan (1992)" color="border-[#b91c1c]">
                    <div className="p-5 bg-red-50 border-4 border-double border-red-600 rounded-3xl relative shadow-xl overflow-hidden group">
                        <Gavel className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity" size={150} />
                        <h4 className="text-sm font-black text-red-700 mb-4 italic underline decoration-red-200 decoration-4">The Verdict [PYQ]</h4>
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-700 leading-relaxed italic">
                                SC UPHELD the law but declared that the Presiding Officer's decision is subject to <span className="text-red-700 underline font-black">JUDICIAL REVIEW</span>.
                            </p>
                            <div className="p-3 bg-white rounded-xl border border-red-200 text-center">
                                <p className="text-[10px] font-black italic text-red-900">Acting as a Tribunal while deciding DQ. [PYQ]</p>
                            </div>
                        </div>
                    </div>
                </ChainCard>
            </div>

            {/* FOOTER: THE PILLAR */}
            <div className="mt-8 p-10 bg-slate-900 border-4 border border-emerald-950 rounded-[3rem] relative overflow-hidden shadow-2xl group">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-30 transition-opacity"><Zap size={150} className="text-white" /></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="p-8 bg-white text-emerald-900 rounded-[2.5rem] border-4 border-emerald-400 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] rotate-3 group-hover:rotate-0 transition-transform">
                        <ShieldCheck size={64} />
                    </div>
                    <div className="space-y-4 text-white">
                        <h4 className="text-3xl font-black italic text-emerald-400 underline decoration-white decoration-4 underline-offset-8 mb-4">
                            Political Integrity
                        </h4>
                        <p className="text-lg font-bold opacity-90 italic leading-relaxed max-w-xl">
                            The 10th Schedule is the <span className="bg-emerald-400 text-slate-900 px-2 rounded font-black italic shadow-inner">Stability Anchor</span> of our democracy. It ensures that the party system remains the primary vehicle of public mandate.
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-emerald-800 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#10b981] hover:bg-emerald-800 text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STAUNCH LOYALTY MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Link size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center">Tenth Schedule • 52nd Amendment • Political Stability.</p>
            </div>
        </ScrapbookContainer>
    );
}
