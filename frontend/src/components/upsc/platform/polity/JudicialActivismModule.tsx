"use client";

import React from "react";
import {
    Megaphone, Gavel, Scale, AlertTriangle,
    CheckSquare, PenTool, Swords, Mic2,
    Construction, ArrowRight, Ban, Activity,
    Flame, CheckCircle2
} from "lucide-react";

interface JudicialActivismModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Gavel & The Line (Protest & Activism) ---

const ActivismContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#e5e7eb] text-foreground">
        {/* Grunge/Protest Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
        {/* Fence Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const ProtestCard = ({ children, title, icon: Icon, color = "orange", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "orange" | "red" | "grey", className?: string }) => {
    const accents = {
        orange: "border-orange-500 shadow-orange-900/10",
        red: "border-red-600 shadow-red-900/10",
        grey: "border-slate-500 shadow-slate-900/10"
    };
    const bgs = {
        orange: "bg-orange-50",
        red: "bg-red-50",
        grey: "bg-muted"
    };
    const text = {
        orange: "text-orange-900",
        red: "text-red-900",
        grey: "text-foreground"
    };

    return (
        <div className={`p-6 border-l-8 shadow-lg rounded-r-xl ${accents[color]} ${bgs[color]} relative overflow-hidden ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-black/10">
                {Icon && <Icon className={text[color]} size={28} />}
                <h3 className={`text-2xl font-black font-serif uppercase tracking-tighter ${text[color]}`}>{title}</h3>
            </div>
            {children}
        </div>
    );
};

const FencePost = ({ label, type }: { label: string, type: "good" | "bad" }) => (
    <div className={`relative px-4 py-2 border-2 rounded font-bold text-center text-sm ${type === 'good' ? 'bg-green-100 border-green-600 text-green-900' : 'bg-red-100 border-red-600 text-red-900'}`}>
        {label}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-slate-400"></div>
    </div>
);

export default function JudicialActivismModule({ onComplete, isCompleted, chapterNumber = "28" }: JudicialActivismModuleProps) {
    return (
        <ActivismContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative rotate-[-2deg]">
                    <div className="bg-orange-600 text-white px-8 py-2 text-4xl md:text-6xl font-black uppercase tracking-widest shadow-xl transform skew-x-[-10deg]">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs font-bold tracking-widest">CHAPTER {chapterNumber}</div>
                        Judicial Activism
                    </div>
                    <div className="absolute -top-8 -right-8 text-foreground rotate-[15deg]">
                        <Megaphone size={60} strokeWidth={2.5} />
                    </div>
                </div>
                <p className="mt-8 text-xl font-bold uppercase tracking-widest text-muted-foreground border-y-2 border-slate-400 inline-block py-2">
                    "Stepping Out of the Courtroom"
                </p>
            </div>

            {/* PHASE 1: CONCEPT & ORIGIN */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-black uppercase text-muted-foreground">Phase 1: The Awakening</h2>
                    <div className="h-1 flex-1 bg-slate-300"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DEFINITION */}
                    <ProtestCard title="The Concept" icon={Megaphone} color="orange">
                        <div className="space-y-4 text-sm font-sans">
                            <p className="font-bold text-lg leading-tight">
                                Judiciary playing an <span className="text-orange-600">ACTIVE ROLE</span> in protecting rights & promoting justice.
                            </p>
                            <div className="p-3 bg-card/50 rounded border border-orange-200">
                                <strong>Tool:</strong> PIL (Public Interest Litigation).
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mt-2 border-t pt-2 border-orange-200">
                                <Swords size={12} /> Opposite: Judicial Restraint
                            </div>
                        </div>
                    </ProtestCard>

                    {/* PIONEERS */}
                    <ProtestCard title="The Pioneers" icon={Gavel} color="grey">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm font-bold opacity-60">
                                <span>USA (1947)</span>
                                <span>India (1970s)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card p-2 rounded shadow text-center border border-border">
                                    <span className="block text-xs uppercase text-muted-foreground">Coined By</span>
                                    <strong className="block text-foreground leading-tight mt-1">Arthur Schlesinger Jr.</strong>
                                </div>
                                <div className="bg-card p-2 rounded shadow text-center border border-border space-y-2">
                                    <span className="block text-xs uppercase text-muted-foreground">Developed By</span>
                                    <div className="text-left pl-2 space-y-1 text-xs font-bold text-muted-foreground border-l-2 border-orange-400">
                                        <div>V.R. Krishna Iyer</div>
                                        <div>P.N. Bhagwati (Father of PIL)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ProtestCard>
                </div>
            </div>

            {/* PHASE 2: JUSTIFICATION & TRENDS */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-black uppercase text-muted-foreground">Phase 2: Justification (Why?)</h2>
                    <div className="h-1 flex-1 bg-slate-300"></div>
                </div>

                <div className="bg-slate-800 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')]"></div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        {/* REASONS CHECKLIST */}
                        <div>
                            <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-2"><CheckSquare /> Reasons for Activism</h3>
                            <ul className="space-y-4 font-handwriting text-sm">
                                <li className="flex gap-3">
                                    <div className="mt-1"><AlertTriangle size={16} className="text-yellow-400" /></div>
                                    <div>
                                        <strong className="text-white block">Legislative Vacuum</strong>
                                        <span className="text-muted-foreground">Parliament fails to make laws. (e.g. Vishaka Guidelines).</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1"><AlertTriangle size={16} className="text-red-400" /></div>
                                    <div>
                                        <strong className="text-white block">Executive Failure</strong>
                                        <span className="text-muted-foreground">Govt fails to protect rights (Bonded Labor).</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1"><AlertTriangle size={16} className="text-blue-400" /></div>
                                    <div>
                                        <strong className="text-white block">Constitutional Vacuum</strong>
                                        <span className="text-muted-foreground">Expanding meanings (Art 21 = Privacy, Health).</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* ACTIVATORS (TOOLS) */}
                        <div className="bg-card/5 p-4 rounded border border-white/10">
                            <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2"><Construction /> The Tools</h3>
                            <div className="space-y-3">
                                <div className="bg-slate-700 p-2 rounded flex items-center gap-3">
                                    <div className="bg-orange-600 p-1 rounded text-white font-bold text-xs w-20 text-center">PIL</div>
                                    <span className="text-xs text-slate-300">Locus Standi relaxed. (Any person can file).</span>
                                </div>
                                <div className="bg-slate-700 p-2 rounded flex items-center gap-3">
                                    <div className="bg-orange-600 p-1 rounded text-white font-bold text-xs w-20 text-center">Epistolary</div>
                                    <span className="text-xs text-slate-300">Letters/Postcards accepted as writs.</span>
                                </div>
                                <div className="bg-slate-700 p-2 rounded flex items-center gap-3">
                                    <div className="bg-orange-600 p-1 rounded text-white font-bold text-xs w-20 text-center">Suo Moto</div>
                                    <span className="text-xs text-slate-300">Court acting on its own (Newspaper reports).</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: ACTIVISM VS OVERREACH */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <h2 className="text-2xl font-black uppercase text-red-800">Phase 3: The Danger Zone</h2>
                    <div className="h-1 flex-1 bg-red-200"></div>
                </div>

                {/* THE THIN RED LINE DIAGRAM */}
                <div className="bg-card p-6 rounded-xl shadow-xl border-t-8 border-red-600 relative overflow-hidden">
                    <h3 className="text-center font-black text-2xl mb-8 uppercase tracking-widest text-foreground">The Thin Red Line</h3>

                    <div className="relative h-64 border-b-4 border-dashed border-red-300 flex items-end justify-center gap-8 md:gap-16 pb-0">
                        {/* Fence Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 z-10"></div>

                        {/* Activism Side */}
                        <div className="flex flex-col gap-2 items-center mb-8 transition-transform hover:-translate-y-2">
                            <FencePost label="Hussainara Khatoon (Speedy Trial)" type="good" />
                            <FencePost label="MC Mehta (Environment)" type="good" />
                            <span className="text-green-700 font-bold uppercase text-xs mt-2 bg-green-100 px-2 py-1 rounded">Activism (Allowed)</span>
                        </div>

                        {/* The Line Marker */}
                        <div className="h-full w-1 border-l-2 border-red-500 border-dashed absolute left-1/2 -translate-x-1/2 opacity-50"></div>

                        {/* Overreach Side */}
                        <div className="flex flex-col gap-2 items-center mb-8 transition-transform hover:-translate-y-2">
                            <FencePost label="Natl Anthem in Cinema" type="bad" />
                            <FencePost label="Liquor Ban on Highways" type="bad" />
                            <span className="text-red-700 font-bold uppercase text-xs mt-2 bg-red-100 px-2 py-1 rounded">Overreach (Danger)</span>
                        </div>
                    </div>
                </div>

                {/* SEPARATION OF POWERS */}
                <ProtestCard title="Separation of Powers (Art 50)" icon={Scale} color="red">
                    <div className="flex items-center justify-between text-sm font-handwriting">
                        <div className="w-1/2 pr-4 border-r border-red-200">
                            <strong className="block text-red-900 text-lg mb-1">Doctrine</strong>
                            Judiciary should not run the administration.
                        </div>
                        <div className="w-1/2 pl-4 text-right">
                            <strong className="block text-red-900 text-lg mb-1">Criticism</strong>
                            "Judicial Tyranny" or "Govt by Judiciary".
                        </div>
                    </div>
                </ProtestCard>
            </div>

            {/* FOOTER: QUOTE */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
                <div className="bg-slate-800 text-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-[10px_10px_0px_#ea580c] relative">
                    <div className="absolute -top-6 -left-6 bg-orange-500 rounded-full p-3 shadow-lg">
                        <PenTool className="text-white" size={24} />
                    </div>
                    <p className="font-serif italic text-lg leading-relaxed mb-4">
                        "Judicial activism is like a sharp-edged tool. It has to be used as a <span className="text-green-400 font-bold">scalpel by a surgeon</span>, not as a <span className="text-red-400 font-bold">rampuri knife</span>."
                    </p>
                    <div className="text-right text-sm font-bold text-muted-foreground uppercase tracking-widest">
                        - Justice J.S. Verma
                    </div>
                </div>

                <div className="mt-12">
                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-4 rounded font-black uppercase text-xl transition-all skew-x-[-10deg]
                            ${isCompleted
                                ? 'bg-slate-900 text-muted-foreground cursor-not-allowed shadow-none scale-95'
                                : 'bg-orange-600 text-white shadow-[8px_8px_0px_#1e293b] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#1e293b] active:translate-y-0 active:shadow-none'
                            }
                        `}
                    >
                        {isCompleted ? 
                            <span className="flex items-center gap-2 justify-center"><CheckCircle2 size={18} /> CHAPTER {chapterNumber} COMPLETED</span> : 
                            <span className="flex items-center gap-2 justify-center"><Megaphone size={18} /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                        }
                    </button>
                </div>
            </div>
        </ActivismContainer>
    );
}
