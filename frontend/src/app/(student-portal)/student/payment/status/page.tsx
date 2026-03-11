"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, Loader2, ArrowRight, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

function PaymentStatusContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get('order_id');

    const [status, setStatus] = useState<'loading' | 'success' | 'pending' | 'failed'>('loading');
    const [orderStatus, setOrderStatus] = useState<string>('');
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        if (!orderId) {
            setStatus('failed');
            return;
        }

        const verifyPayment = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    router.push('/login');
                    return;
                }

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payment/verify/${orderId}`,
                    { headers: { 'Authorization': `Bearer ${token}` } }
                );

                if (!res.ok) {
                    throw new Error('Verification request failed');
                }

                const data = await res.json();
                setOrderStatus(data.order_status || '');

                if (data.status === 'success') {
                    setStatus('success');
                } else if (data.status === 'pending') {
                    setStatus('pending');
                    // Auto-retry up to 5 times with 3-second delay
                    if (retryCount < 5) {
                        setTimeout(() => setRetryCount(prev => prev + 1), 3000);
                    }
                } else {
                    setStatus('failed');
                }
            } catch (err) {
                console.error('Payment verification error:', err);
                setStatus('failed');
            }
        };

        verifyPayment();
    }, [orderId, retryCount]);

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card dark:bg-[#111] rounded-3xl border border-border p-10 max-w-md w-full text-center shadow-2xl"
            >
                {status === 'loading' && (
                    <>
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                        </div>
                        <h1 className="text-2xl font-black text-foreground mb-2">Verifying Payment</h1>
                        <p className="text-muted-foreground text-sm">
                            Please wait while we confirm your payment with Cashfree...
                        </p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h1 className="text-2xl font-black text-foreground mb-2">Payment Successful!</h1>
                        <p className="text-muted-foreground text-sm mb-8">
                            Your access has been unlocked. You can now start studying immediately.
                        </p>
                        <button
                            onClick={() => router.push('/student/batch1')}
                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                        >
                            Go to My Subjects <ArrowRight className="w-4 h-4" />
                        </button>
                    </>
                )}

                {status === 'pending' && (
                    <>
                        <div className="w-20 h-20 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <RefreshCw className="w-10 h-10 text-amber-600 animate-spin" />
                        </div>
                        <h1 className="text-2xl font-black text-foreground mb-2">Payment Processing</h1>
                        <p className="text-muted-foreground text-sm mb-2">
                            Your payment is being processed. This usually takes a few seconds.
                        </p>
                        <p className="text-xs text-muted-foreground mb-8">
                            Order: <span className="font-mono font-bold">{orderId}</span>
                            {retryCount > 0 && ` • Check ${retryCount}/5`}
                        </p>
                        <button
                            onClick={() => setRetryCount(prev => prev + 1)}
                            className="w-full h-14 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                        >
                            <RefreshCw className="w-4 h-4" /> Check Again
                        </button>
                    </>
                )}

                {status === 'failed' && (
                    <>
                        <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <XCircle className="w-10 h-10 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-black text-foreground mb-2">Payment Issue</h1>
                        <p className="text-muted-foreground text-sm mb-2">
                            {!orderId
                                ? 'No order ID found. Please try your purchase again.'
                                : 'We could not verify your payment. If money was deducted, it may take a few minutes to process.'}
                        </p>
                        {orderId && (
                            <p className="text-xs text-muted-foreground mb-8">
                                Order: <span className="font-mono font-bold">{orderId}</span>
                            </p>
                        )}
                        <div className="space-y-3">
                            <button
                                onClick={() => router.push('/student/upsc-store')}
                                className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                            >
                                Return to Store
                            </button>
                            {orderId && (
                                <button
                                    onClick={() => { setStatus('loading'); setRetryCount(prev => prev + 1); }}
                                    className="w-full text-muted-foreground hover:text-foreground text-xs font-bold uppercase tracking-widest transition-colors"
                                >
                                    Retry Verification
                                </button>
                            )}
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
}

export default function PaymentStatusPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
        }>
            <PaymentStatusContent />
        </Suspense>
    );
}
