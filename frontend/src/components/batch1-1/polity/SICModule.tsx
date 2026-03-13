"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface SICModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function SICModule({ onComplete, isCompleted, chapterNumber }: SICModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 63}
            title="State Information Commission"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Right to Information Act, 2005",
                "Composition and Appointment",
                "Powers and Functions"
            ]}
            keyConcepts={[
                "RTI Act 2005: Established to provide for the constitution of State Information Commissions.",
                "Composition: Consists of the State Chief Information Commissioner and not more than 10 State Information Commissioners.",
                "Appointment: Appointed by the Governor on the recommendation of a committee."
            ]}
            prelimsPointers={[
                "The committee includes the CM, Leader of Opposition, and a State Cabinet Minister nominated by the CM.",
                "The Commission has the powers of a civil court while inquiring into any matter.",
                "Can impose penalties on Public Information Officers (PIOs)."
            ]}
        />
    );
}
