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
    Filter,
    ArrowRight,
    Star,
    MessageSquare,
    Eye,
    TrendingUp,
    Download
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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

export default function InstructorEvaluationHub() {
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
            // In a real app: await api.get('/instructor/evaluations/submissions')
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
                    },
                    {
                        id: 3,
                        student_name: "Rohan Singh",
                        question: "Analyze the significance of the Indo-Pacific region in global geopolitics.",
                        submitted_at: "2026-01-16T15:00:00Z",
                        ai_score: 4.5,
                        max_marks: 10,
                        status: 'pending',
                        feedback: "Answer is too short and misses key security alliances like AUKUS/QUAD."
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
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">AI Evaluation Hub</h1>
                    <p className="text-gray-400">Review and finalize AI-graded Mains answers</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-gray-800 bg-gray-900">
                        <Download className="w-4 h-4 mr-2" />
                        Export Batch Report
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <History className="w-4 h-4 mr-2" />
                        Grading History
                    </Button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">To Review</p>
                                <p className="text-2xl font-bold">{submissions.filter(s => s.status === 'pending').length}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-amber-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Avg. AI Score</p>
                                <p className="text-2xl font-bold">6.3/10</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-cyan-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Time Saved (AI)</p>
                                <p className="text-2xl font-bold">~14.5 hrs</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                <Star className="w-5 h-5 text-indigo-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Reviewed Today</p>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-800 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-2">
                        <Button
                            variant={activeFilter === 'all' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveFilter('all')}
                        >
                            All Submissions
                        </Button>
                        <Button
                            variant={activeFilter === 'pending' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveFilter('pending')}
                        >
                            Pending Review
                        </Button>
                        <Button
                            variant={activeFilter === 'reviewed' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveFilter('reviewed')}
                        >
                            Reviewed
                        </Button>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search students..."
                            className="pl-10 bg-gray-950 border-gray-800"
                        />
                    </div>
                </div>

                {/* Submissions List */}
                <div className="divide-y divide-gray-800">
                    {loading ? (
                        <div className="p-12 text-center text-gray-400">Analyzing submissions...</div>
                    ) : filteredSubmissions.length > 0 ? filteredSubmissions.map((s) => (
                        <div key={s.id} className="p-6 hover:bg-gray-800/30 transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-lg">{s.student_name}</h3>
                                        {s.status === 'reviewed' ? (
                                            <Badge className="bg-emerald-500/20 text-emerald-500 border-0">REVIEWED</Badge>
                                        ) : (
                                            <Badge className="bg-amber-500/20 text-amber-500 border-0">PENDING AI REVIEW</Badge>
                                        )}
                                    </div>
                                    <p className="text-gray-300 font-medium line-clamp-1">{s.question}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <FileText className="w-3.5 h-3.5" />
                                            Mains Answer (Image/Text)
                                        </span>
                                        <span>Submitted {new Date(s.submitted_at).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 mb-1">AI Suggestion</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-indigo-400">{s.ai_score}</span>
                                            <span className="text-gray-500">/{s.max_marks}</span>
                                        </div>
                                    </div>
                                    <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold group-hover:px-6 transition-all">
                                        Review Answer
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>

                            {/* AI Insights Snippet */}
                            <div className="mt-4 p-4 bg-gray-950 rounded-xl border border-gray-800">
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-indigo-400 uppercase mb-1">AI Feedback Summary</p>
                                        <p className="text-sm text-gray-400">{s.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="p-12 text-center text-gray-500">
                            No submissions found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
