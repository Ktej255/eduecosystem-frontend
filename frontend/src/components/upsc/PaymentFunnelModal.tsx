"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, Star, X, ArrowRight, Gift, ShoppingBag } from 'lucide-react';
import Confetti from 'react-confetti';

interface PaymentFunnelProps {
    isOpen: boolean;
    onClose: () => void;
    baseItem: { title: string; price: number; id: string };
    onComplete: (items: string[], finalPrice: number, subjectIds: string[]) => void;
}

export default function PaymentFunnelModal({ isOpen, onClose, baseItem, onComplete }: PaymentFunnelProps) {
    const [step, setStep] = useState<'checkout' | 'upsell1' | 'downsell1' | 'success'>('checkout');
    const [totalPrice, setTotalPrice] = useState(baseItem.price);
    const [items, setItems] = useState([baseItem.title]);
    const [subjectIds, setSubjectIds] = useState([baseItem.id]);

    const isGeography = baseItem.id === 'geography';

    const handleBasePurchase = () => {
        // Skip upsells for stability during launch - only sell what is active
        setStep('success');
    };

    const handleUpsellAccept = () => {
        const upPrice = isGeography ? 299 : 2449;
        const upTitle = isGeography ? "Polity Masterclass Add-on" : "All 10 Subjects Bundle";
        const upId = isGeography ? "level2" : "full_upsc";

        setTotalPrice(prev => prev + upPrice);
        setItems(prev => [...prev, upTitle]);
        setSubjectIds(prev => [...prev, upId]);
        setStep('success');
    };

    const handleUpsellDecline = () => {
        setStep('downsell1');
    };

    const handleDownsellAccept = () => {
        const downPrice = isGeography ? 249 : 1999;
        const downTitle = isGeography ? "History (Spectrum) Add-on" : "Polity + History Pack";
        const downId = isGeography ? "history_modern" : "pack_history_polity";

        setTotalPrice(prev => prev + downPrice);
        setItems(prev => [...prev, downTitle]);
        setSubjectIds(prev => [...prev, downId]);
        setStep('success');
    };

    const handleFinalDone = () => {
        onComplete(items, totalPrice, subjectIds);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-3xl max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    {/* Header */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-5 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            Secure Infrastructure
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {step === 'checkout' && (
                        <div className="p-10">
                            <div className="text-center mb-10">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <ShoppingBag className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Confirm Access</h2>
                                <p className="text-slate-500 font-medium">You are unlocking <span className="text-indigo-600 font-bold">{baseItem.title}</span></p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 mb-10 flex justify-between items-center">
                                <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Total Commitment</span>
                                <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">₹{baseItem.price}</span>
                            </div>

                            <button
                                onClick={handleBasePurchase}
                                className="w-full h-16 bg-slate-900 dark:bg-indigo-600 hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center gap-3 group transition-all"
                            >
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6">Instant Activation Post-Payment</p>
                        </div>
                    )}


                    {step === 'success' && (
                        <div className="p-10 text-center relative">
                            <Confetti numberOfPieces={100} recycle={false} />
                            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">READY TO UNLOCK</h2>
                            <p className="text-slate-500 font-medium mb-8 uppercase text-[10px] tracking-widest">Final Order Verification</p>

                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 mb-8 text-left border border-slate-100 dark:border-slate-800">
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                                        <span className="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-tight">{item}</span>
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    </div>
                                ))}
                                <div className="mt-6 pt-6 border-t border-slate-300 dark:border-slate-600 flex justify-between items-baseline">
                                    <span className="font-black text-xs uppercase tracking-widest text-slate-400">Total Payable</span>
                                    <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">₹{totalPrice}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleFinalDone}
                                className="w-full h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl transition-transform active:scale-95"
                            >
                                Initiate Secure Payment
                            </button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
