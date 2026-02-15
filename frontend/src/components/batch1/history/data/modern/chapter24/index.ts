import { MODERN_CHAPTER_24_CONTENT } from "./content";
import { MODERN_CHAPTER_24_MCQS } from "./mcqs";

export * from './content';
export * from './mcqs';

export const MODERN_CHAPTER_24 = {
    ...MODERN_CHAPTER_24_CONTENT,
    mcqs: MODERN_CHAPTER_24_MCQS
};
