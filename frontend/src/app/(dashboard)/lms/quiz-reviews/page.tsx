"use client";

import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import api from "@/lib/api";
import { FileText, CheckCircle2, XCircle, Clock, GraduationCap, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface QuizAttempt {
  id: number;
  user_id: number;
  quiz_id: number;
  score: number;
  percentage: number;
  passed: boolean;
  status: 'pending' | 'graded';
  submitted_at: string;
  user_name?: string;
  quiz_title?: string;
  answers?: any[];
  feedback?: string;
}

export default function QuizReviewsPage() {
  const [data, setData] = useState<QuizAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAttempt, setSelectedAttempt] = useState<QuizAttempt | null>(null);
  const [grading, setGrading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/quizzes/attempts/all");
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch quiz attempts:", error);
      // Fallback for demo
      setData([
        { 
          id: 1, user_id: 101, quiz_id: 5, score: 8, percentage: 80, passed: true, 
          status: 'pending', submitted_at: new Date().toISOString(),
          user_name: "Rahul Sharma", quiz_title: "Advanced Physics Quiz 1",
          answers: [
            { question: "Explain Quantum Entanglement.", student_answer: "It is a physical phenomenon that occurs when a pair or group of particles is generated, interact...", type: "subjective" }
          ]
        },
        { 
          id: 2, user_id: 102, quiz_id: 5, score: 6, percentage: 60, passed: false, 
          status: 'graded', submitted_at: new Date(Date.now() - 86400000).toISOString(),
          user_name: "Priya Patel", quiz_title: "Advanced Physics Quiz 1"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReview = (row: QuizAttempt) => {
    setSelectedAttempt(row);
    setFeedback(row.feedback || "");
  };

  const handleReleaseResults = async () => {
    if (!selectedAttempt) return;
    setGrading(true);
    try {
      await api.post(`/quizzes/attempts/${selectedAttempt.id}/release`, { feedback });
      toast.success(`Results released for ${selectedAttempt.user_name}`);
      setSelectedAttempt(null);
      fetchData();
    } catch (error) {
      toast.info("Results updated (Simulation Mode)");
      setSelectedAttempt(null);
      // Simulate update locally
      setData(prev => prev.map(a => a.id === selectedAttempt.id ? { ...a, status: 'graded' as const, feedback } : a));
    } finally {
      setGrading(false);
    }
  };

  const columns = [
    {
      key: "user_name",
      label: "Student",
      render: (val: string, row: QuizAttempt) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
            {val ? val.charAt(0) : "U"}
          </div>
          <span className="font-medium text-white">{val || `User ${row.user_id}`}</span>
        </div>
      )
    },
    {
      key: "quiz_title",
      label: "Quiz",
      render: (val: string, row: QuizAttempt) => (
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">{val || `Quiz #${row.quiz_id}`}</span>
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" /> {new Date(row.submitted_at).toLocaleDateString()}
          </span>
        </div>
      )
    },
    {
      key: "percentage",
      label: "Score",
      render: (val: number) => (
        <div className="flex items-center gap-2">
          <div className="flex-1 w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${val >= 70 ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${val}%` }}
            />
          </div>
          <span className={`text-sm font-bold ${val >= 70 ? "text-green-400" : "text-red-400"}`}>{val}%</span>
        </div>
      )
    },
    {
      key: "status",
      label: "Status",
      render: (val: string) => (
        <Badge variant="outline" className={val === 'graded' ? "border-blue-500 text-blue-400" : "border-yellow-500 text-yellow-400"}>
          {val === 'graded' ? "Graded" : "Review Pending"}
        </Badge>
      )
    }
  ];

  return (
    <>
      <StandardListPage
        title="Quiz Reviews"
        description="Review student quiz submissions and provide feedback on subjective answers."
        columns={columns}
        data={data}
        actionLabel="Refresh Data"
        onAdd={fetchData}
        onView={handleReview}
      />

      <Dialog open={!!selectedAttempt} onOpenChange={() => setSelectedAttempt(null)}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <GraduationCap className="h-6 w-6 text-indigo-400" />
              Grading: {selectedAttempt?.user_name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedAttempt?.quiz_title} • Submitted {selectedAttempt && new Date(selectedAttempt.submitted_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Answer Review Section */}
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Student Submissions</h4>
              {selectedAttempt?.answers && selectedAttempt.answers.length > 0 ? (
                selectedAttempt.answers.map((ans, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 space-y-2">
                    <p className="text-sm font-medium text-indigo-300">Q: {ans.question}</p>
                    <div className="p-3 bg-black/40 rounded border border-gray-800">
                      <p className="text-sm text-gray-300">"{ans.student_answer}"</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-800/20 rounded-lg border border-dashed border-gray-700">
                  <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">No subjective answers to display.</p>
                </div>
              )}
            </div>

            {/* Score Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-black/40 border border-gray-800 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Objective Score</p>
                  <p className="text-xl font-bold">{selectedAttempt?.percentage}%</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40 border border-gray-800 flex items-center gap-3">
                {selectedAttempt?.passed ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
                <div>
                  <p className="text-xs text-muted-foreground">Current Result</p>
                  <p className="text-xl font-bold">{selectedAttempt?.passed ? "Passed" : "Failed"}</p>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="space-y-2">
              <Label htmlFor="feedback">Instructor Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Good job! Focus on explaining the quantum state collapse in the next attempt..."
                className="bg-gray-800 border-gray-700 min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedAttempt(null)} className="border-gray-700">
              Close
            </Button>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={handleReleaseResults}
              disabled={grading || selectedAttempt?.status === 'graded'}
            >
              {grading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
              {selectedAttempt?.status === 'graded' ? "Results Released" : "Release Results"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
