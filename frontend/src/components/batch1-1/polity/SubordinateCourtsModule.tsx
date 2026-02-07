"use client";

import React, { useState } from "react";
import {
    Gavel, Users, TreeDeciduous,
    Handshake, Scale,
    ArrowDown, FileText, UserPlus,
    Building2, LucideIcon, Stamp
} from "lucide-react";

interface SubordinateCourtsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Foundation (Judicial Pyramid) ---

const FoundationContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f5f5f4] text-slate-900">
        {/* Stone/Pyramid Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const StoneCard = ({ children, title, icon: Icon, color = "brown", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "brown" | "red" | "blue" | "green", className?: string }) => {
    const styles = {
        brown: "bg-[#78350f]/10 border-[#78350f]/20 text-[#78350f] shadow-stone-900/10",
        red: "bg-red-50 border-red-200 text-red-900 shadow-red-900/10",
        blue: "bg-blue-50 border-blue-200 text-blue-900 shadow-blue-900/10",
        green: "bg-green-50 border-green-200 text-green-900 shadow-green-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative ${styles[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function SubordinateCourtsModule({ onComplete, isCompleted }: SubordinateCourtsModuleProps) {
    const [activeSide, setActiveSide] = useState<"civil" | "criminal">("civil");

    return (
        <FoundationContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="flex justify-center items-end mb-4">
                        {/* Pyramid Graphic */}
                        <div className="w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-[#78350f] border-r-[60px] border-r-transparent opacity-80"></div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-[#441c05] font-serif mb-2">
                        SUBORDINATE COURTS
                    </h1>
                    <p className="text-xl font-bold uppercase tracking-widest text-[#78350f]">
                        "The Judicial Foundation"
                    </p>
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT (RULES) */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-[#78350f] flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-[#78350f]">Phase 1: The Gatekeepers</h2>
                    <div className="h-px bg-[#78350f] flex-1 opacity-50"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DISTRICT JUDGES */}
                    <StoneCard title="District Judges (Art 233)" icon={Gavel} color="brown">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center bg-white/50 p-2 rounded">
                                <span>Appointed By</span>
                                <span className="font-bold">Governor</span>
                            </div>
                            <div className="text-xs text-right italic mb-2">
                                (In consultation with High Court)
                            </div>

                            <strong className="block border-b border-current pb-1 mb-1">Qualifications:</strong>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Advocate/Pleader for <span className="font-bold">7 Years</span>.</li>
                                <li>Not already in service.</li>
                                <li>Recommended by HC.</li>
                            </ul>
                        </div>
                    </StoneCard>

                    {/* OTHER JUDGES */}
                    <StoneCard title="Other Judges (Art 234)" icon={UserPlus} color="brown">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center bg-white/50 p-2 rounded">
                                <span>Appointed By</span>
                                <span className="font-bold">Governor</span>
                            </div>
                            <div className="text-xs text-right italic mb-2">
                                (Consultation: SPSC + High Court)
                            </div>

                            <div className="bg-[#78350f] text-white p-3 rounded mt-4">
                                <strong className="block mb-1 text-xs uppercase opacity-80">Art 235: Control</strong>
                                <p>High Court controls posting, promotion, and leave.</p>
                            </div>
                        </div>
                    </StoneCard>
                </div>
            </div>

            {/* PHASE 2: HIERARCHY (THE TREE) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-[#78350f] flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-[#78350f]">Phase 2: The Structure</h2>
                    <div className="h-px bg-[#78350f] flex-1 opacity-50"></div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-xl border border-stone-200">
                    <div className="flex justify-center mb-6 gap-4">
                        <button
                            onClick={() => setActiveSide("civil")}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeSide === 'civil' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-400'}`}
                        >
                            Civil Side
                        </button>
                        <button
                            onClick={() => setActiveSide("criminal")}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeSide === 'criminal' ? 'bg-red-600 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-400'}`}
                        >
                            Criminal Side
                        </button>
                    </div>

                    <div className="relative min-h-[300px] flex flex-col items-center justify-start space-y-4 transition-all duration-300">
                        {/* TOP LEVEL (DUAL HAT) */}
                        <div className={`w-64 p-4 rounded-lg text-center border-2 shadow-md transition-colors ${activeSide === 'civil' ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
                            <strong className="block text-lg">
                                {activeSide === 'civil' ? 'District Judge' : 'Sessions Judge'}
                            </strong>
                            <span className="text-xs opacity-70">
                                {activeSide === 'civil' ? '(Appellate Jurisdiction)' : '(Life Imprisonment / Death*)'}
                            </span>
                            {activeSide === 'criminal' && <div className="text-[10px] text-red-600 mt-1">*Death Sentence needs HC confirmation</div>}
                        </div>

                        <ArrowDown size={24} className="text-slate-300" />

                        {/* MIDDLE LEVEL */}
                        <div className={`w-64 p-3 rounded-lg text-center border shadow-sm ${activeSide === 'civil' ? 'bg-white border-blue-100 text-blue-800' : 'bg-white border-red-100 text-red-800'}`}>
                            <strong className="block">
                                {activeSide === 'civil' ? 'Subordinate Judge' : 'Chief Judicial Magistrate'}
                            </strong>
                            <span className="text-xs opacity-70">
                                {activeSide === 'civil' ? '(Unlimited Pecuniary)' : '(Up to 7 Years Jail)'}
                            </span>
                        </div>

                        <ArrowDown size={24} className="text-slate-300" />

                        {/* LOWER LEVEL */}
                        <div className={`w-64 p-3 rounded-lg text-center border shadow-sm ${activeSide === 'civil' ? 'bg-slate-50 border-blue-50 text-blue-700' : 'bg-slate-50 border-red-50 text-red-700'}`}>
                            <strong className="block">
                                {activeSide === 'civil' ? 'Munsiff Court' : 'Judicial Magistrate (I / II)'}
                            </strong>
                            <span className="text-xs opacity-70">
                                {activeSide === 'civil' ? '(Limited Pecuniary)' : '(Up to 3 Years / 1 Year Jail)'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: LOK ADALATS (ADR) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-green-600 flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-green-800">Phase 3: The Peace Makers</h2>
                    <div className="h-px bg-green-600 flex-1 opacity-50"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* STATUTORY STATUS */}
                    <StoneCard title="Lok Adalat (1987)" icon={Handshake} color="green">
                        <div className="space-y-3 font-mono text-sm">
                            <div className="bg-white p-2 rounded border border-green-200">
                                <strong>Act:</strong> Legal Services Authorities Act, 1987.
                            </div>
                            <div className="bg-white p-2 rounded border border-green-200">
                                <strong>Goal:</strong> Free Legal Aid (Art 39A) + Speed.
                            </div>
                            <div className="p-3 bg-green-100 rounded text-green-900 border border-green-300 flex items-center gap-2">
                                <Gavel size={16} className="text-green-700 decoration-slash" />
                                <span className="font-bold">NO APPEAL lies against award.</span>
                            </div>
                            <p className="text-xs text-center text-slate-500 italic">
                                "Decision is Final & Binding (Deemed Decree)."
                            </p>
                        </div>
                    </StoneCard>

                    {/* PERMANENT LOK ADALAT */}
                    <StoneCard title="Permanent Lok Adalat" icon={Stamp} color="blue">
                        <div className="space-y-4 text-sm">
                            <p className="font-bold text-blue-900 border-b border-blue-200 pb-1">
                                For Public Utility Services:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                                <li className="bg-white p-1 rounded">Transport</li>
                                <li className="bg-white p-1 rounded">Postal</li>
                                <li className="bg-white p-1 rounded">Power</li>
                                <li className="bg-white p-1 rounded">Hospital</li>
                            </ul>
                            <div className="bg-blue-100 p-2 rounded text-blue-900 text-xs">
                                <strong>Super Power:</strong> Can decide case on merit if no settlement reached.
                            </div>
                        </div>
                    </StoneCard>
                </div>
            </div>

            {/* FOOTER: GRAM NYAYALAYAS */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
                <div className="bg-stone-100 p-6 rounded-xl border-2 border-stone-300 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-stone-200 p-3 rounded-full border-4 border-white shadow-sm">
                        <Building2 size={24} className="text-stone-600" />
                    </div>
                    <h3 className="text-lg font-bold font-serif mb-2 mt-2 text-stone-800">Gram Nyayalayas (2008)</h3>
                    <p className="text-sm text-stone-600 mb-4">
                        Mobile courts at village level. Not bound by <span className="font-bold">Evidence Act</span> (Natural Justice applies).
                    </p>

                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-3 rounded font-bold uppercase tracking-widest transition-all
                            ${isCompleted
                                ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                                : 'bg-[#78350f] text-white hover:bg-[#5b2608] hover:shadow-lg'
                            }
                        `}
                    >
                        {isCompleted ? "Justice at Doorstep" : "Visit Village Court"}
                    </button>
                </div>
            </div>
        </FoundationContainer>
    );
}
