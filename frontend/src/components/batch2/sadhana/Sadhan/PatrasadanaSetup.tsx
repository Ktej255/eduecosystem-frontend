"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Info, Droplets, Flame as FlameIcon, CheckCircle2 } from 'lucide-react';
import { useBatch2Events } from '../../hooks/useBatch2Events';

interface Pot {
    id: string;
    name: string;
    sanskrit: string;
    purpose: string;
    position: { x: number; y: number };
    color: string;
    instruction: string;
}

const POTS: Pot[] = [
    { id: 'achamana', name: 'Achamana Patra', sanskrit: 'आचमन पात्र', purpose: 'Purification sips — 3 sips with Vishnu names', position: { x: 200, y: 100 }, color: '#3b82f6', instruction: 'Fill with clean water. Used at the very beginning and end of practice. Take 3 small sips reciting: Om Keshavaya Svaha, Om Narayanaya Svaha, Om Madhavaya Svaha.' },
    { id: 'arghya', name: 'Arghya Patra', sanskrit: 'अर्घ्य पात्र', purpose: 'Offering water — respectful welcome to deity', position: { x: 100, y: 200 }, color: '#8b5cf6', instruction: 'Fill with water mixed with flower petals or sandalwood. Offered to the deity as a welcome gesture, poured from a conch or cupped hands.' },
    { id: 'sugandhita', name: 'Sugandhita Arghya', sanskrit: 'सुगंधित अर्घ्य', purpose: 'Fragrant offering — sandalwood/rose water mix', position: { x: 300, y: 200 }, color: '#ec4899', instruction: 'Water mixed with sandalwood paste, camphor, or rose petals. Represents offering the finest fragrances to the divine presence.' },
    { id: 'tarpana', name: 'Tarpana Patra', sanskrit: 'तर्पण पात्र', purpose: 'Libation water — satisfying ancestors and devas', position: { x: 100, y: 320 }, color: '#14b8a6', instruction: 'Clean water for pouring libations. Used to satisfy the devas, rishis, and pitrs (ancestors). Pour while chanting the respective names.' },
    { id: 'padyam', name: 'Padyam Patra', sanskrit: 'पाद्यम् पात्र', purpose: 'Foot-washing water — humility before the divine', position: { x: 300, y: 320 }, color: '#f59e0b', instruction: 'Water for symbolically washing the feet of the deity. Represents the highest humility and surrender. Offered before the main worship.' },
];

const DIRECTIONS: { [key: string]: number } = {
    'N': 0, 'NE': 45, 'E': 90, 'SE': 135, 'S': 180, 'SW': 225, 'W': 270, 'NW': 315
};

const SADHANA_DIRECTIONS: { name: string; directions: string[]; color: string }[] = [
    { name: 'Ganesha', directions: ['E', 'N'], color: 'text-amber-600' },
    { name: 'Guru', directions: ['N', 'NE'], color: 'text-white' },
    { name: 'Gayatri', directions: ['E'], color: 'text-red-500' },
    { name: 'Sri Suktam', directions: ['E', 'N'], color: 'text-red-500' },
];

export default function PatrasadanaSetup() {
    const { logEvent } = useBatch2Events();
    const [selectedPot, setSelectedPot] = useState<Pot | null>(null);
    const [selectedSadhana, setSelectedSadhana] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const direction = SADHANA_DIRECTIONS[selectedSadhana];
    const primaryDirection = direction.directions[0];
    const rotation = DIRECTIONS[primaryDirection] || 0;

    const handleConfirm = () => {
        setIsConfirmed(true);
        logEvent('patrasadana_checked', {
            module: 'Patrasadana',
            data: { sadhana: direction.name, direction: primaryDirection }
        });
        setTimeout(() => setIsConfirmed(false), 3000);
    };

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200 shadow-sm">
                    <Droplets className="w-8 h-8 text-teal-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Patrasadana</h1>
                <p className="text-amber-800/80 max-w-xl mx-auto text-lg leading-relaxed">
                    The 5-Pot Sacred Arrangement — essential for formal Purushcharana practice.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Interactive SVG Layout */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 shadow-lg">
                    {/* Sadhana Selector */}
                    <div className="flex gap-2 mb-6 justify-center flex-wrap">
                        {SADHANA_DIRECTIONS.map((s, idx) => (
                            <button
                                key={s.name}
                                onClick={() => setSelectedSadhana(idx)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedSadhana === idx
                                    ? 'bg-amber-600 text-white shadow-sm'
                                    : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
                                    }`}
                            >
                                {s.name}
                            </button>
                        ))}
                    </div>

                    {/* Top-Down View */}
                    <svg viewBox="0 0 400 450" className="w-full max-w-md mx-auto">
                        {/* Background grid */}
                        <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f5d0a9" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="400" height="450" fill="url(#grid)" rx="12" />

                        {/* Compass */}
                        <g transform={`translate(340, 60)`}>
                            <circle cx="0" cy="0" r="25" fill="#fff" stroke="#d97706" strokeWidth="2" />
                            <g transform={`rotate(${-rotation})`}>
                                <polygon points="0,-18 -5,-5 0,-8 5,-5" fill="#dc2626" />
                                <polygon points="0,18 -5,5 0,8 5,5" fill="#9ca3af" />
                            </g>
                            <text x="0" y="-30" textAnchor="middle" className="text-[9px] font-bold" fill="#92400e">
                                Face {primaryDirection}
                            </text>
                        </g>

                        {/* Practitioner Seat */}
                        <g transform="translate(200, 410)">
                            <ellipse cx="0" cy="0" rx="35" ry="15" fill="#d97706" opacity="0.2" stroke="#d97706" strokeWidth="1" />
                            <text x="0" y="4" textAnchor="middle" className="text-[10px] font-bold" fill="#92400e">You</text>
                        </g>

                        {/* Lamp */}
                        <g transform="translate(200, 60)">
                            <circle cx="0" cy="0" r="18" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                            <text x="0" y="-2" textAnchor="middle" className="text-[16px]">🪔</text>
                            <text x="0" y="14" textAnchor="middle" className="text-[8px] font-bold" fill="#92400e">Lamp</text>
                        </g>

                        {/* 5 Pots */}
                        {POTS.map(pot => {
                            const isSelected = selectedPot?.id === pot.id;
                            return (
                                <g key={pot.id} transform={`translate(${pot.position.x}, ${pot.position.y})`}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedPot(isSelected ? null : pot)}
                                >
                                    {isSelected && (
                                        <circle cx="0" cy="0" r="30" fill={pot.color} opacity="0.15">
                                            <animate attributeName="r" values="28;32;28" dur="1.5s" repeatCount="indefinite" />
                                        </circle>
                                    )}
                                    <circle cx="0" cy="0" r="22" fill="white" stroke={pot.color} strokeWidth={isSelected ? 3 : 2} />
                                    <text x="0" y="-3" textAnchor="middle" className="text-[14px]">🏺</text>
                                    <text x="0" y="12" textAnchor="middle" className="text-[7px] font-bold" fill={pot.color}>
                                        {pot.name.split(' ')[0]}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>

                    <p className="text-xs text-center text-stone-500 mt-4">Tap a pot to learn its purpose.</p>
                </div>

                {/* Right: Pot Details */}
                <div className="space-y-4">
                    {/* Direction Info */}
                    <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <Compass className="w-5 h-5 text-amber-600" />
                            <h3 className="font-bold text-amber-950">{direction.name} Sadhana — Facing</h3>
                        </div>
                        <div className="flex gap-2">
                            {direction.directions.map(d => (
                                <span key={d} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-xl font-bold text-lg">{d}</span>
                            ))}
                        </div>
                    </div>

                    {/* Selected Pot Detail */}
                    <AnimatePresence mode="wait">
                        {selectedPot ? (
                            <motion.div
                                key={selectedPot.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 shadow-md"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl" style={{ backgroundColor: selectedPot.color }}>
                                        🏺
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-amber-950">{selectedPot.name}</h3>
                                        <p className="text-sm font-medium" style={{ color: selectedPot.color }}>{selectedPot.sanskrit}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Purpose</h4>
                                        <p className="text-stone-700">{selectedPot.purpose}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">How to Use</h4>
                                        <p className="text-stone-700 text-sm leading-relaxed">{selectedPot.instruction}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-stone-50 rounded-2xl p-8 border border-stone-200 text-center">
                                <Info className="w-8 h-8 text-stone-300 mx-auto mb-3" />
                                <p className="text-stone-400 text-sm">Tap a pot in the diagram to see its details.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* All Pots Quick List */}
                    <div className="bg-card rounded-2xl p-4 border border-amber-100">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800/60 mb-3">All 5 Vessels</h3>
                        <div className="space-y-2">
                            {POTS.map(pot => (
                                <button
                                    key={pot.id}
                                    onClick={() => setSelectedPot(selectedPot?.id === pot.id ? null : pot)}
                                    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${selectedPot?.id === pot.id ? 'bg-amber-50 border border-amber-300' : 'bg-white border border-stone-100 hover:bg-amber-50'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: pot.color + '20', color: pot.color }}>
                                        <span className="text-sm">🏺</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-sm text-amber-950">{pot.name}</span>
                                        <span className="text-[10px] ml-2" style={{ color: pot.color }}>{pot.sanskrit}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Confirmation Button */}
                    <button
                        onClick={handleConfirm}
                        disabled={isConfirmed}
                        className={`w-full py-4 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg ${isConfirmed
                            ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                            : 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/20 active:scale-95'
                            }`}
                    >
                        {isConfirmed ? (
                            <>
                                <CheckCircle2 className="w-5 h-5 animate-bounce" />
                                Alignment Confirmed
                            </>
                        ) : (
                            <>
                                <Compass className="w-5 h-5" />
                                Confirm Sacred Alignment
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
