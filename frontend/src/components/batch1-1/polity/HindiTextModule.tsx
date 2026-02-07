"use client";

import React from "react";
import {
    FileText, Scroll, ScrollText, Landmark,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, History,
    MessageSquare, AlertTriangle, UserPlus,
    Stamp, Quote, Languages, PencilLine,
    CheckCircle2, Scale, Book
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HindiTextModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#ecfeff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-cyan-100 selection:text-cyan-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-white rounded-3xl p-6 shadow-2xl border-4 border-cyan-800 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#0891b2] opacity-30"></div>
            {children}
        </div>
    </div>
);

const ScriptCard = ({ title, children, color = "border-cyan-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(8,145,178,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <PencilLine size={64} className={color.replace('border-', 'text-')} />
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

export default function HindiTextModule({ onComplete, isCompleted }: HindiTextModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#0891b2] border-4 border-cyan-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(8,145,178,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#155e75] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 65</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-cyan-50 font-bold uppercase tracking-widest text-sm italic">The Voice of the People</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Authoritative <br /> Text in Hindi <br />
                        <span className="text-cyan-100 drop-shadow-md underline decoration-wavy decoration-white">The Vernacular Script</span>
                    </h1>
                    <p className="text-xl text-cyan-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Bridging the linguistic gap. Part XXII ensures that the Constitution's mandate reaches every citizen in the national language with legal authority."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <ScrollText size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE 58th AMENDMENT */}
            <PhaseHeader number="1" title="The 58th Amendment (1987)" color="bg-[#0891b2]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ScriptCard title="The New Article" color="border-[#0891b2]">
                    <div className="p-5 bg-cyan-50 border-x-4 border-cyan-600 rounded-3xl relative overflow-hidden group">
                        <History className="absolute top-0 right-0 p-2 opacity-10 text-cyan-600" size={40} />
                        <h4 className="font-black text-cyan-700 flex items-center gap-2 uppercase text-xs mb-4">
                            Added Art 394-A [PYQ]
                        </h4>
                        <p className="text-sm font-black text-slate-900 leading-relaxed italic mb-4">
                            Originally, the Constitution did not provide for an <span className="text-xl text-cyan-600 underline">Authoritative Hindi Text</span>.
                        </p>
                        <div className="p-3 bg-white border-2 border-cyan-200 rounded-xl">
                            <p className="text-[10px] font-black uppercase text-slate-400">Year of Act:</p>
                            <p className="text-xs font-black italic">1987. It gave the President the power to publish the translation.</p>
                        </div>
                    </div>
                </ScriptCard>

                <ScriptCard title="The President's Power" color="border-slate-900">
                    <div className="p-6 bg-slate-900 text-white rounded-[2.5rem] relative shadow-xl space-y-4">
                        <Stamp className="text-cyan-400" size={24} />
                        <h4 className="text-xs font-black uppercase text-cyan-300 mb-2">President to Publish:</h4>
                        <ul className="text-[10px] font-bold italic opacity-80 space-y-2">
                            <li className="flex items-start gap-2">
                                <BadgeCheck size={14} className="text-cyan-500 mt-0.5" />
                                <span>Translation of the Constitution in Hindi, signed by members of CA.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BadgeCheck size={14} className="text-cyan-500 mt-0.5" />
                                <span>Translation of every amendment of the Constitution in Hindi. [PYQ]</span>
                            </li>
                        </ul>
                    </div>
                </ScriptCard>
            </div>

            {/* PHASE 2: AUTHORITY & VALIDITY */}
            <PhaseHeader number="2" title="Authority & Validity (The Seal)" color="bg-cyan-900" />

            <div className="relative p-8 bg-cyan-50 border-4 border-cyan-900 border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h4 className="text-xl font-black text-cyan-950 italic">Legal Weight of the Hindi Text</h4>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-5 bg-white border-2 border-cyan-900 rounded-3xl relative group hover:scale-105 transition-transform">
                            <div className="absolute top-0 right-0 bg-cyan-900 text-white p-2 text-[8px] font-black rounded-bl-xl">MANDATORY</div>
                            <p className="text-xs font-black italic text-slate-600">
                                The translation must conform to the <span className="underline decoration-cyan-300">original style and terminology</span> used in the English text.
                            </p>
                        </div>
                        <div className="p-5 bg-white border-2 border-cyan-900 rounded-3xl relative group hover:scale-105 transition-transform">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 p-2 text-[8px] font-black rounded-bl-xl">HIGH YIELD</div>
                            <p className="text-xs font-black italic text-slate-600">
                                Authoritative Text in Hindi shall be deemed to be, for all purposes, the <span className="text-cyan-600 uppercase">Authoritative Text</span> thereof. [PYQ]
                            </p>
                        </div>
                    </div>
                    <div className="p-4 bg-cyan-900 text-white rounded-2xl inline-block mt-4">
                        <p className="text-[10px] font-black uppercase tracking-widest">Discrepancy Rule:</p>
                        <p className="text-xs font-bold italic">If any difficulty arises in interpretation, President shall cause the text to be revised. [TRAP]</p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE CONSTITUTIONAL MAP */}
            <PhaseHeader number="3" title="Part XXII Summary" color="bg-slate-900" />

            <div className="grid md:grid-cols-1 gap-8">
                <ScriptCard title="Miscellaneous Provisions" color="border-slate-950" className="bg-slate-50">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-white border-2 border-cyan-800 rounded-3xl shadow-sm relative overflow-hidden group">
                            <Languages className="text-cyan-800 mb-2" size={24} />
                            <h4 className="text-[10px] font-black uppercase text-slate-400">Short Title:</h4>
                            <p className="text-[10px] font-black italic">Constitution of India (Art 393).</p>
                        </div>
                        <div className="p-5 bg-white border-2 border-cyan-800 rounded-3xl shadow-sm relative overflow-hidden group">
                            <History className="text-cyan-800 mb-2" size={24} />
                            <h4 className="text-[10px] font-black uppercase text-slate-400">Commencement:</h4>
                            <p className="text-[10px] font-black italic">Jan 26, 1950 (Art 394). Some articles applied on Nov 26, 1949.</p>
                        </div>
                        <div className="p-5 bg-white border-2 border-cyan-800 rounded-3xl shadow-sm relative overflow-hidden group text-red-600">
                            <FileText className="text-red-400 mb-2" size={24} />
                            <h4 className="text-[10px] font-black uppercase text-slate-400">Repeals:</h4>
                            <p className="text-[10px] font-black italic">Indian Independence Act 1947 & Govt of India Act 1935 were repealed. [PYQ]</p>
                        </div>
                    </div>
                </ScriptCard>
            </div>

            {/* FOOTER: IDENTITY */}
            <div className="mt-8 p-8 bg-slate-900 text-white border-4 border-slate-950 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Book size={150} /></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-black italic text-cyan-400 flex items-center gap-4 mb-6 underline decoration-white decoration-4 underline-offset-8">
                            Linguistic Integration
                        </h4>
                        <p className="text-sm font-bold opacity-80 italic leading-relaxed">
                            The constitutional mandate for a Hindi version ensures that the <span className="text-cyan-400">Supreme Lex</span> is accessible to the largest linguistic group in India, fulfilling the vision of Article 351.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-sm text-center">
                        <div className="text-4xl font-black text-cyan-400">Art 394-A</div>
                        <p className="text-[10px] font-black uppercase tracking-widest mt-2">The Authoritative Seal</p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-cyan-800 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#0891b2] hover:bg-cyan-800 text-white shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            VERNACULAR SCRIPT MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <ScrollText size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 65 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center">Unity through Language • Legal Authority.</p>
            </div>
        </ScrapbookContainer>
    );
}
