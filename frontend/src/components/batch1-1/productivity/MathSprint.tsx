"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, RotateCcw, Timer, Trophy } from 'lucide-react';

export default function MathSprint() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [score, setScore] = useState(0);
    const [problem, setProblem] = useState({ text: "", answer: 0 });
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial focus
    useEffect(() => {
        if (isPlaying) {
            inputRef.current?.focus();
        }
    }, [isPlaying]);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeLeft]);

    const generateProblem = () => {
        const ops = ['+', '-', '*'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        let a = Math.floor(Math.random() * 20) + 2;
        let b = Math.floor(Math.random() * 20) + 2;

        // Adjust difficulty
        if (op === '*') {
            a = Math.floor(Math.random() * 12) + 2;
            b = Math.floor(Math.random() * 9) + 2;
        }

        let answer = 0;
        if (op === '+') answer = a + b;
        if (op === '-') {
            // Ensure positive result for speed
            if (a < b) [a, b] = [b, a];
            answer = a - b;
        }
        if (op === '*') answer = a * b;

        setProblem({ text: `${a} ${op} ${b}`, answer });
    };

    const startGame = () => {
        setIsPlaying(true);
        setScore(0);
        setTimeLeft(60);
        setInput("");
        generateProblem();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isPlaying) return;

        if (parseInt(input) === problem.answer) {
            setScore(prev => prev + 1);
            setInput("");
            generateProblem();
        } else {
            // Visual feedback could be added here
            setInput(""); // Clear on wrong too? Or shake? MVP: Just Clear.
        }
    };

    return (
        <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <CardContent className="p-6 h-[300px] flex flex-col items-center justify-center text-center">
                {!isPlaying && timeLeft === 60 ? (
                    // Start Screen
                    <div className="space-y-4">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full inline-flex mb-2">
                            <Timer className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold">Mental Math Sprint</h3>
                        <p className="text-gray-500 text-sm max-w-[200px] mx-auto">None stop arithmetic for 60 seconds.</p>
                        <Button onClick={startGame} className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                            <Play className="h-4 w-4 mr-2" /> Start Sprint
                        </Button>
                    </div>
                ) : !isPlaying && timeLeft === 0 ? (
                    // Game Over
                    <div className="space-y-4 animate-in zoom-in duration-300">
                        <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-full inline-flex mb-2">
                            <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold">Time's Up!</h3>
                        <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 my-4">
                            {score}
                        </div>
                        <p className="text-gray-500 text-sm">Problems Solved</p>
                        <Button onClick={startGame} variant="outline" className="w-full">
                            <RotateCcw className="h-4 w-4 mr-2" /> Play Again
                        </Button>
                    </div>
                ) : (
                    // Gameplay
                    <div className="w-full max-w-[240px] space-y-6">
                        <div className="flex justify-between items-center text-sm font-medium text-gray-400 uppercase tracking-widest">
                            <span>Time: {timeLeft}s</span>
                            <span>Score: {score}</span>
                        </div>

                        <div className="text-5xl font-mono font-bold text-gray-800 dark:text-gray-100 tracking-wider">
                            {problem.text}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <Input
                                ref={inputRef}
                                type="number"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="text-center text-2xl font-bold h-14 border-2 border-indigo-100 dark:border-indigo-900 focus:border-indigo-500 rounded-xl"
                                placeholder="?"
                            />
                        </form>
                        <p className="text-xs text-gray-400">Press Enter to Submit</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
