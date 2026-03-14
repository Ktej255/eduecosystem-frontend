"use client";

import React, { useState } from 'react';
import { X, Lock, Check, Sparkles, Shield, CreditCard } from 'lucide-react';

interface LevelPurchaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    level: {
        id: number;
        name: string;
        description: string;
        price: number;
        currency: string;
        features?: string[];
    };
    onPurchaseSuccess: () => void;
    userName?: string;
    userEmail?: string;
}

declare global {
    interface Window {
        Cashfree: any;
    }
}

export default function LevelPurchaseModal({
    isOpen,
    onClose,
    level,
    onPurchaseSuccess,
    userName,
    userEmail
}: LevelPurchaseModalProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handlePurchase = async () => {
        try {
            setIsProcessing(true);
            setError(null);

            const { meditationService } = await import('@/services/meditationService');
            const orderData = await meditationService.initiatePurchase(level.id);

            // Load Cashfree SDK if not already loaded
            if (!document.getElementById('cashfree-sdk')) {
                const script = document.createElement('script');
                script.id = 'cashfree-sdk';
                script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
                script.async = true;
                document.body.appendChild(script);
                await new Promise((resolve) => {
                    script.onload = resolve;
                });
            }

            // Initialize Cashfree
            // @ts-ignore
            const cashfree = window.Cashfree({
                mode: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox'
            });

            // Open Checkout
            // The user wanted "new page", but for standard Web SDK it's usually a redirect or modal.
            // We will use the redirect mode to satisfy the "new page" feel if possible, 
            // or use the SDK's checkout which is standard. 
            // To truly satisfy "new page", we could open the payment_url in a new tab if we had it,
            // but the SDK handles sessions. We'll use the SDK's standard checkout.
            
            await cashfree.checkout({
                paymentSessionId: orderData.payment_session_id,
                redirectTarget: "_blank", // This opens in a new tab/window as requested
            });

            // Note: Verification will happen when the user returns via return_url 
            // set in the backend (customer/purchases?order_id=...)
            setIsProcessing(false);
            onClose();

        } catch (err: any) {
            setError(err.message || 'Failed to initiate purchase');
            setIsProcessing(false);
        }
    };

    const defaultFeatures = [
        '60 days of guided meditation',
        'Progressive process unlocking',
        'Track your mental wellbeing',
        'Lifetime access to this level',
        'Premium meditation content',
    ];

    const features = level.features || defaultFeatures;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-card/50 transition-colors z-10"
                    disabled={isProcessing}
                >
                    <X className="w-5 h-5 text-muted-foreground" />
                </button>

                {/* Header */}
                <div className="relative p-8 pb-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-card/20 rounded-xl backdrop-blur-sm">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{level.name}</h2>
                            <p className="text-indigo-100 text-sm">Level {level.id}</p>
                        </div>
                    </div>
                    <p className="text-indigo-100 mt-2">{level.description}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Price */}
                    <div className="mb-6 p-6 bg-card rounded-xl shadow-sm border border-indigo-100">
                        <div className="flex items-baseline justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">One-time payment</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-indigo-600">
                                        ₹{level.price}
                                    </span>
                                    <span className="text-muted-foreground">/ {level.currency}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-muted-foreground">Lifetime access</p>
                                <p className="text-sm font-semibold text-green-600">No subscription</p>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            What's included:
                        </h3>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust indicators */}
                    <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-center gap-2 text-sm text-green-800">
                            <Shield className="w-4 h-4" />
                            <span className="font-medium">Secure payment powered by Cashfree</span>
                        </div>
                        <p className="text-xs text-green-600 mt-1 ml-6">
                            Your payment information is encrypted and secure
                        </p>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-800">{error}</p>
                        </div>
                    )}

                    {/* Purchase button */}
                    <button
                        onClick={handlePurchase}
                        disabled={isProcessing}
                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isProcessing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <CreditCard className="w-5 h-5" />
                                <span>Proceed to Payment</span>
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                        By purchasing, you agree to our terms and conditions
                    </p>
                </div>
            </div>
        </div>
    );
}
