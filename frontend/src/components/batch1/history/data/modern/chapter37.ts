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

export const MODERN_CHAPTER_37_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "The Challenge of Universal Adult Franchise", status: 'done' },
    { id: '2', name: "The Election Commission & First CEC (Sukumar Sen)", status: 'done' },
    { id: '3', name: "Electoral Process & Logistics of 1951-52", status: 'done' },
    { id: '4', name: "Political Parties & Manifestos", status: 'done' },
    { id: '5', name: "Analysis of Results & Congress Dominance", status: 'done' },
];

export const MODERN_CHAPTER_37_MCQS: Question[] = [
    {
        id: 1,
        question: "The first general elections in India were held between:",
        options: ["Oct 1951 – Feb 1952", "Jan 1950 – May 1950", "Aug 1947 – Dec 1947", "Nov 1952 – Jan 1953"],
        correctAnswer: 0,
        explanation: "The process took several months due to the vast geography and first-time logistics.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who was the 'First Chief Election Commissioner' (CEC) of India?",
        options: ["T.N. Seshan", "Sukumar Sen", "K.V.K. Sundaram", "S.P. Sen Verma"],
        correctAnswer: 1,
        explanation: "An ICS officer who conducted the first two general elections (1952, 1957).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Universal Adult Franchise was a 'leap of faith' because:",
        options: ["Only 15% of the 17.6 crore voters were literate.", "Voters were too rich.", "British had banned it.", "It was only for men."],
        correctAnswer: 0,
        explanation: "Skeptics doubted if a poor, illiterate population could handle democracy.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "How many Lok Sabha seats were contested in the first general elections?",
        options: ["489", "543", "300", "500"],
        correctAnswer: 0,
        explanation: "489 seats were up for election.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Which party emerged as the single largest opposition in the first Lok Sabha?",
        options: ["Bharatiya Jana Sangh", "Communist Party of India (CPI)", "Socialist Party", "Kisan Mazdoor Praja Party (KMPP)"],
        correctAnswer: 1,
        explanation: "CPI won 16 seats, becoming the largest opposition group.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Bharatiya Jana Sangh' was founded in 1951 by:",
        options: ["Shyama Prasad Mukherjee", "Deendayal Upadhyaya", "Atal Bihari Vajpayee", "Balraj Madhok"],
        correctAnswer: 0,
        explanation: "S.P. Mukherjee founded it after resigning from the Nehru cabinet.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 'Kisan Mazdoor Praja Party' (KMPP) was led by:",
        options: ["Acharya Kripalani", "Jayaprakash Narayan", "Ram Manohar Lohia", "Jawaharlal Nehru"],
        correctAnswer: 0,
        explanation: "He left the Congress to form the KMPP.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Socialist Party' (1948) was led by:",
        options: ["Jayaprakash Narayan and Ram Manohar Lohia", "S.A. Dange", "C. Rajagopalachari", "B.R. Ambedkar"],
        correctAnswer: 0,
        explanation: "The Congress Socialist Party members left to form an independent party.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Scheduled Castes Federation', which contested the 1952 elections, was founded by:",
        options: ["Jagjivan Ram", "Dr. B.R. Ambedkar", "Jyotiba Phule", "Kanti Lal"],
        correctAnswer: 1,
        explanation: "Ambedkar lost his own seat from Bombay in the first elections.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The results of the 1952 elections showed a 'Congress Dominance' primarily because:",
        options: ["Other parties were banned.", "The Congress inherited the legacy of the freedom struggle and had a nationwide organization.", "There was massive rigging.", "Only wealthy people voted."],
        correctAnswer: 1,
        explanation: "The 'Congress System' was a broad umbrella coalition.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    }
];

MODERN_CHAPTER_37_MCQS.push(
    {
        id: 11,
        question: "Approximately what percentage of the population was literate during the 1952 elections?",
        options: ["5%", "15%", "50%", "80%"],
        correctAnswer: 1,
        explanation: "Vast illiteracy required innovative methods like use of symbols.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "How did the illiterate voters identify candidates in 1952?",
        options: ["By reading their names.", "Each candidate/party was assigned a symbol, and there was a separate ballot box for each candidate in the booth.", "By shouting the name.", "By matching photos."],
        correctAnswer: 1,
        explanation: "Voters would put their ballot paper into the box with their preferred candidate's symbol.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Why were 'nearly 2.8 million women' names struck off the electoral rolls in 1952?",
        options: ["They refused to vote.", "They failed to provide their own names, identifying themselves only as 'so-and-so's wife' or 'daughter'.", "Voting was not for women.", "They lacked IDs."],
        correctAnswer: 1,
        explanation: "Sukumar Sen insisted on personal entry of names and deleted those who refused to break custom.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Which party won the maximum seats in the first General Elections?",
        options: ["Communist Party", "Socialist Party", "Indian National Congress", "Jana Sangh"],
        correctAnswer: 2,
        explanation: "Congress won 364 out of 489 seats.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The first democratically elected communist government in any Indian state (1957) was in:",
        options: ["West Bengal", "Kerala", "Tripura", "Andhra Pradesh"],
        correctAnswer: 1,
        explanation: "Led by E.M.S. Namboodiripad.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Election Commission' of India is a:",
        options: ["Statutory Body.", "Constitutional Body.", "NGO.", "Department of Home Ministry."],
        correctAnswer: 1,
        explanation: "Established under Article 324.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who was the main architect of the 'Hindu Code Bill', which was a major election issue in 1952?",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Vallabhbhai Patel", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "Ambedkar resigned over the delay in passing the bill.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The symbols assigned to the first two major parties were:",
        options: ["Congress: Two Bullocks; CPI: Sickle and Ears of Corn", "Congress: Hand; CPI: Star", "Congress: Lotus; CPI: Wheel", "None of the above"],
        correctAnswer: 0,
        explanation: "Symbols were chosen to be recognizable to rural voters.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Swatantra Party' (1959), which became a major opposition later, was founded by:",
        options: ["C. Rajagopalachari", "Minoo Masani", "N.G. Ranga", "All of the above"],
        correctAnswer: 3,
        explanation: "A conservative party advocating free market and limited state role.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The first General Elections were based on the Principle of:",
        options: ["Restricted Franchise.", "Universal Adult Franchise.", "Communal Electorates.", "Appointment by Governor."],
        correctAnswer: 1,
        explanation: "One of the boldest experiments in democratic history.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 21,
        question: "How many state assemblies had elections alongside the first Lok Sabha?",
        options: ["None", "All participating states", "Only 5 states", "Only big states"],
        correctAnswer: 1,
        explanation: "Simultaneous elections were the norm in the early years.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The 'Indo-American' community helped in providing what for the 1952 elections?",
        options: ["Electronic Voting Machines.", "Refined steel for ballot boxes.", "Indelible ink.", "Trained pilots."],
        correctAnswer: 1,
        explanation: "Actually, 20 million ballot boxes were made using high quality steel in India (Godrej).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Indelible Ink' used in Indian elections was developed by:",
        options: ["CSIR-NPL (National Physical Laboratory).", "NASA.", "British Royal Lab.", "TATA."],
        correctAnswer: 0,
        explanation: "A key innovation to prevent double voting.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "What was the 'Total Voter Turnout' in the first general elections?",
        options: ["10%", "45.7%", "70%", "90%"],
        correctAnswer: 1,
        explanation: "Considering the conditions, 45% was a significant achievement.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The 1952 elections proved that:",
        options: ["Democracy can happen anywhere.", "Illiteracy is no bar to political awareness and participation.", "Peaceful transfer of power is possible in a developing nation.", "All of the above."],
        correctAnswer: 3,
        explanation: "It was a global landmark for democracy.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "Who was the 'Prime Minister' who led the Congress to victory in 1952?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi"],
        correctAnswer: 1,
        explanation: "His charismatic leadership was the main factor.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Bharatiya Jana Sangh' focused its manifesto on:",
        options: ["Akhand Bharat (United India).", "Socialism.", "Communist revolution.", "Free trade with Pakistan."],
        correctAnswer: 0,
        explanation: "They also advocated for the replacement of English with Hindi and protection of cows.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'Praja Socialist Party' (PSP) was formed by the merger of:",
        options: ["Socialist Party and KMPP (1952-53).", "CPI and Congress.", "Jana Sangh and Swatantra.", "None of the above."],
        correctAnswer: 0,
        explanation: "Merger of Jayaprakash Narayan's socialists and Kripalani's group.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Elections in which constituency were held last, in May 1952, due to snow?",
        options: ["Ladakh and Chini (HP)", "Sikkim", "Nagaland", "Assam"],
        correctAnswer: 0,
        explanation: "The high altitude regions had delayed voting.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Congress' vote share versus seat share in 1952 showed:",
        options: ["It won 74% seats with only 45% of votes.", "It won 100% seats.", "It won fewer seats than votes.", "Votes and seats were equal."],
        correctAnswer: 0,
        explanation: "A feature of the 'First Past the Post' system.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 31,
        question: "The 1952 elections were successfully completed despite the fear of:",
        options: ["Communal riots.", "Naxalite violence.", "Economic collapse.", "All of the above."],
        correctAnswer: 0,
        explanation: "Communal tension was still high after partition.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "Which of the following describes the first general elections as 'the biggest gamble in history'?",
        options: ["Sukumar Sen", "The British editors and skeptics", "Nehru", "Ambedkar"],
        correctAnswer: 1,
        explanation: "Many international observers doubted India's capability.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "How many times 'Indelible Ink' can be used on a voter's finger?",
        options: ["Once.", "Multiple times.", "Only on Left hand.", "None of the above."],
        correctAnswer: 0,
        explanation: "Applied to the left forefinger to mark participation.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The first speaker of the Lok Sabha G.V. Mavalankar belonged to which state?",
        options: ["Maharashtra", "Gujarat (Ahmedabad)", "Madras", "Delhi"],
        correctAnswer: 1,
        explanation: "He was from Ahmedabad.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "Sukumar Sen's legacy in elections also included organizing elections in:",
        options: ["Pakistan.", "Sudan (the first there).", "Nepal.", "Sri Lanka."],
        correctAnswer: 1,
        explanation: "His expertise was utilized by other new nations.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
);
