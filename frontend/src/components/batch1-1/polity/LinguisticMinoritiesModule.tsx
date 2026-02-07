"use client";

import React from "react";
import {
    ShieldCheck, Languages, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    MessageSquare, MapPin, ShieldAlert, FileText,
    Landmark, ArrowBigUpDash, History, SearchCheck,
    Mic2, Globe2, HeartHandshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LinguisticMinoritiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const LanguageContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-sans selection:bg-teal-100">
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

const LanguageCard = ({ title, children, color = "border-teal-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function LinguisticMinoritiesModule({ onComplete, isCompleted }: LinguisticMinoritiesModuleProps) {
    return (
        <LanguageContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#0d9488] border-4 border-teal-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(13,148,136,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-teal-950 text-teal-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 46</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-teal-100 font-bold uppercase tracking-widest text-sm">Protector of Linguistic Diversity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        Special Officer for <br /> Linguistic Minorities <br />
                        <span className="text-teal-900 drop-shadow-md">The Language Shield</span>
                    </h1>
                    <p className="text-xl text-teal-50 max-w-2xl leading-relaxed italic">
                        "Inserted by the 7th Amendment Act, 1956, following the SRC recommendations. Article 350-B provides the constitutional mandate to safeguard the rights of language minorities."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 animate-pulse">
                    <Languages size={160} />
                </div>
            </div>

            {/* PHASE 1: GENESIS & SETUP */}
            <SectionHeader title="Phase 1: Genesis & Setup" icon={History} color="border-teal-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <LanguageCard title="Article 350-B [PYQ]" color="border-teal-700">
                    <div className="space-y-4 font-bold text-sm">
                        <div className="p-3 bg-teal-50 border-l-4 border-teal-700 rounded-lg">
                            "There shall be a Special Officer for linguistic minorities to be appointed by the <span className="underline italic">President</span>."
                        </div>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <BadgeCheck className="text-teal-600 shrink-0" size={18} />
                                <span>Originally NOT in the Constitution. [PYQ]</span>
                            </li>
                            <li className="flex gap-2 text-rose-700">
                                <ShieldAlert shrink-0 size={18} />
                                <span>Constitutional Qualification: <span className="underline italic">NONE</span> specified.</span>
                            </li>
                        </ul>
                    </div>
                </LanguageCard>

                <LanguageCard title="Organization & HQ" color="border-slate-800">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-100">
                            <MapPin size={32} className="text-red-500" />
                            <div>
                                <h4 className="font-black text-slate-800 leading-none">Prayagraj (Allahabad)</h4>
                                <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Headquarters</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            <div className="p-2 border rounded-lg bg-teal-50 font-bold text-[10px]">
                                <Globe2 size={12} className="mx-auto mb-1 text-teal-600" /> Regional Office: Belgaum, Chennai, Kolkata
                            </div>
                            <div className="p-2 border rounded-lg bg-teal-50 font-bold text-[10px]">
                                <Mic2 size={12} className="mx-auto mb-1 text-teal-600" /> Ministry: Minority Affairs
                            </div>
                        </div>
                    </div>
                </LanguageCard>
            </div>

            {/* PHASE 2: THE MANDATE */}
            <SectionHeader title="Phase 2: Functions & Reporting" icon={ScrollText} color="border-teal-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <LanguageCard title="Primary Duties" color="border-teal-900">
                    <div className="space-y-3">
                        <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                            <SearchCheck size={24} className="text-teal-600 shrink-0" />
                            <p className="text-xs leading-relaxed font-bold">Investigate all matters relating to the <span className="underline decoration-teal-300">Safeguards</span> provided for linguistic minorities.</p>
                        </div>
                        <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                            <MessageSquare size={24} className="text-teal-600 shrink-0" />
                            <p className="text-xs leading-relaxed font-bold">Monitor implementation of the common agreed schemes for minorities.</p>
                        </div>
                    </div>
                </LanguageCard>

                <LanguageCard title="The Reporting Path" color="border-slate-900">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400">
                            OFFICER <ArrowBigUpDash className="rotate-90" size={16} /> PRESIDENT <ArrowBigUpDash className="rotate-90" size={16} /> PARLIAMENT
                        </div>
                        <div className="w-full p-4 bg-teal-50 border-t-4 border-teal-800 rounded-xl relative">
                            <span className="absolute -top-3 left-4 bg-teal-800 text-white text-[8px] px-2 rounded">NOTE [PYQ]</span>
                            <p className="text-[10px] italic font-bold text-teal-950">
                                The Union Ministry of Minority Affairs exercises administrative control over the Special Officer. But he submits his report <span className="font-black underline">Directly to the President</span>.
                            </p>
                        </div>
                    </div>
                </LanguageCard>
            </div>

            {/* SYMBOLIC FOOTER */}
            <div className="bg-slate-900 text-white border-2 border-teal-500 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/20 rounded-full blur-3xl"></div>
                <div className="p-4 bg-teal-900/50 rounded-xl border border-teal-700">
                    <HeartHandshake size={48} className="text-teal-400" />
                </div>
                <div>
                    <h5 className="font-black text-teal-400 text-lg flex items-center gap-2">
                        Cooperative Federalism Link
                        <Badge className="bg-teal-700 text-white">Minority Shield</Badge>
                    </h5>
                    <p className="text-sm text-slate-300 mt-2 italic font-medium">
                        "Language should not be a barrier to justice." The officer acts as a bridge between the linguistic minority groups and the state administration to ensure smooth implementation of Art 29, 30 and 350-A.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-teal-700 hover:bg-teal-800 text-white shadow-[0_10px_40px_-10px_rgba(13,148,136,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            SPEECH PROTECTED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Languages size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 46 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">Signed: Article 350-B.</p>
            </div>
        </LanguageContainer>
    );
}
