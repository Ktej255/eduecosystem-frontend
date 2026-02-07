"use client";

import React from "react";
import {
    DoorOpen, Lock, ShieldCheck,
    AlertTriangle, XCircle, CheckCircle2,
    Gavel, Scale, UserMinus,
    UserPlus, Users, Calculator,
    Scissors, Ban, RefreshCcw,
    FileText, UserCheck, Search,
    Milestone, Calendar, Megaphone,
    Flag, ArrowRight, X,
    GitMerge
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AntiDefectionLawModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fef2f2] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-red-100 selection:text-red-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#dc2626] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="10 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#dc2626] opacity-40"></div>
            {children}
        </div>
    </div>
);

const LawCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function AntiDefectionLawModule({ onComplete, isCompleted }: AntiDefectionLawModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#dc2626] border-4 border-[#991b1b] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(220,38,38,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#991b1b] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 86</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-red-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">10th Schedule</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Revolving <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Door</span> <br />
                        <span className="text-red-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">The 2/3rd Lock</span>
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Stopping the 'Aya Ram, Gaya Ram' culture. Once you enter, you cannot leave alone."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <DoorOpen size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: ORIGIN & GROUNDS */}
            <PhaseHeader
                number="1"
                title="The Locked Door (Grounds)"
                color="bg-[#b91c1c]"
                subtitle="Why you get the Red Card"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <LawCard
                    title="Origins"
                    icon={<RefreshCcw size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <div className="space-y-2 text-sm font-bold text-red-900">
                        <p><strong>Act:</strong> 52nd Amendment Act, 1985. [PYQ]</p>
                        <p><strong>Schedule:</strong> 10th Schedule added.</p>
                        <p><strong>Goal:</strong> Curb political defection & ensure stability.</p>
                    </div>
                </LawCard>

                <div className="bg-red-50 border-4 border-dashed border-red-400 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                        <Ban size={100} className="text-red-700" />
                    </div>
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-red-700">
                        <AlertTriangle className="fill-red-100" />
                        Grounds for Disqualification
                    </h3>
                    <ul className="list-disc pl-4 space-y-3 text-sm font-bold text-red-900">
                        <li><span className="underline">Voluntarily Giving Up:</span> Includes "conduct" (Ravi Naik Case).</li>
                        <li><span className="underline">Voting Against Whip:</span> Or abstaining without permission (unless condoned in 15 days).</li>
                        <li><span className="underline">Independent Members:</span> If they join ANY party after election. [Strict]</li>
                        <li><span className="underline">Nominated Members:</span> If they join after <span className="bg-red-200 px-1 rounded">6 months</span>. (First 6 months free). [PYQ Trap]</li>
                    </ul>
                </div>
            </div>

            {/* PHASE 2: EXCEPTIONS (THE LOOPHOLE) */}
            <PhaseHeader
                number="2"
                title="The Escape Route (Merger)"
                color="bg-[#16a34a]"
                subtitle="Safety in Numbers"
            />

            <div className="bg-green-50 border-4 border-green-600 rounded-3xl p-8 relative overflow-hidden">
                <Calculator size={200} className="absolute -right-10 top-10 text-green-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-green-700 uppercase mb-4">The "Merger" Math</h3>
                        <p className="font-bold text-slate-700 mb-4">Disqualification does <span className="underline decoration-green-500">NOT</span> apply if:</p>
                        <ul className="space-y-3 text-sm font-bold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> The Party merges with another party.</li>
                            <li className="flex items-center gap-2"><Users className="text-green-600" /> AND at least <span className="text-2xl font-black text-green-700">2/3rd</span> of members agree.</li>
                        </ul>
                        <p className="text-xs mt-4 text-slate-500 italic">(The 1/3rd "Split" provision was removed by 91st AA, 2003).</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl rotate-2 border-2 border-green-200">
                        <div className="flex items-center gap-4 border-b pb-4 mb-4">
                            <GitMerge size={32} className="text-green-600" />
                            <div>
                                <h4 className="font-black text-green-800">TOTAL STRENGTH</h4>
                                <p className="text-xs text-slate-500">Example: 90 Members</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center font-black">
                            <span className="text-red-500">Needs 60 (2/3rd)</span>
                            <span className="text-green-600 text-3xl">SAFE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: ADJUDICATION */}
            <PhaseHeader
                number="3"
                title="The Judge (Speaker vs Court)"
                color="bg-[#171717]"
                subtitle="Who decides your fate?"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <LawCard
                    title="The Speaker's Power"
                    icon={<Gavel size={120} className="text-slate-800" />}
                    color="border-slate-800"
                    className="bg-slate-50"
                >
                    <p className="text-sm font-bold text-slate-700">Decided by Chairman (RS) or Speaker (LS).</p>
                    <div className="mt-4 p-3 bg-white border border-slate-300 rounded-lg">
                        <p className="text-xs font-black text-slate-500 uppercase">Time Limit?</p>
                        <p className="text-sm font-bold">SC suggested <span className="text-red-600">3 months</span> in Keisham Meghachandra Singh Case (2020).</p>
                    </div>
                </LawCard>

                <LawCard
                    title="Judicial Review"
                    icon={<Search size={120} className="text-blue-800" />}
                    color="border-blue-800"
                    className="bg-blue-50"
                >
                    <h4 className="font-black text-blue-900 mb-2">Kihoto Hollohan Case (1992)</h4>
                    <p className="text-sm font-bold text-slate-700">Speaker acts as a <span className="underline">Tribunal</span>. Decision is subject to Judicial Review by HC/SC.</p>
                    <p className="text-[10px] mt-2 italic text-slate-500">*Courts intervene only after decision is made.</p>
                </LawCard>
            </div>

            {/* FOOTER: 91st Amendment */}
            <div className="mt-8 p-8 bg-white border-4 border-red-500 rounded-[2rem] relative overflow-hidden flex flex-col items-center text-center shadow-lg group">
                <Scissors className="text-red-500 mb-4 group-hover:rotate-45 transition-transform duration-500" size={48} />
                <h4 className="text-2xl font-black uppercase mb-4 text-red-700">91st Amendment (2003) - The Double Whammy</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left w-full max-w-2xl">
                    <div className="bg-red-50 p-4 rounded-xl">
                        <p className="font-black text-red-800 mb-1">Minister Ceiling</p>
                        <p className="text-xs text-slate-700">Council of Ministers cannot exceed 15% of LS/Assembly strength.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl">
                        <p className="font-black text-red-800 mb-1">Bar on Remunerative Post</p>
                        <p className="text-xs text-slate-700">Defector cannot become Minister or Chairman of Corp for remaining term.</p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#dc2626] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)]"
                        : "bg-[#dc2626] hover:bg-red-900 text-white shadow-[0_10px_40px_-10px_rgba(220,38,38,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Lock size={32} className="animate-bounce" />
                            WHIP MASTER
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <DoorOpen size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 86 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">10th Schedule • Merger • Judicial Review.</p>
            </div>
        </ScrapbookContainer>
    );
}
