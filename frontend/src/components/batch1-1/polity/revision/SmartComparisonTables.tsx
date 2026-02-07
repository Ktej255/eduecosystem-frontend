"use client";

import React, { useState } from "react";
import {
    Crown, Building2, Scale, Shield, Gavel,
    AlertTriangle, ChevronDown, ChevronUp,
    CheckCircle2, XCircle, Minus, Star,
    Info, Zap, Users, FileText
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Comparison Row Component
interface ComparisonRowProps {
    aspect: string;
    president: string;
    governor: string;
    isPYQTrap?: boolean;
    highlight?: 'president' | 'governor' | 'both' | 'none';
}

const ComparisonRow = ({ aspect, president, governor, isPYQTrap, highlight = 'none' }: ComparisonRowProps) => (
    <tr className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${isPYQTrap ? 'bg-red-50' : ''}`}>
        <td className="p-3 font-semibold text-slate-700 border-r border-slate-200">
            <div className="flex items-center gap-2">
                {aspect}
                {isPYQTrap && (
                    <Badge className="bg-red-500 text-white text-[10px] px-1">PYQ TRAP</Badge>
                )}
            </div>
        </td>
        <td className={`p-3 ${highlight === 'president' || highlight === 'both' ? 'bg-purple-50 font-bold text-purple-800' : 'text-slate-600'}`}>
            {president}
        </td>
        <td className={`p-3 ${highlight === 'governor' || highlight === 'both' ? 'bg-orange-50 font-bold text-orange-800' : 'text-slate-600'}`}>
            {governor}
        </td>
    </tr>
);

// PRESIDENT VS GOVERNOR COMPARISON
export function PresidentVsGovernorTable() {
    const [isExpanded, setIsExpanded] = useState(true);

    const comparisons: ComparisonRowProps[] = [
        // Constitutional Position
        { aspect: "Constitutional Article", president: "Art 52-78 (Part V)", governor: "Art 153-167 (Part VI)", highlight: 'both' },
        { aspect: "Nature of Office", president: "Elected (Electoral College)", governor: "Appointed by President", isPYQTrap: true, highlight: 'both' },
        { aspect: "Tenure", president: "5 years (fixed term)", governor: "Pleasure of President (no fixed term)", isPYQTrap: true },
        { aspect: "Removal Process", president: "Impeachment (Art 61)", governor: "At President's pleasure", isPYQTrap: true },
        { aspect: "Impeachment Ground", president: "Violation of Constitution", governor: "No impeachment - only removal" },

        // Election/Appointment
        { aspect: "Electoral College", president: "Elected MPs + Elected MLAs", governor: "Not applicable (appointed)" },
        { aspect: "MLCs Vote?", president: "NO - MLCs don't vote", governor: "Not applicable", isPYQTrap: true },
        { aspect: "Nominated MPs Vote?", president: "NO", governor: "Not applicable" },

        // Qualifications
        { aspect: "Age Requirement", president: "35 years", governor: "35 years", highlight: 'both' },
        { aspect: "Citizenship", president: "Citizen of India", governor: "Citizen of India" },
        { aspect: "Registered Voter", president: "Must be LS voter", governor: "No such requirement", isPYQTrap: true },

        // Powers - Executive
        { aspect: "Appointment of PM/CM", president: "Appoints PM", governor: "Appoints CM" },
        { aspect: "Council of Ministers", president: "Appoints on PM's advice", governor: "Appoints on CM's advice" },
        { aspect: "Discretionary Power", president: "Limited (situational)", governor: "More (Art 163 - wider scope)", highlight: 'governor' },

        // Powers - Legislative
        { aspect: "Ordinance Power", president: "Art 123", governor: "Art 213" },
        { aspect: "Ordinance Max Life", president: "6 weeks + 6 months", governor: "6 weeks + 6 months" },
        { aspect: "Veto Powers", president: "Absolute, Suspensive, Pocket", governor: "Absolute, Suspensive, NO Pocket", isPYQTrap: true, highlight: 'both' },
        { aspect: "Reserving Bills", president: "Not applicable", governor: "Can reserve for President (Art 200)", isPYQTrap: true },

        // Powers - Judicial
        { aspect: "Pardoning Power Article", president: "Art 72", governor: "Art 161" },
        { aspect: "Death Sentence Pardon?", president: "YES - can pardon", governor: "NO - cannot pardon death sentence", isPYQTrap: true, highlight: 'both' },
        { aspect: "Court Martial Pardon?", president: "YES", governor: "NO", isPYQTrap: true },

        // Emergency
        { aspect: "Emergency Powers", president: "Art 352, 356, 360", governor: "Recommends President's Rule" },
        { aspect: "Dissolve Legislature", president: "Can dissolve Lok Sabha", governor: "Can dissolve State Assembly" },

        // Miscellaneous
        { aspect: "Salary Source", president: "Consolidated Fund of India", governor: "Consolidated Fund of State" },
        { aspect: "Oath Administered By", president: "CJI or Senior SC Judge", governor: "HC Chief Justice" },
        { aspect: "Diplomatic Powers", president: "Treaties, Ambassadors", governor: "None" },
        { aspect: "Can Hold Office in 2+ States?", president: "Not applicable", governor: "YES (same person)", isPYQTrap: true },
    ];

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <Crown size={24} />
                        President vs Governor
                        <Building2 size={24} />
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
                <p className="text-purple-100 text-sm mt-2">
                    Most asked comparison in UPSC Polity • Focus on PYQ Traps marked in red
                </p>
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r border-slate-200 w-1/4">Aspect</th>
                                    <th className="p-3 text-left font-bold text-purple-700 bg-purple-50 w-[37.5%]">
                                        <div className="flex items-center gap-2">
                                            <Crown size={18} />
                                            President (Union)
                                        </div>
                                    </th>
                                    <th className="p-3 text-left font-bold text-orange-700 bg-orange-50 w-[37.5%]">
                                        <div className="flex items-center gap-2">
                                            <Building2 size={18} />
                                            Governor (State)
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row, idx) => (
                                    <ComparisonRow key={idx} {...row} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Quick Memory Tips */}
                    <div className="p-4 bg-amber-50 border-t-2 border-amber-200">
                        <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                            <Star size={16} />
                            Quick Memory Tips
                        </h4>
                        <ul className="text-sm text-amber-700 space-y-1">
                            <li>• <strong>72 vs 161:</strong> President pardons death; Governor cannot</li>
                            <li>• <strong>Pocket Veto:</strong> Only President has it; Governor must decide</li>
                            <li>• <strong>MLCs:</strong> NEVER vote in Presidential election</li>
                            <li>• <strong>Pleasure Doctrine:</strong> Governor serves at President's pleasure</li>
                        </ul>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

// EMERGENCY TYPES COMPARISON
export function EmergencyTypesTable() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden mt-6">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <AlertTriangle size={24} />
                        Three Types of Emergency
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
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r">Aspect</th>
                                    <th className="p-3 text-left font-bold text-red-700 bg-red-50">
                                        National Emergency (Art 352)
                                    </th>
                                    <th className="p-3 text-left font-bold text-orange-700 bg-orange-50">
                                        President's Rule (Art 356)
                                    </th>
                                    <th className="p-3 text-left font-bold text-green-700 bg-green-50">
                                        Financial Emergency (Art 360)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Ground</td>
                                    <td className="p-3 bg-red-50/30">War, External Aggression, Armed Rebellion</td>
                                    <td className="p-3 bg-orange-50/30">Failure of Constitutional Machinery</td>
                                    <td className="p-3 bg-green-50/30">Threat to Financial Stability/Credit</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Old Term Changed
                                    </td>
                                    <td className="p-3">'Internal Disturbance' → 'Armed Rebellion' (44th AA)</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3">-</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Approval Time</td>
                                    <td className="p-3">1 Month (was 2 before 44th AA)</td>
                                    <td className="p-3">2 Months</td>
                                    <td className="p-3">2 Months</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Majority Required</td>
                                    <td className="p-3 font-bold text-red-700">Special Majority</td>
                                    <td className="p-3 font-bold text-orange-700">Simple Majority</td>
                                    <td className="p-3 font-bold text-green-700">Simple Majority</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Max Duration</td>
                                    <td className="p-3">Indefinite (review every 6 months)</td>
                                    <td className="p-3">3 Years (max)</td>
                                    <td className="p-3">Indefinite (no periodic approval)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Art 20-21 Suspended?
                                    </td>
                                    <td className="p-3 font-bold text-green-600">NO (44th AA protection)</td>
                                    <td className="p-3">Not applicable</td>
                                    <td className="p-3">Not applicable</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Art 19 Suspended?</td>
                                    <td className="p-3 font-bold text-red-600">Auto-suspended (Art 358)</td>
                                    <td className="p-3">Not suspended</td>
                                    <td className="p-3">Not suspended</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Effect on Centre-State</td>
                                    <td className="p-3">Federal → Unitary</td>
                                    <td className="p-3">State govt suspended</td>
                                    <td className="p-3">Centre controls state finances</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">State Assembly</td>
                                    <td className="p-3">Continues (LS term can extend)</td>
                                    <td className="p-3">Suspended or Dissolved</td>
                                    <td className="p-3">Continues</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Times Imposed
                                    </td>
                                    <td className="p-3">3 times (1962, 1971, 1975)</td>
                                    <td className="p-3">100+ times</td>
                                    <td className="p-3 font-bold text-green-600">NEVER (even in 1991)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Judicial Review</td>
                                    <td className="p-3">Yes (Minerva Mills)</td>
                                    <td className="p-3">Yes (SR Bommai)</td>
                                    <td className="p-3">Yes</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Revocation</td>
                                    <td className="p-3">President or LS resolution (simple majority)</td>
                                    <td className="p-3">President anytime</td>
                                    <td className="p-3">President anytime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

// LOK SABHA VS RAJYA SABHA COMPARISON
export function LokSabhaVsRajyaSabhaTable() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden mt-6">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <Users size={24} />
                        Lok Sabha vs Rajya Sabha
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
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r w-1/4">Aspect</th>
                                    <th className="p-3 text-left font-bold text-blue-700 bg-blue-50 w-[37.5%]">Lok Sabha (Lower House)</th>
                                    <th className="p-3 text-left font-bold text-indigo-700 bg-indigo-50 w-[37.5%]">Rajya Sabha (Upper House)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Also Called</td>
                                    <td className="p-3 bg-blue-50/30">House of the People</td>
                                    <td className="p-3 bg-indigo-50/30">Council of States</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Max Strength</td>
                                    <td className="p-3">552 (530+20+2 Anglo-Indians*)</td>
                                    <td className="p-3">250 (238+12 nominated)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Election Method
                                    </td>
                                    <td className="p-3 font-bold">Direct Election (FPTP)</td>
                                    <td className="p-3 font-bold">Indirect Election (STV by MLAs)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Term</td>
                                    <td className="p-3">5 years (can be dissolved)</td>
                                    <td className="p-3">6 years (1/3rd retire every 2 years)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Can be Dissolved?
                                    </td>
                                    <td className="p-3 font-bold text-red-600">YES</td>
                                    <td className="p-3 font-bold text-green-600">NO (Permanent body)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Presiding Officer</td>
                                    <td className="p-3">Speaker (elected from members)</td>
                                    <td className="p-3">Vice President (ex-officio)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Money Bill
                                    </td>
                                    <td className="p-3 font-bold text-blue-700">Can introduce & pass</td>
                                    <td className="p-3 font-bold text-indigo-700">Can only suggest (14 days)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">No-Confidence Motion</td>
                                    <td className="p-3 font-bold text-blue-700">YES - can pass</td>
                                    <td className="p-3 text-slate-500">NO - cannot move</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Joint Session</td>
                                    <td className="p-3">Advantage (more members)</td>
                                    <td className="p-3">Disadvantage</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Special Powers
                                    </td>
                                    <td className="p-3">Money Bill, No-confidence, Budget</td>
                                    <td className="p-3 font-bold">Art 249 (State list), Art 312 (All India Services)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">PM must be member of?</td>
                                    <td className="p-3">Not mandatory (can be RS)</td>
                                    <td className="p-3">Can be PM from RS also</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Age Qualification</td>
                                    <td className="p-3">25 years</td>
                                    <td className="p-3 font-bold text-indigo-700">30 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

// CENTRE-STATE RELATIONS TABLE
export function CentreStateRelationsTable() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden mt-6">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <Scale size={24} />
                        Centre-State Relations Impact
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
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r w-1/4">Aspect</th>
                                    <th className="p-3 text-left font-bold text-emerald-700 bg-emerald-50 w-[25%]">Normal Times</th>
                                    <th className="p-3 text-left font-bold text-red-700 bg-red-50 w-[25%]">National Emergency</th>
                                    <th className="p-3 text-left font-bold text-orange-700 bg-orange-50 w-[25%]">President's Rule</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Executive Power (Centre)</td>
                                    <td className="p-3 text-emerald-700">Limited to Union List</td>
                                    <td className="p-3 font-bold text-red-700">Extends to State matters</td>
                                    <td className="p-3 font-bold text-orange-700">Takes over State Admin</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Legislative Power (State List)</td>
                                    <td className="p-3 text-emerald-700">Exclusive to State (mostly)</td>
                                    <td className="p-3 font-bold text-red-700">Parliament can legislate</td>
                                    <td className="p-3 font-bold text-orange-700">Parliament legislates</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        State Assembly
                                    </td>
                                    <td className="p-3 text-emerald-700">Functions normally</td>
                                    <td className="p-3 text-red-700 font-bold">NOT Suspended (usually)</td>
                                    <td className="p-3 text-orange-700 font-bold">Suspended or Dissolved</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Financial Distribution</td>
                                    <td className="p-3 text-emerald-700">As per Finance Commission</td>
                                    <td className="p-3 font-bold text-red-700">President can modify</td>
                                    <td className="p-3 text-orange-700">State budget by Parliament</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">All India Services</td>
                                    <td className="p-3 text-emerald-700">Controlled by Centre &amp; State</td>
                                    <td className="p-3 text-red-700">Full Central Control</td>
                                    <td className="p-3 text-orange-700">Under Governor/Prez</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r">Residuary Powers</td>
                                    <td className="p-3 font-bold text-emerald-700">With Parliament</td>
                                    <td className="p-3 text-red-700">With Parliament</td>
                                    <td className="p-3 text-orange-700">With Parliament</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

// AMENDMENT TYPES COMPARISON
export function AmendmentTypesTable() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="border-2 border-slate-200 shadow-xl overflow-hidden mt-6">
            <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-500 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <Gavel size={24} />
                        Types of Amendments
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
            </CardHeader>

            {isExpanded && (
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b-2 border-slate-300">
                                    <th className="p-3 text-left font-bold text-slate-700 border-r w-1/4">Type</th>
                                    <th className="p-3 text-left font-bold text-pink-700 bg-pink-50 w-[20%]">Requirement</th>
                                    <th className="p-3 text-left font-bold text-slate-700 bg-slate-50 w-[35%]">Example Subjects</th>
                                    <th className="p-3 text-left font-bold text-purple-700 bg-purple-50 w-[20%]">Article 368?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-semibold border-r text-pink-800">Simple Majority</td>
                                    <td className="p-3 text-slate-700">&gt;50% present &amp; voting</td>
                                    <td className="p-3 text-slate-600">
                                        <ul className="list-disc list-inside">
                                            <li>New States (Art 3)</li>
                                            <li>Citizenship</li>
                                            <li>Official Language</li>
                                            <li>2nd, 5th, 6th Schedule</li>
                                        </ul>
                                    </td>
                                    <td className="p-3 font-bold text-slate-500">NO (Technically)</td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50 bg-amber-50">
                                    <td className="p-3 font-semibold border-r text-purple-800">
                                        <Badge className="bg-red-500 text-white text-[10px] mr-1">PYQ</Badge>
                                        Special Majority
                                    </td>
                                    <td className="p-3 text-slate-700">&gt;50% Total + 2/3 Present</td>
                                    <td className="p-3 text-slate-600">
                                        <ul className="list-disc list-inside">
                                            <li>Fundamental Rights</li>
                                            <li>DPSP</li>
                                            <li>All others not covered by 1 &amp; 3</li>
                                        </ul>
                                    </td>
                                    <td className="p-3 font-bold text-purple-700">YES</td>
                                </tr>
                                <tr className="hover:bg-slate-50 bg-blue-50">
                                    <td className="p-3 font-semibold border-r text-blue-800">
                                        Special + Ratification
                                    </td>
                                    <td className="p-3 text-slate-700">Special Majority + 50% States</td>
                                    <td className="p-3 text-slate-600">
                                        <ul className="list-disc list-inside">
                                            <li>Election of President</li>
                                            <li>SC/HC Powers</li>
                                            <li>GST Council</li>
                                            <li>7th Schedule Lists</li>
                                            <li>Art 368 itself</li>
                                        </ul>
                                    </td>
                                    <td className="p-3 font-bold text-purple-700">YES</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

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
                <TabsList className="grid w-full grid-cols-5 bg-white border-2 border-slate-200 rounded-xl p-1 h-auto">
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
                </TabsList>

                <TabsContent value="pres-gov" className="mt-6">
                    <PresidentVsGovernorTable />
                </TabsContent>

                <TabsContent value="emergency" className="mt-6">
                    <EmergencyTypesTable />
                </TabsContent>

                <TabsContent value="parliament" className="mt-6">
                    <LokSabhaVsRajyaSabhaTable />
                </TabsContent>

                <TabsContent value="centre-state" className="mt-6">
                    <CentreStateRelationsTable />
                </TabsContent>

                <TabsContent value="amendment" className="mt-6">
                    <AmendmentTypesTable />
                </TabsContent>
            </Tabs>
        </div>
    );
}
