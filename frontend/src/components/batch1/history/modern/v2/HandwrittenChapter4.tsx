"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Skull,
    Divide,
    Crown,
    Sword,
    Map as MapIcon,
    Book,
    Coins,
    Gem,
    Ghost,
    Wind,
    Library,
    Compass,
    AlertTriangle,
    ShieldAlert,
    Feather,
    Quote
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HandwrittenChapter4() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Kalam',_cursive] text-slate-800 selection:bg-orange-100 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Patrick+Hand&display=swap');
                
                .weathered-scroll {
                    background-color: #fff;
                    position: relative;
                    border: 1px solid #d1d5db;
                }

                .weathered-scroll::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: url('https://www.transparenttextures.com/patterns/cardboard.png');
                    opacity: 0.1;
                    pointer-events: none;
                }

                .frayed-edge {
                    mask-image: linear-gradient(to bottom, black 90%, transparent 100%),
                                linear-gradient(to right, black 90%, transparent 100%);
                    clip-path: polygon(0% 0%, 100% 0%, 98% 5%, 100% 10%, 97% 15%, 100% 20%, 98% 25%, 100% 30%, 97% 35%, 100% 40%, 99% 45%, 100% 50%, 98% 55%, 100% 60%, 97% 65%, 100% 70%, 99% 75%, 100% 80%, 98% 85%, 100% 90%, 97% 95%, 100% 100%, 0% 100%);
                }

                .burnt-edge {
                    border-left: 15px solid transparent;
                    border-image: url('https://www.transparenttextures.com/patterns/black-paper.png') 30 round;
                }

                .marker-yellow {
                    background-color: #fef08a;
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                }

                .mughal-purple { color: #663399; }
                .maratha-saffron { color: #FF9933; }
                .successor-green { color: #006400; }
                .danger-red { color: #8B0000; }

                .grid-of-ruin {
                    display: grid;
                    gap: 2rem;
                }

                .cracked-card {
                    transform: rotate(-0.5deg);
                    box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
                }

                .cracked-card:nth-child(even) {
                    transform: rotate(0.8deg);
                }
            `}</style>

            {/* HERO SECTION */}
            <header className="max-w-5xl mx-auto pt-20 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 transform rotate-12">
                        <Skull className="w-32 h-32 text-slate-400" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Permanent_Marker'] danger-red mb-2 tracking-tighter uppercase">
                        THE GREAT FRAGMENTATION
                    </h1>
                    <p className="text-xl md:text-2xl mughal-purple font-bold opacity-80 uppercase tracking-widest italic">
                        --- India on the Eve of British Conquest ---
                    </p>
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4"></div>
                </motion.div>

                <div className="mt-12 max-w-3xl mx-auto space-y-4">
                    <p className="text-2xl body-handwritten leading-relaxed text-slate-700">
                        The 18th Century: Was it a <span className="underline decoration-red-400">Dark Age</span> of ruin, or a <span className="underline decoration-green-400">Transition</span> to modernity?
                    </p>
                    <div className="flex justify-center gap-6 text-sm font-bold uppercase tracking-tighter text-slate-400">
                        <span className="flex items-center gap-1"><Divide className="w-4 h-4" /> Internal Weakness</span>
                        <span className="flex items-center gap-1"><Sword className="w-4 h-4" /> External Invasions</span>
                        <span className="flex items-center gap-1"><Ghost className="w-4 h-4" /> Power Vacuum</span>
                    </div>
                </div>
            </header>

            {/* COLLAPSE OF THE MIGHTY: THE FOREIGN HAMMER BLOWS */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-['Permanent_Marker'] danger-red mb-8 flex items-center gap-3">
                    <ShieldAlert className="w-10 h-10" /> THE FOREIGN HAMMER BLOWS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* NADIR SHAH */}
                    <div className="bg-white p-8 paper-border border-4 border-slate-800 shadow-2xl relative overflow-hidden transform -rotate-1">
                        <div className="absolute top-0 right-0 p-4 opacity-5 bg-red-100 rounded-bl-full">
                            <Gem className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold danger-red mb-4 border-b-2 border-red-100 pb-2">Nadir Shah (The Persian - 1739)</h3>
                        <p className="text-xl leading-relaxed body-handwritten mb-6">
                            Exposed the "Hollow Empire". Defeated Emperor <span className="font-bold">Muhammad Shah</span> at <span className="marker-yellow">Battle of Karnal</span>.
                        </p>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                            <p className="font-bold text-red-900 mb-2 uppercase text-xs tracking-widest">The Loot:</p>
                            <div className="flex flex-wrap gap-3">
                                <Badge className="bg-red-700">70 Crores Cash</Badge>
                                <Badge className="bg-red-700">Peacock Throne</Badge>
                                <Badge className="bg-red-700">Kohinoor Diamond</Badge>
                            </div>
                        </div>
                    </div>

                    {/* ABDALI */}
                    <div className="bg-white p-8 paper-border border-4 border-slate-800 shadow-2xl relative overflow-hidden transform rotate-1">
                        <div className="absolute top-0 right-0 p-4 opacity-5 bg-orange-100 rounded-bl-full">
                            <Sword className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold danger-red mb-4 border-b-2 border-red-100 pb-2">Ahmad Shah Abdali (The Afghan)</h3>
                        <p className="text-xl leading-relaxed body-handwritten mb-6">
                            Invaded 8 times. The "Final Blow" to Indian unified resistance.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <p className="font-bold text-amber-900 mb-1 text-lg">Third Battle of Panipat (1761)</p>
                            <p className="text-sm italic">Crushed the Maratha dream of ruling India. Opened the door for the British.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* REGIONAL FRAGMENTATION: SUCCESSOR STATES */}
            <section className="max-w-7xl mx-auto mb-20 bg-slate-50 p-12 paper-border border-2 border-dashed border-slate-300">
                <h2 className="text-center text-4xl font-['Permanent_Marker'] mughal-purple mb-12 uppercase">THE RISE OF REGIONAL POWERS</h2>

                <Tabs defaultValue="successor" className="w-full">
                    <TabsList className="w-full grid grid-cols-3 h-16 bg-slate-200 rounded-2xl mb-12 p-2">
                        <TabsTrigger value="successor" className="rounded-xl font-bold data-[state=active]:bg-green-700 data-[state=active]:text-white transition-all">Successor States</TabsTrigger>
                        <TabsTrigger value="independent" className="rounded-xl font-bold data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all">Independent Kingdoms</TabsTrigger>
                        <TabsTrigger value="new" className="rounded-xl font-bold data-[state=active]:bg-red-700 data-[state=active]:text-white transition-all">New States (Rebels)</TabsTrigger>
                    </TabsList>

                    {/* 1. SUCCESSOR STATES */}
                    <TabsContent value="successor" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">Hyderabad (1724)</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Founder: Nizam-ul-Mulk Asaf Jah</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Disgusted by the frivolous Delhi court. Established a strong, efficient administration in the Deccan.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">Bengal (1717)</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Founder: Murshid Quli Khan</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    The "Paradises of India". Prosperous through trade. Ruled by Alivardi Khan later.
                                    <span className="block mt-2 italic text-sm">Key: Jagat Seths (Banking) rose here.</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">Awadh (1722)</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Founder: Saadat Khan</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Burhan-ul-Mulk. Committed suicide after Nadir Shah's invasion.
                                    <span className="block mt-2 text-red-700">Architecture: Bara Imambara (1784) by Asaf-ud-Daula.</span>
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* 2. INDEPENDENT KINGDOMS */}
                    <TabsContent value="independent" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">Mysore (1761)</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Haidar Ali & Tipu Sultan</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Modernized army. Controlled Malabar trade. Tipu used Rockets & French support.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6 relative">
                                <div className="absolute top-2 right-2 p-1 bg-yellow-100 text-[10px] font-bold uppercase rounded">Science King</div>
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">Rajputs (Jaipur)</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Sawai Jai Singh</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Built <strong>Jantar Mantar</strong> (5 observatories). Wrote <em>Jij Muhammad Shahi</em> (Astronomy). Scientist-King!
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">Kerala</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Martanda Varma & Rama Varma</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Unified Travancore. <strong>Rama Varma (Dharma Raja)</strong> made Trivandrum a scholarship hub.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* 3. NEW REBEL STATES */}
                    <TabsContent value="new" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute top-2 right-2 opacity-5"><Coins className="w-12 h-12" /></div>
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">The Marathas</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">The Peshwas</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Strongest power, but fragmented.
                                    <span className="block mt-2 font-bold text-red-900 border-t pt-2">Taxes: Chauth (1/4th) & Sardeshmukhi (+10%).</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">The Sikhs</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">12 Misls &rarr; Ranjit Singh</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    Unified by Maharaja Ranjit Singh.
                                    <span className="block mt-2 italic text-sm">Revenue: <strong>Rakhi System</strong> (20% protection tax).</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">The Jats</h4>
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Churaman, Badan Singh, Suraj Mal</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    The agriculturists. Suraj Mal = "The Plato of the Jats". Independent Bharatpur state.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* MINOR FRAGMENTS: THE ROHILLAS & PATHANS */}
            <div className="max-w-4xl mx-auto mb-20">
                <div className="bg-stone-800 text-stone-100 p-8 frayed-edge flex flex-col md:flex-row gap-8 items-center shadow-xl">
                    <div className="flex-shrink-0 text-amber-500">
                        <AlertTriangle className="w-16 h-16" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-['Permanent_Marker'] mb-4 uppercase tracking-widest text-amber-500">The "Forgotten" Buffer States</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 body-handwritten text-lg italic">
                            <div className="border-l border-stone-500 pl-4">
                                <p className="font-bold text-amber-400">Rohillas:</p>
                                <p>Ali Muhammad Khan. Region: Rohilkhand. Capital: Aonla/Rampur. Buffered Delhi from Awadh.</p>
                            </div>
                            <div className="border-l border-stone-500 pl-4">
                                <p className="font-bold text-amber-400">Bangash Pathans:</p>
                                <p>Muhammad Khan Bangash. Established around Farrukhabad. Ferocious warriors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SOCIO-ECONOMIC LIFE: THE SINK OF GOLD */}
            <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Economy Card */}
                <div className="bg-white p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Coins className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-yellow-400 decoration-4">Economy: The Sink of Gold</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        <li>• India was a net importer of bullion.</li>
                        <li>• <span className="font-bold">Trade Centers:</span> Dacca (Muslin), Murshidabad (Silk), Surat (Diamonds).</li>
                        <li>• <strong>Shipbuilding:</strong> Thriving in Maharashtra/Andhra. (Even Turkey bought Indian ships!)</li>
                        <li>• <strong>Banking:</strong> The Jagat Seths dominated.</li>
                    </ul>
                </div>

                {/* Society Card */}
                <div className="bg-white p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Ghost className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-red-400 decoration-4">Society: Rigid & Divisive</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        <li>• <strong>Caste:</strong> Central point of social life.</li>
                        <li>• <strong>Women:</strong> Patriarchal. Sati (common in Rajputs/Bengals), Purdah, Child Marriage.</li>
                        <li>• <strong>Slavery:</strong> Domestic & Agricultural existed.</li>
                        <li>• <strong>Education:</strong> Pathshalas/Tols (Hindu) & Maktabs/Madrasas (Muslim).</li>
                    </ul>
                </div>

                {/* Culture Card */}
                <div className="bg-white p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Feather className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-purple-400 decoration-4">Culture: The Camp Language</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        <li>• <strong>Urdu:</strong> "The Camp Language" rose as elite tongue.</li>
                        <li>• <span className="font-bold">Literary Wave:</span>Warish Shah (Heer Ranjha), Shah Abdul Latif (Risalo), Tayumanavar (Tamil).</li>
                        <li>• <strong>Art:</strong> Decline of Imperial Mughal &rarr; Rise of Kangra & Rajput schools.</li>
                    </ul>
                </div>
            </section>

            {/* FINAL WARNING MAP PLACEHOLDER */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
                <div className="bg-white p-12 paper-border border-2 border-slate-300 relative overflow-hidden flex flex-col items-center">
                    <MapIcon className="w-16 h-16 text-slate-300 mb-4" />
                    <p className="text-3xl font-['Permanent_Marker'] text-slate-400 mb-2 uppercase opacity-40">[ MAP: 18th Century India ]</p>
                    <p className="body-handwritten text-lg italic text-slate-500">"A fractured crown leads to a foreign throne."</p>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>
            </div>

            <footer className="text-center pb-12">
                <Quote className="w-8 h-8 text-slate-300 mx-auto mb-4" />
                <p className="marker-label text-slate-400 uppercase text-xs tracking-widest font-bold">--- The Fragmented Past ends here ---</p>
                <div className="flex justify-center gap-2 mt-4 opacity-20">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
            </footer>
        </div>
    );
}
