export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string | number;
    difficulty?: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_18_SUBTOPICS: Subtopic[] = [
    { id: 1, name: "Simon Commission & Nehru Report", status: 'commenced' },
    { id: 2, name: "Lahore Session (1929) & Purna Swaraj", status: 'commenced' },
    { id: 3, name: "Civil Disobedience Movement: Dandi & Spread", status: 'commenced' },
    { id: 4, name: "Round Table Conferences & Gandhi-Irwin Pact", status: 'commenced' },
    { id: 5, name: "Communal Award & Poona Pact (1932)", status: 'commenced' },
];

export const MODERN_CHAPTER_18_MCQS = [
    {
        id: 1,
        question: "The Simon Commission was boycotted by Indians primarily because:",
        options: [
            "It was appointed before the stipulated time of ten years",
            "All its members were Englishmen (All-White)",
            "It recommended the partition of India",
            "It was appointed by the Conservative Party"
        ],
        correctAnswer: 1,
        explanation: "It was an 'All-White' commission (7 members, all British). Indians felt insulted that they were not considered fit to decide their own constitution."
    },
    {
        id: 2,
        question: "Which of the following political parties did NOT boycott the Simon Commission?",
        options: [
            "The Indian National Congress",
            "The Muslim League (Jinnah Faction)",
            "The Justice Party (Madras) and Unionist Party (Punjab)",
            "The Hindu Mahasabha"
        ],
        correctAnswer: 2,
        explanation: "The Justice Party (Madras), Unionist Party (Punjab), and the Muslim League (Shafi faction) decided not to boycott the commission."
    },
    {
        id: 3,
        question: "The 'Nehru Report' (1928) was drafted by a committee headed by Motilal Nehru. Which of the following was the primary recommendation of this report regarding the political status of India?",
        options: [
            "Purna Swaraj (Complete Independence)",
            "Dominion Status on lines of self-governing colonies",
            "A loose federation of princely states",
            "Dyarchy at the Centre"
        ],
        correctAnswer: 1,
        explanation: "It demanded Dominion Status (not Independence), which angered the youth wing."
    },
    {
        id: 4,
        question: "Who among the following young leaders opposed the 'Dominion Status' goal of the Nehru Report and founded the 'Independence for India League'?",
        options: [
            "Bhagat Singh and Chandrashekhar Azad",
            "Jawaharlal Nehru and Subhash Chandra Bose",
            "J.P. Narayan and Achyut Patwardhan",
            "Sardar Patel and Rajendra Prasad"
        ],
        correctAnswer: 1,
        explanation: "J.L. Nehru and S.C. Bose founded the Independence for India League to pressure the Congress to accept Purna Swaraj."
    },
    {
        id: 5,
        question: "The 'Fourteen Points' of M.A. Jinnah were put forward in response to:",
        options: [
            "The Simon Commission Report",
            "The Nehru Report",
            "The Communal Award",
            "The Round Table Conference"
        ],
        correctAnswer: 1,
        explanation: "Jinnah rejected the Nehru Report (which rejected separate electorates) and proposed his 14 Points to safeguard Muslim interests."
    },
    {
        id: 6,
        question: "The 'Deepawali Declaration' (1929) by Lord Irwin promised:",
        options: [
            "Complete Independence to India",
            "That the natural issue of India’s constitutional progress was 'Dominion Status'",
            "Separate electorates for Dalits",
            "Release of all political prisoners"
        ],
        correctAnswer: 1,
        explanation: "Irwin stated that the natural goal of India was Dominion Status (to pacify Congress before RTC), but gave no timeline."
    },
    {
        id: 7,
        question: "The historic 'Purna Swaraj' resolution was passed at the Lahore Session (1929). Who presided over this session?",
        options: [
            "Mahatma Gandhi",
            "Motilal Nehru",
            "Jawaharlal Nehru",
            "Subhash Chandra Bose"
        ],
        correctAnswer: 2,
        explanation: "Jawaharlal Nehru."
    },
    {
        id: 8,
        question: "On the banks of which river was the Tricolour flag of Indian Independence hoisted on the midnight of December 31, 1929?",
        options: [
            "Sutlej",
            "Ravi",
            "Beas",
            "Indus"
        ],
        correctAnswer: 1,
        explanation: "On the banks of the Ravi."
    },
    {
        id: 9,
        question: "January 26, 1930, was celebrated as:",
        options: [
            "Republic Day",
            "Independence Day (Purna Swaraj Day)",
            "Flag Day",
            "Martyrs' Day"
        ],
        correctAnswer: 1,
        explanation: "It was celebrated as Independence Day (and the pledge of independence was read). This is why the Constitution was adopted on Jan 26, 1950."
    },
    {
        id: 10,
        question: "Gandhi started the Dandi March on March 12, 1930, from Sabarmati Ashram with how many chosen volunteers?",
        options: [
            "100",
            "78",
            "300",
            "50"
        ],
        correctAnswer: 1,
        explanation: "78 volunteers. (Gandhi was the 79th)."
    },
    {
        id: 11,
        question: "Who led the Salt Satyagraha in Tamil Nadu, marching from Tiruchirappalli to Vedaranniyam?",
        options: [
            "K. Kamaraj",
            "C. Rajagopalachari",
            "Subramaniya Siva",
            "T. Prakasam"
        ],
        correctAnswer: 1,
        explanation: "C. Rajagopalachari (Rajaji)."
    },
    {
        id: 12,
        question: "The 'Khudai Khidmatgars' (Servants of God), also known as Red Shirts, were organized by:",
        options: [
            "Maulana Azad",
            "Khan Abdul Ghaffar Khan",
            "Muhammad Ali Jinnah",
            "Hakim Ajmal Khan"
        ],
        correctAnswer: 1,
        explanation: "Badshah Khan (Frontier Gandhi). They were non-violent Pathans."
    },
    {
        id: 13,
        question: "In which region did the soldiers of the 'Garhwal Rifles' refuse to fire on unarmed demonstrators during the Civil Disobedience Movement?",
        options: [
            "Peshawar",
            "Sholapur",
            "Amritsar",
            "Delhi"
        ],
        correctAnswer: 0,
        explanation: "The Garhwal Rifles (under Chandra Singh Garhwali) refused to fire on Pathans in Peshawar."
    },
    {
        id: 14,
        question: "The 'Dharasana Salt Works' raid was a non-violent protest led by:",
        options: [
            "Mahatma Gandhi",
            "Sarojini Naidu, Imam Saheb, and Manilal Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel"
        ],
        correctAnswer: 1,
        explanation: "Gandhi was arrested before he could lead it. Sarojini Naidu and Imam Saheb took over."
    },
    {
        id: 15,
        question: "Who was the 13-year-old Naga spiritual leader who raised the banner of revolt against the British in Manipur/Nagaland and was sentenced to life imprisonment?",
        options: [
            "Rani Gaidinliu",
            "Pritilata Waddedar",
            "Kanaklata Barua",
            "Matangini Hazra"
        ],
        correctAnswer: 0,
        explanation: "Rani Gaidinliu (Title 'Rani' given by Nehru)."
    },
    {
        id: 16,
        question: "In eastern India (Bihar and Bengal), the Civil Disobedience Movement took the form of refusal to pay:",
        options: [
            "Land Revenue",
            "Chaukidari Tax",
            "Income Tax",
            "Salt Tax"
        ],
        correctAnswer: 1,
        explanation: "Chaukidari Tax (tax for village guards)."
    },
    {
        id: 17,
        question: "The 'Cunningham Circular' in Assam, against which students agitated, required students to:",
        options: [
            "Wear British uniforms",
            "Furnish a guarantee of good behavior from their parents/guardians to not participate in politics",
            "Pay a special tax",
            "Sing God Save the King"
        ],
        correctAnswer: 1,
        explanation: "It forced parents to give a guarantee of good behavior."
    },
    {
        id: 18,
        question: "The 'Forest Satyagraha' (violating forest laws) was particularly strong in:",
        options: [
            "Punjab and Sindh",
            "Central Provinces, Maharashtra, and Karnataka",
            "Bengal and Odisha",
            "Madras Presidency"
        ],
        correctAnswer: 1,
        explanation: "Central Provinces, Maharashtra, and Karnataka (Tribal belt)."
    },
    {
        id: 19,
        question: "Which of the following was NOT a term of the 'Gandhi-Irwin Pact' (Delhi Pact) of 1931?",
        options: [
            "Immediate release of all political prisoners not convicted of violence",
            "Return of confiscated lands not yet sold to third parties",
            "Right to make salt in coastal villages for personal consumption",
            "Commutation of the death sentence of Bhagat Singh, Rajguru, and Sukhdev"
        ],
        correctAnswer: 3,
        explanation: "Gandhi pleaded for Bhagat Singh's life, but Irwin refused to commute the death sentence. This is the biggest controversy of the pact."
    },
    {
        id: 20,
        question: "Who played a crucial mediation role in bringing about the Gandhi-Irwin Pact?",
        options: [
            "Motilal Nehru",
            "Tej Bahadur Sapru and M.R. Jayakar",
            "Annie Besant",
            "Madan Mohan Malaviya"
        ],
        correctAnswer: 1,
        explanation: "Sapru and Jayakar (Liberals) mediated."
    },
    {
        id: 21,
        question: "The 'Karachi Session' (1931), presided over by Sardar Patel, is famous for passing two historic resolutions on:",
        options: [
            "Purna Swaraj and Boycott",
            "Fundamental Rights and National Economic Programme",
            "Partition of India and Pakistan",
            "Non-Cooperation and Khilafat"
        ],
        correctAnswer: 1,
        explanation: "The resolution on Fundamental Rights and National Economic Programme made the Congress agenda socialist and pro-poor."
    },
    {
        id: 22,
        question: "Who drafted the resolution on Fundamental Rights and Economic Programme at the Karachi Session?",
        options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel",
            "Subhash Chandra Bose"
        ],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru drafted it (with M.N. Roy's help, arguably)."
    },
    {
        id: 23,
        question: "Why did Gandhi return empty-handed from the Second Round Table Conference (1931)?",
        options: [
            "The British refused to grant Independence",
            "The conference was deadlocked on the 'Communal Question' (Minority representation)",
            "He was arrested in London",
            "The Labour Government collapsed"
        ],
        correctAnswer: 1,
        explanation: "The British played the communal card, and the delegates could not agree on the representation of minorities."
    },
    {
        id: 24,
        question: "The 'Communal Award' announced by Ramsay MacDonald in August 1932 provided:",
        options: [
            "Separate electorates for Muslims only",
            "Separate electorates for Muslims, Sikhs, Christians, Anglo-Indians, and the Depressed Classes (Dalits)",
            "Joint electorates for all",
            "Reservation of seats for women only"
        ],
        correctAnswer: 1,
        explanation: "It extended Separate Electorates to the Depressed Classes, treating them as distinct from Hindus."
    },
    {
        id: 25,
        question: "Gandhi undertook a fast unto death in Yerwada Jail against the Communal Award because:",
        options: [
            "It gave too many seats to Muslims",
            "He feared it would create a permanent split in the Hindu society by treating Depressed Classes as a separate political entity",
            "He wanted immediate independence",
            "He wanted the release of all prisoners"
        ],
        correctAnswer: 1,
        explanation: "Gandhi saw untouchables as an integral part of Hindu society and feared this would lead to permanent fragmentation."
    },
    {
        id: 26,
        question: "The 'Poona Pact' (1932) was signed between:",
        options: [
            "Gandhi and Irwin",
            "B.R. Ambedkar and Madan Mohan Malaviya (on behalf of Caste Hindus)",
            "Gandhi and Jinnah",
            "Nehru and Ambedkar"
        ],
        correctAnswer: 1,
        explanation: "Signed by Ambedkar and Madan Mohan Malaviya (on behalf of Caste Hindus)."
    },
    {
        id: 27,
        question: "What was the outcome of the Poona Pact?",
        options: [
            "Separate electorates for Depressed Classes were accepted",
            "Separate electorates for Depressed Classes were abandoned, but reserved seats for them in the provincial legislatures were significantly increased (from 71 to 147)",
            "Depressed Classes were given separate electorates for 10 years only",
            "Dual vote system was introduced"
        ],
        correctAnswer: 1,
        explanation: "Separate electorates were abandoned. In return, the reserved seats for Dalits were doubled (71 to 147) in provincial legislatures."
    },
    {
        id: 28,
        question: "Arrange the following events in chronological order: (1) Dandi March, (2) First Round Table Conference, (3) Gandhi-Irwin Pact, (4) Karachi Session",
        options: [
            "1-2-3-4",
            "1-3-2-4",
            "2-1-3-4",
            "1-2-4-3"
        ],
        correctAnswer: 0,
        explanation: "Dandi (March 1930) -> 1st RTC (Nov 1930) -> Gandhi-Irwin Pact (March 1931) -> Karachi (March 1931)."
    },
    {
        id: 29,
        question: "Who called the Gandhi-Irwin Pact a 'surrender' and criticized Gandhi for not saving Bhagat Singh?",
        options: [
            "The Liberals",
            "The Youth and Left-wing within Congress",
            "The Muslim League",
            "The British Conservatives"
        ],
        correctAnswer: 1,
        explanation: "The Youth were angry that the death sentences of Bhagat Singh and others were not commuted."
    },
    {
        id: 30,
        question: "The 'White Paper' issued after the Third Round Table Conference formed the basis of:",
        options: [
            "The Indian Independence Act, 1947",
            "The Government of India Act, 1935",
            "The Cabinet Mission Plan",
            "The Cripps Mission"
        ],
        correctAnswer: 1,
        explanation: "Government of India Act, 1935."
    },
    {
        id: 31,
        question: "During the CDM, who was known as the 'Frontier Gandhi'?",
        options: [
            "Muhammad Ali Jinnah",
            "Khan Abdul Ghaffar Khan",
            "Maulana Azad",
            "Sheikh Abdullah"
        ],
        correctAnswer: 1,
        explanation: "Khan Abdul Ghaffar Khan."
    },
    {
        id: 32,
        question: "The 'Manipur Resolution' or the movement led by Rani Gaidinliu was primarily against:",
        options: [
            "The missionaries",
            "British rule and for the preservation of Naga culture (Heraka cult)",
            "The Kuki tribes",
            "The Japanese invasion"
        ],
        correctAnswer: 1,
        explanation: "It was an anti-British revolt combined with the revival of the Zeliangrong religion (Heraka)."
    },
    {
        id: 33,
        question: "Which session of the Congress authorized the launch of the Civil Disobedience Movement?",
        options: [
            "Calcutta (1928)",
            "Lahore (1929)",
            "Karachi (1931)",
            "Madras (1927)"
        ],
        correctAnswer: 1,
        explanation: "The Lahore Session authorized the Working Committee to launch CDM."
    },
    {
        id: 34,
        question: "The 'Magic Lantern' lectures were used by volunteers to spread awareness in villages during:",
        options: [
            "Swadeshi Movement",
            "Non-Cooperation Movement",
            "Civil Disobedience Movement",
            "Quit India Movement"
        ],
        correctAnswer: 2,
        explanation: "Used effectively in villages to show the impact of British rule during CDM."
    },
    {
        id: 35,
        question: "After the withdrawal of the Civil Disobedience Movement in 1934, Gandhi decided to:",
        options: [
            "Retire from active politics and focus on Harijan welfare and village industries",
            "Launch a new violent struggle",
            "Join the Legislative Council",
            "Leave India"
        ],
        correctAnswer: 0,
        explanation: "Gandhi resigned from the primary membership of the Congress (1934) to focus on constructive work (Harijan Sevak Sangh)."
    }
];
