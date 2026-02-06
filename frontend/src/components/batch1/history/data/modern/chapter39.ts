export interface Subtopic {
    id: string;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_39_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "The Challenge of Succession: 'After Nehru Who?'", status: 'done' },
    { id: '2', name: "The Food Crisis & The Green Revolution (Beginnings)", status: 'done' },
    { id: '3', name: "The 1965 India-Pakistan War", status: 'done' },
    { id: '4', name: "The Tashkent Declaration", status: 'done' },
    { id: '5', name: "Legacy of Lal Bahadur Shastri", status: 'done' },
];

export const MODERN_CHAPTER_39_MCQS: Question[] = [
    {
        id: 1,
        question: "Who was the 'Consensus Candidate' of the Congress Syndicate to succeed Nehru in 1964?",
        options: ["Morarji Desai", "Indira Gandhi", "Lal Bahadur Shastri", "Gulzarilal Nanda"],
        correctAnswer: 2,
        explanation: "K. Kamraj (Congress President) mediated the choice of Shastri.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Lal Bahadur Shastri became the PM of India in:",
        options: ["May 1964", "June 1964", "Jan 1965", "Aug 1964"],
        correctAnswer: 1,
        explanation: "Following the interim premiership of Gulzarilal Nanda.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The famous slogan 'Jai Jawan, Jai Kisan' was given by Shastri during:",
        options: ["1962 War.", "The food crisis and 1965 War.", "1947 Independence.", " Bandung Conference."],
        correctAnswer: 1,
        explanation: "To motivate both soldiers and farmers to protect and feed the nation.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'White Revolution' (Milk production) began during Shastri's tenure with the creation of:",
        options: ["Amul.", "National Dairy Development Board (NDDB).", "Mother Dairy.", "Operation Flood (Phase III)."],
        correctAnswer: 1,
        explanation: "Shastri stayed at Anand and was impressed by the cooperative model.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "What was the immediate cause of the 1965 India-Pakistan war?",
        options: ["Pakistan's 'Operation Gibraltar' (infiltration into J&K).", "A dispute over the Rann of Kutch.", "Assassination of a leader.", "A naval blockade."],
        correctAnswer: 0,
        explanation: "Pakistan attempted to incite an uprising in Kashmir.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "During the 1965 war, India opened an offensive near ______ to relieve pressure on Akhnoor.",
        options: ["Lahore Sector (Punjab border).", "Dhaka.", "Karachi.", "Ladakh."],
        correctAnswer: 0,
        explanation: "Crossing the international border at Lahore was a bold move by the Shastri govt.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 1965 war ended with a ceasefire mediated by:",
        options: ["UN Security Council.", "Tashkent Declaration (USSR).", "USA.", "China."],
        correctAnswer: 1,
        explanation: "Soviet Premier Kosygin hosted the talks in Tashkent.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Tashkent Declaration' was signed in Jan 1966 between:",
        options: ["Shastri and Ayub Khan.", "Nehru and Liaquat Ali.", "Indira Gandhi and Bhutto.", "Shastri and Yahya Khan."],
        correctAnswer: 0,
        explanation: "It restored the status quo anté and required withdrawal to pre-war positions.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Lal Bahadur Shastri passed away in which foreign city?",
        options: ["London", "Tashkent", "Moscow", "New York"],
        correctAnswer: 1,
        explanation: "He died suddenly on Jan 11, 1966, hours after signing the declaration.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Food Corporation of India' (FCI) was set up in 1965 to address:",
        options: ["Food security and procurement.", "Export of spices.", "Sugar production.", "Milk distribution."],
        correctAnswer: 0,
        explanation: "To build a buffer stock of foodgrains.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_39_MCQS.push(
    {
        id: 11,
        question: "Why did the US threaten to stop PL-480 food aid to India in 1965?",
        options: ["To force India into a peace treaty with China.", "Because India criticized US bombing in Vietnam and fought the 1965 war.", "Because India stopped paying.", "Because USA had no food."],
        correctAnswer: 1,
        explanation: "This 'ship-to-mouth' dependence led Shastri to urge people to skip one meal a week.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "Which Indian scientist was called upon by Shastri to lead the 'Green Revolution' program in 1964?",
        options: ["M.S. Swaminathan", "C.V. Raman", "V. Kurien", "Homi Bhabha"],
        correctAnswer: 0,
        explanation: "The introduction of High Yielding Variety (HYV) seeds began in this period.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Kutch Boundary Dispute' with Pakistan in early 1965 was settled by:",
        options: ["A full-scale war.", "International Arbitration (Tribunal).", "A direct deal between PMs.", "UN partition."],
        correctAnswer: 1,
        explanation: "India and Pakistan agreed to go to a tribunal after minor skirmishes.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Who served as the 'Interim Prime Minister' twice (after Nehru and after Shastri)?",
        options: ["Morarji Desai", "Gulzarilal Nanda", "V.V. Giri", "S. Radhakrishnan"],
        correctAnswer: 1,
        explanation: "He held the office for 13 days both times.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Tashkent Agreement' was criticized in India because:",
        options: ["It gave too much land to Pakistan.", "India agreed to return the strategic Haji Pir pass captured during the war.", "It did not solve the Kashmir problem permanently.", "All of the above."],
        correctAnswer: 3,
        explanation: "The return of Haji Pir was especially unpopular among the public.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "Shastri's tenure is best known for shifting the focus towards:",
        options: ["Industrial growth only.", "Agriculture and rural management (beside defense).", "Aviation.", "Only foreign policy."],
        correctAnswer: 1,
        explanation: "A pragmatic shift from Nehru's heavy-industry bias.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 17,
        question: "Which country launched the 'Patton Tanks' against India in 1965?",
        options: ["USA (provided to Pakistan)", "China", "UK", "USSR"],
        correctAnswer: 0,
        explanation: "Advanced US armor was neutralized by Indian forces in the battle of Asal Uttar.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The Battle of 'Asal Uttar' is famous for:",
        options: ["Being a naval battle.", "Creating a 'Graveyard of Patton Tanks'.", "Being fought with swords.", "Ending in a single day."],
        correctAnswer: 1,
        explanation: "A decisive tank battle in the 1965 war.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "'Verghese Kurien' was invited by whom to head the NDDB?",
        options: ["Nehru", "Shastri", "Indira Gandhi", "Patel"],
        correctAnswer: 1,
        explanation: "Shastri saw the success of Amul and wanted to replicate it nationally.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Before becoming PM, Shastri had famously resigned as ______ Minister taking moral responsibility for a railway accident.",
        options: ["Home", "Railway", "Finance", "Defense"],
        correctAnswer: 1,
        explanation: "A rare example of political integrity.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Anti-English' agitation in the south peaked in Jan-Feb 1965. Shastri handled it by:",
        options: ["Using the army.", "Passing a law to ban Tamil.", "Reiterating Nehru's assurance that English will continue as an 'associate' official language.", "Changing the capital."],
        correctAnswer: 2,
        explanation: "Peace was restored by promising that Hindi would not be forced on others.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Which leader succeeded Shastri as PM in 1966?",
        options: ["Morarji Desai", "Indira Gandhi", "Charan Singh", "Jagjivan Ram"],
        correctAnswer: 1,
        explanation: "The 'Gungi Gudiya' (Dumb Doll) as she was then called, defeated Morarji Desai in an internal party election.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'National Seeds Corporation' (1963) began expanding its role under Shastri for:",
        options: ["Hybrid seeds distribution.", "Forestry.", "Cotton export.", "Fruit farming."],
        correctAnswer: 0,
        explanation: "A vital step for agricultural modernization.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The '1965 War' demonstrated that in terms of conventional warfare:",
        options: ["India was vulnerable.", "Indian army had successfully recovered from the 1962 trauma.", "Pakistan's technology (US tanks) was unbeatable.", "China would intervene again."],
        correctAnswer: 1,
        explanation: "Restored the morale of the Indian Armed Forces.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 25,
        question: "Shastri was posthumously awarded which highest honor?",
        options: ["Padma Shri", "Bharat Ratna (the first posthumous award)", "Param Vir Chakra", "Nobel Peace Prize"],
        correctAnswer: 1,
        explanation: "Awarded in 1966.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "What was 'Operation Gibraltar'?",
        options: ["An Indian plan to take Lahore.", "A Pakistani plan to land troops in Bombay.", "A Pakistani plan to send thousands of civilian-clothed regulars into Kashmir to start a rebellion.", "A naval exercise."],
        correctAnswer: 2,
        explanation: "Failed because the locals in Kashmir reported the infiltrators to the Indian army.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Why did Shastri urge Indians to keep 'Monday fast'?",
        options: ["For religious reasons.", "To mitigate the acute food shortage and save grains.", "To promote unity.", "None of the above."],
        correctAnswer: 1,
        explanation: "A sign of a leader who practiced what he preached (he and his family also skipped meals).",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "The 'Tashkent Agreement' required India to return which important captured peak in Kargil sector?",
        options: ["Tiger Hill", "Haji Pir Pass", "Tololing", "Siachen Glacier"],
        correctAnswer: 1,
        explanation: "Giving up Haji Pir remains a point of intense strategic debate.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Border Security Force' (BSF) was created in which year following the 1965 war experience?",
        options: ["1947", "1962", "1965", "1971"],
        correctAnswer: 2,
        explanation: "To manage the peaceful borders and free the army for combat.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Which group of Congress leaders were known as 'The Syndicate' and influenced both successions?",
        options: ["The Socialists", "Powerful regional satraps like Kamraj, S.K. Patil, Atulya Ghosh.", "The Gandhians.", "The Pro-US lobby."],
        correctAnswer: 1,
        explanation: "They acted as the kingmakers of the mid-1960s.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Indira Gandhi's father was Nehru. Who was Shastri's father?",
        options: ["A lawyer in Allahabad.", "A school teacher (Sharada Prasad Srivastava).", "A king of a state.", "A British clerk."],
        correctAnswer: 1,
        explanation: "Shastri came from a very modest background in Varanasi.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The title 'Shastri' was given to him by:",
        options: ["The British.", "The Kashi Vidyapeeth (after graduation).", "Gandhiji.", "The people of India."],
        correctAnswer: 1,
        explanation: "It signifies a scholar and became his surname.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Kashmir' issue in 1965 was seen by Ayub Khan as his 'last chance' to:",
        options: ["Join NAM.", "Settle the score with India before it became too strong militarily.", "Become the PM of India.", "Stop the food crisis."],
        correctAnswer: 1,
        explanation: "India's post-1962 modernization was making it stronger every year.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 34,
        question: "What was the 'Great Divide' of 1966 in the economy?",
        options: ["A 100% growth.", "A major devaluation of the Rupee (under US pressure).", "A ban on currency.", "None of the above."],
        correctAnswer: 1,
        explanation: "The rupee was devalued to encourage exports during the crisis.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "Shastri's slogan 'Jai Jawan Jai Kisan' reflects a shift from ______ to ______ priority.",
        options: ["Industry; Agriculture & Defense", "Peace; War", "English; Hindi", "Socialism; Capitalism"],
        correctAnswer: 0,
        explanation: "A re-balancing of the national priorities.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    }
);
