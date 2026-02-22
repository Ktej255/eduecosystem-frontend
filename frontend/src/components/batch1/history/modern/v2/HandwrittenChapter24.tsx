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
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-blue-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Black+Ops+One&display=swap');
                
                .parchment-texture {
                    background-color: #f0f4c3;
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
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="bg-white/60 backdrop-blur border-b-4 border-blue-900 pb-6 px-4">
                    <div className="flex justify-between items-end mb-2 text-blue-900/50 military-font text-4xl select-none">
                        <span>{t.headerYearStart}</span>
                        <span>{t.headerYearEnd}</span>
                    </div>
                    <h1 className="military-font text-5xl md:text-7xl font-bold uppercase tracking-tighter text-blue-900 mb-2">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-black hand-font">
                        <Badge className="bg-red-700 hover:bg-red-800">{t.inaTrialsBadge}</Badge>
                        <Badge className="bg-blue-700 hover:bg-blue-800">{t.rinMutinyBadge}</Badge>
                        <Badge className="bg-green-700 hover:bg-green-800">{t.cabinetMissionBadge}</Badge>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20 mt-8">

                {/* LEFT COLUMN: THE UPRISING */}
                <div className="space-y-10">

                    {/* INA TRIALS */}
                    <div className="bg-white p-6 shadow-xl border-t-8 border-red-700 relative text-gray-900">
                        <div className="absolute top-0 right-0 bg-red-700 text-white px-3 py-1 text-xs font-bold font-mono uppercase">{t.inaTrialsDate}</div>
                        <h2 className="marker-font text-2xl text-red-800 mb-4 flex items-center gap-2">
                            <Gavel className="w-6 h-6" /> {t.inaTrialsTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <p className="leading-relaxed">
                                {t.inaTrialsIntro}
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold bg-gray-100 p-3 rounded">
                                <div className="text-red-900">{t.premSehgal}</div>
                                <div className="text-green-900">{t.shahNawaz}</div>
                                <div className="text-blue-900">{t.gurbakshDhillon}</div>
                            </div>

                            <div className="bg-blue-50 p-3 border-l-4 border-blue-500 text-sm">
                                <strong>{t.defenseTeamTitle}</strong> {t.defenseTeamDesc}
                            </div>

                            <p className="scribble-font text-2xl text-center text-gray-500 mt-2">
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
                                <div className="bg-white/20 p-2 rounded text-center min-w-[60px]">
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
                    <div className="bg-green-50 p-6 border-2 border-green-800 border-dashed text-gray-900">
                        <h2 className="marker-font text-2xl text-green-900 mb-2 flex items-center gap-2">
                            <Vote className="w-6 h-6" /> {t.mandateTitle}
                        </h2>
                        <ul className="hand-font text-lg list-disc pl-5 space-y-2">
                            <li><strong>{t.congressMandate}</strong></li>
                            <li><strong>{t.leagueMandate}</strong></li>
                            <li><span className="font-bold bg-yellow-200 uppercase">{t.verdictLabel}</span> {t.verdictDesc}</li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE PLANS */}
                <div className="space-y-10">

                    {/* CABINET MISSION */}
                    <div className="bg-[#fff8e1] p-2 shadow-2xl skew-y-1">
                        <div className="border-4 border-black p-4 bg-white h-full text-gray-900">
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
