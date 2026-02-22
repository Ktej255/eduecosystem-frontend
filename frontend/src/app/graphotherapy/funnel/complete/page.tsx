import CompleteOrder from '@/components/graphotherapy/CompleteOrder';
import { ShieldCheck } from 'lucide-react';

export default function CompleteOrderPage() {
    return (
        <div className="min-h-screen bg-muted flex flex-col">
            <header className="h-16 bg-card border-b flex items-center justify-center px-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    SECURE CHECKOUT
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
                <CompleteOrder />
            </main>
        </div>
    );
}
