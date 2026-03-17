"use client";

import EnvironmentModuleViewer from "@/components/upsc/subjects/environment/EnvironmentModuleViewer";
import { useParams } from "next/navigation";

export default function EnvironmentModulePage() {
    const params = useParams();
    const moduleId = params.moduleId as string;

    return <EnvironmentModuleViewer moduleId={moduleId} />;
}
