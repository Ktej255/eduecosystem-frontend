import FunnelWizard from '@/components/graphotherapy/FunnelWizard';
import { ShieldCheck } from 'lucide-react';

export default function FunnelPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
            {/* Minimal Header */}
            <header className="h-16 bg-white dark:bg-gray-900 border-b flex items-center justify-center px-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    SECURE ANALYSIS ENVIRONMENT
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
                <FunnelWizard />
            </main>
        </div>
    );
}
