"use client";

import React from "react";
import {
    ShieldCheck, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Map, Briefcase,
    Building2, Scale, MapPin,
    Users, MessageSquare, Construction, Globe, Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AdvocateGeneralModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fffcf9] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100">
        <div className="max-w-5xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/80 rounded-3xl p-6 shadow-2xl border-4 border-[#c2410c] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c2410c] opacity-10"></div>
            {children}
        </div>
    </div>
);

const RegionalCard = ({ title, children, color = "border-[#c2410c]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(194,65,12,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 bg-[#c2410c] text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl -rotate-2`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-[#c2410c]`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 bg-[#c2410c] opacity-20`}></div>
    </div>
);

export default function AdvocateGeneralModule({ onComplete, isCompleted, chapterNumber = "54" }: AdvocateGeneralModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#c2410c] border-4 border-orange-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(194,65,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#3f3f46] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm italic">The State's Law Guardian</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Advocate General <br /> of the State <br />
                        <span className="text-orange-100 drop-shadow-md underline decoration-wavy decoration-[#3f3f46]">The Regional Advocate</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic opacity-90">
                        "The Mirror of the Attorney General at the state level. Article 165 ensures that every State Government has its first law officer."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <Building2 size={200} />
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT */}
            <PhaseHeader number="1" title="Appointment & Qualification (The Mirror)" color="bg-[#c2410c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RegionalCard title="Article 165 (The State Voice)" color="border-[#c2410c]">
                    <div className="space-y-4">
                        <div className="p-4 bg-orange-50 border-2 border-[#c2410c] rounded-xl transform rotate-1 shadow-sm">
                            <h4 className="font-black text-[#c2410c] flex items-center gap-2 uppercase text-xs mb-2">
                                <MapPin size={18} /> Appointed By:
                            </h4>
                            <p className="text-lg font-black text-foreground underline decoration-[#c2410c] underline-offset-4 tracking-tight">THE GOVERNOR</p>
                        </div>
                        <div className="p-4 bg-card border-2 border-slate-900 rounded-xl relative">
                            <h4 className="font-black text-foreground mb-2 italic">Qualification Mirror: [PYQ]</h4>
                            <p className="text-xs font-bold leading-relaxed">
                                Must be qualified to be a <span className="text-[#c2410c] font-black underline">Judge of a High Court</span>.
                            </p>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="p-2 bg-muted border rounded text-[8px] font-black uppercase tracking-tighter">10y Judicial Office</div>
                                <div className="p-2 bg-muted border rounded text-[8px] font-black uppercase tracking-tighter">10y HC Advocate</div>
                            </div>
                        </div>
                    </div>
                </RegionalCard>

                <RegionalCard title="The Pleasure & Pay" color="border-[#3f3f46]">
                    <div className="p-5 bg-[#3f3f46] text-white rounded-2xl relative shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                        <Badge className="absolute -top-3 right-4 bg-orange-600">STAY AT WILL</Badge>
                        <h4 className="text-lg font-black italic text-orange-400 mb-4">Governor's Pleasure</h4>
                        <p className="text-xs font-bold text-slate-300 leading-relaxed italic mb-4">
                            No fixed term in the Constitution. Holds office during the pleasure of the Governor. [PYQ]
                        </p>
                        <div className="p-3 bg-card/10 rounded-xl border border-white/20">
                            <p className="text-[10px] uppercase font-black text-orange-400">Remuneration:</p>
                            <p className="text-[11px] font-black mt-1 text-white underline decoration-[#c2410c]">NOT FIXED by Constitution; Determined by Governor.</p>
                        </div>
                    </div>
                </RegionalCard>
            </div>

            {/* PHASE 2: RIGHTS */}
            <PhaseHeader number="2" title="Rights & Duties (State Level)" color="bg-[#c2410c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <RegionalCard title="Rights of the Advocate" color="border-slate-400">
                    <div className="space-y-3">
                        {[
                            { icon: Landmark, t: "Right of Audience", d: "In all courts within the specific State territory. [PYQ]" },
                            { icon: MessageSquare, t: "Art 177: House Rights", d: "Right to speak and take part in proceedings of State Legislature. [HIGH YIELD]" },
                            { icon: Shield, t: "Immunities", d: "Enjoys privileges and immunities of a member of State Legislature." }
                        ].map((item, i: number) => (
                            <div key={i} className="flex gap-4 p-4 bg-muted rounded-2xl border border-slate-100 group">
                                <div className="p-2 bg-card rounded-xl shadow-sm border border-[#c2410c] text-[#c2410c]">
                                    <item.icon size={20} />
                                </div>
                                <div className="self-center">
                                    <p className="text-[10px] font-black uppercase tracking-widest">{item.t}</p>
                                    <p className="text-xs font-bold italic opacity-80">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 p-4 bg-red-50 border-2 border-dashed border-red-600 rounded-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1 opacity-5"><ShieldAlert size={48} /></div>
                        <p className="text-sm font-black text-red-700 uppercase leading-none italic">
                            The Limit: <span className="underline decoration-red-950 decoration-2">NO RIGHT TO VOTE</span> in the House. [PYQ]
                        </p>
                    </div>
                </RegionalCard>

                <RegionalCard title="Duties (The State Counsel)" color="border-[#c2410c]">
                    <div className="space-y-4">
                        <div className="p-5 bg-card border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="flex items-center gap-2 font-black text-[#c2410c] mb-3">
                                <Gavel size={24} /> General Advocate
                            </h4>
                            <p className="text-[11px] font-bold text-muted-foreground leading-relaxed italic">
                                To advise the State Govt on legal matters referred by the <span className="text-[#c2410c] font-black">Governor</span>.
                            </p>
                        </div>
                        <div className="p-4 bg-orange-50 border border-[#c2410c] rounded-2xl border-dashed">
                            <h5 className="text-[10px] font-black uppercase text-[#c2410c] mb-2 flex items-center gap-2 italic">
                                <Briefcase size={14} /> Representation:
                            </h5>
                            <p className="text-xs font-bold italic leading-relaxed">
                                To appear on behalf of the Govt of the State in all cases in which the Govt is concerned.
                            </p>
                        </div>
                    </div>
                </RegionalCard>
            </div>

            {/* PHASE 3: COMPARISON */}
            <PhaseHeader number="3" title="The Comparison (Final Recap)" color="bg-[#c2410c]" />

            <div className="bg-[#3f3f46] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                    <History size={150} />
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-black italic underline decoration-[#c2410c]">AG vs Advocate General</h4>
                        <p className="text-sm font-bold opacity-80 italic leading-relaxed">
                            Think of them as mirrors across the federal divide. One for the Union (Art 76), one for the States (Art 165).
                        </p>
                        <div className="flex gap-4">
                            <Badge className="bg-[#c2410c]">Mirror Part 1</Badge>
                            <Badge className="bg-[#c2410c]">Mirror Part 2</Badge>
                        </div>
                    </div>
                    <div className="bg-card/5 border border-white/20 p-6 rounded-3xl backdrop-blur-sm">
                        <div className="space-y-4 text-[11px] font-black italic">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-orange-400">ATTORNEY GEN</span>
                                <span>ADVOCATE GEN</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Pres (Warrant)</span>
                                <span>Gov (Simple)</span>
                            </div>
                            <div className="flex justify-between text-orange-400">
                                <span>Art 76</span>
                                <span>Art 165</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Art 88 (Parl)</span>
                                <span>Art 177 (Leg)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#c2410c] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#c2410c] hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(194,65,12,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STATE LEGAL MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Scale size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic">Article 165: The Shield of the State.</p>
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
