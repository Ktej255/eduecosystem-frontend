"use client";

import React, { useState } from "react";
import {
    Megaphone, FileText, Send, Unlock, Lock,
    CheckCircle, XCircle, AlertTriangle, Gavel,
    Scale, Scroll, Users, MessageSquare, Hand, CheckCircle2
} from "lucide-react";

interface PubIntLitigationModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Open Gate (Voice of the Voiceless) ---

const GateContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f0fdf4] text-foreground">
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#15803d_1px,transparent_1px),linear-gradient(to_bottom,#15803d_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const SectionCard = ({ children, title, icon: Icon, color = "green", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "green" | "red" | "grey", className?: string }) => {
    const styles = {
        green: "bg-green-50 border-green-200 shadow-green-900/10 text-green-900",
        red: "bg-red-50 border-red-200 shadow-red-900/10 text-red-900",
        grey: "bg-muted border-border shadow-slate-900/10 text-foreground"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative overflow-hidden ${styles[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-80">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

const Postcard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff1cc] p-6 shadow-md border border-[#d4b98c] relative rotate-1 font-serif text-foreground">
        <div className="absolute top-4 right-4 w-16 h-20 border-2 border-dashed border-red-800/30 flex items-center justify-center text-xs text-red-800/50 -rotate-2">
            STAMP
        </div>
        <div className="flex gap-8">
            <div className="flex-1 border-r border-[#d4b98c] pr-6">
                {children}
            </div>
            <div className="w-1/3 pt-12 space-y-4 font-handwriting text-muted-foreground text-sm">
                <div className="h-px bg-slate-400"></div>
                <div className="h-px bg-slate-400"></div>
                <div className="h-px bg-slate-400"></div>
                <div className="text-center mt-4 text-xs uppercase tracking-widest text-[#15803d]">Epistolary Jurisdiction</div>
            </div>
        </div>
    </div>
);

export default function PubIntLitigationModule({ onComplete, isCompleted, chapterNumber = "29" }: PubIntLitigationModuleProps) {
    const [gateOpen, setGateOpen] = useState(false);

    return (
        <GateContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#15803d]/20">
                        <Users size={180} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#15803d] font-serif mb-4 relative z-10 drop-shadow-sm">
                        <div className="text-green-800 font-bold uppercase tracking-widest text-xs mb-2">Chapter {chapterNumber}</div>
                        THE OPEN GATE
                    </h1>
                    <p className="text-xl font-bold uppercase tracking-widest text-muted-foreground bg-card/50 px-4 py-2 inline-block rounded-full border border-[#15803d]/20 backdrop-blur-sm">
                        Public Interest Litigation (PIL)
                    </p>
                </div>
            </div>

            {/* PHASE 1: CONCEPT & ORIGIN */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-[#15803d] flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-[#15803d]">Phase 1: Opening the Door</h2>
                    <div className="h-px bg-[#15803d] flex-1 opacity-50"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DEFINITION MEGAPHONE */}
                    <SectionCard title="The Voice" icon={Megaphone} color="green">
                        <div className="space-y-4 text-lg">
                            <p className="font-bold">Legal action for enforcement of <span className="underline decoration-wavy decoration-green-500">Public Interest</span>.</p>
                            <p className="text-sm bg-card/50 p-3 rounded italic text-muted-foreground border border-green-100">
                                Goal: Justice for the poor & disadvantaged who cannot approach court themselves.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-700 mt-2">
                                <Hand size={14} className="rotate-45" /> Collaborative (Not Adversarial)
                            </div>
                        </div>
                    </SectionCard>

                    {/* HISTORY TIMELINE */}
                    <SectionCard title="History Scroll" icon={Scroll} color="grey">
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-3">
                                <div className="text-muted-foreground font-bold w-12 text-right">1960s</div>
                                <div className="border-l-2 border-border pl-3">
                                    <strong className="block text-foreground">USA (Origin)</strong>
                                    Called "Social Action Litigation".
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="text-green-600 font-bold w-12 text-right">1980s</div>
                                <div className="border-l-2 border-green-500 pl-3">
                                    <strong className="block text-green-800">INDIA Introduction</strong>
                                    <span className="text-xs text-muted-foreground block mb-1">Pioneers: Justice Iyer & Bhagwati</span>
                                    <div className="bg-card p-2 rounded shadow-sm border border-slate-100 mt-1">
                                        <strong className="text-foreground">S.P. Gupta Case (1982)</strong>
                                        <div className="text-xs text-muted-foreground">"Any member of public can maintain application for others' rights."</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionCard>

                    {/* LOCUS STANDI ANIMATION */}
                    <div className="md:col-span-2 bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                        <div className="bg-muted p-4 border-b flex justify-between items-center">
                            <h3 className="font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <Unlock size={18} /> Locus Standi Transformation
                            </h3>
                            <button
                                onClick={() => setGateOpen(!gateOpen)}
                                className={`px-4 py-1 rounded-full text-xs font-bold uppercase transition-colors ${gateOpen ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-muted-foreground'}`}
                            >
                                {gateOpen ? "PIL Rule Active" : "Traditional Rule"}
                            </button>
                        </div>
                        <div className="p-8 flex items-center justify-center gap-16 transition-all duration-500 bg-gradient-to-b from-slate-50 to-white">
                            {/* The Gate */}
                            <div className={`relative w-48 h-48 border-4 border-slate-800 rounded-t-full flex items-end justify-center transition-all duration-700 ${gateOpen ? 'border-green-600' : 'border-slate-800'}`}>
                                <div className={`absolute bottom-0 w-[2px] h-full bg-slate-800 origin-bottom transition-transform duration-700 ${gateOpen ? 'rotate-[100deg] opacity-20' : 'rotate-0'}`}></div>
                                <div className={`absolute bottom-0 w-[2px] h-full bg-slate-800 origin-bottom transition-transform duration-700 ${gateOpen ? '-rotate-[100deg] opacity-20' : 'rotate-0'}`}></div>

                                {gateOpen ? (
                                    <div className="text-green-600 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                                        <Users size={64} />
                                        <span className="text-xs font-bold uppercase mt-2 bg-green-100 px-2 py-1 rounded">Anyone Can Enter</span>
                                    </div>
                                ) : (
                                    <div className="text-muted-foreground flex flex-col items-center">
                                        <Lock size={48} className="mb-2" />
                                        <span className="text-xs font-bold uppercase bg-slate-200 px-2 py-1 rounded">Aggrieved Only</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: FEATURES & SCOPE */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-[#15803d] flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-[#15803d]">Phase 2: Use & Scope</h2>
                    <div className="h-px bg-[#15803d] flex-1 opacity-50"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* EPISTOLARY POSTCARD */}
                    <div className="md:col-span-2">
                        <Postcard>
                            <div className="space-y-2">
                                <h4 className="font-bold text-lg border-b border-[#d4b98c] pb-1 mb-2">To, The Chief Justice of India</h4>
                                <p className="italic">"We are writing to inform you about the inhuman conditions in Tihar Jail..."</p>
                                <p className="mt-4 font-bold text-sm bg-card/50 p-2 inline-block rounded">
                                    <span className="text-green-700">Sunil Batra vs Delhi Admin</span>: Letter treated as Petition.
                                </p>
                            </div>
                        </Postcard>
                    </div>

                    {/* GREEN LIST (SCOPE) */}
                    <SectionCard title="Green List (Allowed)" icon={CheckCircle} color="green">
                        <ul className="space-y-3 font-handwriting text-sm">
                            {['Bonded Labor', 'Neglected Children', 'Non-payment of Minimum Wages', 'Jail Petitions (Harassment)', 'Police Torture / Custodial Death', 'Environmental Pollution', 'Riots Victims'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-green-600 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    {/* CONTENT PLACEHOLDER FOR BALANCE */}
                    <div className="bg-[#15803d] p-6 rounded-xl shadow-xl flex items-center justify-center text-white text-center">
                        <div>
                            <Scale size={64} className="mx-auto mb-4 opacity-80" />
                            <p className="font-bold font-serif text-xl border-b-2 border-white/20 pb-2 mb-2">Constitutional Basis</p>
                            <div className="space-y-1 text-sm opacity-90 font-mono">
                                <div>Art 32 (SC)</div>
                                <div>Art 226 (HC)</div>
                                <div className="text-yellow-300 font-bold">Art 39A (Free Legal Aid)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: ABUSE & GUIDELINES */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-red-600 flex-1 opacity-50"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-red-700">Phase 3: Stops & Checks</h2>
                    <div className="h-px bg-red-600 flex-1 opacity-50"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* RED LIST (STOP) */}
                    <SectionCard title="Red List (Not PIL)" icon={XCircle} color="red">
                        <div className="absolute top-2 right-2 opacity-10">
                            <AlertTriangle size={80} />
                        </div>
                        <ul className="space-y-3 font-handwriting text-sm relative z-10">
                            {['Landlord-Tenant Disputes', 'Service Matters (Pension/Salary)', 'Admission to Colleges', 'Early Hearing in High Court', 'Political Matters disguised as PIL'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <XCircle size={16} className="text-red-600 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    {/* JUDGE'S HAMMER */}
                    <SectionCard title="SC Guidelines" icon={Gavel} color="grey">
                        <div className="space-y-4">
                            <p className="text-xs bg-red-100 text-red-800 p-2 rounded font-bold text-center border border-red-200 mb-2">
                                Problem: "Publicity Interest Litigation"
                            </p>
                            <ul className="space-y-2 text-sm font-sans list-disc list-inside text-muted-foreground">
                                <li>Court must verify credentials of petitioner.</li>
                                <li>Must ensure no personal gain/motive.</li>
                                <li><strong>Heavy Fines</strong> for frivolous PILs.</li>
                            </ul>
                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* FOOTER ACTION */}
            <div className="mt-16 text-center">
                <button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
                        px-12 py-4 rounded-full font-black uppercase text-xl transition-all shadow-xl
                        ${isCompleted
                            ? 'bg-slate-200 text-muted-foreground cursor-not-allowed shadow-none'
                            : 'bg-gradient-to-r from-[#15803d] to-green-700 text-white hover:scale-105 hover:shadow-2xl'
                        }
                    `}
                >
                    {isCompleted ? 
                        <span className="flex items-center gap-2 justify-center"><CheckCircle2 size={18} /> CHAPTER {chapterNumber} COMPLETED</span> : 
                        <span className="flex items-center gap-2 justify-center"><Send size={18} /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                    }
                </button>
            </div>
        </GateContainer>
    );
}
