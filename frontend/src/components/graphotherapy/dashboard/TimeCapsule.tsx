"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Hourglass, Lock, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TimeCapsule() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasWritten, setHasWritten] = useState(false);
    const [letter, setLetter] = useState("");
    const [isSealing, setIsSealing] = useState(false);

    useEffect(() => {
        // Check if user already wrote a letter
        const saved = localStorage.getItem("grapho_time_capsule");
        if (saved) setHasWritten(true);
    }, []);

    const handleSeal = () => {
        setIsSealing(true);
        setTimeout(() => {
            localStorage.setItem("grapho_time_capsule", letter);
            setHasWritten(true);
            setIsSealing(false);
            setIsOpen(false);
        }, 2000);
    };

    return (
        <>
            <div
                className={`relative overflow-hidden rounded-xl border p-6 transition-all cursor-pointer group ${hasWritten ? 'bg-indigo-900 border-indigo-700' : 'bg-white border-indigo-100 hover:border-indigo-300 hover:shadow-md'}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${hasWritten ? 'bg-indigo-800 text-indigo-300' : 'bg-indigo-50 text-indigo-600'}`}>
                        {hasWritten ? <Lock className="w-6 h-6" /> : <Hourglass className="w-6 h-6" />}
                    </div>
                    <div>
                        <h3 className={`font-bold text-lg ${hasWritten ? 'text-indigo-100' : 'text-indigo-900'}`}>
                            {hasWritten ? "Time Capsule Sealed" : "Future Self Letter"}
                        </h3>
                        <p className={`text-sm ${hasWritten ? 'text-indigo-400' : 'text-gray-500'}`}>
                            {hasWritten ? "Unlocks on Day 30" : "Commit to your transformation."}
                        </p>
                    </div>
                </div>
                {!hasWritten && (
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                )}
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-xl bg-slate-50">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-indigo-900">
                            <Hourglass className="w-5 h-5 text-indigo-600" /> Message to the Future
                        </DialogTitle>
                        <DialogDescription>
                            Write a message to yourself. Why did you start? What do you hope to change?
                            <br />This letter will be <strong>sealed until Day 30</strong>.
                        </DialogDescription>
                    </DialogHeader>

                    <AnimatePresence mode="wait">
                        {hasWritten ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-4xl">
                                    🔒
                                </div>
                                <h3 className="font-bold text-xl text-indigo-900">Capsule Secured</h3>
                                <p className="text-gray-600">
                                    Your commitment has been recorded. When you reach Day 30, this letter will be emailed to you as proof of how far you've come.
                                </p>
                                <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-4"
                            >
                                <Textarea
                                    placeholder="Dear Future Me, I am starting this journey because..."
                                    className="min-h-[200px] bg-white border-indigo-200 focus:ring-indigo-500 text-lg p-4 font-handwriting" // Assuming a handwriting font class exists or just default
                                    value={letter}
                                    onChange={(e) => setLetter(e.target.value)}
                                />
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>Your words are powerful.</span>
                                </div>
                                <DialogFooter>
                                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                                    <Button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2"
                                        onClick={handleSeal}
                                        disabled={!letter.trim() || isSealing}
                                    >
                                        {isSealing ? "Sealing..." : <><Send className="w-4 h-4" /> Seal Capsule</>}
                                    </Button>
                                </DialogFooter>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </>
    );
}
