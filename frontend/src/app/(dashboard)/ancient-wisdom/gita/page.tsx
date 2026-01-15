// Assuming there is a Gita component, if not we placeholder it. 
// List dir showed 'bhagavad-gita-home.tsx' in batch2 root.
import BhagavadGitaHome from "@/components/batch2/bhagavad-gita-home";
import SubscriptionGate from "@/components/batch2/shared/SubscriptionGate";

export const metadata = {
    title: "Bhagavad Gita - Chapter 6 | Ancient Wisdom",
    description: "The Yoga of Meditation (Dhyana Yoga).",
};

export default function GitaPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <SubscriptionGate>
                <BhagavadGitaHome />
            </SubscriptionGate>
        </div>
    );
}
