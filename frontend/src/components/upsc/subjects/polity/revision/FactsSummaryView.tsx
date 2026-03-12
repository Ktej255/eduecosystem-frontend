"use client";

import React, { useState } from 'react';
import {
    Calendar,
    User,
    Map,
    Globe,
    Scale,
    BookOpen,
    ChevronLeft,
    Search,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_SUMMARY_FACTS } from '../data/RevisionRegistry';

export default function FactsSummaryView() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSection, setActiveSection] = useState<string>("dates");

    const sections = [
        { id: "dates", label: "Important Dates", icon: Calendar, data: POLITY_SUMMARY_FACTS.dates },
        { id: "persons", label: "First Holders", icon: User, data: POLITY_SUMMARY_FACTS.persons },
        { id: "acts", label: "Important Acts", icon: BookOpen, data: POLITY_SUMMARY_FACTS.acts },
        { id: "sources", label: "Sources", icon: Globe, data: POLITY_SUMMARY_FACTS.sources },
        { id: "cases", label: "Landmark Cases", icon: Scale, data: POLITY_SUMMARY_FACTS.cases },
        { id: "schedules", label: "Schedules", icon: Map, data: POLITY_SUMMARY_FACTS.schedules },
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#030303] pb-20">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-12 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <Link href="/student/upsc/polity" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                    <h1 className="text-4xl font-bold mb-4">Polity Facts Master-Sheet</h1>
                    <p className="text-xl text-blue-100 opacity-90">Consolidated facts, dates, and names for quick revision.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Nav */}
                    <div className="lg:col-span-1 space-y-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${activeSection === section.id
                                    ? 'bg-card dark:bg-[#111] shadow-lg border border-blue-500/30 text-blue-600 font-bold'
                                    : 'bg-card/50 dark:bg-[#0a0a0a]/50 text-muted-foreground hover:bg-card dark:hover:bg-[#111]'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <section.icon className={`w-5 h-5 ${activeSection === section.id ? 'text-blue-600' : 'text-muted-foreground'}`} />
                                    <span>{section.label}</span>
                                </div>
                                {activeSection === section.id && <ArrowRight className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-8 shadow-sm">

                            {/* Render Different Sections */}
                            {activeSection === 'dates' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Calendar className="w-6 h-6 text-blue-600" /> Important Dates
                                    </h2>
                                    <div className="space-y-4">
                                        {POLITY_SUMMARY_FACTS.dates.map((item, idx) => (
                                            <div key={idx} className="flex gap-6 p-4 rounded-lg bg-muted dark:bg-[#0a0a0a] border border-border group">
                                                <div className="font-black text-blue-600 text-lg whitespace-nowrap pt-1 w-32 group-hover:scale-105 transition-transform">{item.year}</div>
                                                <div>
                                                    <div className="font-bold text-foreground mb-1">{item.event}</div>
                                                    <div className="text-sm text-muted-foreground">{item.significance}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'persons' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-blue-600" /> First Holders & Important Persons
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {POLITY_SUMMARY_FACTS.persons.map((item, idx) => (
                                            <div key={idx} className="p-5 rounded-xl bg-muted dark:bg-[#0a0a0a] border border-border">
                                                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{item.designation}</div>
                                                <div className="text-xl font-bold text-foreground">{item.name}</div>
                                                <div className="text-xs text-muted-foreground mt-2 italic">{item.significance}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'acts' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <BookOpen className="w-6 h-6 text-blue-600" /> Important Historical Acts
                                    </h2>
                                    <div className="space-y-8">
                                        {POLITY_SUMMARY_FACTS.acts.map((act, idx) => (
                                            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-2">
                                                <h3 className="text-xl font-bold mb-3">{act.name}</h3>
                                                <ul className="space-y-2">
                                                    {act.keyFeatures.map((f, fIdx) => (
                                                        <li key={fIdx} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                                            <span className="text-blue-500 font-bold">•</span> {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'sources' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Globe className="w-6 h-6 text-blue-600" /> Sources of the Constitution
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {POLITY_SUMMARY_FACTS.sources.map((source, idx) => (
                                            <details key={idx} className="group overflow-hidden rounded-xl border border-border">
                                                <summary className="list-none p-5 cursor-pointer bg-muted dark:bg-[#0a0a0a] hover:bg-card transition-colors flex items-center justify-between font-bold">
                                                    <span>{source.source}</span>
                                                    <span className="text-blue-500 transition-transform group-open:rotate-90">→</span>
                                                </summary>
                                                <div className="p-5 bg-card dark:bg-[#111]">
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                                                        {source.features.split(', ').map((f, fIdx) => (
                                                            <li key={fIdx} className="text-sm text-muted-foreground dark:text-muted-foreground">• {f}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'cases' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Scale className="w-6 h-6 text-blue-600" /> Landmark Supreme Court Cases
                                    </h2>
                                    <div className="space-y-4">
                                        {POLITY_SUMMARY_FACTS.cases.map((item, idx) => (
                                            <div key={idx} className="p-6 rounded-2xl bg-muted dark:bg-[#0a0a0a] border border-border">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400">{item.case}</h4>
                                                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-black uppercase">Case Law</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground dark:text-muted-foreground font-medium italic">"{item.ruling}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'schedules' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Map className="w-6 h-6 text-blue-600" /> 12 Schedules of the Constitution
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {POLITY_SUMMARY_FACTS.schedules.map((item, idx) => (
                                            <div key={idx} className="p-5 rounded-xl bg-muted dark:bg-[#0a0a0a] border border-border group">
                                                <div className="text-2xl font-black text-muted-foreground dark:text-foreground mb-2 group-hover:text-blue-500 transition-colors">#{item.schedule}</div>
                                                <div className="font-bold text-foreground mb-1">Schedule {item.schedule}</div>
                                                <div className="text-xs text-muted-foreground line-clamp-2">{item.subject}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
