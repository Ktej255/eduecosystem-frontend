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

export const MODERN_CHAPTER_28_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "De-industrialization (Ruin of Artisans)", status: 'done' },
    { id: '2', name: "Impoverishment of Peasantry (Revenue Systems)", status: 'done' },
    { id: '3', name: "Commercialization of Agriculture", status: 'done' },
    { id: '4', name: "Drain of Wealth Theory", status: 'done' },
    { id: '5', name: "Development of Railways & Industry", status: 'done' },
    { id: '6', name: "Famines in Colonial India", status: 'done' },
];

export const MODERN_CHAPTER_28_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Drain of Wealth' theory was first propounded by:",
        options: ["Jawaharlal Nehru", "Dadabhai Naoroji", "R.C. Dutt", "M.G. Ranade"],
        correctAnswer: 1,
        explanation: "Dadabhai Naoroji in his book 'Poverty and Un-British Rule in India'.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "According to Naoroji, what constituted the 'Drain'?",
        options: ["Only the direct gold exported from India.", "The portion of India's national wealth or resources which was exported to Britain for which India got no economic or material return.", "The taxes paid by the British in India.", "The salaries given to Indian sepoys."],
        correctAnswer: 1,
        explanation: "Unilateral transfer of resources without equivalent returns.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "Who wrote the classic work 'The Economic History of India' (1901)?",
        options: ["Dadabhai Naoroji", "R.C. Dutt", "G.K. Gokhale", "B.G. Tilak"],
        correctAnswer: 1,
        explanation: "Ramesh Chandra Dutt (R.C. Dutt).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'De-industrialization' of India in the 19th century was characterized by:",
        options: ["Increase in the share of manufacturing in GDP.", "The destruction of traditional Indian handicrafts and textiles due to competition from machine-made British goods and one-way free trade.", "Modernization of handlooms.", "The shift of labor from agriculture to industry."],
        correctAnswer: 1,
        explanation: "The ruin of artisans and the 'ruralization' of India.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 5,
        question: "Why did the 'Commercialization of Agriculture' often lead to poverty for Indian peasants?",
        options: ["Peasants were forced to grow cash crops (indigo, cotton, opium) for the world market instead of food crops, making them vulnerable to price fluctuations and lack of food.", "Peasants earned too much money and spent it unwisely.", "The crops didn't grow.", "It led to a shortage of labor."],
        correctAnswer: 0,
        explanation: "Peasants became vulnerable to the world market and middle-men.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 6,
        question: "The 'Permanent Settlement' (1793) introduced by Cornwallis in Bengal:",
        options: ["Made the Zamindars the owners of the land.", "Fixed the revenue demand forever.", "Included the 'Sunset Law'.", "All of the above."],
        correctAnswer: 3,
        explanation: "All are features of the Permanent Settlement.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "In the 'Ryotwari System' (Madras/Bombay), the land revenue was collected:",
        options: ["Through the Zamindars.", "Directly from the cultivators (Ryots).", "Through the village headman.", "Through the local Raja."],
        correctAnswer: 1,
        explanation: "Ryotwari = Direct from Ryot. (Munro and Reed).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Mahalwari System' (North-West) was different because:",
        options: ["It was settled with individual peasants.", "It was settled with the village community or 'Mahal' through the Lambardar (Headman).", "Revenue was never increased.", "It gave land back to the tanners."],
        correctAnswer: 1,
        explanation: "Mahalwari = Village unit (Mahal). Holt Mackenzie.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Indian Enterprise' in modern industry was mostly restricted to which sector in the 19th century?",
        options: ["Steel", "Cotton Textiles (mostly in Bombay/Ahmedabad)", "Jute", "Railways"],
        correctAnswer: 1,
        explanation: "Cotton textiles were the stronghold of Indian capital.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'First Jute Mill' in India was set up in 1855 at:",
        options: ["Bombay", "Rishra (Bengal)", "Madras", "Surat"],
        correctAnswer: 1,
        explanation: "Rishra, near Calcutta.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "What was the main motive of the British in developing 'Railways' in India?",
        options: ["To facilitate the travel of Indian pilgrims.", "To open up the Indian interior for British exports, to transport raw materials to ports, and for military movement.", "To promote Indian industries.", "To provide employment to Indians."],
        correctAnswer: 1,
        explanation: "Strategic and economic interests of Britain.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "The 'GIP Railway' (Great Indian Peninsula Railway) ran the first train in India in 1853 between:",
        options: ["Calcutta and Raniganj", "Bombay and Thane", "Madras and Arkonam", "Delhi and Agra"],
        correctAnswer: 1,
        explanation: "Bombay and Thane (34 km).",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'One-Way Free Trade' imposed on India meant:",
        options: ["Both India and Britain had no customs duties.", "British goods entered India for free/low duties, while Indian exports to Britain faced high protective duties.", "India could trade with any nation.", "Britain had to pay a tax to India."],
        correctAnswer: 1,
        explanation: "Discriminatory tariff policy.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The 'Indian Famine Code' (1883) was based on the recommendations of the:",
        options: ["Strachey Commission (1880)", "Hunter Commission", "Simon Commission", "Lee Commission"],
        correctAnswer: 0,
        explanation: "Richard Strachey Commission.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Lytton Famine' (1876-78) was particularly scandalous because:",
        options: ["The British exported wheat while Indians were dying.", "The government organized the Delhi Durbar during the famine.", "The government refused to open relief camps.", "Both (a) and (b)."],
        correctAnswer: 3,
        explanation: "Export of grains continued and the Durbar was held while millions died.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "Who among the following was a 'Moderate' leader famous for his detailed 'Budget Speeches' exposing the economic fallacies of the British rule?",
        options: ["B.G. Tilak", "G.K. Gokhale", "S.N. Banerjea", "Lala Lajpat Rai"],
        correctAnswer: 1,
        explanation: "Gopal Krishna Gokhale.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The 'TISCO' (Tata Iron and Steel Company) was founded in 1907 by Jamshedji Tata at:",
        options: ["Bhilai", "Sakchi (Jamshedpur)", "Rourkela", "Burnpur"],
        correctAnswer: 1,
        explanation: "Sakchi (later renamed Jamshedpur).",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Home Charges' (a component of the Drain) included:",
        options: ["Salaries and pensions of officials in Britain.", "Interests on the Indian debt.", "Purchase of army stores in Britain.", "All of the above."],
        correctAnswer: 3,
        explanation: "All these were payments made in Britain from Indian revenues.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Karl Marx noted that the British 'broke the entire framework of Indian society' without any visual signs of reconstitution. He was referring to:",
        options: ["The destruction of the Indian village community and its self-sufficiency.", "The introduction of Christianity.", "The partition.", "The army reforms."],
        correctAnswer: 0,
        explanation: "Destruction of the integrated land-and-handicraft self-sufficiency of villages.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "The 'Sunset Law' was associated with:",
        options: ["Slavery", "Forest Acts", "Permanent Settlement (If the revenue was not paid by sunset of the fixed day, the estate was sold).", "Press Acts"],
        correctAnswer: 2,
        explanation: "Sunset Law of 1794 in Bengal.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Who was the 'father' of the Ryotwari system?",
        options: ["Thomas Munro", "Charles Cornwallis", "Holt Mackenzie", "John Shore"],
        correctAnswer: 0,
        explanation: "Thomas Munro (along with Captain Alexander Read).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The major cause of 'Rural Indebtedness' in British India was:",
        options: ["Lack of rain.", "High land revenue demand + Rigidity in collection + Low prices of produce.", "The habits of the peasants.", "The lack of seeds."],
        correctAnswer: 1,
        explanation: "Feudal/Colonial structure of exploitation.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "The 'Great Famine of Bengal' (1943) caused 3 million deaths. It was primarily a:",
        options: ["Natural disaster (Crop failure).", "Man-made famine (Due to wartime priorities, stockpiling, and policy failures).", "Result of locust attack.", "Result of a tsunami."],
        correctAnswer: 1,
        explanation: "Amartya Sen's analysis: it was a failure of 'entitlements' and distribution during WWII.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 24,
        question: "Which Indian leader said, 'The British rule in India is a bleeding to death of the country'?",
        options: ["Dadabhai Naoroji", "Subhash Chandra Bose", "M.G. Ranade", "V.D. Savarkar"],
        correctAnswer: 0,
        explanation: "Dadabhai Naoroji.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "In which year was the 'Indian rupee' delinked from silver and linked to the 'Pound Sterling'?",
        options: ["1893", "1914", "1931", "1947"],
        correctAnswer: 0,
        explanation: "1893 (Closing of Mints).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Planters' in Assam often used the 'Indenture system' which was a form of:",
        options: ["Free Labor", "Contractual Slavery (White-lead semi-slavery)", "Communal farming", "Cooperative farming"],
        correctAnswer: 1,
        explanation: "Worked through the Inland Emigration Act 1859 which made it a criminal offense to quit the plantation.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Campbell Commission' (1866) was related to:",
        options: ["Police reforms", "Education", "Famine (Orissa famine)", "Prisons"],
        correctAnswer: 2,
        explanation: "Orissa Famine of 1866.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'McDonnell Commission' (1900) was appointed by:",
        options: ["Lord Lytton", "Lord Curzon", "Lord Lansdowne", "Lord Ripon"],
        correctAnswer: 1,
        explanation: "Lord Curzon (after the famine of 1899-1900).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Who wrote 'Economic History of India beneath Early British Rule'?",
        options: ["R.C. Dutt", "R.P. Dutt", "J.N. Sarkar", "K.P. Jayaswal"],
        correctAnswer: 0,
        explanation: "R.C. Dutt.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Discriminating Protection' policy initiated in the 1920s benefited which industry the most?",
        options: ["Sugar and Iron & Steel", "Textiles", "Jute", "Chemicals"],
        correctAnswer: 0,
        explanation: "Steel (TISCO) and Sugar were protectively guarded from imports.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Which of the following was NOT a criticism of the Permanent Settlement given by the nationalists?",
        options: ["It led to absenteeism (Zamindars living in cities).", "It neglected the improvements in the soil.", "It created a class of loyalists to British rule.", "It distributed the wealth equally to the tillers."],
        correctAnswer: 3,
        explanation: "It definitely did not distribute wealth to the tillers.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "The 'Drain' of wealth resulted in the shortfall of 'Capital formation' within India. This is a:",
        options: ["Marxist view.", "Nationalist view.", "Imperialist view.", "Religious view."],
        correctAnswer: 1,
        explanation: "Core nationalist argument for why India didn't industrialize.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "What was the 'Gwynne Committee' related to?",
        options: ["Indianization of Army", "ICS cadre issues", "Police pay", "Postage"],
        correctAnswer: 1,
        explanation: "Related to Indianization of the services.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Indian National Congress' passed its first resolution on the poverty of India and the need for inquiry in its session of:",
        options: ["1885", "1886", "1892", "1905"],
        correctAnswer: 1,
        explanation: "Second session (1886) presided by Naoroji.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The British investment in India was mostly 'External Debt' rather than 'Equity'. This meant:",
        options: ["India had to pay fixed interest regardless of profit.", "Indians owned the companies.", "The British shared the losses.", "There were no taxes."],
        correctAnswer: 0,
        explanation: "Guaranteed interest on rail investment made it a burden for Indian taxpayers.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    }
];
