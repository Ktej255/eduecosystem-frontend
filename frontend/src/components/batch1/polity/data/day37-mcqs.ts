import type { MCQ } from './mcq-utils';

export const DAY37_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 37)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "During the British rule, which was the first Municipal Corporation established in India in 1688?",
        options: [
            "Bombay Municipal Corporation",
            "Madras Municipal Corporation",
            "Calcutta Municipal Corporation",
            "Delhi Municipal Committee"
        ],
        correctAnswer: 1, // B
        explanation: "In 1688, the first municipal corporation in India was set up at Madras.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "First Municipal Corporation", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 2,
        question: "Lord Ripon’s Resolution of 1882 is widely recognized and frequently referred to as the:",
        options: [
            "Magna Carta of Local Self-Government",
            "Urban Charter of India",
            "Municipal Declaration",
            "Foundation of District Administration"
        ],
        correctAnswer: 0, // A
        explanation: "Lord Ripon’s Resolution of 1882 has been hailed as the 'Magna Carta' of local self-government in India.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Lord Ripon", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 3,
        question: "The 74th Constitutional Amendment Act of 1992 added a new Part to the Constitution dealing with 'The Municipalities'. Which Part is it?",
        options: [
            "Part IX",
            "Part IX-A",
            "Part IX-B",
            "Part X"
        ],
        correctAnswer: 1, // B
        explanation: "The 74th Amendment Act of 1992 has added a new Part IX-A to the Constitution of India. It is entitled 'The Municipalities'.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Part IXA Addition", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 4,
        question: "The 74th Amendment Act also added a new Schedule to the Constitution that specifies the functional mandate of Municipalities. Which Schedule is this?",
        options: [
            "Eleventh Schedule",
            "Twelfth Schedule",
            "Tenth Schedule",
            "Ninth Schedule"
        ],
        correctAnswer: 1, // B
        explanation: "The Act has also added a new Twelfth Schedule to the Constitution. It contains 18 functional items of the municipalities.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Twelfth Schedule", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 5,
        question: "According to the 74th Amendment, a 'Nagar Panchayat' is established for what specific type of area?",
        options: [
            "A larger urban area",
            "A transitional area (an area in transition from a rural area to an urban area)",
            "A smaller urban area",
            "Industrial townships specifically"
        ],
        correctAnswer: 1, // B
        explanation: "A nagar panchayat is constituted for a transitional area, that is, an area in transition from a rural area to an urban area.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Nagar Panchayat Definition", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 6,
        question: "A 'Municipal Council' is established for which of the following areas?",
        options: [
            "A larger urban area",
            "A transitional area",
            "A smaller urban area",
            "A metropolitan city"
        ],
        correctAnswer: 2, // C
        explanation: "A municipal council is constituted for a smaller urban area.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Municipal Council Definition", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 7,
        question: "A 'Municipal Corporation' is established for the administration of:",
        options: [
            "A transitional area",
            "A smaller urban area",
            "A larger urban area",
            "A village"
        ],
        correctAnswer: 2, // C
        explanation: "A municipal corporation is constituted for a larger urban area.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Municipal Corporation Definition", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 8,
        question: "Under the Constitution, the formal notification specifying whether an area is a 'transitional area', a 'smaller urban area', or a 'larger urban area' is issued by the:",
        options: [
            "President of India",
            "Governor of the State",
            "Chief Minister",
            "State Election Commission"
        ],
        correctAnswer: 1, // B
        explanation: "The governor has to specify a transitional area, a smaller urban area or a larger urban area on the basis of population, density of population, revenue generated, etc.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Governor Notification Area Type", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 9,
        question: "According to the 74th Amendment Act, all the members of a municipality shall be elected:",
        options: [
            "Directly by the people of the municipal area",
            "Indirectly by an electoral college",
            "Nominated entirely by the Governor",
            "Appointed by the Mayor"
        ],
        correctAnswer: 0, // A
        explanation: "All the members of a municipality shall be elected directly by the people of the municipal area.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Direct Election Member", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 10,
        question: "The constitution of 'Wards Committees', consisting of one or more wards, within the territorial area of a municipality is mandatory for municipalities having a population of:",
        options: [
            "1 Lakh or more",
            "3 Lakhs or more",
            "5 Lakhs or more",
            "10 Lakhs or more"
        ],
        correctAnswer: 1, // B
        explanation: "There shall be constituted wards committees, consisting of one or more wards, within the territorial area of a municipality having population of three lakhs or more.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Wards Committee Population threshold", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 11,
        question: "The State Legislature may provide for the representation of persons having special knowledge or experience in municipal administration. What restriction is placed on these individuals?",
        options: [
            "They have complete voting rights in all matters.",
            "They do not have the right to vote in the meetings of the municipality.",
            "They must be retired IAS officers.",
            "They are elected by the Wards."
        ],
        correctAnswer: 1, // B
        explanation: "The state legislature may provide the representation of persons having special knowledge or experience in municipal administration without the right to vote in the meetings of municipality.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Nominated Members No Vote", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 12,
        question: "The Act mandates reservation of seats for SCs and STs in proportion to their population. What is the constitutionally mandated minimum reservation of seats for women in every municipality?",
        options: [
            "Not less than one-half (50%)",
            "Not less than one-third (33%) including women belonging to SCs and STs",
            "It is completely voluntary for the state legislature to decide",
            "25% strictly"
        ],
        correctAnswer: 1, // B
        explanation: "The act provides for the reservation of not less than one-third of the total number of seats for women (including the number of seats reserved for women belonging to the SCs and the STs).",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Women Reservation Min", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 13,
        question: "What is the standard constitutional term of office fixed for every municipality?",
        options: [
            "4 years",
            "5 years",
            "6 years",
            "Permanent body"
        ],
        correctAnswer: 1, // B
        explanation: "The act provides for a five-year term of office for every municipality.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Municipality Term", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 14,
        question: "If a municipality is dissolved before the expiration of its duration, elections to constitute the new municipality must be completed within:",
        options: [
            "1 month from the date of dissolution",
            "3 months from the date of dissolution",
            "6 months from the date of dissolution",
            "1 year from the date of dissolution"
        ],
        correctAnswer: 2, // C
        explanation: "Fresh elections to constitute a municipality shall be completed before the expiration of a period of six months from the date of its dissolution.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Election Timeline Post Dissolution", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 15,
        question: "Article 243ZD mandates the creation of a 'District Planning Committee' (DPC). What is its primary constitutional objective?",
        options: [
            "To consolidate the plans prepared by both Panchayats and Municipalities in the district and draft a development plan for the district as a whole.",
            "To consolidate plans only for the rural villages.",
            "To act as a state-level planning commission.",
            "To manage the district police budget."
        ],
        correctAnswer: 0, // A
        explanation: "Every state shall constitute at the district level, a district planning committee to consolidate the plans prepared by panchayats and municipalities in the district.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "DPC Objective", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 16,
        question: "The Constitution requires that in a 'Metropolitan Planning Committee' (MPC), a specific fraction of its members must be elected by the elected members of the municipalities and chairpersons of the panchayats in that area. What is this fraction?",
        options: [
            "Not less than one-third",
            "Not less than two-thirds (2/3)",
            "Not less than three-fourths",
            "Not less than four-fifths"
        ],
        correctAnswer: 1, // B
        explanation: "The act lays down that two-thirds of the members of a metropolitan planning committee should be elected by the elected members of the municipalities and chairpersons of the panchayats in the metropolitan area.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "MPC Elected Members Ratio", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 17,
        question: "In the functional structure of a typical Municipal Corporation, which body acts as the deliberative and legislative wing?",
        options: [
            "The Municipal Commissioner",
            "The Council (consisting of Councillors and headed by the Mayor)",
            "The Standing Committee",
            "The Ward Committee"
        ],
        correctAnswer: 1, // B
        explanation: "The council is the deliberative and legislative wing of the corporation. It consists of the Councillors directly elected by the people, as well as a few nominated persons having knowledge.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Deliberative Wing Council", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 18,
        question: "The 'Municipal Commissioner' acts as the chief executive authority of a Municipal Corporation. Typically, who appoints the Municipal Commissioner?",
        options: [
            "The Mayor of the City",
            "The State Government (generally drawing from the IAS cadre)",
            "The President of India",
            "The people through a direct election"
        ],
        correctAnswer: 1, // B
        explanation: "The municipal commissioner is responsible for the implementation of the decisions taken by the council. He is appointed by the state government and is generally a member of the IAS.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Municipal Commissioner Appointment", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 19,
        question: "In a Municipal Corporation, who is formally considered the 'First Citizen' of the city?",
        options: [
            "The Municipal Commissioner",
            "The Mayor",
            "The Chief Minister",
            "The local Member of Legislative Assembly (MLA)"
        ],
        correctAnswer: 1, // B
        explanation: "The Council is headed by a Mayor. He is assisted by a Deputy Mayor. He is elected in a majority of the states for a one-year renewable term. He is basically an ornamental figure and a formal head of the corporation. He is the first citizen of the city.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Mayor First Citizen", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 20,
        question: "The 12th Schedule, introduced by the 74th Amendment Act, specifies the functional area of Municipalities. Exactly how many functional items does it contain?",
        options: [
            "29 items (same as Panchayats)",
            "18 items",
            "22 items",
            "15 items"
        ],
        correctAnswer: 1, // B
        explanation: "The 12th Schedule contains 18 functional items placed within the purview of municipalities under Article 243-W.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "12th Schedule Item Count", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 21,
        question: "A 'Cantonment Board' is established for municipal administration for the civilian population in a cantonment area. Under whose administrative control does it function?",
        options: [
            "The State Government solely",
            "The Union Ministry of Defence",
            "The Union Ministry of Home Affairs",
            "The Governor acting at their discretion"
        ],
        correctAnswer: 1, // B
        explanation: "Unlike the other types of urban local bodies, which are created and administered by state governments, a cantonment board is created as well as administered by the central government (Defence Ministry).",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Cantonment Board Ministry", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 22,
        question: "What type of urban local body is usually established for the administration of a small town, acting essentially as a 'semi-municipal' authority (often lacking full corporation powers)?",
        options: [
            "Large industrial city",
            "Town Area Committee",
            "Port Trust",
            "Special Purpose Agency"
        ],
        correctAnswer: 1, // B
        explanation: "A town area committee is set up for the administration of a small town. It is a semi-municipal authority entrusted with a limited number of civic functions.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Town Area Committee Function", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 23,
        question: "A 'Notified Area Committee' is created for an area which is either fast developing or does not yet fulfill the conditions for the constitution of a regular municipality. How is it brought into existence?",
        options: [
            "By a detailed law passed by the state legislature",
            "By a mere notification published in the government gazette by the State Government",
            "By a Presidential decree",
            "By a judicial order of the High Court"
        ],
        correctAnswer: 1, // B
        explanation: "A notified area committee is created... by an executive resolution. It is so-called because it is created by a notification published in the government gazette.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Notified Area Committee Creation", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 24,
        question: "A 'Port Trust' is created in port areas (like Mumbai, Kolkata, Chennai) to manage the port and provide civic amenities. Unlike a standard municipality, it consists of:",
        options: [
            "Only elected members",
            "Both elected and nominated members, typically created by an Act of Parliament",
            "Only military officers",
            "Only foreign maritime experts"
        ],
        correctAnswer: 1, // B
        explanation: "Port trusts are established in the port areas... They are created by an Act of Parliament. A port trust consists of both elected and nominated members.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Port Trust Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 25,
        question: "Which constitutional body is explicitly vested with the superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to the municipalities?",
        options: [
            "Election Commission of India (ECI)",
            "State Election Commission (SEC)",
            "Municipal Commissioner",
            "District Magistrate"
        ],
        correctAnswer: 1, // B
        explanation: "Article 243ZA explicitly states that the superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the municipalities shall be vested in the State Election Commission.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "State Election Commission Art 243ZA", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 26,
        question: "The 74th Constitutional Amendment Act of 1992 officially came into force on:",
        options: [
            "January 26, 1950",
            "April 24, 1993",
            "June 1, 1993",
            "August 15, 1995"
        ],
        correctAnswer: 2, // C
        explanation: "The 74th Amendment Act of 1992 came into force on June 1, 1993. (Note: The 73rd Amendment came into force on April 24, 1993).",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "74th Amendment Enforcement Date", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 27,
        question: "Which Article of the Constitution deals precisely with the 'Constitution of Municipalities' (delineating Nagar Panchayat, Municipal Council, and Municipal Corporation)?",
        options: [
            "Article 243P",
            "Article 243Q",
            "Article 243T",
            "Article 243U"
        ],
        correctAnswer: 1, // B
        explanation: "Article 243Q provides for the constitution of three types of municipalities in every state: Nagar panchayat, Municipal council, and Municipal corporation.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Article 243Q", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 28,
        question: "If a large public enterprise (like SAIL or GAIL) sets up an industrial plant and builds a housing colony for its workers, what form of urban local body is typically created to administer civic amenities here?",
        options: [
            "Municipal Corporation",
            "Township (administered by a Town Administrator appointed by the enterprise)",
            "Cantonment Board",
            "Port Trust"
        ],
        correctAnswer: 1, // B
        explanation: "A township type of urban government is established by the large public enterprises to provide civic amenities to its staff... The enterprise appoints a town administrator.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Township Administration", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 29,
        question: "In the context of municipal administration, a 'Special Purpose Agency' (like a City Transport Board or Pollution Control Board) is distinct because it is fundamentally a:",
        options: [
            "Single-purpose (function-based) body, rather than an area-based multi-purpose body like a Municipality.",
            "Body directly elected by the entire state.",
            "Historical remnant from the British era.",
            "Private corporate entity competing with the municipality."
        ],
        correctAnswer: 0, // A
        explanation: "States have set up certain agencies to undertake designated activities... These are function-based and not area-based. They are known as 'single purpose', 'uni-purpose' or 'special purpose' agencies.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Special Purpose Agency Nature", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    },
    {
        id: 30,
        question: "The minimum age qualifying a person to be chosen as a member of a municipality is the same as that for Panchayats. It is:",
        options: [
            "18 years",
            "21 years",
            "25 years",
            "30 years"
        ],
        correctAnswer: 1, // B
        explanation: "Article 243V states that a person is qualified to be chosen as a member of a municipality if he has attained the age of 21 years.",
        level: "Easy", topic: "Municipalities", difficulty_tier: "Level_1", cognitive_tag: "Municipality Minimum Age", source_mapping: { book: "M. Laxmikanth", chapter: "Municipalities" }
    }
];
