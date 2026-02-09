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

export default function HandwrittenChapter3() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Kalam',_cursive] text-[#003366] selection:bg-orange-100 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Patrick+Hand&display=swap');
                
                .handwritten-paper {
                    background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
                    background-attachment: local;
                }
                
                .nautical-notebook {
                    position: relative;
                    background-color: #fff;
                    border: 2px solid #003366;
                    box-shadow: 5px 5px 0px #003366;
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
                    background-color: #fef08a;
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                }

                .spiced-orange { color: #CC5500; }
                .ocean-blue { color: #003366; }

                .ship-bullet {
                    display: inline-block;
                    margin-right: 8px;
                    color: #CC5500;
                }

                .title-shadow {
                    text-shadow: 2px 2px 0px rgba(0,51,102,0.1);
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
                        <Compass className="w-16 h-16 animate-spin-slow text-[#CC5500]" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Permanent_Marker'] ocean-blue mb-2 title-shadow tracking-tighter">
                        ADVENT OF THE EUROPEANS
                    </h1>
                    <p className="text-xl md:text-2xl text-[#CC5500] font-bold opacity-80 uppercase tracking-widest italic">
                        --- The Age of Sail: Trade, Factories, & Forts ---
                    </p>
                </motion.div>

                <div className="mt-8 bg-[#fff] p-6 paper-border border-2 border-dashed border-[#003366] max-w-2xl mx-auto transform rotate-1 shadow-sm">
                    <p className="text-lg leading-relaxed italic">
                        "The discovery of America and that of a passage to the East Indies by the Cape of Good Hope are the two greatest and most important events recorded in the history of mankind."
                        <span className="block text-right mt-2 font-bold">— Adam Smith</span>
                    </p>
                </div>
            </header>

            {/* EUROPEAN SETTLEMENTS STRATEGIC OVERVIEW */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
                <div className="bg-white p-8 paper-border border-2 border-[#003366] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Anchor className="w-32 h-32" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] mb-6 ocean-blue">Strategic Motivation</h2>
                    <ul className="space-y-4 text-xl">
                        <li className="flex gap-3">
                            <span className="ship-bullet">⚓</span>
                            <span><strong>Direct Sea Route:</strong> Bypass Arab & Venetian monopolies.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="ship-bullet">⚓</span>
                            <span><strong>Spices:</strong> Demand for Pepper, Cinnamon, & Cloves in Europe.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="ship-bullet">⚓</span>
                            <span><strong>Christianity:</strong> Crusading spirit against Islam (Portuquese).</span>
                        </li>
                    </ul>
                </div>

                {/* INTERACTIVE MAP PLACEHOLDER */}
                <div className="bg-slate-100 p-8 paper-border border-2 border-slate-300 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-slate-50 transition-colors">
                    <MapIcon className="w-20 h-20 text-slate-400 group-hover:text-blue-500 transition-colors mb-4" />
                    <h3 className="marker-label text-2xl text-slate-600 mb-2 font-['Permanent_Marker']">[ INTERACTIVE MAP ]</h3>
                    <p className="text-slate-500 italic max-w-xs">Hover to reveal Major European Settlements (Calicut, Goa, Surat, Pondicherry, Calcutta)</p>
                    <Badge variant="outline" className="mt-4">Visual Explorer coming soon</Badge>
                </div>
            </div>

            {/* THE BIG FOUR MASONRY GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 relative z-10">

                {/* 1. THE PORTUGUESE */}
                <section className="bg-white p-8 paper-border border-b-8 border-r-8 border-[#003366] transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl font-['Permanent_Marker'] ocean-blue">1. THE PORTUGUESE (Estado da India)</h2>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">1498 – 1961</span>
                    </div>

                    <div className="space-y-6 text-lg">
                        <div className="bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-800">
                            <p className="font-bold flex items-center gap-2">
                                <Ship className="w-5 h-5" /> The Arrival (1498)
                            </p>
                            <p><strong>Vasco da Gama</strong> arrived at Calicut. Guided by pilot <strong>Abdul Majid</strong>. Welcomed by <strong>Zamorin</strong> (Manavikrama). 60x profit on pepper!</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-white paper-border border-slate-200 shadow-sm transform -rotate-1">
                                <CardContent className="p-4">
                                    <h4 className="font-bold border-b mb-2">Almeida <span className="text-xs italic">(1505-09)</span></h4>
                                    <p className="text-sm"><strong>"Blue Water Policy"</strong>. Aim: Mastery of the sea. Defeated Egyptians at Battle of Diu (1509).</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white paper-border border-slate-200 shadow-sm transform rotate-1">
                                <CardContent className="p-4">
                                    <h4 className="font-bold border-b mb-2">Albuquerque <span className="text-xs italic">(1509-15)</span></h4>
                                    <p className="text-sm">Real Founder. Captured <strong>Goa (1510)</strong>. Abolished Sati. Forbade Dutch trade.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="p-4 bg-orange-50 border-orange-200 border rounded-lg italic text-sm">
                            <span className="font-bold text-[#CC5500]">Cultural Legacy:</span>
                            <br />• First Printing Press (Goa, 1556)
                            <br />• Introduced: Tobacco, Cashew, Pineapple, Potato, Chilli 🌶️
                        </div>

                        <div className="text-sm text-red-800 bg-red-50 p-3 rounded border border-red-100">
                            <strong>1632 Conflict:</strong> Expelled from Hugli by <strong>Qasim Khan</strong> (under Shah Jahan) for slave trading.
                        </div>
                    </div>
                </section>

                {/* 2. THE DUTCH & THE DANES */}
                <div className="space-y-12">
                    {/* DUTCH */}
                    <section className="bg-white p-8 paper-border border-b-8 border-r-8 border-orange-500 transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-['Permanent_Marker'] text-orange-700">2. THE DUTCH (VOC)</h2>
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">1602 – 1759</span>
                        </div>
                        <p className="body-handwritten mb-4 text-lg">Focus: <strong>Spice Islands (Indonesia)</strong> more than India. HQ: Pulicat &rarr; Negapatam.</p>

                        <div className="bg-stone-50 p-4 paper-border border-dashed border-stone-300 mb-4">
                            <h4 className="marker-label text-sm uppercase mb-2">Economic Commodities</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-stone-600">Textiles (Silk/Cotton)</Badge>
                                <Badge className="bg-stone-600">Saltpeter (Bihar)</Badge>
                                <Badge className="bg-stone-600">Opium (China)</Badge>
                                <Badge className="bg-stone-600">Indigo (Yamuna)</Badge>
                            </div>
                        </div>

                        <div className="text-sm border-l-4 border-orange-300 pl-4 py-2 bg-orange-50/50 italic mb-4">
                            <span className="font-bold">Massacre of Amboyna (1623):</span> Dutch killed Englishmen in Indonesia. Result? English focused on India, Dutch on Spices.
                        </div>

                        <p className="body-handwritten text-lg"><strong>Final Blow:</strong> Defeated by English at <strong>Battle of Bedara (1759)</strong>.</p>
                    </section>

                    {/* DANES Injection */}
                    <section className="bg-red-50 p-6 paper-border border-2 border-red-200 transform -rotate-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-white border border-red-300 flex items-center justify-center font-bold text-red-600 shadow-sm">
                                <Flag className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-red-900 marker-label tracking-tighter uppercase">The Forgotten Danes (1616)</h3>
                        </div>
                        <ul className="text-sm space-y-1 italic text-red-900/80">
                            <li>• <strong>Tranquebar (TN):</strong> Established 1620.</li>
                            <li>• <strong>Serampore (Bengal):</strong> Established 1755 (Hub for Missionaries).</li>
                            <li>• <strong>Missionary View:</strong> More interested in Christianity than trade.</li>
                            <li>• Sold everything to British in <span className="marker-yellow">1845</span>.</li>
                        </ul>
                    </section>
                </div>

                {/* 3. THE ENGLISH */}
                <section className="lg:col-span-2 bg-white p-10 paper-border border-b-8 border-r-8 border-[#003366] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 translate-x-1/4">
                        <Ship className="w-96 h-96" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <h2 className="text-4xl font-['Permanent_Marker'] ocean-blue">3. THE ENGLISH (The Empire Builders)</h2>
                        <div className="flex flex-col items-end">
                            <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-lg font-bold">1600 – 1947</span>
                            <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">"United Company of Merchants of England"</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {/* Madras */}
                        <div className="bg-slate-50 p-6 paper-border border-2 border-slate-200 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-100 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-blue-800 text-xl mb-3">Madras (1639)</h3>
                            <p className="body-handwritten text-lg leading-relaxed">
                                Leased by <span className="font-bold">Francis Day</span> from Raja of Chandragiri. Built <span className="highlight bg-blue-50 px-1 border-b-2 border-blue-400">Fort St. George</span>.
                            </p>
                        </div>

                        {/* Bombay */}
                        <div className="bg-slate-50 p-6 paper-border border-2 border-slate-200 relative group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-indigo-100 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-indigo-800 text-xl mb-3">Bombay (1662)</h3>
                            <p className="body-handwritten text-lg leading-relaxed">
                                Acquired as <strong>Dowry</strong> from Portuguese (Charles II m. Catherine). Leased to EIC for <span className="font-bold">£10/year</span>.
                            </p>
                        </div>

                        {/* Calcutta */}
                        <div className="bg-slate-50 p-6 paper-border border-2 border-slate-200 relative group">
                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-cyan-100 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                            <h3 className="marker-label text-cyan-800 text-xl mb-3">Calcutta (1690)</h3>
                            <p className="body-handwritten text-lg leading-relaxed">
                                <span className="font-bold">Job Charnock</span> bought Sutanuti, Govindpur, Kalikata. Fortified as <span className="highlight bg-cyan-50 px-1 border-b-2 border-cyan-400">Fort William (1700)</span>.
                            </p>
                        </div>
                    </div>

                    {/* MAGNA CARTA & FARMANS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-900 p-8 rounded-3xl text-white">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-orange-400">
                                <Scroll className="w-10 h-10" />
                                <h3 className="marker-label text-2xl font-['Permanent_Marker']">The Magna Carta (1717)</h3>
                            </div>
                            <p className="body-handwritten text-xl text-blue-100 leading-relaxed">
                                <span className="font-bold text-white">Farrukhsiyar’s Farmans:</span> Allowed <span className="underline decoration-orange-400">duty-free trade</span> in Bengal via <strong>Dastaks</strong> (Passes).
                            </p>
                            <div className="mt-4 flex gap-4 text-sm font-bold text-orange-200">
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Surat (Duty Free)</span>
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> EIC Coins accepted</span>
                            </div>
                        </div>
                        <div className="space-y-3 bg-white/10 p-4 rounded-xl body-handwritten text-sm">
                            <p className="font-bold border-b border-white/20 pb-1 uppercase tracking-widest text-orange-400">Expansion Milestones:</p>
                            <p>• <span className="marker-yellow text-slate-900">1612:</span> Battle of Swally Hole (Capt. Best beat Portuguese).</p>
                            <p>• <span className="marker-yellow text-slate-900">1632:</span> Golden Farman (Golconda Sultan - 500 pagodas).</p>
                            <p>• <span className="marker-yellow text-slate-900">1633:</span> First Eastern Factories (Hariharpur & Balasore).</p>
                            <p>• <span className="marker-yellow text-slate-900">1681:</span> <strong>William Hedges</strong> - First Agent in Bengal.</p>
                        </div>
                    </div>
                </section>

                {/* 4. THE FRENCH */}
                <section className="bg-white p-8 paper-border border-b-8 border-r-8 border-purple-800 transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl font-['Permanent_Marker'] text-purple-900">4. THE FRENCH (Last Challengers)</h2>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">1664 – 1954</span>
                    </div>

                    <div className="body-handwritten text-xl space-y-4 mb-8">
                        <p><strong>Formation (1664):</strong> <em>Compagnie des Indes</em> founded by <strong>Colbert</strong> (under Louis XIV).</p>
                        <p><strong>Pondicherry (1674):</strong> Founded by <strong>Francois Martin</strong>. Pre-developed by <strong>Lenoir & Dumas</strong>.</p>
                        <p className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-700">
                            <strong>Dupleix (1742):</strong> The first to use Indian troops (<span className="font-bold">Sepoys</span>) & intervene in local successions. A strategic genius.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-5 rotate-12 group-hover:scale-110 transition-transform">
                            <Crosshair className="w-20 h-20" />
                        </div>
                        <h4 className="marker-label text-slate-600 mb-2 uppercase text-xs font-bold tracking-widest">Key Strategy</h4>
                        <p className="body-handwritten text-lg leading-relaxed italic">
                            "They focused on Territorial power first, which was their strength and eventually their weakness due to state control."
                        </p>
                    </div>
                </section>

                {/* ANGLO-FRENCH RIVALRY (Steps) */}
                <section className="bg-[#f0f9ff] p-8 paper-border border-2 border-blue-300 relative">
                    <div className="absolute top-4 right-4 flex gap-1">
                        <Waves className="w-8 h-8 text-blue-200" />
                        <Waves className="w-8 h-8 text-blue-300" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] ocean-blue mb-8">5. THE CARNATIC WARS (1740-1763)</h2>

                    <div className="space-y-8 relative">
                        <div className="absolute left-6 top-8 bottom-4 w-px bg-blue-200"></div>

                        {/* First War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2">1st Carnatic War <span className="text-xs font-sans font-bold text-slate-400 tracking-tighter">(1740-48)</span></h3>
                            <p className="body-handwritten text-sm text-slate-600">Cause: Austrian Succession. Event: <span className="font-bold">Battle of St. Thome</span> (Paradise def. Anwar-ud-din). Ends with <span className="underline decoration-blue-300">Treaty of Aix-La-Chapelle</span>.</p>
                        </div>

                        {/* Second War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2">2nd Carnatic War <span className="text-xs font-sans font-bold text-slate-400 tracking-tighter">(1749-54)</span></h3>
                            <p className="body-handwritten text-sm text-slate-600">Cause: Internal Hyderabad/Carnatic succession. Hero: <span className="font-bold">Robert Clive</span> (Siege of Arcot). Result: Dupleix recalled. Ended with <span className="underline decoration-blue-300">Treaty of Pondicherry</span>.</p>
                        </div>

                        {/* Third War */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-red-500 border-2 border-white group-hover:scale-125 transition-transform"></div>
                            <h3 className="marker-label text-xl mb-1 flex items-center gap-2 text-red-800 uppercase italic">3rd Carnatic War <span className="text-xs font-sans font-bold text-slate-400 tracking-tighter">(1758-63)</span></h3>
                            <p className="body-handwritten text-sm text-slate-600">Cause: Seven Years War. Decisive: <span className="font-bold text-red-700">Battle of Wandiwash (1760)</span>. Eyre Coote (Eng) def. Lally (Fr). Final blow: <span className="underline decoration-red-300">Peace of Paris</span>.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* COMPARISON AND FINAL ANALYSIS */}
            <section className="max-w-5xl mx-auto mb-20">
                <div className="bg-slate-900 p-8 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Navigation className="w-48 h-48" />
                    </div>
                    <h2 className="marker-label text-3xl mb-8 text-center text-orange-400">Why England Won? (Strategic Review)</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left body-handwritten text-lg border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-slate-400 text-sm uppercase tracking-widest marker-label">
                                    <th className="px-4">Factor</th>
                                    <th className="px-4 text-center">English (WINNER)</th>
                                    <th className="px-4 text-center">French (LOSER)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white/5 rounded-xl">
                                    <td className="p-4 font-bold text-orange-200">Structure</td>
                                    <td className="p-4 text-center">Private Company (Agile/Free)</td>
                                    <td className="p-4 text-center">State Dept (Slow/Controlled)</td>
                                </tr>
                                <tr className="bg-white/5 rounded-xl">
                                    <td className="p-4 font-bold text-orange-200">Navy</td>
                                    <td className="p-4 text-center">Superior Mastery</td>
                                    <td className="p-4 text-center">Secondary Priority</td>
                                </tr>
                                <tr className="bg-white/5 rounded-xl">
                                    <td className="p-4 font-bold text-orange-200">Strategic Triangle</td>
                                    <td className="p-4 text-center">Calcutta, Bombay, Madras</td>
                                    <td className="p-4 text-center">Pondicherry Only</td>
                                </tr>
                                <tr className="bg-white/5 rounded-xl">
                                    <td className="p-4 font-bold text-orange-200">Core Focus</td>
                                    <td className="p-4 text-center">Trade First (Capital)</td>
                                    <td className="p-4 text-center">Territory First (Glory)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <footer className="text-center pb-12 px-4">
                <div className="max-w-xs mx-auto flex flex-col items-center">
                    <div className="w-16 h-px bg-slate-300 mb-4"></div>
                    <p className="marker-label text-slate-400 uppercase text-xs tracking-[0.3em] font-bold">Log Concluded</p>
                    <p className="body-handwritten italic text-slate-400 text-sm mt-2">Nautical Archives Chapter 3</p>
                </div>
            </footer>
        </div>
    );
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
        </svg>
    );
}
