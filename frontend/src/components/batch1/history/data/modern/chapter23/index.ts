import { MODERN_CHAPTER_23_CONTENT } from "./content";
import { MODERN_CHAPTER_23_MCQS } from "./mcqs";

export * from './content';
export * from './mcqs';

export const MODERN_CHAPTER_23 = {
    ...MODERN_CHAPTER_23_CONTENT,
    mcqs: MODERN_CHAPTER_23_MCQS
};
