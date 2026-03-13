"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface LinguisticMinoritiesModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function LinguisticMinoritiesModule({ onComplete, isCompleted, chapterNumber }: LinguisticMinoritiesModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 51}
            title="Special Officer for Linguistic Minorities"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Constitutional Provisions (Article 350B)",
                "Appointment and Tenure",
                "Functions and Objectives"
            ]}
            keyConcepts={[
                "Article 350B: Created by the 7th Constitutional Amendment Act, 1956.",
                "Appointment: Appointed by the President of India.",
                "Reporting: Submits reports to the President through the Union Minority Affairs Minister."
            ]}
            prelimsPointers={[
                "The office was established in 1957.",
                "Headquarters are at Allahabad (Prayagraj).",
                "Regional offices at Belgaum, Chennai, and Kolkata."
            ]}
        />
    );
}
