"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Sword,
    ShieldAlert,
    Skull,
    Mountain,
    Trees,
    Flag,
    AlertTriangle,
    Feather,
    Anchor,
    Map as MapIcon,
    Zap,
    Users,
    Quote,
    Crosshair
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch6Translations } from './translations/ch6';

function Castle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 20v-9l-4-4V3L14 7l-4-4-4 4-4-4v4L2 11v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" /><path d="M12 11V7" /><path d="M15 11V8" /><path d="M9 11V8" /><path d="M11 22v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4" /><path d="M16 11V8" /><path d="M8 11V8" />
        </svg>
    );
}

export default function HandwrittenChapter6() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch6Translations.hi : ch6Translations.en;

    const posterColors = [
        { gradient: "from-red-600", nameColor: "text-red-900" },
        { gradient: "from-orange-600", nameColor: "text-orange-900" },
        { gradient: "from-blue-600", nameColor: "text-blue-900" },
    ];
    const posterRotations = ["-rotate-2", "rotate-2", "-rotate-1"];

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-gray selection:bg-paper-orange/20 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Special+Elite&display=swap');
                
                .rebel-paper {
                    background-color: var(--paper-bg);
                    border: 2px solid var(--paper-text-brown);
                    box-shadow: 10px 10px 0px var(--paper-border);
                    position: relative;
                }

                .wanted-poster {
                    background-color: var(--paper-bg);
                    border: 2px solid var(--paper-text-brown);
                    padding: 20px;
                    text-align: center;
                    box-shadow: 2px 5px 15px var(--paper-border);
                    filter: sepia(0.2);
                }

                .muddy-texture {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: url('https://www.transparenttextures.com/patterns/dark-wood.png');
                    opacity: 0.05;
                    pointer-events: none;
                }

                .blood-red { color: var(--paper-text-red); }
                .earth-brown { color: var(--paper-text-brown); }
                .forest-green { color: var(--paper-text-green); }

                .stencil-font {
                    font-family: 'Special Elite', cursive;
                    letter-spacing: 2px;
                }

                .marker-red {
                    background-color: var(--sticky-pink);
                    border-bottom: 2px solid var(--paper-text-red);
                    padding: 0 4px;
                    color: initial;
                }

                .burnt-corner {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
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
                    color: var(--paper-text-gray);
                }
            `}</style>

            <div className="muddy-texture"></div>

            {/* HERO SECTION */}
            <header className="max-w-6xl mx-auto pt-20 mb-16 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="flex justify-center mb-6">
                        <Flame className="w-20 h-20 text-orange-700 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-8xl font-['Permanent_Marker'] blood-red mb-2 tracking-tighter uppercase">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl earth-brown stencil-font font-bold opacity-80 uppercase tracking-widest italic">
                        {t.heroSubtitle}
                    </p>
                    <div className="max-w-xl mx-auto mt-8 bg-paper p-6 paper-border border-4 border-dashed border-paper-red transform rotate-1 text-inherit">
                        <p className="text-2xl leading-relaxed italic body-handwritten">
                            {t.heroQuote}
                        </p>
                    </div>
                </motion.div>
            </header>

            {/* SECTION 1: THE CAUSES */}
            <div className="max-w-5xl mx-auto mb-20">
                <div className="bg-paper p-8 transform -rotate-1 shadow-2xl relative overflow-hidden border-2 border-paper-brown text-inherit">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <AlertTriangle className="w-32 h-32" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] text-paper-orange mb-8 uppercase tracking-widest outline-text">{t.causesTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 body-handwritten text-xl">
                        <div className="space-y-4">
                            {t.causes.slice(0, 2).map((c, i) => (
                                <p key={i} className="border-l-4 border-paper-orange pl-4 py-1">
                                    <span className="font-bold text-paper-orange opacity-80">{c.bold}</span>{c.text}
                                </p>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {t.causes.slice(2).map((c, i) => (
                                <p key={i} className="border-l-4 border-orange-500 pl-4 py-1">
                                    <span className="font-bold text-orange-300">{c.bold}</span>{c.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: CIVIL UPRISINGS */}
            <div className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-3xl font-['Permanent_Marker'] earth-brown mb-10 flex items-center gap-3">
                    <Crosshair className="w-8 h-8 blood-red" /> {t.civilTitle}
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {t.uprisings.map((uprising, idx) => (
                        <div key={idx} className={`wanted-poster w-72 transform ${posterRotations[idx]} hover:rotate-0 transition-transform`}>
                            <div className={`w-full h-1 bg-gradient-to-r ${posterColors[idx].gradient} to-transparent mb-4`}></div>
                            <h3 className="stencil-font text-2xl mb-1">{t.reward}</h3>
                            <p className="text-xs uppercase font-bold mb-4">{uprising.subtitle}</p>
                            <h4 className={`text-2xl font-bold body-handwritten ${posterColors[idx].nameColor} mb-4 uppercase`}>{uprising.name}</h4>
                            <div className="text-sm body-handwritten space-y-2 text-left bg-card/50 p-4 rounded border border-dashed border-stone-400">
                                {uprising.details.map((d, i) => (
                                    <p key={i}>• <strong>{d.bold}</strong>{d.text}</p>
                                ))}
                                {uprising.extraQuote && (
                                    <p className="text-red-700 italic">{uprising.extraQuote}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Kittur Chennamma - Special */}
                    <div className="wanted-poster w-72 transform rotate-3 hover:rotate-0 transition-transform border-4 border-amber-600 bg-amber-50">
                        <div className="w-full h-1 bg-amber-600 mb-4"></div>
                        <h3 className="stencil-font text-2xl text-amber-800 mb-1">{t.queenLabel}</h3>
                        <p className="text-xs uppercase font-bold mb-4">{t.queenSubtitle}</p>
                        <h4 className="text-2xl font-bold body-handwritten text-amber-900 mb-4">{t.queenName}</h4>
                        <div className="text-sm body-handwritten space-y-2 text-left bg-card/50 p-4 rounded border border-dashed border-amber-400">
                            {t.queenDetails.map((d, i) => (
                                <p key={i}>• <strong>{d.bold}</strong>{d.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: TRIBAL UPRISINGS */}
            <div className="max-w-6xl mx-auto mb-20 p-10 bg-card paper-border border-4 border-slate-900 relative">
                <div className="absolute top-4 right-8 opacity-10">
                    <MapIcon className="w-24 h-24 text-muted-foreground" />
                </div>
                <h2 className="text-3xl font-['Permanent_Marker'] blood-red mb-12 flex items-center gap-3">
                    <Mountain className="w-8 h-8 forest-green" /> {t.tribalTitle}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        {/* Santhal */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-orange-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Zap className="w-5 h-5 text-orange-600" /> {t.santhalTitle}
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">{t.santhalText}</p>
                            <p className="text-sm italic opacity-70">{t.santhalNote}</p>
                        </div>

                        {/* Khond */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-red-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Skull className="w-5 h-5 text-red-600" /> {t.khondTitle}
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">{t.khondText}</p>
                            <p className="text-sm bg-red-50 p-2 rounded border border-red-100 text-red-900">
                                <strong>{t.khondCause}</strong>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Kols & Mundas */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-blue-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Trees className="w-5 h-5 forest-green" /> {t.kolsTitle}
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">{t.kolsText}</p>
                            <p className="text-sm italic opacity-70">{t.kolsNote}</p>
                        </div>

                        {/* North-East */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-green-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold forest-green flex items-center gap-2">
                                <Flag className="w-5 h-5 text-green-700" /> {t.neTitle}
                            </h4>
                            <div className="space-y-4 body-handwritten text-lg">
                                <div>
                                    <p className="font-bold">{t.khasiTitle}</p>
                                    <p className="text-sm">{t.khasiText}</p>
                                </div>
                                <div>
                                    <p className="font-bold">{t.ahomTitle}</p>
                                    <p className="text-sm">{t.ahomText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4: PEASANT & RELIGIOUS REVOLTS */}
            <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="bg-[#fffefe] p-8 paper-border border-4 border-stone-800 shadow-lg relative transform rotate-1">
                    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><Zap className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 text-stone-700 underline decoration-orange-400">{t.wahabiTitle}</h3>
                    <div className="body-handwritten text-xl space-y-6">
                        <div className="border-l-4 border-stone-300 pl-4">
                            <p className="font-bold">{t.wahabiLabel}</p>
                            <p className="text-sm">{t.wahabiText}</p>
                        </div>
                        <div className="border-l-4 border-stone-300 pl-4">
                            <p className="font-bold">{t.kukaLabel}</p>
                            <p className="text-sm">{t.kukaText}</p>
                        </div>
                    </div>
                </Card>

                <div className="space-y-8">
                    {/* Titu Mir */}
                    <div className="bg-card p-8 paper-border border-2 border-dashed border-green-800 relative group overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 transition-transform">
                            <Castle className="w-32 h-32" />
                        </div>
                        <h4 className="marker-label text-green-900 border-b border-green-100 mb-4 pb-2">{t.tituTitle}</h4>
                        <p className="body-handwritten text-lg leading-relaxed">{t.tituText}</p>
                    </div>

                    {/* Pagal Panthis */}
                    <div className="bg-card p-6 paper-border border-2 border-stone-300">
                        <h4 className="marker-label text-stone-600 mb-2">{t.pagalTitle}</h4>
                        <p className="body-handwritten text-lg italic">{t.pagalText}</p>
                    </div>
                </div>
            </div>

            {/* SECTION 5: MUTINIES BEFORE THE GREAT REVOLT */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="bg-red-900 text-white p-10 rounded-[60px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    <h2 className="text-3xl font-['Permanent_Marker'] mb-12 text-center text-orange-400">{t.sepoyTitle}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {t.mutinies.map((m, i) => (
                            <div key={i} className="bg-card/10 p-6 rounded-2xl border border-white/20 hover:bg-card/20 transition-colors cursor-help">
                                <h4 className="font-bold text-orange-200 mb-2">{m.year}</h4>
                                <p className="text-xs body-handwritten">{m.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
                        <p className="body-handwritten text-xl italic text-red-200">{t.sepoyQuote}</p>
                        <div className="mt-8 flex gap-4 text-xs font-bold uppercase tracking-widest text-orange-500 opacity-60">
                            {t.sepoyExtra.map((item, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <span>•</span>}
                                    <span>{item}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center pb-20">
                <Quote className="w-8 h-8 mx-auto text-stone-300 mb-4" />
                <p className="marker-label text-stone-400 uppercase text-xs tracking-[0.6em] font-bold">{t.footerText}</p>
                <p className="body-handwritten italic text-stone-400 text-sm mt-4">{t.footerNext}</p>
            </footer>
        </div>
    );
}
