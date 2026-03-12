import React from 'react';
import { CheckCircle, Lock, Shield, Star, X } from 'lucide-react';

interface UnlockModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUnlock: () => void;
    level: 'level2' | 'level3';
}

export default function UnlockModal({ isOpen, onClose, onUnlock, level }: UnlockModalProps) {
    if (!isOpen) return null;

    const content = {
        level2: {
            title: "Unlock Level 2: The Logic Module",
            price: "₹499",
            originalPrice: "₹1999",
            features: [
                "Advanced Conceptual Analysis",
                "Cross-Topic Comparison Matrices",
                "Logic-Building Quizzes",
                "Gap Analysis Reports"
            ],
            color: "amber"
        },
        level3: {
            title: "Unlock Level 3: Prelims Simulator",
            price: "₹999",
            originalPrice: "₹2999",
            features: [
                "Full-Length Mock Tests",
                "Negative Marking Drills",
                "All India Rank Simulation",
                "Performance Analytics"
            ],
            color: "red"
        }
    };

    const info = content[level];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-card dark:bg-[#111] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-border animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className={`bg-gradient-to-r ${level === 'level2' ? 'from-amber-500 to-orange-600' : 'from-red-600 to-rose-700'} p-6 text-white text-center`}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                    <div className="w-16 h-16 bg-card/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{info.title}</h2>
                    <p className="text-white/90 text-sm">Elevate your preparation</p>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="text-4xl font-black text-[#1F2937]">{info.price}</span>
                        <span className="text-lg text-muted-foreground line-through font-medium">{info.originalPrice}</span>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">75% OFF</span>
                    </div>

                    <div className="space-y-4 mb-8">
                        {info.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground dark:text-muted-foreground">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onUnlock}
                        className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-transform active:scale-95 ${level === 'level2'
                                ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/25'
                                : 'bg-red-600 hover:bg-red-700 shadow-red-600/25'
                            }`}
                    >
                        Unlock Now
                    </button>

                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" />
                        Secure Payment via Razorpay
                    </p>
                </div>
            </div>
        </div>
    );
}
