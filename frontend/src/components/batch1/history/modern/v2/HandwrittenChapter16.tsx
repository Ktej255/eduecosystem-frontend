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
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Special_Elite',_monospace] text-paper-gray selection:bg-paper-orange/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
                
                .parchment-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/old-map.png");
                }

                .typewriter-font { font-family: 'Special Elite', monospace; }
                .marker-font { font-family: 'Permanent Marker', cursive; }
                .serif-font { font-family: 'Playfair Display', serif; }

                .report-card {
                    background: var(--paper-bg);
                    border: 1px solid var(--paper-border-20);
                    box-shadow: 2px 2px 0px var(--paper-border-10);
                }

                .ink-blot {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background-image: radial-gradient(circle, #000 0%, transparent 70%);
                    opacity: 0.1;
                    pointer-events: none;
                }

                .black-flag { color: var(--paper-gray); }
                .simon-go-back {
                    background: var(--neutral-900);
                    color: #fff;
                    font-family: 'Permanent Marker', cursive;
                    padding: 0.2rem 0.5rem;
                    transform: rotate(-2deg);
                    display: inline-block;
                }
                :global(.dark) .simon-go-back {
                    background: #000;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] z-0"></div>

            {/* INK BLOTS */}
            <div className="fixed top-10 left-10 w-24 h-24 bg-black rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>
            <div className="fixed bottom-20 right-20 w-32 h-32 bg-blue-900 rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>

            {/* HEADER: THE CONSTITUTIONAL WAR */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 pt-8 border-b-4 border-double border-paper-border pb-6 text-inherit">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <Feather className="w-8 h-8 opacity-60" />
                    <span className="text-3xl font-bold opacity-40">vs</span>
                    <Flag className="w-8 h-8 text-paper-gray" />
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
                    <div className="report-card p-6 relative overflow-hidden bg-paper-border/5 text-inherit">
                        <div className="absolute top-0 left-0 w-2 h-full bg-neutral-900 dark:bg-black"></div>
                        <h3 className="marker-font text-3xl mb-4 text-paper-gray uppercase">{t.insultTitle}</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start border-b border-paper-border/20 pb-2">
                                <div>
                                    <strong className="block text-lg opacity-90">{t.simonTitle}</strong>
                                    <p className="text-xs opacity-60">{t.simonDesc}</p>
                                </div>
                                <span className="simon-go-back text-xs">{t.allWhite}</span>
                            </div>

                            <div className="bg-paper p-3 border border-paper-border/20 text-sm">
                                <strong className="block mb-1 text-paper-red">{t.boycottTitle}</strong>
                                <ul className="list-disc ml-4 space-y-1 text-xs opacity-80">
                                    {t.boycottItems.map((item, idx) => (
                                        <li key={idx}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-paper-red/5 p-3 border-l-4 border-paper-red text-xs">
                                <div className="flex items-center gap-2 mb-1">
                                    <Skull className="w-4 h-4 text-paper-red" />
                                    <strong className="text-paper-red uppercase">{t.martyrdomTitle}</strong>
                                </div>
                                <p><strong>{t.martyrdomDate}</strong><span className="opacity-80">{t.martyrdomAction}</span></p>
                                <p className="italic mt-1 opacity-70">{t.martyrdomQuote}</p>
                                <p className="text-[10px] mt-1 text-paper-red font-bold">{t.martyrdomNote}</p>
                            </div>
                        </div>

                        {/* BIRKENHEAD CHALLENGE */}
                        <div className="mt-4 p-3 bg-paper-border/10 text-xs italic text-center border-t border-paper-border/20 text-inherit">
                            <strong className="text-paper-gray">{t.birkenheadChallenge}</strong><br />
                            <span className="opacity-70">{t.birkenheadText}</span>
                        </div>
                    </div>

                    {/* NEHRU REPORT */}
                    <div className="report-card p-6 bg-paper-orange/10 relative text-inherit">
                        <div className="absolute top-2 right-2 opacity-20">
                            <FileText className="w-16 h-16" />
                        </div>
                        <h3 className="serif-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="border-b-2 border-paper-border">{t.nehruReportTitle}</span>
                            <span className="text-xs font-normal bg-neutral-900 dark:bg-black text-white px-2 py-0.5 rounded-full typewriter-font">{t.nehruReportTag}</span>
                        </h3>

                        <div className="bg-paper p-4 shadow-inner border border-paper-border/20 text-inherit">
                            <strong className="block text-center border-b border-paper-border/20 pb-1 mb-2 opacity-90">{t.keyRecsTitle}</strong>
                            <ul className="space-y-2 text-sm text-inherit">
                                {t.recs.map((rec, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className={`font-bold ${idx === 0 ? 'text-paper-red' : idx === 1 ? 'text-paper-green' : idx === 2 ? 'text-paper-indigo' : 'opacity-40'}`}>{idx + 1}.</span>
                                        <span className="opacity-80"><strong>{rec.bold}</strong>{rec.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* MUSLIM LEAGUE RESPONSE */}
                    <div className="report-card p-6 text-inherit">
                        <h3 className="serif-font text-xl font-bold mb-3 uppercase text-paper-green">{t.partingWays}</h3>

                        <div className="space-y-3 text-xs">
                            <div className="p-2 border-l-2 border-paper-green/40 bg-paper-green/5 text-inherit">
                                <strong>{t.delhiProposals}</strong><span className="opacity-70">{t.delhiText}</span>
                                <ul className="list-square ml-4 mt-1 opacity-60">
                                    {t.delhiItems.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="mt-1 font-bold text-paper-red">{t.rejectedBy}</div>
                            </div>

                            <div className="p-2 border-l-2 border-paper-border bg-paper-border/5 text-inherit">
                                <strong>{t.jinnahPoints}</strong>
                                <p className="mt-1 opacity-70">{t.jinnahPointsText}</p>
                                <p className="mt-1 italic opacity-60">{t.jinnahQuote}</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE CONFLICT & PURNA SWARAJ */}
                <div className="space-y-8">

                    {/* GENERATIONAL GAP */}
                    <div className="report-card p-6 bg-paper text-inherit">
                        <h3 className="serif-font text-xl font-bold mb-4 uppercase flex items-center gap-2">
                            <Users className="w-5 h-5 opacity-40" /> <span className="opacity-90">{t.internalConflict}</span>
                        </h3>

                        <div className="grid grid-cols-2 gap-4 text-xs text-center mb-4">
                            <div className="p-3 bg-paper-border/5 border border-paper-border/20 text-inherit">
                                <strong className="block text-paper-gray opacity-60 mb-1">{t.oldGuard}</strong>
                                <span className="opacity-70">{t.oldGuardDesc}</span>
                            </div>
                            <div className="p-3 bg-paper-orange/10 border border-paper-orange/20 text-inherit">
                                <strong className="block text-paper-orange mb-1">{t.youngTurks}</strong>
                                <span className="opacity-70">{t.youngTurksDesc}</span>
                            </div>
                        </div>

                        <div className="bg-paper-orange/5 p-3 border border-paper-orange/20 text-sm text-inherit">
                            <strong className="block text-paper-orange mb-1 uppercase tracking-tight">{t.calcuttaCompromise}</strong>
                            <p className="opacity-80">{t.gandhiProposal}</p>
                            <p className="mt-1 opacity-80">{t.ifNot}</p>
                            <p className="text-[10px] opacity-40 mt-1 italic">{t.subhashAmendment}</p>
                        </div>
                    </div>

                    {/* FAILED NEGOTIATIONS */}
                    <div className="bg-neutral-900 dark:bg-black text-white p-4 rounded text-xs space-y-2 border border-paper-border/20">
                        <div className="flex justify-between items-center border-b border-paper-border/20 pb-1">
                            <strong className="text-paper-red">{t.diplomaticFailure}</strong>
                            <span className="text-[10px] opacity-70">{t.failedDate}</span>
                        </div>
                        <ul className="space-y-1 opacity-80">
                            {t.failedItems.map((item, idx) => (
                                <li key={idx}><strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* PURNA SWARAJ */}
                    <div className="report-card p-0 overflow-hidden border-2 border-paper-orange shadow-xl text-inherit">
                        <div className="bg-gradient-to-r from-paper-orange via-paper-bg to-paper-green h-2"></div>
                        <div className="p-6">
                            <h3 className="marker-font text-4xl mb-4 text-center uppercase tracking-wider text-paper-gray">{t.purnaSwaraj}</h3>
                            <div className="text-center font-bold text-paper-gray opacity-40 text-sm mb-6 typewriter-font">{t.lahoreSession}</div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-paper-orange/10 p-2 rounded-full"><Flag className="w-6 h-6 text-paper-orange" /></div>
                                    <div className="text-sm opacity-80">
                                        <strong>{t.resolution}</strong>{t.resText}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-paper-indigo/10 p-2 rounded-full"><Flame className="w-6 h-6 text-paper-indigo" /></div>
                                    <div className="text-sm opacity-80">
                                        <strong>{t.midnightTitle}</strong>{t.midnightText}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-paper-green/10 p-2 rounded-full"><FileText className="w-6 h-6 text-paper-green" /></div>
                                    <div className="text-sm opacity-80">
                                        <strong>{t.independenceDay}</strong>{t.indepDayText}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-paper-border/5 p-4 font-serif italic text-xs text-center border-t border-paper-border/20 text-inherit">
                            {t.pledgeText}
                            <br /><span className="not-italic font-bold mt-1 block opacity-60 text-inherit">- {t.thePledge}</span>
                        </div>
                    </div>

                    {/* PARALLEL EVENTS */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 border border-paper-border/20 bg-paper text-inherit">
                            <strong className="block text-paper-indigo mb-1">{t.butlerTitle}</strong>
                            <p className="opacity-70">{t.butlerText}</p>
                        </div>
                        <div className="p-3 border border-paper-border/20 bg-paper text-inherit">
                            <strong className="block text-paper-indigo mb-1">{t.aispcTitle}</strong>
                            <p className="opacity-70">{t.aispcText}</p>
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
