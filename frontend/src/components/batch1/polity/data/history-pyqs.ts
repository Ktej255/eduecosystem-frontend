import { PYQQuestion } from '@/lib/pyq/pyq-types';

export const HISTORY_PYQS: PYQQuestion[] = [
    {
        id: 'hist_2024_1',
        year: 2024,
        subject: 'History',
        topic: 'Modern India',
        question: "With reference to the Indian freedom struggle, consider the following statements regarding the 'Royal Indian Navy Mutiny' of 1946:\n1. It was triggered by the general service conditions and racial discrimination.\n2. The mutineers surrendered after the mediation of Vallabhbhai Patel and M.A. Jinnah.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctIndex: 2,
        explanation: "The RIN Mutiny was triggered by poor conditions and racial slurs. It ended after political leaders like Patel and Jinnah persuaded them to surrender.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'hist_2023_1',
        year: 2023,
        subject: 'History',
        topic: 'Ancient India',
        question: "Which of the following dynasties established the kingdom of 'Vijayayanagara'?",
        options: ["Sangama Dynasty", "Suluva Dynasty", "Tuluva Dynasty", "Aravidu Dynasty"],
        correctIndex: 0,
        explanation: "The Vijayanagara Empire was founded by Harihara I and Bukka Raya I of the Sangama Dynasty in 1336.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    },
    {
        id: 'hist_2022_1',
        year: 2022,
        subject: 'History',
        topic: 'Medieval India',
        question: "With reference to the 'Fanam' in medieval India, what was it?",
        options: ["A measure of land", "A type of coin", "A religious sect", "A judicial officer"],
        correctIndex: 1,
        explanation: "Fanam was a small gold or silver coin used in Southern India during the medieval period.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'hist_2021_1',
        year: 2021,
        subject: 'History',
        topic: 'Modern India',
        question: "Who among the following was associated with the 'Song from Prison', a translation of ancient Indian religious lyrics in English?",
        options: ["Bal Gangadhar Tilak", "Jawaharlal Nehru", "Mohandas Karamchand Gandhi", "Sarojini Naidu"],
        correctIndex: 2,
        explanation: "Mahatma Gandhi wrote 'Songs from Prison' while he was in Yerwada Jail.",
        exam: 'CSE Prelims',
        difficulty: 'Tough'
    },
    {
        id: 'hist_2020_1',
        year: 2020,
        subject: 'History',
        topic: 'Ancient India',
        question: "With reference to the scholars/literateurs of ancient India, consider the following statements:\n1. Pānini is associated with Pushyamitra Shunga.\n2. Amarasimha is associated with Harshavardhana.\n3. Kālidāsa is associated with Chandra Gupta-II.\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "3 only", "1, 2 and 3"],
        correctIndex: 2,
        explanation: "Statement 1 is incorrect (Panini was much earlier). Statement 2 is incorrect (Amarasimha was in Chandra Gupta II's court). Statement 3 is correct (Kalidasa was one of the Navaratnas of Chandra Gupta II).",
        exam: 'CSE Prelims',
        difficulty: 'Tough'
    }
];
