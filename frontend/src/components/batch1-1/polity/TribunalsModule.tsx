"use client";

import React from "react";
import {
    Gavel, Scale, Hammer, Landmark,
    Info, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, History,
    MessageSquare, AlertTriangle, UserPlus,
    Subtitles, Target, Zap, Activity,
    ArrowRightCircle, CheckCircle2, Maximize2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TribunalsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f5f3ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-indigo-100 selection:text-indigo-900">
        <div className="max-w-5xl mx-auto space-y-12 bg-white rounded-3xl p-6 shadow-2xl border-4 border-indigo-900 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#4f46e5] opacity-30"></div>
            {children}
        </div>
    </div>
);

const JusticeCard = ({ title, children, color = "border-indigo-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(79,70,229,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Maximize2 size={64} className={color.replace('border-', 'text-')} />
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
        <div className={`w-12 h-12 ${color} text-white rounded-xl shadow-xl flex items-center justify-center font-black text-xl -rotate-6 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function TribunalsModule({ onComplete, isCompleted, chapterNumber = "36" }: TribunalsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#4f46e5] border-4 border-indigo-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(79,70,229,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#3730a3] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-indigo-100 font-bold uppercase tracking-widest text-sm italic">Quasi-Judicial Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Tribunals <br />
                        <span className="text-[#fbbf24] drop-shadow-md underline decoration-wavy decoration-white">The Parallel Gavel</span>
                    </h1>
                    <p className="text-xl text-indigo-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Specialized justice for a complex nation. Part XIV-A reduces judicial burden through expert-led adjudication of administrative and other matters."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Gavel size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE 42nd AMENDMENT */}
            <PhaseHeader number="1" title="The 42nd Amendment (1976)" color="bg-[#4f46e5]" />

            <div className="grid md:grid-cols-2 gap-8">
                <JusticeCard title="Part XIV-A" color="border-[#4f46e5]">
                    <div className="p-5 bg-indigo-50 border-x-4 border-indigo-600 rounded-3xl relative overflow-hidden group">
                        <History className="absolute top-0 right-0 p-2 opacity-10 text-indigo-600" size={40} />
                        <h4 className="font-black text-indigo-700 flex items-center gap-2 uppercase text-xs mb-4">
                            Mini-Constitution Legacy
                        </h4>
                        <p className="text-sm font-black text-slate-900 leading-relaxed italic mb-4">
                            Tribunals were <span className="text-xl text-indigo-600 underline">NOT</span> in the original Constitution. They were added by the 42nd Amendment. [PYQ]
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 bg-white border rounded text-[10px] font-black text-center">Art 323-A</div>
                            <div className="p-2 bg-white border rounded text-[10px] font-black text-center">Art 323-B</div>
                        </div>
                    </div>
                </JusticeCard>

                <JusticeCard title="Swaran Singh Recommendation" color="border-slate-900">
                    <div className="p-5 bg-slate-900 text-white rounded-3xl relative shadow-xl transform rotate-1">
                        <Target className="text-yellow-400 mb-2" size={24} />
                        <h4 className="text-xs font-black uppercase text-indigo-300 mb-2">The Purpose:</h4>
                        <p className="text-xs font-black leading-relaxed italic opacity-80">
                            To resolve disputes involving public services and other matters with <span className="text-yellow-400">expertise</span> and <span className="text-yellow-400">speed</span>.
                        </p>
                        <hr className="my-4 opacity-10" />
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-green-400" size={16} />
                            <p className="text-[10px] font-bold">Bypassing the hierarchy for efficiency.</p>
                        </div>
                    </div>
                </JusticeCard>
            </div>

            {/* PHASE 2: ADMINISTRATIVE TRIBUNALS */}
            <PhaseHeader number="2" title="Administrative Tribunals (Art 323-A)" color="bg-[#4338ca]" />

            <div className="relative p-8 bg-indigo-50 border-4 border-indigo-900 rounded-[3rem] shadow-2xl overflow-hidden text-center">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Landmark size={150} /></div>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h4 className="text-xl font-black text-indigo-900 italic underline decoration-indigo-200 decoration-8 underline-offset-4">
                        Exclusively for Public Service Matters [PYQ]
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 bg-white border-2 border-indigo-900 rounded-3xl shadow-sm relative group hover:scale-105 transition-transform">
                            <Badge className="absolute -top-3 left-4 bg-indigo-600">CENTRE (CAT)</Badge>
                            <p className="text-xs font-black italic text-slate-600 mb-4">
                                Established by Parliament (1985). Jurisdiction over All-India, Central Civil Services, etc.
                            </p>
                            <div className="p-3 bg-indigo-50 rounded-xl">
                                <p className="text-[10px] font-black uppercase text-indigo-400">Chairperson:</p>
                                <p className="text-[10px] font-bold">Judge of HC (or former). Apptd by President.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white border-2 border-indigo-900 rounded-3xl shadow-sm relative group hover:scale-105 transition-transform">
                            <Badge className="absolute -top-3 left-4 bg-indigo-900">STATE (SAT)</Badge>
                            <p className="text-xs font-black italic text-slate-600 mb-4">
                                Established by Parliament on <span className="underline decoration-indigo-200">State Government request</span>.
                            </p>
                            <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
                                <p className="text-[8px] font-black uppercase text-slate-400">Special Note:</p>
                                <p className="text-[10px] font-bold">Joint Administrative Tribunals (JAT) can also be formed for 2+ states. [PYQ]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: COMPARISON & JUDICIAL REVIEW */}
            <PhaseHeader number="3" title="Review & Comparison (The Verdict)" color="bg-slate-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <JusticeCard title="323-A vs 323-B" color="border-indigo-600">
                    <div className="space-y-3">
                        <div className="p-3 bg-indigo-50 border-l-4 border-indigo-600 rounded">
                            <h5 className="text-[10px] font-black uppercase text-indigo-700">Art 323-A:</h5>
                            <p className="text-[10px] font-bold italic">Only by <span className="underline">Parliament</span>. Only for <span className="underline">Public Services</span>.</p>
                        </div>
                        <div className="p-3 bg-slate-50 border-l-4 border-slate-900 rounded">
                            <h5 className="text-[10px] font-black uppercase text-slate-700">Art 323-B:</h5>
                            <p className="text-[10px] font-bold italic">By <span className="underline">Parliament OR State Legislature</span>. For Taxation, Land Reforms, Elections, etc. [PYQ]</p>
                        </div>
                    </div>
                </JusticeCard>

                <JusticeCard title="L. Chandra Kumar Case (1997)" color="border-[#b91c1c]">
                    <div className="p-5 bg-red-50 border-4 border border-red-600 rounded-3xl relative shadow-xl overflow-hidden group">
                        <ShieldAlert className="absolute top-2 right-2 text-red-600 opacity-20" size={32} />
                        <h4 className="text-sm font-black text-red-700 italic mb-4">THE GAME CHANGER [PYQ]</h4>
                        <p className="text-xs font-bold leading-relaxed mb-4">
                            SC declared that Judicial Review is a <span className="text-red-700 underline font-black">Basic Structure</span>.
                        </p>
                        <div className="p-4 bg-white rounded-2xl border-2 border-red-600 shadow-sm relative">
                            <div className="absolute top-0 right-0 bg-red-600 text-white p-1 text-[8px] font-black">NEW RULE</div>
                            <p className="text-[10px] font-black italic">
                                Appeals from CAT/SAT <span className="text-red-600">MUST go to Division Bench of High Court</span> first. NOT directly to SC.
                            </p>
                        </div>
                    </div>
                </JusticeCard>
            </div>

            {/* FOOTER: PROCEDURAL FREEDOM */}
            <div className="mt-8 p-8 bg-indigo-900 text-white border-4 border-slate-950 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 p-4 opacity-5 rotate-12"><Zap size={150} /></div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="p-6 bg-white text-indigo-900 rounded-full border-4 border-indigo-400 shadow-[0_0_50px_rgba(79,70,229,0.3)] flex-shrink-0">
                        <Scale size={48} />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-black italic text-[#fbbf24] flex items-center gap-3">
                            The Procedural Edge
                        </h4>
                        <p className="text-sm font-bold opacity-80 italic leading-relaxed">
                            Tribunals are <span className="text-yellow-400">NOT bound</span> by the procedure laid down in the Civil Procedure Code (CPC). They are guided by <span className="text-white underline decoration-yellow-400 decoration-2 underline-offset-4">Principles of Natural Justice</span>. [PYQ]
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-indigo-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#4f46e5] hover:bg-indigo-800 text-white shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            TRIBUNAL EXPERTISE MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Gavel size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 36 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center">Part XIV-A: Specialized Adjudication.</p>
            </div>
        </ScrapbookContainer>
    );
}
