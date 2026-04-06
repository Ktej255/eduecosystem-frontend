import HistoryLearningPath from "@/components/batch1/history/HistoryLearningPath";

export const metadata = {
    title: "Learning Path | History Revision",
    description: "Adaptive 30/45/60/90 day study planner for the 86 History syllabus chapters.",
};

export default function HistoryLearningPathPage() {
    return (
        <main className="min-h-screen bg-stone-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <HistoryLearningPath />
            </div>
        </main>
    );
}
