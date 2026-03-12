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
        // Move to upsell instead of immediate success
        setStep('upsell1');
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

                    {step === 'upsell1' && (
                        <div className="p-10 relative">
                            {/* Progress bar */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 dark:bg-slate-800">
                                <motion.div
                                    className="h-full bg-emerald-500"
                                    initial={{ width: "30%" }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1 }}
                                />
                            </div>

                            <div className="text-center mb-8 mt-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-4">
                                    <Star className="w-3 h-3 fill-emerald-700" />
                                    One-Time Exclusive
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tight">
                                    Wait! Maximize Your <br /><span className="text-emerald-600">Preparation.</span>
                                </h2>
                            </div>

                            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] p-8 mb-8 border-2 border-dashed border-emerald-300 dark:border-emerald-700 relative group">
                                <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                                    {isGeography ? "Add Polity Masterclass?" : "Upgrade to Full Bundle?"}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 leading-relaxed">
                                    {isGeography
                                        ? "Master all 95 chapters of Indian Polity (Laxmikanth) for just ₹299 more. Normally ₹1,999."
                                        : "Get all 10 UPSC subjects unlock with one click for just ₹2,449 extra."}
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-slate-400 line-through font-bold">₹1,999</span>
                                    <span className="text-4xl font-black text-emerald-600">₹{isGeography ? "299" : "2,449"}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleUpsellAccept}
                                    className="w-full h-16 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-emerald-600/20"
                                >
                                    YES! ADD TO MY ACCESS
                                </button>
                                <button
                                    onClick={handleUpsellDecline}
                                    className="w-full text-slate-400 hover:text-slate-600 text-xs font-black uppercase tracking-widest transition-colors"
                                >
                                    No thanks, I'll pass on this 85% discount
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'downsell1' && (
                        <div className="p-10">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Gift className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Last Chance Offer</h2>
                                <p className="text-slate-500 font-medium">Add {isGeography ? "Modern History" : "Core subjects"} for an extra edge.</p>
                            </div>

                            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 mb-8 text-center">
                                <div className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">Dynamic Selection</div>
                                <h3 className="font-black text-xl text-slate-900 dark:text-white mb-1 uppercase">Add for ₹{isGeography ? "249" : "1,999"}</h3>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleDownsellAccept}
                                    className="w-full h-16 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-600/20"
                                >
                                    Build My Bundle
                                </button>
                                <button
                                    onClick={() => setStep('success')}
                                    className="w-full text-slate-400 hover:text-slate-600 text-xs font-black uppercase tracking-widest"
                                >
                                    Proceed with single subject only
                                </button>
                            </div>
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
