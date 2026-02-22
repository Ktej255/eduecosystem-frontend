"use client";

import React from "react";
import {
    Languages, BookOpen, Scroll, Info,
    BadgeCheck, UserCheck, SearchCheck,
    FileText, Landmark, ArrowBigUpDash,
    History, MessageSquare, AlertTriangle,
    Globe, Scale, Gavel, Mic, Book,
    Stamp, Quote, Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OfficialLanguageModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff4f4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-rose-100 selection:text-rose-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-card rounded-3xl p-6 shadow-2xl border-4 border-rose-900 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#e11d48] opacity-10"></div>
            {children}
        </div>
    </div>
);

const ScriptCard = ({ title, children, color = "border-rose-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(225,29,72,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Stamp size={80} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-full shadow-xl flex items-center justify-center font-black text-xl rotate-12 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function OfficialLanguageModule({ onComplete, isCompleted, chapterNumber = "61" }: OfficialLanguageModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#e11d48] border-4 border-rose-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(225,29,72,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#fbbf24] text-rose-900 px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-rose-100 font-bold uppercase tracking-widest text-sm italic">Unity in Diversity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Official <br /> Language <br />
                        <span className="text-[#fbbf24] drop-shadow-md underline decoration-wavy decoration-white">The Royal Seal</span>
                    </h1>
                    <p className="text-xl text-rose-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Scripting the nation's identity. Part XVII balances the pride of Hindi with the practicality of English and the richness of regional tongues."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 -rotate-12 translate-y-1/4">
                    <Languages size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: UNION LANGUAGE */}
            <PhaseHeader number="1" title="Language of the Union (The Core)" color="bg-[#e11d48]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ScriptCard title="The Constitutional Choice" color="border-[#e11d48]">
                    <div className="p-5 bg-rose-50 border-x-4 border-rose-600 rounded-3xl relative overflow-hidden group">
                        <Quote className="absolute top-0 left-0 p-2 opacity-10 text-rose-600" size={40} />
                        <h4 className="font-black text-rose-700 flex items-center gap-2 uppercase text-xs mb-4">
                            <Landmark size={18} /> Art 343: The Union
                        </h4>
                        <p className="text-sm font-black text-foreground leading-relaxed italic mb-4">
                            Official language of the Union shall be <span className="text-xl text-rose-600 underline">Hindi</span> in <span className="underline decoration-rose-300">Devanagari script</span>. [PYQ]
                        </p>
                        <div className="p-3 bg-card border-2 border-rose-200 rounded-xl">
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Numerals:</p>
                            <p className="text-xs font-black italic">International form of Indian numerals (1, 2, 3...). NOT Devnagari numerals.</p>
                        </div>
                    </div>
                </ScriptCard>

                <ScriptCard title="The English Extension" color="border-slate-900">
                    <div className="p-5 bg-slate-900 text-white rounded-[2rem] relative shadow-xl space-y-4">
                        <div className="flex items-center gap-3">
                            <History className="text-rose-400" size={24} />
                            <p className="text-xs font-black uppercase tracking-widest">Initial Plan (1950):</p>
                        </div>
                        <p className="text-xs font-bold leading-relaxed opacity-80 italic italic">
                            English to continue for <span className="text-rose-400 text-lg">15 Years</span> (till 1965).
                        </p>
                        <div className="p-4 bg-card/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                            <h5 className="text-[10px] font-black uppercase text-rose-300 mb-2">The Reality: [PYQ]</h5>
                            <p className="text-[11px] font-black text-yellow-500 italic">
                                Official Languages Act (1963) allowed English to continue <span className="underline decoration-white">Indefinitely</span>.
                            </p>
                        </div>
                    </div>
                </ScriptCard>
            </div>

            {/* PHASE 2: REGIONAL & JUDICIARY */}
            <PhaseHeader number="2" title="Regional & Judicial (The Reach)" color="bg-[#fbbf24]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ScriptCard title="Regional Languages" color="border-[#fbbf24]">
                    <div className="space-y-4">
                        <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-200">
                            <p className="text-[10px] font-black uppercase text-amber-600 mb-2">State Choice:</p>
                            <p className="text-xs font-bold italic leading-relaxed">
                                State Legislatures can adopt <span className="underline">any one or more</span> languages or Hindi as official.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-muted p-4 rounded-2xl border border-border relative">
                            <div className="absolute top-1 right-2 bg-rose-600 text-white p-1 text-[8px] font-black rotate-12">TRAP</div>
                            <Globe size={32} className="text-blue-500" />
                            <div>
                                <p className="text-[10px] font-black uppercase">Link Language:</p>
                                <p className="text-xs font-bold italic">English remains the language for communication between Union and States. [PYQ]</p>
                            </div>
                        </div>
                    </div>
                </ScriptCard>

                <ScriptCard title="Judiciary & Bills" color="border-[#e11d48]">
                    <div className="p-5 bg-rose-900 text-white rounded-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-card opacity-5 pointer-events-none"></div>
                        <h4 className="text-sm font-black text-rose-300 italic mb-4 flex items-center gap-2">
                            <Gavel size={20} /> Supreme Court & HC
                        </h4>
                        <div className="space-y-3">
                            <div className="p-3 bg-card/10 rounded-xl border border-white/10">
                                <p className="text-[10px] font-black uppercase text-amber-400">Default:</p>
                                <p className="text-xs font-bold italic tracking-wide">Must be in <span className="text-lg">English</span> until Parliament provides otherwise. [PYQ]</p>
                            </div>
                            <div className="p-3 bg-slate-950/50 rounded-xl">
                                <p className="text-[8px] font-black uppercase text-muted-foreground">Governor's Power:</p>
                                <p className="text-[10px] font-bold italic">Can authorize Hindi/Regional for HC proceedings with <span className="text-rose-400">President's Consent</span>. (Judgments remain in English).</p>
                            </div>
                        </div>
                    </div>
                </ScriptCard>
            </div>

            {/* PHASE 3: SPECIAL DIRECTIVES */}
            <PhaseHeader number="3" title="Special Directives (The Protection)" color="bg-slate-900" />

            <div className="grid md:grid-cols-1 gap-8">
                <ScriptCard title="Constitutional Safeguards" color="border-slate-900" className="bg-muted">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-card border-2 border-rose-600 rounded-[2rem] shadow-sm transform -rotate-1 relative overflow-hidden">
                            <div className="absolute -top-2 -right-2 p-1 bg-yellow-400 text-[8px] font-black rotate-12">IMP</div>
                            <Mic size={24} className="text-rose-600 mb-2" />
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Art 350:</p>
                            <p className="text-xs font-bold italic">Right to submit representation for grievances in <span className="underline">any</span> language used in the Union/State.</p>
                        </div>
                        <div className="p-5 bg-card border-2 border-rose-600 rounded-[2rem] shadow-sm transform rotate-1">
                            <Book size={24} className="text-rose-600 mb-2" />
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Art 350-A:</p>
                            <p className="text-xs font-bold italic">Facilities for instruction in <span className="text-rose-600">Mother Tongue</span> at primary stage. [PYQ]</p>
                        </div>
                        <div className="p-5 bg-card border-2 border-rose-600 rounded-[2rem] shadow-sm transform -rotate-2 relative">
                            <div className="absolute -top-2 -right-2 border-2 border-rose-600 rounded-full bg-card p-1"><UserCheck size={16} className="text-rose-600" /></div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Art 350-B:</p>
                            <p className="text-xs font-bold italic">Special Officer for Linguistic Minorities (Appointed by President). [PYQ]</p>
                        </div>
                    </div>
                </ScriptCard>
            </div>

            {/* FOOTER: CLASSICAL LANGUAGES */}
            <div className="mt-8 p-8 bg-slate-900 text-white border-4 border-rose-950 rounded-[3rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
                    <Sparkles size={150} />
                </div>
                <div className="relative z-10">
                    <h4 className="text-2xl font-black italic text-[#fbbf24] flex items-center gap-4 mb-6 underline decoration-rose-600 decoration-4 underline-offset-8">
                        <Stamp size={32} /> Classical Languages [HY]
                    </h4>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <p className="text-sm font-bold opacity-80 italic leading-relaxed">
                                Criteria: High antiquity (1500–2000 years), valuable heritage, and original literary tradition.
                            </p>
                            <div className="p-4 bg-card/5 rounded-2xl border border-white/20">
                                <p className="text-[10px] font-black uppercase text-rose-300 mb-2">First to be Declared:</p>
                                <p className="text-lg font-black text-white italic">TAMIL (2004) <span className="text-sm opacity-50 font-normal">[PYQ]</span></p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            {[
                                "Tamil (2004)", "Sanskrit (2005)",
                                "Telugu (2008)", "Kannada (2008)",
                                "Malayalam (2013)", "Odia (2014)"
                            ].map((lang, i) => (
                                <div key={i} className="p-2 border border-white/10 rounded-xl bg-card/5 hover:bg-rose-600 transition-colors">
                                    <p className="text-[10px] font-black italic">{lang}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-rose-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#e11d48] hover:bg-rose-800 text-white shadow-[0_10px_40px_-10px_rgba(225,29,72,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            ROYAL SEAL MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Languages size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center">Art 351: Developing Hindi as a Medium of Expression.</p>
            </div>
        </ScrapbookContainer>
    );
}
