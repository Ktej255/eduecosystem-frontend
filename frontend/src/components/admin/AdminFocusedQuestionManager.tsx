"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { 
    Plus, 
    Trash2, 
    ArrowLeft, 
    Save, 
    Loader2, 
    Search, 
    Filter,
    ChevronLeft,
    ChevronRight,
    Edit2,
    Check,
    X
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

const SUBJECTS = [
    "Polity",
    "Modern History",
    "Economy",
    "Environment",
    "Science & Technology",
    "Geography",
    "Ancient History",
    "Medieval History",
];

interface FocusedQuestion {
    id: number;
    subject: string;
    cluster_number: number;
    cluster_name: string;
    question_number: number;
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    explanation: string;
    topic_tag: string;
}

export default function AdminFocusedQuestionManager() {

    const router = useRouter();
    const { toast } = useToast();

    // Filters
    const [selectedSubject, setSelectedSubject] = useState<string>("Modern History");
    const [selectedCluster, setSelectedCluster] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");

    // Data
    const [questions, setQuestions] = useState<FocusedQuestion[]>([]);
    const [total, setTotal] = useState(0);
    const [skip, setSkip] = useState(0);
    const limit = 20;
    const [isLoading, setIsLoading] = useState(true);

    // Edit state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<Partial<FocusedQuestion>>({});

    const fetchQuestions = async () => {
        setIsLoading(true);
        try {
            const params: any = {
                skip,
                limit,
            };
            if (selectedSubject !== "all") params.subject = selectedSubject;
            if (selectedCluster !== "all") params.cluster_number = parseInt(selectedCluster);
            
            const res = await api.get('/admin/cms/focused-questions', { params });
            setQuestions(res.data.items);
            setTotal(res.data.total);
        } catch (error) {
            console.error("Fetch failed:", error);
            toast({
                title: "Error",
                description: "Failed to load questions.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [selectedSubject, selectedCluster, skip]);

    const handleUpdate = async (id: number) => {
        try {
            await api.patch(`/admin/cms/focused-questions/${id}`, editForm);
            setEditingId(null);
            fetchQuestions();
            toast({
                title: "Success",
                description: "Question updated successfully.",
            });
        } catch (error) {
            toast({
                title: "Update Failed",
                description: "Could not save changes.",
                variant: "destructive"
            });
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this question?")) return;
        try {
            await api.delete(`/admin/cms/focused-questions/${id}`);
            fetchQuestions();
            toast({
                title: "Deleted",
                description: "Question removed from focused bank.",
            });
        } catch (error) {
            toast({
                title: "Delete Failed",
                variant: "destructive"
            });
        }
    };

    const startEditing = (q: FocusedQuestion) => {
        setEditingId(q.id);
        setEditForm(q);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.back()}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">CMS <span className="text-indigo-600">FOCUSED BANK</span></h1>
                        <p className="text-muted-foreground text-sm">Managing Kajal's 43-Day Sprint Question Pool</p>
                    </div>
                </div>
                
                <div className="flex gap-2">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Plus className="w-4 h-4 mr-2" /> Add Question
                    </Button>
                </div>
            </div>

            {/* Filters Bar */}
            <Card className="border-border shadow-sm">
                <CardContent className="p-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex-1 min-w-[200px] relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                                placeholder="Search questions..." 
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <Label className="text-xs font-bold uppercase text-muted-foreground">Subject</Label>
                            <Select value={selectedSubject} onValueChange={(v) => { setSelectedSubject(v); setSkip(0); }}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="All Subjects" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Subjects</SelectItem>
                                    {SUBJECTS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2">
                            <Label className="text-xs font-bold uppercase text-muted-foreground">Cluster</Label>
                            <Select value={selectedCluster} onValueChange={(v) => { setSelectedCluster(v); setSkip(0); }}>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Clusters</SelectItem>
                                    {[1,2,3,4,5,6,7,8,9,10].map(n => <SelectItem key={n} value={n.toString()}>Cluster {n}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button variant="outline" size="icon" onClick={() => fetchQuestions()}>
                            <Filter className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Questions List */}
            <div className="space-y-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
                        <p className="text-muted-foreground font-medium">Fetching specialized bank...</p>
                    </div>
                ) : questions.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-slate-900 border-2 border-dashed rounded-3xl">
                        <p className="text-muted-foreground">No questions found matching your criteria.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-4">
                            {questions.map((q) => (
                                <Card key={q.id} className={`overflow-hidden transition-all ${editingId === q.id ? 'ring-2 ring-indigo-500' : 'hover:shadow-md'}`}>
                                    <CardContent className="p-0">
                                        {editingId === q.id ? (
                                            <div className="p-6 space-y-4 bg-indigo-50/30 dark:bg-indigo-900/10">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div className="space-y-2">
                                                        <Label>Question Text</Label>
                                                        <Textarea 
                                                            value={editForm.question_text} 
                                                            onChange={(e) => setEditForm({...editForm, question_text: e.target.value})}
                                                            className="min-h-[100px]"
                                                        />
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label>Option A</Label>
                                                            <Input value={editForm.option_a} onChange={(e) => setEditForm({...editForm, option_a: e.target.value})} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label>Option B</Label>
                                                            <Input value={editForm.option_b} onChange={(e) => setEditForm({...editForm, option_b: e.target.value})} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label>Option C</Label>
                                                            <Input value={editForm.option_c} onChange={(e) => setEditForm({...editForm, option_c: e.target.value})} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label>Option D</Label>
                                                            <Input value={editForm.option_d} onChange={(e) => setEditForm({...editForm, option_d: e.target.value})} />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label>Correct Answer</Label>
                                                            <Select value={editForm.correct_answer} onValueChange={(v) => setEditForm({...editForm, correct_answer: v})}>
                                                                <SelectTrigger>
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="a">A</SelectItem>
                                                                    <SelectItem value="b">B</SelectItem>
                                                                    <SelectItem value="c">C</SelectItem>
                                                                    <SelectItem value="d">D</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label>Topic Tag</Label>
                                                            <Input value={editForm.topic_tag} onChange={(e) => setEditForm({...editForm, topic_tag: e.target.value})} />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label>Explanation</Label>
                                                        <Textarea 
                                                            value={editForm.explanation} 
                                                            onChange={(e) => setEditForm({...editForm, explanation: e.target.value})}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="flex justify-end gap-2 pt-4">
                                                    <Button variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                                                    <Button className="bg-indigo-600" onClick={() => handleUpdate(q.id)}>
                                                        <Save className="w-4 h-4 mr-2" /> Save Changes
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-6">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 text-[10px] uppercase font-bold">
                                                                {q.subject}
                                                            </Badge>
                                                            <Badge variant="secondary" className="text-[10px] uppercase font-bold">
                                                                Cluster {q.cluster_number}
                                                            </Badge>
                                                            <span className="text-[10px] text-muted-foreground font-mono">#{q.id}</span>
                                                        </div>
                                                        <h3 className="text-lg font-bold leading-tight mb-4">{q.question_text}</h3>
                                                        
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
                                                            {[
                                                                { l: 'A', v: q.option_a },
                                                                { l: 'B', v: q.option_b },
                                                                { l: 'C', v: q.option_c },
                                                                { l: 'D', v: q.option_d }
                                                            ].map(opt => (
                                                                <div key={opt.l} className={`text-sm flex gap-2 ${q.correct_answer.toLowerCase() === opt.l.toLowerCase() ? 'text-indigo-600 font-bold' : 'text-muted-foreground'}`}>
                                                                    <span>{opt.l}.</span>
                                                                    <span>{opt.v}</span>
                                                                    {q.correct_answer.toLowerCase() === opt.l.toLowerCase() && <Check className="w-3 h-3 mt-1" />}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {q.explanation && (
                                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                                                                <p className="text-xs text-muted-foreground italic leading-relaxed">
                                                                    <span className="font-bold uppercase not-italic mr-2">Explanation:</span>
                                                                    {q.explanation}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col gap-2">
                                                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => startEditing(q)}>
                                                            <Edit2 className="w-4 h-4" />
                                                        </Button>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(q.id)}>
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between py-4">
                            <p className="text-sm text-muted-foreground">
                                Showing <span className="font-bold text-foreground">{skip + 1}</span> to <span className="font-bold text-foreground">{Math.min(skip + limit, total)}</span> of <span className="font-bold text-foreground">{total}</span> questions
                            </p>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    disabled={skip === 0}
                                    onClick={() => setSkip(Math.max(0, skip - limit))}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                                </Button>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    disabled={skip + limit >= total}
                                    onClick={() => setSkip(skip + limit)}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
