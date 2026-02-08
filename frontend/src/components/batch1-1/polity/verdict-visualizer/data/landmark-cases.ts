
export interface LandmarkCase {
    id: string;
    title: string;
    year: number;
    citation: string;
    benchStrength: number;
    verdict: string;
    impact: string;
    narrative: string;
    keyArguments: { appellant: string; respondent: string };
    position: [number, number, number]; // x, y, z coordinates in 3D space
    color: string; // Hex code for visualization
}

export const LANDMARK_CASES: LandmarkCase[] = [
    {
        id: 'c1',
        title: 'Shankari Prasad vs Union of India',
        year: 1951,
        citation: 'AIR 1951 SC 458',
        benchStrength: 5,
        verdict: 'Parliament can amend Fundamental Rights.',
        impact: 'Upheld 1st Amendment. Established Parliament supremacy in amendments.',
        narrative: 'The first clash between the Judiciary and the Executive. Coming right after independence, the government needed to implement land reforms (9th Schedule). The Supreme Court took a literal view, holding that the power to amend under Article 368 included the power to amend Fundamental Rights.',
        keyArguments: {
            appellant: 'Fundamental Rights are transcendental; Article 13(2) prohibits any "law" that takes them away.',
            respondent: 'Constituent power under Article 368 is different from ordinary legislative power.'
        },
        position: [-10, 0, 0],
        color: '#ef4444' // Red (State Power)
    },
    {
        id: 'c2',
        title: 'Golaknath vs State of Punjab',
        year: 1967,
        citation: 'AIR 1967 SC 1643',
        benchStrength: 11,
        verdict: 'Parliament CANNOT amend Fundamental Rights.',
        impact: 'Restored supremacy of Fundamental Rights. Overruled Shankari Prasad.',
        narrative: 'A massive 11-judge bench delivered a 6-5 verdict that shocked the political establishment. It "prospective overruled" previous judgments, asserting that Fundamental Rights were "immutable" and Parliament had no power to abridge them.',
        keyArguments: {
            appellant: 'The Constitution is the supreme law; Parliament is its creature and cannot change its basic structure.',
            respondent: 'The power to amend is an "unfettered" sovereign power to meet changing social needs.'
        },
        position: [-5, 0, 0],
        color: '#22c55e' // Green (Citizen Rights)
    },
    {
        id: 'c3',
        title: 'Kesavananda Bharati vs State of Kerala',
        year: 1973,
        citation: 'AIR 1973 SC 1461',
        benchStrength: 13,
        verdict: 'Parliament can amend any part, BUT cannot alter the Basic Structure.',
        impact: 'Birth of Basic Structure Doctrine. The "Golden Mean".',
        narrative: 'The longest hearing in SC history (68 days). Nani Palkhivala argued for the "Soul of the Constitution". The verdict saved Indian democracy by creating the "Basic Structure" doctrine—a line Parliament cannot cross.',
        keyArguments: {
            appellant: 'Parliament cannot destroy the "identity" of the Constitution through amendments.',
            respondent: 'There are no "implied limitations" on the amending power; people\'s representatives are supreme.'
        },
        position: [0, 0, 0], // Center Stage
        color: '#eab308' // Gold (Constitution/Balance)
    },
    {
        id: 'c4',
        title: 'Minerva Mills vs Union of India',
        year: 1980,
        citation: 'AIR 1980 SC 1789',
        benchStrength: 5,
        verdict: 'Judicial Review is part of Basic Structure. Harmony between FR and DPSP is essential.',
        impact: 'Struck down 42nd Amendment clauses. Reinforced Basic Structure.',
        narrative: 'Post-Emergency, the SC struck back at the 42nd Amendment\'s attempt to give the Centre unlimited power. It famously ruled that the Constitution is founded on the bedrock of balance between Part III (Rights) and Part IV (DPSP).',
        keyArguments: {
            appellant: 'The 42nd Amendment made the Prime Minister a dictator; it destroyed Judicial Review.',
            respondent: 'Directive Principles are the "Dynamic" part; they must prevail over "Individual" rights for social good.'
        },
        position: [5, 0, 0],
        color: '#3b82f6' // Blue (Judicial Review)
    },
    {
        id: 'c5',
        title: 'Indra Sawhney vs Union of India',
        year: 1992,
        citation: 'AIR 1993 SC 477',
        benchStrength: 9,
        verdict: 'Confirmed 27% OBC reservation. Cap at 50%. No reservation in promotions.',
        impact: 'Mandal Commission case. Defined limits of reservation.',
        narrative: 'The verdict that stabilized reservation politics in India. It balanced social justice with merit by introducing the "creamy layer" concept and capping total reservations at 50% to prevent reverse discrimination.',
        keyArguments: {
            appellant: 'Caste cannot be the sole criterion; it creates a "caste-divided" society.',
            respondent: 'Caste is a dominant indicator of social backwardness in India; Article 16(4) is an enabling provision.'
        },
        position: [10, 0, 0],
        color: '#a855f7' // Purple (Social Justice)
    },
    {
        id: 'c6',
        title: 'K.S. Puttaswamy vs Union of India',
        year: 2017,
        citation: '(2017) 10 SCC 1',
        benchStrength: 9,
        verdict: 'Right to Privacy is a Fundamental Right under Article 21.',
        impact: 'Expanded Article 21. Impacted Aadhaar, Section 377, etc.',
        narrative: 'A 9-judge bench unanimously declared privacy to be intrinsic to life and liberty. This case modernized the Constitution for the digital age, acknowledging that "Privacy is the constitutional core of human dignity."',
        keyArguments: {
            appellant: 'Body and mind are the private domain of the individual; state has no right to data without consent.',
            respondent: 'There is no "Fundamental Right to Privacy" explicitly mentioned; social welfare requires identity mapping (Aadhaar).'
        },
        position: [15, 0, 0],
        color: '#06b6d4' // Cyan (Modern Rights)
    }
];
