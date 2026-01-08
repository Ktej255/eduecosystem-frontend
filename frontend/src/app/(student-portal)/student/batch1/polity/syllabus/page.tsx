import PolitySyllabus from "@/components/batch1/polity/PolitySyllabus";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polity Syllabus | Batch 1",
    description: "Indian Polity Syllabus Tracker and Content Index",
};

export default function PolitySyllabusPage() {
    return <PolitySyllabus />;
}
