import { Question } from '../../types';
import { ancientChapterData as ANCIENT_MCQ_MAP } from '../data/mcqs/ancient/registry';
import { MODERN_CHAPTER_1_MCQS } from '../data/modern/chapter1';
// [Note: Keep all other modern imports intact up to line 41]
import { MODERN_CHAPTER_2_MCQS } from '../data/modern/chapter2';
import { MODERN_CHAPTER_3_MCQS } from '../data/modern/chapter3';
import { MODERN_CHAPTER_4_MCQS } from '../data/modern/chapter4';
import { MODERN_CHAPTER_5_MCQS } from '../data/modern/chapter5';
import { MODERN_CHAPTER_6_MCQS } from '../data/modern/chapter6';
import { MODERN_CHAPTER_7_MCQS } from '../data/modern/chapter7';
import { MODERN_CHAPTER_8_MCQS } from '../data/modern/chapter8';
import { MODERN_CHAPTER_9_MCQS } from '../data/modern/chapter9';
import { MODERN_CHAPTER_10_MCQS } from '../data/modern/chapter10';
import { MODERN_CHAPTER_11_MCQS } from '../data/modern/chapter11';
import { MODERN_CHAPTER_12_MCQS } from '../data/modern/chapter12';
import { MODERN_CHAPTER_13_MCQS } from '../data/modern/chapter13';
import { MODERN_CHAPTER_14_MCQS } from '../data/modern/chapter14';
import { MODERN_CHAPTER_15_MCQS } from '../data/modern/chapter15';
import { MODERN_CHAPTER_16_MCQS } from '../data/modern/chapter16';
import { MODERN_CHAPTER_17_MCQS } from '../data/modern/chapter17';
import { MODERN_CHAPTER_18_MCQS } from '../data/modern/chapter18';
import { MODERN_CHAPTER_19_MCQS } from '../data/modern/chapter19';
import { MODERN_CHAPTER_20_MCQS } from '../data/modern/chapter20';
import { MODERN_CHAPTER_21_MCQS } from '../data/modern/chapter21';
import { MODERN_CHAPTER_22_MCQS } from '../data/modern/chapter22';
import { MODERN_CHAPTER_23_MCQS } from '../data/modern/chapter23';
import { MODERN_CHAPTER_24_MCQS } from '../data/modern/chapter24';
import { MODERN_CHAPTER_25_MCQS } from '../data/modern/chapter25';
import { MODERN_CHAPTER_26_MCQS } from '../data/modern/chapter26';
import { MODERN_CHAPTER_27_MCQS } from '../data/modern/chapter27';
import { MODERN_CHAPTER_28_MCQS } from '../data/modern/chapter28';
import { MODERN_CHAPTER_29_MCQS } from '../data/modern/chapter29';
import { MODERN_CHAPTER_30_MCQS } from '../data/modern/chapter30';
import { MODERN_CHAPTER_31_MCQS } from '../data/modern/chapter31';
import { MODERN_CHAPTER_32_MCQS } from '../data/modern/chapter32';
import { MODERN_CHAPTER_33_MCQS } from '../data/modern/chapter33';
import { MODERN_CHAPTER_34_MCQS } from '../data/modern/chapter34';
import { MODERN_CHAPTER_35_MCQS } from '../data/modern/chapter35';
import { MODERN_CHAPTER_36_MCQS } from '../data/modern/chapter36';
import { MODERN_CHAPTER_37_MCQS } from '../data/modern/chapter37';
import { MODERN_CHAPTER_38_MCQS } from '../data/modern/chapter38';
import { MODERN_CHAPTER_39_MCQS } from '../data/modern/chapter39';
// ... import other chapters as they are ready ...

export interface QuestionBankItem extends Question {
    chapterId: number;
    chapterName: string;
    section: 'ancient' | 'medieval' | 'modern';
    level: number;
}

// Helper to add chapter metadata
const enhanceQuestions = (
    questions: any[],
    chapterId: number,
    chapterName: string,
    section: 'ancient' | 'medieval' | 'modern' = 'modern',
    forcedLevel?: number
): QuestionBankItem[] => {
    return questions.map(q => {
        let level = forcedLevel || 1;
        if (!forcedLevel) {
            if (q.difficulty === 'Moderate') level = 2;
            if (q.difficulty === 'Hard') level = 3;
        }

        return {
            ...q,
            chapterId,
            chapterName,
            section,
            level
        };
    });
};

// Aggregate all questions
export const getAllQuestions = (): QuestionBankItem[] => {
    const allQuestions = [
        ...enhanceQuestions(MODERN_CHAPTER_1_MCQS, 1, 'Sources'),
        ...enhanceQuestions(MODERN_CHAPTER_2_MCQS, 2, 'Approaches'),
        ...enhanceQuestions(MODERN_CHAPTER_3_MCQS, 3, 'Advent of Europeans'),
        ...enhanceQuestions(MODERN_CHAPTER_4_MCQS, 4, 'India on the Eve of British Conquest'),
        ...enhanceQuestions(MODERN_CHAPTER_5_MCQS, 5, 'Expansion and Consolidation of British Power in India'),
        ...enhanceQuestions(MODERN_CHAPTER_6_MCQS, 6, 'The Revolt of 1857'),
        ...enhanceQuestions(MODERN_CHAPTER_7_MCQS, 7, 'Socio-Religious Reform Movements: General Features'),
        ...enhanceQuestions(MODERN_CHAPTER_8_MCQS, 8, 'A General Survey of Socio-Cultural Reform Movements'),
        ...enhanceQuestions(MODERN_CHAPTER_9_MCQS, 9, 'A General Survey of Socio-Cultural Reform Movements (Part II)'),
        ...enhanceQuestions(MODERN_CHAPTER_10_MCQS, 10, 'Beginning of Modern Nationalism in India'),
        ...enhanceQuestions(MODERN_CHAPTER_11_MCQS, 11, 'Era of Militant Nationalism (1905-1909)'),
        ...enhanceQuestions(MODERN_CHAPTER_12_MCQS, 12, 'Revolutionary Activities (1907-1917)'),
        ...enhanceQuestions(MODERN_CHAPTER_13_MCQS, 13, 'First World War and Nationalist Response'),
        ...enhanceQuestions(MODERN_CHAPTER_14_MCQS, 14, 'Emergence of Gandhi'),
        ...enhanceQuestions(MODERN_CHAPTER_15_MCQS, 15, 'Non-Cooperation Movement and Khilafat Aandolan'),
        ...enhanceQuestions(MODERN_CHAPTER_16_MCQS, 16, 'Emergence of Swarajists, Socialist Ideas, and New Forces'),
        ...enhanceQuestions(MODERN_CHAPTER_17_MCQS, 17, 'Simon Commission and the Nehru Report'),
        ...enhanceQuestions(MODERN_CHAPTER_18_MCQS, 18, 'Civil Disobedience Movement and Round Table Conferences'),
        ...enhanceQuestions(MODERN_CHAPTER_19_MCQS, 19, 'From Government of India Act 1935 to the Outbreak of Second World War'),
        ...enhanceQuestions(MODERN_CHAPTER_20_MCQS, 20, 'Nationalist Response in the Wake of World War II'),
        ...enhanceQuestions(MODERN_CHAPTER_21_MCQS, 21, 'Quit India Movement, Demand for Pakistan, and the INA'),
        ...enhanceQuestions(MODERN_CHAPTER_22_MCQS, 22, 'Post-War National Scenario'),
        ...enhanceQuestions(MODERN_CHAPTER_23_MCQS, 23, 'Constitutional, Administrative and Judicial Developments'),
        ...enhanceQuestions(MODERN_CHAPTER_24_MCQS, 24, 'History of Modern Education'),
        ...enhanceQuestions(MODERN_CHAPTER_25_MCQS, 25, 'History of Indian Press'),
        ...enhanceQuestions(MODERN_CHAPTER_26_MCQS, 26, 'Development of Vernacular Literature'),
        ...enhanceQuestions(MODERN_CHAPTER_27_MCQS, 27, 'Modern Indian Art and Architecture'),
        ...enhanceQuestions(MODERN_CHAPTER_28_MCQS, 28, 'Social and Religious Reform Movements'),
        ...enhanceQuestions(MODERN_CHAPTER_29_MCQS, 29, 'Struggle Against Caste'),
        ...enhanceQuestions(MODERN_CHAPTER_30_MCQS, 30, 'The Peasant Movements'),
        ...enhanceQuestions(MODERN_CHAPTER_31_MCQS, 31, 'The Working Class Movements'),
        ...enhanceQuestions(MODERN_CHAPTER_32_MCQS, 32, 'Challenges Before the Congress (1937–39)'),
        ...enhanceQuestions(MODERN_CHAPTER_33_MCQS, 33, 'Congress Crisis at Tripuri to World War II'),
        ...enhanceQuestions(MODERN_CHAPTER_34_MCQS, 34, 'The Cripps Mission to Quit India Movement'),
        ...enhanceQuestions(MODERN_CHAPTER_35_MCQS, 35, 'Post-War National Upsurge'),
        ...enhanceQuestions(MODERN_CHAPTER_36_MCQS, 36, 'Evolution of Nationalist Foreign Policy'),
        ...enhanceQuestions(MODERN_CHAPTER_37_MCQS, 37, 'The First General Elections'),
        ...enhanceQuestions(MODERN_CHAPTER_38_MCQS, 38, 'Nehru\'s Vision of a Modern India'),
        ...enhanceQuestions(MODERN_CHAPTER_39_MCQS, 39, 'The Challenge of Succession & 1965 War'),
        // Add more chapters here
    ];

    // Dynamically add Ancient History MCQs
    Object.keys(ANCIENT_MCQ_MAP).forEach(key => {
        const k = parseInt(key);
        const chapterData = ANCIENT_MCQ_MAP[k] as any;
        if (chapterData) {
            const chName = `Ancient Chapter ${k}`;
            if (chapterData[`CH${k}_L1_MCQS`]) {
                allQuestions.push(...enhanceQuestions(chapterData[`CH${k}_L1_MCQS`], k, chName, 'ancient', 1));
            }
            if (chapterData[`CH${k}_L2_MCQS`]) {
                allQuestions.push(...enhanceQuestions(chapterData[`CH${k}_L2_MCQS`], k, chName, 'ancient', 2));
            }
            if (chapterData[`CH${k}_L3_MCQS`]) {
                allQuestions.push(...enhanceQuestions(chapterData[`CH${k}_L3_MCQS`], k, chName, 'ancient', 3));
            }
        }
    });

    return allQuestions;
};

// Service to filter and search
export const QuestionBankService = {
    getAllQuestions,

    getStats: () => {
        const questions = getAllQuestions();
        return {
            total: questions.length,
            modern: questions.filter(q => q.section === 'modern').length,
            medieval: questions.filter(q => q.section === 'medieval').length,
            ancient: questions.filter(q => q.section === 'ancient').length,
            level1: questions.filter(q => q.level === 1).length,
            level2: questions.filter(q => q.level === 2).length,
            level3: questions.filter(q => q.level === 3).length,
        };
    },

    getQuestionsByFilter: (filters: {
        level?: string;
        section?: string;
        search?: string;
    }) => {
        let questions = getAllQuestions();

        if (filters.level && filters.level !== 'all') {
            questions = questions.filter(q => q.level.toString() === filters.level);
        }

        if (filters.section && filters.section !== 'all') {
            questions = questions.filter(q => q.section === filters.section);
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            questions = questions.filter(q =>
                q.question.toLowerCase().includes(searchLower) ||
                (q.explanation && q.explanation.toLowerCase().includes(searchLower))
            );
        }

        return questions;
    }
};
