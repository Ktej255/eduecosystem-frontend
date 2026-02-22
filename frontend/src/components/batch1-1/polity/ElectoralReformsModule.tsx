"use client";

import React from "react";
import {
    Brush, Calendar, Search, Users,
    FileText, XCircle, CheckCircle2,
    TrendingUp, Banknote, ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ElectoralReformsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdfa] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-teal-100">
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

const ReformCard = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
    <div className="bg-card border-l-4 border-green-500 shadow-sm p-4 relative pl-6">
        <div className="absolute -left-[22px] top-4 w-10 h-10 bg-green-500 rounded-full text-white flex items-center justify-center text-xs font-black shadow z-10">
            {year}
        </div>
        <h4 className="font-black text-lg text-foreground mb-2">{title}</h4>
        <div className="text-sm font-bold text-muted-foreground space-y-1">
            {children}
        </div>
    </div>
);

export default function ElectoralReformsModule({ onComplete, isCompleted, chapterNumber = "83" }: ElectoralReformsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#0f766e] border-4 border-teal-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-card text-teal-800 px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-teal-200 font-bold uppercase tracking-widest text-sm">Part XV</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Electoral Reforms <br />
                        <span className="text-[#5eead4]">Cleaning the System</span>
                    </h1>
                    <p className="text-xl text-teal-100 italic max-w-2xl">
                        "From Tarkunde to Indrajit Gupta. The Long Road to Clean Politics."
                    </p>
                </div>
                <div className="absolute right-8 bottom-8 opacity-20 rotate-12">
                    <Brush size={160} />
                </div>
            </div>

            {/* PHASE 1: COMMITTEES */}
            <SectionHeader title="Phase 1: The Architects (Committees)" icon={Users} color="bg-[#0d9488]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { name: "Tarkunde (1974)", desc: "Lowering Voting Age" },
                    { name: "Goswami (1990)", desc: "Electoral Reforms" },
                    { name: "Vohra (1993)", desc: "Criminal Nexus" },
                    { name: "Indrajit Gupta (1998)", desc: "State Funding" }
                ].map((c, i) => (
                    <div key={i} className="bg-card p-4 rounded-xl border-2 border-teal-100 shadow-sm text-center transform hover:scale-105 transition-transform">
                        <h4 className="font-black text-teal-800 mb-1">{c.name}</h4>
                        <p className="text-xs font-bold text-muted-foreground">{c.desc}</p>
                    </div>
                ))}
            </div>

            {/* PHASE 2: TIMELINE */}
            <SectionHeader title="Phase 2: The Timeline of Change" icon={TrendingUp} color="bg-[#1e40af]" />

            <div className="space-y-8 pl-4 border-l-2 border-border ml-4 md:ml-8 relative">
                <ReformCard year="1989" title="Lowering Voting Age (61st AA)">
                    <p>Reduced from <span className="text-red-500 line-through mr-1">21</span> to <span className="text-green-600 text-lg">18</span> years.</p>
                </ReformCard>

                <ReformCard year="2003" title="The Disclosure Era">
                    <p className="flex items-center gap-2"><Search size={14} /> Candidates must declare Assets & Criminal Cases.</p>
                    <p className="text-xs text-muted-foreground">Association for Democratic Reforms Case.</p>
                    <div className="mt-2 bg-blue-50 p-2 rounded text-xs text-blue-800">
                        Also: Open Ballot for Rajya Sabha.
                    </div>
                </ReformCard>

                <ReformCard year="2013" title="NOTA & VVPAT">
                    <p>Right to Reject (None of The Above).</p>
                    <p>Paper Audit Trail introduced.</p>
                </ReformCard>

                <ReformCard year="2024" title="Electoral Bonds Judgment" >
                    <div className="bg-red-50 text-red-800 p-2 rounded border border-red-200 flex items-center gap-2">
                        <XCircle size={16} /> Struck Down as Unconstitutional.
                    </div>
                </ReformCard>
            </div>

            {/* PHASE 3: PENDING */}
            <SectionHeader title="Phase 3: Pending Wishlist" icon={FileText} color="bg-[#b91c1c]" />

            <div className="bg-muted p-6 rounded-2xl border-2 border-dashed border-slate-400">
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-slate-300 flex items-center justify-center text-muted-foreground"><Users size={14} /></div>
                        <span className="font-bold text-muted-foreground">Simultaneous Elections (One Nation, One Election)</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-slate-300 flex items-center justify-center text-muted-foreground"><ShieldAlert size={14} /></div>
                        <span className="font-bold text-muted-foreground">Decriminalization (Bar before conviction)</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-slate-300 flex items-center justify-center text-muted-foreground"><Banknote size={14} /></div>
                        <span className="font-bold text-muted-foreground">State Funding of Elections</span>
                    </li>
                </ul>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-800 text-white' : 'bg-[#0f766e] text-white hover:bg-teal-800'
                        }`}
                >
                    {isCompleted ? "System Cleaned!" : "Initiate Reforms"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
