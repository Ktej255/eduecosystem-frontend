"use client";

import React from "react";
import {
    ShieldCheck, Scales, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Map, Briefcase,
    Building2, Scale
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AdvocateGeneralModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const StateLegalContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-sans selection:bg-orange-100">
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

const SectionCard = ({ title, children, color = "border-orange-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function AdvocateGeneralModule({ onComplete, isCompleted }: AdvocateGeneralModuleProps) {
    return (
        <StateLegalContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#c2410c] border-4 border-orange-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(194,65,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-orange-950 text-orange-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 49</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm">The State's First Law Officer</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        Advocate General <br /> of the State <br />
                        <span className="text-orange-900 drop-shadow-md">The State Legal Shield</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic">
                        "The corresponding office in states to the Attorney General of India. Established under Article 165 as the highest law officer in the state."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10">
                    <Building2 size={160} />
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT & TENURE */}
            <SectionHeader title="Phase 1: Mirroring the Center" icon={History} color="border-orange-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <SectionCard title="Article 165 [PYQ]" color="border-orange-700">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                            <Scale className="text-orange-700 shrink-0" size={32} />
                            <p className="text-xs font-bold leading-relaxed">
                                Must be qualified to be a <span className="underline italic">High Court Judge</span>.
                                <br /> (i.e., Indian Citizen + 10y Judicial Office OR 10y HC Advocate). [PYQ]
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-slate-200">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Appointed By</p>
                            <div className="flex items-center gap-2">
                                <Landmark className="text-orange-600" size={18} />
                                <span className="font-black text-orange-900 text-lg uppercase">Governor</span>
                            </div>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title="Mirror Tenure" color="border-orange-850">
                    <div className="bg-orange-900 text-orange-100 p-6 rounded-2xl relative shadow-lg">
                        <h4 className="font-black text-xl mb-2 flex items-center gap-2 uppercase">
                            <ShieldAlert size={20} className="text-orange-400" /> Pleasure System
                        </h4>
                        <p className="text-sm font-bold opacity-90 leading-relaxed italic">
                            Holds office during the <span className="text-white underline uppercase">Pleasure of the Governor</span>.
                        </p>
                        <hr className="my-4 border-orange-800" />
                        <div className="space-y-2">
                            <p className="text-[10px] font-medium leading-none">Remuneration:</p>
                            <p className="text-xs font-black text-white italic">"Determined by the Governor." [PYQ]</p>
                        </div>
                    </div>
                </SectionCard>
            </div>

            {/* PHASE 2: FUNCTIONS & PRIVILEGES */}
            <SectionHeader title="Phase 2: The State Legal Voice" icon={Briefcase} color="border-amber-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <SectionCard title="Rights in Legislature [PYQ]" color="border-amber-900">
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-amber-100 rotate-45 translate-x-4 -translate-y-4"></div>
                            <p className="text-xs font-bold italic leading-relaxed">
                                Has the right to speak and take part in proceedings of the <span className="underline italic text-amber-800">State Legislature</span>.
                            </p>
                        </div>
                        <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                            <h4 className="text-[10px] font-black uppercase text-red-700 flex items-center gap-2">
                                <ShieldAlert size={14} /> THE TRAP
                            </h4>
                            <p className="text-sm font-black text-amber-950 mt-1">
                                SAME AS AG: <span className="underline">NO RIGHT TO VOTE</span>.
                            </p>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title="Constitutional Comparison" color="border-slate-800">
                    <div className="overflow-hidden rounded-xl border-2 border-slate-100">
                        <table className="w-full text-[10px]">
                            <thead className="bg-slate-900 text-white font-black uppercase">
                                <tr>
                                    <th className="p-2 border-r border-slate-800">Aspect</th>
                                    <th className="p-2 border-r border-slate-800">AG (Center)</th>
                                    <th className="p-2">Adv.G (State)</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-slate-600">
                                <tr className="border-b">
                                    <td className="p-2 bg-slate-50 border-r">Article</td>
                                    <td className="p-2 border-r text-indigo-700">76</td>
                                    <td className="p-2 text-orange-700">165</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 bg-slate-50 border-r">Appts</td>
                                    <td className="p-2 border-r">President</td>
                                    <td className="p-2">Governor</td>
                                </tr>
                                <tr>
                                    <td className="p-2 bg-slate-50 border-r">Judge Qual</td>
                                    <td className="p-2 border-r italic text-indigo-900">SC Judge</td>
                                    <td className="p-2 italic text-orange-900">HC Judge</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </SectionCard>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-orange-700 hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(194,65,12,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STATE LEGAL MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Scale size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 49 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Mirror of Article 165.</p>
            </div>
        </StateLegalContainer>
    );
}
