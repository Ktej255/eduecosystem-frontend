"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Feather,
    Glasses,
    Footprints,
    Leaf,
    Users,
    AlertTriangle,
    Scale,
    Scroll,
    PenTool,
    BookOpen,
    Megaphone
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch13Translations } from './translations/ch13';

export default function HandwrittenChapter13() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch13Translations.hi : ch13Translations.en;

    return (
        <div className="min-h-screen bg-[#fcfbf7] p-4 md:p-8 font-['Merriweather',_serif] text-gray-900 selection:bg-indigo-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Merriweather:wght@300;400;700&family=Caveat:wght@700&display=swap');
                
                .khadi-bg {
                    background-color: #fcfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .handwritten-font {
                    font-family: 'Cedarville Cursive', cursive;
                }

                .caveat-font {
                    font-family: 'Caveat', cursive;
                }

                .khadi-card {
                    background-color: #ffffff;
                    border: 1px solid #e5e5e5;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    transition: transform 0.2s;
                }
                .khadi-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
                }

                .indigo-ink { color: #4B0082; }
                .earth-brown { color: #8B4513; }
                .blood-red { color: #8B0000; }
                
                .splatter {
                    background: radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
                }

                .thread-line {
                    border-left: 2px dashed #a0a0a0;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] z-0"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 dashed border-gray-400 z-0 opacity-30 transform -translate-x-1/2"></div>

            {/* HEADER: ASHRAM DIARY */}
            <header className="max-w-4xl mx-auto mb-16 text-center relative z-10 bg-white/90 p-8 shadow-sm border-b-4 border-indigo-900 rounded-sm">
                <div className="absolute top-4 right-4 animate-spin-slow opacity-20">
                    <div className="w-12 h-12 border-4 border-indigo-900 rounded-full border-t-transparent"></div>
                </div>

                <h2 className="handwritten-font text-3xl text-gray-500 mb-2 transform -rotate-2">{t.diaryTitle}</h2>
                <h1 className="caveat-font text-6xl md:text-7xl font-bold mb-4 text-indigo-900 leading-tight">{t.headerTitle}</h1>
                <p className="text-xl md:text-2xl text-gray-700 italic font-serif">{t.headerQuote}</p>

                <div className="mt-8 flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                    {t.timelinePills.map((pill, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full border ${pill.style === 'gray' ? 'bg-gray-200 border-gray-400' :
                                pill.style === 'indigo' ? 'bg-indigo-100 text-indigo-900 border-indigo-200' :
                                    'bg-red-100 text-red-900 border-red-200'
                            }`}>{pill.text}</span>
                    ))}
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                {/* LEFT COLUMN: RETURN, IDEOLOGY, TRIO */}
                <div className="space-y-8">

                    {/* RETURN & ASHRAMS */}
                    <div className="khadi-card p-6 border-l-4 border-indigo-500 relative">
                        <div className="flex items-center gap-4 mb-4">
                            <Footprints className="w-8 h-8 text-indigo-700" />
                            <h3 className="text-2xl font-bold indigo-ink font-serif">{t.returnTitle}</h3>
                        </div>
                        <p className="text-sm mb-4">Celebrated as <strong>{t.returnPravasi}</strong>.</p>

                        <div className="bg-gray-50 p-4 border border-gray-200 mb-4 text-sm rounded italic text-gray-700">
                            {t.gokhaleQuote} <br />
                            <span className="text-xs font-bold not-italic mt-1 block">{t.gokhaleBy}</span>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <div className="min-w-[4px] h-[4px] bg-indigo-500 rounded-full mt-2"></div>
                                <span><strong>{t.ashramsBold}</strong>{t.ashramsText}</span>
                            </div>
                            <div className="bg-indigo-50 p-3 border border-indigo-200 relative mt-2 rounded">
                                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">{t.debutTag}</span>
                                <h4 className="font-bold text-indigo-900">{t.bhuTitle}</h4>
                                <p className="text-xs mt-1">{t.bhuText}</p>
                            </div>
                        </div>
                    </div>

                    {/* IDEOLOGY CONCEPT CARD */}
                    <div className="khadi-card p-6 bg-[#fcfcfc]">
                        <h3 className="caveat-font text-3xl font-bold mb-4 text-center">{t.ideologyTitle}</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-center">
                            {t.ideologyConcepts.map((c, i) => (
                                <div key={i} className={`p-3 bg-${c.color}-50 border border-${c.color}-200 rounded`}>
                                    <strong className={`block mb-1 text-${c.color}-900`}>{c.name}</strong>
                                    <span className="text-xs">{c.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* EARLY TRIO (CAKE) */}
                    <div className="khadi-card p-0 overflow-hidden border-t-4 border-yellow-700">
                        <div className="bg-yellow-700 text-white p-3 text-center font-bold tracking-widest uppercase">
                            {t.cakeTitle}
                        </div>

                        <div className="p-6 space-y-6">
                            {/* CHAMPARAN */}
                            <div className="relative pl-6 border-l-2 border-indigo-300">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-indigo-900">{t.champaran.title}</h4>
                                <div className="text-[10px] font-bold uppercase text-indigo-500 mb-2">{t.champaran.tag}</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    {t.champaran.items.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.champaran.outcomeBold}</strong> <span className="bg-green-100 px-1 font-bold text-green-800">{t.champaran.outcomeHighlight}</span>{t.champaran.outcomeText}</li>
                                </ul>
                            </div>

                            {/* AHMEDABAD */}
                            <div className="relative pl-6 border-l-2 border-yellow-400">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-600 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-yellow-900">{t.ahmedabad.title}</h4>
                                <div className="text-[10px] font-bold uppercase text-yellow-600 mb-2">{t.ahmedabad.tag}</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    {t.ahmedabad.items.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.ahmedabad.allyBold}</strong> <span className="font-bold">{t.ahmedabad.allyName}</span>{t.ahmedabad.allyNote}</li>
                                    <li><strong>{t.ahmedabad.resultBold}</strong>{t.ahmedabad.resultText}</li>
                                </ul>
                            </div>

                            {/* KHEDA */}
                            <div className="relative pl-6 border-l-2 border-green-600">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-700 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-green-900">{t.kheda.title}</h4>
                                <div className="text-[10px] font-bold uppercase text-green-600 mb-2">{t.kheda.tag}</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    {t.kheda.items.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.kheda.leadersBold}</strong> <span className="font-bold">{t.kheda.leadersName}</span>{t.kheda.leadersText}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: 1919 FLASHPOINT & AFTERMATH */}
                <div className="space-y-8 md:mt-16">

                    {/* JALLIANWALA BAGH */}
                    <div className="khadi-card p-6 border-2 border-red-100 relative overflow-hidden">
                        {/* Blood splatter effect */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-6 text-red-900 uppercase flex items-center gap-2">
                            {t.turningTitle}
                        </h3>

                        <div className="bg-gray-100 p-4 mb-6 border-l-4 border-black relative shadow-inner">
                            <h4 className="font-bold text-sm uppercase flex justify-between items-center">
                                {t.blackAct}
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                            </h4>
                            <p className="text-xs italic mt-1 text-gray-600">{t.blackActQuote}</p>

                            <div className="mt-3 pt-3 border-t border-gray-300">
                                <p className="text-xs"><strong>{t.responseBold}</strong>{t.responseText}<span className="font-bold">{t.responseDate}</span>{t.responseEnd}</p>
                                <p className="text-xs mt-1">{t.strikeText}<span className="font-bold text-indigo-800">{t.satyagrahaSabha}</span>.</p>
                                <p className="text-[10px] mt-2 text-red-600 font-bold bg-white px-1 inline-block border border-red-200">
                                    {t.himalayanText}
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-5 border border-red-300 relative rounded-sm">
                            <h4 className="font-bold text-xl text-red-900 mb-1">{t.massacreTitle}</h4>
                            <div className="text-[10px] font-bold uppercase mb-3 text-red-700 tracking-wider">
                                {t.massacreDate}
                            </div>

                            <ul className="text-sm space-y-2 mb-4 text-gray-800">
                                {t.massacreItems.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>

                            <div className="text-xs border-t border-red-200 pt-3 flex gap-4">
                                <div>
                                    <strong>{t.renunciations}</strong><br />
                                    {t.tagoreRenounce}<br />
                                    {t.gandhiRenounce}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-black text-white p-3 text-center text-xs rounded shadow">
                            <span className="font-bold text-red-500 uppercase tracking-widest">{t.justiceRetired}</span>
                            <br />
                            <strong>{t.udhamSingh}</strong>{t.udhamAlias}
                        </div>
                    </div>

                    {/* AFTERMATH & MEDIA */}
                    <div className="khadi-card p-6 bg-[#f8f8f8]">
                        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-b border-gray-300 pb-2">{t.aftermathTitle}</h3>

                        <div className="space-y-4">
                            <div className="text-sm">
                                <strong className="text-blue-800 block mb-1">{t.hunterTitle}</strong>
                                <ul className="text-xs list-disc ml-4 text-gray-600 space-y-1">
                                    <li><strong>{t.hunterMembers}</strong>{t.hunterMembersText}</li>
                                    <li><strong>{t.hunterVerdict}</strong>{t.hunterVerdictText}</li>
                                </ul>
                            </div>

                            <div className="text-sm border-t border-gray-200 pt-2">
                                <strong className="text-indigo-800 block mb-1">{t.congressInquiry}</strong>
                                <p className="text-xs text-gray-600 ml-4">{t.congressInquiryText}</p>
                            </div>

                            <div className="bg-yellow-50 p-3 border border-yellow-200 rounded mt-2">
                                <h4 className="font-bold text-sm uppercase text-yellow-900">{t.actTitle}</h4>
                                <p className="text-xs mt-1"><strong>{t.montaguBold}</strong>{t.montaguText}<span className="font-bold bg-yellow-200 px-1">{t.dyarchy}</span>{t.dyarchyText}</p>
                                <p className="text-[10px] italic mt-1 text-gray-500">{t.dyarchyNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* MEDIA & ASSOCIATES */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="khadi-card p-4 text-center">
                            <Megaphone className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                            <h4 className="font-bold text-sm uppercase">{t.journalsTitle}</h4>
                            <p className="text-xs mt-1"><em>{t.youngIndia}</em>{t.youngIndiaLang}</p>
                            <p className="text-xs"><em>{t.navajivan}</em>{t.navajivanLang}</p>
                        </div>
                        <div className="khadi-card p-4 text-center">
                            <Users className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                            <h4 className="font-bold text-sm uppercase">{t.keyAssociate}</h4>
                            <p className="text-xs mt-1 font-bold">{t.sarojiniName}</p>
                            <p className="text-[10px]">{t.sarojiniNote}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hidden">Audio Cue: Sound of Charkha spinning in background.</div>
        </div>
    );
}
