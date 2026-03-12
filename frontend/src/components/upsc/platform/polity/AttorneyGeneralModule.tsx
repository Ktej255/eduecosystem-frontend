"use client";

import React from "react";
import {
    ShieldCheck, Scale, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, MessageSquare, Mic2,
    Users, Briefcase, UserPlus,
    ShieldCheck as Shield, Scale as LawScale, Briefcase as Robe,
    Gavel as JudgeGavel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AttorneyGeneralModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fafafa] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-black selection:text-white">
        <div className="max-w-5xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card rounded-3xl p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#854d0e] opacity-30"></div>
            {children}
        </div>
    </div>
);

const LegalCard = ({ title, children, color = "border-slate-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
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
        <div className={`w-12 h-12 bg-black text-white rounded shadow-xl flex items-center justify-center font-black text-xl rotate-3`}>
            {number}
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
            {title}
        </h2>
        <div className="h-[2px] flex-1 bg-slate-900 opacity-10"></div>
    </div>
);

export default function AttorneyGeneralModule({ onComplete, isCompleted, chapterNumber = "53" }: AttorneyGeneralModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#18181b] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#854d0e] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm italic">The Highest Law Officer</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Attorney General <br /> of India <br />
                        <span className="text-[#854d0e] drop-shadow-md underline decoration-wavy decoration-white">The First Lawyer</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed italic opacity-90">
                        "The advocate in the silk robe. Article 76 provides for the voice of the Union in the courts of justice."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Robe size={200} />
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT */}
            <PhaseHeader number="1" title="Appointment & Qualification (The Entry)" color="bg-black" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Article 76 (The Source)" color="border-[#854d0e]">
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border-2 border-[#854d0e] rounded-xl transform rotate-1">
                            <h4 className="font-black text-[#854d0e] flex items-center gap-2 uppercase text-xs mb-2">
                                <Landmark size={18} /> Appointed By:
                            </h4>
                            <p className="text-lg font-black text-foreground underline decoration-slate-300 underline-offset-4">THE PRESIDENT</p>
                        </div>
                        <div className="p-4 bg-card border-2 border-slate-900 rounded-xl relative">
                            <h4 className="font-black text-foreground mb-2 italic">Qualification: [PYQ]</h4>
                            <p className="text-xs font-bold leading-relaxed">
                                Must be qualified to be a <span className="text-[#854d0e] font-black underline">Judge of the Supreme Court</span>.
                            </p>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="p-2 bg-muted border rounded text-[8px] font-black uppercase tracking-tighter">5y HC Judge</div>
                                <div className="p-2 bg-muted border rounded text-[8px] font-black uppercase tracking-tighter">10y HC Advocate</div>
                            </div>
                        </div>
                    </div>
                </LegalCard>

                <LegalCard title="The Pleasure Principle" color="border-slate-400">
                    <div className="p-5 bg-slate-900 text-white rounded-2xl relative shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                        <Badge className="absolute -top-3 right-4 bg-red-600">NO FIXED TERM</Badge>
                        <h4 className="text-lg font-black italic text-[#854d0e] mb-4">During the "Pleasure"</h4>
                        <p className="text-xs font-bold text-slate-300 leading-relaxed italic mb-4">
                            He holds office during the pleasure of the President. He can be removed by the President at any time. [PYQ]
                        </p>
                        <div className="p-3 bg-card/10 rounded-xl border border-white/20">
                            <p className="text-[10px] uppercase font-black text-[#854d0e]">Convention:</p>
                            <p className="text-[10px] font-bold mt-1 text-slate-200">Resigns when the Govt (Council of Ministers) resigns.</p>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* PHASE 2: RIGHTS */}
            <PhaseHeader number="2" title="Rights & Duties (The Privileges)" color="bg-black" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Privileges & Rights" color="border-slate-900">
                    <div className="space-y-3">
                        {[
                            { icon: Landmark, t: "Right of Audience", d: "In all courts in the territory of India. [PYQ]" },
                            { icon: MessageSquare, t: "Art 88: Parliamentary Right", d: "Right to speak and take part in proceedings of both Houses. [HIGH YIELD]" },
                            { icon: ShieldCheck, t: "MP Privileges", d: "Enjoys all privileges and immunities available to an MP." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-muted rounded-2xl border border-slate-100 group hover:bg-black hover:text-white transition-all">
                                <div className="p-2 bg-card rounded-xl shadow-sm group-hover:bg-[#854d0e] transition-colors">
                                    <item.icon size={20} className="text-foreground group-hover:text-white" />
                                </div>
                                <div className="self-center">
                                    <p className="text-[10px] font-black uppercase tracking-widest">{item.t}</p>
                                    <p className="text-xs font-bold italic opacity-80">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border-4 border-double border-red-600 rounded-xl text-center">
                        <p className="text-xs font-black text-red-700 uppercase leading-none">Limit: Right to take part but <span className="underline decoration-red-950">NOT TO VOTE</span>. [PYQ]</p>
                    </div>
                </LegalCard>

                <LegalCard title="Duties (The Advocate)" color="border-[#854d0e]">
                    <div className="space-y-4">
                        <div className="p-4 bg-card border-2 border-slate-900 rounded-xl shadow-md">
                            <h4 className="flex items-center gap-2 font-black text-foreground mb-3 underline decoration-[#854d0e]">
                                <Gavel size={20} /> Legal Advisor
                            </h4>
                            <p className="text-[11px] font-bold text-muted-foreground leading-relaxed italic">
                                To give advice to the Govt on legal matters referred by the <span className="text-black font-black">President</span>.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="p-3 bg-yellow-50 border-l-4 border-[#854d0e] rounded">
                                <p className="text-[10px] font-black text-[#854d0e] mb-1">SC REPRESENTATION:</p>
                                <p className="text-xs font-bold italic">Perform duties as assigned by President (Art 143 cases, representing GOI).</p>
                            </div>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* PHASE 3: BOUNDARIES */}
            <PhaseHeader number="3" title="Case Logic (The Boundaries)" color="bg-black" />

            <div className="grid md:grid-cols-1 gap-8">
                <LegalCard title="Limitations & Solicitor General" color="border-slate-900" className="bg-muted">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h5 className="font-black text-red-600 uppercase text-xs flex items-center gap-2">
                                <ShieldAlert size={16} /> Limitations [PYQ]
                            </h5>
                            <ul className="space-y-2 text-[11px] font-bold italic text-muted-foreground">
                                <li className="flex gap-2"><span>-</span> Should not advise/hold brief against GOI.</li>
                                <li className="flex gap-2"><span>-</span> Should not defend accused in criminal cases without <span className="underline decoration-red-400">permission</span> of GOI.</li>
                                <li className="flex gap-2 text-foreground"><span>-</span> <span className="font-black">Note:</span> Not a Government Servant. Can do private practice.</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-card border-2 border-slate-900 rounded-3xl relative">
                            <h5 className="font-black text-[#854d0e] uppercase text-xs mb-3 italic">The Support Cast:</h5>
                            <p className="text-xs font-bold leading-relaxed italic mb-4">
                                SG and Additional SGs assist the AG. They are <span className="text-red-600 underline decoration-dotted">NOT</span> constitutional officers (Statutory/Executive). [Trap]
                            </p>
                            <div className="flex gap-4">
                                <Badge className="bg-slate-900">AG</Badge>
                                <ArrowBigUpDash className="rotate-270 text-muted-foreground" />
                                <Badge className="bg-slate-200 text-muted-foreground">SG</Badge>
                            </div>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-slate-900 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-black hover:bg-slate-800 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            FIRST LAW OFFICER MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <LawScale size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-black italic">Article 76: The Silk Robe of the Union.</p>
            </div>
        </ScrapbookContainer>
    );
}

const HandwrittenCard = ({ title, children, color = "border-slate-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-medium">
            {children}
        </div>
    </div>
);
