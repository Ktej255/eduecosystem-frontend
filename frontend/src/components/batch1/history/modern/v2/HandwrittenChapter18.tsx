"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Grid,
    Box,
    CheckCircle2,
    FileText,
    Scale,
    Users,
    DoorOpen,
    Briefcase,
    AlertTriangle,
    XCircle,
    Vote,
    Scroll
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch18Translations } from './translations/ch18';

export default function HandwrittenChapter18() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch18Translations.hi : ch18Translations.en;

    return (
        <div className="min-h-screen bg-[#0047AB] font-['Rajdhani',_sans-serif] text-white selection:bg-yellow-400 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Merriweather:wght@400;700&family=Special+Elite&display=swap');
                
                .blueprint-texture {
                    background-color: #0047AB;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }

                .technical-font { font-family: 'Rajdhani', sans-serif; }
                .serif-font { font-family: 'Merriweather', serif; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .blueprint-card {
                    background: rgba(0, 50, 150, 0.8);
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(4px);
                    box-shadow: 0 0 15px rgba(0,0,0,0.3);
                }

                .ballot-paper {
                    background: #FFD700;
                    color: #000;
                    font-family: 'Special Elite', monospace;
                    transform: rotate(-1deg);
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                }

                .emergency-alert {
                    background: #FF4500;
                    color: white;
                    border: 2px solid white;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 69, 0, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(255, 69, 0, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 69, 0, 0); }
                }
            `}</style>

            {/* BACKGROUND GRID */}
            <div className="fixed inset-0 blueprint-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-5xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8">
                <div className="border-4 border-white inline-block p-6 bg-[#0047AB] relative">
                    <div className="absolute top-0 left-0 w-full h-full border border-white m-1 pointer-events-none"></div>
                    <div className="flex justify-center items-center gap-4 mb-2 opacity-80">
                        <Scroll className="w-6 h-6" />
                        <span className="text-xl tracking-[0.2em] uppercase">{t.architectureTitle}</span>
                        <Grid className="w-6 h-6" />
                    </div>
                    <h1 className="technical-font text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center gap-4 text-sm font-bold bg-white text-[#0047AB] px-4 py-1 mt-2">
                        <span>{t.actOf1935}</span>
                        <span>•</span>
                        <span>{t.elections1937}</span>
                        <span>•</span>
                        <span>{t.ministries}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE ACT & THE ELECTION */}
                <div className="space-y-10">

                    {/* GOI ACT 1935 */}
                    <div className="blueprint-card p-6">
                        <h3 className="technical-font text-2xl font-bold mb-4 uppercase border-b border-white/30 pb-2 flex items-center gap-2">
                            <Briefcase className="w-6 h-6" /> {t.longestActTitle}
                        </h3>

                        <div className="space-y-4 text-sm">
                            <p className="opacity-80 italic">{t.nehruQuote}</p>
                            <p className="opacity-80 italic">{t.jinnahQuote}</p>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="border border-white/40 p-3 bg-white/5">
                                    <strong className="block text-yellow-400 mb-1">{t.federalPart}</strong>
                                    {t.federalDesc}
                                    <br /><span className="text-xs opacity-70">{t.federalNote}</span>
                                </div>
                                <div className="border border-white/40 p-3 bg-white/5">
                                    <strong className="block text-green-400 mb-1">{t.provincialPart}</strong>
                                    {t.provincialDesc}
                                </div>
                            </div>

                            <div className="bg-white/10 p-3 border-l-4 border-yellow-400 mt-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Scale className="w-4 h-4 text-yellow-400" />
                                    <strong className="uppercase">{t.federalCourtTitle}</strong>
                                </div>
                                <p className="text-xs">{t.federalCourtDesc}</p>
                                <p className="text-[10px] opacity-70">{t.federalCourtNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* THE ELECTION SWEEP (1937) */}
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 z-20">
                            <Vote className="w-12 h-12 text-yellow-400 drop-shadow-lg" />
                        </div>

                        <div className="ballot-paper p-6 text-black relative z-10 rotate-1">
                            <h3 className="typewriter-font text-2xl font-bold mb-3 uppercase border-b-2 border-dashed border-black pb-1">
                                {t.mandateTitle}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-2 border-2 border-black">
                                    <strong className="block text-xl">{t.congressTitle}</strong>
                                    <div className="text-3xl font-bold">{t.congressSeats}</div>
                                    <div className="text-xs uppercase">{t.congressWonDesc}</div>
                                    <div className="mt-2 text-[10px] leading-tight">
                                        {t.congressNote}
                                    </div>
                                </div>

                                <div className="text-center p-2 border-2 border-black opacity-70">
                                    <strong className="block text-xl">{t.leagueTitle}</strong>
                                    <div className="text-3xl font-bold">{t.leagueSeats}</div>
                                    <div className="text-xs uppercase">{t.leagueWonDesc}</div>
                                    <div className="mt-2 text-[10px] leading-tight bg-red-100 p-1">
                                        {t.leagueNote}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-xs border-t border-black pt-2">
                                <strong className="block mb-1">{t.massContactTitle}</strong>
                                <p>{t.massContactDesc}</p>
                            </div>
                        </div>
                    </div>

                    {/* OTHER PARTIES */}
                    <div className="blueprint-card p-4 text-xs flex justify-between items-center bg-white/5">
                        <div className="text-center w-1/2 border-r border-white/20 pr-2">
                            <strong className="block text-green-300">{t.punjab}</strong>
                            {t.unionistParty}
                        </div>
                        <div className="text-center w-1/2 pl-2">
                            <strong className="block text-green-300">{t.bengal}</strong>
                            {t.krishakPraja}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: MINISTRIES & CRISIS */}
                <div className="space-y-10">

                    {/* CONGRESS MINISTRIES */}
                    <div className="blueprint-card p-6 border-white">
                        <h3 className="serif-font text-2xl font-bold mb-4 text-yellow-400 uppercase">
                            {t.monthsOfRuleTitle}
                        </h3>

                        <div className="grid grid-cols-2 gap-2 text-xs mb-4 font-mono">
                            <div className="bg-white/10 p-2 rounded">
                                <span className="opacity-60 block">{t.madrasPremier}</span>
                                <strong className="text-white text-sm">C. Rajagopalachari</strong>
                            </div>
                            <div className="bg-white/10 p-2 rounded">
                                <span className="opacity-60 block">{t.bombayPremier}</span>
                                <strong className="text-white text-sm">B.G. Kher</strong>
                            </div>
                            <div className="bg-white/10 p-2 rounded">
                                <span className="opacity-60 block">{t.unitedProvinces}</span>
                                <strong className="text-white text-sm">G.B. Pant</strong>
                            </div>
                            <div className="bg-white/10 p-2 rounded">
                                <span className="opacity-60 block">{t.biharPremier}</span>
                                <strong className="text-white text-sm">Sri Krishna Sinha</strong>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-green-900/40 p-3 border-l-2 border-green-500">
                                <strong className="block text-green-400 text-sm mb-1">{t.reformsTitle}</strong>
                                <ul className="list-disc ml-4 text-xs opacity-90 space-y-1">
                                    <li>{t.civilLiberties}</li>
                                    <li>{t.agrarian}</li>
                                    <li>{t.labor}</li>
                                </ul>
                            </div>

                            <div className="bg-blue-900/40 p-3 border-l-2 border-blue-500">
                                <strong className="block text-blue-400 text-sm mb-1">{t.educationTitle}</strong>
                                <ul className="list-disc ml-4 text-xs opacity-90 space-y-1">
                                    <li>{t.wardhaScheme}</li>
                                    <li>{t.nationalPlanning}</li>
                                    <li>{t.vidyaMandir}</li>
                                </ul>
                            </div>

                            <div className="bg-red-900/40 p-3 border-l-2 border-red-500">
                                <strong className="block text-red-400 text-sm mb-1">{t.leagueAttackTitle}</strong>
                                <p className="text-xs">{t.pirpurReport}</p>
                            </div>
                        </div>
                    </div>

                    {/* TRIPURI CRISIS */}
                    <div className="blueprint-card p-6 bg-orange-900/20 border-orange-500/50">
                        <h3 className="technical-font text-xl font-bold mb-3 text-orange-400 uppercase flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> {t.tripuriCrisisTitle}
                        </h3>

                        <div className="flex items-center justify-between text-xs mb-3 text-center">
                            <div>
                                <strong className="block text-white text-lg">{t.bose}</strong>
                                <span className="text-orange-400">{t.boseVotes}</span>
                            </div>
                            <div className="text-2xl font-bold text-white/20">{t.vs}</div>
                            <div>
                                <strong className="block text-gray-400">{t.pattabhi}</strong>
                                <span className="text-gray-500">{t.pattabhiVotes}</span>
                            </div>
                        </div>

                        <p className="text-xs italic text-center opacity-80 mb-3 border-b border-white/10 pb-2">
                            {t.gandhiQuotePattabhi}
                        </p>

                        <div className="text-xs bg-black/30 p-2 rounded border border-orange-500/30">
                            <strong>{t.outcomeTitle}</strong> {t.outcomeDesc}
                        </div>
                    </div>

                    {/* RESIGNATION */}
                    <div className="emergency-alert p-6 text-center transform rotate-1 shadow-2xl">
                        <h3 className="font-bold text-2xl mb-1 uppercase">{t.resignationTitle}</h3>
                        <p className="text-sm font-mono mb-4">{t.resignationDate}</p>

                        <div className="text-left text-xs space-y-2 bg-black/20 p-3 rounded">
                            <p><strong>{t.resignationCause}</strong></p>
                            <p><strong>{t.resignationOffer}</strong></p>
                            <p><strong>{t.resignationGandhi}</strong></p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-white/50 font-bold text-yellow-300 animate-pulse">
                            {t.deliveranceDay}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
