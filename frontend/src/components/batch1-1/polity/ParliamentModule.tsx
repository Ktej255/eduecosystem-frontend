"use client";

import React, { useState } from "react";
import {
    Users, Building2, Gavel, UserCheck, AlertTriangle,
    Calendar, Clock, AlertOctagon, FileText, Banknote,
    Handshake, Briefcase, Calculator, Lock, Search,
    Mic2, Bell, Ban, Scale, ArrowRight, CheckCircle2,
    BookOpen
} from "lucide-react";

interface ParliamentModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The Two Houses (Green & Red) ---

const ParliamentContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fffbeb] text-foreground">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ title, subtitle, color = "slate" }: { title: string, subtitle?: string, color?: "green" | "red" | "gold" | "slate" | "blue" }) => {
    const colors = {
        green: "text-green-800 border-green-800",
        red: "text-red-800 border-red-800",
        gold: "text-yellow-800 border-yellow-800",
        slate: "text-foreground border-slate-800",
        blue: "text-blue-800 border-blue-800",
    };

    return (
        <div className="text-center mb-8">
            <h2 className={`text-4xl font-black uppercase tracking-wider inline-block border-b-4 ${colors[color]} pb-2 font-serif`}>
                {title}
            </h2>
            {subtitle && <p className="mt-2 text-xl font-bold opacity-80">{subtitle}</p>}
        </div>
    );
};

const SketchCard = ({ children, title, icon: Icon, color = "slate", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "green" | "red" | "gold" | "slate" | "blue" | "indigo", className?: string }) => {
    const borders = {
        green: "border-green-700 bg-green-50 shadow-[4px_4px_0px_#15803d]",
        red: "border-red-700 bg-red-50 shadow-[4px_4px_0px_#b91c1c]",
        gold: "border-yellow-600 bg-yellow-50 shadow-[4px_4px_0px_#ca8a04]",
        slate: "border-slate-700 bg-muted shadow-[4px_4px_0px_#334155]",
        blue: "border-blue-700 bg-blue-50 shadow-[4px_4px_0px_#1d4ed8]",
        indigo: "border-indigo-700 bg-indigo-50 shadow-[4px_4px_0px_#4338ca]",
    };

    return (
        <div className={`border-2 rounded-xl p-5 relative ${borders[color]} ${className}`}>
            <div className="flex items-center gap-2 mb-3 border-b-2 border-dashed border-black/20 pb-2">
                {Icon && <Icon size={20} />}
                <h3 className="font-bold text-lg font-serif leading-tight">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function ParliamentModule({ onComplete, isCompleted }: ParliamentModuleProps) {
    const [activeTab, setActiveTab] = useState<"part1" | "part2" | "part3">("part1");

    return (
        <ParliamentContainer>
            {/* HERO */}
            <div className="text-center py-8 relative">
                <div className="absolute top-0 center-0 w-full h-full pointer-events-none opacity-10 flex justify-center items-center">
                    <Building2 size={300} />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 font-serif relative z-10">
                    PARLIAMENT
                </h1>
                <p className="text-2xl font-handwriting text-muted-foreground italic max-w-3xl mx-auto bg-card/80 p-2 rounded relative z-10">
                    "The Behemoth of Indian Democracy. Chapter 22."
                </p>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-20">
                    <button
                        onClick={() => setActiveTab("part1")}
                        className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${activeTab === "part1" ? "bg-slate-900 text-white border-slate-900" : "bg-card text-foreground border-slate-900 hover:bg-muted"}`}
                    >
                        Part 1: The People
                    </button>
                    <button
                        onClick={() => setActiveTab("part2")}
                        className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${activeTab === "part2" ? "bg-blue-700 text-white border-blue-700" : "bg-card text-blue-700 border-blue-700 hover:bg-blue-50"}`}
                    >
                        Part 2: The Process
                    </button>
                    <button
                        onClick={() => setActiveTab("part3")}
                        className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${activeTab === "part3" ? "bg-green-700 text-white border-green-700" : "bg-card text-green-700 border-green-700 hover:bg-green-50"}`}
                    >
                        Part 3: Money & Oversight
                    </button>
                </div>
            </div>

            {/* PART 1: THE PEOPLE */}
            {activeTab === "part1" && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <SectionTitle title="Part 1: The People" subtitle="Structure, Membership & Presiding Officers" color="slate" />

                    {/* PHASE 1: ORGANIZATION */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <SketchCard title="The Trinity (Art 79)" icon={Users} color="slate" className="md:col-span-3 bg-card text-center">
                            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                                <div className="bg-yellow-100 p-4 rounded-full border-2 border-yellow-500 w-32 h-32 flex flex-col items-center justify-center shadow-lg">
                                    <UserCheck size={32} className="text-yellow-700 mb-1" />
                                    <strong className="text-yellow-900">President</strong>
                                    <span className="text-[10px] leading-tight">Integral Part but NOT a member</span>
                                </div>
                                <div className="text-4xl font-black text-slate-300">+</div>
                                <div className="bg-red-100 p-4 rounded-lg border-2 border-red-500 w-32 h-32 flex flex-col items-center justify-center shadow-lg">
                                    <Users size={32} className="text-red-700 mb-1" />
                                    <strong className="text-red-900">Rajya Sabha</strong>
                                    <span className="text-[10px]">Council of States</span>
                                </div>
                                <div className="text-4xl font-black text-slate-300">+</div>
                                <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500 w-32 h-32 flex flex-col items-center justify-center shadow-lg">
                                    <Users size={32} className="text-green-700 mb-1" />
                                    <strong className="text-green-900">Lok Sabha</strong>
                                    <span className="text-[10px]">House of People</span>
                                </div>
                            </div>
                        </SketchCard>

                        {/* RS vs LS */}
                        <SketchCard title="Rajya Sabha (Red Chamber)" icon={Users} color="red">
                            <ul className="space-y-3 font-handwriting text-sm">
                                <li><strong>Max Strength:</strong> 250 (238 + 12 Nominated)</li>
                                <li><strong>Current:</strong> 245</li>
                                <li>
                                    <strong>Nomination (CLASS):</strong> <br />
                                    Literature, Science, Art, Social Service
                                </li>
                                <li className="bg-card/50 p-1 rounded">
                                    <strong>Representation:</strong> Unequal (Population).
                                    <div className="text-xs text-muted-foreground">e.g., UP(31) vs Tripura(1)</div>
                                </li>
                            </ul>
                        </SketchCard>

                        <SketchCard title="Lok Sabha (Green Chamber)" icon={Users} color="green">
                            <ul className="space-y-3 font-handwriting text-sm">
                                <li><strong>Max Strength:</strong> 550 (530 States + 20 UTs)</li>
                                <li className="text-xs italic bg-card/50 p-1 rounded">
                                    (2 Anglo-Indians removed by 104th AA, 2019)
                                </li>
                                <li><strong>Current:</strong> 543</li>
                                <li><strong>Election:</strong> Direct (FPTP).</li>
                                <li>
                                    <strong>Voting Age:</strong> 21 &rarr; 18
                                    <span className="block text-xs font-bold text-green-800">(61st AA, 1988)</span>
                                </li>
                            </ul>
                        </SketchCard>

                        <SketchCard title="Membership Checklist" icon={CheckCircle2} color="slate">
                            <div className="space-y-4 font-handwriting text-sm">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span>Citizenship</span>
                                    <strong>Citizen of India</strong>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span>Age (RS)</span>
                                    <strong className="text-red-700">30 Years</strong>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span>Age (LS)</span>
                                    <strong className="text-green-700">25 Years</strong>
                                </div>
                                <div className="bg-red-50 p-2 rounded text-red-800 text-xs">
                                    <strong className="block mb-1 flex items-center gap-1"><Ban size={12} /> Disqualifications:</strong>
                                    Office of Profit, Unsound Mind, Insolvent, Defection (10th Sched).
                                </div>
                            </div>
                        </SketchCard>
                    </div>

                    {/* PHASE 3: PRESIDING OFFICERS */}
                    <div className="bg-muted p-6 rounded-3xl border-2 border-border">
                        <h3 className="text-2xl font-bold text-center mb-6 font-serif">The Presiding Officers</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* SPEAKER */}
                            <div className="bg-card p-4 rounded-xl border-4 border-yellow-500 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded-bl">THE BOSS</div>
                                <h4 className="text-xl font-bold text-yellow-800 mb-2 flex items-center gap-2"><Gavel size={20} /> Speaker (LS)</h4>
                                <ul className="space-y-2 text-sm font-handwriting">
                                    <li>• Elected by MPs.</li>
                                    <li>• <strong>Tenure:</strong> Life of LS.</li>
                                    <li>• <strong>Vote:</strong> Only in Tie (Casting).</li>
                                    <li className="bg-yellow-50 p-2 rounded border border-yellow-200">
                                        <strong className="block text-yellow-900">Special Powers:</strong>
                                        1. Money Bill Decision (Final).<br />
                                        2. Joint Sitting Presides.
                                    </li>
                                </ul>
                            </div>

                            {/* CHAIRMAN */}
                            <div className="bg-card p-4 rounded-xl border-4 border-red-500 shadow-xl relative">
                                <h4 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2"><Gavel size={20} /> Chairman (RS)</h4>
                                <ul className="space-y-2 text-sm font-handwriting">
                                    <li>• <strong>Vice-President</strong> (Ex-officio).</li>
                                    <li>• <strong>Removal:</strong> As VP.</li>
                                    <li className="p-2 bg-red-50 rounded border border-red-200 text-red-900 font-bold">
                                        NOT a member of the House!
                                    </li>
                                    <li>(Unlike Speaker who is an MP).</li>
                                </ul>
                            </div>

                            {/* SECRETARIAT */}
                            <div className="bg-card p-4 rounded-xl border-4 border-slate-500 shadow-xl relative">
                                <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><Building2 size={20} /> Secretariat</h4>
                                <ul className="space-y-2 text-sm font-handwriting">
                                    <li>• Separate staff for each House.</li>
                                    <li>• Regulated by Parliament.</li>
                                    <li>• <strong>Secretary-General:</strong> Rank of Cabinet Secretary.</li>
                                    <li>• Appointed by Presiding Officer.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PART 2: THE PROCESS */}
            {activeTab === "part2" && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <SectionTitle title="Part 2: The Process" subtitle="Sessions, Devices & Legislation" color="blue" />

                    {/* SESSIONS TIMELINE */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <SketchCard title="Sessions Timeline" icon={Calendar} color="blue">
                            <div className="space-y-4 font-handwriting">
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 p-2 rounded-lg font-bold w-24 text-center border border-blue-400">Budget<br /><span className="text-xs font-normal">Feb-May</span></div>
                                    <ArrowRight className="text-blue-300" />
                                    <div className="bg-blue-100 p-2 rounded-lg font-bold w-24 text-center border border-blue-400">Monsoon<br /><span className="text-xs font-normal">Jul-Sep</span></div>
                                    <ArrowRight className="text-blue-300" />
                                    <div className="bg-blue-100 p-2 rounded-lg font-bold w-24 text-center border border-blue-400">Winter<br /><span className="text-xs font-normal">Nov-Dec</span></div>
                                </div>
                                <div className="bg-red-50 p-2 rounded border border-red-200 text-red-800 text-sm">
                                    <strong>Max Gap:</strong> Cannot exceed 6 months.
                                </div>
                            </div>
                        </SketchCard>

                        <SketchCard title="Lapse of Bills (Art 107)" icon={AlertTriangle} color="red">
                            <div className="grid grid-cols-2 gap-4 text-sm font-handwriting">
                                <div className="p-2 bg-red-100 rounded border border-red-300">
                                    <strong className="block text-red-800 mb-1 flex items-center gap-1"><Ban size={12} /> LAPSES</strong>
                                    <ul className="list-disc pl-4 text-xs">
                                        <li>Pending in LS.</li>
                                        <li>Passed by LS, pending in RS.</li>
                                    </ul>
                                </div>
                                <div className="p-2 bg-green-100 rounded border border-green-300">
                                    <strong className="block text-green-800 mb-1 flex items-center gap-1"><CheckCircle2 size={12} /> SAVED</strong>
                                    <ul className="list-disc pl-4 text-xs">
                                        <li>Pending in RS, not passed by LS.</li>
                                        <li>Passed by both, pending Assent.</li>
                                        <li>Joint Sitting notified.</li>
                                    </ul>
                                </div>
                            </div>
                        </SketchCard>
                    </div>

                    {/* DAILY GRIND CLOCKS */}
                    <div className="bg-card p-6 rounded-2xl shadow-xl border-dashed border-2 border-border">
                        <h3 className="text-center font-bold text-2xl mb-8 font-serif">The Daily Grind</h3>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                            {/* 11 AM */}
                            <div className="relative text-center group">
                                <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-card flex items-center justify-center relative shadow-lg">
                                    <div className="absolute w-1 h-12 bg-slate-800 bottom-1/2 left-1/2 origin-bottom -translate-x-1/2 rotate-[-30deg]"></div>
                                    <div className="absolute w-1 h-8 bg-slate-800 bottom-1/2 left-1/2 origin-bottom -translate-x-1/2 rotate-[0deg]"></div>
                                    <div className="w-2 h-2 bg-red-500 rounded-full z-10"></div>
                                </div>
                                <h4 className="font-bold text-lg mt-4">11:00 AM</h4>
                                <div className="bg-slate-800 text-white px-3 py-1 rounded mt-1 inline-block">Question Hour</div>
                                <p className="text-xs mt-2 max-w-[150px] mx-auto opacity-70">Starred (Oral), Unstarred (Written).</p>
                            </div>

                            <ArrowRight size={32} className="text-slate-300 hidden md:block" />

                            {/* 12 PM */}
                            <div className="relative text-center group">
                                <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-card flex items-center justify-center relative shadow-lg">
                                    <div className="absolute w-1 h-12 bg-slate-800 bottom-1/2 left-1/2 origin-bottom -translate-x-1/2 rotate-[0deg]"></div>
                                    <div className="absolute w-1 h-8 bg-slate-800 bottom-1/2 left-1/2 origin-bottom -translate-x-1/2 rotate-[0deg]"></div>
                                    <div className="w-2 h-2 bg-red-500 rounded-full z-10"></div>
                                </div>
                                <h4 className="font-bold text-lg mt-4">12:00 PM</h4>
                                <div className="bg-slate-800 text-white px-3 py-1 rounded mt-1 inline-block">Zero Hour</div>
                                <p className="text-xs mt-2 max-w-[150px] mx-auto opacity-70">Indian Innovation (1962). Public Importance.</p>
                            </div>
                        </div>
                    </div>

                    {/* LEGISLATIVE PROCEDURE */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <SketchCard title="Ordinary Bill (Flow)" icon={FileText} color="indigo">
                            <div className="space-y-2 text-sm font-handwriting">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold">1</div>
                                    <span>Intro (Either House). Simple Majority.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold">2</div>
                                    <span>Sent to Other House.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">3</div>
                                    <span>Deadlock? (&gt;6 months).</span>
                                </div>
                                <div className="mt-2 p-2 bg-indigo-100 border border-indigo-300 rounded text-center">
                                    <strong>Joint Sitting (Art 108)</strong><br />
                                    Summoned by President.<br />
                                    Presided by Speaker (LS).
                                </div>
                            </div>
                        </SketchCard>

                        <SketchCard title="Money Bill (Art 110)" icon={Banknote} color="green">
                            <div className="space-y-3 font-handwriting text-sm">
                                <div className="bg-green-100 p-2 rounded border border-green-300 text-green-900">
                                    <strong>Definition:</strong> Tax, Borrowing, Consolidated Fund.
                                </div>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><strong>Intro:</strong> Lok Sabha ONLY (pre-rec of Prez).</li>
                                    <li><strong>Speaker:</strong> Decision FINAL.</li>
                                    <li>
                                        <strong>RS Role:</strong> <span className="text-red-600 font-bold">Limited</span>.
                                        <ul className="pl-4 list-[circle] text-xs">
                                            <li>Cannot reject/amend.</li>
                                            <li>Must return in 14 days.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Deadlock:</strong> NO Joint Sitting.</li>
                                </ul>
                            </div>
                        </SketchCard>
                    </div>
                </div>
            )}

            {/* PART 3: MONEY & OVERSIGHT */}
            {activeTab === "part3" && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <SectionTitle title="Part 3: Money & Oversight" subtitle="Budget, Funds & Committees" color="green" />

                    {/* BUDGET LADDER */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-300"></div>
                        <div className="space-y-6">
                            {[
                                { title: "Presentation", desc: "Feb 1. Finance Minister.", icon: Briefcase },
                                { title: "General Discussion", desc: "Broad outline. No voting.", icon: Mic2 },
                                { title: "Scrutiny by DRSCs", desc: "House adjourns 3-4 weeks. 24 Committees.", icon: Search },
                                { title: "Voting on Demands", desc: "Lok Sabha ONLY. Guillotine (Closure).", icon: Gavel },
                                { title: "Appropriation Bill", desc: "Legalizes withdrawal (Art 114).", icon: Lock },
                                { title: "Finance Bill", desc: "Legalizes Tax. Must pass in 75 days.", icon: Calculator },
                            ].map((step, idx) => (
                                <div key={idx} className="relative pl-20 transition-transform hover:translate-x-2">
                                    <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold z-10 ring-4 ring-white">
                                        {idx + 1}
                                    </div>
                                    <div className="bg-card p-4 rounded-xl shadow-md border border-border">
                                        <h4 className="font-bold flex items-center gap-2">{step.icon && <step.icon size={16} />} {step.title}</h4>
                                        <p className="text-sm text-muted-foreground font-handwriting">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* THE 3 FUNDS */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <SketchCard title="Consolidated Fund" icon={Lock} color="slate">
                            <div className="font-handwriting text-sm">
                                <strong className="block mb-2">Art 266</strong>
                                <p className="mb-2">All Revenues & Loans.</p>
                                <div className="bg-slate-200 px-2 py-1 rounded inline-block font-bold">Law Required</div>
                                <div className="text-xs mt-1">(Appropriation Act)</div>
                            </div>
                        </SketchCard>
                        <SketchCard title="Public Account" icon={BookOpen} color="slate">
                            <div className="font-handwriting text-sm">
                                <strong className="block mb-2">Art 266</strong>
                                <p className="mb-2">PF, Savings, Remittances.</p>
                                <div className="bg-slate-200 px-2 py-1 rounded inline-block font-bold">Executive Action</div>
                                <div className="text-xs mt-1">(Govt as Banker)</div>
                            </div>
                        </SketchCard>
                        <SketchCard title="Contingency Fund" icon={AlertOctagon} color="red">
                            <div className="font-handwriting text-sm">
                                <strong className="block mb-2">Art 267</strong>
                                <p className="mb-2">Unforeseen Expenditure.</p>
                                <div className="bg-red-100 text-red-800 px-2 py-1 rounded inline-block font-bold">Executive Action</div>
                                <div className="text-xs mt-1">(Held by Finance Sec)</div>
                            </div>
                        </SketchCard>
                    </div>

                    {/* COMMITTEES FOOTER */}
                    <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-200 text-center relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                            <Scale size={200} />
                        </div>

                        <h3 className="text-2xl font-bold text-indigo-900 mb-6 font-serif">The Watchdogs (Committees)</h3>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto relative z-10">
                            <div className="bg-card p-5 rounded-xl shadow-lg border border-indigo-100">
                                <h4 className="font-bold text-indigo-800 mb-2 border-b pb-2">Public Accounts (PAC)</h4>
                                <ul className="text-sm font-handwriting list-disc pl-4 space-y-1">
                                    <li>Oldest (1921). 22 Members (15 LS + 7 RS).</li>
                                    <li><strong>Function:</strong> Examines Audit Reports of CAG.</li>
                                    <li><strong>Guide:</strong> CAG is "Friend, Philosopher & Guide".</li>
                                </ul>
                            </div>
                            <div className="bg-card p-5 rounded-xl shadow-lg border border-indigo-100">
                                <h4 className="font-bold text-indigo-800 mb-2 border-b pb-2">Estimates Committee</h4>
                                <ul className="text-sm font-handwriting list-disc pl-4 space-y-1">
                                    <li>Largest (30 Members).</li>
                                    <li><strong>LS ONLY:</strong> No RS representation. [PYQ]</li>
                                    <li><strong>Function:</strong> Suggest 'Economies' in expenditure.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                                px-10 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-105 active:scale-95 text-xl
                                ${isCompleted
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-card text-foreground border-2 border-slate-900'
                                }
                            `}
                        >
                            {isCompleted ? "Session Adjourned Sine Die" : "Pass The Bill"}
                        </button>
                    </div>
                </div>
            )}
        </ParliamentContainer>
    );
}
