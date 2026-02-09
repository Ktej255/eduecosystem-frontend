"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Newspaper,
    Flag,
    Megaphone,
    Scale,
    Users,
    Globe,
    Handshake,
    Scroll,
    PenTool,
    AlertTriangle,
    BadgeCheck
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter12() {
    return (
        <div className="min-h-screen bg-[#fcfcfc] p-4 md:p-8 font-['Lora',_serif] text-gray-900 selection:bg-green-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=League+Spartan:wght@400;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap');
                
                .newsprint-bg {
                    background-color: #f3f3f3;
                    background-image: url("https://www.transparenttextures.com/patterns/newspaper.png");
                }

                .pamphlet-card {
                    background-color: #fff;
                    border: 1px solid #e0e0e0;
                    box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }
                .pamphlet-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 0px rgba(0,0,0,0.15);
                }

                .headline-font {
                    font-family: 'Oswald', sans-serif;
                }

                .spartan-font {
                    font-family: 'League Spartan', sans-serif;
                }

                .flag-stripe-green {
                    background: repeating-linear-gradient(45deg, #50C878, #50C878 10px, #45b069 10px, #45b069 20px);
                }
                .flag-stripe-saffron {
                    background: repeating-linear-gradient(45deg, #FF9933, #FF9933 10px, #e68a2e 10px, #e68a2e 20px);
                }

                .unity-gradient {
                    background: linear-gradient(90deg, #50C878 50%, #FF9933 50%);
                }
            `}</style>

            {/* BACKGROUND TEXTURE OVERLAY */}
            <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/newspaper.png')] z-0"></div>

            {/* HEADER: NEW INDIA DAILY */}
            <header className="max-w-4xl mx-auto mb-16 text-center relative z-10 border-b-4 border-double border-gray-800 pb-6 pt-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-300 pb-1">
                    <span>Vol. 1916</span>
                    <span>Price: 1 Anna</span>
                    <span>New India Daily</span>
                </div>
                <h1 className="headline-font text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-2 text-purple-900">
                    THE HERALD OF UNITY
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-gray-700 font-serif">
                    "Swaraj is my Birthright and I shall have it!"
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: CONTEXT & LEAGUES */}
                <div className="lg:col-span-6 space-y-8">

                    {/* WWI CONTEXT */}
                    <div className="pamphlet-card p-6 border-t-8 border-gray-800 relative">
                        <h3 className="spartan-font text-2xl font-bold mb-4 uppercase flex items-center gap-2">
                            <Globe className="w-6 h-6" /> The War Context (1914-18)
                        </h3>
                        <p className="text-sm mb-4 leading-relaxed">
                            Britain was fighting Germany. Indians supported the war hoping for rewards (Self-Rule).
                        </p>
                        <div className="bg-gray-100 p-4 border-l-4 border-black text-sm relative">
                            <div className="absolute -right-2 -top-2 bg-black text-white px-2 py-0.5 text-[10px] font-bold">REALITY CHECK</div>
                            <strong>1916 Realization:</strong>
                            <ul className="mt-2 space-y-1 list-disc ml-4 text-xs text-gray-700">
                                <li>Heavy Taxation + Price Hikes = Disillusionment.</li>
                                <li><strong>Need:</strong> A new agitation for <span className="bg-green-200 px-1 font-bold">Self-Government</span>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE TWO LEAGUES */}
                    <div className="pamphlet-card p-0 overflow-hidden relative">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* TILAK */}
                            <div className="bg-orange-50 p-6 border-b md:border-b-0 md:border-r border-orange-200 relative">
                                <div className="absolute top-0 left-0 w-full h-2 flag-stripe-saffron"></div>
                                <h3 className="headline-font text-2xl font-bold text-orange-800 mb-2 mt-2">TILAK'S LEAGUE</h3>
                                <div className="text-[10px] font-bold uppercase mb-4 text-orange-600 bg-orange-100 inline-block px-1">April 1916 | HQ: Poona</div>
                                <ul className="text-xs space-y-3 list-disc ml-4 font-medium text-gray-800">
                                    <li><strong>Area:</strong> Maharashtra (excl. Bombay), Karnataka, Central Provinces.</li>
                                    <li><strong>Style:</strong> Blunt, Marathi/English.</li>
                                    <li><strong>Journals:</strong> <em>Kesari</em> & <em>Mahratta</em>.</li>
                                    <li><strong>Org:</strong> <span className="bg-orange-200 px-1 border border-orange-400">6 Branches</span> (Tight discipline).</li>
                                </ul>
                            </div>

                            {/* BESANT */}
                            <div className="bg-green-50 p-6 relative">
                                <div className="absolute top-0 left-0 w-full h-2 flag-stripe-green"></div>
                                <h3 className="headline-font text-2xl font-bold text-green-800 mb-2 mt-2">BESANT'S LEAGUE</h3>
                                <div className="text-[10px] font-bold uppercase mb-4 text-green-600 bg-green-100 inline-block px-1">Sept 1916 | HQ: Adyar</div>
                                <ul className="text-xs space-y-3 list-disc ml-4 font-medium text-gray-800">
                                    <li><strong>Area:</strong> Rest of India (incl. Bombay City).</li>
                                    <li><strong>Style:</strong> Intellectual, Organized.</li>
                                    <li><strong>Journals:</strong> <em>New India</em> & <em>Commonweal</em>.</li>
                                    <li><strong>Org:</strong> <span className="bg-green-200 px-1 border border-green-400">200+ Branches</span> (Loose).</li>
                                </ul>
                                <div className="mt-4 text-[10px] text-gray-600 italic bg-white p-2 border border-green-200 rounded">
                                    <strong>Lieutenants:</strong> Shankarlal Banker, Jamnadas Dwarkadas, J.L. Nehru.
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white text-[10px] p-2 text-center uppercase tracking-wider font-bold">
                            "Separation is not due to quarrel, but convenience." — Tilak
                        </div>
                    </div>

                    {/* REPRESSION & RESPONSE */}
                    <div className="pamphlet-card p-6 bg-red-50 border-2 border-red-100 relative">
                        <h3 className="spartan-font text-xl font-bold mb-4 text-red-900 uppercase flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> The Conflict
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="min-w-[40px] text-2xl">👮‍♂️</div>
                                <div>
                                    <h4 className="font-bold text-sm text-red-800">June 1917: Annie Besant Arrested</h4>
                                    <p className="text-xs text-gray-700 mt-1">Sparked nationwide protests.</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-red-800 pl-4 py-1">
                                <h4 className="font-bold text-sm">The Renunciation</h4>
                                <p className="text-xs italic bg-white p-1 inline-block border border-gray-200 mt-1">"I cannot wear this distinction in these days..."</p>
                                <p className="text-[10px] font-bold mt-1 uppercase text-red-700">— Sir S. Subramaniya Iyer (Renounced Knighthood)</p>
                            </div>

                            <div className="bg-white p-3 border border-red-200 shadow-sm relative">
                                <div className="absolute -top-2 -right-2 transform rotate-3">
                                    <Badge variant="outline" className="bg-white border-red-800 text-red-800 font-bold text-[10px]">WALKOUT</Badge>
                                </div>
                                <h4 className="font-bold text-sm text-red-700 uppercase">War Conference (1918)</h4>
                                <p className="text-xs mt-1">Lord Willingdon insulted leaders. <span className="font-bold">Tilak & Jinnah walked out</span>.</p>
                            </div>

                            <div className="bg-green-100 p-3 border border-green-300 text-center">
                                <h4 className="font-bold text-sm text-green-800 uppercase">The Carrot: August Declaration (1917)</h4>
                                <p className="text-xs mt-1">Montagu promised "Gradual development of <span className="font-bold bg-white px-1">Self-Governing Institutions</span>."</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: LUCKNOW PACT, HEROES, ANALYSIS */}
                <div className="lg:col-span-6 space-y-8">

                    {/* OBITUARY NOTICE */}
                    <div className="border-4 border-black p-4 bg-gray-100 text-center relative max-w-sm mx-auto transform -rotate-1">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase">Obituary: The Old Guard</div>
                        <h4 className="font-serif italic text-lg mb-1">In Memoriam (1915)</h4>
                        <p className="font-bold uppercase text-sm mb-2">G.K. Gokhale & Pherozeshah Mehta</p>
                        <div className="text-xs border-t border-gray-400 pt-2 mt-2">
                            <strong>Effect:</strong> Removed opposition to Extremists. Tilak readmitted to Congress (1916).
                        </div>
                    </div>

                    {/* LUCKNOW PACT */}
                    <div className="pamphlet-card p-6 relative overflow-hidden">
                        <div className="unity-gradient h-16 w-full absolute top-0 left-0 flex items-center justify-center">
                            <div className="bg-white/90 px-4 py-1 rounded shadow-sm">
                                <h3 className="headline-font text-2xl font-bold uppercase tracking-widest text-gray-900">LUCKNOW PACT 1916</h3>
                            </div>
                        </div>

                        <div className="mt-12 text-center mb-6">
                            <p className="text-sm italic font-serif text-gray-600">"Reborn in the garden of Wajid Ali Shah."</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                            <div className="bg-purple-50 p-4 border border-purple-200">
                                <strong className="text-purple-900 uppercase text-xs block mb-2">Double Unity</strong>
                                <ul className="text-xs list-disc ml-4 space-y-1">
                                    <li>Extremists readmitted.</li>
                                    <li>Congress-League Pact.</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-4 border border-purple-200">
                                <strong className="text-purple-900 uppercase text-xs block mb-2">Key Architect</strong>
                                <p className="font-bold text-lg">M.A. Jinnah</p>
                                <p className="text-[10px] italic mt-1">"Ambassador of Hindu-Muslim Unity" — Sarojini Naidu</p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-4 text-xs border border-red-200 text-gray-800">
                            <strong className="text-red-700 block mb-1 uppercase flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> The Historic Blunder
                            </strong>
                            Congress accepted <span className="font-bold bg-red-100 px-1">Separate Electorates</span>.
                            <br /><em className="text-gray-500 mt-1 block">Criticism: Legitimized communal politics (Seed of "Two-Nation Theory").</em>
                        </div>
                    </div>

                    {/* HEROES & HIGHLIGHTS */}
                    <div className="pamphlet-card p-6">
                        <h3 className="spartan-font text-xl font-bold mb-4 uppercase text-gray-800 border-b-2 border-gray-800 pb-2">
                            Headlines & Heroes
                        </h3>

                        <div className="grid gap-4">
                            <div className="flex justify-between items-center bg-gray-50 p-3 border border-gray-200">
                                <div>
                                    <h4 className="font-bold text-sm text-purple-900">First Woman President</h4>
                                    <p className="text-xs text-gray-600">Annie Besant (Calcutta Session, 1917).</p>
                                </div>
                                <BadgeCheck className="w-6 h-6 text-purple-300" />
                            </div>

                            <div className="bg-blue-50 p-3 border border-blue-200">
                                <h4 className="font-bold text-sm text-blue-900">The Hero of Bombay (1918)</h4>
                                <p className="text-xs text-gray-800 mt-1">Jinnah led the <strong>Anti-Willingdon Protest</strong>.</p>
                                <div className="mt-2 text-[10px] bg-white p-1 inline-block border border-blue-100 font-bold uppercase text-blue-800">
                                    Legacy: Jinnah Memorial Hall (Congress House)
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 bg-yellow-50 p-3 border border-yellow-200">
                                    <h4 className="font-bold text-sm text-yellow-800 mb-1">Bi-Amman</h4>
                                    <p className="text-[10px] leading-tight">Mother of Ali Brothers. Addressed meetings from behind purdah.</p>
                                </div>
                                <div className="flex-1 bg-gray-50 p-3 border border-gray-200">
                                    <h4 className="font-bold text-sm text-gray-800 mb-1">Chirol Case</h4>
                                    <p className="text-[10px] leading-tight">Tilak sued Chirol ("Father of Indian Unrest") in London. Lost, but made a statement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ANALYSIS TABLE */}
                    <div className="bg-white border-2 border-gray-800 p-4">
                        <h4 className="font-bold text-sm uppercase mb-3 text-center bg-gray-800 text-white py-1 spartan-font">Analysis: Swadeshi vs Home Rule</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs text-center font-bold uppercase bg-gray-100 py-2 mb-2">
                            <span>Feature</span>
                            <span className="text-orange-600">Swadeshi</span>
                            <span className="text-green-600">Home Rule</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="grid grid-cols-3 gap-2 text-center border-b border-gray-200 pb-2">
                                <span className="font-bold text-gray-500">Nature</span>
                                <span>Religio-Political</span>
                                <span className="font-bold bg-green-100">Secular</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center border-b border-gray-200 pb-2">
                                <span className="font-bold text-gray-500">Reach</span>
                                <span>Bengal/Punjab</span>
                                <span className="font-bold bg-green-100">Pan-India</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <span className="font-bold text-gray-500">Base</span>
                                <span>Students/Zamindars</span>
                                <span className="font-bold bg-green-100">Merchants/Pros</span>
                            </div>
                        </div>
                    </div>

                    {/* TRANSITION CARD */}
                    <div className="bg-[#2c2c2c] text-gray-100 p-6 relative overflow-hidden rounded-sm">
                        <div className="absolute right-0 top-0 text-6xl text-white opacity-5 transform rotate-12 font-black">1920</div>
                        <h3 className="spartan-font text-xl font-bold mb-2 text-yellow-400 uppercase">THE TRANSITION</h3>
                        <p className="text-sm mb-4 text-gray-300">The flame passes to a new leader.</p>

                        <div className="flex items-center gap-4 bg-white/10 p-3 rounded border border-white/20">
                            <div className="text-3xl">Gandhi</div>
                            <div className="text-[10px] md:text-xs">
                                <p><strong>1920:</strong> Accepts presidency of All India Home Rule League.</p>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="px-1 bg-yellow-400 text-black font-bold uppercase text-[10px]">RENAMED TO</span>
                                    <span className="font-bold uppercase tracking-wider">Swarajya Sabha</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

