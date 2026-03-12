import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_72: PolityTopic95 = {
    id: 72,
    part: 'VIII',
    title: 'North Eastern Council',
    syllabusTag: 'Zonal Councils',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The North Eastern Council (NEC) is a statutory zonal council for the North Eastern Region.
        
        **Act:** North Eastern Council Act, 1971.
        **Members:** 8 States (Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim).
    `,
    coreArticles: [],
    keyConcepts: [
        {
            term: "Zonal Councils vs NEC",
            definition: "Zonal Councils are set up under States Reorganisation Act, 1956. NEC is under a separate 1971 Act.",
            example: ""
        },
        {
            term: "Sikkim",
            definition: "Added to NEC in 2002.",
            example: "Earlier there were 7 sisters."
        },
        {
            term: "Chairman",
            definition: "Union Home Minister is the ex-officio Chairman of NEC.",
            example: "Minister of DoNER is Vice-Chairman."
        }
    ],
    currentAffairs: [
        {
            id: "ca72_1",
            headline: "NEC Plenary Session",
            date: "2024-07-25",
            source: "PIB",
            teachingHook: "Focus on Act East Policy."
        }
    ],
    prelimsPointers: [
        { fact: "NEC is a Statutory Body.", category: "Body" },
        { fact: "Union Home Minister is the Chairman.", category: "Person", highlight: true },
        { fact: "Headquarters is in Shillong.", category: "Fact" }
    ],
    comparisonTable: {
        title: "NEC vs Zonal Councils",
        columnAHeader: "NEC",
        columnBHeader: "Zonal Councils",
        rows: [
            { aspect: "Act", columnA: "NEC Act, 1971", columnB: "States Reorganisation Act, 1956" },
            { aspect: "Members", columnA: "8 NE States", columnB: "Divided into 5 Zones (Northern, Central, etc.)" },
            { aspect: "Chairman", columnA: "Union Home Minister", columnB: "Union Home Minister" }
        ]
    }
};
