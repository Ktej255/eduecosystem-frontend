"use client";

import React from "react";
import {
    Scale, Landmark, Calculator, PieChart,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, BookOpen, UserCheck, TrendingUp,
    Coins, Handshake, ScrollText, ArrowDown,
    ArrowRightLeft, BadgePercent, AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FinanceCommissionModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const FiscalContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fdfcf0] min-h-screen p-4 md:p-8 font-sans selection:bg-amber-100">
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

const FiscalCard = ({ title, children, color = "border-amber-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#000_10px,#000_11px)] opacity-10"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function FinanceCommissionModule({ onComplete, isCompleted }: FinanceCommissionModuleProps) {
    return (
        <FiscalContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#ca8a04] border-4 border-amber-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(180,83,9,1)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-amber-900 text-amber-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 41</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-amber-100 font-bold uppercase tracking-widest text-sm text-shadow-sm">The Balancing Wheel of Fiscal Federalism</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        Finance Commission <br />
                        <span className="text-amber-900 drop-shadow-md">The National Scales</span>
                    </h1>
                    <p className="text-xl text-amber-50 max-w-2xl leading-relaxed italic">
                        "A quasi-judicial body appointed by the President every fifth year to distribute the net proceeds of taxes between the Centre and the States."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 animate-pulse">
                    <Scale size={120} className="text-white/10" />
                </div>
            </div>

            {/* PHASE 1: CONSTITUTION & COMPOSITION */}
            <SectionHeader title="Phase 1: Constitution & Composition" icon={Users} color="border-amber-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <FiscalCard title="Article 280: The Source" color="border-amber-700">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl border border-amber-100">
                            <BadgeCheck size={32} className="text-amber-700" />
                            <div>
                                <h4 className="font-black text-amber-900 leading-none">Quasi-Judicial Body</h4>
                                <p className="text-[10px] uppercase font-bold text-amber-600 mt-1">Appointed by President</p>
                            </div>
                        </div>
                        <ul className="text-sm space-y-2 font-bold">
                            <li className="flex gap-2">
                                <Search size={16} className="text-amber-700 shrink-0" />
                                <span>Timeline: Every <span className="underline decoration-amber-500">5th Year</span> (or earlier). [PYQ]</span>
                            </li>
                            <li className="flex gap-2">
                                <Search size={16} className="text-amber-700 shrink-0" />
                                <span>Role: Balancing fiscal federalism.</span>
                            </li>
                        </ul>
                    </div>
                </FiscalCard>

                <FiscalCard title="Composition (1 + 4)" color="border-amber-800">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
                        <div className="grid grid-cols-5 gap-2 mb-4">
                            <div className="col-span-1 flex items-center justify-center bg-amber-700 text-white rounded-lg h-10 font-black">C</div>
                            <div className="col-span-1 flex items-center justify-center bg-amber-200 text-amber-900 rounded-lg h-10 font-bold">M</div>
                            <div className="col-span-1 flex items-center justify-center bg-amber-200 text-amber-900 rounded-lg h-10 font-bold">M</div>
                            <div className="col-span-1 flex items-center justify-center bg-amber-200 text-amber-900 rounded-lg h-10 font-bold">M</div>
                            <div className="col-span-1 flex items-center justify-center bg-amber-200 text-amber-900 rounded-lg h-10 font-bold">M</div>
                        </div>
                        <div className="p-3 bg-red-50 border-2 border-red-200 rounded-xl mb-3">
                            <p className="text-xs font-bold text-red-800 uppercase flex items-center gap-2">
                                <AlertTriangle size={14} /> PYQ TRAP:
                            </p>
                            <p className="text-[10px] text-red-700 italic">
                                Qualifications are determined by <span className="font-bold underline">PARLIAMENT</span> (via Act), NOT the Constitution.
                            </p>
                        </div>
                        <ul className="text-[10px] space-y-1 font-bold">
                            <li className="flex gap-2"><span>1.</span><span>Chairman: Experience in public affairs.</span></li>
                            <li className="flex gap-2"><span>2.</span><span>Members: HC Judge, Finance/Accounts expert, Admin expert, Economist.</span></li>
                        </ul>
                    </div>
                </FiscalCard>
            </div>

            {/* PHASE 2: FUNCTIONS */}
            <SectionHeader title="Phase 2: Functions (The 4 Tasks)" icon={Calculator} color="border-green-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <FiscalCard title="Money Flow (Art 280)" color="border-green-700">
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border-t-4 border-green-700 rounded-xl">
                            <h5 className="font-black text-green-900 text-sm flex items-center gap-2 mb-2">
                                <ArrowDown size={18} /> Vertical Devolution
                            </h5>
                            <p className="text-xs">Distribution of <span className="underline font-bold">net proceeds</span> of taxes between Centre & States.</p>
                        </div>
                        <div className="p-4 bg-green-50 border-t-4 border-green-700 rounded-xl">
                            <h5 className="font-black text-green-900 text-sm flex items-center gap-2 mb-2">
                                <ArrowRightLeft size={18} /> Horizontal Devolution
                            </h5>
                            <p className="text-xs">Allocation of shares <span className="underline font-bold">among the States</span> based on need/equity.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold">
                                <Coins size={14} className="mb-1 text-green-700" /> Grants-in-Aid (Art 275)
                            </div>
                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold">
                                <Building2 size={14} className="mb-1 text-green-700" /> Augment State Fund for Panchayats
                            </div>
                        </div>
                    </div>
                </FiscalCard>

                <FiscalCard title="Advisory Nature (The Box)" color="border-slate-800">
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="relative">
                            <div className="w-48 h-32 border-4 border-slate-800 rounded-b-3xl relative overflow-hidden bg-white">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-slate-100 border-2 border-slate-300 rounded-lg flex items-center justify-center animate-bounce">
                                    <ScrollText className="text-slate-400" />
                                </div>
                            </div>
                            <Badge className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-800 px-6">SUGGESTION BOX</Badge>
                        </div>
                        <p className="mt-8 text-xs text-center font-bold px-4 leading-relaxed">
                            Recommendations are <span className="text-red-600 underline">ADVISORY ONLY</span>. Not binding on Govt.
                            <span className="block mt-2 text-slate-400 font-medium italic">"Usually accepted due to constitutional status."</span>
                        </p>
                    </div>
                </FiscalCard>
            </div>

            {/* PHASE 3: THE 15th FINANCE COMMISSION */}
            <SectionHeader title="Phase 3: 15th Finance Commission (NK Singh)" icon={PieChart} color="border-amber-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <FiscalCard title="The Share" color="border-amber-900">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-8 border-amber-600 bg-amber-50 text-4xl font-black text-amber-900 mb-4 animate-pulse">
                            41%
                        </div>
                        <h4 className="font-bold text-amber-900">Vertical Share</h4>
                        <p className="text-[10px] text-slate-500 mt-2">Reduced from 42% (14th FC) <br /> for J&K and Ladakh 1% adjustment.</p>
                    </div>
                </FiscalCard>

                <FiscalCard title="Devolution Criteria" color="border-amber-900" className="md:col-span-2">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                            <span className="block text-xl font-black text-amber-900">45%</span>
                            <span className="text-[10px] font-bold uppercase text-amber-700">Income Distance</span>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                            <span className="block text-xl font-black text-amber-900">15%</span>
                            <span className="text-[10px] font-bold uppercase text-amber-700">Population (2011)</span>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                            <span className="block text-xl font-black text-amber-900">15%</span>
                            <span className="text-[10px] font-bold uppercase text-amber-700">Area</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="block text-xl font-black text-slate-900">10%</span>
                            <span className="text-[10px] font-bold uppercase text-slate-500">Forest & Ecology</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="block text-lg font-black text-slate-900">12.5%</span>
                            <span className="text-[10px] font-bold uppercase text-slate-500">Demographic Perf.</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="block text-xl font-black text-slate-900">2.5%</span>
                            <span className="text-[10px] font-bold uppercase text-slate-500">Tax Effort</span>
                        </div>
                    </div>
                </FiscalCard>
            </div>

            {/* NET PROCEEDS FOOTER */}
            <div className="bg-amber-100 border-2 border-amber-900 rounded-2xl p-6 flex items-center gap-6 shadow-md border-b-8 border-amber-800">
                <div className="p-4 bg-white rounded-xl shadow-inner">
                    <BadgePercent size={48} className="text-amber-700" />
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-amber-900 text-lg flex items-center gap-2">
                        Net Proceeds Concept
                        <Badge className="bg-amber-800 text-amber-200">Art 279</Badge>
                    </h5>
                    <p className="text-sm text-amber-800 mt-2 italic font-medium">
                        "Net Proceeds" = Tax Collected - Collection Cost. <br />
                        Certified by <span className="font-bold underline">Comptroller & Auditor General (CAG)</span>. His certificate is <span className="text-red-700 font-black">FINAL</span>. [PYQ]
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-amber-700 hover:bg-amber-800 text-white shadow-[0_10px_40px_-10px_rgba(180,83,9,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            FISCAL WISDOM UNLOCKED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Coins size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 41 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Fulcrum of Federalism.</p>
            </div>
        </FiscalContainer>
    );
}

const Search = ({ size, className }: { size: number, className?: string }) => (
    <div className={`p-1 bg-white rounded-full border border-slate-200 flex items-center justify-center ${className}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
    </div>
);
