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

export const MODERN_CHAPTER_27_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Administrative Policies (Centralization vs Decentralization)", status: 'done' },
    { id: '2', name: "Policy towards Princely States (Recap)", status: 'done' },
    { id: '3', name: "Foreign Policy (Afghanistan, Burma, Tibet)", status: 'done' },
    { id: '4', name: "Social & Cultural Policy", status: 'done' },
    { id: '5', name: "Divide and Rule Strategy", status: 'done' },
];

export const MODERN_CHAPTER_27_MCQS: Question[] = [
    {
        id: 1,
        question: "The British policy of 'Divide and Rule' was most prominently implemented after which major event?",
        options: ["Battle of Plassey", "Revolt of 1857", "Partition of Bengal", "Formation of INC"],
        correctAnswer: 1,
        explanation: "Post 1857, the British decided to drive a wedge between Hindus and Muslims to prevent a united front.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 2,
        question: "Which of the following describes the British attitude towards social reforms after 1857?",
        options: ["Highly proactive and progressive.", "Caution and withdrawal (policy of non-intervention to avoid offending conservative elements).", "Complete ban on all Indian traditions.", "Focusing only on female education."],
        correctAnswer: 1,
        explanation: "The British feared that social reforms (like Sati abolition) had triggered the 1857 revolt, so they became conservative.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "The 'Durand Line' (1893) was demarcated to define the boundary between:",
        options: ["India and China", "India and Afghanistan", "India and Burma", "India and Tibet"],
        correctAnswer: 1,
        explanation: "British India and Afghanistan (Mortimer Durand).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Which Viceroy followed the policy of 'Masterly Inactivity' towards Afghanistan?",
        options: ["Lord Lytton", "John Lawrence", "Lord Curzon", "Lord Dufferin"],
        correctAnswer: 1,
        explanation: "John Lawrence (also followed by Mayo and Northbrook).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Forward Policy' towards Afghanistan, which led to the Second Anglo-Afghan War, was a signature policy of:",
        options: ["Lord Ripon", "Lord Lytton", "Lord Curzon", "Lord Lansdowne"],
        correctAnswer: 1,
        explanation: "Lord Lytton.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Treaty of Gandamak' (1879) was signed between the British and:",
        options: ["The Afghans", "The Burmese", "The Sikhs", "The Gurkhas"],
        correctAnswer: 0,
        explanation: "Afghans (after the Second Anglo-Afghan War).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The First Anglo-Burmese War (1824-26) ended with the Treaty of:",
        options: ["Treaty of Sagaing", "Treaty of Yandabo", "Treaty of Rangoon", "Treaty of Mandalay"],
        correctAnswer: 1,
        explanation: "Treaty of Yandabo (1826).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Younghusband Expedition' (1904) was sent to:",
        options: ["Nepal", "Tibet", "Bhutan", "Sikkim"],
        correctAnswer: 1,
        explanation: "Curzon sent it to Tibet due to fears of Russian influence.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Policy of Equal Federation' (1935-1947) refers to:",
        options: ["The British treating all states as equal to the Crown.", "The attempt to create a federation including both British Provinces and Princely States.", "Granting equal status to Hindus and Muslims.", "The decentralization of finances."],
        correctAnswer: 1,
        explanation: "GOI Act 1935 proposed a federation (which never came into being).",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "The 'McMahon Line' (1914) defines the boundary between:",
        options: ["India and Pakistan", "India and China (Eastern Sector)", "India and Nepal", "India and Afghanistan"],
        correctAnswer: 1,
        explanation: "India and China (Tibet-Shimla Convention).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    }
];
// Note: Extending with more MCQs to reach 35
MODERN_CHAPTER_27_MCQS.push(
    {
        id: 11,
        question: "Under the British, the 'District Officer' (Collector) became the 'kingpin' of local administration. Who introduced this office in its modern form?",
        options: ["Lord Cornwallis", "Warren Hastings", "William Bentinck", "Lord Dalhousie"],
        correctAnswer: 1,
        explanation: "Warren Hastings in 1772.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The British policy towards the 'Muslims' underwent a significant shift after 1870 (following the publication of W.W. Hunter's 'The Indian Mussalmans'). This shift was from:",
        options: ["Hostility to Patronage.", "Patronage to Hostility.", "Neutrality to Persecution.", "Assimilation to Exclusion."],
        correctAnswer: 0,
        explanation: "Initially, the British blamed Muslims for 1857. Later, they decided to patronize them to use as a counter-weight to the Congress.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 13,
        question: "Lord Lytton's 'Statutory Civil Service' (1878-79) proved to be a failure because:",
        options: ["Indians didn't join.", "The British officers resigned.", "It was based on nomination from high-status families rather than merit, and the positions were socially inferior.", "The salary was too high."],
        correctAnswer: 2,
        explanation: "It was a way to keep high-caste Indians separate from the regular ICS.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The first Indian woman to graduate from Calcutta University and address the INC session (1890) was:",
        options: ["Sarojini Naidu", "Kadambini Ganguly", "Annie Besant", "Pandita Ramabai"],
        correctAnswer: 1,
        explanation: "Kadambini Ganguly.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "In the 19th century, the British justified their rule in India through the theory of:",
        options: ["Socialism", "Democratic Peace", "White Man’s Burden / Civilizing Mission", "Marxism"],
        correctAnswer: 2,
        explanation: "The belief that they were in India to civilize the 'backward' natives.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "The 'Grand Delhi Durbar' of 1877 was organized to:",
        options: ["Celebrate the victory in the Afghan war.", "Proclaim Queen Victoria as 'Kaiser-i-Hind' (Empress of India).", "End the famine.", "Coronate King George V."],
        correctAnswer: 1,
        explanation: "By Lord Lytton while South India was facing a severe famine.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who was the 'Secretary of State for India'?",
        options: ["An official sitting in Calcutta.", "A member of the British Cabinet sitting in London.", "A representative of the Marathas.", "The head of the East India Company."],
        correctAnswer: 1,
        explanation: "Created by the 1858 Act, a British Cabinet minister in London.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Which among the following was the 'Last' major annexation by the British under the Policy of Annexation?",
        options: ["Punjab", "Lower Burma", "Awadh", "Nagpur"],
        correctAnswer: 2,
        explanation: "Awadh (1856). After 1857, annexation of native states stopped.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Indian Forest Act' of 1865 gave the government the right to:",
        options: ["Protect wildlife.", "Declare any land covered with trees as government forest.", "Give land to tribals.", "Export timber for free."],
        correctAnswer: 1,
        explanation: "It was the start of state control over forests for commercial exploitation (railways).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Age of Consent Act' (1891) raised the age of consent for marriage for girls from 10 to:",
        options: ["12", "14", "16", "18"],
        correctAnswer: 0,
        explanation: "12 years (Behramji Malabari's efforts).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Sarda Act' (1929) fixed the minimum age for marriage for boys and girls at:",
        options: ["18 for boys, 14 for girls", "21 for boys, 18 for girls", "15 for boys, 12 for girls", "14 for boys, 10 for girls"],
        correctAnswer: 0,
        explanation: "Harbilas Sarda (18 for boys, 14 for girls).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "British policies in India were aimed at protecting the interests of:",
        options: ["The Indian masses.", "The British manufacturers, merchants, and investors.", "The Princely States exclusively.", "The French allies."],
        correctAnswer: 1,
        explanation: "Economic interests of the metropole (Britain).",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "Who described the 19th-century British administration in India as a 'Despotism tempered by the absence of local knowledge'?",
        options: ["Lord Lytton", "Lord Curzon", "Marquess of Hastings", "Lord Auckland"],
        correctAnswer: 2,
        explanation: "Commonly used to describe the lack of sensitivity towards local conditions.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Council of India' in London was abolished by:",
        options: ["The Act of 1909", "The Act of 1919", "The Act of 1935", "The Act of 1947"],
        correctAnswer: 2,
        explanation: "Act of 1935 abolished it and gave the SOS 'advisers' instead.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The British followed the policy of 'Strict Neutrality' in religious matters after 1857. This was stated in:",
        options: ["The Charter Act of 1853", "The Queen's Proclamation of 1858", "The Act of 1892", "The 1919 Declaration"],
        correctAnswer: 1,
        explanation: "Queen Victoria's proclamation promised no interference in religious beliefs.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Gorkha War' (1814-16) was fought during the tenure of:",
        options: ["Lord Hastings", "Lord Amherst", "Lord Auckland", "Lord Ellenborough"],
        correctAnswer: 0,
        explanation: "Lord Hastings.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Policy of Equal Electorates' was rejected in favor of 'Separate Electorates' to:",
        options: ["Promote democracy.", "Appease the Muslims and divide the nationalist movement.", "Involve the Princes in voting.", "Exclude the British from voting."],
        correctAnswer: 1,
        explanation: "Communal electorates (1909).",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "Which boundary commission was appointed for the partition of Punjab and Bengal in 1947?",
        options: ["Cyril Radcliffe", "Lord Pethick-Lawrence", "Sir Stafford Cripps", "Lord Mountbatten"],
        correctAnswer: 0,
        explanation: "Radcliffe Commission.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Montagu Declaration' of 1917 promised:",
        options: ["Complete Independence.", "Development of self-governing institutions and responsible government as the goal.", "Abolition of the Viceroy’s post.", "Handing over Finance to Indians."],
        correctAnswer: 1,
        explanation: "Gradual development of self-governing institutions.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'First Census' in India (not synchronous) was held in 1872 during the time of:",
        options: ["Lord Lytton", "Lord Mayo", "Lord Ripon", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Lord Mayo (1872). First synchronous census was 1881 (Ripon).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Official Secrets Act' (1904) was passed by Curzon to:",
        options: ["Protect government data.", "Suppress the freedom of the press and restrict reporting on government activities.", "Promote transparency.", "Allow Indians to see files."],
        correctAnswer: 1,
        explanation: "To curb nationalism by restricting information.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Vandaboo' (Yandabo) Treaty of 1826 was between British and:",
        options: ["Kingdom of Nepal", "Kingdom of Ava (Burma)", "Kingdom of Siam", "Sikh Empire"],
        correctAnswer: 1,
        explanation: "Burma.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Buffer State' policy was most critical for which region according to Curzon?",
        options: ["The North-West Frontier", "The South", "The Eastern Archipelago", "The Central Provinces"],
        correctAnswer: 0,
        explanation: "To keep Russia away from India.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "Why was the 'Subordinate Isolation' policy changed to 'Subordinate Union'?",
        options: ["British were tired of isolation.", "Princes had proved their loyalty in 1857 ('breakwaters to the storm').", "The Princes asked for a union.", "The US pressurized the UK."],
        correctAnswer: 1,
        explanation: "Canning wanted to preserve the states as potential allies against future revolts.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The British created a 'New Class' of loyalists among the Indians who were educated in English. Macaulay called them:",
        options: ["The Native Elite.", "A class of persons Indian in blood and colour, but English in taste, in opinions, in morals and in intellect.", "The Brown Sahibs.", "The Interpreters."],
        correctAnswer: 1,
        explanation: "Direct quote from Macaulay's Minute.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
);
