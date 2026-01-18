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

export default function TeacherLiveConsole() {
    const { id: classId } = useParams()
    const router = useRouter()

    const [activeTab, setActiveTab] = useState("qna")
    const [hands, setHands] = useState<HandRaise[]>([])
    const [questions, setQuestions] = useState<LiveQuestion[]>([])
    const [liveStats, setLiveStats] = useState({ viewers: 0, engagement: 0 })

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
                api.get(`/instructor/analytics/summary`)
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
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center animate-pulse">
                        <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            Session Cockpit
                            <Badge className="bg-red-500 animate-pulse border-0">LIVE</Badge>
                        </h1>
                        <p className="text-gray-400 text-sm">Class ID: {classId} • Multi-Portal Sync Active</p>
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
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700" onClick={() => router.push('/teacher/lms/live-classes')}>
                        End Session
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-160px)]">
                <div className="lg:col-span-3 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="aspect-video bg-gray-900 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <Video className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Secondary Monitoring Active</p>
                            </div>
                        </div>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="bg-gray-900 border-white/10 p-1 rounded-2xl">
                            <TabsTrigger value="qna" className="rounded-xl data-[state=active]:bg-cyan-600 data-[state=active]:text-white">Questions</TabsTrigger>
                            <TabsTrigger value="polls" className="rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white">Polls</TabsTrigger>
                        </TabsList>

                        <TabsContent value="qna" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {questions.map((q) => (
                                    <div key={q.id} className={`p-4 rounded-2xl border transition-all ${q.is_answered ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                                        <div className="flex items-start justify-between mb-3">
                                            <span className="text-sm font-medium text-gray-300">{q.student_name}</span>
                                            <Badge variant="ghost" className="text-cyan-400"><ThumbsUp className="w-3 h-3 mr-1" /> {q.upvotes}</Badge>
                                        </div>
                                        <p className="text-sm text-gray-200 mb-4">{q.question_text}</p>
                                        {!q.is_answered && (
                                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 w-full" onClick={() => handleAnswerQuestion(q.id)}>Mark Answered</Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    <Card className="bg-gray-900 border-white/10 rounded-3xl">
                        <CardHeader><CardTitle className="text-sm font-bold flex items-center gap-2"><Hand className="w-4 h-4 text-amber-500 fill-amber-500" /> Hand Raises</CardTitle></CardHeader>
                        <CardContent className="space-y-3 font-medium">
                            {hands.length > 0 ? hands.map((h) => (
                                <div key={h.user_id} className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                    <span className="text-xs">{h.user_name}</span>
                                    <Button size="icon" variant="ghost" className="h-7 w-7 text-red-400" onClick={() => handleLowerHand(h.user_id)}><XCircle className="h-4 w-4" /></Button>
                                </div>
                            )) : <p className="text-xs text-center text-gray-600">No hands raised</p>}
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30 rounded-3xl">
                        <CardHeader><CardTitle className="text-sm font-bold flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" /> AI Copilot</CardTitle></CardHeader>
                        <CardContent><Button className="w-full bg-white text-indigo-900 hover:bg-gray-200 text-xs font-bold">Launch Understanding Poll</Button></CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
