"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send,
    MessageSquare,
    Mail,
    Globe,
    CheckCircle2,
    Smartphone,
    Laptop,
    Eye,
    Zap,
    Ticket
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useCommunicationStore, Channel } from '@/store/communicationStore';
import { toast } from 'sonner';

import { useActivityLogStore } from '@/store/activityLogStore';

export default function OmnichannelBroadcaster() {
    const { broadcast } = useCommunicationStore();
    const { addLog } = useActivityLogStore();
    const [content, setContent] = useState("");
    const [selectedChannels, setSelectedChannels] = useState<Channel[]>(['whatsapp', 'telegram']);
    const [isSending, setIsSending] = useState(false);

    const CHANNELS = [
        { id: 'whatsapp' as const, label: 'WhatsApp', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-500/10' },
        { id: 'telegram' as const, label: 'Telegram', icon: Smartphone, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { id: 'email' as const, label: 'Email', icon: Mail, color: 'text-amber-500', bg: 'bg-amber-500/10' }
    ];

    const toggleChannel = (id: Channel) => {
        setSelectedChannels(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const handleBroadcast = () => {
        if (!content) return;
        setIsSending(true);

        setTimeout(() => {
            broadcast(content, selectedChannels);

            // Log to Audit System
            addLog({
                action: 'Omnichannel Broadcast',
                description: `Sent broadcast to ${selectedChannels.join(', ')}: "${content.substring(0, 50)}..."`,
                user: 'Faculty Alpha',
                role: 'Instructor',
                status: 'success',
                module: 'communication'
            });

            setIsSending(false);
            setContent("");
            toast.success(`Broadcast sent to ${selectedChannels.length} channels!`);
        }, 1500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {/* Editor Panel */}
            <div className="lg:col-span-2 space-y-6">
                <Card className="border-border shadow-xl overflow-hidden">
                    <CardHeader className="bg-muted border-b border-slate-100">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                    <Send className="w-5 h-5 text-indigo-500" />
                                    Omnichannel Broadcaster
                                </CardTitle>
                                <CardDescription>Reach students instantly across all platforms.</CardDescription>
                            </div>
                            <div className="flex gap-2">
                                {CHANNELS.map(ch => (
                                    <button
                                        key={ch.id}
                                        onClick={() => toggleChannel(ch.id)}
                                        className={`p-2 rounded-lg transition-all border ${selectedChannels.includes(ch.id) ? `${ch.bg} border-${ch.id === 'whatsapp' ? 'green' : ch.id === 'telegram' ? 'blue' : 'amber'}-500/50` : 'bg-muted border-transparent'}`}
                                    >
                                        <ch.icon className={`w-4 h-4 ${selectedChannels.includes(ch.id) ? ch.color : 'text-muted-foreground'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <Textarea
                                placeholder="Write your broadcast message here... Use {name} for personalization."
                                className="min-h-[250px] text-lg font-medium bg-transparent border-none focus-visible:ring-0 resize-none p-0"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                            <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                                <div className="flex gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    <span>Chars: {content.length}</span>
                                    <span>•</span>
                                    <span>Segments: {Math.ceil(content.length / 160)}</span>
                                </div>
                                <Button
                                    onClick={handleBroadcast}
                                    disabled={!content || selectedChannels.length === 0 || isSending}
                                    className="bg-indigo-600 hover:bg-indigo-700 h-10 px-8 rounded-xl shadow-lg shadow-indigo-500/20"
                                >
                                    {isSending ? <Zap className="w-4 h-4 animate-pulse mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                                    {isSending ? "Blasting..." : "Broadcast Message"}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex items-center gap-2 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <Ticket className="w-4 h-4 text-indigo-500" />
                    <p className="text-xs text-indigo-400 font-medium">
                        **TIP**: You can paste a **Coupon Code** here to automatically send it to students as a push notification.
                    </p>
                </div>
            </div>

            {/* Preview Box */}
            <div className="lg:col-span-1 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Universal Preview</h4>

                {/* Mobile Preview */}
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[250px] shadow-2xl">
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900 flex flex-col items-center justify-start py-8">
                        {/* Dynamic Notification Bubble */}
                        <AnimatePresence>
                            {content && (
                                <motion.div
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="w-[90%] bg-card/10 backdrop-blur-md rounded-2xl p-3 border border-white/10"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-4 h-4 bg-indigo-500 rounded-md flex items-center justify-center text-[8px] text-white">E</div>
                                        <span className="text-[10px] font-bold text-white/50">EDUECOSYSTEM</span>
                                        <span className="text-[10px] text-white/30 ml-auto">Now</span>
                                    </div>
                                    <p className="text-[11px] text-white font-medium line-clamp-3 leading-relaxed">
                                        {content}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {!content && (
                            <div className="mt-20 text-center space-y-2 opacity-20">
                                <Smartphone className="w-12 h-12 text-white mx-auto" />
                                <p className="text-[10px] text-white px-4">Start typing to see live mobile preview</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
