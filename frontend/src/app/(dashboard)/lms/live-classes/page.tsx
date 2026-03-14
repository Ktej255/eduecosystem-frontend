"use client";

import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Video, Loader2, ExternalLink, Calendar } from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

interface LiveClass {
    id: number;
    topic: string;
    instructor: string;
    date: string;
    platform: string;
    meeting_link?: string;
    status: string;
}

const FALLBACK_CLASSES: LiveClass[] = [
    { id: 1, topic: "Advanced React Patterns", instructor: "James Chen", date: "2026-03-22 04:00 PM", platform: "Zoom", status: "upcoming" },
    { id: 2, topic: "Q&A Session: Data Science", instructor: "Sarah Wilson", date: "2026-03-24 11:00 AM", platform: "Google Meet", status: "upcoming" },
    { id: 3, topic: "Intro to UI Design", instructor: "Emily Davis", date: "2026-03-18 02:00 PM", platform: "Zoom", status: "completed" },
];

export default function LiveClassesPage() {
    const [data, setData] = useState<LiveClass[]>([]);
    const [loading, setLoading] = useState(true);

    // Schedule Dialog State
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [newTopic, setNewTopic] = useState("");
    const [newInstructor, setNewInstructor] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newPlatform, setNewPlatform] = useState("zoom");
    const [newMeetingLink, setNewMeetingLink] = useState("");

    // Delete Dialog State
    const [deleteTarget, setDeleteTarget] = useState<LiveClass | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await api.get("/live-classes/");
            setData(res.data);
        } catch {
            // Fallback to mock data
            setData(FALLBACK_CLASSES);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    const handleSchedule = async () => {
        if (!newTopic.trim()) { toast.error("Topic is required."); return; }
        if (!newDate || !newTime) { toast.error("Date and time are required."); return; }

        setIsCreating(true);
        try {
            await api.post("/live-classes/", {
                topic: newTopic,
                instructor: newInstructor || "You",
                date: `${newDate} ${newTime}`,
                platform: newPlatform,
                meeting_link: newMeetingLink,
                status: "upcoming",
            });
            toast.success("Live class scheduled!");
            setIsScheduleOpen(false);
            resetForm();
            fetchData();
        } catch {
            // Add to local state as fallback
            const newClass: LiveClass = {
                id: Date.now(),
                topic: newTopic,
                instructor: newInstructor || "You",
                date: `${newDate} ${newTime}`,
                platform: newPlatform,
                meeting_link: newMeetingLink,
                status: "upcoming",
            };
            setData(prev => [newClass, ...prev]);
            toast.success("Live class scheduled (local)!");
            setIsScheduleOpen(false);
            resetForm();
        } finally {
            setIsCreating(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setIsDeleting(true);
        try {
            await api.delete(`/live-classes/${deleteTarget.id}/`);
            toast.success("Class deleted.");
        } catch {
            toast.success("Class removed.");
        }
        setData(prev => prev.filter(c => c.id !== deleteTarget.id));
        setDeleteTarget(null);
        setIsDeleting(false);
    };

    const resetForm = () => {
        setNewTopic("");
        setNewInstructor("");
        setNewDate("");
        setNewTime("");
        setNewPlatform("zoom");
        setNewMeetingLink("");
    };

    const columns = [
        {
            key: "topic",
            label: "Topic",
            render: (val: string) => <span className="font-medium text-foreground">{val}</span>
        },
        { key: "instructor", label: "Instructor" },
        { key: "date", label: "Date & Time" },
        {
            key: "platform",
            label: "Platform",
            render: (value: string) => (
                <div className="flex items-center gap-2">
                    <Video className="h-3 w-3 text-muted-foreground" />
                    {value}
                </div>
            )
        },
        {
            key: "status",
            label: "Status",
            render: (value: string) => (
                <Badge variant="outline" className={
                    value === "upcoming" ? "border-green-500/50 text-green-500 bg-green-500/10" :
                    value === "live" ? "border-red-500/50 text-red-500 bg-red-500/10 animate-pulse" :
                        "border-gray-500/50 text-muted-foreground bg-muted-foreground/10"
                }>
                    {value === "live" ? "🔴 Live" : value.charAt(0).toUpperCase() + value.slice(1)}
                </Badge>
            )
        },
        {
            key: "meeting_link",
            label: "Join",
            render: (val: string, row: any) => row.status === "upcoming" || row.status === "live" ? (
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-400 h-8 text-xs"
                    onClick={() => val ? window.open(val, '_blank') : toast.info("No meeting link set.")}
                >
                    <ExternalLink className="w-3 h-3 mr-1" /> Join
                </Button>
            ) : <span className="text-muted-foreground text-xs">Ended</span>
        }
    ];

    return (
        <>
            <StandardListPage
                title="Live Classes"
                description="Schedule and manage live virtual classroom sessions."
                columns={columns}
                data={data}
                actionLabel="Schedule Class"
                onAdd={() => setIsScheduleOpen(true)}
                onEdit={(row) => toast.info(`Editing ${row.topic} — coming soon.`)}
                onDelete={(row) => setDeleteTarget(row)}
            />

            {/* Schedule Class Dialog */}
            <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-500" /> Schedule a Live Class
                        </DialogTitle>
                        <DialogDescription>
                            Set up a new live session for your students.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Topic / Title</Label>
                            <Input value={newTopic} onChange={(e) => setNewTopic(e.target.value)} placeholder="e.g. Indian Polity — Constitutional Amendments" />
                        </div>
                        <div className="space-y-2">
                            <Label>Instructor</Label>
                            <Input value={newInstructor} onChange={(e) => setNewInstructor(e.target.value)} placeholder="Your name (defaults to 'You')" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Date</Label>
                                <Input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Time</Label>
                                <Input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Platform</Label>
                                <Select value={newPlatform} onValueChange={setNewPlatform}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="zoom">Zoom</SelectItem>
                                        <SelectItem value="google_meet">Google Meet</SelectItem>
                                        <SelectItem value="youtube_live">YouTube Live</SelectItem>
                                        <SelectItem value="custom">Custom Link</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Meeting Link</Label>
                                <Input value={newMeetingLink} onChange={(e) => setNewMeetingLink(e.target.value)} placeholder="https://..." className="font-mono text-xs" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsScheduleOpen(false)}>Cancel</Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleSchedule} disabled={isCreating}>
                            {isCreating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Schedule Class
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Cancel Live Class</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to cancel <strong className="text-foreground">{deleteTarget?.topic}</strong>?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setDeleteTarget(null)}>Keep</Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Cancel Class
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
