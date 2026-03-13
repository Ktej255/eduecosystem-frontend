"use client";

import React, { useState } from "react";
import {
    Search, Scroll, FileText, XCircle, Shield,
    Scale, Lock, Unlock, AlertTriangle, Landmark,
    Stamp, Gavel, FolderOpen, History, CheckCircle2
} from "lucide-react";

interface JudicialReviewModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Editor's Desk (Crumpled Paper & Red Ink) ---

const DeskContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f5f5f4] text-foreground">
        {/* Crumpled Paper Texture */}
        <div className="absolute inset-0 opacity-50 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')]"></div>
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[size:20px_20px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const PaperCard = ({ children, title, icon: Icon, className = "" }: { children: React.ReactNode, title: string, icon?: any, className?: string }) => (
    <div className={`bg-card p-6 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)] border border-border relative rotate-1 transition-transform hover:rotate-0 ${className}`}>
        {/* Tape Effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/50 rotate-[-2deg] shadow-sm"></div>

        <div className="flex items-center gap-3 mb-4 border-b-2 border-dashed border-border pb-2">
            {Icon && <Icon className="text-muted-foreground" size={24} />}
            <h3 className="text-2xl font-bold font-serif text-foreground">{title}</h3>
        </div>
        {children}
    </div>
);

const VoidStamp = () => (
    <div className="absolute -right-4 -bottom-4 border-4 border-red-600 text-red-600 font-black text-4xl p-2 rounded opacity-50 rotate-[-15deg] pointer-events-none uppercase tracking-widest">
        Void
    </div>
);

export default function JudicialReviewModule({ onComplete, isCompleted, chapterNumber = "27" }: JudicialReviewModuleProps) {
    return (
        <DeskContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <Search size={120} className="text-foreground absolute -top-10 -left-16 opacity-10 rotate-12" />
                    <div className="text-red-700 font-bold uppercase tracking-widest text-xs mb-2">Chapter {chapterNumber}</div>
                    <h1 className="text-5xl md:text-7xl font-black text-foreground font-serif mb-2 relative z-10">
                        JUDICIAL REVIEW
                    </h1>
                    <div className="h-2 w-full bg-red-600 rounded-full transform -rotate-1 opacity-80 mt-1"></div>
                    <p className="mt-4 text-xl italic text-muted-foreground">"The Constitutional Check & Balance"</p>
                </div>
            </div>

            {/* PHASE 1: MEANING & ORIGINS */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-muted-foreground">Phase 1: The Source</h2>
                    <div className="h-px bg-slate-400 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DEFINITION */}
                    <PaperCard title="The Meaning" icon={Search} className="rotate-[-1deg] md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1 space-y-4 text-lg">
                                <p><strong>Power of Judiciary</strong> to examine constitutionality of legislative enactments & executive orders.</p>
                                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800 relative overflow-hidden">
                                    <strong>Result:</strong> If violative &rarr; Declared Illegal, Unconstitutional & Void.
                                    <br /><span className="text-sm opacity-80">(Govt cannot enforce it)</span>
                                    <VoidStamp />
                                </div>
                            </div>
                        </div>
                    </PaperCard>

                    {/* ORIGIN SCROLL */}
                    <PaperCard title="Origin Story" icon={History} className="rotate-[2deg]">
                        <div className="space-y-4">
                            <div className="bg-[#fdfbf7] p-4 border border-[#e5e7eb] rounded font-serif text-sm relative shadow-inner">
                                <Scroll className="absolute top-2 right-2 text-slate-300" size={40} />
                                <strong className="block text-foreground text-lg mb-2">USA (1803)</strong>
                                <p>Marbury v. Madison</p>
                                <p className="italic text-muted-foreground">- Justice John Marshall</p>
                            </div>
                            <div className="bg-orange-50 p-4 border border-orange-200 rounded font-serif text-sm relative">
                                <strong className="block text-orange-900 text-lg mb-2">INDIA</strong>
                                <p>Explicit (Art 13, 32, 226).</p>
                                <div className="mt-2 bg-card/50 p-2 rounded text-red-600 text-xs font-bold border border-red-100 flex items-center gap-2">
                                    <AlertTriangle size={14} />
                                    TRAP: Phrase "Judicial Review" is NOT used in Constitution.
                                </div>
                            </div>
                        </div>
                    </PaperCard>

                    {/* CLASSIFICATION */}
                    <PaperCard title="Scope of Review" icon={FolderOpen} className="rotate-[-2deg]">
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li className="flex items-center gap-3 p-2 bg-muted rounded border hover:bg-muted transition-colors">
                                <FolderOpen size={16} className="text-blue-500" />
                                <span>Constitutional Amendments (Basic Structure)</span>
                            </li>
                            <li className="flex items-center gap-3 p-2 bg-muted rounded border hover:bg-muted transition-colors">
                                <FolderOpen size={16} className="text-green-500" />
                                <span>Legislation (Parliament/State Laws)</span>
                            </li>
                            <li className="flex items-center gap-3 p-2 bg-muted rounded border hover:bg-muted transition-colors">
                                <FolderOpen size={16} className="text-purple-500" />
                                <span>Administrative Action (Exec Orders)</span>
                            </li>
                        </ul>
                        <p className="text-xs text-right mt-2 text-muted-foreground italic font-sans">- Justice Syed Shah Mohamed Quadri</p>
                    </PaperCard>
                </div>
            </div>

            {/* PHASE 2: PROVISIONS (THE ARSENAL) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-muted-foreground">Phase 2: The Weapons</h2>
                    <div className="h-px bg-slate-400 flex-1"></div>
                </div>

                <div className="bg-slate-800 text-slate-100 p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-slate-700/30 rounded-full blur-3xl"></div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* THE ARSENAL */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2"><Shield className="text-muted-foreground" /> Constitutional Arsenal</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Art 13 (Void Laws)', 'Art 32 (SC Writs)', 'Art 226 (HC Writs)', 'Art 136 (SLP)', 'Art 142 (Complete Justice)'].map((art, i) => (
                                    <div key={i} className="bg-slate-700 p-3 rounded flex items-center gap-2 border border-slate-600 hover:border-slate-400 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        <span className="font-mono text-sm">{art}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SCOPE: INDIA vs USA */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2"><Scale className="text-muted-foreground" /> Scope: India vs USA</h3>
                            <div className="bg-slate-700 rounded-lg p-4 border border-slate-600 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground font-bold">USA</span>
                                    <span className="px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-800">Due Process of Law</span>
                                </div>
                                <div className="h-px bg-slate-600"></div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground font-bold">INDIA origin</span>
                                    <span className="px-2 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-800">Procedure Est. by Law</span>
                                </div>
                                <div className="text-center text-xs mt-2 bg-slate-800 p-2 rounded text-green-300 border border-green-900">
                                    <strong className="block mb-1">Maneka Gandhi Case (1978)</strong>
                                    Interpreted Art 21 to include "Due Process".<br />
                                    Now Indian scope is <span className="underline decoration-wavy">WIDE</span> too.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE 9TH SCHEDULE */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-muted-foreground">Phase 3: The Black Box</h2>
                    <div className="h-px bg-slate-400 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* SAFE VAULT (BEFORE) */}
                    <PaperCard title="The Safe Vault (1951-1973)" icon={Lock} className="opacity-70 grayscale">
                        <div className="space-y-3">
                            <p className="text-sm">Created by <strong>1st Amendment (1951)</strong>.</p>
                            <div className="p-3 bg-slate-200 rounded border border-border text-center font-bold text-muted-foreground">
                                9th Schedule <br />= Immunity
                            </div>
                            <p className="text-xs text-muted-foreground italic text-center">"Laws here cannot be challenged for violating FRs"</p>
                        </div>
                    </PaperCard>

                    {/* CRACKED SAFE (AFTER) */}
                    <PaperCard title="The Cracked Safe (Post-1973)" icon={Unlock} className="border-red-300 shadow-red-100">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-red-50 p-2 rounded border border-red-200">
                                <span className="text-sm text-red-900 font-bold">I.R. Coelho Case (2007)</span>
                                <Gavel size={16} className="text-red-600" />
                            </div>
                            <div className="text-center py-2">
                                <strong className="block text-2xl font-mono text-foreground">April 24, 1973</strong>
                                <span className="text-xs text-muted-foreground">(Kesavananda Judgment Date)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-center">
                                <div className="bg-muted p-2 rounded text-muted-foreground">Before 1973<br /><strong>Immune</strong></div>
                                <div className="bg-red-100 p-2 rounded text-red-700 border border-red-200">After 1973<br /><strong>Open to Challenge</strong></div>
                            </div>
                            <p className="text-xs text-center pt-1 text-red-600 font-bold">*If violates Basic Structure</p>
                        </div>
                    </PaperCard>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-16 bg-card p-8 border-t-4 border-slate-900 shadow-xl max-w-3xl mx-auto rounded-b-xl text-center">
                <Landmark size={48} className="mx-auto text-foreground mb-4" />
                <h3 className="text-2xl font-black font-serif mb-6">WHY IT MATTERS?</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-bold font-handwriting">
                    <span className="px-4 py-2 bg-muted rounded-full border border-border shadow-sm">Uphold Constitution Supremacy</span>
                    <span className="px-4 py-2 bg-muted rounded-full border border-border shadow-sm">Maintain Federal Equilibrium</span>
                    <span className="px-4 py-2 bg-muted rounded-full border border-border shadow-sm">Protect Fundamental Rights</span>
                </div>

                <div className="mt-8">
                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-3 rounded font-bold font-serif tracking-widest transition-all
                            ${isCompleted
                                ? 'bg-red-600 text-white line-through opacity-50 cursor-not-allowed'
                                : 'bg-slate-900 text-white shadow-lg hover:bg-red-700 hover:shadow-red-900/20 hover:-translate-y-1'
                            }
                        `}
                    >
                        {isCompleted ? 
                            <span className="flex items-center gap-2 justify-center"><CheckCircle2 size={18} /> CHAPTER {chapterNumber} COMPLETED</span> : 
                            <span className="flex items-center gap-2 justify-center"><Search size={18} /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                        }
                    </button>
                </div>
            </div>
        </DeskContainer>
    );
}
