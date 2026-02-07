"use client";

import React, { useState } from "react";
import {
    User, FileText, Map, AlertTriangle,
    Link, Scissors, Crown, Scroll,
    AlertCircle, Briefcase, Gavel, Mic2
} from "lucide-react";

interface GovernorModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Agent & The Head (Dual Hat) ---

const StateContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fafaf9] text-slate-900">
        {/* State Emblem Texture (Abstract) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const DualHatCard = ({ children, title, icon: Icon, type, className = "" }: { children: React.ReactNode, title: string, icon?: any, type: "agent" | "head" | "discretion", className?: string }) => {
    const styles = {
        agent: "bg-orange-50 border-orange-200 text-orange-900 shadow-orange-900/10",
        head: "bg-green-50 border-green-200 text-green-900 shadow-green-900/10",
        discretion: "bg-red-50 border-red-200 text-red-900 shadow-red-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative ${styles[type]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function GovernorModule({ onComplete, isCompleted }: GovernorModuleProps) {
    return (
        <StateContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="flex justify-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-100">
                            <Crown size={32} />
                        </div>
                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                            <Link size={32} />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-800 font-serif mb-2 relative z-10">
                        THE GOVERNOR
                    </h1>
                    <p className="text-xl font-bold uppercase tracking-widest text-slate-600">
                        "The Dual Hat: Agent & Head"
                    </p>
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT (THE AGENT) */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-orange-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-orange-700">Phase 1: The Agent (Hat 1)</h2>
                    <div className="h-px bg-orange-400 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* APPOINTMENT LETTER */}
                    <div className="bg-white p-6 shadow-xl border border-slate-200 rotate-1 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-red-100/80 skew-x-12 flex items-center justify-center text-xs font-bold text-red-800 border border-red-200">
                            CONFIDENTIAL
                        </div>
                        <div className="font-serif space-y-4 text-slate-700">
                            <div className="flex justify-between items-start border-b pb-2">
                                <span className="text-xs uppercase tracking-widest text-slate-400">From: Rashtrapati Bhavan</span>
                                <AlertCircle size={20} className="text-orange-500" />
                            </div>
                            <p className="leading-relaxed">
                                "I hereby appoint you as Governor by warrant under my hand and seal."
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm text-orange-900 border-l-4 border-orange-500">
                                <strong>Why Appointed (Not Elected)?</strong>
                                <ul className="list-disc list-inside mt-1 text-xs opacity-80">
                                    <li>Prevent friction with CM.</li>
                                    <li>Maintain Centre's control (Canadian Model).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PUPPET STRINGS (REMOVAL) */}
                    <DualHatCard title="Tenure & Removal" icon={Scissors} type="agent">
                        <div className="text-center space-y-4">
                            <div className="relative inline-block p-4">
                                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-slate-400 -translate-x-1/2"></div>
                                <div className="bg-white px-4 py-2 rounded shadow border border-slate-300 font-bold z-10 relative">
                                    Pleasure of President
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-left">
                                <div className="bg-orange-100 p-2 rounded">
                                    <strong>Term:</strong> 5 Years (Usually).
                                </div>
                                <div className="bg-red-100 p-2 rounded">
                                    <strong>Grounds:</strong> NOT mentioned in Constitution! [PYQ]
                                </div>
                            </div>
                            <p className="text-xs italic opacity-70">
                                "Can be removed anytime. But NOT arbitrarily (B.P. Singhal Case)."
                            </p>
                        </div>
                    </DualHatCard>
                </div>
            </div>

            {/* PHASE 2: POWERS (THE HEAD) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-green-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-green-800">Phase 2: The Head (Hat 2)</h2>
                    <div className="h-px bg-green-600 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* EXECUTIVE MAP */}
                    <DualHatCard title="Executive Powers" icon={Map} type="head">
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>All executive action in his name.</span>
                            </li>
                            <li className="bg-white/50 p-2 rounded border border-green-200">
                                <strong>Appoints:</strong> CM, State Election Comm., Advocate Gen, SPSC Members.
                            </li>
                            <li className="flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 p-1 rounded inline-block">
                                <AlertTriangle size={12} /> Note: Cannot remove State Election Comm (Like HC Judge).
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>Chancellor of Universities.</span>
                            </li>
                        </ul>
                    </DualHatCard>

                    {/* LEGISLATIVE SCROLL */}
                    <DualHatCard title="Legislative Powers" icon={Scroll} type="head">
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center border-b border-green-200 pb-2">
                                <span>Summon / Prorogue</span>
                                <Gavel size={16} className="text-green-700" />
                            </div>
                            <div className="flex justify-between items-center border-b border-green-200 pb-2">
                                <span>Dissolve Assembly</span>
                                <span className="text-xs">(On CM's advice)</span>
                            </div>
                            <div className="bg-white/60 p-3 rounded text-green-900 border border-green-300 shadow-inner">
                                <strong>Nominations:</strong><br />
                                1/6th to Council (Lit, Sci, Art, Social Svc + <span className="underline decoration-wavy decoration-green-500 font-bold">Cooperative Movement</span>).
                            </div>
                        </div>
                    </DualHatCard>
                </div>
            </div>

            {/* PHASE 3: CONSTITUTIONAL DISCRETION */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-red-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-red-700">Phase 3: The Twist (Discretion)</h2>
                    <div className="h-px bg-red-600 flex-1"></div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 text-red-100">
                        <AlertTriangle size={200} />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black text-red-800 flex items-center gap-2">
                                <AlertTriangle /> ART 163 ALERT
                            </h3>
                            <p className="font-bold text-slate-800 text-lg">
                                Constitution explicitly mentions "Discretion" for Governor.
                            </p>
                            <div className="bg-white p-2 rounded text-xs text-red-600 font-mono border border-red-200 inline-block">
                                (President does NOT have this text!)
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md border border-red-100 space-y-3">
                            <strong className="block text-red-800 border-b border-red-100 pb-1 mb-2">Scope of Discretion:</strong>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex gap-2">
                                    <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>Reservation of Bill (Art 200).</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>Recommendation for President's Rule (Art 356).</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>Administrator of adjoining UT.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: THE DEBATE */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
                <div className="bg-slate-800 text-white p-8 rounded-xl relative shadow-2xl">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 border-4 border-slate-700 rounded-full p-3">
                        <Mic2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-4 mt-2 text-orange-400">The "Agent" Debate (Sarkaria Commission)</h3>
                    <p className="italic leading-relaxed opacity-80 mb-6">
                        "He should be an eminent person from outside the state, not intimately connected with local politics. He is the <span className="text-white font-bold not-italic">linchpin</span> of the constitutional apparatus."
                    </p>

                    <div className="h-px bg-slate-600 w-1/2 mx-auto mb-6"></div>

                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-3 rounded font-bold uppercase tracking-widest transition-all
                            ${isCompleted
                                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                : 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg hover:-translate-y-1'
                            }
                        `}
                    >
                        {isCompleted ? "REPORT SUBMITTED" : "SUBMIT REPORT TO PRESIDENT"}
                    </button>
                </div>
            </div>
        </StateContainer>
    );
}
