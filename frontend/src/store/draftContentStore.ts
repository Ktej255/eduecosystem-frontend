"use client";

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface DraftMCQ {
    id: string;
    chapterId: string;
    subtopicId: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    createdAt: string;
}

interface DraftFlashcard {
    id: string;
    chapterId: string;
    subtopicId: string;
    front: string;
    back: string;
    createdAt: string;
}

interface DraftContentState {
    draftMCQs: DraftMCQ[];
    draftFlashcards: DraftFlashcard[];
    isPreviewMode: boolean;

    // Actions
    addDraftMCQ: (mcq: Omit<DraftMCQ, "id" | "createdAt">) => void;
    removeDraftMCQ: (id: string) => void;
    addDraftFlashcard: (card: Omit<DraftFlashcard, "id" | "createdAt">) => void;
    removeDraftFlashcard: (id: string) => void;
    setPreviewMode: (enabled: boolean) => void;
    clearDrafts: () => void;
}

export const useDraftContentStore = create<DraftContentState>()(
    persist(
        (set) => ({
            draftMCQs: [],
            draftFlashcards: [],
            isPreviewMode: false,

            addDraftMCQ: (mcq) => set((state) => ({
                draftMCQs: [
                    ...state.draftMCQs,
                    { ...mcq, id: `draft-mcq-${Date.now()}`, createdAt: new Date().toISOString() }
                ]
            })),

            removeDraftMCQ: (id) => set((state) => ({
                draftMCQs: state.draftMCQs.filter(m => m.id !== id)
            })),

            addDraftFlashcard: (card) => set((state) => ({
                draftFlashcards: [
                    ...state.draftFlashcards,
                    { ...card, id: `draft-fc-${Date.now()}`, createdAt: new Date().toISOString() }
                ]
            })),

            removeDraftFlashcard: (id) => set((state) => ({
                draftFlashcards: state.draftFlashcards.filter(f => f.id !== id)
            })),

            setPreviewMode: (enabled) => set({ isPreviewMode: enabled }),

            clearDrafts: () => set({ draftMCQs: [], draftFlashcards: [] }),
        }),
        {
            name: 'edueco-draft-content',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
