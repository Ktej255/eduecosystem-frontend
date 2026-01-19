import { Suspense } from 'react';
import Batch1DeepReport from "@/components/batch1-1/reports/Batch1DeepReport";

export default function DeepReportPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading Deep Report...</div>}>
            <Batch1DeepReport />
        </Suspense>
    );
}
