"use client";

import React from "react";
import {
    Scale, Crown, UserCheck,
    Globe, Heart, Sprout,
    Handshake, Info, History,
    Ban, ShieldAlert, BadgeCheck,
    CheckCircle2, BookOpen, SearchCheck,
    Sparkles, Zap, ArrowRight,
    MessageSquare, Coins, TrendingUp,
    Target, FileText, LayoutGrid,
    Users, Fingerprint, Layers,
    Clock, ThumbsUp, AlertTriangle,
    Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RegionalPartiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fefce8] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-yellow-100 selection:text-yellow-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#eab308] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 12 12 L 988 12 L 988 988 L 12 988 Z" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="18 14" />
            </svg>
            <div className="absolute top-0 right-0 w-full h-2 bg-[#eab308] opacity-30"></div>
            {children}
        </div>
    </div>
);

const BalanceCard = ({ title, children, color = "border-[#eab308]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <Scale size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-4deg] border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function RegionalPartiesModule({ onComplete, isCompleted, chapterNumber = "80" }: RegionalPartiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#ca8a04] border-4 border-[#854d0e] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(202,138,4,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#854d0e] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-yellow-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">The Kingmaker's Balance</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Role of <br /> <span className="text-[#451a03] drop-shadow-md underline decoration-wavy decoration-white italic">Regional</span> <br />
                        <span className="text-white drop-shadow-md italic text-3xl md:text-5xl">Parties</span>
                    </h1>
                    <p className="text-xl text-yellow-50 max-w-2xl leading-relaxed italic opacity-90">
                        "Small weights balancing the large. How local aspirations shifted Indian politics from a one-party dominance to a federal coalition era."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Scale size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: CLASSIFICATION */}
            <PhaseHeader number="1" title="Phase 1: Classification (Who are they?)" color="bg-[#ca8a04]" />

            <div className="grid md:grid-cols-2 gap-8 italic font-bold">
                <BalanceCard title="Features of Regional Power" color="border-[#ca8a04]">
                    <div className="p-5 bg-yellow-50 border-x-4 border-[#ca8a04] rounded-3xl relative overflow-hidden group">
                        <Fingerprint className="absolute top-0 right-0 p-2 opacity-10 text-[#ca8a04]" size={40} />
                        <h4 className="font-black text-[#ca8a04] uppercase text-xs mb-4 underline decoration-yellow-400 decoration-2 underline-offset-4">The Identity Profile</h4>
                        <ul className="space-y-3 text-[10px] uppercase text-muted-foreground">
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-[#ca8a04]" /> Region Specific base (State-limited).</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-[#ca8a04]" /> Focus on local culture, language, or caste.</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-[#ca8a04]" /> Resistance against "National Homogenization".</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-red-600 font-black" /> Fluctuating/Opportunistic stands.</li>
                        </ul>
                    </div>
                </BalanceCard>

                <div className="relative p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl overflow-hidden group border-t-8 border-[#ca8a04]">
                    <Layers className="absolute top-2 right-2 text-[#ca8a04] opacity-20" size={80} />
                    <h4 className="text-xl italic text-white mb-6 uppercase underline decoration-yellow-500">The 4 Types [PYQ]</h4>
                    <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase">
                        <div className="p-3 bg-card/5 rounded-xl border border-white/10">
                            <h6 className="text-[#ca8a04] mb-1 italic">Cultural/Ethnic</h6>
                            <p className="opacity-70">DMK, Shiv Sena, NC.</p>
                        </div>
                        <div className="p-3 bg-card/5 rounded-xl border border-white/10">
                            <h6 className="text-[#ca8a04] mb-1 italic">Statehood Demand</h6>
                            <p className="opacity-70">TRS/BRS, JMM.</p>
                        </div>
                        <div className="p-3 bg-card/5 rounded-xl border border-white/10">
                            <h6 className="text-[#ca8a04] mb-1 italic">National Split</h6>
                            <p className="opacity-70">TMC, YSRCP, SP.</p>
                        </div>
                        <div className="p-3 bg-card/5 rounded-xl border border-white/10">
                            <h6 className="text-[#ca8a04] mb-1 italic">Leader Centric</h6>
                            <p className="opacity-70">LJP, Jana Sena.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE RISE */}
            <PhaseHeader number="2" title="Phase 2: The Rise (Why did they grow?)" color="bg-blue-800" />

            <div className="relative group p-10 bg-blue-50 border-4 border-blue-800 border-dashed rounded-[3rem] shadow-xl overflow-hidden italic">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-[-10deg] transition-transform"><TrendingUp size={180} className="text-blue-800" /></div>
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-6">
                            <div className="p-6 bg-card border-2 border-blue-800 rounded-3xl shadow-sm">
                                <h5 className="font-black text-blue-900 mb-2 uppercase flex items-center gap-2"><Clock size={20} /> 1967: The First Blow</h5>
                                <p className="text-sm font-bold text-muted-foreground leading-relaxed italic">
                                    The first major end to Congress dominance; regional parties formed govts in <span className="text-blue-700 underline">8 States</span>.
                                </p>
                            </div>
                            <div className="p-6 bg-card border-2 border-blue-800 rounded-3xl shadow-sm">
                                <h5 className="font-black text-blue-900 mb-2 uppercase flex items-center gap-2"><Handshake size={20} /> 1990s: Era of Kingmakers</h5>
                                <p className="text-sm font-bold text-muted-foreground leading-relaxed italic">
                                    The "Era of Coalitions" (1989-2014). Regional parties became essential for any National Party to form a majority.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-64 p-8 bg-blue-900 text-white rounded-[2rem] text-center shadow-xl rotate-1 border-t-8 border-yellow-400">
                            <h6 className="text-[10px] font-black uppercase mb-4 tracking-widest">Main Reasons</h6>
                            <ul className="text-[10px] font-extrabold space-y-4 uppercase opacity-80 decoration-wavy">
                                <li className="underline underline-offset-4">Cultural Diversity</li>
                                <li className="underline underline-offset-4">Failure of National Apps</li>
                                <li className="underline underline-offset-4 text-yellow-400 italic font-black">Centralizing Tendencies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: IMPACT ON DEMOCRACY */}
            <PhaseHeader number="3" title="Phase 3: Impact (Good or Bad?)" color="bg-red-800" />

            <div className="grid md:grid-cols-2 gap-8 italic">
                <div className="p-8 bg-emerald-50 border-4 border-emerald-600 rounded-[3rem] shadow-xl group">
                    <ThumbsUp className="text-emerald-700 mb-4 group-hover:bounce transition-all" size={48} />
                    <h4 className="text-xl font-black text-emerald-900 mb-4 uppercase underline decoration-emerald-400">The Positive Side</h4>
                    <ul className="space-y-4 text-xs font-bold leading-relaxed opacity-85">
                        <li className="flex items-center gap-2">🎯 <span className="underline decoration-wavy">Checked Monopoly:</span> Prevented authoritarian one-party dominance.</li>
                        <li className="flex items-center gap-2">🎯 <span className="underline decoration-wavy">Federalism:</span> Forced sensitive treatment of State needs.</li>
                        <li className="flex items-center gap-2">🎯 <span className="underline decoration-wavy">Grassroots:</span> Awareness among backward classes/minorities.</li>
                    </ul>
                </div>

                <div className="p-8 bg-red-50 border-4 border-red-600 rounded-[3rem] shadow-xl group">
                    <AlertTriangle className="text-red-700 mb-4 group-hover:shake transition-all" size={48} />
                    <h4 className="text-xl font-black text-red-900 mb-4 uppercase underline decoration-red-400">The Negative Side</h4>
                    <ul className="space-y-4 text-xs font-bold leading-relaxed opacity-85">
                        <li className="flex items-center gap-2">⚠️ <span className="underline decoration-wavy">Instability:</span> Frequent collapse of coaliton govts (1996-98).</li>
                        <li className="flex items-center gap-2">⚠️ <span className="underline decoration-wavy">Narrow Focus:</span> Sacrificing National interest for regional demands.</li>
                        <li className="flex items-center gap-2">⚠️ <span className="underline decoration-wavy">Dynastic:</span> Run like family fiefdoms without internal democracy.</li>
                    </ul>
                </div>
            </div>

            {/* FOOTER: CURRENT TREND (2014-2024) */}
            <div className="mt-8 p-10 bg-[#1e40af] border-4 border-yellow-400 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl flex flex-col items-center text-center italic">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-125 transition-transform"><Scale size={120} /></div>
                <h4 className="text-2xl font-black uppercase mb-4 underline decoration-yellow-400 underline-offset-8">Current Trend (2014-2024)</h4>
                <p className="text-sm font-bold opacity-80 leading-relaxed max-w-3xl">
                    "Since 2014 (BJP Majority), the 'blackmail power' has reduced, but regional parties remain the <span className="text-yellow-400 underline decoration-wavy">Primary Opposition</span> in many states like West Bengal, Tamil Nadu, and Odisha."
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#eab308] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#ca8a04] hover:bg-yellow-900 text-white shadow-[0_10px_40px_-10px_rgba(202,138,4,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            KINGMAKER MASTER GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Handshake size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center uppercase">Local Aspirations • Multi-Party Era • Federalism.</p>
            </div>
        </ScrapbookContainer>
    );
}
