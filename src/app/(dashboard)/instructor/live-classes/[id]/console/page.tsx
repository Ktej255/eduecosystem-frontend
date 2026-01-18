"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Users,
    MessageSquare,
    BarChart,
    Hand,
    Mic,
    Video,
    Settings,
    Send,
    ThumbsUp,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Clock,
    Zap,
    LifeBuoy
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import api from "@/lib/api"

interface HandRaise {
    user_id: number;
    user_name: string;
    timestamp: string;
}

interface LiveQuestion {
    id: number;
    student_name: string;
    question_text: string;
    upvotes: number;
    is_answered: boolean;
}

export default function InstructorLiveConsole() {
    const { id: classId } = useParams()
    const router = useRouter()

    const [activeTab, setActiveTab] = useState("qna")
    const [hands, setHands] = useState<HandRaise[]>([])
    const [questions, setQuestions] = useState<LiveQuestion[]>([])
    const [liveStats, setLiveStats] = useState({ viewers: 0, engagement: 0 })
    const [isStreaming, setIsStreaming] = useState(true)

    // Polling simulation for live updates (would use WebSockets in production)
    useEffect(() => {
        const interval = setInterval(() => {
            fetchLiveState()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const fetchLiveState = async () => {
        try {
            const [qRes, statsRes] = await Promise.all([
                api.get(`/live-class-interactive/${classId}/questions`),
                api.get(`/instructor/analytics/summary`) // Using existing summary for viewers proxy
            ])
            setQuestions(qRes.data)
            setLiveStats({
                viewers: statsRes.data.overview.active_students || 12,
                engagement: 88
            })
        } catch (err) {
            console.error("Live fetch error", err)
        }
    }

    const handleLowerHand = async (userId: number) => {
        try {
            await api.post(`/live-class-interactive/${classId}/hand-lower?user_id=${userId}`)
            setHands(prev => prev.filter(h => h.user_id !== userId))
            toast.success("Hand lowered")
        } catch (err) {
            toast.error("Failed to lower hand")
        }
    }

    const handleAnswerQuestion = async (qId: number) => {
        try {
            await api.post(`/live-class-interactive/questions/${qId}/answer`, { answer_text: "Answered live" })
            setQuestions(prev => prev.map(q => q.id === qId ? { ...q, is_answered: true } : q))
            toast.success("Question marked as answered")
        } catch (err) {
            toast.error("Failed to update question")
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            {/* Header: Stream Controls */}
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center animate-pulse">
                        <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            Live Stream Cockpit
                            <Badge className="bg-red-500 animate-pulse border-0">LIVE</Badge>
                        </h1>
                        <p className="text-gray-400 text-sm">Class ID: {classId} • Topics: Advanced Graphology</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-6 mr-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="font-medium">{liveStats.viewers} Watching</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="font-medium">{liveStats.engagement}% Engagement</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <span className="font-medium">42:15 Elapsed</span>
                        </div>
                    </div>

                    <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                    </Button>
                    <Button className="bg-red-600 hover:bg-red-700" onClick={() => router.push('/instructor/live-classes')}>
                        End Session
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-160px)]">
                {/* Left: Stream Preview & Main Interaction */}
                <div className="lg:col-span-3 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    {/* Stream Preview Area */}
                    <div className="aspect-video bg-gray-900 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <Video className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Secondary Stream Preview Enabled</p>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 flex gap-2">
                            <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-emerald-400">Mic Active</Badge>
                            <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-emerald-400">Cam Active</Badge>
                        </div>
                    </div>

                    {/* Interaction Hub */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="bg-gray-900 border-white/10 p-1 rounded-2xl">
                            <TabsTrigger value="qna" className="rounded-xl data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Q&A Center
                            </TabsTrigger>
                            <TabsTrigger value="polls" className="rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                                <BarChart className="w-4 h-4 mr-2" />
                                Live Polls
                            </TabsTrigger>
                            <TabsTrigger value="reactions" className="rounded-xl data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                                <ThumbsUp className="w-4 h-4 mr-2" />
                                Engagement
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="qna" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {questions.length > 0 ? questions.map((q) => (
                                    <div key={q.id} className={`p-4 rounded-2xl border transition-all ${q.is_answered ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
                                                    {q.student_name.charAt(0)}
                                                </div>
                                                <span className="text-sm font-medium text-gray-300">{q.student_name}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-cyan-400">
                                                <ThumbsUp className="w-3 h-3" />
                                                <span className="text-xs font-bold">{q.upvotes}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-200 mb-4 line-clamp-3">{q.question_text}</p>
                                        <div className="flex justify-end gap-2">
                                            {!q.is_answered && (
                                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 h-8" onClick={() => handleAnswerQuestion(q.id)}>
                                                    Mark Answered
                                                </Button>
                                            )}
                                            <Button variant="ghost" size="sm" className="h-8 text-gray-400 hover:text-white">Dismiss</Button>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-span-2 py-12 text-center text-gray-500">
                                        No questions yet.
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="polls" className="mt-4">
                            <Card className="bg-white/5 border-dashed border-white/20">
                                <CardContent className="flex flex-col items-center justify-center py-12">
                                    <BarChart className="w-12 h-12 text-gray-600 mb-4" />
                                    <p className="text-gray-400 mb-4">No active polls</p>
                                    <Button className="bg-purple-600 hover:bg-purple-700">Create New Poll</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Right: Sidebar Interventions */}
                <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    {/* Hand Raising Sidebar */}
                    <Card className="bg-gray-900 border-white/10 rounded-3xl">
                        <CardHeader className="pb-3 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-sm font-bold flex items-center gap-2">
                                    <Hand className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    Hand Raises
                                </CardTitle>
                                <CardDescription className="text-[10px]">Direct interaction requests</CardDescription>
                            </div>
                            <Badge className="bg-amber-500/20 text-amber-500 border-0">{hands.length}</Badge>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {hands.length > 0 ? hands.map((h) => (
                                <div key={h.user_id} className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between group">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-200">{h.user_name}</span>
                                        <span className="text-[10px] text-gray-500">Raised 2m ago</span>
                                    </div>
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="icon" variant="ghost" className="h-7 w-7 text-emerald-500" onClick={() => handleLowerHand(h.user_id)}>
                                            <Mic className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="h-7 w-7 text-red-400" onClick={() => handleLowerHand(h.user_id)}>
                                            <XCircle className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-[11px] text-center text-gray-600 py-4 italic">No hands raised currently</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* AI Wisdom Assistant */}
                    <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30 rounded-3xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                AI Copilot
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
                                <p className="text-[11px] text-indigo-100 leading-relaxed italic">
                                    "Student participation is high. Consider launching the 'Complexity Poll' now to gauge understanding of the last topic."
                                </p>
                            </div>
                            <Button className="w-full bg-white text-indigo-900 hover:bg-gray-200 text-[11px] font-bold h-8">
                                Execute Suggestion
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Support & Quick Links */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-10 border-white/10 bg-white/5 text-[10px] font-medium">
                            <LifeBuoy className="w-3.5 h-3.5 mr-1" /> Help Desk
                        </Button>
                        <Button variant="outline" className="h-10 border-white/10 bg-white/5 text-[10px] font-medium">
                            <AlertCircle className="w-3.5 h-3.5 mr-1" /> Panic Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
