"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  MessageSquare,
  ArrowLeft,
  Lock,
  Pin,
  Sparkles,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface Post {
  id: number;
  content: string;
  author_name: string;
  author_role: string;
  created_at: string;
  is_answer: boolean;
  is_edited: boolean;
  upvotes: number;
  downvotes: number;
  user_vote: string | null;
  replies: Post[];
}

interface Thread {
  id: number;
  title: string;
  content: string;
  is_pinned: boolean;
  is_featured: boolean;
  is_locked: boolean;
  is_resolved: boolean;
  view_count: number;
  reply_count: number;
  upvotes: number;
  user_vote: string | null;
  created_at: string;
  posts: Post[];
}

export default function ThreadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;
  const threadId = params.threadId as string;

  const [thread, setThread] = useState<Thread | null>(null);
  const [newPost, setNewPost] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [generatingDraft, setGeneratingDraft] = useState(false);

  useEffect(() => {
    fetchThread();
  }, [threadId]);

  const fetchThread = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/discussions/threads/${threadId}`);
      setThread(response.data);
    } catch (error) {
      console.error("Error fetching thread:", error);
      toast.error("Failed to load thread");
    } finally {
      setLoading(false);
    }
  };

  const handleAIDraft = async () => {
    try {
      setGeneratingDraft(true);
      toast.loading("Generating AI response...", { id: "ai-draft" });
      const response = await api.post(`/discussions/threads/${threadId}/ai-draft-reply`);
      setNewPost(response.data.draft);
      toast.success("AI draft generated!", { id: "ai-draft" });
    } catch (error) {
      console.error("AI Draft error:", error);
      toast.error("Failed to generate AI draft", { id: "ai-draft" });
    } finally {
      setGeneratingDraft(false);
    }
  };

  const handleFeature = async () => {
    try {
      await api.post(`/discussions/threads/${threadId}/feature`);
      toast.success(thread?.is_featured ? "Removed from featured" : "Marked as featured");
      fetchThread();
    } catch (error) {
      toast.error("Failed to update featured status");
    }
  };

  const handleThreadVote = async () => {
    try {
      await api.post(`/discussions/threads/${threadId}/vote`, { vote_type: "upvote" });
      fetchThread();
    } catch (error) {
      toast.error("Failed to upvote thread");
    }
  };

  const handlePostReply = async () => {
    if (!newPost.trim()) return;

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/discussions/posts`,
        {
          thread_id: parseInt(threadId),
          content: newPost,
          parent_post_id: replyingTo,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setNewPost("");
      setReplyingTo(null);
      toast.success("Reply posted!");
      fetchThread();
    } catch (error) {
      console.error("Error posting reply:", error);
      toast.error("Failed to post reply");
    }
  };

  const handleVote = async (postId: number, voteType: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/discussions/posts/${postId}/vote`,
        { vote_type: voteType },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      fetchThread();
    } catch (error) {
      console.error("Error voting:", error);
      toast.error("Failed to vote");
    }
  };

  const handleMarkAsAnswer = async (postId: number) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/discussions/posts/${postId}/mark-answer`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      toast.success("Marked as accepted answer!");
      fetchThread();
    } catch (error) {
      console.error("Error marking answer:", error);
      toast.error("Failed to mark as answer");
    }
  };

  const renderPost = (post: Post, isNested = false) => (
    <div key={post.id} className={`${isNested ? "ml-12 mt-4" : "mb-6"}`}>
      <Card className={post.is_answer ? "border-2 border-green-500" : ""}>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar>
              <AvatarFallback>{post.author_name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">{post.author_name}</span>
                {post.author_role === "instructor" && (
                  <Badge variant="secondary">Instructor</Badge>
                )}
                {post.is_answer && (
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Accepted Answer
                  </Badge>
                )}
                <span className="text-sm text-muted-foreground">
                  {new Date(post.created_at).toLocaleString()}
                </span>
                {post.is_edited && (
                  <span className="text-xs text-muted-foreground">
                    (edited)
                  </span>
                )}
              </div>
              <p className="whitespace-pre-wrap mb-4">{post.content}</p>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={
                      post.user_vote === "upvote" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleVote(post.id, "upvote")}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {post.upvotes}
                  </Button>
                  <Button
                    variant={
                      post.user_vote === "downvote" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleVote(post.id, "downvote")}
                  >
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    {post.downvotes}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setReplyingTo(post.id)}
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Reply
                </Button>
                {!post.is_answer && !isNested && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMarkAsAnswer(post.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Mark as Answer
                  </Button>
                )}
              </div>

              {/* Reply Form */}
              {replyingTo === post.id && (
                <div className="mt-4">
                  <Textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write your reply..."
                    className="mb-2"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handlePostReply}>Post Reply</Button>
                    <Button
                      variant="outline"
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Nested Replies */}
              {post.replies && post.replies.length > 0 && (
                <div className="mt-4">
                  {post.replies.map((reply) => renderPost(reply, true))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-center">
            Loading thread...
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!thread) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <p>Thread not found</p>
            <Button onClick={() => router.back()} className="mt-4">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Button
        variant="ghost"
        onClick={() => router.push(`/lms/courses/${courseId}/discussions`)}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Discussions
      </Button>

      {/* Thread Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                {thread.is_pinned && <Pin className="w-5 h-5 text-blue-500" />}
                {thread.is_featured && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                {thread.is_locked && <Lock className="w-5 h-5 text-gray-500" />}
                {thread.is_resolved && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </div>
              <h1 className="text-3xl font-bold">{thread.title}</h1>
              <p className="text-muted-foreground">
                {thread.view_count} views • {thread.reply_count} replies •{" "}
                {new Date(thread.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={thread.user_vote === "upvote" ? "default" : "outline"}
                size="sm"
                onClick={handleThreadVote}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Upvote {thread.upvotes > 0 && `(${thread.upvotes})`}
              </Button>
              <Button
                variant={thread.is_featured ? "default" : "outline"}
                size="sm"
                className={thread.is_featured ? "bg-yellow-600 hover:bg-yellow-500" : ""}
                onClick={handleFeature}
              >
                <Star className={`w-4 h-4 mr-2 ${thread.is_featured ? "fill-white" : ""}`} />
                {thread.is_featured ? "Featured" : "Feature"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{thread.content}</p>
        </CardContent>
      </Card>

      {/* Posts */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Replies</h2>
        {thread.posts && thread.posts.length > 0 ? (
          thread.posts.map((post) => renderPost(post))
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              No replies yet. Be the first to respond!
            </CardContent>
          </Card>
        )}
      </div>

      {/* New Post Form */}
      {!thread.is_locked && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold">Post a Reply</h3>
            <Button
              variant="outline"
              size="sm"
              className="text-purple-500 border-purple-500/20 hover:bg-purple-500/10"
              onClick={handleAIDraft}
              disabled={generatingDraft}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {generatingDraft ? "Drafting..." : "AI Draft Response"}
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your thoughts..."
              className="mb-4"
              rows={6}
            />
            <Button onClick={handlePostReply} disabled={!newPost.trim()}>
              Post Reply
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
