"use client";

import React, { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';

function PaymentSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order_id');

    useEffect(() => {
        // Redirect back to report generation after a short delay
        const timer = setTimeout(() => {
            router.push('/graphotherapy/funnel/report-generation?payment=success');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
                <p className="text-gray-600">
                    Your order <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">#{orderId}</span> has been processed.
                </p>
                <div className="flex items-center justify-center gap-3 text-[#ff6b35] font-medium">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Unlocking your full report...</span>
                </div>
            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#ff6b35] animate-spin" />
            </div>
        }>
            <PaymentSuccessContent />
        </Suspense>
    );
}
