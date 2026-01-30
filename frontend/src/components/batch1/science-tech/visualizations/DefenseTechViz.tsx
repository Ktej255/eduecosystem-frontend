"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Rocket, Target, Crosshair, Radio, Radar, ChevronRight } from 'lucide-react';

interface MissileSystem {
    id: string;
    name: string;
    type: string;
    range: string;
    description: string;
    status: 'operational' | 'development' | 'testing';
    developer: string;
}

const MISSILE_SYSTEMS: MissileSystem[] = [
    {
        id: 'agni-v',
        name: 'Agni-V',
        type: 'ICBM',
        range: '5,000+ km',
        description: 'Intercontinental Ballistic Missile with MIRV capability',
        status: 'operational',
        developer: 'DRDO'
    },
    {
        id: 'brahmos',
        name: 'BrahMos',
        type: 'Cruise Missile',
        range: '290-500 km',
        description: 'Supersonic cruise missile (India-Russia joint)',
        status: 'operational',
        developer: 'BrahMos Aerospace'
    },
    {
        id: 'prithvi',
        name: 'Prithvi-II',
        type: 'SRBM',
        range: '350 km',
        description: 'Surface-to-surface tactical missile',
        status: 'operational',
        developer: 'DRDO'
    },
    {
        id: 's-400',
        name: 'S-400 Triumf',
        type: 'Air Defense',
        range: '400 km',
        description: 'Long-range air defense system (From Russia)',
        status: 'operational',
        developer: 'Almaz-Antey'
    },
    {
        id: 'akash',
        name: 'Akash NG',
        type: 'SAM',
        range: '80 km',
        description: 'Next-gen surface-to-air missile with active radar',
        status: 'testing',
        developer: 'DRDO'
    },
    {
        id: 'astra',
        name: 'Astra Mk-2',
        type: 'Air-to-Air',
        range: '160 km',
        description: 'Beyond Visual Range air-to-air missile',
        status: 'development',
        developer: 'DRDO'
    },
];

const UPSC_FACTS = [
    "India is among 5 nations with ICBM capability",
    "DRDO established in 1958, HQ in New Delhi",
    "INS Arihant - India's first nuclear submarine (2016)",
    "Tejas - India's first indigenous LCA fighter",
    "Project 75 (India) - 6 conventional submarines",
];

export default function DefenseTechViz() {
    const [selectedSystem, setSelectedSystem] = useState<MissileSystem | null>(null);
    const [factIndex, setFactIndex] = useState(0);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'operational': return 'bg-green-500';
            case 'testing': return 'bg-amber-500';
            case 'development': return 'bg-blue-500';
            default: return 'bg-gray-500';
        }
    };

    const getTypeIcon = (type: string) => {
        if (type.includes('ICBM') || type.includes('SRBM')) return <Rocket className="w-4 h-4" />;
        if (type.includes('Air Defense') || type.includes('SAM')) return <Radar className="w-4 h-4" />;
        if (type.includes('Cruise')) return <Target className="w-4 h-4" />;
        return <Crosshair className="w-4 h-4" />;
    };

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Defense Technology</h3>
                        <p className="text-xs text-white/60">Indian Missile & Defense Systems</p>
                    </div>
                </div>
            </div>

            {/* Missile Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
                {MISSILE_SYSTEMS.map((system, i) => (
                    <motion.button
                        key={system.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setSelectedSystem(system)}
                        className={`p-3 rounded-xl border text-left transition-all hover:shadow-md ${selectedSystem?.id === system.id
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`p-1.5 rounded-lg ${selectedSystem?.id === system.id ? 'bg-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}>
                                {getTypeIcon(system.type)}
                            </div>
                            <span className={`w-2 h-2 rounded-full ${getStatusColor(system.status)}`} />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{system.name}</h4>
                        <p className="text-xs text-gray-500">{system.type}</p>
                    </motion.button>
                ))}
            </div>

            {/* Selected System Details */}
            {selectedSystem && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-[#0a0a0a]"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">{selectedSystem.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{selectedSystem.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedSystem.status === 'operational' ? 'bg-green-100 text-green-700' :
                                selectedSystem.status === 'testing' ? 'bg-amber-100 text-amber-700' :
                                    'bg-blue-100 text-blue-700'
                            }`}>
                            {selectedSystem.status}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-white dark:bg-[#111] p-2 rounded-lg">
                            <p className="text-xs text-gray-500">Range</p>
                            <p className="font-bold text-indigo-600">{selectedSystem.range}</p>
                        </div>
                        <div className="bg-white dark:bg-[#111] p-2 rounded-lg">
                            <p className="text-xs text-gray-500">Developer</p>
                            <p className="font-bold text-gray-900 dark:text-white">{selectedSystem.developer}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* UPSC Fact Ticker */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-indigo-50 dark:bg-indigo-900/20">
                <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-indigo-600 animate-pulse" />
                    <p className="text-xs text-indigo-700 dark:text-indigo-300 flex-1">
                        <span className="font-bold">UPSC Fact:</span> {UPSC_FACTS[factIndex]}
                    </p>
                    <button
                        onClick={() => setFactIndex((prev) => (prev + 1) % UPSC_FACTS.length)}
                        className="p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded transition-colors"
                    >
                        <ChevronRight className="w-4 h-4 text-indigo-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}
