"use client";

import React from "react";
import {
    ShieldCheck, Scale, ScrollText, Gavel,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, MessageSquare, Mic2,
    Users, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AttorneyGeneralModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const LegalContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans selection:bg-indigo-100">
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

const LegalCard = ({ title, children, color = "border-indigo-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
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

export default function AttorneyGeneralModule({ onComplete, isCompleted }: AttorneyGeneralModuleProps) {
    return (
        <LegalContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e1b4b] border-4 border-slate-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,27,75,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-indigo-600 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter 48</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm">The Highest Law Officer in the Land</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        Attorney General <br /> of India <br />
                        <span className="text-indigo-400 drop-shadow-md">The First Law Officer</span>
                    </h1>
                    <p className="text-xl text-indigo-50 max-w-2xl leading-relaxed italic">
                        "Part of the Union Executive. Article 76 provides for the appointment of a person who is qualified to be appointed a Judge of the Supreme Court."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                    <Scale size={160} />
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT & TERM */}
            <SectionHeader title="Phase 1: Eligibility & Tenure" icon={History} color="border-indigo-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Eligibility [PYQ]" color="border-indigo-700">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                            <Scale className="text-indigo-700 shrink-0" size={32} />
                            <p className="text-xs font-bold leading-relaxed">
                                Must be qualified to be a <span className="underline italic">Supreme Court Judge</span>.
                                <br /> (i.e., Indian Citizen + 5y HC Judge OR 10y HC Advocate OR Distinguished Jurist).
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-slate-200">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Appointed By</p>
                            <div className="flex items-center gap-2">
                                <Landmark className="text-indigo-600" size={18} />
                                <span className="font-black text-indigo-900 text-lg">PRESIDENT</span>
                            </div>
                        </div>
                    </div>
                </LegalCard>

                <LegalCard title="Tenure & Pleasure [PYQ]" color="border-rose-800">
                    <div className="space-y-6">
                        <div className="bg-rose-50 p-6 rounded-2xl border-2 border-rose-200 relative">
                            <ShieldAlert className="absolute top-2 right-2 text-rose-300" size={32} />
                            <h4 className="text-rose-900 font-black text-lg mb-1 italic">PLEASURE OF PRESIDENT</h4>
                            <p className="text-xs font-bold text-rose-800">
                                The Constitution does NOT provide for the <span className="underline">fixed tenure</span>. He can be removed by the President at any time.
                            </p>
                            <hr className="my-3 border-rose-200" />
                            <p className="text-[10px] font-bold text-slate-500 italic">
                                By convention, he resigns when the <span className="text-slate-900 uppercase">Government (Council of Ministers)</span> resigns or is replaced.
                            </p>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* PHASE 2: DUTIES & RIGHTS */}
            <SectionHeader title="Phase 2: Duties & Privileges" icon={Briefcase} color="border-indigo-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Legal Duties" color="border-indigo-900">
                    <ul className="space-y-3 font-bold text-sm">
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center shrink-0">1</div>
                            <span>Advise Govt of India on legal matters referred by President.</span>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center shrink-0">2</div>
                            <span>Represent Govt in Supreme Court and High Courts. [PYQ]</span>
                        </li>
                    </ul>
                </LegalCard>

                <LegalCard title="Rights & Limitations [PYQ]" color="border-slate-800" className="bg-slate-50">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white border border-indigo-100 rounded-xl">
                            <h4 className="text-[10px] font-black uppercase text-indigo-700 mb-2">RIGHTS</h4>
                            <ul className="text-[9px] space-y-2 list-disc pl-4 font-bold">
                                <li>Audience in all courts in India.</li>
                                <li>Right to participate in Parliamentary proceedings (both Houses).</li>
                                <li className="text-rose-700">Can speak + take part but <span className="underline uppercase">NO VOTE</span>. [PYQ]</li>
                            </ul>
                        </div>
                        <div className="p-3 bg-white border border-rose-100 rounded-xl">
                            <h4 className="text-[10px] font-black uppercase text-rose-700 mb-2">LIMITATIONS</h4>
                            <ul className="text-[9px] space-y-2 list-disc pl-4 font-bold">
                                <li>Must not advise against GOI.</li>
                                <li>NO defending an accused in criminal case without Govt permission.</li>
                                <li>NOT a full-time Govt servant (Can do private practice). [PYQ]</li>
                            </ul>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* SYMBOLIC FOOTER */}
            <div className="bg-indigo-900 text-white border-2 border-indigo-500 rounded-2xl p-6 flex items-center gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="p-4 bg-indigo-700/50 rounded-xl border border-indigo-500">
                    <Mic2 size={48} className="text-indigo-300" />
                </div>
                <div className="flex-1">
                    <h5 className="font-black text-indigo-300 text-lg flex items-center gap-2">
                        The Voice in Parliament
                    </h5>
                    <p className="text-sm text-indigo-100 mt-2 italic font-medium leading-relaxed">
                        Under <span className="font-bold underline">Article 88</span>, the Attorney General has the right to speak in, and otherwise to take part in the proceedings of, either House, any joint sitting of the Houses, and any committee of Parliament... but he shall NOT be entitled to <span className="text-red-400 uppercase font-black">Vote</span>.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-indigo-700 hover:bg-indigo-800 text-white shadow-[0_10px_40px_-10px_rgba(30,27,75,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            FIRST LAW OFFICER MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Scale size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 48 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">The Legal Voice of the Union.</p>
            </div>
        </LegalContainer>
    );
}
