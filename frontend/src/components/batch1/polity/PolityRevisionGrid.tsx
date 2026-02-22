"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PolityRevisionGrid() {
    const chapters = [
        { id: 1, title: "Historical Background", icon: "🏛️", color: "from-blue-500 to-indigo-600" },
        { id: 2, title: "Making of Constitution", icon: "✍️", color: "from-purple-500 to-pink-600" },
        { id: 3, title: "Concept of Constitution", icon: "💡", color: "from-amber-500 to-orange-600" },
        { id: 4, title: "Salient Features", icon: "✨", color: "from-emerald-500 to-teal-600" },
        { id: 5, title: "Preamble", icon: "📜", color: "from-rose-500 to-red-600" },
        { id: 6, title: "Union and Its Territory", icon: "🗺️", color: "from-cyan-500 to-blue-600" },
        { id: 7, title: "Citizenship", icon: "🇮🇳", color: "from-orange-500 to-red-600" },
        { id: 8, title: "Fundamental Rights (I)", icon: "⚖️", color: "from-blue-600 to-cyan-600" },
        { id: 9, title: "Fundamental Rights (II)", icon: "🛡️", color: "from-indigo-600 to-purple-600" },
        { id: 10, title: "Fundamental Rights (III)", icon: "🔓", color: "from-violet-600 to-fuchsia-600" },
        { id: 11, title: "Directive Principles", icon: "🏗️", color: "from-teal-600 to-emerald-600" },
        { id: 12, title: "Fundamental Duties", icon: "🤝", color: "from-green-600 to-lime-600" },
        { id: 13, title: "Amendment", icon: "🔄", color: "from-red-600 to-orange-600" },
        { id: 14, title: "Basic Structure", icon: "🏗️", color: "from-slate-600 to-gray-600" },
        { id: 15, title: "Parliamentary System", icon: "🏛️", color: "from-blue-400 to-indigo-500" },
        { id: 16, title: "Federal System", icon: "⚖️", color: "from-purple-400 to-pink-500" },
        { id: 17, title: "Centre-State Relations", icon: "🤝", color: "from-amber-400 to-orange-500" },
        { id: 18, title: "Inter-State Relations", icon: "🌐", color: "from-emerald-400 to-teal-500" },
        { id: 19, title: "Emergency Provisions", icon: "🚨", color: "from-rose-400 to-red-500" },
        { id: 20, title: "President", icon: "👤", color: "from-indigo-500 to-blue-600" },
        { id: 21, title: "Vice-President", icon: "🥈", color: "from-slate-500 to-gray-600" },
        { id: 22, title: "Prime Minister", icon: "👔", color: "from-blue-600 to-indigo-700" },
        { id: 23, title: "Council of Ministers", icon: "👥", color: "from-teal-500 to-emerald-600" },
        { id: 24, title: "Cabinet Committees", icon: "📋", color: "from-amber-500 to-yellow-600" },
        { id: 25, title: "Parliament", icon: "🏛️", color: "from-red-500 to-rose-600" },
        { id: 26, title: "Parliamentary Committees", icon: "📋", color: "from-orange-500 to-amber-600" },
        { id: 27, title: "Parliamentary Forums", icon: "🗣️", color: "from-green-500 to-teal-600" },
        { id: 28, title: "Parliamentary Group", icon: "🤝", color: "from-blue-500 to-cyan-600" },
        { id: 29, title: "Supreme Court", icon: "⚖️", color: "from-purple-500 to-indigo-600" },
        { id: 30, title: "Judicial Review", icon: "🔍", color: "from-rose-500 to-pink-600" },
        { id: 31, title: "PIL", icon: "📢", color: "from-teal-500 to-emerald-600" },
        { id: 32, title: "High Court", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
        { id: 33, title: "Subordinate Courts", icon: "🏛️", color: "from-slate-500 to-gray-600" },
        { id: 34, title: "Special Provisions", icon: "📜", color: "from-amber-500 to-orange-600" },
        { id: 35, title: "Governor", icon: "👤", color: "from-indigo-400 to-blue-500" },
        { id: 36, title: "Chief Minister", icon: "👔", color: "from-blue-400 to-indigo-500" },
        { id: 37, title: "State Council of Ministers", icon: "👥", color: "from-teal-400 to-emerald-500" },
        { id: 38, title: "State Legislature", icon: "🏛️", color: "from-red-400 to-rose-500" },
        { id: 39, title: "Panchayati Raj", icon: "🚜", color: "from-green-400 to-lime-500" },
        { id: 40, title: "Municipalities", icon: "🏙️", color: "from-cyan-400 to-blue-500" },
        { id: 41, title: "Election Commission", icon: "🗳️", color: "from-blue-600 to-indigo-700" },
        { id: 42, title: "UPSC", icon: "🎖️", color: "from-rose-600 to-red-700" },
        { id: 43, title: "SPSC", icon: "🎓", color: "from-amber-600 to-orange-700" },
        { id: 44, title: "Finance Commission", icon: "💰", color: "from-emerald-600 to-teal-700" },
        { id: 45, title: "GST Council", icon: "🧾", color: "from-violet-600 to-purple-700" },
        { id: 46, title: "NC-SC", icon: "🛡️", color: "from-indigo-500 to-blue-600" },
        { id: 47, title: "NC-ST", icon: "🏔️", color: "from-emerald-500 to-teal-600" },
        { id: 48, title: "NC-BC", icon: "🤝", color: "from-amber-500 to-orange-600" },
        { id: 49, title: "Linguistic Minorities", icon: "🗣️", color: "from-rose-500 to-pink-600" },
        { id: 50, title: "CAG", icon: "🔍", color: "from-slate-600 to-gray-600" },
        { id: 51, title: "NITI Aayog", icon: "💡", color: "from-blue-500 to-cyan-600" },
        { id: 52, title: "NHRC", icon: "⚖️", color: "from-rose-500 to-red-600" },
        { id: 53, title: "SHRC", icon: "🏛️", color: "from-orange-500 to-amber-600" },
        { id: 54, title: "CIC", icon: "ℹ️", color: "from-blue-600 to-indigo-700" },
        { id: 55, title: "SIC", icon: "📄", color: "from-emerald-500 to-teal-600" },
        { id: 56, title: "CVC", icon: "🛡️", color: "from-indigo-600 to-blue-700" },
        { id: 57, title: "CBI", icon: "🔍", color: "from-slate-500 to-gray-600" },
        { id: 58, title: "Lokpal", icon: "⚖️", color: "from-amber-600 to-orange-700" },
        { id: 59, title: "NIA", icon: "🔫", color: "from-rose-600 to-red-700" },
        { id: 60, title: "NDMA", icon: "🆘", color: "from-cyan-500 to-blue-600" },
        { id: 61, title: "NCW", icon: "👩", color: "from-purple-500 to-pink-600" },
        { id: 62, title: "NCPCR", icon: "👶", color: "from-emerald-500 to-teal-600" },
        { id: 63, title: "NCM", icon: "🕌", color: "from-amber-500 to-orange-600" },
        { id: 64, title: "Tribunals", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
        { id: 65, title: "Law & Delimitation", icon: "📜", color: "from-rose-500 to-red-600" },
        { id: 66, title: "Political Parties", icon: "🚩", color: "from-indigo-600 to-blue-700" },
        { id: 67, title: "Regional Parties", icon: "🏘️", color: "from-amber-600 to-orange-700" },
        { id: 68, title: "Elections", icon: "🗳️", color: "from-rose-600 to-red-700" },
        { id: 69, title: "Election Laws", icon: "⚖️", color: "from-cyan-600 to-blue-700" },
        { id: 70, title: "Electoral Reforms", icon: "🔄", color: "from-emerald-600 to-teal-700" },
        { id: 71, title: "Voting Behaviour", icon: "📉", color: "from-blue-500 to-indigo-600" },
        { id: 72, title: "Anti-Defection", icon: "🚫", color: "from-purple-500 to-pink-600" },
        { id: 73, title: "Pressure Groups", icon: "📢", color: "from-amber-500 to-orange-600" },
        { id: 74, title: "Nat. Integration", icon: "🤝", color: "from-emerald-500 to-teal-600" },
        { id: 75, title: "Foreign Policy", icon: "🌎", color: "from-rose-500 to-red-600" },
        { id: 76, title: "Official Language", icon: "🗣️", color: "from-blue-600 to-indigo-700" },
        { id: 77, title: "Public Services", icon: "🎖️", color: "from-teal-600 to-emerald-700" },
        { id: 78, title: "Rights & Liability", icon: "⚖️", color: "from-amber-600 to-orange-700" },
        { id: 79, title: "Spec. Prov. Classes", icon: "👥", color: "from-rose-600 to-red-700" },
        { id: 80, title: "Consumer Comm.", icon: "🛒", color: "from-cyan-600 to-blue-700" },
        { id: 81, title: "Bar Council", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
        { id: 82, title: "Landmark Judgements", icon: "📜", color: "from-purple-500 to-pink-600" },
        { id: 83, title: "Const. Doctrines", icon: "💡", color: "from-amber-500 to-orange-600" },
        { id: 84, title: "World Const.", icon: "🌎", color: "from-emerald-500 to-teal-600" },
        { id: 85, title: "Adv. Services", icon: "🎖️", color: "from-rose-500 to-red-600" },
        { id: 86, title: "Public Policy", icon: "📊", color: "from-indigo-600 to-blue-700" },
        { id: 87, title: "Nat. Sec. Council", icon: "🛡️", color: "from-rose-600 to-red-700" },
        { id: 88, title: "Competition Comm.", icon: "⚖️", color: "from-amber-600 to-orange-700" },
        { id: 89, title: "UIDAI (Aadhaar)", icon: "🆔", color: "from-cyan-600 to-blue-700" },
        { id: 90, title: "PFRDA & IRDAI", icon: "💰", color: "from-emerald-600 to-teal-700" },
        { id: 91, title: "Health Auth. (NHA)", icon: "🏥", color: "from-blue-600 to-indigo-700" },
        { id: 92, title: "FSSAI & BIS", icon: "🛡️", color: "from-teal-600 to-emerald-700" },
        { id: 93, title: "NCRWC", icon: "🏛️", color: "from-blue-500 to-indigo-600" },
        { id: 94, title: "Const. Appendices", icon: "📜", color: "from-purple-500 to-pink-600" },
        { id: 95, title: "Final Summary", icon: "✨", color: "from-amber-500 to-orange-600" },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#1F2937]">
                        One-Stop Revision Solution
                    </h2>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">
                        Master Laxmikanth Chapters 1-95 with Flashcards & MCQs
                    </p>
                </div>
                <Link href="/student/batch1/polity/revision" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((ch) => (
                    <Link
                        key={ch.id}
                        href={`/student/batch1/polity/revision/${ch.id}`}
                        className="group relative overflow-hidden bg-card dark:bg-[#111] rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${ch.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-[100px]`} />

                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-3xl">{ch.icon}</div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-muted-foreground">Chapter {ch.id}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-blue-600 transition-colors mb-2">
                            {ch.title}
                        </h3>

                        <div className="flex items-center gap-3 mt-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground uppercase font-semibold">Content</span>
                                <span className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">Ready</span>
                            </div>
                            <div className="w-px h-6 bg-muted" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground uppercase font-semibold">Flashcards</span>
                                <span className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">15-25</span>
                            </div>
                            <div className="w-px h-6 bg-muted" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground uppercase font-semibold">MCQs</span>
                                <span className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">30-50</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
