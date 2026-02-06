import PolityUnifiedDashboard from "@/components/batch1/polity/PolityUnifiedDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polity Syllabus | Batch 1",
    description: "Indian Polity Syllabus Tracker and Content Index",
};

export default function PolitySyllabusPage() {
    return <PolityUnifiedDashboard />;
}
