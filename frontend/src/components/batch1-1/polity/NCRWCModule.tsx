"use client";

import React from "react";
import {
    Search, Scroll, Mic, Gavel,
    BookOpen, CheckSquare, XCircle,
    UserCircle, Scale
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NCRWCModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-slate-200">
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

export default function NCRWCModule({ onComplete, isCompleted, chapterNumber = "90" }: NCRWCModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#1e3a8a] border-4 border-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-card text-blue-900 px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-blue-200 font-bold uppercase tracking-widest text-sm">Working of Constitution</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        NCRWC <br />
                        <span className="text-[#93c5fd]">The 50-Year Audit</span>
                    </h1>
                    <p className="text-xl text-blue-100 italic max-w-2xl">
                        "National Commission to Review the Working of the Constitution. The Checkup."
                    </p>
                </div>
                <div className="absolute right-8 bottom-8 opacity-20 rotate-[-15deg]">
                    <Search size={180} />
                </div>
            </div>

            {/* PHASE 1: MANDATE */}
            <SectionHeader title="Phase 1: The Mandate (2000-2002)" icon={Scroll} color="bg-[#1d4ed8]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border-2 border-blue-200 rounded-2xl p-6 shadow-md">
                    <h3 className="font-black text-blue-800 mb-2">The Setup</h3>
                    <p className="font-bold text-muted-foreground">Chairman: Justice M.N. Venkatachaliah.</p>
                    <p className="text-xs text-muted-foreground mt-1">Reviewing 50 years of performance.</p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-md relative">
                    <div className="absolute top-2 right-2"><XCircle className="text-red-500" /></div>
                    <h3 className="font-black text-red-800 mb-2">The "Lakshman Rekha"</h3>
                    <p className="font-bold text-red-700">
                        Cannot alter <span className="bg-red-200 px-1 rounded">Basic Structure</span>.
                    </p>
                    <p className="text-xs text-red-600 mt-1 italic">Only recommendatory power.</p>
                </div>
            </div>

            {/* PHASE 2: RECOMMENDATIONS */}
            <SectionHeader title="Phase 2: Key Reforms" icon={CheckSquare} color="bg-[#15803d]" />

            <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-dashed border-green-500 shadow-sm">
                    <h4 className="font-black text-lg text-green-800 mb-2">1. Constructive Vote of No Confidence</h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        Can only oust PM if a <span className="text-green-600">Successor</span> is named simultaneously. (German Model).
                    </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-dashed border-green-500 shadow-sm">
                    <h4 className="font-black text-lg text-green-800 mb-2">2. Judicial Commission</h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        Replace Collegium with National Judicial Commission. (Attempted via NJAC).
                    </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-dashed border-green-500 shadow-sm">
                    <h4 className="font-black text-lg text-green-800 mb-2">3. Governor's Appointment</h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        Committee: PM + Home Min + Speaker + CM.
                    </p>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 bg-muted p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-card rounded-full shadow text-blue-600">
                    <BookOpen size={24} />
                </div>
                <div>
                    <h4 className="font-black text-lg text-foreground">The Legacy</h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        Shaped RTI, Anti-Defection 91st AA, and Judicial Reform debates.
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-300 text-muted-foreground' : 'bg-[#1e3a8a] text-white hover:bg-blue-800'
                        }`}
                >
                    {isCompleted ? "Audit Complete" : "Submit Report"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
