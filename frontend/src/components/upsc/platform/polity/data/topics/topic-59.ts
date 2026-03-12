import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_59: PolityTopic95 = {
    id: 59,
    part: 'VIII',
    title: 'National Commission for Women',
    syllabusTag: 'Statutory Body',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The National Commission for Women (NCW) was set up as a statutory body in January 1992 under the National Commission for Women Act, 1990.
        
        **Mandate:** Review the Constitutional and Legal safeguards for women; recommend remedial legislative measures; facilitate redressal of grievances and advise the Government on all policy matters affecting women.
    `,
    coreArticles: [
        {
            number: "NCW Act, 1990",
            title: "Sec 3: Constitution of Commission",
            description: "Chairperson + 5 Members (at least one SC/ST)."
        }
    ],
    keyConcepts: [
        {
            term: "Suo Moto Cognizance",
            definition: "The Commission can take up cases of women's rights violation on its own motion.",
            example: "Often used in widely reported media cases."
        },
        {
            term: "Parivarik Mahila Lok Adalat",
            definition: "(PMLA) has been created by NCW for speedy disposal of cases.",
            example: ""
        }
    ],
    currentAffairs: [
        {
            id: "ca59_1",
            headline: "NCW Launches 'Digital Shakti 4.0'",
            date: "2024-11-20",
            source: "PIB",
            teachingHook: "Empowering women in the digital space and cyber safety."
        }
    ],
    prelimsPointers: [
        { fact: "NCW is a statutory body, NOT a constitutional body.", category: "Body", highlight: true },
        { fact: "First Chairperson was Jayanti Patnaik.", category: "Person" },
        { fact: "Chairperson and members are nominated by the Central Government.", category: "Fact" },
        { fact: "It has the powers of a Civil Court.", category: "Fact" }
    ]
};
