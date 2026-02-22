"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Zap, Clock, Users, Plus, Play, History, Settings, Coins, Flame, AlertCircle } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const TRIGGER_OPTIONS = [
    { value: "INACTIVITY", label: "Student Inactivity", icon: Clock, desc: "Trigger after X days of no login" },
    { value: "STREAK_DANGER", label: "Streak in Danger", icon: Flame, desc: "Trigger when streak will break today" },
    { value: "LOW_SCORE", label: "Low Quiz Score", icon: AlertCircle, desc: "Trigger on score below threshold" },
    { value: "MOOD_DROPPED", label: "Dip in Mood", icon: Zap, desc: "Trigger on negative sentiment detection" },
];

export function NudgeWorkflow() {
    const [workflows, setWorkflows] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

    // New Workflow Form State
    const [newWorkflow, setNewWorkflow] = useState({
        name: "",
        trigger_type: "INACTIVITY",
        message_template: "We miss you, {{name}}! Back to Sadhana?",
        trigger_config: { days: 3 },
        reward_amount: 0
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("access_token");
            const [wRes, hRes] = await Promise.all([
                axios.get(`${API_URL}/api/v1/admin/nudges/workflows`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_URL}/api/v1/admin/nudges/history`, { headers: { Authorization: `Bearer ${token}` } })
            ]);
            if (Array.isArray(wRes.data)) {
                setWorkflows(wRes.data);
            } else {
                setWorkflows([]);
            }
            if (Array.isArray(hRes.data)) {
                setHistory(hRes.data);
            } else {
                setHistory([]);
            }
        } catch (error) {
            console.error("Failed to fetch nudge data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateWorkflow = async () => {
        if (!newWorkflow.name || !newWorkflow.message_template) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const token = localStorage.getItem("access_token");
            await axios.post(`${API_URL}/api/v1/admin/nudges/workflows`, null, {
                params: newWorkflow,
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Nudge rule created successfully!");
            setIsCreating(false);
            fetchData();
        } catch (error) {
            toast.error("Failed to create workflow");
        }
    };

    const runEvaluation = async () => {
        try {
            const token = localStorage.getItem("access_token");
            await axios.post(`${API_URL}/api/v1/admin/nudges/run-evaluation`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Nudge evaluation cycle triggered");
            fetchData();
        } catch (error) {
            toast.error("Failed to trigger evaluation");
        }
    };

    if (loading) return <div className="p-8 text-center text-muted-foreground">Accessing Nudge Server...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Zap className="text-orange-500 fill-orange-500" />
                        Smart Nudge Workflow Builder
                    </h2>
                    <p className="text-sm text-muted-foreground">Automate student retention with behavior-based triggers.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={runEvaluation} className="gap-2">
                        <Play className="h-4 w-4" /> Run Eval
                    </Button>
                    <Button size="sm" onClick={() => setIsCreating(true)} className="gap-2 bg-orange-600 hover:bg-orange-700">
                        <Plus className="h-4 w-4" /> New Rule
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="rules" className="w-full">
                <TabsList className="bg-black border border-gray-800">
                    <TabsTrigger value="rules" className="gap-2"><Settings className="w-4 h-4" /> Active Rules</TabsTrigger>
                    <TabsTrigger value="history" className="gap-2"><History className="w-4 h-4" /> Nudge History</TabsTrigger>
                </TabsList>

                <TabsContent value="rules" className="mt-4">
                    {isCreating && (
                        <Card className="bg-black border-orange-500/30 mb-6 animate-in fade-in slide-in-from-top-4">
                            <CardHeader>
                                <CardTitle className="text-sm">Create Retention Rule</CardTitle>
                                <CardDescription>Define when and how to nudge your students.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs text-muted-foreground font-bold uppercase">Rule Name</label>
                                        <Input
                                            placeholder="e.g., 3-Day Inactivity Nudge"
                                            className="bg-zinc-900 border-zinc-800"
                                            value={newWorkflow.name}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-muted-foreground font-bold uppercase">Trigger Event</label>
                                        <select
                                            className="w-full h-10 px-3 rounded-md bg-zinc-900 border-zinc-800 text-sm"
                                            value={newWorkflow.trigger_type}
                                            onChange={(e) => setNewWorkflow({ ...newWorkflow, trigger_type: e.target.value })}
                                        >
                                            {TRIGGER_OPTIONS.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground font-bold uppercase">Message Template (use {"{{name}}"})</label>
                                    <Input
                                        placeholder="We miss you, {{name}}! Back to Sadhana?"
                                        className="bg-zinc-900 border-zinc-800"
                                        value={newWorkflow.message_template}
                                        onChange={(e) => setNewWorkflow({ ...newWorkflow, message_template: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs text-muted-foreground font-bold uppercase">Incentive Reward (Coins)</label>
                                        <div className="relative">
                                            <Coins className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" />
                                            <Input
                                                type="number"
                                                className="pl-10 bg-zinc-900 border-zinc-800"
                                                value={newWorkflow.reward_amount}
                                                onChange={(e) => setNewWorkflow({ ...newWorkflow, reward_amount: parseInt(e.target.value) })}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 text-xs text-muted-foreground pb-2">
                                        <AlertCircle className="w-4 h-4" /> Rule evaluated daily at midnight.
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>Cancel</Button>
                                    <Button size="sm" onClick={handleCreateWorkflow} className="bg-orange-600 hover:bg-orange-700">Save Rule</Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {workflows.map((w) => {
                            const Icon = TRIGGER_OPTIONS.find(o => o.value === w.trigger_type)?.icon || Clock;
                            return (
                                <Card key={w.id} className="bg-black border-zinc-800 hover:border-orange-500/50 transition-colors">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                                                    <Icon className="w-5 h-5 text-orange-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-200">{w.name}</h3>
                                                    <Badge variant="outline" className="text-[10px] uppercase font-black tracking-tighter border-orange-500/30 text-orange-400">
                                                        {w.trigger_type}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Badge className={w.is_active ? "bg-green-500/20 text-green-500 border-0" : "bg-zinc-800 text-muted-foreground border-0"}>
                                                {w.is_active ? "Active" : "Paused"}
                                            </Badge>
                                        </div>

                                        <div className="p-3 rounded bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-400 italic mb-4">
                                            "{w.description || 'No description provided.'}"
                                        </div>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" /> {new Date(w.created_at).toLocaleDateString()}
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Settings className="w-4 h-4" /></Button>
                                                <Button variant="destructive" size="sm" className="h-8 px-3 text-[10px] uppercase font-bold">Pause</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="history" className="mt-4">
                    <Card className="bg-black border-zinc-800">
                        <CardContent className="p-0">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-zinc-800 text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                                        <th className="p-4 text-left">Student</th>
                                        <th className="p-4 text-left">Rule Triggered</th>
                                        <th className="p-4 text-left">Action</th>
                                        <th className="p-4 text-right">Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    {history.map((h) => (
                                        <tr key={h.id} className="hover:bg-zinc-900/30 transition-colors">
                                            <td className="p-4">
                                                <div className="font-bold text-muted-foreground">{h.user_email}</div>
                                            </td>
                                            <td className="p-4 text-zinc-400">{h.workflow_name}</td>
                                            <td className="p-4">
                                                <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-[10px]">
                                                    {h.action}
                                                </Badge>
                                            </td>
                                            <td className="p-4 text-right text-xs text-muted-foreground">
                                                {new Date(h.sent_at).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                    {history.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-muted-foreground italic">No nudges sent yet.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
