"use client";

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LogicGrid() {
    const [sequence, setSequence] = useState<number[]>([]);
    const [hiddenIndex, setHiddenIndex] = useState(3);
    const [answer, setAnswer] = useState(0);
    const [userGuess, setUserGuess] = useState("");
    const [streak, setStreak] = useState(0);
    const [hint, setHint] = useState("");
    const [showHint, setShowHint] = useState(false);

    const generateSequence = () => {
        const types = ['arithmetic', 'geometric', 'squares', 'fibonacci'];
        const type = types[Math.floor(Math.random() * types.length)];
        let seq: number[] = [];
        let ans = 0;
        let hintText = "";

        const start = Math.floor(Math.random() * 10) + 1;

        if (type === 'arithmetic') {
            const diff = Math.floor(Math.random() * 10) + 2;
            seq = [start, start + diff, start + 2 * diff, start + 3 * diff, start + 4 * diff];
            hintText = `Look for a constant difference (+${diff}?)`;
        } else if (type === 'geometric') {
            const ratio = Math.floor(Math.random() * 3) + 2;
            const s = Math.min(start, 5); // Keep numbers small
            seq = [s, s * ratio, s * ratio * ratio, s * Math.pow(ratio, 3), s * Math.pow(ratio, 4)];
            hintText = `Look for a multiplication factor (x${ratio}?)`;
        } else if (type === 'squares') {
            const s = Math.floor(Math.random() * 5) + 1;
            seq = [s * s, (s + 1) * (s + 1), (s + 2) * (s + 2), (s + 3) * (s + 3), (s + 4) * (s + 4)];
            hintText = "Think about perfect squares.";
        } else if (type === 'fibonacci') {
            let a = Math.floor(Math.random() * 5) + 1;
            let b = Math.floor(Math.random() * 5) + 1;
            seq = [a, b, a + b, a + 2 * b, 2 * a + 3 * b]; // a, b, a+b, a+2b, 2a+3b
            // Fix: a, b, c=a+b, d=b+c, e=c+d
            const c = a + b;
            const d = b + c;
            const e = c + d;
            seq = [a, b, c, d, e];
            hintText = "Add the previous two numbers.";
        }

        // Hide one
        const hide = 3; // Always hide 4th for consistency or random? Let's hide 4th (index 3)
        // [0, 1, 2, ?, 4]

        setSequence(seq);
        setAnswer(seq[hide]);
        setHiddenIndex(hide);
        setHint(hintText);
        setShowHint(false);
        setUserGuess("");
    };

    useEffect(() => {
        generateSequence();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(userGuess) === answer) {
            setStreak(prev => prev + 1);
            generateSequence();
        } else {
            setStreak(0);
            setUserGuess("");
            // error shake animation logic handled by UI feedback usually
        }
    };

    return (
        <Card className="border-teal-100 dark:border-teal-900 shadow-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col items-center justify-center space-y-8 relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 text-teal-600 font-bold bg-teal-50 px-2 py-1 rounded">
                    <Brain className="h-4 w-4" />
                    <span>Streak: {streak}</span>
                </div>

                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-muted-foreground dark:text-muted-foreground">Complete the Sequence</h3>
                    <div className="flex items-center justify-center gap-3 text-3xl font-mono font-bold text-foreground">
                        {sequence.map((num, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`w-14 h-14 flex items-center justify-center rounded-lg ${i === hiddenIndex
                                    ? 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 border-2 border-dashed border-teal-300'
                                    : 'bg-muted'
                                    }`}
                            >
                                {i === hiddenIndex ? "?" : num}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xs">
                    <Input
                        type="number"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        placeholder="Predicted Number"
                        className="text-center font-bold"
                        autoFocus
                    />
                    <Button type="submit" disabled={!userGuess} className="bg-teal-600 hover:bg-teal-700">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </form>

                <div className="h-8">
                    {!showHint ? (
                        <Button variant="ghost" size="sm" onClick={() => setShowHint(true)} className="text-xs text-muted-foreground hover:text-teal-600">
                            <Lightbulb className="h-3 w-3 mr-1" /> Need a hint?
                        </Button>
                    ) : (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full"
                        >
                            {hint}
                        </motion.span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
