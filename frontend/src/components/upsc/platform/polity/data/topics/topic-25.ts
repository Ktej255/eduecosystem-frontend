import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_25: PolityTopic95 = {
    id: 25,
    part: 'III',
    title: 'Indian Parliamentary Group',
    syllabusTag: 'Parliamentary Forums',
    priority: 'Low',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The Indian Parliamentary Group (IPG) is an autonomous body formed in 1949. It acts as a link between the Parliament of India and the various parliaments of the world.
        
        **Key Functions:**
        *   Promotes contact between Members of Parliament of India.
        *   Functions as the National Group of the Inter-Parliamentary Union (IPU).
        *   Functions as the India Branch of the Commonwealth Parliamentary Association (CPA).
    `,
    coreArticles: [],
    keyConcepts: [
        {
            term: "President of IPG",
            definition: "The Speaker of the Lok Sabha is the ex-officio President of the Group.",
            example: ""
        },
        {
            term: "Outstanding Parliamentarian Award",
            definition: "Instituted by IPG in 1995 to honor distinguished parliamentarians.",
            example: "First recipient: Chandrashekhar."
        }
    ],
    currentAffairs: [
        {
            id: "ca25_1",
            headline: "IPU Assembly Meeting",
            date: "2025-10-20",
            source: "Lok Sabha Website",
            teachingHook: "India's representation in global parliamentary forums."
        }
    ],
    prelimsPointers: [
        { fact: "Membership is open to all MPs and ex-MPs.", category: "Fact", highlight: true },
        { fact: "Speaker of Lok Sabha is the ex-officio President.", category: "Person" },
        { fact: "Deputy Speaker (LS) and Deputy Chairman (RS) are ex-officio Vice-Presidents.", category: "Person" }
    ]
};
