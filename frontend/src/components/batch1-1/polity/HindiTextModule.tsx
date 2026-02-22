"use client";

import React from "react";
import {
    BookOpen, Languages, Scroll, PenTool,
    FileText, Gavel, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HindiTextModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#ffedd5] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-200">
        <div className="max-w-5xl mx-auto space-y-12 bg-card/60 rounded-3xl p-6 shadow-inner border-2 border-orange-200">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-xl ${color} text-white shadow-lg rotate-3`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-foreground`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 bg-orange-800 opacity-20`}></div>
    </div>
);

export default function HindiTextModule({ onComplete, isCompleted, chapterNumber = "65" }: HindiTextModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#c2410c] border-4 border-orange-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#171717] text-orange-100 px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-orange-200 font-bold uppercase tracking-widest text-sm">Part XXII</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Authoritative Text <br />
                        <span className="text-[#fbbf24]">In Hindi</span>
                    </h1>
                    <p className="text-xl text-orange-100 italic max-w-2xl">
                        "The 58th Amendment (1987) - Giving the translation equal legal weight."
                    </p>
                </div>
                <div className="absolute top-4 right-4 opacity-20 rotate-[-15deg]">
                    <Languages size={180} />
                </div>
            </div>

            {/* PHASE 1: THE CONTEXT */}
            <SectionHeader title="Phase 1: The Context (Why?)" icon={FileText} color="bg-[#c2410c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border-2 border-border rounded-2xl p-6 relative rotate-[-1deg] shadow-md">
                    <h3 className="font-black text-xl mb-4 text-foreground">The Problem</h3>
                    <p className="text-sm font-bold text-muted-foreground mb-4">
                        Original Constitution (1950) was adopted in <span className="text-[#c2410c] underline">English</span>.
                    </p>
                    <div className="bg-orange-50 p-3 rounded border border-orange-100">
                        <p className="text-xs font-bold text-orange-800">
                            Hindi translation existed but had NO Authoritative Legal Status for courts.
                        </p>
                    </div>
                </div>

                <div className="bg-card border-2 border-[#b45309] rounded-2xl p-6 relative rotate-[1deg] shadow-md">
                    <div className="absolute -top-3 -right-3 bg-[#b45309] text-white px-3 py-1 rounded text-xs font-bold shadow">
                        HIGH YIELD
                    </div>
                    <h3 className="font-black text-xl mb-4 text-[#b45309]">The Solution (1987)</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-black text-slate-200">58th</span>
                        <div>
                            <p className="font-bold text-foreground">Amendment Act</p>
                            <p className="text-xs font-bold text-muted-foreground">Inserted Article 394-A</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm font-bold text-muted-foreground">
                        Empowered President to publish the translation.
                    </p>
                </div>
            </div>

            {/* PHASE 2: PROVISIONS */}
            <SectionHeader title="Phase 2: Article 394-A" icon={Scroll} color="bg-[#171717]" />

            <div className="bg-card border-2 border-[#171717] rounded-2xl p-8 relative shadow-[8px_8px_0px_#171717]">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="font-black text-2xl text-[#171717]">What does it say?</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-[#c2410c] shrink-0" />
                                <span className="font-bold text-muted-foreground">President shall cause to be published the translation in Hindi.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-[#c2410c] shrink-0" />
                                <span className="font-bold text-muted-foreground">Must include all amendments made so far.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-[#c2410c] shrink-0" />
                                <span className="font-bold text-muted-foreground">Same terminology/style as Constituent Assembly's Hindi version.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-muted rounded-xl p-6 flex flex-col items-center justify-center border-dashed border-2 border-border">
                        <Gavel size={48} className="text-foreground mb-4" />
                        <h4 className="font-black text-lg text-center">Legal Status</h4>
                        <p className="text-center text-xs font-bold mt-2 text-muted-foreground">
                            "Deemed to be Authoritative Text"
                        </p>
                        <div className="mt-2 bg-[#c2410c] text-white text-[10px] px-2 py-1 rounded font-bold">
                            Valid in Courts
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 bg-card/50 p-6 rounded-2xl border border-orange-200 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <PenTool size={32} />
                </div>
                <div>
                    <h4 className="font-black text-lg text-foreground">The Signed Copy (Jan 24, 1950)</h4>
                    <p className="text-sm font-bold text-muted-foreground">
                        Founding fathers signed TWO copies:
                        <span className="block mt-1 text-muted-foreground text-xs">
                            1. English (Calligraphy by Prem Behari Narain Raizada)<br />
                            2. Hindi (Calligraphy by Vasant Krishan Vaidya)
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-green-600 text-white' : 'bg-[#c2410c] text-white hover:bg-orange-800'
                        }`}
                >
                    {isCompleted ? "Translation Verified" : "Publish Translation"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
