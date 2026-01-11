"use client";

import GenericRevisionDashboard from '@/components/revision-portal/RevisionDashboard';
import { POLITY_REVISION_CHAPTERS } from '@/components/batch1/polity/data/RevisionRegistry';

export default function StudentRevisionPortal() {
    return (
        <GenericRevisionDashboard
            chapters={POLITY_REVISION_CHAPTERS}
            basePath="/student/revision"
            title="Revision Portal"
            subtitle="Master Your Syllabus with Spaced Repetition"
            backLink="/student/dashboard"
            backLabel="Back to Journey"
        />
    );
}
