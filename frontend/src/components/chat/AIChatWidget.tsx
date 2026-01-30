"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    MessageCircle,
    X,
    Send,
    Loader2,
    Sparkles,
    User,
    BookOpen,
    Video,
    HelpCircle,
    ChevronRight,
    Trash2,
    Brain,
    Target,
    Lightbulb
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import api from "@/lib/api";
import { useAuth } from "@/contexts/auth-context";
import { useGamification } from "@/context/GamificationContext";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

interface QuickAction {
    label: string;
    icon: React.ReactNode;
    prompt: string;
}

const CHAT_STORAGE_KEY = 'ai_coach_history';

// Enhanced UPSC-focused mock response patterns for offline/fallback
const MOCK_RESPONSES: Record<string, string> = {
    'quiz': '🎯 **Quick Quiz!**\n\nQ: Which Constitutional Amendment added Fundamental Duties?\n\nA) 42nd Amendment (1976)\nB) 44th Amendment (1978)\nC) 73rd Amendment (1992)\nD) 86th Amendment (2002)\n\n*Think about the Emergency period...*\n\n||Answer: A) 42nd Amendment, recommended by Swaran Singh Committee||',
    'explain': '📚 **Concept Mode**\n\nI can help with any UPSC topic! Popular requests:\n\n**Polity**: Article 356, Federal Structure, Judicial Review\n**Economy**: Monetary Policy, Fiscal Deficit, GST\n**Geography**: Monsoons, Soil Types, Rivers\n**Environment**: Biodiversity Hotspots, Climate Agreements\n\nWhat would you like me to explain?',
    'weak': '📊 **Focus Areas (Based on PYQ Trends)**:\n\n1. **Polity** (25-30 Qs): Focus on Articles 1-50, Amendments\n2. **Environment** (15-20 Qs): Biodiversity, Climate Change Acts\n3. **Economy** (12-15 Qs): RBI, Budget basics, Schemes\n\n*Pro Tip: Environment + Geography combined = 30+ questions!*',
    'revision': '✨ **Topper Revision Tips**:\n\n📌 Use **spaced repetition** (revise on Day 1, 3, 7, 14)\n📌 Make **one-pagers** for each chapter\n📌 Solve **10 PYQs daily** before prelims\n📌 Connect static to **current affairs**\n📌 **Sleep 7 hours** - crucial for memory consolidation\n\n*"Revision is the mother of learning" - Most UPSC Toppers*',
    'pyq': '📖 **PYQ Strategy**:\n\nPrelims PYQ patterns show:\n- 2018-2023 questions repeat concepts from 2010-2017\n- Environment weightage has increased 40%\n- Polity questions are more applicative now\n\n*Start with subject-wise PYQs, then attempt full mocks!*',
    'current': '📰 **Current Affairs Approach**:\n\n1. Focus on **government schemes** and their features\n2. Track **international agreements** India signs\n3. Note **appointments** to constitutional posts\n4. Follow **economic data** (GDP, inflation, indices)\n\n*Link every news to a static topic for better retention!*',
    'strategy': '🎯 **Prelims Strategy**:\n\n**3 months out**: Complete static portions\n**2 months out**: Start full-length mocks, analyze mistakes\n**1 month out**: Revise, revise, revise + current affairs\n**Last week**: Light revision, avoid new topics, stay calm\n\n*Negative marking is real - skip doubtful questions!*',
    'default': '🧠 **UPSC Coach Ready!**\n\nI can help with:\n• 📝 Quiz you on any subject\n• 📚 Explain complex concepts\n• 📊 Identify your weak areas\n• 📖 PYQ analysis & patterns\n• ⚡ Revision strategies\n• 📰 Current affairs linkages\n\nWhat would you like to explore?'
};

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();
    const { addXp } = useGamification();

    // Load messages from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(CHAT_STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
                    if (parsed.length > 0) setHasGreeted(true);
                } catch (e) {
                    console.error('Failed to load chat history', e);
                }
            }
        }
    }, []);

    // Save messages to localStorage
    useEffect(() => {
        if (typeof window !== 'undefined' && messages.length > 0) {
            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Clear chat history
    const clearHistory = useCallback(() => {
        setMessages([]);
        setHasGreeted(false);
        localStorage.removeItem(CHAT_STORAGE_KEY);
    }, []);

    // Generate greeting based on current page
    const getPageContext = () => {
        if (pathname?.includes("/student")) return "student portal";
        if (pathname?.includes("/teacher")) return "teacher portal";
        if (pathname?.includes("/admin")) return "admin dashboard";
        if (pathname?.includes("/courses")) return "courses section";
        if (pathname?.includes("/webinars")) return "webinars section";
        if (pathname?.includes("/meditation")) return "meditation section";
        return "platform";
    };

    // Initial greeting when widget opens
    useEffect(() => {
        if (isOpen && !hasGreeted && messages.length === 0) {
            const greetingMessage: Message = {
                id: Date.now().toString(),
                role: "assistant",
                content: `👋 Hi! I'm Tej's AI Assistant. I'm here to help you navigate the ${getPageContext()}.\n\nHow can I assist you today?`,
                timestamp: new Date(),
            };
            setMessages([greetingMessage]);
            setHasGreeted(true);
        }
    }, [isOpen, hasGreeted, messages.length, pathname]);

    // Quick actions based on current page - UPSC focused
    const getQuickActions = (): QuickAction[] => {
        const upscActions: QuickAction[] = [
            {
                label: "Quiz Me",
                icon: <Target className="h-3 w-3" />,
                prompt: "quiz me on a random topic"
            },
            {
                label: "Explain",
                icon: <Lightbulb className="h-3 w-3" />,
                prompt: "explain a topic"
            },
            {
                label: "Weak Areas",
                icon: <Brain className="h-3 w-3" />,
                prompt: "show my weak areas"
            },
        ];

        const baseActions: QuickAction[] = [
            {
                label: "Revision Tips",
                icon: <BookOpen className="h-3 w-3" />,
                prompt: "give me revision tips"
            },
            {
                label: "Get Help",
                icon: <HelpCircle className="h-3 w-3" />,
                prompt: "I need help getting started"
            },
        ];

        // Student portal gets UPSC-focused actions
        if (pathname?.includes("/student")) {
            return upscActions;
        }

        if (pathname?.includes("/teacher")) {
            return [
                { label: "Upload Content", icon: <ChevronRight className="h-3 w-3" />, prompt: "How do I upload course content?" },
                { label: "View Analytics", icon: <ChevronRight className="h-3 w-3" />, prompt: "Show me my teaching analytics" },
            ];
        }

        return baseActions;
    };

    // Get mock response based on input pattern - enhanced for UPSC
    const getMockResponse = (text: string): string => {
        const lower = text.toLowerCase();
        if (lower.includes('quiz') || lower.includes('test me')) return MOCK_RESPONSES.quiz;
        if (lower.includes('explain') || lower.includes('what is') || lower.includes('define')) return MOCK_RESPONSES.explain;
        if (lower.includes('weak') || lower.includes('focus') || lower.includes('priority')) return MOCK_RESPONSES.weak;
        if (lower.includes('revision') || lower.includes('tips') || lower.includes('how to study')) return MOCK_RESPONSES.revision;
        if (lower.includes('pyq') || lower.includes('previous year') || lower.includes('past year')) return MOCK_RESPONSES.pyq;
        if (lower.includes('current') || lower.includes('news') || lower.includes('affairs')) return MOCK_RESPONSES.current;
        if (lower.includes('strategy') || lower.includes('plan') || lower.includes('schedule')) return MOCK_RESPONSES.strategy;
        return MOCK_RESPONSES.default;
    };

    // Don't render on login/register page (moved AFTER all hooks)
    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    const sendMessage = async (text: string) => {
        if (!text.trim() || loading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text.trim(),
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            // Use the existing AI chat endpoint
            const response = await api.post("/ai/chat", {
                message: text,
                context: `User is currently on the ${getPageContext()}. Page path: ${pathname}`,
            });

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: response.data.response || getMockResponse(text),
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);

            // Award XP for AI interaction
            if (addXp) addXp(2, 'AI Coach interaction');
        } catch (error: any) {
            console.error("Chat error:", error);
            // Use intelligent mock response instead of error message
            const fallbackMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: getMockResponse(text),
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, fallbackMessage]);

            // Still award XP for the interaction
            if (addXp) addXp(1, 'AI Coach interaction (offline)');
        } finally {
            setLoading(false);
        }
    };

    const handleQuickAction = (action: QuickAction) => {
        sendMessage(action.prompt);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen
                    ? "bg-gray-800 text-gray-300 scale-90"
                    : "bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:scale-110 hover:shadow-emerald-500/25"
                    }`}
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageCircle className="h-6 w-6" />
                )}
            </button>

            {/* Notification dot when closed */}
            {!isOpen && messages.length === 0 && (
                <span className="fixed bottom-14 right-6 z-50 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-full">
                                    <Sparkles className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">AI Study Coach</h3>
                                    <p className="text-xs text-emerald-100">Your UPSC preparation partner</p>
                                </div>
                            </div>
                            {messages.length > 1 && (
                                <button
                                    onClick={clearHistory}
                                    title="Clear chat history"
                                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <Trash2 className="h-4 w-4 text-white/70" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="h-72 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                            >
                                <div className={`flex-shrink-0 p-1.5 rounded-full ${message.role === "user"
                                    ? "bg-blue-600"
                                    : "bg-gradient-to-br from-emerald-500 to-teal-500"
                                    }`}>
                                    {message.role === "user" ? (
                                        <User className="h-4 w-4 text-white" />
                                    ) : (
                                        <Sparkles className="h-4 w-4 text-white" />
                                    )}
                                </div>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${message.role === "user"
                                    ? "bg-blue-600 text-white rounded-tr-sm"
                                    : "bg-gray-800 text-gray-200 rounded-tl-sm"
                                    }`}>
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex gap-2">
                                <div className="flex-shrink-0 p-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500">
                                    <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm">
                                    <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    {messages.length <= 1 && (
                        <div className="px-4 pb-2">
                            <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                            <div className="flex flex-wrap gap-2">
                                {getQuickActions().map((action, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleQuickAction(action)}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full text-xs text-gray-300 transition-colors"
                                    >
                                        {action.icon}
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-4 border-t border-gray-800">
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-full"
                                disabled={loading}
                            />
                            <Button
                                onClick={() => sendMessage(input)}
                                disabled={!input.trim() || loading}
                                size="icon"
                                className="rounded-full bg-emerald-600 hover:bg-emerald-500"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
