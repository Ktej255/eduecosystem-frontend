"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Anchor,
    Users,
    Vote,
    Gavel,
    Scroll,
    Flame,
    Sword
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch24Translations } from './translations/ch24';

export default function HandwrittenChapter24() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch24Translations.hi : ch24Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-indigo/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Black+Ops+One&display=swap');
                
                .parchment-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .military-font { font-family: 'Black Ops One', cursive; }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10 text-inherit">
                <div className="bg-paper/60 backdrop-blur border-b-4 border-paper-indigo pb-6 px-4 text-inherit">
                    <div className="flex justify-between items-end mb-2 text-paper-indigo/50 military-font text-4xl select-none text-inherit">
                        <span>{t.headerYearStart}</span>
                        <span>{t.headerYearEnd}</span>
                    </div>
                    <h1 className="military-font text-5xl md:text-7xl font-bold uppercase tracking-tighter text-paper-indigo mb-2">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-paper-gray hand-font">
                        <Badge className="bg-paper-red text-white hover:bg-paper-red/80 border-none">{t.inaTrialsBadge}</Badge>
                        <Badge className="bg-paper-indigo text-white hover:bg-paper-indigo/80 border-none">{t.rinMutinyBadge}</Badge>
                        <Badge className="bg-paper-green text-white hover:bg-paper-green/80 border-none">{t.cabinetMissionBadge}</Badge>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20 mt-8">

                {/* LEFT COLUMN: THE UPRISING */}
                <div className="space-y-10">

                    {/* INA TRIALS */}
                    <div className="bg-paper p-6 shadow-xl border-t-8 border-paper-red relative text-inherit">
                        <div className="absolute top-0 right-0 bg-paper-red text-white px-3 py-1 text-xs font-bold font-mono uppercase border-none">{t.inaTrialsDate}</div>
                        <h2 className="marker-font text-2xl text-paper-red mb-4 flex items-center gap-2 text-inherit">
                            <Gavel className="w-6 h-6 opacity-40" /> {t.inaTrialsTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4 text-inherit">
                            <p className="leading-relaxed opacity-80 text-inherit">
                                {t.inaTrialsIntro}
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold bg-paper-border/10 p-3 rounded text-inherit">
                                <div className="text-paper-red">{t.premSehgal}</div>
                                <div className="text-paper-green">{t.shahNawaz}</div>
                                <div className="text-paper-indigo">{t.gurbakshDhillon}</div>
                            </div>

                            <div className="bg-paper-indigo/10 p-3 border-l-4 border-paper-indigo text-sm text-inherit">
                                <strong className="text-paper-indigo">{t.defenseTeamTitle}</strong> <span className="opacity-80">{t.defenseTeamDesc}</span>
                            </div>

                            <p className="scribble-font text-2xl text-center text-paper-gray/40 mt-2">
                                {t.aawazQuote}
                            </p>
                        </div>
                    </div>

                    {/* RIN MUTINY */}
                    <div className="bg-blue-900 text-white p-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="military-font text-3xl text-blue-200 mb-4 flex items-center gap-2 z-10 relative">
                            <Anchor className="w-8 h-8" /> {t.navalMutinyTitle}
                        </h2>

                        <div className="relative z-10 hand-font space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-card/20 p-2 rounded text-center min-w-[60px]">
                                    <div className="text-2xl font-bold">18</div>
                                    <div className="text-xs uppercase">Feb</div>
                                </div>
                                <div>
                                    <strong className="text-xl text-yellow-400">{t.hmisTalwar}</strong>
                                    <p className="text-sm text-blue-100">{t.talwarDesc}</p>
                                </div>
                            </div>

                            <div className="bg-red-600/20 p-3 border border-red-500/50 rounded">
                                <p className="text-sm text-white">
                                    <strong>{t.flagUnityTitle}</strong> {t.flagUnityDesc}
                                </p>
                            </div>

                            <div className="text-xs opacity-75 italic text-right">
                                {t.lastNailQuote}
                            </div>
                        </div>
                    </div>

                    {/* ELECTIONS 1946 */}
                    <div className="bg-paper-green/10 p-6 border-2 border-paper-green/20 border-dashed text-inherit">
                        <h2 className="marker-font text-2xl text-paper-green mb-2 flex items-center gap-2 text-inherit">
                            <Vote className="w-6 h-6 opacity-40" /> {t.mandateTitle}
                        </h2>
                        <ul className="hand-font text-lg list-disc pl-5 space-y-2 text-inherit opacity-80">
                            <li><strong className="text-inherit">{t.congressMandate}</strong></li>
                            <li><strong className="text-inherit">{t.leagueMandate}</strong></li>
                            <li><span className="font-bold bg-paper-orange/20 px-2 text-paper-orange">{t.verdictLabel}</span> <span className="text-inherit">{t.verdictDesc}</span></li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE PLANS */}
                <div className="space-y-10">

                    {/* CABINET MISSION */}
                    <div className="bg-[#fff8e1] p-2 shadow-2xl skew-y-1">
                        <div className="border-4 border-black p-4 bg-card h-full text-gray-900">
                            <h2 className="marker-font text-3xl text-center mb-6 uppercase border-b-2 border-black pb-2">{t.cabinetMissionTitle}</h2>

                            <div className="hand-font space-y-5">
                                <div className="flex justify-center gap-2 text-xs font-mono bg-gray-100 py-2">
                                    <span>{t.pethickLawrence}</span> | <span>{t.staffordCripps}</span> | <span>{t.avAlexander}</span>
                                </div>

                                <div className="bg-red-50 p-3 text-center border border-red-200">
                                    <strong className="text-red-900 block text-lg uppercase tracking-tight">{t.pakistanRejectedTitle}</strong>
                                    <span className="text-xs">{t.pakistanRejectedReason}</span>
                                </div>

                                <div className="space-y-2">
                                    <strong className="block text-xl uppercase tracking-tighter">{t.thePlanTitle}</strong>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li><strong>{t.weakCenter}</strong></li>
                                        <li><strong>{t.groupingTitle}</strong>
                                            <ul className="list-[circle] pl-4 text-gray-600">
                                                <li>{t.groupA}</li>
                                                <li>{t.groupB}</li>
                                                <li>{t.groupC}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-100 p-2 text-sm italic">
                                    <strong>{t.failureTitle}</strong> {t.failureReason}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DIRECT ACTION DAY */}
                    <div className="relative group p-6 bg-black text-gray-300 border-l-8 border-red-600">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-20"></div>
                        <h2 className="marker-font text-2xl text-white mb-2 z-10 relative uppercase">
                            {t.directActionTitle}
                        </h2>
                        <div className="badge absolute top-4 right-4 bg-red-600 text-white font-bold px-2 py-1 z-10 uppercase text-xs">{t.directActionDate}</div>

                        <div className="hand-font text-lg z-10 relative space-y-3">
                            <p>{t.pakistanQuote}</p>
                            <p className="text-white font-bold text-xl uppercase tracking-tighter">{t.calcuttaKillingsTitle}</p>
                            <p className="text-sm text-gray-400">{t.calcuttaKillingsDesc}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
