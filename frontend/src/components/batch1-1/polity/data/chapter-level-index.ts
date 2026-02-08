import { ChapterLevelData } from "../level-types";
import { CHAPTER_1_LEVELS } from "./chapters/chapter-1";
import { CHAPTER_2_LEVELS } from "./chapters/chapter-2";
import { CHAPTER_3_LEVELS } from "./chapters/chapter-3";
import { CHAPTER_4_LEVELS } from "./chapters/chapter-4";
import { CHAPTER_5_LEVELS } from "./chapters/chapter-5";
import { CHAPTER_6_LEVELS } from "./chapters/chapter-6";
import { CHAPTER_7_LEVELS } from "./chapters/chapter-7";
import { CHAPTER_8_LEVELS } from "./chapters/chapter-8";
import { CHAPTER_9_LEVELS } from "./chapters/chapter-9";
import { CHAPTER_10_LEVELS } from "./chapters/chapter-10";
import { CHAPTER_11_LEVELS } from "./chapters/chapter-11";
import { CHAPTER_12_LEVELS } from "./chapters/chapter-12";

// Map topicId to its Level Data
export const CHAPTER_LEVEL_DATA: Record<number, ChapterLevelData> = {
    1: CHAPTER_1_LEVELS,
    2: CHAPTER_2_LEVELS,
    3: CHAPTER_3_LEVELS,
    4: CHAPTER_4_LEVELS,
    5: CHAPTER_5_LEVELS,
    6: CHAPTER_6_LEVELS,
    7: CHAPTER_7_LEVELS,
    8: CHAPTER_8_LEVELS,
    9: CHAPTER_9_LEVELS,
    10: CHAPTER_10_LEVELS,
    11: CHAPTER_11_LEVELS,
    12: CHAPTER_12_LEVELS
    // Add more chapters here as they are implemented
};

export function getChapterLevels(topicId: number): ChapterLevelData | undefined {
    return CHAPTER_LEVEL_DATA[topicId];
}
