"use client";

import React from "react";
import {
    ShieldCheck, Users, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    Trees, Map, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, SearchCheck, Mountain
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCSTModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const TribalContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9ff] min-h-screen p-4 md:p-8 font-sans selection:bg-orange-100">
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

const TribalCard = ({ title, children, color = "border-orange-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function NCSTModule({ onComplete, isCompleted }: NCSTModuleProps) {
    return (
        <TribalContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#ea580c] border-4 border-orange-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(154,52,18,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-orange-950 text-orange-200 font-['Kalam'] px-4 py-1 text-lg">Chapter 44</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm text-shadow-sm">Sentinels of Tribal Rights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        National Commission <br /> for STs <br />
                        <span className="text-orange-900 drop-shadow-md">The Sentinel of the Tribes</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic">
                        "Established by the 89th Constitutional Amendment Act under Article 338-A to focus exclusively on the welfare and protection of India's tribal communities."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10">
                    <Mountain size={160} />
                </div>
            </div>

            {/* PHASE 1: ORIGIN & MANDATE */}
            <SectionHeader title="Phase 1: Separate Identity" icon={History} color="border-orange-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <TribalCard title="89th Amendment (2003)" color="border-orange-700">
                    <div className="space-y-4">
                        <div className="p-4 bg-orange-50 rounded-xl border-dashed border-2 border-orange-300">
                            <h4 className="font-bold text-orange-900 flex items-center gap-2">
                                <BadgeCheck className="text-orange-600" /> Separation Reason
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                Recognizing that STs face geographically and culturally distinct issues compared to SCs, needing a <span className="font-bold italic">specialized body</span>. [PYQ]
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg border-2 border-slate-100">
                            <span className="text-lg font-black text-slate-400">Article 338</span>
                            <ArrowBigUpDash className="rotate-90 mx-4 text-orange-400" size={24} />
                            <span className="text-lg font-black text-orange-600 underline">Article 338-A</span>
                        </div>
                    </div>
                </TribalCard>

                <TribalCard title="Structure & Tenure" color="border-orange-850">
                    <div className="space-y-4">
                        <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <Users className="text-orange-600 shrink-0" size={24} />
                            <div className="text-sm font-bold">1 Chairperson, 1 Vice-Chairperson and 3 Members.</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
                                <span className="block text-xs font-bold text-orange-400">TERM</span>
                                <span className="text-xl font-black text-orange-800">3 Years</span>
                            </div>
                            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
                                <span className="block text-xs font-bold text-orange-400">APPOINTED BY</span>
                                <span className="text-lg font-black text-orange-800 uppercase px-1">President</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-red-700 font-bold bg-red-50 p-2 rounded border border-red-100">
                            Trap: Re-appointment is allowed for max <span className="underline italic">TWO terms</span> only. [PYQ]
                        </p>
                    </div>
                </TribalCard>
            </div>

            {/* PHASE 2: SPECIAL TRIBAL FUNCTIONS */}
            <SectionHeader title="Phase 2: Specialized Mandate" icon={Trees} color="border-green-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <TribalCard title="Beyond Generic Safeguards" color="border-green-700">
                    <div className="space-y-3">
                        <div className="flex items-start gap-4 p-3 bg-green-50 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center shrink-0">
                                <SearchCheck size={18} className="text-green-800" />
                            </div>
                            <p className="text-xs font-bold text-green-900">Measure to confer <span className="underline italic">ownership rights</span> in respect of Minor Forest Produce.</p>
                        </div>
                        <div className="flex items-start gap-4 p-3 bg-green-50 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center shrink-0">
                                <ScaleIcon size={18} className="text-green-800" />
                            </div>
                            <p className="text-xs font-bold text-green-900">Measures to prevent <span className="underline italic">alienation of tribal land</span> and effective rehabilitation.</p>
                        </div>
                    </div>
                </TribalCard>

                <TribalCard title="The Tribal Shield" color="border-slate-800">
                    <div className="p-4 bg-slate-900 text-white rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                        <h4 className="text-xs font-black uppercase text-orange-400 mb-2">Civil Court Power</h4>
                        <p className="text-[11px] leading-relaxed opacity-90">
                            Same as NCSC (Art 338). While investigating any matter or inquiring into any complaint, it has all powers of a <span className="text-orange-400 font-bold underline italic">Civil Court trying a suit</span>. [PYQ]
                        </p>
                        <hr className="my-3 border-slate-700 border-dashed" />
                        <ul className="text-[8px] space-y-1 font-bold list-none">
                            <li className="flex gap-2"><BadgeCheck size={10} className="text-orange-500" /> Enforcing Attendance (Summoning)</li>
                            <li className="flex gap-2"><BadgeCheck size={10} className="text-orange-500" /> Discovering Documents</li>
                            <li className="flex gap-2"><BadgeCheck size={10} className="text-orange-500" /> Receiving Evidence on Affidavits</li>
                        </ul>
                    </div>
                </TribalCard>
            </div>

            {/* PHASE 3: THE REPORTING CHAIN */}
            <SectionHeader title="Phase 3: The Accountability Loop" icon={ScrollText} color="border-orange-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <TribalCard title="Reporting Process" color="border-orange-900">
                        <div className="flex flex-col gap-6 relative">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-700 rounded-xl text-white font-black text-sm shadow-md">NCST Report</div>
                                <ArrowBigUpDash className="rotate-90 text-slate-300" size={24} />
                                <div className="p-4 bg-white border-2 border-slate-900 rounded-full text-xs font-black">PRESIDENT</div>
                            </div>
                            <div className="pl-12 border-l-4 border-dashed border-orange-200 py-4 space-y-4">
                                <div className="flex gap-4 items-center">
                                    <Landmark className="text-slate-400" size={24} />
                                    <p className="text-[10px] font-bold">President puts before <span className="text-slate-900 underline italic">Parliament</span> along with Memorandum.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Map className="text-slate-400" size={24} />
                                    <p className="text-[10px] font-bold">President sends state portion to <span className="text-slate-900 underline italic">Governor</span> (for State Legislature).</p>
                                </div>
                            </div>
                        </div>
                    </TribalCard>
                </div>

                <div className="md:col-span-1">
                    <TribalCard title="PESA Act Link [PYQ]" color="border-green-800">
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                            <div className="p-4 bg-green-100 rounded-2xl border-2 border-green-300">
                                <MapIcon size={40} className="text-green-700" />
                            </div>
                            <p className="text-[10px] font-bold leading-relaxed italic text-green-900">
                                The Commission is mandated to monitor the implementation of the <span className="font-black underline italic">PESA Act, 1996</span> to ensure tribal self-governance.
                            </p>
                        </div>
                    </TribalCard>
                </div>
            </div>

            {/* PVTG FOOTER */}
            <div className="bg-orange-100 border-2 border-orange-950 rounded-2xl p-6 flex items-center gap-6 shadow-xl border-b-8 border-orange-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <div className="p-4 bg-orange-700/10 rounded-xl border border-orange-400 text-orange-900 font-black text-2xl">
                    75
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-orange-900 text-lg flex items-center gap-2 uppercase">
                        PVTG Watch [PYQ]
                    </h5>
                    <p className="text-sm text-orange-800 mt-1 italic font-medium leading-relaxed">
                        Measures for full implementation of the provisions of PESA and safeguarding <span className="font-bold underline decoration-orange-500 underline-offset-4">Particularly Vulnerable Tribal Groups (PVTGs)</span>.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-orange-700 hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(154,52,18,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            TRIBAL RIGHTS CHAMPIONED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Trees size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 44 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Shield of Article 338-A.</p>
            </div>
        </TribalContainer>
    );
}

const ScaleIcon = ({ size, className }: { size: number, className?: string }) => (
    <div className={`p-1 bg-white rounded-full border border-slate-200 flex items-center justify-center ${className}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
    </div>
);

const MapIcon = ({ size, className }: { size: number, className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-black">PESA</span>
        </div>
    </div>
);
