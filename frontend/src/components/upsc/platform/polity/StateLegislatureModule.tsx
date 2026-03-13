"use client";

import React, { useState } from "react";
import {
    Building, Trash2, Construction,
    Map as MapIcon, Users, ArrowUpRight,
    Scale, AlertTriangle, Hammer,
    FileText, XCircle
} from "lucide-react";

interface StateLegislatureModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Unequal Houses (Assembly Hall) ---

const AssemblyContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#fefce8] text-foreground">
        {/* Construction/Blueprint Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,#ca8a04_1px,transparent_1px),linear-gradient(-45deg,#ca8a04_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const HouseCard = ({ children, title, icon: Icon, type, className = "" }: { children: React.ReactNode, title: string, icon?: any, type: "sabha" | "parishad" | "construction", className?: string }) => {
    const styles = {
        sabha: "bg-emerald-50 border-emerald-200 text-emerald-900 shadow-emerald-900/10",
        parishad: "bg-red-50 border-red-200 text-red-900 shadow-red-900/10",
        construction: "bg-yellow-50 border-yellow-200 text-yellow-900 shadow-yellow-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative ${styles[type]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function StateLegislatureModule({ onComplete, isCompleted, chapterNumber = "33" }: StateLegislatureModuleProps) {
    const [demolished, setDemolished] = useState(false);

    return (
        <AssemblyContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="flex justify-center items-end gap-1 mb-4">
                        <Building size={80} className="text-emerald-700" />
                        <Building size={60} className="text-red-700 opacity-60" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground font-serif mb-2">
                        STATE LEGISLATURE
                    </h1>
                    <div className="bg-yellow-100 text-yellow-900 px-4 py-1 rounded-md border-2 border-yellow-200 text-xs font-black uppercase tracking-tighter mb-4 inline-block">
                        Chapter {chapterNumber} &bull; "The Unequal Houses"
                    </div>
                </div>
            </div>

            {/* PHASE 1: BICAMERALISM (KUMBAT) */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-yellow-500 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-yellow-800">Phase 1: The Bicameral Map</h2>
                    <div className="h-px bg-yellow-500 flex-1"></div>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-xl border border-border">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <MapIcon size={120} className="mx-auto text-slate-200" />
                            <div className="text-center mt-4">
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm border border-yellow-300">
                                    Only 6 States Have 2 Houses
                                </span>
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <h3 className="font-bold text-lg border-b pb-2">Remember: <span className="text-emerald-600">KUMBAT</span></h3>
                            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                                <div className="bg-muted p-2 rounded border border-border"><strong>K</strong>arnataka</div>
                                <div className="bg-muted p-2 rounded border border-border"><strong>U</strong>ttar Pradesh</div>
                                <div className="bg-muted p-2 rounded border border-border"><strong>M</strong>aharashtra</div>
                                <div className="bg-muted p-2 rounded border border-border"><strong>B</strong>ihar</div>
                                <div className="bg-muted p-2 rounded border border-border"><strong>A</strong>ndhra Pradesh</div>
                                <div className="bg-muted p-2 rounded border border-border"><strong>T</strong>elangana</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: CREATION & ABOLITION (ART 169) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-red-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-red-700">Phase 2: Build or Destroy?</h2>
                    <div className="h-px bg-red-400 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* ART 169 CARD */}
                    <HouseCard title="Art 169: Creation/Abolition" icon={Construction} type="construction">
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="bg-emerald-100 p-2 rounded font-bold text-emerald-800 min-w-[80px] text-center">Step 1</div>
                                <div>
                                    <strong className="block text-emerald-900">State Assembly</strong>
                                    Passes Resolution by <span className="underline decoration-wavy decoration-emerald-500">Special Majority</span>.
                                </div>
                            </div>
                            <div className="flex justify-center text-muted-foreground">↓</div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded font-bold text-blue-800 min-w-[80px] text-center">Step 2</div>
                                <div>
                                    <strong className="block text-blue-900">Parliament</strong>
                                    Passes Law by <span className="bg-yellow-100 px-1 rounded font-bold text-yellow-800">Simple Majority</span>.
                                </div>
                            </div>
                            <div className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded italic border border-red-100">
                                This is NOT a Constitutional Amendment (Art 368).
                            </div>
                        </div>
                    </HouseCard>

                    {/* INTERACTIVE TRASH CAN */}
                    <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-xl border-dashed border-2 border-border">
                        <div className={`transition-all duration-500 ${demolished ? 'opacity-20 blur-sm scale-90' : 'opacity-100 scale-100'}`}>
                            <div className="w-32 h-40 bg-red-100 border-4 border-red-800 flex flex-col items-center justify-center rounded shadow-lg relative">
                                <div className="absolute top-2 w-20 h-2 bg-red-800 rounded"></div>
                                <strong className="text-red-900 text-center uppercase font-serif">Legislative Council</strong>
                                <span className="text-xs text-red-700">(Vidhan Parishad)</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setDemolished(!demolished)}
                            className="mt-8 flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
                        >
                            {demolished ? <Construction size={18} /> : <Trash2 size={18} />}
                            {demolished ? "Re-Create Council" : "Abolish Council"}
                        </button>
                    </div>
                </div>
            </div>

            {/* PHASE 3: COMPOSITION & POWERS */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-emerald-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-emerald-800">Phase 3: The Unequal Houses</h2>
                    <div className="h-px bg-emerald-600 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ASSEMBLY (SABHA) */}
                    <HouseCard title="Legislative Assembly" icon={Users} type="sabha">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-emerald-200 pb-1">
                                <span>Strength</span>
                                <span className="font-bold">Max 500 / Min 60*</span>
                            </div>
                            <div className="flex justify-between border-b border-emerald-200 pb-1">
                                <span>Election</span>
                                <span className="font-bold">Direct (People)</span>
                            </div>
                            <div className="bg-card/50 p-2 rounded text-xs italic text-muted-foreground">
                                *Exceptions: Sikkim (32), Goa (40), Mizoram (40).
                            </div>
                        </div>
                    </HouseCard>

                    {/* COUNCIL (PARISHAD) */}
                    <HouseCard title="Legislative Council" icon={Users} type="parishad">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-red-200 pb-1">
                                <span>Strength</span>
                                <span className="font-bold">Max 1/3 Assembly / Min 40</span>
                            </div>
                            <div className="border border-red-200 bg-card/50 p-2 rounded">
                                <strong className="block mb-1 text-xs uppercase text-red-500">Complex Election:</strong>
                                <ul className="grid grid-cols-2 gap-1 text-xs">
                                    <li>• 1/3 MLAs</li>
                                    <li>• 1/3 Local Bodies</li>
                                    <li>• 1/12 Teachers</li>
                                    <li>• 1/12 Graduates</li>
                                    <li>• 1/6 Governor (Nom)</li>
                                </ul>
                            </div>
                        </div>
                    </HouseCard>

                    {/* COMPARISON (THE SCALE) */}
                    <div className="md:col-span-2 bg-muted p-6 rounded-xl border border-border">
                        <h3 className="font-bold text-center mb-4 flex justify-center gap-2">
                            <Scale /> Power Comparison
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm font-sans">
                            <div className="p-3 bg-emerald-100 rounded text-emerald-900">
                                <strong>Money Bill</strong>
                                <div className="mt-1 text-xs">Only Assembly</div>
                            </div>
                            <div className="p-3 bg-red-100 rounded text-red-900">
                                <strong>Ord. Bill Delay</strong>
                                <div className="mt-1 text-xs">Max 4 Months (3+1)</div>
                            </div>
                            <div className="p-3 bg-slate-200 rounded text-foreground opacity-50">
                                <strong>Joint Sitting</strong>
                                <div className="mt-1 text-xs">DOES NOT EXIST</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-16 text-center">
                <button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
                        px-10 py-4 rounded-lg font-black uppercase text-lg transition-all border-b-4
                        ${isCompleted
                            ? 'bg-slate-300 text-muted-foreground border-slate-400 cursor-not-allowed'
                            : 'bg-yellow-500 text-yellow-900 border-yellow-700 hover:bg-yellow-400 hover:translate-y-px hover:border-b-0'
                        }
                    `}
                >
                    {isCompleted ? `CHAPTER ${chapterNumber} COMPLETED` : `MARK CHAPTER ${chapterNumber} COMPLETE`}
                </button>
            </div>
        </AssemblyContainer>
    );
}
