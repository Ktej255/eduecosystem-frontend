"use client";

import React, { useState } from "react";
import {
    User, Anchor, Ship, Navigation,
    MoreHorizontal, Briefcase, Mic2,
    Vote, ArrowRightLeft, Users,
    Building2, BadgeCheck, FileCheck
} from "lucide-react";

interface ChiefMinisterModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The State Captain (Keystone) ---

const CaptainContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#ecfdf5] text-foreground">
        {/* Nautical/Wheel Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const CaptainCard = ({ children, title, icon: Icon, color = "green", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "green" | "blue" | "orange", className?: string }) => {
    const styles = {
        green: "bg-emerald-50 border-emerald-200 text-emerald-900 shadow-emerald-900/10",
        blue: "bg-blue-50 border-blue-200 text-blue-900 shadow-blue-900/10",
        orange: "bg-orange-50 border-orange-200 text-orange-900 shadow-orange-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative ${styles[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function ChiefMinisterModule({ onComplete, isCompleted, chapterNumber = "31" }: ChiefMinisterModuleProps) {
    return (
        <CaptainContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-emerald-800/20">
                        <Ship size={140} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-emerald-600 p-4 rounded-full shadow-lg border-4 border-white mb-4 animate-spin-slow">
                            <Navigation size={48} className="text-white" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-emerald-900 font-serif mb-2">
                            CHIEF MINISTER
                        </h1>
                        <div className="bg-emerald-900/10 text-emerald-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-900/20 mb-4">
                            Chapter {chapterNumber} &bull; "The State Captain"
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT & OATH */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-emerald-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-emerald-700">Phase 1: The Selection</h2>
                    <div className="h-px bg-emerald-400 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* APPOINTMENT FLOWCHART */}
                    <CaptainCard title="Appointment (Art 164)" icon={Users} color="green">
                        <div className="space-y-4 text-sm font-sans">
                            <div className="bg-card p-3 rounded border border-emerald-100 shadow-sm">
                                <strong>General Rule:</strong> Governor appoints leader of Majority Party.
                            </div>

                            <div className="flex justify-center">↓</div>

                            <div className="bg-orange-50 p-3 rounded border border-orange-200 shadow-sm relative">
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white p-1 rounded-full"><Briefcase size={12} /></div>
                                <strong>Hung Assembly?</strong>
                                <p className="text-xs mt-1 text-orange-800">Governor's Discretion: Appoint leader of largest coalition.</p>
                                <div className="mt-2 text-xs font-bold bg-card p-1 rounded inline-block">
                                    Condition: Prove majority in 1 Month.
                                </div>
                            </div>

                            <div className="flex justify-center">↓</div>

                            <div className="bg-blue-50 p-3 rounded border border-blue-200 shadow-sm">
                                <strong>Non-Member Rule:</strong>
                                <p className="text-xs mt-1 text-blue-800">Can be CM without being MLA/MLC for 6 Months.</p>
                            </div>
                        </div>
                    </CaptainCard>

                    {/* OATH LETTERHEAD */}
                    <CaptainCard title="Oath & Term" icon={FileCheck} color="blue">
                        <div className="space-y-4 font-serif text-muted-foreground">
                            <div className="border-b-2 border-border pb-2 mb-2 flex justify-between items-center text-xs uppercase tracking-widest">
                                <span>Official State Letterhead</span>
                                <BadgeCheck className="text-blue-600" />
                            </div>
                            <p>
                                <strong>Administered By:</strong> Governor.
                            </p>
                            <p>
                                <strong>Content:</strong> Secrecy + Allegiance.
                            </p>
                            <div className="bg-card p-3 rounded border border-blue-100 shadow-inner">
                                <strong>Term:</strong> NOT Fixed.
                                <br />
                                <span className="text-sm italic">"Pleasure of Governor"</span>
                                <div className="mt-2 text-xs bg-muted p-1 rounded text-muted-foreground">
                                    *Cannot dismiss as long as he has majority.
                                </div>
                            </div>
                        </div>
                    </CaptainCard>
                </div>
            </div>

            {/* PHASE 2: POWERS & FUNCTIONS (THE HUB) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-emerald-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-emerald-800">Phase 2: The Captain's Hub</h2>
                    <div className="h-px bg-emerald-600 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* CAPTAIN'S WHEEL (RELATION TO COUNCIL) */}
                    <div className="relative flex justify-center py-8">
                        {/* The Wheel */}
                        <div className="relative w-64 h-64 border-8 border-emerald-800 rounded-full flex items-center justify-center bg-emerald-900 text-white shadow-2xl">
                            <div className="absolute inset-0 border-4 border-dashed border-emerald-600 rounded-full animate-spin-slow opacity-50"></div>
                            <div className="text-center z-10">
                                <strong className="block text-2xl font-serif">CM</strong>
                                <span className="text-xs uppercase tracking-widest">Keystone</span>
                            </div>

                            {/* Spokes/Planets */}
                            <div className="absolute -top-4 bg-emerald-100 text-emerald-900 px-2 py-1 rounded text-xs font-bold border border-emerald-600 w-32 text-center">Allocates Portfolios</div>
                            <div className="absolute -bottom-4 bg-emerald-100 text-emerald-900 px-2 py-1 rounded text-xs font-bold border border-emerald-600 w-32 text-center">Presides Meetings</div>
                            <div className="absolute -left-12 bg-emerald-100 text-emerald-900 px-2 py-1 rounded text-xs font-bold border border-emerald-600 w-24 text-center">Recommends Ministers</div>
                            <div className="absolute -right-12 bg-red-100 text-red-900 px-2 py-1 rounded text-xs font-bold border border-red-600 w-24 text-center">Collapse if Resigns</div>
                        </div>
                    </div>

                    {/* BRIDGE (RELATION TO GOV) */}
                    <CaptainCard title="The Bridge (Art 167)" icon={Anchor} color="orange">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex justify-between w-full font-bold text-sm">
                                <span className="bg-emerald-200 px-2 py-1 rounded">Council</span>
                                <span className="bg-orange-200 px-2 py-1 rounded">Governor</span>
                            </div>

                            {/* Bridge Graphic */}
                            <div className="w-full h-4 bg-slate-300 rounded-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-muted-foreground w-1/2"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border-2 border-slate-600 rounded-full p-1">
                                    <User size={16} />
                                </div>
                            </div>

                            <ul className="text-sm space-y-2 w-full">
                                <li className="flex gap-2">
                                    <ArrowRightLeft size={16} className="text-orange-600" />
                                    <span>Communicate all decisions.</span>
                                </li>
                                <li className="flex gap-2">
                                    <ArrowRightLeft size={16} className="text-orange-600" />
                                    <span>Furnish info called by Gov.</span>
                                </li>
                            </ul>
                        </div>
                    </CaptainCard>
                </div>
            </div>

            {/* PHASE 3: ROLE & BODIES */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-blue-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-blue-800">Phase 3: Extra Hats</h2>
                    <div className="h-px bg-blue-600 flex-1"></div>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-muted-foreground">
                                <Building2 /> Member of Bodies
                            </h3>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center bg-muted p-2 rounded">
                                    <span>Inter-State Council</span>
                                    <span className="text-xs bg-slate-200 px-2 rounded">Member</span>
                                </div>
                                <div className="flex justify-between items-center bg-muted p-2 rounded">
                                    <span>National Dev. Council</span>
                                    <span className="text-xs bg-slate-200 px-2 rounded">Member</span>
                                </div>
                                <div className="flex justify-between items-center bg-blue-50 p-2 rounded border border-blue-200">
                                    <span className="font-bold text-blue-800">Zonal Council</span>
                                    <span className="text-xs bg-blue-200 px-2 rounded text-blue-900 font-bold">Vice-Chairman*</span>
                                </div>
                                <div className="text-right text-xs text-muted-foreground italic">*By rotation (1 Year)</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-muted-foreground">
                                <Users /> CM vs PM Mirror
                            </h3>
                            <div className="flex items-center gap-4 bg-muted p-4 rounded-lg border border-border justify-center">
                                <div className="text-center">
                                    <User size={32} className="mx-auto text-blue-600" />
                                    <strong className="block">PM</strong>
                                    <span className="text-xs">Centre</span>
                                </div>
                                <ArrowRightLeft size={24} className="text-muted-foreground" />
                                <div className="text-center">
                                    <User size={32} className="mx-auto text-emerald-600" />
                                    <strong className="block">CM</strong>
                                    <span className="text-xs">State</span>
                                </div>
                            </div>
                            <p className="text-center text-sm mt-4 text-muted-foreground italic">
                                "Functions are identical, just scope differs."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: FLOOR TEST */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
                <div className="bg-slate-800 text-white p-6 rounded-lg shadow-[8px_8px_0px_#10b981] border-2 border-slate-700 relative">
                    <div className="absolute -top-5 -left-5 bg-emerald-500 rounded-full p-3 shadow-lg text-white font-bold">
                        <Vote size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2 text-emerald-400">The S.R. Bommai Rule (1994)</h3>
                    <p className="font-mono text-sm mb-4">
                        "Majority must be tested on the <span className="bg-card/20 px-1 rounded">Floor of the House</span>, not in Raj Bhavan."
                    </p>

                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                             w-full py-3 rounded font-black uppercase tracking-widest transition-all
                            ${isCompleted
                                ? 'bg-slate-700 text-muted-foreground cursor-not-allowed'
                                : 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95'
                            }
                        `}
                    >
                        {isCompleted ? `CHAPTER ${chapterNumber} COMPLETED` : `MARK CHAPTER ${chapterNumber} COMPLETE`}
                    </button>
                </div>
            </div>
        </CaptainContainer>
    );
}
