"use client";

import React from "react";
import {
    AlertTriangle, Shield, Clock, Gavel, XCircle,
    CheckCircle2, Flame, Map, Coins, Lock,
    ArrowRight, FileText, Zap, AlertOctagon,
    Ban, Power, Siren
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EMERGENCY_PYQS } from "./data/pyq-data";

interface EmergencyProvisionsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The Red Alert Manual (Hand-Drawn) ---

const NotebookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f0f0f0] text-foreground">
        {/* Crumpled Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

// Hand-drawn box style
const SketchyBox = ({ children, color = "red", className = "" }: { children: React.ReactNode, color?: "red" | "orange" | "green" | "slate", className?: string }) => {
    const borders = {
        red: "border-red-600 bg-red-50",
        orange: "border-orange-600 bg-orange-50",
        green: "border-emerald-600 bg-emerald-50",
        slate: "border-slate-600 bg-card",
    };

    const shadows = {
        red: "shadow-[4px_4px_0px_rgba(220,38,38,1)]",
        orange: "shadow-[4px_4px_0px_rgba(234,88,12,1)]",
        green: "shadow-[4px_4px_0px_rgba(5,150,105,1)]",
        slate: "shadow-[4px_4px_0px_rgba(71,85,105,1)]",
    };

    // Random-looking border radius for hand-drawn effect
    const radius = "255px 15px 225px 15px / 15px 225px 15px 255px";

    return (
        <div
            className={`border-2 p-6 transition-transform hover:-translate-y-1 hover:translate-x-1 ${borders[color]} ${shadows[color]} ${className}`}
            style={{ borderRadius: radius }}
        >
            {children}
        </div>
    );
};

const SketchyBadge = ({ children, color = "red" }: { children: React.ReactNode, color?: "red" | "orange" | "green" }) => {
    const styles = {
        red: "bg-red-600 text-white rotate-[-2deg]",
        orange: "bg-orange-500 text-white rotate-[2deg]",
        green: "bg-emerald-600 text-white rotate-[-1deg]",
    };

    return (
        <span className={`px-3 py-1 text-sm font-bold inline-block border-2 border-black/20 ${styles[color]}`} style={{ borderRadius: "20px 5px 20px 5px" }}>
            {children}
        </span>
    );
};

const ArrowDoodle = ({ angle = 0, color = "gray" }: { angle?: number, color?: string }) => (
    <div className={`flex justify-center my-2 transform rotate-[${angle}deg] opacity-60`}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-${color}-500`}>
            <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
    </div>
);


export default function EmergencyProvisionsModule({ onComplete, isCompleted }: EmergencyProvisionsModuleProps) {
    return (
        <NotebookContainer>
            {/* HERO */}
            <div className="text-center relative py-10">
                <div className="absolute top-0 right-10 rotate-12 opacity-20">
                    <Siren size={150} className="text-red-600" />
                </div>

                <div className="inline-block border-4 border-red-600 p-4 bg-card shadow-[8px_8px_0px_rgba(220,38,38,0.8)] rotate-[-1deg]" style={{ borderRadius: "2px 20px 5px 15px" }}>
                    <div className="flex items-center gap-2 justify-center text-red-600 font-bold uppercase tracking-widest text-sm mb-2">
                        <AlertTriangle size={18} /> Part XVIII (Art 352-360)
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-foreground mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        THE RED ALERT
                    </h1>
                    <h2 className="text-2xl font-bold text-red-600 font-serif">Emergency Provisions</h2>
                </div>
                <p className="mt-6 text-xl text-muted-foreground font-handwriting italic max-w-2xl mx-auto bg-yellow-100/80 p-2 rounded transform rotate-[1deg]">
                    "A Crisis Management Manual for the Constitution. Converting the Federal structure into Unitary (Temporarily)."
                </p>
            </div>

            {/* PHASE 1: NATIONAL EMERGENCY (RED) */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-red-600/30 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-red-700 font-handwriting">Phase 1: National Emergency (Art 352)</h2>
                    <div className="h-1 flex-1 bg-red-600/30 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* LEFT: THE TRIGGER */}
                    <SketchyBox color="red" className="relative">
                        <div className="absolute -top-4 -left-4 -rotate-6">
                            <span className="bg-red-600 text-white px-3 py-1 font-bold text-xs border-2 border-white shadow-md">TOP SECRET</span>
                        </div>

                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                            <Flame size={20} /> The Trigger Grounds
                        </h3>

                        <ul className="space-y-4 font-handwriting text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold">1.</span>
                                <span><strong>War / External Aggression</strong> (External Emergency)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold">2.</span>
                                <div>
                                    <strong>Armed Rebellion</strong> (Internal Emergency)
                                    <div className="bg-yellow-100 p-2 text-sm mt-1 border border-yellow-300 text-muted-foreground rotate-1">
                                        <span className="font-bold text-red-600">PYQ Note:</span> 'Internal Disturbance' replaced by 'Armed Rebellion' (44th AA, 1978). Too Vague!
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 border-t-2 border-red-200 border-dashed pt-4">
                            <strong className="text-red-700 block mb-1">President's Satisfaction:</strong>
                            <p className="text-sm">Must be on <strong>WRITTEN recommendation</strong> of Cabinet. (44th AA Check).</p>
                        </div>
                    </SketchyBox>

                    {/* RIGHT: APPROVAL LADDER */}
                    <SketchyBox color="slate" className="bg-card">
                        <h3 className="text-xl font-bold text-muted-foreground mb-4 flex items-center gap-2">
                            <Clock size={20} /> The Approval Ladder
                        </h3>

                        <div className="space-y-0 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-300 border-l-2 border-dashed border-border"></div>

                            {/* Steps */}
                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-card border-2 border-slate-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                <h4 className="font-bold text-lg">Proclamation Issued</h4>
                            </div>

                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-red-100 border-2 border-red-500 rounded-full flex items-center justify-center font-bold text-sm text-red-600">2</div>
                                <h4 className="font-bold text-lg text-red-700">Approval within 1 Month</h4>
                                <p className="text-sm text-muted-foreground">(Originally 2 months. Reduced by 44th AA).</p>
                            </div>

                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-card border-2 border-slate-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                <h4 className="font-bold text-lg">Special Majority</h4>
                                <p className="text-sm text-muted-foreground">Total Membership + 2/3rd Present & Voting.</p>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-sm text-green-700">4</div>
                                <h4 className="font-bold text-lg text-green-700">Lasts 6 Months</h4>
                                <p className="text-sm text-muted-foreground">Can extend indefinitely (Approval every 6 months).</p>
                            </div>
                        </div>
                    </SketchyBox>
                </div>

                {/* REVOCATION */}
                <div className="flex justify-center">
                    <SketchyBox color="slate" className="max-w-md w-full text-center bg-muted">
                        <h3 className="text-lg font-bold text-muted-foreground mb-2 flex items-center justify-center gap-2">
                            <Power size={18} /> Revocation (The Kill Switch)
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-left text-sm">
                            <div className="bg-card p-2 border border-border shadow-sm rotate-[-1deg]">
                                <strong>President:</strong> Can revoke anytime.
                            </div>
                            <div className="bg-card p-2 border border-border shadow-sm rotate-[1deg]">
                                <strong>Lok Sabha:</strong> Simple Majority resolution forces end. (Notice by 1/10th members).
                            </div>
                        </div>
                    </SketchyBox>
                </div>
            </div>

            {/* PHASE 2: PRESIDENT'S RULE (ORANGE) */}
            <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-orange-500/30 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-orange-600 font-handwriting">Phase 2: President's Rule (Art 356)</h2>
                    <div className="h-1 flex-1 bg-orange-500/30 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* LEFT: THE GROUNDS */}
                    <SketchyBox color="orange">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-orange-700 flex items-center gap-2">
                                <Map size={20} /> State Failure
                            </h3>
                            <Badge className="bg-orange-500 text-white border-0 font-handwriting">Not 'Emergency'</Badge>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-card border-l-4 border-orange-500 shadow-sm">
                                <strong className="text-orange-700 block">Article 356</strong>
                                <span className="text-muted-foreground">"Failure of Constitutional Machinery". Governor's report or otherwise.</span>
                            </div>

                            <div className="p-3 bg-card border-l-4 border-red-500 shadow-sm">
                                <div className="flex justify-between">
                                    <strong className="text-red-700 block">Article 365</strong>
                                    <span className="text-xs font-bold bg-red-100 text-red-600 px-1 rounded">PYQ Trap</span>
                                </div>
                                <span className="text-muted-foreground">State fails to comply with Centre's Directions.</span>
                            </div>
                        </div>
                    </SketchyBox>

                    {/* RIGHT: APPROVAL & DURATION */}
                    <SketchyBox color="slate" className="bg-orange-50/50">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">Timelines & Approval</h3>
                        <div className="space-y-3 font-handwriting text-lg">
                            <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                                <span className="text-muted-foreground">Time to Approve</span>
                                <span className="font-bold text-orange-700">2 Months</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                                <span className="text-muted-foreground">Majority</span>
                                <span className="font-bold text-green-600">Simple Majority</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                                <span className="text-muted-foreground">Max Duration</span>
                                <span className="font-bold text-red-600">3 Years</span>
                            </div>
                            <div className="mt-2 text-sm bg-card p-2 rounded border border-orange-200 text-muted-foreground italic">
                                <strong>Condition (&gt;1yr):</strong> Election Commission must certify elections difficult.
                            </div>
                        </div>
                    </SketchyBox>
                </div>
            </div>

            {/* PHASE 3: FINANCIAL EMERGENCY (GREEN) */}
            <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-emerald-500/30 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-emerald-700 font-handwriting">Phase 3: Financial Emergency (Art 360)</h2>
                    <div className="h-1 flex-1 bg-emerald-500/30 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* LEFT: THE VAULT */}
                    <SketchyBox color="green">
                        <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                            <Coins size={20} /> The Unused Weapon
                        </h3>
                        <p className="text-muted-foreground mb-4">Ground: Threat to Financial Stability or Credit of India.</p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card p-3 rounded border border-emerald-200 text-center">
                                <span className="block text-xs text-muted-foreground uppercase font-bold">Approval</span>
                                <strong className="text-emerald-700 text-lg">2 Months</strong>
                            </div>
                            <div className="bg-card p-3 rounded border border-emerald-200 text-center">
                                <span className="block text-xs text-muted-foreground uppercase font-bold">Duration</span>
                                <strong className="text-emerald-700 text-lg">Indefinite</strong>
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-center text-emerald-600 font-bold">No repeated parliamentary approval needed.</div>
                    </SketchyBox>

                    {/* RIGHT: EFFECTS */}
                    <SketchyBox color="slate" className="bg-emerald-50/30">
                        <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                            <Zap size={20} /> The Effects
                        </h3>
                        <ul className="space-y-3 font-handwriting">
                            <li className="flex items-start gap-2">
                                <span className="bg-red-100 text-red-600 p-1 rounded-full"><AlertOctagon size={14} /></span>
                                <span>Reduction of salaries of ANYONE (Union/State), including <strong>Supreme Court/HC Judges</strong>.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-orange-100 text-orange-600 p-1 rounded-full"><FileText size={14} /></span>
                                <span>State Money Bills reserved for President.</span>
                            </li>
                            <li className="mt-4 p-2 bg-emerald-100 border border-emerald-300 rounded text-emerald-800 text-center font-bold">
                                Status: Never Imposed. (Even in 1991).
                            </li>
                        </ul>
                    </SketchyBox>
                </div>
            </div>

            {/* PYQ PRACTICE SECTION */}

            {/* FOOTER: 44TH AMENDMENT */}
            <div className="pt-12 pb-8">
                <div
                    className="bg-slate-800 text-white p-8 relative shadow-xl transform rotate-1"
                    style={{ borderRadius: "20px 255px 20px 255px / 255px 20px 255px 20px" }}
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
                        <div className="bg-yellow-400 text-foreground px-6 py-2 font-black font-serif text-xl shadow-lg border-2 border-slate-900 -rotate-2">
                            44th AMENDMENT (1978)
                        </div>
                        <div className="text-xs text-muted-foreground font-mono mt-1 bg-slate-900 px-2 rounded">THE ANTI-ABUSE SHIELD</div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-4 gap-6 text-center font-handwriting text-lg">
                        <div className="bg-card/10 p-4 rounded-lg">
                            <strong className="text-yellow-400 block text-2xl mb-2">1.</strong>
                            Written Advice of Cabinet mandatory.
                        </div>
                        <div className="bg-card/10 p-4 rounded-lg">
                            <strong className="text-yellow-400 block text-2xl mb-2">2.</strong>
                            Special Majority for National Emergency.
                        </div>
                        <div className="bg-card/10 p-4 rounded-lg">
                            <strong className="text-yellow-400 block text-2xl mb-2">3.</strong>
                            1 Month limit for approval (was 2).
                        </div>
                        <div className="bg-card/10 p-4 rounded-lg">
                            <strong className="text-yellow-400 block text-2xl mb-2">4.</strong>
                            Periodic Approval every 6 Months.
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-10 py-8 text-xl font-bold font-handwriting shadow-[6px_6px_0px_#000] border-2 border-black transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] active:translate-y-1 active:shadow-[2px_2px_0px_#000]
                            ${isCompleted
                                ? 'bg-green-500 text-white rotate-1'
                                : 'bg-red-500 text-white -rotate-1'
                            }
                        `}
                        style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                    >
                        {isCompleted ?
                            <span className="flex items-center gap-2"><CheckCircle2 size={24} /> Emergency Revoked</span> :
                            <span className="flex items-center gap-2"><Lock size={24} /> Secure The Constitution</span>
                        }
                    </Button>
                </div>
            </div>
        </NotebookContainer>
    );
}
