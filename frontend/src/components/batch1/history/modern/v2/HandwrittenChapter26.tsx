"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Gavel,
    Scroll,
    Landmark,
    Shield,
    Coins,
    BookOpen,
    Scale
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch26Translations } from './translations/ch26';

export default function HandwrittenChapter26() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch26Translations.hi : ch26Translations.en;

    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-purple-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Special+Elite&family=Cutive+Mono&display=swap');
                
                .parchment-texture {
                    background-color: #f3e5f5;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .mono-font { font-family: 'Cutive Mono', monospace; }
                .type-font { font-family: 'Special Elite', monospace; }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-16 pb-12 text-center relative z-10">
                <div className="bg-white p-8 border-4 border-double border-purple-900 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900"></div>
                    <div className="flex justify-center mb-4 text-gray-900">
                        <Landmark className="w-12 h-12 text-purple-900" />
                    </div>
                    <h1 className="marker-font text-4xl md:text-6xl font-bold uppercase text-purple-900 mb-2 leading-tight">
                        {t.headerTitle}
                    </h1>
                    <p className="mono-font text-lg text-gray-600 uppercase tracking-widest font-bold">{t.subHeader}</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: CIVIL SERVICES & POLICE */}
                <div className="space-y-12">

                    {/* CIVIL SERVICES */}
                    <div className="bg-white p-6 shadow-md border-t-4 border-purple-700 relative text-gray-900">
                        <div className="absolute -left-3 top-6 bg-purple-700 text-white px-2 py-1 rotate-90 text-xs font-bold tracking-widest uppercase">ICS</div>
                        <h2 className="marker-font text-2xl text-purple-900 mb-4 ml-6 uppercase">{t.civilServicesTitle}</h2>

                        <div className="hand-font text-lg space-y-4 ml-2">
                            <p className="italic text-gray-600 font-bold">{t.nehruQuote}</p>

                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <ul className="space-y-3">
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900 font-bold">{t.date1853}</Badge>
                                        <span>{t.desc1853}</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900 font-bold">{t.date1863}</Badge>
                                        <span>{t.desc1863}</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900 font-bold">{t.date1924}</Badge>
                                        <span>{t.desc1924}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-sm bg-gray-100 p-2 border-l-2 border-purple-900">
                                <strong className="uppercase">{t.examCenterTitle}</strong> {t.examCenterDesc}
                            </div>
                        </div>
                    </div>

                    {/* POLICE REFORMS */}
                    <div className="bg-gray-800 text-gray-200 p-6 shadow-xl border-l-4 border-yellow-500">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-yellow-500" />
                            <h2 className="type-font text-2xl uppercase tracking-widest">{t.policeReformsTitle}</h2>
                        </div>

                        <div className="mono-font space-y-4 text-sm">
                            <div className="border-b border-gray-600 pb-2">
                                <strong className="text-yellow-500 block uppercase mb-1">{t.policeAct1861}</strong>
                                {t.policeActDesc}
                            </div>
                            <div>
                                <strong className="text-yellow-500 block uppercase mb-1">{t.frazerCommission}</strong>
                                <span className="opacity-80">{t.frazerDesc}</span>
                                <ul className="list-disc pl-5 mt-1 opacity-70 space-y-1">
                                    <li>{t.corruptionCriticism}</li>
                                    <li>{t.cidDesc}</li>
                                    <li>{t.cibDesc}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: LOCAL GOVT, JUDICIARY & FINANCE */}
                <div className="space-y-12">

                    {/* FINANCIAL DECENTRALIZATION */}
                    <div className="relative bg-[#e0f7fa] p-6 border-2 border-cyan-700 transform rotate-1 text-gray-900 shadow-lg">
                        <h2 className="marker-font text-2xl text-cyan-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
                            <Coins className="w-6 h-6" /> {t.financialEvolutionTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="flex gap-4 items-start border-b border-cyan-200 pb-2">
                                <div className="font-bold text-cyan-800 w-24 shrink-0 uppercase">{t.mayoLabel}</div>
                                <div className="text-sm">{t.mayoDesc}</div>
                            </div>
                            <div className="flex gap-4 items-start border-b border-cyan-200 pb-2">
                                <div className="font-bold text-cyan-800 w-24 shrink-0 uppercase">{t.lyttonLabel}</div>
                                <div className="text-sm">{t.lyttonDesc}</div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="font-bold text-cyan-800 w-24 shrink-0 uppercase">{t.riponLabel}</div>
                                <div className="text-sm">{t.riponDesc}</div>
                            </div>
                        </div>
                    </div>

                    {/* LOCAL SELF GOVERNMENT */}
                    <div className="bg-white p-6 shadow-[8px_8px_0_0_#2e7d32] border border-green-700 text-gray-900">
                        <h2 className="marker-font text-2xl text-green-800 mb-4 underline decoration-wavy uppercase tracking-tighter">
                            {t.localSelfGovtTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center shadow-inner">
                                <div className="text-3xl mb-1">👑</div>
                                <strong className="block text-xl text-green-900 uppercase">{t.fatherOfLocalGovt}</strong>
                                <span className="text-xs uppercase tracking-widest font-bold text-green-700">{t.fatherSubLabel}</span>
                                <p className="text-sm mt-2 font-serif text-gray-700 italic font-bold">
                                    {t.riponQuote}
                                </p>
                            </div>

                            <ul className="text-sm list-disc pl-5 space-y-2">
                                <li><strong>{t.mayoResolution}</strong></li>
                                <li><strong>{t.royalCommission}</strong> {t.hobhouseDesc}</li>
                            </ul>
                        </div>
                    </div>

                    {/* JUDICIARY & ILBERT BILL */}
                    <div className="bg-[#ffebee] p-6 border-2 border-red-200 relative group text-gray-900 shadow-xl transition-all duration-300">
                        <h2 className="type-font text-2xl text-red-900 mb-4 flex items-center gap-2 uppercase font-bold tracking-widest">
                            <Scale className="w-6 h-6" /> {t.lawOrderTitle}
                        </h2>

                        <div className="hand-font space-y-4">
                            <div className="border-b border-red-100 pb-3">
                                <strong className="block text-lg uppercase tracking-tight">{t.highCourtsAct}</strong>
                                <p className="text-sm opacity-80">{t.highCourtsDesc}</p>
                            </div>

                            <div className="bg-red-50 p-4 border-l-4 border-red-600 shadow-inner">
                                <div className="flex justify-between items-center mb-2">
                                    <strong className="text-red-900 text-lg uppercase tracking-tighter">{t.ilbertBillTitle}</strong>
                                    <Badge className="bg-red-600 text-white font-bold">{t.racismBadge}</Badge>
                                </div>
                                <p className="text-sm space-y-1">
                                    <span className="block italic"><strong className="text-red-800">{t.proposedBy}</strong> {t.ilbertName}</span>
                                    <span className="block"><strong className="text-red-800">{t.theGoalLabel}</strong> {t.theGoalDesc}</span>
                                    <span className="block"><strong className="text-red-800">{t.theOutcomeLabel}</strong> {t.theOutcomeDesc}</span>
                                    <span className="block pt-2 font-bold text-red-900 border-t border-red-200 mt-2">
                                        <span className="uppercase text-xs mr-1">{t.legacyLabel}</span> {t.legacyDesc}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
