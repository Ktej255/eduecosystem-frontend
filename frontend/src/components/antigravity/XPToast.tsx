"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

interface XPToastProps {
    xp: number;
    isVisible: boolean;
    onClose: () => void;
}

export function XPToast({ xp, isVisible, onClose }: XPToastProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, x: 20, scale: 0.5, rotate: -5 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        rotate: 0,
                        transition: { type: "spring", damping: 12, stiffness: 200 }
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className="fixed bottom-10 right-10 z-[100] bg-gradient-to-br from-[#ffd700] via-[#ff8c00] to-[#ff4500] text-white p-[1px] rounded-2xl shadow-[0_0_40px_rgba(255,140,0,0.4)]"
                >
                    <div className="bg-[#1a1b23]/90 backdrop-blur-xl px-6 py-4 rounded-2xl flex items-center space-x-4">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg ring-2 ring-white/20"
                        >
                            <Award className="text-white" size={28} />
                        </motion.div>
                        <div className="flex flex-col">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white"
                            >
                                +{xp} XP
                            </motion.span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-200/80">
                                Mission Accomplished
                            </span>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-orange-500/20 blur-2xl -z-10 rounded-full" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
