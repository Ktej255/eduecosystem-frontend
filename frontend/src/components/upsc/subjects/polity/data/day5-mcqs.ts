import type { MCQ } from './mcq-utils';

export const DAY5_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 5)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Under Part I of the Constitution, which Articles directly deal with the Union and its territory?",
        options: ["Articles 1 to 4", "Articles 5 to 11", "Articles 12 to 35", "Articles 36 to 51"],
        correctAnswer: 0, // A
        explanation: "Articles 1 to 4 under Part I of the Constitution deal with the Union and its territory.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 2,
        question: "According to Article 1 of the Constitution, India, that is Bharat, shall be a:",
        options: ["Federation of States", "Union of States", "Confederation of States", "Unitary State"],
        correctAnswer: 1, // B
        explanation: "Article 1 describes India, that is, Bharat as a 'Union of States' rather than a 'Federation of States'.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 3,
        question: "Why did Dr. B.R. Ambedkar prefer the phrase 'Union of States' over 'Federation of States'?",
        options: [
            "Because Indian states had strongly demanded a Unitary system.",
            "Because the Indian Federation is not the result of an agreement among the states, and the states have no right to secede from the federation.",
            "Because the British Parliament recommended the term 'Union'.",
            "Because it was copied directly from the American Constitution."
        ],
        correctAnswer: 1, // B
        explanation: "Dr. Ambedkar preferred 'Union of States' to indicate two things: (a) Indian Federation is not the result of an agreement among states (like the American federation); and (b) states have no right to secede from the federation.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 4,
        question: "According to Article 1, the territory of India can be classified into how many categories?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: 1, // B
        explanation: "The territory of India is classified into three categories: (1) Territories of the states; (2) Union territories; and (3) Territories that may be acquired by the Government of India at any time.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 5,
        question: "Which of the following expressions is conceptually wider according to the Constitution?",
        options: ["Union of India", "Territory of India", "Both mean exactly the same", "Federation of India"],
        correctAnswer: 1, // B
        explanation: "The 'Territory of India' is a wider expression than the 'Union of India' because the latter includes only states, while the former includes not only the states but also union territories and acquired territories.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 6,
        question: "Which Article grants Parliament the power to admit into the Union of India, or establish, new states on such terms and conditions as it thinks fit?",
        options: ["Article 1", "Article 2", "Article 3", "Article 4"],
        correctAnswer: 1, // B
        explanation: "Article 2 empowers the Parliament to admit into the Union of India, or establish, new states on such terms and conditions as it thinks fit (it relates to the admission or establishment of new states that are NOT part of the Union of India).",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 7,
        question: "Which Article authorizes the Parliament to form a new state by separation of territory from any state or by uniting two or more states?",
        options: ["Article 1", "Article 2", "Article 3", "Article 4"],
        correctAnswer: 2, // C
        explanation: "Article 3 deals with the internal re-adjustment inter se of the territories of the constituent states of the Union of India (forming new states, altering boundaries/names of existing states).",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 8,
        question: "Under Article 3, a bill contemplating changes in the boundary or name of a state can be introduced in the Parliament only with the prior recommendation of:",
        options: ["The Prime Minister", "The President", "The Chief Minister of the concerned State", "The Chief Justice of India"],
        correctAnswer: 1, // B
        explanation: "A bill contemplating the changes under Article 3 can be introduced in the Parliament only with the prior recommendation of the President.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 9,
        question: "When the President refers an Article 3 bill to the state legislature for expressing its views, is the Parliament bound by the views of the state legislature?",
        options: [
            "Yes, the Parliament must act according to the state's views.",
            "Yes, but only if the state passes a unanimous resolution.",
            "No, the President (or Parliament) is not bound by the views of the state legislature and may either accept or reject them.",
            "No, but the Parliament must provide written justification if it rejects the views."
        ],
        correctAnswer: 2, // C
        explanation: "The President (or Parliament) is not bound by the views of the state legislature and may either accept or reject them, even if the views are received in time.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 10,
        question: "Because Parliament can unilaterally alter the boundaries of states, the Indian Constitution describes India as:",
        options: [
            "An indestructible union of indestructible states.",
            "A destructible union of destructible states.",
            "An indestructible union of destructible states.",
            "A destructible union of indestructible states."
        ],
        correctAnswer: 2, // C
        explanation: "The territorial integrity or continued existence of any state is not guaranteed. Hence, India is rightly described as 'an indestructible union of destructible states'. (Unlike the USA, which is an 'indestructible union of indestructible states').",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 11,
        question: "According to Article 4, laws made for admission or establishment of new states (under Article 2) and formation of new states (under Article 3):",
        options: [
            "Are considered as amendments of the Constitution under Article 368.",
            "Are NOT to be considered as amendments of the Constitution under Article 368.",
            "Can only be passed by a special majority in Parliament.",
            "Require ratification by half of the Indian states."
        ],
        correctAnswer: 1, // B
        explanation: "Article 4 itself declares that laws made for admission or establishment of new states (Art 2) and formation of new states (Art 3) are NOT to be considered as amendments of the Constitution under Article 368. Such laws can be passed by a simple majority.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 12,
        question: "Does the power of Parliament to diminish the area of a state (under Article 3) include the power to cede Indian territory to a foreign country?",
        options: [
            "Yes, it can be done by a simple majority under Article 3.",
            "No, it requires an executive order by the President.",
            "No, Indian territory can be ceded to a foreign state only by amending the Constitution under Article 368.",
            "No, Indian territory can never be ceded under any circumstance."
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court in 1960 (Berubari Union case) ruled that the power of Parliament to diminish the area of a state (under Article 3) does not cover cession of Indian territory to a foreign country. This requires a constitutional amendment under Art. 368.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 13,
        question: "However, in 1969, the Supreme Court ruled that settlement of a 'boundary dispute' between India and another country does not require a constitutional amendment. It can be done by:",
        options: [
            "A simple majority vote in Lok Sabha.",
            "A referendum in the border state.",
            "Executive action.",
            "Ratification by the border state's legislature."
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court ruled (in 1969) that settlement of a boundary dispute between India and another country does not require a constitutional amendment. It can be done by executive action as it does not involve cession of Indian territory.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 14,
        question: "Which Constitutional Amendment Act was enacted to give effect to the acquiring of certain territories by India and transfer of certain other territories to Bangladesh in 2015?",
        options: ["98th Amendment Act", "99th Amendment Act", "100th Amendment Act", "101st Amendment Act"],
        correctAnswer: 2, // C
        explanation: "The 100th Constitutional Amendment Act (2015) was enacted to give effect to the acquiring of certain territories by India and transfer of certain other territories to Bangladesh.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 15,
        question: "At the time of independence, India had two categories of political units—the British provinces and the princely states. How many princely states were situated within the geographical boundaries of India?",
        options: ["296", "389", "552", "600"],
        correctAnswer: 2, // C
        explanation: "Of the 552 princely states situated within the geographical boundaries of India, 549 joined India and the remaining 3 (Hyderabad, Junagadh, Kashmir) initially refused.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 16,
        question: "Which princely state was integrated into India by means of a 'police action'?",
        options: ["Junagadh", "Kashmir", "Hyderabad", "Travancore"],
        correctAnswer: 2, // C
        explanation: "Hyderabad was integrated by means of police action. (Junagadh by referendum, Kashmir by the Instrument of Accession).",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 17,
        question: "In 1950, the Constitution contained a four-fold classification of the states of the Indian Union (Part A, B, C, and D states). Which Part consisted of only one territory—the Andaman and Nicobar Islands?",
        options: ["Part A", "Part B", "Part C", "Part D"],
        correctAnswer: 3, // D
        explanation: "Part D territories consisted solely of the Andaman and Nicobar Islands.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 18,
        question: "There was a massive demand for the reorganization of states on a linguistic basis. The Government appointed the Linguistic Provinces Commission in June 1948, chaired by:",
        options: ["Jawaharlal Nehru", "S.K. Dhar", "Fazl Ali", "Potti Sriramulu"],
        correctAnswer: 1, // B
        explanation: "In June 1948, the Government appointed the Linguistic Provinces Commission under the chairmanship of S.K. Dhar to examine the feasibility of organizing states on a linguistic basis.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 19,
        question: "What was the recommendation of the Dhar Commission (1948) regarding the reorganization of states?",
        options: [
            "It strongly recommended the reorganization of states on linguistic basis.",
            "It recommended the reorganization of states on the basis of administrative convenience rather than linguistic factor.",
            "It recommended maintaining the exact boundaries of British provinces permanently.",
            "It recommended forming states based exclusively on religious lines."
        ],
        correctAnswer: 1, // B
        explanation: "The Dhar Commission recommended the reorganization of states on the basis of administrative convenience rather than linguistic factor.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 20,
        question: "Following widespread resentment against the Dhar Commission report, another committee was formed in December 1948 comprising Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya. What was this committee formally known as?",
        options: ["Linguistic Resolution Committee", "JVP Committee", "Fazl Ali Commission", "States Reorganization Committee"],
        correctAnswer: 1, // B
        explanation: "It was popularly known as the JVP Committee (after the initials of Jawaharlal, Vallabhbhai, Pattabhi). It formally rejected language as the basis for reorganization.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 21,
        question: "In October 1953, the Government of India was forced to create the first linguistic state by separating the Telugu-speaking areas from the Madras state. Which state was this?",
        options: ["Karnataka", "Kerala", "Andhra state", "Tamil Nadu"],
        correctAnswer: 2, // C
        explanation: "The Government was forced to create the first linguistic state, known as Andhra state, by separating the Telugu-speaking areas from the Madras state.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 22,
        question: "Which commission, appointed in 1953, finally accepted language as the basis of reorganization of states but rejected the theory of 'one language-one state'?",
        options: ["Dhar Commission", "JVP Committee", "Fazl Ali Commission", "Sarkaria Commission"],
        correctAnswer: 2, // C
        explanation: "The Fazl Ali Commission (States Reorganisation Commission) broadly accepted language as the basis of reorganization of states but rejected the theory of 'one language-one state'.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 23,
        question: "To implement the recommendations of the Fazl Ali Commission, the States Reorganisation Act was passed in 1956. This act led to the creation of how many States and Union Territories on November 1, 1956?",
        options: ["14 States and 6 Union Territories", "16 States and 3 Union Territories", "28 States and 7 Union Territories", "15 States and 5 Union Territories"],
        correctAnswer: 0, // A
        explanation: "By the States Reorganisation Act (1956) and the 7th Constitutional Amendment Act (1956), the four-fold classification was abolished, and 14 states and 6 union territories were created on November 1, 1956.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 24,
        question: "Which was the 15th state created in the Indian Union after 1956, by dividing the bilingual state of Bombay in 1960?",
        options: ["Maharashtra", "Gujarat", "Andhra Pradesh", "Karnataka"],
        correctAnswer: 1, // B
        explanation: "In 1960, the bilingual state of Bombay was divided into two separate states—Maharashtra for Marathi-speaking people and Gujarat for Gujarati-speaking people. Gujarat was the 15th state.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 25,
        question: "Dadra and Nagar Haveli was ruled by which foreign colonial power until its liberation in 1954?",
        options: ["French", "Portuguese", "British", "Dutch"],
        correctAnswer: 1, // B
        explanation: "The Portuguese ruled Dadra and Nagar Haveli until its liberation in 1954.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 26,
        question: "India acquired Goa, Daman and Diu from the Portuguese in 1961 by means of:",
        options: ["A peaceful diplomatic treaty", "Police action", "A constitutional amendment referendum", "A ruling by the International Court of Justice"],
        correctAnswer: 1, // B
        explanation: "India acquired these three territories from the Portuguese by means of a police action in 1961.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 27,
        question: "Puducherry comprises the former French establishments in India. Which of the following is NOT one of the territories comprising Puducherry?",
        options: ["Karaikal", "Mahe", "Yanam", "Diu"],
        correctAnswer: 3, // D
        explanation: "The territory of Puducherry comprises the former French establishments in India known as Puducherry, Karaikal, Mahe, and Yanam. Diu was Portuguese.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 28,
        question: "Which of the following states was briefly made an 'associate state' of the Indian Union and was granted full statehood in 1975 by the 36th Amendment Act?",
        options: ["Nagaland", "Arunachal Pradesh", "Sikkim", "Goa"],
        correctAnswer: 2, // C
        explanation: "Sikkim was briefly made an 'associate state' by the 35th Amendment Act (1974) and then granted full statehood by the 36th Amendment Act (1975), becoming the 22nd state of India.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 29,
        question: "In the year 2000, three new states were created: Chhattisgarh, Uttarakhand, and Jharkhand. They were carved out from which states respectively?",
        options: [
            "Madhya Pradesh, Uttar Pradesh, and Bihar",
            "Bihar, Madhya Pradesh, and Uttar Pradesh",
            "Uttar Pradesh, Bihar, and Madhya Pradesh",
            "Maharashtra, Himachal Pradesh, and West Bengal"
        ],
        correctAnswer: 0, // A
        explanation: "In 2000, three more new states of Chhattisgarh, Uttarakhand and Jharkhand were created out of the territories of Madhya Pradesh, Uttar Pradesh and Bihar respectively.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    },
    {
        id: 30,
        question: "Which was the 29th state of the Indian Union, created in 2014 by bifurcating the State of Andhra Pradesh? (Note: It is now the 28th state after J&K reorganization)",
        options: ["Seemandhra", "Rayalaseema", "Telangana", "Vidarbha"],
        correctAnswer: 2, // C
        explanation: "In 2014, the new state of Telangana came into existence as the 29th state of the Indian Union. It was carved out of the territories of Andhra Pradesh.",
        level: "Easy", topic: "Union and its Territory", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Union and its Territory" }
    }
];
