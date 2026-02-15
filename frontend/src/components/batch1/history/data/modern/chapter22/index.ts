import { MODERN_CHAPTER_22_CONTENT } from "./content";
import { MODERN_CHAPTER_22_MCQS } from "./mcqs";

export * from './content';
export * from './mcqs';

export const MODERN_CHAPTER_22 = {
    ...MODERN_CHAPTER_22_CONTENT,
    mcqs: MODERN_CHAPTER_22_MCQS
};
