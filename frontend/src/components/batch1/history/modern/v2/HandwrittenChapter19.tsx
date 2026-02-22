"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mic2,
    Flag,
    Moon,
    Users,
    Footprints,
    Radio,
    Map,
    AlertTriangle,
    XCircle,
    Car,
    Skull,
    Scroll
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch19Translations } from './translations/ch19';

export default function HandwrittenChapter19() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch19Translations.hi : ch19Translations.en;

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900 selection:bg-green-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Hind:wght@400;600;700&family=Special+Elite&display=swap');
                
                .green-texture {
                    background-color: #006400;
                    background-image: url("https://www.transparenttextures.com/patterns/arabesque.png");
                    color: #ecf0f1;
                }

                .saffron-texture {
                    background-color: #fff5e6;
                    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
                    color: #333;
                }

                .urdu-font { font-family: 'Scheherazade New', serif; }
                .hindi-font { font-family: 'Hind', sans-serif; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .split-card-left {
                    background: rgba(0, 100, 0, 0.9);
                    border-right: 4px solid #FFD700;
                    box-shadow: 5px 0 15px rgba(0,0,0,0.3);
                }

                .split-card-right {
                    background: #fff;
                    border-left: 4px solid #FF9933;
                    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
                }

                .car-animation {
                    animation: drive 10s linear infinite;
                }

                @keyframes drive {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full lg:w-1/2 h-full green-texture z-0 pointer-events-none opacity-100 hidden lg:block"></div>
            <div className="fixed top-0 right-0 w-full lg:w-1/2 h-full saffron-texture z-0 pointer-events-none opacity-100 hidden lg:block"></div>

            {/* Mobile Background: Stacked */}
            <div className="fixed top-0 left-0 w-full h-1/2 green-texture z-0 pointer-events-none opacity-100 lg:hidden"></div>
            <div className="fixed bottom-0 left-0 w-full h-1/2 saffron-texture z-0 pointer-events-none opacity-100 lg:hidden"></div>

            {/* HEADER */}
            <header className="max-w-6xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8">
                <div className="bg-white/90 p-6 shadow-2xl border-y-4 border-gray-800">
                    <h1 className="hindi-font text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2 text-gray-900">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center items-center gap-8 text-sm font-bold uppercase tracking-widest">
                        <span className="text-[#006400] flex items-center gap-1"><Moon className="w-4 h-4" /> {t.twoNations}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-[#FF9933] flex items-center gap-1"><Footprints className="w-4 h-4" /> {t.oneWalker}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 shadow-2xl">

                {/* LEFT COLUMN: THE LEAGUE & PAKISTAN (GREEN) */}
                <div className="green-texture p-8 lg:min-h-screen space-y-10 border-r-4 border-yellow-500">

                    {/* LAHORE RESOLUTION */}
                    <div className="bg-[#004d00] p-6 border border-[#FFD700] relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <Moon className="w-40 h-40 text-white" />
                        </div>
                        <h3 className="urdu-font text-3xl font-bold mb-4 text-[#FFD700] text-center border-b border-[#FFD700]/30 pb-2">
                            {t.lahoreResolutionTitle}
                        </h3>
                        <p className="text-center text-xs opacity-70 mb-4 tracking-widest uppercase">{t.lahoreSubtitle}</p>

                        <div className="space-y-4 text-sm">
                            <div className="bg-[#003300] p-3 rounded border border-white/20">
                                <strong className="block text-white mb-1">{t.demandLabel}</strong>
                                {t.demandText}
                                <br /><span className="text-xs text-[#FFD700] italic">{t.statesNote}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white/10 p-2">
                                    <strong className="block text-[#FFD700]">{t.movedBy}</strong>
                                    {t.movedByName}
                                </div>
                                <div className="bg-white/10 p-2">
                                    <strong className="block text-[#FFD700]">{t.draftedBy}</strong>
                                    {t.draftedByName}
                                    <span className="block text-[10px] opacity-60 mt-1">{t.draftedByNote}</span>
                                </div>
                            </div>

                            <div className="bg-[#002200] p-3 border-l-2 border-red-500">
                                <strong className="block text-red-300 mb-1">{t.twoNationTheoryTitle}</strong>
                                <p className="italic text-xs opacity-80">{t.twoNationTheoryQuote}</p>
                            </div>
                        </div>
                    </div>

                    {/* DEEP DIVE: ORIGIN OF "PAKISTAN" */}
                    <div className="bg-white text-black p-4 rounded shadow-lg transform rotate-1">
                        <h4 className="typewriter-font font-bold text-center border-b border-gray-300 pb-1 mb-2">
                            {t.pakistanOriginTitle}
                        </h4>
                        <div className="flex justify-between items-start text-xs">
                            <div className="w-2/3">
                                {t.rahmatAliNote}
                            </div>
                            <div className="w-1/3 bg-gray-100 p-2 font-mono text-center">
                                <strong>P</strong>{t.pakistanAcronym.P}<br />
                                <strong>A</strong>{t.pakistanAcronym.A}<br />
                                <strong>K</strong>{t.pakistanAcronym.K}<br />
                                <strong>S</strong>{t.pakistanAcronym.S}<br />
                                <strong>TAN</strong> ({t.pakistanAcronym.TAN})
                            </div>
                        </div>
                    </div>

                    {/* AUGUST OFFER */}
                    <div className="bg-[#004d00] p-6 border-t-4 border-gray-500">
                        <h3 className="formal-font text-2xl font-bold mb-3 text-gray-300 flex items-center gap-2">
                            <Mic2 className="w-5 h-5" /> {t.augustOfferTitle}
                        </h3>
                        <p className="text-xs mb-3 opacity-70">{t.linlithgowNote}</p>

                        <div className="space-y-2 text-xs">
                            <div className="bg-white/10 p-2">
                                <strong className="text-green-300">{t.dominionStatus}</strong>
                            </div>
                            <div className="bg-white/10 p-2">
                                <strong className="text-green-300">{t.constituentAssembly}</strong>
                            </div>
                            <div className="bg-red-900/40 p-2 border border-red-500">
                                <strong className="text-red-300">{t.theVeto}</strong>
                                <br /><span className="italic opacity-70">{t.vetoEffect}</span>
                            </div>
                        </div>

                        <div className="mt-3 text-[10px] text-center bg-black/30 p-2 rounded">
                            {t.atlanticCharterNote}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: CONGRESS & SATYAGRAHA (SAFFRON) */}
                <div className="saffron-texture p-8 lg:min-h-screen space-y-10">

                    {/* RAMGARH SPLIT */}
                    <div className="bg-white p-6 border-l-4 border-orange-500 shadow-md">
                        <h3 className="hindi-font text-3xl font-bold mb-4 text-orange-800 uppercase">
                            {t.ramgarhSessionTitle}
                        </h3>

                        <div className="flex gap-4 mb-4">
                            <div className="flex-1 bg-orange-50 p-2 border border-orange-200">
                                <strong className="block text-orange-900 text-sm">{t.congressGroup}</strong>
                                <p className="text-xs mt-1">{t.congressGoal}</p>
                            </div>
                            <div className="flex-1 bg-red-50 p-2 border border-red-200">
                                <strong className="block text-red-900 text-sm">{t.forwardBlocGroup}</strong>
                                <p className="text-xs mt-1">{t.forwardBlocGoal}</p>
                            </div>
                        </div>
                    </div>

                    {/* MARTYR CARD */}
                    <div className="bg-red-100 p-4 border border-red-300 text-red-900 relative">
                        <div className="absolute top-2 right-2"><Skull className="w-5 h-5 text-red-500" /></div>
                        <strong className="block font-bold uppercase text-sm mb-1">{t.revengeTitle}</strong>
                        <p className="text-xs">
                            <strong>{t.revengeDate}</strong>{t.revengeAction}
                            <br /><span className="text-[10px] opacity-70">{t.revengeNote}</span>
                        </p>
                    </div>

                    {/* INDIVIDUAL SATYAGRAHA */}
                    <div className="bg-white p-0 border-2 border-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        <div className="bg-gray-800 text-white p-3 text-center">
                            <h3 className="typewriter-font text-xl font-bold">{t.individualSatyagrahaTitle}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400">{t.individualSatyagrahaSubtitle}</p>
                        </div>
                        <div className="p-5 space-y-4">
                            <p className="text-xs italic text-center w-3/4 mx-auto border-b border-gray-200 pb-2">
                                {t.individualSatyagrahaQuote}
                            </p>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-orange-500">{t.st}</Badge>
                                    <strong>{t.vinoba}</strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-gray-500">{t.nd}</Badge>
                                    <strong>{t.nehru}</strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-gray-400">{t.rd}</Badge>
                                    <strong>{t.brahmaDatt}</strong>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-2 text-xs text-center border-t border-gray-300 mt-2">
                                {t.bardoliNote}
                            </div>
                        </div>
                    </div>

                    {/* THE GREAT ESCAPE */}
                    <div className="bg-[#191970] text-white p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
                        <h3 className="formal-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <Car className="w-6 h-6" /> {t.greatEscapeTitle}
                        </h3>

                        <div className="space-y-3 text-xs z-10 relative">
                            <div className="bg-white/10 p-2 rounded">
                                <strong>{t.escapeDate}</strong> {t.escapeAction}
                                <br /><span className="opacity-60">{t.escapeContext}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="border border-white/30 p-2">
                                    <strong className="block text-yellow-400">{t.theDisguise}</strong>
                                    {t.disguiseName}
                                    <br />{t.passportName}
                                </div>
                                <div className="border border-white/30 p-2">
                                    <strong className="block text-yellow-400">{t.theAccomplices}</strong>
                                    {t.accompliceDriver}
                                    <br />{t.accompliceGuide}
                                </div>
                            </div>

                            <div className="text-[10px] font-mono mt-2 text-center opacity-70">
                                {t.escapeRoute}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
