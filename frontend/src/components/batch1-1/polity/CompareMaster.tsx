"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Table2, ChevronDown, ChevronUp } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TABLES = [
    {
        id: "president-governor",
        title: "President vs Governor",
        emoji: "⚖️",
        tag: "Exec",
        tagColor: "text-blue-400 bg-blue-900/30 border-blue-700/50",
        freq: "HIGH",
        columns: ["Parameter", "President", "Governor"],
        rows: [
            ["Election", "Elected by Electoral College (MPs + MLAs)", "Appointed by President"],
            ["Term", "5 years", "5 years (pleasure of President)"],
            ["Oath administered by", "Chief Justice of India", "Chief Justice of High Court"],
            ["Emoluments", "₹5 lakh/month (charged to CFI)", "₹3.5 lakh/month (charged to State)"],
            ["Impeachment", "By Parliament (special majority)", "Only by President – no impeachment"],
            ["Veto Power", "Absolute, Suspensive, Pocket Veto", "Absolute, Suspensive, Pocket Veto (+ Reserve for President)"],
            ["Emergency Powers", "Art 352, 356, 360", "Art 356 (recommends), Art 371 (special provisions)"],
            ["Diplomatic functions", "Yes – appoints ambassadors", "No diplomatic functions"],
            ["Foreign Treaties", "Negotiates / ratifies", "No such power"],
            ["Pardon power scope", "All offences incl. Court-Martial, Death Sentence", "All except Court-Martial; no power over Death Sentence"],
            ["Council of Ministers", "Union CoM headed by PM", "State CoM headed by CM"],
            ["Prorogation / Dissolution", "Can prorogue & dissolve Lok Sabha", "Can prorogue & dissolve State Assembly"],
        ],
    },
    {
        id: "ls-rs",
        title: "Lok Sabha vs Rajya Sabha",
        emoji: "🏛️",
        tag: "Parliament",
        tagColor: "text-amber-400 bg-amber-900/30 border-amber-700/50",
        freq: "VERY HIGH",
        columns: ["Parameter", "Lok Sabha", "Rajya Sabha"],
        rows: [
            ["Also known as", "Lower House / House of the People", "Upper House / Council of States"],
            ["Members", "Max 550 elected + 2 Anglo-Indian (now abolished)", "Max 250 (238 elected + 12 nominated by President)"],
            ["Current strength", "543 elected", "245"],
            ["Term", "5 years (can dissolve early)", "Permanent – 1/3 retire every 2 years"],
            ["Presiding Officer", "Speaker (Deputy Speaker in absence)", "VP of India (ex-officio Chairman)"],
            ["Money Bills", "Exclusively introduced; RS can only recommend (14 days)", "Cannot introduce; cannot reject"],
            ["Confidence Motion", "Government accountable to LS only", "No confidence motion not applicable"],
            ["Joint Sitting", "LS dominates (more members)", "Speaker of LS presides"],
            ["Special Powers", "Approval of Proclamation of Emergency", "Creates new All-India Services (Art 312)"],
            ["Budget", "Presented in LS; RS cannot amend grants", "Can discuss but cannot vote on Demands for Grants"],
            ["Minimum Age", "25 years", "30 years"],
            ["Voters", "All citizens 18+ (direct election)", "MLAs of States (indirect election)"],
        ],
    },
    {
        id: "fr-dpsp",
        title: "Fundamental Rights vs DPSP",
        emoji: "⚖️",
        tag: "Rights",
        tagColor: "text-emerald-400 bg-emerald-900/30 border-emerald-700/50",
        freq: "HIGH",
        columns: ["Parameter", "Fundamental Rights (Part III)", "DPSP (Part IV)"],
        rows: [
            ["Articles", "12–35", "36–51"],
            ["Source / Inspiration", "US Constitution", "Irish Constitution"],
            ["Nature", "Negative (state must not...)", "Positive (state shall endeavor...)"],
            ["Justiciability", "Justiciable – enforceable in courts", "Non-justiciable – courts cannot enforce"],
            ["Aims at", "Political democracy", "Social & economic democracy"],
            ["Writ petition", "Yes (Art 32 / Art 226)", "No"],
            ["Precedence in conflict", "FRs prevail (generally)", "42nd Amendment gave DPSP overriding effect in some cases"],
            ["Limitation", "Can be suspended during emergency (Art 20, 21 cannot)", "Cannot be suspended"],
            ["Implementation", "Automatic on Constitution coming into force", "Need legislation / policy"],
            ["Scope", "Individual rights", "Community / welfare goals"],
        ],
    },
    {
        id: "constitutional-nonconstitutional",
        title: "Constitutional vs Non-Constitutional Bodies",
        emoji: "🏗️",
        tag: "Bodies",
        tagColor: "text-rose-400 bg-rose-900/30 border-rose-700/50",
        freq: "VERY HIGH",
        columns: ["Constitutional Bodies", "Non-Constitutional Bodies"],
        isSimpleTwo: true,
        rows: [
            ["Election Commission (Art 324)", "NITI Aayog (replaced Planning Commission)"],
            ["UPSC (Art 315)", "National Human Rights Commission"],
            ["Finance Commission (Art 280)", "Central Bureau of Investigation (CBI)"],
            ["CAG (Art 148)", "National Development Council"],
            ["Attorney General (Art 76)", "National Commission for SC/ST/OBC (partly statutory)"],
            ["Supreme Court (Art 124)", "Lokpal (Statutory)"],
            ["High Courts (Art 214)", "Inter-State Council (Executive Order)"],
            ["National Commission for SCs (Art 338)", "Zonal Councils (Statutory)"],
            ["Comptroller and Auditor General", "Goods and Services Tax Council (Art 279A – now constitutional)"],
        ],
    },
    {
        id: "union-state-concurrent",
        title: "Union, State & Concurrent Lists",
        emoji: "📋",
        tag: "Lists",
        tagColor: "text-sky-400 bg-sky-900/30 border-sky-700/50",
        freq: "HIGH",
        columns: ["Parameter", "Union List (I)", "State List (II)", "Concurrent List (III)"],
        rows: [
            ["Schedule", "7th Schedule", "7th Schedule", "7th Schedule"],
            ["Subjects", "100 subjects (originally 97)", "61 subjects (originally 66)", "52 subjects (originally 47)"],
            ["Who legislates", "Only Parliament", "Only State Legislature", "Both Parliament & State"],
            ["In conflict", "Parliament prevails", "State prevails (if no Parliament law)", "Parliament prevails"],
            ["Residuary powers", "With Parliament (Art 248)", "—", "—"],
            ["Key subjects", "Defence, Foreign Affairs, Nuclear Energy, Railways", "Police, Public Order, Agriculture, Land", "Education, Marriage, Forests, Trade Unions"],
            ["During Emergency", "Parliament can legislate on State list", "Parliament's law prevails", "Parliament prevails"],
        ],
    },
    {
        id: "speaker-deputy",
        title: "Speaker vs Deputy Speaker (Lok Sabha)",
        emoji: "🎙️",
        tag: "Parliament",
        tagColor: "text-violet-400 bg-violet-900/30 border-violet-700/50",
        freq: "MEDIUM",
        columns: ["Parameter", "Speaker", "Deputy Speaker"],
        rows: [
            ["Election", "Elected by all members of LS", "Elected by all members of LS"],
            ["Removal", "By effective majority of all then members (14-day notice)", "Same process as Speaker"],
            ["Acts as Speaker when?", "—", "When Speaker is absent / Speaker's office vacant"],
            ["During Joint Sitting", "Presides over Joint Sitting", "Takes over if Speaker absent"],
            ["Panel of Chairpersons", "Nominates members of Panel", "Is also part of Panel"],
            ["Role in constitutional amendment", "No special role (just certifies money bill)", "No special role"],
            ["Member of Parliamentary committees", "Not a member", "Can be member"],
            ["Communications with President", "Official communication channel for LS", "No such direct role"],
        ],
    },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CompareMaster() {
    const [activeTable, setActiveTable] = useState<string>(TABLES[0].id);
    const [collapsedRows, setCollapsedRows] = useState<Set<number>>(new Set());

    const current = TABLES.find(t => t.id === activeTable) || TABLES[0];

    const toggleRow = (i: number) => {
        setCollapsedRows(prev => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i); else next.add(i);
            return next;
        });
    };

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: "#070809", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
            <style>{`
                @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
                .table-row-anim { animation: fadeIn 0.25s ease both; }
            `}</style>

            {/* ─── Top Bar ───────────────────────────────────────────────────── */}
            <div
                className="sticky top-0 z-40 flex items-center gap-0 border-b"
                style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937", height: "48px" }}
            >
                <Link
                    href="/student/batch1/polity"
                    className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono transition-colors hover:bg-[#1A1C20]"
                    style={{ borderColor: "#1F2937", color: "#6B7280" }}
                >
                    <ArrowLeft className="w-3 h-3" /> POLITY
                </Link>
                <div className="px-4 h-full flex items-center gap-2 text-xs font-mono font-bold" style={{ color: "#F59E0B" }}>
                    <Scale className="w-3 h-3" /> COMPARE MASTER
                </div>
                <div className="flex-1" />
                <div className="px-4 h-full flex items-center gap-2 border-l text-xs font-mono" style={{ borderColor: "#1F2937", color: "#4B5563" }}>
                    <Table2 className="w-3 h-3" /> {TABLES.length} Tables
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">

                {/* ─── Header ─────────────────────────────────────────────── */}
                <div className="mb-8">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "#374151" }}>
                        UPSC POLITY / COMPARISON TABLES / MUST REVISE
                    </div>
                    <h1 className="font-black mb-2 leading-none" style={{ color: "#F9FAFB", fontSize: "clamp(22px,4vw,36px)", letterSpacing: "-0.02em" }}>
                        Compare Master
                    </h1>
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                        Side-by-side comparison of the most frequently tested Polity concepts in UPSC Prelims.
                    </p>
                </div>

                {/* ─── Table Selector Tabs ─────────────────────────────────── */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {TABLES.map(t => (
                        <button
                            key={t.id}
                            onClick={() => { setActiveTable(t.id); setCollapsedRows(new Set()); }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all"
                            style={{
                                backgroundColor: activeTable === t.id ? "#F59E0B" : "#111",
                                borderColor: activeTable === t.id ? "#F59E0B" : "#1F2937",
                                color: activeTable === t.id ? "#000" : "#9CA3AF",
                            }}
                        >
                            <span>{t.emoji}</span>
                            <span className="hidden sm:inline">{t.title}</span>
                            <span className="sm:hidden">{t.tag}</span>
                        </button>
                    ))}
                </div>

                {/* ─── Active Table ─────────────────────────────────────────── */}
                <div
                    className="border rounded-lg overflow-hidden table-row-anim"
                    key={activeTable}
                    style={{ borderColor: "#1F2937" }}
                >
                    {/* Table Header */}
                    <div
                        className="p-4 md:p-6 border-b flex flex-col sm:flex-row sm:items-center gap-3"
                        style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{current.emoji}</span>
                            <div>
                                <h2 className="font-black text-lg" style={{ color: "#F9FAFB" }}>{current.title}</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${current.tagColor}`}>
                                        {current.tag}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                                        current.freq === 'VERY HIGH' ? 'text-red-400 bg-red-900/30 border-red-700/50' :
                                        current.freq === 'HIGH' ? 'text-amber-400 bg-amber-900/30 border-amber-700/50' :
                                        'text-blue-400 bg-blue-900/30 border-blue-700/50'
                                    }`}>
                                        Frequency: {current.freq}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Data — Desktop: Full grid, Mobile: Accordion */}
                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                            <thead>
                                <tr style={{ backgroundColor: "#0A0C10" }}>
                                    {current.columns.map((col, ci) => (
                                        <th
                                            key={ci}
                                            className="px-5 py-3 text-left text-[11px] font-black uppercase tracking-widest border-b"
                                            style={{
                                                color: ci === 0 ? "#6B7280" : "#F59E0B",
                                                borderColor: "#1F2937",
                                            }}
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {current.rows.map((row, ri) => (
                                    <tr
                                        key={ri}
                                        className="transition-colors hover:bg-[#0D0F12] group"
                                        style={{ borderBottom: "1px solid #1F2937" }}
                                    >
                                        {row.map((cell, ci) => (
                                            <td
                                                key={ci}
                                                className="px-5 py-3 align-top text-sm leading-relaxed"
                                                style={{
                                                    color: ci === 0 ? "#9CA3AF" : "#D1D5DB",
                                                    fontWeight: ci === 0 ? 700 : 400,
                                                    backgroundColor: ci === 0 ? "#0A0C10" : "transparent",
                                                    borderRight: ci < row.length - 1 ? "1px solid #1F2937" : "none",
                                                }}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile: Accordion rows */}
                    <div className="md:hidden divide-y" style={{ borderColor: "#1F2937" }}>
                        {current.rows.map((row, ri) => {
                            const isOpen = !collapsedRows.has(ri);
                            return (
                                <div key={ri}>
                                    <button
                                        onClick={() => toggleRow(ri)}
                                        className="w-full flex items-center justify-between gap-3 p-4 text-left"
                                        style={{ backgroundColor: "#0A0C10" }}
                                    >
                                        <span className="text-sm font-bold" style={{ color: "#9CA3AF" }}>
                                            {row[0]}
                                        </span>
                                        {isOpen
                                            ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#4B5563" }} />
                                            : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#4B5563" }} />
                                        }
                                    </button>
                                    {isOpen && (
                                        <div className="p-4 space-y-3" style={{ backgroundColor: "#080A0D" }}>
                                            {row.slice(1).map((cell, ci) => (
                                                <div key={ci} className="space-y-1">
                                                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#F59E0B" }}>
                                                        {current.columns[ci + 1]}
                                                    </div>
                                                    <div className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
                                                        {cell}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ─── Quick Nav ─────────────────────────────────────────────── */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {TABLES.filter(t => t.id !== activeTable).map(t => (
                        <button
                            key={t.id}
                            onClick={() => { setActiveTable(t.id); setCollapsedRows(new Set()); window.scrollTo(0, 0); }}
                            className="flex items-center gap-3 p-4 rounded-lg border text-left transition-all hover:border-amber-500/30 hover:bg-[#0D0F12]"
                            style={{ backgroundColor: "#0A0C10", borderColor: "#1F2937" }}
                        >
                            <span className="text-xl">{t.emoji}</span>
                            <div>
                                <div className="text-xs font-bold" style={{ color: "#D1D5DB" }}>{t.title}</div>
                                <div className="text-[10px] mt-0.5" style={{ color: "#4B5563" }}>{t.rows.length} points</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* ─── Quick Tips Footer ─────────────────────────────────────── */}
                <div className="mt-8 p-4 rounded-lg border" style={{ backgroundColor: "#0A0C10", borderColor: "#1F2937" }}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
                        ⚡ UPSC Exam Tip
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                        Comparison questions in UPSC Prelims have a 35% hit rate in GS Paper 1. Focus on 
                        <strong style={{ color: "#9CA3AF" }}> President vs Governor</strong>, <strong style={{ color: "#9CA3AF" }}>FRs vs DPSP</strong>, and{" "}
                        <strong style={{ color: "#9CA3AF" }}>Union vs State List</strong> — these appear almost every year. 
                        Use the tables for 2-minute rapid revision sessions.
                    </p>
                </div>
            </div>
        </div>
    );
}
