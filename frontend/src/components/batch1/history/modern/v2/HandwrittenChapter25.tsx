"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scissors,
    Flag,
    Map as MapIcon,
    AlertTriangle,
    Calendar,
    Users,
    FileText,
    CheckCircle
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter25() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-orange-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Special+Elite&display=swap');
                
                .parchment-texture {
                    background-color: #ffe0b2;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .type-font { font-family: 'Special Elite', monospace; }

                .torn-paper {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 95% 95%, 90% 90%, 85% 95%, 80% 90%, 75% 95%, 70% 90%, 65% 95%, 60% 90%, 55% 95%, 50% 90%, 45% 95%, 40% 90%, 35% 95%, 30% 90%, 25% 95%, 20% 90%, 15% 95%, 10% 90%, 5% 95%, 0% 90%);
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-16 pb-12 text-center relative z-10">
                <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-orange-500 blur-xl opacity-20 transform rotate-2"></div>
                    <div className="border-4 border-black p-6 bg-white transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-2">
                            <span className="type-font text-xs">FINAL CHAPTER</span>
                            <span className="type-font text-xs bg-black text-white px-2">1947</span>
                        </div>
                        <h1 className="marker-font text-5xl md:text-7xl font-bold uppercase tracking-tight text-black mb-2 leading-none">
                            INDEPENDENCE<br /><span className="text-orange-600">& PARTITION</span>
                        </h1>
                        <p className="scribble-font text-2xl mt-2 text-gray-600">"Tryst with Destiny"</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE PLANS */}
                <div className="space-y-12">

                    {/* PLAN BALKAN */}
                    <div className="bg-white p-6 shadow-lg border-l-8 border-gray-400 rotate-1">
                        <h2 className="marker-font text-2xl text-gray-500 mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6" /> The Secret Plan
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="bg-gray-100 p-3 border border-gray-300">
                                <strong className="block text-xl">Plan Balkan ("Dickie Bird Plan")</strong>
                                <p className="text-sm">Mountbatten proposed to transfer power to <span className="font-bold">separate provinces</span> (not a united India), allowing them to choose.</p>
                            </div>

                            <div className="flex gap-4 items-center bg-red-50 p-3 border-l-4 border-red-500">
                                <div className="text-3xl">😡</div>
                                <div>
                                    <strong className="block text-red-900">Nehru's Reaction</strong>
                                    <p className="text-sm">"This will lead to the Balkanization of India!" He rejected it instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOUNTBATTEN PLAN */}
                    <div className="bg-[#e3f2fd] p-6 shadow-xl border-2 border-blue-800 rounded-lg relative">
                        <div className="absolute -top-4 right-4 bg-blue-800 text-white px-3 py-1 font-bold type-font text-sm">JUNE 3 PLAN</div>
                        <h2 className="marker-font text-3xl text-blue-900 mb-6">
                            THE MOUNTBATTEN PLAN
                        </h2>

                        <div className="hand-font space-y-4 text-gray-900">
                            <ul className="list-disc pl-5 space-y-2 text-lg">
                                <li><strong>Partition Accepted:</strong> India and Pakistan to be two separate Dominions.</li>
                                <li><strong>Date Set:</strong> August 15, 1947 (Advanced from June 1948).</li>
                                <li><strong>Referendum:</strong> NWFP and Sylhet (Assam).</li>
                                <li><strong>Princely States:</strong> Treaties end. Can join either or remain independent (technically).</li>
                            </ul>

                            <div className="bg-white p-4 border border-blue-200 mt-4 shadow-sm">
                                <strong className="type-font text-xs uppercase text-gray-500 block mb-1">The Boundary Commission</strong>
                                <div className="flex items-center gap-2">
                                    <Scissors className="w-5 h-5 text-red-600" />
                                    <span className="text-xl font-bold">Sir Cyril Radcliffe</span>
                                </div>
                                <p className="text-sm italic mt-1">Given 5 weeks to divide a continent based on maps he barely understood.</p>
                            </div>
                        </div>
                    </div>

                    {/* INDIAN INDEPENDENCE ACT */}
                    <div className="bg-yellow-50 p-6 shadow border border-yellow-200">
                        <h2 className="type-font text-xl font-bold text-yellow-900 mb-2 border-b border-yellow-300 pb-2">
                            Indian Independence Act, 1947
                        </h2>
                        <div className="hand-font text-lg">
                            <p><strong>Royal Assent:</strong> July 18, 1947.</p>
                            <p className="mt-2 text-sm text-gray-600">
                                Abolished the office of Viceroy. Established <span className="font-bold text-black">Governor-General</span> for each Dominion.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 text-center text-sm">
                                <div className="bg-orange-100 p-2 border border-orange-200">
                                    <strong>India's GG</strong><br />Mountbatten
                                </div>
                                <div className="bg-green-100 p-2 border border-green-200">
                                    <strong>Pakistan's GG</strong><br />Jinnah
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE REALITY */}
                <div className="space-y-12">

                    {/* PARTITION HORROR */}
                    <div className="bg-white p-1 shadow-[0_0_20px_rgba(0,0,0,0.1)] -rotate-1">
                        <div className="border-4 border-red-700 p-5 torn-paper bg-[#ffebee]">
                            <h2 className="marker-font text-3xl text-red-800 mb-4 flex items-center justify-between">
                                <span>THE SURGERY</span>
                                <Scissors className="w-8 h-8 rotate-90" />
                            </h2>

                            <div className="hand-font space-y-4">
                                <p className="text-xl leading-relaxed">
                                    "The surgery was performed without anaesthesia."
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-red-800 text-white p-3 text-center">
                                        <div className="text-3xl font-bold">15 M</div>
                                        <div className="text-xs uppercase">Displaced</div>
                                    </div>
                                    <div className="bg-black text-white p-3 text-center">
                                        <div className="text-3xl font-bold">1 M</div>
                                        <div className="text-xs uppercase">Dead</div>
                                    </div>
                                </div>

                                <div className="bg-white/50 p-3 border border-red-200 italic text-sm">
                                    <strong>Punjab:</strong> Complete exchange of population (Muslims west, Hindus/Sikhs east).
                                    <br />
                                    <strong>Bengal:</strong> Gradual migration (Nehru-Liaquat Pact 1950 later).
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INTEGRATION OF STATES */}
                    <div className="bg-orange-50 p-6 border-l-8 border-orange-600 shadow-md">
                        <h2 className="marker-font text-2xl text-orange-900 mb-4 flex items-center gap-2">
                            <MapIcon className="w-6 h-6" /> The 562 States
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-2xl">👷‍♂️</div>
                                <div>
                                    <strong className="block">Sardar Patel & V.P. Menon</strong>
                                    <span className="text-sm">The Iron Man and his Diplomat.</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <strong className="block text-sm uppercase tracking-widest text-gray-500">The Troublemakers</strong>
                                <ul className="text-sm pl-4 border-l-2 border-orange-300 space-y-2">
                                    <li>❌ <strong>Junagadh:</strong> Plebiscite held (Feb 1948). India won.</li>
                                    <li>❌ <strong>Hyderabad:</strong> <span className="font-bold text-red-600">Operation Polo</span> (Police Action, Sept 1948).</li>
                                    <li>❌ <strong>Kashmir:</strong> Instrument of Accession (Oct 26, 1947) after Pak raid.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DAWN OF FREEDOM */}
                    <div className="bg-gradient-to-r from-orange-100 via-white to-green-100 p-8 shadow-xl text-center transform rotate-1 mt-8 pb-12">
                        <Flag className="w-12 h-12 mx-auto mb-4 text-blue-900" />
                        <h2 className="marker-font text-4xl text-black mb-2">AUGUST 15, 1947</h2>
                        <p className="scribble-font text-3xl text-gray-700">
                            "...At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."
                        </p>
                        <p className="type-font text-xs mt-4 uppercase">First Cabinet: 14 Ministers</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
