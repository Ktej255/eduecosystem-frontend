"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Radio,
    XCircle,
    Skull,
    AlertTriangle,
    Mic2,
    FileText,
    Flag,
    Users,
    Anchor,
    Plane,
    Leaf
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter20() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] font-sans text-gray-100 selection:bg-red-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap');
                
                .burnt-texture {
                    background-color: #1a1a1a;
                    background-image: url("https://www.transparenttextures.com/patterns/cracked-concrete.png");
                }

                .stencil-font { font-family: 'Black Ops One', cursive; }
                .typewriter-font { font-family: 'Courier Prime', monospace; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .fire-text {
                    background: linear-gradient(to bottom, #ff9933, #ff0000);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .steel-card {
                    background: linear-gradient(135deg, #2c3e50, #4ca1af);
                    border: 1px solid #7f8c8d;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }

                .radio-card {
                    background: #2d3436;
                    border: 4px solid #000;
                    box-shadow: 0 0 10px #FFD700;
                }

                .torn-paper {
                    background: #fff;
                    color: #000;
                    clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0 90%);
                    padding-bottom: 2rem;
                    transform: rotate(1deg);
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 burnt-texture pointer-events-none z-0 opacity-50"></div>

            {/* HEADER */}
            <header className="max-w-6xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8">
                <div className="border-4 border-red-800 p-8 bg-black/80 inline-block transform -rotate-1">
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Flame className="w-8 h-8 text-red-500 animate-pulse" />
                        <span className="typewriter-font text-red-500 text-xl tracking-widest uppercase">Aug 1942</span>
                        <Flame className="w-8 h-8 text-red-500 animate-pulse" />
                    </div>
                    <h1 className="stencil-font text-6xl md:text-8xl fire-text uppercase tracking-widest leading-none mb-4">
                        DO OR DIE
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>Quit India</span>
                        <span>•</span>
                        <span>Leaderless Revolt</span>
                        <span>•</span>
                        <span>Parallel Govts</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE OFFER & THE SPARK */}
                <div className="space-y-12">

                    {/* CRIPPS MISSION (TORN CHEQUE) */}
                    <div className="torn-paper p-6 relative">
                        <div className="absolute top-2 right-2 text-red-600 font-bold border-2 border-red-600 p-1 transform rotate-12 text-xs uppercase">
                            REJECTED
                        </div>
                        <h3 className="typewriter-font text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-dashed border-gray-400 pb-2">
                            <Plane className="w-5 h-5" /> The Cripps Mission (1942)
                        </h3>

                        <div className="space-y-4 text-sm font-mono leading-tight">
                            <p className="bg-gray-100 p-2">
                                <strong>Envoy:</strong> Sir Stafford Cripps (Labour).
                                <br /><span className="text-gray-500 text-xs">Pressure from US (Roosevelt) & China (Chiang Kai-Shek).</span>
                            </p>

                            <ul className="list-disc ml-4 space-y-2">
                                <li><strong>Dominion Status</strong> (with right to secede from Commonwealth).</li>
                                <li><strong>Constituent Assembly</strong> (Elected + Nominated).</li>
                                <li className="text-red-700 font-bold bg-red-50 p-1">
                                    "Right to Secede": Provinces could opt out. (Blueprint for Pakistan).
                                </li>
                            </ul>

                            <div className="mt-4 text-center italic text-red-600 font-bold">
                                "A post-dated cheque on a crashing bank." - Gandhi
                            </div>
                        </div>
                    </div>

                    {/* QUIT INDIA RESOLUTION */}
                    <div className="bg-red-900/20 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                        <h3 className="stencil-font text-2xl font-bold mb-4 text-red-500 uppercase flex items-center gap-2">
                            <Flag className="w-6 h-6" /> The Resolution
                        </h3>

                        <div className="text-sm space-y-3">
                            <div className="flex items-center gap-2 opacity-80">
                                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">LOCATION</span>
                                Gowalia Tank, Bombay (Aug 8, 1942).
                            </div>

                            <div className="bg-black/40 p-3 italic border border-red-500/30 text-center">
                                "Here is a mantra... <strong>DO OR DIE.</strong> We shall either free India or die in the attempt."
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">Soldiers</strong>
                                    Don't fire on people.
                                </div>
                                <div className="bg-white/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">Students</strong>
                                    Leave studies if firm.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPPOSITION */}
                    <div className="bg-gray-800 p-4 border border-gray-600 relative">
                        <div className="absolute -top-3 left-4 bg-gray-600 text-white text-xs px-2 py-1 uppercase font-bold">
                            The Dissenters
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs mt-2">
                            <div>
                                <strong className="block text-yellow-400">CPI (Communists)</strong>
                                <span className="opacity-70">Supported British ("People's War" for Russia).</span>
                            </div>
                            <div>
                                <strong className="block text-green-400">Muslim League</strong>
                                <span className="opacity-70">Jinnah warned Muslims to stay away.</span>
                            </div>
                            <div>
                                <strong className="block text-orange-400">Hindu Mahasabha</strong>
                                <span className="opacity-70">Savarkar/Mukherjee boycotted.</span>
                            </div>
                            <div>
                                <strong className="block text-blue-400">Ambedkar</strong>
                                <span className="opacity-70">Called it "Irresponsible and Insane".</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: THE REVOLT & TRAGEDY */}
                <div className="space-y-12">

                    {/* OPERATION ZERO HOUR & UNDERGROUND */}
                    <div className="radio-card p-6 text-yellow-500 relative overflow-hidden">
                        <div className="absolute top-2 right-2 animate-pulse rounded-full h-3 w-3 bg-red-500"></div>
                        <h3 className="handwritten-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <Radio className="w-5 h-5" /> 42.34 Meters...
                        </h3>

                        <div className="space-y-4 text-sm font-mono">
                            <div className="bg-black/50 p-3 border border-yellow-500/30">
                                <strong className="block text-white mb-1 uppercase text-xs">Operation Zero Hour (Aug 9)</strong>
                                All leaders arrested before sunrise. Gandhi to <strong>Aga Khan Palace</strong>. CWC to Ahmednagar Fort.
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <strong className="block text-white text-xs uppercase mb-1">Broadcaster</strong>
                                    Usha Mehta (Congress Radio).
                                </div>
                                <div className="flex-1">
                                    <strong className="block text-white text-xs uppercase mb-1">Coordinator</strong>
                                    Aruna Asaf Ali (Heroine of 1942).
                                </div>
                            </div>

                            <div className="bg-yellow-900/20 p-2 text-xs border-l-2 border-yellow-500">
                                <strong>Azad Dasta (Nepal):</strong> JP escaped Hazaribagh Jail. Trained guerrillas in Rajvilas forests.
                                <br /><strong>Pilot:</strong> Biju Patnaik. <strong>Financier:</strong> Sumati Morarjee.
                            </div>
                        </div>
                    </div>

                    {/* PARALLEL GOVERNMENTS MAP */}
                    <div className="steel-card p-6 text-white relative">
                        <Badge className="absolute top-4 right-4 bg-orange-500 text-black">Parallel Govts</Badge>
                        <h3 className="stencil-font text-xl mb-4">POWER TO PEOPLE</h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span><strong>Ballia (UP)</strong><br /><span className="opacity-70">Chittu Pandey</span></span>
                                <span className="text-right">1 Week<br /><span className="opacity-70">Released Prisoners</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span><strong>Tamluk (Bengal)</strong><br /><span className="opacity-70">Jatiya Sarkar</span></span>
                                <span className="text-right">Until 1944<br /><span className="opacity-70">Vidyut Vahini</span></span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span><strong>Satara (MH)</strong><br /><span className="opacity-70">Nana Patil / Y.B. Chavan</span></span>
                                <span className="text-right">Longest<br /><span className="opacity-70">Nyayadan Mandals</span></span>
                            </div>
                        </div>
                    </div>

                    {/* MARTYRS & TRAGEDY */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-950/50 p-4 border border-red-800 relative">
                            <strong className="block text-red-400 text-xs uppercase mb-2">Martyrs</strong>
                            <ul className="space-y-2 text-xs opacity-80">
                                <li><strong>Matangini Hazra</strong> (73): Shot in Tamluk holding flag. "Gandhiburi".</li>
                                <li><strong>Kanaklata Barua</strong> (17): Shot in Assam. "Mrityu Bahini".</li>
                                <li><strong>Bhai Kotwal</strong>: Kotwal Dasta (Pylon Sabotage).</li>
                            </ul>
                        </div>

                        <div className="bg-black p-4 border border-gray-700 relative text-gray-400">
                            <strong className="block text-gray-200 text-xs uppercase mb-2">Palace Tragedy</strong>
                            <ul className="space-y-2 text-xs">
                                <li><strong>Mahadev Desai:</strong> Died Aug 15, 1942.</li>
                                <li><strong>Kasturba:</strong> Died Feb 22, 1944 (In Gandhi's arms).</li>
                                <li className="text-[10px] mt-2 italic pt-2 border-t border-gray-800">
                                    "I have not become the King's Minister to preside over the empire's liquidation." - Churchill (on Famine).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DIPLOMATIC END */}
                    <div className="bg-white/5 p-3 text-xs flex justify-between items-center border-t border-white/10">
                        <div>
                            <strong className="block text-green-400">C.R. Formula (1944)</strong>
                            First implicit acceptance of Pakistan.
                        </div>
                        <div className="text-right">
                            <strong className="block text-red-400">Gandhi-Jinnah Talks</strong>
                            Failed. Jinnah rejected "Moth-eaten Pakistan".
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

