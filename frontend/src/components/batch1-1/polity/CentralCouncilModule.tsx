"use client";

import React from "react";
import {
    Orbit, Users, Anchor, Circle, User,
    ShieldAlert, FileText, Scale, Coffee,
    Sailboat, AlertTriangle
} from "lucide-react";

interface CentralCouncilModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The Orbits of Power (Solar System) ---

const OrbitContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#faf5ff] text-foreground">
        {/* Orbit Lines Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-400 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const SketchCard = ({ children, title, icon: Icon, color = "purple", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "purple" | "indigo" | "red", className?: string }) => {
    const theme = {
        purple: "border-purple-600 bg-purple-50 text-purple-900 shadow-[4px_4px_0px_#581c87]",
        indigo: "border-indigo-600 bg-indigo-50 text-indigo-900 shadow-[4px_4px_0px_#4338ca]",
        red: "border-red-600 bg-red-50 text-red-900 shadow-[4px_4px_0px_#dc2626]",
    };

    return (
        <div className={`border-2 rounded-xl p-6 relative ${theme[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-dashed border-current">
                {Icon && <Icon size={24} />}
                <h3 className="font-bold text-xl font-serif">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function CentralCouncilModule({ onComplete, isCompleted }: CentralCouncilModuleProps) {
    return (
        <OrbitContainer>
            {/* HERO */}
            <div className="text-center py-10 relative">
                <div className="inline-block relative z-10">
                    <div className="animate-[spin_10s_linear_infinite] absolute -top-12 -left-12 text-purple-200">
                        <Orbit size={120} />
                    </div>
                    <div className="bg-card border-4 border-purple-900 p-8 rounded-full shadow-2xl relative">
                        <h1 className="text-4xl md:text-5xl font-black text-purple-900 font-serif mb-2">
                            Central Council
                        </h1>
                        <p className="text-purple-700 font-handwriting text-xl">
                            "The Orbits of Power"
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 1: CONSTITUTIONAL RULES */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-0.5 flex-1 bg-purple-300"></div>
                    <h2 className="text-3xl font-bold text-purple-900 font-handwriting">Phase 1: The Rules (Art 74 & 75)</h2>
                    <div className="h-0.5 flex-1 bg-purple-300"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ART 74: AID & ADVICE */}
                    <SketchCard title="Art 74: Aid & Advice" icon={FileText} color="purple">
                        <div className="space-y-4 text-sm font-handwriting">
                            <div className="bg-card/50 p-3 rounded border border-purple-200 indent-4 italic">
                                "There shall be a Council of Ministers with PM at the head."
                            </div>

                            <div className="space-y-2">
                                <strong className="block text-purple-800">Status of Advice:</strong>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold bg-purple-200 px-1 rounded">42nd AA (1976)</span>
                                    <span>Made advice <strong className="underline">BINDING</strong>.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold bg-purple-200 px-1 rounded">44th AA (1978)</span>
                                    <span>Return ONCE. Reconsidered = Binding.</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-2 border-t border-purple-200 text-purple-700 flex items-center gap-2">
                                <Scale size={16} />
                                Judicial Review: Courts <strong className="text-red-600">CANNOT</strong> inquire into advice.
                            </div>
                        </div>
                    </SketchCard>

                    {/* ART 75: OTHER PROVISIONS */}
                    <SketchCard title="Art 75: Provisions Checklist" icon={Users} color="indigo">
                        <ul className="space-y-3 font-handwriting text-sm">
                            <li className="flex gap-2 items-start">
                                <div className="mt-1 w-2 h-2 bg-indigo-500 rounded-full shrink-0"></div>
                                <span><strong>Appointment:</strong> By President on advice of PM.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <div className="mt-1 w-2 h-2 bg-indigo-500 rounded-full shrink-0"></div>
                                <span><strong>Oath:</strong> Secrecy & Office (By President).</span>
                            </li>
                            <li className="bg-yellow-100 p-2 rounded border border-yellow-400 text-yellow-900">
                                <strong className="block mb-1">91st AA (2003) Size Limit:</strong>
                                Total ministers (incl PM) shall NOT exceed <strong className="text-red-600">15%</strong> of Lok Sabha strength. [PYQ]
                                <div className="text-xs mt-1 text-muted-foreground">(Minimum 12 - mostly for states).</div>
                            </li>
                            <li className="flex gap-2 items-start text-red-600">
                                <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                                <span><strong>Disqualification:</strong> Defection (10th Sched) = Minister Disqualified.</span>
                            </li>
                        </ul>
                    </SketchCard>
                </div>
            </div>

            {/* PHASE 2: RESPONSIBILITY */}
            <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-0.5 flex-1 bg-red-300"></div>
                    <h2 className="text-3xl font-bold text-red-900 font-handwriting">Phase 2: Responsibility</h2>
                    <div className="h-0.5 flex-1 bg-red-300"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* COLLECTIVE RESPONSIBILITY */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-blue-100 rounded-xl transform rotate-1 transition-transform group-hover:rotate-0"></div>
                        <div className="relative bg-card border-2 border-blue-500 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2 mb-4 font-serif">
                                <Users size={24} /> Collective Responsibility
                            </h3>
                            <div className="mb-4 flex justify-center text-blue-300">
                                <Sailboat size={64} />
                            </div>
                            <p className="text-center font-bold font-handwriting text-blue-800 text-lg mb-2">
                                "Swim together or Sink together"
                            </p>
                            <ul className="text-sm font-handwriting space-y-2 text-blue-900">
                                <li>• Accountable to <strong className="text-red-600">Lok Sabha</strong> (NOT Parliament). [PYQ]</li>
                                <li>• If No-Confidence passes &rarr; Entire Council Resigns.</li>
                                <li>• Duty to support Cabinet decisions inside & outside.</li>
                            </ul>
                        </div>
                    </div>

                    {/* INDIVIDUAL RESPONSIBILITY */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-pink-100 rounded-xl transform -rotate-1 transition-transform group-hover:rotate-0"></div>
                        <div className="relative bg-card border-2 border-pink-500 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-pink-900 flex items-center gap-2 mb-4 font-serif">
                                <User size={24} /> Individual Responsibility
                            </h3>
                            <div className="mb-4 flex justify-center text-pink-300">
                                <FileText size={64} />
                            </div>
                            <p className="text-center font-bold font-handwriting text-pink-800 text-lg mb-2">
                                "The Pink Slip"
                            </p>
                            <ul className="text-sm font-handwriting space-y-2 text-pink-900">
                                <li>• Office during <strong>Pleasure of President</strong>.</li>
                                <li>• President can remove on advice of PM.</li>
                                <li className="bg-pink-50 p-2 rounded border border-pink-200 text-xs">
                                    <strong>No Legal Responsibility:</strong> Unlike UK, Indian ministers do NOT countersign acts. Courts cannot sue for advice.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: COMPOSITION (SOLAR SYSTEM) */}
            <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                <h2 className="text-center text-3xl font-serif font-bold text-purple-200 mb-12 relative z-10">
                    The Solar System of Power
                </h2>

                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* ORBITS */}
                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-slate-600 rounded-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-indigo-600 text-[10px] px-2 rounded-full">Ministers of State</div>
                    </div>
                    <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border-2 border-purple-500 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-purple-600 text-xs px-2 rounded-full font-bold">Cabinet</div>
                    </div>

                    {/* CORE */}
                    <div className="absolute bg-yellow-400 text-yellow-900 w-24 h-24 rounded-full flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(250,204,21,0.6)] z-20">
                        PM
                    </div>

                    {/* EXPLANATION CARDS (Floating) */}
                    <div className="absolute top-0 left-0 md:bg-card/10 p-4 rounded-lg backdrop-blur-sm max-w-xs border border-white/20 z-30">
                        <strong className="text-purple-300 block mb-1">Inner Ring: Cabinet</strong>
                        <p className="text-xs text-slate-300">Heads important ministries (Home, Def, Fin). Crucial decision makers.</p>
                    </div>

                    <div className="absolute bottom-0 right-0 md:bg-card/10 p-4 rounded-lg backdrop-blur-sm max-w-xs border border-white/20 z-30">
                        <strong className="text-indigo-300 block mb-1">Outer Ring: Council</strong>
                        <p className="text-xs text-slate-300">MoS (Ind. Charge), MoS (Attached), Deputy Ministers. Larger body (60-70).</p>
                    </div>
                </div>

                {/* COMPARISON TABLE */}
                <div className="mt-12 bg-card/5 p-6 rounded-xl border border-white/10 max-w-3xl mx-auto">
                    <h3 className="text-center font-bold text-xl mb-4 border-b border-white/20 pb-2">Cabinet vs Council [Napkin Sketch]</h3>
                    <div className="grid grid-cols-2 gap-8 text-sm font-handwriting">
                        <div>
                            <strong className="block text-purple-300 text-lg mb-2">Cabinet</strong>
                            <ul className="space-y-2 list-disc pl-4 text-slate-300">
                                <li>Smaller body (15-20).</li>
                                <li>Frequency meetings (Weekly).</li>
                                <li>Policy Maker.</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-indigo-300 text-lg mb-2">Council</strong>
                            <ul className="space-y-2 list-disc pl-4 text-slate-300">
                                <li>Larger body (60-70).</li>
                                <li>Rarely meets as a whole.</li>
                                <li>Implements Policy.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: KITCHEN CABINET */}
            <div className="mt-12 text-center relative max-w-xl mx-auto">
                <div className="absolute -top-6 -right-6 text-amber-800 opacity-20 rotate-12">
                    <Coffee size={80} />
                </div>
                <div className="bg-amber-50 border-2 border-amber-900/20 p-6 rounded-lg shadow-inner">
                    <h3 className="text-amber-900 font-bold font-serif text-lg mb-2 flex justify-center items-center gap-2">
                        <Coffee size={20} /> The "Kitchen" Cabinet
                    </h3>
                    <p className="text-amber-800 text-sm font-handwriting mb-2">
                        Informal body. PM + 2-4 Friends/Family. <br />
                        Real center of power.
                    </p>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">
                        Extra-Constitutional
                    </span>
                </div>

                <div className="mt-8">
                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-3 rounded-full font-bold shadow-lg transition-all text-lg
                            ${isCompleted
                                ? 'bg-purple-600 text-white'
                                : 'bg-card text-purple-900 border-2 border-purple-600 hover:bg-purple-50'
                            }
                        `}
                    >
                        {isCompleted ? "Orbit Stabilized" : "Align the Orbits"}
                    </button>
                </div>
            </div>
        </OrbitContainer>
    );
}
