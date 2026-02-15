import { MODERN_CHAPTER_25_CONTENT } from "./content";
import { MODERN_CHAPTER_25_MCQS } from "./mcqs";

export * from './content';
export * from './mcqs';

export const MODERN_CHAPTER_25 = {
    ...MODERN_CHAPTER_25_CONTENT,
    mcqs: MODERN_CHAPTER_25_MCQS
};
