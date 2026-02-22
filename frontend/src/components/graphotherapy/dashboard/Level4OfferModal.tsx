"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, Clock, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Level4OfferModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPurchase: () => void;
}

export function Level4OfferModal({ isOpen, onClose, onPurchase }: Level4OfferModalProps) {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

    useEffect(() => {
        if (!isOpen) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isOpen]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const isExpired = timeLeft === 0;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white border-purple-500/30">
                <DialogHeader>
                    <div className="mx-auto bg-yellow-500/20 p-4 rounded-full mb-4 ring-1 ring-yellow-400/50">
                        <Crown className="w-10 h-10 text-yellow-400" />
                    </div>
                    <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                        Final Level Unlocked: Architect of Reality
                    </DialogTitle>
                    <DialogDescription className="text-center text-purple-200">
                        You have mastered the subconscious. Now design your destiny.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Timer */}
                    <div className="bg-black/30 rounded-xl p-4 flex justify-between items-center border border-purple-500/30">
                        <div className="flex items-center gap-2 text-yellow-400">
                            <Clock className="w-5 h-5 animate-pulse" />
                            <span className="font-mono text-xl font-bold">
                                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-purple-300 uppercase tracking-wider">Fast Action Offer</div>
                            <div className="text-green-400 font-bold">Save ₹2,500</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {[
                            "Manifestation Scripts",
                            "Signature Reconstruction",
                            "Wealth & Power Strokes"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 p-2 bg-card/5 rounded-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-purple-400" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center space-y-1">
                        <div className="text-3xl font-bold">
                            <span className="text-muted-foreground line-through text-lg mr-2">₹5,000</span>
                            <span className="text-white">₹2,500</span>
                        </div>
                        <p className="text-xs text-purple-300">One-time payment. Lifetime access.</p>
                    </div>
                </div>

                <DialogFooter className="flex-col sm:flex-col gap-3">
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                        onClick={onPurchase}
                        disabled={isExpired}
                    >
                        {isExpired ? "Offer Expired" : "Claim Final Mastery ⚡"}
                    </Button>
                    <p className="text-xs text-center text-purple-400/60 cursor-pointer hover:text-purple-300">
                        No thanks, I'll pay full price later.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
