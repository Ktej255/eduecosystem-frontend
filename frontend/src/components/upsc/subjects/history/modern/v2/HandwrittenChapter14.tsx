"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flag,
    Flame,
    Scale,
    Moon,
    Users,
    AlertTriangle,
    Gavel,
    Scroll,
    PenTool,
    Megaphone,
    XCircle,
    MapPin
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch14Translations } from './translations/ch14';

export default function HandwrittenChapter14() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch14Translations.hi : ch14Translations.en;

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Merriweather',_serif] text-paper-gray selection:bg-paper-orange/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&family=Merriweather:wght@300;400;700&family=Special+Elite&display=swap');
                
                .khadi-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .stencil-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .unity-card {
                    background-color: var(--paper-bg);
                    border: 2px solid var(--paper-border);
                    box-shadow: 4px 4px 0px var(--paper-border);
                    transition: transform 0.2s;
                }
                .unity-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 0px var(--paper-border);
                }

                .khilafat-green { color: var(--paper-green); }
                .congress-saffron { color: var(--paper-orange); }
                .burnt-black { color: var(--paper-gray); }
                
                .split-screen-bg {
                    background: linear-gradient(135deg, var(--paper-green-10) 0%, var(--paper-green-10) 50%, var(--paper-orange-10) 50%, var(--paper-orange-10) 100%);
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] z-0"></div>

            {/* CHARKHA WATERMARK */}
            <div className="fixed right-[-100px] bottom-[-100px] opacity-10 pointer-events-none z-0">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v20M2 12h20" />
                </svg>
            </div>

            {/* HEADER: THE UNIFIED FLAG */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 border-b-8 border-double border-paper-border pb-8 pt-4 text-inherit">
                <div className="flex justify-center items-center gap-4 mb-2 opacity-60">
                    <Moon className="w-8 h-8 text-paper-green fill-current" />
                    <span className="text-2xl font-bold text-inherit">+</span>
                    <div className="w-8 h-8 rounded-full border-4 border-paper-orange"></div>
                </div>
                <h1 className="stencil-font text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2 text-paper-gray">
                    {t.headerTitle}
                </h1>
                <p className="typewriter-font text-xl font-bold bg-neutral-900 dark:bg-black text-white inline-block px-4 py-1 transform -rotate-1">
                    {t.headerQuote}
                </p>
                <div className="mt-4 flex justify-center gap-6 text-sm font-bold uppercase">
                    <span className="flex items-center gap-1"><Flag className="w-4 h-4" /> {t.nonCoop}</span>
                    <span className="flex items-center gap-1"><Moon className="w-4 h-4" /> {t.khilafat}</span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: CAUSE, LAUNCH, PROGRAM */}
                <div className="lg:col-span-6 space-y-8">

                    {/* TWIN CAUSES */}
                    <div className="unity-card p-6 relative overflow-hidden text-inherit">
                        <div className="absolute top-0 right-0 bg-paper-red/10 text-paper-red px-2 py-1 text-[10px] font-bold border-l border-b border-paper-red/20">{t.whyNow}</div>
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase">{t.twinTitle}</h3>

                        <div className="space-y-4">
                            <div className="bg-paper-red/5 p-3 border-l-4 border-paper-red text-inherit">
                                <h4 className="font-bold text-sm uppercase text-paper-red">{t.punjabWrong}</h4>
                                <p className="text-xs mt-1 opacity-80">{t.punjabText}</p>
                            </div>

                            <div className="bg-paper-green/5 p-3 border-l-4 border-paper-green text-inherit">
                                <h4 className="font-bold text-sm uppercase text-paper-green">{t.khilafatWrong}</h4>
                                <p className="text-xs mt-1 opacity-80">{t.khilafatText}</p>
                                <div className="mt-2 text-xs bg-paper p-2 border border-paper-green/20">
                                    <strong>{t.khilafatDay}</strong><span className="opacity-70">{t.khilafatDayText}</span><br />
                                    <strong>{t.khilafatLeaders}</strong><span className="opacity-70">{t.khilafatLeadersText}</span><br />
                                    <strong>{t.gandhiQuote}</strong><span className="opacity-70 italic">{t.gandhiQuoteText}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SESSIONS: TALE OF TWO CITIES */}
                    <div className="unity-card p-0">
                        <div className="p-4 bg-gray-800 text-white text-center font-bold uppercase stencil-font">
                            {t.sessionsTitle}
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                            <div className="p-4 border-r border-gray-300 bg-gray-50">
                                <h4 className="font-bold text-lg mb-1">{t.calcutta}</h4>
                                <p className="text-xs italic mb-2">{t.calcuttaNote}</p>
                                <ul className="text-xs space-y-2 list-disc ml-4">
                                    {t.calcuttaItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 bg-orange-50">
                                <h4 className="font-bold text-lg mb-1 text-orange-900">{t.nagpur}</h4>
                                <p className="text-xs italic mb-2">{t.nagpurNote}</p>
                                <ul className="text-xs space-y-2 list-disc ml-4">
                                    {t.nagpurItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 border-t border-paper-border/20 bg-paper-indigo/5 text-inherit">
                            <strong className="text-paper-indigo uppercase text-xs block mb-2">{t.newConst}</strong>
                            <ul className="text-xs grid grid-cols-2 gap-2 opacity-80">
                                {t.constItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-1">
                                        {item.icon === 'users' && <Users className="w-3 h-3" />}
                                        {item.icon === 'map' && <MapPin className="w-3 h-3" />}
                                        {item.icon === 'money' && '💰'}
                                        {item.icon === 'exit' && '🚪'}
                                        {' '}{item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* THE PROGRAM */}
                    <div className="unity-card p-6 bg-paper relative text-inherit">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase flex items-center gap-2">
                            {t.programTitle} <Flame className="w-5 h-5 text-paper-orange" />
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="border border-paper-red/20 p-3 bg-paper-red/5">
                                <h4 className="font-bold text-paper-red text-sm uppercase mb-2 border-b border-paper-red/20 pb-1">{t.boycottTitle}</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 opacity-80">
                                    {t.boycottItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-paper-green/20 p-3 bg-paper-green/5">
                                <h4 className="font-bold text-paper-green text-sm uppercase mb-2 border-b border-paper-green/20 pb-1">{t.constructiveTitle}</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 opacity-80">
                                    {t.constructiveItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    <li><strong>{t.tilakFund}</strong>{t.tilakFundNote}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-paper-border/5 p-3 text-xs border border-paper-border/20 text-inherit">
                            <div className="flex justify-between items-center mb-1">
                                <strong className="uppercase">{t.workersTitle}</strong>
                                <span className="text-[10px] font-bold bg-neutral-900 dark:bg-black text-white px-1">{t.aitucTag}</span>
                            </div>
                            <p className="opacity-80">{t.aitucText}<strong>{t.aitucPrez}</strong>.</p>
                            <p className="italic opacity-60 mt-1">{t.aitucQuote}</p>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SPREAD, REGIONAL FIRES, END */}
                <div className="lg:col-span-6 space-y-8">

                    {/* THE SPREAD */}
                    <div className="unity-card p-6 text-inherit">
                        <h3 className="stencil-font text-xl font-bold mb-4 uppercase border-b-2 border-paper-border pb-2">
                            {t.surgeTitle}
                        </h3>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1 bg-paper-orange/10 p-3 border border-paper-orange/20">
                                    <h4 className="font-bold text-sm text-paper-orange mb-1">{t.studentsTitle}</h4>
                                    <ul className="text-[10px] space-y-1 opacity-80">
                                        {t.studentsItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 bg-paper-indigo/5 p-3 border border-paper-indigo/20">
                                    <h4 className="font-bold text-sm text-paper-indigo mb-1">{t.lawyersTitle}</h4>
                                    <p className="text-[10px] leading-tight opacity-80">{t.lawyersText}</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-paper-purple pl-3 py-1">
                                <h4 className="font-bold text-sm text-paper-purple">{t.womenTitle}</h4>
                                <p className="text-xs opacity-70"><strong>{t.womenText}</strong>{t.womenNote}</p>
                            </div>

                            <div className="bg-neutral-900 dark:bg-black text-white p-3 text-center">
                                <h4 className="font-bold text-sm uppercase">{t.princeTitle}</h4>
                                <p className="text-xs opacity-80">{t.princeText}</p>
                                <p className="text-[10px] italic mt-1 text-gray-400 opacity-60">{t.princeNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* REGIONAL FIRES MAP */}
                    <div className="bg-paper-border/20 p-4 text-xs font-mono border-2 border-dashed border-paper-border/40 rounded relative text-inherit">
                        <div className="absolute -top-3 left-4 bg-paper-border text-paper-bg px-2 py-1 text-[10px] font-bold uppercase">{t.regionalTag}</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {t.fires.map((fire, i) => (
                                <div key={i} className="bg-paper p-2 shadow-sm text-inherit">
                                    <strong className={`text-paper-${fire.color} block`}>{fire.emoji} {fire.name}</strong>
                                    <span className="text-[10px] opacity-70">{fire.text}</span>
                                </div>
                            ))}
                            <div className="col-span-2 bg-paper p-2 shadow-sm text-center text-inherit">
                                <strong className={`text-paper-${t.chirala.color} block`}>{t.chirala.emoji} {t.chirala.name}</strong>
                                <span className="text-[10px] opacity-70">{t.chirala.text}</span>
                            </div>
                        </div>
                    </div>

                    {/* SUDDEN END & AFTERMATH */}
                    <div className="unity-card p-6 border-paper-red border-2 bg-paper text-inherit">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase text-paper-red flex items-center gap-2">
                            {t.endTitle} <XCircle className="w-6 h-6" />
                        </h3>

                        <div className="mb-4 bg-paper-red/10 p-3 border-l-4 border-paper-red">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-paper-red text-sm">{t.chauriChaura}</h4>
                                <span className="text-[10px] font-bold opacity-60">{t.chauriDate}</span>
                            </div>
                            <p className="text-xs opacity-90">{t.chauriText}</p>
                            <div className="mt-2 text-xs bg-paper p-2 border border-paper-red/20 text-center font-bold text-paper-red uppercase tracking-wider">
                                {t.bardoli}
                            </div>
                            <p className="text-[10px] italic mt-1 text-center opacity-60">{t.bardoliNote}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                            <div className="p-2 border border-paper-border/20 opacity-80">
                                <strong>{t.boseQuote}</strong>{t.boseQuoteText}
                            </div>
                            <div className="p-2 border border-paper-border/20 opacity-80">
                                <strong>{t.motilalQuote}</strong>{t.motilalQuoteText}
                            </div>
                        </div>

                        <div className="border-t border-paper-border/20 pt-3 space-y-3">
                            <div className="flex items-start gap-2">
                                <Gavel className="w-4 h-4 opacity-40 mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">{t.trialTitle}</h4>
                                    <p className="text-xs opacity-70">{t.trialText}</p>
                                </div>
                            </div>

                            <div className="bg-paper-border/5 p-2 text-center text-xs">
                                <strong className="text-paper-gray">{t.gayaSplit}</strong>
                                <br />
                                <span className="text-[10px] opacity-60">{t.gayaSplitText}</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* HASRAT MOHANI NOTE */}
            <div className="max-w-4xl mx-auto mt-8 text-center opacity-60 text-xs font-mono">
                {t.footerText}<strong>{t.hasrat}</strong>{t.hasratText}
            </div>
        </div>
    );
}
