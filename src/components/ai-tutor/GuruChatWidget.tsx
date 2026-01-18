"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, X, Send, Sparkles, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface Message {
    id: string
    role: 'user' | 'guru'
    content: string
    sources?: string[]
}

export function GuruChatWidget({ context }: { context?: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'guru',
            content: "Namaste! I am the Guru. I can help you understand this lesson deeply. Ask me anything!"
        }
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsLoading(true)

        try {
            // Call Backend
            // In PROD: Use fetch or axios
            // await fetch('/api/v1/ai/tutor/chat', ...)
            // For now, simulating the call to the endpoint we just created (assuming relative path proxy works or using full URL)

            const response = await fetch('/api/v1/ai/tutor/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Simple auth check
                },
                body: JSON.stringify({
                    message: userMsg.content,
                    context_context: context
                })
            })

            if (!response.ok) throw new Error("Guru is meditating (Server Error)")

            const data = await response.json()

            const guruMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'guru',
                content: data.answer,
                sources: data.sources
            }
            setMessages(prev => [...prev, guruMsg])

        } catch (error) {
            console.error(error)
            toast.error("The Guru is unreachable right now.")
            // Fallback for demo if backend not running perfectly in this dev env
            // Remove this in prod
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    role: 'guru',
                    content: "I apologize, but I am having trouble connecting to the cosmic consciousness (Backend API). Please check my connection."
                }])
                setIsLoading(false)
            }, 1000)
            return
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <Card className="w-80 md:w-96 h-[500px] shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 border-indigo-500/20 bg-white dark:bg-gray-900">
                    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl py-3 px-4 shrink-0">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                <CardTitle className="text-base">The Guru</CardTitle>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-white/20" onClick={() => setIsOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>

                    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                        <div className="space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex flex-col max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                                        msg.role === 'user'
                                            ? "ml-auto bg-indigo-600 text-white rounded-tr-none"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                                    )}
                                >
                                    <p>{msg.content}</p>
                                    {msg.sources && msg.sources.length > 0 && (
                                        <div className="mt-2 pt-2 border-t border-black/10 dark:border-white/10 text-xs opacity-70">
                                            <p className="font-semibold flex items-center gap-1 mb-1">
                                                <BookOpen className="w-3 h-3" /> Sources:
                                            </p>
                                            <ul className="list-disc ml-4 space-y-0.5">
                                                {msg.sources.map((s, i) => (
                                                    <li key={i} className="line-clamp-1 h-4">{s}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    <div className="p-3 border-t bg-gray-50 dark:bg-gray-900/50 rounded-b-xl shrink-0">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleSend()
                            }}
                            className="flex gap-2"
                        >
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="bg-white dark:bg-gray-800"
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0 bg-indigo-600 hover:bg-indigo-700">
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </Card>
            )}

            <Button
                size="lg"
                className={cn(
                    "h-14 w-14 rounded-full shadow-xl transition-all duration-300",
                    isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100",
                    "bg-gradient-to-tr from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                )}
                onClick={() => setIsOpen(true)}
            >
                <MessageSquare className="w-7 h-7" />
                <span className="sr-only">Ask Guru</span>
            </Button>
            {/* Animation placeholder for expanding button */}
            <Button
                size="lg"
                className={cn(
                    "absolute bottom-0 right-0 h-14 w-14 rounded-full shadow-xl transition-all duration-300",
                    !isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hidden"
                )}
                onClick={() => setIsOpen(false)}
            >
                <X className="w-6 h-6" />
            </Button>
        </div>
    )
}
