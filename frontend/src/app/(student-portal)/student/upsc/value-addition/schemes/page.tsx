import SchemesPage from "@/components/upsc/subjects/value-addition/SchemesPage";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SchemesPage />
        </Suspense>
    );
}
