"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import HistoryFeaturePlaceholder from '@/components/upsc/subjects/history/HistoryFeaturePlaceholder';
import GenericFlashcardSession from '@/components/upsc/common/framework/GenericFlashcardSession';
import { loadHistoryFlashcards } from '@/components/upsc/subjects/history/data/history-flashcard-loader';
import { Flashcard as SourceFlashcard } from '@/types/flashcard';
import { Flashcard as SessionFlashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';
import { toast } from 'sonner';

function FlashcardsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const chapterParam = searchParams.get('chapter');
    const section = searchParams.get('section') || 'modern';

    const [flashcards, setFlashcards] = useState<SessionFlashcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadCards() {
            if (!chapterParam) {
                setLoading(false);
                return;
            }

            try {
                // Handle multiple chapters logic if needed, but for now take first
                // Or if comma separated, load all?
                const chapterIds = chapterParam.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

                if (chapterIds.length === 0) {
                    setLoading(false);
                    return;
                }

                const loadedCards: SourceFlashcard[] = [];
                for (const chId of chapterIds) {
                    const cards = await loadHistoryFlashcards(chId, section);
                    // loadHistoryFlashcards returns Promise<any[]> mapped to SourceFlashcard structure effectively
                    // but typescript might see it as any[]
                    loadedCards.push(...(cards as unknown as SourceFlashcard[]));
                }

                // Map to SessionFlashcard
                const mappedCards: SessionFlashcard[] = loadedCards.map((fc, idx) => ({
                    id: fc.id || `fc-${idx}-${Date.now()}`,
                    front: fc.front,
                    back: fc.back,
                    // Map or default to 'fact'
                    category: (fc.category as any) || 'fact',
                    source: `Chapter ${fc.chapterId || chapterIds[0]}`,
                    highlight: false
                }));

                setFlashcards(mappedCards);
            } catch (err) {
                console.error("Error loading flashcards:", err);
                setError("Failed to load flashcards. Please try again.");
                toast.error("Failed to load flashcards");
            } finally {
                setLoading(false);
            }
        }

        loadCards();
    }, [chapterParam, section]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-muted dark:bg-black">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                <span className="ml-2 text-muted-foreground font-medium">Loading Revision Cards...</span>
            </div>
        );
    }

    if (!chapterParam || flashcards.length === 0) {
        return (
            <HistoryFeaturePlaceholder
                title="No Flashcards Found"
                description={error || "Select a chapter to start revising."}
                icon={Loader2} // Using Loader as placeholder icon or any other
            />
        );
    }

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] pt-6">
            <GenericFlashcardSession
                flashcards={flashcards}
                title={`Chapter ${chapterParam} Revision`}
                onClose={() => router.back()}
            />
        </div>
    );
}

export default function HistoryFlashcardsPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
            <FlashcardsContent />
        </Suspense>
    );
}
