"use client";

import CohortComparison from "@/components/admin/CohortComparison";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function CohortIntelligencePage() {
    return (
        <div className="container mx-auto p-6 space-y-6">
            <Breadcrumbs 
                items={[
                    { label: "Admin", href: "/admin" },
                    { label: "Strategic Command", href: "/admin" },
                    { label: "Cohort Intelligence", href: "/admin/cohort-intelligence", active: true }
                ]} 
            />
            
            <CohortComparison />
        </div>
    );
}
