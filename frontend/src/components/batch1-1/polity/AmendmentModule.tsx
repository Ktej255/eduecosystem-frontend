"use client";

import React from 'react';
import GenericPremiumModule from './GenericPremiumModule';

interface AmendmentModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
    chapterNumber?: number | string;
}

export default function AmendmentModule({ onComplete, isCompleted, chapterNumber }: AmendmentModuleProps) {
    return (
        <GenericPremiumModule 
            topicId={chapterNumber || 11}
            title="Amendment of the Constitution"
            onComplete={onComplete}
            isCompleted={isCompleted}
            staticFocus={[
                "Procedure for Amendment under Article 368",
                "Types of Amendments: Simple Majority, Special Majority, and Special Majority with Ratification",
                "Significance of 42nd and 44th Amendments"
            ]}
            keyConcepts={[
                "Article 368: The power of Parliament to amend the Constitution and procedure therefor.",
                "Rigidity and Flexibility: The Indian Constitution is a blend of both.",
                "Basic Structure: Limits on the amending power of Parliament (Kesavananda Bharati case)."
            ]}
            prelimsPointers={[
                "Constitutional amendment bills can be introduced in either House of Parliament.",
                "No joint sitting for constitutional amendment bills.",
                "President must give assent to a constitutional amendment bill."
            ]}
        />
    );
}
