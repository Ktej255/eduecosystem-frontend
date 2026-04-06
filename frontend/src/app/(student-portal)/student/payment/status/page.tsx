"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, Loader2, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';

function PaymentStatusContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get('order_id');

    const [status, setStatus] = useState<'loading' | 'success' | 'pending' | 'failed'>('loading');
    const [orderStatus, setOrderStatus] = useState<string>('');
    const [retryCount, setRetryCount] = useState(0);
    const [subjectId, setSubjectId] = useState<string | null>(null);

    useEffect(() => {
        // Recover pending subject from session storage
        if (typeof window !== 'undefined') {
            const pending = sessionStorage.getItem('pending_subject');
            if (pending) setSubjectId(pending);
        }

        if (!orderId) {
            setStatus('failed');
            return;
        }

        const verifyPayment = async () => {
            try {
                const res = await api.get(`/payment/verify/${orderId}`);
                const data = res.data;
                setOrderStatus(data.order_status || '');

                if (data.status === 'success') {
                    setStatus('success');
                } else if (data.status === 'pending') {
                    setStatus('pending');
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

    const getRedirectPath = () => {
        if (!subjectId) return '/student/dashboard';
        
        const mapping: Record<string, string> = {
            'polity': '/student/batch1/polity',
            'level2': '/student/batch1/polity',
            'history_modern': '/student/batch1/history',
            'history_ancient': '/student/batch1/batch1-1/ancient-history',
            'economy': '/student/batch1/economy',
            'geography': '/student/batch1/geography'
        };

        return mapping[subjectId] || `/student/batch1/${subjectId}`;
    };

    const getSubjectDisplayName = () => {
        if (!subjectId) return 'Your Course';
        return subjectId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 max-w-lg w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
                {status === 'loading' && (
                    <>
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                            <div className="relative bg-black/40 border border-white/10 rounded-full w-full h-full flex items-center justify-center">
                                <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-white mb-3 tracking-tight">Verifying Securely</h1>
                        <p className="text-slate-400 text-sm leading-relaxed px-4">
                            Establishing secure handshake with Cashfree. Please don't refresh this page...
                        </p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-full" 
                            />
                            <div className="relative bg-emerald-500/10 border border-emerald-500/20 rounded-full w-full h-full flex items-center justify-center">
                                <CheckCircle className="w-12 h-12 text-emerald-400" />
                            </div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-2 -right-2"
                            >
                                <Sparkles className="w-6 h-6 text-emerald-300" />
                            </motion.div>
                        </div>
                        
                        <h1 className="text-4xl font-black text-white mb-2 leading-tight">Access Unlocked!</h1>
                        <p className="text-emerald-400 font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                            Payment Confirmed Successfully
                        </p>
                        
                        <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-sm mx-auto">
                            Welcome to the <span className="text-white font-bold">{getSubjectDisplayName()}</span>. 
                            Your personalized study engine is ready.
                        </p>

                        <div className="space-y-4">
                            <button
                                onClick={() => router.push(getRedirectPath() + '?unlocked=1')}
                                className="w-full h-16 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-2xl font-black text-base shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95"
                            >
                                Start Learning Now <ArrowRight className="w-5 h-5" />
                            </button>
                            
                            <button
                                onClick={() => router.push('/student/dashboard')}
                                className="w-full py-4 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
                            >
                                Go to My Dashboard
                            </button>
                        </div>
                    </>
                )}

                {status === 'pending' && (
                    <>
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full" />
                            <div className="relative bg-black/40 border border-white/10 rounded-full w-full h-full flex items-center justify-center">
                                <RefreshCw className="w-10 h-10 text-amber-400 animate-spin" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-white mb-3">Syncing Status</h1>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Your payment was successful, but we are waiting for the final green signal from the bank.
                        </p>
                        <div className="bg-white/5 rounded-xl p-4 mb-8 inline-block">
                            <p className="text-[10px] text-slate-500 font-mono">
                                ORDER_ID: {orderId} • ATTEMPT {retryCount+1}/5
                            </p>
                        </div>
                        <button
                            onClick={() => setRetryCount(prev => prev + 1)}
                            className="w-full h-14 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                        >
                            <RefreshCw className="w-4 h-4" /> Check Again
                        </button>
                    </>
                )}

                {status === 'failed' && (
                    <>
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                            <div className="relative bg-black/40 border border-white/10 rounded-full w-full h-full flex items-center justify-center">
                                <XCircle className="w-10 h-10 text-red-400" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-white mb-3">Unverified</h1>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            {!orderId
                                ? 'Internal error: Session signature missing. Please try again from the store.'
                                : 'We couldn’t confirm your payment. If the amount was deducted, please wait 2 minutes and check again.'}
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={() => router.push('/student/upsc-store')}
                                className="w-full h-16 bg-white text-black hover:bg-slate-200 rounded-2xl font-black text-base shadow-xl flex items-center justify-center transition-all transform hover:scale-[1.02] active:scale-95"
                            >
                                Return to Store
                            </button>
                            {orderId && (
                                <button
                                    onClick={() => { setStatus('loading'); setRetryCount(prev => prev + 1); }}
                                    className="w-full py-4 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
                                >
                                    Force Verification
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
