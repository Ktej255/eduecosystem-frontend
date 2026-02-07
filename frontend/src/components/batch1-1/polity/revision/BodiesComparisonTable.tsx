"use client";

import React, { useState } from 'react';
import {
    CheckCircle2, XCircle, AlertCircle,
    BookOpen, Scale, Gavel, Building2,
    Users, Shield, Eye
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type BodyType = 'Constitutional' | 'Statutory' | 'Executive';

interface BodyData {
    id: string;
    name: string;
    type: BodyType;
    articleOrAct: string;
    appointment: string;
    tenure: string;
    removal: string;
    function: string;
}

const BODIES_DATA: BodyData[] = [
    // Constitutional Bodies
    {
        id: 'eci',
        name: 'Election Commission (ECI)',
        type: 'Constitutional',
        articleOrAct: 'Art 324',
        appointment: 'President',
        tenure: '6 years or 65 age',
        removal: 'Like SC Judge',
        function: 'Conduct free & fair elections (Parliament, State Leg, Pres, VP)'
    },
    {
        id: 'upsc',
        name: 'UPSC',
        type: 'Constitutional',
        articleOrAct: 'Art 315-323',
        appointment: 'President',
        tenure: '6 years or 65 age',
        removal: 'President (after SC inquiry)',
        function: 'Recruitment to All India & Central Services'
    },
    {
        id: 'spsc',
        name: 'SPSC',
        type: 'Constitutional',
        articleOrAct: 'Art 315-323',
        appointment: 'Governor',
        tenure: '6 years or 62 age',
        removal: 'President (after SC inquiry)',
        function: 'Recruitment to State Services'
    },
    {
        id: 'fc',
        name: 'Finance Commission',
        type: 'Constitutional',
        articleOrAct: 'Art 280',
        appointment: 'President (every 5 yrs)',
        tenure: 'Specified by President',
        removal: 'Pleasure of President',
        function: 'Distribution of tax proceeds between Centre & States'
    },
    {
        id: 'gst',
        name: 'GST Council',
        type: 'Constitutional',
        articleOrAct: 'Art 279A',
        appointment: 'President',
        tenure: 'Ex-officio (FM is Chair)',
        removal: 'N/A',
        function: 'Decide GST rates & regulations'
    },
    {
        id: 'ncsc',
        name: 'NCSC',
        type: 'Constitutional',
        articleOrAct: 'Art 338',
        appointment: 'President (Warrant)',
        tenure: '3 years (Rules)',
        removal: 'Pleasure of President',
        function: 'Safeguards for SCs'
    },
    {
        id: 'ncst',
        name: 'NCST',
        type: 'Constitutional',
        articleOrAct: 'Art 338A',
        appointment: 'President (Warrant)',
        tenure: '3 years (Rules)',
        removal: 'Pleasure of President',
        function: 'Safeguards for STs'
    },
    {
        id: 'ncbc',
        name: 'NCBC',
        type: 'Constitutional',
        articleOrAct: 'Art 338B',
        appointment: 'President (Warrant)',
        tenure: '3 years (Rules)',
        removal: 'Pleasure of President',
        function: 'Safeguards for SEBCs'
    },
    {
        id: 'cag',
        name: 'CAG',
        type: 'Constitutional',
        articleOrAct: 'Art 148',
        appointment: 'President (Warrant)',
        tenure: '6 years or 65 age',
        removal: 'Like SC Judge',
        function: 'Guardian of Public Purse'
    },
    {
        id: 'ag',
        name: 'Attorney General',
        type: 'Constitutional',
        articleOrAct: 'Art 76',
        appointment: 'President',
        tenure: 'No fixed tenure',
        removal: 'Pleasure of President',
        function: 'Highest Law Officer of Country'
    },
    {
        id: 'advg',
        name: 'Advocate General',
        type: 'Constitutional',
        articleOrAct: 'Art 165',
        appointment: 'Governor',
        tenure: 'No fixed tenure',
        removal: 'Pleasure of Governor',
        function: 'Highest Law Officer of State'
    },

    // Statutory Bodies
    {
        id: 'nhrc',
        name: 'NHRC',
        type: 'Statutory',
        articleOrAct: 'PHR Act 1993',
        appointment: 'Pres (Rec of 6-member Comm)',
        tenure: '3 years or 70 age',
        removal: 'Pres (after SC inquiry)',
        function: 'Protect Human Rights'
    },
    {
        id: 'shrc',
        name: 'SHRC',
        type: 'Statutory',
        articleOrAct: 'PHR Act 1993',
        appointment: 'Gov (Rec of Comm)',
        tenure: '3 years or 70 age',
        removal: 'President (after SC inquiry)',
        function: 'Protect Human Rights (State list)'
    },
    {
        id: 'cic',
        name: 'CIC',
        type: 'Statutory',
        articleOrAct: 'RTI Act 2005',
        appointment: 'Pres (Rec of Comm)',
        tenure: '3 years or 65 age',
        removal: 'Pres (after SC inquiry)',
        function: 'RTI Appellate Authority'
    },
    {
        id: 'cvc',
        name: 'CVC',
        type: 'Statutory',
        articleOrAct: 'CVC Act 2003',
        appointment: 'Pres (Rec of 3-member Comm)',
        tenure: '4 years or 65 age',
        removal: 'Pres (after SC inquiry)',
        function: 'Prevent Corruption in Central Govt'
    },
    {
        id: 'lokpal',
        name: 'Lokpal',
        type: 'Statutory',
        articleOrAct: 'Lokpal Act 2013',
        appointment: 'Pres (Rec of 5-member Comm)',
        tenure: '5 years or 70 age',
        removal: 'Pres (after SC inquiry)',
        function: 'Investigate corruption args PM/Ministers'
    },
    {
        id: 'nia',
        name: 'NIA',
        type: 'Statutory',
        articleOrAct: 'NIA Act 2008',
        appointment: 'Central Govt',
        tenure: 'Service Rules',
        removal: 'Service Rules',
        function: 'Counter-Terrorism & National Security'
    },

    // Executive Bodies
    {
        id: 'niti',
        name: 'NITI Aayog',
        type: 'Executive',
        articleOrAct: 'Exec Resolution (2015)',
        appointment: 'PM (Chairperson)',
        tenure: 'No fixed tenure',
        removal: 'Replaced by New Govt',
        function: 'Think Tank, Policy Inputs, Coop Federalism'
    },
    {
        id: 'cbi',
        name: 'CBI',
        type: 'Executive',
        articleOrAct: 'DPSE Act 1946 (Power)',
        appointment: 'Central Govt (Comm Rec)',
        tenure: '2 Years min (Director)',
        removal: 'Service Rules',
        function: 'Investigate Crime & Corruption'
    },
    {
        id: 'lawcomm',
        name: 'Law Commission',
        type: 'Executive',
        articleOrAct: 'Exec Order',
        appointment: 'Central Govt',
        tenure: '3 Years',
        removal: 'End of Term',
        function: 'Legal Reform Recommendations'
    }
];

export default function BodiesComparisonTable() {
    const [filter, setFilter] = useState<BodyType | 'All'>('All');
    const [hiddenColumns, setHiddenColumns] = useState<Record<string, boolean>>({
        appointment: false,
        tenure: false,
        removal: false
    });

    const filteredData = filter === 'All' ? BODIES_DATA : BODIES_DATA.filter(b => b.type === filter);

    const toggleColumnVisibility = (col: string) => {
        setHiddenColumns(prev => ({ ...prev, [col]: !prev[col] }));
    };

    return (
        <Card className="w-full border-4 border-slate-900 bg-[#fffbeb] shadow-xl overflow-hidden font-['Kalam']">
            <CardHeader className="bg-[#1e293b] text-white p-6 border-b-4 border-slate-900">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <CardTitle className="text-3xl font-black text-amber-400">The Power Matrix</CardTitle>
                        <p className="text-slate-300 italic">"Constitutional vs Non-Constitutional Bodies"</p>
                    </div>

                    <div className="flex bg-slate-800 p-1 rounded-lg">
                        {['All', 'Constitutional', 'Statutory', 'Executive'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type as BodyType | 'All')}
                                className={`px-4 py-2 rounded-md font-bold transition-all ${filter === type
                                        ? 'bg-amber-400 text-slate-900 shadow-md transform scale-105'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="p-4 bg-amber-100 border-b-2 border-slate-200 flex flex-wrap gap-4 items-center justify-center text-sm font-bold text-slate-700">
                    <span>Self Test Mode:</span>
                    <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1 rounded shadow-sm border hover:bg-slate-50">
                        <input
                            type="checkbox"
                            checked={hiddenColumns.appointment}
                            onChange={() => toggleColumnVisibility('appointment')}
                            className="w-4 h-4 accent-amber-600"
                        />
                        Hide Appointment
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1 rounded shadow-sm border hover:bg-slate-50">
                        <input
                            type="checkbox"
                            checked={hiddenColumns.tenure}
                            onChange={() => toggleColumnVisibility('tenure')}
                            className="w-4 h-4 accent-amber-600"
                        />
                        Hide Tenure
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1 rounded shadow-sm border hover:bg-slate-50">
                        <input
                            type="checkbox"
                            checked={hiddenColumns.removal}
                            onChange={() => toggleColumnVisibility('removal')}
                            className="w-4 h-4 accent-amber-600"
                        />
                        Hide Removal
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800 text-white text-lg">
                                <th className="p-4 border-r border-slate-700 min-w-[200px]">Body</th>
                                <th className="p-4 border-r border-slate-700 w-32">Type</th>
                                <th className="p-4 border-r border-slate-700 w-32">Source</th>
                                <th className="p-4 border-r border-slate-700">Appointment</th>
                                <th className="p-4 border-r border-slate-700">Tenure/Age</th>
                                <th className="p-4 border-r border-slate-700">Removal</th>
                                <th className="p-4 min-w-[300px]">Function (Key)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((body, index) => (
                                <tr
                                    key={body.id}
                                    className={`
                                        border-b border-slate-300 transition-colors
                                        ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}
                                        hover:bg-blue-50
                                    `}
                                >
                                    <td className="p-4 border-r border-slate-300 font-black text-slate-800">
                                        {body.name}
                                    </td>
                                    <td className="p-4 border-r border-slate-300">
                                        <Badge className={`
                                            ${body.type === 'Constitutional' ? 'bg-blue-600' :
                                                body.type === 'Statutory' ? 'bg-green-600' : 'bg-orange-600'}
                                        `}>
                                            {body.type}
                                        </Badge>
                                    </td>
                                    <td className="p-4 border-r border-slate-300 font-mono text-sm font-bold text-slate-600">
                                        {body.articleOrAct}
                                    </td>
                                    <td className="p-4 border-r border-slate-300 relative group cursor-pointer">
                                        <div className={hiddenColumns.appointment ? 'opacity-0 group-hover:opacity-100 transition-opacity blur-sm group-hover:blur-0' : ''}>
                                            {body.appointment}
                                        </div>
                                        {hiddenColumns.appointment && (
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:hidden">
                                                <Eye size={20} />
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 border-r border-slate-300 relative group cursor-pointer">
                                        <div className={hiddenColumns.tenure ? 'opacity-0 group-hover:opacity-100 transition-opacity blur-sm group-hover:blur-0' : ''}>
                                            {body.tenure}
                                        </div>
                                        {hiddenColumns.tenure && (
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:hidden">
                                                <Eye size={20} />
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 border-r border-slate-300 relative group cursor-pointer">
                                        <div className={hiddenColumns.removal ? 'opacity-0 group-hover:opacity-100 transition-opacity blur-sm group-hover:blur-0' : ''}>
                                            {body.removal}
                                        </div>
                                        {hiddenColumns.removal && (
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:hidden">
                                                <Eye size={20} />
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 text-sm text-slate-700 font-medium">
                                        {body.function}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
