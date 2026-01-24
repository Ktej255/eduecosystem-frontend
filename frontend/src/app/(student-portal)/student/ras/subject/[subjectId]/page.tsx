"use client";

import { use } from "react";
import RASSubjectDetailView from "@/components/ras/RASSubjectDetailView";

interface PageProps {
    params: Promise<{
        subjectId: string;
    }>;
}

export default function RASSubjectPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const subjectId = parseInt(resolvedParams.subjectId);

    return <RASSubjectDetailView subjectId={subjectId} />;
}
