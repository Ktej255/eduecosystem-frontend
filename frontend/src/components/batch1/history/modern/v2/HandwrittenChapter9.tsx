"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    PenTool as FountainPen,
    Scale,
    Mic,
    Scroll,
    Newspaper,
    Gavel,
    Users,
    Globe,
    AlertTriangle,
    TrendingUp,
    BookOpen,
    Quote,
    Landmark,
    Stamp,
    Flag,
    AlertCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch9Translations } from './translations/ch9';

export default function HandwrittenChapter9() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch9Translations.hi : ch9Translations.en;

    const [theory, setTheory] = useState<'safety' | 'lightning'>('safety');

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Merriweather',_serif] text-paper-gray selection:bg-paper-navy/20 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Special+Elite&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                
                .newsprint {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
                    border: 1px solid var(--paper-border);
                    box-shadow: 2px 2px 10px var(--paper-border);
                }

                .headline-font {
                    font-family: 'Playfair Display', serif;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .congress-blue { color: var(--paper-text-navy); }
                .ink-black { color: var(--paper-text-gray); }
                
                .sepia-img {
                    filter: sepia(0.6) contrast(1.1);
                }

                .column-rule {
                    column-count: 1;
                }
                @media (min-width: 1024px) {
                    .column-rule {
                        column-count: 2;
                        column-gap: 40px;
                        column-rule: 1px solid var(--paper-border);
                    }
                }
            `}</style>

            {/* HEADER: THE BOMBAY GAZETTE */}
            <header className="max-w-6xl mx-auto mb-16 text-center border-b-4 border-double border-paper-border pb-8 text-inherit">
                <div className="flex justify-between items-end border-b border-paper-border pb-2 mb-4">
                    <span className="typewriter-font text-xs uppercase tracking-widest opacity-60">{t.vol}</span>
                    <span className="typewriter-font text-xs uppercase tracking-widest opacity-60">{t.datePlace}</span>
                    <span className="typewriter-font text-xs uppercase tracking-widest opacity-60">{t.price}</span>
                </div>
                <h1 className="headline-font text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-4 text-paper-gray">
                    {t.headerTitle}
                </h1>
                <p className="text-xl md:text-3xl font-serif italic text-paper-gray opacity-70">
                    {t.headerSubtitle}
                </p>
            </header>

            {/* SECTION 1: THE CATALYST (WHY NATIONALISM?) */}
            <section className="max-w-7xl mx-auto mb-24 newsprint p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Scale className="w-64 h-64" />
                </div>
                <h2 className="headline-font text-4xl font-bold mb-8 flex items-center gap-4 border-b-2 border-paper-border/20 pb-2">
                    <span className="text-paper-red">{t.catalystEditorial}</span> {t.catalystTitle}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{t.adminTitle}</h3>
                        <p className="text-lg leading-relaxed mb-6 font-light">
                            {t.adminText}
                        </p>

                        <div className="bg-paper-red/10 p-6 border-l-4 border-paper-red mb-6 text-inherit">
                            <h4 className="font-bold text-paper-red mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> {t.lyttonTitle}
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                {t.lyttonItems.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="bg-paper-orange/10 p-8 border border-paper-orange/20 rotate-1 shadow-lg text-inherit">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="headline-font text-2xl font-bold text-paper-orange">{t.ilbertTitle}</h3>
                                <Gavel className="w-8 h-8 text-paper-gray opacity-60" />
                            </div>
                            <p className="text-sm italic mb-4">{t.ilbertQuote}</p>
                            <p className="leading-relaxed text-sm">
                                {t.ilbertText}
                                <br /><br />
                                <span className="font-bold text-paper-red">{t.whiteMutiny}</span> {t.ilbertConsequence}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PRE-CONGRESS ASSOCIATIONS TIMELINE */}
            <section className="max-w-6xl mx-auto mb-24 px-4">
                <h2 className="headline-font text-4xl font-bold mb-12 text-center">{t.precursorsTitle}</h2>

                <div className="bg-card p-8 rounded-xl shadow-inner border border-border overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-800 text-sm uppercase">
                                <th className="p-4 w-24">{t.tableYear}</th>
                                <th className="p-4">{t.tableOrg}</th>
                                <th className="p-4">{t.tableLeader}</th>
                                <th className="p-4">{t.tableSignificance}</th>
                            </tr>
                        </thead>
                        <tbody className="typewriter-font text-sm">
                            {t.precursors.map((org, i) => (
                                <tr key={i} className="border-b border-paper-border/10 hover:bg-paper-orange/10 transition-colors">
                                    <td className="p-4 font-bold">{org.year}</td>
                                    <td className="p-4 font-bold text-paper-navy">{org.name}</td>
                                    <td className="p-4 italic">{org.leader}</td>
                                    <td className="p-4 text-paper-gray opacity-70">{org.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-paper-navy/10 p-6 border border-paper-navy/20 rounded-lg flex items-start gap-4 text-inherit">
                    <AlertCircle className="w-6 h-6 text-paper-navy flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-paper-navy mb-1">{t.missingTitle}</h4>
                        <p className="text-sm">{t.missingText}</p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BIRTH OF CONGRESS (THEORIES) */}
            <section className="max-w-7xl mx-auto mb-24">
                <div className="newsprint p-8 md:p-16 relative overflow-hidden text-inherit">
                    <div className="absolute top-0 right-0 bg-paper-navy text-paper-bg px-6 py-2 font-bold uppercase tracking-widest text-xs">{t.birthDate}</div>

                    <h2 className="headline-font text-5xl font-bold mb-12 text-center text-paper-navy">{t.birthTitle}</h2>

                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4">
                                <Users className="w-12 h-12 text-paper-gray opacity-60" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-paper-gray opacity-40">{t.founderLabel}</h4>
                                    <p className="text-xl font-bold">{t.founder}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Landmark className="w-12 h-12 text-paper-gray opacity-60" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-paper-gray opacity-40">{t.venueLabel}</h4>
                                    <p className="text-xl font-bold">{t.venue}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Stamp className="w-12 h-12 text-paper-gray opacity-60" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-paper-gray opacity-40">{t.firstPresLabel}</h4>
                                    <p className="text-xl font-bold">{t.firstPres}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-paper border border-paper-border/20 p-6 rounded-lg text-inherit">
                            <h4 className="headline-font text-2xl font-bold mb-4 text-center">{t.theoriesTitle}</h4>
                            <div className="flex gap-2 mb-4 bg-paper-border/10 p-1 rounded-lg">
                                <button onClick={() => setTheory('safety')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${theory === 'safety' ? 'bg-paper shadow text-paper-gray' : 'text-paper-gray/40'}`}>{t.safetyValve}</button>
                                <button onClick={() => setTheory('lightning')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${theory === 'lightning' ? 'bg-paper shadow text-paper-gray' : 'text-paper-gray/40'}`}>{t.lightningConductor}</button>
                            </div>

                            <div className="h-40">
                                {theory === 'safety' ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                                        <p className="text-sm italic">{t.safetyText}</p>
                                        <p className="text-xs font-bold text-paper-red mt-2">{t.safetySupporter}</p>
                                        <p className="text-xs text-paper-gray/50">{t.safetySource}</p>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                                        <p className="text-sm italic">{t.lightningText}</p>
                                        <p className="text-xs font-bold text-paper-green mt-2">{t.lightningSupporter}</p>
                                        <p className="text-xs text-paper-gray/50">{t.lightningSource}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* MILESTONE SESSIONS TABLE */}
                    <div className="border-t-2 border-paper-border pt-8 text-inherit">
                        <h4 className="typewriter-font font-bold text-center mb-6 uppercase tracking-widest decoration-wavy underline text-paper-gray">{t.milestoneTitle}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {t.sessions.map((sess, idx) => (
                                <div key={idx} className="bg-paper p-4 border border-paper-border/10 text-center hover:shadow-lg transition-transform hover:-translate-y-1 text-inherit">
                                    <div className="font-bold text-xl text-paper-navy">{sess.year}</div>
                                    <div className="text-xs uppercase tracking-wider mb-2 opacity-60">{sess.place}</div>
                                    <div className="font-bold text-sm mb-2 opacity-90">{sess.pres}</div>
                                    <div className="text-xs italic text-paper-gray opacity-50">{sess.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE MODERATE PHASE (3PS & ACHIEVEMENTS) */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="newsprint p-8">
                    <h3 className="headline-font text-3xl font-bold mb-6">{t.moderateTitle}</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-slate-800 text-white px-3 py-1 text-xs font-bold uppercase">{t.methodology}</div>
                        <div className="typewriter-font font-bold text-slate-700">{t.threePees}</div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed">
                        {t.moderateText}
                    </p>

                    <div className="space-y-4 text-inherit">
                        <div className="bg-paper-navy/10 p-4 border-l-4 border-paper-navy text-inherit">
                            <h4 className="font-bold text-sm mb-1 text-paper-navy">{t.councilsTitle}</h4>
                            <p className="text-xs opacity-70">{t.councilsText}</p>
                            <p className="text-xs font-bold mt-1 text-paper-red">{t.councilsCritique}</p>
                        </div>
                        <div className="bg-paper shadow-sm p-4 border-l-4 border-paper-gray/40 text-inherit">
                            <h4 className="font-bold text-sm mb-1 text-paper-gray">{t.publicTitle}</h4>
                            <p className="text-xs opacity-70">{t.publicText}</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 border border-dashed border-red-300 bg-red-50 rounded">
                        <h4 className="font-bold text-red-800 text-sm flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> {t.dissidentTitle}
                        </h4>
                        <ul className="text-xs list-disc list-inside mt-2 space-y-1">
                            {t.dissidentItems.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="newsprint p-8 bg-paper-red/5 text-inherit">
                    <h3 className="headline-font text-3xl font-bold mb-6 text-paper-red flex items-center gap-3">
                        <Newspaper className="w-8 h-8" /> {t.econTitle}
                    </h3>
                    <p className="text-lg font-bold italic mb-4 text-paper-red/80">{t.drainTheory}</p>

                    <div className="space-y-6 text-inherit">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-paper-border/20 rounded-full sepia-img flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-paper-gray">{t.naorojiName}</h4>
                                <p className="text-xs italic opacity-60">{t.naorojiBook}</p>
                                <p className="text-xs mt-1 opacity-80">{t.naorojiText}</p>
                            </div>
                        </div>

                        <div className="bg-paper p-4 border border-paper-red/10 shadow-sm text-inherit">
                            <h5 className="font-bold text-xs uppercase mb-2 text-paper-gray opacity-50">{t.homeCharges}</h5>
                            <ul className="text-xs grid grid-cols-2 gap-2">
                                {t.homeItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2"><div className="w-2 h-2 bg-paper-red rounded-full"></div> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: OPPOSITION & INTERNATIONAL WING */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="border-t-8 border-paper-border shadow-md text-inherit bg-paper">
                    <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold headline-font text-paper-gray">{t.loyalTitle}</h3>
                            <Badge variant="destructive" className="bg-paper-red text-paper-bg">{t.antiBadge}</Badge>
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-paper-gray">{t.uipaTitle}</h4>
                        <p className="text-sm opacity-70 mb-4">{t.uipaText}</p>
                        <p className="text-sm italic border-l-2 border-paper-border/20 pl-4 opacity-80">{t.uipaGoal}</p>
                    </CardContent>
                </Card>

                <Card className="border-t-8 border-paper-navy shadow-md text-inherit bg-paper">
                    <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold headline-font text-paper-navy">{t.londonTitle}</h3>
                            <Globe className="w-6 h-6 text-paper-navy" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-paper-navy">{t.britCommTitle}</h4>
                        <p className="text-sm opacity-70 mb-4">{t.britCommText}</p>
                        <div className="bg-paper-navy/10 p-3 rounded text-center">
                            <span className="text-xs uppercase tracking-wide opacity-50">{t.journalLabel}</span>
                            <div className="headline-font text-xl font-bold text-paper-navy">{t.journalName}</div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* FOOTER: THE NICKNAMES & EPILOGUE */}
            <footer className="max-w-5xl mx-auto pb-24 text-center text-inherit">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-70 text-inherit">
                    {t.nicknames.map((n, i) => (
                        <div key={i} className="p-2 border border-dashed border-paper-border/20 rounded text-inherit">
                            <div className="font-bold text-xs uppercase text-paper-gray">{n.name}</div>
                            <div className="text-[10px] italic text-paper-gray opacity-60">{n.title}</div>
                        </div>
                    ))}
                </div>

                <div className="typewriter-font text-xs text-paper-gray opacity-40">
                    <p className="mb-2">{t.footerPrint}</p>
                    <p>{t.footerEnd}</p>
                </div>
            </footer>
        </div>
    );
}
