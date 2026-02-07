"use client";

import React from "react";
import {
    Users, ShieldCheck, Heart,
    Sprout, Handshake, Globe,
    BadgeCheck, Landmark, Info,
    History, Ban, Scale,
    CheckCircle2, BookOpen, UserCheck,
    SearchCheck, Sparkles, Zap,
    ArrowRight, MessageSquare,
    Coins, TrendingUp, Target,
    FileText, LayoutGrid, Scissors,
    PieChart, GraduationCap, Gavel,
    ShieldAlert, HelpCircle, Briefcase,
    Trophy
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CertainClassesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#1e40af] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 15 15 L 985 15 L 985 985 L 15 985 Z" fill="none" stroke="#000" strokeWidth="3" strokeDasharray="10 8" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1d4ed8] opacity-30"></div>
            {children}
        </div>
    </div>
);

const EquityCard = ({ title, children, color = "border-[#1e40af]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(30,64,175,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <LayoutGrid size={64} className={color.replace('border-', 'text-')} />
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
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-5deg] border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function CertainClassesModule({ onComplete, isCompleted }: CertainClassesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e40af] border-4 border-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,64,175,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#1d4ed8] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 77</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic">The Ladder of Equity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Special <br /> <span className="text-blue-300 italic underline decoration-white">Provisions</span> <br />
                        <span className="text-[#ea580c] drop-shadow-md italic text-3xl md:text-5xl">Relating to Certain Classes</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Part XVI of the Constitution. Ensuring social and political justice through safeguards for SCs, STs, OBCs, and Anglo-Indians."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Trophy size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: POLITICAL RESERVATION */}
            <PhaseHeader number="1" title="Phase 1: Political Reservation (The Seats)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <EquityCard title="Lok Sabha & Assemblies" color="border-[#1d4ed8]">
                    <div className="p-5 bg-blue-50 border-x-4 border-blue-600 rounded-3xl relative overflow-hidden group italic">
                        <Landmark className="absolute top-0 right-0 p-2 opacity-10 text-blue-600" size={40} />
                        <h4 className="font-black text-blue-700 uppercase text-xs mb-4">Art 330 & 332</h4>
                        <div className="space-y-4 text-xs">
                            <p className="flex items-start gap-2">
                                <BadgeCheck size={14} className="text-blue-600 shrink-0" />
                                <span>Seats reserved for <span className="text-blue-700 underline">SCs & STs</span> in proportion to population.</span>
                            </p>
                            <div className="p-3 bg-red-100 border border-red-300 rounded-xl">
                                <h5 className="font-black text-[10px] text-red-700 uppercase">Critical Negative Rule [PYQ]</h5>
                                <p className="mt-1 text-red-900"><span className="underline">NO Reservation</span> in Rajya Sabha or Legislative Councils.</p>
                            </div>
                        </div>
                    </div>
                </EquityCard>

                <EquityCard title="The Anglo-Indian Shift" color="border-red-800">
                    <div className="p-6 bg-red-900 text-white rounded-[2rem] relative shadow-xl space-y-4 italic">
                        <Scissors className="text-red-300 group-hover:rotate-12 transition-transform" size={42} />
                        <h4 className="text-xs font-black uppercase text-red-200 underline underline-offset-4 tracking-widest">104th Amendment (2019)</h4>
                        <p className="text-sm font-black leading-tight">
                            Discontinued nomination of <span className="text-red-300 underline">Anglo-Indians</span> (2 in LS, 1 in Assembly). [High Yield]
                        </p>
                        <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-[10px] uppercase font-black tracking-widest">SC/ST seats extended to 2030.</p>
                        </div>
                    </div>
                </EquityCard>
            </div>

            {/* PHASE 2: CLAIMS IN SERVICES */}
            <PhaseHeader number="2" title="Phase 2: Claims in Services (The Jobs)" color="bg-emerald-700" />

            <div className="relative group p-10 bg-emerald-50 border-4 border-emerald-700 border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-20 transition-opacity"><Scale size={180} className="text-emerald-700" /></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 italic">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-emerald-900 font-black"><BadgeCheck /> <h5 className="uppercase text-lg">Article 335</h5></div>
                            <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                Claims of SCs/STs shall be taken into consideration in appointments... <br />
                                <span className="text-emerald-700 underline decoration-wavy underline-offset-4">Maintenance of efficiency</span> of administration must be balanced. [PYQ Trap]
                            </p>
                        </div>
                        <div className="p-6 bg-white border-2 border-emerald-700 rounded-3xl shadow-sm relative overflow-hidden">
                            <PieChart className="text-orange-500 mb-4" size={42} />
                            <h5 className="text-sm font-black text-orange-600 uppercase mb-2">OBC Reservation (Mandal)</h5>
                            <p className="text-xs font-bold text-slate-600">
                                27% reservation. <br />
                                <span className="text-blue-700 underline">Indra Sawhney (1992):</span> Introduced "Creamy Layer" concept to exclude advanced sections.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE COMMISSIONS & LISTS */}
            <PhaseHeader number="3" title="Phase 3: The Commissions & Lists (The Machinery)" color="bg-orange-600" />

            <div className="grid md:grid-cols-1 gap-8">
                <EquityCard title="The Constitutional Trio" color="border-orange-600">
                    <div className="grid md:grid-cols-3 gap-6 pt-4 italic">
                        {[
                            { title: "NCSC (Art 338)", text: "National Commission for SCs.", color: "bg-blue-600" },
                            { title: "NCST (Art 338-A)", text: "Split in 2003 (89th AA).", color: "bg-emerald-600" },
                            { title: "NCBC (Art 338-B)", text: "Constitutional Status (102nd AA, 2018).", color: "bg-orange-600" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-white border-4 border-slate-900 rounded-[2rem] shadow-md relative group hover:bg-slate-900 hover:text-white transition-all text-center">
                                <Badge className={`${item.color} text-white mb-4`}>{item.title}</Badge>
                                <p className="text-[10px] font-black leading-tight uppercase opacity-80">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </EquityCard>

                <div className="p-8 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden group shadow-2xl border-t-8 border-orange-500 italic">
                    <FileText className="absolute top-2 right-2 text-orange-500 opacity-20 rotate-12" size={100} />
                    <h4 className="text-2xl font-black italic underline decoration-orange-500 mb-6 uppercase">Who is Who? (Art 341/342)</h4>
                    <div className="space-y-6">
                        <div className="p-5 bg-white/5 border-l-4 border-orange-400 rounded-r-2xl">
                            <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                <span className="text-orange-400">Process:</span> President notifies the list {"->"} Parliament modifies it.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 bg-white/10 rounded-2xl">
                                <h6 className="text-xs font-black text-orange-400 uppercase mb-2">102nd AA (OBCs)</h6>
                                <p className="text-[10px] font-bold opacity-80">Gave power to the Centre to maintain OBC lists.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl">
                                <h6 className="text-xs font-black text-orange-400 uppercase mb-2">105th AA (2021)</h6>
                                <p className="text-[10px] font-bold opacity-80 underline">Restored the power of States</p>
                                <p className="text-[10px] opacity-60">to maintain their own OBC lists for state needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: THE DEFINITIONS */}
            <div className="mt-8 p-10 bg-slate-50 border-4 border-slate-200 rounded-[3rem] relative overflow-hidden shadow-inner group italic">
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <BookOpen className="text-slate-400" size={64} />
                    <div className="space-y-4">
                        <h4 className="text-xl font-black text-slate-800 uppercase underline decoration-blue-500 underline-offset-8">Key Definitions</h4>
                        <div className="grid md:grid-cols-2 gap-8 text-xs font-bold text-slate-500">
                            <p><span className="text-blue-700">Anglo-Indian (Art 366(2)):</span> Father/Male progenitor of European descent, domiciled in India.</p>
                            <p><span className="text-emerald-700">SC/ST:</span> Not defined in Constitution; refers to the lists notified by the <span className="underline decoration-wavy">President</span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#1e40af] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#1e40af] hover:bg-blue-950 text-white shadow-[0_10px_40px_-10px_rgba(30,64,175,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            EQUITY GRADUATE MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Users size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 77 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Reservation • Efficiency • Justice.</p>
            </div>
        </ScrapbookContainer>
    );
}
