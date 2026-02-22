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
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Merriweather',_serif] text-paper-gray selection:bg-paper-indigo/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Merriweather:wght@300;400;700&family=Caveat:wght@700&display=swap');
                
                .khadi-bg {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .handwritten-font {
                    font-family: 'Cedarville Cursive', cursive;
                }

                .caveat-font {
                    font-family: 'Caveat', cursive;
                }

                .khadi-card {
                    background-color: var(--paper-bg);
                    border: 1px solid var(--paper-border);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    transition: transform 0.2s;
                }
                .khadi-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
                }

                .indigo-ink { color: var(--paper-indigo); }
                .earth-brown { color: var(--paper-orange); }
                .blood-red { color: var(--paper-red); }
                
                .splatter {
                    background: radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
                }

                .thread-line {
                    border-left: 2px dashed #a0a0a0;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] z-0"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 dashed border-paper-border z-0 opacity-30 transform -translate-x-1/2"></div>

            {/* HEADER: ASHRAM DIARY */}
            <header className="max-w-4xl mx-auto mb-16 text-center relative z-10 bg-paper/90 p-8 shadow-sm border-b-4 border-paper-indigo rounded-sm text-inherit">
                <div className="absolute top-4 right-4 animate-spin-slow opacity-20">
                    <div className="w-12 h-12 border-4 border-paper-indigo rounded-full border-t-transparent"></div>
                </div>

                <h2 className="handwritten-font text-3xl text-paper-gray opacity-50 mb-2 transform -rotate-2">{t.diaryTitle}</h2>
                <h1 className="caveat-font text-6xl md:text-7xl font-bold mb-4 text-paper-indigo leading-tight">{t.headerTitle}</h1>
                <p className="text-xl md:text-2xl text-paper-gray italic font-serif opacity-80">{t.headerQuote}</p>

                <div className="mt-8 flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                    {t.timelinePills.map((pill, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full border ${pill.style === 'gray' ? 'bg-paper-border/20 border-paper-border/40 text-paper-gray' :
                            pill.style === 'indigo' ? 'bg-paper-indigo/10 text-paper-indigo border-paper-indigo/20' :
                                'bg-paper-red/10 text-paper-red border-paper-red/20'
                            }`}>{pill.text}</span>
                    ))}
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                {/* LEFT COLUMN: RETURN, IDEOLOGY, TRIO */}
                <div className="space-y-8">

                    {/* RETURN & ASHRAMS */}
                    <div className="khadi-card p-6 border-l-4 border-paper-indigo relative text-inherit">
                        <div className="flex items-center gap-4 mb-4">
                            <Footprints className="w-8 h-8 text-paper-indigo opacity-70" />
                            <h3 className="text-2xl font-bold text-paper-indigo font-serif">{t.returnTitle}</h3>
                        </div>
                        <p className="text-sm mb-4">Celebrated as <strong>{t.returnPravasi}</strong>.</p>

                        <div className="bg-paper-border/5 p-4 border border-paper-border/20 mb-4 text-sm rounded italic text-paper-gray opacity-80">
                            {t.gokhaleQuote} <br />
                            <span className="text-xs font-bold not-italic mt-1 block opacity-100">{t.gokhaleBy}</span>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <div className="min-w-[4px] h-[4px] bg-paper-indigo rounded-full mt-2"></div>
                                <span className="opacity-80"><strong>{t.ashramsBold}</strong>{t.ashramsText}</span>
                            </div>
                            <div className="bg-paper-indigo/10 p-3 border border-paper-indigo/20 relative mt-2 rounded">
                                <span className="absolute -top-2 -right-2 bg-paper-indigo text-paper-bg text-[10px] px-2 py-0.5 rounded font-bold">{t.debutTag}</span>
                                <h4 className="font-bold text-paper-indigo">{t.bhuTitle}</h4>
                                <p className="text-xs mt-1 opacity-70">{t.bhuText}</p>
                            </div>
                        </div>
                    </div>

                    {/* IDEOLOGY CONCEPT CARD */}
                    <div className="khadi-card p-6 bg-paper text-inherit">
                        <h3 className="caveat-font text-3xl font-bold mb-4 text-center">{t.ideologyTitle}</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-center">
                            {t.ideologyConcepts.map((c, i) => (
                                <div key={i} className={`p-3 bg-paper-${c.color}/10 border border-paper-${c.color}/20 rounded`}>
                                    <strong className={`block mb-1 text-paper-${c.color}`}>{c.name}</strong>
                                    <span className="text-xs opacity-70">{c.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* EARLY TRIO (CAKE) */}
                    <div className="khadi-card p-0 overflow-hidden border-t-4 border-paper-orange text-inherit">
                        <div className="bg-paper-orange text-paper-bg p-3 text-center font-bold tracking-widest uppercase">
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
                                    <li><strong>{t.champaran.outcomeBold}</strong> <span className="bg-paper-green/20 px-1 font-bold text-paper-green border border-paper-green/20">{t.champaran.outcomeHighlight}</span>{t.champaran.outcomeText}</li>
                                </ul>
                            </div>

                            {/* AHMEDABAD */}
                            <div className="relative pl-6 border-l-2 border-paper-orange/40 text-inherit">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-paper-orange border-2 border-paper-bg"></div>
                                <h4 className="font-bold text-xl text-paper-orange">{t.ahmedabad.title}</h4>
                                <div className="text-[10px] font-bold uppercase text-paper-orange opacity-70 mb-2">{t.ahmedabad.tag}</div>
                                <ul className="text-sm space-y-1 opacity-80">
                                    {t.ahmedabad.items.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.ahmedabad.allyBold}</strong> <span className="font-bold">{t.ahmedabad.allyName}</span>{t.ahmedabad.allyNote}</li>
                                    <li><strong>{t.ahmedabad.resultBold}</strong>{t.ahmedabad.resultText}</li>
                                </ul>
                            </div>

                            {/* KHEDA */}
                            <div className="relative pl-6 border-l-2 border-paper-green/40 text-inherit">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-paper-green border-2 border-paper-bg"></div>
                                <h4 className="font-bold text-xl text-paper-green">{t.kheda.title}</h4>
                                <div className="text-[10px] font-bold uppercase text-paper-green opacity-70 mb-2">{t.kheda.tag}</div>
                                <ul className="text-sm space-y-1 opacity-80">
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
                    <div className="khadi-card p-6 border-2 border-paper-red/10 relative overflow-hidden text-inherit">
                        {/* Blood splatter effect */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-paper-red/10 rounded-full blur-xl pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-6 text-paper-red uppercase flex items-center gap-2">
                            {t.turningTitle}
                        </h3>

                        <div className="bg-paper-border/5 p-4 mb-6 border-l-4 border-paper-border relative shadow-inner text-inherit">
                            <h4 className="font-bold text-sm uppercase flex justify-between items-center text-paper-red">
                                {t.blackAct}
                                <AlertTriangle className="w-4 h-4" />
                            </h4>
                            <p className="text-xs italic mt-1 opacity-60 font-serif">{t.blackActQuote}</p>

                            <div className="mt-3 pt-3 border-t border-paper-border/20">
                                <p className="text-xs opacity-80"><strong>{t.responseBold}</strong>{t.responseText}<span className="font-bold">{t.responseDate}</span>{t.responseEnd}</p>
                                <p className="text-xs mt-1 opacity-80">{t.strikeText}<span className="font-bold text-paper-indigo">{t.satyagrahaSabha}</span>.</p>
                                <p className="text-[10px] mt-2 text-paper-red font-bold bg-paper px-1 inline-block border border-paper-red/20">
                                    {t.himalayanText}
                                </p>
                            </div>
                        </div>

                        <div className="bg-paper-red/5 p-5 border border-paper-red/20 relative rounded-sm text-inherit">
                            <h4 className="font-bold text-xl text-paper-red mb-1">{t.massacreTitle}</h4>
                            <div className="text-[10px] font-bold uppercase mb-3 text-paper-red opacity-80 tracking-wider">
                                {t.massacreDate}
                            </div>

                            <ul className="text-sm space-y-2 mb-4 opacity-80">
                                {t.massacreItems.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>

                            <div className="text-xs border-t border-paper-red/20 pt-3 flex gap-4 text-inherit">
                                <div>
                                    <strong className="text-paper-red">{t.renunciations}</strong><br />
                                    {t.tagoreRenounce}<br />
                                    {t.gandhiRenounce}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-neutral-900 dark:bg-black text-white p-3 text-center text-xs rounded shadow">
                            <span className="font-bold text-paper-red uppercase tracking-widest">{t.justiceRetired}</span>
                            <br />
                            <strong>{t.udhamSingh}</strong>{t.udhamAlias}
                        </div>
                    </div>

                    {/* AFTERMATH & MEDIA */}
                    <div className="khadi-card p-6 bg-paper text-inherit">
                        <h3 className="text-xl font-bold mb-4 uppercase text-paper-gray opacity-60 border-b border-paper-border/20 pb-2">{t.aftermathTitle}</h3>

                        <div className="space-y-4">
                            <div className="text-sm">
                                <strong className="text-paper-indigo block mb-1">{t.hunterTitle}</strong>
                                <ul className="text-xs list-disc ml-4 opacity-70 space-y-1">
                                    <li><strong>{t.hunterMembers}</strong>{t.hunterMembersText}</li>
                                    <li><strong>{t.hunterVerdict}</strong>{t.hunterVerdictText}</li>
                                </ul>
                            </div>

                            <div className="text-sm border-t border-paper-border/20 pt-2">
                                <strong className="text-paper-indigo block mb-1">{t.congressInquiry}</strong>
                                <p className="text-xs opacity-70 ml-4">{t.congressInquiryText}</p>
                            </div>

                            <div className="bg-paper-orange/10 p-3 border border-paper-orange/20 rounded mt-2">
                                <h4 className="font-bold text-sm uppercase text-paper-orange">{t.actTitle}</h4>
                                <p className="text-xs mt-1"><strong>{t.montaguBold}</strong>{t.montaguText}<span className="font-bold bg-paper-orange/20 px-1 text-paper-orange">{t.dyarchy}</span>{t.dyarchyText}</p>
                                <p className="text-[10px] italic mt-1 opacity-50">{t.dyarchyNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* MEDIA & ASSOCIATES */}
                    <div className="grid grid-cols-2 gap-4 text-inherit">
                        <div className="khadi-card p-4 text-center">
                            <Megaphone className="w-6 h-6 mx-auto text-paper-gray opacity-40 mb-2" />
                            <h4 className="font-bold text-sm uppercase text-paper-gray">{t.journalsTitle}</h4>
                            <p className="text-xs mt-1 opacity-80"><em>{t.youngIndia}</em>{t.youngIndiaLang}</p>
                            <p className="text-xs opacity-80"><em>{t.navajivan}</em>{t.navajivanLang}</p>
                        </div>
                        <div className="khadi-card p-4 text-center">
                            <Users className="w-6 h-6 mx-auto text-paper-gray opacity-40 mb-2" />
                            <h4 className="font-bold text-sm uppercase text-paper-gray">{t.keyAssociate}</h4>
                            <p className="text-xs mt-1 font-bold text-paper-indigo">{t.sarojiniName}</p>
                            <p className="text-[10px] opacity-70">{t.sarojiniNote}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hidden">Audio Cue: Sound of Charkha spinning in background.</div>
        </div>
    );
}
