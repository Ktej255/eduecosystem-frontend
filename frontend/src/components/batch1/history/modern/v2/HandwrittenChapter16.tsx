"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Flag,
    PenTool,
    Scroll,
    AlertTriangle,
    Users,
    Gavel,
    Mic2,
    Flame,
    XCircle,
    Scale,
    Feather,
    Skull
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch16Translations } from './translations/ch16';

export default function HandwrittenChapter16() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch16Translations.hi : ch16Translations.en;

    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Special_Elite',_monospace] text-gray-900 selection:bg-orange-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
                
                .parchment-texture {
                    background-color: #fdfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/old-map.png");
                }

                .typewriter-font { font-family: 'Special Elite', monospace; }
                .marker-font { font-family: 'Permanent Marker', cursive; }
                .serif-font { font-family: 'Playfair Display', serif; }

                .report-card {
                    background: #fff;
                    border: 1px solid #d1d5db;
                    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
                }

                .ink-blot {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background-image: radial-gradient(circle, #000 0%, transparent 70%);
                    opacity: 0.1;
                    pointer-events: none;
                }

                .black-flag { color: #1a1a1a; }
                .simon-go-back {
                    background: #000;
                    color: #fff;
                    font-family: 'Permanent Marker', cursive;
                    padding: 0.2rem 0.5rem;
                    transform: rotate(-2deg);
                    display: inline-block;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] z-0"></div>

            {/* INK BLOTS */}
            <div className="fixed top-10 left-10 w-24 h-24 bg-black rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>
            <div className="fixed bottom-20 right-20 w-32 h-32 bg-blue-900 rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>

            {/* HEADER: THE CONSTITUTIONAL WAR */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 pt-8 border-b-4 border-double border-gray-800 pb-6">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <Feather className="w-8 h-8 opacity-60" />
                    <span className="text-3xl font-bold">vs</span>
                    <Flag className="w-8 h-8" />
                </div>
                <h1 className="serif-font text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2">
                    {t.headerTitle}
                </h1>
                <p className="typewriter-font text-xl opacity-80">{t.headerSubtitle}</p>
                <div className="absolute top-0 right-0 transform rotate-12 opacity-80 hidden md:block">
                    <div className="simon-go-back text-sm">{t.simonGoBack}</div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                {/* LEFT COLUMN: THE CHALLENGE (SIMON & NEHRU REPORT) */}
                <div className="space-y-8">

                    {/* SIMON COMMISSION */}
                    <div className="report-card p-6 relative overflow-hidden bg-gray-50">
                        <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                        <h3 className="marker-font text-3xl mb-4 text-black uppercase">{t.insultTitle}</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start border-b border-gray-300 pb-2">
                                <div>
                                    <strong className="block text-lg">{t.simonTitle}</strong>
                                    <p className="text-xs text-gray-600">{t.simonDesc}</p>
                                </div>
                                <span className="simon-go-back text-xs">{t.allWhite}</span>
                            </div>

                            <div className="bg-white p-3 border border-gray-200 text-sm">
                                <strong className="block mb-1 text-red-700">{t.boycottTitle}</strong>
                                <ul className="list-disc ml-4 space-y-1 text-xs">
                                    {t.boycottItems.map((item, idx) => (
                                        <li key={idx}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 p-3 border-l-4 border-red-800 text-xs">
                                <div className="flex items-center gap-2 mb-1">
                                    <Skull className="w-4 h-4 text-red-800" />
                                    <strong className="text-red-900 uppercase">{t.martyrdomTitle}</strong>
                                </div>
                                <p><strong>{t.martyrdomDate}</strong>{t.martyrdomAction}</p>
                                <p className="italic mt-1 text-gray-700">{t.martyrdomQuote}</p>
                                <p className="text-[10px] mt-1 text-red-600">{t.martyrdomNote}</p>
                            </div>
                        </div>

                        {/* BIRKENHEAD CHALLENGE */}
                        <div className="mt-4 p-3 bg-gray-200 text-xs italic text-center border-t border-gray-300">
                            <strong>{t.birkenheadChallenge}</strong><br />
                            {t.birkenheadText}
                        </div>
                    </div>

                    {/* NEHRU REPORT */}
                    <div className="report-card p-6 bg-[#fffaf0] relative">
                        <div className="absolute top-2 right-2 opacity-20">
                            <FileText className="w-16 h-16" />
                        </div>
                        <h3 className="serif-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="border-b-2 border-black">{t.nehruReportTitle}</span>
                            <span className="text-xs font-normal bg-black text-white px-2 py-0.5 rounded-full typewriter-font">{t.nehruReportTag}</span>
                        </h3>

                        <div className="mb-4 text-xs bg-white p-3 border border-dashed border-gray-400">
                            <strong className="block mb-2 uppercase">{t.draftingTitle}</strong>
                            <div className="grid grid-cols-2 gap-2">
                                {t.draftingMembers.map((member, idx) => (
                                    <div key={idx}>{member}</div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow-inner border border-gray-200">
                            <strong className="block text-center border-b border-gray-300 pb-1 mb-2">{t.keyRecsTitle}</strong>
                            <ul className="space-y-2 text-sm">
                                {t.recs.map((rec, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className={`font-bold ${idx === 0 ? 'text-red-600' : idx === 1 ? 'text-green-600' : idx === 2 ? 'text-blue-600' : 'text-gray-600'}`}>{idx + 1}.</span>
                                        <span><strong>{rec.bold}</strong>{rec.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* MUSLIM LEAGUE RESPONSE */}
                    <div className="report-card p-6">
                        <h3 className="serif-font text-xl font-bold mb-3 uppercase text-green-800">{t.partingWays}</h3>

                        <div className="space-y-3 text-xs">
                            <div className="p-2 border-l-2 border-green-600 bg-green-50">
                                <strong>{t.delhiProposals}</strong>{t.delhiText}
                                <ul className="list-square ml-4 mt-1 opacity-80">
                                    {t.delhiItems.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="mt-1 font-bold text-red-700">{t.rejectedBy}</div>
                            </div>

                            <div className="p-2 border-l-2 border-black bg-gray-50">
                                <strong>{t.jinnahPoints}</strong>
                                <p className="mt-1">{t.jinnahPointsText}</p>
                                <p className="mt-1 italic">{t.jinnahQuote}</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE CONFLICT & PURNA SWARAJ */}
                <div className="space-y-8">

                    {/* GENERATIONAL GAP */}
                    <div className="report-card p-6 bg-white">
                        <h3 className="serif-font text-xl font-bold mb-4 uppercase flex items-center gap-2">
                            <Users className="w-5 h-5" /> {t.internalConflict}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 text-xs text-center mb-4">
                            <div className="p-3 bg-gray-100 border border-gray-300">
                                <strong className="block text-gray-600 mb-1">{t.oldGuard}</strong>
                                {t.oldGuardDesc}
                            </div>
                            <div className="p-3 bg-orange-50 border border-orange-200">
                                <strong className="block text-orange-600 mb-1">{t.youngTurks}</strong>
                                {t.youngTurksDesc}
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-3 border border-yellow-300 text-sm">
                            <strong className="block text-yellow-800 mb-1 uppercase">{t.calcuttaCompromise}</strong>
                            <p>{t.gandhiProposal}</p>
                            <p className="mt-1">{t.ifNot}</p>
                            <p className="text-[10px] text-gray-500 mt-1 italic">{t.subhashAmendment}</p>
                        </div>
                    </div>

                    {/* FAILED NEGOTIATIONS */}
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-xs space-y-2">
                        <div className="flex justify-between items-center border-b border-gray-600 pb-1">
                            <strong>{t.diplomaticFailure}</strong>
                            <span className="text-[10px] opacity-70">{t.failedDate}</span>
                        </div>
                        <ul className="space-y-1">
                            {t.failedItems.map((item, idx) => (
                                <li key={idx}><strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* PURNA SWARAJ */}
                    <div className="report-card p-0 overflow-hidden border-2 border-orange-500 shadow-xl">
                        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2"></div>
                        <div className="p-6">
                            <h3 className="marker-font text-4xl mb-4 text-center uppercase tracking-wider">{t.purnaSwaraj}</h3>
                            <div className="text-center font-bold text-gray-500 text-sm mb-6 typewriter-font">{t.lahoreSession}</div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-100 p-2 rounded-full"><Flag className="w-6 h-6 text-orange-600" /></div>
                                    <div className="text-sm">
                                        <strong>{t.resolution}</strong>{t.resText}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-2 rounded-full"><Flame className="w-6 h-6 text-blue-600" /></div>
                                    <div className="text-sm">
                                        <strong>{t.midnightTitle}</strong>{t.midnightText}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded-full"><FileText className="w-6 h-6 text-green-600" /></div>
                                    <div className="text-sm">
                                        <strong>{t.independenceDay}</strong>{t.indepDayText}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-4 font-serif italic text-xs text-center border-t border-gray-200">
                            {t.pledgeText}
                            <br /><span className="not-italic font-bold mt-1 block">- {t.thePledge}</span>
                        </div>
                    </div>

                    {/* PARALLEL EVENTS */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 border border-gray-300 bg-white">
                            <strong className="block text-indigo-800 mb-1">{t.butlerTitle}</strong>
                            <p>{t.butlerText}</p>
                        </div>
                        <div className="p-3 border border-gray-300 bg-white">
                            <strong className="block text-indigo-800 mb-1">{t.aispcTitle}</strong>
                            <p>{t.aispcText}</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* FOOTER NOTE */}
            <div className="max-w-4xl mx-auto mt-8 text-center opacity-60 text-xs font-mono">
                {t.dissent}<strong>{t.taraSingh}</strong>{t.taraSinghText}
            </div>
        </div>
    );
}
