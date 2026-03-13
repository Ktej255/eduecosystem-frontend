"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface AdvocateGeneralModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function AdvocateGeneralModule({ onComplete, isCompleted, chapterNumber }: AdvocateGeneralModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 54}
            title="Advocate General of the State"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Constitutional Status (Article 165)",
                "Appointment and Eligibility",
                "Duties and Privileges"
            ]}
            keyConcepts={[
                "Highest Law Officer in State: Counterpart to the Attorney General at the Union level.",
                "Appointment: Appointed by the Governor of the State.",
                "Tenure: Holds office during the pleasure of the Governor."
            ]}
            prelimsPointers={[
                "Must be qualified to be appointed a judge of a High Court.",
                "Has the right to speak and take part in the proceedings of the State Legislature.",
                "Does NOT have the right to vote in the State Legislature."
            ]}
        />
    );
}
