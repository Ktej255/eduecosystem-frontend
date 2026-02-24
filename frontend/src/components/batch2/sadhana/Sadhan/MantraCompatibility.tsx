'use client';

import React, { useState, useMemo } from 'react';

// ===== Zodiac Compatibility Algorithm =====
const ZODIAC_SIGNS = [
    { sign: 'Aries', letters: ['A', 'L', 'E', 'अ', 'ल'] },
    { sign: 'Taurus', letters: ['B', 'V', 'U', 'ब', 'व'] },
    { sign: 'Gemini', letters: ['K', 'G', 'क', 'ग'] },
    { sign: 'Cancer', letters: ['D', 'H', 'द', 'ह'] },
    { sign: 'Leo', letters: ['M', 'T', 'म', 'त'] },
    { sign: 'Virgo', letters: ['P', 'Th', 'प', 'थ'] },
    { sign: 'Libra', letters: ['R', 'T', 'र', 'ट'] },
    { sign: 'Scorpio', letters: ['N', 'Y', 'न', 'य'] },
    { sign: 'Sagittarius', letters: ['Bh', 'Dh', 'Ph', 'ध', 'भ'] },
    { sign: 'Capricorn', letters: ['Kh', 'J', 'ख', 'ज'] },
    { sign: 'Aquarius', letters: ['G', 'S', 'Sh', 'ग', 'श', 'स'] },
    { sign: 'Pisces', letters: ['Ch', 'D', 'Jh', 'च', 'झ'] },
];

function getZodiacSign(letter: string): { sign: string; index: number } | null {
    const upperLetter = letter.toUpperCase();
    for (let i = 0; i < ZODIAC_SIGNS.length; i++) {
        if (ZODIAC_SIGNS[i].letters.some(l => l.toUpperCase() === upperLetter || letter === l)) {
            return { sign: ZODIAC_SIGNS[i].sign, index: i };
        }
    }
    return null;
}

function getZodiacCompatibility(nameIndex: number, mantraIndex: number): { level: string; description: string; color: string } {
    const diff = ((mantraIndex - nameIndex) % 12 + 12) % 12;
    // 1st, 5th, 9th = Best (Trikona)
    if ([0, 4, 8].includes(diff)) return { level: 'Excellent', description: 'Same/5th/9th sign — Trikona harmony', color: 'text-emerald-400' };
    // 2nd, 6th, 10th = Good
    if ([1, 5, 9].includes(diff)) return { level: 'Good', description: '2nd/6th/10th sign — Circumstantial strength', color: 'text-blue-400' };
    // 3rd, 7th, 11th = Neutral
    if ([2, 6, 10].includes(diff)) return { level: 'Neutral', description: '3rd/7th/11th sign — Strength through effort', color: 'text-yellow-400' };
    // 4th, 8th, 12th = Avoid
    return { level: 'Avoid', description: '6th/8th/12th sign — Shadashtak dosha', color: 'text-red-400' };
}

// ===== Creditor-Debtor (Rinni-Dhani) Algorithm =====
const VOWEL_POINTS: Record<string, number> = {
    'A': 1, 'I': 2, 'U': 3, 'E': 4, 'O': 5,
    'अ': 1, 'इ': 2, 'उ': 3, 'ए': 4, 'ओ': 5,
    'आ': 1, 'ई': 2, 'ऊ': 3, 'ऐ': 4, 'औ': 5,
};

const CONSONANT_POINTS: Record<string, number> = {
    'K': 1, 'Kh': 2, 'G': 3, 'Gh': 4, 'Ng': 5,
    'Ch': 6, 'Chh': 7, 'J': 1, 'Jh': 2, 'Ny': 3,
    'T': 4, 'Th': 5, 'D': 6, 'Dh': 7, 'N': 1,
    'P': 2, 'Ph': 3, 'B': 4, 'Bh': 5, 'M': 6,
    'Y': 7, 'R': 1, 'L': 2, 'V': 3,
    'Sh': 4, 'S': 5, 'H': 6,
};

function calculateRinniScore(text: string): number {
    let total = 0;
    for (const char of text.toUpperCase()) {
        if (VOWEL_POINTS[char]) total += VOWEL_POINTS[char];
        else if (CONSONANT_POINTS[char]) total += CONSONANT_POINTS[char];
    }
    // Remainder mod 8 (use total if < 8)
    return total < 8 ? total : total % 8;
}

function getRinniResult(nameScore: number, mantraScore: number): { relationship: string; description: string; color: string } {
    if (mantraScore > nameScore) {
        return {
            relationship: 'Debtor (Rinni)',
            description: 'The Mantra owes you — expect faster results and divine pull.',
            color: 'text-emerald-400'
        };
    } else if (mantraScore < nameScore) {
        return {
            relationship: 'Creditor (Dhani)',
            description: 'You owe the Mantra — results come slowly, requires extra devotion.',
            color: 'text-amber-400'
        };
    }
    return {
        relationship: 'Equal (Sama)',
        description: 'Balanced energy — steady progress with consistent practice.',
        color: 'text-blue-400'
    };
}

const MantraCompatibility: React.FC = () => {
    const [name, setName] = useState('');
    const [mantra, setMantra] = useState('');
    const [activeTab, setActiveTab] = useState<'zodiac' | 'rinni'>('zodiac');

    const zodiacResult = useMemo(() => {
        if (!name || !mantra) return null;
        const nameSign = getZodiacSign(name[0]);
        const mantraSign = getZodiacSign(mantra[0]);
        if (!nameSign || !mantraSign) return null;
        const compat = getZodiacCompatibility(nameSign.index, mantraSign.index);
        return { nameSign: nameSign.sign, mantraSign: mantraSign.sign, ...compat };
    }, [name, mantra]);

    const rinniResult = useMemo(() => {
        if (!name || !mantra) return null;
        const nameScore = calculateRinniScore(name);
        const mantraScore = calculateRinniScore(mantra);
        const result = getRinniResult(nameScore, mantraScore);
        return { nameScore, mantraScore, ...result };
    }, [name, mantra]);

    return (
        <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 max-w-md mx-auto">
            <h2 className="text-lg font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
                Mantra Compatibility
            </h2>
            <p className="text-center text-[11px] text-slate-500 mb-6">Check if a mantra is aligned with your energy</p>

            {/* Inputs */}
            <div className="space-y-3 mb-6">
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Your Name (Sanskrit/English)</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Arjuna or अर्जुन"
                        className="w-full mt-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-amber-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Mantra (First syllable)</label>
                    <input
                        type="text"
                        value={mantra}
                        onChange={e => setMantra(e.target.value)}
                        placeholder="e.g. Om Namah Shivaya"
                        className="w-full mt-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-amber-500 focus:outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Method Tabs */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setActiveTab('zodiac')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'zodiac' ? 'bg-gradient-to-b from-indigo-500 to-purple-600 text-white' : 'bg-slate-900 text-slate-500'
                        }`}
                >
                    ♈ Zodiac Match
                </button>
                <button
                    onClick={() => setActiveTab('rinni')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'rinni' ? 'bg-gradient-to-b from-amber-500 to-orange-600 text-white' : 'bg-slate-900 text-slate-500'
                        }`}
                >
                    ⚖️ Creditor-Debtor
                </button>
            </div>

            {/* Results */}
            {name && mantra ? (
                <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5">
                    {activeTab === 'zodiac' && zodiacResult && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="text-center flex-1">
                                    <div className="text-[10px] text-slate-500 uppercase">Your Sign</div>
                                    <div className="text-lg font-bold text-indigo-300">{zodiacResult.nameSign}</div>
                                </div>
                                <div className="text-slate-700 text-2xl">⟷</div>
                                <div className="text-center flex-1">
                                    <div className="text-[10px] text-slate-500 uppercase">Mantra Sign</div>
                                    <div className="text-lg font-bold text-purple-300">{zodiacResult.mantraSign}</div>
                                </div>
                            </div>
                            <div className="text-center pt-3 border-t border-slate-800">
                                <div className={`text-xl font-bold ${zodiacResult.color}`}>{zodiacResult.level}</div>
                                <p className="text-[11px] text-slate-400 mt-1">{zodiacResult.description}</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'rinni' && rinniResult && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="text-center flex-1">
                                    <div className="text-[10px] text-slate-500 uppercase">Name Score</div>
                                    <div className="text-3xl font-mono font-bold text-amber-300">{rinniResult.nameScore}</div>
                                </div>
                                <div className="text-slate-700 text-lg">vs</div>
                                <div className="text-center flex-1">
                                    <div className="text-[10px] text-slate-500 uppercase">Mantra Score</div>
                                    <div className="text-3xl font-mono font-bold text-orange-300">{rinniResult.mantraScore}</div>
                                </div>
                            </div>
                            <div className="text-center pt-3 border-t border-slate-800">
                                <div className={`text-xl font-bold ${rinniResult.color}`}>{rinniResult.relationship}</div>
                                <p className="text-[11px] text-slate-400 mt-1">{rinniResult.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-8 text-slate-700">
                    <p className="text-sm">Enter your name and mantra to check compatibility</p>
                </div>
            )}

            {/* Algorithm Note */}
            <div className="mt-4 p-3 bg-slate-900/30 rounded-xl border border-slate-800/50">
                <p className="text-[10px] text-slate-600 leading-relaxed">
                    {activeTab === 'zodiac'
                        ? '📖 Based on Rashi-Akshar mapping. Same/5th/9th sign positions indicate natural harmony (Trikona). 6th/8th/12th indicate Shadashtak dosha — proceed with caution.'
                        : '📖 Based on Rinni-Dhani method. Each letter is assigned a numeric value. Score = Total mod 8. If Mantra > Name, the mantra is your Debtor (fast results).'}
                </p>
            </div>
        </div>
    );
};

export default MantraCompatibility;
