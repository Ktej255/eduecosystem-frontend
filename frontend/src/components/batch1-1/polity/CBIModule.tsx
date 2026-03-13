"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface CBIModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function CBIModule({ onComplete, isCompleted, chapterNumber }: CBIModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 67}
            title="Central Bureau of Investigation"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Delhi Special Police Establishment Act, 1946",
                "Santhanam Committee Recommendation",
                "Director of CBI and Appointment Process"
            ]}
            keyConcepts={[
                "Establishment: Set up in 1963 by a resolution of the Ministry of Home Affairs.",
                "Status: It is not a statutory body; it derives its powers from the DSPE Act, 1946.",
                "Director: Appointed by the Central Government on the recommendation of a three-member committee."
            ]}
            prelimsPointers={[
                "Appointment Committee: PM (Chairperson), Leader of Opposition/Single Largest Party, and CJI or SC Judge.",
                "Provides assistance to the Central Vigilance Commission and Lokpal.",
                "Nodal agency in India for INTERPOL."
            ]}
        />
    );
}
