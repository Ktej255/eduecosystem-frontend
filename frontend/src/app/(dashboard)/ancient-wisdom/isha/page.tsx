import IshaLayout from "@/components/batch2/upanishads/IshaLayout";
import SubscriptionGate from "@/components/batch2/shared/SubscriptionGate";

export const metadata = {
    title: "Isha Upanishad | Ancient Wisdom",
    description: "The Doctrine of Unity and Action.",
};

export default function IshaPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* We wrap the entire layout in the gate since it's a premium text */}
            <SubscriptionGate fallback={
                <div className="h-[80vh] flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl font-serif text-amber-500 mb-4">Isha Upanishad</h1>
                        <p className="text-muted-foreground">The Secret of Perfect Action.</p>
                    </div>
                </div>
            }>
                <IshaLayout />
            </SubscriptionGate>
        </div>
    );
}
