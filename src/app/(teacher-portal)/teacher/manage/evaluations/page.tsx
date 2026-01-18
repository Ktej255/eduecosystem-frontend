"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    FileText,
    CheckCircle2,
    AlertCircle,
    History,
    Search,
    ArrowRight,
    Star,
    MessageSquare,
    TrendingUp,
    Download
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import api from "@/lib/api"

interface Submission {
    id: number;
    student_name: string;
    question: string;
    submitted_at: string;
    ai_score: number;
    max_marks: number;
    status: 'pending' | 'reviewed';
    feedback: string;
}

export default function TeacherEvaluationHub() {
    const [submissions, setSubmissions] = useState<Submission[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'reviewed'>('all')

    useEffect(() => {
        fetchSubmissions()
    }, [])

    const fetchSubmissions = async () => {
        setLoading(true)
        try {
            // Mock data for initial implementation
            setTimeout(() => {
                setSubmissions([
                    {
                        id: 1,
                        student_name: "Amit Kumar",
                        question: "Examine the role of local self-government in grassroots democracy.",
                        submitted_at: "2026-01-17T10:00:00Z",
                        ai_score: 6.5,
                        max_marks: 10,
                        status: 'pending',
                        feedback: "Good coverage of 73rd/74th amendments but lacks recent examples."
                    },
                    {
                        id: 2,
                        student_name: "Sriya Rao",
                        question: "Discuss the impact of climate change on Indian agriculture.",
                        submitted_at: "2026-01-17T09:30:00Z",
                        ai_score: 8,
                        max_marks: 10,
                        status: 'reviewed',
                        feedback: "Excellent structure and data points. Very well written."
                    }
                ])
                setLoading(false)
            }, 800)
        } catch (err) {
            toast.error("Failed to fetch submissions")
            setLoading(false)
        }
    }

    const filteredSubmissions = submissions.filter(s => {
        const matchesSearch = s.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.question.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = activeFilter === 'all' || s.status === activeFilter
        return matchesSearch && matchesFilter
    })

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl font-sans">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">AI Evaluation Hub</h1>
                    <p className="text-gray-400">Finalize AI-graded student submissions</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className="border-indigo-500/30 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
                        onClick={() => toast.success("AI is analyzing batch patterns for bulk feedback...")}
                    >
                        <Zap className="w-4 h-4 mr-2" />
                        Bulk AI Feedback
                    </Button>
                    <Button variant="outline" className="border-gray-800 bg-gray-900"><Download className="w-4 h-4 mr-2" /> Export</Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Grading History</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gray-900 border-gray-800"><CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div><p className="text-xs text-gray-500 uppercase font-bold">Pending Review</p><p className="text-2xl font-bold">{submissions.filter(s => s.status === 'pending').length}</p></div>
                        <AlertCircle className="w-6 h-6 text-amber-500 opacity-40" />
                    </div>
                </CardContent></Card>
                <Card className="bg-gray-900 border-gray-800"><CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div><p className="text-xs text-gray-500 uppercase font-bold">Avg. Accuracy</p><p className="text-2xl font-bold">92%</p></div>
                        <Star className="w-6 h-6 text-yellow-500 opacity-40" />
                    </div>
                </CardContent></Card>
                <Card className="bg-gray-900 border-gray-800"><CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div><p className="text-xs text-gray-500 uppercase font-bold">Hours Saved</p><p className="text-2xl font-bold">48.2</p></div>
                        <TrendingUp className="w-6 h-6 text-emerald-500 opacity-40" />
                    </div>
                </CardContent></Card>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-800 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-2">
                        <Button variant={activeFilter === 'all' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveFilter('all')}>All</Button>
                        <Button variant={activeFilter === 'pending' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveFilter('pending')}>Pending</Button>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search students..." className="pl-10 bg-gray-950 border-gray-800" />
                    </div>
                </div>

                <div className="divide-y divide-gray-800">
                    {loading ? <div className="p-12 text-center text-gray-500">Scanning for new submissions...</div> : filteredSubmissions.map((s) => (
                        <div key={s.id} className="p-6 hover:bg-gray-800/30 transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-lg">{s.student_name}</h3>
                                        <Badge className={s.status === 'reviewed' ? "bg-emerald-500/20 text-emerald-500 border-0" : "bg-amber-500/20 text-amber-500 border-0"}>
                                            {s.status.toUpperCase()}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-300 font-medium line-clamp-1">{s.question}</p>
                                    <p className="text-xs text-gray-500">Submitted {new Date(s.submitted_at).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">AI Score</p>
                                        <div className="flex items-baseline gap-1"><span className="text-3xl font-black text-indigo-400">{s.ai_score}</span><span className="text-gray-600 font-bold">/10</span></div>
                                    </div>
                                    <Button className="bg-white text-black hover:bg-gray-200 font-bold px-6">Review <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-gray-950/50 rounded-2xl border border-white/5 flex gap-3">
                                <MessageSquare className="w-4 h-4 text-indigo-400 mt-1" />
                                <p className="text-sm text-gray-400 italic">"AI suggestion based on model answer: {s.feedback}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
