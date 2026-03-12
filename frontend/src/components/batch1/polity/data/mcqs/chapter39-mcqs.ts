import { MCQ } from '../RevisionRegistry';

export const CHAPTER_39_MCQS: MCQ[] = [
    // Phase 1: Evolution & Committees
    {
        id: 1,

        question: "Match Committee with Recommendation:\nA. Balwant Rai Mehta: 1. Constitutional status\nB. Ashok Mehta: 2. 3-tier 'Democratic Decentralization'\nC. G.V.K. Rao: 3. 2-tier system, political party participation\nD. L.M. Singhvi: 4. 'Grass without roots', DDC post",
        options: [
            "A-2, B-3, C-4, D-1",
            "A-1, B-2, C-3, D-4",
            "A-2, B-3, C-1, D-4",
            "A-4, B-3, C-2, D-1"
        ],
        correctAnswer: 0,
        explanation: "Balwant Rai -> 3-tier (2). Ashok Mehta -> 2-tier (3). GVK Rao -> Planning/DDC (4). LM Singhvi -> Constitutional Status (1).",
        difficulty: "medium"
    },
    {
        id: 2,

        question: "Which committee(s) recommended 'Nyaya Panchayats'?\n1. Ashok Mehta\n2. L.M. Singhvi\n3. G.V.K. Rao",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1,
        explanation: "Both Ashok Mehta and L.M. Singhvi committees suggested Nyaya Panchayats.",
        difficulty: "hard"
    },
    // Phase 2: Compulsory vs Voluntary
    {
        id: 3,

        question: "Which is NOT a compulsory provision of 73rd Amendment?",
        options: [
            "State Finance Commission every 5 years.",
            "Tenure of 5 years.",
            "Voting rights to MPs/MLAs in Panchayats.",
            "Direct elections to all seats."
        ],
        correctAnswer: 2,
        explanation: "Representation of MPs/MLAs is a Voluntary provision.",
        difficulty: "medium"
    },
    {
        id: 4,

        question: "Regarding Election of Chairpersons:",
        options: [
            "Village level always directly elected.",
            "Intermediate/District levels elected indirectly.",
            "State Legislature has no power over Village Chairperson election.",
            "All levels must be directly elected."
        ],
        correctAnswer: 1,
        explanation: "Chairpersons at Intermediate and District levels are elected indirectly. Village level mode is decided by State Legislature.",
        difficulty: "medium"
    },
    // Phase 3: Reservations & Tenure
    {
        id: 5,

        question: "Regarding Article 243-D (Women Reservation):",
        options: [
            "Applies only to membership, not Chairpersons.",
            "Includes SC/ST women quotas.",
            "Mandates 50% reservation.",
            "Is a Voluntary provision."
        ],
        correctAnswer: 1,
        explanation: "1/3rd reservation includes the number of seats reserved for women belonging to SCs and STs.",
        difficulty: "hard"
    },
    {
        id: 6,

        question: "If a Panchayat is dissolved prematurely (e.g., in 3rd year):",
        options: [
            "New Panchayat continues for full 5 years.",
            "New Panchayat continues only for remainder of period.",
            "No elections if remainder is < 1 year.",
            "Fresh elections within 3 months."
        ],
        correctAnswer: 1,
        explanation: "It continues only for the remainder of the term (unless remainder was < 6 months).",
        difficulty: "medium"
    },
    // Phase 4: Powers, Finance & Disqualifications
    {
        id: 7,

        question: "Which is NOT among the 29 functional items of 11th Schedule?",
        options: [
            "Technical training.",
            "PDS.",
            "Regulation of Slaughterhouses.",
            "Maintenance of community assets."
        ],
        correctAnswer: 2,
        explanation: "Regulation of Slaughterhouses is a 12th Schedule (Municipal) item.",
        difficulty: "hard"
    },
    {
        id: 8,

        question: "Disqualified from Panchayat membership if:\n1. Less than 25 years age.\n2. Disqualified under State Law.\n3. Less than 21 years age.",
        options: [
            "2 and 3 only",
            "1 and 2 only",
            "3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0,
        explanation: "Minimum age is 21. Less than 25 is NOT a disqualification (Statement 1 is false). Correct conditions are 2 and 3.",
        difficulty: "medium"
    },
    {
        id: 9,

        question: "State Finance Commission reviews/recommends:\n1. Tax distribution.\n2. Assignment of taxes/duties.\n3. Grants-in-aid.",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "1 only"
        ],
        correctAnswer: 2,
        explanation: "SFC covers all three aspects: Distribution, Assignment, and Grants.",
        difficulty: "medium"
    },
    // Phase 5: PESA Act
    {
        id: 10,

        question: "PESA Act extends Part IX to Scheduled Areas of how many states?",
        options: [
            "5 states",
            "10 states",
            "12 states",
            "8 states"
        ],
        correctAnswer: 1,
        explanation: "10 States: AP, Telangana, Chhattisgarh, Gujarat, HP, Jharkhand, MP, Maharashtra, Odisha, Rajasthan.",
        difficulty: "hard"
    },
    {
        id: 11,

        question: "Under PESA, Gram Sabha consultation is MANDATORY for:",
        options: [
            "Education laws.",
            "Land acquisition in Scheduled Areas.",
            "Appointing Collector.",
            "Designing school curriculum."
        ],
        correctAnswer: 1,
        explanation: "Mandatory consultation before land acquisition.",
        difficulty: "medium"
    },
    {
        id: 12,

        question: "Power NOT specifically granted to Gram Sabha under PESA?",
        options: [
            "Prevent alienation of land.",
            "Ownership of Minor Forest Produce.",
            "Manage all Major Minerals.",
            "Control over local plans."
        ],
        correctAnswer: 2,
        explanation: "Power is over Minor Minerals (license/lease), NOT Major Minerals.",
        difficulty: "medium"
    },
    // Phase 6: Miscellaneous
    {
        id: 13,

        question: "State Election Commission (Art 243-K) is responsible for:\n1. Electoral rolls for Panchayats.\n2. Conduct of all Panchayat elections.\n3. Conduct of State Legislature elections.",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "1 only"
        ],
        correctAnswer: 0,
        explanation: "Only Panchayat/Municipal elections. State Legislature elections are by ECI.",
        difficulty: "easy"
    },
    {
        id: 14,

        question: "Article 243-O bar on courts means:",
        options: [
            "Delimitation validity cannot be questioned.",
            "Election questioned only via election petition.",
            "Both A and B.",
            "Courts intervene if SEC is biased."
        ],
        correctAnswer: 2,
        explanation: "Total protection: No court interference in delimitation or election process except via petition.",
        difficulty: "medium"
    },
    {
        id: 15,

        question: "Exempted areas from Part IX:",
        options: [
            "Nagaland, Meghalaya, Mizoram.",
            "Manipur Hill Areas (District Councils).",
            "Darjeeling (Gorkha Hill Council).",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "All listed areas are exempt under Article 243-M.",
        difficulty: "medium"
    }
];

export default CHAPTER_39_MCQS;
