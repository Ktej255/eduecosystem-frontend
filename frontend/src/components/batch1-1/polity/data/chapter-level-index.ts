import { ChapterLevelData, FormattedChapterLevelData, LevelQuestion } from "./level-types";
import { MCQ } from "@/components/batch1/polity/data/mcq-utils";

import { CHAPTER_1_MCQS as TOPIC_1_MCQS } from '@/components/batch1/polity/data/mcqs/chapter1-mcqs';
import { CHAPTER_2_MCQS as TOPIC_2_MCQS } from '@/components/batch1/polity/data/mcqs/chapter2-mcqs';
import { CHAPTER_3_MCQS as TOPIC_3_MCQS } from '@/components/batch1/polity/data/mcqs/chapter3-mcqs';
import { CHAPTER_4_MCQS as TOPIC_4_MCQS } from '@/components/batch1/polity/data/mcqs/chapter4-mcqs';
import { CHAPTER_5_MCQS as TOPIC_5_MCQS } from '@/components/batch1/polity/data/mcqs/chapter5-mcqs';
import { CHAPTER_6_MCQS as TOPIC_6_MCQS } from '@/components/batch1/polity/data/mcqs/chapter6-mcqs';
import { CHAPTER_7_MCQS as TOPIC_7_MCQS } from '@/components/batch1/polity/data/mcqs/chapter7-mcqs';
import { CHAPTER_8_MCQS as TOPIC_8_MCQS } from '@/components/batch1/polity/data/mcqs/chapter8-mcqs';
import { CHAPTER_9_MCQS as TOPIC_9_MCQS } from '@/components/batch1/polity/data/mcqs/chapter9-mcqs';
import { CHAPTER_10_MCQS as TOPIC_10_MCQS } from '@/components/batch1/polity/data/mcqs/chapter10-mcqs';
import { CHAPTER_11_MCQS as TOPIC_11_MCQS } from '@/components/batch1/polity/data/mcqs/chapter11-mcqs';
import { CHAPTER_12_MCQS as TOPIC_12_MCQS } from '@/components/batch1/polity/data/mcqs/chapter12-mcqs';
import { CHAPTER_13_MCQS as TOPIC_13_MCQS } from '@/components/batch1/polity/data/mcqs/chapter13-mcqs';
import { CHAPTER_14_MCQS as TOPIC_14_MCQS } from '@/components/batch1/polity/data/mcqs/chapter14-mcqs';
import { CHAPTER_15_MCQS as TOPIC_15_MCQS } from '@/components/batch1/polity/data/mcqs/chapter15-mcqs';
import { CHAPTER16_MCQS as TOPIC_16_MCQS } from '@/components/batch1/polity/data/mcqs/chapter16-mcqs';
import { CHAPTER17_MCQS as TOPIC_17_MCQS } from '@/components/batch1/polity/data/mcqs/chapter17-mcqs';
import { CHAPTER_18_MCQS as TOPIC_18_MCQS } from '@/components/batch1/polity/data/mcqs/chapter18-mcqs';
import { CHAPTER_19_MCQS as TOPIC_19_MCQS } from '@/components/batch1/polity/data/mcqs/chapter19-mcqs';
import { CHAPTER_20_MCQS as TOPIC_20_MCQS } from '@/components/batch1/polity/data/mcqs/chapter20-mcqs';
import { CHAPTER_21_MCQS as TOPIC_21_MCQS } from '@/components/batch1/polity/data/mcqs/chapter21-mcqs';
import { CHAPTER_22_MCQS as TOPIC_22_MCQS } from '@/components/batch1/polity/data/mcqs/chapter22-mcqs';
import { CHAPTER_23_MCQS as TOPIC_23_MCQS } from '@/components/batch1/polity/data/mcqs/chapter23-mcqs';
import { CHAPTER_24_MCQS as TOPIC_24_MCQS } from '@/components/batch1/polity/data/mcqs/chapter24-mcqs';
import { CHAPTER_25_MCQS as TOPIC_25_MCQS } from '@/components/batch1/polity/data/mcqs/chapter25-mcqs';
import { CHAPTER_26_MCQS as TOPIC_26_MCQS } from '@/components/batch1/polity/data/mcqs/chapter26-mcqs';
import { CHAPTER_27_MCQS as TOPIC_27_MCQS } from '@/components/batch1/polity/data/mcqs/chapter27-mcqs';
import { CHAPTER_28_MCQS as TOPIC_28_MCQS } from '@/components/batch1/polity/data/mcqs/chapter28-mcqs';
import { CHAPTER_29_MCQS as TOPIC_29_MCQS } from '@/components/batch1/polity/data/mcqs/chapter29-mcqs';
import { CHAPTER_30_MCQS as TOPIC_30_MCQS } from '@/components/batch1/polity/data/mcqs/chapter30-mcqs';
import { CHAPTER_31_MCQS as TOPIC_31_MCQS } from '@/components/batch1/polity/data/mcqs/chapter31-mcqs';
import { CHAPTER_32_MCQS as TOPIC_32_MCQS } from '@/components/batch1/polity/data/mcqs/chapter32-mcqs';
import { CHAPTER_33_MCQS as TOPIC_33_MCQS } from '@/components/batch1/polity/data/mcqs/chapter33-mcqs';
import { CHAPTER_34_MCQS as TOPIC_34_MCQS } from '@/components/batch1/polity/data/mcqs/chapter34-mcqs';
import { CHAPTER_35_MCQS as TOPIC_35_MCQS } from '@/components/batch1/polity/data/mcqs/chapter35-mcqs';
import { CHAPTER_36_MCQS as TOPIC_36_MCQS } from '@/components/batch1/polity/data/mcqs/chapter36-mcqs';
import { CHAPTER_37_MCQS as TOPIC_37_MCQS } from '@/components/batch1/polity/data/mcqs/chapter37-mcqs';
import { CHAPTER_38_MCQS as TOPIC_38_MCQS } from '@/components/batch1/polity/data/mcqs/chapter38-mcqs';
import { CHAPTER_39_MCQS as TOPIC_39_MCQS } from '@/components/batch1/polity/data/mcqs/chapter39-mcqs';
import { CHAPTER_40_MCQS as TOPIC_40_MCQS } from '@/components/batch1/polity/data/mcqs/chapter40-mcqs';
import { CHAPTER_98_MCQS as TOPIC_41_MCQS } from '@/components/batch1/polity/data/mcqs/chapter98-mcqs';
import { CHAPTER_99_MCQS as TOPIC_42_MCQS } from '@/components/batch1/polity/data/mcqs/chapter99-mcqs';
import { CHAPTER_41_MCQS as TOPIC_43_MCQS } from '@/components/batch1/polity/data/mcqs/chapter41-mcqs';
import { CHAPTER_42_MCQS as TOPIC_44_MCQS } from '@/components/batch1/polity/data/mcqs/chapter42-mcqs';
import { CHAPTER_43_MCQS as TOPIC_45_MCQS } from '@/components/batch1/polity/data/mcqs/chapter43-mcqs';
import { CHAPTER_44_MCQS as TOPIC_46_MCQS } from '@/components/batch1/polity/data/mcqs/chapter44-mcqs';
import { CHAPTER_45_MCQS as TOPIC_47_MCQS } from '@/components/batch1/polity/data/mcqs/chapter45-mcqs';
import { CHAPTER_46_MCQS as TOPIC_48_MCQS } from '@/components/batch1/polity/data/mcqs/chapter46-mcqs';
import { CHAPTER_47_MCQS as TOPIC_49_MCQS } from '@/components/batch1/polity/data/mcqs/chapter47-mcqs';
import { CHAPTER_48_MCQS as TOPIC_50_MCQS } from '@/components/batch1/polity/data/mcqs/chapter48-mcqs';
import { CHAPTER_49_MCQS as TOPIC_51_MCQS } from '@/components/batch1/polity/data/mcqs/chapter49-mcqs';
import { CHAPTER_50_MCQS as TOPIC_52_MCQS } from '@/components/batch1/polity/data/mcqs/chapter50-mcqs';
import { CHAPTER_96_MCQS as TOPIC_53_MCQS } from '@/components/batch1/polity/data/mcqs/chapter96-mcqs';
import { CHAPTER_97_MCQS as TOPIC_54_MCQS } from '@/components/batch1/polity/data/mcqs/chapter97-mcqs';
import { CHAPTER_51_MCQS as TOPIC_56_MCQS } from '@/components/batch1/polity/data/mcqs/chapter51-mcqs';
import { CHAPTER_52_MCQS as TOPIC_57_MCQS } from '@/components/batch1/polity/data/mcqs/chapter52-mcqs';
import { CHAPTER_53_MCQS as TOPIC_58_MCQS } from '@/components/batch1/polity/data/mcqs/chapter53-mcqs';
import { CHAPTER_61_MCQS as TOPIC_59_MCQS } from '@/components/batch1/polity/data/mcqs/chapter61-mcqs';
import { CHAPTER_62_MCQS as TOPIC_60_MCQS } from '@/components/batch1/polity/data/mcqs/chapter62-mcqs';
import { CHAPTER_63_MCQS as TOPIC_61_MCQS } from '@/components/batch1/polity/data/mcqs/chapter63-mcqs';
import { CHAPTER_54_MCQS as TOPIC_62_MCQS } from '@/components/batch1/polity/data/mcqs/chapter54-mcqs';
import { CHAPTER_55_MCQS as TOPIC_63_MCQS } from '@/components/batch1/polity/data/mcqs/chapter55-mcqs';
import { CHAPTER_56_MCQS as TOPIC_64_MCQS } from '@/components/batch1/polity/data/mcqs/chapter56-mcqs';
import { CHAPTER_57_MCQS as TOPIC_65_MCQS } from '@/components/batch1/polity/data/mcqs/chapter57-mcqs';
import { CHAPTER_58_MCQS as TOPIC_66_MCQS } from '@/components/batch1/polity/data/mcqs/chapter58-mcqs';
import { CHAPTER_59_MCQS as TOPIC_67_MCQS } from '@/components/batch1/polity/data/mcqs/chapter59-mcqs';
import { CHAPTER_60_MCQS as TOPIC_68_MCQS } from '@/components/batch1/polity/data/mcqs/chapter60-mcqs';
import { CHAPTER_81_MCQS as TOPIC_69_MCQS } from '@/components/batch1/polity/data/mcqs/chapter81-mcqs';
import { CHAPTER_65_MCQS as TOPIC_70_MCQS } from '@/components/batch1/polity/data/mcqs/chapter65-mcqs';
import { CHAPTER_95_MCQS as TOPIC_73_MCQS } from '@/components/batch1/polity/data/mcqs/chapter95-summary';
import { CHAPTER_76_MCQS as TOPIC_74_MCQS } from '@/components/batch1/polity/data/mcqs/chapter76-mcqs';
import { CHAPTER_77_MCQS as TOPIC_75_MCQS } from '@/components/batch1/polity/data/mcqs/chapter77-mcqs';
import { CHAPTER_78_MCQS as TOPIC_76_MCQS } from '@/components/batch1/polity/data/mcqs/chapter78-mcqs';
import { CHAPTER_79_MCQS as TOPIC_77_MCQS } from '@/components/batch1/polity/data/mcqs/chapter79-mcqs';
import { CHAPTER_100_MCQS as TOPIC_78_MCQS } from '@/components/batch1/polity/data/mcqs/chapter100-mcqs';
import { CHAPTER_66_MCQS as TOPIC_79_MCQS } from '@/components/batch1/polity/data/mcqs/chapter66-mcqs';
import { CHAPTER_67_MCQS as TOPIC_80_MCQS } from '@/components/batch1/polity/data/mcqs/chapter67-mcqs';
import { CHAPTER_68_MCQS as TOPIC_81_MCQS } from '@/components/batch1/polity/data/mcqs/chapter68-mcqs';
import { CHAPTER_69_MCQS as TOPIC_82_MCQS } from '@/components/batch1/polity/data/mcqs/chapter69-mcqs';
import { CHAPTER_70_MCQS as TOPIC_83_MCQS } from '@/components/batch1/polity/data/mcqs/chapter70-mcqs';
import { CHAPTER_71_MCQS as TOPIC_84_MCQS } from '@/components/batch1/polity/data/mcqs/chapter71-mcqs';
import { CHAPTER_72_MCQS as TOPIC_86_MCQS } from '@/components/batch1/polity/data/mcqs/chapter72-mcqs';
import { CHAPTER_73_MCQS as TOPIC_87_MCQS } from '@/components/batch1/polity/data/mcqs/chapter73-mcqs';
import { CHAPTER_74_MCQS as TOPIC_88_MCQS } from '@/components/batch1/polity/data/mcqs/chapter74-mcqs';
import { CHAPTER_75_MCQS as TOPIC_89_MCQS } from '@/components/batch1/polity/data/mcqs/chapter75-mcqs';
import { CHAPTER_93_MCQS as TOPIC_90_MCQS } from '@/components/batch1/polity/data/mcqs/chapter93-ncrwc';
import { CHAPTER_84_MCQS as TOPIC_95_MCQS } from '@/components/batch1/polity/data/mcqs/chapter84-mcqs';

export const CHAPTER_MCQS: Record<number, MCQ[]> = {
    1: TOPIC_1_MCQS || [],
    2: TOPIC_2_MCQS || [],
    3: TOPIC_3_MCQS || [],
    4: TOPIC_4_MCQS || [],
    5: TOPIC_5_MCQS || [],
    6: TOPIC_6_MCQS || [],
    7: TOPIC_7_MCQS || [],
    8: TOPIC_8_MCQS || [],
    9: TOPIC_9_MCQS || [],
    10: TOPIC_10_MCQS || [],
    11: TOPIC_11_MCQS || [],
    12: TOPIC_12_MCQS || [],
    13: TOPIC_13_MCQS || [],
    14: TOPIC_14_MCQS || [],
    15: TOPIC_15_MCQS || [],
    16: TOPIC_16_MCQS || [],
    17: TOPIC_17_MCQS || [],
    18: TOPIC_18_MCQS || [],
    19: TOPIC_19_MCQS || [],
    20: TOPIC_20_MCQS || [],
    21: TOPIC_21_MCQS || [],
    22: TOPIC_22_MCQS || [],
    23: TOPIC_23_MCQS || [],
    24: TOPIC_24_MCQS || [],
    25: TOPIC_25_MCQS || [],
    26: TOPIC_26_MCQS || [],
    27: TOPIC_27_MCQS || [],
    28: TOPIC_28_MCQS || [],
    29: TOPIC_29_MCQS || [],
    30: TOPIC_30_MCQS || [],
    31: TOPIC_31_MCQS || [],
    32: TOPIC_32_MCQS || [],
    33: TOPIC_33_MCQS || [],
    34: TOPIC_34_MCQS || [],
    35: TOPIC_35_MCQS || [],
    36: TOPIC_36_MCQS || [],
    37: TOPIC_37_MCQS || [],
    38: TOPIC_38_MCQS || [],
    39: TOPIC_39_MCQS || [],
    40: TOPIC_40_MCQS || [],
    41: TOPIC_41_MCQS || [],
    42: TOPIC_42_MCQS || [],
    43: TOPIC_43_MCQS || [],
    44: TOPIC_44_MCQS || [],
    45: TOPIC_45_MCQS || [],
    46: TOPIC_46_MCQS || [],
    47: TOPIC_47_MCQS || [],
    48: TOPIC_48_MCQS || [],
    49: TOPIC_49_MCQS || [],
    50: TOPIC_50_MCQS || [],
    51: TOPIC_51_MCQS || [],
    52: TOPIC_52_MCQS || [],
    53: TOPIC_53_MCQS || [],
    54: TOPIC_54_MCQS || [],
    55: [], // Missing Data
    56: TOPIC_56_MCQS || [],
    57: TOPIC_57_MCQS || [],
    58: TOPIC_58_MCQS || [],
    59: TOPIC_59_MCQS || [],
    60: TOPIC_60_MCQS || [],
    61: TOPIC_61_MCQS || [],
    62: TOPIC_62_MCQS || [],
    63: TOPIC_63_MCQS || [],
    64: TOPIC_64_MCQS || [],
    65: TOPIC_65_MCQS || [],
    66: TOPIC_66_MCQS || [],
    67: TOPIC_67_MCQS || [],
    68: TOPIC_68_MCQS || [],
    69: TOPIC_69_MCQS || [],
    70: TOPIC_70_MCQS || [],
    71: [], // Missing Data
    72: [], // Missing Data
    73: TOPIC_73_MCQS || [],
    74: TOPIC_74_MCQS || [],
    75: TOPIC_75_MCQS || [],
    76: TOPIC_76_MCQS || [],
    77: TOPIC_77_MCQS || [],
    78: TOPIC_78_MCQS || [],
    79: TOPIC_79_MCQS || [],
    80: TOPIC_80_MCQS || [],
    81: TOPIC_81_MCQS || [],
    82: TOPIC_82_MCQS || [],
    83: TOPIC_83_MCQS || [],
    84: TOPIC_84_MCQS || [],
    85: [], // Missing Data
    86: TOPIC_86_MCQS || [],
    87: TOPIC_87_MCQS || [],
    88: TOPIC_88_MCQS || [],
    89: TOPIC_89_MCQS || [],
    90: TOPIC_90_MCQS || [],
    91: [], // Missing Data
    92: [], // Missing Data
    93: [], // Missing Data
    94: [], // Missing Data
    95: TOPIC_95_MCQS || [],
};

export function getChapterLevels(topicId: number): FormattedChapterLevelData | undefined {
    const questions = CHAPTER_MCQS[topicId];
    if (!questions || !Array.isArray(questions) || questions.length === 0) return undefined;

    const level1 = questions.filter(q => q.difficulty_tier === 'Level_1' || q.level === 'Easy' || q.difficulty === 'easy' || q.difficulty === 'Easy');
    const level2 = questions.filter(q => q.difficulty_tier === 'Level_2' || q.level === 'Moderate' || q.difficulty === 'medium' || q.difficulty === 'Medium');
    const level3 = questions.filter(q => q.difficulty_tier === 'Level_3' || q.level === 'Tough' || q.difficulty === 'hard' || q.difficulty === 'Hard');

    const mapToLevelQuestion = (q: MCQ): LevelQuestion => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correctAnswerIndex: q.correctAnswer ?? q.correctIndex ?? 0,
        explanation: q.explanation || "Detailed explanation available in the master solution guide."
    });

    return {
        topicId,
        levels: [
            {
                levelId: 1,
                title: "Level 1: Foundation",
                description: "Test your fundamental understanding of this chapter's core concepts.",
                questions: level1.map(mapToLevelQuestion)
            },
            {
                levelId: 2,
                title: "Level 2: Advanced",
                description: "Application-based and multi-statement questions for deeper analysis.",
                questions: level2.map(mapToLevelQuestion)
            },
            {
                levelId: 3,
                title: "Level 3: Master",
                description: "UPSC standard questions with assertion-reasoning and complex matching.",
                questions: level3.map(mapToLevelQuestion)
            }
        ].filter(L => L.questions.length > 0)
    };
}
