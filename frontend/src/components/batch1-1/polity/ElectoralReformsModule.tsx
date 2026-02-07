"use client";

import React from "react";
import {
    Brush, History, FileText,
    CheckCircle2, AlertTriangle, XCircle,
    Vote, Fingerprint, Gavel,
    Ban, Banknote, Calendar,
    TrendingUp, ShieldCheck, Search,
    Mic2, Flag, Zap,
    Trash2, Recycle, Leaf,
    Layers, BookOpen
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ElectoralReformsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#15803d] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#15803d" strokeWidth="2" strokeDasharray="12 8" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#15803d] opacity-40"></div>
            {children}
        </div>
    </div>
);

const ReformCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold leading-relaxed">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color, subtitle }: { number: string, title: string, color: string, subtitle?: string }) => (
    <div className="flex flex-col gap-2 my-8">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-2deg] border-2 border-white`}>
                {number}
            </div>
            <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
                {title}
            </h2>
            <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
        </div>
        {subtitle && <p className="text-slate-500 font-bold italic ml-16">{subtitle}</p>}
    </div>
);

export default function ElectoralReformsModule({ onComplete, isCompleted }: ElectoralReformsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#15803d] border-4 border-[#14532d] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(21,128,61,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#14532d] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 83</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-green-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Cleanup of Democracy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Cleaning <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Broom</span> <br />
                        <span className="text-green-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">Evolution of Reforms</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-2xl leading-relaxed italic opacity-90">
                        "From Tarkunde to Electoral Bonds. Fixing the gears of the world's largest democracy."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Brush size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE COMMITTEES */}
            <PhaseHeader
                number="1"
                title="The Architects (Committees)"
                color="bg-[#4b5563]"
                subtitle="The Minds behind the Cleanup"
            />

            <div className="grid md:grid-cols-1 gap-8">
                <ReformCard
                    title="Who Suggested What?"
                    icon={<Layers size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-black text-slate-800">Tarkunde Committee (1974)</h4>
                            <p className="text-sm text-slate-600">Reduced voting age to <span className="text-green-600 font-black">18</span>.</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-black text-slate-800">Dinesh Goswami (1990)</h4>
                            <p className="text-sm text-slate-600">Recommended <span className="text-blue-600 font-black">EVMs</span> & Photo ID Cards.</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-black text-slate-800">Indrajit Gupta (1998)</h4>
                            <p className="text-sm text-slate-600">State Funding of Elections (In kind, not cash).</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-black text-slate-800">Law Commission (1999)</h4>
                            <p className="text-sm text-slate-600">List System (Proportional Representation).</p>
                        </div>
                    </div>
                </ReformCard>
            </div>

            {/* PHASE 2: KEY REFORMS IMPLEMENTED */}
            <PhaseHeader
                number="2"
                title="The Wins (Implemented Reforms)"
                color="bg-[#2563eb]"
                subtitle="Technology & Transparency"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <ReformCard
                    title="Electronic Voting Machines"
                    icon={<Zap size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <ul className="list-disc pl-4 space-y-2 text-sm italic">
                        <li>First Use: <span className="font-black">Paravur, Kerala (1982)</span>.</li>
                        <li>Full Use: <span className="font-black">2004 Lok Sabha</span>.</li>
                        <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2">
                            <p className="font-black text-blue-700">VVPAT (2013)</p>
                            <p className="text-xs">Voter Verifiable Paper Audit Trail. Paper slip displays for 7 seconds. [PYQ]</p>
                        </div>
                    </ul>
                </ReformCard>

                <ReformCard
                    title="Criminalization (ADR Case)"
                    icon={<Gavel size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <p className="text-sm font-black mb-2">2002 Reform: Candidate must declare:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-red-900">
                        <li>Criminal Antecedents.</li>
                        <li>Assets & Liabilities.</li>
                        <li>Educational Qualifications.</li>
                    </ul>
                    <div className="bg-white p-3 rounded-lg border border-red-200 mt-4">
                        <p className="font-black text-red-700">Lily Thomas Case (2013)</p>
                        <p className="text-xs">Immediate disqualification of convicted MPs/MLAs. No 3-month appeal window.</p>
                    </div>
                </ReformCard>

                <div className="md:col-span-2">
                    <div className="bg-white border-4 border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl">
                        <Ban size={64} className="text-slate-800" />
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-slate-800">NOTA (2013)</h3>
                            <p className="text-sm font-bold text-slate-600">"None Of The Above". Does not affect result (FPTP system) but registers dissent.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: CONTROVERSIAL & PENDING */}
            <PhaseHeader
                number="3"
                title="Controversial & Pending"
                color="bg-[#b91c1c]"
                subtitle="The Unfinished Business"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <ReformCard
                    title="Electoral Bonds (Scrapped)"
                    icon={<XCircle size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <p className="text-sm text-red-900 mb-4"><strong>Concept:</strong> Anonymous donation to parties via SBI.</p>
                    <div className="bg-white p-4 rounded-xl border-l-4 border-red-600 shadow-sm">
                        <h5 className="font-black text-red-700 uppercase mb-2">SC Verdict (2024)</h5>
                        <p className="text-xs font-bold text-slate-700">Struck down as <span className="underline">Unconstitutional</span>. Violates Right to Information (Article 19(1)(a)). [High Yield]</p>
                    </div>
                </ReformCard>

                <ReformCard
                    title="One Nation One Election"
                    icon={<Calendar size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <p className="text-sm mb-4"><strong>Proposal:</strong> Simultaneous elections for Lok Sabha & Assemblies.</p>
                    <div className="space-y-2 text-xs font-bold">
                        <p className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-4 h-4" /> Saves money, reduces MCC paralysis.</p>
                        <p className="flex items-center gap-2"><XCircle className="text-red-600 w-4 h-4" /> Against federal spirit, local issues overshadowed.</p>
                    </div>
                    <p className="text-[10px] mt-4 font-black text-slate-400 uppercase">Committee: Ram Nath Kovind</p>
                </ReformCard>
            </div>

            {/* FOOTER: STATE FUNDING */}
            <div className="mt-8 p-8 bg-[#15803d] text-white rounded-[2rem] border-4 border-green-700 relative overflow-hidden flex flex-col items-center text-center">
                <Banknote className="text-green-300 mb-4 animate-pulse" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">State Funding Debate</h4>
                <p className="text-sm font-bold opacity-80 max-w-xl mb-4">
                    Should the Govt pay for elections to stop black money?
                    <br /><span className="text-yellow-300">Status: NO state funding exists in India currently.</span>
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#15803d] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#15803d] hover:bg-green-900 text-white shadow-[0_10px_40px_-10px_rgba(21,128,61,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            REFORMIST CERTIFIED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Brush size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 83 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">EVMs • Bonds • Decriminalization.</p>
            </div>
        </ScrapbookContainer>
    );
}
