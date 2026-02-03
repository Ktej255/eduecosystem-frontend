import SchemesPage from "@/components/batch1/value-addition/SchemesPage";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SchemesPage />
        </Suspense>
    );
}
