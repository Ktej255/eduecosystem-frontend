"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe2, Building2, Handshake, Flag, Scale, Users,
    TrendingUp, AlertTriangle, CheckCircle, MapPin
} from 'lucide-react';
import GlobeViz from './visualizations/GlobeViz';
import DiplomacyGraph from './visualizations/DiplomacyGraph';

interface Organization {
    id: string;
    name: string;
    fullName: string;
    hq: string;
    members: number;
    indiaRole: string;
    color: string;
}

const INTERNATIONAL_ORGS: Organization[] = [
    { id: 'un', name: 'UN', fullName: 'United Nations', hq: 'New York', members: 193, indiaRole: 'Founding Member (1945)', color: 'bg-blue-500' },
    { id: 'wto', name: 'WTO', fullName: 'World Trade Organization', hq: 'Geneva', members: 164, indiaRole: 'Founding Member (1995)', color: 'bg-emerald-500' },
    { id: 'brics', name: 'BRICS', fullName: 'Brazil, Russia, India, China, SA', hq: 'Rotating', members: 9, indiaRole: 'Founding Member (2009)', color: 'bg-amber-500' },
    { id: 'g20', name: 'G20', fullName: 'Group of Twenty', hq: 'Rotating', members: 20, indiaRole: 'Member, Hosted 2023 Summit', color: 'bg-purple-500' },
    { id: 'sco', name: 'SCO', fullName: 'Shanghai Cooperation Org', hq: 'Beijing', members: 9, indiaRole: 'Full Member (2017)', color: 'bg-red-500' },
    { id: 'asean', name: 'ASEAN', fullName: 'Assoc. of SE Asian Nations', hq: 'Jakarta', members: 10, indiaRole: 'Dialogue Partner', color: 'bg-cyan-500' },
];

const BILATERAL_HIGHLIGHTS = [
    { country: 'USA', status: 'Strategic', agreements: ['2+2 Dialogue', 'BECA', 'LEMOA', 'iCET'] },
    { country: 'Japan', status: 'Special Strategic', agreements: ['ACSA', 'Quad Member', 'Bullet Train'] },
    { country: 'France', status: 'Strategic', agreements: ['Rafale Deal', 'Nuclear', 'Space Coop'] },
    { country: 'Russia', status: 'Special Privileged', agreements: ['S-400', 'BrahMos', 'Nuclear'] },
];

const UPSC_IR_FACTS = [
    "India is NOT a permanent member of UNSC (P5: USA, UK, France, Russia, China)",
    "QUAD: India, USA, Japan, Australia - Focus on Indo-Pacific",
    "India's Look East Policy (1991) → Act East Policy (2014)",
    "India's nuclear doctrine: No First Use (NFU)",
    "India signed UNCLOS but NOT ratified",
];

export default function IrDashboard() {
    const [selectedOrg, setSelectedOrg] = React.useState<Organization | null>(null);
    const [factIndex, setFactIndex] = React.useState(0);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Header Stats */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard icon={<Globe2 />} label="Organizations" value="50+" color="text-blue-500" />
                <StatCard icon={<Handshake />} label="Strategic Partners" value="12+" color="text-emerald-500" />
                <StatCard icon={<Building2 />} label="Missions Abroad" value="180+" color="text-purple-500" />
                <StatCard icon={<Users />} label="Diaspora" value="32M" color="text-amber-500" />
            </div>

            {/* New Phase K Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlobeViz />
                <DiplomacyGraph />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* International Organizations */}
                <div className="lg:col-span-2 bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Globe2 className="w-5 h-5 text-indigo-600" />
                        Key International Organizations
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {INTERNATIONAL_ORGS.map((org, i) => (
                            <motion.button
                                key={org.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setSelectedOrg(org)}
                                className={`p-4 rounded-xl border text-left transition-all hover:shadow-lg ${selectedOrg?.id === org.id
                                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <div className={`w-10 h-10 ${org.color} rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2`}>
                                    {org.name}
                                </div>
                                <p className="text-xs text-gray-500 truncate">{org.fullName}</p>
                            </motion.button>
                        ))}
                    </div>

                    {/* Selected Org Details */}
                    {selectedOrg && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl"
                        >
                            <h4 className="font-bold text-gray-900 dark:text-white">{selectedOrg.fullName}</h4>
                            <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                                <div>
                                    <p className="text-xs text-gray-500">HQ</p>
                                    <p className="font-medium flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {selectedOrg.hq}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Members</p>
                                    <p className="font-medium">{selectedOrg.members}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">India's Role</p>
                                    <p className="font-medium text-indigo-600">{selectedOrg.indiaRole}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Bilateral Relations */}
                <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Handshake className="w-5 h-5 text-emerald-600" />
                        Key Bilateral Ties
                    </h3>
                    <div className="space-y-4">
                        {BILATERAL_HIGHLIGHTS.map((rel, i) => (
                            <motion.div
                                key={rel.country}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900 dark:text-white">{rel.country}</span>
                                    <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                                        {rel.status}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {rel.agreements.map(a => (
                                        <span key={a} className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* UPSC Fact Strip */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-4 flex items-center gap-4">
                <AlertTriangle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <div className="flex-1">
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        <span className="font-bold">UPSC IR Fact:</span> {UPSC_IR_FACTS[factIndex]}
                    </p>
                </div>
                <button
                    onClick={() => setFactIndex((prev) => (prev + 1) % UPSC_IR_FACTS.length)}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
    return (
        <div className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${color.replace('text-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
                <div className={color}>
                    {icon}
                </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    );
}
