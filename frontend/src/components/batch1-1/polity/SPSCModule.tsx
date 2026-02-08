"use client";

import React from "react";
import {
    Shield, Landmark, Scale, AlertTriangle,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, BookOpen, UserCheck, Lock,
    LogOut, Briefcase, FileText, Search,
    TreePine, Map, RotateCcw, Handshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SPSCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const StateContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9f1] min-h-screen p-4 md:p-8 font-sans selection:bg-green-200">
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

const StateCard = ({ title, children, color = "border-green-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function SPSCModule({ onComplete, isCompleted }: SPSCModuleProps) {
    return (
        <StateContainer>
            {/* HERO SECTION */}
            <div className="relative bg-white border-4 border-green-800 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(21,128,61,1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="relative z-10 text-green-900">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-green-700 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter 45</Badge>
                        <div className="h-[2px] w-12 bg-green-800"></div>
                        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">State Merit Guardian</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        SPSC <br />
                        <span className="text-orange-600">The Regional Gate</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed italic">
                        "The state mirror of UPSC, ensuring merit in state services while navigating the unique constitutional trap of regional commissions."
                    </p>
                </div>
            </div>

            {/* PHASE 1: COMPOSITION & APPOINTMENT */}
            <SectionHeader title="Phase 1: Composition & Appointment" icon={Building2} color="border-green-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <StateCard title="The Setup" color="border-green-700">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
                            <span className="text-xs font-bold text-green-900 uppercase">Appointed By</span>
                            <Badge className="bg-orange-600 text-white">Governor [PYQ]</Badge>
                        </div>
                        <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
                            <span className="text-xs font-bold text-green-900 uppercase">Resignation To</span>
                            <span className="text-sm font-bold">Governor</span>
                        </div>
                        <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded text-sm italic">
                            <span className="font-bold underline text-amber-900">Mnemonic:</span> Appointed locally, but removed centrally.
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="p-3 border rounded-xl bg-slate-50 text-center">
                                <span className="block text-2xl font-black text-green-800">6Y</span>
                                <span className="text-[10px] font-bold text-slate-400">TENURE</span>
                            </div>
                            <div className="p-3 border rounded-xl bg-orange-50 border-orange-200 text-center relative overflow-hidden">
                                <span className="block text-2xl font-black text-orange-700">62</span>
                                <span className="text-[10px] font-bold text-orange-400">AGE LIMIT</span>
                                <Badge className="absolute -top-1 -right-4 bg-red-500 text-[8px] rotate-45">PYQ TRAP</Badge>
                            </div>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 font-bold">UPSC = 65y | SPSC = 62y</p>
                    </div>
                </StateCard>

                <StateCard title="The Removal Trap [CRITICAL]" color="border-red-700">
                    <div className="relative p-6 bg-red-900 text-white rounded-2xl border-4 border-red-500 shadow-xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <BadgeCheck size={120} />
                        </div>
                        <h4 className="text-lg font-black mb-4 flex items-center gap-2 font-['Kalam']">
                            <Shield size={24} className="text-red-400" />
                            Presidential Authority
                        </h4>
                        <p className="text-sm mb-4 leading-relaxed">
                            A member of SPSC is appointed by the <span className="text-orange-400 font-bold underline">Governor</span> but can ONLY be removed by the <span className="text-blue-400 font-bold underline">President</span>. [PYQ]
                        </p>
                        <div className="space-y-2 text-xs font-bold">
                            <div className="flex items-center gap-2 p-2 bg-red-800/50 rounded">
                                <Info size={14} /> Same process as UPSC (SC Inquiry).
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-red-800/50 rounded">
                                <RotateCcw size={14} /> Governor can only SUSPEND during inquiry.
                            </div>
                        </div>
                    </div>
                </StateCard>
            </div>

            {/* PHASE 2: INDEPENDENCE & JSPSC */}
            <SectionHeader title="Phase 2: Independence & JSPSC" icon={Shield} color="border-purple-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <StateCard title="Security & Limits" color="border-green-800">
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-3 items-start">
                            <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={18} />
                            <span>Expenses charged on <span className="font-bold">Consolidated Fund of State</span>.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={18} />
                            <span>Service conditions not varied to disadvantage.</span>
                        </li>
                    </ul>
                    <div className="mt-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
                        <h5 className="text-xs font-black uppercase mb-2">Further Employment:</h5>
                        <div className="space-y-2 text-[11px] font-bold">
                            <p className="p-2 bg-white rounded border border-slate-100">
                                <span className="text-green-700">Chairman:</span> Eligible only for UPSC Chair/Member or other SPSC Chair.
                            </p>
                            <p className="p-2 bg-white rounded border border-slate-100">
                                <span className="text-green-700">Member:</span> Eligible for UPSC Chair/Member or SPSC Chair.
                            </p>
                        </div>
                    </div>
                </StateCard>

                <StateCard title="JSPSC (Joint Commission)" color="border-purple-700">
                    <div className="flex items-center justify-center p-4 bg-purple-50 rounded-xl mb-4 border-2 border-dashed border-purple-200">
                        <Handshake size={48} className="text-purple-700" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                            <Badge className="bg-purple-700">Statutory Body</Badge>
                            <span className="font-bold text-purple-900 underline italic">Created by ACT of Parliament [PYQ]</span>
                        </div>
                        <p className="text-xs font-medium">Formed on request of state legislatures concerned.</p>
                        <ul className="text-[11px] grid grid-cols-2 gap-2 mt-2">
                            <li className="bg-purple-100 p-2 rounded">Appointed by <span className="font-bold">President</span></li>
                            <li className="bg-purple-100 p-2 rounded">Report to <span className="font-bold">Governor</span></li>
                        </ul>
                    </div>
                </StateCard>
            </div>

            {/* PHASE 3: FUNCTIONS */}
            <SectionHeader title="Phase 3: Functions (The Job)" icon={FileText} color="border-blue-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <StateCard title="Duties (Art 320)" color="border-blue-900">
                    <ul className="space-y-2 text-xs">
                        <li className="p-2 bg-blue-50 rounded flex gap-2">
                            <BadgeCheck className="text-blue-700" size={14} />
                            <span>Conduct exams for <span className="font-bold">State Services</span>.</span>
                        </li>
                        <li className="p-2 bg-blue-50 rounded flex gap-2">
                            <BadgeCheck className="text-blue-700" size={14} />
                            <span>Methods of recruitment & Principles of promotion.</span>
                        </li>
                        <li className="p-2 bg-blue-50 rounded flex gap-2">
                            <BadgeCheck className="text-blue-700" size={14} />
                            <span>Disciplinary matters & Legal expense claims.</span>
                        </li>
                    </ul>
                </StateCard>

                <StateCard title="Annual Report" color="border-slate-800">
                    <div className="flex gap-4">
                        <div className="p-4 bg-slate-100 rounded-2xl border-2 border-slate-200">
                            <FileText size={40} className="text-slate-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm">Submitted to <span className="font-bold text-green-800 underline">Governor</span>.</p>
                            <div className="mt-2 text-[11px] p-2 bg-slate-50 rounded border italic border-slate-200">
                                Governor places it before State Legislature with <span className="font-bold">Memorandum</span> for any non-accepted advice.
                            </div>
                        </div>
                    </div>
                </StateCard>
            </div>

            {/* MNEMONIC FOOTER */}
            <div className="bg-white border-2 border-green-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-md border-b-8">
                <div className="p-4 bg-green-50 rounded-xl">
                    <Scale size={48} className="text-green-700" />
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-green-900 text-lg">The "62 vs 65" See-Saw</h5>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="text-center">
                            <span className="block text-xs font-bold text-slate-500">UPSC</span>
                            <span className="text-xl font-black text-blue-800">65</span>
                        </div>
                        <div className="text-center border-l border-r border-slate-200">
                            <span className="block text-xs font-bold text-slate-500">SPSC</span>
                            <span className="text-xl font-black text-green-800">62</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xs font-bold text-slate-500">JSPSC</span>
                            <span className="text-xl font-black text-purple-800">62</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-green-800 hover:bg-green-900 text-white shadow-[0_10px_40px_-10px_rgba(21,128,61,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STATE MERIT GUARDED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Map size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 45 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Mirror to the Centre.</p>
            </div>
        </StateContainer>
    );
}
