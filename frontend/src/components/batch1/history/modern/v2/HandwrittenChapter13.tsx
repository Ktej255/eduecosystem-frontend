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

export default function HandwrittenChapter13() {
    return (
        <div className="min-h-screen bg-[#fcfbf7] p-4 md:p-8 font-['Merriweather',_serif] text-gray-900 selection:bg-indigo-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Merriweather:wght@300;400;700&family=Caveat:wght@700&display=swap');
                
                .khadi-bg {
                    background-color: #fcfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
                }

                .handwritten-font {
                    font-family: 'Cedarville Cursive', cursive;
                }

                .caveat-font {
                    font-family: 'Caveat', cursive;
                }

                .khadi-card {
                    background-color: #ffffff;
                    border: 1px solid #e5e5e5;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    transition: transform 0.2s;
                }
                .khadi-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
                }

                .indigo-ink { color: #4B0082; }
                .earth-brown { color: #8B4513; }
                .blood-red { color: #8B0000; }
                
                .splatter {
                    background: radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
                }

                .thread-line {
                    border-left: 2px dashed #a0a0a0;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] z-0"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 dashed border-gray-400 z-0 opacity-30 transform -translate-x-1/2"></div>

            {/* HEADER: ASHRAM DIARY */}
            <header className="max-w-4xl mx-auto mb-16 text-center relative z-10 bg-white/90 p-8 shadow-sm border-b-4 border-indigo-900 rounded-sm">
                <div className="absolute top-4 right-4 animate-spin-slow opacity-20">
                    <div className="w-12 h-12 border-4 border-indigo-900 rounded-full border-t-transparent"></div>
                </div>

                <h2 className="handwritten-font text-3xl text-gray-500 mb-2 transform -rotate-2">My Experiment with Truth</h2>
                <h1 className="caveat-font text-6xl md:text-7xl font-bold mb-4 text-indigo-900 leading-tight">THE ARRIVAL</h1>
                <p className="text-xl md:text-2xl text-gray-700 italic font-serif">"Go to the villages. That is where India lives."</p>

                <div className="mt-8 flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="bg-gray-200 px-3 py-1 rounded-full border border-gray-400">1915: Return</span>
                    <span className="bg-indigo-100 px-3 py-1 rounded-full text-indigo-900 border border-indigo-200">1917: Champaran</span>
                    <span className="bg-red-100 px-3 py-1 rounded-full text-red-900 border border-red-200">1919: Jallianwala</span>
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                {/* LEFT COLUMN: RETURN, IDEOLOGY, TRIO */}
                <div className="space-y-8">

                    {/* RETURN & ASHRAMS */}
                    <div className="khadi-card p-6 border-l-4 border-indigo-500 relative">
                        <div className="flex items-center gap-4 mb-4">
                            <Footprints className="w-8 h-8 text-indigo-700" />
                            <h3 className="text-2xl font-bold indigo-ink font-serif">The Return (Jan 9, 1915)</h3>
                        </div>
                        <p className="text-sm mb-4">Celebrated as <strong>Pravasi Bharatiya Divas</strong>.</p>

                        <div className="bg-gray-50 p-4 border border-gray-200 mb-4 text-sm rounded italic text-gray-700">
                            "Spend one year with open ears and closed mouth." <br />
                            <span className="text-xs font-bold not-italic mt-1 block">– G.K. Gokhale (Political Guru)</span>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <div className="min-w-[4px] h-[4px] bg-indigo-500 rounded-full mt-2"></div>
                                <span><strong>Ashrams:</strong> Kochrab (1915) → Sabarmati (1917). Base for Khadi & Truth.</span>
                            </div>
                            <div className="bg-indigo-50 p-3 border border-indigo-200 relative mt-2 rounded">
                                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">DEBUT</span>
                                <h4 className="font-bold text-indigo-900">BHU Speech (Feb 1916)</h4>
                                <p className="text-xs mt-1">First public appearance. Scolded princes for wearing jewelry while millions starved.</p>
                            </div>
                        </div>
                    </div>

                    {/* IDEOLOGY CONCEPT CARD */}
                    <div className="khadi-card p-6 bg-[#fcfcfc]">
                        <h3 className="caveat-font text-3xl font-bold mb-4 text-center">The Weapon: Satyagraha</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-center">
                            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                                <strong className="block mb-1 text-yellow-900">Satya (Truth)</strong>
                                <span className="text-xs">Living the truth.</span>
                            </div>
                            <div className="p-3 bg-green-50 border border-green-200 rounded">
                                <strong className="block mb-1 text-green-900">Ahimsa</strong>
                                <span className="text-xs">Weapon of the strong.</span>
                            </div>
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                                <strong className="block mb-1 text-blue-900">Sarvodaya</strong>
                                <span className="text-xs">Welfare of all (Ruskin).</span>
                            </div>
                            <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                                <strong className="block mb-1 text-gray-900">Satyagraha</strong>
                                <span className="text-xs">Holding onto Truth.</span>
                            </div>
                        </div>
                    </div>

                    {/* EARLY TRIO (CAKE) */}
                    <div className="khadi-card p-0 overflow-hidden border-t-4 border-yellow-700">
                        <div className="bg-yellow-700 text-white p-3 text-center font-bold tracking-widest uppercase">
                            The Early Experiments (C-A-K-E)
                        </div>

                        <div className="p-6 space-y-6">
                            {/* CHAMPARAN */}
                            <div className="relative pl-6 border-l-2 border-indigo-300">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-indigo-900">1. Champaran (1917)</h4>
                                <div className="text-[10px] font-bold uppercase text-indigo-500 mb-2">First Civil Disobedience</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li><strong>Issue:</strong> Tinkathia (Indigo on 3/20th land).</li>
                                    <li><strong>Invited by:</strong> Rajkumar Shukla.</li>
                                    <li><strong>Lieutenants:</strong> Rajendra Prasad, J.B. Kripalani.</li>
                                    <li><strong>Outcome:</strong> <span className="bg-green-100 px-1 font-bold text-green-800">25% Refund</span>. Tagore gave title "Mahatma".</li>
                                </ul>
                            </div>

                            {/* AHMEDABAD */}
                            <div className="relative pl-6 border-l-2 border-yellow-400">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-600 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-yellow-900">2. Ahmedabad (1918)</h4>
                                <div className="text-[10px] font-bold uppercase text-yellow-600 mb-2">First Hunger Strike</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li><strong>Issue:</strong> Plague Bonus (50% vs 20%).</li>
                                    <li><strong>Key Ally:</strong> <span className="font-bold">Anusuya Sarabhai</span> (Sister of mill owner).</li>
                                    <li><strong>Result:</strong> 35% Hike Agreed.</li>
                                </ul>
                            </div>

                            {/* KHEDA */}
                            <div className="relative pl-6 border-l-2 border-green-600">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-700 border-2 border-white"></div>
                                <h4 className="font-bold text-xl text-green-900">3. Kheda (1918)</h4>
                                <div className="text-[10px] font-bold uppercase text-green-600 mb-2">First Non-Cooperation</div>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li><strong>Issue:</strong> Revenue suspension denied despite crop failure.</li>
                                    <li><strong>Leaders:</strong> <span className="font-bold">Sardar Patel</span> & Indulal Yagnik.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: 1919 FLASHPOINT & AFTERMATH */}
                <div className="space-y-8 md:mt-16">

                    {/* JALLIANWALA BAGH */}
                    <div className="khadi-card p-6 border-2 border-red-100 relative overflow-hidden">
                        {/* Blood splatter effect */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-6 text-red-900 uppercase flex items-center gap-2">
                            The Turning Point (1919)
                        </h3>

                        <div className="bg-gray-100 p-4 mb-6 border-l-4 border-black relative shadow-inner">
                            <h4 className="font-bold text-sm uppercase flex justify-between items-center">
                                The Black Act (Rowlatt)
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                            </h4>
                            <p className="text-xs italic mt-1 text-gray-600">"No Dalil, No Vakil, No Appeal." (Arrest without trial)</p>

                            <div className="mt-3 pt-3 border-t border-gray-300">
                                <p className="text-xs"><strong>Response:</strong> Rowlatt Satyagraha (<span className="font-bold">April 6, 1919</span>).</p>
                                <p className="text-xs mt-1">First Mass Strike (Hartal). Org by <span className="font-bold text-indigo-800">Satyagraha Sabha</span>.</p>
                                <p className="text-[10px] mt-2 text-red-600 font-bold bg-white px-1 inline-block border border-red-200">
                                    "Himalayan Miscalculation" (Called off after violence)
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-5 border border-red-300 relative rounded-sm">
                            <h4 className="font-bold text-xl text-red-900 mb-1">Jallianwala Bagh Massacre</h4>
                            <div className="text-[10px] font-bold uppercase mb-3 text-red-700 tracking-wider">
                                April 13, 1919 (Baisakhi) | Amritsar
                            </div>

                            <ul className="text-sm space-y-2 mb-4 text-gray-800">
                                <li><strong>Trigger:</strong> Arrest of <span className="font-bold">Dr. Satyapal & Saifuddin Kitchlew</span>.</li>
                                <li><strong>Villain:</strong> General Dyer (Fired 1650 rounds).</li>
                                <li><strong>Result:</strong> 1000+ Dead.</li>
                            </ul>

                            <div className="text-xs border-t border-red-200 pt-3 flex gap-4">
                                <div>
                                    <strong>Renunciations:</strong><br />
                                    Tagore (Knighthood)<br />
                                    Gandhi (Kaiser-i-Hind)
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-black text-white p-3 text-center text-xs rounded shadow">
                            <span className="font-bold text-red-500 uppercase tracking-widest">Justice Retired</span>
                            <br />
                            <strong>Udham Singh</strong> (Ram Mohammad Singh Azad) shot Michael O'Dwyer in London (1940).
                        </div>
                    </div>

                    {/* AFTERMATH & MEDIA */}
                    <div className="khadi-card p-6 bg-[#f8f8f8]">
                        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-b border-gray-300 pb-2">The Aftermath</h3>

                        <div className="space-y-4">
                            <div className="text-sm">
                                <strong className="text-blue-800 block mb-1">Official Inquiry: Hunter Commission</strong>
                                <ul className="text-xs list-disc ml-4 text-gray-600 space-y-1">
                                    <li><strong>Indian Members:</strong> Chimanlal Setalvad, Jagat Narayan, Sultan Ahmed.</li>
                                    <li><strong>Verdict:</strong> Condemned action, but no penalty. Whitewash.</li>
                                </ul>
                            </div>

                            <div className="text-sm border-t border-gray-200 pt-2">
                                <strong className="text-indigo-800 block mb-1">Congress Inquiry</strong>
                                <p className="text-xs text-gray-600 ml-4">Motilal Nehru, C.R. Das, Gandhi. (Demanded punishment).</p>
                            </div>

                            <div className="bg-yellow-50 p-3 border border-yellow-200 rounded mt-2">
                                <h4 className="font-bold text-sm uppercase text-yellow-900">Law of the Land: 1919 Act</h4>
                                <p className="text-xs mt-1"><strong>Montagu-Chelmsford Reforms:</strong> Introduced <span className="font-bold bg-yellow-200 px-1">Dyarchy</span> in Provinces.</p>
                                <p className="text-[10px] italic mt-1 text-gray-500">(Transferred Subjects: Ministers vs Reserved Subjects: Governor)</p>
                            </div>
                        </div>
                    </div>

                    {/* MEDIA & ASSOCIATES */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="khadi-card p-4 text-center">
                            <Megaphone className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                            <h4 className="font-bold text-sm uppercase">Journals</h4>
                            <p className="text-xs mt-1"><em>Young India</em> (English)</p>
                            <p className="text-xs"><em>Navajivan</em> (Gujarati)</p>
                        </div>
                        <div className="khadi-card p-4 text-center">
                            <Users className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                            <h4 className="font-bold text-sm uppercase">Key Associate</h4>
                            <p className="text-xs mt-1 font-bold">Sarojini Naidu</p>
                            <p className="text-[10px]">First woman leader to join Rowlatt Satyagraha.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hidden">Audio Cue: Sound of Charkha spinning in background.</div>
        </div>
    );
}
