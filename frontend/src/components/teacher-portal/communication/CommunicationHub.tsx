"use client";

import { useState } from "react";
import {
    MessageSquare,
    Mail,
    Send,
    Smartphone,
    Youtube,
    Linkedin,
    Instagram,
    Search,
    Filter,
    Paperclip,
    Mic,
    Smile,
    MoreVertical,
    CheckCheck,
    Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// --- Mock Data ---

type Channel = "whatsapp" | "email" | "telegram" | "social";

interface Message {
    id: string;
    sender: string;
    avatar: string;
    preview: string;
    time: string;
    unread: number;
    channel: Channel;
    status: "online" | "offline" | "away";
}

const chats: Message[] = [
    { id: "1", sender: "Priya Sharma", avatar: "PS", preview: "Sir, regarding the Polity Chapter 24 notes...", time: "2m", unread: 2, channel: "whatsapp", status: "online" },
    { id: "2", sender: "Amit Verma", avatar: "AV", preview: "Can we extend the submission deadline?", time: "15m", unread: 0, channel: "telegram", status: "offline" },
    { id: "3", sender: "Rahul Kumar", avatar: "RK", preview: "Re: Enquiry about UPSC Batch 2026", time: "1h", unread: 1, channel: "email", status: "away" },
    { id: "4", sender: "@user123", avatar: "YT", preview: "Great explanation on the Monsoon topic! 🙌", time: "3h", unread: 0, channel: "social", status: "offline" },
    { id: "5", sender: "Sita Gupta", avatar: "SG", preview: "Payment confirmation screenshot attached.", time: "1d", unread: 0, channel: "whatsapp", status: "online" },
];

const conversation = [
    { id: 1, text: "Hello Sir, I have a doubt regarding the Anti-Defection Law.", sender: "student", time: "10:30 AM" },
    { id: 2, text: "Sure Priya, ask away. Specifically about the 10th Schedule?", sender: "me", time: "10:32 AM" },
    { id: 3, text: "Yes, does it apply if a party merges with another by 2/3rd majority?", sender: "student", time: "10:33 AM" },
];

export default function CommunicationHub() {
    const [selectedChannel, setSelectedChannel] = useState<"all" | Channel>("all");
    const [activeChat, setActiveChat] = useState(chats[0]);

    const filteredChats = selectedChannel === "all"
        ? chats
        : chats.filter(c => c.channel === selectedChannel);

    const getChannelIcon = (channel: Channel) => {
        switch (channel) {
            case "whatsapp": return <Smartphone className="h-3 w-3 text-green-500" />;
            case "email": return <Mail className="h-3 w-3 text-blue-500" />;
            case "telegram": return <Send className="h-3 w-3 text-sky-500" />;
            case "social": return <Youtube className="h-3 w-3 text-red-500" />;
        }
    };

    return (
        <div className="h-[calc(100vh-120px)] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex shadow-xl">
            {/* Sidebar List */}
            <div className="w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-950">
                {/* Header & Filter */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg text-slate-800 dark:text-slate-100">Inbox</h2>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search messages..." className="pl-9 bg-slate-50 dark:bg-slate-900" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        <Badge
                            variant={selectedChannel === 'all' ? 'default' : 'outline'}
                            className="text-xs cursor-pointer whitespace-nowrap"
                            onClick={() => setSelectedChannel("all")}
                        >
                            All
                        </Badge>
                        <Badge
                            variant={selectedChannel === 'whatsapp' ? 'default' : 'outline'}
                            className="text-xs cursor-pointer whitespace-nowrap gap-1 hover:bg-green-100 hover:text-green-700 hover:border-green-200"
                            onClick={() => setSelectedChannel("whatsapp")}
                        >
                            <Smartphone className="h-3 w-3" /> WhatsApp
                        </Badge>
                        <Badge
                            variant={selectedChannel === 'email' ? 'default' : 'outline'}
                            className="text-xs cursor-pointer whitespace-nowrap gap-1 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-200"
                            onClick={() => setSelectedChannel("email")}
                        >
                            <Mail className="h-3 w-3" /> Email
                        </Badge>
                    </div>
                </div>

                {/* Chat List */}
                <ScrollArea className="flex-1">
                    <div className="flex flex-col">
                        {filteredChats.map((chat) => (
                            <div
                                key={chat.id}
                                className={`p-4 border-b border-slate-50 dark:border-slate-900 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 ${activeChat.id === chat.id ? "bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-l-indigo-500" : "border-l-4 border-l-transparent"}`}
                                onClick={() => setActiveChat(chat)}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <Avatar>
                                            <AvatarFallback className="bg-slate-200 text-slate-600 font-bold">{chat.avatar}</AvatarFallback>
                                        </Avatar>
                                        <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-950 ${chat.status === "online" ? "bg-green-500" : "bg-slate-400"}`}></span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <h3 className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">{chat.sender}</h3>
                                            <span className="text-[10px] text-slate-400 whitespace-nowrap">{chat.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            {getChannelIcon(chat.channel)}
                                            <span className="text-xs text-slate-400 capitalize">{chat.channel}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 truncate dark:text-slate-400">{chat.preview}</p>
                                    </div>
                                    {chat.unread > 0 && (
                                        <div className="flex flex-col items-end justify-center pt-2">
                                            <span className="bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                                {chat.unread}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col bg-slate-50/50 dark:bg-black">
                {/* Header */}
                <div className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 flex items-center justify-between shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarFallback className="bg-indigo-100 text-indigo-700">{activeChat.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-bold text-slate-800 dark:text-slate-100">{activeChat.sender}</h2>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    {getChannelIcon(activeChat.channel)}
                                    <span className="capitalize">{activeChat.channel}</span>
                                </span>
                                <span>•</span>
                                <span className={activeChat.status === "online" ? "text-green-600" : ""}>
                                    {activeChat.status === "online" ? "Online" : "Last seen recently"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4 text-slate-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Search className="h-4 w-4 text-slate-500" />
                        </Button>
                        <Separator orientation="vertical" className="h-6" />
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4 text-slate-500" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">Today</span>
                        </div>

                        {conversation.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`max-w-[70%] group flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}>
                                    <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm ${msg.sender === "me"
                                        ? "bg-indigo-600 text-white rounded-tr-none"
                                        : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800 rounded-tl-none"
                                        }`}>
                                        <p>{msg.text}</p>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1 px-1">
                                        <span className="text-[10px] text-slate-400">{msg.time}</span>
                                        {msg.sender === "me" && <CheckCheck className="h-3 w-3 text-indigo-500" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-end gap-2 bg-slate-50 dark:bg-slate-900 rounded-xl p-2 border border-slate-200 dark:border-slate-800 focus-within:ring-2 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900/20 transition-all">
                        <div className="flex gap-1 pb-1.5 pl-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                <Smile className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                <Paperclip className="h-5 w-5" />
                            </Button>
                        </div>
                        <Textarea
                            className="border-0 bg-transparent focus-visible:ring-0 px-2 py-3 h-auto min-h-[44px] max-h-32 resize-none"
                            placeholder={`Reply via ${activeChat.channel}...`}
                        />
                        <div className="flex gap-1 pb-1.5 pr-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                <Mic className="h-5 w-5" />
                            </Button>
                            <Button size="icon" className="h-8 w-8 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition-transform hover:scale-105">
                                <Send className="h-4 w-4 text-white" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Lock className="h-3 w-3" /> End-to-end encrypted via {activeChat.channel}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Lock({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}
