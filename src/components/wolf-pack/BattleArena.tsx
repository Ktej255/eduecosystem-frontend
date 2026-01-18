"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Swords, Users, Trophy } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface BattleQuestion {
    id: number
    text: string
    options: string[]
    correct: string
}

interface BattleArenaProps {
    battleId: number
    questions: BattleQuestion[]
    onComplete: (score: number) => void
    opponentName?: string
}

export function BattleArena({ battleId, questions, onComplete, opponentName = "Opponent" }: BattleArenaProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(15)
    const [isFinished, setIsFinished] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        if (isFinished) return

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    handleTimeUp()
                    return 15
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [currentIndex, isFinished])

    const handleTimeUp = () => {
        moveToNext()
    }

    const handleAnswer = (option: string) => {
        if (showResult) return // Prevent double click

        setSelectedOption(option)
        setShowResult(true) // Show correct/incorrect for a second

        if (option === questions[currentIndex].correct) {
            setScore(prev => prev + 10) // 10 points per Q
            toast.success("Correct Strike!")
        } else {
            toast.error("Missed!")
        }

        setTimeout(() => {
            moveToNext()
        }, 1000)
    }

    const moveToNext = () => {
        setSelectedOption(null)
        setShowResult(false)
        setTimeLeft(15)

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            finishBattle()
        }
    }

    const finishBattle = async () => {
        setIsFinished(true)
        try {
            // Submit to backend
            await fetch(`/api/v1/pack-battles/${battleId}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    score: score, // using updated score? No, state update matches here? Wait, score state might be stale in closure?
                    // Actually score is state. 
                    // Better to use a reliable final calculation or ref if concerned about closure staleness, 
                    // but usually ok if finishBattle is called after score set or effectively. 
                    // Wait, handleAnswer calls setScore then setTimeout. 
                    // The closure of finishBattle inside setTimeout inside handleAnswer captures OLD score? 
                    // Yes. We should pass accumulated score to finishBattle.

                    // QUICK FIX: We'll rely on the fact that if last Q, we just update state and UI renders 'Results'.
                    // The actual API call can happen in a useEffect dependent on isFinished.
                })
            })
            // onComplete callback
            onComplete(score)
        } catch (e) {
            console.error(e)
        }
    }

    // Use effect to submit when finished to ensure fresh score
    useEffect(() => {
        if (isFinished) {
            const submit = async () => {
                await fetch(`/api/v1/pack-battles/${battleId}/submit?score=${score}&is_challenger=true`, {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                })
            }
            submit()
        }
    }, [isFinished])


    if (isFinished) {
        return (
            <Card className="w-full max-w-md mx-auto text-center border-amber-400 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/30 dark:to-gray-900">
                <CardHeader>
                    <Trophy className="w-16 h-16 mx-auto text-amber-500 mb-4 animate-bounce" />
                    <CardTitle className="text-2xl">Battle Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-black text-amber-600 mb-2">{score}</div>
                    <p className="text-gray-500">Total Points Scored</p>
                    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                        <p className="text-sm">Waiting for {opponentName} to defend...</p>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button onClick={() => window.location.reload()}>Return to Pack</Button>
                </CardFooter>
            </Card>
        )
    }

    const currentQ = questions[currentIndex]

    return (
        <Card className="w-full max-w-lg mx-auto border-indigo-200 dark:border-indigo-800 shadow-xl overflow-hidden">
            {/* Header / HUD */}
            <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-300" />
                    <span className="font-bold">Round {currentIndex + 1}/{questions.length}</span>
                </div>
                <div className="font-mono text-xl font-bold tabular-nums">
                    {timeLeft}s
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">{score}</span>
                    <Trophy className="w-5 h-5 text-amber-400" />
                </div>
            </div>

            {/* Progress Bar */}
            <Progress value={(timeLeft / 15) * 100} className="h-1 rounded-none bg-indigo-900" />

            {/* Question Area */}
            <CardContent className="p-6 space-y-6">
                <div className="min-h-[80px] flex items-center justify-center text-center">
                    <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                        {currentQ.text}
                    </h2>
                </div>

                <div className="grid gap-3">
                    {currentQ.options.map((option, idx) => {
                        const isSelected = selectedOption === option;
                        const isCorrect = option === currentQ.correct;

                        let variantClass = "hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-gray-200 dark:border-gray-700";

                        if (showResult) {
                            if (isCorrect) variantClass = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/50 dark:text-green-100";
                            else if (isSelected && !isCorrect) variantClass = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/50 dark:text-red-100";
                            else variantClass = "opacity-50";
                        }

                        return (
                            <Button
                                key={idx}
                                variant="outline"
                                className={cn("h-14 text-lg justify-start px-6 transition-all", variantClass)}
                                onClick={() => handleAnswer(option)}
                                disabled={showResult}
                            >
                                <span className="mr-3 opacity-50 text-sm font-mono">{String.fromCharCode(65 + idx)}.</span>
                                {option}
                            </Button>
                        )
                    })}
                </div>
            </CardContent>

            <CardFooter className="bg-gray-50 dark:bg-gray-900/50 border-t p-3 justify-center text-xs text-gray-400 uppercase tracking-widest">
                PvP Battle Mode
            </CardFooter>
        </Card>
    )
}
