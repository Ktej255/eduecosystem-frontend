"use client";

import React from "react";
import {
    Shield, Landmark, Scale, AlertTriangle,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, BookOpen, UserCheck, Lock,
    LogOut, Briefcase, FileText, Search, Unlock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UPSCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const MeritContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f1f5f9] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-200">
        <div className="max-w-6xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-xl bg-white shadow-sm border-2 ${color}`}>
            <Icon className={color.replace('border-', 'text-')} size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('border-', 'text-')} font-['Kalam']`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color.replace('border-', 'bg-')} opacity-20`}></div>
    </div>
);

const MeritCard = ({ title, children, color = "border-blue-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function UPSCModule({ onComplete, isCompleted, chapterNumber = "44" }: UPSCModuleProps) {
    return (
        <MeritContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e3a8a] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-yellow-500 text-blue-900 font-['Kalam'] px-4 py-1 text-lg">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm">Watchdog of Merit System</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        UPSC <br />
                        <span className="text-yellow-400">The Iron Gatekeeper</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic">
                        "The central recruiting agency in India, independent and constitutional, ensuring merit remains the sole criterion for civil services."
                    </p>
                </div>
            </div>

            {/* PHASE 1: COMPOSITION & APPOINTMENT */}
            <SectionHeader title="Phase 1: Composition & Appointment" icon={UserCheck} color="border-blue-800" />

            <div className="grid md:grid-cols-2 gap-8">
                <MeritCard title="Structure (Art 315-323)" color="border-blue-800">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <span className="text-xs font-bold text-blue-900 uppercase">Appointed By</span>
                            <Badge className="bg-blue-800 text-white">President</Badge>
                        </div>
                        <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <span className="text-xs font-bold text-blue-900 uppercase">Strength</span>
                            <span className="text-sm font-bold italic">9-11 (Not in Const.) [PYQ]</span>
                        </div>
                        <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded text-sm italic">
                            <span className="font-bold underline">Qualification Rule:</span> 1/2 of members must have 10+ years of Govt service (Centre/State).
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="p-3 border rounded-xl bg-slate-50 text-center">
                                <span className="block text-2xl font-black text-blue-800">6Y</span>
                                <span className="text-[10px] font-bold text-slate-400">TENURE</span>
                            </div>
                            <div className="p-3 border rounded-xl bg-slate-50 text-center">
                                <span className="block text-2xl font-black text-blue-800">65</span>
                                <span className="text-[10px] font-bold text-slate-400">AGE LIMIT</span>
                            </div>
                        </div>
                    </div>
                </MeritCard>

                <MeritCard title="Removal (Strict Security)" color="border-red-700">
                    <div className="bg-red-50 p-4 rounded-xl border-t-4 border-red-700">
                        <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <AlertTriangle size={18} /> Misbehavior Process [CRITICAL]
                        </h4>
                        <ol className="text-xs space-y-2 list-decimal pl-4 font-bold">
                            <li>President refers matter to <span className="underline">Supreme Court</span>.</li>
                            <li>SC holds an inquiry.</li>
                            <li>SC Advice is <span className="text-red-700 underline font-black">BINDING</span> on President. [PYQ]</li>
                        </ol>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                            <BadgeCheck className="text-red-700" size={14} /> <span>Insolvent</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                            <BadgeCheck className="text-red-700" size={14} /> <span>Paid employment outside</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                            <BadgeCheck className="text-red-700" size={14} /> <span>Unfit (Body/Mind)</span>
                        </div>
                    </div>
                </MeritCard>
            </div>

            {/* PHASE 2: INDEPENDENCE */}
            <SectionHeader title="Phase 2: Independence (The Shield)" icon={Shield} color="border-slate-700" />

            <div className="grid md:grid-cols-3 gap-8">
                <MeritCard title="Non-Votable" color="border-slate-700">
                    <div className="text-center py-4">
                        <Scale size={40} className="mx-auto text-slate-600 mb-2" />
                        <h5 className="font-bold text-slate-900">Charged Expenses</h5>
                        <p className="text-[10px] text-slate-500 uppercase">Consolidated Fund of India</p>
                    </div>
                    <p className="text-xs text-slate-600 italic">Entire salary and pension are NOT subject to vote in Parliament.</p>
                </MeritCard>

                <MeritCard title="Eligibility Bar" color="border-slate-900" className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
                            <h5 className="font-black text-slate-900 mb-1 flex items-center gap-2">
                                <Lock size={18} /> CHAIRMAN
                            </h5>
                            <p className="text-xs font-bold text-red-700 underline italic">Ineligible for ANY further employment under Govt (India/State).</p>
                        </div>
                        <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
                            <h5 className="font-black text-slate-900 mb-1 flex items-center gap-2">
                                <Unlock size={18} /> MEMBER
                            </h5>
                            <p className="text-xs">Eligible ONLY for UPSC Chairman or SPSC Chairman positions.</p>
                        </div>
                    </div>
                </MeritCard>
            </div>

            {/* PHASE 3: FUNCTIONS & LIMITATIONS */}
            <SectionHeader title="Phase 3: Functions & Limitations" icon={FileText} color="border-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <MeritCard title="The Job Description" color="border-blue-900">
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                            <BadgeCheck className="text-blue-700 shrink-0" size={18} />
                            <span>Conduct exams for All-India & Central Services.</span>
                        </li>
                        <li className="flex gap-2">
                            <BadgeCheck className="text-blue-700 shrink-0" size={18} />
                            <span>Assist states in joint recruitment (if requested by 2+ states).</span>
                        </li>
                        <li className="flex gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100">
                            <Info size={18} className="text-blue-600 shrink-0" />
                            <span className="text-xs font-bold">Consulted on DISCIPLINARY matters of All India Services.</span>
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                        <p className="text-xs font-bold text-red-800 uppercase flex items-center gap-2">
                            <AlertTriangle size={14} /> PYQ TRAP:
                        </p>
                        <p className="text-[10px] text-red-700 italic">
                            UPSC is NOT concerned with training, cadre management, or pay. That is handled by <span className="font-bold underline">DoPT</span>.
                        </p>
                    </div>
                </MeritCard>

                <MeritCard title="Limitations (Stop Sign)" color="border-red-900">
                    <div className="relative aspect-video bg-red-100 rounded-xl border-2 border-red-200 overflow-hidden mb-4 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center text-red-900 font-black text-2xl opacity-10">OUTSIDE PURVIEW</div>
                        <Shield className="text-red-700" size={64} />
                    </div>
                    <ul className="text-xs space-y-2">
                        <li className="flex items-center gap-2 p-2 bg-white rounded border">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            <span>Reservations for Backward Classes.</span>
                        </li>
                        <li className="flex items-center gap-2 p-2 bg-white rounded border">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            <span>Posts excluded by President.</span>
                        </li>
                    </ul>
                </MeritCard>
            </div>

            {/* WATCHDOG FOOTER */}
            <div className="bg-slate-900 text-white border-2 border-slate-700 rounded-2xl p-6 flex items-center gap-6 shadow-xl">
                <Search size={48} className="text-blue-400" />
                <div>
                    <h5 className="font-black text-blue-400 text-lg">Watchdog of Merit</h5>
                    <p className="text-sm text-slate-300 mt-1">
                        Recruiting Agency ONLY. Advice is <span className="underline italic">advisory in nature</span> and not binding, but govt must explain rejection in Parliament.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-blue-800 hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(30,58,138,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            MERIT SECURED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Lock size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Shield of the Steel Frame.</p>
            </div>
        </MeritContainer>
    );
}
