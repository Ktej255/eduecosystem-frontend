"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Skull,
    Flame,
    Zap,
    Target,
    Skull as Grave,
    Book,
    Globe,
    Pencil,
    ShieldAlert,
    Crosshair,
    Lock,
    Eye,
    Stamp,
    MessageSquare,
    AlertCircle,
    Flag,
    History,
    Anchor,
    Search,
    BookOpen,
    Quote,
    CheckCircle2,
    Shield,
    Users
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function HandwrittenChapter7() {
    const [activeMatchup, setActiveMatchup] = useState(0);

    const matchups = [
        {
            place: "Delhi",
            rebel: "Bahadur Shah / Bakht Khan",
            british: "John Nicholson & Lt. Hudson",
            fate: "Nicholson died in capture. Hudson killed princes. Zafar deported to Rangoon.",
            color: "border-red-900",
            bg: "bg-red-50"
        },
        {
            place: "Kanpur",
            rebel: "Nana Saheb (Dhondhu Pant) & Tantia Tope",
            british: "Sir Colin Campbell & Sir Hugh Wheeler",
            fate: "Nana escaped to Nepal. Tantia betrayed by Man Singh & hanged (1859).",
            color: "border-orange-800",
            bg: "bg-orange-50",
            advisor: "Azimullah Khan (The Brain)"
        },
        {
            place: "Lucknow",
            rebel: "Begum Hazrat Mahal (for son Birjis Qadir)",
            british: "Henry Lawrence, Havelock, Outram, Campbell",
            fate: "Lawrence died at Residency. Begum escaped to Nepal.",
            color: "border-amber-800",
            bg: "bg-amber-50"
        },
        {
            place: "Jhansi / Gwalior",
            rebel: "Rani Laxmibai & Tantia Tope",
            british: "Sir Hugh Rose",
            fate: "Rani died in Gwalior (June 1858). 'Only man among rebels' quote.",
            color: "border-rose-900",
            bg: "bg-rose-50"
        },
        {
            place: "Bihar (Jagdishpur)",
            rebel: "Kunwar Singh & Amar Singh",
            british: "William Taylor & Vincent Eyre",
            fate: "Kunwar (80) died in 1858. Amar continued Guerilla war.",
            color: "border-stone-800",
            bg: "bg-stone-50",
            hidden: "Peer Ali (Bookseller of Patna) - Hanged by Taylor."
        },
        {
            place: "Faizabad",
            rebel: "Maulvi Ahmadullah (Danka Shah)",
            british: "Campbell / Gen. Hope Grant",
            fate: "Betrayed by Raja of Powain. Hanged. 50k Bounty.",
            color: "border-slate-800",
            bg: "bg-slate-50"
        },
        {
            place: "Bareilly",
            rebel: "Khan Bahadur Khan",
            british: "Sir Colin Campbell",
            fate: "Set up own govt. Sentenced to death.",
            color: "border-emerald-900",
            bg: "bg-emerald-50"
        },
        {
            place: "Allahabad",
            rebel: "Maulvi Liyaqat Ali",
            british: "Colonel Neill",
            fate: "Brutal suppression by Neill.",
            color: "border-indigo-900",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-['Kalam',_cursive] text-slate-900 selection:bg-red-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Special+Elite&family=Cutive+Mono&display=swap');
                
                .scorched-paper {
                    background-color: #fdfaf6;
                    box-shadow: 0 0 20px rgba(0,0,0,0.1);
                    position: relative;
                }

                .telegram-strip {
                    background-color: #fff9c4;
                    font-family: 'Special Elite', cursive;
                    border: 1px solid #d4d4d4;
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
                    transform: rotate(-0.5deg);
                }

                .blood-stain {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle, rgba(139,0,0,0.15) 0%, rgba(139,0,0,0.05) 50%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(5px);
                }

                .stamp-top-secret {
                    font-family: 'Permanent Marker', cursive;
                    color: #8B0000;
                    border: 5px solid #8B0000;
                    padding: 4px 12px;
                    text-transform: uppercase;
                    transform: rotate(-15deg);
                    opacity: 0.8;
                }

                .stamp-intercepted {
                    font-family: 'Permanent Marker', cursive;
                    color: #2F4F4F;
                    border: 5px solid #2F4F4F;
                    padding: 4px 12px;
                    text-transform: uppercase;
                    transform: rotate(10deg);
                    opacity: 0.7;
                }

                .typewriter {
                    font-family: 'Special Elite', cursive;
                    letter-spacing: -1px;
                }

                .gunpowder-grey { color: #2F4F4F; }
                .revolution-red { color: #8B0000; }

                .grid-of-grievances {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .marker-yellow {
                    background-color: #fef08a;
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                }

                .lotus-bullet::before {
                    content: '🪷';
                    margin-right: 8px;
                }
                .chapati-bullet::before {
                    content: '🫓';
                    margin-right: 8px;
                }
            `}</style>

            {/* HERO SECTION: THE BATTLEFIELD DISPATCH */}
            <header className="max-w-6xl mx-auto pt-20 mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="blood-stain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2] opacity-20"></div>
                    <div className="absolute top-0 right-10 stamp-top-secret scale-150">TOP SECRET</div>
                    <h1 className="text-5xl md:text-9xl font-['Permanent_Marker'] revolution-red mb-4 tracking-tighter uppercase drop-shadow-lg">
                        1857: THE GREAT REVOLT
                    </h1>
                    <p className="text-xl md:text-3xl gunpowder-grey font-bold uppercase tracking-[0.5em] italic">
                        --- THE FIRST WAR OF INDEPENDENCE ---
                    </p>
                    <div className="flex justify-center gap-12 mt-8 text-4xl">
                        <span>💣</span> <span>🏹</span> <span>🔥</span>
                    </div>
                </motion.div>

                <div className="mt-16 max-w-2xl mx-auto telegram-strip p-6 text-xl leading-relaxed">
                    <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400">
                        <span>WESTERN UNION TELEGRAPH CO.</span>
                        <span>DATE: 11 MAY 1857</span>
                    </div>
                    <p className="typewriter">
                        URGENT ::: SEPOYS FROM MEERUT ENTERED DELHI STOP PROCLAIMED BAHADUR SHAH EMPEROR STOP CITY IN FLAMES STOP REVOLUTION HAS BEGUN STOP
                    </p>
                    <p className="text-right text-[10px] mt-4 opacity-50">END OF MESSAGE</p>
                </div>
            </header>

            {/* SECTION 1: THE GRID OF GRIEVANCES (THE POWDER KEG) */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <AlertCircle className="w-10 h-10 revolution-red" /> THE POWDER KEG (CAUSES)
                </h2>

                <div className="grid-of-grievances">
                    {/* ECONOMIC */}
                    <Card className="scorched-paper p-6 border-4 border-slate-900 transform -rotate-1 hover:rotate-0 transition-transform">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                            <span className="text-3xl">💰</span> Economic Ruin
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">
                            "Peasants in debt, Artisans in ruin." Heavy taxation (Land Revenue) and destruction of traditional industry by British imports.
                        </p>
                    </Card>

                    {/* POLITICAL */}
                    <Card className="scorched-paper p-6 border-4 border-slate-900 transform rotate-1">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                            <span className="text-3xl">👑</span> Political Slights
                        </h3>
                        <ul className="body-handwritten text-lg space-y-2">
                            <li>• <strong>Doctrine of Lapse:</strong> Annexed Jhansi, Satara, etc.</li>
                            <li>• <strong>Nana Saheb:</strong> Pension refused (Baji Rao II's adopted son).</li>
                            <li>• <strong>Zafar:</strong> Told to vacate Red Fort for Qutub.</li>
                        </ul>
                    </Card>

                    {/* SOCIO-RELIGIOUS */}
                    <Card className="scorched-paper p-6 border-4 border-slate-900 transform -rotate-1">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                            <span className="text-3xl">🕉️</span> Religious Fear
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">
                            Fear of conversion by Missionaries. Interference in customs (Sati/Widow Remarriage).
                            <span className="block mt-2 font-bold text-sm">Religious Disabilities Act (1850):</span> Allowed converts to inherit property.
                        </p>
                    </Card>

                    {/* MILITARY */}
                    <Card className="scorched-paper p-6 border-4 border-slate-900 transform rotate-1">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                            <span className="text-3xl">⚔️</span> Sepoy Grief
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">
                            <span className="marker-yellow">General Service Enlistment Act (1856):</span> Required crossing sea (Loss of Caste). Lower pay and no promotions compared to British.
                        </p>
                    </Card>
                </div>

                {/* IMMEDIATE CAUSE STICKY */}
                <div className="max-w-4xl mx-auto mt-12 bg-white p-8 paper-border border-4 border-dashed border-red-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                        <Flame className="w-32 h-32" />
                    </div>
                    <div className="absolute top-2 left-2 stamp-intercepted">VERIFIED REPORT</div>
                    <h3 className="text-3xl font-['Permanent_Marker'] mb-4 text-center revolution-red underline decoration-red-200 decoration-8 underline-offset-8 uppercase">The Immediate Spark</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
                        <div className="text-7xl">🔫</div>
                        <div className="body-handwritten text-xl leading-relaxed">
                            <strong>The Enfield Rifle:</strong> Greased cartridges allegedly used <span className="text-red-700 font-bold">Beef & Pig Fat</span>. Must be bitten off. Offensive to both Hindus & Muslims.
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE SPARK (TIMELINE) */}
            <section className="max-w-6xl mx-auto mb-24 relative">
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 opacity-20"><Zap className="w-20 h-20 text-yellow-500 animate-bounce" /></div>
                <h2 className="text-4xl font-['Permanent_Marker'] text-center mb-16 uppercase tracking-widest">THE TRAIL OF FIRE</h2>

                <div className="space-y-16 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 border-dashed"></div>

                    {/* Mangal Pandey */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-right order-2 md:order-1">
                            <h4 className="text-2xl font-['Permanent_Marker'] revolution-red">BARRACKPORE (Mar 29)</h4>
                            <p className="body-handwritten text-lg"><strong>Mangal Pandey</strong> attacked Lt. Baugh. Hanged on <span className="font-bold underline decoration-red-400">April 8</span>. The first martyr.</p>
                        </div>
                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2">1</div>
                        <div className="flex-1 order-3"></div>
                    </div>

                    {/* Meerut */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 order-2 md:order-1"></div>
                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2">2</div>
                        <div className="flex-1 order-3 text-left">
                            <h4 className="text-2xl font-['Permanent_Marker'] revolution-red">MEERUT (May 10)</h4>
                            <p className="body-handwritten text-lg">3rd Native Cavalry revolts. Officers killed. Prisoners freed. <strong>"CHALO DILLI!"</strong> echo filled the air.</p>
                        </div>
                    </div>

                    {/* Delhi */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-right order-2 md:order-1">
                            <h4 className="text-2xl font-['Permanent_Marker'] revolution-red">DELHI (May 11)</h4>
                            <p className="body-handwritten text-lg">Bahadur Shah proclaimed <strong>Shahenshah-e-Hindustan</strong>. General Bakht Khan (Bareilly) took military control.</p>
                        </div>
                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2">3</div>
                        <div className="flex-1 order-3"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE MATCHUPS (LEADERS VS SUPPRESSORS) */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <Crosshair className="w-10 h-10 revolution-red" /> BATTLEFIELD MATCHUPS
                </h2>

                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {matchups.map((m, idx) => (
                        <Button
                            key={idx}
                            onClick={() => setActiveMatchup(idx)}
                            variant={activeMatchup === idx ? "destructive" : "outline"}
                            className={`paper-border px-6 py-4 font-['Permanent_Marker'] transform ${activeMatchup === idx ? 'scale-105 rotate-1' : 'rotate-[-1deg] opacity-70'}`}
                        >
                            {m.place}
                        </Button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeMatchup}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`max-w-4xl mx-auto p-12 paper-border border-8 ${matchups[activeMatchup].color} ${matchups[activeMatchup].bg} shadow-2xl relative`}
                    >
                        <div className="absolute top-4 right-4 stamp-top-secret opacity-20">ENCOUNTER LOG</div>
                        <h3 className="text-4xl font-['Permanent_Marker'] mb-8 underline decoration-double">{matchups[activeMatchup].place}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 body-handwritten relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 hidden md:block"></div>

                            {/* REBEL SIDE */}
                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold revolution-red flex items-center gap-2">
                                    <ShieldAlert className="w-6 h-6" /> THE REBEL(S)
                                </h4>
                                <p className="text-2xl font-bold">{matchups[activeMatchup].rebel}</p>
                                {matchups[activeMatchup].advisor && (
                                    <div className="p-2 bg-yellow-100 border border-yellow-300 rounded text-sm italic">
                                        Advisor: <strong>{matchups[activeMatchup].advisor}</strong> (The Brain behind planning)
                                    </div>
                                )}
                                {matchups[activeMatchup].hidden && (
                                    <div className="p-2 bg-stone-200 border border-stone-400 rounded text-sm italic">
                                        <strong>Hidden Hero:</strong> {matchups[activeMatchup].hidden}
                                    </div>
                                )}
                            </div>

                            {/* BRITISH SIDE */}
                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold gunpowder-grey flex items-center gap-2">
                                    <Target className="w-6 h-6" /> THE SUPPRESSOR(S)
                                </h4>
                                <p className="text-2xl font-bold">{matchups[activeMatchup].british}</p>
                                <div className="mt-8 p-4 bg-white/50 border border-slate-200 rounded-xl relative">
                                    <div className="absolute -top-3 -right-3"><Grave className="w-8 h-8 text-slate-400" /></div>
                                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">Final Outcome:</h5>
                                    <p className="text-sm italic">{matchups[activeMatchup].fate}</p>
                                </div>
                            </div>
                        </div>

                        {/* JHANSI QUOTE INJECTION */}
                        {activeMatchup === 3 && (
                            <div className="mt-12 text-center">
                                <p className="text-2xl revolution-red font-bold animate-pulse">"Main apni Jhansi nahi doongi!"</p>
                                <p className="text-sm italic text-slate-500 mt-2">— Rani Laxmibai to General Rose</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* MINOR REGIONAL LEADERS MAP (STAMP STYLE) */}
            <section className="max-w-6xl mx-auto mb-24">
                <div className="bg-stone-800 text-stone-100 p-12 paper-border border-4 border-slate-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Flag className="w-64 h-64" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] text-orange-400 mb-12 uppercase text-center">The Scattered Sparks (Minor Leaders)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center body-handwritten">
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Mathura</h4>
                            <p className="text-sm">Devi Singh</p>
                        </div>
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Meerut</h4>
                            <p className="text-sm">Kadam Singh</p>
                        </div>
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Gorakhpur</h4>
                            <p className="text-sm">Gajadhar Singh</p>
                        </div>
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Rajasthan</h4>
                            <p className="text-sm">Jaidayal/Hardayal (Kota)</p>
                        </div>
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Assam</h4>
                            <p className="text-sm">Diwan Maniram Datta</p>
                        </div>
                        <div className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                            <h4 className="font-bold text-lg text-orange-200">Odisha</h4>
                            <p className="text-sm">Surendra Sai</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: WHY IT FAILED (THE POST-MORTEM) */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey flex items-center gap-4">
                        <Lock className="w-10 h-10" /> WHY IT FAILED?
                    </h2>

                    <div className="bg-white p-8 paper-border border-4 border-slate-900 shadow-xl relative overflow-hidden transform -rotate-1">
                        <div className="absolute top-2 right-2 stamp-intercepted text-[10px]">Canning's Remark</div>
                        <h4 className="text-2xl font-['Permanent_Marker'] mb-6 underline decoration-slate-200">The Loyalists</h4>
                        <p className="body-handwritten text-xl leading-relaxed mb-6">
                            Scindia (Gwalior), Holkar (Indore), Nizam (Hyderabad), and Sikhs/Gurkhas helped the British.
                        </p>
                        <blockquote className="p-4 bg-slate-900 text-slate-100 rounded-xl font-['Special_Elite'] text-sm italic">
                            "If the Scindia joins the mutiny, I shall pack my bags tomorrow." — Lord Canning.
                        </blockquote>
                    </div>

                    <div className="bg-white p-8 paper-border border-4 border-slate-900 shadow-xl relative overflow-hidden transform rotate-1">
                        <h4 className="text-2xl font-['Permanent_Marker'] mb-6 underline decoration-slate-200">Internal Split</h4>
                        <p className="body-handwritten text-xl leading-relaxed mb-4">
                            <strong>The Intelligentsia:</strong> Modern educated Indians did NOT support the revolt. They saw it as backward-looking feudalism.
                        </p>
                        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            <span className="chapati-bullet">Poor Arms (Swords vs Enfield)</span>
                            <span className="chapati-bullet">Limited Reach (South/West quiet)</span>
                        </div>
                    </div>
                </div>

                {/* UNITY FEATURE CARD */}
                <div className="bg-red-900 text-white p-12 rounded-[100px] flex flex-col justify-center items-center text-center shadow-2xl relative">
                    <div className="absolute top-10 left-10 opacity-10"><Users className="w-32 h-32" /></div>
                    <div className="absolute bottom-10 right-10 opacity-10"><Flag className="w-32 h-32" /></div>
                    <Badge variant="outline" className="border-red-400 text-red-100 mb-6 text-xl px-6 py-2">UNIQUE FEATURE</Badge>
                    <h3 className="text-5xl font-['Permanent_Marker'] text-orange-400 mb-8">HINDU-MUSLIM UNITY</h3>
                    <p className="body-handwritten text-2xl leading-relaxed max-w-lg mb-8">
                        "In this instance we could not play off the Mohammedans against the Hindus"
                        <br /><span className="text-sm opacity-60 font-sans">— Aitchison (British Official)</span>
                    </p>
                    <div className="text-left space-y-4 body-handwritten text-lg bg-white/5 p-6 rounded-3xl border border-white/10">
                        <p>• Cow slaughter was banned in Delhi/UP by rebels.</p>
                        <p>• Zafar, a Muslim King, accepted by Hindu Chiefs as Emperor.</p>
                        <p>• Azimullah & Tantia Tope planned side-by-side.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: THE IMPACT (THE CROWN'S SHADOW) */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <History className="w-10 h-10" /> THE REFORMED TYRANNY (IMPACT)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* ACT OF 1858 */}
                    <div className="bg-white p-10 paper-border border-l-8 border-l-slate-900 shadow-2xl relative">
                        <div className="absolute top-2 right-2 text-6xl opacity-10 font-bold">1858</div>
                        <h3 className="text-2xl font-['Permanent_Marker'] mb-6">Government of India Act</h3>
                        <div className="space-y-4 body-handwritten text-xl">
                            <p className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-600" /> Company Rule Ended → Crown Power.</p>
                            <p className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-600" /> Lord Canning: First Viceroy.</p>
                            <div className="p-4 bg-slate-50 border-2 border-dashed rounded-xl">
                                <h5 className="text-[10px] font-bold uppercase mb-2">New Office:</h5>
                                <p>Secretary of State + <span className="marker-yellow">Council of India (15 members)</span> based in London.</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Queen's Proclamation</span>
                            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold">Nov 1, 1858</span>
                        </div>
                    </div>

                    {/* ARMY & 1861 ACTS */}
                    <div className="space-y-8">
                        <div className="bg-[#fffcf0] p-8 paper-border border-4 border-[#8B0000] relative group">
                            <div className="absolute -right-4 -top-4 stamp-intercepted rotate-12">PEEL COMMISSION</div>
                            <h4 className="text-2xl font-bold revolution-red mb-4 flex gap-2"><Globe className="w-6 h-6" /> Army Reorganization</h4>
                            <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                <div className="p-4 bg-white border border-red-100 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Bengal Ratio</p>
                                    <p className="text-2xl font-black revolution-red">1 : 2</p>
                                </div>
                                <div className="p-4 bg-white border border-red-100 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Madras Ratio</p>
                                    <p className="text-2xl font-black revolution-red">1 : 3</p>
                                </div>
                            </div>
                            <p className="text-sm body-handwritten">
                                <strong>Theory:</strong> "Martial Races" (Sikhs/Gurkhas) recruited more. Non-Martial (Awadh/Bihar) de-prioritized.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 paper-border border-2 border-slate-200">
                                <h5 className="font-bold text-sm mb-2 border-b">Act of 1861</h5>
                                <p className="text-xs body-handwritten italic">Representative starts. 3 Indians nominated (Patiala, Benaras, Dinkar Rao).</p>
                            </div>
                            <div className="bg-white p-4 paper-border border-2 border-slate-200">
                                <h5 className="font-bold text-sm mb-2 border-b">White Mutiny (1859)</h5>
                                <p className="text-xs body-handwritten">EIC European troops mutinied over transfer to Queen's Army without bonus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: THE BOOKSHELF (HISTORIANS' VERDICT) */}
            <section className="max-w-6xl mx-auto mb-24">
                <div className="p-12 bg-[#4a3728] rounded-[40px] shadow-inner relative">
                    <div className="absolute top-0 right-0 p-10 opacity-5"><BookOpen className="w-48 h-48" /></div>
                    <h2 className="text-4xl font-['Permanent_Marker'] text-center text-orange-200 mb-16">THE HISTORIANS' VERDICT</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white body-handwritten">
                        <div className="bg-white/5 p-6 border-l-4 border-orange-400 hover:bg-white/10 transition-all group">
                            <p className="text-lg font-bold group-hover:text-orange-300">V.D. Savarkar</p>
                            <p className="text-xs italic mb-4">Book: The Indian War of Independence, 1857</p>
                            <p className="text-sm border-t border-white/10 pt-4">"It was the **First War of Independence**."</p>
                        </div>
                        <div className="bg-white/5 p-6 border-l-4 border-blue-400 hover:bg-white/10 transition-all group">
                            <p className="text-lg font-bold group-hover:text-blue-300">R.C. Majumdar</p>
                            <p className="text-xs italic mb-4">Book: The Sepoy Mutiny...</p>
                            <p className="text-sm border-t border-white/10 pt-4">"It was neither first, nor national, nor a war of independence."</p>
                        </div>
                        <div className="bg-white/5 p-6 border-l-4 border-green-400 hover:bg-white/10 transition-all group">
                            <p className="text-lg font-bold group-hover:text-green-300">S.N. Sen</p>
                            <p className="text-xs italic mb-4">Book: Eighteen Fifty-Seven</p>
                            <p className="text-sm border-t border-white/10 pt-4">Official historian of India. Took a balanced, objective view.</p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-orange-200/50">
                        <span>Benjamin Disraeli: "National Rising"</span>
                        <span>•</span>
                        <span>Holmes: "Civilization vs Barbarism"</span>
                        <span>•</span>
                        <span>Outram: "A Mohammedan Conspiracy"</span>
                    </div>
                </div>
            </section>

            {/* FATE OF THE LEADERS (FINAL TRAGIC END) */}
            <footer className="max-w-5xl mx-auto pb-24 px-4 text-center">
                <div className="bg-white p-12 paper-border border-4 border-dashed border-slate-300 relative shadow-inner">
                    <h4 className="text-2xl font-['Permanent_Marker'] mb-8 flex justify-center items-center gap-3">
                        <Grave className="w-6 h-6" /> THE TRAGIC END <Grave className="w-6 h-6" />
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm body-handwritten italic">
                        <div className="space-y-2">
                            <p className="font-bold border-b pb-1">Bahadur Shah Zafar</p>
                            <p>Exiled to Rangoon (1858). Died 1862. Unfortunate burial away from beloved city.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold border-b pb-1">Nana Saheb & Begum</p>
                            <p>Escaped to the Nepal jungles. Never captured. Remained a silent threat.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold border-b pb-1">Kunwar Singh</p>
                            <p>Died of wounds (Apr 1858) after chopping his own gangrenous hand.</p>
                        </div>
                    </div>

                    <div className="mt-12 typewriter text-xs opacity-50">
                        --- THE ELECTRIC TELEGRAPH HAS SAVED INDIA --- (Lord Canning)
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                    <Quote className="w-8 h-8 mb-4 rotate-180" />
                    <p className="text-sm font-['Special_Elite'] uppercase tracking-widest">CHAPTER 7 CONCLUDED</p>
                    <p className="text-[10px] mt-2 italic">The Smoke Clears. The Crown Emerges.</p>
                </div>
            </footer>
        </div>
    );
}

function Castle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 20v-9l-4-4V3L14 7l-4-4-4 4-4-4v4L2 11v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" /><path d="M12 11V7" /><path d="M15 11V8" /><path d="M9 11V8" /><path d="M11 22v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4" /><path d="M16 11V8" /><path d="M8 11V8" />
        </svg>
    );
}
