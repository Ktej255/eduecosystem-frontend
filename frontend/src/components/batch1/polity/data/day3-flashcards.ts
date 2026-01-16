import { CHAPTER16_FLASHCARDS } from "./flashcards/chapter16-flashcards";
import { CHAPTER17_FLASHCARDS } from "./flashcards/chapter17-flashcards";
import { Flashcard } from "../../flashcard/flashcard-utils";

// Combine strictly for Week 1 Day 3
export const DAY3_FLASHCARDS: Flashcard[] = [
    ...CHAPTER16_FLASHCARDS,
    ...CHAPTER17_FLASHCARDS
];
