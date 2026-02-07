"use client";

import React from "react";
import {
    Shield, Scale, ScrollText,
    Gavel, PenTool, Landmark,
    ArrowRight, Sparkles, Zap,
    Info, AlertTriangle, Briefcase,
    Globe, Target, BadgeCheck,
    CheckCircle2, Ban, ShieldAlert,
    LayoutGrid, Pyramid, HeartHandshake,
    CheckSquare, Users, Crown,
    Coins, ShoppingCart, FileSignature,
    Hammer, FileText, LucideIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RightsLiabilitiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#171717] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-900 selection:text-blue-100">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#171717] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 12 12 L 988 12 L 988 988 L 12 988 Z" fill="none" stroke="#000" strokeWidth="4" strokeDasharray="20 15" />
            </svg>
            <div className="absolute top-0 right-0 w-full h-2 bg-[#1d4ed8] opacity-30"></div>
            {children}
        </div>
    </div>
);

const LegalCard = ({ title, children, color = "border-[#171717]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(23,23,23,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <LayoutGrid size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-3deg] border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function RightsLiabilitiesModule({ onComplete, isCompleted }: RightsLiabilitiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#171717] border-4 border-[#171717] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(31,31,31,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#1d4ed8] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 76</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">The Sovereign Shield</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Rights & <br /> <span className="text-blue-500 italic">Liabilities</span> <br />
                        <span className="text-[#ca8a04] drop-shadow-md underline decoration-wavy decoration-white italic text-3xl md:text-5xl">of the Government</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed italic opacity-90">
                        "Decoding the legal personality of the State. Can the government own property? Can it sign contracts? Can you sue the King?"
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Shield size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: PROPERTY & SUCCESSION */}
            <PhaseHeader number="1" title="Phase 1: Property & Succession (The Inheritance)" color="bg-[#ca8a04]" />

            <div className="grid md:grid-cols-2 gap-8">
                <LegalCard title="Inheritance & Escheat" color="border-[#ca8a04]">
                    <div className="p-5 bg-amber-50 border-x-4 border-[#ca8a04] rounded-3xl relative overflow-hidden group italic">
                        <Crown className="absolute top-0 right-0 p-2 opacity-10 text-[#ca8a04]" size={40} />
                        <h4 className="font-black text-[#ca8a04] uppercase text-xs mb-4">Art 294-296</h4>
                        <div className="space-y-4 text-xs">
                            <p className="flex items-start gap-2">
                                <BadgeCheck size={14} className="text-[#ca8a04] shrink-0" />
                                <span><span className="text-[#ca8a04] underline">Succession:</span> British Assets devolved to the Union/States in 1950.</span>
                            </p>
                            <div className="p-3 bg-white border border-dashed border-[#ca8a04] rounded-xl">
                                <h5 className="font-black text-[10px] text-[#ca8a04] uppercase">Escheat & Lapse [PYQ]</h5>
                                <p className="mt-1">Property with no rightful owner vests in the State.</p>
                            </div>
                        </div>
                    </div>
                </LegalCard>

                <LegalCard title="Maritime Wealth" color="border-blue-800">
                    <div className="p-6 bg-blue-900 text-white rounded-[2rem] relative shadow-xl space-y-4 italic">
                        <Globe className="text-blue-300 group-hover:rotate-12 transition-transform" size={42} />
                        <h4 className="text-xs font-black uppercase text-blue-200 underline underline-offset-4 tracking-widest">Article 297 [High Yield]</h4>
                        <p className="text-sm font-bold leading-tight">
                            All minerals and things of value within <span className="text-blue-300">Territorial Waters</span>, Continental Shelf, and EEZ vest in the <span className="text-blue-100 underline decoration-wavy">Union</span>. [PYQ]
                        </p>
                    </div>
                </LegalCard>
            </div>

            <div className="p-8 bg-slate-50 border-2 border-slate-200 rounded-3xl shadow-sm italic mt-8 flex items-center gap-6">
                <ShoppingCart className="text-[#1d4ed8]" size={48} />
                <div>
                    <h4 className="font-black text-slate-800 uppercase text-sm mb-1">Article 298: Trade & Business</h4>
                    <p className="text-xs font-bold text-slate-500">
                        Executive power extends to carrying on trade, acquiring/disposing property. Note: They can trade even <span className="text-blue-700 underline">without a specific law</span>.
                    </p>
                </div>
            </div>

            {/* PHASE 2: GOVERNMENT CONTRACTS */}
            <PhaseHeader number="2" title="Phase 2: Gov't Contracts (Art 299) [CRITICAL]" color="bg-[#1d4ed8]" />

            <div className="relative group p-10 bg-blue-50 border-4 border-[#1d4ed8] border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-20 transition-opacity"><PenTool size={180} className="text-[#1d4ed8]" /></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 italic">
                    <h4 className="text-2xl font-black text-[#1d4ed8] italic text-center uppercase mb-6">The 3 Immutable Conditions [PYQ]</h4>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: UserCheck, text: "Made in the name of President or Governor." },
                            { icon: FileSignature, text: "Executed on behalf of President or Governor." },
                            { icon: UserCheck, text: "Executed by person directed/authorized." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-white border-2 border-[#1d4ed8] rounded-2xl shadow-md text-center group hover:bg-[#1d4ed8] hover:text-white transition-all">
                                <item.icon className="mx-auto mb-4 text-[#1d4ed8] group-hover:text-white" size={32} />
                                <p className="text-[12px] font-black leading-tight">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-red-50 border-l-8 border-red-600 rounded-r-2xl">
                        <div className="flex items-center gap-2 text-red-700 font-black mb-2"><ShieldAlert size={20} /> <span className="uppercase text-xs">The Voids & Immunities</span></div>
                        <p className="text-[12px] font-bold text-slate-700">
                            If conditions are NOT met, the contract is <span className="text-red-700 underline">void</span>. However, the President/Governor is <span className="text-red-700 underline">not personally liable</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: SUITS & LIABILITY */}
            <PhaseHeader number="3" title="Phase 3: Suits & Liability (Art 300)" color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-1 gap-8">
                <LegalCard title="Tortious Liability: The Binary Shield" color="border-red-600">
                    <div className="relative p-8 bg-white border-4 border-slate-900 rounded-[2.5rem] overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Scale size={120} /></div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-slate-900 font-black"><Crown /> <h5 className="uppercase">Sovereign Functions</h5></div>
                                <p className="text-[12px] italic leading-relaxed text-slate-600">
                                    War, Defense, Law & Order, Taxes.
                                    <br />
                                    <span className="text-red-600 font-black text-lg underline decoration-wavy">NO LIABILITY.</span>
                                    <br />
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">(Kasturi Lal Case) [PYQ]</span>
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-[#1d4ed8] font-black"><Hammer /> <h5 className="uppercase">Non-Sovereign Functions</h5></div>
                                <p className="text-[12px] italic leading-relaxed text-slate-600">
                                    Transport, Trade, Construction, Negligence.
                                    <br />
                                    <span className="text-[#1d4ed8] font-black text-lg underline decoration-wavy">GOVT IS LIABLE.</span>
                                    <br />
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">(Vidhyawati Case)</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t-2 border-slate-100 flex flex-col md:flex-row gap-6">
                            <div className="flex-1 p-4 bg-slate-900 text-white rounded-2xl text-center">
                                <h6 className="text-[10px] uppercase font-black text-slate-400 italic">Legal Name (Union)</h6>
                                <p className="text-sm font-black underline decoration-blue-500">"Union of India"</p>
                            </div>
                            <div className="flex-1 p-4 bg-slate-900 text-white rounded-2xl text-center">
                                <h6 className="text-[10px] uppercase font-black text-slate-400 italic">Legal Name (State)</h6>
                                <p className="text-sm font-black underline decoration-red-500">"State of [Name]"</p>
                            </div>
                        </div>
                    </div>
                </LegalCard>
            </div>

            {/* FOOTER: THE ACT OF STATE DEFENSE */}
            <div className="mt-8 p-10 bg-slate-900 text-white border-4 border-red-600 rounded-[3rem] relative overflow-hidden shadow-2xl group flex flex-col md:flex-row items-center gap-8 italic">
                <ShieldAlert className="text-red-600 shrink-0 group-hover:scale-110 transition-transform" size={64} />
                <div className="relative z-10 space-y-2">
                    <h4 className="text-2xl font-black italic underline decoration-red-600 decoration-4 underline-offset-8 uppercase">The "Act of State" Defense</h4>
                    <p className="text-sm font-bold opacity-80 leading-relaxed">
                        An act done by the sovereign against an <span className="text-red-400 underline">Alien (Foreigner)</span> is not justiciable in courts.
                        <br />
                        <span className="text-red-400 uppercase text-xs font-black">WARNING:</span> This defense is <span className="text-red-400 underline decoration-wavy">NOT available</span> against Citizens. [PYQ]
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#171717] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#171717] hover:bg-red-950 text-white shadow-[0_10px_40px_-10px_rgba(23,23,23,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            LEGAL ARCHITECT GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Gavel size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 76 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Property • Contracts • Torts.</p>
            </div>
        </ScrapbookContainer>
    );
}
