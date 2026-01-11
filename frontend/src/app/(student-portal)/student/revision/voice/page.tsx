"use client";

import GenericVoiceRecallMode, { Flashcard } from '@/components/revision-portal/modes/VoiceRecallMode';
import { POLITY_REVISION_CHAPTERS } from '@/components/batch1/polity/data/RevisionRegistry';
import { useMemo } from 'react';

export default function StudentVoiceRecallPage() {

    // Aggregate all flashcards from all chapters
    // In a real app, this might come from an API or filter based on user selection
    const allFlashcards = useMemo(() => {
        const cards: Flashcard[] = [];
        POLITY_REVISION_CHAPTERS.forEach(chapter => {
            if (chapter.flashcards) {
                chapter.flashcards.forEach(fc => {
                    cards.push({
                        id: fc.id,
                        front: fc.question,
                        back: fc.answer,
                        category: fc.category,
                        source: `Chapter ${chapter.id}: ${chapter.title}`
                    });
                });
            }
        });
        return cards;
    }, []);

    return (
        <GenericVoiceRecallMode
            flashcards={allFlashcards}
            backLink="/student/revision"
            title="Polity Voice Recall"
        />
    );
}
