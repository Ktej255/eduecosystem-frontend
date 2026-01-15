"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import GenericRevisionDashboard from '@/components/revision-portal/RevisionDashboard';

// Import all registries
import { POLITY_REVISION_CHAPTERS } from '@/components/batch1/polity/data/RevisionRegistry';
import { HISTORY_REVISION_CHAPTERS } from '@/components/batch1/history/data/RevisionRegistry';
import { GEOGRAPHY_REVISION_CHAPTERS } from '@/components/batch1/geography/data/RevisionRegistry';
import { ECONOMY_REVISION_CHAPTERS } from '@/components/batch1/economy/data/RevisionRegistry';
import { ENVIRONMENT_REVISION_CHAPTERS } from '@/components/batch1/environment/data/RevisionRegistry';
import { ART_CULTURE_REVISION_CHAPTERS } from '@/components/batch1/art-culture/data/RevisionRegistry';
import { SCIENCE_TECH_REVISION_CHAPTERS } from '@/components/batch1/science-tech/data/RevisionRegistry';

// TODO: Create a cleaner "Registry Loader" utility in the future
const REGISTRY_MAP: Record<string, { chapters: any[], title: string, subtitle: string }> = {
    'polity': {
        chapters: POLITY_REVISION_CHAPTERS,
        title: "Indian Polity Revision",
        subtitle: "95 Chapters • M. Laxmikanth"
    },
    'history': {
        chapters: HISTORY_REVISION_CHAPTERS,
        title: "History Revision",
        subtitle: "Ancient, Medieval, Modern"
    },
    'geography': {
        chapters: GEOGRAPHY_REVISION_CHAPTERS,
        title: "Geography Revision",
        subtitle: "Physical & World Geography"
    },
    'economy': {
        chapters: ECONOMY_REVISION_CHAPTERS,
        title: "Economy Revision",
        subtitle: "Indian Economy & Development"
    },
    'environment': {
        chapters: ENVIRONMENT_REVISION_CHAPTERS,
        title: "Environment Revision",
        subtitle: "Ecology & Climate Change"
    },
    'art-culture': {
        chapters: ART_CULTURE_REVISION_CHAPTERS,
        title: "Art & Culture Revision",
        subtitle: "Indian Heritage & Arts"
    },
    'science-tech': {
        chapters: SCIENCE_TECH_REVISION_CHAPTERS,
        title: "Science & Tech Revision",
        subtitle: "General Science & Emerging Tech"
    }
};

export default function SubjectRevisionPage() {
    const params = useParams();
    const subjectId = params.subjectId as string;

    const data = REGISTRY_MAP[subjectId];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Subject Not Found</h1>
                    <p className="text-gray-500">The requested revision portal does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <GenericRevisionDashboard
            chapters={data.chapters}
            basePath={`/student/revision/${subjectId}`}
            title={data.title}
            subtitle={data.subtitle}
            backLink="/student/revision"
            backLabel="Back to Revision Hub"
            subjectId={subjectId}
        />
    );
}
