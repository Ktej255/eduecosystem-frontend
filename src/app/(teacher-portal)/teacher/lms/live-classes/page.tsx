"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"
import {
    Calendar,
    Clock,
    Video,
    Plus,
    MoreVertical,
    Edit,
    Trash2,
    Users
} from "lucide-react"
import { LiveClassScheduler } from "@/components/features/lms/LiveClassScheduler"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type LiveClass = {
    id: number
    title: string
    description: string
    scheduled_at: string
    duration_minutes: number
    status: "scheduled" | "live" | "ended" | "cancelled"
    meeting_url?: string
    course_id: number
    course_title: string
    attendees_count?: number
}

export default function TeacherLiveClassesPage() {
    const router = useRouter()
    const [classes, setClasses] = useState<LiveClass[]>([])
    const [loading, setLoading] = useState(true)
    const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)

    useEffect(() => {
        fetchClasses()
        fetchCourses()
    }, [])

    const fetchClasses = async () => {
        try {
            const response = await axios.get("/api/v1/live-classes/instructor/my-classes")
            setClasses(response.data)
        } catch (error) {
            console.error("Failed to fetch classes", error)
            // Mock data fallback
            setClasses([
                {
                    id: 1,
                    title: "Advanced Graphology Analysis",
                    description: "Live session on Neuro-Canvas decoding.",
                    scheduled_at: new Date(Date.now() + 3600000).toISOString(),
                    duration_minutes: 60,
                    status: "scheduled",
                    course_id: 101,
                    course_title: "Master Graphology",
                    attendees_count: 12
                },
                {
                    id: 2,
                    title: "UPSC Answer Writing: Day 17",
                    description: "Review of yesterday's Mains submissions.",
                    scheduled_at: new Date().toISOString(),
                    duration_minutes: 90,
                    status: "live",
                    course_id: 102,
                    course_title: "Batch 1.1",
                    attendees_count: 28
                }
            ])
        } finally {
            setLoading(false)
        }
    }

    const fetchCourses = async () => {
        try {
            const response = await axios.get("/api/v1/courses/my-courses")
            if (response.data.length > 0) setSelectedCourseId(response.data[0].id)
        } catch (error) {
            setSelectedCourseId(101)
        }
    }

    const handleStartClass = (id: number) => {
        router.push(`/teacher/lms/live-classes/${id}/console`)
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Live Classes</h1>
                    <p className="text-gray-600">Schedule and manage your interactive sessions</p>
                </div>
                <Dialog open={isSchedulerOpen} onOpenChange={setIsSchedulerOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Schedule Session
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        {selectedCourseId && (
                            <LiveClassScheduler
                                courseId={selectedCourseId}
                                onSuccess={() => { setIsSchedulerOpen(false); fetchClasses(); }}
                                onCancel={() => setIsSchedulerOpen(false)}
                            />
                        )}
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Upcoming</p>
                                <p className="text-2xl font-bold">{classes.filter(c => c.status === "scheduled").length}</p>
                            </div>
                            <Calendar className="w-8 h-8 text-blue-500 opacity-20" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Engagement (Avg)</p>
                                <p className="text-2xl font-bold">84%</p>
                            </div>
                            <Users className="w-8 h-8 text-emerald-500 opacity-20" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Status</p>
                                <p className="text-lg font-bold text-red-600 animate-pulse">1 LIVE NOW</p>
                            </div>
                            <Video className="w-8 h-8 text-red-500 opacity-20" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                {classes.map((liveClass) => (
                    <Card key={liveClass.id} className="hover:border-emerald-500/50 transition-colors">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant={liveClass.status === 'live' ? 'destructive' : 'secondary'} className={liveClass.status === 'live' ? 'animate-pulse' : ''}>
                                            {liveClass.status.toUpperCase()}
                                        </Badge>
                                        <h3 className="text-xl font-bold">{liveClass.title}</h3>
                                    </div>
                                    <p className="text-gray-500 mb-4">{liveClass.description}</p>
                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(liveClass.scheduled_at).toLocaleDateString()}</span>
                                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {new Date(liveClass.scheduled_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {liveClass.attendees_count} Enrolled</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button
                                        onClick={() => handleStartClass(liveClass.id)}
                                        className={liveClass.status === 'live' ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'}
                                    >
                                        {liveClass.status === 'live' ? 'Open Cockpit' : 'Start Session'}
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button></DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><Edit className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600"><Trash2 className="w-4 h-4 mr-2" /> Cancel</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}