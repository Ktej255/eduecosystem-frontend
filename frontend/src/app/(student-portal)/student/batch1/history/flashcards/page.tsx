"use client";

import React, { Suspense } from 'react';
import HistoryFeaturePlaceholder from '@/components/batch1/history/HistoryFeaturePlaceholder';
import { StickyNote } from 'lucide-react';

function FlashcardsContent() {
    return (
        <HistoryFeaturePlaceholder
            title="Flashcards Coming Soon"
            description="We are currently curating high-yield revision flashcards for this chapter. Check back shortly!"
            icon={StickyNote}
        />
    );
}

export default function HistoryFlashcardsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FlashcardsContent />
        </Suspense>
    );
}
