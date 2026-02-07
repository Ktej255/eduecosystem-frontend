"use client";

import React from "react";
import {
    Wrench, Hammer, FileText,
    CheckCircle2, XCircle, AlertTriangle,
    ClipboardCheck, Settings, BookOpen,
    Scale, Gavel, UserCheck,
    Users, ShieldCheck, Milestone,
    Calendar, ArrowRight, Activity,
    Briefcase, Search, Flag
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCRWCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eff6ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#1e3a8a] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="10 10" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1e3a8a] opacity-40"></div>
            {children}
        </div>
    </div>
);

const AuditCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function NCRWCModule({ onComplete, isCompleted }: NCRWCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e3a8a] border-4 border-[#172554] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#172554] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 90</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Constitution Review</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Mechanic's <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Audit</span> <br />
                        <span className="text-blue-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">NCRWC Report (2002)</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "50 Years Surveyed. 249 Recommendations. Checking if the engine needs an overhaul."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Wrench size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: SETUP & MANDATE */}
            <PhaseHeader
                number="1"
                title="The Workshop (Setup)"
                color="bg-[#4b5563]"
                subtitle="Venkatachaliah Commission"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <AuditCard
                    title="The Mandate"
                    icon={<ClipboardCheck size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <p className="text-sm italic mb-2">"Review the working of the Constitution..."</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-800 font-bold">
                        <li>Appointed: <span className="text-blue-600">2000</span> (Vajpayee Govt).</li>
                        <li>Chairman: <span className="text-blue-600">M.N. Venkatachaliah</span> (Ex-CJI).</li>
                        <li>Constraint: Do <span className="text-red-500 underline">NOT</span> affect the Basic Structure. [Important]</li>
                    </ul>
                </AuditCard>

                <AuditCard
                    title="Why the Audit?"
                    icon={<Activity size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <AlertTriangle className="text-orange-500 shrink-0" />
                            <p className="text-sm font-bold text-slate-700">Political Instability (Hung Parliaments).</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Scale className="text-blue-600 shrink-0" />
                            <p className="text-sm font-bold text-slate-700">Judicial Delays & Accountability.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Flag className="text-green-600 shrink-0" />
                            <p className="text-sm font-bold text-slate-700">Electoral Malpractices.</p>
                        </div>
                    </div>
                </AuditCard>
            </div>

            {/* PHASE 2: KEY RECOMMENDATIONS */}
            <PhaseHeader
                number="2"
                title="The Repairs (Recommendations)"
                color="bg-[#15803d]"
                subtitle="What they suggested fixing"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <AuditCard
                    title="Electoral & Political"
                    icon={<Users size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <ul className="list-disc pl-4 space-y-2 text-sm text-green-900 font-bold">
                        <li><span className="underline">Anti-Defection:</span> Defectors should be barred from holding office (Implemented by 91st AA).</li>
                        <li><span className="underline">Constructive Vote of No Confidence:</span> Opposition must name a successor while moving No-Confidence (German Model).</li>
                    </ul>
                </AuditCard>

                <AuditCard
                    title="Parliament & Judiciary"
                    icon={<Gavel size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <div className="bg-white p-3 rounded-lg border border-blue-200 mb-2">
                        <p className="font-black text-blue-700">Article 356</p>
                        <p className="text-xs text-slate-600">Use sparingly. Provide opportunity to CM to prove majority.</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-blue-200">
                        <p className="font-black text-blue-700">Judiciary</p>
                        <p className="text-xs text-slate-600">National Judicial Commission for appointments (NJAC tried but struck down).</p>
                    </div>
                </AuditCard>
            </div>

            {/* PHASE 3: IGNORED SUGGESTIONS */}
            <PhaseHeader
                number="3"
                title="Spare Parts (Ignored)"
                color="bg-[#b91c1c]"
                subtitle="Ideas left on the table"
            />

            <div className="bg-red-50 border-4 border-dashed border-red-500 rounded-3xl p-8 relative overflow-hidden">
                <Settings size={200} className="absolute -right-10 top-10 text-red-200 opacity-50 animate-spin-slow" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-red-700 uppercase mb-4">Direct Election of PM?</h3>
                        <p className="text-sm font-bold text-slate-700 mb-4">
                            Some members suggested moving towards a <span className="underline decoration-red-400">Presidential System</span> or Direct Election of PM to ensure stability.
                        </p>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200">
                            <span className="text-red-600 font-black text-xl mr-2">REJECTED</span>
                            <span className="text-xs font-bold text-slate-500">Parliamentary Democracy is part of Basic Structure.</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Badge className="bg-red-600">Fundamental Duties</Badge>
                            <p className="text-xs font-bold text-slate-700">Make them enforceable/justiceable. (Ignored).</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge className="bg-red-600">Governor</Badge>
                            <p className="text-xs font-bold text-slate-700">Appointment by committee (PM + HM + Speaker + CM).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: IMPACT */}
            <div className="mt-8 p-8 bg-slate-900 text-white rounded-[2rem] border-4 border-slate-700 relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <CheckCircle2 className="text-green-400 mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2">Did it work?</h4>
                <p className="text-sm font-bold opacity-80 max-w-xl mb-4">
                    While not all 249 recommendations were accepted, it paved the way for the <span className="text-yellow-400">91st Amendment</span>, <span className="text-yellow-400">RTI Act</span>, and judicial reforms debate.
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#1e3a8a] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_-5px_rgba(30,58,138,0.5)]"
                        : "bg-[#1e3a8a] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(30,58,138,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            AUDITOR CERTIFIED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Wrench size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 90 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Venkatachaliah • Constructive No-Confidence.</p>
            </div>
        </ScrapbookContainer>
    );
}
