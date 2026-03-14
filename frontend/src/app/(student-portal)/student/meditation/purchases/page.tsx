"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PurchaseHistory from '@/components/meditation/PurchaseHistory';
import AmbientBackground from '@/components/meditation/theme/AmbientBackground';

import { useSearchParams } from 'next/navigation';
import { meditationService } from '@/services/meditationService';
import { toast } from 'sonner';
import { useMeditationStore } from '@/components/meditation/store/MeditationProgressionStore';

export default function PurchasesPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order_id');
    const { syncPurchases } = useMeditationStore();
    const [verifying, setVerifying] = React.useState(!!orderId);

    React.useEffect(() => {
        if (orderId) {
            const verify = async () => {
                try {
                    await meditationService.verifyPurchase(0, { order_id: orderId });
                    toast.success("Payment Verified!", {
                        description: "Your meditation level has been unlocked."
                    });
                    syncPurchases();
                } catch (err) {
                    toast.error("Verification Failed", {
                        description: "There was an issue verifying your payment. Please contact support if this persists."
                    });
                } finally {
                    setVerifying(false);
                }
            };
            verify();
        }
    }, [orderId, syncPurchases]);

    return (
        <div className="min-h-screen text-white relative">
            <AmbientBackground />

            <div className="relative z-10 max-w-7xl mx-auto py-8 px-6">
                <div className="mb-8">
                    <Link href="/student/meditation">
                        <Button variant="ghost" className="text-white/60 hover:text-white gap-2 pl-0 hover:bg-transparent">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Sanctum
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-light mt-4 mb-2">Order History</h1>
                    <p className="text-white/60">View and download receipts for your purchases</p>
                </div>

                {verifying ? (
                    <div className="flex flex-col items-center justify-center p-20 gap-4 bg-card/10 backdrop-blur-xl rounded-2xl border border-white/10">
                        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-indigo-200">Verifying your payment...</p>
                    </div>
                ) : (
                    <PurchaseHistory />
                )}
            </div>
        </div>
    );
}
