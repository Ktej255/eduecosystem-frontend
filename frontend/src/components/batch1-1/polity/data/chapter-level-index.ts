import { ChapterLevelData, FormattedChapterLevelData, LevelQuestion } from "./level-types";
import { MCQ } from "@/components/batch1/polity/data/mcq-utils";

import { DAY1_MCQS } from "@/components/batch1/polity/data/day1-mcqs";
import { DAY2_MCQS } from "@/components/batch1/polity/data/day2-mcqs";
import { DAY3_MCQS } from "@/components/batch1/polity/data/day3-mcqs";
import { DAY4_MCQS } from "@/components/batch1/polity/data/day4-mcqs";
import { DAY5_MCQS } from "@/components/batch1/polity/data/day5-mcqs";
import { DAY6_MCQS } from "@/components/batch1/polity/data/day6-mcqs";
import { DAY7_MCQS } from "@/components/batch1/polity/data/day7-mcqs";
import { DAY8_MCQS } from "@/components/batch1/polity/data/day8-mcqs";
import { DAY9_MCQS } from "@/components/batch1/polity/data/day9-mcqs";
import { DAY10_MCQS } from "@/components/batch1/polity/data/day10-mcqs";
import { DAY11_MCQS } from "@/components/batch1/polity/data/day11-mcqs";
import { DAY12_MCQS } from "@/components/batch1/polity/data/day12-mcqs";
import { DAY13_MCQS } from "@/components/batch1/polity/data/day13-mcqs";
import { DAY14_MCQS } from "@/components/batch1/polity/data/day14-mcqs";
import { DAY15_MCQS } from "@/components/batch1/polity/data/day15-mcqs";
import { DAY16_MCQS } from "@/components/batch1/polity/data/day16-mcqs";
import { DAY17_MCQS } from "@/components/batch1/polity/data/day17-mcqs";
import { DAY18_MCQS } from "@/components/batch1/polity/data/day18-mcqs";
import { DAY19_MCQS } from "@/components/batch1/polity/data/day19-mcqs";
import { DAY20_MCQS } from "@/components/batch1/polity/data/day20-mcqs";
import { DAY21_MCQS } from "@/components/batch1/polity/data/day21-mcqs";
import { DAY22_MCQS } from "@/components/batch1/polity/data/day22-mcqs";
import { DAY23_MCQS } from "@/components/batch1/polity/data/day23-mcqs";
import { DAY24_MCQS } from "@/components/batch1/polity/data/day24-mcqs";
import { DAY25_MCQS } from "@/components/batch1/polity/data/day25-mcqs";
import { DAY26_MCQS } from "@/components/batch1/polity/data/day26-mcqs";
import { DAY27_MCQS } from "@/components/batch1/polity/data/day27-mcqs";
import { DAY28_MCQS } from "@/components/batch1/polity/data/day28-mcqs";
import { DAY29_MCQS } from "@/components/batch1/polity/data/day29-mcqs";
import { DAY30_MCQS } from "@/components/batch1/polity/data/day30-mcqs";
import { DAY31_MCQS } from "@/components/batch1/polity/data/day31-mcqs";
import { DAY32_MCQS } from "@/components/batch1/polity/data/day32-mcqs";
import { DAY33_MCQS } from "@/components/batch1/polity/data/day33-mcqs";
import { DAY34_MCQS } from "@/components/batch1/polity/data/day34-mcqs";
import { DAY35_MCQS } from "@/components/batch1/polity/data/day35-mcqs";
import { DAY36_MCQS } from "@/components/batch1/polity/data/day36-mcqs";
import { DAY37_MCQS } from "@/components/batch1/polity/data/day37-mcqs";
import { DAY38_MCQS } from "@/components/batch1/polity/data/day38-mcqs";
import { DAY39_MCQS } from "@/components/batch1/polity/data/day39-mcqs";
import { DAY40_MCQS } from "@/components/batch1/polity/data/day40-mcqs";
import { DAY41_MCQS } from "@/components/batch1/polity/data/day41-mcqs";
import { DAY42_MCQS } from "@/components/batch1/polity/data/day42-mcqs";
import { DAY43_MCQS } from "@/components/batch1/polity/data/day43-mcqs";
import { DAY44_MCQS } from "@/components/batch1/polity/data/day44-mcqs";
import { DAY45_MCQS } from "@/components/batch1/polity/data/day45-mcqs";
import { DAY46_MCQS } from "@/components/batch1/polity/data/day46-mcqs";
import { DAY47_MCQS } from "@/components/batch1/polity/data/day47-mcqs";
import { DAY48_MCQS } from "@/components/batch1/polity/data/day48-mcqs";
import { DAY49_MCQS } from "@/components/batch1/polity/data/day49-mcqs";
import { DAY50_MCQS } from "@/components/batch1/polity/data/day50-mcqs";
import { DAY51_MCQS } from "@/components/batch1/polity/data/day51-mcqs";
import { DAY52_MCQS } from "@/components/batch1/polity/data/day52-mcqs";
import { DAY53_MCQS } from "@/components/batch1/polity/data/day53-mcqs";
import { DAY54_MCQS } from "@/components/batch1/polity/data/day54-mcqs";
import { DAY55_MCQS } from "@/components/batch1/polity/data/day55-mcqs";
import { DAY56_MCQS } from "@/components/batch1/polity/data/day56-mcqs";
import { DAY57_MCQS } from "@/components/batch1/polity/data/day57-mcqs";
import { DAY58_MCQS } from "@/components/batch1/polity/data/day58-mcqs";
import { DAY59_MCQS } from "@/components/batch1/polity/data/day59-mcqs";
import { DAY60_MCQS } from "@/components/batch1/polity/data/day60-mcqs";
import { DAY61_MCQS } from "@/components/batch1/polity/data/day61-mcqs";
import { DAY62_MCQS } from "@/components/batch1/polity/data/day62-mcqs";
import { DAY63_MCQS } from "@/components/batch1/polity/data/day63-mcqs";
import { DAY64_MCQS } from "@/components/batch1/polity/data/day64-mcqs";
import { DAY65_MCQS } from "@/components/batch1/polity/data/day65-mcqs";
import { DAY66_MCQS } from "@/components/batch1/polity/data/day66-mcqs";
import { DAY67_MCQS } from "@/components/batch1/polity/data/day67-mcqs";

export const CHAPTER_MCQS: Record<number, MCQ[]> = {
    1: DAY1_MCQS,
    2: DAY2_MCQS,
    3: DAY3_MCQS,
    4: DAY4_MCQS,
    5: DAY5_MCQS,
    6: DAY6_MCQS,
    7: DAY7_MCQS,
    8: DAY8_MCQS,
    9: DAY9_MCQS,
    10: DAY10_MCQS,
    11: DAY11_MCQS,
    12: DAY12_MCQS,
    13: DAY13_MCQS,
    14: DAY14_MCQS,
    15: DAY15_MCQS,
    16: DAY16_MCQS,
    17: DAY17_MCQS,
    18: DAY18_MCQS,
    19: DAY19_MCQS,
    20: DAY20_MCQS,
    21: DAY21_MCQS,
    22: DAY22_MCQS,
    23: DAY23_MCQS,
    24: DAY24_MCQS,
    25: DAY25_MCQS,
    26: DAY26_MCQS,
    27: DAY27_MCQS,
    28: DAY28_MCQS,
    29: DAY29_MCQS,
    30: DAY30_MCQS,
    31: DAY31_MCQS,
    32: DAY32_MCQS,
    33: DAY33_MCQS,
    34: DAY34_MCQS,
    35: DAY35_MCQS,
    36: DAY36_MCQS,
    37: DAY37_MCQS,
    38: DAY38_MCQS,
    39: DAY39_MCQS,
    40: DAY40_MCQS,
    41: DAY41_MCQS,
    42: DAY42_MCQS,
    43: DAY43_MCQS,
    44: DAY44_MCQS,
    45: DAY45_MCQS,
    46: DAY46_MCQS,
    47: DAY47_MCQS,
    48: DAY48_MCQS,
    49: DAY49_MCQS,
    50: DAY50_MCQS,
    51: DAY51_MCQS,
    52: DAY52_MCQS,
    53: DAY53_MCQS,
    54: DAY54_MCQS,
    55: DAY55_MCQS,
    56: DAY56_MCQS,
    57: DAY57_MCQS,
    58: DAY58_MCQS,
    59: DAY59_MCQS,
    60: DAY60_MCQS,
    61: DAY61_MCQS,
    62: DAY62_MCQS,
    63: DAY63_MCQS,
    64: DAY64_MCQS,
    65: DAY65_MCQS,
    66: DAY66_MCQS,
    67: DAY67_MCQS,
    68: [], // Missing data for Topic 68
    69: [], // Missing data for Topic 69
    70: [], // Missing data for Topic 70
    71: [], // Missing data for Topic 71
    72: [], // Missing data for Topic 72
    73: [], // Missing data for Topic 73
    74: [], // Missing data for Topic 74
    75: [], // Missing data for Topic 75
    76: [], // Missing data for Topic 76
    77: [], // Missing data for Topic 77
    78: [], // Missing data for Topic 78
    79: [], // Missing data for Topic 79
    80: [], // Missing data for Topic 80
    81: [], // Missing data for Topic 81
    82: [], // Missing data for Topic 82
    83: [], // Missing data for Topic 83
    84: [], // Missing data for Topic 84
    85: [], // Missing data for Topic 85
    86: [], // Missing data for Topic 86
    87: [], // Missing data for Topic 87
    88: [], // Missing data for Topic 88
    89: [], // Missing data for Topic 89
    90: [], // Missing data for Topic 90
    91: [], // Missing data for Topic 91
    92: [], // Missing data for Topic 92
    93: [], // Missing data for Topic 93
    94: [], // Missing data for Topic 94
    95: [], // Missing data for Topic 95
};

export function getChapterLevels(topicId: number): FormattedChapterLevelData | undefined {
    const questions = CHAPTER_MCQS[topicId];
    if (!questions || questions.length === 0) return undefined;

    // The new standard format splits questions by difficulty_tier
    const level1 = questions.filter(q => q.difficulty_tier === 'Level_1' || q.level === 'Easy');
    const level2 = questions.filter(q => q.difficulty_tier === 'Level_2' || q.level === 'Moderate');
    const level3 = questions.filter(q => q.difficulty_tier === 'Level_3' || q.level === 'Tough');

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
