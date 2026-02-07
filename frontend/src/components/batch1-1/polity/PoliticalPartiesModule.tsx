"use client";

import React from "react";
import {
    Flag, ShieldCheck, Heart,
    Sprout, Handshake, Globe,
    BadgeCheck, Landmark, Info,
    History, Ban, Scale,
    CheckCircle2, BookOpen, UserCheck,
    SearchCheck, Sparkles, Zap,
    ArrowRight, MessageSquare,
    Coins, TrendingUp, Target,
    FileText, LayoutGrid, Award,
    Palmtree, Mountain, Umbrella,
    Layers, Compass, Vote,
    Fingerprint, Percent, Trophy,
    ShieldAlert, Hammer, Split,
    Megaphone
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PoliticalPartiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100 selection:text-orange-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#f97316] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 10 10 L 990 10 L 990 990 L 10 990 Z" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="15 12" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#f97316] opacity-30"></div>
            {children}
        </div>
    </div>
);

const PartyCard = ({ title, children, color = "border-[#f97316]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(249,115,22,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Flag size={64} className={color.replace('border-', 'text-')} />
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
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-6 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function PoliticalPartiesModule({ onComplete, isCompleted }: PoliticalPartiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#f97316] border-4 border-[#ea580c] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(249,115,22,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ea580c] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 79</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm italic">The Flag & The Symbol</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Political <br /> <span className="text-orange-950 italic underline decoration-white">Parties</span> <br />
                        <span className="text-white drop-shadow-md italic text-3xl md:text-5xl">Engines of Democracy</span>
                    </h1>
                    <p className="text-xl text-orange-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Decoding India's party system. From multi-party coalitions to the mathematical criteria for national recognition."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Flag size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: INDIAN PARTY SYSTEM */}
            <PhaseHeader number="1" title="Phase 1: Indian Party System (The Features)" color="bg-orange-700" />

            <div className="relative group p-10 bg-orange-50 border-4 border-orange-700 border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-20 transition-opacity"><Fingerprint size={180} className="text-orange-700" /></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 italic">
                    <h4 className="text-2xl font-black text-orange-700 italic text-center uppercase mb-6 underline decoration-orange-700 underline-offset-8">Unique Characteristics</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Multi-Party System", text: "Largest number of parties in the world. (Coalition era)." },
                            { title: "Personaly Cult", text: "Parties organized around a single leader (High Command culture)." },
                            { title: "One-Party Dominance", text: "Historically Congress (1947-67), now BJP (2014-Present)." },
                            { title: "Lack of Ideology", text: "Most parties are pragmatic, not purely ideological (except cadres)." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 bg-white border-2 border-orange-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                                <h5 className="font-black text-orange-700 mb-1 uppercase text-sm">{item.title}</h5>
                                <p className="text-[10px] font-bold text-slate-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PHASE 2: RECOGNITION CRITERIA */}
            <PhaseHeader number="2" title="Phase 2: Recognition Criteria (The Math) [PYQ]" color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-1 gap-8 italic font-bold">
                <PartyCard title="How to become a National Party?" color="border-red-700">
                    <div className="space-y-4 pt-4">
                        <p className="text-xs text-slate-600">A party must fulfill <span className="text-red-700 underline decoration-wavy">ANY ONE</span> of the following paths:</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-red-50 border-t-4 border-red-700 rounded-xl relative overflow-hidden group">
                                <Percent className="absolute -bottom-2 -right-2 opacity-10 text-red-700" size={48} />
                                <h6 className="text-[10px] uppercase font-black text-red-800 mb-2">Path 1 (Performance)</h6>
                                <p className="text-[10px]"><span className="text-red-700">6% Valid Votes</span> in 4+ States <span className="text-blue-700">+ 4 Seats</span> in Lok Sabha.</p>
                            </div>
                            <div className="p-4 bg-blue-50 border-t-4 border-blue-700 rounded-xl relative overflow-hidden group">
                                <Vote className="absolute -bottom-2 -right-2 opacity-10 text-blue-700" size={48} />
                                <h6 className="text-[10px] uppercase font-black text-blue-800 mb-2">Path 2 (Seats)</h6>
                                <p className="text-[10px]"><span className="text-blue-700 text-lg">2% Seats</span> in Lok Sabha (11 seats) from <span className="underline">3 different States</span>.</p>
                            </div>
                            <div className="p-4 bg-amber-50 border-t-4 border-amber-600 rounded-xl relative overflow-hidden group">
                                <BadgeCheck className="absolute -bottom-2 -right-2 opacity-10 text-amber-600" size={48} />
                                <h6 className="text-[10px] uppercase font-black text-amber-800 mb-2">Path 3 (State Status)</h6>
                                <p className="text-[10px]">Recognized as a <span className="text-amber-700 underline">State Party</span> in <span className="text-lg">4 States</span>. [Indra Sawhney Era Rule]</p>
                            </div>
                        </div>
                    </div>
                </PartyCard>

                <div className="p-8 bg-slate-100 border-4 border-slate-900 rounded-[3rem] shadow-xl relative overflow-hidden group font-black">
                    <Target className="absolute top-2 right-2 text-slate-900 opacity-10" size={80} />
                    <h4 className="text-xl italic text-slate-900 mb-6 uppercase underline decoration-red-600">How to become a State Party? (ANY ONE)</h4>
                    <ul className="grid md:grid-cols-2 gap-4 text-xs italic">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full"></div> 6% Votes + 2 Seats (Assembly)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full"></div> 6% Votes + 1 Seat (Lok Sabha)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full"></div> 3% Seats in Assembly OR 3 Seats (whichever is more)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> [NEW 2011] 8% of Valid Votes in the State</li>
                    </ul>
                </div>
            </div>

            {/* PHASE 3: CURRENT STATUS */}
            <PhaseHeader number="3" title="Phase 3: Current Status (The 2024 List)" color="bg-[#ca8a04]" />

            <div className="grid md:grid-cols-1 gap-8 italic">
                <div className="p-10 bg-[#ca8a04] text-white rounded-[4rem] shadow-2xl relative overflow-hidden group flex flex-col items-center">
                    <Trophy className="absolute top-4 right-4 opacity-20 text-white" size={64} />
                    <h4 className="text-3xl font-black mb-8 uppercase tracking-tighter">The 6 National Parties</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['BJP', 'INC', 'BSP', 'CPI(M)', 'NPP (NE First)', 'AAP (New Entry)'].map(party => (
                            <Badge key={party} className="bg-white text-[#ca8a04] text-xl px-6 py-2 border-2 border-white shadow-lg hover:rotate-2 transition-transform">
                                {party}
                            </Badge>
                        ))}
                    </div>
                    <p className="mt-8 text-xs font-bold opacity-70 uppercase tracking-widest animate-pulse">Updated with latest EC notifications (2024)</p>
                </div>

                <div className="p-6 bg-red-50 border-2 border-dashed border-red-700 rounded-3xl flex items-center justify-between text-red-700 font-black">
                    <div className="flex items-center gap-4 text-xs">
                        <Megaphone className="rotate-[-20deg]" />
                        <span><span className="underline">DEMOTED IN 2023:</span> TMC, NCP, and CPI lost National Party status.</span>
                    </div>
                    <Ban size={32} opacity={0.2} />
                </div>
            </div>

            {/* FOOTER: SYMBOLS ORDER (1968) */}
            <div className="mt-8 p-10 bg-slate-900 border-4 border-orange-500 rounded-[3rem] text-white relative overflow-hidden group shadow-inner italic">
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div className="space-y-4">
                        <h4 className="text-xl font-black underline decoration-orange-500">Symbols & Splits</h4>
                        <p className="text-xs font-bold opacity-80 leading-relaxed italic">
                            <span className="text-orange-500 font-black">Reserved Symbol:</span> Exclusive to Recognized Parties. <br />
                            <span className="text-slate-400 font-black">Free Symbol:</span> For Unrecognized/Independent parties.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10">
                        <Split className="text-blue-400" />
                        <p className="text-[10px] font-black leading-tight">
                            In case of a split, the <span className="text-blue-400 underline decoration-wavy">Election Commission</span> decides who gets the symbol. (Sadiq Ali case principles)
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#f97316] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#f97316] hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            POLITICAL MASTER GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Flag size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 79 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Recognition • Symbols • 6% Solution.</p>
            </div>
        </ScrapbookContainer>
    );
}
