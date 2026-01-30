"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Users, FileText, Flame, Star, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface Movement {
    id: string;
    year: string;
    name: string;
    leader: string;
    type: 'movement' | 'act' | 'event' | 'organization';
    description: string;
    upscTip: string;
}

const FREEDOM_MOVEMENTS: Movement[] = [
    {
        id: 'inc-formation',
        year: '1885',
        name: 'INC Formation',
        leader: 'A.O. Hume',
        type: 'organization',
        description: 'Indian National Congress founded in Bombay with 72 delegates',
        upscTip: 'First President: W.C. Bonnerjee. "Safety Valve" theory associated with Lala Lajpat Rai\'s criticism'
    },
    {
        id: 'partition-bengal',
        year: '1905',
        name: 'Partition of Bengal',
        leader: 'Lord Curzon',
        type: 'act',
        description: 'Divided Bengal on religious lines, sparked Swadeshi Movement',
        upscTip: 'Annulled in 1911. Led to rise of revolutionary nationalism'
    },
    {
        id: 'swadeshi',
        year: '1905',
        name: 'Swadeshi Movement',
        leader: 'Tilak, Bipin Pal',
        type: 'movement',
        description: 'Boycott of British goods, promotion of Indian industries',
        upscTip: 'First mass movement. Boycott of Manchester cloth, Liverpool salt'
    },
    {
        id: 'muslim-league',
        year: '1906',
        name: 'Muslim League',
        leader: 'Aga Khan III',
        type: 'organization',
        description: 'All India Muslim League founded at Dhaka',
        upscTip: 'Founded to safeguard Muslim political rights. Role in Pakistan demand later'
    },
    {
        id: 'lucknow-pact',
        year: '1916',
        name: 'Lucknow Pact',
        leader: 'Tilak, Jinnah',
        type: 'event',
        description: 'INC-Muslim League unity. Separate electorates accepted',
        upscTip: 'Jinnah called "Ambassador of Hindu-Muslim Unity" by Sarojini Naidu'
    },
    {
        id: 'rowlatt',
        year: '1919',
        name: 'Rowlatt Act',
        leader: 'British Govt',
        type: 'act',
        description: 'Indefinite detention without trial. Called "Black Act"',
        upscTip: 'Led to Jallianwala Bagh massacre (April 13, 1919)'
    },
    {
        id: 'ncm',
        year: '1920',
        name: 'Non-Cooperation',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: 'First mass movement under Gandhi. Boycott of councils, courts, schools',
        upscTip: 'Suspended after Chauri Chaura (Feb 1922). Tilak Swaraj Fund started'
    },
    {
        id: 'cdm',
        year: '1930',
        name: 'Civil Disobedience',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: 'Salt March (Dandi, 390 km). Breaking salt laws',
        upscTip: 'Started March 12, 1930. Gandhi-Irwin Pact (1931) suspended it'
    },
    {
        id: 'rrt',
        year: '1942',
        name: 'Quit India',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: '"Do or Die" call. Parallel governments formed',
        upscTip: 'August 8, 1942 at Gowalia Tank. All leaders arrested. Most radical movement'
    },
    {
        id: 'ina',
        year: '1943',
        name: 'INA Reorganized',
        leader: 'Subhas Bose',
        type: 'organization',
        description: 'Indian National Army in Southeast Asia. "Delhi Chalo" slogan',
        upscTip: 'First formed by Mohan Singh (1942). INA trials at Red Fort (1945)'
    },
    {
        id: 'independence',
        year: '1947',
        name: 'Independence',
        leader: 'Nehru, Patel',
        type: 'event',
        description: 'India gains independence. Partition and transfer of power',
        upscTip: 'Mountbatten Plan (June 3, 1947). Indian Independence Act (July 18, 1947)'
    }
];

const TYPE_COLORS = {
    movement: 'bg-orange-500',
    act: 'bg-red-500',
    event: 'bg-blue-500',
    organization: 'bg-emerald-500'
};

const TYPE_ICONS = {
    movement: Flame,
    act: FileText,
    event: Star,
    organization: Users
};

export default function FreedomMovementViz() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = FREEDOM_MOVEMENTS[selectedIndex];
    const TypeIcon = TYPE_ICONS[selected.type];

    const goNext = () => setSelectedIndex(prev => Math.min(prev + 1, FREEDOM_MOVEMENTS.length - 1));
    const goPrev = () => setSelectedIndex(prev => Math.max(prev - 1, 0));

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                        <Flag className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Freedom Movement Timeline</h3>
                        <p className="text-xs text-white/70">1885 - 1947 | Interactive Journey</p>
                    </div>
                </div>
            </div>

            {/* Timeline Dots */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1 overflow-x-auto pb-2">
                    {FREEDOM_MOVEMENTS.map((m, i) => (
                        <button
                            key={m.id}
                            onClick={() => setSelectedIndex(i)}
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i === selectedIndex
                                    ? `${TYPE_COLORS[m.type]} text-white scale-110 shadow-lg`
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300'
                                }`}
                            title={m.name}
                        >
                            {m.year.slice(-2)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Event */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-5"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 ${TYPE_COLORS[selected.type]} rounded-lg`}>
                                <TypeIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-black text-gray-900 dark:text-white">{selected.year}</span>
                                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${TYPE_COLORS[selected.type]} text-white`}>
                                    {selected.type}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={goPrev}
                                disabled={selectedIndex === 0}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={goNext}
                                disabled={selectedIndex === FREEDOM_MOVEMENTS.length - 1}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selected.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span className="font-medium">Led by:</span> {selected.leader}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selected.description}</p>

                    {/* UPSC Tip */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 block mb-1">UPSC TIP</span>
                            <p className="text-xs text-amber-800 dark:text-amber-300">{selected.upscTip}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress */}
            <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {selectedIndex + 1} / {FREEDOM_MOVEMENTS.length}
                    </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
                    <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-1.5 rounded-full transition-all"
                        style={{ width: `${((selectedIndex + 1) / FREEDOM_MOVEMENTS.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
