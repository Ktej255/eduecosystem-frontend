"use client";

import React from "react";
import {
    Crown, Scale, Scroll, Stamp, Calculator,
    AlertTriangle, XCircle, CheckCircle2, Gavel,
    FileText, Ban, Feather, PenTool, ShieldAlert,
    BookOpen, Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRESIDENT_PYQS } from "./data/pyq-data";

interface PresidentModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Presidential Seal (Royal Desk) ---

const RoyalDeskContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fcfbf7] text-foreground">
        {/* Parchment Texture */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] mix-blend-multiply"></div>
        {/* Royal Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Crown size={400} className="text-purple-900" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

// Royal Card Style
const RoyalCard = ({ children, title, icon: Icon, color = "purple", className = "" }: { children: React.ReactNode, title: string, icon: any, color?: "purple" | "red" | "gold" | "black", className?: string }) => {
    const theme = {
        purple: { border: "border-purple-800", bg: "bg-purple-50", header: "text-purple-900", icon: "text-purple-700" },
        red: { border: "border-red-800", bg: "bg-red-50", header: "text-red-900", icon: "text-red-700" },
        gold: { border: "border-amber-600", bg: "bg-amber-50", header: "text-amber-900", icon: "text-amber-700" },
        black: { border: "border-slate-800", bg: "bg-slate-800 text-white", header: "text-white", icon: "text-slate-300" },
    };

    const t = theme[color];

    return (
        <div className={`border-2 ${t.border} ${t.bg} relative p-6 shadow-xl ${className}`}
            style={{ borderRadius: "2px 25px 2px 25px" }} // Subtle "document" shape
        >
            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${t.border}`}></div>
            <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 ${t.border}`}></div>
            <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${t.border}`}></div>
            <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${t.border}`}></div>

            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-current opacity-80">
                <Icon className={t.icon} size={24} />
                <h3 className={`font-bold text-xl font-serif ${t.header}`}>{title}</h3>
            </div>
            {children}
        </div>
    );
};

// Math Blackboard Component
const Blackboard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-slate-800 border-4 border-amber-900 rounded-lg p-6 text-white font-mono shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
        <div className="relative z-10 space-y-4">
            {children}
        </div>
    </div>
);

// Stamp Component
const StampMark = ({ label, color = "red", rotation = -12 }: { label: string, color?: "red" | "green" | "blue", rotation?: number }) => {
    const colors = {
        red: "border-red-600 text-red-600",
        green: "border-green-600 text-green-600",
        blue: "border-blue-600 text-blue-600",
    };
    return (
        <div
            className={`absolute z-20 border-4 ${colors[color]} px-4 py-2 font-black text-xl uppercase tracking-widest opacity-80 mix-blend-multiply`}
            style={{ transform: `rotate(${rotation}deg)`, borderRadius: "10px", maskImage: "url(https://www.transparenttextures.com/patterns/grunge-wall.png)" }}
        >
            {label}
        </div>
    );
};

export default function PresidentModule({ onComplete, isCompleted, chapterNumber = "18" }: PresidentModuleProps) {
    return (
        <RoyalDeskContainer>
            {/* HERO */}
            <div className="text-center relative py-10 mb-8">
                <div className="inline-block relative">
                    <Crown size={64} className="text-purple-800 mx-auto mb-4 animate-bounce" />
                    <div className="border-y-4 border-double border-purple-900 py-4 px-12 bg-card/50 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 text-purple-800 font-bold uppercase tracking-[0.3em] text-sm mb-2">
                            <Scale size={16} /> Chapter {chapterNumber}
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-purple-950 font-serif tracking-tight">
                            The President
                        </h1>
                        <p className="text-purple-800 font-serif italic mt-2">"Head of State. First Citizen. Symbol of Unity."</p>
                    </div>
                </div>
            </div>

            {/* PHASE 1: ELECTION & IMPEACHMENT */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-[2px] flex-1 bg-purple-900/20"></div>
                    <h2 className="text-3xl font-bold text-purple-900 font-serif">Phase 1: Election & Impeachment</h2>
                    <div className="h-[2px] flex-1 bg-purple-900/20"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ART 54: ELECTORAL COLLEGE */}
                    <RoyalCard title="Art 54: Electoral College" icon={CheckCircle2} color="purple">
                        <div className="space-y-4">
                            <div className="bg-green-100 p-3 rounded-tr-xl rounded-bl-xl border-l-4 border-green-600 shadow-sm relative">
                                <span className="absolute -top-3 -right-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">VOTE YES</span>
                                <ul className="list-disc pl-4 space-y-1 text-sm font-bold text-green-900">
                                    <li>Elected MPs of Lok Sabha & Rajya Sabha.</li>
                                    <li>Elected MLAs of States.</li>
                                    <li>Elected MLAs of Delhi & Puducherry (70th AA).</li>
                                </ul>
                            </div>

                            <div className="bg-red-100 p-3 rounded-tl-xl rounded-br-xl border-r-4 border-red-600 shadow-sm relative">
                                <span className="absolute -top-3 -left-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">VOTE NO</span>
                                <ul className="list-disc pl-4 space-y-1 text-sm font-bold text-red-900">
                                    <li>Nominated Members (Parliament/Assembly).</li>
                                    <li>Members of Legislative Councils (MLCs).</li>
                                </ul>
                                <div className="mt-2 text-xs text-red-700 italic bg-card/50 p-1 rounded">
                                    [PYQ Trap]: Nominated members don't vote in election, but DO vote in Impeachment!
                                </div>
                            </div>
                        </div>
                    </RoyalCard>

                    {/* ART 61: IMPEACHMENT */}
                    <RoyalCard title="Art 61: Impeachment" icon={Gavel} color="red">
                        <div className="absolute top-4 right-4">
                            <ShieldAlert className="text-red-200" size={60} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-baseline border-b border-red-200 pb-2">
                                <span className="font-bold text-red-800">Ground</span>
                                <span className="text-right text-sm">"Violation of Constitution"<br /><span className="text-[10px] text-red-500">(Not defined)</span></span>
                            </div>

                            <div>
                                <span className="font-bold text-red-800 block mb-2">The Process</span>
                                <ol className="list-decimal pl-4 space-y-2 text-sm text-red-900">
                                    <li>Initiated in <strong>EITHER</strong> House.</li>
                                    <li><strong>1/4th</strong> members must sign charges.</li>
                                    <li><strong>14 Days</strong> notice to President.</li>
                                    <li className="bg-card/60 p-1 rounded border border-red-200">
                                        Passed by <strong>2/3rd of TOTAL Membership</strong> of both Houses separately. [PYQ]
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </RoyalCard>
                </div>

                {/* ART 55: MATH OF ELECTION */}
                <div className="max-w-4xl mx-auto mt-8">
                    <Blackboard>
                        <h3 className="text-xl font-bold text-amber-400 border-b border-white/20 pb-2 flex items-center gap-2">
                            <Calculator size={20} /> Art 55: The Math (Proportional Rep. by STV)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8 font-handwriting text-lg">
                            <div>
                                <h4 className="text-muted-foreground text-sm uppercase mb-2">Value of 1 MLA Vote</h4>
                                <div className="text-2xl text-white mb-2">
                                    <span className="border-b-2 border-white inline-block px-2">Total Population of State</span><br />
                                    <div className="flex justify-center items-center gap-2">
                                        <span>Total Elected MLAs</span>
                                        <span>×</span>
                                        <span>1/1000</span>
                                    </div>
                                </div>
                                <p className="text-xs text-amber-500/80 mt-2">*Population based on 1971 Census (till 2026).</p>
                            </div>

                            <div>
                                <h4 className="text-muted-foreground text-sm uppercase mb-2">Value of 1 MP Vote</h4>
                                <div className="text-2xl text-white mb-2">
                                    <span className="border-b-2 border-white inline-block px-2">Total Value of all MLAs</span><br />
                                    <span>Total Elected MPs</span>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <h4 className="text-muted-foreground text-sm uppercase">Electoral Quota</h4>
                                    <div className="text-xl">
                                        (Total Valid Votes / 2) + 1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Blackboard>
                </div>
            </div>

            {/* PHASE 2: POWERS (STAMPS) */}
            <div className="space-y-6 pt-12">
                <div className="flex items-center gap-4">
                    <div className="h-[2px] flex-1 bg-purple-900/20"></div>
                    <h2 className="text-3xl font-bold text-purple-900 font-serif">Phase 2: The Presidential Toolkit</h2>
                    <div className="h-[2px] flex-1 bg-purple-900/20"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* VETO POWERS */}
                    <div className="md:col-span-3 bg-card border-2 border-border p-8 shadow-inner relative overflow-hidden rounded-xl">
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 font-serif">
                            <Stamp size={24} /> Veto Powers (Art 111)
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Absolute Veto */}
                            <div className="p-6 border-2 border-red-200 bg-red-50/50 rounded-lg relative group hover:scale-105 transition-transform cursor-pointer">
                                <StampMark label="REJECTED" color="red" />
                                <h4 className="font-bold text-red-900 mt-8 mb-2">Absolute Veto</h4>
                                <p className="text-sm text-red-800">Withhold assent. Bill dies.</p>
                                <p className="text-xs text-red-600 mt-2">Used: Private member bills or Cabinet resignation.</p>
                            </div>

                            {/* Suspensive Veto */}
                            <div className="p-6 border-2 border-blue-200 bg-blue-50/50 rounded-lg relative group hover:scale-105 transition-transform cursor-pointer">
                                <StampMark label="RETURN" color="blue" rotation={10} />
                                <h4 className="font-bold text-blue-900 mt-8 mb-2">Suspensive Veto</h4>
                                <p className="text-sm text-blue-800">Return for reconsideration.</p>
                                <p className="text-xs text-blue-600 mt-2 bg-card/50 p-1 border border-blue-200">
                                    <strong>Override:</strong> Simple Majority makes it BINDING. [PYQ]
                                </p>
                            </div>

                            {/* Pocket Veto */}
                            <div className="p-6 border-2 border-border bg-muted rounded-lg relative group hover:scale-105 transition-transform cursor-pointer">
                                <StampMark label="PENDING..." color="green" rotation={0} />
                                <h4 className="font-bold text-foreground mt-8 mb-2">Pocket Veto</h4>
                                <p className="text-sm text-foreground">No action. Indefinite delay.</p>
                                <p className="text-xs text-muted-foreground mt-2">Const: "No Time Limit". (Zail Singh, 1986).</p>
                            </div>
                        </div>
                    </div>

                    {/* ORDINANCE (SCROLL) */}
                    <RoyalCard title="Ordinance (Art 123)" icon={Scroll} color="gold" className="md:col-span-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-amber-800 font-bold">
                                <AlertTriangle size={18} /> Condition: Parliament NOT in session.
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-amber-100 p-3 rounded border border-amber-300">
                                    <strong className="block text-amber-900">Lifespan</strong>
                                    Max 6 months + 6 weeks.
                                </div>
                                <div className="bg-amber-100 p-3 rounded border border-amber-300">
                                    <strong className="block text-amber-900">Judicial Review</strong>
                                    Yes (Cooper Case, 1970).
                                </div>
                            </div>
                            <p className="text-xs text-amber-700 italic border-t border-amber-300 pt-2">
                                Limitation: Cannot amend the Constitution.
                            </p>
                        </div>
                    </RoyalCard>

                    {/* PARDONING (MERCY) */}
                    <RoyalCard title="Pardoning (Art 72)" icon={Feather} color="black">
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-slate-700 pb-1">
                                <span className="text-muted-foreground">Pardon</span>
                                <span className="text-white font-bold">Absolves All</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-700 pb-1">
                                <span className="text-muted-foreground">Commutation</span>
                                <span className="text-white font-bold">Death &rarr; Life</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-700 pb-1">
                                <span className="text-muted-foreground">Remission</span>
                                <span className="text-white font-bold">2yr &rarr; 1yr</span>
                            </li>
                            <li className="flex justify-between items-center text-xs text-muted-foreground pt-2">
                                <span>Respite (Special Fact)</span>
                                <span>Reprieve (Stay)</span>
                            </li>
                        </ul>
                    </RoyalCard>
                </div>
            </div>

            {/* PHASE 3: CONSTITUTIONAL POSITION */}
            <div className="mt-12 bg-purple-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Scale size={200} />
                </div>

                <div className="relative z-10 text-center space-y-8">
                    <h2 className="text-3xl font-serif font-bold text-purple-200">Rubber Stamp or Head?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card/10 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30">
                            <strong className="text-2xl block mb-2 text-purple-300">Art 53</strong>
                            Executive power vested in President.
                        </div>

                        <div className="py-2">
                            <ArrowRight className="mx-auto text-purple-400 rotate-90 md:rotate-0" size={32} />
                        </div>

                        <div className="bg-card/10 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30">
                            <strong className="text-2xl block mb-2 text-purple-300">Art 74</strong>
                            Aid & Advise of Council of Ministers.
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <div className="bg-purple-800 p-4 rounded-lg flex items-center justify-between border border-purple-600">
                            <span className="font-bold">42nd AA (1976)</span>
                            <span>Advice made <strong className="text-yellow-400">BINDING</strong>.</span>
                        </div>
                        <div className="bg-purple-800 p-4 rounded-lg flex items-center justify-between border border-purple-600">
                            <span className="font-bold">44th AA (1978)</span>
                            <span>Prez can return ONCE. <strong className="text-yellow-400">Reconsideration Binding</strong>. [PYQ]</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: VETO COMPARISON */}
            <div className="mt-12 border-t-2 border-dashed border-border pt-8">

                {/* PYQ PRACTICE SECTION */}
                <h3 className="text-center font-bold font-serif text-xl text-muted-foreground mb-6 flex items-center justify-center gap-2">
                    <Globe size={20} /> Veto Power Comparison
                </h3>
                <div className="max-w-3xl mx-auto bg-card border-2 border-slate-800 rounded-lg p-1 shadow-[4px_4px_0px_#000]">
                    <div className="grid grid-cols-2 text-center text-sm font-bold">
                        <div className="bg-blue-50 p-4 border-r-2 border-slate-800">
                            <span className="block text-lg mb-2 text-blue-900">🇺🇸 USA</span>
                            <span className="text-blue-700">"Qualified Veto"</span>
                            <p className="text-xs font-normal mt-1 opacity-70">Override needs Higher Majority</p>
                        </div>
                        <div className="bg-orange-50 p-4">
                            <span className="block text-lg mb-2 text-orange-900">🇮🇳 India</span>
                            <span className="text-orange-700">"Suspensive Veto"</span>
                            <p className="text-xs font-normal mt-1 opacity-70">Override needs Simple Majority</p>
                            <p className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full inline-block mt-2 font-bold">NO Qualified Veto</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-12 py-6 text-xl font-bold font-serif shadow-2xl transition-all
                            ${isCompleted
                                ? 'bg-purple-900 text-purple-100 ring-4 ring-purple-200'
                                : 'bg-gradient-to-r from-purple-700 to-indigo-800 text-white hover:scale-105 shadow-purple-500/50'
                            }
                        `}
                    >
                        {isCompleted ?
                            <span className="flex items-center gap-2"><CheckCircle2 /> CHAPTER {chapterNumber} COMPLETED</span> :
                            <span className="flex items-center gap-2"><PenTool /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                        }
                    </Button>
                </div>
            </div>
        </RoyalDeskContainer>
    );
}

// Helper icons
function ArrowRight(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
}
