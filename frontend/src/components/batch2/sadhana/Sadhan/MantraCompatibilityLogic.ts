export type CompatibilityLevel = 'Excellent' | 'Good' | 'Neutral' | 'Avoid';

// ===== 1. ZODIAC ALGORITHM =====
const ZODIAC_SIGNS = [
    { sign: 'Aries', letters: ['A', 'L', 'E', 'अ', 'ल'] },
    { sign: 'Taurus', letters: ['B', 'V', 'U', 'ब', 'व', 'उ'] },
    { sign: 'Gemini', letters: ['K', 'G', 'क', 'ग'] },
    { sign: 'Cancer', letters: ['D', 'H', 'द', 'ह'] },
    { sign: 'Leo', letters: ['M', 'T', 'म', 'त'] },
    { sign: 'Virgo', letters: ['P', 'Th', 'प', 'थ'] },
    { sign: 'Libra', letters: ['R', 'T', 'र', 'ट'] },
    { sign: 'Scorpio', letters: ['N', 'Y', 'न', 'य'] },
    { sign: 'Sagittarius', letters: ['Bh', 'Dh', 'Ph', 'ध', 'भ', 'फ'] },
    { sign: 'Capricorn', letters: ['Kh', 'J', 'ख', 'ज'] },
    { sign: 'Aquarius', letters: ['S', 'Sh', 'श', 'स', 'ष'] },
    { sign: 'Pisces', letters: ['Ch', 'Jh', 'च', 'झ'] },
];

export function getZodiacSign(letter: string) {
    if (!letter) return null;
    const upperLetter = letter.toUpperCase();
    for (let i = 0; i < ZODIAC_SIGNS.length; i++) {
        if (ZODIAC_SIGNS[i].letters.some(l => l.toUpperCase() === upperLetter || letter === l)) {
            return { sign: ZODIAC_SIGNS[i].sign, index: i };
        }
    }
    return { sign: 'Aries', index: 0 }; // Fallback
}

export function getZodiacCompatibility(nameIndex: number, mantraIndex: number) {
    const diff = ((mantraIndex - nameIndex) % 12 + 12) % 12;
    if ([0, 4, 8].includes(diff)) return { level: 'Excellent' as CompatibilityLevel, desc: 'Trikona Harmony (Same/5th/9th). Phenomenal alignment.' };
    if ([1, 5, 9].includes(diff)) return { level: 'Good' as CompatibilityLevel, desc: 'Circumstantial Strength (2nd/6th/10th). Supportive.' };
    if ([2, 6, 10].includes(diff)) return { level: 'Neutral' as CompatibilityLevel, desc: 'Strength through Effort (3rd/7th/11th). Neutral result.' };
    return { level: 'Avoid' as CompatibilityLevel, desc: 'Shadashtak Dosha (6th/8th/12th). Strong friction expected.' };
}

// ===== 2. CREDITOR-DEBTOR (RINNI-DHANI) ALGORITHM =====
const VOWEL_PTS: Record<string, number> = { 'A': 1, 'I': 2, 'U': 3, 'E': 4, 'O': 5 };
const CONS_PTS: Record<string, number> = {
    'K': 1, 'G': 3, 'CH': 6, 'J': 1, 'T': 4, 'D': 6, 'N': 1,
    'P': 2, 'B': 4, 'M': 6, 'Y': 7, 'R': 1, 'L': 2, 'V': 3, 'S': 5, 'H': 6
};

function calculateRinniScore(text: string): number {
    let total = 0;
    const clean = text.toUpperCase().replace(/[^A-Z]/g, '');
    for (const char of clean) {
        if (VOWEL_PTS[char]) total += VOWEL_PTS[char];
        else if (CONS_PTS[char]) total += CONS_PTS[char];
        else total += 2; // fallback
    }
    return total < 8 ? (total || 1) : total % 8;
}

export function getRinniResult(name: string, mantra: string) {
    const nameScore = calculateRinniScore(name);
    const mantraScore = calculateRinniScore(mantra);

    if (mantraScore > nameScore) {
        return { nameScore, mantraScore, type: 'Debtor', desc: 'The Mantra owes you. Results usually manifest rapidly.', level: 'Excellent' as CompatibilityLevel };
    } else if (mantraScore < nameScore) {
        return { nameScore, mantraScore, type: 'Creditor', desc: 'You owe the Mantra. Expect results to come slowly through devotion.', level: 'Neutral' as CompatibilityLevel };
    }
    return { nameScore, mantraScore, type: 'Equal', desc: 'Balanced energy. Steady progress with consistent practice.', level: 'Good' as CompatibilityLevel };
}

// ===== 3. KULA-AKULA (ELEMENT) ALGORITHM =====
const ELEMENTS = {
    WATER: { letters: ['A', 'I', 'U', 'E', 'O'], color: 'text-blue-500' },
    EARTH: { letters: ['K', 'G', 'L', 'V'], color: 'text-emerald-600' },
    FIRE: { letters: ['M', 'R', 'T', 'CH'], color: 'text-orange-500' },
    AIR: { letters: ['P', 'Y', 'B', 'D'], color: 'text-slate-400' },
    SPACE: { letters: ['S', 'H', 'J', 'N'], color: 'text-indigo-400' }
};

export function getElement(letter: string) {
    if (!letter) return { name: 'WATER', ...ELEMENTS.WATER };
    const up = letter.toUpperCase();
    for (const [name, data] of Object.entries(ELEMENTS)) {
        if (data.letters.includes(up)) return { name, ...data };
    }
    return { name: 'SPACE', ...ELEMENTS.SPACE };
}

export function getElementCompatibility(nameEl: string, mantraEl: string) {
    if (nameEl === mantraEl) return { level: 'Excellent' as CompatibilityLevel, desc: 'Kula: Perfect elemental resonance.' };

    // Elemental Friendships (Simplified Vedic rule)
    const friends: Record<string, string[]> = {
        'WATER': ['EARTH', 'SPACE'],
        'EARTH': ['WATER', 'FIRE'],
        'FIRE': ['EARTH', 'AIR'],
        'AIR': ['FIRE', 'SPACE'],
        'SPACE': ['AIR', 'WATER']
    };

    if (friends[nameEl]?.includes(mantraEl)) return { level: 'Good' as CompatibilityLevel, desc: 'Mitra: Harmonious elemental pairing.' };
    return { level: 'Avoid' as CompatibilityLevel, desc: 'Akula: Elemental friction. Extra effort required.' };
}
