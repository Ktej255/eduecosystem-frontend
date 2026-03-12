"use client";

import React from "react";
import {
    Lock, DoorOpen, Users, Gavel,
    AlertTriangle, Scissors, ShieldCheck,
    Repeat
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AntiDefectionLawModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fef2f2] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-red-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/50 rounded-3xl p-6 shadow-inner border-2 border-border">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-foreground`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function AntiDefectionLawModule({ onComplete, isCompleted, chapterNumber = "70" }: AntiDefectionLawModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#b91c1c] border-4 border-red-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-card text-red-900 px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-red-200 font-bold uppercase tracking-widest text-sm">10th Schedule</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Anti-Defection Law <br />
                        <span className="text-[#fca5a5]">The Locked Door</span>
                    </h1>
                    <p className="text-xl text-red-100 italic max-w-2xl">
                        "Curbing Aaya Ram, Gaya Ram. The 52nd & 91st Amendments."
                    </p>
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                    <Lock size={180} />
                </div>
            </div>

            {/* PHASE 1: ORIGIN */}
            <SectionHeader title="Phase 1: The Amendments" icon={ShieldCheck} color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border-2 border-red-200 rounded-2xl p-6 shadow-md rotate-[-1deg]">
                    <h3 className="font-black text-xl mb-2 text-red-800">52nd Amendment (1985)</h3>
                    <p className="font-bold text-muted-foreground">Added the <span className="bg-red-100 px-1 rounded">10th Schedule</span>.</p>
                    <p className="text-sm text-muted-foreground mt-2">Goal: Stability.</p>
                </div>

                <div className="bg-card border-2 border-green-200 rounded-2xl p-6 shadow-md rotate-[1deg] relative">
                    <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded shadow">91st AA (2003)</div>
                    <h3 className="font-black text-xl mb-2 text-green-800">The 2/3rd Rule</h3>
                    <div className="flex items-center gap-4 mt-4">
                        <Scissors className="text-red-500" />
                        <div className="text-sm font-bold text-muted-foreground">
                            Deleted "Split" (1/3rd). <br />
                            Only <span className="bg-green-100 text-green-800 px-1 rounded">Merger (2/3rd)</span> allowed.
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: GROUNDS */}
            <SectionHeader title="Phase 2: Red Card Criteria" icon={AlertTriangle} color="bg-[#171717]" />

            <div className="space-y-4">
                {[
                    { title: "Voluntarily Giving Up", sub: "Resignation not needed. Conduct counts (Ravi Naik Case)." },
                    { title: "Voting Against Whip", sub: "Must be condoned within 15 days." },
                    { title: "Independent Member", sub: "Joins ANY party -> Disqualified." },
                    { title: "Nominated Member", sub: "Joins after 6 months -> Disqualified." }
                ].map((item, i) => (
                    <div key={i} className="bg-card p-4 rounded-xl border-l-8 border-red-500 shadow-sm flex items-center justify-between">
                        <span className="font-black text-foreground">{item.title}</span>
                        <span className="text-xs font-bold text-muted-foreground hidden md:block">{item.sub}</span>
                    </div>
                ))}
            </div>

            {/* PHASE 3: AUTHORITY */}
            <SectionHeader title="Phase 3: The Authority" icon={Gavel} color="bg-[#ca8a04]" />

            <div className="bg-[#fffbeb] border-2 border-[#ca8a04] rounded-2xl p-8 relative shadow-lg">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center space-y-4">
                        <Users size={48} className="mx-auto text-[#ca8a04]" />
                        <div>
                            <h3 className="font-black text-xl text-[#ca8a04]">The Speaker / Chairman</h3>
                            <p className="font-bold text-muted-foreground">Presiding Officer decides.</p>
                        </div>
                        <div className="bg-card p-2 rounded text-xs font-bold border border-yellow-200">
                            Subject to Judicial Review (Kihoto Hollohan 1992)
                        </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <h4 className="font-black text-green-800 mb-2 flex items-center gap-2">
                            <DoorOpen size={20} /> The Exception (Merger)
                        </h4>
                        <ul className="text-sm font-bold text-green-700 space-y-2">
                            <li>1. Party Merges with another.</li>
                            <li>2. At least <span className="text-lg">2/3rd</span> members agree.</li>
                            <li>RESULT: NO Disqualification.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 text-center bg-muted p-4 rounded-xl">
                <h4 className="font-black text-foreground flex items-center justify-center gap-2">
                    <Repeat size={16} /> The "Whip" System
                </h4>
                <p className="text-xs text-muted-foreground font-bold max-w-lg mx-auto mt-2">
                    Not mentioned in Constitution. Ensure attendance. Three-line whip = Must attend & vote (Defection applies).
                </p>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-green-600 text-white' : 'bg-[#b91c1c] text-white hover:bg-red-800'
                        }`}
                >
                    {isCompleted ? "Access Granted" : "Lock the Door"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
