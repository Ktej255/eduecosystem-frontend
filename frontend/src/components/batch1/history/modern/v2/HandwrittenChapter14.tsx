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
        <div className="min-h-screen bg-[#f5f5dc] p-4 md:p-8 font-['Merriweather',_serif] text-gray-900 selection:bg-orange-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&family=Merriweather:wght@300;400;700&family=Special+Elite&display=swap');
                
                .khadi-texture {
                    background-color: #f5f5dc;
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .stencil-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .unity-card {
                    background-color: #fff;
                    border: 2px solid #2c2c2c;
                    box-shadow: 4px 4px 0px #2c2c2c;
                    transition: transform 0.2s;
                }
                .unity-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 0px #2c2c2c;
                }

                .khilafat-green { color: #006400; }
                .congress-saffron { color: #FF9933; }
                .burnt-black { color: #1a1a1a; }
                
                .split-screen-bg {
                    background: linear-gradient(135deg, #e8f5e9 0%, #e8f5e9 50%, #fff3e0 50%, #fff3e0 100%);
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
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 border-b-8 border-double border-gray-800 pb-8 pt-4">
                <div className="flex justify-center items-center gap-4 mb-2 opacity-60">
                    <Moon className="w-8 h-8 khilafat-green fill-current" />
                    <span className="text-2xl font-bold">+</span>
                    <div className="w-8 h-8 rounded-full border-4 border-orange-500"></div>
                </div>
                <h1 className="stencil-font text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2 text-gray-900">
                    {t.headerTitle}
                </h1>
                <p className="typewriter-font text-xl font-bold bg-black text-white inline-block px-4 py-1 transform -rotate-1">
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
                    <div className="unity-card p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-100 text-red-800 px-2 py-1 text-[10px] font-bold border-l border-b border-red-300">{t.whyNow}</div>
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase">{t.twinTitle}</h3>

                        <div className="space-y-4">
                            <div className="bg-red-50 p-3 border-l-4 border-red-600">
                                <h4 className="font-bold text-sm uppercase text-red-900">{t.punjabWrong}</h4>
                                <p className="text-xs mt-1">{t.punjabText}</p>
                            </div>

                            <div className="bg-green-50 p-3 border-l-4 border-green-700">
                                <h4 className="font-bold text-sm uppercase text-green-900">{t.khilafatWrong}</h4>
                                <p className="text-xs mt-1">{t.khilafatText}</p>
                                <div className="mt-2 text-xs bg-white p-2 border border-green-200">
                                    <strong>{t.khilafatDay}</strong>{t.khilafatDayText}<br />
                                    <strong>{t.khilafatLeaders}</strong>{t.khilafatLeadersText}<br />
                                    <strong>{t.gandhiQuote}</strong>{t.gandhiQuoteText}
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
                        <div className="p-4 border-t border-gray-300 bg-blue-50">
                            <strong className="text-blue-900 uppercase text-xs block mb-2">{t.newConst}</strong>
                            <ul className="text-xs grid grid-cols-2 gap-2">
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
                    <div className="unity-card p-6 bg-white relative">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase flex items-center gap-2">
                            {t.programTitle} <Flame className="w-5 h-5 text-orange-600" />
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="border border-red-200 p-3 bg-red-50/50">
                                <h4 className="font-bold text-red-800 text-sm uppercase mb-2 border-b border-red-200 pb-1">{t.boycottTitle}</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 text-gray-700">
                                    {t.boycottItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-green-200 p-3 bg-green-50/50">
                                <h4 className="font-bold text-green-800 text-sm uppercase mb-2 border-b border-green-200 pb-1">{t.constructiveTitle}</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 text-gray-700">
                                    {t.constructiveItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    <li><strong>{t.tilakFund}</strong>{t.tilakFundNote}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 text-xs border border-gray-300">
                            <div className="flex justify-between items-center mb-1">
                                <strong className="uppercase">{t.workersTitle}</strong>
                                <span className="text-[10px] font-bold bg-black text-white px-1">{t.aitucTag}</span>
                            </div>
                            <p>{t.aitucText}<strong>{t.aitucPrez}</strong>.</p>
                            <p className="italic text-gray-600 mt-1">{t.aitucQuote}</p>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SPREAD, REGIONAL FIRES, END */}
                <div className="lg:col-span-6 space-y-8">

                    {/* THE SPREAD */}
                    <div className="unity-card p-6">
                        <h3 className="stencil-font text-xl font-bold mb-4 uppercase border-b-2 border-gray-800 pb-2">
                            {t.surgeTitle}
                        </h3>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1 bg-yellow-50 p-3 border border-yellow-200">
                                    <h4 className="font-bold text-sm text-yellow-900 mb-1">{t.studentsTitle}</h4>
                                    <ul className="text-[10px] space-y-1 text-gray-700">
                                        {t.studentsItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 bg-blue-50 p-3 border border-blue-200">
                                    <h4 className="font-bold text-sm text-blue-900 mb-1">{t.lawyersTitle}</h4>
                                    <p className="text-[10px] leading-tight text-gray-700">{t.lawyersText}</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-3 py-1">
                                <h4 className="font-bold text-sm text-purple-900">{t.womenTitle}</h4>
                                <p className="text-xs text-gray-600"><strong>{t.womenText}</strong>{t.womenNote}</p>
                            </div>

                            <div className="bg-black text-white p-3 text-center">
                                <h4 className="font-bold text-sm uppercase">{t.princeTitle}</h4>
                                <p className="text-xs opacity-80">{t.princeText}</p>
                                <p className="text-[10px] italic mt-1 text-gray-400 opacity-60">{t.princeNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* REGIONAL FIRES MAP */}
                    <div className="bg-[#e0e0e0] p-4 text-xs font-mono border-2 border-dashed border-gray-500 rounded relative">
                        <div className="absolute -top-3 left-4 bg-gray-500 text-white px-2 py-1 text-[10px] font-bold uppercase">{t.regionalTag}</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {t.fires.map((fire, i) => (
                                <div key={i} className="bg-white p-2 shadow-sm">
                                    <strong className={`text-${fire.color}-700 block`}>{fire.emoji} {fire.name}</strong>
                                    <span className="text-[10px] text-gray-600">{fire.text}</span>
                                </div>
                            ))}
                            <div className="col-span-2 bg-white p-2 shadow-sm text-center">
                                <strong className={`text-${t.chirala.color}-700 block`}>{t.chirala.emoji} {t.chirala.name}</strong>
                                <span className="text-[10px] text-gray-600">{t.chirala.text}</span>
                            </div>
                        </div>
                    </div>

                    {/* SUDDEN END & AFTERMATH */}
                    <div className="unity-card p-6 border-red-900 border-2 bg-white">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase text-red-900 flex items-center gap-2">
                            {t.endTitle} <XCircle className="w-6 h-6" />
                        </h3>

                        <div className="mb-4 bg-red-100 p-3 border-l-4 border-red-900">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-red-900 text-sm">{t.chauriChaura}</h4>
                                <span className="text-[10px] font-bold">{t.chauriDate}</span>
                            </div>
                            <p className="text-xs text-red-800">{t.chauriText}</p>
                            <div className="mt-2 text-xs bg-white p-2 border border-red-200 text-center font-bold">
                                {t.bardoli}
                            </div>
                            <p className="text-[10px] italic mt-1 text-center text-gray-600">{t.bardoliNote}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                            <div className="p-2 border border-gray-200">
                                <strong>{t.boseQuote}</strong>{t.boseQuoteText}
                            </div>
                            <div className="p-2 border border-gray-200">
                                <strong>{t.motilalQuote}</strong>{t.motilalQuoteText}
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-3 space-y-3">
                            <div className="flex items-start gap-2">
                                <Gavel className="w-4 h-4 text-gray-700 mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">{t.trialTitle}</h4>
                                    <p className="text-xs text-gray-600">{t.trialText}</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-2 text-center text-xs">
                                <strong>{t.gayaSplit}</strong>
                                <br />
                                <span className="text-[10px]">{t.gayaSplitText}</span>
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
