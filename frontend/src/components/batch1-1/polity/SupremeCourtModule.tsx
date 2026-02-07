"use client";

import React from "react";
import {
    Scale, Gavel, Shield, Book, Scroll,
    Phone, Map, UserCheck, AlertTriangle,
    CheckCircle2, XCircle, Landmark, Swords,
    BookOpen, Search, FileText, Users
} from "lucide-react";

interface SupremeCourtModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Temple of Justice (Marble & Gold) ---

const TempleContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f5f5f4] text-slate-900">
        {/* Marble Texture */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')]"></div>

        {/* Gold Border Frame */}
        <div className="absolute inset-4 border-4 border-[#fbbf24] pointer-events-none rounded-xl z-20"></div>

        <div className="max-w-6xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const MarbleCard = ({ children, title, icon: Icon, className = "" }: { children: React.ReactNode, title: string, icon?: any, className?: string }) => (
    <div className={`bg-white p-6 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border border-slate-200 relative overflow-hidden ${className}`}>
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"></div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            {Icon && <div className="bg-slate-900 text-yellow-400 p-2 rounded-full"><Icon size={20} /></div>}
            <h3 className="text-xl font-bold font-serif text-slate-800 uppercase tracking-widest">{title}</h3>
        </div>
        {children}
    </div>
);

const LawTimelineItem = ({ year, title, desc, active = false }: { year: string, title: string, desc: string, active?: boolean }) => (
    <div className="flex gap-4 relative pb-8 last:pb-0">
        <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${active ? "bg-yellow-500 ring-4 ring-yellow-200" : "bg-slate-300"}`}></div>
            <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
        </div>
        <div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${active ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-500"}`}>{year}</span>
            <h4 className={`font-bold mt-1 ${active ? "text-slate-900" : "text-slate-600"}`}>{title}</h4>
            <p className="text-sm font-handwriting text-slate-500 leading-tight mt-1">{desc}</p>
        </div>
    </div>
);

export default function SupremeCourtModule({ onComplete, isCompleted }: SupremeCourtModuleProps) {
    return (
        <TempleContainer>
            {/* HERO */}
            <div className="text-center py-12 relative flex flex-col items-center">
                <div className="mb-6 relative">
                    <div className="absolute -top-10 -left-10 text-slate-200 opacity-50"><Landmark size={120} /></div>
                    <Scale size={80} className="text-slate-900 relative z-10" strokeWidth={1.5} />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 font-serif mb-2 tracking-widest">
                    SUPREME COURT
                </h1>
                <div className="flex items-center gap-4 justify-center">
                    <div className="h-[1px] w-12 bg-slate-400"></div>
                    <span className="text-xl font-handwriting italic text-slate-600">"Guardian of the Constitution"</span>
                    <div className="h-[1px] w-12 bg-slate-400"></div>
                </div>
            </div>

            {/* PHASE 1: ORGANIZATION & APPOINTMENT */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 flex-1 bg-slate-900"></div>
                        <h2 className="text-2xl font-bold font-serif">Phase 1: The Bench</h2>
                        <div className="h-1 flex-1 bg-slate-900"></div>
                    </div>

                    {/* BENCH STRENGTH */}
                    <MarbleCard title="Organization (Art 124)" icon={Users}>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 bg-slate-50 rounded border border-slate-200">
                                <span className="block text-xs text-slate-400 font-bold uppercase">Original (1950)</span>
                                <strong className="text-3xl font-serif text-slate-700">1 + 7</strong>
                                <span className="block text-xs text-slate-500">(8 Judges)</span>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                                <span className="block text-xs text-yellow-600 font-bold uppercase">Current (2019)</span>
                                <strong className="text-3xl font-serif text-slate-900">1 + 33</strong>
                                <span className="block text-xs text-slate-500">(34 Judges)</span>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm font-handwriting">
                            <span className="bg-slate-900 text-white px-2 py-1 rounded">Authority</span> Parliament increases strength by Law.
                        </div>
                    </MarbleCard>

                    {/* QUALIFICATIONS */}
                    <MarbleCard title="Qualifications Checklist" icon={UserCheck}>
                        <ul className="space-y-3 font-handwriting text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-600" />
                                <span>Citizen of India.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-600" />
                                <span>Judge of HC for 5 Years. <span className="font-bold text-slate-400">OR</span></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-600" />
                                <span>Advocate of HC for 10 Years. <span className="font-bold text-slate-400">OR</span></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-600" />
                                <span>Distinguished Jurist (Opinion of President).</span>
                            </li>
                            <li className="mt-2 p-2 bg-red-50 text-red-800 text-xs rounded border border-red-100 text-center">
                                <strong>Note:</strong> Minimum Age NOT prescribed.
                            </li>
                        </ul>
                    </MarbleCard>
                </div>

                {/* THE JUDGES CASES TIMELINE */}
                <MarbleCard title="The Appointment Battle" icon={Swords} className="h-full">
                    <div className="pl-2">
                        <LawTimelineItem
                            year="1982"
                            title="First Judges Case"
                            desc="'Consultation' ≠ Concurrence. Executive Primacy."
                        />
                        <LawTimelineItem
                            year="1993"
                            title="Second Judges Case"
                            desc="'Consultation' = Concurrence. Collegium Born (CJI + 2)."
                            active
                        />
                        <LawTimelineItem
                            year="1998"
                            title="Third Judges Case"
                            desc="Collegium Expanded (CJI + 4 Senior-most)."
                            active
                        />
                        <LawTimelineItem
                            year="2014"
                            title="NJAC Act (99th AA)"
                            desc="Attempt to replace Collegium. (Failed)."
                        />
                        <LawTimelineItem
                            year="2015"
                            title="Fourth Judges Case"
                            desc="NJAC declared Unconstitutional (Void). Collegium Restored. [PYQ]"
                            active
                        />
                    </div>
                </MarbleCard>
            </div>

            {/* PHASE 2: INDEPENDENCE & REMOVAL */}
            <div className="mt-12 bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>

                <h2 className="text-3xl font-serif text-center mb-10 text-yellow-400 tracking-wider">Phase 2: Independence & The Shield</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* REMOVAL PROCESS */}
                    <div className="relative">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-400">
                            <Gavel /> Removal (Impeachment)
                        </h3>
                        <div className="space-y-4 font-handwriting text-slate-300 text-sm border-l-2 border-red-900/50 pl-6">
                            <div className="relative">
                                <span className="absolute -left-[33px] bg-red-900 rounded-full w-4 h-4 mt-1 border border-red-500"></span>
                                <strong>Motion:</strong> Signed by 100 (LS) or 50 (RS).
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[33px] bg-red-900 rounded-full w-4 h-4 mt-1 border border-red-500"></span>
                                <strong>Admission:</strong> Speaker/Chairman can REFUSE.
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[33px] bg-red-900 rounded-full w-4 h-4 mt-1 border border-red-500"></span>
                                <strong>Inquiry:</strong> 3-Member Comm (CJI + HC CJ + Jurist).
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[33px] bg-red-900 rounded-full w-4 h-4 mt-1 border border-red-500"></span>
                                <strong>Vote:</strong> Special Majority in Both Houses.
                            </div>
                            <div className="bg-red-900/30 p-2 rounded border border-red-900/50 text-red-300 font-bold text-center mt-2">
                                Fact: No judge has been impeached so far.
                            </div>
                        </div>
                    </div>

                    {/* INDEPENDENCE SHIELD */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                        <Shield size={64} className="text-yellow-400 mb-4" />
                        <h3 className="text-xl font-bold mb-4 font-serif text-yellow-200">The Independence Shield</h3>
                        <ul className="space-y-3 font-handwriting text-sm text-slate-300 w-full text-left">
                            <li className="flex justify-between border-b border-white/10 pb-1">
                                <span>Security of Tenure</span>
                                <CheckCircle2 size={16} className="text-green-500" />
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-1">
                                <span>Expenses Charged on CFI</span>
                                <CheckCircle2 size={16} className="text-green-500" />
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-1">
                                <span>Ban on Practice after Retirement</span>
                                <CheckCircle2 size={16} className="text-green-500" />
                            </li>
                            <li className="flex justify-between pb-1">
                                <span>Power to Punish (Contempt)</span>
                                <CheckCircle2 size={16} className="text-green-500" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* PHASE 3: JURISDICTION (PILLARS) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4 mb-4 justify-center">
                    <div className="h-1 w-24 bg-slate-900"></div>
                    <h2 className="text-2xl font-bold font-serif">Phase 3: The Pillars of Jurisdiction</h2>
                    <div className="h-1 w-24 bg-slate-900"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* ORIGINAL */}
                    <MarbleCard title="Original (Art 131)" icon={Map}>
                        <div className="text-sm font-handwriting space-y-3">
                            <p className="font-bold text-center bg-slate-100 p-2 rounded">Federal Disputes</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Centre vs State.</li>
                                <li>State vs State.</li>
                            </ul>
                            <div className="mt-4 border-t pt-2">
                                <strong className="text-red-600 flex items-center gap-1 text-xs uppercase"><XCircle size={12} /> Exclusions (Trap)</strong>
                                <ul className="text-xs text-slate-500 list-disc pl-4 mt-1">
                                    <li>Inter-State Water Disputes.</li>
                                    <li>Finance Commission matters.</li>
                                    <li>Commercial disputes.</li>
                                </ul>
                            </div>
                        </div>
                    </MarbleCard>

                    {/* WRIT */}
                    <MarbleCard title="Writ (Art 32)" icon={Scroll}>
                        <div className="text-sm font-handwriting space-y-3">
                            <p className="font-bold text-center bg-yellow-50 p-2 rounded text-yellow-800">Guarantor of FRs</p>
                            <div className="text-center py-2">
                                Habeas Corpus, Mandamus, Quo Warranto, Certiorari, Prohibition.
                            </div>
                            <div className="mt-2 bg-slate-50 p-2 rounded border border-slate-200 text-xs">
                                <strong>vs High Court (Art 226):</strong><br />
                                SC can issue writs ONLY for Fundamental Rights. HC is Wider ("Any other purpose").
                            </div>
                        </div>
                    </MarbleCard>

                    {/* ADVISORY */}
                    <MarbleCard title="Advisory (Art 143)" icon={Phone}>
                        <div className="text-sm font-handwriting space-y-3 text-center">
                            <p className="font-bold text-center bg-blue-50 p-2 rounded text-blue-800">President seeks Opinion</p>

                            <div className="flex justify-center my-2">
                                <Phone size={32} className="text-slate-400" />
                            </div>

                            <ul className="text-left space-y-2 text-xs">
                                <li className="flex gap-2">
                                    <strong className="min-w-[60px]">Binding?</strong>
                                    <span className="text-red-600 font-bold">NO.</span>
                                </li>
                                <li className="flex gap-2">
                                    <strong className="min-w-[60px]">Refusal?</strong>
                                    <div>
                                        <span className="block">Pre-Const Theory: <strong className="text-red-600">MUST</strong> give.</span>
                                        <span className="block">Other matters: <strong className="text-green-600">MAY</strong> refuse.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </MarbleCard>
                </div>
            </div>

            {/* FOOTER: CURATIVE PETITION */}
            <div className="mt-16 text-center">
                <div className="inline-block bg-slate-900 p-1 rounded-2xl shadow-2xl">
                    <div className="bg-white rounded-xl p-8 max-w-2xl border-4 border-double border-slate-300">
                        <h3 className="text-xl font-bold font-serif mb-4 flex justify-center items-center gap-2">
                            <BookOpen className="text-slate-900" /> The Curative Petition
                        </h3>
                        <p className="font-handwriting text-slate-600 mb-4">
                            "The Final Door". Rupa Ashok Hurra Case (2002).<br />
                            Second review of judgment to prevent miscarriage of justice.
                        </p>
                        <button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                                px-8 py-3 rounded font-bold font-serif tracking-widest transition-all
                                ${isCompleted
                                    ? 'bg-yellow-500 text-white shadow-inner'
                                    : 'bg-slate-900 text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                                }
                            `}
                        >
                            {isCompleted ? "JUSTICE DELIVERED" : "SEEK JUSTICE"}
                        </button>
                    </div>
                </div>
            </div>
        </TempleContainer>
    );
}
