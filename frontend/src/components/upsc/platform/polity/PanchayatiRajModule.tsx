"use client";

import React, { useState } from "react";
import {
    TreeDeciduous, TreePine, Map,
    Gavel, CheckCircle2, HelpCircle,
    DollarSign, Users, AlertCircle,
    ArrowRight, ChevronRight, Scale,
    Calendar, ShieldCheck, Info, UserPlus
} from "lucide-react";

interface PanchayatiRajModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Village Tree ---

const TreeContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fafaf9] text-foreground selection:bg-emerald-100">
        {/* Crumpled Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')]"></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[size:30px_30px] bg-[linear-gradient(to_right,#a16207_1px,transparent_1px),linear-gradient(to_bottom,#a16207_1px,transparent_1px)]"></div>

        <div className="max-w-5xl mx-auto space-y-20 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const SketchCard = ({ children, title, icon: Icon, color = "green", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "green" | "earth" | "blue" | "stone", className?: string }) => {
    const styles = {
        green: "bg-emerald-50 border-emerald-200 text-emerald-900 shadow-emerald-900/10",
        earth: "bg-amber-50 border-amber-200 text-amber-900 shadow-amber-900/10",
        blue: "bg-blue-50 border-blue-200 text-blue-900 shadow-blue-900/10",
        stone: "bg-stone-50 border-stone-200 text-stone-900 shadow-stone-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 ${styles[color]} ${className}`}>
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-current opacity-[0.05] translate-x-1/2 -translate-y-1/2 rotate-45"></div>

            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default function PanchayatiRajModule({ onComplete, isCompleted, chapterNumber }: PanchayatiRajModuleProps) {
    const [activeRoot, setActiveRoot] = useState(0);

    const committees = [
        { year: "1957", name: "Balwant Rai Mehta", recon: "Democratic Decentralization. 3-Tier Structure.", pyq: true },
        { year: "1977", name: "Ashok Mehta", recon: "2-Tier Structure (Mandal). Political Participation.", pyq: false },
        { year: "1985", name: "G.V.K. Rao", recon: "Grass without roots. Regular elections.", pyq: false },
        { year: "1986", name: "L.M. Singhvi", recon: "Constitutional Status. Judicial Tribunals.", pyq: true }
    ];

    return (
        <TreeContainer>
            {/* HERO: THE VILLAGE TREE */}
            <div className="text-center py-16 relative">
                <div className="inline-block relative">
                    <TreeDeciduous size={120} className="text-emerald-700 mx-auto mb-4 animate-bounce-slow" />
                    <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-amber-900 font-serif mb-4 tracking-tight">
                    PANCHAYATI RAJ
                </h1>
                <p className="text-xl font-bold uppercase tracking-[0.3em] text-emerald-800">
                    "The Roots of Democracy"
                </p>
            </div>

            {/* PHASE 1: THE ROOTS (EVOLUTION) */}
            <div className="space-y-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-amber-700/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-amber-900">Phase 1: Deep Roots</h2>
                    <div className="h-px bg-amber-700/30 flex-1"></div>
                </div>

                <div className="relative pt-12">
                    {/* The Root Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-900/20 rounded-full"></div>
                    <div className="grid grid-cols-4 gap-4">
                        {committees.map((c, i) => (
                            <div
                                key={i}
                                className={`relative cursor-pointer group transition-all duration-300 ${activeRoot === i ? 'scale-105' : 'opacity-60 scale-95'}`}
                                onClick={() => setActiveRoot(i)}
                            >
                                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#fafaf9] shadow-md transition-colors ${activeRoot === i ? 'bg-amber-700' : 'bg-amber-200'}`}></div>
                                <div className="text-center mt-6">
                                    <div className="text-xs font-mono font-bold text-amber-600">{c.year}</div>
                                    <div className="text-sm font-bold text-amber-900 leading-tight">{c.name}</div>
                                </div>
                                {c.pyq && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded shadow-sm">PYQ</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-card border-2 border-amber-200 rounded-2xl shadow-xl relative">
                        <div className="absolute -top-4 left-8 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded">Recommendation</div>
                        <p className="text-xl font-serif text-amber-900 italic">
                            "{committees[activeRoot].recon}"
                        </p>
                    </div>
                </div>

                <SketchCard title="The 73rd Amendment (1992)" icon={Scale} color="earth">
                    <div className="grid md:grid-cols-2 gap-8 items-center font-mono text-sm uppercase tracking-wider">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-amber-200 pb-1">
                                <span>Part Added</span>
                                <span className="font-bold text-amber-700">Part IX</span>
                            </div>
                            <div className="flex justify-between border-b border-amber-200 pb-1">
                                <span>Schedule</span>
                                <span className="font-bold text-amber-700">11th Schedule</span>
                            </div>
                            <div className="flex justify-between border-b border-amber-200 pb-1">
                                <span>Articles</span>
                                <span className="font-bold text-amber-700">243 to 243-O</span>
                            </div>
                        </div>
                        <div className="bg-amber-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                            <Calendar size={32} className="mb-2 text-amber-700" />
                            <span className="text-xs opacity-60">Force Date</span>
                            <strong className="text-lg">April 24, 1993</strong>
                            <span className="text-[10px] mt-1 text-amber-600 italic">"Panchayati Raj Day"</span>
                        </div>
                    </div>
                </SketchCard>
            </div>

            {/* PHASE 2: THE TRUNK (STRUCTURE) */}
            <div className="space-y-12 mt-20">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-emerald-700/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-emerald-900">Phase 2: The Core Trunk</h2>
                    <div className="h-px bg-emerald-700/30 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* THE 3 TIERS */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-900/5 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform"></div>
                        <div className="relative bg-card border-2 border-emerald-800 p-8 rounded-2xl flex flex-col items-center space-y-4">
                            <h3 className="font-bold text-emerald-900 uppercase tracking-widest border-b-2 border-emerald-100 pb-2 w-full text-center">3-Tier Hierarchy (Art 243-B)</h3>

                            <div className="w-full space-y-3">
                                <div className="p-3 bg-emerald-800 text-white rounded text-center shadow-lg font-bold">
                                    Zila Parishad (District)
                                </div>
                                <div className="flex justify-center"><ChevronRight className="rotate-90 text-emerald-200" /></div>
                                <div className="p-3 bg-emerald-600 text-white rounded text-center shadow-md font-bold relative">
                                    Panchayat Samiti (Inter)
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-red-500 text-[8px] p-1 rounded-full text-white" title="Exc: States < 20L Pop skip this">PYQ</div>
                                </div>
                                <div className="flex justify-center"><ChevronRight className="rotate-90 text-emerald-200" /></div>
                                <div className="p-3 bg-emerald-500 text-white rounded text-center shadow-sm font-bold">
                                    Gram Panchayat (Village)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GRAM SABHA */}
                    <div className="bg-emerald-50 border-2 border-dashed border-emerald-300 p-8 rounded-2xl flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-4 text-emerald-800">
                            <Users size={40} />
                            <h3 className="text-2xl font-black font-serif uppercase leading-tight">Gram Sabha<br /><span className="text-sm font-normal text-emerald-600">Art 243-A</span></h3>
                        </div>
                        <p className="text-sm italic text-emerald-900 bg-card/60 p-4 rounded-xl border border-emerald-100 shadow-inner">
                            "The Foundation of the entire system. Consists of <span className="font-bold underline">all registered voters</span> in the village area."
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                            <CheckCircle2 size={16} /> Direct Democracy in action.
                        </div>
                    </div>
                </div>

                {/* ELECTIONS MACHINERY */}
                <div className="grid md:grid-cols-2 gap-8">
                    <SketchCard title="Election Process" icon={UserPlus} color="stone">
                        <div className="space-y-4 text-sm">
                            <div className="p-3 border-l-4 border-stone-800 bg-card shadow-sm">
                                <strong className="block text-stone-900">Members</strong>
                                <p className="text-xs">Directly elected at ALL levels.</p>
                            </div>
                            <div className="p-3 border-l-4 border-stone-400 bg-card shadow-sm">
                                <strong className="block text-stone-900">Chairpersons</strong>
                                <p className="text-xs">Indirectly elected at Inter/District levels. Village level as per State Law.</p>
                            </div>
                        </div>
                    </SketchCard>

                    <SketchCard title="State Election Comm (243-K)" icon={ShieldCheck} color="stone">
                        <div className="space-y-4 text-sm font-mono leading-relaxed">
                            <div className="bg-stone-800 text-stone-50 p-2 rounded text-[10px] text-center mb-2">CRITICAL SAFEGUARD</div>
                            <p>Removal: Same manner as judge of <span className="text-red-600 font-bold">High Court</span>.</p>
                            <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-100 mt-4">
                                <AlertCircle size={16} className="text-red-500" />
                                <span className="text-[10px] text-red-800 font-bold">ECI (Art 324) has NO ROLE here.</span>
                            </div>
                        </div>
                    </SketchCard>
                </div>
            </div>

            {/* PHASE 3: THE BRANCHES (PROVISIONS) */}
            <div className="space-y-12 mt-20">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-blue-700/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-blue-900">Phase 3: The Branches</h2>
                    <div className="h-px bg-blue-700/30 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* COMPULSORY */}
                    <div className="bg-card border-2 border-emerald-600 rounded-3xl p-8 relative shadow-xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest">Compulsory</div>
                        <ul className="space-y-4 text-sm">
                            {[
                                "Establishment of Gram Sabha.",
                                "3-Tier System (except <20L states).",
                                "Direct elections to all seats.",
                                "Min Age 21 Years to contest. (PYQ)",
                                "1/3 Reservation for Women.",
                                "5-Year fixed term.",
                                "State Election & Finance Comm."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start group">
                                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-muted-foreground leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VOLUNTARY */}
                    <div className="bg-card border-2 border-blue-600 rounded-3xl p-8 relative shadow-xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest">Voluntary</div>
                        <ul className="space-y-4 text-sm">
                            {[
                                "Reservation for OBCs. (PYQ)",
                                "Giving voting rights to MPs/MLAs.",
                                "Devolution of powers (29 items).",
                                "Power to levy taxes / collect funds.",
                                "Autonomy in budget preparation."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start group">
                                    <HelpCircle size={18} className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-muted-foreground leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="flex items-center gap-2 text-blue-800 font-bold text-xs mb-2">
                                <DollarSign size={14} /> FINANCE (Art 243-I)
                            </h4>
                            <p className="text-[10px] text-blue-900/60 leading-relaxed font-mono">
                                SFC constituted by <span className="font-bold underline">Governor</span> every 5 Years. Reviews financial position & recommends tax distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* THE SCOPE CLOUD (11th Schedule & Exemptions) */}
            <div className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Map size={150} />
                </div>

                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                    <div className="md:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold font-serif text-emerald-400 border-b border-emerald-400/20 pb-2">The 11th Schedule</h3>
                        <div className="grid grid-cols-2 gap-4 text-[11px] font-mono opacity-80">
                            <div>• Agriculture</div>
                            <div>• Land Consolidation</div>
                            <div>• Minor Irrigation</div>
                            <div>• Animal Husbandry</div>
                            <div>• Social Forestry</div>
                            <div>• Rural Housing</div>
                            <div>• Drinking Water</div>
                            <div>• PDS (Public Distribution)</div>
                        </div>
                        <div className="p-3 bg-card/5 rounded-lg border border-white/10 flex items-center gap-3">
                            <Info size={16} className="text-emerald-400" />
                            <span className="text-xs uppercase font-bold tracking-widest">Total 29 Functional Items</span>
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold font-serif text-red-400 border-b border-red-400/20 pb-2">Exempted Zones (243-M)</h3>
                        <div className="space-y-4">
                            <div className="bg-red-900/40 p-4 rounded-xl border border-red-500/30">
                                <strong className="block text-red-200 text-xs mb-1">States Completely Exempt:</strong>
                                <p className="text-lg font-black tracking-[0.2em]">NaMeMi</p>
                                <span className="text-[10px] opacity-60">(Nagaland, Meghalaya, Mizoram)</span>
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                                Partially Exempt: Hill areas of <span className="text-slate-100">Manipur</span> & <span className="text-slate-100">Darjeeling</span>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PESA FOOTER */}
            <div className="mt-20 border-t-8 border-dotted border-amber-900/20 pt-12 pb-8">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <div className="bg-[#a16207] p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                        {/* Tribal Art Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[size:40px_40px] bg-[radial-gradient(circle,#fafaf9_1px,transparent_1px)]"></div>

                        <h3 className="text-3xl font-black text-white font-serif mb-4 flex items-center justify-center gap-3">
                            PESA ACT 1996
                        </h3>
                        <div className="bg-card/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white space-y-3">
                            <p className="text-sm font-bold uppercase tracking-widest">"Self Rule for Tribals"</p>
                            <p className="text-xs text-amber-50 opacity-90 leading-relaxed">
                                Gram Sabha is **SUPREME**. Ownership of minor forest produce, control over money lending, and prevention of land alienation.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-12 py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all
                            ${isCompleted
                                ? 'bg-slate-200 text-muted-foreground cursor-not-allowed shadow-inner'
                                : 'bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white shadow-[0_10px_20px_-10px_rgba(146,64,14,0.5)] hover:scale-[1.02] hover:shadow-2xl active:scale-95'
                            }
                        `}
                    >
                        {isCompleted ? "Panchayat Empowered" : "Notify Constitution (73rd AA)"}
                    </button>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Goal: Power to the People 365 Days a Year</p>
                </div>
            </div>
        </TreeContainer>
    );
}
