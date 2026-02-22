"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Radio,
    XCircle,
    Skull,
    AlertTriangle,
    Mic2,
    FileText,
    Flag,
    Users,
    Anchor,
    Plane,
    Leaf
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch20Translations } from './translations/ch20';

export default function HandwrittenChapter20() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch20Translations.hi : ch20Translations.en;

    return (
        <div className="min-h-screen bg-[#1a1a1a] font-sans text-gray-100 selection:bg-red-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap');
                
                .burnt-texture {
                    background-color: #1a1a1a;
                    background-image: url("https://www.transparenttextures.com/patterns/cracked-concrete.png");
                }

                .stencil-font { font-family: 'Black Ops One', cursive; }
                .typewriter-font { font-family: 'Courier Prime', monospace; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .fire-text {
                    background: linear-gradient(to bottom, #ff9933, #ff0000);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .steel-card {
                    background: linear-gradient(135deg, #2c3e50, #4ca1af);
                    border: 1px solid #7f8c8d;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }

                .radio-card {
                    background: #2d3436;
                    border: 4px solid #000;
                    box-shadow: 0 0 10px #FFD700;
                }

                .torn-paper {
                    background: #fff;
                    color: #000;
                    clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0 90%);
                    padding-bottom: 2rem;
                    transform: rotate(1deg);
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 burnt-texture pointer-events-none z-0 opacity-50"></div>

            {/* HEADER */}
            <header className="max-w-6xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8">
                <div className="border-4 border-red-800 p-8 bg-black/80 inline-block transform -rotate-1">
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Flame className="w-8 h-8 text-red-500 animate-pulse" />
                        <span className="typewriter-font text-red-500 text-xl tracking-widest uppercase">{t.august1942}</span>
                        <Flame className="w-8 h-8 text-red-500 animate-pulse" />
                    </div>
                    <h1 className="stencil-font text-6xl md:text-8xl fire-text uppercase tracking-widest leading-none mb-4">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>{t.quitIndia}</span>
                        <span>•</span>
                        <span>{t.leaderlessRevolt}</span>
                        <span>•</span>
                        <span>{t.parallelGovts}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE OFFER & THE SPARK */}
                <div className="space-y-12">

                    {/* CRIPPS MISSION (TORN CHEQUE) */}
                    <div className="torn-paper p-6 relative">
                        <div className="absolute top-2 right-2 text-red-600 font-bold border-2 border-red-600 p-1 transform rotate-12 text-xs uppercase">
                            {t.rejected}
                        </div>
                        <h3 className="typewriter-font text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-dashed border-gray-400 pb-2">
                            <Plane className="w-5 h-5" /> {t.crippsMissionTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-mono leading-tight">
                            <p className="bg-gray-100 p-2">
                                <strong>{t.envoyLabel}</strong> {t.envoyText}
                                <br /><span className="text-gray-500 text-xs">{t.pressureNote}</span>
                            </p>

                            <ul className="list-disc ml-4 space-y-2">
                                <li><strong>{t.dominionStatus}</strong></li>
                                <li><strong>{t.constituentAssembly}</strong></li>
                                <li className="text-red-700 font-bold bg-red-50 p-1">
                                    {t.rightToSecede}
                                </li>
                            </ul>

                            <div className="mt-4 text-center italic text-red-600 font-bold">
                                {t.gandhiQuoteCripps}
                            </div>
                        </div>
                    </div>

                    {/* QUIT INDIA RESOLUTION */}
                    <div className="bg-red-900/20 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                        <h3 className="stencil-font text-2xl font-bold mb-4 text-red-500 uppercase flex items-center gap-2">
                            <Flag className="w-6 h-6" /> {t.resolutionTitle}
                        </h3>

                        <div className="text-sm space-y-3">
                            <div className="flex items-center gap-2 opacity-80">
                                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">{t.locationLabel}</span>
                                {t.locationText}
                            </div>

                            <div className="bg-black/40 p-3 italic border border-red-500/30 text-center text-red-200">
                                {t.mantraQuote}
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">{t.soldiersLabel}</strong>
                                    {t.soldiersText}
                                </div>
                                <div className="bg-white/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">{t.studentsLabel}</strong>
                                    {t.studentsText}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPPOSITION */}
                    <div className="bg-gray-800 p-4 border border-gray-600 relative">
                        <div className="absolute -top-3 left-4 bg-gray-600 text-white text-xs px-2 py-1 uppercase font-bold">
                            {t.dissentersTitle}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs mt-2">
                            <div>
                                <strong className="block text-yellow-400">{t.cpi}</strong>
                                <span className="opacity-70">{t.cpiDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-green-400">{t.muslimLeague}</strong>
                                <span className="opacity-70">{t.mlDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-orange-400">{t.hinduMahasabha}</strong>
                                <span className="opacity-70">{t.hmDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-blue-400">{t.ambedkar}</strong>
                                <span className="opacity-70">{t.ambedkarDesc}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: THE REVOLT & TRAGEDY */}
                <div className="space-y-12">

                    {/* OPERATION ZERO HOUR & UNDERGROUND */}
                    <div className="radio-card p-6 text-yellow-500 relative overflow-hidden">
                        <div className="absolute top-2 right-2 animate-pulse rounded-full h-3 w-3 bg-red-500"></div>
                        <h3 className="handwritten-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <Radio className="w-5 h-5" /> {t.radioTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-mono">
                            <div className="bg-black/50 p-3 border border-yellow-500/30">
                                <strong className="block text-white mb-1 uppercase text-xs">{t.zeroHourTitle}</strong>
                                {t.zeroHourDesc}
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <strong className="block text-white text-xs uppercase mb-1">{t.broadcasterTitle}</strong>
                                    {t.broadcasterName}
                                </div>
                                <div className="flex-1">
                                    <strong className="block text-white text-xs uppercase mb-1">{t.coordinatorTitle}</strong>
                                    {t.coordinatorName}
                                </div>
                            </div>

                            <div className="bg-yellow-900/20 p-2 text-xs border-l-2 border-yellow-500">
                                <strong>{t.azadDastaTitle}</strong> {t.azadDastaDesc}
                                <br />{t.pilotFinancier}
                            </div>
                        </div>
                    </div>

                    {/* PARALLEL GOVERNMENTS MAP */}
                    <div className="steel-card p-6 text-white relative">
                        <Badge className="absolute top-4 right-4 bg-orange-500 text-black">{t.parallelGovtBadge}</Badge>
                        <h3 className="stencil-font text-xl mb-4 uppercase">{t.powerToPeople}</h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span><strong>{t.ballia}</strong><br /><span className="opacity-70">{t.balliaLeader}</span></span>
                                <span className="text-right">{t.balliaDuration}<br /><span className="opacity-70">{t.balliaAction}</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span><strong>{t.tamluk}</strong><br /><span className="opacity-70">{t.tamlukLeader}</span></span>
                                <span className="text-right">{t.tamlukDuration}<br /><span className="opacity-70">{t.tamlukAction}</span></span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span><strong>{t.satara}</strong><br /><span className="opacity-70">{t.sataraLeader}</span></span>
                                <span className="text-right">{t.sataraDuration}<br /><span className="opacity-70">{t.sataraAction}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* MARTYRS & TRAGEDY */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-950/50 p-4 border border-red-800 relative">
                            <strong className="block text-red-400 text-xs uppercase mb-2">{t.martyrsTitle}</strong>
                            <ul className="space-y-2 text-xs opacity-80">
                                <li>{t.matanginiHazra}</li>
                                <li>{t.kanaklataBarua}</li>
                                <li>{t.bhaiKotwal}</li>
                            </ul>
                        </div>

                        <div className="bg-black p-4 border border-gray-700 relative text-gray-400">
                            <strong className="block text-gray-200 text-xs uppercase mb-2">{t.palaceTragedyTitle}</strong>
                            <ul className="space-y-2 text-xs">
                                <li><strong>{t.mahadevDesai}</strong></li>
                                <li><strong>{t.kasturba}</strong></li>
                                <li className="text-[10px] mt-2 italic pt-2 border-t border-gray-800">
                                    {t.churchillQuote}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DIPLOMATIC END */}
                    <div className="bg-white/5 p-3 text-xs flex justify-between items-center border-t border-white/10">
                        <div>
                            <strong className="block text-green-400">{t.crFormula}</strong>
                            {t.crFormulaDesc}
                        </div>
                        <div className="text-right">
                            <strong className="block text-red-400">{t.gandhiJinnahTalks}</strong>
                            {t.gandhiJinnahDesc}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
