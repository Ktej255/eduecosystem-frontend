"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useAuth } from '@/contexts/auth-context';
import { isMasterUser } from '@/config/user-access-config';


interface Message {
    role: 'user' | 'bot';
    text: string;
}

export default function SocraticChatWidget() {
    const { user } = useAuth();
    const isMaster = isMasterUser(user?.email);

    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: "Namaste! I am your Socratic Tutor. Ask me anything, and I will guide you to the answer." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${(process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app").replace(/\/$/, "")}/api/v1/ai/socratic`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    message: userMsg,
                    context: window.location.pathname // Simple context
                })
            });

            if (!response.ok) throw new Error("Chat failed");

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to the wisdom source. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isMaster) return null;

    return (

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 pointer-events-auto origin-bottom-right"
                    >
                        <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl border-indigo-200 dark:border-indigo-800 bg-card overflow-hidden rounded-2xl">
                            {/* Header */}
                            <div className="p-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="bg-card/20 p-2 rounded-full">
                                        <Sparkles className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">Socratic Tutor</h3>
                                        <p className="text-xs text-indigo-100 opacity-80">AI Learning Guide</p>
                                    </div>
                                </div>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-card/20 rounded-full" onClick={() => setIsOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/50" ref={scrollRef}>
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div
                                            className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user'
                                                ? 'bg-indigo-600 text-white rounded-br-none'
                                                : 'bg-card text-foreground border border-border rounded-bl-none shadow-sm'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-card px-4 py-2 rounded-2xl rounded-bl-none border border-border shadow-sm flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin text-indigo-500" />
                                            <span className="text-xs text-muted-foreground">Thinking...</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-3 bg-card border-t border-border">
                                <div className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ask specific question..."
                                        className="rounded-full border-border focus:border-indigo-500"
                                        disabled={isLoading}
                                    />
                                    <Button
                                        size="icon"
                                        className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shrink-0"
                                        onClick={handleSend}
                                        disabled={isLoading || !input.trim()}
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg flex items-center justify-center pointer-events-auto hover:shadow-indigo-500/30 transition-shadow"
                >
                    <Bot className="h-7 w-7" />
                </motion.button>
            )}
        </div>
    );
}
