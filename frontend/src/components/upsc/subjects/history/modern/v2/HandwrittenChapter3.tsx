"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Anchor,
    Ship,
    Compass,
    Map as MapIcon,
    Scroll,
    History,
    Waves,
    Flag,
    ShoppingBag,
    Castle,
    Crosshair,
    Navigation,
    Quote,
    AlertCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch3Translations } from './translations/ch3';

export default function HandwrittenChapter3() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch3Translations.hi : ch3Translations.en;

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-navy selection:bg-sticky-yellow/40 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Patrick+Hand&display=swap');
                
                .handwritten-paper {
                    background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
                    background-attachment: local;
                }
                
                .nautical-notebook {
                    position: relative;
                    background-color: var(--paper-bg);
                    border: 2px solid var(--paper-text-navy);
                    box-shadow: 5px 5px 0px var(--paper-text-navy);
                }

                .coffee-stain {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle, rgba(139,69,19,0.1) 0%, rgba(139,69,19,0.05) 50%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }

                .marker-yellow {
                    background-color: var(--sticky-yellow);
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                    color: initial;
                }

                .spiced-orange { color: var(--paper-text-orange); }
                .ocean-blue { color: var(--paper-text-navy); }

                .ship-bullet {
                    display: inline-block;
                    margin-right: 8px;
                    color: var(--paper-text-orange);
                }

                .title-shadow {
                    text-shadow: 2px 2px 0px rgba(0,51,102,0.1);
                }

                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid var(--paper-border);
                }

                .body-handwritten {
                    font-family: 'Kalam', cursive;
                    line-height: 1.8;
                    color: var(--paper-text-gray);
                }

                .marker-label {
                    font-family: 'Permanent Marker', cursive;
                }
            `}</style>

            {/* Coffee Stains */}
            <div className="coffee-stain -top-10 -left-10 transform scale-150 opacity-40"></div>
            <div className="coffee-stain -bottom-10 -right-10 transform scale-125 opacity-30"></div>

            {/* HERO SECTION */}
            <header className="max-w-5xl mx-auto mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-4">
                        <Compass className="w-16 h-16 animate-spin-slow text-paper-orange" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Permanent_Marker'] ocean-blue mb-2 title-shadow tracking-tighter">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-paper-orange font-bold opacity-80 uppercase tracking-widest italic">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                <div className="mt-8 bg-paper p-6 paper-border border-2 border-dashed border-paper-navy max-w-2xl mx-auto transform rotate-1 shadow-sm">
                    <p className="text-lg leading-relaxed italic">
                        {t.heroQuote}
                        <span className="block text-right mt-2 font-bold">{t.heroQuoteAuthor}</span>
                    </p>
                </div>
            </header>

            {/* EUROPEAN SETTLEMENTS STRATEGIC OVERVIEW */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
                <div className="bg-paper p-8 paper-border border-2 border-paper-navy relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Anchor className="w-32 h-32" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] mb-6 ocean-blue">{t.strategicTitle}</h2>
                    <ul className="space-y-4 text-xl">
                        {t.strategic.map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="ship-bullet">⚓</span>
                                <span><strong>{item.bold}</strong> {item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-muted/10 p-8 paper-border border-2 border-border flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-muted/20 transition-colors">
                    <MapIcon className="w-20 h-20 text-muted-foreground group-hover:text-paper-navy transition-colors mb-4" />
                    <h3 className="marker-label text-2xl text-muted-foreground mb-2 font-['Permanent_Marker']">{t.mapTitle}</h3>
                    <p className="text-muted-foreground italic max-w-xs">{t.mapText}</p>
                    <Badge variant="outline" className="mt-4 border-paper-border">{t.mapBadge}</Badge>
                </div>
            </div>

            {/* THE BIG FOUR MASONRY GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 relative z-10">

                {/* 1. THE PORTUGUESE */}
                <section className="bg-paper p-8 paper-border border-b-8 border-r-8 border-paper-navy transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl font-['Permanent_Marker'] ocean-blue">{t.portTitle}</h2>
                        <span className="bg-paper-navy/20 text-paper-navy px-3 py-1 rounded-full text-sm font-bold">{t.portYears}</span>
                    </div>

                    <div className="space-y-6 text-lg">
                        <div className="bg-paper-navy/5 p-4 rounded-xl border-l-4 border-paper-navy">
                            <p className="font-bold flex items-center gap-2">
                                <Ship className="w-5 h-5" /> {t.portArrival}
                            </p>
                            <p><strong>Vasco da Gama</strong> {t.portArrivalText}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-paper paper-border border-paper-border/30 shadow-sm transform -rotate-1 text-inherit">
                                <CardContent className="p-4">
                                    <h4 className="font-bold border-b border-paper-border/30 mb-2 text-paper-navy">{t.almeidaTitle} <span className="text-xs italic opacity-70">{t.almeidaYears}</span></h4>
                                    <p className="text-sm opacity-90">{t.almeidaText}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-paper paper-border border-paper-border/30 shadow-sm transform rotate-1 text-inherit">
                                <CardContent className="p-4">
                                    <h4 className="font-bold border-b border-paper-border/30 mb-2 text-paper-navy">{t.albuquerqueTitle} <span className="text-xs italic opacity-70">{t.albuquerqueYears}</span></h4>
                                    <p className="text-sm opacity-90">{t.albuquerqueText}</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="p-4 bg-sticky-yellow/20 border-paper-border/30 border rounded-lg italic text-sm">
                            <span className="font-bold text-paper-orange">{t.culturalLegacy}</span>
                            {t.culturalItems.map((item, i) => (
                                <span key={i}><br />• {item}</span>
                            ))}
                        </div>

                        <div className="text-sm text-paper-red bg-sticky-pink/10 p-3 rounded border border-paper-border/20">
                            <strong>1632 {language === 'hi' ? 'संघर्ष' : 'Conflict'}:</strong> {t.conflictText}
                        </div>
                    </div>
                </section>

                {/* 2. THE DUTCH & THE DANES */}
                <div className="space-y-12">
                    {/* DUTCH */}
                    <section className="bg-paper p-8 paper-border border-b-8 border-r-8 border-paper-orange transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-['Permanent_Marker'] text-paper-orange">{t.dutchTitle}</h2>
                            <span className="bg-paper-orange/20 text-paper-orange px-3 py-1 rounded-full text-sm font-bold">{t.dutchYears}</span>
                        </div>
                        <p className="body-handwritten mb-4 text-lg">{t.dutchFocus}</p>

                        <div className="bg-paper/50 p-4 paper-border border-dashed border-paper-border mb-4">
                            <h4 className="marker-label text-sm uppercase mb-2 text-paper-gray opacity-60">{t.dutchCommoditiesTitle}</h4>
                            <div className="flex flex-wrap gap-2">
                                {t.dutchCommodities.map((item, i) => (
                                    <Badge key={i} className="bg-paper-gray hover:bg-paper-gray/80 text-paper">{item}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm border-l-4 border-paper-orange pl-4 py-2 bg-paper-orange/5 italic mb-4">
                            <span className="font-bold">{t.amboyna}</span>{t.amboynaText}
                        </div>

                        <p className="body-handwritten text-lg"><strong>{language === 'hi' ? 'अंतिम प्रहार:' : 'Final Blow:'}</strong> {t.dutchFinalBlow}</p>
                    </section>

                    {/* DANES Injection */}
                    <section className="bg-sticky-pink/10 p-6 paper-border border-2 border-paper-border/20 transform -rotate-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-paper border border-paper-border/20 flex items-center justify-center font-bold text-paper-red shadow-sm">
                                <Flag className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-paper-red marker-label tracking-tighter uppercase">{t.danesTitle}</h3>
                        </div>
                        <ul className="text-sm space-y-1 italic text-paper-red/80">
                            {t.danes.map((item, i) => (
                                <li key={i}>• <strong>{item.bold}</strong> {item.text}</li>
                            ))}
                            <li>• {t.danesSold}</li>
                        </ul>
                    </section>
                </div>

                {/* 3. THE ENGLISH */}
                <section className="lg:col-span-2 bg-paper p-10 paper-border border-b-8 border-r-8 border-paper-navy relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 translate-x-1/4">
                        <Ship className="w-96 h-96" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 text-inherit">
                        <h2 className="text-4xl font-['Permanent_Marker'] ocean-blue">{t.engTitle}</h2>
                        <div className="flex flex-col items-end">
                            <span className="bg-paper-navy/20 text-paper-navy px-4 py-1 rounded-full text-lg font-bold">{t.engYears}</span>
                            <span className="text-[10px] uppercase font-bold text-muted-foreground mt-1 opacity-70">{t.engCompany}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {/* Madras */}
                        <div className="bg-paper/50 p-6 paper-border border-2 border-paper-border/20 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-paper-navy/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-paper-navy text-xl mb-3">{t.madras}</h3>
                            <p className="body-handwritten text-lg leading-relaxed">{t.madrasText}</p>
                        </div>

                        {/* Bombay */}
                        <div className="bg-paper/50 p-6 paper-border border-2 border-paper-border/20 relative group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-paper-navy/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-paper-navy text-xl mb-3">{t.bombay}</h3>
                            <p className="body-handwritten text-lg leading-relaxed">{t.bombayText}</p>
                        </div>

                        {/* Calcutta */}
                        <div className="bg-paper/50 p-6 paper-border border-2 border-paper-border/20 relative group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-paper-navy/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-paper-navy text-xl mb-3">{t.calcutta}</h3>
                            <p className="body-handwritten text-lg leading-relaxed">{t.calcuttaText}</p>
                        </div>
                    </div>

                    {/* MAGNA CARTA & FARMANS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-paper-navy p-8 rounded-3xl text-paper">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-paper-orange">
                                <Scroll className="w-10 h-10" />
                                <h3 className="marker-label text-2xl font-['Permanent_Marker']">{t.magnaCarta}</h3>
                            </div>
                            <p className="body-handwritten text-xl text-paper-line leading-relaxed">
                                <span className="font-bold text-paper">{t.farmansName}</span> {t.magnaCartaText}
                            </p>
                            <div className="mt-4 flex gap-4 text-sm font-bold text-paper-orange opacity-80">
                                <span className="flex items-center gap-1"><CheckCircle2SVG className="w-3 h-3" /> {t.suratDutyFree}</span>
                                <span className="flex items-center gap-1"><CheckCircle2SVG className="w-3 h-3" /> {t.eicCoins}</span>
                            </div>
                        </div>
                        <div className="space-y-3 bg-paper/10 p-4 rounded-xl body-handwritten text-sm">
                            <p className="font-bold border-b border-paper-line/20 pb-1 uppercase tracking-widest text-paper-orange">{t.milestonesTitle}</p>
                            {t.milestones.map((m, i) => (
                                <p key={i}>• <span className="marker-yellow text-paper-gray">{m.year}</span> {m.text}</p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. THE FRENCH */}
                <section className="bg-paper p-8 paper-border border-b-8 border-r-8 border-paper-red transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl font-['Permanent_Marker'] text-paper-red">{t.frenchTitle}</h2>
                        <span className="bg-paper-red/20 text-paper-red px-3 py-1 rounded-full text-sm font-bold">{t.frenchYears}</span>
                    </div>

                    <div className="body-handwritten text-xl space-y-4 mb-8">
                        <p><strong>{t.frenchFormation}</strong> <em>{t.frenchFormationText}</em></p>
                        <p><strong>{t.frenchPondicherry}</strong> {t.frenchPondicherryText}</p>
                        <p className="bg-paper/50 p-4 rounded-xl border-l-4 border-paper-red">
                            <strong>{t.frenchDupleix}</strong> {t.frenchDupleixText}
                        </p>
                    </div>

                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-5 rotate-12 group-hover:scale-110 transition-transform">
                            <Crosshair className="w-20 h-20" />
                        </div>
                        <h4 className="marker-label text-slate-600 mb-2 uppercase text-xs font-bold tracking-widest">{t.frenchStrategy}</h4>
                        <p className="body-handwritten text-lg leading-relaxed italic">
                            {t.frenchStrategyText}
                        </p>
                    </div>
                </section>

                {/* ANGLO-FRENCH RIVALRY (Steps) */}
                <section className="bg-[#f0f9ff] p-8 paper-border border-2 border-blue-300 relative">
                    <div className="absolute top-4 right-4 flex gap-1">
                        <Waves className="w-8 h-8 text-blue-200" />
                        <Waves className="w-8 h-8 text-blue-300" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] ocean-blue mb-8">{t.carnaticTitle}</h2>

                    <div className="space-y-8 relative">
                        <div className="absolute left-6 top-8 bottom-4 w-px bg-paper-border/20"></div>

                        {/* First War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-paper-navy border-2 border-paper group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2">{t.war1Title} <span className="text-xs font-sans font-bold text-muted-foreground tracking-tighter opacity-70">{t.war1Years}</span></h3>
                            <p className="body-handwritten text-sm text-paper-gray opacity-80">{t.war1Text}</p>
                        </div>

                        {/* Second War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-paper-navy border-2 border-paper group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2">{t.war2Title} <span className="text-xs font-sans font-bold text-muted-foreground tracking-tighter opacity-70">{t.war2Years}</span></h3>
                            <p className="body-handwritten text-sm text-paper-gray opacity-80">{t.war2Text}</p>
                        </div>

                        {/* Third War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-paper-red border-2 border-paper group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2 text-paper-red uppercase italic">{t.war3Title} <span className="text-xs font-sans font-bold text-muted-foreground tracking-tighter opacity-70">{t.war3Years}</span></h3>
                            <p className="body-handwritten text-sm text-paper-gray opacity-80">{t.war3Text}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* COMPARISON AND FINAL ANALYSIS */}
            <section className="max-w-5xl mx-auto mb-20 text-inherit">
                <div className="bg-paper p-8 paper-border shadow-2xl overflow-hidden relative border-paper-navy border-b-8 border-r-8">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Navigation className="w-48 h-48" />
                    </div>
                    <h2 className="marker-label text-3xl mb-8 text-center text-paper-orange">{t.comparisonTitle}</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left body-handwritten text-lg border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-paper-gray text-sm uppercase tracking-widest marker-label opacity-60">
                                    {t.tableHeaders.map((h, i) => (
                                        <th key={i} className={`px-4 ${i > 0 ? 'text-center' : ''}`}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.tableRows.map((row, i) => (
                                    <tr key={i} className="bg-paper-navy/5 rounded-xl border border-paper-border/10">
                                        <td className="p-4 font-bold text-paper-navy">{row[0]}</td>
                                        <td className="p-4 text-center">{row[1]}</td>
                                        <td className="p-4 text-center">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <footer className="text-center pb-12 px-4">
                <div className="max-w-xs mx-auto flex flex-col items-center">
                    <div className="w-16 h-px bg-slate-300 mb-4"></div>
                    <p className="marker-label text-muted-foreground uppercase text-xs tracking-[0.3em] font-bold">{t.footerLog}</p>
                    <p className="body-handwritten italic text-muted-foreground text-sm mt-2">{t.footerArchive}</p>
                </div>
            </footer>
        </div>
    );
}

function CheckCircle2SVG({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
        </svg>
    );
}
