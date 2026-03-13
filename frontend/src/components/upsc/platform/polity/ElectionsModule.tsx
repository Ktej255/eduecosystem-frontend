"use client";

import React from "react";
import {
    Vote, Users, Calendar,
    Flag, Monitor, Ban, Gavel,
    BarChart, Speaker, MousePointerClick
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ElectionsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eff6ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100">
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

export default function ElectionsModule({ onComplete, isCompleted, chapterNumber = "81" }: ElectionsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#2563eb] border-4 border-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#171717] text-white px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-blue-200 font-bold uppercase tracking-widest text-sm">Part XV</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Elections <br />
                        <span className="text-[#93c5fd]">The Festival of Democracy</span>
                    </h1>
                    <p className="text-xl text-blue-100 italic max-w-2xl">
                        "From Notification to Results. The Machinery behind the Vote."
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20">
                    <MousePointerClick size={200} />
                </div>
            </div>

            {/* PHASE 1: MACHINERY */}
            <SectionHeader title="Phase 1: The Machinery" icon={Users} color="bg-[#1d4ed8]" />

            <div className="bg-card border-2 border-blue-200 rounded-2xl p-8 shadow-md">
                <div className="flex flex-col items-center space-y-4 relative">
                    {/* Pyramid */}
                    <div className="w-64 p-4 bg-blue-900 text-white rounded-t-xl text-center font-black shadow-lg z-30">
                        ECI (Art 324)
                    </div>
                    <div className="w-80 p-4 bg-blue-700 text-white text-center font-bold shadow-md z-20">
                        CEO (State Level)
                    </div>
                    <div className="w-96 p-4 bg-blue-500 text-white text-center font-bold shadow-md z-10">
                        DEO (District / DM)
                    </div>
                    <div className="w-[28rem] p-4 bg-blue-300 text-blue-900 text-center font-bold rounded-b-xl">
                        RO (Constituency) & PO (Polling Station)
                    </div>
                </div>

                <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-black text-blue-800 flex items-center gap-2">
                        <Flag size={18} /> Notification Trap
                    </h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        President/Governor issues notification, BUT only on <span className="underline">recommendation of ECI</span>.
                    </p>
                </div>
            </div>

            {/* PHASE 2: PROCESS & REFORMS */}
            <SectionHeader title="Phase 2: The Process (MCC & EVM)" icon={Vote} color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 left-4 bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold rounded shadow">Code of Conduct</div>
                    <ul className="space-y-4 mt-4">
                        <li className="flex items-center gap-3">
                            <Calendar size={20} className="text-[#b91c1c]" />
                            <span className="font-bold text-muted-foreground text-sm">Starts: Immediately on Schedule Announcement.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Ban size={20} className="text-[#b91c1c]" />
                            <span className="font-bold text-muted-foreground text-sm">Finishes: End of Election Process.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Gavel size={20} className="text-muted-foreground" />
                            <span className="font-bold text-muted-foreground text-sm">Status: Not Statutory (Gentleman's Agreement).</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-800 text-white rounded-2xl p-6 border-4 border-slate-600 shadow-inner">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-black text-xl">EVM & VVPAT</h3>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-xl mb-4 font-mono text-sm border-2 border-slate-500">
                        [ ] Candidate A <br />
                        [x] Candidate B  &lt;--- VVPAT Slip (7 secs) <br />
                        [ ] NOTA (Since 2013)
                    </div>
                    <p className="text-xs text-muted-foreground font-bold text-center">
                        Used universally since 2004 Lok Sabha.
                    </p>
                </div>
            </div>

            {/* PHASE 3: DISPUTES */}
            <SectionHeader title="Phase 3: Disputes & Polls" icon={Gavel} color="bg-slate-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-black text-lg mb-2">Election Petitions</h3>
                    <p className="font-bold text-muted-foreground text-sm">
                        Decided by <span className="text-blue-600 text-lg">High Court</span>.
                    </p>
                    <p className="text-xs font-bold text-muted-foreground mt-1">Appeal lies to Supreme Court.</p>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-black text-lg mb-2 flex items-center gap-2"><BarChart size={18} /> Exit Polls</h3>
                    <p className="font-bold text-red-600 text-sm">
                        BANNED from start of polling till 30 mins after end of all phases.
                    </p>
                    <div className="mt-2 bg-muted p-2 rounded text-xs text-muted-foreground font-bold">
                        Opinion Polls: Banned only 48h before voting.
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 bg-black text-white p-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h4 className="font-black text-lg text-yellow-500 flex items-center gap-2">
                        <Speaker size={20} /> The 48-Hour Silence
                    </h4>
                    <p className="text-sm font-bold text-muted-foreground">Section 126 RPA (1951)</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-muted-foreground">Expenditure Limit (Candidate Only)</p>
                    <p className="font-bold text-white">LS: ₹95L / Assembly: ₹40L</p>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-green-600 text-white' : 'bg-[#2563eb] text-white hover:bg-blue-800'
                        }`}
                >
                    {isCompleted ? "Vote Cast!" : `MARK CHAPTER ${chapterNumber} COMPLETE`}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
