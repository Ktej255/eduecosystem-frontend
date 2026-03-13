"use client";

import React from "react";
import {
    Gavel, Users, CheckCircle2, XCircle, ArrowRight,
    Scale, UserCheck, AlertTriangle, Crown, Landmark,
    MinusCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VicePresidentModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Ex-Officio Gavel (Hand-Drawn) ---

const RSContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fdf2f2] text-foreground">
        {/* Crumpled Grid Texture */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#b91c1c_1px,transparent_1px),linear-gradient(to_bottom,#b91c1c_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        {/* Red Carpet overlay */}
        <div className="absolute inset-0 bg-red-900/5 mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const SketchyCard = ({ children, title, icon: Icon, color = "red", className = "" }: { children: React.ReactNode, title?: string, icon?: any, color?: "red" | "blue" | "slate", className?: string }) => {
    const styles = {
        red: "border-red-600 bg-red-50 text-red-900 shadow-[4px_4px_0px_#b91c1c]",
        blue: "border-blue-600 bg-blue-50 text-blue-900 shadow-[4px_4px_0px_#1e3a8a]",
        slate: "border-slate-600 bg-card text-foreground shadow-[4px_4px_0px_#475569]",
    };

    const c = styles[color];

    return (
        <div
            className={`border-2 p-6 transition-transform hover:-translate-y-1 border-dashed ${c} ${className}`}
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
            {title && (
                <div className="flex items-center gap-2 mb-4 font-bold text-xl uppercase tracking-wider border-b-2 border-current pb-2 border-dashed">
                    {Icon && <Icon size={24} />}
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default function VicePresidentModule({ onComplete, isCompleted, chapterNumber = "19" }: VicePresidentModuleProps) {
    return (
        <RSContainer>
            {/* HERO */}
            <div className="text-center py-10 relative">
                <div className="absolute top-10 left-10 -rotate-12 opacity-20 text-red-800">
                    <Gavel size={120} />
                </div>
                <div className="inline-block border-4 border-red-800 p-6 bg-red-100 rotate-1 shadow-xl" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}>
                    <div className="flex items-center justify-center gap-2 text-red-800 font-bold uppercase tracking-widest text-xs mb-2">
                        <Gavel size={14} /> Chapter {chapterNumber}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-red-900 font-serif mb-2">
                        The Vice-President
                    </h1>
                    <p className="text-xl text-red-800 font-handwriting italic">
                        "His Superfluous Highness" &mdash; The Ex-Officio Chairman
                    </p>
                </div>
            </div>

            {/* PHASE 1: ELECTION (THE COMPARISON) */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-red-300 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-red-800 font-handwriting">Phase 1: Election (Art 66) vs President</h2>
                    <div className="h-1 flex-1 bg-red-300 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative">
                    {/* VS BADGE */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-black font-black p-3 rounded-full border-4 border-black shadow-lg rotate-12 hidden md:block">
                        VS
                    </div>

                    {/* VP ELECTION */}
                    <SketchyCard title="Vice-President Election" icon={UserCheck} color="red">
                        <ul className="space-y-4 font-handwriting text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                                <div>
                                    <strong>Members:</strong> <span className="text-red-600 font-bold">BOTH</span> Elected & Nominated MPs.
                                    <div className="text-sm bg-red-100 px-2 rounded w-fit mt-1">[PYQ Trap] Nominated MPs vote here!</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                                <span><strong>Houses:</strong> Lok Sabha + Rajya Sabha.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="text-red-600 shrink-0 mt-1" />
                                <div>
                                    <strong>States:</strong> <span className="text-red-600 font-bold">NO.</span> MLAs do NOT vote.
                                    <div className="text-sm text-muted-foreground mt-1">(Unlike President).</div>
                                </div>
                            </li>
                        </ul>
                    </SketchyCard>

                    {/* PRESIDENT ELECTION (CONTRAST) */}
                    <SketchyCard title="President Election (Recall)" icon={Crown} color="blue">
                        <ul className="space-y-4 font-handwriting text-lg opacity-80">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" />
                                <div>
                                    <strong>Members:</strong> <span className="text-blue-600 font-bold">ONLY</span> Elected MPs.
                                    <div className="text-sm text-muted-foreground mt-1">Nominated MPs are excluded.</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" />
                                <span><strong>States:</strong> MLAs <span className="text-blue-600 font-bold">DO</span> vote.</span>
                            </li>
                        </ul>
                        <div className="mt-6 text-center text-sm bg-blue-100 p-2 rounded text-blue-800 -rotate-1">
                            VP represents the Union, not the States. <br />(Dr. Ambedkar's Logic).
                        </div>
                    </SketchyCard>
                </div>
            </div>

            {/* PHASE 2: QUALIFICATIONS */}
            <div className="max-w-3xl mx-auto mt-12 mb-12">
                <SketchyCard title="Qualifications Checklist" icon={CheckCircle2} color="slate">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-handwriting">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border-2 border-slate-800 flex items-center justify-center font-bold text-green-600">✓</div>
                            Citizen of India.
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border-2 border-slate-800 flex items-center justify-center font-bold text-green-600">✓</div>
                            Age &gt; 35 Years.
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border-2 border-slate-800 flex items-center justify-center font-bold text-green-600">✓</div>
                            No Office of Profit.
                        </div>
                        <div className="bg-yellow-100 p-2 border border-yellow-400 rotate-1 shadow-sm">
                            <strong className="text-red-600 block text-sm">CRITICAL DIFFERENCE</strong>
                            Qualified for election as member of <span className="font-bold underline">Rajya Sabha</span>.
                            <div className="text-xs text-muted-foreground">(President needs Lok Sabha).</div>
                        </div>
                    </div>
                </SketchyCard>
            </div>

            {/* PHASE 3: FUNCTIONS */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-red-300 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-red-800 font-handwriting">Phase 3: The Ex-Officio Chairman</h2>
                    <div className="h-1 flex-1 bg-red-300 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* CHAIRMAN ROLE */}
                    <div className="bg-red-900 text-white p-6 rounded-xl relative shadow-2xl skew-x-1 border-[3px] border-white/20">
                        <div className="absolute -right-4 -top-6 rotate-12 bg-card text-red-900 p-2 rounded-full border-4 border-red-900 shadow-lg">
                            <Gavel size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-4 border-b border-red-700 pb-2">Ex-Officio Chairman (Art 64)</h3>
                        <ul className="space-y-3 font-handwriting text-red-100">
                            <li>• Presides over Rajya Sabha.</li>
                            <li>• Powers similar to Speaker of Lok Sabha.</li>
                            <li className="bg-red-800 p-2 rounded border border-red-600">
                                <strong className="text-yellow-300">Casting Vote:</strong> Can only vote in case of a tie. Not in first instance.
                            </li>
                            <li>• <strong>NOT a member</strong> of the House. (Unlike Speaker).</li>
                        </ul>
                    </div>

                    {/* ACTING PRESIDENT */}
                    <div className="bg-card border-2 border-border p-6 rounded-xl relative shadow-lg -skew-x-1">
                        <div className="absolute -left-4 -top-6 -rotate-12 bg-slate-800 text-white p-2 rounded-full border-4 border-white shadow-lg">
                            <AlertTriangle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-4 text-foreground border-b border-border pb-2">Acting President (Art 65)</h3>
                        <p className="text-muted-foreground font-handwriting mb-4">
                            Acts as President when vacancy occurs (Death, Resignation, Removal).
                        </p>
                        <div className="bg-muted p-3 rounded border border-border text-sm font-handwriting">
                            <strong>Max Period:</strong> 6 Months. (Election must be held). <br />
                            <span className="text-red-500 block mt-1">While Acting President, he does NOT perform duties of RS Chairman.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER ACTION */}
            <div className="mt-16 text-center">
                <button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
                        px-8 py-4 text-xl font-bold font-handwriting border-2 border-black shadow-[6px_6px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] active:translate-y-0 active:shadow-[2px_2px_0px_#000]
                        ${isCompleted ? 'bg-green-500 text-white' : 'bg-red-600 text-white'}
                    `}
                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                >
                    {isCompleted ? 
                        <span className="flex items-center gap-2"><CheckCircle2 size={18} /> CHAPTER {chapterNumber} COMPLETED</span> : 
                        <span className="flex items-center gap-2"><Gavel size={18} /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                    }
                </button>
            </div>

        </RSContainer>
    );
}
