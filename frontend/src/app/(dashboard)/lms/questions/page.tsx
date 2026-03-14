"use client";

import { useEffect, useState, useRef } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Upload, FileText, Loader2, Database } from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

export default function QuestionBankPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Create Bank Dialog
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newBankTitle, setNewBankTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDifficulty, setNewDifficulty] = useState("medium");

  const fetchData = async () => {
    try {
      const response = await api.get("/question-banks/");
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch question banks:", error);
      toast.error("Failed to load question banks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateBank = async () => {
    if (!newBankTitle.trim()) { toast.error("Bank name is required."); return; }
    setIsCreating(true);
    try {
      await api.post("/question-banks/", {
        title: newBankTitle,
        category: newCategory || "General",
        difficulty_level: newDifficulty,
        question_count: 0,
      });
      toast.success(`Question Bank "${newBankTitle}" created!`);
      setIsCreateOpen(false);
      setNewBankTitle(""); setNewCategory(""); setNewDifficulty("medium");
      fetchData();
    } catch {
      toast.error("Failed to create bank.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleBulkUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedBankId) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      toast.loading("Uploading questions...", { id: "bulk-upload" });
      await api.post(`/teacher/lms/question-banks/${selectedBankId}/bulk-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Questions uploaded successfully", { id: "bulk-upload" });
      fetchData(); // Refresh to see updated counts
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload questions", { id: "bulk-upload" });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const columns = [
    { key: "title", label: "Bank Name", render: (val: string) => <span className="font-medium text-white">{val}</span> },
    { key: "category", label: "Category" },
    { key: "question_count", label: "Questions", render: (val: number) => <span className="text-muted-foreground">{val}</span> },
    {
      key: "difficulty_level",
      label: "Difficulty",
      render: (value: string) => (
        <Badge variant="outline" className={
          value === "hard" ? "border-red-500/50 text-red-500 bg-red-500/10" :
            value === "medium" ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10" :
              "border-green-500/50 text-green-500 bg-green-500/10"
        }>
          {value?.charAt(0).toUpperCase() + value?.slice(1)}
        </Badge>
      )
    },
    {
        key: "id",
        label: "Bulk",
        render: (id: number) => (
            <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBankId(id);
                    fileInputRef.current?.click();
                }}
            >
                <Upload className="h-4 w-4 mr-1" /> Upload CSV
            </Button>
        )
    }
  ];

  return (
    <>
        <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept=".csv" 
            onChange={handleBulkUpload}
        />
        <StandardListPage
            title="Question Bank"
            description="Create and manage pools of questions for quizzes. Use CSV upload to add questions in bulk."
            columns={columns}
            data={data}
            actionLabel="Create Bank"
            onAdd={() => setIsCreateOpen(true)}
            onEdit={(row) => console.log("Edit", row)}
            onDelete={(row) => console.log("Delete", row)}
        />
        <div className="max-w-7xl mx-auto px-8 pb-8">
            <div className="p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-sm text-blue-300/80">
                    <p className="font-medium text-blue-300 mb-1">CSV Upload Instructions:</p>
                    <p>Ensure your CSV has the following headers: <code className="text-blue-400">text, type, points, difficulty, options, correct_answer, explanation, tags</code></p>
                    <p className="mt-1">Example options (JSON): <code className="text-blue-400">["Option A", "Option B", "Option C", "Option D"]</code></p>
                </div>
            </div>
        </div>

        {/* Create Bank Dialog */}
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-purple-500" /> Create Question Bank
                    </DialogTitle>
                    <DialogDescription>
                        Create a new bank to organize your questions.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Bank Name</Label>
                        <Input value={newBankTitle} onChange={(e) => setNewBankTitle(e.target.value)} placeholder="e.g. Polity — Fundamental Rights" />
                    </div>
                    <div className="space-y-2">
                        <Label>Category</Label>
                        <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="e.g. Indian Polity" />
                    </div>
                    <div className="space-y-2">
                        <Label>Difficulty Level</Label>
                        <Select value={newDifficulty} onValueChange={setNewDifficulty}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleCreateBank} disabled={isCreating}>
                        {isCreating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Create Bank
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
  );
}
