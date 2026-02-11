"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scroll,
    Users,
    AlertTriangle,
    Flame,
    Mic2,
    Flag,
    XCircle,
    Star
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter23() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-red-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Rock+Salt&display=swap');
                
                .parchment-texture {
                    background-color: #F5F5DC;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .stamp-font { font-family: 'Rock Salt', cursive; }

                .ink-stain {
                    mask-image: url("https://www.transparenttextures.com/patterns/black-ink.png");
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="border-4 border-black border-dashed p-6 transform -rotate-1 bg-white/40 backdrop-blur-sm">
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Flag className="w-8 h-8 text-orange-600" />
                        <span className="marker-font text-2xl tracking-widest uppercase">1942</span>
                        <Mic2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="marker-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-[#b71c1c] mb-2 drop-shadow-md">
                        QUIT INDIA
                    </h1>
                    <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-black hand-font">
                        <span>Do or Die</span>
                        <span>•</span>
                        <span>Leaderless Revolt</span>
                        <span>•</span>
                        <span>INA Rises</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE MOVEMENT */}
                <div className="space-y-12">

                    {/* PAGE 1: THE STORM */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#fff3e0] p-6 border-2 border-orange-800 shadow-xl rounded-sm">
                            <h2 className="marker-font text-3xl text-orange-900 mb-4 flex items-center gap-2">
                                <Flame className="w-6 h-6" /> The Storm (Aug 1942)
                            </h2>

                            <div className="hand-font text-xl space-y-4">
                                <div className="bg-white/60 p-4 border-l-4 border-red-600">
                                    <strong className="block text-red-800 text-2xl mb-1">Why Now?</strong>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Cripps Mission Failed (No hope left).</li>
                                        <li>Japanese knocking on North-East doors.</li>
                                        <li><strong>"Scorched Earth" Policy:</strong> British burnt boats/rice in Bengal!</li>
                                        <li>High Inflation (Salt/Rice unaffordable).</li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4 bg-orange-100 p-3 rounded-lg border border-orange-300">
                                    <div className="text-4xl">🗓️</div>
                                    <div>
                                        <div className="font-bold">Aug 8: Gowalia Tank (Bombay)</div>
                                        <div className="text-sm">Resolution Ratified. Gandhi speaks.</div>
                                    </div>
                                </div>

                                <div className="bg-black text-white p-4 rotate-1 shadow-lg text-center">
                                    <p className="scribble-font text-3xl text-yellow-300">"Here is a mantra... DO OR DIE!"</p>
                                    <p className="text-xs uppercase tracking-widest mt-1">- Mahatma Gandhi</p>
                                </div>

                                <div className="bg-red-100 p-3 border border-red-300 text-sm">
                                    <strong>Aug 9 (Zero Hour):</strong> All leaders arrested before sunrise! The movement became <span className="font-bold text-red-800 uppercase">Leaderless</span>.
                                </div>
                            </div>

                            <div className="absolute -right-4 top-10 rotate-12 bg-yellow-300 text-black px-3 py-1 text-xs font-bold shadow-md scribble-font text-lg">
                                Aruna Asaf Ali hoisted the flag!
                            </div>
                        </div>
                    </div>

                    {/* PARALLEL GOVERNMENTS */}
                    <div className="bg-white p-6 border-4 border-double border-gray-800 shadow-lg relative">
                        <h2 className="marker-font text-3xl text-gray-800 mb-6 underline decoration-wavy decoration-emerald-500">
                            Parallel Govts (Prati Sarkar)
                        </h2>

                        <div className="grid gap-6 hand-font text-lg">
                            {/* Ballia */}
                            <div className="bg-emerald-50 p-4 border border-emerald-200">
                                <h3 className="font-bold text-xl text-emerald-900">1. Ballia (UP)</h3>
                                <p><strong>Chittu Pandey</strong> (Tuphani Baba). Released prisoners. Lasted 1 week.</p>
                            </div>

                            {/* Tamluk */}
                            <div className="bg-emerald-50 p-4 border border-emerald-200 relative">
                                <h3 className="font-bold text-xl text-emerald-900">2. Tamluk (Bengal)</h3>
                                <p><strong>"Jatiya Sarkar"</strong> (Dec '42 - Sept '44).</p>
                                <ul className="list-disc pl-5 text-sm mt-1">
                                    <li>Hurricane Relief.</li>
                                    <li><strong>Vidyut Vahinis</strong> (Lightning Armies).</li>
                                    <li>Matangini Hazra (73yo) martyred.</li>
                                </ul>
                            </div>

                            {/* Satara */}
                            <div className="bg-emerald-50 p-4 border border-emerald-200">
                                <h3 className="font-bold text-xl text-emerald-900">3. Satara (Maharashtra)</h3>
                                <div className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 font-bold rounded">LONGEST LASTING</div>
                                <p><strong>Nana Patil, Y.B. Chavan</strong>.</p>
                                <ul className="list-disc pl-5 text-sm mt-1">
                                    <li>Nyayadan Mandals (People's Courts).</li>
                                    <li>Gandhi Marriages (No caste/dowry).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: FAMINE, INA & PARTITION */}
                <div className="space-y-12">

                    {/* FAMINE & POLITICS */}
                    <div className="bg-[#e0e0e0] p-6 border-l-8 border-black shadow-2xl">
                        <h2 className="marker-font text-2xl text-black mb-4 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> The Dark Consensus
                        </h2>

                        <div className="space-y-4 hand-font">
                            {/* Famine */}
                            <div className="bg-white p-4 text-gray-800">
                                <strong className="block text-xl border-b border-gray-300 pb-1 mb-2">Bengal Famine (1943)</strong>
                                <p className="text-lg">1.5 - 3 Million Deaths.</p>
                                <p className="text-sm italic text-red-700">Man-made tragedy (Rice exports, Army diversion, Denial policy).</p>
                                <div className="text-xs bg-gray-100 mt-2 p-1"><strong>Woodhead Commission (1945)</strong> blamed mismanagement.</div>
                            </div>

                            {/* Formulas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div className="bg-blue-50 p-3 border border-blue-200">
                                    <strong className="block text-blue-900">C.R. Formula (1944)</strong>
                                    Proposed Plebiscite in NW/NE. Jinnah rejected (wanted *only* Muslims to vote).
                                </div>
                                <div className="bg-purple-50 p-3 border border-purple-200">
                                    <strong className="block text-purple-900">Wavell Plan (1945)</strong>
                                    Shimla Conference. Parity (Caste Hindu = Muslim). Jinnah used "Virtual Veto".
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INA SAGA */}
                    <div className="relative bg-[#fff8e1] p-6 border-2 border-orange-500 transform rotate-1">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                            INA
                        </div>
                        <h2 className="marker-font text-3xl text-orange-800 mb-4 text-right">
                            AZAD HIND FAUJ
                        </h2>

                        <div className="hand-font space-y-5">
                            <div className="flex border-b border-orange-200 pb-4">
                                <div className="w-1/3 font-bold text-orange-900 text-lg">Phase 1</div>
                                <div className="w-2/3">Capt. Mohan Singh (Malaya, 1942). Collapsed.</div>
                            </div>

                            <div className="flex border-b border-orange-200 pb-4">
                                <div className="w-1/3 font-bold text-orange-900 text-lg">Phase 2</div>
                                <div className="w-2/3">
                                    <span className="text-xl font-bold bg-orange-100 px-2">Subhas Chandra Bose</span>
                                    <p className="text-sm mt-1">Arrived Singapore (July '43). Formed Provisional Govt (Oct 21, '43).</p>
                                </div>
                            </div>

                            <div className="bg-orange-600 text-white p-4 rounded-tl-xl rounded-br-xl shadow-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="stamp-font text-xs">WAR CRY</span>
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <p className="marker-font text-4xl text-center">"CHALO DELHI!"</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white p-2 border border-orange-100">
                                    <strong>Moirang (Manipur):</strong> First Flag Hoisting on mainland (April 14, 1944, Col. Shaukat Malik).
                                </div>
                                <div className="bg-white p-2 border border-orange-100">
                                    <strong>Islands:</strong> Andaman → Shahid. Nicobar → Swaraj.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GAP ANALYSIS NOTE */}
                    <div className="bg-yellow-100 p-4 rotate-1 border border-yellow-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-700" />
                            <h3 className="scribble-font text-2xl font-bold">Confidential Notes</h3>
                        </div>
                        <ul className="hand-font text-sm space-y-2">
                            <li><strong>"Ziauddin":</strong> Bose's alias during escape (1941).</li>
                            <li><strong>CPI:</strong> Supported British ("People's War"). Did NOT join Quit India.</li>
                            <li><strong>Loyalty Erosion:</strong> Police/Bureaucracy started sympathizing. This scared the British most!</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}
