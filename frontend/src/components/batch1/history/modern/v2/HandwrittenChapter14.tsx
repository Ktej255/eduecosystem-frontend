"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flag,
    Flame,
    Scale,
    Moon,
    Users,
    AlertTriangle,
    Gavel,
    Scroll,
    PenTool,
    Megaphone,
    XCircle,
    MapPin
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter14() {
    return (
        <div className="min-h-screen bg-[#f5f5dc] p-4 md:p-8 font-['Merriweather',_serif] text-gray-900 selection:bg-orange-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&family=Merriweather:wght@300;400;700&family=Special+Elite&display=swap');
                
                .khadi-texture {
                    background-color: #f5f5dc;
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .stencil-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .unity-card {
                    background-color: #fff;
                    border: 2px solid #2c2c2c;
                    box-shadow: 4px 4px 0px #2c2c2c;
                    transition: transform 0.2s;
                }
                .unity-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 0px #2c2c2c;
                }

                .khilafat-green { color: #006400; }
                .congress-saffron { color: #FF9933; }
                .burnt-black { color: #1a1a1a; }
                
                .split-screen-bg {
                    background: linear-gradient(135deg, #e8f5e9 0%, #e8f5e9 50%, #fff3e0 50%, #fff3e0 100%);
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] z-0"></div>

            {/* CHARKHA WATERMARK */}
            <div className="fixed right-[-100px] bottom-[-100px] opacity-10 pointer-events-none z-0">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v20M2 12h20" />
                </svg>
            </div>

            {/* HEADER: THE UNIFIED FLAG */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 border-b-8 border-double border-gray-800 pb-8 pt-4">
                <div className="flex justify-center items-center gap-4 mb-2 opacity-60">
                    <Moon className="w-8 h-8 khilafat-green fill-current" />
                    <span className="text-2xl font-bold">+</span>
                    <div className="w-8 h-8 rounded-full border-4 border-orange-500"></div>
                </div>
                <h1 className="stencil-font text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2 text-gray-900">
                    THE GREAT BOYCOTT
                </h1>
                <p className="typewriter-font text-xl font-bold bg-black text-white inline-block px-4 py-1 transform -rotate-1">
                    "Swaraj in One Year"
                </p>
                <div className="mt-4 flex justify-center gap-6 text-sm font-bold uppercase">
                    <span className="flex items-center gap-1"><Flag className="w-4 h-4" /> Non-Cooperation</span>
                    <span className="flex items-center gap-1"><Moon className="w-4 h-4" /> Khilafat</span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: CAUSE, LAUNCH, PROGRAM */}
                <div className="lg:col-span-6 space-y-8">

                    {/* TWIN CAUSES */}
                    <div className="unity-card p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-100 text-red-800 px-2 py-1 text-[10px] font-bold border-l border-b border-red-300">WHY NOW?</div>
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase">The Twin Wrongs</h3>

                        <div className="space-y-4">
                            <div className="bg-red-50 p-3 border-l-4 border-red-600">
                                <h4 className="font-bold text-sm uppercase text-red-900">1. Punjab Wrong</h4>
                                <p className="text-xs mt-1">Jallianwala Bagh Massacre & Hunter Committee Whitewash.</p>
                            </div>

                            <div className="bg-green-50 p-3 border-l-4 border-green-700">
                                <h4 className="font-bold text-sm uppercase text-green-900">2. Khilafat Wrong</h4>
                                <p className="text-xs mt-1">Mistreatment of Ottoman Sultan (Khalifa) after WWI.</p>
                                <div className="mt-2 text-xs bg-white p-2 border border-green-200">
                                    <strong>Khilafat Day:</strong> Oct 17, 1919 (Start Date)<br />
                                    <strong>Leaders:</strong> Ali Brothers, Maulana Azad, Hakim Ajmal Khan.<br />
                                    <strong>Gandhi:</strong> "Golden opportunity for unity."
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SESSIONS: TALE OF TWO CITIES */}
                    <div className="unity-card p-0">
                        <div className="p-4 bg-gray-800 text-white text-center font-bold uppercase stencil-font">
                            A Tale of Two Sessions (1920)
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                            <div className="p-4 border-r border-gray-300 bg-gray-50">
                                <h4 className="font-bold text-lg mb-1">Calcutta (Sept)</h4>
                                <p className="text-xs italic mb-2">Special Session</p>
                                <ul className="text-xs space-y-2 list-disc ml-4">
                                    <li><strong>Prez:</strong> Lala Lajpat Rai.</li>
                                    <li><strong>Action:</strong> Gandhi moved NCM resolution.</li>
                                    <li><strong>Opposed by:</strong> C.R. Das.</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-orange-50">
                                <h4 className="font-bold text-lg mb-1 text-orange-900">Nagpur (Dec)</h4>
                                <p className="text-xs italic mb-2">Annual Session</p>
                                <ul className="text-xs space-y-2 list-disc ml-4">
                                    <li><strong>Prez:</strong> C. Vijayaraghavachariar.</li>
                                    <li><strong>Twist:</strong> C.R. Das moved resolution!</li>
                                    <li><strong>Goal:</strong> "Swaraj within Empire if possible..."</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-300 bg-blue-50">
                            <strong className="text-blue-900 uppercase text-xs block mb-2">New Constitution (Nagpur)</strong>
                            <ul className="text-xs grid grid-cols-2 gap-2">
                                <li className="flex items-center gap-1"><Users className="w-3 h-3" /> CWC (15 members)</li>
                                <li className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Linguistic Provinces</li>
                                <li className="flex items-center gap-1">💰 Fee: 4 Annas</li>
                                <li className="flex items-center gap-1">🚪 Exits: Jinnah, Besant, Pal</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROGRAM */}
                    <div className="unity-card p-6 bg-white relative">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase flex items-center gap-2">
                            The Program <Flame className="w-5 h-5 text-orange-600" />
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="border border-red-200 p-3 bg-red-50/50">
                                <h4 className="font-bold text-red-800 text-sm uppercase mb-2 border-b border-red-200 pb-1">Boycott (Negative)</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 text-gray-700">
                                    <li>Govt Schools/Colleges.</li>
                                    <li>Law Courts.</li>
                                    <li>Legislative Councils.</li>
                                    <li>Foreign Cloth (Bonfires).</li>
                                    <li>Titles & Honors.</li>
                                </ul>
                            </div>
                            <div className="border border-green-200 p-3 bg-green-50/50">
                                <h4 className="font-bold text-green-800 text-sm uppercase mb-2 border-b border-green-200 pb-1">Constructive (Positive)</h4>
                                <ul className="text-xs space-y-1 list-disc ml-4 text-gray-700">
                                    <li>National Schools (Jamia, Vidyapiths).</li>
                                    <li>Hindu-Muslim Unity.</li>
                                    <li>Removal of Untouchability.</li>
                                    <li><strong>Tilak Swaraj Fund</strong> (1 Crore).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 text-xs border border-gray-300">
                            <div className="flex justify-between items-center mb-1">
                                <strong className="uppercase">Workers United</strong>
                                <span className="text-[10px] font-bold bg-black text-white px-1">AITUC (1920)</span>
                            </div>
                            <p>Founded Oct 1920, Bombay. First Prez: <strong>Lala Lajpat Rai</strong>.</p>
                            <p className="italic text-gray-600 mt-1">"Imperialism and Militarism are twin children of Capitalism."</p>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SPREAD, REGIONAL FIRES, END */}
                <div className="lg:col-span-6 space-y-8">

                    {/* THE SPREAD */}
                    <div className="unity-card p-6">
                        <h3 className="stencil-font text-xl font-bold mb-4 uppercase border-b-2 border-gray-800 pb-2">
                            The Mass Surge
                        </h3>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1 bg-yellow-50 p-3 border border-yellow-200">
                                    <h4 className="font-bold text-sm text-yellow-900 mb-1">Students & Schools</h4>
                                    <ul className="text-[10px] space-y-1 text-gray-700">
                                        <li><strong>Subhash Bose:</strong> Principal, National College Calcutta.</li>
                                        <li><strong>New Unis:</strong> Jamia Millia, Bihar/Gujarat/Kashi Vidyapiths.</li>
                                    </ul>
                                </div>
                                <div className="flex-1 bg-blue-50 p-3 border border-blue-200">
                                    <h4 className="font-bold text-sm text-blue-900 mb-1">Lawyers Quit</h4>
                                    <p className="text-[10px] leading-tight text-gray-700">
                                        Motilal Nehru, C.R. Das, Patel, Rajagopalachari, Kitchlew gave up practice.
                                    </p>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-3 py-1">
                                <h4 className="font-bold text-sm text-purple-900">Women's Awakening</h4>
                                <p className="text-xs text-gray-600"><strong>Basanti Devi</strong> (Wife of C.R. Das) arrested. Sparked outrage.</p>
                            </div>

                            <div className="bg-black text-white p-3 text-center">
                                <h4 className="font-bold text-sm uppercase">🚫 Prince of Wales Visit (Nov 1921)</h4>
                                <p className="text-xs opacity-80">Met with Black Flags and "Ghost Cities".</p>
                                <p className="text-[10px] italic mt-1 text-gray-400 opacity-60">(Duke of Connaught boycotted earlier in 1921)</p>
                            </div>
                        </div>
                    </div>

                    {/* REGIONAL FIRES MAP */}
                    <div className="bg-[#e0e0e0] p-4 text-xs font-mono border-2 border-dashed border-gray-500 rounded relative">
                        <div className="absolute -top-3 left-4 bg-gray-500 text-white px-2 py-1 text-[10px] font-bold uppercase">Regional Fires</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-white p-2 shadow-sm">
                                <strong className="text-red-700 block">🔥 Moplah (Kerala)</strong>
                                <span className="text-[10px] text-gray-600">Anti-Jenmi turned Communal. Wagon Tragedy.</span>
                            </div>
                            <div className="bg-white p-2 shadow-sm">
                                <strong className="text-orange-700 block">🚩 Akali (Punjab)</strong>
                                <span className="text-[10px] text-gray-600">Liberate Gurdwaras. Nankana Massacre.</span>
                            </div>
                            <div className="bg-white p-2 shadow-sm">
                                <strong className="text-green-700 block">🌾 Eka (UP)</strong>
                                <span className="text-[10px] text-gray-600">Madari Pasi. Unity Oath (Hole with water).</span>
                            </div>
                            <div className="bg-white p-2 shadow-sm">
                                <strong className="text-blue-700 block">🚜 Bijolia (Raj)</strong>
                                <span className="text-[10px] text-gray-600">Vijay Singh Pathik. Anti-Feudal.</span>
                            </div>
                            <div className="col-span-2 bg-white p-2 shadow-sm text-center">
                                <strong className="text-indigo-700 block">⛺ Chirala-Perala (Andhra)</strong>
                                <span className="text-[10px] text-gray-600">T. Prakasam. Evacuated town to avoid tax.</span>
                            </div>
                        </div>
                    </div>

                    {/* SUDDEN END & AFTERMATH */}
                    <div className="unity-card p-6 border-red-900 border-2 bg-white">
                        <h3 className="stencil-font text-2xl font-bold mb-4 uppercase text-red-900 flex items-center gap-2">
                            The Sudden End <XCircle className="w-6 h-6" />
                        </h3>

                        <div className="mb-4 bg-red-100 p-3 border-l-4 border-red-900">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-red-900 text-sm">CHAURI CHAURA</h4>
                                <span className="text-[10px] font-bold">Feb 5, 1922</span>
                            </div>
                            <p className="text-xs text-red-800">Mob burned police station. 22 policemen died.</p>
                            <div className="mt-2 text-xs bg-white p-2 border border-red-200 text-center font-bold">
                                Gandhi withdrew movement (Bardoli Resolution, Feb 12)
                            </div>
                            <p className="text-[10px] italic mt-1 text-center text-gray-600">Planned "No-Tax" in Bardoli cancelled.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                            <div className="p-2 border border-gray-200">
                                <strong>Subhash Bose:</strong> "National Calamity."
                            </div>
                            <div className="p-2 border border-gray-200">
                                <strong>Motilal Nehru:</strong> "Why punish Kanyakumari for Gorakhpur?"
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-3 space-y-3">
                            <div className="flex items-start gap-2">
                                <Gavel className="w-4 h-4 text-gray-700 mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">The Great Trial (March 1922)</h4>
                                    <p className="text-xs text-gray-600">Judge Broomfield. Gandhi pleaded guilty. 6 Years Jail.</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-2 text-center text-xs">
                                <strong>Dec 1922: Gaya Session Split</strong>
                                <br />
                                <span className="text-[10px]">C.R. Das (Swaraj Party) vs No-Changers (Patel/Rajendra).</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* HASRAT MOHANI NOTE */}
            <div className="max-w-4xl mx-auto mt-8 text-center opacity-60 text-xs font-mono">
                Radical Voice: <strong>Hasrat Mohani</strong> demanded 'Purna Swaraj' in 1921 (Ahmedabad). Gandhi rejected it (then).
            </div>
        </div>
    );
}

