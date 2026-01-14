export interface Trait {
    id: string;
    name: string;
    price: number;
    group: 1 | 2 | 3; // 1: Basic (₹11), 2: Standard (₹29), 3: Premium (₹49)
    description: string;
}

export const TRAIT_GROUPS = {
    GROUP_1: { price: 11, label: "Basic Personality Traits" },
    GROUP_2: { price: 29, label: "Intellectual & Emotional Depth" },
    GROUP_3: { price: 49, label: "Deep Subconscious & Hidden Drivers" }
};

export const GRAPHOTHERAPY_TRAITS: Trait[] = [
    // GROUP 1 (Basic - ₹11)
    { id: 'g1_opt', name: 'Optimism Level', price: 11, group: 1, description: 'Are you naturally hopeful or pessimistic?' },
    { id: 'g1_energy', name: 'Physical Energy', price: 11, group: 1, description: 'Your stamina and daily vitality levels.' },
    { id: 'g1_social', name: 'Friendliness', price: 11, group: 1, description: 'How open you are to new connections.' },
    { id: 'g1_detail', name: 'Attention to Detail', price: 11, group: 1, description: 'Do you miss things or see everything?' },
    { id: 'g1_mood', name: 'Mood Consistency', price: 11, group: 1, description: 'Are your emotions stable or fluctuating?' },

    // GROUP 2 (Standard - ₹29)
    { id: 'g2_logic', name: 'Logical Thinking', price: 29, group: 2, description: 'How you process data and make decisions.' },
    { id: 'g2_create', name: 'Creativity & Intuition', price: 29, group: 2, description: 'Your ability to think outside the box.' },
    { id: 'g2_plan', name: 'Planning Ability', price: 29, group: 2, description: 'Are you strategic or impulsive?' },
    { id: 'g2_will', name: 'Willpower', price: 29, group: 2, description: 'Your strength to push through obstacles.' },
    { id: 'g2_sens', name: 'Sensitivity to Criticism', price: 29, group: 2, description: 'How much other opinions affect you.' },
    { id: 'g2_focus', name: 'Concentration/Focus', price: 29, group: 2, description: 'Your ability to ignore distractions.' },
    { id: 'g2_dipl', name: 'Diplomacy', price: 29, group: 2, description: 'How tactful you are in communication.' },
    { id: 'g2_honesty', name: 'Candor & Honesty', price: 29, group: 2, description: 'Are you frank or secretive?' },
    { id: 'g2_pers', name: 'Persistence', price: 29, group: 2, description: 'Do you give up easily?' },
    { id: 'g2_amb', name: 'Ambition', price: 29, group: 2, description: 'How high do you aim?' },

    // GROUP 3 (Premium - ₹49)
    { id: 'g3_money', name: 'Money/Success Blocks', price: 49, group: 3, description: 'Subconscious barriers to wealth.' },
    { id: 'g3_rel', name: 'Relationship Compatibility', price: 49, group: 3, description: 'Your romantic and social bonding style.' },
    { id: 'g3_fear', name: 'Hidden Fears', price: 49, group: 3, description: 'Deep-seated anxieties holding you back.' },
    { id: 'g3_ego', name: 'Ego & Self-Image', price: 49, group: 3, description: 'True confidence vs. masked insecurity.' },
    { id: 'g3_trust', name: 'Trust Issues', price: 49, group: 3, description: 'Your capacity to trust others.' },
    { id: 'g3_integrity', name: 'Integrity', price: 49, group: 3, description: 'Moral compass and reliability.' },
    { id: 'g3_past', name: 'Past Trauma Markers', price: 49, group: 3, description: 'Lingering effects of past events.' },
    { id: 'g3_sex', name: 'Sexual Drives', price: 49, group: 3, description: 'Physical drives and frustration levels.' },
    { id: 'g3_def', name: 'Defense Mechanisms', price: 49, group: 3, description: 'Sarcasm, repression, and denial.' },
    { id: 'g3_parent', name: 'Parental Influence', price: 49, group: 3, description: 'Impact of mother/father figures.' },
    { id: 'g3_lead', name: 'Leadership Potential', price: 49, group: 3, description: 'Are you a natural born leader?' },
    { id: 'g3_resent', name: 'Resentment/Anger', price: 49, group: 3, description: 'Holding onto grudges.' },
    { id: 'g3_proc', name: 'Procrastination Roots', price: 49, group: 3, description: 'Why you put things off.' },
    { id: 'g3_jeal', name: 'Jealousy/Possessiveness', price: 49, group: 3, description: 'Insecurity in relationships.' },
    { id: 'g3_spirit', name: 'Spirituality', price: 49, group: 3, description: 'Connection to higher purpose.' },
];
