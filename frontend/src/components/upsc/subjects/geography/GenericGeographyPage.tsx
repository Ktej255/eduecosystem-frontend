import React from 'react';
import GeographyHome from './GeographyHome';

export default function GenericGeographyPage({ moduleId }: { moduleId: string }) {
    // Determine initial view based on module
    // If it's a specific simulation route (like universe), we might want 'lesson' or 'globe'
    // But for general modules, 'syllabus' is best.

    return <GeographyHome initialModuleId={moduleId} initialView="syllabus" />;
}
