"use client";

import RASSyllabusViewer from "@/components/ras/RASSyllabusViewer";
import { useRouter } from "next/navigation";

export default function RASSyllabusPage() {
    const router = useRouter();
    return <RASSyllabusViewer onExit={() => router.back()} />;
}
