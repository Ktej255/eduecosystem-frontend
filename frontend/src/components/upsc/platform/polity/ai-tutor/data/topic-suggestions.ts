// Topic-aware suggested queries for the AI Tutor ("Ask Dr. Ambedkar")
// Maps topicId → array of contextual questions

export const TOPIC_SUGGESTIONS: Record<number, string[]> = {
    // Part I: Constitutional Framework
    1: [ // Historical Background
        "What were the major demands of the Indian National Congress before independence?",
        "How did the Cabinet Mission Plan shape the Constituent Assembly?",
        "Compare the Government of India Act 1935 with the Indian Constitution.",
    ],
    2: [ // Making of the Constitution
        "What was the role of the Drafting Committee?",
        "How long did the Constituent Assembly take to frame the Constitution?",
        "What were the key debates in the Constituent Assembly?",
    ],
    3: [ // Salient Features
        "What makes the Indian Constitution both rigid and flexible?",
        "Explain the concept of 'quasi-federal' in the Indian context.",
        "How does the Indian Constitution differ from the US and UK Constitutions?",
    ],
    4: [ // Preamble
        "Is the Preamble a part of the Constitution? Cite the Kesavananda Bharati case.",
        "Can the Preamble be amended under Article 368?",
        "Explain the significance of 'Socialist' and 'Secular' added by the 42nd Amendment.",
    ],
    5: [ // Union and Its Territory
        "Can Parliament change the boundaries of a state without its consent?",
        "Explain the process under Articles 2, 3, and 4.",
        "How were new states like Telangana and Jharkhand created?",
    ],
    6: [ // Citizenship
        "Explain the different ways of acquiring Indian citizenship.",
        "Can an Indian citizen hold dual citizenship?",
        "What are the grounds for losing Indian citizenship?",
    ],
    7: [ // Fundamental Rights
        "Are Fundamental Rights available to non-citizens?",
        "When can Fundamental Rights be restricted under Article 19(2)?",
        "Explain the evolution of Article 21 through judicial interpretation.",
    ],
    8: [ // Fundamental Rights (contd)
        "What is the difference between Article 14 and Article 15?",
        "Explain the Right to Constitutional Remedies under Article 32.",
        "How has the Right to Privacy been read into Article 21?",
    ],
    9: [ // DPSP
        "Can DPSPs override Fundamental Rights? Explain the Minerva Mills case.",
        "Which DPSPs have been implemented through legislation?",
        "Compare Fundamental Rights and DPSPs in a tabular form.",
    ],
    10: [ // Fundamental Duties
        "Are Fundamental Duties legally enforceable?",
        "Which Amendment added Fundamental Duties, and how many are there now?",
        "What was the Swaran Singh Committee's recommendation?",
    ],
    11: [ // Amendment Process
        "What are the three types of amendments under Article 368?",
        "Can the basic structure be amended? Explain with the Kesavananda judgment.",
        "List the amendments that require ratification by states.",
    ],
    12: [ // Basic Structure
        "What are the key elements of the Basic Structure Doctrine?",
        "How was the Basic Structure Doctrine evolved from Golak Nath to Kesavananda?",
        "Can judicial review itself be part of the basic structure?",
    ],
    13: [ // Parliamentary System
        "What are the differences between Parliamentary and Presidential systems?",
        "Why did India choose a Parliamentary system over Presidential?",
        "Explain the concept of collective responsibility.",
    ],
    14: [ // Federal System
        "Is India truly federal or quasi-federal? Discuss.",
        "How does the Indian model of federalism differ from the US?",
        "What happens to federalism during a National Emergency?",
    ],
    16: [ // Parliament
        "What are the exclusive powers of the Lok Sabha?",
        "Explain the difference between a Money Bill and a Financial Bill.",
        "How is the Speaker of Lok Sabha elected and removed?",
    ],
    17: [ // Parliament (contd)
        "What are the parliamentary privileges and their limits?",
        "Explain the concept of 'no-confidence motion' vs 'censure motion'.",
        "What is the role of the Whip in Parliament?",
    ],
    21: [ // President
        "How is the President of India elected?",
        "What are the discretionary powers of the President?",
        "Explain the ordinance-making power under Article 123.",
    ],
    22: [ // Vice President
        "What is the election procedure for the Vice President?",
        "What role does the VP play in the Rajya Sabha?",
        "How can the Vice President be removed?",
    ],
    23: [ // Prime Minister & CoM
        "What is the difference between the Cabinet and the Council of Ministers?",
        "Can a non-MP become the Prime Minister?",
        "Explain the Kitchen Cabinet concept in Indian politics.",
    ],
    24: [ // Supreme Court
        "What is the difference between Original, Appellate, and Advisory jurisdiction?",
        "Explain the concept of Judicial Review with examples.",
        "How are Supreme Court judges appointed under the Collegium system?",
    ],
    26: [ // High Courts
        "How does the writ jurisdiction of High Courts differ from the Supreme Court?",
        "Can a High Court issue writs under Article 226 against private entities?",
        "Explain the transfer of judges between High Courts.",
    ],
    29: [ // Emergency Provisions
        "What are the three types of emergencies under the Constitution?",
        "How does a National Emergency affect Fundamental Rights?",
        "Explain the 44th Amendment's safeguards regarding Emergency.",
    ],
    32: [ // Panchayati Raj
        "What was the significance of the 73rd Constitutional Amendment?",
        "How does the three-tier Panchayati Raj system work?",
        "What is the role of the State Finance Commission?",
    ],
    33: [ // State Legislature
        "How does a State Legislature differ from Parliament?",
        "What is the role of the Legislative Council?",
        "Explain the Governor's power to reserve a bill for the President.",
    ],
    38: [ // State Legislature (contd)
        "What powers does the Speaker of a State Legislature have?",
        "How are Money Bills handled in states with a Legislative Council?",
        "What is the role of Advocate General in the state legislature?",
    ],
    39: [ // Municipalities
        "What was the significance of the 74th Constitutional Amendment?",
        "How are Ward Committees constituted?",
        "What are the functions listed in the 12th Schedule?",
    ],
    41: [ // Union Territories
        "How does the administration of UTs differ from states?",
        "What is the special status of Delhi under Article 239AA?",
        "Why are some UTs given legislatures while others are not?",
    ],
    43: [ // Election Commission
        "How is the Chief Election Commissioner appointed and removed?",
        "What is the model code of conduct?",
        "Explain the CEC and Other ECs Act, 2023 and its implications.",
    ],
    52: [ // Attorney General
        "What are the rights and limitations of the Attorney General?",
        "How does the Attorney General differ from the Solicitor General?",
        "Can the AG appear against the Government of India?",
    ],
    53: [ // Advocate General
        "How is the Advocate General appointed and removed?",
        "What are the dual roles of the Advocate General?",
        "Compare the Attorney General and Advocate General.",
    ],
    81: [ // Elections
        "Explain the First-Past-The-Post system vs Proportional Representation.",
        "What are the qualifications for contesting Lok Sabha elections?",
        "How does the EVM voting system work in India?",
    ],
    82: [ // Election Laws
        "What is the Representation of People Act, 1950 vs 1951?",
        "What are the grounds for disqualification of an MP/MLA?",
        "Explain the concept of electoral bonds and the SC verdict.",
    ],
    86: [ // Anti-Defection Law
        "What are the provisions of the Tenth Schedule?",
        "Can a merger save MLAs from disqualification?",
        "Explain the Speaker's role in anti-defection cases.",
    ],
};

// Generic fallback suggestions when no topic is selected
export const GENERIC_SUGGESTIONS: string[] = [
    "What is the Basic Structure Doctrine?",
    "Can the President veto a Constitutional Amendment?",
    "Explain Article 21 with landmark case laws.",
    "What is the difference between Article 32 and 226?",
];

/**
 * Returns topic-specific suggestions if available, otherwise generic ones.
 */
export function getSuggestionsForTopic(topicId?: number): string[] {
    if (topicId && TOPIC_SUGGESTIONS[topicId]) {
        return TOPIC_SUGGESTIONS[topicId];
    }
    return GENERIC_SUGGESTIONS;
}
