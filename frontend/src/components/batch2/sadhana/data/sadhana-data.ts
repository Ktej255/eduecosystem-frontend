export type SadhanaLevel = 'Preliminary' | 'Novice' | 'Intermediate' | 'Adept';
export type StudentArchetype = 'Hopper' | 'Prisoner' | 'Discoverer';
export type BhaktiTier = 'External' | 'Internal' | 'Universal';

export interface SadhanaMantra {
    id: string;
    name: string;
    text: string;
    pronunciation?: string;
    translation?: string;
    viniyoga?: string;
    nyasa?: string[];
}

export interface SadhanaPath {
    id: string;
    name: string;
    description: string;
    goal: string;
    durationDays: number;
    mandatoryPrerequisites: string[];
    clothing: string;
    direction: string[];
    beads: string;
    setup: string[];
    rituals: {
        level: SadhanaLevel;
        mantraCount: number;
        dailyRounds: number;
    }[];
    actions?: SkillAction[];
}

export interface SkillAction {
    moduleName: string;
    eventsNeeded: number;
    href: string;
    description: string;
}

export interface SkillMetadata {
    id: string;
    name: string;
    category: 'Evergreen' | 'Mid-term' | 'Immediate';
    description: string;
    maturityLogic: {
        sapling: string;
        tree: string;
        orchard: string;
    };
    actions?: SkillAction[];
}

export interface SkillProgress {
    skillId: string;
    maturity: 'Sapling' | 'Tree' | 'Orchard';
    points: number;
    lastPracticed: string | null;
}

export interface SadhanaProgress {
    activeSadhanaId: string | null;
    currentCounts: Record<string, number>; // id -> count
    sriSuktamPrepStreak: number;
    lastSriSuktamActivity: string | null;
    sankalpaResets: number;
    archetype: StudentArchetype;
    bhaktiTier: BhaktiTier;
    skills: SkillProgress[];
    journalEntries: number;
    consistencyScore: number;
    points: number;
}

export const DEFAULT_SADHANA_PROGRESS: SadhanaProgress = {
    activeSadhanaId: null,
    currentCounts: {},
    sriSuktamPrepStreak: 0,
    lastSriSuktamActivity: null,
    sankalpaResets: 0,
    archetype: 'Hopper',
    bhaktiTier: 'External',
    skills: [],
    journalEntries: 0,
    consistencyScore: 0,
    points: 0
};

export const CORE_SADHANAS: SadhanaPath[] = [
    {
        id: 'ganesha',
        name: 'Ganesha Sadhana',
        description: 'Mandatory preliminary practice to remove obstacles and align energy.',
        goal: '1.25 Lakh chants',
        durationDays: 30,
        mandatoryPrerequisites: [],
        clothing: 'Yellow',
        direction: ['East', 'North'],
        beads: 'Rudraksha or Sandalwood',
        setup: ['Brass lamp', 'Ghee', 'Yellow cloth on blanket'],
        rituals: [
            { level: 'Preliminary', mantraCount: 125000, dailyRounds: 40 }
        ],
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'guru',
        name: 'Guru Sadhana',
        description: 'Practice to awaken the inner guide and align with the lineage.',
        goal: '1.25 Lakh chants',
        durationDays: 30,
        mandatoryPrerequisites: ['ganesha'],
        clothing: 'White',
        direction: ['North', 'NE'],
        beads: 'Rudraksha or Sandalwood',
        setup: ['Silver or Brass lamp', 'Ghee', 'White cloth on blanket'],
        rituals: [
            { level: 'Preliminary', mantraCount: 125000, dailyRounds: 40 }
        ],
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'gayatri',
        name: 'Gayatri Sadhana',
        description: 'The supreme wisdom practice for mental clarity and spiritual light.',
        goal: 'Tiered progression',
        durationDays: 40,
        mandatoryPrerequisites: ['ganesha'],
        clothing: 'Red, Yellow, or White',
        direction: ['East'],
        beads: 'Rudraksha',
        setup: ['Brass or Earthen lamp', 'Sesame or Ghee oil'],
        rituals: [
            { level: 'Novice', mantraCount: 125000, dailyRounds: 32 },
            { level: 'Intermediate', mantraCount: 2400000, dailyRounds: 32 },
            { level: 'Adept', mantraCount: 3200000, dailyRounds: 32 }
        ],
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'sri-suktam',
        name: 'Sri Suktam Sadhana',
        description: 'Intensive discipline for prosperity and cosmic abundance.',
        goal: '960-day prep + 16-night ritual',
        durationDays: 16,
        mandatoryPrerequisites: ['ganesha', '960-day-discipline'],
        clothing: 'Red',
        direction: ['East', 'North'],
        beads: 'Rudraksha or Kamal Gatta',
        setup: ['Any metal or earthen lamp', 'Red cloth on blanket'],
        rituals: [
            { level: 'Adept', mantraCount: 0, dailyRounds: 0 } // Logic handled by 16-night engine
        ],
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    }
];

export const SKILLS_METADATA: SkillMetadata[] = [
    // ===== EVERGREEN (1-12) — Lifelong Foundational Core =====
    {
        id: 'dharana', name: 'Dharana', category: 'Evergreen', description: 'Unwavering Concentration',
        maturityLogic: { sapling: '30 days focus tracking', tree: '6 months low-drift sessions', orchard: 'Effortless one-pointedness' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'satya', name: 'Satya', category: 'Evergreen', description: 'Truthful Integrity',
        maturityLogic: { sapling: 'Daily honesty journal', tree: 'Alignment across thought, word, deed', orchard: 'Involuntary truthfulness' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'ahimsa', name: 'Ahimsa', category: 'Evergreen', description: 'Non-Violent Conduct',
        maturityLogic: { sapling: '30-day verbal awareness', tree: 'Mental harmlessness', orchard: 'Universal compassion embodied' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'bhakti', name: 'Bhakti', category: 'Evergreen', description: 'Devotional Surrender',
        maturityLogic: { sapling: 'Daily prayer consistency', tree: 'Personal deity relationship', orchard: 'Spontaneous devotion' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'vairagya', name: 'Vairagya', category: 'Evergreen', description: 'Detachment',
        maturityLogic: { sapling: 'Outcome awareness practice', tree: 'Equanimity in setbacks', orchard: 'Unruffled engagement' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'atma-bodha', name: 'Atma-Bodha', category: 'Evergreen', description: 'Self-Inquiry',
        maturityLogic: { sapling: 'Weekly self-inquiry journal', tree: 'Identity beyond roles', orchard: 'Stable self-knowing' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'mauna', name: 'Mauna', category: 'Evergreen', description: 'The Power of Silence',
        maturityLogic: { sapling: '1-hour daily silence', tree: 'Half-day silent practice', orchard: 'Verbal energy mastery' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'tapas', name: 'Tapas', category: 'Evergreen', description: 'Self-Discipline',
        maturityLogic: { sapling: '30-day austerity streak', tree: 'Voluntary discomfort embraced', orchard: 'Ichha-shakti mastery' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'prana-vidya', name: 'Prana-Vidya', category: 'Evergreen', description: 'Breath Mastery',
        maturityLogic: { sapling: 'Daily pranayama practice', tree: 'Nadi Shodhana mastery', orchard: 'Breath-mind integration' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'kshama', name: 'Kshama', category: 'Evergreen', description: 'Radical Forgiveness',
        maturityLogic: { sapling: 'Forgiveness journaling', tree: 'Release of resentment', orchard: 'Emotional lightness' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'daya', name: 'Daya', category: 'Evergreen', description: 'Universal Compassion',
        maturityLogic: { sapling: 'Daily acts of kindness', tree: 'Oneness realization', orchard: 'Seeing self in all beings' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },
    {
        id: 'santosha', name: 'Santosha', category: 'Evergreen', description: 'Resilient Contentment',
        maturityLogic: { sapling: 'Gratitude practice', tree: 'Joy independent of outcomes', orchard: 'Unshakeable equanimity' },
        actions: [{ moduleName: 'Session Timer', eventsNeeded: 5, href: '/student/batch2/sadhana/tools/session', description: 'Log focused sessions' }]
    },

    // ===== MID-TERM (13-24) — Strategic Growth (1-2 Years) =====
    {
        id: 'mantra-phonetics', name: 'Mantra Phonetics', category: 'Mid-term', description: 'Shabda Yoga — Precision in Sanskrit sounds',
        maturityLogic: { sapling: 'Learn 5 vocal zones', tree: 'AI pronunciation score > 85%', orchard: 'Neuro-acoustic precision' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'ritual-design', name: 'Ritual Design', category: 'Mid-term', description: 'Yajnic Thinking — Structuring life as sacred offering',
        maturityLogic: { sapling: 'Daily routine as ritual', tree: 'Full-day Yajna structure', orchard: 'Effortless sacred living' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'energy-anatomy', name: 'Energy Anatomy', category: 'Mid-term', description: 'Chakra Mastery',
        maturityLogic: { sapling: 'Learn 7 chakra model', tree: 'Subtle body awareness', orchard: 'Energy center influence' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'circadian-synching', name: 'Circadian Synching', category: 'Mid-term', description: 'Dinacharya — Aligning with solar/lunar cycles',
        maturityLogic: { sapling: 'Brahma Muhurta wake-up', tree: 'Full lunar alignment', orchard: 'Metabolic rhythm mastery' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'knowledge-graphing', name: 'Knowledge Graphing', category: 'Mid-term', description: 'Jnana Yoga — Connecting ancient and modern wisdom',
        maturityLogic: { sapling: 'Cross-reference 10 topics', tree: 'Build personal knowledge graph', orchard: 'Integrated worldview' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'habit-architecture', name: 'Habit Architecture', category: 'Mid-term', description: 'Samskaras — Overwriting neural patterns',
        maturityLogic: { sapling: 'Identify 3 old patterns', tree: 'Replace with divine associations', orchard: 'Conscious samskara mastery' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'memory-palaces', name: 'Memory Palaces', category: 'Mid-term', description: 'Mnemonics for scriptural retention',
        maturityLogic: { sapling: 'Build first memory palace', tree: 'Retain 100+ verses', orchard: 'Instant recall on demand' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'emotional-intelligence', name: 'Emotional Intelligence', category: 'Mid-term', description: 'Rasa — Mastering the nine emotional tropes',
        maturityLogic: { sapling: 'Name all 9 Navarasa', tree: 'Emotional self-regulation', orchard: 'Balanced stable living' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'dialectical-reasoning', name: 'Dialectical Reasoning', category: 'Mid-term', description: 'Nyaya — Logic and epistemology',
        maturityLogic: { sapling: 'Study Nyaya basics', tree: 'Defend worldview logically', orchard: 'Epistemological mastery' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'community-stewardship', name: 'Community Stewardship', category: 'Mid-term', description: 'Satsang — Contributing to the Sangha',
        maturityLogic: { sapling: 'Join a Satsang group', tree: 'Organize community events', orchard: 'Sangha leadership' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'sanskrit-literacy', name: 'Sanskrit Literacy', category: 'Mid-term', description: 'Bhasha — Reading primary source texts',
        maturityLogic: { sapling: 'Learn Devanagari script', tree: 'Read basic shlokas', orchard: 'Read without translation' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },
    {
        id: 'mentorship', name: 'Mentorship', category: 'Mid-term', description: 'Parampara — Receptive student, responsible guide',
        maturityLogic: { sapling: 'Find a mentor/mentee', tree: 'Active teaching practice', orchard: 'Lineage transmission' },
        actions: [{ moduleName: 'Knowledge Graph', eventsNeeded: 10, href: '/student/batch2/sadhana/skills', description: 'Map connections' }]
    },

    // ===== IMMEDIATE (25-36) — Actionable Right Now =====
    {
        id: 'digital-mala', name: 'Digital Mala Proficiency', category: 'Immediate', description: 'Mastery across all 4 chanting modes',
        maturityLogic: { sapling: 'Complete 1 round each mode', tree: 'Daily multi-mode practice', orchard: 'Seamless mode switching' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'schedule-rigor', name: 'Schedule Rigor', category: 'Immediate', description: '40-minute daily Sadhana slot execution',
        maturityLogic: { sapling: '7-day streak', tree: '30-day streak', orchard: '90-day unbroken streak' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'archetype-detection', name: 'Archetype Detection', category: 'Immediate', description: 'Using AI to identify your current state',
        maturityLogic: { sapling: 'First archetype scan', tree: 'Track archetype shifts over 30 days', orchard: 'Stable Discoverer archetype' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'sankalpa-management', name: 'Sankalpa Management', category: 'Immediate', description: 'Making, signing, and honoring commitments',
        maturityLogic: { sapling: 'First Sankalpa signed', tree: 'Complete a 30-day vow', orchard: 'Zero resets in 90 days' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'mudra-precision', name: 'Mudra Precision', category: 'Immediate', description: 'Correct execution of 7 core mudras',
        maturityLogic: { sapling: 'Learn 3 basic mudras', tree: 'Master all 7 core mudras', orchard: 'Pre/post-japa mudra flow' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'nyasa-body-mapping', name: 'Nyasa', category: 'Immediate', description: 'Body Mapping — Projecting matrika letters',
        maturityLogic: { sapling: 'Learn head-to-toe sequence', tree: 'Perform with eyes closed', orchard: 'Automatic consecration' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'ritual-setup', name: 'Ritual Setup', category: 'Immediate', description: 'Patrasadana — 5-pot arrangement mastery',
        maturityLogic: { sapling: 'Set up altar once', tree: 'Sub-2-minute setup', orchard: 'Intuitive sacred space' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'dietary-discipline', name: 'Dietary Discipline', category: 'Immediate', description: 'Sattvic Input — Havishya-anna and rock-salt diet',
        maturityLogic: { sapling: '3-day sattvic trial', tree: '30-day dietary shift', orchard: 'Effortless sattvic lifestyle' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'portal-navigation', name: 'Portal Navigation', category: 'Immediate', description: 'Switching between Sadhana and Academic modes',
        maturityLogic: { sapling: 'Use both portals in 1 day', tree: 'Seamless context switching', orchard: 'Integrated study-ritual flow' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'visualization-dhyana', name: 'Visualization', category: 'Immediate', description: 'Dhyana — Stable mental imagery during Japa',
        maturityLogic: { sapling: '1-minute stable image', tree: '5-minute sustained visualization', orchard: 'Spontaneous deity appearance' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'journal-practice', name: 'Journal Practice', category: 'Immediate', description: 'Documenting inner experiences and insights',
        maturityLogic: { sapling: 'First 7 entries', tree: '30-day daily journal', orchard: 'Automatic self-reflection habit' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
    {
        id: 'ai-agent-collab', name: 'AI Agent Collaboration', category: 'Immediate', description: 'Interacting with Antigravity for real-time guidance',
        maturityLogic: { sapling: 'First AI guidance session', tree: 'Weekly AI check-ins', orchard: 'AI-integrated ritual flow' },
        actions: [{ moduleName: 'Digital Mala', eventsNeeded: 3, href: '/student/batch2/sadhana/tools/mala', description: 'Complete 108 rounds' }]
    },
];
export const PRAYASHCHITTA_METHODS = [
    { id: 'japa', name: 'Extra Japa', desc: 'Recite the mantra 1008 times as immediate correction.', severity: 'Moderate', icon: 'BookOpen' },
    { id: 'homa', name: 'Mental Homa', desc: 'Perform 108 fire offerings (internal visualization).', severity: 'Moderate', icon: 'Flame' },
    { id: 'tarpana', name: 'Water Libation', desc: 'Offer water to the Sun 108 times with the mantra.', severity: 'Light', icon: 'Shield' },
    { id: 'marjana', name: 'Purification', desc: 'Sprinkling sacred water over self while chanting.', severity: 'Light', icon: 'CheckCircle2' },
    { id: 'dana', name: 'Dana (Charity)', desc: 'Donate 10% of your daily income to a spiritual cause.', severity: 'Moderate', icon: 'Shield' },
    { id: 'mauna', name: 'Mauna (Silence)', desc: 'Maintain 24 hours of total, unbroken silence.', severity: 'Severe', icon: 'Shield' },
    { id: 'upavasa', name: 'Upavasa (Fasting)', desc: 'Perform a 24-hour water-only fast.', severity: 'Severe', icon: 'Shield' },
    { id: 'asana', name: 'Asana Tapas', desc: 'Hold a single meditative posture for 2 hours.', severity: 'Severe', icon: 'Shield' },
    { id: 'krichhra', name: 'Severe Penance', desc: 'Sleep on the floor and eat only once for 3 days.', severity: 'Extreme', icon: 'AlertTriangle' },
    { id: 'seva', name: 'Seva (Service)', desc: 'Perform 4 hours of selfless service at a temple or NGO.', severity: 'Moderate', icon: 'Shield' },
    { id: 'repentance', name: 'Paschattapa', desc: 'Genuine heart-felt repentance before the Divine.', severity: 'Light', icon: 'Flame' },
];
