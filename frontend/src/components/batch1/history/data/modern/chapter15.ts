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

export const MODERN_CHAPTER_15_SUBTOPICS: Subtopic[] = [
    { id: 1, name: "Gandhi in South Africa (1893–1914)", status: 'commenced' },
    { id: 2, name: "Return to India (1915)", status: 'commenced' },
    { id: 3, name: "Early Satyagrahas (Champaran, Ahmedabad, Kheda)", status: 'commenced' },
    { id: 4, name: "Rowlatt Act & Satyagraha (1919)", status: 'commenced' },
    { id: 5, name: "Jallianwala Bagh Massacre", status: 'commenced' },
];

export const MODERN_CHAPTER_15_MCQS = [
    {
        id: 1,
        question: "Which of the following literary works profoundly influenced Gandhi’s philosophy of 'Sarvodaya' (Welfare of All)?",
        options: [
            "Civil Disobedience by Thoreau",
            "The Kingdom of God is Within You by Tolstoy",
            "Unto This Last by John Ruskin",
            "My Experiments with Truth"
        ],
        correctAnswer: 2,
        explanation: "John Ruskin’s Unto This Last inspired Gandhi's concept of Sarvodaya (good of the individual is contained in the good of all)."
    },
    {
        id: 2,
        question: "During his stay in South Africa, Gandhi founded the 'Natal Indian Congress' in 1894. What was the name of the newspaper he started there to highlight the grievances of Indians?",
        options: [
            "The Indian Sociologist",
            "Indian Opinion",
            "Young India",
            "Navjivan"
        ],
        correctAnswer: 1,
        explanation: "Indian Opinion was the journal started in South Africa (1903)."
    },
    {
        id: 3,
        question: "The 'Tolstoy Farm', founded by Gandhi in 1910 to house the families of Satyagrahis, was established with the help of his German architect friend:",
        options: [
            "C.F. Andrews",
            "Hermann Kallenbach",
            "Louis Fischer",
            "Polak"
        ],
        correctAnswer: 1,
        explanation: "Hermann Kallenbach, a German architect and close friend, donated the land for Tolstoy Farm."
    },
    {
        id: 4,
        question: "Arrange the following events in Gandhi’s South African phase in chronological order: (1) Foundation of Natal Indian Congress, (2) Establishment of Tolstoy Farm, (3) Establishment of Phoenix Settlement, (4) Satyagraha against Registration Certificates",
        options: [
            "1-3-4-2",
            "1-2-3-4",
            "3-1-4-2",
            "1-4-3-2"
        ],
        correctAnswer: 0,
        explanation: "Natal Congress (1894) -> Phoenix (1904) -> Satyagraha against Registration (1906) -> Tolstoy Farm (1910)."
    },
    {
        id: 5,
        question: "Upon his return to India in 1915, who advised Gandhi to 'keep his ears open but his mouth shut' for a year to understand India?",
        options: [
            "B.G. Tilak",
            "Rabindranath Tagore",
            "Gopal Krishna Gokhale",
            "Dadabhai Naoroji"
        ],
        correctAnswer: 2,
        explanation: "Gokhale (his political guru) asked him to tour India for a year before taking a political stance."
    },
    {
        id: 6,
        question: "The book 'Hind Swaraj', written by Gandhi in 1909, is a dialogue between:",
        options: [
            "The Editor and the Reader",
            "Gandhi and the British Viceroy",
            "A Hindu and a Muslim",
            "A Teacher and a Student"
        ],
        correctAnswer: 0,
        explanation: "It is written as a dialogue between the Editor (Gandhi) and the Reader (an extremist/militant nationalist)."
    },
    {
        id: 7,
        question: "In Hind Swaraj, Gandhi described 'Modern Civilization' (Railways, Lawyers, Doctors) as:",
        options: [
            "The engine of progress",
            "A necessary evil",
            "Satanic",
            "A gift from God"
        ],
        correctAnswer: 2,
        explanation: "He called modern civilization 'Satanic' (Shaitani Sabhyata) because it prioritized body over soul."
    },
    {
        id: 8,
        question: "Which of the following statements about 'Satyagraha' is INCORRECT?",
        options: [
            "A Satyagrahi must never bow down to evil but should also not hate the evildoer",
            "It is a weapon of the weak who cannot use physical force",
            "It involves self-suffering to convert the heart of the opponent",
            "It requires strict adherence to truth and non-violence"
        ],
        correctAnswer: 1,
        explanation: "This is Passive Resistance. Satyagraha is the weapon of the strong and brave; it requires immense courage to face violence without retaliating."
    },
    {
        id: 9,
        question: "The 'Champaran Satyagraha' was directed against the 'Tinkathia System'. This system forced the peasants to cultivate Indigo on:",
        options: [
            "1/3rd of their land",
            "3/20th of their land",
            "3/10th of their land",
            "Half of their land"
        ],
        correctAnswer: 1,
        explanation: "Tinkathia means 3/20th (3 Kathas per Bigha)."
    },
    {
        id: 10,
        question: "Who was the local peasant leader who persistently persuaded Gandhi to visit Champaran to witness the plight of the Indigo cultivators?",
        options: [
            "Rajendra Prasad",
            "J.B. Kripalani",
            "Rajkumar Shukla",
            "Mahadev Desai"
        ],
        correctAnswer: 2,
        explanation: "Rajkumar Shukla."
    },
    {
        id: 11,
        question: "In the context of the Indian freedom struggle, the Champaran Satyagraha is historically significant because:",
        options: [
            "It was the first time Gandhi used the method of Hunger Strike",
            "It was the first instance of Civil Disobedience by Gandhi in India",
            "It led to the immediate independence of Bihar",
            "It was supported by the British planters"
        ],
        correctAnswer: 1,
        explanation: "First Civil Disobedience: Gandhi disobeyed the order of the District Magistrate to leave Champaran, saying he would face the penalty but not leave."
    },
    {
        id: 12,
        question: "Which of the following leaders joined Gandhi during the Champaran Satyagraha? (1) Rajendra Prasad, (2) Anugrah Narayan Sinha, (3) J.B. Kripalani, (4) Vallabhbhai Patel",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 1,
        explanation: "Patel joined later (Kheda). In Champaran, it was Rajendra Prasad, J.B. Kripalani, Mazhar-ul-Haq, Narhari Parekh, Mahadev Desai."
    },
    {
        id: 13,
        question: "In which movement did Gandhi use the weapon of 'Hunger Strike' (Fast unto death) for the first time in India?",
        options: [
            "Kheda Satyagraha",
            "Ahmedabad Mill Strike",
            "Rowlatt Satyagraha",
            "Champaran Satyagraha"
        ],
        correctAnswer: 1,
        explanation: "Ahmedabad Mill Strike (First Hunger Strike)."
    },
    {
        id: 14,
        question: "The dispute in the 'Ahmedabad Mill Strike' (1918) was regarding:",
        options: [
            "The recognition of a trade union",
            "The discontinuation of the 'Plague Bonus'",
            "Reduction in working hours",
            "Use of foreign machinery"
        ],
        correctAnswer: 1,
        explanation: "The mill owners wanted to withdraw the Plague Bonus (which was 75% or so), workers wanted 50%, Gandhi negotiated for 35%."
    },
    {
        id: 15,
        question: "Who was the sister of the textile mill owner Ambalal Sarabhai, who supported the workers and Gandhi in the Ahmedabad strike?",
        options: [
            "Sarojini Naidu",
            "Anusuya Sarabhai",
            "Mridula Sarabhai",
            "Kasturba Gandhi"
        ],
        correctAnswer: 1,
        explanation: "Anusuya Sarabhai."
    },
    {
        id: 16,
        question: "The 'Kheda Satyagraha' is described as the 'First Non-Cooperation' movement because:",
        options: [
            "Peasants refused to pay revenue (taxes) to the government",
            "Peasants burned government records",
            "Lawyers boycotted courts",
            "Students left schools"
        ],
        correctAnswer: 0,
        explanation: "Non-Cooperation: Refusal to pay taxes (revenue)."
    },
    {
        id: 17,
        question: "The issue in Kheda was that the government refused to grant revenue remission despite crop failure. According to the Revenue Code, remission was allowed if the yield was less than:",
        options: [
            "One-half of the normal yield",
            "One-fourth of the normal yield",
            "One-third of the normal yield",
            "Three-fourths of the normal yield"
        ],
        correctAnswer: 1,
        explanation: "If the yield was less than 1/4th, they were entitled to remission."
    },
    {
        id: 18,
        question: "Who among the following leaders emerged as a loyal follower of Gandhi during the Kheda Satyagraha?",
        options: [
            "Jawaharlal Nehru",
            "Sardar Vallabhbhai Patel",
            "Subhash Chandra Bose",
            "C.R. Das"
        ],
        correctAnswer: 1,
        explanation: "Sardar Patel left his lucrative legal practice to join Gandhi during Kheda."
    },
    {
        id: 19,
        question: "The 'Anarchical and Revolutionary Crimes Act, 1919' is popularly known as the:",
        options: [
            "Seditious Meetings Act",
            "Rowlatt Act",
            "Defence of India Act",
            "Vernacular Press Act"
        ],
        correctAnswer: 1,
        explanation: "Rowlatt Act (Anarchical and Revolutionary Crimes Act)."
    },
    {
        id: 20,
        question: "Why was the Rowlatt Act called the 'Black Act'?",
        options: [
            "It imposed a tax on black cloth",
            "It authorized the government to imprison any person without trial and conviction in a court of law",
            "It banned Indian newspapers",
            "It was passed at night"
        ],
        correctAnswer: 1,
        explanation: "Detention without trial for up to 2 years."
    },
    {
        id: 21,
        question: "The famous slogan 'No Dalil, No Vakil, No Appeal' was raised against which Act?",
        options: [
            "The Rowlatt Act",
            "The Press Act of 1910",
            "The Salt Law",
            "The Arms Act"
        ],
        correctAnswer: 0,
        explanation: "No Lawyer, No Appeal, No Argument."
    },
    {
        id: 22,
        question: "To organize the protest against the Rowlatt Act, Gandhi founded the:",
        options: [
            "Home Rule League",
            "Satyagraha Sabha",
            "Swaraj Party",
            "Indian National Army"
        ],
        correctAnswer: 1,
        explanation: "Satyagraha Sabha."
    },
    {
        id: 23,
        question: "During the anti-Rowlatt agitation, Gandhi tried to utilize three types of political networks. Which one is NOT among them?",
        options: [
            "The Home Rule Leagues",
            "The Pan-Islamist groups (Khilafatists)",
            "The Satyagraha Sabha",
            "The Indian National Congress (Moderate wing)"
        ],
        correctAnswer: 3,
        explanation: "The Liberals (Moderates) like Surendranath Banerjea opposed the Rowlatt Satyagraha, fearing chaos."
    },
    {
        id: 24,
        question: "The Jallianwala Bagh massacre (April 13, 1919) happened when people gathered to protest the arrest of which two popular leaders of Punjab?",
        options: [
            "Bhagat Singh and Udham Singh",
            "Dr. Satyapal and Saifuddin Kitchlew",
            "Lala Lajpat Rai and Ajit Singh",
            "Baba Gurdit Singh and Sohan Singh Bhakna"
        ],
        correctAnswer: 1,
        explanation: "Dr. Satyapal and Saifuddin Kitchlew."
    },
    {
        id: 25,
        question: "Who renounced his 'Knighthood' (Title of 'Sir') in protest against the Jallianwala Bagh massacre?",
        options: [
            "Mahatma Gandhi",
            "Rabindranath Tagore",
            "Subramaniya Aiyar",
            "Sankaran Nair"
        ],
        correctAnswer: 1,
        explanation: "Rabindranath Tagore."
    },
    {
        id: 26,
        question: "Which Indian member of the Viceroy’s Executive Council resigned in protest against the Jallianwala Bagh massacre?",
        options: [
            "Satyendra Prasanna Sinha",
            "C. Sankaran Nair",
            "Tej Bahadur Sapru",
            "Muhammad Ali Jinnah"
        ],
        correctAnswer: 1,
        explanation: "C. Sankaran Nair."
    },
    {
        id: 27,
        question: "The 'Hunter Commission' was appointed by the government to inquire into:",
        options: [
            "The Chauri Chaura incident",
            "The Jallianwala Bagh massacre and Punjab disturbances",
            "The Khilafat issue",
            "The education system"
        ],
        correctAnswer: 1,
        explanation: "Disorders Inquiry Committee (Hunter Commission)."
    },
    {
        id: 28,
        question: "What was the verdict of the British House of Lords regarding General Dyer?",
        options: [
            "He was condemned and imprisoned",
            "He was hanged",
            "He was exonerated and treated as a hero ('Saviour of the Punjab'), receiving a Sword of Honour",
            "He was ignored"
        ],
        correctAnswer: 2,
        explanation: "The House of Commons condemned him, but the House of Lords praised him. The Morning Post collected money for him."
    },
    {
        id: 29,
        question: "Who assassinated Michael O'Dwyer (the Lt. Governor of Punjab during the massacre) in London in 1940?",
        options: [
            "Bhagat Singh",
            "Madan Lal Dhingra",
            "Udham Singh",
            "Chandrashekhar Azad"
        ],
        correctAnswer: 2,
        explanation: "Udham Singh killed Michael O'Dwyer (who was the Governor, not Dyer the General) at Caxton Hall."
    },
    {
        id: 30,
        question: "Arrange the following events in chronological order: (1) Kheda Satyagraha, (2) Champaran Satyagraha, (3) Ahmedabad Mill Strike, (4) Rowlatt Satyagraha",
        options: [
            "2-1-3-4",
            "2-3-1-4",
            "3-2-1-4",
            "2-1-4-3"
        ],
        correctAnswer: 1,
        explanation: "Champaran (1917) -> Ahmedabad (Feb 1918) -> Kheda (March 1918) -> Rowlatt (1919)."
    },
    {
        id: 31,
        question: "The 'Kaiser-i-Hind' gold medal was awarded to Gandhi for:",
        options: [
            "His work in South Africa",
            "His humanitarian work during the Boer War and Zulu Rebellion",
            "The Champaran Satyagraha",
            "Writing Hind Swaraj"
        ],
        correctAnswer: 1,
        explanation: "For his ambulance services during the Boer War and Zulu Rebellion."
    },
    {
        id: 32,
        question: "Gandhi returned the 'Kaiser-i-Hind' medal during:",
        options: [
            "The Rowlatt Satyagraha",
            "The Khilafat/Non-Cooperation Movement",
            "The Civil Disobedience Movement",
            "The Quit India Movement"
        ],
        correctAnswer: 1,
        explanation: "He returned it on August 1, 1920, launching the Non-Cooperation Movement."
    },
    {
        id: 33,
        question: "Which of the following distinctions is correct regarding Gandhi's methods?",
        options: [
            "Satyagraha is active resistance; Passive Resistance is a weapon of the weak",
            "Satyagraha inflicts pain on the opponent; Passive Resistance inflicts pain on self",
            "Satyagraha allows the use of arms in self-defense",
            "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Satyagraha is soul force (active); Passive Resistance is political expediency (weapon of the weak)."
    },
    {
        id: 34,
        question: "Who became the first President of the 'All India Khilafat Committee' in 1919?",
        options: [
            "Shaukat Ali",
            "Muhammad Ali",
            "Mahatma Gandhi",
            "Abul Kalam Azad"
        ],
        correctAnswer: 2,
        explanation: "Mahatma Gandhi was elected President of the All India Khilafat Conference (Nov 1919, Delhi) because he saw it as a golden opportunity for Hindu-Muslim unity."
    },
    {
        id: 35,
        question: "The 'Rowlatt Satyagraha' was the first:",
        options: [
            "Hunger strike by Gandhi",
            "All-India mass struggle (though largely restricted to cities)",
            "Non-Cooperation movement",
            "Peasant movement"
        ],
        correctAnswer: 1,
        explanation: "It was the first All-India struggle (Champaran/Kheda were local)."
    }
];
