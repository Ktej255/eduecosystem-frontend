"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface AttorneyGeneralModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function AttorneyGeneralModule({ onComplete, isCompleted, chapterNumber }: AttorneyGeneralModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 53}
            title="Attorney General of India"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Constitutional Status (Article 76)",
                "Appointment and Eligibility",
                "Duties, Rights, and Limitations"
            ]}
            keyConcepts={[
                "Highest Law Officer: The AG is the chief legal advisor to the Government of India.",
                "Right of Audience: The AG has the right to speak in all courts in India and in both Houses of Parliament.",
                "Pleasure of President: The AG holds office during the pleasure of the President."
            ]}
            prelimsPointers={[
                "Must be qualified to be appointed a judge of the Supreme Court.",
                "Does NOT have the right to vote in Parliament.",
                "Constitution does not contain the procedure and grounds for removal."
            ]}
        />
    );
}
