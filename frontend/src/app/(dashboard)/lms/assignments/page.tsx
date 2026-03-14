"use client";

import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Loader2, FileEdit, Calendar } from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

export default function AssignmentsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Create Dialog
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCourseId, setNewCourseId] = useState("");
    const [newDueDate, setNewDueDate] = useState("");
    const [newMaxScore, setNewMaxScore] = useState("100");

    // Delete Dialog
    const [deleteTarget, setDeleteTarget] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get("/assignments/");
            setData(response.data);
        } catch (error) {
            console.error("Failed to fetch assignments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    const handleCreate = async () => {
        if (!newTitle.trim()) { toast.error("Assignment title is required."); return; }

        setIsCreating(true);
        try {
            await api.post("/assignments/", {
                title: newTitle,
                description: newDescription,
                course_id: newCourseId ? parseInt(newCourseId) : null,
                due_date: newDueDate || null,
                max_score: parseInt(newMaxScore) || 100,
                status: "draft",
            });
            toast.success(`Assignment "${newTitle}" created!`);
            setIsCreateOpen(false);
            resetForm();
            fetchData();
        } catch {
            toast.error("Failed to create assignment.");
        } finally {
            setIsCreating(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setIsDeleting(true);
        try {
            await api.delete(`/assignments/${deleteTarget.id}/`);
            toast.success("Assignment deleted.");
            setDeleteTarget(null);
            fetchData();
        } catch {
            toast.error("Failed to delete assignment.");
        } finally {
            setIsDeleting(false);
        }
    };

    const resetForm = () => {
        setNewTitle("");
        setNewDescription("");
        setNewCourseId("");
        setNewDueDate("");
        setNewMaxScore("100");
    };

    const columns = [
        {
            key: "title",
            label: "Title",
            render: (val: string) => <span className="font-medium text-foreground">{val}</span>
        },
        {
            key: "course_id",
            label: "Course",
            render: (val: number) => <span className="text-muted-foreground">Course #{val}</span>
        },
        {
            key: "due_date",
            label: "Due Date",
            render: (val: string) => (
                <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {val ? new Date(val).toLocaleDateString() : "No due date"}
                </span>
            )
        },
        {
            key: "max_score",
            label: "Max Score",
            render: (val: number) => <span className="text-muted-foreground font-mono">{val || "—"}</span>
        },
        {
            key: "status",
            label: "Status",
            render: (val: string) => (
                <Badge variant="outline" className={
                    val === "published" ? "border-green-500/50 text-green-500 bg-green-500/10" :
                    val === "graded" ? "border-blue-500/50 text-blue-500 bg-blue-500/10" :
                        "border-yellow-500/50 text-yellow-500 bg-yellow-500/10"
                }>
                    {val || "Draft"}
                </Badge>
            )
        }
    ];

    return (
        <>
            <StandardListPage
                title="Assignments"
                description="Create, manage, and grade course assignments."
                columns={columns}
                data={data}
                actionLabel="Create Assignment"
                onAdd={() => setIsCreateOpen(true)}
                onDelete={(row) => setDeleteTarget(row)}
            />

            {/* Create Assignment Dialog */}
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <FileEdit className="w-5 h-5 text-blue-500" /> Create Assignment
                        </DialogTitle>
                        <DialogDescription>
                            Set up a new assignment for your course.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Title</Label>
                            <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="e.g. Essay on Indian Constitution" />
                        </div>
                        <div className="space-y-2">
                            <Label>Description / Instructions</Label>
                            <Textarea
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                placeholder="Describe the assignment requirements, submission format, etc."
                                className="resize-none min-h-[80px]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Course ID</Label>
                                <Input type="number" value={newCourseId} onChange={(e) => setNewCourseId(e.target.value)} placeholder="e.g. 1" />
                            </div>
                            <div className="space-y-2">
                                <Label>Max Score</Label>
                                <Input type="number" min={1} value={newMaxScore} onChange={(e) => setNewMaxScore(e.target.value)} placeholder="100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Due Date</Label>
                            <Input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCreate} disabled={isCreating}>
                            {isCreating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Create Assignment
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Delete Assignment</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete <strong className="text-foreground">{deleteTarget?.title}</strong>? Student submissions will also be removed.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setDeleteTarget(null)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
