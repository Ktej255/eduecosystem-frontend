"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface SHRCModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function SHRCModule({ onComplete, isCompleted, chapterNumber }: SHRCModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 58}
            title="State Human Rights Commission"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Protection of Human Rights Act, 1993",
                "Composition and Appointment",
                "Functions and Jurisdiction"
            ]}
            keyConcepts={[
                "Statutory Body: Established under the Protection of Human Rights Act, 1993.",
                "Composition: Consists of a Chairperson and two members.",
                "Appointment: Chairperson and members are appointed by the Governor."
            ]}
            prelimsPointers={[
                "Jurisdiction: Can only inquire into violations of human rights in respect of subjects in the State List and Concurrent List.",
                "Removal: Members can be removed only by the President (not the Governor).",
                "Recommendations: The Commission's recommendations are advisory in nature."
            ]}
        />
    );
}
