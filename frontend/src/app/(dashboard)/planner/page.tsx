"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Plus } from "lucide-react"
import api from "@/lib/api"

interface Task {
    id: number
    title: string
    description: string
    task_type: string
    duration_minutes: number
    is_completed: boolean
    scheduled_date: string
}

export default function PlannerPage() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const response = await api.get("/tasks/")
            setTasks(response.data)
        } catch (error) {
            console.error("Failed to fetch tasks", error)
        } finally {
            setLoading(false)
        }
    }

    const toggleTask = async (id: number, currentStatus: boolean) => {
        try {
            // Optimistic update
            setTasks(tasks.map(t => t.id === id ? { ...t, is_completed: !currentStatus } : t))

            // API call (mocked for now as update endpoint needs implementation detail)
            // await api.put(`/tasks/${id}`, { is_completed: !currentStatus })
        } catch (error) {
            console.error("Failed to update task", error)
        }
    }

    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Daily Planner</h1>
                    <p className="text-gray-400 mt-2">Your AI-optimized schedule for today</p>
                </div>
                <div className="flex space-x-2">
                    <Button
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={async () => {
                            try {
                                const res = await api.post("/tasks/reschedule")
                                alert(res.data.msg)
                                fetchTasks()
                            } catch (e) {
                                console.error(e)
                            }
                        }}
                    >
                        ✨ AI Auto-Schedule
                    </Button>
                    <Button className="bg-cyan-600 hover:bg-cyan-500">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Task
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Schedule */}
                <div className="lg:col-span-2 space-y-4">
                    {loading ? (
                        <div className="text-white">Loading schedule...</div>
                    ) : tasks.length === 0 ? (
                        <div className="p-8 border border-dashed border-gray-800 rounded-xl text-center text-gray-500">
                            No tasks scheduled for today.
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${task.is_completed
                                    ? "bg-gray-900/50 border-gray-800 opacity-50"
                                    : "bg-gray-900 border-gray-700 hover:border-cyan-500/50"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleTask(task.id, task.is_completed)}
                                    className={`flex-shrink-0 transition-colors ${task.is_completed ? "text-green-500" : "text-gray-500 hover:text-cyan-400"
                                        }`}
                                >
                                    {task.is_completed ? (
                                        <CheckCircle2 className="h-6 w-6" />
                                    ) : (
                                        <Circle className="h-6 w-6" />
                                    )}
                                </button>

                                <div className="flex-1">
                                    <h3 className={`font-medium ${task.is_completed ? "text-gray-500 line-through" : "text-white"}`}>
                                        {task.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {task.duration_minutes} mins • {task.task_type}
                                    </p>
                                </div>

                                <div className="text-right text-sm text-gray-500">
                                    {new Date(task.scheduled_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Side Widgets */}
                <div className="space-y-6">
                    {/* Calendar Widget Placeholder */}
                    <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                        <h3 className="font-bold text-white mb-4">Calendar</h3>
                        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-gray-500">
                            [Calendar Component]
                        </div>
                    </div>

                    {/* Progress Widget */}
                    <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                        <h3 className="font-bold text-white mb-2">Daily Progress</h3>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[45%]" />
                        </div>
                        <p className="text-right text-sm text-gray-400 mt-2">45% Completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
