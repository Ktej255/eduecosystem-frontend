"use client";

import React from "react";
import {
    ShieldCheck, Coins, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Eye, Watch,
    Calculator, ReceiptText, Scale
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CAGModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const FinanceContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fcf8f0] min-h-screen p-4 md:p-8 font-sans selection:bg-amber-100">
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

const FinanceCard = ({ title, children, color = "border-amber-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function CAGModule({ onComplete, isCompleted }: CAGModuleProps) {
    return (
        <FinanceContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#a16207] border-4 border-amber-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(161,98,7,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-amber-950 text-amber-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 47</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-amber-100 font-bold uppercase tracking-widest text-sm">Guardian of the Public Purse</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        CAG of India <br />
                        <span className="text-amber-900 drop-shadow-md">The Watchdog of Public Purse</span>
                    </h1>
                    <p className="text-xl text-amber-50 max-w-2xl leading-relaxed italic">
                        "The most important officer in the Constitution of India" — Dr. B.R. Ambedkar. Article 148 ensures the fiscal accountability of the executive to the legislature.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 animate-pulse">
                    <Eye size={160} />
                </div>
            </div>

            {/* PHASE 1: INDEPENDENCE & TENURE */}
            <SectionHeader title="Phase 1: The Strong Shield" icon={ShieldCheck} color="border-amber-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <FinanceCard title="Appointment & Removal [PYQ]" color="border-amber-700">
                    <div className="space-y-4">
                        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                            <h4 className="font-black text-amber-900 flex items-center gap-2">
                                <BadgeCheck className="text-amber-700" /> Presidential Warrant
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 italic font-bold">"Under his hand and seal."</p>
                        </div>
                        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                            <h4 className="font-black text-red-900 flex items-center gap-2 text-xs uppercase">
                                <Gavel size={14} /> Removal Process
                            </h4>
                            <p className="text-[10px] text-red-700 mt-1 font-bold">
                                Same as <span className="underline italic">Supreme Court Judge</span>. On grounds of proved misbehaviour or incapacity. [PYQ]
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 p-3 bg-slate-50 text-center rounded-lg font-black text-amber-900">6 YEARS</div>
                            <div className="flex-1 p-3 bg-slate-50 text-center rounded-lg font-black text-amber-900">65 YEARS</div>
                        </div>
                    </div>
                </FinanceCard>

                <FinanceCard title="Bulletproof Independence" color="border-slate-800">
                    <ul className="text-xs space-y-2 font-bold">
                        <li className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                            <span>No further office under Central/State Govt after retirement. [PYQ]</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                            <span>Salary & conditions of service fixed by <span className="underline italic">PARLIAMENT</span>.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                            <span>Expenses are <span className="bg-amber-100 px-1 rounded">CHARGED</span> on Consolidated Fund.</span>
                        </li>
                        <li className="flex gap-3 items-center text-red-700 uppercase italic tracking-tighter">
                            <ShieldAlert size={14} className="shrink-0" />
                            <span>NO MINISTER can represent the CAG in Parliament.</span>
                        </li>
                    </ul>
                </FinanceCard>
            </div>

            {/* PHASE 2: THE MANDATE */}
            <SectionHeader title="Phase 2: Functions (Art 149)" icon={Calculator} color="border-amber-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <FinanceCard title="Audit Toolbox" color="border-amber-900" className="md:col-span-1">
                    <div className="space-y-3">
                        <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-black uppercase text-amber-700">
                            Audit Objects:
                        </div>
                        <ul className="text-[10px] space-y-2 list-none font-bold text-slate-600">
                            <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 mt-1.5 rounded-full"></div> Consolidated Fund (C/S)</li>
                            <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 mt-1.5 rounded-full"></div> Contingency Fund</li>
                            <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 mt-1.5 rounded-full"></div> Public Account</li>
                            <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 mt-1.5 rounded-full"></div> All Govt Depts Trading</li>
                        </ul>
                    </div>
                </FinanceCard>

                <FinanceCard title="Net Proceeds (Art 279)" color="border-amber-950" className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-6 h-full items-center">
                        <div className="text-center">
                            <div className="w-24 h-24 rounded-full border-4 border-dashed border-amber-300 flex items-center justify-center mx-auto mb-2">
                                <Calculator size={48} className="text-amber-700" />
                            </div>
                            <h4 className="text-xs font-black uppercase">Tax Calculator</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs italic font-bold text-slate-600">
                                "Calculates and certifies the <span className="text-amber-800 underline">Net Proceeds</span> of any tax or duty. His certificate is <span className="text-red-700 uppercase underline text-shadow-sm font-black">FINAL</span>." [PYQ]
                            </p>
                            <div className="p-2 bg-amber-50 rounded border border-amber-200 text-[10px] text-center font-bold">
                                NET = Gross Collected - Collection Cost
                            </div>
                        </div>
                    </div>
                </FinanceCard>
            </div>

            {/* PHASE 3: THE REPORTS */}
            <SectionHeader title="Phase 3: The Three Reports" icon={ScrollText} color="border-slate-800" />

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Audit Report on Appropriation Accounts", icon: ReceiptText },
                    { title: "Audit Report on Finance Accounts", icon: Coins },
                    { title: "Audit Report on Public Undertakings", icon: Landmark }
                ].map((item, i) => (
                    <div key={i} className="bg-white border-2 border-slate-900 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <item.icon className="text-amber-800" size={24} />
                        </div>
                        <h4 className="text-xs font-black leading-tight uppercase text-slate-800">{item.title}</h4>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-8 p-8 bg-amber-50 rounded-3xl border-2 border-amber-200 border-dashed">
                <div className="flex-1 space-y-4">
                    <h5 className="font-black text-amber-900 flex items-center gap-2">
                        The PAC Link [PYQ]
                        <Badge className="bg-amber-700 text-white uppercase">Guide & Friend</Badge>
                    </h5>
                    <p className="text-sm font-medium italic text-slate-600">
                        The CAG acts as a <span className="font-bold underline">Guide, Philosopher and Friend</span> of the Public Accounts Committee (PAC) of Parliament. He assists them in examining the reports.
                    </p>
                </div>
                <div className="shrink-0 flex items-center gap-4">
                    <div className="p-4 bg-white rounded-full border-2 border-slate-900 font-black text-xs">CAG</div>
                    <ArrowBigUpDash className="rotate-90 text-slate-300" />
                    <div className="p-6 bg-amber-700 rounded-2xl text-white font-black text-lg shadow-lg">PAC</div>
                </div>
            </div>

            {/* COMPARISON TRAP */}
            <div className="bg-white border-4 border-slate-900 rounded-2xl p-6 flex items-center gap-6 shadow-md border-b-8 border-slate-800 relative">
                <div className="p-4 bg-rose-50 rounded-xl border-2 border-rose-200">
                    <Scale size={48} className="text-rose-700" />
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-rose-900 text-lg flex items-center gap-2">
                        Indian vs British CAG [PYQ]
                    </h5>
                    <p className="text-xs text-rose-800 mt-2 font-bold leading-relaxed">
                        <span className="bg-rose-100 p-0.5">India</span>: CAG is ONLY an Auditor. Money can be withdrawn without his permission. <br />
                        <span className="bg-green-100 p-0.5">UK</span>: CAG is both Comptroller AND Auditor. No money can be withdrawn from Treasury without his approval.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-amber-700 hover:bg-amber-800 text-white shadow-[0_10px_40px_-10px_rgba(161,98,7,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            PURSE GUARDED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Eye size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 47 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Most Important Officer. — Ambedkar</p>
            </div>
        </FinanceContainer>
    );
}
