"use client";

import React, { useState } from "react";
import {
    Crown, Building2, Scale, Shield, Gavel,
    AlertTriangle, ChevronDown, ChevronUp,
    CheckCircle2, XCircle, Minus, Star,
    Info, Zap, Users, FileText, Briefcase, Landmark
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Types ---
interface ComparisonRowProps {
    aspect: string;
    col2: string;
    col3: string;
    col4?: any; // For 3-column tables
    isPYQTrap?: boolean;
    highlight?: 'col2' | 'col3' | 'col4' | 'both' | 'none';
    className?: string; // For row styling
}

interface ColumnDef {
    title: string;
    className: string;
    icon?: any;
}

interface ComparisonData {
    id: string;
    title: string;
    icon: any;
    headerBg: string;
    headerText: string;
    columns: ColumnDef[];
    rows: ComparisonRowProps[];
    tips?: string[];
}

// --- Components ---

const ComparisonRow = ({ aspect, col2, col3, col4, isPYQTrap, highlight = 'none', className }: ComparisonRowProps) => {
    // Helper to determine cell styling
    const getCellStyle = (colName: string) => {
        if (highlight === 'both' || highlight === colName) {
            // Find the background color class from the data columns? 
            // Simplified approach: use generic highlight colors or specific ones
            if (colName === 'col2') return 'bg-purple-50 font-bold text-purple-800';
            if (colName === 'col3') return 'bg-orange-50 font-bold text-orange-800';
            if (colName === 'col4') return 'bg-green-50 font-bold text-green-800';
        }
        return 'text-slate-600';
    };

    return (
        <tr className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${isPYQTrap ? 'bg-red-50' : ''} ${className || ''}`}>
            <td className="p-3 font-semibold text-slate-700 border-r border-slate-200 align-top">
                <div className="flex items-center gap-2">
                    {aspect}
                    {isPYQTrap && (
                        <Badge className="bg-red-500 text-white text-[10px] px-1 hover:bg-red-600">PYQ TRAP</Badge>
                    )}
                </div>
            </td>
            <td className={`p-3 align-top ${getCellStyle('col2')}`}>
                {col2}
            </td>
            <td className={`p-3 align-top ${getCellStyle('col3')}`}>
                {col3}
            </td>
            {col4 && (
                <td className={`p-3 align-top ${getCellStyle('col4')}`}>
                    {col4}
                </td>
            )}
        </tr>
    );
};

const ComparisonTable = ({ data }: { data: ComparisonData }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden mt-6">
            <CardHeader className={`${data.headerBg} text-white`}>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <data.icon size={24} />
                        {data.title}
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-white hover:bg-white/20"
                    >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </Button>
                </div>
                <p className="text-white/80 text-sm mt-2 font-medium">
                    {data.headerText}
                </p>
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r w-1/4">Aspect</th>
                                    {data.columns.map((col, idx) => (
                                        <th key={idx} className={`p-3 text-left font-bold ${col.className}`}>
                                            <div className="flex items-center gap-2">
                                                {col.icon && <col.icon size={18} />}
                                                {col.title}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.rows.map((row, idx) => (
                                    <ComparisonRow key={idx} {...row} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {data.tips && data.tips.length > 0 && (
                        <div className="p-4 bg-amber-50 border-t-2 border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                                <Star size={16} />
                                Quick Memory Tips
                            </h4>
                            <ul className="text-sm text-amber-900 space-y-1 pl-1">
                                {data.tips.map((tip, idx) => (
                                    <li key={idx}>• {tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
            )}
        </Card>
    );
};

// --- DATA ---

const COMPARISON_DATA: ComparisonData[] = [
    {
        id: "pres-gov",
        title: "President vs Governor",
        icon: Crown,
        headerBg: "bg-gradient-to-r from-purple-600 to-orange-500",
        headerText: "Most asked comparison in UPSC Polity • Focus on PYQ Traps marked in red",
        columns: [
            { title: "President (Union)", className: "text-purple-700 bg-purple-50 w-[37.5%]", icon: Crown },
            { title: "Governor (State)", className: "text-orange-700 bg-orange-50 w-[37.5%]", icon: Building2 },
        ],
        rows: [
            // Constitutional Position
            { aspect: "Constitutional Article", col2: "Art 52-78 (Part V)", col3: "Art 153-167 (Part VI)", highlight: 'both' },
            { aspect: "Nature of Office", col2: "Elected (Electoral College)", col3: "Appointed by President", isPYQTrap: true, highlight: 'both' },
            { aspect: "Tenure", col2: "5 years (fixed term)", col3: "Pleasure of President (no fixed term)", isPYQTrap: true },
            { aspect: "Removal Process", col2: "Impeachment (Art 61)", col3: "At President's pleasure", isPYQTrap: true },
            { aspect: "Impeachment Ground", col2: "Violation of Constitution", col3: "No impeachment - only removal" },

            // Election/Appointment
            { aspect: "Electoral College", col2: "Elected MPs + Elected MLAs", col3: "Not applicable (appointed)" },
            { aspect: "MLCs Vote?", col2: "NO - MLCs don't vote", col3: "Not applicable", isPYQTrap: true },
            { aspect: "Nominated MPs Vote?", col2: "NO", col3: "Not applicable" },

            // Qualifications
            { aspect: "Age Requirement", col2: "35 years", col3: "35 years", highlight: 'both' },
            { aspect: "Citizenship", col2: "Citizen of India", col3: "Citizen of India" },
            { aspect: "Registered Voter", col2: "Must be LS voter", col3: "No such requirement", isPYQTrap: true },

            // Powers - Executive
            { aspect: "Appointment of PM/CM", col2: "Appoints PM", col3: "Appoints CM" },
            { aspect: "Council of Ministers", col2: "Appoints on PM's advice", col3: "Appoints on CM's advice" },
            { aspect: "Discretionary Power", col2: "Limited (situational)", col3: "More (Art 163 - wider scope)", highlight: 'col3' },

            // Powers - Legislative
            { aspect: "Ordinance Power", col2: "Art 123", col3: "Art 213" },
            { aspect: "Ordinance Max Life", col2: "6 weeks + 6 months", col3: "6 weeks + 6 months" },
            { aspect: "Veto Powers", col2: "Absolute, Suspensive, Pocket", col3: "Absolute, Suspensive, NO Pocket", isPYQTrap: true, highlight: 'both' },
            { aspect: "Reserving Bills", col2: "Not applicable", col3: "Can reserve for President (Art 200)", isPYQTrap: true },

            // Powers - Judicial
            { aspect: "Pardoning Power Article", col2: "Art 72", col3: "Art 161" },
            { aspect: "Death Sentence Pardon?", col2: "YES - can pardon", col3: "NO - cannot pardon death sentence", isPYQTrap: true, highlight: 'both' },
            { aspect: "Court Martial Pardon?", col2: "YES", col3: "NO", isPYQTrap: true },

            // Emergency
            { aspect: "Emergency Powers", col2: "Art 352, 356, 360", col3: "Recommends President's Rule" },
            { aspect: "Dissolve Legislature", col2: "Can dissolve Lok Sabha", col3: "Can dissolve State Assembly" },

            // Miscellaneous
            { aspect: "Salary Source", col2: "Consolidated Fund of India", col3: "Consolidated Fund of State" },
            { aspect: "Oath Administered By", col2: "CJI or Senior SC Judge", col3: "HC Chief Justice" },
            { aspect: "Diplomatic Powers", col2: "Treaties, Ambassadors", col3: "None" },
            { aspect: "Can Hold Office in 2+ States?", col2: "Not applicable", col3: "YES (same person)", isPYQTrap: true },
        ],
        tips: [
            "72 vs 161: President pardons death; Governor cannot",
            "Pocket Veto: Only President has it; Governor must decide",
            "MLCs: NEVER vote in Presidential election",
            "Pleasure Doctrine: Governor serves at President's pleasure",
        ]
    },
    {
        id: "emergency",
        title: "Three Types of Emergency",
        icon: AlertTriangle,
        headerBg: "bg-gradient-to-r from-red-600 to-orange-500",
        headerText: "Key differences and PYQ traps related to emergency provisions",
        columns: [
            { title: "National Emergency (Art 352)", className: "text-red-700 bg-red-50" },
            { title: "President's Rule (Art 356)", className: "text-orange-700 bg-orange-50" },
            { title: "Financial Emergency (Art 360)", className: "text-green-700 bg-green-50" },
        ],
        rows: [
            { aspect: "Ground", col2: "War, External Aggression, Armed Rebellion", col3: "Failure of Constitutional Machinery", col4: "Threat to Financial Stability/Credit", className: "bg-red-50/30" },
            { aspect: "Old Term Changed", col2: "'Internal Disturbance' → 'Armed Rebellion' (44th AA)", col3: "-", col4: "-", isPYQTrap: true, className: "bg-amber-50" },
            { aspect: "Approval Time", col2: "1 Month (was 2 before 44th AA)", col3: "2 Months", col4: "2 Months" },
            { aspect: "Majority Required", col2: "Special Majority", col3: "Simple Majority", col4: "Simple Majority", highlight: 'col2' },
            { aspect: "Max Duration", col2: "Indefinite (review every 6 months)", col3: "3 Years (max)", col4: "Indefinite (no periodic approval)" },
            { aspect: "Art 20-21 Suspended?", col2: "NO (44th AA protection)", col3: "Not applicable", col4: "Not applicable", isPYQTrap: true, className: "bg-amber-50", highlight: 'col2' },
            { aspect: "Art 19 Suspended?", col2: "Auto-suspended (Art 358)", col3: "Not suspended", col4: "Not suspended", highlight: 'col2' },
            { aspect: "Effect on Centre-State", col2: "Federal → Unitary", col3: "State govt suspended", col4: "Centre controls state finances" },
            { aspect: "State Assembly", col2: "Continues (LS term can extend)", col3: "Suspended or Dissolved", col4: "Continues" },
            { aspect: "Times Imposed", col2: "3 times (1962, 1971, 1975)", col3: "100+ times", col4: "NEVER (even in 1991)", isPYQTrap: true, className: "bg-amber-50", highlight: 'col4' },
            { aspect: "Judicial Review", col2: "Yes (Minerva Mills)", col3: "Yes (SR Bommai)", col4: "Yes" },
            { aspect: "Revocation", col2: "President or LS resolution (simple majority)", col3: "President anytime", col4: "President anytime" },
        ]
    },
    {
        id: "parliament",
        title: "Lok Sabha vs Rajya Sabha",
        icon: Users,
        headerBg: "bg-gradient-to-r from-blue-600 to-indigo-500",
        headerText: "Understanding the two houses of Indian Parliament",
        columns: [
            { title: "Lok Sabha (Lower House)", className: "text-blue-700 bg-blue-50" },
            { title: "Rajya Sabha (Upper House)", className: "text-indigo-700 bg-indigo-50" },
        ],
        rows: [
            { aspect: "Also Called", col2: "House of the People", col3: "Council of States" },
            { aspect: "Max Strength", col2: "552 (530+20+2 Anglo-Indians*)", col3: "250 (238+12 nominated)" },
            { aspect: "Election Method", col2: "Direct Election (FPTP)", col3: "Indirect Election (STV by MLAs)", isPYQTrap: true, className: "bg-amber-50", highlight: 'both' },
            { aspect: "Term", col2: "5 years (can be dissolved)", col3: "6 years (1/3rd retire every 2 years)" },
            { aspect: "Can be Dissolved?", col2: "YES", col3: "NO (Permanent body)", isPYQTrap: true, className: "bg-amber-50", highlight: 'both' },
            { aspect: "Presiding Officer", col2: "Speaker (elected from members)", col3: "Vice President (ex-officio)" },
            { aspect: "Money Bill", col2: "Can introduce & pass", col3: "Can only suggest (14 days)", isPYQTrap: true, className: "bg-amber-50", highlight: 'both' },
            { aspect: "No-Confidence Motion", col2: "YES - can pass", col3: "NO - cannot move" },
            { aspect: "Joint Session", col2: "Advantage (more members)", col3: "Disadvantage" },
            { aspect: "Special Powers", col2: "Money Bill, No-confidence, Budget", col3: "Art 249 (State list), Art 312 (All India Services)", isPYQTrap: true, className: "bg-amber-50", highlight: 'col3' },
            { aspect: "PM must be member of?", col2: "Not mandatory (can be RS)", col3: "Can be PM from RS also" },
            { aspect: "Age Qualification", col2: "25 years", col3: "30 years", highlight: 'col3' },
        ]
    },
    {
        id: "centre-state",
        title: "Centre-State Relations Impact",
        icon: Scale,
        headerBg: "bg-gradient-to-r from-emerald-600 to-teal-500",
        headerText: "How Centre-State relations change under different circumstances",
        columns: [
            { title: "Normal Times", className: "text-emerald-700 bg-emerald-50" },
            { title: "National Emergency", className: "text-red-700 bg-red-50" },
            { title: "President's Rule", className: "text-orange-700 bg-orange-50" },
        ],
        rows: [
            { aspect: "Executive Power (Centre)", col2: "Limited to Union List", col3: "Extends to State matters", col4: "Takes over State Admin", highlight: 'col3' },
            { aspect: "Legislative Power (State List)", col2: "Exclusive to State (mostly)", col3: "Parliament can legislate", col4: "Parliament legislates", highlight: 'col3' },
            { aspect: "State Assembly", col2: "Functions normally", col3: "NOT Suspended (usually)", col4: "Suspended or Dissolved", isPYQTrap: true, className: "bg-amber-50", highlight: 'col3' },
            { aspect: "Financial Distribution", col2: "As per Finance Commission", col3: "President can modify", col4: "State budget by Parliament", highlight: 'col3' },
            { aspect: "All India Services", col2: "Controlled by Centre & State", col3: "Full Central Control", col4: "Under Governor/Prez", highlight: 'col3' },
            { aspect: "Residuary Powers", col2: "With Parliament", col3: "With Parliament", col4: "With Parliament", highlight: 'col2' },
        ]
    },
    {
        id: "amendment",
        title: "Types of Amendments",
        icon: Gavel,
        headerBg: "bg-gradient-to-r from-pink-600 to-rose-500",
        headerText: "Different methods of amending the Indian Constitution",
        columns: [
            { title: "Requirement", className: "text-pink-700 bg-pink-50 w-[20%]" },
            { title: "Example Subjects", className: "text-slate-700 bg-slate-50 w-[35%]" },
            { title: "Article 368?", className: "text-purple-700 bg-purple-50 w-[20%]" },
        ],
        rows: [
            {
                aspect: "Simple Majority",
                col2: ">50% present & voting",
                col3: (
                    <ul className="list-disc list-inside">
                        <li>New States (Art 3)</li>
                        <li>Citizenship</li>
                        <li>Official Language</li>
                        <li>2nd, 5th, 6th Schedule</li>
                    </ul>
                ) as any,
                col4: "NO (Technically)",
                className: "text-pink-800"
            },
            {
                aspect: "Special Majority",
                col2: ">50% Total + 2/3 Present",
                col3: (
                    <ul className="list-disc list-inside">
                        <li>Fundamental Rights</li>
                        <li>DPSP</li>
                        <li>All others not covered by 1 & 3</li>
                    </ul>
                ) as any,
                col4: "YES",
                isPYQTrap: true,
                className: "bg-amber-50 text-purple-800"
            },
            {
                aspect: "Special + Ratification",
                col2: "Special Majority + 50% States",
                col3: (
                    <ul className="list-disc list-inside">
                        <li>Election of President</li>
                        <li>SC/HC Powers</li>
                        <li>GST Council</li>
                        <li>7th Schedule Lists</li>
                        <li>Art 368 itself</li>
                    </ul>
                ) as any,
                col4: "YES",
                className: "bg-blue-50 text-blue-800"
            },
        ]
    },
    {
        id: "pm_cm",
        title: "Prime Minister vs Chief Minister",
        icon: Briefcase,
        headerBg: "bg-gradient-to-r from-indigo-600 to-blue-500",
        headerText: "Comparison of the Head of Government at Union and State levels",
        columns: [
            { title: "Prime Minister (Union)", className: "text-indigo-700 bg-indigo-50" },
            { title: "Chief Minister (State)", className: "text-blue-700 bg-blue-50" },
        ],
        rows: [
            { aspect: "Position", col2: "Head of Government (Union)", col3: "Head of Government (State)" },
            { aspect: "Appointment", col2: "Appointed by President", col3: "Appointed by Governor" },
            { aspect: "Oath Administered By", col2: "President", col3: "Governor" },
            { aspect: "Term", col2: "Not fixed (holds office during pleasure of President)", col3: "Not fixed (holds office during pleasure of Governor)" },
            { aspect: "Removal", col2: "No-confidence motion in Lok Sabha", col3: "No-confidence motion in State Assembly" },
            { aspect: "Council of Ministers", col2: "Advises President", col3: "Advises Governor" },
            { aspect: "Resignation", col2: "To President", col3: "To Governor" },
            { aspect: "Relation with President/Governor", col2: "Principal advisor to President", col3: "Principal advisor to Governor" },
            { aspect: "Legislature Membership", col2: "Must be member of Parliament (within 6 months)", col3: "Must be member of State Legislature (within 6 months)" },
            { aspect: "Discretionary Powers", col2: "Very limited", col3: "More significant (e.g., reserving bills)", highlight: 'col3' },
            { aspect: "Role in Emergency", col2: "Key role in National Emergency", col3: "State head during President's Rule" },
        ]
    },
    {
        id: "sc_hc",
        title: "Supreme Court vs High Court",
        icon: Landmark,
        headerBg: "bg-gradient-to-r from-violet-600 to-purple-500",
        headerText: "Key differences between the apex and state-level judiciary",
        columns: [
            { title: "Supreme Court (Union)", className: "text-violet-700 bg-violet-50" },
            { title: "High Court (State)", className: "text-purple-700 bg-purple-50" },
        ],
        rows: [
            { aspect: "Jurisdiction", col2: "Original, Appellate, Advisory", col3: "Original, Appellate, Supervisory, Revisional" },
            { aspect: "Appellate Jurisdiction", col2: "Against HC judgments", col3: "Against lower court judgments" },
            { aspect: "Advisory Jurisdiction", col2: "Art 143 (President)", col3: "None" },
            { aspect: "Writ Jurisdiction", col2: "Art 32 (Fundamental Rights only)", col3: "Art 226 (FR + Legal Rights)", isPYQTrap: true, highlight: 'col3' },
            { aspect: "Appointment of Judges", col2: "By President (consultation with CJI, SC/HC judges)", col3: "By President (consultation with CJI, Governor, HC CJ)" },
            { aspect: "Removal of Judges", col2: "By President (Parliamentary resolution)", col3: "By President (Parliamentary resolution)" },
            { aspect: "Transfer of Judges", col2: "Can transfer HC judges", col3: "Cannot transfer SC judges" },
            { aspect: "Retirement Age", col2: "65 years", col3: "62 years", isPYQTrap: true, highlight: 'both' },
            { aspect: "Supervisory Power", col2: "None over HCs", col3: "Over all subordinate courts and tribunals" },
            { aspect: "Court of Record", col2: "Yes (Art 129)", col3: "Yes (Art 215)" },
            { aspect: "Power of Judicial Review", col2: "Yes", col3: "Yes" },
        ]
    },
    // --- NEW TABLES ---
    {
        id: "public_private",
        title: "Public Bill vs Private Bill",
        icon: FileText,
        headerBg: "bg-gradient-to-r from-blue-700 to-cyan-600",
        headerText: "Difference between Govt Bills and Private Member Bills",
        columns: [
            { title: "Public Bill (Govt)", className: "text-blue-800 bg-blue-50" },
            { title: "Private Member Bill", className: "text-cyan-800 bg-cyan-50" }
        ],
        rows: [
            { aspect: "Introduced By", col2: "Minister", col3: "Any MP (non-minister)" },
            { aspect: "Chance of Passing", col2: "High (Govt has majority)", col3: "Very Low" },
            { aspect: "Notice Period", col2: "7 Days", col3: "1 Month", isPYQTrap: true, highlight: 'col3' },
            { aspect: "Defeat Impact", col2: "Govt may resign (if Money Bill)", col3: "No impact on Govt stability" },
            { aspect: "Drafting", col2: "Dept + Law Ministry", col3: "Member's responsibility" }
        ]
    },
    {
        id: "ordinary_money",
        title: "Ordinary Bill vs Money Bill",
        icon: Landmark,
        headerBg: "bg-gradient-to-r from-emerald-600 to-green-500",
        headerText: "Art 107 vs Art 110: Critical for Prelims",
        columns: [
            { title: "Ordinary Bill", className: "text-emerald-800 bg-emerald-50" },
            { title: "Money Bill", className: "text-green-800 bg-green-50" }
        ],
        rows: [
            { aspect: "Introduction House", col2: "LS or RS", col3: "Only Lok Sabha", isPYQTrap: true, highlight: 'col3' },
            { aspect: "President's Rec.", col2: "Not required", col3: "Required (Art 117)", isPYQTrap: true },
            { aspect: "Rajya Sabha Power", col2: "Can amend/reject (6 months)", col3: "Cannot amend/reject (14 days max)", highlight: 'col3' },
            { aspect: "Joint Sitting", col2: "YES (Art 108)", col3: "NO", isPYQTrap: true },
            { aspect: "President's Veto", col2: "Can return for reconsideration", col3: "Cannot return (Give assent or withhold)" }
        ]
    },
    {
        id: "censure_noconfidence",
        title: "Censure vs No-Confidence",
        icon: AlertTriangle,
        headerBg: "bg-gradient-to-r from-rose-600 to-red-500",
        headerText: "Parliamentary motions to hold Govt accountable",
        columns: [
            { title: "Censure Motion", className: "text-rose-800 bg-rose-50" },
            { title: "No-Confidence Motion", className: "text-red-800 bg-red-50" }
        ],
        rows: [
            { aspect: "Reason Required?", col2: "YES - must state reason", col3: "NO - need not state reason", isPYQTrap: true, highlight: 'col3' },
            { aspect: "Against Whom?", col2: "Individual Minister or Council", col3: "Entire Council of Ministers only" },
            { aspect: "Impact of Passing", col2: "Council need NOT resign", col3: "Council MUST resign", highlight: 'col3' },
            { aspect: "House", col2: "Lok Sabha only", col3: "Lok Sabha only" }
        ]
    },
    {
        id: "martial_emergency",
        title: "Martial Law vs National Emergency",
        icon: Shield,
        headerBg: "bg-gradient-to-r from-slate-700 to-gray-600",
        headerText: "Military Rule (Art 34) vs Constitutional Emergency (Art 352)",
        columns: [
            { title: "Martial Law (Art 34)", className: "text-slate-800 bg-slate-100" },
            { title: "National Emergency (Art 352)", className: "text-red-800 bg-red-50" }
        ],
        rows: [
            { aspect: "Scope", col2: "Specific Area only", col3: "Whole India or part of it" },
            { aspect: "Govt Machinery", col2: "Suspended (Military takes over)", col3: "Continues (Centre gets more power)", highlight: 'col2' },
            { aspect: "Courts", col2: "May comprise Military Tribunals", col3: "Courts function normally" },
            { aspect: "Fundamental Rights", col2: "Affects all FRs", col3: "Affects Art 19 (Art 358) & Enforcement (Art 359)" },
            { aspect: "Defined in Const.?", col2: "NO (Implicit)", col3: "YES (Explicit)" }
        ]
    },
    {
        id: "adjourn_prorogue",
        title: "Adjourn vs Prorogue vs Dissolution",
        icon: Zap,
        headerBg: "bg-gradient-to-r from-amber-500 to-yellow-500",
        headerText: "End of Sitting vs End of Session vs End of House",
        columns: [
            { title: "Adjournment", className: "text-amber-800 bg-amber-50" },
            { title: "Prorogation", className: "text-yellow-800 bg-yellow-50" },
            { title: "Dissolution", className: "text-red-800 bg-red-50" }
        ],
        rows: [
            { aspect: "Done By", col2: "Presiding Officer (Speaker/Chairman)", col3: "President", col4: "President (or naturally 5 yrs)", highlight: 'col2' },
            { aspect: "Ends what?", col2: "Sitting (Hours/Days)", col3: "Session (Months)", col4: "Life of House (Years)" },
            { aspect: "Effect on Bills", col2: "No Lapse", col3: "No Lapse (Notices lapse)", col4: "Pending Bills Lapse (Subject to rules)", isPYQTrap: true, highlight: 'col4' }
        ]
    },
    {
        id: "fr_dpsp",
        title: "Fundamental Rights vs DPSP",
        icon: Scale,
        headerBg: "bg-gradient-to-r from-indigo-500 to-violet-500",
        headerText: "Justiciable vs Non-Justiciable Rights",
        columns: [
            { title: "Fundamental Rights (Part III)", className: "text-indigo-800 bg-indigo-50" },
            { title: "DPSP (Part IV)", className: "text-violet-800 bg-violet-50" }
        ],
        rows: [
            { aspect: "Nature", col2: "Negative (Prohibit State)", col3: "Positive (Direct State to do good)", highlight: 'both' },
            { aspect: "Justiciability", col2: "Yes (Can go to Court)", col3: "No (Cannot enforce)" },
            { aspect: "Goal", col2: "Political Democracy", col3: "Social & Economic Democracy", isPYQTrap: true, highlight: 'col3' },
            { aspect: "Conflict (Minerva Mills)", col2: "Superior (mostly)", col3: "Balance is essential", highlight: 'col3' },
            { aspect: "Suspension", col2: "During Emergency (except 20, 21)", col3: "Never suspended (always valid guide)" }
        ]
    }
];

// Main Export: Smart Comparison Tables Dashboard
export default function SmartComparisonTables() {
    return (
        <div className="space-y-8 p-6 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
            {/* HEADER */}
            <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <Scale size={28} />
                    <h1 className="text-2xl font-bold">Smart Comparison Tables</h1>
                </div>
                <p className="mt-3 text-slate-600">
                    Essential UPSC Polity Comparisons • PYQ Traps Highlighted
                </p>
            </div>

            {/* Tab Navigation */}
            <Tabs defaultValue="pres-gov" className="w-full">
                <TabsList className="grid w-full grid-cols-7 bg-white border-2 border-slate-200 rounded-xl p-1 h-auto">
                    <TabsTrigger value="pres-gov" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-orange-500 data-[state=active]:text-white p-2">
                        Pres vs Gov
                    </TabsTrigger>
                    <TabsTrigger value="emergency" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white p-2">
                        Emergency
                    </TabsTrigger>
                    <TabsTrigger value="parliament" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white p-2">
                        LS vs RS
                    </TabsTrigger>
                    <TabsTrigger value="centre-state" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white p-2">
                        Centre-State
                    </TabsTrigger>
                    <TabsTrigger value="amendment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white p-2">
                        Amendments
                    </TabsTrigger>
                    <TabsTrigger value="pm_cm" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-blue-500 data-[state=active]:text-white p-2">
                        PM vs CM
                    </TabsTrigger>
                    <TabsTrigger value="sc_hc" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white p-2">
                        SC vs HC
                    </TabsTrigger>
                    <TabsTrigger value="public_private" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white p-2">
                        Bills: Pvt vs Public
                    </TabsTrigger>
                    <TabsTrigger value="ordinary_money" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-green-600 data-[state=active]:text-white p-2">
                        Ord vs Money Bill
                    </TabsTrigger>
                    <TabsTrigger value="censure_noconfidence" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-600 data-[state=active]:to-red-600 data-[state=active]:text-white p-2">
                        Motions
                    </TabsTrigger>
                    <TabsTrigger value="martial_emergency" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-gray-600 data-[state=active]:text-white p-2">
                        Martial Law
                    </TabsTrigger>
                    <TabsTrigger value="adjourn_prorogue" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white p-2">
                        Session End
                    </TabsTrigger>
                    <TabsTrigger value="fr_dpsp" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white p-2">
                        FR vs DPSP
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="pres-gov" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'pres-gov')!} />
                </TabsContent>

                <TabsContent value="emergency" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'emergency')!} />
                </TabsContent>

                <TabsContent value="parliament" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'parliament')!} />
                </TabsContent>

                <TabsContent value="centre-state" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'centre-state')!} />
                </TabsContent>

                <TabsContent value="amendment" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'amendment')!} />
                </TabsContent>

                <TabsContent value="pm_cm" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'pm_cm')!} />
                </TabsContent>

                <TabsContent value="sc_hc" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'sc_hc')!} />
                </TabsContent>

                <TabsContent value="public_private" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'public_private')!} />
                </TabsContent>
                <TabsContent value="ordinary_money" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'ordinary_money')!} />
                </TabsContent>
                <TabsContent value="censure_noconfidence" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'censure_noconfidence')!} />
                </TabsContent>
                <TabsContent value="martial_emergency" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'martial_emergency')!} />
                </TabsContent>
                <TabsContent value="adjourn_prorogue" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'adjourn_prorogue')!} />
                </TabsContent>
                <TabsContent value="fr_dpsp" className="mt-6">
                    <ComparisonTable data={COMPARISON_DATA.find(d => d.id === 'fr_dpsp')!} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
