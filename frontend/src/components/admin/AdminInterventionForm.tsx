"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
    Send, MessageSquare, Mail, Zap, 
    User, AlertCircle, CheckCircle2, Loader2 
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

interface InterventionFormProps {
    userId: number;
    userEmail: string;
    onSuccess: () => void;
}

export default function AdminInterventionForm({ userId, userEmail, onSuccess }: InterventionFormProps) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [channel, setChannel] = useState("SYSTEM");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            await api.post("/admin/interventions/send-message", {
                target_user_id: userId,
                title,
                message,
                channel
            });
            toast.success(`Message sent to ${userEmail}`);
            onSuccess();
        } catch (error) {
            console.error("Intervention failed:", error);
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-4 border-b border-slate-800">
                <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    Direct Intervention: {userEmail}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">Alert Title</label>
                        <Input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Focus Reminder, Performance Alert"
                            className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">Message Content</label>
                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full min-h-[100px] rounded-md bg-slate-950 border border-slate-800 p-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Type your instruction or guidance here..."
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button 
                            type="button"
                            variant={channel === 'SYSTEM' ? 'default' : 'outline'}
                            onClick={() => setChannel('SYSTEM')}
                            className="flex-1 text-xs gap-2"
                            size="sm"
                        >
                            <MessageSquare className="w-3 h-3" /> System
                        </Button>
                        <Button 
                            type="button"
                            variant={channel === 'EMAIL' ? 'default' : 'outline'}
                            onClick={() => setChannel('EMAIL')}
                            className="flex-1 text-xs gap-2"
                            size="sm"
                        >
                            <Mail className="w-3 h-3" /> Email
                        </Button>
                    </div>
                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 mt-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                        Broadcast Intervention
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
