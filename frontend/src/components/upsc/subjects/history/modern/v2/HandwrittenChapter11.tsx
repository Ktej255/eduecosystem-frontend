"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Skull,
    Crosshair,
    MapPin,
    Globe,
    Ship,
    FileWarning,
    Fingerprint,
    Search,
    Siren,
    Bomb,
    Scroll,
    Stamp,
    Key
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch11Translations } from './translations/ch11';

export default function HandwrittenChapter11() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch11Translations.hi : ch11Translations.en;

    const [decoded, setDecoded] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-neutral-900 dark:bg-black p-4 md:p-8 font-['Courier_Prime',_monospace] text-gray-200 selection:bg-paper-red/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Special+Elite&family=Permanent+Marker&display=swap');
                
                .corkboard {
                    background-color: var(--paper-text-brown-dark);
                    background-image: url("https://www.transparenttextures.com/patterns/cork-board.png");
                    border: 8px solid #2a2118;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
                }

                .folder-paper {
                    background-color: var(--paper-bg);
                    color: var(--paper-text-gray);
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
                }

                .marker-font {
                    font-family: 'Permanent Marker', cursive;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .red-string {
                    border-top: 2px dashed var(--paper-text-red);
                    opacity: 0.6;
                    transform-origin: left;
                }

                .cipher-text {
                    letter-spacing: 2px;
                    transition: all 0.3s ease;
                }
                
                .cipher-text:hover {
                    color: var(--paper-text-red);
                    text-shadow: 0 0 5px var(--paper-text-red);
                }
            `}</style>

            {/* BACKGROUND TEXTURE OVERLAY */}
            <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] z-0"></div>

            {/* HEADER: TOP SECRET FILE */}
            <header className="max-w-6xl mx-auto mb-16 text-center relative z-10 pt-8">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block relative"
                >
                    <div className="absolute -top-6 -left-12 transform -rotate-12 border-4 border-paper-red text-paper-red px-4 py-1 text-xl font-bold uppercase marker-font opacity-80">
                        {t.classified}
                    </div>
                    <h1 className="typewriter-font text-5xl md:text-7xl font-bold mb-4 text-gray-100 tracking-tighter">
                        {t.headerTitle}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-paper-red font-bold tracking-widest uppercase">
                        <Siren className="w-6 h-6 animate-pulse" />
                        <span>{t.headerPhase}</span>
                        <Siren className="w-6 h-6 animate-pulse" />
                    </div>
                </motion.div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: DOMESTIC CELLS */}
                <div className="lg:col-span-4 space-y-8">

                    {/* MANIFESTO CARD */}
                    <div className="folder-paper p-6 transform rotate-1 relative text-inherit">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-paper-red shadow-md"></div>
                        <h3 className="marker-font text-2xl text-paper-red mb-2">{t.modusTitle}</h3>
                        <p className="text-sm font-bold mb-4 font-serif italic text-inherit">{t.modusQuote}</p>

                        <div className="space-y-3 text-sm text-inherit">
                            <div className="flex items-start gap-2">
                                <Bomb className="w-4 h-4 mt-1 text-inherit opacity-60" />
                                <span><strong>{t.strategyBold}</strong>{t.strategyText}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Scroll className="w-4 h-4 mt-1 text-inherit opacity-60" />
                                <span><strong>{t.bibleBold}</strong>{t.bibleText}</span>
                            </div>
                            <div className="bg-paper-red/10 p-2 border border-paper-red/30 relative mt-2 text-inherit">
                                <div className="absolute -right-2 -top-2 bg-paper-red text-paper-bg text-[10px] px-1 font-bold">{t.fundingLabel}</div>
                                <strong>{t.fundingBold}</strong>
                                <br />
                                <span className="text-xs opacity-80">{t.fundingText}</span>
                            </div>
                        </div>
                    </div>

                    {/* DOMESTIC MAP BOARD */}
                    <div className="corkboard p-6 rounded-lg relative min-h-[500px]">
                        <h3 className="typewriter-font text-xl text-orange-100 mb-6 border-b border-orange-100/30 pb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5" /> {t.domesticTitle}
                        </h3>

                        <div className="space-y-6">
                            {/* MAHARASHTRA */}
                            <div className="bg-paper text-paper-gray p-3 rounded shadow-lg relative transform -rotate-1 hover:scale-105 transition-transform border border-paper-border/20">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-paper-red"></div>
                                <h4 className="font-bold text-sm uppercase text-paper-red">{t.maharashtraTitle}</h4>
                                <ul className="text-xs space-y-1 mt-1 opacity-80">
                                    {t.maharashtraItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* BENGAL */}
                            <div className="bg-paper text-paper-gray p-3 rounded shadow-lg relative transform rotate-2 hover:scale-105 transition-transform ml-4 border border-paper-border/20">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-paper-red"></div>
                                <h4 className="font-bold text-sm uppercase text-paper-red">{t.bengalTitle}</h4>
                                <ul className="text-xs space-y-1 mt-1 opacity-80">
                                    {t.bengalItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* DELHI/PUNJAB */}
                            <div className="bg-paper text-paper-gray p-3 rounded shadow-lg relative transform -rotate-1 hover:scale-105 transition-transform border border-paper-border/20">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-paper-red"></div>
                                <h4 className="font-bold text-sm uppercase text-paper-red">{t.delhiTitle}</h4>
                                <p className="text-xs mt-1 opacity-80">{t.delhiText}</p>
                                <div className="flex gap-2 mt-1">
                                    {t.delhiBadges.map((b, i) => (
                                        <Badge key={i} variant={b.variant as any} className="text-[10px] bg-paper-navy text-paper-bg">{b.text}</Badge>
                                    ))}
                                </div>
                            </div>

                            {/* MADRAS */}
                            <div className="bg-paper text-paper-gray p-3 rounded shadow-lg relative transform rotate-1 hover:scale-105 transition-transform ml-8 border border-paper-border/20">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-paper-red"></div>
                                <h4 className="font-bold text-sm uppercase text-paper-red">{t.madrasTitle}</h4>
                                <p className="text-xs mt-1 opacity-80"><strong>{t.madrasText}</strong></p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN: GLOBAL WEB & WANTED */}
                <div className="lg:col-span-5 space-y-8">

                    {/* GHADAR POSTER */}
                    <div className="folder-paper p-8 text-center relative overflow-hidden border-4 border-double border-paper-border text-inherit">
                        <div className="absolute top-0 right-0 bg-paper-red text-paper-bg text-xs font-bold px-4 py-1 rotate-45 transform translate-x-4 translate-y-4">{t.ghadarSeditious}</div>

                        <h2 className="typewriter-font text-5xl font-black mb-2 tracking-tighter text-paper-red">{t.ghadarTitle}</h2>
                        <p className="text-sm font-bold uppercase tracking-widest text-paper-gray opacity-40 mb-6">{t.ghadarPlace}</p>

                        <div className="grid grid-cols-2 gap-4 text-left text-xs mb-6 text-inherit">
                            <div className="border p-2 border-paper-border/20">
                                <strong className="text-paper-gray">{t.ghadarHQ}</strong><span className="opacity-80">{t.ghadarHQVal}</span>
                            </div>
                            <div className="border p-2 border-paper-border/20">
                                <strong className="text-paper-gray">{t.ghadarJournal}</strong><span className="opacity-80">{t.ghadarJournalVal}</span>
                            </div>
                        </div>

                        <div className="bg-neutral-800 dark:bg-black text-white p-4 rounded relative border border-white/10">
                            <div className="absolute -top-3 left-4 bg-paper-orange text-paper-bg px-2 text-[10px] font-bold">{t.ghadarOperatives}</div>
                            <ul className="text-sm space-y-1">
                                {t.ghadarMembers.map((m, i) => (
                                    <li key={i}>• {m}</li>
                                ))}
                                <li>• <span className="text-paper-orange font-bold font-marker">{t.ghadarHero}</span>{t.ghadarHeroRole}</li>
                            </ul>
                        </div>

                        <div className="mt-4 bg-paper-red/10 p-2 text-xs border border-paper-red/30 text-paper-red">
                            <strong>{t.ghadarFailure}</strong>{t.ghadarTraitor}
                        </div>
                    </div>

                    {/* KOMAGATA MARU FILE */}
                    <div className="folder-paper p-6 relative bg-paper shadow-lg rotate-1 text-inherit">
                        <div className="flex items-center gap-4 mb-4 border-b border-paper-border/20 pb-2">
                            <Ship className="w-10 h-10 text-paper-navy" />
                            <div>
                                <h3 className="font-bold text-xl text-paper-navy">{t.komagataTitle}</h3>
                                <p className="text-xs italic opacity-60 text-inherit">{t.komagataSubtitle}</p>
                            </div>
                        </div>
                        <ul className="text-sm space-y-2 list-disc ml-4 text-inherit opacity-80">
                            {t.komagataItems.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* BERLIN & KABUL */}
                    <div className="bg-neutral-800 dark:bg-black text-slate-200 p-6 rounded border border-white/10 relative text-inherit">
                        <div className="absolute top-4 right-4 text-muted-foreground">
                            <Globe className="w-12 h-12 opacity-20" />
                        </div>
                        <h3 className="typewriter-font text-xl text-paper-orange mb-4">{t.intlTitle}</h3>

                        <div className="space-y-4 text-sm text-inherit">
                            <div className="border-l-2 border-paper-orange pl-4">
                                <strong className="text-paper-orange opacity-80">{t.zimTitle}</strong>
                                <p className="text-xs mt-1 text-muted-foreground">{t.zimText}</p>
                            </div>

                            <div className="border-l-2 border-paper-green pl-4">
                                <strong className="text-paper-green opacity-80">{t.kabulTitle}</strong>
                                <p className="text-xs mt-1 text-muted-foreground">{t.kabulText}</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: WANTED & SECRET */}
                <div className="lg:col-span-3 space-y-6">

                    {/* KHUDIRAM WANTED POSTER */}
                    <div className="bg-paper text-paper-gray p-4 text-center border-4 border-paper-gray/20 shadow-xl relative text-inherit">
                        <div className="border-b-2 border-paper-gray/20 mb-2 pb-1">
                            <h4 className="font-black text-3xl uppercase tracking-tighter scale-y-125 text-paper-gray">{t.wantedTitle}</h4>
                            <p className="text-xs font-bold uppercase opacity-60">{t.deadOrAlive}</p>
                        </div>
                        <div className="w-24 h-24 bg-paper-border/20 mx-auto mb-2 grayscale flex items-center justify-center border-2 border-paper-border/40">
                            <Skull className="w-12 h-12 opacity-30 text-paper-gray" />
                        </div>
                        <h3 className="font-bold text-xl uppercase text-paper-gray">{t.khudiramName}</h3>
                        <p className="text-xs font-mono mt-1 opacity-60">{t.khudiramAge}</p>
                        <p className="text-xs font-mono opacity-60">{t.khudiramCrime}</p>
                        <div className="mt-2 transform -rotate-12 border-2 border-paper-red text-paper-red font-bold px-2 py-1 inline-block text-xl opacity-80">
                            {t.khudiramFate}
                        </div>
                    </div>

                    {/* RASHBEHARI ESCAPED */}
                    <div className="bg-paper text-paper-gray p-4 text-center border-4 border-paper-navy/20 shadow-xl relative text-inherit">
                        <div className="border-b-2 border-paper-navy/20 mb-2 pb-1">
                            <h4 className="font-black text-3xl uppercase tracking-tighter scale-y-125 text-paper-navy opacity-60">{t.escapedTitle}</h4>
                        </div>
                        <div className="w-24 h-24 bg-paper-border/20 mx-auto mb-2 grayscale flex items-center justify-center border-2 border-paper-border/40">
                            <UserUnknown className="w-12 h-12 opacity-30 text-paper-gray" />
                        </div>
                        <h3 className="font-bold text-xl uppercase text-paper-gray">{t.rashbehariName}</h3>
                        <div className="text-left text-xs mt-2 space-y-1 font-mono bg-paper-border/10 p-2 border border-paper-border/20 text-inherit">
                            {t.rashbehariDetails.map((d, i) => (
                                <p key={i} className="opacity-80"><strong>{d.bold}</strong>{d.text}</p>
                            ))}
                        </div>
                    </div>

                    {/* SILK LETTER CONSPIRACY */}
                    <div className="bg-paper-orange/10 p-4 border border-paper-orange/30 relative shadow text-inherit">
                        <div className="absolute -top-2 -right-2 transform rotate-12">
                            <Stamp className="w-8 h-8 text-paper-orange opacity-40" />
                        </div>
                        <h4 className="font-bold text-sm uppercase text-paper-orange mb-2">{t.silkTitle}</h4>
                        <p className="text-xs opacity-70 mb-2">{t.silkText}</p>
                        <div className="text-[10px] bg-paper-orange/10 p-1 rounded font-mono border border-paper-orange/20 text-inherit">
                            {t.silkLeaders}
                        </div>
                    </div>

                    {/* AFTERMATH */}
                    <div className="bg-paper-red text-paper-bg p-4 border-l-4 border-paper-red/50 text-inherit">
                        <h4 className="font-bold text-sm uppercase mb-2 flex items-center gap-2 text-paper-bg">
                            <FileWarning className="w-4 h-4 text-paper-bg" /> {t.aftermathTitle}
                        </h4>
                        <ul className="text-xs space-y-2 text-inherit opacity-90">
                            {t.aftermathItems.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

function UserUnknown({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <line x1="8" y1="11" x2="16" y2="11" />
        </svg>
    )
}
