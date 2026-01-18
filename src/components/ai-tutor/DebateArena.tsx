"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Swords, Send, User, Bot, AlertTriangle, check } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface DebateTurn {
    role: 'user' | 'ai'
    content: string
    analysis?: string // Fallacies, strength
}

export default function DebateArena() {
    const [topic, setTopic] = useState("Federalism in India is declining")
    const [isStarted, setIsStarted] = useState(false)
    const [stance, setStance] = useState<'agree' | 'disagree'>('disagree') // User stance
    const [turns, setTurns] = useState<DebateTurn[]>([])
    const [input, setInput] = useState("")
    const [isThinking, setIsThinking] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [turns])

    const startDebate = () => {
        setIsStarted(true)
        setTurns([{
            role: 'ai',
            content: `I will argue that ${stance === 'agree' ? "Federalism is NOT declining" : "Federalism IS declining"}. Please present your opening argument.`
        }])
    }

    const handleTurn = async () => {
        if (!input.trim()) return

        const userTurn: DebateTurn = { role: 'user', content: input }
        setTurns(prev => [...prev, userTurn])
        setInput("")
        setIsThinking(true)

        try {
            // Construct context for the AI
            const context = `DEBATE MODE. 
Topic: ${topic}. 
User Stance: ${stance}. 
AI Stance: ${stance === 'agree' ? 'Oppose' : 'Support'}.
Current Round: ${Math.floor(turns.length / 2) + 1}.
Task: Rebut the user's argument logically. Point out one logical fallacy if present. Be concise but sharp.`

            const response = await fetch('/api/v1/ai/tutor/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    message: input,
                    context_context: context
                })
            })

            const data = await response.json()

            const aiTurn: DebateTurn = {
                role: 'ai',
                content: data.answer
            }
            setTurns(prev => [...prev, aiTurn])

        } catch (e) {
            console.error(e)
        } finally {
            setIsThinking(false)
        }
    }

    if (!isStarted) {
        return (
            <Card className="w-full h-full border-0 shadow-none bg-transparent">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Swords className="w-6 h-6 text-red-500" />
                        Debate Arena
                    </CardTitle>
                    <CardDescription>Sharpen your critical thinking skills</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Debate Topic</label>
                        <input
                            className="w-full p-2 rounded-md border bg-background"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Choose Your Stance</label>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant={stance === 'agree' ? "default" : "outline"}
                                className={stance === 'agree' ? "bg-green-600 hover:bg-green-700" : ""}
                                onClick={() => setStance('agree')}
                            >
                                I Agree
                            </Button>
                            <Button
                                variant={stance === 'disagree' ? "default" : "outline"}
                                className={stance === 'disagree' ? "bg-red-600 hover:bg-red-700" : ""}
                                onClick={() => setStance('disagree')}
                            >
                                I Disagree
                            </Button>
                        </div>
                    </div>

                    <Button className="w-full" size="lg" onClick={startDebate}>
                        Enter the Arena
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="flex flex-col h-[600px] border rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
            <div className="bg-gray-50 dark:bg-gray-900 border-b p-4 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-sm">Topic: {topic}</h3>
                    <Badge variant="outline" className={stance === 'agree' ? "text-green-600 border-green-200" : "text-red-600 border-red-200"}>
                        Your Stance: {stance.toUpperCase()}
                    </Badge>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsStarted(false)}>End Debate</Button>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-6">
                    {turns.map((turn, i) => (
                        <div key={i} className={cn("flex gap-4 max-w-[90%]", turn.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                turn.role === 'user' ? "bg-indigo-100 dark:bg-indigo-900" : "bg-red-100 dark:bg-red-900"
                            )}>
                                {turn.role === 'user' ? <User className="w-4 h-4 text-indigo-600" /> : <Bot className="w-4 h-4 text-red-600" />}
                            </div>
                            <div className={cn(
                                "rounded-2xl p-4 text-sm",
                                turn.role === 'user'
                                    ? "bg-indigo-600 text-white rounded-tr-none"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                            )}>
                                <p className="whitespace-pre-wrap">{turn.content}</p>
                            </div>
                        </div>
                    ))}
                    {isThinking && (
                        <div className="flex gap-4 max-w-[90%]">
                            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center shrink-0 animate-pulse">
                                <Bot className="w-4 h-4 text-red-600" />
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-2xl rounded-tl-none p-4 text-xs italic">
                                Analyzing logic...
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>

            <div className="p-4 border-t bg-gray-50 dark:bg-gray-900/50">
                <div className="flex gap-2">
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Construct your argument..."
                        className="min-h-[80px] bg-white dark:bg-gray-800"
                    />
                    <Button
                        size="icon"
                        className="h-auto w-14 bg-indigo-600 hover:bg-indigo-700"
                        onClick={handleTurn}
                        disabled={isThinking || !input.trim()}
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
