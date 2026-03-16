"use client";

import GeographyDashboard from "@/components/upsc/subjects/geography/GeographyDashboard";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function GeographyPage() {
    return (
        <SubjectAccessGate subject="geography">
            <GeographyDashboard />
        </SubjectAccessGate>
    );
}
