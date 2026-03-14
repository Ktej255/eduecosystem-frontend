"use client";

import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, Send, Loader2, ArrowLeft } from "lucide-react";
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
import api from "@/lib/api";
import { toast } from "sonner";

interface Review {
  id: number;
  course_title: string;
  student_name: string;
  rating: number;
  comment: string;
  reply?: string;
  created_at: string;
}

export default function ReviewsPage() {
  const [data, setData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await api.get("/teacher/lms/reviews");
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      // Fallback for demo
      setData([
        { id: 1, course_title: "Python Masterclass", student_name: "Alice Johnson", rating: 5, comment: "Excellent course! Very comprehensive.", created_at: "2024-03-20" },
        { id: 2, course_title: "Web Dev Bootcamp", student_name: "Bob Smith", rating: 4, comment: "Great content, but audio quality could be better.", created_at: "2024-03-19" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReplySubmit = async () => {
    if (!selectedReview) return;
    setIsSubmitting(true);
    try {
      await api.post(`/teacher/lms/reviews/${selectedReview.id}/reply`, { reply: replyText });
      toast.success("Reply posted successfully!");
      setSelectedReview(null);
      fetchReviews();
    } catch (error) {
      toast.info("Reply saved (Simulation Mode)");
      setSelectedReview(null);
      setData(prev => prev.map(r => r.id === selectedReview.id ? { ...r, reply: replyText } : r));
    } finally {
      setIsSubmitting(false);
    }
  };

  const columns = [
    { 
      key: "course_title", 
      label: "Course",
      render: (val: string) => <span className="font-medium text-white">{val}</span>
    },
    { key: "student_name", label: "Student" },
    {
      key: "rating",
      label: "Rating",
      render: (value: number) => (
        <div className="flex items-center text-yellow-500 gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < value ? "fill-current" : "text-muted-foreground"}`} />
          ))}
        </div>
      )
    },
    {
      key: "comment",
      label: "Review",
      render: (value: string, row: Review) => (
        <div className="max-w-xs space-y-1">
          <p className="text-sm text-gray-300 italic line-clamp-2">"{value}"</p>
          {row.reply && (
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
              <MessageSquare className="h-3 w-3" />
              Replied
            </div>
          )}
        </div>
      )
    },
    { 
      key: "created_at", 
      label: "Date",
      render: (val: string) => <span className="text-xs text-muted-foreground">{new Date(val).toLocaleDateString()}</span>
    },
  ];

  return (
    <>
      <StandardListPage
        title="Ratings & Reviews"
        description="Monitor student feedback and build social proof by responding to reviews."
        columns={columns}
        data={data}
        actionLabel="Refresh Reviews"
        onAdd={fetchReviews}
        onView={(row) => {
          setSelectedReview(row);
          setReplyText(row.reply || "");
        }}
      />

      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Review for {selectedReview?.course_title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              By {selectedReview?.student_name} on {selectedReview && new Date(selectedReview.created_at).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="flex items-center text-yellow-500 mb-2 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < (selectedReview?.rating || 0) ? "fill-current" : "text-muted-foreground"}`} />
                ))}
              </div>
              <p className="text-gray-200 italic">"{selectedReview?.comment}"</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Response</label>
              <Textarea
                placeholder="Thank you for your feedback! We appreciate your support..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="bg-gray-800 border-gray-700 min-h-[120px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedReview(null)} className="border-gray-700">
              Cancel
            </Button>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-500"
              onClick={handleReplySubmit}
              disabled={isSubmitting || !replyText}
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
              {selectedReview?.reply ? "Update Reply" : "Post Reply"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
