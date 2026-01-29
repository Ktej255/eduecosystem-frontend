"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, Star, X, ArrowRight, Gift } from 'lucide-react';
import Confetti from 'react-confetti';

interface PaymentFunnelProps {
    isOpen: boolean;
    onClose: () => void;
    baseItem: { title: string; price: number };
}

export default function PaymentFunnelModal({ isOpen, onClose, baseItem }: PaymentFunnelProps) {
    const [step, setStep] = useState<'checkout' | 'upsell1' | 'downsell1' | 'success'>('checkout');
    const [totalPrice, setTotalPrice] = useState(baseItem.price);
    const [items, setItems] = useState([baseItem.title]);

    const handleBasePurchase = () => {
        // Simulate payment processing
        setTimeout(() => {
            setStep('upsell1');
        }, 1500);
    };

    const handleUpsellAccept = () => {
        setTotalPrice(prev => prev + 2449); // Bundle price delta
        setItems(prev => [...prev, "All 10 Subjects Bundle"]);
        setStep('success');
    };

    const handleUpsellDecline = () => {
        setStep('downsell1');
    };

    const handleDownsellAccept = () => {
        setTotalPrice(prev => prev + 1999); // Discounted bundle
        setItems(prev => [...prev, "Polity + History Pack"]);
        setStep('success');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white dark:bg-[#111] rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200 dark:border-gray-800"
                >
                    {/* Header */}
                    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            Secure Checkout
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {step === 'checkout' && (
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Confirm Your Order</h2>
                                <p className="text-gray-500">You are purchasing <span className="font-bold text-gray-900 dark:text-white">{baseItem.title}</span></p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 mb-8 flex justify-between items-center">
                                <span className="font-bold text-blue-900 dark:text-blue-100">Total Amount</span>
                                <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">₹{baseItem.price}</span>
                            </div>

                            <button
                                onClick={handleBasePurchase}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 group"
                            >
                                Pay ₹{baseItem.price} & Access
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}

                    {step === 'upsell1' && (
                        <div className="p-8 relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
                                <div className="h-full bg-green-500 w-[80%]"></div>
                            </div>

                            <div className="text-center mb-6 mt-4">
                                <h2 className="text-2xl font-bold text-green-600 mb-1">Wait! Your Order is 80% Complete</h2>
                                <p className="text-gray-600">Don't miss this one-time offer.</p>
                            </div>

                            <div className="border-2 border-dashed border-red-500 bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 mb-6 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                    One Time Offer
                                </div>
                                <h3 className="font-bold text-lg text-center mb-2">Upgrade to All 10 Subjects Bundle?</h3>
                                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
                                    Get Polity, History, Geography + 7 more subjects for just ₹2449 more! (Save ₹5000)
                                </p>
                                <div className="text-center">
                                    <span className="text-gray-400 line-through mr-2">₹2990</span>
                                    <span className="text-3xl font-bold text-red-600">₹2449</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleUpsellAccept}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                                >
                                    YES! Add to My Order
                                </button>
                                <button
                                    onClick={handleUpsellDecline}
                                    className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium"
                                >
                                    No thanks, I'll pass on this huge savings
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'downsell1' && (
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <Gift className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                                <h2 className="text-xl font-bold">How about a smaller pack?</h2>
                                <p className="text-gray-500 text-sm">Get just History & Geography with your Polity.</p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 mb-6 text-center">
                                <h3 className="font-bold mb-1">Mini-Bundle Offer</h3>
                                <div className="text-2xl font-bold text-blue-700">Add for ₹1999</div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleDownsellAccept}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg"
                                >
                                    Yes, Add This Pack
                                </button>
                                <button
                                    onClick={() => setStep('success')}
                                    className="w-full text-gray-500 hover:text-gray-700 text-sm"
                                >
                                    No thanks, just the single subject
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="p-8 text-center relative">
                            <Confetti numberOfPieces={200} recycle={false} />
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                            <p className="text-gray-500 mb-6">Thank you for your purchase.</p>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-6 text-left">
                                <p className="text-xs font-bold uppercase text-gray-400 mb-2">Order Summary</p>
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800 last:border-0">
                                        <span className="font-medium">{item}</span>
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                ))}
                                <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-800 flex justify-between font-bold">
                                    <span>Total Paid</span>
                                    <span>₹{totalPrice}</span>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
