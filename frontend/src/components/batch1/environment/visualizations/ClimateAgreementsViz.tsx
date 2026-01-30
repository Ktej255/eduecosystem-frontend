"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, FileText, AlertTriangle, CheckCircle, Info, ChevronRight, Calendar } from 'lucide-react';

interface Agreement {
    id: string;
    year: string;
    name: string;
    location: string;
    focus: string;
    indiaStatus: 'ratified' | 'signed' | 'observer';
    keyPoints: string[];
    upscTip: string;
}

const CLIMATE_AGREEMENTS: Agreement[] = [
    {
        id: 'stockholm',
        year: '1972',
        name: 'Stockholm Conference',
        location: 'Stockholm, Sweden',
        focus: 'First UN Conference on Human Environment',
        indiaStatus: 'ratified',
        keyPoints: [
            'UNEP established',
            '26 Principles adopted',
            'June 5 = World Environment Day'
        ],
        upscTip: 'Indira Gandhi was the only Head of State to attend. Slogan: "Only One Earth"'
    },
    {
        id: 'montreal',
        year: '1987',
        name: 'Montreal Protocol',
        location: 'Montreal, Canada',
        focus: 'Ozone Layer Protection',
        indiaStatus: 'ratified',
        keyPoints: [
            'Phaseout of CFCs, HCFCs',
            'Kigali Amendment (2016) for HFCs',
            'Most successful environmental treaty'
        ],
        upscTip: 'India ratified Kigali Amendment in 2021. HFC phasedown: 80% by 2047'
    },
    {
        id: 'rio',
        year: '1992',
        name: 'Earth Summit (Rio)',
        location: 'Rio de Janeiro, Brazil',
        focus: 'Sustainable Development',
        indiaStatus: 'ratified',
        keyPoints: [
            'UNFCCC established',
            'CBD (Biodiversity) adopted',
            'Agenda 21 action plan'
        ],
        upscTip: 'Three Rio Conventions: UNFCCC, CBD, UNCCD. Principle of CBDR introduced'
    },
    {
        id: 'kyoto',
        year: '1997',
        name: 'Kyoto Protocol',
        location: 'Kyoto, Japan',
        focus: 'Binding Emission Targets',
        indiaStatus: 'ratified',
        keyPoints: [
            'Developed countries = binding targets',
            'CDM, JI, ET mechanisms',
            'USA never ratified'
        ],
        upscTip: 'India had no binding targets (developing country). CDM projects common in India'
    },
    {
        id: 'cop21',
        year: '2015',
        name: 'Paris Agreement',
        location: 'Paris, France (COP21)',
        focus: 'Limit warming to 1.5-2°C',
        indiaStatus: 'ratified',
        keyPoints: [
            'NDCs from all countries',
            'Global Stocktake every 5 years',
            '$100B/year climate finance goal'
        ],
        upscTip: 'India\'s NDC: 45% emissions intensity reduction by 2030. Net Zero by 2070'
    },
    {
        id: 'glasgow',
        year: '2021',
        name: 'Glasgow Climate Pact',
        location: 'Glasgow, UK (COP26)',
        focus: 'Ratcheting of ambition',
        indiaStatus: 'ratified',
        keyPoints: [
            'Phasedown of coal (not phaseout)',
            'Forests & Land Use Declaration',
            'Methane pledge (India not signed)'
        ],
        upscTip: 'India\'s Panchamrit targets announced. Did NOT sign methane pledge or coal phaseout'
    },
    {
        id: 'kunming',
        year: '2022',
        name: 'Kunming-Montreal Framework',
        location: 'Montreal, Canada (COP15 CBD)',
        focus: 'Biodiversity - 30x30 Target',
        indiaStatus: 'ratified',
        keyPoints: [
            '30% land & sea protected by 2030',
            '$200B/year biodiversity finance',
            'Halt species extinction'
        ],
        upscTip: 'GBF replaces Aichi Targets. India\'s current protected area: ~22%'
    },
];

export default function ClimateAgreementsViz() {
    const [selectedId, setSelectedId] = useState('paris');
    const selected = CLIMATE_AGREEMENTS.find(a => a.id === selectedId) || CLIMATE_AGREEMENTS[4];

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                        <Globe2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Climate Agreements Timeline</h3>
                        <p className="text-xs text-white/70">1972 - 2022 | Key Environmental Conventions</p>
                    </div>
                </div>
            </div>

            {/* Timeline Strip */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max">
                    {CLIMATE_AGREEMENTS.map((a) => (
                        <button
                            key={a.id}
                            onClick={() => setSelectedId(a.id)}
                            className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all ${a.id === selectedId
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300'
                                }`}
                        >
                            <span className="font-bold">{a.year}</span>
                            <span className="hidden sm:inline ml-1">• {a.name.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Agreement Details */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl font-black text-gray-900 dark:text-white">{selected.year}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${selected.indiaStatus === 'ratified' ? 'bg-green-100 text-green-700' :
                                        selected.indiaStatus === 'signed' ? 'bg-amber-100 text-amber-700' :
                                            'bg-gray-100 text-gray-700'
                                    }`}>
                                    India: {selected.indiaStatus}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{selected.name}</h4>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {selected.location}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-3">
                        Focus: {selected.focus}
                    </p>

                    {/* Key Points */}
                    <div className="space-y-2 mb-4">
                        {selected.keyPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{point}</span>
                            </div>
                        ))}
                    </div>

                    {/* UPSC Tip */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 block mb-1">UPSC IMPORTANT</span>
                            <p className="text-xs text-amber-800 dark:text-amber-300">{selected.upscTip}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
